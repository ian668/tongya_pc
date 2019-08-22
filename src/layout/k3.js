export default function getK3Layout() {
    return {
      "85-86-237": {
        id: 237,
        pid: 86,
        series_way_id: 237,
        name_cn: "和值",
        name_en: "hezhi",
        price: 1,
        bet_note: "",
        bonus_note:
          "至少选择1个和值（3个号码之和）进行投注，所选和值与开奖的3个号码的和值相同即中奖",
        top_id: 85,
        top_name_cn: "快3",
        pname_cn: "快3",
        p_name_cn: "快3",
        type: "digital",
        layout: [
          {
            title: "和值",
            no: "3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18",
            place: 0,
            cols: 1
          }
        ],
        shortname: "hezhi",
        isrx: 0,
        isButton: false
      },
      "85-86-230": {
        id: 230,
        pid: 86,
        series_way_id: 230,
        name_cn: "三同号",
        name_en: "santonghao",
        price: 1,
        bet_note: "",
        bonus_note:
          "对豹子号（111，222，333，444，555，666）进行单选或通选投注，选号与开奖号相同即中奖",
        top_id: 85,
        top_name_cn: "快3",
        pname_cn: "快3",
        p_name_cn: "快3",
        type: "digital",
        layout: [
          {
            title: "三同号",
            no: "111|222|333|444|555|666",
            place: 0,
            cols: 1
          }
        ],
        shortname: "sthdx",
        isrx: 0,
        isButton: false
      },
      "85-86-231": {
        id: 231,
        pid: 86,
        series_way_id: 231,
        name_cn: "二同号",
        name_en: "ertonghao",
        price: 1,
        bet_note: "",
        bonus_note:
          "选择1对相同号码和1个不同号码进行单选或者多选投注，选号与开奖号相同（顺序不限）即中奖",
        top_id: 85,
        top_name_cn: "快3",
        pname_cn: "快3",
        p_name_cn: "快3",
        type: "digital",
        layout: [
          {
            title: "二同号",
            no:
              "112|122|133|144|155|166|113|223|233|244|255|266|114|224|334|344|355|366|115|225|335|445|455|466|116|226|336|446|556|566",
            place: 0,
            cols: 1
          }
        ],
        shortname: "ethdx",
        isrx: 0,
        isButton: false
      },
      "85-86-233": {
        id: 233,
        pid: 86,
        series_way_id: 233,
        name_cn: "三不同号",
        name_en: "sanbutonghao",
        price: 1,
        bet_note: "",
        bonus_note:
          "对所有3不同号进行单选或多选，选号与开奖号相同（顺序不限）即中奖",
        top_id: 85,
        top_name_cn: "快3",
        pname_cn: "快3",
        p_name_cn: "快3",
        type: "digital",
        layout: [
          {
            title: "三不同号",
            no:
              "123|134|146|236|345|124|135|156|245|346|125|136|234|246|356|126|145|235|256|456",
            place: 0,
            cols: 1
          }
        ],
        shortname: "sbthdx",
        isrx: 0,
        isButton: false
      },
      "85-86-234": {
        id: 234,
        pid: 86,
        series_way_id: 234,
        name_cn: "二不同号",
        name_en: "erbutonghao",
        price: 1,
        bet_note: "",
        bonus_note:
          "对所有2不同号进行单选或多选，选号与开奖号中任意2个号码相同即中奖",
        top_id: 85,
        top_name_cn: "快3",
        pname_cn: "快3",
        p_name_cn: "快3",
        type: "digital",
        layout: [
          {
            title: "二不同号",
            no: "12|13|14|15|16|23|24|25|26|34|35|36|45|46|56",
            place: 0,
            cols: 1
          }
        ],
        shortname: "ebthdx",
        isrx: 0,
        isButton: false
      },
      "85-86-235": {
        id: 235,
        pid: 86,
        series_way_id: 235,
        name_cn: "三连号",
        name_en: "sanlianhao",
        price: 1,
        bet_note: "",
        bonus_note:
          "对所有3个相连的号码（123，234，345，456)进行单选或多选投注，选号与开奖号相同（顺序不限）即中奖",
        top_id: 85,
        top_name_cn: "快3",
        pname_cn: "快3",
        p_name_cn: "快3",
        type: "digital",
        layout: [
          {
            title: "三连号",
            no: "123|234|345|456",
            place: 0,
            cols: 1
          }
        ],
        shortname: "slhtx",
        isrx: 0,
        isButton: false
      },
      "85-86-236": {
        id: 236,
        pid: 86,
        series_way_id: 236,
        name_cn: "单挑一骰",
        name_en: "dantiaoyishai",
        price: 1,
        bet_note: "",
        bonus_note:
          "选择1个或者多个骰号，如果开奖号码中包含该号（顺序不限）即中奖",
        top_id: 85,
        top_name_cn: "快3",
        pname_cn: "快3",
        p_name_cn: "快3",
        type: "digital",
        layout: [
          {
            title: "单挑一骰",
            no: "1|2|3|4|5|6",
            place: 0,
            cols: 1
          }
        ],
        shortname: "dtyg",
        isrx: 0,
        isButton: false
      }
    };
  }
  