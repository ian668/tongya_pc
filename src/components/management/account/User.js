import React, { Component } from "react";
import "./account.scss";
import Sidemenu from "../../../components/common/Sidemenu";
import usericon from "../../../assets/img/usericon.png";
import { Icon, Button, Modal, Input, Select, message } from "antd";
import { fetchData, submitData } from "../../../services/httpService";
import { qqtjm } from "../../../services/utilsService";
const { Option } = Select;
const nickObj = {
  "1_1996":'平台号',
  "2_1996":'总运营',
  "3_1996":'运营',
  "4_1996":'总主管',
  "5_1996":'内部主管',
  "6_1994":'主管',
  "7_1992":'招商',
}
class User extends Component {
  constructor(props) {
    super(props);
    this.fetch_request = "";
    this.state = {
      userInfo: {},
      visible: false,
      login_pw: false,
      set_money_pw: false,
      password: "",
      old_password: "",
      password_confirmation: "",
      fund_password: "",
      fund_password_confirmation: "",
      old_fund_password: "",
      _token: "",
      submit_request: "",
      confirmLoading: false,
      ques_1_id: 1,
      ques_2_id: 2,
      ans1: "",
      ans2: "",
      questions: [],
      is_set_safe_question: 0,
      submitSecurity_loading:false,
      set_fun_pwd_loading:false
    };
    this.submit_request = "";
  }
  login_pw = () => {
    this.setState({
      login_pw: true
    });
  };

  money_pw = () => {
    this.setState({
      money_pw: true
    });
  };

  set_money_pw = () => {
    this.setState({
      set_money_pw: true
    });
  };

  safe_verification = () => {
    this.setState({
      safe_verification: true
    });
  };

  update_login_pwd = e => {
    let self = this;
    let { password, old_password, password_confirmation } = this.state;
    if (!old_password) {
      message.warning("请输入原始密码!", 1);
      return;
    }
    if (!password) {
      message.warning("请输入新密码!", 1);
      return;
    }
    if (password !== password_confirmation) {
      message.warning("两次密码不一致!", 1);
      return;
    }
    this.setState({
      update_login_pwd_loading: true
    });
    this.submit_request = submitData("/mobile-users/password-management/0", {
      old_password: qqtjm(this.state.old_password),
      password: qqtjm(this.state.password),
      password_confirmation: qqtjm(this.state.password_confirmation),
      _token: this.props.userInfo.token
    }).subscribe(
      res => {
        this.setState({
          update_login_pwd_loading:false
        });
        if (res.data.isSuccess === 1) {
          this.setState({
            login_pw: false,
            password: "",
            old_password: "",
            password_confirmation: ""
          });
          message.success("修改成功,请重新登陆!", 1, () => {
            self.props.history.push("/login");
          });
          return;
        }
        message.warning(res.data.Msg, 1);
      },
      error => {
        this.setState({
          update_login_pwd_loading:false
        });
        message.error(error.message);
      }
    );
  };

