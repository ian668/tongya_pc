import React, { Component } from "react";
import Sidemenu from "../../common/Sidemenu";
import { DatePicker, Select, Button, Input, message,Empty } from "antd";
import moment from "moment";
import locale from "antd/lib/date-picker/locale/zh_CN";
import "moment/locale/zh-cn";
import { fetchData } from "../../../services/httpService";
const { Option } = Select;
class TeamDeposit extends Component {
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
      username: "",
      is_agent: "",
      oSelfProfit: "",
      oAgentSumPerDay: "",
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
        page:pages,
        parent_id:0
    },()=>{
        this.loadData();
    })
  }

  loadData() {
    let url =
      "user-profits/withdraw-deposit?pagesize=15&page=" +
      this.state.page.current_page +
      "&date_from=" +
      this.state.date_from +
      "&date_to=" +
      this.state.date_to +
      "&username=" +
      this.state.username +
      "&is_agent=" +
      this.state.is_agent;
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
            oAgentSumPerDay: res.data.data.oAgentSumPerDay,
            oSelfProfit: res.data.data.oSelfProfit
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
                <span>代理中心</span>
              </li>
              <li>
                <span>团队充提</span>
              </li>
            </div>

            <div className="record">
              <div className="from">
              <DatePicker defaultValue={moment(this.state.date_from)} onChange={(date,dataString)=>{this.setState({date_from:dataString})}} locale={locale} size={"large"}/>
                <DatePicker defaultValue={moment(this.state.date_to)} onChange={(date,dataString)=>{this.setState({date_to:dataString})}} locale={locale} size={"large"}/>
                <Select
                  value={this.state.is_agent}
                  onChange={value => {
                    this.setState({
                      is_agent: value
                    });
                  }}
                  size={"large"}
                >
                  <Option value="">全部用户</Option>
                  <Option value="2">自己</Option>
                  <Option value="1">下级</Option>
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
                      <th>用户属性</th>
                      <th>团队人数</th>
                      <th>充值总额</th>
                      <th>提现总额</th>
                      <th>可用余额</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.oAgentSumPerDay && (
                      <tr>
                        <td colSpan={2}>团队总计</td>
                        <td>{this.state.oAgentSumPerDay.team_numbers}</td>
                        <td>{this.state.oAgentSumPerDay.team_deposit}</td>
                        <td>{this.state.oAgentSumPerDay.team_withdrawal}</td>
                        <td>
                          {this.state.oAgentSumPerDay.team_deposit||0 - this.state.oAgentSumPerDay.team_withdrawal||0}
                        </td>
                      </tr>
                    )}
                    {this.state.oSelfProfit&& (
                      <tr>
                        <td>自己</td>
                        <td>自己</td>
                        <td>{this.state.oSelfProfit.team_numbers || "0"}</td>
                        <td>{this.state.oSelfProfit.deposit || "0.000"}</td>
                        <td>{this.state.oSelfProfit.withdrawal || "0.000"}</td>
                        <td>
                          {this.state.oSelfProfit.deposit ||
                            0 - this.state.oAgentSumPerDay.withdrawal ||
                            0}
                        </td>
                      </tr>
                    )}
                    <tr>
                        <td colSpan={6}>直属下级</td>
                    </tr>
                    {this.state.records.length===0&&(
                        <tr>
                            <td colSpan={6}><Empty description="暂无数据"/></td>
                        </tr>
                    )}
                    {this.state.records.length > 0 &&
                      this.state.records.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.username}</td>
                            <td>下级</td>
                            <td>{item.team_numbers || 0}</td>
                            <td>{item.team_deposit || "0.000"}</td>
                            <td>{item.team_withdrawal || "0.000"}</td>
                            <td>{item.team_deposit - item.team_withdrawal}</td>
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
                          onClick={() => {
                            let pages = this.state.page;
                            pages["current_page"] = page;
                            this.setState(
                              {
                                page: pages
                              },
                              () => {
                                this.loadData();
                              }
                            );
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

export default TeamDeposit;
