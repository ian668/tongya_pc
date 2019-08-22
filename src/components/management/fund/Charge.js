import React, { Component } from "react";
import Sidemenu from "../../common/Sidemenu";
import "./Fund.scss";
import {
  Tabs,
  Alert,
  Button,
  Input,
  Icon,
  Radio,
  Modal,
  Select,
  message
} from "antd";
import * as Clipboard from 'clipboard';
import { fetchData, submitData } from "../../../services/httpService";
import { showNotification,getURL } from "../../../services/utilsService";
const { TabPane } = Tabs;
const { confirm } = Modal;
const { Option } = Select;
class Charge extends Component {
  constructor(props) {
    super(props);
    this.init_request = "";
    this.submit_request = "";
    this.state = {
      modalLineVisible: false,
      amount: "100",
      currentCharge: {},
      payurl: "",
      _token: "",
      redirect_url: window.location.href,
      chargelist: [],
      origin_charge_list: [],
      lineType: "1",
      linetransObj: {},
      realname: "",
      bank: "",
      transtime: "",
      quick_url: "",
      banklist: [],
      banksubmit: false,
      charge_loading: false,
      remind_loadding: false
    };
    message.config({
      top: '45%',
      duration:2
    });
  }

  switchCharge(key) {
    this.setState({
      currentCharge: this.state.chargelist[parseInt(key) - 1],
      amount: this.state.chargelist[parseInt(key) - 1]["min"]
    })
  }

