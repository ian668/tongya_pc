import React, { Component } from "react";
import Sidemenu from "../../common/Sidemenu";
import { DatePicker, Button, Input, message, Empty, Modal, Slider } from "antd";
import moment from "moment";
import './team.scss'
import locale from "antd/lib/date-picker/locale/zh_CN";
import "moment/locale/zh-cn";
import { fetchData,submitData } from "../../../services/httpService";
class TeamDeposit extends Component {
  constructor(props) {
    super(props);
    let start = new Date(),
      end = new Date();
    start.setHours(0, 0, 0);
    end.setDate(end.getDate() + 1);
    this.state = {
      id:'',
      date_from: '',
      date_to: '',
      records: [],
      username: "",
      parent_id: 0,
      set_prize_group: false,
      prev_parent_id: [0],
      prize_group: "",
      point: "",
      min_prize: 0,
      max_prize: 0,
      _token:'',
      page: {
        current_page: 1,
        pages: [],
        last_page: 1,
        per_page: 50,
        total: 0
      }
    };
    this.fetch_request = "";
    this.submit_request = '';
  }

  componentDidMount() {
    this.loadData();
  }

  componentWillUnmount() {
    message.destroy();
    this.fetch_request && this.fetch_request.unsubscribe();
    this.submit_request && this.submit_request.unsubscribe();
  }

  loadData() {
    let url =
      "users?page=" +
      this.state.page.current_page +
      "&date_from=" +
      this.state.date_from +
      "&date_to=" +
      this.state.date_to +
      "&username=" +
      this.state.username +
      "&parent_id=" +
      this.state.parent_id;
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

  checkChildren(id, parent_id) {
    let pages = this.state.page,
      prev_parent_id = this.state.prev_parent_id;
    prev_parent_id.push(parent_id);
    pages.current_page = 1;
    this.setState(
      {
        page: pages,
        parent_id: id,
        prev_parent_id: prev_parent_id
      },
      () => {
        this.loadData();
      }
    );
  }

  search() {
    let pages = this.state.page;
    pages.current_page = 1;
    this.setState(
      {
        page: pages,
        parent_id: 0
      },
      () => {
        this.loadData();
      }
    );
  }

  gotoTransfer(username) {
    this.props.history.push({
      pathname: "/main/transfer",
      search: "tag=sub3-7&username="+username
    });
  }

  goback() {
    let pages = this.state.page,
      prev_parent_id = this.state.prev_parent_id;
    let parent_id = prev_parent_id.pop();
    pages.current_page = 1;
    this.setState(
      {
        page: pages,
        prev_parent_id: prev_parent_id,
        parent_id: parent_id
      },
      () => {
        this.loadData();
      }
    );
  }

  show_prize_group(id){
    this.setState({
      id:id
    });
    this.fetch_request = fetchData('/user-user-prize-sets/set-prize-set/'+id).subscribe(res=>{
      let aDiffPrizes = res.data.data.aDiffPrizes, length = aDiffPrizes.length;
      if(length===1){
        message.warning('奖金组已最高');
        return;
      }
      let min_prize = aDiffPrizes[0],
      max_prize = aDiffPrizes[aDiffPrizes.length - 1];
      this.setState({
        _token: res.data.data.token,
        min_prize: min_prize,
        max_prize: max_prize,
        prize_group: min_prize,
        point: ((Number(max_prize) - Number(min_prize)) * 100) / 2000, //例如0.85 slider  step 0-1之间
        set_prize_group:true
      })
    },error=>{
      message.error('/user-user-prize-sets/set-prize-set/'+id+error.message);
    });
  }

  update_team(id, prize_group) {
    let records = this.state.records;
    for (let i = 0; i < records.length; i++) {
      if (id === records[i]["id"]) {
        records[i]["prize_group"] = prize_group;
        this.setState({
          records: records
        });
        return;
      }
    }
  }

  confirm_set_prize_group() {
    this.submit_request = submitData("/user-user-prize-sets/set-prize-set/" + this.state.id, {
      prize_group: this.state.prize_group.toString(),
      _token: this.state._token
    }).subscribe(res=>{
      if (res.data.isSuccess === 1) {
        message.success('设置成功');
        this.update_team(this.state.id, this.state.prize_group.toString());
        this.setState({ set_prize_group: false });
        return;
      }
    },error=>{
      message.error(error.message);
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
                <span>团队管理</span>
              </li>
              {this.state.parent_id !== 0 && (
                <Button
                  onClick={() => {
                    this.goback();
                  }}
                  type="link"
                >
                  返回上一级
                </Button>
              )}
            </div>

            <div className="record">
              <div className="from">
                <DatePicker
                  // value={moment(this.state.date_from)}
                  onChange={(date, dataString) => {
                    this.setState({ date_from: dataString });
                  }}
                  locale={locale}
                  size={"large"}
                />
                <DatePicker
                  // value={moment(this.state.date_to)}
                  onChange={(date, dataString) => {
                    this.setState({ date_to: dataString || null });
                  }}
                  locale={locale}
                  size={"large"}
                />
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
                      <th>在线状态</th>
                      <th>奖金组</th>
                      <th>下级人数</th>
                      <th>个人余额</th>
                      <th>注册时间</th>
                      <th>最后登录时间</th>
                      <th>操作</th>
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
                    {this.state.records.length > 0 &&
                      this.state.records.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <Button
                                onClick={() => {
                                  this.checkChildren(item.id, item.parent_id);
                                }}
                                type="link"
                              >
                                {item.username}
                              </Button>
                            </td>
                            <td>{item.is_agent === 1 ? "代理" : "玩家"}</td>
                            <td>{item.is_online === 0 ? "离线" : "在线"}</td>
                            <td>{item.prize_group}</td>
                            <td>{item.children_count}</td>
                            <td>{item.team_available}</td>
                            <td>{item.register_at}</td>
                            <td>{item.signin_at || "从未登录"}</td>
                            <td>
                              <Button onClick={()=>{this.show_prize_group(item.id)}} type="link">设置返点</Button>
                              &nbsp;&nbsp;&nbsp;&nbsp;
                              <Button
                                onClick={() => {
                                  this.gotoTransfer(item.username);
                                }}
                                type="link"
                              >
                                下级转账
                              </Button>
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
        <Modal
          title="设置返点"
          visible={this.state.set_prize_group}
          onOk={this.confirm_set_prize_group.bind(this)}
          onCancel={()=>{this.setState({set_prize_group:false})}}
          width={460}
          okText={"确定设置"}
          cancelText={"取消"}
        >
          <div className="set_modal">
            <span>{this.state.prize_group}</span> 
            <Slider
              min={this.state.min_prize}
              max={this.state.max_prize}
              step={2}
              value={this.state.prize_group}
              onChange={prize_group => {
                this.setState({
                  prize_group: prize_group,
                  point: Number(
                    (
                      (this.state.max_prize - prize_group) /
                      20
                    ).toFixed(2)
                  )
                });
              }}
              tipFormatter={null}
            />
            <span>{this.state.point}%</span>
          </div>
        </Modal>
      </div>
    );
  }
}

export default TeamDeposit;
