import React, { Component } from "react";
import MainRoutes from "./mainRoutes";
import { fetchData } from "../../services/httpService";
import { showNotification } from "../../services/utilsService";
import eventProxy from "../common/eventProxy";
const nickObj = {
  "1_1996":'平台号',
  "2_1996":'总运营',
  "3_1996":'运营',
  "4_1996":'总主管',
  "5_1996":'内部主管',
  "6_1994":'主管',
  "7_1992":'招商',
}
class Main extends Component {
  constructor(props) {
    super(props);
    this.httpRequest = "";
    this.state = {
      userInfo: ""
    };
  }
  componentDidMount() {
    eventProxy.on("refleshBalance", () => {
      this.loadData();
    });
    this.loadData();
  }
  loadData() {
    this.httpRequest = fetchData("/mobile-users/user-account-info").subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          let nickname = "",
            userInfo = res.data.data;
          //永泰待遇
          if (userInfo.benefits_itype === 11) {
            nickname = nickObj[userInfo.level+'_'+userInfo.prize_group]||"代理";
            if(userInfo.is_agent===0){
              nickname = '玩家'
            }
          }
          userInfo["nickname"] = nickname;
          eventProxy.trigger("getUserInfo", JSON.stringify(userInfo));
          window.localStorage.setItem('dailyWages',userInfo.dailyWages);
          window.localStorage.setItem('userDividendsHalf',userInfo.userDividendsHalf);
          window.localStorage.setItem('_token',userInfo.token);
          window.localStorage.setItem('is_agent',userInfo.is_agent);
          this.setState({
            userInfo: userInfo
          });
          return;
        }
        if (res.data.errno === 1004) {
          showNotification("warning", "温馨提示", res.data.Msg, 1);
          this.props.history.push("/login");
          return;
        }
        showNotification("warning", "温馨提示", res.data.Msg);
      },
      error => {
        showNotification("error", "温馨提示", error.message);
      }
    );
  }
  componentWillUnmount() {
    this.httpRequest && this.httpRequest.unsubscribe();
  }
  render() {
    return (
      <MainRoutes history={this.props.history} userInfo={this.state.userInfo} />
    );
  }
}

export default Main;
