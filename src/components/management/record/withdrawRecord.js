import React, { Component } from "react";
import "./Betrecord.scss";
import Sidemenu from "../../common/Sidemenu";
import { DatePicker, Input, Button, Tag, message ,Empty} from "antd";
import moment from "moment";
import locale from "antd/lib/date-picker/locale/zh_CN";
import "moment/locale/zh-cn";
import { fetchData } from "../../../services/httpService";
class WithdrawRecord extends Component {
  constructor(props) {
    super(props);
    let start = new Date(),
      end = new Date();
    start.setHours(0, 0, 0);
    end.setDate(end.getDate() + 1);
    this.state = {
      request_time_from: moment(start).format("YYYY-MM-DD"),
      request_time_to: moment(end).format("YYYY-MM-DD"),
      records: [],
      username:'',
      aStatusDesc:'',
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
      "user-withdrawals?pagesize=15&page=" +
      this.state.page.current_page +
      "&request_time_from=" +
      this.state.request_time_from +
      "&request_time_to=" +
      this.state.request_time_to+
      "&username=" +
      this.state.username;
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
            aStatusDesc:res.data.data.aStatusDesc
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
                <span>提现记录</span>
              </li>
            </div>

            <div className="record">
              <div className="from">
              <DatePicker defaultValue={moment(this.state.request_time_from)} onChange={(date,dataString)=>{this.setState({request_time_from:dataString})}} locale={locale} size={"large"}/>
                <DatePicker defaultValue={moment(this.state.request_time_to)} onChange={(date,dataString)=>{this.setState({request_time_to:dataString})}} locale={locale} size={"large"}/>
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
                  icon="search"
                >
                  搜索
                </Button>
              </div>

              <div className="table_box">
                <table>
                  <thead>
                    <tr>
                      <th>用户名</th>
                      <th>编号</th>
                      <th>申请时间</th>
                      <th>申请用户</th>
                      <th>申请金额</th>
                      <th>手续费</th>
                      <th>汇款金额</th>
                      <th>状态</th>
                      <th>备注</th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.records.length === 0 && (
                      <tr>
                        <td colSpan={9}><Empty description="暂无数据"/></td>
                      </tr>
                    )}
                    {this.state.records.length > 0 &&
                      this.state.records.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.username}</td>
                            <td>{item.serial_number}</td>
                            <td>{item.request_time}</td>
                            <td>{item.account_name}</td>
                            <td>{item.amount}</td>
                            <td>{item.withdraw_fee||'0.000'}</td>
                            <td>{item.transaction_amount}</td>
                            <td>
                              <Tag color="green">{this.state.aStatusDesc[item.status]}</Tag>
                            </td>
                            <td>{item.error_msg}</td>
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

export default WithdrawRecord;
