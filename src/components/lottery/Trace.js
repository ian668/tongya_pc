import React, { Component } from "react";
import { Tabs, Checkbox, Input, Button, InputNumber } from "antd";
import { submitData } from "../../services/httpService";
import { showNotification } from "../../services/utilsService";
import update from "immutability-helper";
import CheckTrace from "./CheckTrace";
import eventProxy from "../common/eventProxy";
const { TabPane } = Tabs;

class Trace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      issue: this.props.issue,
      tracetype: 0,
      traceMaxTimes: this.props.traceMaxTimes,
      issue_list: [],
      times: 1,
      double_times: 2,
      issues: this.props.issues,
      trace_nums: 10,
      trace_total: 0,
      trace_diff: 2,
      start_times: 1,
      chase_total_money: 0,
      chase_total_nums: 0,
      is_trace_stop: true
    };
  }

  traceStop(e) {
    this.setState({
      is_trace_stop: e.target.checked
    });
  }

  changeType(key) {
    this.setState({
      chase_total_money: 0,
      chase_total_nums: 0,
      issue_list: [],
      tracetype: parseInt(key)
    });
  }

  set_times(type) {
    let times = Number(this.state.times);
    if (type === "minus") {
      times = times - 1 === 0 ? 1 : times - 1;
    }
    if (type === "plus") {
      times = times + 1;
    }
    this.setState({
      times: times.toString()
    });
  }

  checkedIssue(issue, index) {
    let active = this.refs["checked-" + issue].state.active;
    this.refs["checked-" + issue].setState(
      {
        active: !active
      },
      () => {
        this.toggleTrace(!active, index);
      }
    );
    // this.refs["label-" + issue].setState(
    //   {
    //     active: !active
    //   },
    //   () => {
    //     this.toggleTrace(!active, index);
    //   }
    // );
  }

  createIssues() {
    let td = [], //根据用户填写的条件生成的每期数据
      trace_total = this.state.traceMaxTimes, //全部期数
      times = this.state.times, //追号起始倍数
      double_times = this.state.double_times, //追号起始倍数
      trace_nums = this.state.trace_nums, //追号期数
      issues = this.props.issues,
      tm = 0, //生成后的总金额
      m = this.props.initalMoney; //每期金额的初始值
    if (Number(this.state.trace_nums) > trace_total) {
      showNotification("warning", "温馨提示", "超过最大追号期数", 1);
      return;
    }
    //同倍追号
    if (this.state.tracetype === 0) {
      for (let i = 0; i < Number(trace_nums); i++) {
        td.push({
          active: true,
          times: times,
          money: m * times,
          time: issues[i]["time"],
          issue: issues[i]["number"]
        });
        tm += Number(m) * Number(times);
      }
    }

    //翻倍追好
    if (this.state.tracetype === 1) {
      let d = parseInt(this.state.trace_diff, 10), //相隔期数
        t = parseInt(this.state.start_times, 10); //起始倍数为1
      d = isNaN(d) ? 0 : d;
      for (let i = 0; i < Number(trace_nums); i++) {
        if (i !== 0 && i % d === 0) {
          t *= double_times;
        }
        td.push({
          active: true,
          times: t,
          money: m * t,
          time: issues[i]["time"],
          issue: issues[i]["number"]
        });
        tm += m * t;
      }
    }

    this.setState({
      issue_list: td,
      chase_total_nums: this.state.trace_nums,
      chase_total_money: tm.toFixed(3)
    });
  }

  reset() {
    this.setState({
      issue_list: [],
      times: 1,
      double_times: 2,
      issues: [],
      trace_nums: 10,
      trace_total: "",
      trace_diff: 1,
      start_times: 1
    });
  }

  confirm_trace() {
    //组装追号
    let traceList = this.state.issue_list;
    if (traceList.length === 0) {
      showNotification("warning", "温馨提示", "没有生成追号", 1);
      return;
    }
    let traceStopValue = this.state.is_trace_stop ? 1 : -1,
      traceWinStop = this.state.is_trace_stop ? 1 : 0,
      betObj = this.props.betObj;

    betObj["orders"] = {};
    for (var prop in traceList) {
      if (traceList[prop]["active"]) {
        betObj["orders"][traceList[prop]["issue"]] = traceList[prop]["times"];
      }
    }
    betObj.amount = this.state.chase_total_money;
    betObj.traceWinStop = traceWinStop;
    betObj.traceStopValue = traceStopValue;
    betObj.isTrace = 1;
    submitData("/bets/bet/" + this.props.cpId, betObj).subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          eventProxy.trigger("refleshBalance");
          this.reset(); //重置数据
          this.props.clearCarts(); //清空购物车
          this.props.fetchRecord();
          showNotification("success", "温馨提示", res.data.Msg, 1);
          this.props.handleCloseTrace();
          return;
        }
        showNotification("warning", "温馨提示", res.data.Msg, 1);
      },
      error => {
        showNotification("error", "温馨提示", "确定追号" + error.message);
      }
    );
  }

  //   componentDidMount() {
  //     this.init_request = fetchData(
  //       "/bets/load-data/" + this.props.cpId + "?type=issue"
  //     ).subscribe(
  //       res => {
  //         if (res.data.isSuccess === 1) {
  //           this.setState({
  //             issue: res.data.data.currentNumber,
  //             issues: res.data.data.gameNumbers
  //           });
  //           return;
  //         }
  //         showNotification("warning", "温馨提示", res.data.Msg);
  //       },
  //       error => {
  //         showNotification("error", "温馨提示", error.message);
  //       }
  //     );
  //   }

  updateTotalMoney() {
    let list = this.state.issue_list,
      tm = 0,
      num = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i]["active"]) {
        num++;
        tm += Number(list[i]["money"]);
      }
    }
    this.setState({
      chase_total_nums: num,
      chase_total_money: tm
    });
  }

  toggleTrace(active, index) {
    let list = this.state.issue_list;
    var updatedObj = update(list[index], {
      active: { $set: active }
    });
    var newData = update(list, {
      $splice: [[index, 1, updatedObj]]
    });
    this.setState({ issue_list: newData }, () => {
      this.updateTotalMoney();
    });
  }

  updateSingleTrace(value, index) {
    let list = this.state.issue_list;
    var updatedObj = update(list[index], {
      times: { $set: value },
      money: { $set: Number(value) * Number(this.props.initalMoney) }
    });
    var newData = update(list, {
      $splice: [[index, 1, updatedObj]]
    });
    this.setState({ issue_list: newData }, () => {
      this.updateTotalMoney();
    });
  }

  render() {
    return (
      <div className="trace">
        <Tabs onChange={this.changeType.bind(this)} type="card">
          <TabPane tab="同倍追号" key="0">
            <div className="line1">
              <div>
                总期数:<span>{this.state.chase_total_nums}</span>期,追号总金额:
                <span>{this.state.chase_total_money}</span>元
              </div>
              <Checkbox
                checked={this.state.is_trace_stop}
                onChange={this.traceStop.bind(this)}
              >
                中奖停止追号
              </Checkbox>
              <div>当前期：{this.props.issue}</div>
            </div>

            <div className="line2">
              <span>起始倍数:</span>
              <InputNumber
                onChange={value => {
                  this.setState({
                    times: value
                  });
                }}
                min={1}
                max={10000}
                value={this.state.times}
              />
              <span>追号期数:</span>
              <InputNumber
                onChange={value => {
                  this.setState({
                    trace_nums: value
                  });
                }}
                min={1}
                max={10000}
                value={this.state.trace_nums}
              />
              <Button onClick={this.createIssues.bind(this)} type="primary">
                生成追号
              </Button>
            </div>

            <div className="table_box">
              <table>
                <thead>
                  <tr>
                    <th />
                    <th>期数</th>
                    <th>倍数</th>
                    <th>金额</th>
                    <th>开奖时间</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.issue_list.length > 0 &&
                    this.state.issue_list.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <CheckTrace
                              issue={item.issue}
                              index={index}
                              ref={"checked-" + item.issue}
                              checkedIssue={this.checkedIssue.bind(this)}
                            />
                          </td>
                          <td>{item.issue}</td>
                          <td>
                            <Input
                              onChange={e => {
                                this.updateSingleTrace(e.target.value, index);
                              }}
                              min={1}
                              max={10000}
                              value={item.times.toString()}
                            />
                            倍
                          </td>
                          <td>{item.money}元</td>
                          <td>{item.time}</td>
                        </tr>
                      );
                    })}
                  {this.state.issue_list.length === 0 && (
                    <tr>
                      <td colSpan={5}>暂未生成追号计划</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </TabPane>

          <TabPane tab="翻倍追号" key="1">
            <div className="line1">
              <div>
                总期数:<span>{this.state.chase_total_nums}</span>期,追号总金额:
                <span>{this.state.chase_total_money}</span>元
              </div>
              <Checkbox
                checked={this.state.is_trace_stop}
                onChange={this.traceStop.bind(this)}
              >
                中奖停止追号
              </Checkbox>
            </div>

            <div className="line2">
              <span>起始倍数:</span>
              <InputNumber
                onChange={value => {
                  this.setState({
                    start_times: value
                  });
                }}
                min={1}
                max={10000}
                value={this.state.start_times}
              />
              <span>隔</span>
              <InputNumber
                onChange={value => {
                  this.setState({
                    trace_diff: value
                  });
                }}
                min={1}
                max={10000}
                value={this.state.trace_diff}
              />
              <span>期，翻倍*</span>
              <InputNumber
                onChange={value => {
                  this.setState({
                    double_times: value
                  });
                }}
                min={1}
                max={10000}
                value={this.state.double_times}
              />
              <span>追号期数:</span>
              <InputNumber
                onChange={value => {
                  this.setState({
                    trace_nums: value
                  });
                }}
                min={1}
                max={10000}
                value={this.state.trace_nums}
              />
              <Button onClick={this.createIssues.bind(this)} type="primary">
                生成追号
              </Button>
            </div>

            <div className="table_box">
              <table>
                <thead>
                  <tr>
                    <th />
                    <th>期数</th>
                    <th>倍数</th>
                    <th>金额</th>
                    <th>开奖时间</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.issue_list.length > 0 &&
                    this.state.issue_list.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <CheckTrace
                              issue={item.issue}
                              index={index}
                              ref={"checked-" + item.issue}
                              checkedIssue={this.checkedIssue.bind(this)}
                            />
                          </td>
                          <td>{item.issue}</td>
                          <td>
                            <Input
                              onChange={e => {
                                this.updateSingleTrace(e.target.value, index);
                              }}
                              min={1}
                              max={10000}
                              value={item.times.toString()}
                            />
                            倍
                          </td>
                          <td>{item.money}元</td>
                          <td>{item.time}</td>
                        </tr>
                      );
                    })}
                  {this.state.issue_list.length === 0 && (
                    <tr>
                      <td colSpan={5}>暂未生成追号计划</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Trace;
