export default function getPL35Layout() {
    return {
      "67-72-189": {
        id: 189,
        pid: 72,
        series_way_id: 189,
        name_cn: "直选复式",
        name_en: "fushi",
        price: 1,
        bet_note: "从万、千、百位各选一个号码组成一注",
        bonus_note:
          "从万位、千位、百位中选择一个3位数号码组成一注，所选号码与开奖号码前3位相同，且顺序一致，即为中奖。",
        li_enable: 1,
        prize: "965.0000",
        max_multiple: 1,
        top_id: 67,
        top_name_cn: "排三",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "digital",
        layout: [
          {
            title: "万位",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 0,
            tools: true,
            cols: 1
          },
          {
            title: "千位",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 1,
            tools: true,
            cols: 1
          },
          {
            title: "百位",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 2,
            tools: true,
            cols: 1
          }
        ],
        shortname: "sxzhixfsq",
        isrx: 0,
        isButton: true
      },
      "67-72-177": {
        id: 177,
        pid: 72,
        series_way_id: 177,
        name_cn: "直选单式",
        name_en: "danshi",
        price: 1,
        bet_note: "手动输入号码，至少输入1个三位数号码组成一注",
        bonus_note:
          "手动输入一个3位数号码组成一注，所选号码的万位、千位、百位与开奖号码相同且顺序一致，即为中奖。",
        li_enable: 1,
        prize: "965.0000",
        max_multiple: 1,
        top_id: 67,
        top_name_cn: "排三",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "input",
        shortname: "sxzhixdsq",
        isrx: 0
      },
      "67-72-192": {
        id: 192,
        pid: 72,
        series_way_id: 192,
        name_cn: "直选和值",
        name_en: "hezhi",
        price: 1,
        bet_note: "从0-27中任意选择1个或1个以上号码",
        bonus_note:
          "所选数值等于开奖号码的万位、千位、百位三个数字相加之和，即为中奖。",
        li_enable: 1,
        prize: "965.0000",
        max_multiple: 1,
        top_id: 67,
        top_name_cn: "排三",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "digital",
        layout: [
          {
            title: "和值",
            no:
              "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27",
            place: 0,
            tools: false,
            cols: 1
          }
        ],
        shortname: "sxzhixhzq",
        isrx: 0,
        isButton: false
      },
      "67-73-184": {
        id: 184,
        pid: 73,
        series_way_id: 184,
        name_cn: "组三复式",
        name_en: "zusan",
        price: 1,
        bet_note: "从0-9中任意选择2个或2个以上号码",
        bonus_note:
          "从0-9中选择2个数字组成两注，所选号码与开奖号码的万位、千位、百位相同，且顺序不限，即为中奖。",
        li_enable: 1,
        prize: "321.6667",
        max_multiple: 1,
        top_id: 67,
        top_name_cn: "排三",
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
      "67-73-178": {
        id: 178,
        pid: 73,
        series_way_id: 178,
        name_cn: "组三单式",
        name_en: "zusandanshi",
        price: 1,
        bet_note:
          "手动输入号码，至少输入 1 个三位数号码。(三个数字当中有二个数字相同)",
        bonus_note:
          "手动输入组三号码，3个数字为一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。",
        li_enable: 1,
        prize: "321.6667",
        max_multiple: 1,
        top_id: 67,
        top_name_cn: "排三",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "input",
        shortname: "ZUS",
        isrx: 0
      },
      "67-73-185": {
        id: 185,
        pid: 73,
        series_way_id: 185,
        name_cn: "组六复式",
        name_en: "zuliu",
        price: 1,
        bet_note: "从0-9中任意选择3个或3个以上号码。",
        bonus_note:
          "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。",
        li_enable: 1,
        prize: "160.8333",
        max_multiple: 1,
        top_id: 67,
        top_name_cn: "排三",
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
        isButton: true
      },
      "67-73-179": {
        id: 179,
        pid: 73,
        series_way_id: 179,
        name_cn: "组六单式",
        name_en: "zuliudanshi",
        price: 1,
        bet_note: "手动输入号码，至少输入 1 个三位数号码。",
        bonus_note:
          "手动输入组六号码，3个数字为一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。",
        li_enable: 1,
        prize: "160.8333",
        max_multiple: 1,
        top_id: 67,
        top_name_cn: "排三",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "input",
        shortname: "ZUL",
        isrx: 0
      },
      "67-73-195": {
        id: 195,
        pid: 73,
        series_way_id: 195,
        name_cn: "混合组选",
        name_en: "hunhezuxuan",
        price: 1,
        bet_note: "手动输入号码，至少输入1个三位数号码。",
        bonus_note:
          "手动输入组三或组六号码，3个数字为一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。",
        li_enable: 1,
        prize: "321.6667",
        max_multiple: 1,
        top_id: 67,
        top_name_cn: "排三",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "input",
        shortname: "sxhhzxq",
        isrx: 0
      },
      "67-73-193": {
        id: 193,
        pid: 73,
        series_way_id: 193,
        name_cn: "组选和值",
        name_en: "hezhi",
        price: 1,
        bet_note: "从1-26中选择1个号码",
        bonus_note:
          "所选数值等于开奖号码万位、千位、百位三个数字相加之和(不含豹子号)，即为中奖。",
        li_enable: 1,
        prize: "321.6667",
        max_multiple: 1,
        top_id: 67,
        top_name_cn: "排三",
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
            tools: false
          }
        ],
        shortname: "ZUHZ",
        isrx: 0,
        isButton: false
      },
      "68-74-190": {
        id: 190,
        pid: 74,
        series_way_id: 190,
        name_cn: "（前二）排五直选复式",
        name_en: "qianerfushi",
        price: 1,
        bet_note: "从第一位、第二位中至少各选择1个号码",
        bonus_note:
          "从0-9共10个号码中选择2个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即中奖。",
        li_enable: 1,
        prize: "96.5000",
        max_multiple: 1,
        top_id: 68,
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
        isButton: true
      },
      "68-74-180": {
        id: 180,
        pid: 74,
        series_way_id: 180,
        name_cn: "（前二）排五直选单式",
        name_en: "qianerdanshi",
        price: 1,
        bet_note: "手动输入号码，至少输入1个两位数号码",
        bonus_note:
          "手动输入一个2位数号码组成一注，所选号码的万位、千位与开奖号码相同，且顺序一致，即为中奖。",
        li_enable: 1,
        prize: "96.5000",
        max_multiple: 1,
        top_id: 68,
        top_name_cn: "二星",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "input",
        shortname: "exzhixdsq",
        isrx: 0
      },
      "68-74-191": {
        id: 191,
        pid: 74,
        series_way_id: 191,
        name_cn: "（后二）排五直选复式",
        name_en: "houerfushi",
        price: 1,
        bet_note: "从十、个位各选一个号码组成一注",
        bonus_note:
          "从十位、个位中选择一个2位数号码组成一注，所选号码与开奖号码的十位、个位相同，且顺序一致，即为中奖。",
        li_enable: 1,
        prize: "96.5000",
        max_multiple: 1,
        top_id: 68,
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
        isButton: true
      },
      "68-74-182": {
        id: 182,
        pid: 74,
        series_way_id: 182,
        name_cn: "（后二）排五直选单式",
        name_en: "houerdanshi",
        price: 1,
        bet_note: "手动输入号码，至少输入1个两位数号码",
        bonus_note:
          "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。",
        li_enable: 1,
        prize: "96.5000",
        max_multiple: 1,
        top_id: 68,
        top_name_cn: "二星",
        pname_cn: "直选",
        p_name_cn: "直选",
        type: "input",
        shortname: "exzhixdsh",
        isrx: 0
      },
      "68-75-187": {
        id: 187,
        pid: 75,
        series_way_id: 187,
        name_cn: "（前二）排五组选复式",
        name_en: "qianerfushi",
        price: 1,
        bet_note: "从0-9中任意选择2个或2个以上号码",
        bonus_note:
          "从0-9中共10个号码中选择2个号码，所选号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。",
        li_enable: 1,
        prize: "48.2500",
        max_multiple: 1,
        top_id: 68,
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
        isButton: true
      },
      "68-75-181": {
        id: 181,
        pid: 75,
        series_way_id: 181,
        name_cn: "（前二）排五组选单式",
        name_en: "qianerdanshi",
        price: 1,
        bet_note: "手动输入号码，至少输入1个两位数号码组成一注",
        bonus_note:
          "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。",
        li_enable: 1,
        prize: "48.2500",
        max_multiple: 1,
        top_id: 68,
        top_name_cn: "二星",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "input",
        shortname: "exzuxdsq",
        isrx: 0
      },
      "68-75-188": {
        id: 188,
        pid: 75,
        series_way_id: 188,
        name_cn: "（后二）排五组选复式",
        name_en: "houerfushi",
        price: 1,
        bet_note: "从0-9中任意选择2个或2个以上号码。",
        bonus_note:
          "从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限（不含对子号），即为中奖。",
        li_enable: 1,
        prize: "48.2500",
        max_multiple: 1,
        top_id: 68,
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
        isButton: true
      },
      "68-75-183": {
        id: 183,
        pid: 75,
        series_way_id: 183,
        name_cn: "（后二）排五组选单式",
        name_en: "houerdanshi",
        price: 1,
        bet_note: "手动输入号码，至少输入1个两位数号码",
        bonus_note:
          "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，顺序不限（不含对子号），即为中奖。",
        li_enable: 1,
        prize: "48.2500",
        max_multiple: 1,
        top_id: 68,
        top_name_cn: "二星",
        pname_cn: "组选",
        p_name_cn: "组选",
        type: "input",
        shortname: "exzhixdsh",
        isrx: 0
      },
      "69-76-194": {
        id: 194,
        pid: 76,
        series_way_id: 194,
        name_cn: "定位胆",
        name_en: "fushi",
        price: 1,
        bet_note:
          "在万位，千位，百位，十位，个位任意位置上任意选择1个或1个以上号码",
        bonus_note:
          "从万位，千位，百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。",
        li_enable: 1,
        prize: "9.6500",
        max_multiple: 2,
        top_id: 69,
        top_name_cn: "一星",
        pname_cn: "定位胆",
        p_name_cn: "定位胆",
        type: "digital",
        layout: [
          {
            title: "万位",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 0,
            tools: true,
            cols: 1
          },
          {
            title: "千位",
            no: "0|1|2|3|4|5|6|7|8|9",
            place: 0,
            tools: true,
            cols: 1
          },
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
        shortname: "dw",
        isrx: 0,
        isButton: true
      },
      "70-77-186": {
        id: 186,
        pid: 77,
        series_way_id: 186,
        name_cn: "前三一码不定位",
        name_en: "qiansanyimabudingwei",
        price: 1,
        bet_note: "从0-9中任意选择1个以上号码",
        bonus_note:
          "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的万位、千位、百位中包含所选号码，即为中奖。",
        li_enable: 1,
        prize: "3.5609",
        max_multiple: 5,
        top_id: 70,
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
        isButton: true
      },
      "70-77-196": {
        id: 196,
        pid: 77,
        series_way_id: 196,
        name_cn: "前三二码不定位",
        name_en: "qiansanermabudingwei",
        price: 1,
        bet_note: "从0-9中任意选择2个以上号码",
        bonus_note:
          "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位中同时包含所选的2个号码，即为中奖。",
        li_enable: 1,
        prize: "17.8704",
        max_multiple: 1,
        top_id: 70,
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
        isButton: true
      },
      "71-78-197": {
        id: 197,
        pid: 78,
        series_way_id: 197,
        name_cn: "前二大小单双",
        name_en: "qianerdaxiaodanshuang",
        price: 1,
        bet_note: "从万位、千位中的“大、小、单、双”中至少各选一个组成一注",
        bonus_note:
          "对万位和千位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。",
        li_enable: 1,
        prize: "3.8600",
        max_multiple: 5,
        top_id: 71,
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
      "71-78-198": {
        id: 198,
        pid: 78,
        series_way_id: 198,
        name_cn: "后二大小单双",
        name_en: "houerdaxiaodanshuang",
        price: 1,
        bet_note: "从十位、个位中的“大、小、单、双”中至少各选一个组成一注",
        bonus_note:
          "对十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。",
        li_enable: 1,
        prize: "3.8600",
        max_multiple: 5,
        top_id: 71,
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
  