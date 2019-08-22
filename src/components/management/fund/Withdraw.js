import React, { Component } from "react";
import Sidemenu from "../../common/Sidemenu";
import { Button, Icon, Input, Select, message, Modal } from "antd";
import { fetchData, submitData } from "../../../services/httpService";
import { qqtjm } from "../../../services/utilsService";
const { Option } = Select;

class Withdraw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      amount: "100",
      accounts: "",
      bank_account: "",
      bank_cards: [],
      withdraw_init_data: {},
      confirm_account: "",
      confirm_modal: false,
      withdraw_loading: false,
      fund_password: ""
    };
    this.init_request = "";
    this.submit_request = "";
    message.config({
      top: '45%',
      duration:2
    });
  }
  componentDidMount() {
    this.init_request = fetchData("/mobile-withdrawals/withdraw").subscribe(
      res => {
        if (!res) {
          message.warning("非法请求",1);
          return;
        }
        if (res.data.isSuccess === 1) {
          let banks = res.data.data.bank_cards;
          this.setState({
            id: banks[0]["id"],
            bank_cards: res.data.data.bank_cards,
            withdraw_init_data: res.data.data,
            accounts: res.data.data.accounts,
            bank_account: banks[0]["account"]
          });
          return;
        }
        if (res.data.errno === 1004) {
          this.props.history.push("/login");
          return;
        }
        message.warning(res.data.data.info || res.data.Msg || res.data.type,1);
      },
      error => {
        message.warning(error.message,1);
      }
    );
  }
  componentWillUnmount() {
    message.destroy();
    this.init_request && this.init_request.unsubscribe();
    this.submit_request && this.submit_request.unsubscribe();
  }

  withdraw() {
    if (!this.state.amount) {
      message.warning("提现金额不能为空", 1);
      return;
    }
    if (
      Number(this.state.withdraw_init_data.min_withdraw_amount) >
        Number(this.state.amount) ||
      Number(this.state.amount) >
        Number(this.state.withdraw_init_data.max_withdraw_amount)
    ) {
      message.warning("提现金额取款超出范围", 1);
      return;
    }
    if(Number(this.state.accounts.available)<Number(this.state.amount)){
      message.warning("可提现金额不足", 1);
      return;
    }
    this.setState({
      withdraw_loading: true
    });
    fetchData(
      "/mobile-withdrawals/withdraw/1?id=" +
        this.state.id +
        "&amount=" +
        this.state.amount
    ).subscribe(
      res => {
        this.setState({ withdraw_loading: false });
        if (!res) {
          message.warning("请求非法", 1);
          return;
        }
        if (res.data.isSuccess === 1) {
          this.setState({
            confirm_modal: true,
            confirm_account: res.data.data.info
          });
          return;
        }
        message.warning(res.data.data.info || res.data.Msg);
      },
      error => {
        message.error(error.message);
      }
    );
  }

  confirm_withdraw() {
    if (!this.state.fund_password) {
      message.warning("请输入资金密码", 1);
      return;
    }
    this.submit_request = submitData("/mobile-withdrawals/withdraw/1", {
      account: this.state.confirm_account.account,
      amount: this.state.confirm_account.amount,
      fund_password: qqtjm(this.state.fund_password),
      id: this.state.confirm_account.id
    }).subscribe(
      res => {
        if (!res) {
          message.warning("非法请求");
          return;
        }
        if (res.data.isSuccess === 1) {
          message.success("提现成功", 1);
          this.setState({
            fund_password: "",
            confirm_modal: false
          });
          return;
        }
        message.warning(res.data.data.info);
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
                <span>提款</span>
              </li>
            </div>

            <div className="withdraw">
              <p className="alert">
                提示：每日<span>前5次</span>提款免手续费.今日已提款
                <span>{this.state.withdraw_init_data.withdraw_num}</span>
                次,最多限制
                <span>{this.state.withdraw_init_data.withdraw_limit_num}</span>
                次提款。
              </p>

              <div className="inputgroup">
                <div className="input">
                  <span className="label">用户名</span>
                  <div className="text">{this.state.accounts.username}</div>
                </div>

                <div className="input">
                  <span className="label">当前余额</span>
                  <div className="amount">
                    <span>{this.state.accounts.available}</span>元
                  </div>
                </div>

                <div className="input">
                  <span className="label">提现金额</span>
                  <Input
                    onChange={e => {
                      this.setState({
                        amount: e.target.value
                      });
                    }}
                    // allowClear={true}
                    value={this.state.amount}
                    size="large"
                    placeholder="请输入提现金额"
                  />
                  <div className="limit">
                    <Icon type="exclamation-circle" />
                    <p>
                      单笔最低提现金额：
                      <span>
                        {this.state.withdraw_init_data.min_withdraw_amount}
                      </span>
                      元，最高：
                      <span>
                        {this.state.withdraw_init_data.max_withdraw_amount}
                      </span>
                      元。
                    </p>
                  </div>
                </div>

                <div className="input">
                  <span className="label">银行卡选择</span>
                  <Select value={this.state.id} size={"large"}>
                    {this.state.bank_cards.length > 0 &&
                      this.state.bank_cards.map(item => {
                        return (
                          <Option key={item.id} value={item.id}>
                            {item.account}
                          </Option>
                        );
                      })}
                  </Select>
                </div>
              </div>

              <div className="btn">
                <Button
                  loading={this.state.withdraw_loading}
                  onClick={() => {
                    this.withdraw();
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
        <Modal
          title="确定取款"
          visible={this.state.confirm_modal}
          onOk={this.confirm_withdraw.bind(this)}
          onCancel={() => {
            this.setState({ confirm_modal: false, fund_password: "" });
          }}
          okText={"确定"}
          cancelText={"取消"}
          width={660}
        >
          <div className="xxzz">
            <div className="info">
              <div className="input" style={{ marginBottom: 0 }}>
                <span className="label">平台账号：</span>
                <div className="text">
                  {this.state.confirm_account.username}
                </div>
              </div>
              <div className="input" style={{ marginBottom: 0 }}>
                <span className="label">可提金额：</span>
                <div className="text">
                  {this.state.confirm_account.available}
                </div>
              </div>
              <div className="input" style={{ marginBottom: 0 }}>
                <span className="label">提现金额：</span>
                <div className="text">{this.state.confirm_account.amount}</div>
              </div>
              <div className="input" style={{ marginBottom: 0 }}>
                <span className="label">开户银行：</span>
                <div className="text">
                  {this.state.confirm_account.province}/
                  {this.state.confirm_account.city}
                </div>
              </div>
              <div className="input" style={{ marginBottom: 0 }}>
                <span className="label">开户省市：</span>
                <div className="text">{this.state.confirm_account.bank}</div>
              </div>
              <div className="input" style={{ marginBottom: 0 }}>
                <span className="label">账户姓名：</span>
                <div className="text">
                  {this.state.confirm_account.account_name}
                </div>
              </div>
              <div className="input" style={{ marginBottom: 0 }}>
                <span className="label">收款卡号：</span>
                <div className="text">{this.state.confirm_account.account}</div>
              </div>
              <div className="input_password">
                <span className="label" style={{float:"left"}}>资金密码：</span>
                <Input.Password
                  allowClear={true}
                  style={{width:'50%',float:"left"}}
                  size="large"
                  onChange={e => {
                    this.setState({ fund_password: e.target.value });
                  }}
                  value={this.state.fund_password}
                />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Withdraw;
