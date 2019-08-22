import React, { Component } from "react";
import Sidemenu from "../../common/Sidemenu";
import { Steps, Button, message, Input, Result, Select } from "antd";
import { getBanks, getProvinces } from "../../../services/utilsService";
import { submitData } from "../../../services/httpService";
const { Step } = Steps;
const banks = getBanks();
const provinces = getProvinces();
const { Option } = Select;
const branchs = [
  "江川路支行",
  "芜湖营业部",
  "马鞍山营业部",
  "六安营业部",
  "黄山营业部",
  "淮南营业部",
  "淮北营业部",
  "池州营业部",
  "亳州营业部",
  "庐阳支行"
];
const steps = [
  {
    title: "添加银行卡"
  },
  {
    title: "确认信息"
  },
  {
    title: "完成"
  }
];

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      steps: steps,
      banks: {},
      provinces: {},
      cities: [],
      bank: "",
      bank_name: "",
      city: "",
      city_name: "",
      province: "",
      province_name: "",
      branch: "",
      account: "",
      account_confirmation: ""
    };
    this.submit_request = "";
  }

  searchURL() {
    var url = window.location.href;
    var querys = url.substring(url.indexOf("?") + 1).split("&");
    var result = [];
    for (var i = 0; i < querys.length; i++) {
      var temp = querys[i].split("=");
      if (temp.length < 2) {
        result[temp[0]] = "";
      } else {
        result[temp[0]] = temp[1];
      }
    }
    return result;
  }

  componentDidMount() {
    let result = this.searchURL();
    this.setState({
      banks: banks,
      provinces: provinces,
      _token: result['_token'],
      is_need_name: result['is_need_name']
    });
  }

  finish_add_bank() {
    this.submit_request = submitData("/bank-cards/2/bind-card", {
      bank: this.state.bank_name,
      bank_id: this.state.bank,
      province_id: this.state.province,
      province: this.state.province_name,
      city_id: this.state.city,
      city: this.state.city_name,
      _token: this.state._token,
      account_name: this.state.account_name,
      account: this.state.account,
      account_confirmation: this.state.account_confirmation,
      branch: branchs[Math.floor(Math.random() * 10)]
    }).subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          const current = this.state.current + 1;
          this.setState({
            current: current
          });
          return;
        }
        message.warning(res.data.Msg || res.data.type || res.data.data.info);
      },
      error => {
        message.error(error.message);
      }
    );
  }

  componentWillUnmount(){
    message.destroy();
    this.submit_request&&this.submit_request.unsubscribe();
  }

  next() {
    if (this.state.current === 2) {
      this.finish_add_bank();
      return;
    }
    //判断信息是否完善
    if (this.state.is_need_name === "1") {
      if (!this.state.account_name) {
        message.warning("请填写开户姓名", 1);
        return;
      }
    }

    if (!this.state.bank) {
      message.warning("请选择银行", 1);
      return;
    }
    if (!this.state.province) {
      message.warning("请选择省份", 1);
      return;
    }
    if (!this.state.city) {
      message.warning("请选择城市", 1);
      return;
    }
    if (!this.state.account) {
      message.warning("请输入银行卡", 1);
      return;
    }
    if (this.state.account !== this.state.account_confirmation) {
      message.warning("两次银行卡不一致", 1);
      return;
    }
    this.submit_request = submitData("/bank-cards/2/bind-card", {
      bank: this.state.bank_name,
      bank_id: this.state.bank,
      province_id: this.state.province,
      province: this.state.province_name,
      city_id: this.state.city,
      city: this.state.city_name,
      _token: this.state._token,
      account_name: this.state.account_name,
      account: this.state.account,
      account_confirmation: this.state.account_confirmation,
      branch: branchs[Math.floor(Math.random() * 10)]
    }).subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          const current = this.state.current + 1;
          this.setState({
            current: current
          });
          return;
        }
        message.warning(res.data.Msg || res.data.type || res.data.data.info);
      },
      error => {
        message.error(error.message);
      }
    );
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current, steps } = this.state;

    return (
      <div>
        <div className="container">
          <Sidemenu history={this.props.history} />
          <div className="mng_content">
            <div className="add">
              <div className="breadcrumb">
                <li>
                  <span>账户管理</span>
                </li>
                <li>
                  <span>银行卡管理</span>
                </li>
                <li>
                  <span>添加银行卡</span>
                </li>
              </div>
              <div>
                <div>
                  <Steps current={current}>
                    {steps.map(item => (
                      <Step key={item.title} title={item.title} />
                    ))}
                  </Steps>
                  <div className="steps-content">
                    {this.state.current === 0 && (
                      <div className="inputgroup">
                        {this.state.is_need_name === "1" && (
                          <div className="input">
                            <span className="label">账户姓名</span>
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
                          </div>
                        )}

                        <div className="input">
                          <span className="label">开户银行</span>
                          <Select
                            // value={this.state.bank}
                            placeholder={"请选择开户银行"}
                            onChange={(value, e) => {
                              this.setState({
                                bank: value,
                                bank_name: e.props.children
                              });
                            }}
                            size={"large"}
                          >
                            {Object.keys(this.state.banks).map(
                              (item, index) => {
                                return (
                                  <Option key={index} value={item}>
                                    {this.state.banks[item]}
                                  </Option>
                                );
                              }
                            )}
                          </Select>
                        </div>

                        <div className="input">
                          <span className="label">开户地</span>
                          <Select
                            // value={this.state.province}
                            placeholder={"请选择"}
                            onChange={(value, e) => {
                              // console.log(value,e)
                              this.setState({
                                province: value,
                                province_name: e.props.children,
                                cities: this.state.provinces[value]["children"]
                              });
                            }}
                            size={"large"}
                            className="select2"
                          >
                            {Object.keys(this.state.provinces).map(
                              (item, index) => {
                                return (
                                  <Option key={index} value={item}>
                                    {this.state.provinces[item]["name"]}
                                  </Option>
                                );
                              }
                            )}
                          </Select>
                          <Select
                            // value = {this.state.city}
                            placeholder={"请选择"}
                            onChange={(value, e) => {
                              this.setState({
                                city: value,
                                city_name: e.props.children
                              });
                            }}
                            size={"large"}
                            className="select2"
                          >
                            {this.state.cities.length > 0 &&
                              this.state.cities.map((item, index) => {
                                return (
                                  <Option key={index} value={item.id}>
                                    {item.name}
                                  </Option>
                                );
                              })}
                          </Select>
                        </div>

                        <div className="input">
                          <span className="label">银行卡号</span>
                          <Input
                            value={this.state.account}
                            
                            onChange={e => {
                              this.setState({
                                account: e.target.value
                                  .replace(/\s/g, "")
                                  .replace(/(\d{4})(?=\d)/g, "$1 ")
                              });
                            }}
                            size="large"
                            placeholder="请输入您的银行卡号"
                          />
                        </div>

                        <div className="input">
                          <span className="label">确认卡号</span>
                          <Input
                            value={this.state.account_confirmation}
                            
                            onChange={e => {
                              this.setState({
                                account_confirmation: e.target.value
                                  .replace(/\s/g, "")
                                  .replace(/(\d{4})(?=\d)/g, "$1 ")
                              });
                            }}
                            size="large"
                            placeholder="请再次输入卡号"
                          />
                        </div>
                      </div>
                    )}
                    {this.state.current === 1 && (
                      <div className="inputgroup">
                        {this.state.is_need_name === "1" && (
                          <div className="input">
                            <span className="label">账户姓名</span>
                            <div className="text">
                              {this.state.account_name}
                            </div>
                          </div>
                        )}

                        <div className="input">
                          <span className="label">开户银行</span>
                          <div className="text">{this.state.bank_name}</div>
                        </div>

                        <div className="input">
                          <span className="label">开户地</span>
                          <div className="text">
                            {this.state.province_name}
                            <span>/</span>
                            {this.state.city_name}
                          </div>
                        </div>

                        <div className="input">
                          <span className="label">银行卡号</span>
                          <div className="text bankNo">
                            {this.state.account}
                          </div>
                        </div>
                      </div>
                    )}
                    {this.state.current === 2 && (
                      <Result
                        status="success"
                        title="添加银行卡成功!"
                        subTitle="现在点击【充值】,立刻开始您的游戏体验吧。"
                      />
                    )}
                  </div>
                  <div className="steps-action">
                    {current > 0 && current < steps.length - 1 && (
                      <Button
                        size={"large"}
                        style={{ marginRight: 8 }}
                        onClick={() => this.prev()}
                      >
                        上一步
                      </Button>
                    )}
                    {current < steps.length - 1 && (
                      <Button
                        size={"large"}
                        type="primary"
                        onClick={() => this.next()}
                      >
                        下一步
                      </Button>
                    )}

                    {current === steps.length - 1 && (
                      <Button
                        onClick={() => {
                          this.props.history.push("/main/bank?tag=sub1-2");
                        }}
                        size={"large"}
                        type="primary"
                      >
                        返回银行卡管理页面
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Add;
