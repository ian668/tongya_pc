import React, { Component } from "react";
import "./Betrecord.scss";
import Sidemenu from "../../common/Sidemenu";
import { DatePicker, Select, Input, Button, Tag, message, Modal,Empty } from "antd";
import moment from "moment";
import update from "immutability-helper";
import locale from "antd/lib/date-picker/locale/zh_CN";
import "moment/locale/zh-cn";
import {
  getAllLottery,
  showNotification
} from "../../../services/utilsService";
import { fetchData } from "../../../services/httpService";
const lottery = getAllLottery();
const { Option } = Select;
const bet_status_cn = {
  0: "未开奖",
  1: "已撤单",
  2: "未中奖",
  3: "已中奖",
  4: "已派奖",
  5: "系统撤单"
};
const status_cn = {
  0: "进行中",
  1: "已完成",
  2: "用户撤单",
  3: "管理员撤单",
  4: "系统撤单"
};
const coefficient_cn = {
  "2.000": "2元",
  "0.200": "2角",
  "0.020": "2分",
  "0.002": "2厘",
  "1.000": "元",
  "0.100": "角",
  "0.010": "分",
  "0.001": "厘"
};

class Betrecord extends Component {
  constructor(props) {
    super(props);
    let start = new Date(),
      end = new Date();
    start.setHours(0, 0, 0);
    end.setDate(end.getDate() + 1);
    this.state = {
      bought_at_from: moment(start).format("YYYY-MM-DD"),
      bought_at_to: moment(end).format("YYYY-MM-DD"),
      issue: "",
      currentRecord: {},
      lottery_id: "",
      is_history: "0",
      records: [],
      aTraceDetailList: [],
      show_trace_modal: false,
      page: {
        current_page: 1,
        pages: [],
        last_page: 1,
        per_page: 50,
        total: 0
      }
    };
    this.fetch_request = "";
  }

  componentDidMount() {
    this.loadData();
  }

  componentWillUnmount(){
    message.destroy();
    this.fetch_request && this.fetch_request.unsubscribe();
  }

  search(){
    let pages = this.state.page;
    pages.current_page = 1;
    this.setState({
        page:pages
    },()=>{
        this.loadData();
    })
  }

  loadData() {
    let url =
      "traces?pagesize=15&page=" +
      this.state.page.current_page +
      "&is_history=" +
      this.state.is_history +
      "&bought_at_from=" +
      this.state.bought_at_from +
      "&bought_at_to=" +
      this.state.bought_at_to +
      "&lottery_id=" +
      this.state.lottery_id +
      "&issue=" +
      this.state.issue;
    this.fetch_request = fetchData(url).subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          let records = res.data.data.datas.data;
          //计算分页
          let page = this.state.page;
          page = {
            current_page: res.data.data.datas.current_page,
            pages: [],
            last_page: res.data.data.datas.last_page,
            per_page: res.data.data.datas.per_page,
            total: res.data.data.datas.total
          };
          var row = page.total,
            pageCount = page.per_page,
            sum = (row - 1) / pageCount + 1;
          for (var i = 1; i <= sum; i++) {
            page.pages.push(i);
          }
          this.setState({
            page: page,
            records: records
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

  check_detail(id) {
    this.fetch_request = fetchData("traces/view/" + id).subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          this.setState({
            currentRecord: res.data.data.data,
            aTraceDetailList: res.data.data.aTraceDetailList.data,
            show_trace_modal: true
          });
          return;
        }
        message.warning(res.data.type || res.data.Msg || res.data.data.info);
      },
      error => {
        message.error(error.message);
      }
    );
  }

  update_trace_list(id) {
    let list = this.state.aTraceDetailList;
    let index = list.findIndex(function(c) {
      return c.id.toString() === id.toString();
    });
    var updatedObj = update(list[index], {
        project: { $set: null },
        status: { $set: 2 }
    });
    var newData = update(list, {
      $splice: [[index, 1, updatedObj]]
    });
    this.setState({ aTraceDetailList: newData });
  }

