import React, { Component } from "react";
import {
  Button,
  Icon,
  Slider,
  Modal,
  Input,
  Checkbox,
  notification,
  message,
  Drawer,
  Tag
} from "antd";
import "./Lottery.scss";
import "../../assets/css/animate.css";
import Trace from "./Trace";
import eventProxy from "../common/eventProxy";
import Record from "./Record";
import { find, remove } from "lodash";
import update from "immutability-helper";
import Ball from "./ball";
import { fetchData, submitData } from "../../services/httpService";
import {
  showNotification,
  fftime,
  diff,
  getData,
  _inputFormat,
  playOptions,
  getAllLotterylogo,
  getAllLottery
} from "../../services/utilsService";
import getSscLayout from "../../layout/ssc";
import getX115Layout from "../../layout/x115";
import getPK10Layout from "../../layout/pk10";
import getK3Layout from "../../layout/k3";
import getF3DLayout from "../../layout/f3d";
import getPL35Layout from "../../layout/pl35";
import Lottie from "lottie-react-web";
import animation from "../../assets/animation/checked-done.json";
import Position from "./position";
import Trend from "../Trend/Trend";
import soundfile from "../../assets/audio/countdown.mp3";
const lottery = getAllLottery();
const status_cn = {
  0: "未开奖",
  1: "已撤单",
  2: "未中奖",
  3: "已中奖",
  4: "已派奖",
  5: "系统撤单"
};
const series_id = {
  1: "ssc",
  2: "x115",
  3: "f3d",
  13: "plw",
  15: "k3",
  19: "pk10",
  20: "xy28",
  21: "sixlot"
};
// const ButtonGroup = Button.Group;
const moshiarray = [
  { name: "元", value: "yuan", amount: 1 },
  { name: "角", value: "jiao", amount: 0.1 },
  { name: "分", value: "fen", amount: 0.01 },
  { name: "厘", value: "li", amount: 0.001 }
];
const coefficient_cn = {
  "1.000": "元",
  "0.100": "角",
  "0.010": "分",
  "0.001": "厘"
};
const mode = {
  yuan: {
    name: "元",
    value: 1
  },
  jiao: {
    name: "角",
    value: 0.1
  },
  fen: {
    name: "分",
    value: 0.01
  },
  li: {
    name: "厘",
    value: 0.001
  }
};
const { TextArea } = Input;

// 中奖提示

const openNotification = (message, money) => {
  const args = {
    placement: "bottomRight",
    icon: <Icon type="smile" style={{ color: "#52c41a", fontSize: 20 }} />,
    message: "恭喜玩家",
    description: "您在【" + message + "】期,中奖【" + money + "】元。",
    duration: 5,
    className: "win_tips"
  };
  notification.open(args);
};

// Modal弹窗

function info(message, callback) {
  Modal.info({
    title: "温馨提示",
    content: (
      <div>
        <p>{message}</p>
      </div>
    ),
    okText: "确定",
    onOk() {
      callback();
    }
  });
}

function warning(message) {
  const modal = Modal.warning({
    title: "温馨提示",
    content: message,
    mask: false,
    centered: true
  });
  setTimeout(() => {
    modal.destroy();
  }, 1000);
}

class Lottery extends Component {
  constructor(props) {
    super(props);
    this.fetchCodesTimer = 0; //抓奖倒计时
    this.checkOpenLotteryTimer = 0; //
    this.fetchWinMoneyTimer = 0; //派奖倒计时
    this.timerno = 0; //倒计时
    this.lt_time_leave = 0;
    this.fetch_request = "";
    this.submit_request = "";
    this.fetch_record_request = "";
    this.fetchWinMoney_request = "";
    this.pullserve_request = "";
    this.checkOpenLottery_request = "";
    this.fetchCodes_request = "";

    this.state = {
      visible: false,
      cpId: "", //彩种ID
      cp_name: "", //彩种名
      bigId: "", //大玩法ID
      pId: "", //二级玩法
      cycle:0,
      username: window.localStorage.getItem("username"),
      _token: "",
      layout: [], //布局结构
      lotteryData: {},
      gameMethods: "",
      initMethods: "",
      subMethods: [], //子玩法数组
      hour: "00",
      minute: "00",
      second: "00",
      currentNumber: "", //当前期号
      currentGame: {}, //当前大玩法
      mode: "yuan", //模式
      mutiple: 1, //倍数
      method: "", //玩法
      prize_group: 0, //奖金组
      init_prize: "",
      prize: 0, //单注奖金
      honghu_prize: 0, //龙虎的单注奖金
      description: {}, //玩法描述
      cptype: "ssc", //彩种类型
      fetchURL: "",
      isInput: false, //是否单式
      isRXinput: false, //是否任选单式
      isTools: false, //是否需要大小单双快捷键
      isSpecial: false, //是否是特殊号
      rxarray: [],
      positions: [], //任选的位置
      balls: [],
      historyNumbers: [], //历史开奖
      bet_success: false,
      pname_cn: "", //大玩法名
      name_cn: "", //小玩法名
      nums: 0, //注数
      total: 0, //总价格
      total_carts: 0, //总价格
      nums_carts: 0,
      carts: [],
      balance: 0,
      textAreaValue: "",
      bet_max_prize_group: 0,
      bet_min_prize_group: 0,
      user_prize_group: 0,
      point: 0,
      openballs: [],
      win_money: 0.0,
      openIssue: "", //待开奖的期号,
      game_description: false,
      flatMethods: {},
      betRecord: [],
      traceRecord: [],
      carts_betObj: {},
      betDetail: "",
      traceDetail: "",
      show_bet_modal: false,
      show_trace_modal: false,
      show_game_description: false,
      trend_visible: false,
      quick_bet_loading: false,
      confirm_bet_loading: false,
      audio: "",
      autoplay: true
    };
  }

