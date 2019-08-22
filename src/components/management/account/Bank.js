import React, { Component } from "react";
import Sidemenu from "../../common/Sidemenu";
import "./account.scss";
import { Icon, Button, Modal, message, Input,Select } from "antd";
import { fetchData,submitData } from "../../../services/httpService";
import { showNotification,qqtjm } from "../../../services/utilsService";
const { confirm } = Modal;
const { Option } = Select;
const banklogo = {
  '中国工商银行': require("../../../assets/img/bank/gsyh.jpg"),
  '中国建设银行': require("../../../assets/img/bank/jsyh.jpg"),
  '中国农业银行': require("../../../assets/img/bank/nyyh.jpg"),
  '中国银行': require("../../../assets/img/bank/zgyh.jpg"),
  '招商银行': require("../../../assets/img/bank/zsyh.jpg"),
  '中国交通银行': require("../../../assets/img/bank/jtyh.jpg"),
  '中国民生银行': require("../../../assets/img/bank/msyh.jpg"),
  '中信银行': require("../../../assets/img/bank/zxyh.jpg"),
  '上海浦东发展银行': require("../../../assets/img/bank/pfyh.jpg"),
  '广东发展银行': require("../../../assets/img/bank/gfyh.jpg"),
  '兴业银行': require("../../../assets/img/bank/xyyh.jpg"),
  '华夏银行': require("../../../assets/img/bank/hxyh.jpg"),
  '中国光大银行': require("../../../assets/img/bank/gdyh.jpg"),
  '中国邮政储蓄银行': require("../../../assets/img/bank/yzcx.jpg"),
  '平安银行':require("../../../assets/img/bank/payh.jpg"),
  '上海银行':require("../../../assets/img/bank/shyh.jpg"),
  '上海农行':require("../../../assets/img/bank/shnc.jpg"),
  '北京银行':require("../../../assets/img/bank/bjyh.jpg")
};
class Bank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bank_list: [],
      banks: {},
      id: "",
      _token: "",
      is_lock: false,
      provinces: {},
      iLimitCardsNum: 0,
      isSetFundPassword: 0,
      iBindedCardsNum: 0,
      is_need_name: false,
      account:'',
      account_name:'',
      fund_password:'',
      check_bank_modal:false,
      check_bank_loading:false
    };
    this.fetch_request="";
    this.submit_request="";
  }

  set_fund_pwd(message) {
    let self = this;
    confirm({
      title: message,
      okText: "去设置",
      cancelText: "取消",
      onOk() {
        self.props.history.push("/main/user?tag=sub1-1");
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  }

  addBank() {
    //判断卡是否锁定
    if (this.state.is_lock) {
      message.warning("卡已锁定");
      return;
    }
    //判断是否绑定第一张卡
    let length = this.state.bank_list.length;
    let url =
      length > 0 ? "/bank-cards/0/bind-card" : "/bank-cards/1/bind-card";
    this.fetch_request = fetchData(url).subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          if (length === 0) {
            this.props.history.push({
              pathname: "/main/bank/add",
              search: "tag=sub1-2&_token="+this.state._token+'&is_need_name=1'
            });
          } else {
            this.setState({
              check_bank_modal:true
            })
          }
          return;
        }
        message.warning(res.data.Msg||res.data.type||res.data.data.info)
      },
      error => {
        message.error(error.message);
      }
    );
  }

  handle_check_bank(){
    if (!this.state.id) {
      message.warning("请选择验证银行卡");
      return;
    }
    if (!this.state.account_name) {
      message.warning("请输入姓名！");
      return;
    }
    if (!this.state.account) {
      message.warning("请输入账号！");
      return;
    }
    if (!this.state.fund_password) {
      message.warning("请输入资金密码！");
      return;
    }
    let fund_password = qqtjm(this.state.fund_password);
    let obj = {
      id: this.state.id,
      account_name: this.state.account_name,
      account: this.state.account.replace(/\s/g, ""),
      _token: this.state._token,
      fund_password: fund_password
    };
    this.setState({
      check_bank_loading:true
    });
    this.submit_request && this.submit_request.unsubscribe();
    this.submit_request = submitData('/bank-cards/0/bind-card',obj).subscribe(res=>{
      this.setState({
        check_bank_loading:false
      });
      if(res.data.isSuccess===1){
        fetchData("/bank-cards/1/bind-card").subscribe(res=>{
          this.props.history.push({
            pathname: "/main/bank/add",
              search: "tag=sub1-2&_token="+this.state._token+'&is_need_name=0'
          });
        },error=>{message.error(error.message)});
        return;
      }
      message.warning(res.data.Msg||res.data.type||res.data.data.info);
    },error=>{
      this.setState({
        check_bank_loading:false
      });
      message.error(error.message)
    })
  }

  componentWillUnmount(){
    Modal.destroyAll();
    message.destroy();
    this.fetch_request && this.fetch_request.unsubscribe();
    this.submit_request && this.submit_request.unsubscribe();
  }

  componentDidMount() {
    this.fetch_request = fetchData("/bank-cards").subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          //先检查是否设置了资金密码
          if (res.data.data.isSetFundPassword === 0) {
            this.set_fund_pwd("未设置资金密码");
            return;
          }
          this.setState({
            _token: res.data.data._token,
            bank_list:
              res.data.data.iBindedCardsNum === 0
                ? []
                : res.data.data.datas.data,
            is_lock: res.data.data.bLocked > 0 ? true : false,
            banks: res.data.data.aBanks,
            provinces: res.data.data.aSelectorData,
            iBindedCardsNum: res.data.data.iBindedCardsNum,
            iLimitCardsNum: res.data.data.iLimitCardsNum,
            isSetFundPassword: res.data.data.isSetFundPassword
          });

          return;
        }
      },
      error => {
        showNotification("error", "温馨提示", error.message);
      }
    );
  }
  
  reset(){
    this.setState({
      account:'',
      account_name:'',
      fund_password:'',
      check_bank_modal:false
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <Sidemenu history={this.props.history}/>
          <div className="mng_content">
            <div className="breadcrumb">
              <li>
                <span>账户管理</span>
              </li>
              <li>
                <span>银行卡管理</span>
              </li>
            </div>

            <div className="bank">
              <div className="alert">
                <p>
                  1、一个游戏账户最多绑定<span>4</span>张银行卡， 您目前绑定了
                  <span>{this.state.iBindedCardsNum}</span>张卡，还可以绑定
                  <span>{4 - this.state.iBindedCardsNum}</span>张。
                </p>
                <p>
                  2、银行卡信息锁定后，不能增加新卡绑定，已绑定的银行卡信息不能进行修改和删除。
                </p>
                <p>
                  3、为了您的账户资金安全，银行卡“新增”和“修改”将在操作完成
                  <span>2</span>小时后，新卡才能发起“向平台提现”。
                </p>
              </div>

              <div className="bank_list">
                <div className="title">银行卡绑定列表</div>
                {this.state.bank_list.length > 0 &&
                  this.state.bank_list.map((item, index) => {
                    return (
                      <div key={index} className="list">
                        <div className="name">
                          <img src={banklogo[item.bank]} alt="" />
                          <span>{item.bank}</span>
                        </div>
                        <div className="nub">{item.account}</div>
                        <div className="time">
                          锁定时间:<span>{item.lock_time}</span>
                        </div>
                        <div className="status">
                          持卡状态:{item.islock === 0 ? "使用中" : "已锁定"}
                        </div>
                      </div>
                    );
                  })}
                {this.state.bank_list.length === 0 && (
                  <div className="no_date">
                    <Icon type="credit-card" />
                    <p>尚未绑定银行卡</p>
                  </div>
                )}
                {this.state.iBindedCardsNum <= 4 && (
                  <div className="btn">
                    <Button
                      onClick={this.addBank.bind(this)}
                      type="primary"
                      size={"large"}
                    >
                      添加银行卡
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Modal
          title="验证银行卡"
          visible={this.state.check_bank_modal}
          confirmLoading={this.state.check_bank_loading}
          onOk={() => {this.handle_check_bank()}}
          onCancel={() => {
            this.reset()
          }}
          width={400}
          okText={"确定修改"}
          cancelText={"取消"}
        >
          <div className="safe_modal">
            <Select
                onChange={(value)=>{this.setState({id:value})}}
                className="select" size={"large"}
                placeholder={"请选择需要验证的银行卡"}
            >
              {this.state.bank_list.length>0&&this.state.bank_list.map((item,index)=>{
                return (
                    <Option key={index} value={item.id}>{item.account}</Option>
                )
              })}
            </Select>
            <Input
                
                value={this.state.account_name}
                onChange={e => {
                  this.setState({
                    account_name: e.target.value
                  });
                }}
                size="large"
                placeholder="您的真实姓名"
            />
            <Input
                
                value={this.state.account}
                onChange={e => {
                  this.setState({
                    account: e.target.value.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 ")
                  });
                }}
                size="large"
                placeholder="16或19位银行卡号"
            />
            <Input
                
                value={this.state.fund_password}
                type="password"
                onChange={e => {
                  this.setState({
                    fund_password: e.target.value
                  });
                }}
                size="large"
                placeholder={"请输入资金密码"}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default Bank;
