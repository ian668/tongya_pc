import React, { Component } from "react";
import "./Trend.scss";
import { Tabs, message } from "antd";
import { fetchData } from "../../services/httpService";
import DaXiao from "./daxiao";
import DanShuang from "./danshuang";
import LongHu from "./longhu";
import DanHao from "./danhao";
import DuoHao from "./duohao";
import eventProxy from "../common/eventProxy";
const { TabPane } = Tabs;

class Trend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bigType: "3", //1单号、2多号、3大小、4单双、5龙虎
      subtype: "1",
      header_name: "",
      number_data: [],
      render_data: [],
      issue_num: 30,
      showcount_obj: "",
      miss_obj: "",
      lian_obj: ""
    };
    this.fetch_request = "";
  }

  changeType(key) {
    this.setState(
      {
        bigType: key,
        subtype: "1",
        header_name: ""
      },
      () => {
        this.renderzoushi();
      }
    );
  }

  componentDidMount() {
    eventProxy.on("updateTrend", () => {
      this.loadData();
    });
    this.loadData();
    
  }

  loadData(){
    let lottery_id = this.props.lottery_id;
    this.fetch_request = fetchData(
      "/userspay/zoushi?lottery_id=" + lottery_id
    ).subscribe(
      res => {
        this.setState(
          {
            number_data: res.data.number_data
          },
          () => {
            this.renderzoushi();
          }
        );
      },
      error => {
        message.error(error.message);
      }
    );
  }

  renderzoushi() {
    //1单号、2多号、3大小、4单双、5龙虎
    switch (this.state.bigType) {
      case "1":
        this.renderDanHao(
          this.state.number_data,
          this.state.subtype,
          this.state.issue_num
        );
        break;
      case "2":
        this.renderDuoHao(
          this.state.number_data,
          this.state.subtype,
          this.state.issue_num
        );
        break;
      case "3":
        if (!this.state.header_name) {
          this.setState({
            header_name: "万千百"
          });
        }
        this.renderDaXiao(
          this.state.number_data,
          this.state.subtype,
          this.state.issue_num
        );
        break;
      case "4":
        if (!this.state.header_name) {
          this.setState({
            header_name: "万千百"
          });
        }
        this.renderDanShuang(
          this.state.number_data,
          this.state.subtype,
          this.state.issue_num
        );
        break;
      case "5":
        if (!this.state.header_name) {
          this.setState({
            header_name: "万千万百"
          });
        }
        this.renderLongHu(
          this.state.number_data,
          this.state.subtype,
          this.state.issue_num
        );
        break;
      default:
        break;
    }
  }

  computed_daxiao(data, type) {
    let render_data = [],
      data1 = "",
      data2 = "",
      data3 = "",
      data4 = "",
      data5 = "",
      data6 = "",
      p1 = "",
      p2 = "",
      p3 = "",
      showcount1 = 0,
      showcount2 = 0,
      showcount3 = 0,
      showcount4 = 0,
      showcount5 = 0,
      showcount6 = 0,
      j1 = 0,
      j2 = 0,
      j3 = 0,
      zdyl1 = [], //最大遗漏位置1
      zdyl2 = [], //最大遗漏位置2
      zdyl3 = [], //最大遗漏位置3
      zdyl4 = [], //最大遗漏位置4
      zdyl5 = [], //最大遗漏位置5
      zdyl6 = []; //最大遗漏位置6
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      switch (type) {
        case "1":
          p1 = Number(element["data"][0]);
          p2 = Number(element["data"][1]);
          p3 = Number(element["data"][2]);
          break;
        case "2":
          p1 = Number(element["data"][2]);
          p2 = Number(element["data"][3]);
          p3 = Number(element["data"][4]);
          break;
        default:
          break;
      }
      //判断
      if (p1 > 4) {
        if (data2 === "小") {
          zdyl2.push(j1);
          j1 = 0;
        }
        data1 = "大";
        data2 = ++j1;
        showcount1 = showcount1 + 1;
      } else {
        if (data1 === "大") {
          zdyl1.push(j1);
          j1 = 0;
        }
        data2 = "小";
        data1 = ++j1;
        showcount2 = showcount2 + 1;
      }
      if (p2 > 4) {
        if (data4 === "小") {
          zdyl4.push(j2);
          j2 = 0;
        }
        data3 = "大";
        data4 = ++j2;
        showcount3 = showcount3 + 1;
      } else {
        if (data3 === "大") {
          zdyl3.push(j2);
          j2 = 0;
        }
        data4 = "小";
        data3 = ++j2;
        showcount4 = showcount4 + 1;
      }
      if (p3 > 4) {
        if (data6 === "小") {
          zdyl6.push(j3);
          j3 = 0;
        }
        data5 = "大";
        data6 = ++j3;
        showcount5 = showcount5 + 1;
      } else {
        if (data5 === "大") {
          zdyl5.push(j3);
          j3 = 0;
        }
        data6 = "小";
        data5 = ++j3;
        showcount6 = showcount6 + 1;
      }
      let obj = {
        issue: element["issue"],
        p1: p1,
        p2: p2,
        p3: p3,
        data1: data1,
        data2: data2,
        data3: data3,
        data4: data4,
        data5: data5,
        data6: data6
      };
      render_data.push(obj);
    }
    return render_data;
  }

  computed_daxiao_footer(data, type, num) {
    let temp_data = data.slice(-num),
      data1 = "",
      data2 = "",
      data3 = "",
      data4 = "",
      data5 = "",
      data6 = "",
      p1 = "",
      p2 = "",
      p3 = "",
      showcount1 = 0,
      showcount2 = 0,
      showcount3 = 0,
      showcount4 = 0,
      showcount5 = 0,
      showcount6 = 0,
      j1 = 0,
      j2 = 0,
      j3 = 0,
      zdyl1 = [], //最大遗漏位置1
      zdyl2 = [], //最大遗漏位置2
      zdyl3 = [], //最大遗漏位置3
      zdyl4 = [], //最大遗漏位置4
      zdyl5 = [], //最大遗漏位置5
      zdyl6 = []; //最大遗漏位置6
    for (let index = 0; index < temp_data.length; index++) {
      const element = temp_data[index];
      switch (type) {
        case "1":
          p1 = Number(element["data"][0]);
          p2 = Number(element["data"][1]);
          p3 = Number(element["data"][2]);
          break;
        case "2":
          p1 = Number(element["data"][2]);
          p2 = Number(element["data"][3]);
          p3 = Number(element["data"][4]);
          break;
        default:
          break;
      }
      //判断
      if (p1 > 4) {
        if (data2 === "小") {
          zdyl2.push(j1);
          j1 = 0;
        }
        data1 = "大";
        data2 = ++j1;
        showcount1 = showcount1 + 1;
      } else {
        if (data1 === "大") {
          zdyl1.push(j1);
          j1 = 0;
        }
        data2 = "小";
        data1 = ++j1;
        showcount2 = showcount2 + 1;
      }
      if (p2 > 4) {
        if (data4 === "小") {
          zdyl4.push(j2);
          j2 = 0;
        }
        data3 = "大";
        data4 = ++j2;
        showcount3 = showcount3 + 1;
      } else {
        if (data3 === "大") {
          zdyl3.push(j2);
          j2 = 0;
        }
        data4 = "小";
        data3 = ++j2;
        showcount4 = showcount4 + 1;
      }
      if (p3 > 4) {
        if (data6 === "小") {
          zdyl6.push(j3);
          j3 = 0;
        }
        data5 = "大";
        data6 = ++j3;
        showcount5 = showcount5 + 1;
      } else {
        if (data5 === "大") {
          zdyl5.push(j3);
          j3 = 0;
        }
        data6 = "小";
        data5 = ++j3;
        showcount6 = showcount6 + 1;
      }
    }
    let showcount_obj = {
      showcount1: showcount1,
      showcount2: showcount2,
      showcount3: showcount3,
      showcount4: showcount4,
      showcount5: showcount5,
      showcount6: showcount6
    };
    let miss_obj = {
      zdyl1: Math.max(...zdyl1),
      zdyl2: Math.max(...zdyl2),
      zdyl3: Math.max(...zdyl3),
      zdyl4: Math.max(...zdyl4),
      zdyl5: Math.max(...zdyl5),
      zdyl6: Math.max(...zdyl6)
    };
    return {
      showcount_obj: showcount_obj,
      miss_obj: miss_obj
    };
  }

  //渲染大小
  renderDaXiao(data, type, num) {
    let render_data = this.computed_daxiao(data, type);
    let obj = this.computed_daxiao_footer(data, type, num);
    this.setState({
      render_data: render_data.slice(-num),
      showcount_obj: obj.showcount_obj,
      miss_obj: obj.miss_obj
    });
  }
  //渲染单双
  renderDanShuang(data, type, num) {
    let render_data = this.computed_danshuang(data, type);
    let obj = this.computed_danshuang_footer(data, type, num);
    this.setState({
      render_data: render_data.slice(-num),
      showcount_obj: obj.showcount_obj,
      miss_obj: obj.miss_obj
    });
  }
  computed_danshuang_footer(data, type, num) {
    let temp_data = data.slice(-num),
      data1 = "",
      data2 = "",
      data3 = "",
      data4 = "",
      data5 = "",
      data6 = "",
      p1 = "",
      p2 = "",
      p3 = "",
      showcount1 = 0,
      showcount2 = 0,
      showcount3 = 0,
      showcount4 = 0,
      showcount5 = 0,
      showcount6 = 0,
      j1 = 0,
      j2 = 0,
      j3 = 0,
      zdyl1 = [], //最大遗漏位置1
      zdyl2 = [], //最大遗漏位置2
      zdyl3 = [], //最大遗漏位置3
      zdyl4 = [], //最大遗漏位置4
      zdyl5 = [], //最大遗漏位置5
      zdyl6 = []; //最大遗漏位置6
    for (let index = 0; index < temp_data.length; index++) {
      const element = temp_data[index];
      switch (type) {
        case "1":
          p1 = Number(element["data"][0]);
          p2 = Number(element["data"][1]);
          p3 = Number(element["data"][2]);
          break;
        case "2":
          p1 = Number(element["data"][2]);
          p2 = Number(element["data"][3]);
          p3 = Number(element["data"][4]);
          break;
        default:
          break;
      }
      //判断
      if (p1 % 2 === 1) {
        if (data2 === "双") {
          zdyl2.push(j1);
          j1 = 0;
        }
        data1 = "单";
        data2 = ++j1;
        showcount1 = showcount1 + 1;
      } else {
        if (data1 === "单") {
          zdyl1.push(j1);
          j1 = 0;
        }
        data2 = "双";
        data1 = ++j1;
        showcount2 = showcount2 + 1;
      }
      if (p2 % 2 === 1) {
        if (data4 === "双") {
          zdyl4.push(j2);
          j2 = 0;
        }
        data3 = "单";
        data4 = ++j2;
        showcount3 = showcount3 + 1;
      } else {
        if (data3 === "单") {
          zdyl3.push(j2);
          j2 = 0;
        }
        data4 = "双";
        data3 = ++j2;
        showcount4 = showcount4 + 1;
      }
      if (p3 % 2 === 1) {
        if (data6 === "双") {
          zdyl6.push(j3);
          j3 = 0;
        }
        data5 = "单";
        data6 = ++j3;
        showcount5 = showcount5 + 1;
      } else {
        if (data5 === "单") {
          zdyl5.push(j3);
          j3 = 0;
        }
        data6 = "双";
        data5 = ++j3;
        showcount6 = showcount6 + 1;
      }
    }
    let showcount_obj = {
      showcount1: showcount1,
      showcount2: showcount2,
      showcount3: showcount3,
      showcount4: showcount4,
      showcount5: showcount5,
      showcount6: showcount6
    };
    let miss_obj = {
      zdyl1: Math.max(...zdyl1),
      zdyl2: Math.max(...zdyl2),
      zdyl3: Math.max(...zdyl3),
      zdyl4: Math.max(...zdyl4),
      zdyl5: Math.max(...zdyl5),
      zdyl6: Math.max(...zdyl6)
    };
    return {
      showcount_obj: showcount_obj,
      miss_obj: miss_obj
    };
  }

  computed_danshuang(data, type) {
    let render_data = [],
      data1 = "",
      data2 = "",
      data3 = "",
      data4 = "",
      data5 = "",
      data6 = "",
      p1 = "",
      p2 = "",
      p3 = "",
      showcount1 = 0,
      showcount2 = 0,
      showcount3 = 0,
      showcount4 = 0,
      showcount5 = 0,
      showcount6 = 0,
      j1 = 0,
      j2 = 0,
      j3 = 0,
      zdyl1 = [], //最大遗漏位置1
      zdyl2 = [], //最大遗漏位置2
      zdyl3 = [], //最大遗漏位置3
      zdyl4 = [], //最大遗漏位置4
      zdyl5 = [], //最大遗漏位置5
      zdyl6 = []; //最大遗漏位置6
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      switch (type) {
        case "1":
          p1 = Number(element["data"][0]);
          p2 = Number(element["data"][1]);
          p3 = Number(element["data"][2]);
          break;
        case "2":
          p1 = Number(element["data"][2]);
          p2 = Number(element["data"][3]);
          p3 = Number(element["data"][4]);
          break;
        default:
          break;
      }
      //判断
      if (p1 % 2 === 1) {
        if (data2 === "双") {
          zdyl2.push(j1);
          j1 = 0;
        }
        data1 = "单";
        data2 = ++j1;
        showcount1 = showcount1 + 1;
      } else {
        if (data1 === "单") {
          zdyl1.push(j1);
          j1 = 0;
        }
        data2 = "双";
        data1 = ++j1;
        showcount2 = showcount2 + 1;
      }
      if (p2 % 2 === 1) {
        if (data4 === "双") {
          zdyl4.push(j2);
          j2 = 0;
        }
        data3 = "单";
        data4 = ++j2;
        showcount3 = showcount3 + 1;
      } else {
        if (data3 === "单") {
          zdyl3.push(j2);
          j2 = 0;
        }
        data4 = "双";
        data3 = ++j2;
        showcount4 = showcount4 + 1;
      }
      if (p3 % 2 === 1) {
        if (data6 === "双") {
          zdyl6.push(j3);
          j3 = 0;
        }
        data5 = "单";
        data6 = ++j3;
        showcount5 = showcount5 + 1;
      } else {
        if (data5 === "单") {
          zdyl5.push(j3);
          j3 = 0;
        }
        data6 = "双";
        data5 = ++j3;
        showcount6 = showcount6 + 1;
      }
      let obj = {
        issue: element["issue"],
        p1: p1,
        p2: p2,
        p3: p3,
        data1: data1,
        data2: data2,
        data3: data3,
        data4: data4,
        data5: data5,
        data6: data6
      };
      render_data.push(obj);
    }
    return render_data;
  }

  //渲染龙虎
  renderLongHu(data, type, num) {
    let obj = this.computed_longhu(data, type, num);
    let obj_footer = this.computed_longhu_footer(data, type, num);
    this.setState({
      render_data: obj.render_data.slice(-num),
      showcount_obj: obj_footer.showcount_obj,
      miss_obj: obj.miss_obj,
      lian_obj: obj.lian_obj
    });
  }
  //
  computed_longhu(data, type, num) {
    let render_data = [],
      j = 0,
      k = 0,
      w = 0,
      j1 = 0,
      k1 = 0,
      w1 = 0,
      p1,
      p2,
      p3,
      p4,
      long1 = "",
      he1 = "",
      hu1 = "",
      long2 = "",
      he2 = "",
      hu2 = "",
      showcount_long1 = 0,
      showcount_he1 = 0,
      showcount_hu1 = 0,
      showcount_long2 = 0,
      showcount_he2 = 0,
      showcount_hu2 = 0,
      zdyl1_long1 = [], //最大遗漏位置1龙
      zdyl1_hu1 = [], //最大遗漏位置2虎
      zdyl1_he1 = [], //最大遗漏位置3和
      zdyl1_long2 = [], //最大遗漏位置1龙
      zdyl1_hu2 = [], //最大遗漏位置2虎
      zdyl1_he2 = [], //最大遗漏位置3和
      arr_lou_long1 = [],
      arr_lou_he1 = [],
      arr_lou_hu1 = [],
      arr_lou_long2 = [],
      arr_lou_he2 = [],
      arr_lou_hu2 = [],
      arr_lian_long1 = [],
      arr_lian_he1 = [],
      arr_lian_hu1 = [],
      arr_lian_long2 = [],
      arr_lian_he2 = [],
      arr_lian_hu2 = [];
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      switch (type) {
        // 万千 根据万位、千位号码数值比大小，万位号码大于千位号码为龙，万位号码小于千位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。
        case "1":
          p1 = Number(element["data"][0]); //万
          p2 = Number(element["data"][1]); //千
          p3 = Number(element["data"][0]); //万
          p4 = Number(element["data"][2]); //百
          break;
        case "2":
          p1 = Number(element["data"][0]); //万
          p2 = Number(element["data"][3]); //十
          p3 = Number(element["data"][0]); //万
          p4 = Number(element["data"][4]); //个
          break;
        case "3":
          p1 = Number(element["data"][1]); //千
          p2 = Number(element["data"][2]); //百
          p3 = Number(element["data"][1]); //千
          p4 = Number(element["data"][3]); //十
          break;
        case "4":
          p1 = Number(element["data"][1]); //千
          p2 = Number(element["data"][4]); //个
          p3 = Number(element["data"][2]); //百
          p4 = Number(element["data"][3]); //十
          break;
        case "5":
          p1 = Number(element["data"][2]); //百
          p2 = Number(element["data"][4]); //个
          p3 = Number(element["data"][3]); //十
          p4 = Number(element["data"][4]); //个
          break;
      }
      if (p1 > p2) {
        if (hu1 === "虎") {
          zdyl1_hu1.push(j);
          j = 0;
        }
        if (he1 === "和") {
          zdyl1_he1.push(k);
          k = 0;
        }
        long1 = "龙";
        hu1 = ++j;
        he1 = ++k;
        showcount_long1 = showcount_long1 + 1;
      }
      if (p1 === p2) {
        if (hu1 === "虎") {
          zdyl1_hu1.push(j);
          j = 0;
        }
        if (long1 === "龙") {
          zdyl1_long1.push(w);
          w = 0;
        }
        he1 = "和";
        hu1 = ++j;
        long1 = ++w;
        showcount_he1 = showcount_he1 + 1;
      }
      if (p1 < p2) {
        if (he1 === "和") {
          zdyl1_he1.push(k);
          k = 0;
        }
        if (long1 === "龙") {
          zdyl1_long1.push(w);
          w = 0;
        }
        hu1 = "虎";
        he1 = ++k;
        long1 = ++w;
        showcount_hu1 = showcount_hu1 + 1;
      }
      if (p3 > p4) {
        if (hu2 === "虎") {
          zdyl1_hu2.push(j1);
          j1 = 0;
        }
        if (he2 === "和") {
          zdyl1_he2.push(k1);
          k1 = 0;
        }
        long2 = "龙";
        hu2 = ++j1;
        he2 = ++k1;
        showcount_long2 = showcount_long2 + 1;
      }
      if (p3 === p4) {
        if (hu2 === "虎") {
          zdyl1_hu2.push(j1);
          j1 = 0;
        }
        if (long2 === "龙") {
          zdyl1_long2.push(w1);
          w1 = 0;
        }
        he2 = "和";
        hu2 = ++j1;
        long2 = ++w1;
        showcount_he2 = showcount_he2 + 1;
      }
      if (p3 < p4) {
        if (he2 === "和") {
          zdyl1_he2.push(k1);
          k1 = 0;
        }
        if (long2 === "龙") {
          zdyl1_long2.push(w1);
          w1 = 0;
        }
        hu2 = "虎";
        he2 = ++k1;
        long2 = ++w1;
        showcount_hu2 = showcount_hu2 + 1;
      }

      let obj = {
        issue: element["issue"],
        p1: p1,
        p2: p2,
        p3: p3,
        p4: p4,
        long1: long1,
        he1: he1,
        hu1: hu1,
        long2: long2,
        he2: he2,
        hu2: hu2
      };
      render_data.push(obj);
    }
    let datas = render_data.slice(-num),
      lian1 = 0,
      lian2 = 0,
      lian3 = 0,
      lian4 = 0,
      lian5 = 0,
      lian6 = 0;
    for (let index = 0; index < datas.length; index++) {
      const element = datas[index];
      if (typeof element.long1 !== "string") {
        lian1 = 0;
        arr_lou_long1.push(element.long1);
      } else {
        ++lian1;
        arr_lian_long1.push(lian1);
      }
      if (typeof element.he1 !== "string") {
        lian2 = 0;
        arr_lou_he1.push(element.he1);
      } else {
        ++lian2;
        arr_lian_he1.push(lian2);
      }
      if (typeof element.hu1 !== "string") {
        lian3 = 0;
        arr_lou_hu1.push(element.hu1);
      } else {
        ++lian3;
        arr_lian_hu1.push(lian3);
      }
      if (typeof element.long2 !== "string") {
        lian4 = 0;
        arr_lou_long2.push(element.long2);
      } else {
        ++lian4;
        arr_lian_long2.push(lian4);
      }
      if (typeof element.he2 !== "string") {
        lian5 = 0;
        arr_lou_he2.push(element.he2);
      } else {
        ++lian5;
        arr_lian_he2.push(lian5);
      }
      if (typeof element.hu2 !== "string") {
        lian6 = 0;
        arr_lou_hu2.push(element.hu2);
      } else {
        ++lian6;
        arr_lian_hu2.push(lian6);
      }
    }
    let miss_obj = {
      lou_long1: Math.max(...arr_lou_long1),
      lou_he1: Math.max(...arr_lou_he1),
      lou_hu1: Math.max(...arr_lou_hu1),
      lou_long2: Math.max(...arr_lou_long2),
      lou_he2: Math.max(...arr_lou_he2),
      lou_hu2: Math.max(...arr_lou_hu2)
    };
    let lian_obj = {
      lian_long1: Math.max(...arr_lian_long1),
      lian_he1: Math.max(...arr_lian_he1),
      lian_hu1: Math.max(...arr_lian_hu1),
      lian_long2: Math.max(...arr_lian_long2),
      lian_he2: Math.max(...arr_lian_he2),
      lian_hu2: Math.max(...arr_lian_hu2)
    };
    return {
      render_data: render_data,
      miss_obj: miss_obj,
      lian_obj: lian_obj
    };
  }
  computed_longhu_footer(data, type, num) {
    let temp_data = data.slice(-num),
      j = 0,
      k = 0,
      w = 0,
      j1 = 0,
      k1 = 0,
      w1 = 0,
      p1,
      p2,
      p3,
      p4,
      long1 = "",
      he1 = "",
      hu1 = "",
      long2 = "",
      he2 = "",
      hu2 = "",
      showcount_long1 = 0,
      showcount_he1 = 0,
      showcount_hu1 = 0,
      showcount_long2 = 0,
      showcount_he2 = 0,
      showcount_hu2 = 0,
      zdyl1_long1 = [1], //最大遗漏位置1龙
      zdyl1_hu1 = [1], //最大遗漏位置2虎
      zdyl1_he1 = [1], //最大遗漏位置3和
      zdyl1_long2 = [1], //最大遗漏位置1龙
      zdyl1_hu2 = [1], //最大遗漏位置2虎
      zdyl1_he2 = [1]; //最大遗漏位置3和
    for (let index = 0; index < temp_data.length; index++) {
      const element = temp_data[index];
      switch (type) {
        // 万千 根据万位、千位号码数值比大小，万位号码大于千位号码为龙，万位号码小于千位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。
        case "1":
          p1 = Number(element["data"][0]); //万
          p2 = Number(element["data"][1]); //千
          p3 = Number(element["data"][0]); //万
          p4 = Number(element["data"][2]); //百
          break;
        case "2":
          p1 = Number(element["data"][0]); //万
          p2 = Number(element["data"][3]); //十
          p3 = Number(element["data"][0]); //万
          p4 = Number(element["data"][4]); //个
          break;
        case "3":
          p1 = Number(element["data"][1]); //千
          p2 = Number(element["data"][2]); //百
          p3 = Number(element["data"][1]); //千
          p4 = Number(element["data"][3]); //十
          break;
        case "4":
          p1 = Number(element["data"][1]); //千
          p2 = Number(element["data"][4]); //个
          p3 = Number(element["data"][2]); //百
          p4 = Number(element["data"][3]); //十
          break;
        case "5":
          p1 = Number(element["data"][2]); //百
          p2 = Number(element["data"][4]); //个
          p3 = Number(element["data"][3]); //十
          p4 = Number(element["data"][4]); //个
          break;
      }
      if (p1 > p2) {
        if (hu1 === "虎") {
          zdyl1_hu1.push(j);
          j = 0;
        }
        if (he1 === "和") {
          zdyl1_he1.push(k);
          k = 0;
        }
        long1 = "龙";
        hu1 = ++j;
        he1 = ++k;
        showcount_long1 = showcount_long1 + 1;
      }
      if (p1 === p2) {
        if (hu1 === "虎") {
          zdyl1_hu1.push(j);
          j = 0;
        }
        if (long1 === "龙") {
          zdyl1_long1.push(w);
          w = 0;
        }
        he1 = "和";
        hu1 = ++j;
        long1 = ++w;
        showcount_he1 = showcount_he1 + 1;
      }
      if (p1 < p2) {
        if (he1 === "和") {
          zdyl1_he1.push(k);
          k = 0;
        }
        if (long1 === "龙") {
          zdyl1_long1.push(w);
          w = 0;
        }
        hu1 = "虎";
        he1 = ++k;
        long1 = ++w;
        showcount_hu1 = showcount_hu1 + 1;
      }
      if (p3 > p4) {
        if (hu2 === "虎") {
          zdyl1_hu2.push(j1);
          j1 = 0;
        }
        if (he2 === "和") {
          zdyl1_he2.push(k1);
          k1 = 0;
        }
        long2 = "龙";
        hu2 = ++j1;
        he2 = ++k1;
        showcount_long2 = showcount_long2 + 1;
      }
      if (p3 === p4) {
        if (hu2 === "虎") {
          zdyl1_hu2.push(j1);
          j1 = 0;
        }
        if (long2 === "龙") {
          zdyl1_long2.push(w1);
          w1 = 0;
        }
        he2 = "和";
        hu2 = ++j1;
        long2 = ++w1;
        showcount_he2 = showcount_he2 + 1;
      }
      if (p3 < p4) {
        if (he2 === "和") {
          zdyl1_he2.push(k1);
          k1 = 0;
        }
        if (long2 === "龙") {
          zdyl1_long2.push(w1);
          w1 = 0;
        }
        hu2 = "虎";
        he2 = ++k1;
        long2 = ++w1;
        showcount_hu2 = showcount_hu2 + 1;
      }
    }
    let showcount_obj = {
      showcount_long1: showcount_long1,
      showcount_he1: showcount_he1,
      showcount_hu1: showcount_hu1,
      showcount_long2: showcount_long2,
      showcount_he2: showcount_he2,
      showcount_hu2: showcount_hu2
    };
    return {
      showcount_obj: showcount_obj
    };
  }
  //渲染单号
  renderDanHao(data, type, num) {
    let obj = this.computed_danhao(data, type, num);
    let obj_footer = this.computed_danhao_footer(data,type,num);
    this.setState({
      render_data: obj.render_data.slice(-num),
      showcount_obj: obj_footer.showcount_obj,
      lian_obj: obj.lian_obj,
      miss_obj: obj.miss_obj
    });
  }

  computed_danhao_footer(data, type, num){
    let temp_data = data.slice(-num),
      len = temp_data.length,
      m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let index = 0; index < len; index++) {
      const element = temp_data[index];
      let p = 0,
        s = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        ss = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      for (let j = 0; j < 10; j++) {
        switch (type) {
          case "1":
            p = Number(element["data"][0]);
            break;
          case "2":
            p = Number(element["data"][1]);
            break;
          case "3":
            p = Number(element["data"][2]);
            break;
          case "4":
            p = Number(element["data"][3]);
            break;
          case "5":
            p = Number(element["data"][4]);
            break;
          default:
            break;
        }
        ss[j] = s[j] = ++m[j];
        switch (j) {
          case p:
            ss[p] = j;
            s[p] = "<span class='active'>" + j + "</span>";
            m[j] = 0;
            ++c[j];
            break;
          default:
            break;
        }
      }
    }
    let showcount_obj = {
      c0: c[0],
      c1: c[1],
      c2: c[2],
      c3: c[3],
      c4: c[4],
      c5: c[5],
      c6: c[6],
      c7: c[7],
      c8: c[8],
      c9: c[9]
    };

    return {
      showcount_obj: showcount_obj
    };
  }

  computed_danhao(data, type, num) {
    let len = data.length,
      render_data = [],
      m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //出现次数
      arr_lian_s0 = [],
      arr_lian_s1 = [],
      arr_lian_s2 = [],
      arr_lian_s3 = [],
      arr_lian_s4 = [],
      arr_lian_s5 = [],
      arr_lian_s6 = [],
      arr_lian_s7 = [],
      arr_lian_s8 = [],
      arr_lian_s9 = [],
      arr_lou_s0 = [],
      arr_lou_s1 = [],
      arr_lou_s2 = [],
      arr_lou_s3 = [],
      arr_lou_s4 = [],
      arr_lou_s5 = [],
      arr_lou_s6 = [],
      arr_lou_s7 = [],
      arr_lou_s8 = [],
      arr_lou_s9 = [];
    for (let index = 0; index < len; index++) {
      let element = data[index],p=0,
        s = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
      switch (type) {
        case "1":
          p = Number(element["data"][0]);
          break;
        case "2":
          p = Number(element["data"][1]);
          break;
        case "3":
          p = Number(element["data"][2]);
          break;
        case "4":
          p = Number(element["data"][3]);
          break;
        case "5":
          p = Number(element["data"][4]);
          break;
        default:
          break;
      }
      for (let j = 0; j < 10; j++) {
        s[j] = ++m[j];
        switch (j) {
          case p:
            s[p] = "<span class='active'>" + j + "</span>";
            m[j] = 0;
            ++c[j];
            break;
          default:
            break;
        }
      }
      let obj = {
        issue: element["issue"],
        s0: s[0],
        s1: s[1],
        s2: s[2],
        s3: s[3],
        s4: s[4],
        s5: s[5],
        s6: s[6],
        s7: s[7],
        s8: s[8],
        s9: s[9],
        p: p
      };
      render_data.push(obj);
    }
    let datas = render_data.slice(-num),
      lian0 = 0,
      lian1 = 0,
      lian2 = 0,
      lian3 = 0,
      lian4 = 0,
      lian5 = 0,
      lian6 = 0,
      lian7 = 0,
      lian8 = 0,
      lian9 = 0;
    for (let j = 0; j < datas.length; j++) {
      const element = datas[j];
      if (typeof element.s0 !== "string") {
        lian0 = 0;
        arr_lou_s0.push(element.s0);
      } else {
        ++lian0;
        arr_lian_s0.push(lian0);
      }
      if (typeof element.s1 !== "string") {
        lian1 = 0;
        arr_lou_s1.push(element.s1);
      } else {
        ++lian1;
        arr_lian_s1.push(lian1);
      }
      if (typeof element.s2 !== "string") {
        lian2 = 0;
        arr_lou_s2.push(element.s2);
      } else {
        ++lian2;
        arr_lian_s2.push(lian2);
      }
      if (typeof element.s3 !== "string") {
        lian3 = 0;
        arr_lou_s3.push(element.s3);
      } else {
        ++lian3;
        arr_lian_s3.push(lian3);
      }
      if (typeof element.s4 !== "string") {
        lian4 = 0;
        arr_lou_s4.push(element.s4);
      } else {
        ++lian4;
        arr_lian_s4.push(lian4);
      }
      if (typeof element.s5 !== "string") {
        lian5 = 0;
        arr_lou_s5.push(element.s5);
      } else {
        ++lian5;
        arr_lian_s5.push(lian5);
      }
      if (typeof element.s6 !== "string") {
        lian6 = 0;
        arr_lou_s6.push(element.s6);
      } else {
        ++lian6;
        arr_lian_s6.push(lian6);
      }
      if (typeof element.s7 !== "string") {
        lian7 = 0;
        arr_lou_s7.push(element.s7);
      } else {
        ++lian7;
        arr_lian_s7.push(lian7);
      }
      if (typeof element.s8 !== "string") {
        lian8 = 0;
        arr_lou_s8.push(element.s8);
      } else {
        ++lian8;
        arr_lian_s8.push(lian8);
      }
      if (typeof element.s9 !== "string") {
        lian9 = 0;
        arr_lou_s9.push(element.s9);
      } else {
        ++lian9;
        arr_lian_s9.push(lian9);
      }
    }
    let miss_obj = {
      lou_s0: Math.max(...arr_lou_s0),
      lou_s1: Math.max(...arr_lou_s1),
      lou_s2: Math.max(...arr_lou_s2),
      lou_s3: Math.max(...arr_lou_s3),
      lou_s4: Math.max(...arr_lou_s4),
      lou_s5: Math.max(...arr_lou_s5),
      lou_s6: Math.max(...arr_lou_s6),
      lou_s7: Math.max(...arr_lou_s7),
      lou_s8: Math.max(...arr_lou_s8),
      lou_s9: Math.max(...arr_lou_s9)
    };
    let lian_obj = {
      lian_s0: Math.max(...arr_lian_s0),
      lian_s1: Math.max(...arr_lian_s1),
      lian_s2: Math.max(...arr_lian_s2),
      lian_s3: Math.max(...arr_lian_s3),
      lian_s4: Math.max(...arr_lian_s4),
      lian_s5: Math.max(...arr_lian_s5),
      lian_s6: Math.max(...arr_lian_s6),
      lian_s7: Math.max(...arr_lian_s7),
      lian_s8: Math.max(...arr_lian_s8),
      lian_s9: Math.max(...arr_lian_s9)
    };
    return {
      render_data: render_data,
      miss_obj: miss_obj,
      lian_obj: lian_obj
    };
  }

  //渲染多号
  renderDuoHao(data, type, num) {
    let obj = this.computed_duohao(data, type, num);
    let obj_footer = this.computed_duohao_footer(data, type, num);
    this.setState({
      render_data: obj.render_data.slice(-num),
      showcount_obj: obj_footer.showcount_obj,
      lian_obj: obj.lian_obj,
      miss_obj: obj.miss_obj
    });
  }
  computed_duohao(data, type, num) {
    let len = data.length,
      m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //出现次数
      arr_lian_s0 = [],
      arr_lian_s1 = [],
      arr_lian_s2 = [],
      arr_lian_s3 = [],
      arr_lian_s4 = [],
      arr_lian_s5 = [],
      arr_lian_s6 = [],
      arr_lian_s7 = [],
      arr_lian_s8 = [],
      arr_lian_s9 = [],
      arr_lou_s0 = [],
      arr_lou_s1 = [],
      arr_lou_s2 = [],
      arr_lou_s3 = [],
      arr_lou_s4 = [],
      arr_lou_s5 = [],
      arr_lou_s6 = [],
      arr_lou_s7 = [],
      arr_lou_s8 = [],
      arr_lou_s9 = [],
      render_data = [];
    for (let index = 0; index < len; index++) {
      const element = data[index];
      let p1 = 0,
        p2 = 0,
        s = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
      for (let j = 0; j < 10; j++) {
        if (type === "1") {
          p1 = parseInt(element["data"][3]);
          p2 = parseInt(element["data"][4]);
        } else {
          p1 = parseInt(element["data"][0]);
          p2 = parseInt(element["data"][1]);
        }
        s[j] = ++m[j];
        switch (j) {
          case p1:
            s[p1] = "<span class='active'>" + j + "</span>";
            m[j] = 0;
            ++c[j];
            break;
          case p2:
            s[p2] = "<span class='active'>" + j + "</span>";
            m[j] = 0;
            ++c[j];
          default:
            break;
        }
        if (p1 === p2 && p1 === j) {
          s[j] =
            "<span class='active'>" +
            j +
            "<strong class='strong_on'>2<strong></span>";
        }
      }
      //   max.push(ss);
      let obj = {
        issue: element["issue"],
        s0: s[0],
        s1: s[1],
        s2: s[2],
        s3: s[3],
        s4: s[4],
        s5: s[5],
        s6: s[6],
        s7: s[7],
        s8: s[8],
        s9: s[9]
      };
      render_data.push(obj);
    }
    let datas = render_data.slice(-num),
      lian0 = 0,
      lian1 = 0,
      lian2 = 0,
      lian3 = 0,
      lian4 = 0,
      lian5 = 0,
      lian6 = 0,
      lian7 = 0,
      lian8 = 0,
      lian9 = 0;
    for (let j = 0; j < datas.length; j++) {
      const element = datas[j];
      if (typeof element.s0 !== "string") {
        lian0 = 0;
        arr_lou_s0.push(element.s0);
      } else {
        ++lian0;
        arr_lian_s0.push(lian0);
      }
      if (typeof element.s1 !== "string") {
        lian1 = 0;
        arr_lou_s1.push(element.s1);
      } else {
        ++lian1;
        arr_lian_s1.push(lian1);
      }
      if (typeof element.s2 !== "string") {
        lian2 = 0;
        arr_lou_s2.push(element.s2);
      } else {
        ++lian2;
        arr_lian_s2.push(lian2);
      }
      if (typeof element.s3 !== "string") {
        lian3 = 0;
        arr_lou_s3.push(element.s3);
      } else {
        ++lian3;
        arr_lian_s3.push(lian3);
      }
      if (typeof element.s4 !== "string") {
        lian4 = 0;
        arr_lou_s4.push(element.s4);
      } else {
        ++lian4;
        arr_lian_s4.push(lian4);
      }
      if (typeof element.s5 !== "string") {
        lian5 = 0;
        arr_lou_s5.push(element.s5);
      } else {
        ++lian5;
        arr_lian_s5.push(lian5);
      }
      if (typeof element.s6 !== "string") {
        lian6 = 0;
        arr_lou_s6.push(element.s6);
      } else {
        ++lian6;
        arr_lian_s6.push(lian6);
      }
      if (typeof element.s7 !== "string") {
        lian7 = 0;
        arr_lou_s7.push(element.s7);
      } else {
        ++lian7;
        arr_lian_s7.push(lian7);
      }
      if (typeof element.s8 !== "string") {
        lian8 = 0;
        arr_lou_s8.push(element.s8);
      } else {
        ++lian8;
        arr_lian_s8.push(lian8);
      }
      if (typeof element.s9 !== "string") {
        lian9 = 0;
        arr_lou_s9.push(element.s9);
      } else {
        ++lian9;
        arr_lian_s9.push(lian9);
      }
    }
    let miss_obj = {
      lou_s0: Math.max(...arr_lou_s0),
      lou_s1: Math.max(...arr_lou_s1),
      lou_s2: Math.max(...arr_lou_s2),
      lou_s3: Math.max(...arr_lou_s3),
      lou_s4: Math.max(...arr_lou_s4),
      lou_s5: Math.max(...arr_lou_s5),
      lou_s6: Math.max(...arr_lou_s6),
      lou_s7: Math.max(...arr_lou_s7),
      lou_s8: Math.max(...arr_lou_s8),
      lou_s9: Math.max(...arr_lou_s9)
    };
    let lian_obj = {
      lian_s0: Math.max(...arr_lian_s0),
      lian_s1: Math.max(...arr_lian_s1),
      lian_s2: Math.max(...arr_lian_s2),
      lian_s3: Math.max(...arr_lian_s3),
      lian_s4: Math.max(...arr_lian_s4),
      lian_s5: Math.max(...arr_lian_s5),
      lian_s6: Math.max(...arr_lian_s6),
      lian_s7: Math.max(...arr_lian_s7),
      lian_s8: Math.max(...arr_lian_s8),
      lian_s9: Math.max(...arr_lian_s9)
    };
    return {
      render_data: render_data,
      miss_obj: miss_obj,
      lian_obj: lian_obj
    };
  }
  computed_duohao_footer(data, type, num) {
    let temp_data = data.slice(-num),
      len = temp_data.length,
      m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //出现次数
      max = [];
    for (let index = 0; index < len; index++) {
      const element = temp_data[index];
      let p1 = 0,
        p2 = 0,
        s = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        ss = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      for (let j = 0; j < 10; j++) {
        if (type === "1") {
          p1 = parseInt(element["data"][3]);
          p2 = parseInt(element["data"][4]);
        } else {
          p1 = parseInt(element["data"][0]);
          p2 = parseInt(element["data"][1]);
        }
        ss[j] = s[j] = ++m[j];
        switch (j) {
          case p1:
            ss[p1] = j;
            s[p1] = "<span class='active'>" + j + "</span>";
            m[j] = 0;
            ++c[j];
            break;
          case p2:
            ss[p2] = j;
            s[p2] = "<span class='active'>" + j + "</span>";
            m[j] = 0;
            ++c[j];
          default:
            break;
        }
        if (p1 === p2 && p1 === j) {
          s[j] =
            "<span class='active'>" +
            j +
            "<strong class='strong_on'>2<strong></span>";
        }
      }
      max.push(ss);
    }
    let showcount_obj = {
      c0: c[0],
      c1: c[1],
      c2: c[2],
      c3: c[3],
      c4: c[4],
      c5: c[5],
      c6: c[6],
      c7: c[7],
      c8: c[8],
      c9: c[9]
    };

    return {
      showcount_obj: showcount_obj
    };
  }
  //切换期数
  changeIssue(num) {
    this.setState(
      {
        issue_num: num
      },
      () => {
        this.renderzoushi();
      }
    );
  }

  //切换位置
  changePosition(type, header_name) {
    this.setState(
      {
        subtype: type,
        header_name: header_name ? header_name.split("") : ""
      },
      () => {
        this.renderzoushi();
      }
    );
  }

  render() {
    return (
      <div className="trend">
        <Tabs
          defaultActiveKey={this.state.bigType}
          onChange={this.changeType.bind(this)}
        >
          <TabPane tab="单号" key="1">
            <ul className="btns">
              <li
                className={this.state.subtype === "1" ? "active" : ""}
                onClick={() => {
                  this.changePosition("1");
                }}
              >
                万位
              </li>
              <li
                className={this.state.subtype === "2" ? "active" : ""}
                onClick={() => {
                  this.changePosition("2");
                }}
              >
                千位
              </li>
              <li
                className={this.state.subtype === "3" ? "active" : ""}
                onClick={() => {
                  this.changePosition("3");
                }}
              >
                百位
              </li>
              <li
                className={this.state.subtype === "4" ? "active" : ""}
                onClick={() => {
                  this.changePosition("4");
                }}
              >
                十位
              </li>
              <li
                className={this.state.subtype === "5" ? "active" : ""}
                onClick={() => {
                  this.changePosition("5");
                }}
              >
                个位
              </li>
            </ul>
          </TabPane>
          <TabPane tab="多号" key="2">
            <ul className="btns">
              <li
                className={this.state.subtype === "1" ? "active" : ""}
                onClick={() => {
                  this.changePosition("1");
                }}
              >
                后二
              </li>
              <li
                className={this.state.subtype === "2" ? "active" : ""}
                onClick={() => {
                  this.changePosition("2");
                }}
              >
                前二
              </li>
            </ul>
          </TabPane>
          <TabPane tab="大小" key="3">
            <ul className="btns">
              <li
                className={this.state.subtype === "1" ? "active" : ""}
                onClick={() => {
                  this.changePosition("1", "万千百");
                }}
              >
                万百千
              </li>
              <li
                className={this.state.subtype === "2" ? "active" : ""}
                onClick={() => {
                  this.changePosition("2", "百十个");
                }}
              >
                百十个
              </li>
            </ul>
          </TabPane>
          <TabPane tab="单双" key="4">
            <ul className="btns">
              <li
                className={this.state.subtype === "1" ? "active" : ""}
                onClick={() => {
                  this.changePosition("1", "万千百");
                }}
              >
                万百千
              </li>
              <li
                className={this.state.subtype === "2" ? "active" : ""}
                onClick={() => {
                  this.changePosition("2", "百十个");
                }}
              >
                百十个
              </li>
            </ul>
          </TabPane>
          <TabPane tab="龙虎" key="5">
            <ul className="btns">
              <li
                className={this.state.subtype === "1" ? "active" : ""}
                onClick={() => {
                  this.changePosition("1", "万千万百");
                }}
              >
                万千/万百
              </li>
              <li
                className={this.state.subtype === "2" ? "active" : ""}
                onClick={() => {
                  this.changePosition("2", "万十万个");
                }}
              >
                万十/万个
              </li>
              <li
                className={this.state.subtype === "3" ? "active" : ""}
                onClick={() => {
                  this.changePosition("3", "千百千十");
                }}
              >
                千百/千十
              </li>
              <li
                className={this.state.subtype === "4" ? "active" : ""}
                onClick={() => {
                  this.changePosition("4", "千个百十");
                }}
              >
                千个/百十
              </li>
              <li
                className={this.state.subtype === "5" ? "active" : ""}
                onClick={() => {
                  this.changePosition("5", "百个十个");
                }}
              >
                百个/十个
              </li>
            </ul>
          </TabPane>
        </Tabs>

        {/*单数走势*/}
        {/*单数走势*/}

        <div className="nubTrend">
          <span>显示期数</span>
          <ul>
            <li
              onClick={() => {
                this.changeIssue(30);
              }}
              className={this.state.issue_num === 30 ? "active" : ""}
            >
              最近30期
            </li>
            <li
              className={this.state.issue_num === 50 ? "active" : ""}
              onClick={() => {
                this.changeIssue(50);
              }}
            >
              最近50期
            </li>
            <li
              className={this.state.issue_num === 100 ? "active" : ""}
              onClick={() => {
                this.changeIssue(100);
              }}
            >
              最近100期
            </li>
          </ul>
        </div>

        {/*单号走势*/}
        {this.state.bigType === "1" && <DanHao lian_obj = {this.state.lian_obj} miss_obj={this.state.miss_obj} data={this.state.render_data} showcount_obj={this.state.showcount_obj}/>}
        {/*多号走势*/}
        {this.state.bigType === "2" && (
          <DuoHao
            data={this.state.render_data}
            showcount_obj={this.state.showcount_obj}
            miss_obj={this.state.miss_obj}
            lian_obj={this.state.lian_obj}
          />
        )}
        {/*大小、单双、龙虎走势*/}
        {this.state.bigType === "3" && (
          <DaXiao
            data={this.state.render_data}
            showcount_obj={this.state.showcount_obj}
            miss_obj={this.state.miss_obj}
            header_name={this.state.header_name}
          />
        )}
        {this.state.bigType === "4" && (
          <DanShuang
            data={this.state.render_data}
            showcount_obj={this.state.showcount_obj}
            miss_obj={this.state.miss_obj}
            header_name={this.state.header_name}
          />
        )}
        {this.state.bigType === "5" && (
          <LongHu
            data={this.state.render_data}
            showcount_obj={this.state.showcount_obj}
            miss_obj={this.state.miss_obj}
            lian_obj={this.state.lian_obj}
            header_name={this.state.header_name}
          />
        )}
      </div>
    );
  }
}

export default Trend;