  closeTrend() {
    this.setState({
      trend_visible: false
    });
  }
  openTrend() {
    this.setState({
      trend_visible: true
    });
  }
  showTraceModal = () => {
    //判断购物车是否有数据
    if (this.state.carts.length === 0) {
      warning("无效数据");
      return;
    }
    this.resembleCartsSubmitData(this.state.carts);
    this.fetch_request = fetchData(
      "/bets/load-data/" + this.state.cpId + "?type=issue"
    ).subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          this.setState({
            visible: true,
            issues: res.data.data.gameNumbers,
            traceMaxTimes: res.data.data.traceMaxTimes
          });
        }
      },
      error => {
        //错误处理
        showNotification("error", "温馨提示", error.message);
      }
    );
  };

  open_game_description = () => {
    this.setState({
      show_game_description: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
      show_game_description: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
      show_game_description: false
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const cpId = nextProps.match.params.id;
      this.setState({
        cplogo: getAllLotterylogo(cpId),
        cpId: cpId
      });
      this.componentWillUnmount();
      this.initData(cpId);
      this.fetchRecord(); //抓取开奖记录
    }
  }

  initData(id) {
    //check是否缓存了玩法数据  1=>缓存了  0=》 没有缓存
    let is_store_gameMethods = window.localStorage.getItem(
        "is_store_gameMethods_" + this.state.username + id
      ),
      url;
    if (is_store_gameMethods === "1") {
      url = "/bets/load-data/" + id + "?type=nomethods";
    } else {
      url = "/bets/load-data/" + id;
    }
    this.loadData(url, id); //开始,拉取数据
  }

  componentDidMount = () => {
    //全部清除倒计时
    clearInterval(this.timerno);
    clearInterval(this.fetchCodesTimer);
    clearInterval(this.checkOpenLotteryTimer);
    clearInterval(this.fetchWinMoneyTimer);
    this.initData(this.props.match.params.id);
    this.fetchRecord(); //抓取开奖记录
    this.setState({
      cplogo: getAllLotterylogo(this.props.match.params.id),
      audio: new Audio(soundfile)
    });
  };

  pullserver() {
    //全部清除倒计时
    this.componentWillUnmount();
    //设置要抓奖期号
    this.setState({ openIssue: this.state.currentNumber });
    // /bets/curr-issue
    this.pullserve_request = fetchData(
      "/bets/curr-issue/" + this.state.cpId
    ).subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          this.setState({
            currentNumber: res.data.data.curr_issue
          });
          //开始倒计时
          this.countdown(res.data.data.timestamp, res.data.data.sale_end);
          //非快彩5秒后去抓奖
          if(this.state.cycle<=60){
            this.fetchCodes(this.state.openIssue);
          }else{
            this.timeout = setTimeout(() => {
              this.fetchCodes(this.state.openIssue);
            }, 10000);
            
          }
          return;
        }
      },
      error => {
        //错误处理
        showNotification("error", "温馨提示", error.message);
      }
    );
  }

  componentWillUnmount() {
    message.destroy();
    this.fetch_request && this.fetch_request.unsubscribe();
    this.submit_request && this.submit_request.unsubscribe();
    this.pullserve_request && this.pullserve_request.unsubscribe();
    this.fetch_record_request && this.fetch_record_request.unsubscribe();
    this.fetchWinMoney_request && this.fetchWinMoney_request.unsubscribe();
    this.checkOpenLottery_request &&
      this.checkOpenLottery_request.unsubscribe();
    this.fetchCodes_request && this.fetchCodes_request.unsubscribe();
    //清除倒计时
    clearTimeout(this.timeout);
    clearInterval(this.timerno);
    clearInterval(this.fetchCodesTimer);
    clearInterval(this.checkOpenLotteryTimer);
    clearInterval(this.fetchWinMoneyTimer);
  }

  loadData(url, cpId) {
    this.fetch_request = fetchData(url).subscribe(
      res => {
        if (!res) {
          info("非法请求");
          return;
        }
        if (res.data.isSuccess === 1) {
          //是否停售
          if (!res.data.data) {
            info("彩种暂时停售!", () => {
              this.props.history.push("/main/home");
            });
            return;
          }
          let lotteryData = res.data.data;
          //check nomethods接口奖金是否有变化，如果有变化则会返回gameMethods字段，要重新缓存一下
          if (lotteryData.hasOwnProperty("gameMethods")) {
            window.localStorage.setItem(
              "is_store_gameMethods_" + this.state.username + cpId,
              "1"
            );
            window.localStorage.setItem(
              "store_gameMethods_" + this.state.username + cpId,
              JSON.stringify(lotteryData.gameMethods)
            );
          }
          let lotteryBall = [],
            gameMethods = JSON.parse(
              window.localStorage.getItem(
                "store_gameMethods_" + this.state.username + cpId
              )
            ),
            bet_max_prize_group =
              Number(lotteryData.bet_max_prize_group) >
              Number(lotteryData.user_prize_group)
                ? Number(lotteryData.user_prize_group)
                : Number(lotteryData.bet_max_prize_group),
            bet_min_prize_group = Number(lotteryData.bet_min_prize_group),
            user_prize_group = Number(lotteryData.user_prize_group),
            prize_group = bet_max_prize_group,
            defaultId = lotteryData.defaultMethodId.split("-"),
            cptype = series_id[lotteryData.series_id],
            subMethods = find(gameMethods, item => {
              return item.id.toString() === defaultId[0].toString();
            });
          if (!subMethods) {
            subMethods = gameMethods[0];
            defaultId[0] = subMethods["id"];
            defaultId[1] = subMethods["children"][0]["id"].toString();
            defaultId[2] = subMethods["children"][0]["children"][0][
              "id"
            ].toString();
          }
          this.getFlatMethods(gameMethods); //设置扁平化数据
          //设置开奖号码展示
          switch (cptype) {
            case "pk10":
            case "x115":
            case "mqtpk10":
              lotteryBall = lotteryData.lotteryBalls.split(" ");
              break;
            default:
              lotteryBall = lotteryData.lotteryBalls.split("");
              break;
          }
          //设置state
          this.setState({
            cpId: cpId,
            cp_name: lotteryData.gameName_cn,
            bigId: defaultId[0],
            cptype: cptype,
            cycle:lotteryData.cycle,
            pId: defaultId[1],
            methodId: defaultId[2],
            _token: res.data.data._token,
            currentNumber: lotteryData.currentNumber,
            lastNumber: lotteryData.lastNumber,
            historyNumbers: lotteryData.historyNumbers,
            subMethods: subMethods["children"],
            gameMethods: gameMethods,
            openballs: lotteryBall,
            prize_group: prize_group,
            init_prize_group: prize_group,
            point: Number(((user_prize_group - prize_group) / 20).toFixed(2)),
            prize: (
              Number(subMethods["children"][0]["children"][0]["prize"]) *
              Number(mode[this.state.mode]["value"])
            ).toFixed(3), //计算单注奖金
            init_prize: (
              Number(subMethods["children"][0]["children"][0]["prize"]) *
              Number(mode[this.state.mode]["value"])
            ).toFixed(3), //计算单注奖金
            bet_max_prize_group: bet_max_prize_group,
            bet_min_prize_group: bet_min_prize_group,
            user_prize_group: user_prize_group
          });
          //构造布局
          this.setLayout(defaultId[0], defaultId[1], defaultId[2]);
          //开始倒计时
          this.countdown(
            lotteryData.currentTime,
            lotteryData.currentNumberTime
          );
          //获取开奖数据check是否已经开奖
          this.checkOpenLottery();
          return;
        }
        info(res.data.Msg, () => {
          this.props.history.push("/main/home");
        });
      },
      error => {
        //错误处理
        showNotification("error", "温馨提示", error.message);
      }
    );
  }

  //倒计时
  countdown(start, end) {
    let self = this;
    //开始或结束时间为空
    if (start === "" || end === "") {
      return;
    }
    this.lt_time_leave = end - start;
    clearInterval(this.timerno);
    this.timerno = setInterval(function() {
      if (self.lt_time_leave === 3) {
        if (self.state.autoplay) {
          self.state.audio.play();
        }
      }
      if (self.lt_time_leave <= 0) {
        //清除倒计时
        clearInterval(self.timerno);
        message.info("进入下一期");
        //重新拉取服务器时间
        self.pullserver();
        return;
      }
      var oDate = diff(self.lt_time_leave--);
      self.setState({
        hour: fftime(oDate.hour),
        minute: fftime(oDate.minute),
        second: fftime(oDate.second)
      });
    }, 1000);
  }

  //获取彩种布局
  getLayout(cptype) {
    let layout = [];
    switch (cptype) {
      case "ssc":
        layout = getSscLayout();
        break;
      case "x115":
        layout = getX115Layout();
        break;
      case "k3":
        layout = getK3Layout();
        break;
      case "mqtpk10":
      case "pk10":
        layout = getPK10Layout();
        break;
      case "plw":
        layout = getPL35Layout();
        break;
      case "f3d":
        layout = getF3DLayout();
        break;
      default:
        layout = getSscLayout();
        break;
    }
    return layout;
  }

  //构造扁平化数据结构
  getFlatMethods(data) {
    let new_obj = {};
    for (let m = 0; m < data.length; m++) {
      let topParent = data[m];
      for (let n = 0; n < topParent["children"].length; n++) {
        let parent = topParent["children"][n];
        for (let j = 0; j < parent["children"].length; j++) {
          let method = parent["children"][j];
          method["top_id"] = topParent["id"];
          method["top_name_cn"] = topParent["name_cn"];
          method["pname_cn"] = parent["name_cn"];
          method["p_name_cn"] = parent["name_cn"];
          new_obj[
            topParent["id"] + "-" + method["pid"] + "-" + method["id"]
          ] = method;
        }
      }
    }
    this.setState({
      flatMethods: new_obj
    });
  }

  //切换大玩法
  setSubMethods(subMethods, bigId) {
    let subMethods_array = bigId === "26" ? subMethods.slice(-1) : subMethods;
    this.setState({
      subMethods: subMethods_array,
      bigId: bigId
    });
    this.change_method(
      bigId,
      subMethods_array[0]["id"].toString(),
      subMethods_array[0]["children"][0]["id"].toString()
    );
  }

  //清除输入框
  clearAllTextarea() {
    this.setState({
      textAreaValue: "",
      nums: "0",
      total: "0.000"
    });
  }
  //清空选择的号码
  resetBalls() {
    let row = this.state.layout.length,
      nums = this.state.layout[0]["nums"];
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < nums.length; j++) {
        this.refs["ball-" + i + "-" + j].setState({
          prev: false,
          active: false
        });
      }
    }
    this.setState({
      nums: "0",
      total: "0.000"
    });
  }

  //获取当前玩法数据
  getCurrentGame(bigId, pId, methodId) {
    let flatMethods = this.state.flatMethods;
    let currentGame = flatMethods[bigId + "-" + pId + "-" + methodId];
    this.setState({
      currentGame: currentGame
    });
    return currentGame;
  }

  setLayout(bigId, pId, methodId) {
    //当前玩法数据
    let currentGame = this.getCurrentGame(bigId, pId, methodId);
    if (!currentGame) {
      message.warning("该玩法已关闭");
      return;
    }
    //获取相应玩法的布局的
    let layout = this.getLayout(this.state.cptype),
      //获取玩法对象
      element = layout[bigId + "-" + pId + "-" + methodId],
      isRXinput =
        element["isrx"] === 1 && element["defaultposition"] !== undefined
          ? true
          : false,
      rxarray = [],
      isInput = element["type"] === "input" ? true : false,
      temp_data;
    currentGame.method = element["shortname"]; //设置玩法名如:wxzhixfs
    currentGame.isrx = element["isrx"];
    if (isRXinput) {
      let rxposition = element["defaultposition"].split("");
      //设置最小任选位置
      let min_position_nums = 0,
        default_position_nums = [];
      if (element["isrx"] === 1 && element["defaultposition"] !== undefined) {
        rxarray[0] = {
          id: rxposition[0],
          title: "万"
        };
        rxarray[1] = {
          id: rxposition[1],
          title: "千"
        };
        rxarray[2] = {
          id: rxposition[2],
          title: "百"
        };
        rxarray[3] = {
          id: rxposition[3],
          title: "十"
        };
        rxarray[4] = {
          id: rxposition[4],
          title: "个"
        };
        for (let i = 0; i < 5; i++) {
          if (rxposition[i].toString() === "1") {
            min_position_nums = min_position_nums + 1;
            default_position_nums.push(i);
          }
        }
        this.setState({
          min_position_nums: min_position_nums,
          default_position_nums: default_position_nums
        });
      }
    }

    //如果不是单式则判断是否是特殊号
    //如果不是单式则判断是否是特殊号
    if (!isInput) {
      temp_data = element["layout"];
      for (var prop in temp_data) {
        temp_data[prop].nums = temp_data[prop].no.split("|");
      }
    }
    //判断是否是龙虎
    let lhprize = "",prize = '';
    if (bigId.toString() === "80") {
      lhprize = ((9.98 * Number(this.state.prize_group)) / 2000).toFixed(3);
      prize = ((2.22 * Number(this.state.prize_group)) / 2000).toFixed(3);
    }else{
      prize = (
        ((Number(this.state.currentGame.prize) * Number(this.state.prize_group)) /
          Number(this.state.bet_max_prize_group)) *
        Number(mode[this.state.mode]["value"])
      ).toFixed(3);
    }
    this.setState({
      prize: (
        Number(currentGame.prize) * Number(mode[this.state.mode]["value"])
      ).toFixed(3),
      honghu_prize: lhprize,
      prize:prize,
      pname_cn: element["top_name_cn"],
      name_cn: element["name_cn"],
      currentGame: currentGame,
      isInput: isInput,
      isRXinput: isRXinput,
      layout: temp_data,
      methodId: methodId,
      rxarray: rxarray,
      prize_group: this.state.init_prize_group,
      isTools: element["isButton"],
      isSpecial: element["isSpecial"] || false
    });
  }

  //切换玩法
  change_method(bigId, pId, methodId) {
    //检查玩法是否在后台关闭了
    if (!this.checkMethodClosed(bigId, pId, methodId)) {
      return;
    }
    //update 玩法ID
    this.setState({
      bigId: bigId,
      pId: pId,
      methodId: methodId
    });
    //切换玩法时清空单式或是复试的选号
    this.state.isInput ? this.clearAllTextarea() : this.resetBalls();
    //重新渲染布局
    this.setLayout(bigId, pId, methodId);
  }

  checkMethodClosed(bigId, pId, methodId) {
    let big_method = find(this.state.gameMethods, item => {
      return item.id.toString() === bigId.toString();
    });
    if (!big_method) {
      message.warning("该玩法已关闭！");
      return false;
    }
    let second_method = find(big_method["children"], item => {
      return item.id.toString() === pId.toString();
    });
    if (!second_method) {
      message.warning("该玩法已关闭！");
      return false;
    }
    let methods = find(second_method["children"], item => {
      return item.id.toString() === methodId.toString();
    });
    if (!methods) {
      message.warning("该玩法已关闭！");
      return false;
    }
    return true;
  }

  //大小单双设置
  setDXDS(row, type) {
    let nums = this.state.layout[row]["nums"],
      max,
      un_obj = {
        active: false
      },
      obj = {
        active: true
      },
      ball;

    //如果是11x5的是11个号码
    if (nums.length % 2 === 0) {
      max = Math.round(nums.length / 2);
    } else {
      max = Math.round(nums.length / 2) - 1;
    }
    for (let i in nums) {
      ball = "ball-" + row.toString() + "-" + i.toString();
      switch (type) {
        case "quan":
          this.refs[ball].setState(obj, () => {
            //重新计算注数
            this.computedNums(
              this.state.layout.length,
              nums.length,
              this.state.isInput
            );
          });
          break;
        case "da":
          i > max - 1
            ? this.refs[ball].setState(obj, () => {
                //重新计算注数
                this.computedNums(
                  this.state.layout.length,
                  nums.length,
                  this.state.isInput
                );
              })
            : this.refs[ball].setState(un_obj, () => {
                //重新计算注数
                this.computedNums(
                  this.state.layout.length,
                  nums.length,
                  this.state.isInput
                );
              });
          break;
        case "xiao":
          i < max
            ? this.refs[ball].setState(obj, () => {
                //重新计算注数
                this.computedNums(
                  this.state.layout.length,
                  nums.length,
                  this.state.isInput
                );
              })
            : this.refs[ball].setState(un_obj, () => {
                //重新计算注数
                this.computedNums(
                  this.state.layout.length,
                  nums.length,
                  this.state.isInput
                );
              });
          break;
        case "dan":
          parseInt(nums[i]) % 2 > 0
            ? this.refs[ball].setState(obj, () => {
                //重新计算注数
                this.computedNums(
                  this.state.layout.length,
                  nums.length,
                  this.state.isInput
                );
              })
            : this.refs[ball].setState(un_obj, () => {
                //重新计算注数
                this.computedNums(
                  this.state.layout.length,
                  nums.length,
                  this.state.isInput
                );
              });
          break;
        case "shuang":
          parseInt(nums[i]) % 2 < 1
            ? this.refs[ball].setState(obj, () => {
                //重新计算注数
                this.computedNums(
                  this.state.layout.length,
                  nums.length,
                  this.state.isInput
                );
              })
            : this.refs[ball].setState(un_obj, () => {
                //重新计算注数
                this.computedNums(
                  this.state.layout.length,
                  nums.length,
                  this.state.isInput
                );
              });
          break;
        case "clear":
          this.refs[ball].setState(un_obj, () => {
            //重新计算注数
            this.computedNums(
              this.state.layout.length,
              nums.length,
              this.state.isInput
            );
          });
          break;
        default:
          break;
      }
    }
  }

  getSelectedPositionNum() {
    let j = 0;
    for (let i = 0; i < 5; i++) {
      if (this.refs["position-" + i].state.active) {
        j = j + 1;
      }
    }
    return j;
  }

  //计算注数
  computedNums(row, ball_nums, isInput) {
    let balls = isInput ? [] : this.assembleData(row, ball_nums);
    let obj = playOptions(
      this.state.mutiple,
      this.state.mode,
      this.state.currentGame.method,
      this.state.currentGame.isrx,
      this.state.isRXinput,
      this.state.isRXinput ? this.assemblePosition() : [],
      balls,
      this.state.isInput,
      this.state.cptype,
      this.state.isInput ? this.state.textAreaValue : ""
    ).update();
    this.setState({
      total: obj.total,
      nums: obj.num
    });
  }

  //row = 多少行  ball_nums=每行多少个球
  assembleData(row, ball_nums) {
    let row_array = [],
      colum_array = [];
    //从每行中找到选中的号码
    for (let i = 0; i < row; i++) {
      colum_array = [];
      for (let j = 0; j < ball_nums; j++) {
        //判断state中的active是否为true
        if (this.refs["ball-" + i + "-" + j].state.active) {
          colum_array.push(this.refs["ball-" + i + "-" + j].props.num);
        }
      }

      row_array.push(colum_array);
    }
    this.setState({
      balls: row_array
    });
    return row_array;
  }

  //选择号码球
  selectedPosition(id) {
    let active = this.refs[id].state.active,
      min = this.state.min_position_nums,
      selected = this.getSelectedPositionNum();
    //点击的位置是已经选中的
    if (active) {
      //如果选中的>最小位置了then 算注数;
      if (selected > min) {
        this.refs[id].setState(
          {
            active: !active
          },
          () => {
            //从新计算注数
            this.computedNums(
              this.refs[id].props.rows, //1
              this.refs[id].props.ball_nums,
              this.state.isInput
            );
          }
        );
      }
      return;
    }
    this.refs[id].setState(
      {
        active: !active
      },
      () => {
        //从新计算注数
        this.computedNums(
          this.refs[id].props.rows, //1
          this.refs[id].props.ball_nums,
          this.state.isInput
        );
      }
    );
  }

  //组装任选单式的位置
  assemblePosition() {
    let positions = [];
    for (let i = 0; i < 5; i++) {
      if (this.refs["position-" + i].state.active) {
        positions.push(i);
      }
    }
    return positions;
  }

  //获取球选中的个数
  getSelectedBallNum(row, len) {
    let j = 0;
    for (let i = 0; i < len; i++) {
      if (this.refs["ball-" + row + "-" + i].state.active) {
        j++;
      }
    }
    return j;
  }

  //清空某一行中的以选中的号码
  removeSelectedBallByRow(row, length) {
    for (let i = 0; i < length; i++) {
      let currentBall = this.refs["ball-" + row + "-" + i];
      if (currentBall.state.active) {
        currentBall.setState({
          active: false
        });
      }
    }
  }

  removePrevSelectedBallByRow(row, length) {
    for (let i = 0; i < length; i++) {
      let currentBall = this.refs["ball-" + row + "-" + i];
      if (currentBall.state.active && currentBall.state.current) {
        currentBall.setState({
          current: false,
          active: false
        });
      }
    }
  }

  removePrevSelectedBall(row, length) {
    for (let i = 0; i < length; i++) {
      let currentBall = this.refs["ball-" + row + "-" + i];
      if (currentBall.state.active && currentBall.state.current) {
        currentBall.setState({
          current: false
        });
      }
    }
  }

  //选择号码球
  selectedBall(id, row) {
    //判断是否包胆只能选一个
    if (this.state.currentGame.name_en.indexOf("baodan") > -1) {
      for (let i = 0; i < 10; i++) {
        this.refs["ball-0-" + i].setState({
          active: false
        });
      }
    }
    //判断是否是拖胆
    if (this.state.currentGame.name_en.indexOf("dantuo") > -1) {
      //获取胆码区最大选择个数
      let maxpic = this.refs["ball-0-0"].props.maxpic,
        value = this.refs[id].props.num;
      //判断选择的是那个区row=0 胆码区，1是拖码区
      if (row === 0) {
        //判断拖码区是否有相同的号码， if true then set active false in 拖码区
        for (let i = 0; i < 11; i++) {
          if (this.refs["ball-1-" + i].props.num === value) {
            this.refs["ball-1-" + i].setState({
              active: false
            });
          }
        }
        let size = this.getSelectedBallNum(0, 11); //
        if (this.refs[id].state.active) {
          //如果点击选择的这个号码不是前一个那么移除其他选中号码的前一个状态
          if (!this.refs[id].state.current) {
            //选择状态不变，只改变是否是前一个的状态prev=false
            this.removePrevSelectedBall(0, 11);
          }
          this.refs[id].setState({
            current: false,
            active: false
          });
        } else {
          if (size > 0) {
            let current;
            if (size === maxpic) {
              this.removePrevSelectedBallByRow(0, 11);
              current = true;
            } else if (size === maxpic - 1) {
              current = true;
            } else {
              current = false;
            }
            this.refs[id].setState({
              current: current,
              active: true
            });
          } else {
            this.refs[id].setState({
              current: false,
              active: true
            });
          }
        }
      }
      //如果是拖码区
      if (row === 1) {
        // let value = (value = this.refs[id].props.num);
        let value = this.refs[id].props.num;
        for (let i = 0; i < 11; i++) {
          let currentBall = this.refs["ball-0-" + i];
          if (currentBall.props.num === value) {
            if (!currentBall.state.current) {
              this.removePrevSelectedBall(0, 11);
            }
            this.refs["ball-0-" + i].setState({
              current: false,
              active: false
            });
          }
        }
      }
    }
    let active = this.refs[id].state.active;
    this.refs[id].setState(
      {
        active: !active
      },
      () => {
        //从新计算注数
        this.computedNums(
          this.refs[id].props.rows,
          this.refs[id].props.ball_nums,
          this.state.isInput
        );
      }
    );
  }

  //单式输入方法
  textAreaChange(e) {
    // console.log(text);
    let finalvalue = "";
    switch (this.state.cptype) {
      case "x115":
      case "pk10":
      case "mqtpk10":
        finalvalue = e.target.value.toString();
        this.setState(
          {
            textAreaValue: finalvalue
              .replace(/\n/g, ";")
              .replace(/\s+/g, " ")
              .replace(/\,|\;\s|；|\s+;|\s+；|\||\n|，/g, ";")
          },
          () => {
            this.computedNums(0, 0, this.state.isInput);
          }
        );
        break;
      default:
        finalvalue = e.target.value.toString();
        this.setState(
          {
            textAreaValue: finalvalue.replace(/\,|\;|；|\||\n|，/g, " ")
          },
          () => {
            this.computedNums(0, 0, this.state.isInput);
          }
        );
        break;
    }
  }

  //设置倍数
  setMutiple(type) {
    if (type !== "minus" && type !== "add") {
      this.setState(
        {
          mutiple: type
        },
        () => {
          this.state.isInput
            ? this.computedNums(0, 0, this.state.isInput)
            : this.computedNums(
                this.state.layout.length,
                this.state.layout[0]["nums"].length,
                this.state.isInput
              );
        }
      );

      return;
    }
    this.setState(
      {
        mutiple:
          type === "minus"
            ? (Number(this.state.mutiple) - 1 === 0
                ? 1
                : Number(this.state.mutiple) - 1
              ).toString()
            : (Number(this.state.mutiple) + 1).toString()
      },
      () => {
        this.state.isInput
          ? this.computedNums(0, 0, this.state.isInput)
          : this.computedNums(
              this.state.layout.length,
              this.state.layout[0]["nums"].length,
              this.state.isInput
            );
      }
    );
  }

  //设置模式
  updateMode(value, amount) {
    this.setState(
      {
        mode: value
      },
      () => {
        this.state.isInput
          ? this.computedNums(0, 0, this.state.isInput)
          : this.computedNums(
              this.state.layout.length,
              this.state.layout[0]["nums"].length,
              this.state.isInput
            );
      }
    );
    //计算奖金
    let prize = Number(this.state.init_prize) * amount;
    this.setState({ prize: prize.toFixed(3) });
  }

  set_carts_totals() {
    let nums = 0,
      total = 0;
    for (let i = 0; i < this.state.carts.length; i++) {
      nums += Number(this.state.carts[i]["nums"]);
      total += Number(this.state.carts[i]["money"]);
    }
    return {
      nums: nums.toString(),
      total: total.toString()
    };
  }

  //添加购物车
  add_to_carts() {
    //判断有效注数
    if (Number(this.state.nums) === 0) {
      warning("无效投注");
      return;
    }
    //判断是否有重复的购彩存在
    var cart = this.resembleCart();
    for (let i = 0; i < this.state.carts.length; i++) {
      let e = this.state.carts[i];
      if (cart["name_cn"] === e.name_cn && cart["ball"] === e.ball) {
        warning("重复购彩!");
        return;
      }
    }
    let carts = this.state.carts;
    carts.push(cart);
    let obj = this.set_carts_totals();
    this.setState(
      {
        carts: carts,
        nums_carts: obj.nums,
        total_carts: obj.total,
        nums: "0",
        total: "0.000"
      },
      () => {
        this.state.isInput ? this.clearAllTextarea() : this.resetBalls();
      }
    );
  }

  delete_single_cart(id) {
    let carts = this.state.carts;
    remove(carts, item => {
      return item.id.toString() === id.toString();
    });
    let obj = this.set_carts_totals();
    this.setState({
      carts: carts,
      nums_carts: obj.nums,
      total_carts: obj.total
    });
  }

  clearCarts() {
    this.setState({
      carts: [],
      nums_carts: 0,
      total_carts: 0
    });
  }

  //组装号码
  assembleBall() {
    return _inputFormat(
      this.state.currentGame.method,
      getData(
        this.state.isRXinput ? this.assemblePosition() : [],
        this.state.isInput
          ? []
          : this.assembleData(
              this.state.layout.length,
              this.state.layout[0]["nums"].length
            ),
        this.state.isInput,
        this.state.cptype,
        this.state.isInput ? this.state.textAreaValue : ""
      )
    );
  }

  //组装购物车
  resembleCart() {
    //组装购物车数据
    var cart = {},
      method = this.state.currentGame.method;
    cart["id"] = new Date().getTime();
    cart["cp_name"] = this.state.cp_name;
    cart["position"] = []; //任选玩法的位置
    cart["name_cn"] =
      this.state.currentGame.top_name_cn +
      "-" +
      this.state.currentGame.pname_cn +
      "-" +
      this.state.currentGame.name_cn;
    cart["nums"] = this.state.nums.toString();
    cart["multiple"] = this.state.mutiple.toString();
    cart["money"] = this.state.total.toString();
    cart["codes"] = this.assembleBall();
    cart["wayId"] = this.state.methodId;
    cart["moneyunit"] = mode[this.state.mode]["value"];
    cart["mode"] = mode[this.state.mode]["name"];
    cart["prize_group"] = this.state.prize_group;
    cart["prize"] = this.state.prize;
    //处理选号格式
    //判断codes是否传过来是数组---针对任选单式的
    var codeslist = Array.isArray(cart["codes"])
      ? cart["codes"]
      : cart["codes"].split(",");
    var temp = [],
      tempString = "";
    //判断是否事特殊处理的玩法  比如定位胆、大小单双、定单双、龙虎。
    var special_play = false;
    if (
      method === "zonghe" ||
      method === "dw" ||
      method === "douniu" ||
      method === "suoha" ||
      method === "dwd" ||
      method === "dwd3d" ||
      method === "longhu" ||
      method === "pk10longhu" ||
      method === "pk10daxiaodanshuang" ||
      method === "dds" ||
      method.indexOf("dxds") !== -1 ||
      method === "TSH"
    ) {
      special_play = true;
    }
    for (var prop in codeslist) {
      if (special_play) {
        //判断是否为定位胆
        if (method === "dw" || method === "dwd" || method === "dwd3d") {
          temp.push(codeslist[prop].replace(/-/g, ""));
        }

        //龙虎
        if (method === "longhu") {
          temp = codeslist[prop].split("");
          for (var p in temp) {
            var name = temp[p];
            switch (name) {
              case "龙":
                temp[p] = 0;
                break;
              case "虎":
                temp[p] = 1;
                break;
              case "和":
                temp[p] = 2;
                break;
              default:
                break;
            }
          }
          tempString = temp.join("").toString();
        }
        //pk10龙虎
        if (method === "pk10longhu") {
          temp = codeslist[prop].split("");
          for (var pp in temp) {
            var name1 = temp[pp];
            switch (name1) {
              case "龙":
                temp[pp] = 0;
                break;
              case "虎":
                temp[pp] = 1;
                break;
              default:
                break;
            }
          }
          tempString = temp.join(" ").toString();
        }
        //定单双
        if (method === "dds") {
          temp = codeslist[prop].split("|");
          for (var kk in temp) {
            var name2 = temp[kk];
            switch (name2) {
              case "5单0双":
                temp[kk] = 5;
                break;
              case "4单1双":
                temp[kk] = 4;
                break;
              case "3单2双":
                temp[kk] = 3;
                break;
              case "2单3双":
                temp[kk] = 2;
                break;
              case "1单4双":
                temp[kk] = 1;
                break;
              case "0单5双":
                temp[kk] = 0;
                break;
              default:
                break;
            }
          }
          tempString = temp.join(" ").toString();
        }
        //牛牛
        if (method === "douniu") {
          temp = codeslist.join(",").split(",");
          for (var mm in temp) {
            var name3 = temp[mm];
            switch (name3) {
              case "牛牛":
                temp[mm] = 0;
                break;
              case "牛一":
                temp[mm] = 1;
                break;
              case "牛二":
                temp[mm] = 2;
                break;
              case "牛三":
                temp[mm] = 3;
                break;
              case "牛四":
                temp[mm] = 4;
                break;
              case "牛五":
                temp[mm] = 5;
                break;
              case "牛六":
                temp[mm] = 6;
                break;
              case "牛七":
                temp[mm] = 7;
                break;
              case "牛八":
                temp[mm] = 8;
                break;
              case "牛九":
                temp[mm] = 9;
                break;
              case "牛小":
                temp[mm] = 10;
                break;
              case "牛大":
                temp[mm] = 11;
                break;
              case "牛双":
                temp[mm] = 12;
                break;
              case "牛单":
                temp[mm] = 13;
                break;
              case "没牛":
                temp[mm] = 14;
                break;
              default:
                break;
            }
          }
          tempString = temp.join("").toString();
        }
        //大小单双
        if (method.indexOf("dxds") !== -1) {
          var t = codeslist[prop].split("");
          for (var nn in t) {
            var name4 = t[nn];
            switch (name4) {
              case "大":
                t[nn] = 1;
                break;
              case "小":
                t[nn] = 0;
                break;
              case "单":
                t[nn] = 3;
                break;
              case "双":
                t[nn] = 2;
                break;
              default:
                break;
            }
          }
          temp.push(t.join(""));
        }
        //pk10-----大小单双
        if (method === "pk10daxiaodanshuang") {
          var t1 = codeslist[prop];
          if (t1 !== "|") {
            var name5 = t1.split("");
            for (var n in name5) {
              var s = name5[n];
              switch (s) {
                case "大":
                  name5[n] = 1;
                  break;
                case "小":
                  name5[n] = 0;
                  break;
                case "单":
                  name5[n] = 3;
                  break;
                case "双":
                  name5[n] = 2;
                  break;
                default:
                  break;
              }
            }
            t1 = name5.join("");
          }
          temp.push(t1.replace("|", ""));
        }
        //豹子顺子对子--特殊号
        if (method === "TSH") {
          temp = codeslist.join(",").split(",");
          for (var zz in temp) {
            var name6 = temp[zz];
            switch (name6) {
              case "豹子":
                temp[zz] = 0;
                break;
              case "顺子":
                temp[zz] = 1;
                break;
              case "对子":
                temp[zz] = 2;
                break;
              default:
                break;
            }
          }
          tempString = temp.join("").toString();
        }
        if (method === "suoha") {
          temp = codeslist.join(",").split(",");
          for (var yy in temp) {
            var name7 = temp[yy];
            switch (name7) {
              case "五条":
                temp[yy] = 0;
                break;
              case "四条":
                temp[yy] = 1;
                break;
              case "三条":
                temp[yy] = 2;
                break;
              case "两对":
                temp[yy] = 3;
                break;
              case "一对":
                temp[yy] = 4;
                break;
              case "葫芦":
                temp[yy] = 5;
                break;
              case "顺子":
                temp[yy] = 6;
                break;
              case "散号":
                temp[yy] = 7;
                break;
              default:
                break;
            }
          }
          tempString = temp.join("").toString();
        }
        //总和
        if (method === "zonghe") {
          temp = codeslist.join(",").split(",");
          for (var q in temp) {
            var name8 = temp[q];
            switch (name8) {
              case "总和大":
                temp[q] = 1;
                break;
              case "总和小":
                temp[q] = 0;
                break;
              case "总和单":
                temp[q] = 3;
                break;
              case "总和双":
                temp[q] = 2;
                break;
              default:
                break;
            }
          }
          tempString = temp.join("").toString();
        }
      } else {
        //如果是任选玩法
        if (
          this.state.currentGame.isrx.toString() === "1" &&
          !this.state.isRXinput
        ) {
          //是任选的情况下判断是不是需要选择位置
          temp.push(codeslist[prop].replace(/√|-/g, ""));
        } else {
          if (codeslist[prop] !== "-" && codeslist[prop] !== "√") {
            temp.push(codeslist[prop]);
          }
        }
      }
    }
    if (
      method !== "longhu" &&
      method !== "pk10longhu" &&
      method !== "TSH" &&
      method !== "suoha" &&
      method !== "dds"
    ) {
      if (method === "czw") {
        tempString = temp.join(" ");
      } else {
        tempString = temp.join("|");
      }
    }
    //如果是任选玩法添加postion字段
    if (this.state.isRXinput) {
      for (let i = 0; i < 5; i++) {
        if (this.refs["position-" + i].state.active) {
          cart["position"].push("1");
        } else {
          cart["position"].push("0");
        }
      }
    }
    cart["ball"] = tempString;
    return cart;
  }

  //组装投注数据
  resembleSubmitData(cart) {
    let betObj = {},
      ball = {};
    betObj["gameId"] = this.state.cpId;
    betObj["isTrace"] = 0;
    betObj["traceWinStop"] = 1; //中奖后是否停止
    betObj["traceStopValue"] = 1; //
    betObj["_token"] = this.state._token; //token
    betObj["balls"] = [];
    ball["wayId"] = cart["wayId"]; //玩法ID
    ball["num"] = cart["nums"]; //注数
    ball["onePrice"] = 1; //单价1元每注
    ball["type"] = cart["name_cn"];
    ball["moneyunit"] = cart["moneyunit"]; //元角分模式
    ball["prize_group"] = cart["prize_group"]; //奖金返点
    ball["position"] = cart["position"] || []; //任选位置
    ball["ball"] = cart["ball"];
    ball["multiple"] = cart["multiple"];
    betObj["balls"].push(ball);
    betObj["orders"] = {};
    betObj["orders"][this.state.currentNumber] = "1";
    betObj["amount"] = Number(this.state.total);
    return betObj;
  }

  //立即投注
  betSubmit() {
    //判断是否有效投注
    if (this.state.nums.toString() === "0") {
      warning("无效投注");
      return;
    }
    //组装购彩数据
    var cart = this.resembleCart();
    //组装投注提交的数据
    var betObj = this.resembleSubmitData(cart);
    this.state.isInput ? this.clearAllTextarea() : this.resetBalls();
    this.setState({
      quick_bet_loading: true
    });
    this.submit_request = submitData(
      "/bets/bet/" + this.state.cpId,
      betObj
    ).subscribe(
      res => {
        this.setState({
          quick_bet_loading: false
        });
        if (res.data.isSuccess === 1) {
          eventProxy.trigger("refleshBalance");
          //获取最新的投注记录
          this.fetchRecord();
          this.setState({
            bet_success: true
          });
          setTimeout(() => {
            this.setState({
              bet_success: false
            });
          }, 1000);
          return;
        }
        if (res.data.errno === 1004) {
          this.props.history.push("/login");
          return;
        }
        warning(res.data.Msg || res.data.data.info || res.data.type);
      },
      error => {
        this.setState({
          quick_bet_loading: false
        });
        showNotification("error", "温馨提示", error.message);
      }
    );
  }

  resembleCartsSubmitData(cart) {
    //data==> 是传入的追号数据
    var betObj = {},
      cartArray = [];
    if (!Array.isArray(cart)) {
      cartArray.push(cart);
    } else {
      cartArray = cart;
    }
    betObj["gameId"] = this.state.cpId;
    betObj["isTrace"] = 0;
    betObj["traceWinStop"] = 1; //中奖后是否停止
    betObj["traceStopValue"] = 1; //
    betObj["_token"] = this.state._token; //token
    betObj["balls"] = [];
    for (var i = 0; i < cartArray.length; i++) {
      var ball = {};
      ball["wayId"] = cartArray[i]["wayId"]; //玩法ID
      ball["num"] = cartArray[i]["nums"]; //注数
      ball["onePrice"] = 1; //单价1元每注
      ball["type"] = cartArray[i]["name_cn"];
      ball["moneyunit"] = cartArray[i]["moneyunit"]; //元角分模式
      ball["prize_group"] = cartArray[i]["prize_group"]; //奖金返点
      ball["position"] = cartArray[i]["position"] || []; //任选位置
      ball["ball"] = cartArray[i]["ball"];
      ball["multiple"] = cartArray[i]["multiple"];
      betObj["balls"].push(ball);
    }
    betObj["orders"] = {};
    betObj["orders"][this.state.currentNumber] = "1";
    betObj["amount"] = Number(this.state.total_carts);
    this.setState({
      carts_betObj: betObj
    });
    return betObj;
  }

  confirm_bet() {
    //判断是否有效投注
    if (this.state.nums_carts.toString() === "0") {
      warning("无效投注");
      return;
    }
    let betObj = this.resembleCartsSubmitData(this.state.carts);
    this.state.isInput ? this.clearAllTextarea() : this.resetBalls();
    this.submit_request && this.submit_request.unsubscribe();
    this.submit_request = submitData(
      "/bets/bet/" + this.state.cpId,
      betObj
    ).subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          eventProxy.trigger("refleshBalance");
          this.fetchRecord();
          this.clearCarts();
          this.setState({
            bet_success: true
          });
          setTimeout(() => {
            this.setState({
              bet_success: false
            });
          }, 1000);
          return;
        }
        if (res.data.errno === 1004) {
          this.props.history.push("/login");
          return;
        }
        warning(res.data.Msg || res.data.data.info || res.data.type);
      },
      error => {
        // showNotification("error", "温馨提示", error.message);
        message.error("投注接口" + error.message);
      }
    );
  }

  checkOpenLottery() {
    let self = this,inter = this.state.cycle>60?10000:2000;
    //倒计时之前先清除
    clearInterval(this.checkOpenLotteryTimer);
    this.checkOpenLotteryTimer = setInterval(() => {
      self.checkOpenLottery_request &&
        self.checkOpenLottery_request.unsubscribe();
      self.checkOpenLottery_request = fetchData(
        "/mobile-lotteries/load-issues/" + this.state.cpId
      ).subscribe(
        res => {
          if (!res) {
            message.error(
              "非法请求/mobile-lotteries/load-issues/" + this.state.cpId
            );
            clearInterval(self.checkOpenLotteryTimer);
            return;
          }
          if (res.data.isSuccess === 1) {
            let data = res.data.data[self.state.cpId],
              currentNumber = self.state.currentNumber.replace(/-/g, ""),
              openballs = "",
              newIssue = data[0]["number"].replace(/-/g, "");
            if (Number(currentNumber) - Number(newIssue) === 1) {
              //清除倒计时已经抓到奖了
              clearInterval(self.checkOpenLotteryTimer);
              clearTimeout(self.timeout); //清除10后到自动抓奖
              if (
                self.state.cptype === "x115" ||
                self.state.cptype === "pk10" ||
                self.state.cptype === "mqtpk10"
              ) {
                openballs = data[0]["code"].split(" ");
              } else {
                openballs = data[0]["code"].split("");
              }
              //已经抓取了最新开奖
              self.setState({
                is_issue_open: true,
                lastNumber: newIssue,
                openballs: openballs,
                open_draw_list: data
              });
              //开始去抓派奖
              self.fetchWinMoney();
              return;
            }
            return;
          }
          if (res.data.errno === 1004) {
            this.props.history.push("/login");
            return;
          }
        },
        error => {
          // console.log(error);
          message.error(error.message);
        }
      );
    }, inter);
  }

  //倒计时抓奖
  fetchCodes(issue) {
    let self = this,inter = this.state.cycle>60?10000:2000;
    //倒计时之前先清除
    clearInterval(this.fetchCodesTimer);
    this.fetchCodesTimer = setInterval(() => {
      self.fetchCodes_request && self.fetchCodes_request.unsubscribe();
      self.fetchCodes_request = fetchData(
        "/mobile-lotteries/load-issues/" + this.state.cpId
      ).subscribe(
        res => {
          if (!res) {
            clearInterval(self.fetchCodesTimer);
            return;
          }
          // 如果issue是空，说明刚进入投注界面，还没有开奖
          if (res.data.isSuccess === 1) {
            //如果获取的奖号第一个不等于要开奖的奖号则表示还没有开奖 return不往下执行
            if (res.data.data[self.state.cpId][0]["number"] !== issue) {
              return;
            }
            eventProxy.trigger("updateTrend"); //更新走势图
            //抓到奖后马上清除倒计时
            clearInterval(self.fetchCodesTimer);
            //更新开奖球和期号
            let openballs = [];
            if (
              self.state.cptype === "x115" ||
              self.state.cptype === "pk10" ||
              self.state.cptype === "mqtpk10"
            ) {
              openballs = res.data.data[self.state.cpId][0]["code"].split(" ");
            } else {
              openballs = res.data.data[self.state.cpId][0]["code"].split("");
            }
            //更新开奖内容
            self.setState({
              historyNumbers: res.data.data[self.state.cpId],
              lastNumber: res.data.data[self.state.cpId][0]["number"],
              openballs: openballs
            });
            //开始去抓派奖
            self.fetchWinMoney();
            return;
          }
          if (res.data.errno === 1004) {
            this.props.history.push("/login");
            return;
          }
          clearInterval(self.fetchCodesTimer);
        },
        error => {
          clearInterval(self.fetchCodesTimer);
          message.error("抓奖出现网络问题,请您刷新页面！" + error.message);
        }
      );
    }, inter);
  }

  updateBetMoney(data) {
    if (data.length === 0) {
      clearInterval(this.fetchWinMoneyTimer);
      return;
    }
    let row,
      prizeList = [],
      j = 0;
    //要派奖的期号 this.state.openIssue
    for (let index = 0; index < data.length; index++) {
      row = data[index];
      //如果派奖的期号跟要开奖的期号匹配并且状态码是3 已中奖//更新余额
      if (row["number"] === this.state.openIssue && row["statuscode"] === 3) {
        prizeList.push(row);
      }
      //表示未开奖
      if (row["statuscode"] === 0) {
        ++j;
      }
    }
    //表示都是完成状态则可以清除倒计时
    if (j === 0) {
      clearInterval(this.fetchWinMoneyTimer);
    }
    if (prizeList.length > 0) {
      for (var i = 0; i < prizeList.length; i++) {
        let item = prizeList[i];
        openNotification(
          item.gamename + ":" + item.method,
          Number(item["prize"])
        );
      }
      eventProxy.trigger("refleshBalance");
      // self.getBalance();//刷新余额
      // clearInterval(this.fetchWinMoneyTimer);
    }
  }

  fetchRecord() {
    this.fetch_record_request = fetchData(
      '/bets/bet-info?param[0]["type"]="bet"&param[1]["type"]="traces"'
    ).subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          this.setState({
            betRecord: res.data.data[0]["data"],
            traceRecord: res.data.data[1]["data"]
          });
        }
        if (res.data.errno === 1004) {
          this.props.history.push("/login");
          return;
        }
      },
      error => {
        message.error("/bets/bet-info?..." + error.message);
      }
    );
  }

  //倒计时派奖
  fetchWinMoney() {
    let self = this;
    //执行之前先clear
    clearInterval(this.fetchWinMoneyTimer);
    this.fetchWinMoneyTimer = setInterval(() => {
      let betContent;
      self.fetchWinMoney_request && self.fetchWinMoney_request.unsubscribe();
      self.fetchWinMoney_request = fetchData(
        '/bets/bet-info?param[0]["type"]="bet"&param[1]["type"]="traces"'
      ).subscribe(
        res => {
          if (!res) {
            clearInterval(self.fetchWinMoneyTimer);
            return;
          }
          if (res.data.isSuccess === 1) {
            betContent = res.data.data[0]["data"];
            if (betContent.length === 0) {
              clearInterval(self.fetchWinMoneyTimer);
              return;
            }
            self.setState({
              betRecord: res.data.data[0]["data"],
              traceRecord: res.data.data[1]["data"]
            });
            //更新中奖
            self.updateBetMoney(betContent);
            return;
          }
          if (res.data.errno === 1004) {
            self.props.history.push("/login");
            return;
          }
          clearInterval(self.fetchWinMoneyTimer);
        },
        error => {
          message.error(error.message);
        }
      );
    }, 3000);
  }
  //追号撤单
  cancelAll(item) {
    this.setState({
      traceDetail: item
    });
    this.fetch_request = fetchData("/traces/stop/" + item.id).subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          this.update_trace_all(item.id);
          message.success(res.data.data.info);
          return;
        }
        if (res.data.errno === 1004) {
          this.props.history.push("/login");
          return;
        }
        message.warning(res.data.Msg || res.data.data.info || res.data.type, 1);
      },
      error => {
        showNotification(
          "error",
          "温馨提示",
          "/traces/stop/" + item.id + error.message
        );
      }
    );
  }
  update_trace_all(id) {
    let list = this.state.traceRecord;
    let index = list.findIndex(function(c) {
      return c.id.toString() === id.toString();
    });
    var updatedObj = update(list[index], {
      status: { $set: "用户撤单" },
      statuscode: { $set: 2 }
    });
    var newData = update(list, {
      $splice: [[index, 1, updatedObj]]
    });
    this.setState({ traceRecord: newData });
  }
  //投注撤单
  cancel(item) {
    let element = item || this.state.betDetail;
    this.fetch_request = fetchData(
      "/mobile-projects/" + element.id + "/drop"
    ).subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          message.success(res.data.Msg);
          this.update_bet_current();
          this.update_bet_list(element.id);
          return;
        }
        if (res.data.errno === 1004) {
          this.props.history.push("/login");
          return;
        }
        showNotification("warning", "温馨提示", res.data.Msg, 1);
      },
      error => {
        showNotification(
          "error",
          "温馨提示",
          "/mobile-projects/" + element.id + "/drop" + error.message
        );
      }
    );
  }
  update_bet_current() {
    var updatedObj = update(this.state.betDetail, {
      status: { $set: "已撤单" },
      statuscode: { $set: 1 }
    });
    this.setState({ betDetail: updatedObj });
  }
  update_bet_list(id) {
    let list = this.state.betRecord;
    let index = list.findIndex(function(c) {
      return c.id.toString() === id.toString();
    });
    var updatedObj = update(list[index], {
      status: { $set: "已撤单" },
      statuscode: { $set: 1 }
    });
    var newData = update(list, {
      $splice: [[index, 1, updatedObj]]
    });
    this.setState({ betRecord: newData });
  }

  //追号详情
  checkTraceDetail(item) {
    this.fetch_request = fetchData("/traces/view/" + item.id).subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          this.setState({
            traceDetail: item,
            traceList: res.data.data.aTraceDetailList.data,
            show_trace_modal: true
          });
          return;
        }
        if (res.data.errno === 1004) {
          this.props.history.push("/login");
          return;
        }
        message.warning(res.data.Msg || res.data.data.info || res.data.type, 1);
      },
      error => {
        showNotification(
          "error",
          "温馨提示",
          "/trace/view/" + item.id + error.message
        );
      }
    );
  }
  //投注详情
  checkBetDetail(id) {
    this.fetch_request = fetchData("/projects/view/" + id).subscribe(
      res => {
        if (res.data.isSuccess === 1) {
          this.setState({
            betDetail: res.data.data.data,
            show_bet_modal: true
          });
          return;
        }
        if (res.data.errno === 1004) {
          this.props.history.push("/login");
          return;
        }
      },
      error => {
        message.error(error.message);
      }
    );
  }

  //closeBetModal
  closeBetModal() {
    this.setState({
      show_bet_modal: false
    });
  }

  closeTraceModal() {
    this.setState({
      show_trace_modal: false
    });
  }

  handleCloseTrace() {
    this.setState({
      visible: false
    });
  }

  //追号功能
  confirm_trace() {
    this.refs.traceComponent.confirm_trace();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="gheader">
            <div className="left">
              <div className="logo">
                <img src={this.state.cplogo} alt="" />
              </div>

              <div className="time">
                <div className="nubmer">
                  <p>
                    第<span>{this.state.currentNumber}</span>期
                  </p>
                  <p>投注截止</p>
                </div>
              </div>

              <div
                className="uk-grid-small uk-child-width-auto uk-margin countdown"
                uk-grid="true"
              >
                <div>
                  <div className="uk-countdown-number uk-countdown-hours">
                    <span>{this.state.hour}</span>
                  </div>
                </div>
                <div className="uk-countdown-separator">:</div>
                <div>
                  <div className="uk-countdown-number uk-countdown-minutes">
                    <span>{this.state.minute}</span>
                  </div>
                </div>
                <div className="uk-countdown-separator">:</div>
                <div>
                  <div className="uk-countdown-number uk-countdown-seconds">
                    <span>{this.state.second}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="time">
                <div className="nubmer">
                  <p>
                    第<span>{this.state.lastNumber}</span>期
                  </p>
                  <p>{this.state.cp_name}</p>
                </div>
              </div>

              <div className="kj">
                {/*时时彩开奖号码*/}
                {(this.state.cptype === "ssc" ||
                  this.state.cptype === "f3d" ||
                  this.state.cptype === "plw") && (
                  <div className="ssc">
                    <div className="numbox">
                      {this.state.openballs.length > 0 &&
                        this.state.openballs.map((item, index) => {
                          return (
                            <span
                              key={index}
                              className={"ball" + item + " animated zoomInDown"}
                            />
                          );
                        })}
                    </div>
                  </div>
                )}
                {this.state.cptype === "x115" && (
                  <div className="ssc">
                    <div className="numbox">
                      {this.state.openballs.length > 0 &&
                        this.state.openballs.map((item, index) => {
                          return (
                            <span
                              key={index}
                              className={"ball" + item + " animated zoomInDown"}
                            />
                          );
                        })}
                    </div>
                  </div>
                )}

                {this.state.cptype === "pk10" && (
                  <div className="pk10">
                    {this.state.openballs.length > 0 &&
                      this.state.openballs.map((item, index) => {
                        return (
                          <span
                            key={index}
                            className={
                              "nub" + (index + 1) + " animated fadeInRight"
                            }
                          >
                            {item}
                          </span>
                        );
                      })}
                  </div>
                )}
                {this.state.cptype === "k3" && (
                  <div className="k3">
                    {this.state.openballs.length > 0 &&
                      this.state.openballs.map((item, index) => {
                        return (
                          <span
                            key={index}
                            className={"nub" + item + " animated rotateIn"}
                          />
                        );
                      })}
                  </div>
                )}
              </div>
              <div className="btns">
                <Button
                  onClick={() => {
                    this.open_game_description();
                  }}
                >
                  <Icon type="info-circle" />
                  玩法说明
                </Button>
                <Button
                  onClick={() => {
                    this.setState({
                      autoplay: !this.state.autoplay
                    });
                  }}
                >
                  <Icon type={this.state.autoplay ? "close-circle" : "sound"} />
                  {this.state.autoplay ? "关闭声音" : "打开声音"}
                </Button>
              </div>
            </div>
          </div>

          <div className="bet_box">
            <div className="navplays">
              <ul>
                {this.state.gameMethods &&
                  this.state.gameMethods.map((item, index) => {
                    return (
                      <li
                        onClick={() => {
                          this.setSubMethods(item.children, item.id.toString());
                        }}
                        className={
                          item.id.toString() === this.state.bigId
                            ? "active"
                            : ""
                        }
                        key={index}
                      >
                        {item.name_cn}
                      </li>
                    );
                  })}
              </ul>
              <div className="bonus">
                <div className="left">近期开奖</div>

                {this.state.cptype === "ssc" && (
                  <div className="right">
                    <Button
                      type="primary"
                      onClick={() => {
                        this.openTrend();
                      }}
                    >
                      <Icon type="line-chart" />
                      走势图
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="mainbet">
              <div className="bet">
                <div className="subplays">
                  {this.state.subMethods.length > 0 &&
                    this.state.subMethods.map((item, index) => {
                      return (
                        <div key={index} className="line">
                          <span className="title">{item.name_cn}</span>
                          <div className="btns">
                            {item.children.map((citem, index) => {
                              return (
                                <span
                                  onClick={() => {
                                    this.change_method(
                                      this.state.bigId,
                                      citem.pid.toString(),
                                      citem.id.toString()
                                    );
                                  }}
                                  className={
                                    citem.id.toString() === this.state.methodId
                                      ? "active"
                                      : ""
                                  }
                                  key={index}
                                >
                                  {citem.name_cn}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                </div>
                <div className="form-group">
                  {/**任选位置**/}
                  {this.state.isRXinput && (
                    <Checkbox.Group
                      value={this.state.default_position_nums}
                      onChange={value => {
                        this.setState({ default_position_nums: value });
                      }}
                    >
                      {this.state.rxarray.length > 0 &&
                        this.state.rxarray.map((item, index) => {
                          return (
                            <Position
                              key={index}
                              rows={1}
                              p_value={index}
                              selected={item.id}
                              title={item.title}
                              id={"position-" + index.toString()}
                              onSelect={this.selectedPosition.bind(this)}
                              ref={"position-" + index.toString()}
                            />
                          );
                        })}
                    </Checkbox.Group>
                  )}
                  {/*复式输入*/}
                  {!this.state.isInput &&
                    this.state.layout.map((item, first_index) => {
                      return (
                        <div key={first_index} className="selectArea">
                          <span className="position">{item.title}</span>
                          <ul className="lottery-num">
                            {item.no.split('|').map((num, second_index) => {
                              let length = item.no.split('|').length;
                              return (
                                <Ball
                                  maxpic={item.maxpic}
                                  key={second_index}
                                  num={num}
                                  rows={this.state.layout.length}
                                  row={first_index}
                                  column={second_index}
                                  ball_nums={length}
                                  id={
                                    "ball-" +
                                    first_index.toString() +
                                    "-" +
                                    second_index.toString()
                                  }
                                  onSelect={this.selectedBall.bind(this)}
                                  ref={
                                    "ball-" +
                                    first_index.toString() +
                                    "-" +
                                    second_index.toString()
                                  }
                                />
                              );
                            })}
                          </ul>
                          {this.state.isTools && item.title_en !== "danma" && (
                            <ul className="quicktool">
                              <li
                                onClick={() => {
                                  this.setDXDS(first_index, "quan");
                                }}
                              >
                                全
                              </li>
                              <li
                                onClick={() => {
                                  this.setDXDS(first_index, "da");
                                }}
                              >
                                大
                              </li>
                              <li
                                onClick={() => {
                                  this.setDXDS(first_index, "xiao");
                                }}
                              >
                                小
                              </li>
                              <li
                                onClick={() => {
                                  this.setDXDS(first_index, "dan");
                                }}
                              >
                                单
                              </li>
                              <li
                                onClick={() => {
                                  this.setDXDS(first_index, "shuang");
                                }}
                              >
                                双
                              </li>
                              <li
                                onClick={() => {
                                  this.setDXDS(first_index, "clear");
                                }}
                              >
                                清
                              </li>
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  {/*单式输入*/}
                  {this.state.isInput && (
                    <div className="textArea">
                      <div className="tips">
                        <p>
                          说明：每注号码需用间隔符分开（如：回车键 英文逗号
                          分号"|"），最大支持10万注。
                        </p>
                        <Button onClick={()=>{
                          this.clearAllTextarea();
                        }} size={"small"}>
                          <Icon type="delete" />
                          清空内容
                        </Button>
                      </div>
                      <TextArea
                        onChange={this.textAreaChange.bind(this)}
                        value={this.state.textAreaValue}
                        placeholder="请输入号码内容 时时彩、快3、福彩（格式范例：12345 23456 88767 33021 98897） 11选5、赛车、飞艇（格式范例：01 02;02 03;...）"
                        autosize={{ minRows: 5, maxRows: 5 }}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="trend">
                <div className="trend_box">
                  <table>
                    <thead>
                      <tr>
                        <th>期号</th>
                        <th>开奖号码</th>
                      </tr>
                    </thead>

                    <tbody>
                      {/*时时彩*/}
                      {(this.state.cptype === "ssc" ||
                        this.state.cptype === "f3d") &&
                        this.state.historyNumbers.map((item, index) => {
                          return (
                            <tr key={index} className="ssc">
                              <th>{item.number}</th>
                              <th>
                                {item.code.split("").map((num, index) => {
                                  return <span key={index}>{num}</span>;
                                })}
                              </th>
                            </tr>
                          );
                        })}
                      {/*11选5*/}
                      {this.state.cptype === "x115" &&
                        this.state.historyNumbers.map((item, index) => {
                          return (
                            <tr key={index} className="ssc">
                              <th>{item.number}</th>
                              <th>
                                {item.code.split(" ").map((num, index) => {
                                  return <span key={index}>{num}</span>;
                                })}
                              </th>
                            </tr>
                          );
                        })}
                      {/*Pk10赛车*/}
                      {this.state.cptype === "pk10" &&
                        this.state.historyNumbers.map((item, index) => {
                          return (
                            <tr key={index} className="pk10">
                              <th>{item.number}</th>
                              <th className="nub">
                                {item.code.split(" ").map((num, index) => {
                                  return (
                                    <span
                                      className={"nub" + (index + 1)}
                                      key={index}
                                    >
                                      {num}
                                    </span>
                                  );
                                })}
                              </th>
                            </tr>
                          );
                        })}

                      {/*快3系列*/}
                      {this.state.cptype === "k3" &&
                        this.state.historyNumbers.map((item, index) => {
                          return (
                            <tr key={index} className="k3">
                              <th>{item.number}</th>
                              <th className="nub">
                                {item.code.split("").map((num, index) => {
                                  return (
                                    <span className={"nub" + num} key={index} />
                                  );
                                })}
                              </th>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="toolarea">
              <div className="amount">
                <div>
                  已选<span>{this.state.nums}</span>注/共
                  <span>{this.state.total}</span>元，奖金
                  <span>
                    {this.state.prize}
                    {this.state.honghu_prize === ""
                      ? ""
                      : "—"+this.state.honghu_prize}
                    
                  </span>
                  元
                </div>
              </div>

              <div className="moneyunit">
                {moshiarray.map((item, index) => {
                  return (
                    <span
                      key={index}
                      onClick={() => {
                        this.updateMode(item.value, item.amount);
                      }}
                      className={this.state.mode === item.value ? "active" : ""}
                    >
                      {item.name}
                    </span>
                  );
                })}
              </div>

              <div className="multiple">
                <span>倍数:</span>
                <Icon
                  onClick={() => {
                    this.setMutiple("minus");
                  }}
                  type="minus-circle"
                />
                <input
                  type="nubmer"
                  onChange={e => {
                    this.setMutiple(e.target.value);
                  }}
                  value={this.state.mutiple}
                  min={1}
                  max={10000}
                />
                <Icon
                  onClick={() => {
                    this.setMutiple("add");
                  }}
                  type="plus-circle"
                />
              </div>

              <div className="slide">
                <span>奖金:</span>
                <Slider
                  value={this.state.prize_group}
                  step={2}
                  onChange={prize_group => {
                    let prize = '';
                    if(this.state.bigId.toString() === "80"){
                      prize = ((2.22 * Number(prize_group)) / 2000).toFixed(3)
                    }else{
                      prize = (
                        ((Number(this.state.currentGame.prize) * prize_group) /
                          Number(this.state.bet_max_prize_group)) *
                        Number(mode[this.state.mode]["value"])
                      ).toFixed(3);
                    }
                    this.setState({
                      prize_group: prize_group,
                      prize: prize,
                      honghu_prize:this.state.bigId.toString() === "80"? ((9.98 * Number(prize_group)) / 2000).toFixed(3): "",
                      point:Number(((this.state.user_prize_group - prize_group) /20).toFixed(2))
                    });
                  }}
                  min={this.state.bet_min_prize_group}
                  max={this.state.bet_max_prize_group}
                  tipFormatter={null}
                />
                <span className="jiangjin">
                  {this.state.prize_group}/{this.state.point}%
                </span>
              </div>

              <div className="btns">
                <Button
                  onClick={() => {
                    this.add_to_carts();
                  }}
                  className="add_btn"
                >
                  <Icon type="plus" />
                  添加到购彩篮
                </Button>
                <Button
                  className="btn"
                  loading={this.state.quick_bet_loading}
                  onClick={this.betSubmit.bind(this)}
                >
                  <Icon type="check-circle" />
                  直接投注
                </Button>
              </div>
            </div>

            <div className="basket_box">
              <div className="basket">
                <div className="title">
                  <span>购彩篮</span>
                  <Button onClick={this.clearCarts.bind(this)} size={"small"}>
                    <Icon type="delete" />
                    清空
                  </Button>
                </div>

                <div className="table_title span_width">
                  <span>玩法</span>
                  <span>号码</span>
                  <span>注数</span>
                  <span>模式</span>
                  <span>金额</span>
                  <span>操作</span>
                </div>

                <ul>
                  {this.state.carts.length > 0 &&
                    this.state.carts.map((item, index) => {
                      return (
                        <li key={index} className="span_width">
                          <span>{item.name_cn}</span>
                          <span>
                            {item.codes.length > 100
                              ? item.codes.slice(0, 100) + "..."
                              : item.codes}
                          </span>
                          <span>{item.nums}</span>
                          <span>
                            {item.mode}/{item.multiple}倍
                          </span>
                          <span>{item.money}</span>
                          <span
                            onClick={() => {
                              this.delete_single_cart(item.id);
                            }}
                            className="delete"
                          >
                            删除
                          </span>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className="toolarea">
              <div className="bet-statics-commit">
                <div className="bet-statistics">
                  <p>
                    总计:<span>{this.state.total_carts}</span>注 / 共
                    <span>{this.state.nums_carts}</span>元，
                  </p>
                  <div className="countdown">
                    截止时间:
                    <div className="ant-statistic">
                      <div className="ant-statistic-content">
                        <span className="ant-statistic-content-value">
                          {this.state.hour +
                            ":" +
                            this.state.minute +
                            ":" +
                            this.state.second}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="btns">
                  <Button
                    className="add_btn"
                    onClick={this.showTraceModal.bind(this)}
                  >
                    <Icon type="thunderbolt" />
                    追号
                  </Button>
                  <Button
                    loading={this.state.confirm_bet_loading}
                    onClick={this.confirm_bet.bind(this)}
                    className="btn"
                  >
                    <Icon type="check-circle" />
                    确认投注
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="recording">
            <Record
              cancel={this.cancel.bind(this)}
              cancelAll={this.cancelAll.bind(this)}
              checkTraceDetail={this.checkTraceDetail.bind(this)}
              checkBetDetail={this.checkBetDetail.bind(this)}
              betRecord={this.state.betRecord}
              traceRecord={this.state.traceRecord}
            />
          </div>
        </div>

        {this.state.bet_success && (
          <div style={{ position: "absolute", top: "35%", left: "35%" }}>
            <Lottie
              width={400}
              height={400}
              options={{
                loop: false,
                autoplay: true,
                animationData: animation
              }}
            />
          </div>
        )}

        <Modal
          width={800}
          visible={this.state.visible}
          onOk={this.confirm_trace.bind(this)}
          onCancel={this.handleCancel}
          okText={"确认追号"}
          cancelText={"取消"}
        >
          <Trace
            clearCarts={this.clearCarts.bind(this)}
            handleCloseTrace={this.handleCloseTrace.bind(this)}
            ref="traceComponent"
            issues={this.state.issues}
            fetchRecord={this.fetchRecord.bind(this)}
            issue={this.state.currentNumber}
            traceMaxTimes={this.state.traceMaxTimes}
            betObj={this.state.carts_betObj}
            carts_nums={this.state.nums_carts}
            carts_total={this.state.total_carts}
            initalMoney={this.state.total_carts}
            cpId={this.state.cpId}
          />
        </Modal>

        <Modal
          title={"玩法说明:"}
          visible={this.state.show_game_description}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText={"确认"}
          cancelText={"取消"}
        >
          <div className="game_description">
            <div className="title">玩法说明:</div>
            <div className="content">
              {this.state.currentGame && this.state.currentGame.bet_note}
            </div>
          </div>

          <div className="game_description">
            <div className="title">中奖说明:</div>
            <div className="content">
              {this.state.currentGame && this.state.currentGame.bonus_note}
            </div>
          </div>
        </Modal>
        <Modal
          title={"投注订单详情"}
          visible={this.state.show_bet_modal}
          onOk={
            this.state.betDetail.statuscode === 0
              ? this.cancel.bind(this)
              : this.closeBetModal.bind(this)
          }
          onCancel={this.closeBetModal.bind(this)}
          okText={this.state.betDetail.statuscode === 0 ? "撤单" : "确定"}
          cancelText={"关闭"}
          width={720}
        >
          <div className="order_details">
            <div className="table_box">
              <table>
                <tbody>
                  <tr>
                    <th>游戏</th>
                    <td>{lottery[this.state.betDetail.lottery_id]}</td>
                    <th>玩法</th>
                    <td>{this.state.betDetail.title}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>期号</th>
                    <td>{this.state.betDetail.issue}</td>
                    <th>奖金</th>
                    <td>{this.state.betDetail.prize || "0.000"}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>投注金额/注数</th>
                    <td>
                      <Tag color="green">{this.state.betDetail.amount}</Tag>/
                      {this.state.betDetail.locked_prize}注
                    </td>
                    <th>返点</th>
                    <td>{this.state.betDetail.prize_group}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>模式</th>
                    <td>{coefficient_cn[this.state.betDetail.coefficient]}</td>
                    <th>状态</th>
                    <td>{status_cn[this.state.betDetail.status]}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>投注时间</th>
                    <td>{this.state.betDetail.bought_at}</td>
                    <th>开奖号码</th>
                    <td>{this.state.betDetail.winning_number}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>投注内容</th>
                    <td colSpan={3} className="content">
                      <div>{this.state.betDetail.display_bet_number}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Modal>
        <Modal
          title={"追号订单详情"}
          visible={this.state.show_trace_modal}
          onOk={
            this.state.traceDetail.statuscode === 0
              ? this.cancelAll.bind(this)
              : this.closeTraceModal.bind(this)
          }
          onCancel={this.closeTraceModal.bind(this)}
          okText={this.state.traceDetail.statuscode === 0 ? "撤单" : "确定"}
          cancelText={"关闭"}
          width={720}
        >
          <div className="order_details">
            <div className="table_box">
              <table>
                <tbody>
                  <tr>
                    <th>游戏</th>
                    <td>{this.state.traceDetail.gamename}</td>
                    <th>玩法</th>
                    <td>{this.state.traceDetail.method}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>起始期号</th>
                    <td>{this.state.traceDetail.startnumber}</td>
                    <th>追号进度</th>
                    <td>{this.state.traceDetail.progress}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>总追号金额</th>
                    <td>{this.state.traceDetail.amount}</td>
                    <th>已中奖金额</th>
                    <td>{this.state.traceDetail.prize}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>追中即停</th>
                    <td>{this.state.traceDetail.iswinstop}</td>
                    <th>状态</th>
                    <td>{this.state.traceDetail.status}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Modal>
        {/********走势图*******/}
        <Drawer
          title={this.state.cp_name}
          placement="right"
          width={650}
          closable={true}
          onClose={this.closeTrend.bind(this)}
          visible={this.state.trend_visible}
        >
          <Trend lottery_id={this.state.cpId} />
        </Drawer>
      </div>
    );
  }
}
export default Lottery;
