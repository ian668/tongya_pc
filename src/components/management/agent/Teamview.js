import React, { Component } from "react";
import Sidemenu from "../../common/Sidemenu";
import "./Agent.scss";
import { Button, Icon, DatePicker, Radio, message } from "antd";
import locale from "antd/lib/date-picker/locale/zh_CN";
import { fetchData } from "../../../services/httpService";
import moment from "moment";
import { Line } from "react-chartjs-2";
const chart_labels = [
  { label: "充值量", value: "depositChart" },
  { label: "提现量", value: "withdrawalChart" },
  { label: "投注量", value: "turnoverChart" },
  { label: "派奖量", value: "prizeChart" },
  { label: "投注返点", value: "betComChart" },
  { label: "代理返点", value: "commissionChart" },
  { label: "活动", value: "wageChart" },
  { label: "新增会员数", value: "regChart" }
];

class Teamview extends Component {
  constructor(props) {
    super(props);
    this.fetch_request = "";
    let start = new Date(),
      end = new Date();
    start.setDate(start.getDate() - 2);
    this.state = {
      date_from: moment(start).format("YYYY-MM-DD"),
      date_to: moment(end).format("YYYY-MM-DD"),
      info: {},
      chart_data: {},
      check_value: "depositChart",
      total_deposit: 0.0,
      total_withdraw: 0.0,
      total_turnover: 0.0,
      total_prize: 0.0,
      total_commission: 0.0,
      total_bet_commission: 0.0,
      total_reg: 0.0
    };
  }

  getSum(total, num) {
    return total + num;
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    let url =
      "/user-profits?itype=1&date_from=" +
      this.state.date_from +
      "&date_to=" +
      this.state.date_to;
    this.fetch_request = fetchData(url).subscribe(
      res => {
        if (!res) {
          message.warning("非法请求");
          return;
        }
        if (res.data.isSuccess === 1) {
          let info = res.data.data.info;
          let chart_data = this.createChartData(
            info["depositChart"]["xAxis"],
            info["depositChart"]["yAxis"],
            "充值量"
          );
          this.setState({
            chart_data: chart_data,
            info: info,
            total_commission: info.commissionChart.yAxis
              .reduce(this.getSum)
              .toFixed(3),
            total_deposit: info.depositChart.yAxis
              .reduce(this.getSum)
              .toFixed(3),
            total_withdraw: info.withdrawalChart.yAxis
              .reduce(this.getSum)
              .toFixed(3),
            total_turnover: info.turnoverChart.yAxis
              .reduce(this.getSum)
              .toFixed(3),
            total_prize: info.prizeChart.yAxis.reduce(this.getSum).toFixed(3),
            total_bet_commission: info.betComChart.yAxis
              .reduce(this.getSum)
              .toFixed(3),
            total_reg: info.regChart.yAxis.reduce(this.getSum)
          });

          return;
        }
        if (res.data.errno === 1004) {
          this.props.history.push("/login");
        }
        message.warning(res.data.Msg || res.data.type || res.data.data.info);
      },
      error => {
        message.error(error.message);
      }
    );
  }

  show_chart(value) {
    let data = this.state.info[value],
      label = "";
    switch (value) {
      case "depositChart":
        label = "充值量";
        break;
      case "withdrawalChart":
        label = "提现量";
        break;
      case "turnoverChart":
        label = "投注量";
        break;
      case "prizeChart":
        label = "派奖量";
        break;
      case "betComChart":
        label = "投注返点量";
        break;
      case "depositChart":
        label = "充值量";
        break;
      case "commissionChart":
        label = "代理返点量";
        break;
      case "wageChart":
        label = "活动量";
        break;
      case "regChart":
        label = "新增用户量";
        break;
      default:
        break;
    }
    let chart_data = this.createChartData(data.xAxis, data.yAxis, label);
    this.setState({
      check_value: value,
      chart_data: chart_data
    });
  }

  createChartData(xAxis, yAxis, label) {
    return {
      labels: xAxis,
      datasets: [
        {
          label: label,
          data: yAxis,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    };
  }

  search_by_day(day) {
    let start = new Date(),
      end = new Date();
    start.setDate(start.getDate() - day);
    this.setState(
      {
        date_from: moment(start).format("YYYY-MM-DD"),
        date_to: moment(end).format("YYYY-MM-DD")
      },
      () => {
        this.loadData();
      }
    );
  }

  componentWillUnmount() {
    this.fetch_request && this.fetch_request.unsubscribe();
  }

  render() {
    return (
      <div>
        <div className="container">
          <Sidemenu history={this.props.history} />
          <div className="mng_content">
            <div className="breadcrumb">
              <li>
                <span>代理管理</span>
              </li>
              <li>
                <span>代理总览</span>
              </li>
            </div>
            <div className="teamview">
              <div className="agent_box">
                <div className="info">
                  <div className="icon_box">
                    <Icon type="team" />
                  </div>
                  <div className="text">
                    <p className="title">团队成员</p>
                    <p className="nub">
                      <span>{this.state.info.totalAll}</span>人（代理
                      <span>{this.state.info.totalAgent}</span>人，玩家
                      <span>{this.state.info.totalPlayer}</span>人）
                    </p>
                  </div>
                </div>

                <div className="info">
                  <div className="icon_box">
                    <Icon type="cloud" />
                  </div>

                  <div className="text">
                    <p className="title">团队在线人数</p>
                    <p className="nub">
                      <span>{this.state.info.totalOnline}</span>人
                    </p>
                  </div>
                </div>

                <div className="info">
                  <div className="icon_box">
                    <Icon type="money-collect" />
                  </div>
                  <div className="text">
                    <p className="title">团队余额</p>
                    <p className="nub">
                      <span>{this.state.info.totalBalance}</span>
                      元（不包含自己）
                    </p>
                  </div>
                </div>
              </div>

              <div className="from">
                <DatePicker
                  value={moment(this.state.date_from)}
                  onChange={(date, dataString) => {
                    this.setState({ date_from: dataString });
                  }}
                  locale={locale}
                  size={"large"}
                />
                <DatePicker
                  value={moment(this.state.date_to)}
                  onChange={(date, dataString) => {
                    this.setState({ date_to: dataString });
                  }}
                  locale={locale}
                  size={"large"}
                />
                <Button
                  onClick={() => {
                    this.search_by_day(2);
                  }}
                  size={"large"}
                  size={"large"}
                >
                  最近三天
                </Button>
                <Button
                  onClick={() => {
                    this.search_by_day(6);
                  }}
                  size={"large"}
                  size={"large"}
                >
                  最近七天
                </Button>
                <Button
                  icon="search"
                  onClick={() => {
                    this.loadData();
                  }}
                  size={"large"}
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
                      <th>充值量</th>
                      <th>提现量</th>
                      <th>投注量</th>
                      <th>派奖量</th>
                      <th>返点量</th>
                      <th>代理量</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.total_deposit}</td>
                      <td>{this.state.total_withdraw}</td>
                      <td>{this.state.total_turnover}</td>
                      <td>{this.state.total_prize}</td>
                      <td>{this.state.total_bet_commission}</td>
                      <td>{this.state.total_commission}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Radio.Group
                onChange={e => {
                  this.show_chart(e.target.value);
                }}
                value={this.state.check_value}
              >
                {chart_labels.map((item, index) => {
                  return (
                    <Radio key={index} value={item.value}>
                      {item.label}
                    </Radio>
                  );
                })}
              </Radio.Group>
              <Line
                data={this.state.chart_data}
                options={{
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          beginAtZero: true
                        }
                      }
                    ]
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Teamview;
