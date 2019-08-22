import React, { Component } from "react";
import Sidemenu from "../../common/Sidemenu";
import { Button, Input, message,Modal } from "antd";
import { fetchData, submitData } from "../../../services/httpService";
import { showNotification, qqtjm } from "../../../services/utilsService";
import eventProxy from '../../common/eventProxy';
const { confirm } = Modal;
class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: "",
      allow_trans:false,
      amount: "100",
      bankcards: [],
      available: "0.00",
      username: "",
      tranfertype: "0",
      _token: "",
      card_number: "",
      question_id: "",
      transfer_loading: false,
      answer: ""
    };
    this.init_request = "";
    this.submit_request = "";
    message.config({
      top: '45%',
      duration:2
    });
  }

  getQuestion() {
    let self  = this;
    this.init_request = fetchData("/mobile-users/get-safe-question").subscribe(
      res => {
        if (!res) {
          showNotification("warning", "温馨提示", "非法请求");
          return;
        }
        if (res.data.isSuccess === 1) {
          this.setState({
            question_id: Object.keys(res.data.data)[0],
            question: Object.values(res.data.data)[0]
          });
          return;
        }
        confirm({
          title: res.data.data.info,
          okText: "去设置",
          cancelText: "取消",
          onOk() {
            self.props.history.push("/main/user");
          },
          onCancel() {
            console.log("Cancel");
          }
        });
      },
      error => {
        message.error("/mobile-users/get-safe-question=>" + error.message);
      }
    );
  }

  componentDidMount() {
    let username = this.props.location.search.split('&username=')[1]||'';
    this.setState({
      username:username
    });
    this.init_request = fetchData("/user-transfers/transfer-to-sub").subscribe(
      res => {
        if (!res) {
          message.warning("非法请求");
          return;
        }
        if (res.data.isSuccess === 1) {
          this.getQuestion();
          this.setState({
            _token: res.data.data.token,
            allow_trans:true,
            available: Number(res.data.data.available).toFixed(3)
          });
          
          return;
        }
        if (res.data.errno === 1004) {
          this.props.history.push("/login");
          return;
        }
        message.warning(res.data.data.info || res.data.Msg || res.data.type);
      },
      error => {
        message.error("user-transfers/transfer-to-sub=>" + error.message);
      }
    );
  }
  componentWillUnmount() {
    message.destroy();
    this.init_request && this.init_request.unsubscribe();
    this.submit_request && this.submit_request.unsubscribe();
  }

  transfer() {
    if(!this.state.allow_trans){
      message.warning("禁止转账,联系客服开启");
      return;
    }
    if (!this.state.username) {
      message.warning("请输入收款账号");
      return;
    }
    if (!this.state.amount) {
      message.warning("输入转账金额");
      return;
    }
    if(Number(this.state.amount)>Number(this.state.available)){
        message.warning("余额不足");
    }
    if (!this.state.fund_password) {
      message.warning("输入资金密码");
      return;
    }
    if (!this.state.answer) {
      message.warning("输入密保答案");
      return;
    }
    this.setState({ transfer_btn: true });
    this.submit_request = submitData("/user-transfers/transfer-to-sub", {
      amount: this.state.amount,
      fund_password: qqtjm(this.state.fund_password),
      username: this.state.username,
      tranfertype: this.state.tranfertype,
      question_id: this.state.question_id,
      answer: this.state.answer,
      _token: this.state._token || "7rzk8PSv6dtjayODvx6WUFmGbhQDfMGgAgL71nt2"
    }).subscribe(
      res => {
        this.setState({ transfer_btn: false });
        if (!res) {
          return;
        }
        if (res.data.isSuccess === 1) {
          message.success("转账成功");
          this.setState({
              fund_password:'',
              answer:'',
            available:(Number(this.state.available)-Number(this.state.amount)).toFixed(3)
          });
          eventProxy.trigger('refleshBalance');
          return;
        }
        message.warning(res.data.data.info || res.data.type);
      },
      error => {
        message.error(error.message);
      }
    );
  }
  render() {
    return (
      <div>
        <div className="container">
          <Sidemenu history={this.props.history}/>
          <div className="mng_content">
            <div className="breadcrumb">
              <li>
                <span>资金管理</span>
              </li>
              <li>
                <span>下级转账</span>
              </li>
            </div>

            <div className="transfer">
              <p className="alert">
                提示：转账申请，将账户资金转入指定的下级账户。
              </p>

              <div className="inputgroup">
                {this.state.allow_trans&&<div className="input">
                  <span className="label">当前余额</span>
                  <div className="amount">
                    <span>{this.state.available}</span>元
                  </div>
                </div>}

                <div className="input">
                  <span className="label">收款账号</span>
                  <Input
                    size="large"
                    
                    onChange={e => {
                      this.setState({
                        username: e.target.value
                      });
                    }}
                    value={this.state.username}
                  />
                </div>

                <div className="input">
                  <span className="label">转账金额</span>
                  <Input
                    size="large"
                    
                    onChange={e => {
                      this.setState({
                        amount: e.target.value
                      });
                    }}
                    value={this.state.amount}
                  />
                </div>

                <div className="input">
                  <span className="label">资金密码</span>
                  <Input.Password
                    onChange={e => {
                      this.setState({
                        fund_password: e.target.value
                      });
                    }}
                    
                    value={this.state.fund_password}
                    size={"large"}
                  />
                </div>

                <div className="input">
                  <span className="label">密保问题</span>
                  <Input readOnly size="large" value={this.state.question} />
                </div>

                <div className="input">
                  <span className="label">密保答案</span>
                  <Input
                    size="large"
                    onChange={(e) => {
                      this.setState({
                        answer: e.target.value
                      });
                    }}
                    value={this.state.answer}
                    
                  />
                </div>
              </div>

              <div className="btn">
                <Button
                  loading={this.state.transfer_loading}
                  onClick={() => {
                    this.transfer();
                  }}
                  type="primary"
                  size={"large"}
                >
                  确定
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Transfer;
