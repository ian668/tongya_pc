import React, { Component } from "react";
import { Icon, Popover, message, Modal, Button } from "antd";
import { Link } from "react-router-dom";
import "./Common.scss";
import eventProxy from "../common/eventProxy";
import logo from "../../assets/img/logo.png"
import st1 from "../../assets/img/st1.gif";
import st2 from "../../assets/img/st2.gif";
import st3 from "../../assets/img/st3.gif";
import user from "../../assets/img/user.png";
import navHome from "../../assets/img/header/nav-1-h.png";
import cp from "../../assets/img/header/nav-2-h.png";
import zr from "../../assets/img/header/nav-3-h.png";
import qp from "../../assets/img/header/nav-4-h.png";
import gl from "../../assets/img/header/nav-5-h.png";
import xljc from "../../assets/img/header/nav-8-h.png";
import kf from "../../assets/img/header/kf.png";
import sj from "../../assets/img/header/sj.png";
import appQr from "../../assets/img/mobile/qr.png?v=21212";
import { fetchData } from "../../services/httpService";
const lottery_menu = (
  <div id="lottery_menu">
    <ul className="lottery">
      <li className="game_list_box">
        <p className="title">时时彩系列</p>
        <div className="game_list">
          <div className="list">
            <Link to="/main/lottery/34">
              腾讯分分彩
              <img src={st1} alt="" />
            </Link>
            <Link to="/main/lottery/72">
              幸运分分彩
              <img src={st1} alt="" />
            </Link>
            <Link to="/main/lottery/1">
              重庆时时彩
              <img src={st3} alt="" />
            </Link>
            <Link to="/main/lottery/24">
              河内1分彩
              <img src={st2} alt="" />
            </Link>
            <Link to="/main/lottery/6">新疆时时彩</Link>
            <Link to="/main/lottery/73">腾讯10分彩</Link>
            <Link to="/main/lottery/26">河内5分彩</Link>
            <Link to="/main/lottery/28">韩国1.5分彩</Link>
            <Link to="/main/lottery/40">俄罗斯1.5分彩</Link>
            <Link to="/main/lottery/25">新加坡2分彩</Link>
            <Link to="/main/lottery/44">新加坡快乐8</Link>
            <Link to="/main/lottery/59">台湾快乐8</Link>
            <Link to="/main/lottery/60">韩国快乐8</Link>
            <Link to="/main/lottery/71">腾讯5分彩</Link>
            <Link to="/main/lottery/42">印度1.5分彩</Link>
            <Link to="/main/lottery/46">新加坡30秒彩</Link>
            <Link to="/main/lottery/55">幸运10分</Link>
            <Link to="/main/lottery/41">北京时时彩</Link>
            <Link to="/main/lottery/35">缅甸3分彩</Link>
            <Link to="/main/lottery/43">新德里1.5分彩</Link>
            <Link to="/main/lottery/30">东京1.5分彩</Link>
          </div>
        </div>
      </li>

      <li className="game_list_box">
        <p className="title">赛车系列</p>
        <div className="game_list">
          <div className="list">
            <Link to="/main/lottery/58">幸运飞艇</Link>
            {/* <Link to="/main/lottery/74">极速赛车</Link> */}
            <Link to="/main/lottery/31">北京赛车</Link>
            <Link to="/main/lottery/36">英国120秒</Link>
            <Link to="/main/lottery/38">英国180秒</Link>
          </div>
        </div>
      </li>

      <li className="game_list_box">
        <p className="title">11选5系列</p>
        <div className="game_list">
          <div className="list">
            <Link to="/main/lottery/27">上海11选5</Link>
            <Link to="/main/lottery/2">山东11选5</Link>
            <Link to="/main/lottery/62">加拿大11选5</Link>
            <Link to="/main/lottery/9">广东11选5</Link>
            <Link to="/main/lottery/8">江西11选5</Link>
            <Link to="/main/lottery/63">纽约11选5</Link>
          </div>
          <div className="list">
            <Link to="/main/lottery/67">安徽11选5</Link>
            <Link to="/main/lottery/68">辽宁11选5</Link>
            <Link to="/main/lottery/12">澳门11选5</Link>
          </div>
        </div>
      </li>

      <li className="game_list_box">
        <p className="title">快3系列</p>
        <div className="game_list">
          <div className="list">
            {/*<Link to="/main/lottery/21">江苏快3</Link>*/}
            <Link to="/main/lottery/64">吉隆坡快3</Link>
            {/*<Link to="/main/lottery/22">安徽快3</Link>*/}
            <Link to="/main/lottery/65">新西兰快3</Link>
            <Link to="/main/lottery/20">澳门快3</Link>
          </div>
        </div>
      </li>

      {/*<li className="game_list_box">*/}
      {/*  <p className="title">其他彩种</p>*/}
      {/*  <div className="game_list">*/}
      {/*    <div className="list">*/}
      {/*      <Link to="/main/lottery/13">福彩3D</Link>*/}
      {/*      <Link to="/main/lottery/14">排列3/5</Link>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</li>*/}
    </ul>
  </div>
);


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announces:[],
    };
  }

  componentDidMount(){
    fetchData('/mobile-announcements').subscribe(res=>{
      if(res.data.isSuccess===1){
        this.setState({
          announces:res.data.data.data
        })
      }
    },error=>{
      message.error(error.message);
    });
  }

  updateBalance() {
    this.setState({
      balance_loading: true
    });
    setTimeout(() => {
      this.setState({
        balance_loading: false
      });
    }, 500);
    eventProxy.trigger("refleshBalance");
  }

  logout() {
    fetchData("/mobile-auth/logout").subscribe(res => {
      if (res.data.isSuccess === 1) {
        window.localStorage.removeItem("password", "");
        window.localStorage.removeItem("userDividendsHalf", "");
        window.localStorage.removeItem("dailyWages", "");
        window.localStorage.removeItem("_token");
        this.props.history.push("/login");
      }
    });
  }

  state = { visible: false };

  showModal = () => {
    this.setState({
      appdownload: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      appdownload: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      appdownload: false
    });
  };

  render() {
    return (
      <div className="header">

        <div className="top">




          <div className="left">

            <div className="leftBtn">
              <div className="znx">
                <a href="https://永泰娱乐.com" target="_blank">
                  <Icon type="thunderbolt" theme="filled" />
                  <span>线路检测</span>
                </a>
              </div>
              <div className="server">
                <a href="https://www14.71baomu.net/code/client/eac72cb1eaf629d9dadda1cc8d5bc656/4" target="_blank">
                  <Icon type="customer-service" theme="filled" />
                  <span>在线客服</span>
                </a>
              </div>
            </div>

          </div>


          <div className="logo">
            <Link to="/main/home">
              <img src={logo} alt=""/>
            </Link>
          </div>


          <div className="right">

            <div className="money">
              <Link to={"/main/charge?tag=sub3-5"} className="top_btn">
                <Icon type="wallet" theme="filled" />
                <span>余额：</span>
                <span className='nub'>{this.props.userInfo.available}</span>
                <Icon
                    onClick={() => {
                      this.updateBalance();
                    }}
                    type={this.state.balance_loading ? "loading" : "sync"}
                />
              </Link>
            </div>

            <div className="rightBtn">


              <Link to={"/main/charge?tag=sub3-5"} className="top_btn">
                <Icon type="credit-card" theme="filled" />
                <p>存款</p>
              </Link>

              <Link to={"/main/withdraw?tag=sub3-6"} className="top_btn">
                <Icon type="pay-circle" theme="filled" />
                <p>存款</p>
              </Link>

              <Link to={"/main/transfer?tag=sub3-7"} className="top_btn">
                <Icon type="bank" theme="filled" />
                <p>存款</p>
              </Link>

            </div>


            <Popover
                placement="bottomRight"
                trigger="hover"
                overlayClassName='userInfoBox'
                content={
                  <div className='InfoBox'>
                    <div className="lastLogin">
                      <div>
                        <span className='title'>最近登录：</span>
                        <span className='content'>{this.props.userInfo.login_date}</span>
                      </div>
                      <div>
                        <span className='title'>登录IP：</span>
                        <span className='content'>{this.props.userInfo.login_ip}</span>
                      </div>

                    </div>

                    <div className='loginOut'>
                      <Button type="danger" onClick={()=>{this.logout()}}>退出登录</Button>
                    </div>

                  </div>
                }
            >
              <Link to={"/main/user?tag=sub1-1"}>
                <div className="userInfo">

                  <div className='userBtn'>
                    <img src={user} alt=""/>
                    <p>{this.props.userInfo.username}</p>
                    <div className='mail'>0</div>
                  </div>

                  <Icon type="caret-down" theme="filled" />

                </div>
              </Link>

            </Popover>

          </div>

        </div>

        <div className="nav">


          <Link to="/main/home"><span>首页</span></Link>
          <Link to="/main/lottery/34"><span>彩票投注</span></Link>
          <a href="javascript:;" onClick={() => { message.info("即将上线,敬请期待", 1); }}><span>真人娱乐</span></a>
          <a href="javascript:;" onClick={() => { message.info("即将上线,敬请期待", 1); }}><span>棋牌</span></a>
          <Link to="/main/user?tag=sub1-1"><span>账号管理</span></Link>
          <Link to="/main/betrecord?tag=sub2-3"><span>游戏记录</span></Link>
          <Link to="/main/teamview?tag=sub4-13"><span>代理管理</span></Link>
          <a href="javascript:;" onClick={() => { message.info("即将上线,敬请期待", 1); }}><span>优惠活动</span></a>
          <Link to="/main/announce?tag=sub5-21"><span>平台公告</span></Link>


        </div>

      </div>
    );
  }
}

export default Header;
