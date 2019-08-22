export default function getF3DLayout() {
    return {
      "48-55-136": {
        id: 136,
        pid: 55,
        series_way_id: 136,
        name_cn: "复式",
        name_en: "fushi",
        price: 1,
        bet_note: "从个、十、百位各选一个号码组成一注",
        bonus_note:
          "从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码后3位相同，且顺序一致，即为中奖。",
        top_id: 48,
        top_name_cn: "三星",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "digital",
        layout: [
          {
            title: "百位",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 0,
            tools: true,
            cols: 1
          },
          {
            title: "十位",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 1,
            tools: true,
            cols: 1
          },
          {
            title: "个位",
            no: "0|1|2|3|4|5|6|7|8|9",
            tools: true,
            place: 2,
            cols: 1
          }
        ],
        shortname: "sxzhixfsq",
        isrx: 0,
        isButton: true
      },
      "48-55-123": {
        id: 123,
        pid: 55,
        series_way_id: 123,
        name_cn: "单式",
        name_en: "danshi",
        price: 1,
        bet_note: "手动输入号码，至少输入1个三位数号码组成一注",
        bonus_note:
          "手动输入一个3位数号码组成一注，所选号码的百位、十位、个位与开奖号码相同且顺序一致，即为中奖。",
        top_id: 48,
        top_name_cn: "三星",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "input",
        shortname: "sxzhixdsq",
        isrx: 0
      },
      "48-55-139": {
        id: 139,
        pid: 55,
        series_way_id: 139,
        name_cn: "直选和值",
        name_en: "hezhi",
        price: 1,
        bet_note: "从0-27中任意选择1个或1个以上号码",
        bonus_note:
          "所选数值等于开奖号码的百位、十位、个位三个数字相加之和，即为中奖。",
        top_id: 48,
        top_name_cn: "三星",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "digital",
        layout: [
          {
            title: "和值",
            no:
              "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27",
            place: 0,
            tools: !1,
            cols: 1
          }
        ],
        isButton: false,
        shortname: "sxzhixhzq",
        isrx: 0
      },
      "48-56-131": {
        id: 131,
        pid: 56,
        series_way_id: 131,
        name_cn: "组三",
        name_en: "zusan",
        price: 1,
        bet_note: "从0-9中任意选择2个或2个以上号码",
        bonus_note:
          "从0-9中选择2个数字组成两注，所选号码与开奖号码的百位、十位、个位相同，且顺序不限，即为中奖。",
        top_id: 48,
        top_name_cn: "三星",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "digital",
        layout: [
          {
            title: "组三",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 0,
            tools: true,
            cols: 1
          }
        ],
        shortname: "sxzuxzsq",
        isrx: 0,
        isButton: true
      },
      "48-56-124": {
        id: 124,
        pid: 56,
        series_way_id: 124,
        name_cn: "组三单式",
        name_en: "zusandanshi",
        price: 1,
        bet_note:
          "手动输入号码，至少输入 1 个三位数号码。(三个数字当中有二个数字相同)",
        bonus_note:
          "手动输入组三号码，3个数字为一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。",
        top_id: 48,
        top_name_cn: "三星",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "input",
        shortname: "ZUS",
        isrx: 0
      },
      "48-56-132": {
        id: 132,
        pid: 56,
        series_way_id: 132,
        name_cn: "组六",
        name_en: "zuliu",
        price: 1,
        bet_note: "从0-9中任意选择3个或3个以上号码。",
        bonus_note:
          "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。",
        top_id: 48,
        top_name_cn: "三星",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "digital",
        layout: [
          {
            title: "组六",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 0,
            tools: true,
            cols: 1
          }
        ],
        shortname: "sxzuxzlq",
        isrx: 0,
        isButton: !0
      },
      "48-56-125": {
        id: 125,
        pid: 56,
        series_way_id: 125,
        name_cn: "组六单式",
        name_en: "zuliudanshi",
        price: 1,
        bet_note: "手动输入号码，至少输入 1 个三位数号码。(三个数字全不相同)",
        bonus_note:
          "手动输入组六号码，3个数字为一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。",
        top_id: 48,
        top_name_cn: "三星",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "input",
        shortname: "ZUL",
        isrx: 0
      },
      "48-56-130": {
        id: 130,
        pid: 56,
        series_way_id: 130,
        name_cn: "混合组选",
        name_en: "hunhezuxuan",
        price: 1,
        bet_note: "手动输入号码，至少输入1个三位数号码。",
        bonus_note:
          "手动输入组三或组六号码，3个数字为一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。",
        top_id: 48,
        top_name_cn: "三星",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "input",
        shortname: "sxhhzxq",
        isrx: 0
      },
      "48-56-140": {
        id: 140,
        pid: 56,
        series_way_id: 140,
        name_cn: "组选和值",
        name_en: "hezhi",
        price: 1,
        bet_note: "从1-26中选择1个号码",
        bonus_note:
          "所选数值等于开奖号码百位、十位、个位三个数字相加之和(不含豹子号)，即为中奖。",
        top_id: 48,
        top_name_cn: "三星",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "digital",
        layout: [
          {
            title: "和值",
            no:
              "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26",
            place: 0,
            cols: 1,
            tools: !1
          }
        ],
        shortname: "ZUHZ",
        isrx: 0,
        isButton: !1
      },
      "49-59-137": {
        id: 137,
        pid: 59,
        series_way_id: 137,
        name_cn: "前二直选",
        name_en: "qianerfushi",
        price: 1,
        bet_note: "从第一位、第二位中至少各选择1个号码",
        bonus_note:
          "从0-9共10个号码中选择2个不重复的号码组成一注，所选号码与当期顺序摇出的3个号码中的前2个号码相同，且顺序一致，即中奖。",
        top_id: 49,
        top_name_cn: "二星",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "digital",
        layout: [
          {
            title: "百位",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 0,
            tools: true,
            cols: 1
          },
          {
            title: "十位",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 1,
            tools: true,
            cols: 1
          }
        ],
        shortname: "exzhixfsq",
        isrx: 0,
        isButton: !0
      },
      "49-59-126": {
        id: 126,
        pid: 59,
        series_way_id: 126,
        name_cn: "前二单式",
        name_en: "qianerdanshi",
        price: 1,
        bet_note: "手动输入号码，至少输入1个两位数号码",
        bonus_note:
          "手动输入一个2位数号码组成一注，所选号码的百位、十位与开奖号码相同，且顺序一致，即为中奖。",
        top_id: 49,
        top_name_cn: "二星",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "input",
        shortname: "exzhixdsq",
        isrx: 0
      },
      "49-59-138": {
        id: 138,
        pid: 59,
        series_way_id: 138,
        name_cn: "后二直选",
        name_en: "houerfushi",
        price: 1,
        bet_note: "从十、个位各选一个号码组成一注",
        bonus_note:
          "从十位、个位中选择一个2位数号码组成一注，所选号码与开奖号码的十位、个位相同，且顺序一致，即为中奖。",
        top_id: 49,
        top_name_cn: "二星",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "digital",
        layout: [
          {
            title: "十位",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 0,
            tools: true,
            cols: 1
          },
          {
            title: "个位",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 1,
            tools: true,
            cols: 1
          }
        ],
        shortname: "exzhixfsh",
        isrx: 0,
        isButton: !0
      },
      "49-59-128": {
        id: 128,
        pid: 59,
        series_way_id: 128,
        name_cn: "后二单式",
        name_en: "houerdanshi",
        price: 1,
        bet_note: "手动输入号码，至少输入1个两位数号码",
        bonus_note:
          "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。",
        top_id: 49,
        top_name_cn: "二星",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "input",
        shortname: "exzhixdsh",
        isrx: 0
      },
      "49-60-135": {
        id: 135,
        pid: 60,
        series_way_id: 135,
        name_cn: "后二复式",
        name_en: "houerfushi",
        price: 1,
        bet_note: "从0-9中任意选择2个或2个以上号码。",
        bonus_note:
          "从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限（不含对子号），即为中奖。",
        top_id: 49,
        top_name_cn: "二星",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "digital",
        layout: [
          {
            title: "组选",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 0,
            tools: true,
            cols: 1
          }
        ],
        shortname: "exzuxfsh",
        isrx: 0,
        isButton: !0
      },
      "49-60-129": {
        id: 129,
        pid: 60,
        series_way_id: 129,
        name_cn: "后二单式",
        name_en: "houerdanshi",
        price: 1,
        bet_note: "手动输入号码，至少输入1个两位数号码",
        bonus_note:
          "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，顺序不限（不含对子号），即为中奖。",
        top_id: 49,
        top_name_cn: "二星",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "input",
        shortname: "exzhixdsh",
        isrx: 0
      },
      "49-60-134": {
        id: 134,
        pid: 60,
        series_way_id: 134,
        name_cn: "前二复式",
        name_en: "qianerfushi",
        price: 1,
        bet_note: "从0-9中任意选择2个或2个以上号码",
        bonus_note:
          "从0-9中共10个号码中选择2个号码，所选号码与当期顺序摇出的3个号码中的前2个号码相同，顺序不限，即为中奖。",
        top_id: 49,
        top_name_cn: "二星",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "digital",
        layout: [
          {
            title: "组选",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 0,
            tools: true,
            cols: 1
          }
        ],
        shortname: "exzuxfsq",
        isrx: 0,
        isButton: !0
      },
      "49-60-127": {
        id: 127,
        pid: 60,
        series_way_id: 127,
        name_cn: "前二单式",
        name_en: "qianerdanshi",
        price: 1,
        bet_note: "手动输入号码，至少输入1个两位数号码组成一注",
        bonus_note:
          "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的3个号码中的前2个号码相同，顺序不限，即为中奖",
        top_id: 49,
        top_name_cn: "二星",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "input",
        shortname: "exzuxdsq",
        isrx: 0
      },
      "50-58-141": {
        id: 141,
        pid: 58,
        series_way_id: 141,
        name_cn: "定位胆",
        name_en: "fushi",
        price: 1,
        bet_note: "在百位，十位，个位任意位置上任意选择1个或1个以上号码",
        bonus_note:
          "从百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。",
        top_id: 50,
        top_name_cn: "一星",
        pname_cn: "定位胆",
        p_name_cn: "定位胆",
        type: "digital",
        layout: [
          {
            title: "百位",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 0,
            tools: true,
            cols: 1
          },
          {
            title: "十位",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 1,
            tools: true,
            cols: 1
          },
          {
            title: "个位",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 2,
            tools: true,
            cols: 1
          }
        ],
        shortname: "dwd3d",
        isrx: 0,
        isButton: !0
      },
      "51-57-133": {
        id: 133,
        pid: 57,
        series_way_id: 133,
        name_cn: "一码不定位",
        name_en: "housanyimabudingwei",
        price: 1,
        bet_note: "从0-9中任意选择1个以上号码",
        bonus_note:
          "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的百位、十位、个位中包含所选号码，即为中奖。",
        top_id: 51,
        top_name_cn: "不定位",
        pname_cn: "不定位",
        p_name_cn: "不定位",
        type: "digital",
        layout: [
          {
            title: "一码 ",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 0,
            tools: true,
            cols: 1
          }
        ],
        shortname: "bdw1mh",
        isrx: 0,
        isButton: !0
      },
      "51-57-162": {
        id: 162,
        pid: 57,
        series_way_id: 162,
        name_cn: "二码不定位",
        name_en: "housanermabudingwei",
        price: 1,
        bet_note: "从0-9中任意选择2个以上号码",
        bonus_note:
          "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的百位、十位、个位中同时包含所选的2个号码，即为中奖。",
        top_id: 51,
        top_name_cn: "不定位",
        pname_cn: "不定位",
        p_name_cn: "不定位",
        type: "digital",
        layout: [
          {
            title: "二码",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 0,
            tools: true,
            cols: 1
          }
        ],
        shortname: "bdw2mh",
        isrx: 0,
        isButton: !0
      },
      "65-66-175": {
        id: 175,
        pid: 66,
        series_way_id: 175,
        name_cn: "前二大小单双",
        name_en: "qianerdaxiaodanshuang",
        price: 1,
        bet_note: "从百位、十位中的“大、小、单、双”中至少各选一个组成一注",
        bonus_note:
          "对百位和十位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。",
        top_id: 65,
        top_name_cn: "大小单双",
        pname_cn: "大小单双",
        p_name_cn: "大小单双",
        type: "dxds",
        layout: [
          {
            title: "百位",
            no: "大|小|单|双",
            place: 0,
            cols: 1
          },
          {
            title: "十位",
            no: "大|小|单|双",
            place: 1,
            cols: 1
          }
        ],
        isButton: false,
        shortname: "dxdsq",
        isrx: 0
      },
      "65-66-176": {
        id: 176,
        pid: 66,
        series_way_id: 176,
        name_cn: "后二大小单双",
        name_en: "houerdaxiaodanshuang",
        price: 1,
        bet_note: "从十位、个位中的“大、小、单、双”中至少各选一个组成一注",
        bonus_note:
          "对十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。",
        top_id: 65,
        top_name_cn: "大小单双",
        pname_cn: "大小单双",
        p_name_cn: "大小单双",
        type: "dxds",
        layout: [
          {
            title: "十位",
            no: "大|小|单|双",
            place: 0,
            cols: 1
          },
          {
            title: "个位",
            no: "大|小|单|双",
            place: 1,
            cols: 1
          }
        ],
        isButton: false,
        shortname: "dxdsh",
        isrx: 0
      }
    };
  }
  