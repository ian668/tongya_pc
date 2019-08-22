import React, { Component } from "react";
import {Result,Button} from 'antd';
export default class componentName extends Component {
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="抱歉，页面不存在！"
        extra={<Button onClick={()=>{this.props.history.push('/main/home')}} type="primary">返回首页</Button>}
      />
    );
  }
}
