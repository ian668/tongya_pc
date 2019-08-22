import React, { Component } from "react";
import Sidemenu from "../../common/Sidemenu";
import { Link } from "react-router-dom";
import './letter.scss';
import { fetchData, submitData } from "../../../services/httpService";
import {Empty, message, Modal,Select,Input, Button } from "antd";
const { Option } = Select;
const { TextArea } = Input;
export default class Letter extends Component {
  constructor(props) {
    super(props);
    this.fetch_request = "";
    this.submit_request = "";
    this.state = {
        list: [],
        send_type:'0',
        user_name:"",
        message_content:''
    };
  }

  componentDidMount() {
    this.fetch_request = fetchData("/message").subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          this.setState({
            list: res.data.data.datas.data
          });
          return;
        }
        if (res.data.errno === 1004) {
          message.warning(res.data.Msg,1);
          this.props.history.push("/login");
          return;
        }
        message.warning(res.data.data.info);
      },
      error => {
        message.error(error.message);
      }
    );
  }

  writeLetter() {
    this.setState({
      write_modal:true
    })
  }

  sendLetter() {
    if(this.state.send_type==='1'){
      if(!this.state.user_name){
        message.warning('请填写下级账号');
        return;
      }
    }
    if(!this.state.message_content){
      message.warning('请填写站内信内容');
      return;
    }
    this.setState({
      send_letter_loading:true
    })
    this.submit_request = submitData('/message/send',{
      send_type:this.state.send_type,
      user_name:this.state.user_name,
      message_content:this.state.message_content,
      _token:window.localStorage.getItem('_token')
    }).subscribe(res=>{
      this.setState({
        send_letter_loading:false
      })
      if(res.data.isSuccess===1){
        message.success('发送成功',1);
        this.handleCancel();
        return;
      }
      message.warning(res.data.data.msg);
    },error=>{
      message.error(error.message);
    });
  }

  handleCancel(){
    this.setState({
      write_modal:false,
      username:'',
      message_content:''
    })
  }

  componentWillUnmount() {
    message.destroy();
    this.fetch_request && this.fetch_request.unsubscribe();
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
                <span>消息中心</span>
              </li>
              <li>
                <span>上下级站内信</span>
              </li>
              <li>
                <Button onClick={this.writeLetter.bind(this)}>发送站内信</Button>
              </li>
            </div>
            <div className="announce">
              <div className="table_box">
                <table>
                  <thead>
                    <tr>
                      <th className="title">状态</th>
                      <th className="time">站内信</th>
                      <th className="time">发布时间</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.list.length === 0 && (
                      <tr>
                        <td colSpan={3}>
                          <Empty description="暂无数据" />
                        </td>
                      </tr>
                    )}
                    {this.state.list.length > 0 &&
                      this.state.list.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.is_readed===1?'已读':'未读'}</td>
                            <td>
                              <Link to={"/main/letter_view/" + item.id+'?tag=sub5-23'}>
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
            </div>
          </div>
        </div>
        <Modal
          title="发送站内信"
          visible={this.state.write_modal}
          onOk={this.sendLetter.bind(this)}
          onCancel={this.handleCancel.bind(this)}
          confirmLoading={this.state.send_letter_loading}
          width={360}
          okText={"确定发送"}
          cancelText={"取消"}
        >
          <div className="safe_modal">
            <Select 
            value={this.state.send_type}
            onChange={(value)=>{
              this.setState({
                send_type:value
              })
            }}>
              <Option value="0">发送给上级</Option>
              <Option value="1">发送给下级</Option>
            </Select>
            {this.state.send_type==='1'&&(
              <Input
              value={this.state.user_name}
              onChange={e => {
                this.setState({
                  user_name: e.target.value
                });
              }}
              placeholder="下级账号"
              size={"large"}
            />
            )}
            <TextArea
              value={this.state.message_content}
              onChange={e => {
                this.setState({
                  message_content: e.target.value
                });
              }}
              placeholder="站内信内容"
            />
          </div>
        </Modal>
      </div>
    );
  }
}
