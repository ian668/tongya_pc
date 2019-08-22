import React, { Component } from "react";
import "./Betrecord.scss";
import Sidemenu from "../../common/Sidemenu";
import { DatePicker, Select, Button,message, Input,Empty } from "antd";
import moment from "moment";
import locale from "antd/lib/date-picker/locale/zh_CN";
import "moment/locale/zh-cn";
import { fetchData } from "../../../services/httpService";
const { Option } = Select;
class TransferRecord extends Component {
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
      related_username: "",
      type: "", //转入 转出类型
      aTransferType: "",
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
      "user-transfers?pagesize=15&page=" +
      this.state.page.current_page +
      "&created_at_from=" +
      this.state.created_at_from +
      "&created_at_to=" +
      this.state.created_at_to +
      "&type=" +
      this.state.type +
      "&related_username=" +
      this.state.related_username;
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
            aTransferType: res.data.data.aTransferType
          });
          return;
        }
        if (res.data.errno === 1004) {
          this.props.history.push("/login");
        }
        message.warning(res.data.data.info|| res.data.Msg || res.data.type);
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
              <DatePicker defaultValue={moment(this.state.created_at_from)} onChange={(date,dataString)=>{this.setState({created_at_from:dataString})}} locale={locale} size={"large"}/>
                <DatePicker defaultValue={moment(this.state.created_at_to)} onChange={(date,dataString)=>{this.setState({created_at_to:dataString})}} locale={locale} size={"large"}/>
                <Input
                  value={this.state.related_username}
                  onChange={e => {
                    this.setState({ related_username: e.target.value });
                  }}
                  size="large"
                  placeholder="相关用户"
                  className="input"
                />
                <Select
                  value={this.state.type}
                  onChange={value => {
                    this.setState({
                      type: value
                    });
                  }}
                  size={"large"}
                >
                  <Option value="">所有类型</Option>
                  {Object.keys(this.state.aTransferType).map((item, index) => {
                    return (
                      <Option key={index} value={item}>
                        {this.state.aTransferType[item]}
                      </Option>
                    );
                  })}
                </Select>
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
                      <th>转账时间</th>
                      <th>相关用户</th>
                      <th>转账金额</th>
                      <th>类型</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.records.length === 0 && (
                      <tr>
                        <td colSpan={4}><Empty description="暂无数据"/></td>
                      </tr>
                    )}
                    {this.state.records.length > 0 &&
                      this.state.records.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.created_at}</td>
                            <td>{item.related_username}</td>
                            <td>{item.amount}</td>
                            <td>{this.state.aTransferType[item.type]}</td>
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

export default TransferRecord;
