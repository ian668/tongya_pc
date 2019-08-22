import React, { Component } from "react";
import Sidemenu from "../../common/Sidemenu";
import { Link } from "react-router-dom";
import "./Announce.scss";
import { Empty, message } from "antd";
import { fetchData } from "../../../services/httpService";
class Announce extends Component {
  constructor(props) {
    super(props);
    this.fetch_request = "";
    this.state = {
      list: [],
      page: {
        current_page: 1,
        pages: [],
        last_page: 1,
        per_page: 50,
        total: 0
      }
    };
  }

  componentDidMount() {
    this.fetch_request = fetchData("/mobile-announcements").subscribe(
      res => {
        if (!res) {
          message.warning("请求非法", 1);
          return;
        }
        if (res.data.isSuccess === 1) {
          //计算分页
          let page = this.state.page;
          page = {
            current_page: res.data.data.current_page,
            pages: [],
            last_page: res.data.data.last_page,
            per_page: res.data.data.per_page,
            total: res.data.data.total
          };
          var row = page.total,
            pageCount = page.per_page,
            sum = (row - 1) / pageCount + 1;
          for (var i = 1; i <= sum; i++) {
            page.pages.push(i);
          }
          this.setState({
            page: page,
            list: res.data.data.data
          });
        }
      },
      error => {
        message.error("/mobile-announcements" + error.message, 1);
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
                <span>消息中心</span>
              </li>
              <li>
                <span>平台公告</span>
              </li>
            </div>

            <div className="announce">
              <div className="table_box">
                <table>
                  <thead>
                    <tr>
                      <th className="title">公告标题</th>
                      <th className="time">发布时间</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.list.length === 0 && (
                      <tr>
                        <td colSpan={2}>
                          <Empty description="暂无数据" />
                        </td>
                      </tr>
                    )}
                    {this.state.list.length > 0 &&
                      this.state.list.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <Link to={"/main/announce_content/" + item.id+'?tag=sub5-21'}>
                                {item.title}
                              </Link>
                            </td>
                            <td>{item.created_at}</td>
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

export default Announce;
