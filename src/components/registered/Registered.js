import React, {Component} from 'react';
import {Button, Icon, Modal} from 'antd';
import { Link } from "react-router-dom";
import '../login/Login.scss'
import './Registered.scss'
import {Input,message} from "antd";
import {submitData} from '../../services/httpService';
import logo from "../../assets/img/logo.png";
import appQr from "../../assets/img/mobile/qr.png";

class Registered extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'a123456',
            password_confirmation:'a123456',
            prize:'',
            timestap:new Date().getTime()
        };
        this.submit_request = '';
    }
    componentDidMount(){
        let prize = window.location.href.split('regist/')[1];
        if(!prize){
            message.warning('注册链接不合法');
            return;
        }
        this.setState({
            prize:prize
        })
    }
    regist(){
        if(!this.state.prize){
            message.warning('注册链接不合法');
            return;
        }
        if(!this.state.username){
            message.warning('请输入姓名');
            return;
        }
        if(!this.state.password){
            message.warning('请输入密码');
            return;
        }
        if(this.state.password!==this.state.password_confirmation){
            message.warning('两次密码不一致');
            return;
        }
        if(!this.state.captcha){
            message.warning('输入验证码');
            return;
        }

        this.submit_request = submitData('/auth/signup?type=mobile&prize='+this.state.prize,{
            username:this.state.username,
            password:this.state.password,
            password_confirmation:this.state.password_confirmation,
            captcha:this.state.captcha
        }).subscribe(res=>{
            if(res.data.isSuccess===1){
                message.success('注册成功',1);
                setTimeout(() => {
                    this.props.history.push('/login');
                }, 1000);
                return;
            }
            message.warning(res.data.data.msg||res.data.type);
        },error=>{
            message.error(error.message);
        });
    }

    componentWillUnmount(){
        this.submit_request&&this.submit_request.unsubscribe();
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
            <div className="login registered">

                <div className="box-form">

                    <img src={logo} alt="" className='logo'/>

                    <div className="right">

                        <div className="inputgroup">
                            <p>注册/Registered</p>
                            <div className="input">
                                <Input
                                    value={this.state.username}
                                    onChange={(e)=>{this.setState({username:e.target.value})}}
                                    placeholder="请输入您的用户名"
                                    size={"large"}
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                />
                            </div>
                            <div className="input">
                                <span className="tips">默认密码：a123456</span>
                                <Input
                                    // value={this.state.password}
                                    value={"a123456"}
                                    onChange={(e)=>{this.setState({
                                        password:e.target.value
                                    })}}
                                    placeholder=" 默认初始密码：a123456"
                                    disabled={true}
                                    size={"large"}
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                />
                            </div>
                            <div className="input">
                                <Input
                                    value={this.state.captcha}
                                    onChange={(e)=>{this.setState({captcha:e.target.value})}}
                                    placeholder="验证码"
                                    size={"large"}
                                    prefix={<Icon type="check-square" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                />
                                <img onClick={()=>{this.setState({timestap:new Date().getTime()})}} style={{position:'absolute',top: '8px',right: '5px',cursor:'pointer'}} src={"/captcha?"+this.state.timestap}/>
                            </div>
                            <div className="btn">
                                <Button onClick={()=>{this.regist()}} type="primary" block size={"large"}>注册</Button>
                                <Button onClick={this.showModal} type="danger" block size={"large"} className="download">下载APP</Button>
                                <Link to='/login' className='loginBtn'>已有账号？返回登录</Link>
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
export default Registered;
