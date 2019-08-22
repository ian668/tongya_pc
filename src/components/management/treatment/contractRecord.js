import React, { Component } from "react";
import { fetchData } from "../../../services/httpService";
import { message, Empty } from "antd";
import Sidemenu from "../../common/Sidemenu";
export default class ContractRecord extends Component {
  constructor(props) {
    super(props);
    this.fetch_request = "";
    this.state = {
      records: [],
      child_records: []
    };
  }
  componentDidMount() {
    this.fetch_request = fetchData("/users/dividend-show").subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          this.setState({
            records: res.data.data.cuRdivdend,
            child_records: res.data.data.mDvidendList
          });
          return;
        }
      },
      error => {
        message.error(error.message);
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
                <span>分红记录</span>
              </li>
              <li>
                <span>分红列表</span>
              </li>
            </div>

            <div className="record">
              <div className="table_box">
                <table>
                  <thead>
                    <tr>
                      <th>用户名</th>
                      <th>消费总额</th>
                      <th>盈亏总额</th>
                      <th>活跃人数</th>
                      <th>分红比例</th>
                      <th>分红金额</th>
                      <th>是否结算</th>
                      <th>结算时间</th>
                      <th>备注</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.records.length === 0 && (
                      <tr>
                        <td colSpan={9}>
                          <Empty description="暂无数据" />
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td colSpan={9}>自身分红</td>
                    </tr>
                    {this.state.records.length > 0 &&
                      this.state.records.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.username}</td>
                            <td>{item.consumeMoney}</td>
                            <td>{item.winMoney}</td>
                            <td>{item.activeNum}</td>
                            <td>{item.ratioNum}%</td>
                            <td>{item.money}</td>
                            <td>
                              {item.is_settle === 1 ? "已结算" : "未结算"}
                            </td>
                            <td>{item.settle_date}</td>
                            <td>{item.note}</td>
                          </tr>
                        );
                      })}
                    <tr>
                      <td colSpan={9}>下级分红</td>
                    </tr>
                    {this.state.child_records.length > 0 &&
                      this.state.child_records.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.username}</td>
                            <td>{item.consumeMoney}</td>
                            <td>{item.winMoney}</td>
                            <td>{item.activeNum}</td>
                            <td>{item.ratioNum}%</td>
                            <td>{item.money}</td>
                            <td>
                              {item.is_settle === 1 ? "已结算" : "未结算"}
                            </td>
                            <td>{item.settle_date}</td>
                            <td>{item.note}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
