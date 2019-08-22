import React, { Component } from "react";
import { Menu, Icon } from "antd";
const { SubMenu } = Menu;
class Sidemenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: ["sub1"],
      selectedKeys:[''],
      is_show_contract:false,
      is_show_salary:false
    };
    this.rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5"];
  }
  // submenu keys of first level

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  componentDidMount(){
    console.log(this.props.history);
    let keys = window.location.href.split('?tag=')[1];
    this.setState({
      selectedKeys:[keys.split('-')[1]],
      openKeys:[keys.split('-')[0]],
      is_show_contract:window.localStorage.getItem('userDividendsHalf')==='0'?false:true,
      is_show_salary:window.localStorage.getItem('dailyWages')==='0'?false:true,
      is_agent:window.localStorage.getItem('is_agent')==='0'?false:true,
    });

  }

  render() {
    return (
      <div className="sidemenu">
        <p className="title">
          <Icon type="unordered-list" />
          管理中心
        </p>
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          selectedKeys={this.state.selectedKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: 200, backgroundColor: "#f5f5f5" }}
          onClick={item => {
            this.props.history.push({
                pathname: item.item.props.path,
                search: 'tag='+item.keyPath[1]+'-'+item.key
              });
          }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>账户管理</span>
              </span>
            }
          >
            <Menu.Item path="/main/user" key="1">
              个人中心
            </Menu.Item>
            <Menu.Item path="/main/bank" key="2">
              银行卡管理
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="profile" />
                <span>投注记录</span>
              </span>
            }
          >
            <Menu.Item path="/main/betrecord" key="3">
              彩票记录
            </Menu.Item>
            <Menu.Item path="/main/tracerecord" key="4">
              追号记录
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="wallet" />
                <span>资金管理</span>
              </span>
            }
          >
            <Menu.Item key="5" path="/main/charge">
            充值
            </Menu.Item>
            <Menu.Item key="6" path="/main/withdraw">
            提现
            </Menu.Item>
            <Menu.Item key="7" path="/main/transfer">下级转账
            </Menu.Item>
            <Menu.Item key="8" path="/main/changeRecord">账变记录
            </Menu.Item>
            <Menu.Item key="9" path="/main/depositRecord">充值记录
            </Menu.Item>
            <Menu.Item key="10" path="/main/withdrawRecord">提现记录
            </Menu.Item>
            <Menu.Item key="11" path="/main/transferRecord">转账记录
            </Menu.Item>
            <Menu.Item key="12" path="/main/selfRecord">个人盈亏
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="usergroup-add" />
                <span>代理管理</span>
              </span>
            }
          >
            {this.state.is_agent&&<Menu.Item key="13" path="/main/teamview">代理总览</Menu.Item>}
            <Menu.Item key="14" path="/main/createaccount">下级开户</Menu.Item>
            {this.state.is_agent&&<Menu.Item key="15" path="/main/teamprofit">团队盈亏</Menu.Item>}
            {this.state.is_agent&&<Menu.Item key="16" path="/main/teamdeposit">团队充提</Menu.Item>}
            {this.state.is_agent&&<Menu.Item key="17" path="/main/teammanage">团队管理</Menu.Item>}
            {this.state.is_agent&&this.state.is_show_contract&&(<Menu.Item key="18" path="/main/contract">契约分红</Menu.Item>)}
            {this.state.is_agent&&this.state.is_show_contract&&(<Menu.Item key="19" path="/main/contractRecord">分红记录</Menu.Item>)}
            {this.state.is_agent&&this.state.is_show_salary&&(<Menu.Item key="20" path="/main/salary">契约工资</Menu.Item>)}
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <span>
                <Icon type="mail" />
                <span>消息中心</span>
              </span>
            }
          >
            <Menu.Item key="21" path="/main/announce">
            平台公告
            </Menu.Item>
            <Menu.Item key="22" path="/main/station">
            站内信
            </Menu.Item>
            <Menu.Item key="23" path="/main/letter">
            上下级私信
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Sidemenu;
