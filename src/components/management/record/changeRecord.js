import React, { Component } from "react";
import "./Betrecord.scss";
import Sidemenu from "../../common/Sidemenu";
import { DatePicker, Select, Input, Button, Tag, message,Empty } from "antd";
import moment from "moment";
import locale from "antd/lib/date-picker/locale/zh_CN";
import "moment/locale/zh-cn";
import {
  getAllLottery,
} from "../../../services/utilsService";
import { fetchData } from "../../../services/httpService";
const lottery = getAllLottery();
const { Option } = Select;
const type_cn = {
    1: "在线充值",
    2: "提取现金",
    3: "转账转入",
    4: "转账转出",
    5: "追号冻结",
    6: "投注解冻",
    7: "加入游戏",
    8: "撤单返款",
    9: "提现冻结",
    10: "提现解冻",
    11: "派发奖金",
    12: "撤销派奖",
    13: "派发返点",
    14: "撤销返点",
    15: "追号返款",
    16: "充值费用返还",
    17: "充值手续费",
    18: "人工充值",
    19: "管理员提现",
    23: "促销派奖-彩票",
    28: "投注返点",
    34: "活动",
    100: "其他"
};
const number_type_cn = {
    "serial_number":'账变编号',
    "project_no":'注单编号',
    "trace_id":'追号编号',
    "issue":'奖期编号',
}
class Betrecord extends Component {
  constructor(props) {
    super(props);
    let start = new Date(),
      end = new Date();
    start.setHours(0, 0, 0);
    end.setDate(end.getDate() + 1);
    this.state = {
      created_at_from: moment(start).format("YYYY-MM-DD"),
      created_at_to: moment(end).format("YYYY-MM-DD"),
      type_id: "",
      username: "",
      currentRecord: {},
      lottery_id: "",
      is_history: "0",
      number_type:'serial_number',
      number_value:'',
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
      "user-transactions?pagesize=15&page="+this.state.page.current_page+
      "&is_history="+this.state.is_history+
      "&created_at_from=" +this.state.created_at_from +
      "&created_at_to=" +this.state.created_at_to +
      "&lottery_id="+this.state.lottery_id+
      "&username="+this.state.username+
      "&number_type="+this.state.number_type+
      "&number_value="+this.state.number_value+
      "&type_id="+this.state.type_id;
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
  render() {
    return (
      <div>
        <div className="container">
          <Sidemenu history={this.props.history}/>
          <div className="mng_content">
            <div className="breadcrumb">
              <li>
                <span>资金记录</span>
              </li>
              <li>
                <span>账变记录</span>
              </li>
            </div>

            <div className="record">
              <div className="from">
              <DatePicker style={{width:'120px'}} defaultValue={moment(this.state.created_at_from)} onChange={(date,dataString)=>{this.setState({created_at_from:dataString})}} locale={locale} size={"large"}/>
              <DatePicker style={{width:'120px'}} defaultValue={moment(this.state.created_at_to)} onChange={(date,dataString)=>{this.setState({created_at_to:dataString})}} locale={locale} size={"large"}/>

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
                  value={this.state.type_id}
                  onChange={value => {
                    this.setState({
                      type_id: value
                    });
                  }}
                  size={"large"}
                >
                <Option value="">选择账变类型</Option>
                  {Object.keys(type_cn).map((item, index) => {
                    return (
                      <Option key={index} value={item}>
                        {type_cn[item]}
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
                <Select
                  value={this.state.number_type}
                  onChange={value => {
                    this.setState({
                        number_type: value
                    });
                  }}
                  size={"large"}
                >
                  <Option value="serial_number">账变编号</Option>
                  <Option value="project_no">注单编号</Option>
                  <Option value="trace_id">追号编号</Option>
                  <Option value="issue">奖期编号</Option>
                </Select>
                <Input
                  value={this.state.number_value}
                  onChange={e => {
                    this.setState({ number_value: e.target.value });
                  }}
                  size="large"
                  placeholder={number_type_cn[this.state.number_type]}
                  className="input"
                />
                <Input
                  value={this.state.username}
                  onChange={e => {
                    this.setState({ username: e.target.value });
                  }}
                  size="large"
                  placeholder="用户账号"
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
                      <th>编号</th>
                      <th>时间</th>
                      <th>账变类型</th>
                      <th>游戏</th>
                      <th>变动金额</th>
                      <th>余额</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.records.length===0&&(
                        <tr>
                            <td colSpan={6}><Empty description="暂无数据"/></td>
                        </tr>
                    )}
                    {this.state.records.length > 0 &&
                      this.state.records.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.serial_number}</td>
                            <td>{item.created_at}</td>
                            <td>{item.cn_title}</td>
                            <td>{lottery[item.lottery_id]}</td>
                            <td>
                                <Tag color={Number(item.amount)<=0?'volcano':'green'}>{item.amount}</Tag>
                            </td>
                            <td>{Number(item.available).toFixed(3)}</td>
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
                          key={index}
                          onClick={()=>{
                            let pages = this.state.page;
                            pages['current_page'] = page;
                            this.setState({
                              page:pages
                            },()=>{
                              this.loadData();
                            })
                          }}
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
      </div>
    );
  }
}

export default Betrecord;
