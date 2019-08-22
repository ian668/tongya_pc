import React, { Component } from "react";
import "./Betrecord.scss";
import Sidemenu from "../../common/Sidemenu";
import { DatePicker,Button, Tag, message,Empty } from "antd";
import moment from "moment";
import locale from "antd/lib/date-picker/locale/zh_CN";
import "moment/locale/zh-cn";
import { fetchData } from "../../../services/httpService";
class SelfRecord extends Component {
  constructor(props) {
    super(props);
    let start = new Date(),
      end = new Date();
    start.setHours(0, 0, 0);
    end.setDate(end.getDate() + 1);
    this.state = {
      date_from: moment(start).format("YYYY-MM-DD"),
      date_to: moment(end).format("YYYY-MM-DD"),
      records: [],
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

  componentWillUnmount() {
    message.destroy();
    this.fetch_request && this.fetch_request.unsubscribe();
  }

  loadData() {
    let url =
      "user-profits/self?pagesize=15&page=" +
      this.state.page.current_page +
      "&date_from=" +
      this.state.date_from +
      "&date_to=" +
      this.state.date_to;
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
            records: records,
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

  search(){
    let pages = this.state.page;
    pages.current_page = 1;
    this.setState({
        page:pages
    },()=>{
        this.loadData();
    })
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
                <span>个人盈亏记录</span>
              </li>
            </div>
            <div className="record">
              <div className="from">
              <DatePicker defaultValue={moment(this.state.date_from)} onChange={(date,dataString)=>{this.setState({date_from:dataString})}} locale={locale} size={"large"}/>
                <DatePicker defaultValue={moment(this.state.date_to)} onChange={(date,dataString)=>{this.setState({date_to:dataString})}} locale={locale} size={"large"}/>
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
                      <th>日期</th>
                      <th>充值总额</th>
                      <th>提现总额</th>
                      <th>投注总额</th>
                      <th>派奖总额</th>
                      <th>投注返点</th>
                      <th>游戏盈亏</th>
                      <th>代理返点</th>
                      <th>促销红利</th>
                      <th>充值手续费</th>
                      <th>净盈亏</th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.records.length === 0 && (
                      <tr>
                        <td colSpan={11}><Empty description="暂无数据"/></td>
                      </tr>
                    )}
                    {this.state.records.length > 0 &&
                      this.state.records.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.date}</td>
                            <td>{Number(item.deposit).toFixed(3)||'0.000'}</td>
                            <td>{Number(item.withdrawal).toFixed(3)||'0.000'}</td>
                            <td>{Number(item.turnover).toFixed(3)||'0.000'}</td>
                            <td>{Number(item.prize).toFixed(3)||'0.000'}</td>
                            <td>{Number(item.bet_commission).toFixed(3)||'0.000'}</td>
                            <td>
                                <Tag color={Number(item.game_profit)<=0?'volcano':'green'}>{Number(item.game_profit).toFixed(3)}</Tag>
                            </td>
                            <td>{Number(item.commission).toFixed(3)||'0.000'}</td>
                            <td>{Number(item.dividend).toFixed(3)||'0.000'}</td>
                            <td>{Number(item.deposit_fee).toFixed(3)||'0.000'}</td>
                            <td>
                                <Tag color={Number(item.profit)<=0?'volcano':'green'}>{Number(item.profit).toFixed(3)}</Tag>
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

export default SelfRecord;
