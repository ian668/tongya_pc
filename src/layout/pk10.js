export default function getPK10Layout() {
    return {
      "93-97-257": {
        id: 257,
        pid: 97,
        series_way_id: 257,
        name_cn: "冠亚和值",
        name_en: "guanyahezhi",
        price: 1,
        bet_note: "从“3-19”中任意选择至少1个号码（冠军车号+亚军车号=冠亚和）",
        bonus_note:
          "“冠亚和”可能出现的结果为3-19，投中对应的“冠亚和”数字，即为中奖",
        top_id: 93,
        top_name_cn: "和值",
        pname_cn: "和值",
        p_name_cn: "和值",
        type: "digital",
        layout: [
          {
            title: "和值",
            no: "3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19",
            place: 0,
            cols: 1,
            tools: false
          }
        ],
        shortname: "pk10hezhi",
        isrx: 0,
        isButton: false
      },
      "94-98-272": {
        id: 272,
        pid: 98,
        series_way_id: 272,
        name_cn: "大小单双",
        name_en: "daxiaodanshuang",
        price: 1,
        bet_note: "10个名次任意名次上从“大、小、单、双”中选择一个即是一注",
        bonus_note:
          "对任意名次的“大（6 7 8 9 10）小（1 2 3 4 5）、单（1 3 5 7 9）双（2 4 6 8 10）”形态进行购买，所选号码的形态与对应名次上车手号码形态一致，即为中奖。",
        top_id: 94,
        top_name_cn: "大小单双",
        pname_cn: "大小单双",
        p_name_cn: "大小单双",
        type: "digital",
        layout: [
          {
            title: "冠军",
            no: "大|小|单|双",
            place: 0,
            cols: 1,
            tools: false
          },
          {
            title: "亚军",
            no: "大|小|单|双",
            place: 0,
            cols: 1,
            tools: false
          },
          {
            title: "第三名",
            no: "大|小|单|双",
            place: 0,
            cols: 1,
            tools: false
          },
          {
            title: "第四名",
            no: "大|小|单|双",
            place: 0,
            cols: 1,
            tools: false
          },
          {
            title: "第五名",
            no: "大|小|单|双",
            place: 0,
            cols: 1,
            tools: false
          },
          {
            title: "第六名",
            no: "大|小|单|双",
            place: 0,
            cols: 1,
            tools: false
          },
          {
            title: "第七名",
            no: "大|小|单|双",
            place: 0,
            cols: 1,
            tools: false
          },
          {
            title: "第八名",
            no: "大|小|单|双",
            place: 0,
            cols: 1,
            tools: false
          },
          {
            title: "第九名",
            no: "大|小|单|双",
            place: 0,
            cols: 1,
            tools: false
          },
          {
            title: "第十名",
            no: "大|小|单|双",
            place: 0,
            cols: 1,
            tools: false
          }
        ],
        shortname: "pk10daxiaodanshuang",
        isrx: 0,
        isButton: true
      },
      "95-99-258": {
        id: 258,
        pid: 99,
        series_way_id: 258,
        name_cn: "定位胆",
        name_en: "dingweidan",
        price: 1,
        bet_note: "在10个名次任意名次上任意选择一个号码即是即是一注",
        bonus_note:
          "从10个名次任意名次上至少选择1个以上号码，所选号码与对应名次上的车号一致，即为中奖。",
        top_id: 95,
        top_name_cn: "猜车号",
        pname_cn: "定位胆",
        p_name_cn: "定位胆",
        type: "digital",
        layout: [
          {
            title: "第一位",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 0,
            tools: true,
            cols: 1
          },
          {
            title: "第二位",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 1,
            tools: true,
            cols: 1
          },
          {
            title: "第三位",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 2,
            tools: true,
            cols: 1
          },
          {
            title: "第四位",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 2,
            tools: true,
            cols: 1
          },
          {
            title: "第五位",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 2,
            tools: true,
            cols: 1
          },
          {
            title: "第六位",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 2,
            tools: true,
            cols: 1
          },
          {
            title: "第七位",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 2,
            tools: true,
            cols: 1
          },
          {
            title: "第八位",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 2,
            tools: true,
            cols: 1
          },
          {
            title: "第九位",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 2,
            tools: true,
            cols: 1
          },
          {
            title: "第十位",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 2,
            tools: true,
            cols: 1
          }
        ],
        shortname: "pk10caichehao",
        isrx: 0,
        isButton: true
      },
      "96-100-259": {
        id: 259,
        pid: 100,
        series_way_id: 259,
        name_cn: "冠亚军",
        name_en: "guanyajun",
        price: 1,
        bet_note: "从“冠军、亚军”中各选一个号码组成一注",
        bonus_note:
          "从“冠军、亚军”中各选一个号码组成一注，所选号码与对应名次的车号相同且顺序一致，即为中奖。",
        top_id: 96,
        top_name_cn: "猜排位",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "digital",
        layout: [
          {
            title: "冠军",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 0,
            tools: true,
            cols: 1
          },
          {
            title: "亚军",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 1,
            tools: true,
            cols: 1
          }
        ],
        shortname: "pk10caipaiweiguanyajun",
        isrx: 0,
        isButton: true
      },
      "96-100-260": {
        id: 260,
        pid: 100,
        series_way_id: 260,
        name_cn: "前三",
        name_en: "qiansan",
        price: 1,
        bet_note: "从“冠军~第三名”中各选一个号码组成一注",
        bonus_note:
          "从“冠军~第三名”中各选一个号码组成一注，所选号码与对应名次的车号相同且顺序一致，即为中奖。",
        top_id: 96,
        top_name_cn: "猜排位",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "digital",
        layout: [
          {
            title: "冠军",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 0,
            tools: true,
            cols: 1
          },
          {
            title: "亚军",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 1,
            tools: true,
            cols: 1
          },
          {
            title: "第三位",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 2,
            tools: true,
            cols: 1
          }
        ],
        shortname: "pk10caipaiweiqiansan",
        isrx: 0,
        isButton: true
      },
      "96-100-261": {
        id: 261,
        pid: 100,
        series_way_id: 261,
        name_cn: "前四",
        name_en: "qiansi",
        price: 1,
        bet_note: "从“冠军~第四名”中各选一个号码组成一注",
        bonus_note:
          "从“冠军~第四名”中各选一个号码组成一注，所选号码与对应名次的车号相同且顺序一致，即为中奖。",
        top_id: 96,
        top_name_cn: "猜排位",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "digital",
        layout: [
          {
            title: "冠军",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 0,
            tools: true,
            cols: 1
          },
          {
            title: "亚军",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 1,
            tools: true,
            cols: 1
          },
          {
            title: "第三位",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 2,
            tools: true,
            cols: 1
          },
          {
            title: "第四位",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 2,
            tools: true,
            cols: 1
          }
        ],
        shortname: "pk10caipaiweiqiansi",
        isrx: 0,
        isButton: true
      },
      "96-100-262": {
        id: 262,
        pid: 100,
        series_way_id: 262,
        name_cn: "前五",
        name_en: "qianwu",
        price: 1,
        bet_note: "从“冠军~第五名”中各选一个号码组成一注",
        bonus_note:
          "从“冠军~第五名”中各选一个号码组成一注，所选号码与对应名次的车号相同且顺序一致，即为中奖。",
        top_id: 96,
        top_name_cn: "猜排位",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "digital",
        layout: [
          {
            title: "冠军",
            no: "01|02|03|04|05|06|07|08|09|10",
            place: 0,
            tools: true,
            cols: 1
          },
          {
            title: "亚军",
            no: "01|02|03|04|05|06|07|08|09|10",
            tools: true,
            place: 1,
            cols: 1
          },
          {
            title: "第三位",
            no: "01|02|03|04|05|06|07|08|09|10",
            tools: true,
            place: 2,
            cols: 1
          },
          {
            title: "第四位",
            no: "01|02|03|04|05|06|07|08|09|10",
            tools: true,
            place: 2,
            cols: 1
          },
          {
            title: "第五位",
            no: "01|02|03|04|05|06|07|08|09|10",
            tools: true,
            place: 2,
            cols: 1
          }
        ],
        shortname: "pk10caipaiweiqianwu",
        isrx: 0,
        isButton: true
      },
      "96-100-278": {
        id: 278,
        pid: 100,
        series_way_id: 278,
        name_cn: "前三单式",
        name_en: "qiansandanshi",
        price: 1,
        bet_note: "手动输入3个号码组成一注",
        bonus_note:
          "手动输入3个号码组成一注，所输入号码与前三名的车号相同且顺序一致，即为中奖。",
        top_id: 96,
        top_name_cn: "猜排位",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "input",
        shortname: "pk10qiansandanshi",
        isrx: 0
      },
      "96-100-279": {
        id: 279,
        pid: 100,
        series_way_id: 279,
        name_cn: "前四单式",
        name_en: "qiansidanshi",
        price: 1,
        bet_note: "手动输入4个号码组成一注",
        bonus_note:
          "手动输入4个号码组成一注，所输入号码与前四名的车号相同且顺序一致，即为中奖。",
        top_id: 96,
        top_name_cn: "猜排位",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "input",
        shortname: "pk10qiansidanshi",
        isrx: 0
      },
      "96-100-280": {
        id: 280,
        pid: 100,
        series_way_id: 280,
        name_cn: "前五单式",
        name_en: "qianwudanshi",
        price: 1,
        bet_note: "手动输入5个号码组成一注",
        bonus_note:
          "手动输入5个号码组成一注，所输入号码与前五名的车号相同且顺序一致，即为中奖。",
        top_id: 96,
        top_name_cn: "猜排位",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "input",
        shortname: "pk10qianwudanshi",
        isrx: 0
      },
      "103-104-285": {
        id: 285,
        pid: 104,
        series_way_id: 285,
        name_cn: "1v10",
        name_en: "1v10",
        price: 1,
        bet_note: "从“龙、虎”中选择一个即是一注",
        bonus_note:
          "“冠军和第10名”车号之间比大小。冠军车号大于第10名车号，即中“龙”；反之，即中“虎”。",
        top_id: 103,
        top_name_cn: "龙虎",
        pname_cn: "龙虎",
        p_name_cn: "龙虎",
        type: "dxds",
        layout: [
          {
            title: "1v10",
            no: "龙|虎",
            place: 0,
            cols: 1,
            tools: false
          }
        ],
        shortname: "pk10longhu",
        isrx: 0,
        isButton: true
      }
    };
  }
  