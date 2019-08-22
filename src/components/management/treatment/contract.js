import React, { Component } from "react";
import { fetchData, submitData } from "../../../services/httpService";
import Sidemenu from "../../common/Sidemenu";
import { Button, Input, Modal, message, Tag, Collapse } from "antd";
import { remove } from "lodash";
import update from "immutability-helper";
const { Panel } = Collapse;
const status_cn = {
  1: "已签订",
  2: "待同意",
  0: "未签订"
};
const finish_cn = {
  0: "未结算",
  1: "已结算",
  2: "拒绝发放"
};
const header_names = {
  consumeMoney: "消费额度",
  activeNum: "活跃人数",
  ratioNum: "分红比例",
  lossMoney: "周期亏损",
  ratio: "日工资比例"
};
export default class Contract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childData: [],
      uid: "",
      selfData: "",
      username: "",
      status: "", //自身分红签订状态
      rowarray: [],
      token: "",
      selfData: [],
      selfHeader: "",
      agree_loading: false,
      sign_loading: false,
      finish_contract_loading: false,
      finishSingle_loading:false,
      confirm_sign_loading: false,
      headerrow: "", //分红头部
      sign_contract_modal: false,
      check_contract_modal: false
    };
    this.fetch_request = "";
    this.submit_request = "";
  }

  search() {
    this.loadData();
  }
  loadData() {
    let url = "/users/team-dividend?type=0&username=" + this.state.username;
    this.fetch_request = fetchData(url).subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          let records = res.data.data.childData;
          let headerrow = JSON.parse(res.data.data.selfData)[0];
          for (var key in headerrow) {
            headerrow[key] = "";
          }
          this.setState({
            status: res.data.data.status,
            childData: records,
            fixedSelfData:JSON.parse(res.data.data.selfData),
            selfData: JSON.parse(res.data.data.selfData),
            headerrow: headerrow,
            token: res.data.data.token
          });
          return;
        }
        if (res.data.errno === 1004) {
          this.props.history.push("/login");
        }
        message.warning(res.data.type || res.data.Msg || res.data.data.info, 1);
      },
      error => {
        message.error(error.message, 1);
      }
    );
  }
  componentDidMount() {
    this.loadData();
  }
  //同意契约
  agree() {
    this.setState({
      agree_loading: true
    });
    this.submit_request = submitData("/users/team-dividend?type=1", {
      _token: this.state.token,
      subtype: 0
    }).subscribe(
      res => {
        this.setState({
          agree_loading: false
        });
        if (res.data.isSuccess === 1) {
          message.success("同意契约成功！");
          this.setState({
            status: 1
          });
          return;
        }
        if (res.data.errno === 1004) {
          this.props.history.push("/login");
          return;
        }
        message.warning(res.data.data.info || res.data.type, 1);
      },
      error => {
        this.setState({
          agree_loading: false
        });
        message.error(error.message, 1);
      }
    );
  }
  //查看分红
  checkSelf() {
    let selfHeader = this.state.selfData[0];
    this.setState({
      selfData:this.state.fixedSelfData,
      check_contract_modal: true,
      selfHeader: selfHeader
    });
  }

  //查看下级分红
  checkSubSelf(info){
    let infos = JSON.parse(info);
    let selfHeader = infos[0];
    this.setState({
      selfData:infos,
      check_contract_modal: true,
      selfHeader: selfHeader
    });
  }
  //确认签订分红
  confirm_sign() {
    let array = this.state.rowarray;
    if (array.length === 0) {
      message.warning("请添加分红", 1);
      return;
    }
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (
        Number(element["ratioNum"]) < 0.01 ||
        Number(element["ratioNum"]) > 100
      ) {
        message.warning("分红比例在0.1~100之间！", 1);
        return;
      }
      if (i + 1 < array.length) {
        if (
          Number(array[i]["consumeMoney"]) >=
            Number(array[i + 1]["consumeMoney"]) ||
          Number(array[i]["ratioNum"]) >= Number(array[i + 1]["ratioNum"])
        ) {
          message.warning("请检查的消费额和分红比例是否合理！", 1);
          return;
        }
      }
      this.setState({
        confirm_sign_loading: true
      });
      this.submit_request = submitData("/users/team-dividend?type=0", {
        _token: this.state.token,
        info: this.state.rowarray,
        uid: this.state.uid
      }).subscribe(
        res => {
          if (res.data.isSuccess === 1) {
            message.success("签约成功!", 1);
            this.updatachildrenDividend(
              this.state.username,
              this.state.rowarray
            );
            this.setState({
              rowarray: [],
              sign_contract_modal: false,
              confirm_sign_loading: false
            });
            return;
          }
          this.setState({
            confirm_sign_loading: false
          });
          message.warning(res.data.data.info);
        },
        error => {
          this.setState({
            confirm_sign_loading: false
          });
          message.error(error.message, 1);
        }
      );
    }
  }
  //一键结算分红
  finish() {
    this.setState({
      finish_contract_loading: true
    });
    this.submit_request = submitData("/users/team-dividend?type=2", {
      uid: 0,
      _token: this.state.token
    }).subscribe(
      res => {
        this.setState({
          finish_contract_loading: false
        });
        if (res.data.isSuccess === 1) {
          message.success("结算成功", 1);
          return;
        }
        message.warning(res.data.data.info || res.data.type);
      },
      error => {
        this.setState({
          finish_contract_loading: false
        });
        message.error(error.message, 1);
      }
    );
  }
  finishSingle(uid,username){
    this.setState({
      finishSingle_loading:true
    });
    this.submit_request = submitData('/users/team-dividend?type=2&uid='+uid,{
      uid:uid,
      username:username,
      _token:this.state.token
    }).subscribe(res=>{
      this.setState({
        finishSingle_loading:false
      });
      if(!res){
        message.warning('非法请求！');
        return;
      }
      if(res.data.isSuccess===1){
        //更新结算状态
        this.updatachildrenFinishStatus(username,)
        message.success(res.data.data.info);
        return;
      }
      message.warning(res.data.data.info);
    },error=>{
      this.setState({
        finishSingle_loading:false
      });
      message.error(error.message);
    });
  }
  //签订分红
  sign(username, uid) {
    let selfHeader = this.state.selfData[0];
    this.setState({
      selfHeader:selfHeader,
      sign_contract_modal: true,
      username: username,
      uid: uid
    });
  }
  //添加分红行
  addrow() {
    let obj = this.state.headerrow;
    let rowarray = this.state.rowarray;
    rowarray.push(obj);
    this.setState({
      rowarray: rowarray
    });
  }
  //删除分红行
  deleterow(index) {
    let rowarray = this.state.rowarray;
    remove(rowarray, (item, i) => {
      return i === index;
    });
    this.setState({
      rowarray: rowarray
    });
  }

  updatachildrenFinishStatus(username) {
    let childrenDividend = this.state.childData;
    let index = childrenDividend.findIndex(item => {
      return item.username === username;
    });
    let updatedObj = update(childrenDividend[index], {
      settlement_status: { $set: 1 }
    });
    var newData = update(childrenDividend, {
      $splice: [[index, 1, updatedObj]]
    });
    this.setState({
      childData: newData
    });
  }

  updateRowArray(value, att,index_row) {
    let list = this.state.rowarray,
      updatedObj;
    switch (att) {
      case "consumeMoney":
        updatedObj = update(list[index_row], {
          consumeMoney: { $set: value }
        });
        break;
      case "activeNum":
        updatedObj = update(list[index_row], {
          activeNum: { $set: value }
        });
        break;
      case "ratioNum":
        updatedObj = update(list[index_row], {
          ratioNum: { $set: value }
        });
        break;
    }
    var newData = update(list, {
      $splice: [[index_row, 1, updatedObj]]
    });
    this.setState({
      rowarray: newData
    });
  }

  updatachildrenDividend(username, info) {
    let childrenDividend = this.state.childData;
    let index = childrenDividend.findIndex(item => {
      return item.username === username;
    });
    let updatedObj = update(childrenDividend[index], {
      status: { $set: 2 },
      info: { $set: JSON.stringify(info) }
    });
    var newData = update(childrenDividend, {
      $splice: [[index, 1, updatedObj]]
    });
    this.setState({
      childData: newData
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
                <span>契约分红</span>
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
                  查看本人契约
                </Button>
                {this.state.status === 2 && (
                  <Button
                    loading={this.state.agree_loading}
                    onClick={() => {
                      this.agree();
                    }}
                    type="primary"
                    size={"large"}
                  >
                    同意契约
                  </Button>
                )}
                <Button
                  onClick={() => {
                    this.finish();
                  }}
                  type="primary"
                  size={"large"}
                >
                  一键结算
                </Button>
              </div>

              <div className="table_box">
                <table>
                  <thead>
                    <tr>
                      <th>用户名</th>
                      <th>用户属性</th>
                      <th>返点</th>
                      <th>签订状态</th>
                      <th>结算状态</th>
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
                            <td>{status_cn[item.status]}</td>
                            <td>{finish_cn[item.settlement_status]}</td>
                            <td>
                              {item.status !== 0 && (
                                <Button
                                  onClick={() => {
                                    this.checkSubSelf(item.info);
                                    // this.setState({
                                    //   check_contract_modal: true
                                    // });
                                  }}
                                  type="dashed"
                                >
                                  查看契约
                                </Button>
                              )}
                              {item.is_agent === 1 &&
                                item.level > 5 &&
                                item.status === 0 && (
                                  <Button
                                    onClick={() => {
                                      this.sign(item.username, item.user_id);
                                    }}
                                    type="dashed"
                                  >
                                    配置契约
                                  </Button>
                                )}
                                {item.is_agent === 1 &&
                                item.level > 5 &&
                                item.settlement_status === 0 && (
                                  <Button
                                    onClick={() => {
                                      this.finishSingle(item.user_id,item.username);
                                    }}
                                    type="dashed"
                                  >
                                    分红结算
                                  </Button>
                                )}
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
          title="契约详情"
          visible={this.state.check_contract_modal}
          onOk={() => {
            this.setState({
              check_contract_modal: false
            });
          }}
          onCancel={() => {
            this.setState({
              check_contract_modal: false
            });
          }}
          width={600}
          cancelText={"取消"}
          okText={"关闭"}
        >
          <div className="order_details">
            <div className="table_box">
              <table>
                <thead>
                  <tr>
                    {Object.keys(this.state.selfHeader).map((key, index) => {
                      return <th key={index}>{header_names[key]}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {this.state.selfData.length > 0 &&
                    this.state.selfData.map((item, index) => {
                      return (
                        <tr key={index}>
                          {Object.keys(this.state.selfHeader).map(
                            (key, index) => {
                              return <th key={index}>{item[key]}</th>;
                            }
                          )}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </Modal>
        {/******签订契约******/}
        <Modal
          title="签订契约"
          visible={this.state.sign_contract_modal}
          onOk={()=>{this.confirm_sign()}}
          confirmLoading={this.state.confirm_sign_loading}
          onCancel={() => {
            this.setState({
              sign_contract_modal: false
            });
          }}
          width={600}
          okText={"确定签订"}
          cancelText={"取消"}
        >
          <div className="order_details">
            <div className="table_box">
              <Collapse defaultActiveKey={["1"]}>
                <Panel
                  header={
                    <Tag style={{ marginBottom: "5px" }} color="cyan">
                      上级契约
                    </Tag>
                  }
                  key="1"
                >
                  <table>
                    <thead>
                      <tr>
                        {Object.keys(this.state.selfHeader).map(
                          (key, index) => {
                            return <th key={index}>{header_names[key]}</th>;
                          }
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.selfData.length > 0 &&
                        this.state.selfData.map((item, index) => {
                          return (
                            <tr key={index}>
                              {Object.keys(this.state.selfHeader).map(
                                (key, index) => {
                                  return <th key={index}>{item[key]}</th>;
                                }
                              )}
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </Panel>
              </Collapse>
              <Tag style={{ margin: "15px 0" }} color="cyan">
                与下级{this.state.username}签订契约
              </Tag>
              <table>
                <thead>
                  <tr>
                    {Object.keys(this.state.headerrow).map((key, index) => {
                      return <th key={index}>{header_names[key]}</th>;
                    })}
                    <th>
                      <Button
                        onClick={() => {
                          this.addrow();
                        }}
                        type="primary"
                      >
                        添加
                      </Button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.rowarray.length > 0 &&
                    this.state.rowarray.map((item, index) => {
                      return (
                        <tr key={index}>
                          {Object.keys(this.state.headerrow).map(
                            (key, suindex) => {
                              return (
                                <td key={suindex}>
                                  <Input
                                    onChange={e => {
                                      this.updateRowArray(
                                        e.target.value,
                                        key,
                                        index
                                      );
                                    }}
                                    className="contract_input"
                                    value={item[key]}
                                    placeholder={header_names[key]}
                                  />
                                </td>
                              );
                            }
                          )}
                          <td>
                            <Button
                              onClick={() => {
                                this.deleterow(index);
                              }}
                              type="danger"
                            >
                              删除
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