  update_trace_all(){
    let traceList = this.state.aTraceDetailList;
    let arr=[];
    for (let index = 0; index < traceList.length; index++) {
      var updatedObj = update(traceList[index], {
        project: { $set: null },
        status: { $set: 2 }
      });
      arr.push(updatedObj);
    }
    this.setState({ aTraceDetailList: arr });
  }

  update_trace_record(id) {
    let list = this.state.records;
    let index = list.findIndex(function(c) {
      return c.id.toString() === id.toString();
    });
    var updatedObj = update(list[index], {
        status: { $set: 2 }
    });
    var newData = update(list, {
      $splice: [[index, 1, updatedObj]]
    });
    this.setState({ records: newData });
  }

  cancelAll(){
    this.fetch_request = fetchData(
        "/traces/stop/" + this.state.currentRecord.id
      ).subscribe(
        res => {
          if (res.data.isSuccess === 1) {
            message.success(res.data.data.info);
            this.update_trace_record(this.state.currentRecord.id);
            this.update_trace_all();
            this.setState({
                show_trace_modal:false
            })
            return;
          }
          message.warning(res.data.Msg||res.data.data.info, 1);
        },
        error => {
          message.error("/traces/stop/" + this.state.currentRecord.id + error.message);
        }
      );
  }



  cancel(id) {
    this.fetch_request = fetchData(
      "/traces/" + this.state.currentRecord.id + "/cancel/"+id
    ).subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          message.success(res.data.data.info);
          this.update_trace_list(id);
          return;
        }
        message.warning(res.data.Msg||res.data.data.info, 1);
      },
      error => {
        showNotification(
          "error",
          "温馨提示",
          "/traces/" + this.state.currentRecord.id + "/cancel/"+id + error.message
        );
      }
    );
  }

  closeTraceModal() {
    this.setState({
      show_trace_modal: false
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <Sidemenu history={this.props.history}/>
          <div className="mng_content">
            <div className="breadcrumb">
              <li>
                <span>游戏记录</span>
              </li>
              <li>
                <span>追号记录</span>
              </li>
            </div>

            <div className="record">
              <div className="from">
              <DatePicker defaultValue={moment(this.state.bought_at_from)} onChange={(date,dataString)=>{this.setState({bought_at_from:dataString})}} locale={locale} size={"large"}/>
                <DatePicker defaultValue={moment(this.state.bought_at_to)} onChange={(date,dataString)=>{this.setState({bought_at_to:dataString})}} locale={locale} size={"large"}/>

                <Select
                  onChange={value => {
                    this.setState({
                      lottery_id: value
                    });
                  }}
                  value={this.state.lottery_id}
                  size={"large"}
                >
                  <Option value="">选择彩种</Option>
                  {Object.keys(lottery).map((item, index) => {
                    return (
                      <Option key={index} value={item}>
                        {lottery[item]}
                      </Option>
                    );
                  })}
                </Select>
                <Select
                  value={this.state.is_history}
                  onChange={value => {
                    this.setState({
                      is_history: value
                    });
                  }}
                  size={"large"}
                >
                  <Option value="0">当前记录</Option>
                  <Option value="1">历史记录</Option>
                </Select>
                <Input
                  value={this.state.issue}
                  onChange={e => {
                    this.setState({ issue: e.target.value });
                  }}
                  size="large"
                  placeholder="奖期编号"
                  className="input"
                />
                <Button
                  onClick={() => {
                    this.search();
                  }}
                  type="primary"
                  icon="search"
                  size={"large"}
                >
                  搜索
                </Button>
              </div>

              <div className="table_box">
                <table>
                  <thead>
                    <tr>
                      <th>游戏</th>
                      <th>玩法</th>
                      <th>起始奖期</th>
                      <th>追号进度</th>
                      <th>总追号金额</th>
                      <th>已中奖金额</th>
                      <th>追中即停</th>
                      <th>操作</th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.records.length === 0 && (
                      <tr>
                        <td colSpan={8}><Empty description="暂无数据"/></td>
                      </tr>
                    )}
                    {this.state.records.length > 0 &&
                      this.state.records.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{lottery[item.lottery_id]}</td>
                            <td>{item.title}</td>
                            <td>{item.start_issue}</td>
                            <td>{item.amount}</td>
                            <td>{item.prize}</td>
                            <td>
                              {item.stop_on_won === 1 ? "停止追号" : "继续追好"}
                            </td>
                            <td>
                              <Tag color="gold">{status_cn[item.status]}</Tag>
                            </td>
                            <td>
                              <Tag
                                onClick={() => {
                                  this.check_detail(item.id);
                                }}
                                color="green"
                              >
                                查看详情
                              </Tag>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>

              <div className="page_turning">
                <div className="left">
                  记录条数:<span>{this.state.page.total}</span>，共
                  <span>{this.state.page.last_page}</span>页
                </div>

                <div className="right">
                  {this.state.page.pages.length > 0 &&
                    this.state.page.pages.map((page, index) => {
                      return (
                        <span
                        onClick={()=>{
                            let pages = this.state.page;
                            pages['current_page'] = page;
                            this.setState({
                              page:pages
                            },()=>{
                              this.loadData();
                            })
                          }}
                          key={index}
                          className={
                            page === this.state.page.current_page
                              ? "active"
                              : ""
                          }
                        >
                          {page}
                        </span>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          title={"追号订单详情"}
          visible={this.state.show_trace_modal}
          onOk={
            this.state.currentRecord.status === 0
              ? this.cancelAll.bind(this)
              : this.closeTraceModal.bind(this)
          }
          onCancel={this.closeTraceModal.bind(this)}
          okText={this.state.currentRecord.status === 0 ? "撤单" : "确定"}
          cancelText={"关闭"}
          width={720}
        >
          <div className="order_details">
            <div className="table_box">
              <table>
                <tbody>
                  <tr>
                    <th>游戏</th>
                    <td>{lottery[this.state.currentRecord.lottery_id]}</td>
                    <th>玩法</th>
                    <td>{this.state.currentRecord.title}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>起始期号</th>
                    <td>{this.state.currentRecord.start_issue}</td>
                    <th>已中奖金额</th>
                    <td>{this.state.currentRecord.prize}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>追号总金额</th>
                    <td>{this.state.currentRecord.amount}</td>
                    <th>完成期数</th>
                    <td>
                      {this.state.currentRecord.finished_issues}/
                      {this.state.currentRecord.total_issues}
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>追号状态</th>
                    <td>{status_cn[this.state.currentRecord.status]}</td>
                    <th>追号奖金组</th>
                    <td>{this.state.currentRecord.prize_group}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>追号时间</th>
                    <td>{this.state.currentRecord.bought_at}</td>
                    <th>取消期数</th>
                    <td>{this.state.currentRecord.canceled_issues}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>模式</th>
                    <td>
                      {coefficient_cn[this.state.currentRecord.coefficient]}
                    </td>
                    <th>追中即停</th>
                    <td>
                      {this.state.currentRecord.stop_on_won === 1
                        ? "停止追号"
                        : "继续追号"}
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>投注内容</th>
                    <td colSpan={3} className="content">
                      <div>{this.state.currentRecord.display_bet_number}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <table>
                <thead>
                  <tr>
                    <th>奖期</th>
                    <th>追号倍数</th>
                    <th>投注金额</th>
                    <th>追号状态</th>
                    <th>中奖状态</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.aTraceDetailList.length > 0 &&
                    this.state.aTraceDetailList.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th>{item.issue}</th>
                          <th>{item.multiple}</th>
                          <th>{item.amount}</th>
                          <th>{status_cn[item.status]}</th>
                          <th>
                            {item.project === null
                              ? status_cn[item.status]
                              : bet_status_cn[item.project.status]}
                          </th>
                          <th>
                            {item.status === 0 && (
                              <Button onClick={()=>{this.cancel(item.id)}} type="dashed">撤单</Button>
                            )}
                          </th>
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

export default Betrecord;
