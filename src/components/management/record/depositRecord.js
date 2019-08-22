import React, { Component } from "react";
import "./Betrecord.scss";
import Sidemenu from "../../common/Sidemenu";
import { DatePicker, Select, Button,Input, Tag, message,Empty } from "antd";
import moment from "moment";
import locale from "antd/lib/date-picker/locale/zh_CN";
import "moment/locale/zh-cn";
import { fetchData } from "../../../services/httpService";
const { Option } = Select;
class DepositRecord extends Component {
  constructor(props) {
    super(props);
    let start = new Date(),
      end = new Date();
    start.setHours(0, 0, 0);
    end.setDate(end.getDate() + 1);
    this.state = {
      created_at_from: moment(start).format("YYYY-MM-DD"),
      created_at_to: moment(end).format("YYYY-MM-DD"),
      records: [],
      username:'',
      aDepositMode: "",
      status: "",
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

  search(){
    let pages = this.state.page;
    pages.current_page = 1;
    this.setState({
        page:pages
    },()=>{
        this.loadData();
    })
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
      "user-recharges?pagesize=15&page=" +
      this.state.page.current_page +
      "&created_at_from=" +
      this.state.created_at_from +
      "&created_at_to=" +
      this.state.created_at_to +
      "&username=" +
      this.state.username +
      "&status=" +
      this.state.status;
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
            aDepositMode: res.data.data.aDepositMode
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
                <span>充值记录</span>
              </li>
            </div>

            <div className="record">
              <div className="from">
                <DatePicker defaultValue={moment(this.state.created_at_from)} onChange={(date,dataString)=>{this.setState({created_at_from:dataString})}} locale={locale} size={"large"}/>
                <DatePicker defaultValue={moment(this.state.created_at_to)} onChange={(date,dataString)=>{this.setState({created_at_to:dataString})}} locale={locale} size={"large"}/>
                <Select
                  value={this.state.status}
                  onChange={value => {
                    this.setState({
                      status: value
                    });
                  }}
                  size={"large"}
                >
                  <Option value="">所有状态</Option>
                  <Option value="1">申请成功</Option>
                  <Option value="3">充值成功</Option>
                  <Option value="5">充值失败</Option>
                </Select>
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
                      <th>用户名</th>
                      <th>编号</th>
                      <th>充值时间</th>
                      <th>申请金额</th>
                      <th>实际充值</th>
                      <th>手续费</th>
                      <th>充值方式</th>
                      <th>状态</th>
                      {/* <th>备注</th> */}
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
                            <td>{item.username}</td>
                            <td>{item.company_order_num}</td>
                            <td>{item.created_at}</td>
                            <td>{item.amount}</td>
                            <td>{item.real_amount || "0.000"}</td>
                            <td>{Number(item.fee).toFixed(3)}</td>
                            <td>{item.bank_name}</td>
                            <td>
                              <Tag color={item.status_code===3?"green":'volcano'}>{item.status}</Tag>
                            </td>
                            {/* <td>{item.note}</td> */}
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

export default DepositRecord;
