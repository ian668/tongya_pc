import React, { Component } from "react";
import Sidemenu from "../../common/Sidemenu";
import { DatePicker, Button, Input, message,Tag,Empty } from "antd";
import moment from "moment";
import locale from "antd/lib/date-picker/locale/zh_CN";
import "moment/locale/zh-cn";
import { fetchData } from "../../../services/httpService";
class TeamProfit extends Component {
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
      parent_id:0,
      oAgentSumPerDay:'',
      oSelfProfit:'',
      prev_username:[],
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
      "user-profits?page=" +
      this.state.page.current_page +
      "&date_from=" +
      this.state.date_from +
      "&date_to=" +
      this.state.date_to +
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

  checkChildren(username,parent_username){
      let pages = this.state.page,prev_username=this.state.prev_username;
      prev_username.push(parent_username);
      pages.current_page = 1;
      this.setState({
          username:username,
          page:pages,
          prev_username:prev_username
      },()=>{
          this.loadData();
      })
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
  gotoTransfer(username){
      this.props.history.push({
        pathname: "/main/transfer",
        search: username
      });
  }

  goback(){
    let pages = this.state.page,prev_username = this.state.prev_username;
    let username = prev_username.length>0&&prev_username.pop();
    pages.current_page = 1;
    this.setState({
        page:pages,
        username:username
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
                <span>代理中心</span>
              </li>
              <li>
                <span>团队盈亏</span>
              </li>
              {this.state.prev_username.length>0&&(<Button onClick={()=>{this.goback()}} type="link">返回上一级</Button>)}
            </div>

            <div className="record">
              <div className="from">
              <DatePicker defaultValue={moment(this.state.date_from)} onChange={(date,dataString)=>{this.setState({date_from:dataString})}} locale={locale} size={"large"}/>
                <DatePicker defaultValue={moment(this.state.date_to)} onChange={(date,dataString)=>{this.setState({date_to:dataString})}} locale={locale} size={"large"}/>
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
                      <th>充值总额</th>
                      <th>提现总额</th>
                      <th>投注总额</th>
                      <th>派奖总额</th>
                      <th>投注返点</th>
                      <th>游戏盈亏</th>
                      <th>代理返点</th>
                      <th>促销红利</th>
                      <th>活动</th>
                      <th>充值手续费</th>
                      <th>净盈亏</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    {this.state.oAgentSumPerDay!=='' && (
                      <tr>
                        <td>团队总计</td>
                        <td>{this.state.oAgentSumPerDay.team_deposit}</td>
                        <td>{this.state.oAgentSumPerDay.team_withdrawal}</td>
                        <td>{this.state.oAgentSumPerDay.team_turnover}</td>
                        <td>{this.state.oAgentSumPerDay.team_prize}</td>
                        <td>{this.state.oAgentSumPerDay.team_bet_commission}</td>
                        <td>{this.state.oAgentSumPerDay.team_game_profit}</td>
                        <td>{this.state.oAgentSumPerDay.team_commission}</td>
                        <td>{this.state.oAgentSumPerDay.team_dividend}</td>
                        <td>{this.state.oAgentSumPerDay.team_wage}</td>
                        <td>{this.state.oAgentSumPerDay.team_deposit_fee}</td>
                        <td>
                          {this.state.oAgentSumPerDay.team_profit>0&&<Tag color="green">{this.state.oAgentSumPerDay.team_profit}</Tag>}
                          {this.state.oAgentSumPerDay.team_profit<=0&&<Tag color="volcano">{this.state.oAgentSumPerDay.team_profit}</Tag>}
                        </td>
                      </tr>
                    )}
                    {this.state.oSelfProfit!=='' && (
                      <tr>
                        <td>自己</td>
                        <td>{this.state.oSelfProfit.deposit||'0.000'}</td>
                        <td>{this.state.oSelfProfit.withdrawal||'0.000'}</td>
                        <td>{Number(this.state.oSelfProfit.turnover).toFixed(3)||'0.000'}</td>
                        <td>{this.state.oSelfProfit.prize||'0.000'}</td>
                        <td>{Number(this.state.oSelfProfit.bet_commission).toFixed(3)||'0.000'}</td>
                        <td>{this.state.oSelfProfit.game_profit||'0.000'}</td>
                        <td>{Number(this.state.oSelfProfit.commission).toFixed(3)||'0.000'}</td>
                        <td>{this.state.oSelfProfit.dividend||'0.000'}</td>
                        <td>{this.state.oSelfProfit.wage||'0.000'}</td>
                        <td>{Number(this.state.oSelfProfit.deposit_fee).toFixed(3)||'0.000'}</td>
                        <td>
                          {this.state.oSelfProfit.profit>0&&<Tag color="green">{Number(this.state.oSelfProfit.profit).toFixed(3)||'0.000'}</Tag>}
                          {this.state.oSelfProfit.profit<=0&&<Tag color="volcano">{Number(this.state.oSelfProfit.profit).toFixed(3)||'0.000'}</Tag>}
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td colSpan={12}>下级</td>
                    </tr>
                    {this.state.records.length===0&&(
                        <tr>
                            <td colSpan={12}><Empty description="暂无数据"/></td>
                        </tr>
                    )}
                    {this.state.records.length > 0 &&
                      this.state.records.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td><Button onClick={()=>{this.checkChildren(item.username,this.state.oSelfProfit.username)}} type="dashed">{item.username}</Button></td>
                            <td>{Number(item.team_deposit).toFixed(3)}</td>
                            <td>{Number(item.team_withdrawal).toFixed(3)}</td>
                            <td>{Number(item.team_turnover).toFixed(3)}</td>
                            <td>{Number(item.team_prize).toFixed(3)}</td>
                            <td>{Number(item.team_bet_commission).toFixed(3)}</td>
                            <td>{Number(item.team_game_profit).toFixed(3)}</td>
                            <td>{Number(item.team_commission).toFixed(3)}</td>
                            <td>{Number(item.team_dividend).toFixed(3)}</td>
                            <td>{Number(item.team_wage).toFixed(3)}</td>
                            <td>{Number(item.team_deposit_fee).toFixed(3)}</td>
                            <td>
                              {item.team_profit>0&&<Tag color="green">{Number(item.team_profit).toFixed(3)}</Tag>}
                              {item.team_profit<=0&&<Tag color="volcano">{Number(item.team_profit).toFixed(3)}</Tag>}
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

export default TeamProfit;
