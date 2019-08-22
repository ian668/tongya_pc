import React, { Component } from "react";
import { fetchData, submitData } from "../../../services/httpService";
import Sidemenu from "../../common/Sidemenu";
import { Button, Input, Modal, message, Select } from "antd";
import update from "immutability-helper";
const { Option } = Select;
const salary_status_cn = {
  0: "未签订",
  1: "已签订",
  2: "待确认"
};
export default class Salary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      benefits_itype: "",
      selfSalary: [],
      childData: [],
      self_ratio: "",
      extra: "",
      self_extra: "",
      username: "",
      uid: "",
      radio: "",
      ratios: [],
      status: "",
      _token: "",
      check_salary_modal: false,
      sign_contract_modal: false,
      sign_contract_loading: false
    };
    this.fetch_request = "";
    this.submit_request = "";
  }

  search() {
    this.loadData();
  }
  loadData() {
    let url = "/users/team-dividend/1?type=0&username=" + this.state.username;
    this.fetch_request = fetchData(url).subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          let ratios = Number(JSON.parse(res.data.data.selfData)["ratio"]),
            arrs = [],
            selfSalary = JSON.parse(res.data.data.selfData),
            childData = res.data.data.childData;
          for (let index = 1; index <= ratios * 10; index++) {
            arrs.push((index / 10).toString());
          }
          this.setState({
            childData: childData,
            selfSalary: selfSalary,
            ratios: arrs.reverse(),
            self_ratio: selfSalary["ratio"],
            self_extra: selfSalary["extra"] ? selfSalary["extra"] : "",
            extra: selfSalary["extra"] ? selfSalary["extra"] : "",
            ratio: selfSalary["ratio"],
            _token: res.data.data.token,
            status: res.data.data.status
          });
          return;
        }
        if (res.data.errno === 1004) {
          this.props.history.push("/login");
        }
        message.warning(res.data.type || res.data.Msg || res.data.data.info);
      },
      error => {
        message.error(error.message);
      }
    );
  }
  componentDidMount() {
    this.setState({
      benefits_itype: window.localStorage.getItem("benefits_itype")
    });
    this.loadData();
  }

  updatachildrenWages(username, salary_info) {
    let childData = this.state.childData;
    let index = childData.findIndex(item => {
      return item.username === username;
    });
    let updatedObj = update(childData[index], {
      salary_status: { $set: 2 },
      salary_info: { $set: JSON.stringify(salary_info) }
    });
    var newData = update(childData, {
      $splice: [[index, 1, updatedObj]]
    });
    this.setState({
      childData: newData
    });
  }

  confirm_sign() {
    this.setState({
      sign_contract_loading: true
    });
    let salary_info = {
      ratio: this.state.ratio
    };
    this.submit_request = submitData("/users/team-dividend/1?type=0", {
      salary_info: salary_info,
      _token: this.state._token,
      uid: this.state.uid
    }).subscribe(
      res => {
        this.setState({
          sign_contract_loading: false
        });
        if (res.data.isSuccess === 1) {
          message.success("日工资配置成功！", 1);
          this.updatachildrenWages(this.state.username, {
            ratio: this.state.ratio
          });
          this.setState({
            sign_contract_modal: false
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

  checkSelf() {
    this.setState({
      radio: this.state.self_ratio,
      extra: this.state.self_extra,
      check_salary_modal: true
    });
  }

  checkChild(radio, extra) {
    this.setState({
      radio: radio,
      extra: extra,
      check_salary_modal: true
    });
  }

  agree() {
    this.submit_request = submitData('/users/team-dividend/1?type=1', {
      subtype: 1,
      _token: this.state._token
    }).subscribe(res => {
      if (res.data.isSuccess === 1) {
        message.success('已同意',1);
        this.setState({ status: 1 });
        return;
      }
      message.warning(res.data.data.info)
    },error=>{
      message.error(error.message)
    });
  }

  sign(username, uid) {
    this.setState({
      username: username,
      sign_contract_modal: true,
      uid: uid
    });
  }

  componentWillUnmount() {
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
                <span>代理中心</span>
              </li>
              <li>
                <span>契约工资</span>
              </li>
            </div>
            <div className="record">
              <div className="from">
                <Input
                  value={this.state.username}
                  onChange={e => {
                    this.setState({ username: e.target.value });
                  }}
                  size="large"
                  placeholder="用户名"
                  className="input"
                />
                <Button
                  onClick={() => {
                    this.search();
                  }}
                  type="primary"
                  size={"large"}
                >
                  搜索
                </Button>
                <Button
                  onClick={() => {
                    this.checkSelf();
                  }}
                  type="primary"
                  size={"large"}
                >
                  查看本人工资
                </Button>
                {this.state.status === 2 && (
                  <Button
                    onClick={() => {
                      this.agree();
                    }}
                    type="primary"
                    size={"large"}
                  >
                    同意工资
                  </Button>
                )}
              </div>

              <div className="table_box">
                <table>
                  <thead>
                    <tr>
                      <th>用户名</th>
                      <th>用户属性</th>
                      <th>奖金组</th>
                      <th>工资比例</th>
                      <th>状态</th>
                      <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.childData.length === 0 && (
                      <tr>
                        <td colSpan={6}>暂无下级数据</td>
                      </tr>
                    )}
                    {this.state.childData.length > 0 &&
                      this.state.childData.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.username}</td>
                            <td>{item.is_agent === 1 ? "代理" : "玩家"}</td>
                            <td>{item.prize_group}</td>
                            <td>
                              {item.salary_info
                                ? JSON.parse(item.salary_info)["ratio"] + "%"
                                : "未签定"}
                            </td>
                            <td>{salary_status_cn[item.salary_status]}</td>
                            <td>
                              {item.salary_status !== 0 && (
                                <Button
                                  onClick={() => {
                                    this.checkChild(
                                      JSON.parse(item.salary_info)["ratio"],
                                      JSON.parse(item.salary_info)["extra"]
                                        ? JSON.parse(item.salary_info)["extra"]
                                        : ""
                                    );
                                  }}
                                  type="dashed"
                                >
                                  查看工资
                                </Button>
                              )}
                              {/****永泰只有四代有日工资固定的****/}
                              {/* {item.is_agent === 1 &&
                                item.salary_status === 0 && item.level ===4&& (
                                  <Button
                                    onClick={() => {
                                      this.sign(item.username, item.user_id);
                                    }}
                                    type="dashed"
                                  >
                                    配置工资
                                  </Button>
                                )} */}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/******契约详情******/}
        <Modal
          title="工资详情"
          visible={this.state.check_salary_modal}
          onOk={() => {
            this.setState({
              check_salary_modal: false
            });
          }}
          onCancel={() => {
            this.setState({
              check_salary_modal: false
            });
          }}
          width={360}
          okText={"关闭"}
          cancelText={"取消"}
        >
          <div className="safe_modal">
            <table>
              <tbody>
                <tr>
                  <td>基本日工资:</td>
                  <td>{this.state.radio}</td>
                </tr>
                {this.state.extra !== "" && (
                  <tr>
                    <td>额外日工资:</td>
                    <td>{this.state.extra}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Modal>
        {/******签订契约******/}
        <Modal
          title="签订工资"
          visible={this.state.sign_contract_modal}
          onOk={this.confirm_sign.bind(this)}
          onCancel={() => {
            this.setState({
              sign_contract_modal: false
            });
          }}
          width={360}
          confirmLoading={this.state.sign_contract_loading}
          okText={"确定签订"}
          cancelText={"取消"}
        >
          <div className="safe_modal">
            <Select
              value={this.state.ratio}
              onChange={value => {
                this.setState({
                  ratio: value
                });
              }}
              size={"large"}
            >
              {this.state.ratios.length > 0 &&
                this.state.ratios.map((item, index) => {
                  return (
                    <Option key={index} value={item.toString()}>
                      {item}
                    </Option>
                  );
                })}
            </Select>
          </div>
        </Modal>
      </div>
    );
  }
}