  setOriginPasswordConfirm(message) {
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

  setBankCardsConfirm(message) {
    let self = this;
    confirm({
      title: message,
      okText: "去设置",
      cancelText: "取消",
      onOk() {
        self.props.history.push("/main/bank?tag=sub1-2");
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  }

  charge() {
    let self = this;
    if (!this.state.amount) {
      message.warning("请输入充值金额");
      return;
    }
    if (Number(this.state.amount) < Number(this.state.currentCharge.min)) {
      message.warning("输入金额小于最低充值金额");
      return;
    }
    if (Number(this.state.amount) > Number(this.state.currentCharge.max)) {
      message.warning("输入金额大于最高充值金额");
      return;
    }
    var current = this.state.currentCharge;
    //判断是否线下转账
    if (this.state.currentCharge.route === "line-trans") {
      var tempamount = this.state.amount.toString();
      if (tempamount.split(".").length === 1) {
        var amount = Math.floor(Math.random() * 100);
        tempamount =
          amount < 10
            ? Number(this.state.amount + ".0" + amount)
            : Number(this.state.amount + "." + amount);
        this.setState({ amount: tempamount.toString() });
        confirm({
          title:
            "为了确保您的款项及时到账,平台会根据您填写的充值金额自动生成1-2位小数点的金额,请您根据生成金额转账充值确保您提交的款项与转账的款项一致。",
          okText: "下一步",
          cancelText: "取消",
          onOk() {
            self.nextline();
          },
          onCancel() {
            console.log("Cancel");
          }
        });
        return;
      }
      this.setState({
        charge_loading: true
      });
      this.nextline();
      return;
    }
    this.setState({
      charge_loading: true
    });
    //判断是否form提交==网银充值
    if (current.enable_ajax === 0) {
      let form = document.getElementById(current.route);
      this.setState({
        charge_loading: false
      });
      form.submit();
      return;
    }
    //开始提交后台
    this.submit_request = submitData(current.submit_action, {
      amount: this.state.amount,
      _token: this.state._token,
      route: current.route
    }).subscribe(
      function(res) {
        self.setState({ charge_loading: false });
        if (!res) {
          message.warning("检查是否有绑卡或有更改登陆密码");
          return;
        }
        if (res.data.isSuccess === 1) {
          let url =
            "?depositMode=" +
            encodeURIComponent(res.data.data.depositMode) +
            "&fMaxLoad=" +
            encodeURIComponent(res.data.data.fMaxLoad) +
            "&fMinLoad=" +
            encodeURIComponent(res.data.data.fMinLoad) +
            "&requestMethod=" +
            encodeURIComponent(res.data.data.requestMethod) +
            "&requestUrl=" +
            encodeURIComponent(res.data.data.requestUrl) +
            "&data=" +
            encodeURIComponent(JSON.stringify(res.data.data.data));
          window.open(getURL() + "/userspay/gopay" + url, "_blank");
          return;
        }
        message.warning(res.data.data.info);
      },
      error => {
        self.setState({ charge_loading: false });
        message.error(error.message);
      }
    );
  }

  nextline() {
    //线下转账
    fetchData(
      "/user-recharges/line-trans/9?lineType=" +
        this.state.lineType +
        "&amount=" +
        Number(this.state.amount).toFixed(2)
    ).subscribe(
      res => {

        if (!res) {
          return;
        }
        if (res.data.isSuccess === 1) {
          fetchData(
            "/user-recharges/line-trans/1?lineType=" +
              this.state.lineType +
              "&amount=" +
              this.state.amount
          ).subscribe(
            res => {
              this.setState({ charge_loading: false });
              if (!res) {
                return;
              }
              if (res.data.isSuccess === 1) {
                let date = new Date(),
                  transtime = "";
                transtime =
                  date.getFullYear().toString() +
                  (date.getMonth() + 1).toString() +
                  date.getDate().toString() +
                  date.getHours().toString() +
                  date.getMinutes().toString() +
                  date.getSeconds().toString();
                this.setState(
                  {
                    transtime: transtime,
                    linetransObj: res.data.data.cmbankNos,
                    modalLineVisible: true
                  },
                  () => {
                    setTimeout(() => {
                      let clipboard = new Clipboard(".copy");
                      clipboard.on("success", () => {
                        message.success("复制成功!");
                      });
                    }, 500);
                  }
                );
                return;
              }
              message.warning(res.data.data.msg || res.data.data.info);
            },
            error => {
              this.setState({ charge_loading: false });
              message.error(error.message);
            }
          );
          return;
        }
        this.setState({ charge_loading: false });
        message.warning(res.data.data.msg || res.data.data.info);
      },
      error => {
        this.setState({ charge_loading: false });
        message.error(error.message);
      }
    );
  }

  componentDidMount() {
    this.init_request = fetchData("/user-recharges/entrance").subscribe(
      res => {
        if (!res) {
          showNotification("warning", "温馨提示", "非法请求");
          return;
        }
        //查看是否修改了原始密码
        if (res.data.data.type === 1) {
          this.setOriginPasswordConfirm("请先修改原始登录密码！");
          return;
        }
        //查看是否绑定了银行卡
        if (res.data.data.type === 2) {
          this.setBankCardsConfirm("请先绑定银行卡！");
          return;
        }
        if (res.data.isSuccess === 1) {
          this.setState({
            _token: res.data.data._token,
            banklist: res.data.data["bank-list"],
            bank: res.data.data["bank-list"][0]["identifier"],
            chargelist: res.data.data["recharge-list"],
            currentCharge: res.data.data["recharge-list"][0],
            amount: res.data.data["recharge-list"][0]["min"]
          });
        }
      },
      error => {
        message.error("充值初始化" + error);
      }
    );
  }

  componentWillUnmount() {
    message.destroy();
    Modal.destroyAll();
    this.init_request && this.init_request.unsubscribe();
    this.submit_request && this.submit_request.unsubscribe();
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  //提醒上分
  remind() {
    if (!this.state.realname) {
      message.warning("输入真实姓名");
      return;
    }
    this.setState({
      remind_loadding: true
    });
    this.submit_request = submitData("/user-recharges/line-trans/2", {
      amount: this.state.amount,
      realname: this.state.realname,
      transtime: this.state.transtime,
      bank: 54,
      lineType: this.state.lineType,
      _token: this.state._token
    }).subscribe(
      res => {
        this.setState({
          remind_loadding: false
        });
        if (!res) {
          message.warning("非法请求");
          return;
        }
        if (res.data.isSuccess === 1) {
          message.success("已提醒平台上分");
          this.setState({
            modalLineVisible: false
          });
          return;
        }
        message.warning(res.data.data.info || res.data.type);
      },
      error => {
        this.setState({
          remind_loadding: false
        });
        message.error(error.message);
      }
    );
  }

  handleOk = e => {
    message.success("已成功通知平台上分", 3);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      modalLineVisible: false
    });
  };

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
                <span>充值</span>
              </li>
            </div>

            <div className="charge">
              <Tabs onChange={this.switchCharge.bind(this)} type="card">
                {this.state.chargelist.length > 0 &&
                  this.state.chargelist.map((item, index) => {
                    return (
                      <TabPane tab={item.name} key={(index + 1).toString()}>
                        {/* <Alert
                          message="提示：平台填写金额必须和银行转账金额一致（手续费），否则充值无法到账。"
                          banner
                          closable
                        /> */}

                        {item.route === "line-trans" && (
                          <div className="inputgroup">
                            <div className="input">
                              <span className="label">支付通道</span>
                              <Radio.Group value={this.state.lineType} onChange={(e)=>{this.setState({lineType:e.target.value})}} buttonStyle="solid">
                                <Radio.Button value="0">
                                  银行卡转卡
                                </Radio.Button>
                                <Radio.Button value="1">
                                  支付宝转卡
                                </Radio.Button>
                              </Radio.Group>
                            </div>

                            <div className="input">
                              <span className="label">充值金额</span>
                              <Input
                                onChange={e => {
                                  this.setState({ amount: e.target.value });
                                }}
                                size="large"
                                value={this.state.amount}
                                placeholder="请输入充值金额"
                              />
                              <div className="limit">
                                <Icon type="exclamation-circle" />
                                <p>
                                  充值限额：最低<span>{item.min}</span>元,最高
                                  <span>{item.max}</span>元。充值手续费:{item.depositFee}%
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        {item.route !== "line-trans" && (
                          <form
                          id={item.route}
                          action={item.submit_action}
                          method="post"
                          target="_blank"
                        >
                          <input
                            type="hidden"
                            name="pay_type"
                            value="B2CDebit"
                          />
                          <input type="hidden" name="_token" value={this.state._token} id="_token" />
                          <input
                            type="hidden"
                            name="redirect_url"
                            value={this.state.redirect_url}
                            id="redirect_url"
                          />
                          <input
                            type="hidden"
                            name="identifier"
                            id="identifier"
                            value={this.state.bank}
                          />
                          <div className="inputgroup">
                            {this.state.currentCharge.show_banks === 1 && (
                              <div className="input">
                                <span className="label">选择银行:</span>
                                <Select
                                  name="bank"
                                  onChange={value => {
                                    this.setState({ bank: value });
                                  }}
                                  size="large"
                                  value={this.state.bank}
                                  placeholder="请选择银行"
                                >
                                  {this.state.banklist.length > 0 &&
                                    this.state.banklist.map((item, index) => {
                                      return (
                                        <Option
                                          key={index}
                                          value={item.identifier}
                                        >
                                          {item.name}
                                        </Option>
                                      );
                                    })}
                                </Select>
                              </div>
                            )}
                            <div className="input">
                              <span className="label">充值金额:</span>
                              <Input
                                name="amount"
                                onChange={e => {
                                  this.setState({ amount: e.target.value });
                                }}
                                size="large"
                                value={this.state.amount}
                                placeholder="请输入充值金额"
                              />
                              <div className="limit">
                                <Icon type="exclamation-circle" />
                                <p>
                                  充值限额：最低<span>{item.min}</span>元,最高
                                  <span>{item.max}</span>元。充值手续费:<span>{item.depositFee}</span>%
                                </p>
                              </div>
                            </div>
                          </div>
                        </form>
                        )}

                        <div className="btn">
                          <Button
                            loading={this.state.charge_loading}
                            onClick={() => {
                              this.charge();
                            }}
                            type="primary"
                            size={"large"}
                          >
                            确定
                          </Button>
                        </div>
                      </TabPane>
                    );
                  })}
              </Tabs>
            </div>
          </div>
        </div>

        <Modal
          title="确定转账"
          visible={this.state.modalLineVisible}
          onOk={this.remind.bind(this)}
          onCancel={this.handleCancel}
          confirmLoading={this.state.remind_loadding}
          okText={"提醒上分"}
          cancelText={"取消"}
          width={660}
        >
          <div className="xxzz">
            <p>收款方信息</p>

            <div className="table_box">
              <table>
                <tbody>
                  <tr>
                    <td>收款人</td>
                    <td>{this.state.linetransObj.cmbname}</td>
                    <td>
                      <Button data-clipboard-text={this.state.linetransObj.cmbname} className="copy" type="link">复制</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>收款银行 </td>
                    <td>{this.state.linetransObj.bankname}</td>
                    <td>
                      <Button data-clipboard-text={this.state.linetransObj.bankname} className="copy" type="link">复制</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>收款账号</td>
                    <td>{this.state.linetransObj.cmbno}</td>
                    <td>
                      <Button data-clipboard-text={this.state.linetransObj.cmbno} className="copy" type="link">复制</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>打款方信息</p>

            <div className="info">
              <div className="input">
                <span className="label">真实姓名</span>
                <Input size="large" onChange={(e)=>{this.setState({realname:e.target.value})}} value={this.state.realname} placeholder={"请输入转账账户的真实姓名"}/>
                <div className="tips">
                  <Icon type="exclamation-circle" />
                </div>
              </div>

              <div className="input" style={{ marginBottom: 0 }}>
                <span className="label">转账金额</span>
                <div className="text">{this.state.amount}</div>

                <span className="label">订单编号</span>
                <div className="text">{this.state.transtime}</div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Charge;
