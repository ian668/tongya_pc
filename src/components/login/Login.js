import React, { Component } from "react";
import {Checkbox, Button, Icon, Modal} from "antd";
import { Link } from "react-router-dom";
import "./Login.scss";
import { Input } from "antd";
import { fetchData, submitData } from "../../services/httpService";
import { qqtjm,showNotification } from "../../services/utilsService";
import { default as md5 } from "md5";
import logo from "../../assets/img/logo.png";
import appQr from "../../assets/img/mobile/qr.png";
class Login extends Component {
  constructor(prop) {
    super(prop);
    this.init_request = "";
    this.submitRequest = "";
    this.state = {
      username: "",
      password: "",
      login_loading:false,
      is_remeber:true
    };
  }

  componentDidMount() {
    this.init_request = fetchData("/auth/signin?type=mobile").subscribe();
    let password = window.localStorage.getItem('password')?window.atob(window.localStorage.getItem('password').toString()):'';
    this.setState({
      username:window.localStorage.getItem('username'),
      password:password
    });
  }
  componentWillUnmount = () => {
    this.init_request&&this.init_request.unsubscribe();
    this.submitRequest&&this.submitRequest.unsubscribe();
  };
  login() {
    let { username, password } = this.state;
    if(!username){
        showNotification('warning','登陆提示','用户名不能为空',1);
        return;
    }
    if(!password){
        showNotification('warning','登陆提示','密码不能为空',1);
        return;
    }
    this.setState({
      login_loading:true
    });
    this.submitRequest = submitData("/auth/signin?type=mobile", {
      username: username.toLowerCase(),
      password: qqtjm(md5(md5(md5(username.toLowerCase() + password)))),
    }).subscribe(
      res => {
        this.setState({
          login_loading:false
        })
        if (res.data.isSuccess === 1) {
          if(this.state.is_remeber){
            window.localStorage.setItem('username',this.state.username);
            window.localStorage.setItem('password',window.btoa(this.state.password))
          }else{
            window.localStorage.removeItem('username');
            window.localStorage.removeItem('password');
          }
          this.props.history.push("/main/home");
          return;
        }
        showNotification('warning','登陆提示',res.data.Msg,1);
      },
      error => {
        this.setState({
          login_loading:false
        })
        showNotification('error','登陆提示',error.message,1);
      }
    );
  }

  remeberPwd(e){
    this.setState({ is_remeber: e.target.checked });
  }

  enterPress(e){
    if(e.keyCode === 13){
      this.login();
    }
  }

  state = { visible: false };

  showModal = () => {
    this.setState({
      appdownload: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      appdownload: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      appdownload: false,
    });
  };

  render() {
    return (
      <div className="login">
        <div className="box-form">

          <img src={logo} alt="" className='logo'/>

          <div className="right">

            <div className="inputgroup">
              <p>登录/LOGIN</p>
              <div className="input">
                <Input
                  placeholder="请输入您的用户名"
                  value={this.state.username}
                  allowClear={true}
                  onChange={(e)=>{this.setState({
                    username:e.target.value
                    })}}
                  size={"large"}
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                />
              </div>
              <div className="input">
                <Input
                  placeholder="请输入密码"
                  value={this.state.password}
                  allowClear={true}
                  type="password"
                  onChange={(e)=>{this.setState({
                    password:e.target.value
                    })}}
                  onKeyUp={(e)=>{this.enterPress(e)}}
                  size={"large"}
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                />
              </div>
              <div className="btn">

                <Button loading={this.state.login_loading} onClick={this.login.bind(this)} type="primary" block size={"large"}>
                  立即登录
                </Button>

                <Button onClick={this.showModal} type="primary" block size={"large"}>
                  APP下载
                </Button>

                <div className="small_btn">
                  <Checkbox checked={this.state.is_remeber} onChange={this.remeberPwd.bind(this)}>记住密码</Checkbox>
                  <a href="https://www14.71baomu.net/code/client/eac72cb1eaf629d9dadda1cc8d5bc656/4" target="_blank">忘记密码？联系客服</a>
                </div>

              </div>
            </div>

          </div>
        </div>

        <Modal
            title="手机APP下载"
            visible={this.state.appdownload}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            width={400}
            cancelText={"关闭"}
            okText={"确定"}
        >
          <div className='appDownload'>
            <img src={appQr} alt=""/>
            <div>
              <p>扫描二维码下载</p>
              <span>注意：安卓版本需6.0以上</span>
            </div>
          </div>
        </Modal>

      </div>
    );
  }
}
export default Login;
