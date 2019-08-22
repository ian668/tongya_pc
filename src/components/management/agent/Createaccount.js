import React, { Component } from "react";
import Sidemenu from "../../common/Sidemenu";
import {
  Button,
  Input,
  Select,
  Slider,
  Tabs,
  Radio,
  Icon,
  message
} from "antd";
import { fetchData, submitData } from "../../../services/httpService";
import * as Clipboard from "clipboard";
const { TabPane } = Tabs;
const { Option } = Select;

class Createaccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _token: "",
      username: "",
      password: "a123456",
      type: "manul",
      link_list: [],
      valid_days: "0",
      is_agent: 1,
      is_show_agent: false,
      channel: "",
      point: "",
      prize_group: 0,
      iAgentMaxPrizeGroup: 0,
      iAgentMinPrizeGroup: 0,
      iCurrentUserPrizeGroup: 0,
      confirm_manul_create_loading: false,
      confirm_link_create_loading: false
    };
    this.init_request = "";
    this.submit_request = "";
  }

  switchType(key) {
    let type = "";
    switch (key) {
      case "1":
        //人工开户
        type = "manul";
        break;
      case "2":
        //链接开户
        type = "link";
        this.update_link_list();
        break;
      default:
        break;
    }
    this.setState({
      type: type
    });
  }

  loadData(type) {
    let url =
      type === "manul"
        ? "/mobile-users/accurate-new"
        : "/mobile-users/links-list?page=1";
    this.init_request = fetchData(url).subscribe(
      res => {
        if (!res) {
          message.warning("非法请求", 1);
          return;
        }
        if (res.data.isSuccess === 1) {
          this.setState({
            _token: res.data.data.token,
            point:
              ((Number(res.data.data.info.iAgentMaxPrizeGroup) -
                Number(res.data.data.info.iAgentMinPrizeGroup)) *
                100) /
              2000, //例如0.85 slider  step 0-1之间
            iAgentMaxPrizeGroup: parseInt(
              res.data.data.info.iAgentMaxPrizeGroup
            ),
            iAgentMinPrizeGroup: parseInt(
              res.data.data.info.iAgentMinPrizeGroup
            ),
            iCurrentUserPrizeGroup: parseInt(
              res.data.data.info.iCurrentUserPrizeGroup
            ),
            prize_group: Number(res.data.data.info.iAgentMinPrizeGroup),
            link_list: type === "link" ? res.data.data.info.data : []
          });
          return;
        }
        if (res.data.errno === 1004) {
          this.props.history.push("/login");
          return;
        }
        message.warning(res.data.data.info || res.data.Msg || res.data.type, 1);
      },
      error => {
        message.warning(url + error.message, 1);
      }
    );
  }

  confirm_manul_create() {
    if (!this.state.username) {
      message.warning("请输入用户名", 1);
      return;
    }
    this.setState({
      confirm_manul_create_loading: true
    });
    this.submit_request = submitData("/mobile-users/accurate-new", {
      username: this.state.username,
      password: this.state.password === "" ? "a123456" : this.state.password,
      prize_group: this.state.prize_group,
      is_player: this.state.is_agent ? "0" : "1"
    }).subscribe(
      res => {
        this.setState({
          confirm_manul_create_loading: false
        });
        if (!res) {
          message.warning("非法请求", 1);
          return;
        }
        if (res.data.isSuccess === 1) {
          this.setState({
            username: ""
          });
          message.success(res.data.data.info, 1);
          return;
        }
        if (res.data.errno === 1004) {
          this.props.history.push("/login");
          return;
        }
        message.warning(res.data.data.info, 1);
      },
      error => {
        this.setState({
          confirm_manul_create_loading: false
        });
        message.error("/mobile-users/accurate-new=>" + error.message, 1);
      }
    );
  }

  update_link_list() {
    this.init_request = fetchData("/mobile-users/links-list?page=1").subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          this.setState({
            link_list: res.data.data.info.data
          });
          setTimeout(() => {
            let clipboard = new Clipboard(".copy");
            clipboard.on("success", () => {
              message.success("复制成功!", 1);
            });
          }, 500);
          return;
        }
        if (res.data.errno === 1004) {
          this.props.history.push("/login");
          return;
        }
      },
      error => {
        message.error("/mobile-users/links-list?page=1=>" + error.message, 1);
      }
    );
  }

  confirm_link_create() {
    this.setState({
      confirm_link_create_loading: true
    });
    this.submit_request = submitData("/mobile-users/links-new", {
      valid_days: this.state.valid_days,
      prize_group: this.state.prize_group,
      is_player: this.state.is_agent ? "0" : "1"
    }).subscribe(
      res => {
        this.setState({
          confirm_link_create_loading: false
        });
        if (!res) {
          message.warning("非法请求", 1);
          return;
        }
        if (res.data.isSuccess === 1) {
          this.update_link_list();
          message.success("注册链接创建成功！", 1);
          return;
        }
        message.warning(res.data.data.info, 1);
      },
      error => {
        this.setState({
          confirm_link_create_loading: false
        });
        message.error("/mobile-users/accurate-new=>" + error.message);
      }
    );
  }

  componentDidMount() {
    this.loadData("manul");
  }
  componentWillUnmount() {
    message.destroy();
    this.init_request && this.init_request.unsubscribe();
    this.submit_request && this.submit_request.unsubscribe();
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
                <span>下级开户</span>
              </li>
            </div>
            <div className="createaccount">
              <Tabs onChange={this.switchType.bind(this)} type="card">
                <TabPane tab="手动开户" key="1">
                  <div className="inputgroup">
                    <div className="input">
                      <span className="label">用户类型</span>
                      <Radio.Group
                        onChange={e => {
                          this.setState({ is_agent: e.target.value });
                        }}
                        value={this.state.is_agent}
                        name="radiogroup"
                        defaultValue={1}
                      >
                        <Radio value={1}>
                          <span style={{ fontSize: 13 }}>代理</span>
                        </Radio>
                        <Radio value={0}>
                          <span style={{ fontSize: 13 }}>玩家</span>
                        </Radio>
                      </Radio.Group>
                    </div>

                    <div className="input">
                      <span className="label">用户名</span>
                      <Input
                        value={this.state.username}
                        onChange={e => {
                          this.setState({
                            username: e.target.value
                          });
                        }}
                        size="large"
                        placeholder=""
                      />
                    </div>

                    <div className="input">
                      <span className="label">登陆密码</span>
                      <Input.Password
                        value={this.state.password}
                        onChange={e => {
                          this.setState({
                            password: e.target.value
                          });
                        }}
                        placeholder="请输入登录密码"
                        size={"large"}
                      />
                      <div className="limit">
                        <Icon type="exclamation-circle" />
                        <p>提示：密码由6-16个数字、字母或符号组成。</p>
                      </div>
                    </div>

                    <div className="input">
                      <span className="label">奖金返点</span>
                      <Slider
                        min={this.state.iAgentMinPrizeGroup}
                        max={this.state.iAgentMaxPrizeGroup}
                        step={2}
                        value={this.state.prize_group}
                        onChange={prize_group => {
                          this.setState({
                            prize_group: prize_group,
                            point: Number(
                              (
                                (this.state.iAgentMaxPrizeGroup - prize_group) /
                                20
                              ).toFixed(2)
                            )
                          });
                        }}
                        tipFormatter={null}
                      />
                      <div className="backwater">
                        <span>{this.state.prize_group}</span>
                        <span>{this.state.point}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="btn">
                    <Button
                      loading={this.state.confirm_manul_create_loading}
                      onClick={this.confirm_manul_create.bind(this)}
                      type="primary"
                      size={"large"}
                    >
                      确定
                    </Button>
                  </div>
                </TabPane>
                <TabPane tab="链接开户" key="2">
                  <div className="inputgroup">
                    <div className="input">
                      <span className="label">用户类型</span>
                      <Radio.Group name="radiogroup" defaultValue={1}>
                        <Radio value={1}>
                          <span style={{ fontSize: 13 }}>代理</span>
                        </Radio>
                        <Radio value={2}>
                          <span style={{ fontSize: 13 }}>玩家</span>
                        </Radio>
                      </Radio.Group>
                    </div>

                    <div className="input">
                      <span className="label">链接有效期</span>
                      <Select
                        onChange={value => {
                          this.setState({
                            valid_days: value
                          });
                        }}
                        value={this.state.valid_days}
                        size={"large"}
                      >
                        <Option value="0">永久有效</Option>
                        <Option value="1">1天</Option>
                        <Option value="7">7天</Option>
                        <Option value="30">30天</Option>
                        <Option value="90">90天</Option>
                      </Select>
                    </div>

                    <div className="input">
                      <span className="label">奖金返点</span>
                      <Slider
                        min={this.state.iAgentMinPrizeGroup}
                        max={this.state.iAgentMaxPrizeGroup}
                        step={2}
                        value={this.state.prize_group}
                        onChange={prize_group => {
                          this.setState({
                            prize_group: prize_group,
                            point: Number(
                              (
                                (this.state.iAgentMaxPrizeGroup - prize_group) /
                                20
                              ).toFixed(2)
                            )
                          });
                        }}
                        tipFormatter={null}
                      />
                      <div className="backwater">
                        <span>{this.state.prize_group}</span>
                        <span>{this.state.point}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="btn">
                    <Button
                      loading={this.state.confirm_link_create_loading}
                      onClick={this.confirm_link_create.bind(this)}
                      type="primary"
                      size={"large"}
                    >
                      确定
                    </Button>
                  </div>

                  <div className="table_box">
                    <table>
                      <thead>
                        <tr>
                          <th>奖金组</th>
                          <th>注册人数</th>
                          <th>有效期</th>
                          <th>链接地址</th>
                          <th>生成时间</th>
                          <th>操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.link_list.length > 0 &&
                          this.state.link_list.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  {
                                    JSON.parse(item.prize_group_sets)[0][
                                      "prize_group"
                                    ]
                                  }
                                </td>
                                <td>
                                  {!item.created_count ? 0 : item.created_count}
                                </td>
                                <td>
                                  {!item.expired_at
                                    ? "永久有效"
                                    : item.expired_at.split(" ")[0]}
                                </td>
                                <td>{item.url}</td>
                                <td>{item.created_at}</td>
                                <td>
                                  <Button
                                    data-clipboard-text={item.url}
                                    className="copy"
                                    type="link"
                                  >
                                    复制链接
                                  </Button>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Createaccount;