  update_fun_pwd = e => {
    let {
      old_fund_password,
      fund_password,
      fund_password_confirmation
    } = this.state;
    if (!old_fund_password) {
      message.warning("请输入原始资金密码!", 1);
      return;
    }
    if (!fund_password) {
      message.warning("请输入新资金密码!", 1);
      return;
    }
    if (fund_password !== fund_password_confirmation) {
      message.warning("两次密码不一致!", 1);
      return;
    }
    this.setState({
      confirmLoading: true
    });
    this.submit_request = submitData("/mobile-users/password-management/1", {
      old_fund_password: qqtjm(this.state.old_fund_password),
      fund_password: qqtjm(this.state.fund_password),
      fund_password_confirmation: qqtjm(this.state.fund_password_confirmation),
      _token: this.props.userInfo.token
    }).subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          this.setState({
            confirmLoading: false,
            money_pw: false,
            fund_password: "",
            old_fund_password: "",
            fund_password_confirmation: ""
          });
          message.success("修改成功!", 1);
          return;
        }
        message.warning(res.data.Msg, 1);
      },
      error => {
        message.error(error.message);
      }
    );
  };

  set_fun_pwd = () => {
    let { fund_password, fund_password_confirmation } = this.state;
    if (!fund_password) {
      message.warning("请输入资金密码!", 1);
      return;
    }
    if (fund_password !== fund_password_confirmation) {
      message.warning("两次密码不一致!", 1);
      return;
    }
    this.setState({
      set_fun_pwd_loading: true
    });
    this.submit_request = submitData("/mobile-users/safe-reset-fund-password", {
      fund_password: qqtjm(this.state.fund_password),
      fund_password_confirmation: qqtjm(this.state.fund_password_confirmation),
      _token: this.props.userInfo.token
    }).subscribe(
      res => {
        this.setState({
          set_fun_pwd_loading:false
        });
        if (res.data.isSuccess === 1) {
          let userInfo = this.state.userInfo;
          userInfo.is_set_fund_password = 1;
          this.setState({
            userInfo: userInfo,
            set_money_pw: false,
            fund_password: "",
            fund_password_confirmation: ""
          });
          message.success("设置成功!", 1);
          return;
        }
        message.warning(res.data.Msg, 1);
      },
      error => {
        this.setState({
          set_fun_pwd_loading:false
        })
        message.error(error.message);
      }
    );
  };

  handleCancel = e => {
    this.setState({
      login_pw: false,
      money_pw: false,
      set_money_pw:false,
      safe_verification: false,
      password: "",
      old_password: "",
      password_confirmation: "",
      fund_password: "",
      old_fund_password: "",
      fund_password_confirmation: "",
      ans1: "",
      ans2: ""
    });
  };

  submitSecurity() {
    if (!this.state.ques_1_id) {
      message.warning("请选择问题1", 1);
      return;
    }
    if (!this.state.ans1) {
      message.warning("请填写答案1", 1);
      return;
    }
    if (!this.state.ques_2_id) {
      message.warning("请填写问题2", 1);
      return;
    }
    if (!this.state.ans2) {
      message.warning("请填写答案2", 1);
      return;
    }
    let url =
      "/mobile-users/set-safe-question?ques_1_id=" +
      this.state.ques_1_id +
      "&ques_2_id=" +
      this.state.ques_2_id +
      "&ans1=" +
      this.state.ans1 +
      "&ans2=" +
      this.state.ans2;
    this.setState({
      submitSecurity_loading:true
    })
    this.fetch_request = fetchData(url).subscribe(
      res => {
        this.setState({
          submitSecurity_loading:false
        })
        if (res.data.isSuccess === 1) {
          message.success(
            res.data.Msg || res.data.data.info || res.data.type,
            1
          );
          let userInfo = this.state.userInfo;
          userInfo.is_set_safe_question = 1;
          this.setState({
            safe_verification: false,
            userInfo: userInfo
          });
          return;
        }
        message.warning(res.data.Msg || res.data.data.info || res.data.type, 1);
      },
      error => {
        this.setState({
          submitSecurity_loading:false
        })
        message.error(error.message);
      }
    );
  }

  loadData() {
    this.fetch_request = fetchData("/mobile-users/user-account-info").subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          let nickname = "",userInfo = res.data.data;
          //永泰待遇
          if (userInfo.benefits_itype === 11) {
            nickname = nickObj[userInfo.level+'_'+userInfo.prize_group]||"代理";
            if(userInfo.is_agent===0){
              nickname = '玩家'
            }
          }
          userInfo["nickname"] = nickname;
          this.setState({
            userInfo: userInfo
          });
          //是否设置了密保
          if (userInfo.is_set_safe_question === 1) {
            return;
          }
          this.fetch_request = fetchData(
            "/mobile-users/all-safe-question"
          ).subscribe(
            res => {
              if (res.data.isSuccess === 1) {
                this.setState({
                  questions: Object.values(res.data.data)
                });
                return;
              }
              if (res.data.errno === 1004) {
                this.props.history.push("/login");
                return;
              }
              message.warning(
                res.data.Msg || res.data.data.info || res.data.type,
                1
              );
            },
            error => {
              message.error(error.message);
            }
          );
          return;
        }
        if (res.data.errno === 1004) {
          message.warning(res.data.Msg);
          this.props.history.push("/login");
          return;
        }
        message.warning(res.data.Msg);
      },
      error => {
        message.error(error.message);
      }
    );
  }

  componentDidMount() {
    this.loadData();
  }

  componentWillUnmount() {
    Modal.destroyAll();
    message.destroy();
    this.fetch_request && this.fetch_request.unsubscribe();
    this.submit_request && this.submit_request.unsubscribe();
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
                <span>会员中心</span>
              </li>
            </div>

            <div className="userinfo">
              <div className="info_box">
                <div className="info">
                  <div className="avatar">
                    <img src={usericon} alt="" />
                  </div>
                  <div className="ip">
                    <p>{this.state.userInfo.username}</p>
                    <ul>
                      <li>
                        奖金制度:<span>{this.state.userInfo.prize_group}</span>
                        <span>（{this.state.userInfo.nickname}）</span>
                      </li>
                      <li>
                        最近登录地址时间:
                        <span>{this.state.userInfo.login_date}</span>
                      </li>
                      <li>
                        最近登录IP:<span>{this.state.userInfo.login_ip}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="money">
                  <span>账户余额:</span>
                  <div className="cash">{this.state.userInfo.available}</div>
                  <span>取款锁定:</span>
                  <div>{this.state.userInfo.frozen}</div>
                </div>
              </div>

              <div className="safe_box">
                <div className="title">安全中心</div>

                <div className="safe">
                  <div>
                    <Icon type="lock" />
                  </div>
                  <div>
                    <span>登录密码</span>
                    <p>
                      建议您使用字母和数字组合、混合大小写在组合中加入下划线等符号。
                    </p>
                  </div>
                  <Button type="primary" onClick={this.login_pw}>
                    修改
                  </Button>
                </div>

                <div className="safe">
                  <div>
                    <Icon type="lock" />
                  </div>
                  <div>
                    <span>资金密码</span>
                    <p>
                      在进行银行卡绑定，转账等资金操作时需要进行安全密码确认，以提高资金安全性。
                    </p>
                  </div>
                  {this.state.userInfo.is_set_fund_password === 0 && (
                    <Button type="primary" onClick={this.set_money_pw}>
                      设置
                    </Button>
                  )}
                  {this.state.userInfo.is_set_fund_password === 1 && (
                    <Button type="primary" onClick={this.money_pw}>
                      修改
                    </Button>
                  )}
                </div>

                <div className="safe">
                  <div>
                    <Icon type="safety" />
                  </div>
                  <div>
                    <span>安全密保</span>
                    <p>
                      绑定密保答案后可以通过密保答案和资金密码进行上下级转账功能。
                    </p>
                  </div>
                  {this.state.userInfo.is_set_safe_question === 0 && (
                    <Button type="primary" onClick={this.safe_verification}>
                      绑定
                    </Button>
                  )}
                  {this.state.userInfo.is_set_safe_question === 1 && (
                    <Button type="primary" disabled={true}>
                      已设置
                    </Button>
                    // <Button type="primary" onClick={this.money_pw}>修改</Button>
                  )}
                </div>

                <div className="safe">
                  <div>
                    <Icon type="google" />
                  </div>
                  <div>
                    <span>GOOGLE安全验证</span>
                    <p>
                      绑定谷歌验证可以极大的提高账户安全性，强烈建议您绑定。
                    </p>
                  </div>
                  <Button type="primary" disabled={true}>
                    即将上线
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal
          title="修改登录密码"
          visible={this.state.login_pw}
          onOk={this.update_login_pwd.bind(this)}
          onCancel={this.handleCancel}
          confirmLoading={this.state.update_login_pwd_loading}
          width={360}
          okText={"确定修改"}
          cancelText={"取消"}
        >
          <div className="safe_modal">
            <Input
              value={this.state.old_password}
              allowClear={true}
              onChange={e => {
                this.setState({
                  old_password: e.target.value
                });
              }}
              placeholder="原登录密码"
              size={"large"}
            />
            <Input
              value={this.state.password}
              allowClear={true}
              onChange={e => {
                this.setState({
                  password: e.target.value
                });
              }}
              placeholder="新密码"
              size={"large"}
            />
            <Input
              allowClear={true}
              value={this.state.password_confirmation}
              onChange={e => {
                this.setState({
                  password_confirmation: e.target.value
                });
              }}
              placeholder="再次输入新密码"
              size={"large"}
            />
          </div>
        </Modal>
        {/****修改资金密码****/}
        <Modal
          title="修改资金密码"
          visible={this.state.money_pw}
          onOk={this.update_fun_pwd.bind(this)}
          onCancel={this.handleCancel}
          width={360}
          okText={"确定修改"}
          cancelText={"取消"}
        >
          <div className="safe_modal">
            <Input
              value={this.state.old_fund_password}
              allowClear={true}
              onChange={e => {
                this.setState({
                  old_fund_password: e.target.value
                });
              }}
              placeholder="原资金密码"
              size={"large"}
            />
            <Input
              value={this.state.fund_password}
              allowClear={true}
              onChange={e => {
                this.setState({
                  fund_password: e.target.value
                });
              }}
              placeholder="新密码"
              size={"large"}
            />
            <Input
              value={this.state.fund_password_confirmation}
              allowClear={true}
              onChange={e => {
                this.setState({
                  fund_password_confirmation: e.target.value
                });
              }}
              placeholder="再次输入新密码"
              size={"large"}
            />
          </div>
        </Modal>
        {/****设置资金密码****/}
        <Modal
          title="设置资金密码"
          visible={this.state.set_money_pw}
          onOk={this.set_fun_pwd.bind(this)}
          onCancel={this.handleCancel}
          confirmLoading={this.state.set_fun_pwd_loading}
          width={360}
          okText={"确定修改"}
          cancelText={"取消"}
        >
          <div className="safe_modal">
            <Input
              value={this.state.fund_password}
              allowClear={true}
              onChange={e => {
                this.setState({
                  fund_password: e.target.value
                });
              }}
              placeholder="新密码"
              size={"large"}
            />
            <Input
              value={this.state.fund_password_confirmation}
              allowClear={true}
              onChange={e => {
                this.setState({
                  fund_password_confirmation: e.target.value
                });
              }}
              placeholder="再次输入新密码"
              size={"large"}
            />
          </div>
        </Modal>

        <Modal
          title="绑定安全密保"
          visible={this.state.safe_verification}
          onOk={this.submitSecurity.bind(this)}
          onCancel={this.handleCancel}
          confirmLoading={this.state.submitSecurity_loading}
          width={360}
          okText={"确定绑定"}
          cancelText={"取消"}
        >
          <div className="safe_modal">
            <Select
              onChange={value => {
                this.setState({
                  ques_1_id: value
                });
              }}
              value={this.state.ques_1_id}
              defaultValue="请选择密保答案"
              size={"large"}
            >
              {this.state.questions.length > 0 &&
                this.state.questions.map((item, index) => {
                  return (
                    <Option key={index} value={index + 1}>
                      {item}
                    </Option>
                  );
                })}
            </Select>

            <Input
              value={this.state.ans1}
              allowClear={true}
              onChange={e => {
                this.setState({
                  ans1: e.target.value
                });
              }}
              placeholder="请输入密保答案"
              size={"large"}
            />

            <Select
              onChange={value => {
                this.setState({
                  ques_2_id: value
                });
              }}
              value={this.state.ques_2_id}
              defaultValue="请选择密保答案"
              size={"large"}
            >
              {this.state.questions.length > 0 &&
                this.state.questions.map((item, index) => {
                  return (
                    <Option key={index} value={index + 1}>
                      {item}
                    </Option>
                  );
                })}
            </Select>

            <Input
              value={this.state.ans2}
              allowClear={true}
              onChange={e => {
                this.setState({
                  ans2: e.target.value
                });
              }}
              placeholder="请输入密保答案"
              size={"large"}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default User;
