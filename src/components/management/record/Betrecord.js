import React, { Component } from "react";
import "./Betrecord.scss";
import Sidemenu from "../../common/Sidemenu";
import { DatePicker, Select, Input, Button, Tag, message, Modal,Empty } from "antd";
import moment from "moment";
import update from "immutability-helper";
import locale from "antd/lib/date-picker/locale/zh_CN";
import "moment/locale/zh-cn";
import { getAllLottery } from "../../../services/utilsService";
import { fetchData } from "../../../services/httpService";
const lottery = getAllLottery();
const { Option } = Select;
const status_cn = {
  0: "未开奖",
  1: "已撤单",
  2: "未中奖",
  3: "已中奖",
  4: "已派奖",
  5: "系统撤单"
};
const coefficient_cn = {
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
      status: "",
      username: "",
      currentRecord: {},
      lottery_id: "",
      is_history: "0",
      records: [],
      show_bet_modal: false,
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

  loadData() {
    let url =
      "projects?pagesize=15&page="+this.state.page.current_page+"&is_history="+this.state.is_history+"&bought_at_from=" +
      this.state.bought_at_from +
      "&bought_at_to=" +
      this.state.bought_at_to +
      "&lottery_id="+this.state.lottery_id+"&username="+this.state.username+"&status="+this.state.status;
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
            username: res.data.data.username,
            records: records
          });
          return;
        }
        if(res.data.errno === 1004){
            this.props.history.push('/login');
        }
        message.warning(res.data.type||res.data.Msg||res.data.data.info);
      },
      error => {
        message.error(error.message);
      }
    );
  }

  onDateChange(date,dateString){
      this.setState({
          bought_at_from:dateString[0],
          bought_at_to:dateString[1],
      })
  }

  check_detail(item) {
    this.setState({
      currentRecord: item,
      show_bet_modal: true
    });
  }

  update_bet_list(id) {
    let list = this.state.records;
    let index = list.findIndex(function(c) {
      return c.id.toString() === id.toString();
    });
    var updatedObj = update(list[index], {
      status: { $set: "已撤单" },
      statuscode: { $set: 1 }
    });
    var newData = update(list, {
      $splice: [[index, 1, updatedObj]]
    });
    this.setState({ records: newData });
  }

  update_bet_current() {
    var updatedObj = update(this.state.currentRecord, {
      status: { $set: "已撤单" },
      statuscode: { $set: 1 }
    });
    this.setState({ currentRecord: updatedObj });
  }

  cancel() {
    let id = this.state.currentRecord.id;
    this.fetch_request = fetchData(
      "/mobile-projects/" + id + "/drop"
    ).subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          message.success(res.data.Msg);
          this.update_bet_current();
          this.update_bet_list(id);
          return;
        }
        message.warning(res.data.Msg, 1);
      },
      error => {
        message.error("/mobile-projects/" + id + "/drop" + error.message);
      }
    );
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

  closeBetModal() {
    this.setState({
      show_bet_modal: false
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
                <span>投注记录</span>
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
                  value={this.state.status}
                  onChange={value => {
                      console.log(value)
                    this.setState({
                      status: value
                    });
                  }}
                  size={"large"}
                >
                <Option value="">选择状态</Option>
                  {Object.keys(status_cn).map((item, index) => {
                    return (
                      <Option key={index} value={item}>
                        {status_cn[item]}
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
                  placeholder="开奖期号"
                  className="input"
                />
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
                  icon="search"
                  type="primary"
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
                      <th>奖期</th>
                      <th>玩法</th>
                      <th>投注内容</th>
                      <th>投注金额</th>
                      <th>倍数</th>
                      <th>奖金</th>
                      <th>返点</th>
                      <th>投注时间</th>
                      <th>状态</th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.records.length===0&&(
                        <tr>
                            <td colSpan={10}><Empty description="暂无数据"/></td>
                        </tr>
                    )}
                    {this.state.records.length > 0 &&
                      this.state.records.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{lottery[item.lottery_id]}</td>
                            <td>{item.issue}</td>
                            <td>{item.title}</td>
                            <td>
                              <Tag
                                onClick={() => {
                                  this.check_detail(item);
                                }}
                                color="green"
                              >
                                查看详情
                              </Tag>
                            </td>
                            <td>{item.amount}</td>
                            <td>{item.multiple}</td>
                            <td>
                              {item.prize === null ? "0.000" : item.prize}
                            </td>
                            <td>{item.prize_group}</td>
                            <td>{item.created_at}</td>
                            <td>
                              {item.status === 0 && (
                                <Tag color="gold">未开奖</Tag>
                              )}
                              {item.status === 1 && (
                                <Tag color="volcano">已撤单</Tag>
                              )}
                              {item.status === 2 && (
                                <Tag color="volcano">未中奖</Tag>
                              )}
                              {item.status === 3 && (
                                <Tag color="green">已中奖</Tag>
                              )}
                              {item.status === 4 && (
                                <Tag color="green">已派奖</Tag>
                              )}
                              {item.status === 5 && (
                                <Tag color="volcano">系统撤单</Tag>
                              )}
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
          title={"投注订单详情"}
          visible={this.state.show_bet_modal}
          onOk={
            this.state.currentRecord.status === 0
              ? this.cancel.bind(this)
              : this.closeBetModal.bind(this)
          }
          onCancel={this.closeBetModal.bind(this)}
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
                    <th>期号</th>
                    <td>{this.state.currentRecord.issue}</td>
                    <th>奖金</th>
                    <td>{this.state.currentRecord.prize || "0.000"}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>投注金额/注数</th>
                    <td><Tag color="green">{this.state.currentRecord.amount}元</Tag>/{this.state.currentRecord.locked_prize}注</td>
                    <th>返点</th>
                    <td>{this.state.currentRecord.prize_group}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>模式</th>
                    <td>
                      {coefficient_cn[this.state.currentRecord.coefficient]}
                    </td>
                    <th>状态</th>
                    <td>
                      {/* {status_cn[this.state.currentRecord.status]} */}
                      {this.state.currentRecord.status === 0 && (
                        <Tag color="gold">未开奖</Tag>
                      )}
                      {this.state.currentRecord.status === 1 && (
                        <Tag color="volcano">已撤单</Tag>
                      )}
                      {this.state.currentRecord.status === 2 && (
                        <Tag color="volcano">未中奖</Tag>
                      )}
                      {this.state.currentRecord.status === 3 && (
                        <Tag color="green">已中奖</Tag>
                      )}
                      {this.state.currentRecord.status === 4 && (
                        <Tag color="green">已派奖</Tag>
                      )}
                      {this.state.currentRecord.status === 5 && (
                        <Tag color="volcano">系统撤单</Tag>
                      )}
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>投注时间</th>
                    <td>{this.state.currentRecord.bought_at}</td>
                    <th>开奖号码</th>
                    <td>{this.state.currentRecord.winning_number}</td>
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
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Betrecord;
