import React, { Component } from "react";
import "./Mobile.scss";
import SHeader from "../common/S_header";
import { Icon } from "antd";
import logo from "../../assets/img/mobile/down-logo.png?v=32323";
import qr from "../../assets/img/mobile/qr.png?v=232323";

class Mobile extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="mobile">
        <SHeader history={this.props.history}/>
        <div className="download">
          <div className="container">
            <img src={logo} alt="" className="logo" />
            <p className="title">掌上乐趣，随心所欲</p>
            <p>永泰娱乐 行走天下，财富人生</p>
            <img src={qr} alt="" className="qr" />
            <p>推荐使用手机浏览器自带的扫码工具扫描</p>
          </div>
        </div>

        <div className="list_box">
          <div className="container">
            <div className="list">
              <Icon type="heart" style={{ color: "#ff4040" }} />
              <div className="title">用心</div>
              <p>
                移动版集成了PC端的所有功能，彩种玩法也在不断更新中，让您在任何地点场合都能畅玩游戏
              </p>
            </div>

            <div className="list">
              <Icon type="lock" style={{ color: "#1890ff" }} />
              <div className="title">安心</div>
              <p>
                3大安全防护，手势解锁、资金密码、密保安全问题为您的游戏保驾护航
              </p>
            </div>

            <div className="list">
              <Icon type="transaction" style={{ color: "#67dc16" }} />
              <div className="title">贴心</div>
              <p>
                游戏充值提现速度更快，资金通过审批时间缩短50%，举手投足间我们已经为您准备好了一切
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mobile;
