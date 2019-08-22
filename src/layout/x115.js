export default function getX115Layout() {
    return {
      "30-37-112": {
        id: 112,
        pid: 37,
        series_way_id: 112,
        name_cn: "前三直选复式",
        name_en: "fushi",
        price: 1,
        bet_note: "从第一位、第二位、第三位中至少各选择1个号码",
        bonus_note:
          "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。",
        top_id: 30,
        top_name_cn: "三码",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "digital",
        layout: [
          {
            title: "第一位",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: true,
            cols: 1
          },
          {
            title: "第二位",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 1,
            tools: true,
            cols: 1
          },
          {
            title: "第三位",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 2,
            tools: true,
            cols: 1
          }
        ],
        shortname: "sanmzhixfsq",
        isrx: 0,
        isButton: true
      },
      "30-37-95": {
        id: 95,
        pid: 37,
        series_way_id: 95,
        name_cn: "前三直选单式",
        name_en: "danshi",
        price: 1,
        bet_note: "手动输入至少3个号码组成一注",
        bonus_note:
          "手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。",
        top_id: 30,
        top_name_cn: "三码",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "input",
        shortname: "sanmzhixdsq",
        isrx: 0
      },
      "30-38-108": {
        id: 108,
        pid: 38,
        series_way_id: 108,
        name_cn: "前三组选复式",
        name_en: "fushi",
        price: 1,
        bet_note: "从01-11中任意选择3个或3个以上号码",
        bonus_note:
          "从01-11中共11个号码中选择3个号码，所选号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。",
        top_id: 30,
        top_name_cn: "三码",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "digital",
        layout: [
          {
            title: "组选",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: true,
            cols: 1,
            minchosen: 3
          }
        ],
        shortname: "sanmzuxfsq",
        isrx: 0,
        isButton: true
      },
      "30-38-97": {
        id: 97,
        pid: 38,
        series_way_id: 97,
        name_cn: "前三组选单式",
        name_en: "danshi",
        price: 1,
        bet_note: "手动输入至少3个号码组成一注",
        bonus_note:
          "手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。",
        top_id: 30,
        top_name_cn: "三码",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "input",
        shortname: "sanmzuxdsq",
        isrx: 0
      },
      "30-38-121": {
        id: 121,
        pid: 38,
        series_way_id: 121,
        name_cn: "前三组选胆拖",
        name_en: "dantuo",
        price: 1,
        bet_note:
          "从01-11中，选取3个或3个以上号码进行投注，胆码个数=1个或2个，胆码加拖码个数≥3个",
        bonus_note:
          "分别从胆码和拖码的01-11中，选取3个及以上的号码进行投注，胆码个数=1个或2个，胆码加拖码个数≥3个，所选单注号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。",
        top_id: 30,
        top_name_cn: "三码",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "digital",
        layout: [
          {
            title: "胆码",
            title_en: "danma",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: false,
            maxpic: 2,
            isdt: 1,
            cols: 1
          },
          {
            title: "拖码",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 1,
            cols: 1,
            tools: true
          }
        ],
        shortname: "sanmazxtd",
        isrx: 0,
        isButton: true,
        isDanTuo: true
      },
      "31-39-111": {
        id: 111,
        pid: 39,
        series_way_id: 111,
        name_cn: "前二直选复式",
        name_en: "fushi",
        price: 1,
        bet_note: "从第一位、第二位中至少各选择1个号码",
        bonus_note:
          "从01-11共11个号码中选择2个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即中奖。",
        top_id: 31,
        top_name_cn: "二码",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "digital",
        layout: [
          {
            title: "第一位",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: true,
            cols: 1
          },
          {
            title: "第二位",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 1,
            tools: true,
            cols: 1
          }
        ],
        shortname: "ermzhixfsq",
        isrx: 0,
        isButton: true
      },
      "31-39-94": {
        id: 94,
        pid: 39,
        series_way_id: 94,
        name_cn: "前二直选单式",
        name_en: "danshi",
        price: 1,
        bet_note: "手动输入号码，至少输入1个两位数号码组成一注",
        bonus_note:
          "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即为中奖。",
        top_id: 31,
        top_name_cn: "二码",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "input",
        shortname: "ermzhixdsq",
        isrx: 0
      },
      "31-40-107": {
        id: 107,
        pid: 40,
        series_way_id: 107,
        name_cn: "前二组选复式",
        name_en: "fushi",
        price: 1,
        bet_note: "从01-11中任意选择2个或2个以上号码",
        bonus_note:
          "从01-11中共11个号码中选择2个号码，所选号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。",
        top_id: 31,
        top_name_cn: "二码",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "digital",
        layout: [
          {
            title: "组选",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: true,
            cols: 1,
            minchosen: 2
          }
        ],
        shortname: "ermzuxfsq",
        isrx: 0,
        isButton: true
      },
      "31-40-96": {
        id: 96,
        pid: 40,
        series_way_id: 96,
        name_cn: "前二组选单式",
        name_en: "danshi",
        price: 1,
        bet_note: "手动输入号码，至少输入1个两位数号码组成一注",
        bonus_note:
          "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。",
        top_id: 31,
        top_name_cn: "二码",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "input",
        shortname: "ermzuxdsq",
        isrx: 0
      },
      "31-40-120": {
        id: 120,
        pid: 40,
        series_way_id: 120,
        name_cn: "前二组选胆拖",
        name_en: "dantuo",
        price: 1,
        bet_note:
          "从01-11中，选取2个或2个以上号码进行投注，胆码个数=1个，胆码加拖码个数≥2个",
        bonus_note:
          "分别从胆码和拖码的01-11中，选取2个及以上的号码进行投注，胆码个数=1个，胆码加拖码个数≥2个，所选单注号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。",
        top_id: 31,
        top_name_cn: "二码",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "digital",
        layout: [
          {
            title: "胆码",
            title_en: "danma",
            maxpic: 1,
            isdt: 1,
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: false,
            cols: 1
          },
          {
            title: "拖码",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 1,
            tools: true,
            cols: 1
          }
        ],
        shortname: "ermazxtd",
        isrx: 0,
        isButton: true,
        isDanTuo: true
      },
      "32-41-122": {
        id: 122,
        pid: 41,
        series_way_id: 122,
        name_cn: "前三不定位",
        name_en: "budingwei",
        price: 1,
        bet_note: "从01-11中任意选择1个或1个以上号码",
        bonus_note:
          "从01-11中共11个号码中选择1个号码，每注号码由1个号码组成，只要当期顺利摇出的第一位、第二位、第三位开奖号码中包含所选号码，即为中奖",
        top_id: 32,
        top_name_cn: "不定位",
        pname_cn: "不定位",
        p_name_cn: "不定位",
        type: "digital",
        layout: [
          {
            title: "前三位",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: true,
            cols: 1
          }
        ],
        shortname: "bdw",
        isrx: 0,
        isButton: true
      },
      "33-47-109": {
        id: 109,
        pid: 47,
        series_way_id: 109,
        name_cn: "定单双",
        name_en: "dingdanshuang",
        price: 1,
        bet_note: "从不同的单双组合中任意选择1个或1个以上的组合",
        bonus_note:
          "从6种单双个数组合中选择1种组合，当期开奖号码的单双个数与所选单双组合一致，即为中奖。",
        top_id: 33,
        top_name_cn: "趣味型",
        pname_cn: "趣味型",
        p_name_cn: "趣味型",
        type: "digital",
        layout: [
          {
            title: "定单双",
            no: "5单0双|4单1双|3单2双|2单3双|1单4双|0单5双",
            place: 0,
            cols: 0
          }
        ],
        isButton: false,
        shortname: "dds",
        isrx: 0
      },
      "33-47-110": {
        id: 110,
        pid: 47,
        series_way_id: 110,
        name_cn: "猜中位",
        name_en: "caizhongwei",
        price: 1,
        bet_note: "从3-9中任意选择1个或1个以上数字",
        bonus_note:
          "从3-9中选择1个号码进行购买，所选号码与5个开奖号码按照大小顺序排列后的第3个号码相同，即为中奖。",
        top_id: 33,
        top_name_cn: "趣味型",
        pname_cn: "趣味型",
        p_name_cn: "趣味型",
        type: "digital",
        layout: [
          {
            title: "猜中位",
            no: "3|4|5|6|7|8|9",
            place: 0,
            cols: 1
          }
        ],
        shortname: "czw",
        isrx: 0,
        isButton: true
      },
      "42-43-106": {
        id: 106,
        pid: 43,
        series_way_id: 106,
        name_cn: "定位胆",
        name_en: "dingweidan",
        price: 1,
        bet_note: "从第一位，第二位，第三位任意位置上任意选择1个或1个以上号码",
        bonus_note:
          "从第一位、第二位、第三位任意1个位置或多个位置上选择1个号码，所选号码与相同位置上的开奖号码一致，即为中奖。",
        top_id: 42,
        top_name_cn: "定位胆",
        pname_cn: "定位胆",
        p_name_cn: "定位胆",
        type: "digital",
        layout: [
          {
            title: "第一位",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: true,
            cols: 1
          },
          {
            title: "第二位",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 1,
            tools: true,
            cols: 1
          },
          {
            title: "第三位",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 2,
            tools: true,
            cols: 1
          }
        ],
        shortname: "dwd",
        isrx: 0,
        isButton: true
      },
      "34-44-98": {
        id: 98,
        pid: 44,
        series_way_id: 98,
        name_cn: "任选一中一复式",
        name_en: "renxuanyi",
        price: 1,
        bet_note: "从01-11中任意选择1个或1个以上号码",
        bonus_note:
          "从01-11共11个号码中选择1个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。",
        top_id: 34,
        top_name_cn: "任选复式",
        pname_cn: "任选复式",
        p_name_cn: "任选复式",
        type: "digital",
        layout: [
          {
            title: "选1中1",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: true,
            cols: 1
          }
        ],
        shortname: "rx1fs",
        isrx: 0,
        isButton: true
      },
      "34-44-99": {
        id: 99,
        pid: 44,
        series_way_id: 99,
        name_cn: "任选二中二复式",
        name_en: "renxuaner",
        price: 1,
        bet_note: "从01-11中任意选择2个或2个以上号码",
        bonus_note:
          "从01-11共11个号码中选择2个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。",
        top_id: 34,
        top_name_cn: "任选复式",
        pname_cn: "任选复式",
        p_name_cn: "任选复式",
        type: "digital",
        layout: [
          {
            title: "选2中2",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: true,
            cols: 1,
            minchosen: 2
          }
        ],
        shortname: "rx2fs",
        isrx: 0,
        isButton: true
      },
      "34-44-100": {
        id: 100,
        pid: 44,
        series_way_id: 100,
        name_cn: "任选三中三复式",
        name_en: "renxuansan",
        price: 1,
        bet_note: "从01-11中任意选择3个或3个以上号码",
        bonus_note:
          "从01-11共11个号码中选择3个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。",
        top_id: 34,
        top_name_cn: "任选复式",
        pname_cn: "任选复式",
        p_name_cn: "任选复式",
        type: "digital",
        layout: [
          {
            title: "选3中3",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: true,
            cols: 1,
            minchosen: 3
          }
        ],
        shortname: "rx3fs",
        isrx: 0,
        isButton: true
      },
      "34-44-101": {
        id: 101,
        pid: 44,
        series_way_id: 101,
        name_cn: "任选四中四复式",
        name_en: "renxuansi",
        price: 1,
        bet_note: "从01-11中任意选择4个或4个以上号码",
        bonus_note:
          "从01-11共11个号码中选择4个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。",
        top_id: 34,
        top_name_cn: "任选复式",
        pname_cn: "任选复式",
        p_name_cn: "任选复式",
        type: "digital",
        layout: [
          {
            title: "选4中4",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: true,
            cols: 1,
            minchosen: 4
          }
        ],
        shortname: "rx4fs",
        isrx: 0,
        isButton: true
      },
      "34-44-102": {
        id: 102,
        pid: 44,
        series_way_id: 102,
        name_cn: "任选五中五复式",
        name_en: "renxuanwu",
        price: 1,
        bet_note: "从01-11中任意选择5个或5个以上号码",
        bonus_note:
          "从01-11共11个号码中选择5个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。",
        top_id: 34,
        top_name_cn: "任选复式",
        pname_cn: "任选复式",
        p_name_cn: "任选复式",
        type: "digital",
        layout: [
          {
            title: "选5中5",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: true,
            cols: 1,
            minchosen: 5
          }
        ],
        shortname: "rx5fs",
        isrx: 0,
        isButton: true
      },
      "34-44-103": {
        id: 103,
        pid: 44,
        series_way_id: 103,
        name_cn: "任选六中五复式",
        name_en: "renxuanliu",
        price: 1,
        bet_note: "从01-11中任意选择6个或6个以上号码",
        bonus_note:
          "投注方案：01 02 03 04 05 06；开奖号码包含01 02 03 04 05，顺序不限，即中任六中五一等奖",
        top_id: 34,
        top_name_cn: "任选复式",
        pname_cn: "任选复式",
        p_name_cn: "任选复式",
        type: "digital",
        layout: [
          {
            title: "选6中5",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            cols: 1,
            tools: true,
            minchosen: 6
          }
        ],
        shortname: "rx6fs",
        isrx: 0,
        isButton: true
      },
      "34-44-104": {
        id: 104,
        pid: 44,
        series_way_id: 104,
        name_cn: "任选七中五复式",
        name_en: "renxuanqi",
        price: 1,
        bet_note: "从01-11中任意选择7个或7个以上号码",
        bonus_note:
          "从01-11共11个号码中选择6个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。",
        top_id: 34,
        top_name_cn: "任选复式",
        pname_cn: "任选复式",
        p_name_cn: "任选复式",
        type: "digital",
        layout: [
          {
            title: "选7中5",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: true,
            cols: 1,
            minchosen: 7
          }
        ],
        shortname: "rx7fs",
        isrx: 0,
        isButton: true
      },
      "34-44-105": {
        id: 105,
        pid: 44,
        series_way_id: 105,
        name_cn: "任选八中五复式",
        name_en: "renxuanba",
        price: 1,
        bet_note: "从01-11中任意选择8个或8个以上号码",
        bonus_note:
          "从01-11共11个号码中选择8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。",
        top_id: 34,
        top_name_cn: "任选复式",
        pname_cn: "任选复式",
        p_name_cn: "任选复式",
        type: "digital",
        layout: [
          {
            title: "选8中5",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            cols: 1,
            tools: true,
            minchosen: 8
          }
        ],
        shortname: "rx8fs",
        isrx: 0,
        isButton: true
      },
      "35-45-86": {
        id: 86,
        pid: 45,
        series_way_id: 86,
        name_cn: "任选一中一单式",
        name_en: "renxuanyi",
        price: 1,
        bet_note: "手动输入号码，从01-11中任意输入1个号码组成一注",
        bonus_note:
          "从01-11中手动输入1个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        top_id: 35,
        top_name_cn: "任选单式",
        pname_cn: "任选单式",
        p_name_cn: "任选单式",
        type: "input",
        shortname: "rx1ds",
        isrx: 0
      },
      "35-45-87": {
        id: 87,
        pid: 45,
        series_way_id: 87,
        name_cn: "任选二中二单式",
        name_en: "renxuaner",
        price: 1,
        bet_note: "手动输入号码，从01-11中任意输入2个号码组成一注",
        bonus_note:
          "从01-11中手动输入2个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        top_id: 35,
        top_name_cn: "任选单式",
        pname_cn: "任选单式",
        p_name_cn: "任选单式",
        type: "input",
        shortname: "rx2ds",
        isrx: 0
      },
      "35-45-88": {
        id: 88,
        pid: 45,
        series_way_id: 88,
        name_cn: "任选三中三单式",
        name_en: "renxuansan",
        price: 1,
        bet_note: "手动输入号码，从01-11中任意输入3个号码组成一注",
        bonus_note:
          "从01-11中手动输入3个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        top_id: 35,
        top_name_cn: "任选单式",
        pname_cn: "任选单式",
        p_name_cn: "任选单式",
        type: "input",
        shortname: "rx3ds",
        isrx: 0
      },
      "35-45-89": {
        id: 89,
        pid: 45,
        series_way_id: 89,
        name_cn: "任选四中四单式",
        name_en: "renxuansi",
        price: 1,
        bet_note: "手动输入号码，从01-11中任意输入4个号码组成一注",
        bonus_note:
          "从01-11中手动输入4个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        top_id: 35,
        top_name_cn: "任选单式",
        pname_cn: "任选单式",
        p_name_cn: "任选单式",
        type: "input",
        shortname: "rx4ds",
        isrx: 0
      },
      "35-45-90": {
        id: 90,
        pid: 45,
        series_way_id: 90,
        name_cn: "任选五中五单式",
        name_en: "renxuanwu",
        price: 1,
        bet_note: "手动输入号码，从01-11中任意输入5个号码组成一注",
        bonus_note:
          "从01-11中手动输入5个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        top_id: 35,
        top_name_cn: "任选单式",
        pname_cn: "任选单式",
        p_name_cn: "任选单式",
        type: "input",
        shortname: "rx5ds",
        isrx: 0
      },
      "35-45-91": {
        id: 91,
        pid: 45,
        series_way_id: 91,
        name_cn: "任选六中五单式",
        name_en: "renxuanliu",
        price: 1,
        bet_note: "手动输入号码，从01-11中任意输入6个号码组成一注",
        bonus_note:
          "从01-11中手动输入6个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        top_id: 35,
        top_name_cn: "任选单式",
        pname_cn: "任选单式",
        p_name_cn: "任选单式",
        type: "input",
        shortname: "rx6ds",
        isrx: 0
      },
      "35-45-92": {
        id: 92,
        pid: 45,
        series_way_id: 92,
        name_cn: "任选七中五单式",
        name_en: "renxuanqi",
        price: 1,
        bet_note: "手动输入号码，从01-11中任意输入7个号码组成一注",
        bonus_note:
          "从01-11中手动输入7个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        top_id: 35,
        top_name_cn: "任选单式",
        pname_cn: "任选单式",
        p_name_cn: "任选单式",
        type: "input",
        shortname: "rx7ds",
        isrx: 0
      },
      "35-45-93": {
        id: 93,
        pid: 45,
        series_way_id: 93,
        name_cn: "任选八中五单式",
        name_en: "renxuanba",
        price: 1,
        bet_note: "手动输入号码，从01-11中任意输入8个号码组成一注",
        bonus_note:
          "从01-11中手动输入8个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        top_id: 35,
        top_name_cn: "任选单式",
        pname_cn: "任选单式",
        p_name_cn: "任选单式",
        type: "input",
        shortname: "rx8ds",
        isrx: 0
      },
      "36-46-113": {
        id: 113,
        pid: 46,
        series_way_id: 113,
        name_cn: "任选二中二胆拖",
        name_en: "renxuaner",
        price: 1,
        bet_note:
          "从01-11中，选取2个及以上的号码进行投注，每注需至少包括1个胆码及1个拖码",
        bonus_note:
          "从01-11共11个号码中选择2个及以上号码进行投注，每注需至少包括1个胆码及1个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖",
        top_id: 36,
        top_name_cn: "任选胆拖",
        pname_cn: "任选胆拖",
        p_name_cn: "任选胆拖",
        type: "digital",
        layout: [
          {
            title: "胆码",
            title_en: "danma",
            maxpic: 1,
            isdt: 1,
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: false,
            cols: 1
          },
          {
            title: "拖码",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 1,
            tools: true,
            cols: 1
          }
        ],
        isButton: true,
        isDanTuo: true,
        shortname: "rxtd2d2",
        isrx: 0
      },
      "36-46-114": {
        id: 114,
        pid: 46,
        series_way_id: 114,
        name_cn: "任选三中三胆拖",
        name_en: "renxuansan",
        price: 1,
        bet_note:
          "从01-11中，选取3个及以上的号码进行投注，每注需至少包括1个胆码及2个拖码",
        bonus_note:
          "从01-11共11个号码中选择3个及以上号码进行投注，每注需至少包括1个胆码及2个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖",
        top_id: 36,
        top_name_cn: "任选胆拖",
        pname_cn: "任选胆拖",
        p_name_cn: "任选胆拖",
        type: "digital",
        layout: [
          {
            title: "胆码",
            title_en: "danma",
            maxpic: 2,
            isdt: 1,
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: false,
            cols: 1
          },
          {
            title: "拖码",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 1,
            tools: true,
            cols: 1
          }
        ],
        shortname: "rxtd3d3",
        isrx: 0,
        isButton: true,
        isDanTuo: true
      },
      "36-46-115": {
        id: 115,
        pid: 46,
        series_way_id: 115,
        name_cn: "任选四中四胆拖",
        name_en: "renxuansi",
        price: 1,
        bet_note:
          "从01-11中，选取4个及以上的号码进行投注，每注需至少包括1个胆码及3个拖码",
        bonus_note:
          "从01-11共11个号码中选择4个及以上号码进行投注，每注需至少包括1个胆码及3个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖",
        top_id: 36,
        top_name_cn: "任选胆拖",
        pname_cn: "任选胆拖",
        p_name_cn: "任选胆拖",
        type: "digital",
        layout: [
          {
            title: "胆码",
            title_en: "danma",
            maxpic: 2,
            isdt: 1,
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: false,
            cols: 1
          },
          {
            title: "拖码",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 1,
            tools: true,
            cols: 1
          }
        ],
        shortname: "rxtd4d4",
        isrx: 0,
        isButton: true,
        isDanTuo: true
      },
      "36-46-116": {
        id: 116,
        pid: 46,
        series_way_id: 116,
        name_cn: "任选五中五胆拖",
        name_en: "renxuanwu",
        price: 1,
        bet_note:
          "从01-11中，选取5个及以上的号码进行投注，每注需至少包括1个胆码及4个拖码",
        bonus_note:
          "从01-11共11个号码中选择5个及以上号码进行投注，每注需至少包括1个胆码及4个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖",
        top_id: 36,
        top_name_cn: "任选胆拖",
        pname_cn: "任选胆拖",
        p_name_cn: "任选胆拖",
        type: "digital",
        layout: [
          {
            title: "胆码",
            title_en: "danma",
            maxpic: 2,
            isdt: 1,
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: false,
            cols: 1
          },
          {
            title: "拖码",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 1,
            tools: true,
            cols: 1
          }
        ],
        shortname: "rxtd5d5",
        isrx: 0,
        isButton: true,
        isDanTuo: true
      },
      "36-46-117": {
        id: 117,
        pid: 46,
        series_way_id: 117,
        name_cn: "任选六中五胆拖",
        name_en: "renxuanliu",
        price: 1,
        bet_note:
          "从01-11中，选取6个及以上的号码进行投注，每注需至少包括1个胆码及5个拖码",
        bonus_note:
          "从01-11共11个号码中选择6个及以上号码进行投注，每注需至少包括1个胆码及5个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖",
        top_id: 36,
        top_name_cn: "任选胆拖",
        pname_cn: "任选胆拖",
        p_name_cn: "任选胆拖",
        type: "digital",
        layout: [
          {
            title: "胆码",
            title_en: "danma",
            maxpic: 2,
            isdt: 1,
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: false,
            cols: 1
          },
          {
            title: "拖码",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 1,
            tools: true,
            cols: 1
          }
        ],
        shortname: "rxtd6d5",
        isrx: 0,
        isButton: true,
        isDanTuo: true
      },
      "36-46-118": {
        id: 118,
        pid: 46,
        series_way_id: 118,
        name_cn: "任选七中五胆拖",
        name_en: "renxuanqi",
        price: 1,
        bet_note:
          "从01-11中，选取7个及以上的号码进行投注，每注需至少包括1个胆码及6个拖码",
        bonus_note:
          "从01-11共11个号码中选择7个及以上号码进行投注，每注需至少包括1个胆码及6个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖",
        top_id: 36,
        top_name_cn: "任选胆拖",
        pname_cn: "任选胆拖",
        p_name_cn: "任选胆拖",
        type: "digital",
        layout: [
          {
            title: "胆码",
            title_en: "danma",
            maxpic: 2,
            isdt: 1,
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: false,
            cols: 1
          },
          {
            title: "拖码",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 1,
            tools: true,
            cols: 1
          }
        ],
        shortname: "rxtd7d5",
        isrx: 0,
        isButton: true,
        isDanTuo: true
      },
      "36-46-119": {
        id: 119,
        pid: 46,
        series_way_id: 119,
        name_cn: "任选八中五胆拖",
        name_en: "renxuanba",
        price: 1,
        bet_note:
          "从01-11中，选取8个及以上的号码进行投注，每注需至少包括1个胆码及7个拖码",
        bonus_note:
          "从01-11共11个号码中选择8个及以上号码进行投注，每注需至少包括1个胆码及7个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖",
        top_id: 36,
        top_name_cn: "任选胆拖",
        pname_cn: "任选胆拖",
        p_name_cn: "任选胆拖",
        type: "digital",
        layout: [
          {
            title: "胆码",
            title_en: "danma",
            maxpic: 2,
            isdt: 1,
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 0,
            tools: false,
            cols: 1
          },
          {
            title: "拖码",
            no: "01|02|03|04|05|06|07|08|09|10|11",
            place: 1,
            tools: true,
            cols: 1
          }
        ],
        shortname: "rxtd8d5",
        isrx: 0,
        isButton: true,
        isDanTuo: true
      }
    };
  }
  