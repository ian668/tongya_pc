export default function getSscLayout() {
  return {
    "2-4-68": {
      id: 68,
      pid: 4,
      series_way_id: 68,
      name_cn: "直选复式",
      name_en: "fushi",
      bet_note: "从个、十、百、千、万位各选一个号码组成一注",
      bonus_note:
        "从万位、千位、百位、十位、个位中各选择一个号码组成一注，所选号码与开奖号码全部相同，且顺序一致，即为中奖。",
      top_id: 2,
      top_name_cn: "五星",
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
        },
        {
          title: "十位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 3,
          tools: true,
          cols: 1
        },
        {
          title: "个位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 4,
          tools: true,
          cols: 1
        }
      ],
      shortname: "wxzhixfs",
      isrx: 0,
      isButton: true
    },
    "2-4-7": {
      id: 7,
      pid: 4,
      series_way_id: 7,
      name_cn: "直选单式",
      name_en: "danshi",

      bet_note: "手动输入号码，至少输入1个五位数号码组成一注",
      bonus_note:
        "手动输入一个5位数号码组成一注，所选号码的万位、千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
      top_id: 2,
      top_name_cn: "五星",
      pname_cn: "直选",
      p_name_cn: "直选",
      type: "input",
      shortname: "wxzhixds",
      isrx: 0
    },
    "2-4-15": {
      id: 15,
      pid: 4,
      series_way_id: 15,
      name_cn: "直选组合",
      name_en: "zuhe",

      bet_note: "从个、十、百、千、万位各选一个号码组成五注",
      bonus_note:
        "从万位、千位、百位、十位、个位中各选一个号码组成1-5星的组合，共五注，所选号码的个位与开奖号码全部相同，则中1个5等奖；所选号码的个位、十位与开奖号码相同，则中1个5等奖以及1个4等奖，依此类推，最高可中5个奖。",
      top_id: 2,
      top_name_cn: "五星",
      pname_cn: "直选",
      p_name_cn: "直选",
      shortname: "wxzhixzh",
      isrx: 0,
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
        },
        {
          title: "十位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 3,
          tools: true,
          cols: 1
        },
        {
          title: "个位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 4,
          tools: true,
          cols: 1
        }
      ],
      isButton: true
    },
    "2-5-32": {
      id: 32,
      pid: 5,
      series_way_id: 32,
      name_cn: "组选120",
      name_en: "zuxuan120",

      bet_note: "从0-9中选择5个号码组成一注",
      bonus_note:
        "从0-9中任意选择5个号码组成一注，所选号码与开奖号码的万位、千位、百位、十位、个位相同，顺序不限，即为中奖。",
      top_id: 2,
      top_name_cn: "五星",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "digital",
      layout: [
        {
          title: "组选120",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1,
          minchosen: 5
        }
      ],
      shortname: "wxzux120",
      isrx: 0,
      isButton: true
    },
    "2-5-31": {
      id: 31,
      pid: 5,
      series_way_id: 31,
      name_cn: "组选60",
      name_en: "zuxuan60",

      bet_note: "从“二重号”选择一个号码，“单号”中选择三个号码组成一注",
      bonus_note:
        "选择1个“二重号”和3个单号号码组成一注，所选的单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。",
      top_id: 2,
      top_name_cn: "五星",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "digital",
      layout: [
        {
          title: "二重号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1,
          minchosen: 1
        },
        {
          title: "单　号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 1,
          tools: true,
          cols: 1,
          minchosen: 3
        }
      ],
      isButton: true,
      shortname: "wxzux60",
      isrx: 0
    },
    "2-5-30": {
      id: 30,
      pid: 5,
      series_way_id: 30,
      name_cn: "组选30",
      name_en: "zuxuan30",

      bet_note: "从“二重号”选择两个号码，“单号”中选择一个号码组成一注",
      bonus_note:
        "选择2个二重号和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选的2个二重号码分别在开奖号码中出现了2次，即为中奖",
      top_id: 2,
      top_name_cn: "五星",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "digital",
      layout: [
        {
          title: "二重号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1,
          minchosen: 2
        },
        {
          title: "单　号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 1,
          tools: true,
          cols: 1,
          minchosen: 1
        }
      ],
      shortname: "wxzux30",
      isrx: 0,
      isButton: true
    },
    "2-5-29": {
      id: 29,
      pid: 5,
      series_way_id: 29,
      name_cn: "组选20",
      name_en: "zuxuan20",

      bet_note: "从“三重号”选择一个号码，“单号”中选择两个号码组成一注",
      bonus_note:
        "选择1个三重号码和2个单号号码组成一注，所选的单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。",
      top_id: 2,
      top_name_cn: "五星",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "digital",
      layout: [
        {
          title: "三重号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1,
          minchosen: 1
        },
        {
          title: "单　号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 1,
          tools: true,
          cols: 1,
          minchosen: 2
        }
      ],
      noBigIndex: 5,
      shortname: "wxzux20",
      isrx: 0,
      isButton: true
    },
    "2-5-28": {
      id: 28,
      pid: 5,
      series_way_id: 28,
      name_cn: "组选10",
      name_en: "zuxuan10",

      bet_note: "从“三重号”选择一个号码，“二重号”中选择一个号码组成一注",
      bonus_note:
        "选择1个三重号码和1个二重号码，所选三重号码在开奖号码中出现3次，并且所选二重号码在开奖号码中出现了2次，即为中奖。",
      top_id: 2,
      top_name_cn: "五星",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "digital",
      layout: [
        {
          title: "三重号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          cols: 1,
          tools: true,
          minchosen: 1
        },
        {
          title: "二重号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 1,
          cols: 1,
          tools: true,
          minchosen: 1
        }
      ],
      shortname: "wxzux10",
      isrx: 0,
      isButton: true
    },
    "2-5-27": {
      id: 27,
      pid: 5,
      series_way_id: 27,
      name_cn: "组选5",
      name_en: "zuxuan5",

      bet_note: "从“四重号”选择一个号码，“单号”中选择一个号码组成一注",
      bonus_note:
        "选择1个四重号码和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选四重号码在开奖号码中出现了4次，即为中奖。",
      top_id: 2,
      top_name_cn: "五星",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "digital",
      layout: [
        {
          title: "四重号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          cols: 1,
          tools: true,
          minchosen: 1
        },
        {
          title: "单　号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 1,
          cols: 1,
          tools: true,
          minchosen: 1
        }
      ],
      shortname: "wxzux5",
      isrx: 0,
      isButton: true
    },
    "2-105-414": {
      id: 414,
      pid: 105,
      series_way_id: 414,
      name_cn: "总和",
      name_en: "zonghe",

      bet_note: null,
      bonus_note: null,
      top_id: 2,
      top_name_cn: "五星",
      pname_cn: "特殊",
      p_name_cn: "特殊",
      type: "digital",
      layout: [
        {
          title: "总和",
          no: "总和大|总和小|总和单|总和双",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "zonghe",
      isrx: 0,
      isButton: true
    },
    "3-6-67": {
      id: 67,
      pid: 6,
      series_way_id: 67,
      name_cn: "直选复式",
      name_en: "fushi",

      bet_note: "从个、十、百、千位各选一个号码组成一注",
      bonus_note:
        "从千位、百位、十位、个位中各选择一个号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。",
      top_id: 3,
      top_name_cn: "四星",
      pname_cn: "直选",
      p_name_cn: "直选",
      type: "digital",
      layout: [
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
          place: 1,
          tools: true,
          cols: 1
        },
        {
          title: "十位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 2,
          tools: true,
          cols: 1
        },
        {
          title: "个位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 3,
          tools: true,
          cols: 1
        }
      ],
      shortname: "sixzhixfsh",
      isrx: 0,
      isButton: true
    },
    "3-6-6": {
      id: 6,
      pid: 6,
      series_way_id: 6,
      name_cn: "直选单式",
      name_en: "danshi",

      bet_note: "手动输入号码，至少输入1个四位数号码组成一注",
      bonus_note:
        "手动输入一个4位数号码组成一注，所选号码的千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
      top_id: 3,
      top_name_cn: "四星",
      pname_cn: "直选",
      p_name_cn: "直选",
      shortname: "sixzhixdsh",
      isrx: 0,
      type: "input"
    },
    "3-6-79": {
      id: 79,
      pid: 6,
      series_way_id: 79,
      name_cn: "直选组合",
      name_en: "zuhe",

      bet_note: "从个、十、百、千位各选一个号码组成四注",
      bonus_note:
        "从千位、百位、十位、个位中至少各选一个号码组成1-4星的组合，共四注，所选号码的个位与开奖号码相同，则中1个4等奖；所选号码的个位、十位与开奖号码相同，则中1个4等奖以及1个3等奖，依此类推，最高可中4个奖。",
      top_id: 3,
      top_name_cn: "四星",
      pname_cn: "直选",
      p_name_cn: "直选",
      type: "digital",
      layout: [
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
          place: 1,
          tools: true,
          cols: 1
        },
        {
          title: "十位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 2,
          tools: true,
          cols: 1
        },
        {
          title: "个位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 3,
          tools: true,
          cols: 1
        }
      ],
      shortname: "sixzhixzhh",
      isrx: 0,
      isButton: true
    },
    "3-7-26": {
      id: 26,
      pid: 7,
      series_way_id: 26,
      name_cn: "组选24",
      name_en: "zuxuan24",

      bet_note: "从0-9中选择4个号码组成一注",
      bonus_note:
        "从0-9中任意选择4个号码组成一注，所选号码与开奖号码的千位、百位、十位、个位相同，且顺序不限，即为中奖",
      top_id: 3,
      top_name_cn: "四星",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "digital",
      layout: [
        {
          title: "组选24",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1,
          minchosen: 4
        }
      ],
      shortname: "sixzux24h",
      isrx: 0,
      isButton: true
    },
    "3-7-25": {
      id: 25,
      pid: 7,
      series_way_id: 25,
      name_cn: "组选12",
      name_en: "zuxuan12",

      bet_note: "从“二重号”选择一个号码，“单号”中选择两个号码组成一注",
      bonus_note:
        "选择1个二重号码和2个单号号码组成一注，所选单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。",
      top_id: 3,
      top_name_cn: "四星",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "digital",
      layout: [
        {
          title: "二重号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1,
          minchosen: 1
        },
        {
          title: "单　号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 1,
          cols: 1,
          tools: true,
          minchosen: 2
        }
      ],
      shortname: "sixzux12h",
      isrx: 0,
      isButton: true
    },
    "3-7-24": {
      id: 24,
      pid: 7,
      series_way_id: 24,
      name_cn: "组选6",
      name_en: "zuxuan6",

      bet_note: "从“二重号”选择两个号码组成一注",
      bonus_note:
        "选择2个二重号码组成一注，所选的2个二重号码在开奖号码中分别出现了2次，即为中奖。",
      top_id: 3,
      top_name_cn: "四星",
      pname_cn: "组选",
      p_name_cn: "组选",
      layout: [
        {
          title: "二重号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1,
          minchosen: 2
        }
      ],
      shortname: "sixzux6h",
      isrx: 0,
      isButton: true
    },
    "3-7-23": {
      id: 23,
      pid: 7,
      series_way_id: 23,
      name_cn: "组选4",
      name_en: "zuxuan4",

      bet_note: "从“三重号”选择一个号码，“单号”中选择两个号码组成一注",
      bonus_note:
        "选择1个三重号码和1个单号号码组成一注，所选单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。",
      top_id: 3,
      top_name_cn: "四星",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "digital",
      layout: [
        {
          title: "三重号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1,
          minchosen: 1
        },
        {
          title: "单　号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 1,
          tools: true,
          cols: 1,
          minchosen: 1
        }
      ],
      shortname: "sixzux4h",
      isrx: 0,
      isButton: true
    },
    "8-10-65": {
      id: 65,
      pid: 10,
      series_way_id: 65,
      name_cn: "直选复式",
      name_en: "fushi",

      bet_note: "从万、千、百位各选一个号码组成一注",
      bonus_note:
        "从万位、千位、百位中选择一个3位数号码组成一注，所选号码与开奖号码的前3位相同，且顺序一致，即为中奖。",
      top_id: 8,
      top_name_cn: "前三",
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
    "8-10-1": {
      id: 1,
      pid: 10,
      series_way_id: 1,
      name_cn: "直选单式",
      name_en: "danshi",

      bet_note: "手动输入号码，至少输入1个三位数号码组成一注",
      bonus_note:
        "手动输入一个3位数号码组成一注，所选号码的万位、千位、百位与开奖号码相同且顺序一致，即为中奖。",
      top_id: 8,
      top_name_cn: "前三",
      pname_cn: "直选",
      p_name_cn: "直选",
      type: "input",
      shortname: "sxzhixdsq",
      isrx: 0
    },
    "8-10-71": {
      id: 71,
      pid: 10,
      series_way_id: 71,
      name_cn: "直选和值",
      name_en: "hezhi",

      bet_note: "从0-27中任意选择1个或1个以上号码。",
      bonus_note:
        "所选数值等于开奖号码的万位、千位、百位三个数字相加之和，即为中奖。",
      top_id: 8,
      top_name_cn: "前三",
      pname_cn: "直选",
      p_name_cn: "直选",
      type: "digital",
      layout: [
        {
          title: "和值",
          no:
            "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      isButton: false,
      shortname: "sxzhixhzq",
      isrx: 0
    },
    "8-10-60": {
      id: 60,
      pid: 10,
      series_way_id: 60,
      name_cn: "直选跨度",
      name_en: "kuadu",

      bet_note: "从0-9中选择1个号码",
      bonus_note:
        "所选数值等于开奖号码的前3位最大与最小数字相减之差，即为中奖。",
      top_id: 8,
      top_name_cn: "前三",
      pname_cn: "直选",
      p_name_cn: "直选",
      type: "digital",
      layout: [
        {
          title: "跨度",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1
        }
      ],
      shortname: "ZXKD",
      isrx: 0,
      isButton: true
    },
    "8-10-14": {
      id: 14,
      pid: 10,
      series_way_id: 14,
      name_cn: "直选组合",
      name_en: "zuhe",

      bet_note: "从万、千、百位各选一个号码组成三注",
      bonus_note:
        "从万位、千位、百位中至少各选择一个号码组成1-3星的组合共三注，当百位号码与开奖号码相同，则中1个3等奖；如果百位与千位号码与开奖号码相同，则中1个3等奖以及1个2等奖，依此类推，最高可中3个奖。",
      top_id: 8,
      top_name_cn: "前三",
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
      shortname: "sxqsanzh",
      isrx: 0,
      isButton: true
    },
    "8-11-16": {
      id: 16,
      pid: 11,
      series_way_id: 16,
      name_cn: "组三",
      name_en: "zusan",

      bet_note: "从0-9中任意选择2个或2个以上号码",
      bonus_note:
        "从0-9中选择2个数字组成两注，所选号码与开奖号码的万位、千位、百位相同，且顺序不限，即为中奖。",
      top_id: 8,
      top_name_cn: "前三",
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
    "8-11-17": {
      id: 17,
      pid: 11,
      series_way_id: 17,
      name_cn: "组六",
      name_en: "zuliu",

      bet_note: "从0-9中任意选择3个或3个以上号码",
      bonus_note:
        "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。",
      top_id: 8,
      top_name_cn: "前三",
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
    "8-11-13": {
      id: 13,
      pid: 11,
      series_way_id: 13,
      name_cn: "混合组选",
      name_en: "hunhezuxuan",

      bet_note: "手动输入号码，至少输入1个三位数号码",
      bonus_note:
        "手动输入组三或组六号码，3个数字为一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖",
      top_id: 8,
      top_name_cn: "前三",
      pname_cn: "组选",
      p_name_cn: "组选",
      shortname: "sxhhzxq",
      isrx: 0,
      type: "input"
    },
    "8-11-75": {
      id: 75,
      pid: 11,
      series_way_id: 75,
      name_cn: "组选和值",
      name_en: "hezhi",

      bet_note: "从1-26中选择1个号码",
      bonus_note:
        "所选数值等于开奖号码万位、千位、百位三个数字相加之和(不含豹子号)，即为中奖。",
      top_id: 8,
      top_name_cn: "前三",
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
    "8-11-2": {
      id: 2,
      pid: 11,
      series_way_id: 2,
      name_cn: "组三单式",
      name_en: "zusandanshi",

      bet_note:
        "手动输入号码，至少输入 1 个三位数号码。(三个数字当中有二个数字相同)",
      bonus_note:
        "手动输入一个3位数号码组成一注(不含豹子号)，开奖号码的万位、千位、百位符合后三组三为中奖。",
      top_id: 8,
      top_name_cn: "前三",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "input",
      shortname: "ZUS",
      isrx: 0
    },
    "8-11-3": {
      id: 3,
      pid: 11,
      series_way_id: 3,
      name_cn: "组六单式",
      name_en: "zuliudanshi",

      bet_note: "手动输入号码，至少输入 1 个三位数号码。(三个数字全不相同)",
      bonus_note:
        "手动输入一个3位数号码组成一注(不含豹子号)，开奖号码的万位、千位、百位符合后三组六为中奖。",
      top_id: 8,
      top_name_cn: "前三",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "input",
      shortname: "ZUL",
      isrx: 0
    },
    "8-11-64": {
      id: 64,
      pid: 11,
      series_way_id: 64,
      name_cn: "包胆",
      name_en: "baodan",

      bet_note: "从0-9中选择1个号码",
      bonus_note:
        "从0-9中任意选择1个包胆号码，开奖号码的万位、千位、百位中任意1位只要和所选包胆号码相同(不含豹子号)，即为中奖。",
      top_id: 8,
      top_name_cn: "前三",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "digital",
      layout: [
        {
          title: "包胆",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "ZU3BD",
      maxcodecount: 1,
      isrx: 0,
      isButton: false
    },
    "8-12-33": {
      id: 33,
      pid: 12,
      series_way_id: 33,
      name_cn: "和值尾数",
      name_en: "hezhiweishu",

      bet_note: "从0-9中选择1个号码",
      bonus_note:
        "所选数值等于开奖号码的万位、千位、百位三个数字相加之和的尾数，即为中奖。",
      top_id: 8,
      top_name_cn: "前三",
      pname_cn: "其它",
      p_name_cn: "其它",
      type: "digital",
      layout: [
        {
          title: "和值尾数",
          no: "0|1|2|3|4|5|6|7|8|9",
          tools: true,
          place: 0,
          cols: 1
        }
      ],
      shortname: "HZWS",
      isrx: 0,
      isButton: true
    },
    "8-12-48": {
      id: 48,
      pid: 12,
      series_way_id: 48,
      name_cn: "特殊号码",
      name_en: "teshuhaoma",

      bet_note: "选择一个号码形态",
      bonus_note:
        "所选的号码特殊属性和开奖号码前3位的属性一致，即为中奖。其中：1.豹子号的万、千、百位出现三个相同号码； 2.顺子号的万、千、百位不分顺序；3.对子号指的是开奖号码的前三位当中，任意2位数字相同的三位数号码。",
      top_id: 8,
      top_name_cn: "前三",
      pname_cn: "其它",
      p_name_cn: "其它",
      type: "digital",
      layout: [
        {
          title: "特殊号码",
          no: "豹子|顺子|对子",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "TSH",
      isrx: 0,
      isButton: false
    },
    "61-62-142": {
      id: 142,
      pid: 62,
      series_way_id: 142,
      name_cn: "直选复式",
      name_en: "fushi",

      bet_note: "从千、百、十位各选一个号码组成一注",
      bonus_note:
        "从千位、百位、十位中选择一个3位数号码组成一注，所选号码与开奖号码的中间3位相同，且顺序一致，即为中奖。",
      top_id: 61,
      top_name_cn: "中三",
      pname_cn: "直选",
      p_name_cn: "直选",
      type: "digital",
      layout: [
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
          place: 1,
          tools: true,
          cols: 1
        },
        {
          title: "十位",
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
    "61-62-143": {
      id: 143,
      pid: 62,
      series_way_id: 143,
      name_cn: "直选单式",
      name_en: "danshi",

      bet_note: "手动输入号码，至少输入1个三位数号码组成一注",
      bonus_note:
        "手动输入一个3位数号码组成一注，所选号码的千位、百位、十位与开奖号码相同且顺序一致，即为中奖。",
      top_id: 61,
      top_name_cn: "中三",
      pname_cn: "直选",
      p_name_cn: "直选",
      shortname: "sxzhixdsq",
      isrx: 0,
      type: "input"
    },
    "61-62-145": {
      id: 145,
      pid: 62,
      series_way_id: 145,
      name_cn: "直选和值",
      name_en: "hezhi",

      bet_note: "从0-27中任意选择1个或1个以上号码。",
      bonus_note:
        "所选数值等于开奖号码的千位、百位、十位三个数字相加之和，即为中奖。",
      top_id: 61,
      top_name_cn: "中三",
      pname_cn: "直选",
      p_name_cn: "直选",
      type: "digital",
      layout: [
        {
          title: "和值",
          no:
            "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "sxzhixhzq",
      isrx: 0,
      isButton: false
    },
    "61-62-147": {
      id: 147,
      pid: 62,
      series_way_id: 147,
      name_cn: "直选跨度",
      name_en: "kuadu",

      bet_note: "从0-9中选择1个号码",
      bonus_note:
        "所选数值等于开奖号码的中间3位最大与最小数字相减之差，即为中奖。",
      top_id: 61,
      top_name_cn: "中三",
      pname_cn: "直选",
      p_name_cn: "直选",
      type: "digital",
      layout: [
        {
          title: "跨度",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1
        }
      ],
      shortname: "ZXKD",
      isrx: 0,
      isButton: true
    },
    "61-62-148": {
      id: 148,
      pid: 62,
      series_way_id: 148,
      name_cn: "直选组合",
      name_en: "zuhe",

      bet_note: "从千、百、十位各选一个号码组成三注",
      bonus_note:
        "从千位、百位、十位中至少各选择一个号码组成1-3星的组合共三注，当十位号码与开奖号码相同，则中1个3等奖；如果十位与百位号码与开奖号码相同，则中1个3等奖以及1个2等奖，依此类推，最高可中3个奖。",
      top_id: 61,
      top_name_cn: "中三",
      pname_cn: "直选",
      p_name_cn: "直选",
      layout: [
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
          place: 1,
          tools: true,
          cols: 1
        },
        {
          title: "十位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 2,
          tools: true,
          cols: 1
        }
      ],
      shortname: "sxqsanzh",
      isrx: 0,
      isButton: true
    },
    "61-63-150": {
      id: 150,
      pid: 63,
      series_way_id: 150,
      name_cn: "组三",
      name_en: "zusan",

      bet_note: "从0-9中任意选择2个或2个以上号码",
      bonus_note:
        "从0-9中选择2个数字组成两注，所选号码与开奖号码的千位、百位、十位相同，且顺序不限，即为中奖。",
      top_id: 61,
      top_name_cn: "中三",
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
    "61-63-152": {
      id: 152,
      pid: 63,
      series_way_id: 152,
      name_cn: "组六",
      name_en: "zuliu",

      bet_note: "从0-9中任意选择3个或3个以上号码",
      bonus_note:
        "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖。",
      top_id: 61,
      top_name_cn: "中三",
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
    "61-63-144": {
      id: 144,
      pid: 63,
      series_way_id: 144,
      name_cn: "组三单式",
      name_en: "zusandanshi",

      bet_note:
        "手动输入号码，至少输入 1 个三位数号码。(三个数字当中有二个数字相同)",
      bonus_note:
        "手动输入组三号码，3个数字为一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖",
      top_id: 61,
      top_name_cn: "中三",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "input",
      shortname: "ZUS",
      isrx: 0
    },
    "61-63-146": {
      id: 146,
      pid: 63,
      series_way_id: 146,
      name_cn: "组六单式",
      name_en: "zuliudanshi",

      bet_note: "手动输入号码，至少输入 1 个三位数号码。(三个数字全不相同)",
      bonus_note:
        "手动输入一个3位数号码组成一注(不含豹子号)，开奖号码的千位、百位、十位符合后三组六为中奖。",
      top_id: 61,
      top_name_cn: "中三",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "input",
      shortname: "ZUL",
      isrx: 0
    },
    "61-63-154": {
      id: 154,
      pid: 63,
      series_way_id: 154,
      name_cn: "混合组选",
      name_en: "hunhezuxuan",

      bet_note: "手动输入号码，至少输入1个三位数号码",
      bonus_note:
        "手动输入组三或组六号码，3个数字为一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖",
      top_id: 61,
      top_name_cn: "中三",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "input",
      shortname: "sxhhzxq",
      isrx: 0
    },
    "61-63-160": {
      id: 160,
      pid: 63,
      series_way_id: 160,
      name_cn: "组选和值",
      name_en: "hezhi",

      bet_note: "从1-26中选择1个号码",
      bonus_note:
        "所选数值等于开奖号码千位、百位、十位三个数字相加之和(不含豹子号)，即为中奖。",
      top_id: 61,
      top_name_cn: "中三",
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
    "61-63-153": {
      id: 153,
      pid: 63,
      series_way_id: 153,
      name_cn: "包胆",
      name_en: "baodan",

      bet_note: "从0-9中选择1个号码",
      bonus_note:
        "从0-9中任意选择1个包胆号码，开奖号码的千位、百位、十位中任意1位只要和所选包胆号码相同(不含豹子号)，即为中奖。",
      top_id: 61,
      top_name_cn: "中三",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "digital",
      layout: [
        {
          title: "包胆",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "ZU3BD",
      maxcodecount: 1,
      isrx: 0,
      isButton: false
    },
    "61-64-149": {
      id: 149,
      pid: 64,
      series_way_id: 149,
      name_cn: "和值尾数",
      name_en: "hezhiweishu",

      bet_note: "从0-9中选择1个号码",
      bonus_note:
        "所选数值等于开奖号码的千位、百位、十位三个数字相加之和的尾数，即为中奖。",
      top_id: 61,
      top_name_cn: "中三",
      pname_cn: "其它",
      p_name_cn: "其它",
      type: "digital",
      layout: [
        {
          title: "和值尾数",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1
        }
      ],
      shortname: "HZWS",
      isrx: 0,
      isButton: true
    },
    "61-64-151": {
      id: 151,
      pid: 64,
      series_way_id: 151,
      name_cn: "特殊号码",
      name_en: "teshuhaoma",

      bet_note: "选择一个号码形态",
      bonus_note:
        "所选的号码特殊属性和开奖号码中间3位的属性一致，即为中奖。其中：1.豹子号的千、百、十位出现三个相同号码； 2.顺子号的千、百、十位不分顺序；3.对子号指的是开奖号码的中间三位当中，任意2位数字相同的三位数号码。",
      top_id: 61,
      top_name_cn: "中三",
      pname_cn: "其它",
      p_name_cn: "其它",
      type: "digital",
      layout: [
        {
          title: "特殊号码",
          no: "豹子|顺子|对子",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "TSH",
      isrx: 0,
      isButton: false
    },
    "1-13-69": {
      id: 69,
      pid: 13,
      series_way_id: 69,
      name_cn: "直选复式",
      name_en: "fushi",

      bet_note: "从个、十、百位各选一个号码组成一注",
      bonus_note:
        "从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码后3位相同，且顺序一致，即为中奖。",
      top_id: 1,
      top_name_cn: "后三",
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
          place: 2,
          tools: true,
          cols: 1
        }
      ],
      shortname: "sxzhixfsh",
      isrx: 0,
      isButton: true
    },
    "1-13-8": {
      id: 8,
      pid: 13,
      series_way_id: 8,
      name_cn: "直选单式",
      name_en: "danshi",

      bet_note: "手动输入号码，至少输入1个三位数号码组成一注",
      bonus_note:
        "手动输入一个3位数号码组成一注，所选号码的百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
      top_id: 1,
      top_name_cn: "后三",
      pname_cn: "直选",
      p_name_cn: "直选",
      type: "input",
      shortname: "sxzhixdsh",
      isrx: 0
    },
    "1-13-73": {
      id: 73,
      pid: 13,
      series_way_id: 73,
      name_cn: "直选和值",
      name_en: "hezhi",

      bet_note: "从0-27中任意选择1个或1个以上号码",
      bonus_note:
        "所选数值等于开奖号码的百位、十位、个位三个数字相加之和，即为中奖。",
      top_id: 1,
      top_name_cn: "后三",
      pname_cn: "直选",
      p_name_cn: "直选",
      type: "digital",
      layout: [
        {
          title: "和值",
          no:
            "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "sxzhixhzh",
      isrx: 0,
      isButton: false
    },
    "1-13-62": {
      id: 62,
      pid: 13,
      series_way_id: 62,
      name_cn: "直选跨度",
      name_en: "kuadu",

      bet_note: "从0-9中选择1个号码。",
      bonus_note:
        "所选数值等于开奖号码的后3位最大与最小数字相减之差，即为中奖。",
      top_id: 1,
      top_name_cn: "后三",
      pname_cn: "直选",
      p_name_cn: "直选",
      type: "digital",
      layout: [
        {
          title: "跨度",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1
        }
      ],
      shortname: "ZXKD",
      isrx: 0,
      isButton: true
    },
    "1-13-82": {
      id: 82,
      pid: 13,
      series_way_id: 82,
      name_cn: "直选组合",
      name_en: "zuhe",

      bet_note: "从个、十、百位各选一个号码组成三注",
      bonus_note:
        "从百位、十位、个位中至少各选择一个号码组成1-3星的组合共三注，当个位号码与开奖号码相同，则中1个3等奖；如果个位与十位号码与开奖号码相同，则中1个3等奖以及1个2等奖，依此类推，最高可中3个奖。",
      top_id: 1,
      top_name_cn: "后三",
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
          place: 2,
          tools: true,
          cols: 1
        }
      ],
      shortname: "sxhsanzh",
      isrx: 0,
      isButton: true
    },
    "1-9-49": {
      id: 49,
      pid: 9,
      series_way_id: 49,
      name_cn: "组三",
      name_en: "zusan",

      bet_note: "从0-9中任意选择2个或2个以上号码",
      bonus_note:
        "从0-9中选择2个数字组成两注，所选号码与开奖号码的百位、十位、个位相同，且顺序不限，即为中奖。",
      top_id: 1,
      top_name_cn: "后三",
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
      shortname: "sxzuxzsh",
      isrx: 0,
      isButton: true
    },
    "1-9-50": {
      id: 50,
      pid: 9,
      series_way_id: 50,
      name_cn: "组六",
      name_en: "zuliu",

      bet_note: "从0-9中任意选择3个或3个以上号码。",
      bonus_note:
        "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。",
      top_id: 1,
      top_name_cn: "后三",
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
      shortname: "sxzuxzlh",
      isrx: 0,
      isButton: true
    },
    "1-9-81": {
      id: 81,
      pid: 9,
      series_way_id: 81,
      name_cn: "混合组选",
      name_en: "hunhezuxuan",

      bet_note: "手动输入号码，至少输入1个三位数号码。",
      bonus_note:
        "手动输入组三或组六号码，3个数字为一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。",
      top_id: 1,
      top_name_cn: "后三",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "input",
      shortname: "sxhhzxh",
      isrx: 0
    },
    "1-9-80": {
      id: 80,
      pid: 9,
      series_way_id: 80,
      name_cn: "组选和值",
      name_en: "hezhi",

      bet_note: "从1-26中选择1个号码",
      bonus_note:
        "所选数值等于开奖号码百位、十位、个位三个数字相加之和(不含豹子号)，即为中奖。",
      top_id: 1,
      top_name_cn: "后三",
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
    "1-9-9": {
      id: 9,
      pid: 9,
      series_way_id: 9,
      name_cn: "组三单式",
      name_en: "zusandanshi",

      bet_note:
        "手动输入号码，至少输入 1 个三位数号码。(三个数字当中有二个数字相同)",
      bonus_note:
        "手动输入组三号码，3个数字为一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖",
      top_id: 1,
      top_name_cn: "后三",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "input",
      shortname: "ZUS",
      isrx: 0
    },
    "1-9-10": {
      id: 10,
      pid: 9,
      series_way_id: 10,
      name_cn: "组六单式",
      name_en: "zuliudanshi",

      bet_note: "手动输入号码，至少输入 1 个三位数号码。(三个数字全不相同)",
      bonus_note:
        "手动输入组六号码，3个数字为一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖",
      top_id: 1,
      top_name_cn: "后三",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "input",
      shortname: "ZUL",
      isrx: 0
    },
    "1-9-83": {
      id: 83,
      pid: 9,
      series_way_id: 83,
      name_cn: "包胆",
      name_en: "baodan",

      bet_note: "从0-9中选择1个号码。",
      bonus_note:
        "从0-9中任意选择1个包胆号码，开奖号码的百位、十位、个位中任意1位与所选包胆号码相同(不含豹子号)，即为中奖。",
      top_id: 1,
      top_name_cn: "后三",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "digital",
      layout: [
        {
          title: "包胆",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "ZU3BD",
      maxcodecount: 1,
      isrx: 0,
      isButton: false
    },
    "1-14-54": {
      id: 54,
      pid: 14,
      series_way_id: 54,
      name_cn: "和值尾数",
      name_en: "hezhiweishu",

      bet_note: "从0-9中选择1个号码",
      bonus_note:
        "所选数值等于开奖号码的百位、十位、个位三个数字相加之和的尾数，即为中奖。",
      top_id: 1,
      top_name_cn: "后三",
      pname_cn: "其它",
      p_name_cn: "其它",
      type: "digital",
      layout: [
        {
          title: "和值尾数",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          cols: 1,
          tools: true
        }
      ],
      shortname: "HZWS",
      isrx: 0,
      isButton: true
    },
    "1-14-57": {
      id: 57,
      pid: 14,
      series_way_id: 57,
      name_cn: "特殊号码",
      name_en: "teshuhaoma",

      bet_note: "选择一个号码形态",
      bonus_note:
        "所选的号码特殊属性和开奖号码后3位的属性一致，即为中奖。其中：1.豹子号的个、十、百位出现三个相同号码；2.顺子号的个、十、百位不分顺序；3.对子号指的是开奖号码的后三位当中，任意2位数字相同的三位数号码。",
      top_id: 1,
      top_name_cn: "后三",
      pname_cn: "其它",
      p_name_cn: "其它",
      type: "digital",
      layout: [
        {
          title: "特殊号码",
          no: "豹子|顺子|对子",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "TSH",
      isrx: 0,
      isButton: false
    },
    "15-16-70": {
      id: 70,
      pid: 16,
      series_way_id: 70,
      name_cn: "后二复式",
      name_en: "houerfushi",
      bet_note: "从十、个位各选一个号码组成一注",
      bonus_note:
        "从十位、个位中选择一个2位数号码组成一注，所选号码与开奖号码的十位、个位相同，且顺序一致，即为中奖。",
      top_id: 15,
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
    "15-16-11": {
      id: 11,
      pid: 16,
      series_way_id: 11,
      name_cn: "后二单式",
      name_en: "houerdanshi",

      bet_note: "手动输入号码，至少输入1个两位数号码",
      bonus_note:
        "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。",
      top_id: 15,
      top_name_cn: "二星",
      pname_cn: "直选",
      p_name_cn: "直选",
      type: "input",
      shortname: "exzhixdsh",
      isrx: 0
    },
    "15-16-74": {
      id: 74,
      pid: 16,
      series_way_id: 74,
      name_cn: "后二和值",
      name_en: "houerhezhi",

      bet_note: "从0-18中任意选择1个或1个以上号码",
      bonus_note:
        "所选数值等于开奖号码的十位、个位二个数字相加之和，即为中奖。",
      top_id: 15,
      top_name_cn: "二星",
      pname_cn: "直选",
      p_name_cn: "直选",
      type: "digital",
      layout: [
        {
          title: "和值",
          no: "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      isButton: false,
      shortname: "exzhixhzh",
      isrx: 0
    },
    "15-16-63": {
      id: 63,
      pid: 16,
      series_way_id: 63,
      name_cn: "后二跨度",
      name_en: "houerkuadu",

      bet_note: "从0-9中任意选择1个号码 ",
      bonus_note:
        "所选数值等于开奖号码的后2位最大与最小数字相减之差，即为中奖。",
      top_id: 15,
      top_name_cn: "二星",
      pname_cn: "直选",
      p_name_cn: "直选",
      type: "digital",
      layout: [
        {
          title: "跨度",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1
        }
      ],
      shortname: "ZXKD2",
      isrx: 0,
      isButton: true
    },
    "15-16-66": {
      id: 66,
      pid: 16,
      series_way_id: 66,
      name_cn: "前二复式",
      name_en: "qianerfushi",

      bet_note: "从万、千位各选一个号码组成一注",
      bonus_note:
        "从万位、千位中选择一个2位数号码组成一注，所选号码与开奖号码的万位、千位相同，且顺序一致，即为中奖。",
      top_id: 15,
      top_name_cn: "二星",
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
        }
      ],
      shortname: "exzhixfsq",
      isrx: 0,
      isButton: true
    },
    "15-16-4": {
      id: 4,
      pid: 16,
      series_way_id: 4,
      name_cn: "前二单式",
      name_en: "qianerdanshi",

      bet_note: "手动输入号码，至少输入1个两位数号码",
      bonus_note:
        "手动输入一个2位数号码组成一注，所选号码的万位、千位与开奖号码相同，且顺序一致，即为中奖。",
      top_id: 15,
      top_name_cn: "二星",
      pname_cn: "直选",
      p_name_cn: "直选",
      type: "input",
      shortname: "exzhixdsq",
      isrx: 0
    },
    "15-16-72": {
      id: 72,
      pid: 16,
      series_way_id: 72,
      name_cn: "前二和值",
      name_en: "qianerhezhi",

      bet_note: "从0-18中任意选择1个或1个以上号码",
      bonus_note:
        "所选数值等于开奖号码的万位、千位二个数字相加之和，即为中奖。",
      top_id: 15,
      top_name_cn: "二星",
      pname_cn: "直选",
      p_name_cn: "直选",
      type: "digital",
      layout: [
        {
          title: "和值",
          no: "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "exzhixhzq",
      isrx: 0,
      isButton: false
    },
    "15-16-61": {
      id: 61,
      pid: 16,
      series_way_id: 61,
      name_cn: "前二跨度",
      name_en: "qianerkuadu",

      bet_note: "从0-9中任意选择1个号码。",
      bonus_note:
        "所选数值等于开奖号码的前2位最大与最小数字相减之差，即为中奖。",
      top_id: 15,
      top_name_cn: "二星",
      pname_cn: "直选",
      p_name_cn: "直选",
      type: "digital",
      layout: [
        {
          title: "跨度",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1
        }
      ],
      shortname: "ZXKD2",
      isrx: 0,
      isButton: true
    },
    "15-17-59": {
      id: 59,
      pid: 17,
      series_way_id: 59,
      name_cn: "后二复式",
      name_en: "houerfushi",

      bet_note: "从0-9中任意选择2个或2个以上号码。",
      bonus_note:
        "从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限（不含对子号），即为中奖。",
      top_id: 15,
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
    "15-17-12": {
      id: 12,
      pid: 17,
      series_way_id: 12,
      name_cn: "后二单式",
      name_en: "houerdanshi",

      bet_note: "手动输入号码，至少输入1个两位数号码",
      bonus_note:
        "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，顺序不限（不含对子号），即为中奖。",
      top_id: 15,
      top_name_cn: "二星",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "input",
      shortname: "exzuxdsh",
      isrx: 0
    },
    "15-17-77": {
      id: 77,
      pid: 17,
      series_way_id: 77,
      name_cn: "后二和值",
      name_en: "houerhezhi",

      bet_note: "从1-17中任意选择1个或1个以上号码",
      bonus_note:
        "所选数值等于开奖号码的十位、个位二个数字相加之和（不含对子号），即为中奖。",
      top_id: 15,
      top_name_cn: "二星",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "digital",
      layout: [
        {
          title: "和值",
          no: "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "ZUHZ2",
      isrx: 0,
      isButton: false
    },
    "15-17-85": {
      id: 85,
      pid: 17,
      series_way_id: 85,
      name_cn: "后二包胆",
      name_en: "houerbaodan",

      bet_note: "从0-9中任意选择1个包胆号码",
      bonus_note:
        "从0-9中任意选择1个包胆号码，开奖号码的十位、个位中任意1位包含所选的包胆号码相同（不含对子号），即为中奖。",
      top_id: 15,
      top_name_cn: "二星",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "digital",
      layout: [
        {
          title: "包胆",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "ZU2BD",
      maxcodecount: 1,
      isrx: 0,
      isButton: false
    },
    "15-17-20": {
      id: 20,
      pid: 17,
      series_way_id: 20,
      name_cn: "前二复式",
      name_en: "qianerfushi",

      bet_note: "从0-9中任意选择2个或2个以上号码",
      bonus_note:
        "从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限（不含对子号），即为中奖。",
      top_id: 15,
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
    "15-17-5": {
      id: 5,
      pid: 17,
      series_way_id: 5,
      name_cn: "前二单式",
      name_en: "qianerdanshi",

      bet_note: "手动输入号码，至少输入1个两位数号码组成一注",
      bonus_note:
        "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。",
      top_id: 15,
      top_name_cn: "二星",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "input",
      shortname: "exzuxdsq",
      isrx: 0
    },
    "15-17-76": {
      id: 76,
      pid: 17,
      series_way_id: 76,
      name_cn: "前二和值",
      name_en: "qianerhezhi",

      bet_note: "从1-17中任意选择1个或1个以上号码",
      bonus_note:
        "所选数值等于开奖号码的万位、千位二个数字相加之和（不含对子号），即为中奖。",
      top_id: 15,
      top_name_cn: "二星",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "digital",
      layout: [
        {
          title: "和值",
          no: "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "ZUHZ2",
      isrx: 0,
      isButton: false
    },
    "15-17-84": {
      id: 84,
      pid: 17,
      series_way_id: 84,
      name_cn: "前二包胆",
      name_en: "qianerbaodan",

      bet_note: "从0-9中任意选择1个包胆号码",
      bonus_note:
        "从0-9中任意选择1个包胆号码，开奖号码的万位、千位中任意1位包含所选的包胆号码相同（不含对子号），即为中奖。",
      top_id: 15,
      top_name_cn: "二星",
      pname_cn: "组选",
      p_name_cn: "组选",
      type: "digital",
      layout: [
        {
          title: "包胆",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "ZU2BD",
      maxcodecount: 1,
      isrx: 0,
      isButton: false
    },
    "18-19-78": {
      id: 78,
      pid: 19,
      series_way_id: 78,
      name_cn: "定位胆",
      name_en: "fushi",

      bet_note:
        "在万位，千位，百位，十位，个位任意位置上任意选择1个或1个以上号码",
      bonus_note:
        "从万位、千位、百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。",
      top_id: 18,
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
        },
        {
          title: "十位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 3,
          tools: true,
          cols: 1
        },
        {
          title: "个位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 4,
          tools: true,
          cols: 1
        }
      ],
      shortname: "dw",
      isrx: 0,
      isButton: true
    },
    "20-21-51": {
      id: 51,
      pid: 21,
      series_way_id: 51,
      name_cn: "后三一码不定位",
      name_en: "housanyimabudingwei",

      bet_note: "从0-9中任意选择1个以上号码",
      bonus_note:
        "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的百位、十位、个位中包含所选号码，即为中奖。",
      top_id: 20,
      top_name_cn: "不定位",
      pname_cn: "三星不定位",
      p_name_cn: "三星不定位",
      type: "digital",
      layout: [
        {
          title: "不定位",
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
    "20-21-52": {
      id: 52,
      pid: 21,
      series_way_id: 52,
      name_cn: "后三二码不定位",
      name_en: "housanermabudingwei",

      bet_note: "从0-9中任意选择2个以上号码",
      bonus_note:
        "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的百位、十位、个位中同时包含所选的2个号码，即为中奖。",
      top_id: 20,
      top_name_cn: "不定位",
      pname_cn: "三星不定位",
      p_name_cn: "三星不定位",
      type: "digital",
      layout: [
        {
          title: "不定位",
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
    "20-21-18": {
      id: 18,
      pid: 21,
      series_way_id: 18,
      name_cn: "前三一码不定位",
      name_en: "qiansanyimabudingwei",

      bet_note: "从0-9中任意选择1个以上号码",
      bonus_note:
        "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的万位、千位、百位中包含所选号码，即为中奖。",
      top_id: 20,
      top_name_cn: "不定位",
      pname_cn: "三星不定位",
      p_name_cn: "三星不定位",
      type: "digital",
      layout: [
        {
          title: "不定位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1
        }
      ],
      shortname: "bdw1mq",
      isrx: 0,
      isButton: true
    },
    "20-21-21": {
      id: 21,
      pid: 21,
      series_way_id: 21,
      name_cn: "前三二码不定位",
      name_en: "qiansanermabudingwei",

      bet_note: "从0-9中任意选择2个以上号码",
      bonus_note:
        "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位中同时包含所选的2个号码，即为中奖。",
      top_id: 20,
      top_name_cn: "不定位",
      pname_cn: "三星不定位",
      p_name_cn: "三星不定位",
      type: "digital",
      layout: [
        {
          title: "不定位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1
        }
      ],
      shortname: "bdw2mq",
      isrx: 0,
      isButton: true
    },
    "20-21-155": {
      id: 155,
      pid: 21,
      series_way_id: 155,
      name_cn: "中三一码不定位",
      name_en: "zhongsanyimabudingwei",

      bet_note: "从0-9中任意选择1个以上号码",
      bonus_note:
        "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的千位、百位、十位中包含所选号码，即为中奖。",
      top_id: 20,
      top_name_cn: "不定位",
      pname_cn: "三星不定位",
      p_name_cn: "三星不定位",
      type: "digital",
      layout: [
        {
          title: "不定位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1
        }
      ],
      shortname: "bdw1mq",
      isrx: 0,
      isButton: true
    },
    "20-21-156": {
      id: 156,
      pid: 21,
      series_way_id: 156,
      name_cn: "中三二码不定位",
      name_en: "zhongsanermabudingwei",

      bet_note: "从0-9中任意选择2个以上号码",
      bonus_note:
        "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的千位、百位、十位中同时包含所选的2个号码，即为中奖。",
      top_id: 20,
      top_name_cn: "不定位",
      pname_cn: "三星不定位",
      p_name_cn: "三星不定位",
      type: "digital",
      layout: [
        {
          title: "不定位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1
        }
      ],
      shortname: "bdw2mq",
      isrx: 0,
      isButton: true
    },
    "20-22-34": {
      id: 34,
      pid: 22,
      series_way_id: 34,
      name_cn: "四星一码不定位",
      name_en: "sixingyimabudingwei",

      bet_note: "从0-9中任意选择1个以上号码",
      bonus_note:
        "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的千位、百位、十位、个位中包含所选号码，即为中奖。",
      top_id: 20,
      top_name_cn: "不定位",
      pname_cn: "四星不定位",
      p_name_cn: "四星不定位",
      type: "digital",
      layout: [
        {
          title: "不定位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1
        }
      ],
      shortname: "bdws1m",
      isrx: 0,
      isButton: true
    },
    "20-22-35": {
      id: 35,
      pid: 22,
      series_way_id: 35,
      name_cn: "四星二码不定位",
      name_en: "sixingermabudingwei",

      bet_note: "从0-9中任意选择2个以上号码",
      bonus_note:
        "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的千位、百位、十位、个位中同时包含所选的2个号码，即为中奖",
      top_id: 20,
      top_name_cn: "不定位",
      pname_cn: "四星不定位",
      p_name_cn: "四星不定位",
      type: "digital",
      layout: [
        {
          title: "不定位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1
        }
      ],
      shortname: "bdws2m",
      isrx: 0,
      isButton: true
    },
    "20-23-36": {
      id: 36,
      pid: 23,
      series_way_id: 36,
      name_cn: "五星二码不定位",
      name_en: "wuxingermabudingwei",

      bet_note: "从0-9中任意选择2个以上号码",
      bonus_note:
        "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位、十位、个位中同时包含所选的2个号码，即为中奖。",
      top_id: 20,
      top_name_cn: "不定位",
      pname_cn: "五星不定位",
      p_name_cn: "五星不定位",
      type: "digital",
      layout: [
        {
          title: "不定位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1
        }
      ],
      shortname: "bdww2m",
      isrx: 0,
      isButton: true
    },
    "20-23-37": {
      id: 37,
      pid: 23,
      series_way_id: 37,
      name_cn: "五星三码不定位",
      name_en: "wuxingsanmabudingwei",
      bet_note: "从0-9中任意选择3个以上号码",
      bonus_note:
        "从0-9中选择3个号码，每注由3个不同的号码组成，开奖号码的万位、千位、百位、十位、个位中同时包含所选的3个号码，即为中奖。",
      top_id: 20,
      top_name_cn: "不定位",
      pname_cn: "五星不定位",
      p_name_cn: "五星不定位",
      type: "digital",
      layout: [
        {
          title: "不定位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1
        }
      ],
      noBigIndex: 5,
      isButton: true,
      shortname: "bdww3m",
      isrx: 0
    },
    "24-25-58": {
      id: 58,
      pid: 25,
      series_way_id: 58,
      name_cn: "后二大小单双",
      name_en: "houerdaxiaodanshuang",
      bet_note: "从十位、个位中的“大、小、单、双”中至少各选一个组成一注",
      bonus_note:
        "对十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。",
      top_id: 24,
      top_name_cn: "大小单双",
      pname_cn: "大小单双",
      p_name_cn: "大小单双",
      type: "dxds",
      layout: [
        {
          title: "十位",
          no: "大|小|单|双",
          place: 0,
          cols: 1,
          tools: false
        },
        {
          title: "个位",
          no: "大|小|单|双",
          place: 1,
          cols: 1,
          tools: false
        }
      ],
      shortname: "dxdsh",
      isrx: 0,
      isSpecial:true,
      isButton: false
    },
    "24-25-53": {
      id: 53,
      pid: 25,
      series_way_id: 53,
      name_cn: "后三大小单双",
      name_en: "housandaxiaodanshuang",
      isSpecial:true,
      bet_note: "从百位、十位、个位中的“大、小、单、双”中至少各选一个组成一注",
      bonus_note:
        "对百位、十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。",
      top_id: 24,
      top_name_cn: "大小单双",
      pname_cn: "大小单双",
      p_name_cn: "大小单双",
      type: "dxds",
      layout: [
        {
          title: "百位",
          no: "大|小|单|双",
          place: 0,
          cols: 1,
          tools: false
        },
        {
          title: "十位",
          no: "大|小|单|双",
          place: 1,
          cols: 1,
          tools: false
        },
        {
          title: "个位",
          no: "大|小|单|双",
          place: 2,
          cols: 1,
          tools: false
        }
      ],
      isrx: 0,
      shortname: "dxdsh3",
      isButton: false
    },
    "24-25-19": {
      id: 19,
      pid: 25,
      series_way_id: 19,
      name_cn: "前二大小单双",
      name_en: "qianerdaxiaodanshuang",
      isSpecial:true,
      bet_note: "从万位、千位中的“大、小、单、双”中至少各选一个组成一注",
      bonus_note:
        "对万位、千位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。",
      top_id: 24,
      top_name_cn: "大小单双",
      pname_cn: "大小单双",
      p_name_cn: "大小单双",
      type: "dxds",
      layout: [
        {
          title: "万位",
          no: "大|小|单|双",
          place: 0,
          cols: 1,
          tools: false
        },
        {
          title: "千位",
          no: "大|小|单|双",
          place: 1,
          cols: 1,
          tools: false
        }
      ],
      shortname: "dxdsq",
      isrx: 0,
      isButton: false
    },
    "24-25-22": {
      id: 22,
      pid: 25,
      series_way_id: 22,
      name_cn: "前三大小单双",
      name_en: "qiansandaxiaodanshuang",
      isSpecial:true,
      bet_note: "从万位、千位、百位中的“大、小、单、双”中至少各选一个组成一注",
      bonus_note:
        "对万位、千位和百位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。",
      top_id: 24,
      top_name_cn: "大小单双",
      pname_cn: "大小单双",
      p_name_cn: "大小单双",
      type: "dxds",
      layout: [
        {
          title: "万位",
          no: "大|小|单|双",
          place: 0,
          cols: 1,
          tools: false
        },
        {
          title: "千位",
          no: "大|小|单|双",
          place: 1,
          cols: 1,
          tools: false
        },
        {
          title: "百位",
          no: "大|小|单|双",
          place: 2,
          cols: 1,
          tools: false
        }
      ],
      shortname: "dxdsq3",
      isrx: 0,
      isButton: false
    },
    "24-25-157": {
      id: 157,
      pid: 25,
      series_way_id: 157,
      name_cn: "中三大小单双",
      name_en: "zhongsandaxiaodanshuang",
      isSpecial:true,
      bet_note: "从千位、百位、十位中的“大、小、单、双”中至少各选一个组成一注",
      bonus_note:
        "对千位和百位、十位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。",
      top_id: 24,
      top_name_cn: "大小单双",
      pname_cn: "大小单双",
      p_name_cn: "大小单双",
      type: "dxds",
      layout: [
        {
          title: "百位",
          no: "大|小|单|双",
          place: 0,
          cols: 1,
          tools: false
        },
        {
          title: "十位",
          no: "大|小|单|双",
          place: 1,
          cols: 1,
          tools: false
        },
        {
          title: "个位",
          no: "大|小|单|双",
          place: 2,
          cols: 1,
          tools: false
        }
      ],
      shortname: "dxdsh3",
      isrx: 0,
      isButton: false
    },
    "26-29-44": {
      id: 44,
      pid: 29,
      series_way_id: 44,
      name_cn: "一帆风顺",
      name_en: "yifanfengshun",
      isSpecial:true,
      bet_note: "从0-9中任意选择1个以上号码",
      bonus_note:
        "从0-9中任意选择1个号码组成一注，只要开奖号码的万位、千位、百位、十位、个位中包含所选号码，即为中奖。",
      top_id: 26,
      top_name_cn: "趣味",
      pname_cn: "特殊",
      p_name_cn: "特殊",
      type: "digital",
      layout: [
        {
          title: "一帆风顺",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1
        }
      ],
      shortname: "qwyffs",
      isrx: 0,
      isButton: true
    },
    "26-29-45": {
      id: 45,
      pid: 29,
      series_way_id: 45,
      name_cn: "好事成双",
      name_en: "haoshichengshuang",
      isSpecial:true,
      bet_note: "从0-9中任意选择1个以上的二重号码",
      bonus_note:
        "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现2次，即为中奖。",
      top_id: 26,
      top_name_cn: "趣味",
      pname_cn: "特殊",
      p_name_cn: "特殊",
      type: "digital",
      layout: [
        {
          title: "好事成双",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1
        }
      ],
      shortname: "qwhscs",
      isrx: 0,
      isButton: true
    },
    "26-29-46": {
      id: 46,
      pid: 29,
      series_way_id: 46,
      name_cn: "三星报喜",
      name_en: "sanxingbaoxi",
      isSpecial:true,
      bet_note: "从0-9中任意选择1个以上的三重号码",
      bonus_note:
        "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现3次，即为中奖。",
      top_id: 26,
      top_name_cn: "趣味",
      pname_cn: "特殊",
      p_name_cn: "特殊",
      type: "digital",
      layout: [
        {
          title: "三星报喜",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1
        }
      ],
      shortname: "qwsxbx",
      isrx: 0,
      isButton: true
    },
    "26-29-47": {
      id: 47,
      pid: 29,
      series_way_id: 47,
      name_cn: "四季发财",
      name_en: "sijifacai",
      isSpecial:true,
      bet_note: "从0-9中任意选择1个以上的四重号码",
      bonus_note:
        "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现4次，即为中奖。",
      top_id: 26,
      top_name_cn: "趣味",
      pname_cn: "特殊",
      p_name_cn: "特殊",
      type: "digital",
      layout: [
        {
          title: "四季发财",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1
        }
      ],
      shortname: "qwsjfc",
      isrx: 0,
      isButton: true
    },
    "79-81-199": {
      id: 199,
      pid: 81,
      series_way_id: 199,
      name_cn: "直选复式",
      name_en: "zhixuanfushi",

      bet_note:
        "从万位、千位、百位、十位、个位中至少两位上各选1个号码组成一注。",
      bonus_note:
        "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方案：万位5，百位8。开奖号码：51812，即中任二直选。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选二",
      p_name_cn: "任选二",
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
        },
        {
          title: "十位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 3,
          tools: true,
          cols: 1
        },
        {
          title: "个位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 4,
          tools: true,
          cols: 1
        }
      ],
      shortname: "sscrx2fs",
      isrx: 1,
      isButton: true
    },
    "79-81-200": {
      id: 200,
      pid: 81,
      series_way_id: 200,
      name_cn: "直选单式",
      name_en: "zhixuandanshi",

      bet_note:
        "从万位、千位、百位、十位、个位中至少选择两个位置，至少手动输入一个两位数的号码构成一注。",
      bonus_note:
        "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方案：位置选择万位、百位，输入号码58。开奖号码：51812，即中任二直选单式。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选二",
      p_name_cn: "任选二",
      type: "input",
      selPosition: true,
      shortname: "sscrx2ds",
      isrx: 1,
      defaultposition: "00011"
    },
    "79-81-201": {
      id: 201,
      pid: 81,
      series_way_id: 201,
      name_cn: "直选和值",
      name_en: "zhixuanhezhi",

      bet_note:
        "从万位、千位、百位、十位、个位中至少选择两个位置，至少选择一个和值号码构成一注。",
      bonus_note:
        "所选号码与开奖号码的和值相同，即为中奖。如投注方案：位置选择万位、百位，选择和值号码13。开奖号码：51812，即中任二直选和值。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选二",
      p_name_cn: "任选二",
      type: "digital",
      layout: [
        {
          title: "和值",
          no: "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      isButton: false,
      selPosition: true,
      shortname: "ZXHZ2",
      isrx: 1,
      defaultposition: "00011"
    },
    "79-81-217": {
      id: 217,
      pid: 81,
      series_way_id: 217,
      name_cn: "组选复式",
      name_en: "zuxuanfushi",

      bet_note:
        "从万位、千位、百位、十位、个位中至少选择两个位置，号码区至少选择两个号码构成一注。",
      bonus_note:
        "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择万位和百位，选择号码5和8。开奖号码：51812或81512，即中任二组选复试。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选二",
      p_name_cn: "任选二",
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
      shortname: "rx2zx",
      isrx: 1,
      defaultposition: "00011",
      isButton: true,

      selPosition: true
    },
    "79-81-218": {
      id: 218,
      pid: 81,
      series_way_id: 218,
      name_cn: "组选单式",
      name_en: "zuxuandanshi",

      bet_note:
        "从万位、千位、百位、十位、个位中至少选择两个位置，至少手动输入一个两位数的号码构成一注。",
      bonus_note:
        "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择万位和百位，选择号码5和8。开奖号码：51812或81512，即中任二组选单式。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选二",
      p_name_cn: "任选二",
      type: "input",
      selPosition: true,
      shortname: "ZU2",
      isrx: 1,
      defaultposition: "00011"
    },
    "79-81-219": {
      id: 219,
      pid: 81,
      series_way_id: 219,
      name_cn: "组选和值",
      name_en: "zuxuanhezhi",

      bet_note:
        "从万位、千位、百位、十位、个位中至少选择两个位置，至少选择一个和值号码构成一注。",
      bonus_note:
        "所选号码数值等于开奖号码的二个数字相加之和，即为中奖。如投注方案：选择万位和百位，选择和值13。开奖号码：51812或81512，即中任二组选和值。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选二",
      p_name_cn: "任选二",
      type: "digital",
      layout: [
        {
          title: "和值",
          no: "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "rx2zxhz",
      isrx: 1,
      defaultposition: "00011",
      isButton: false,
      selPosition: true
    },
    "79-82-202": {
      id: 202,
      pid: 82,
      series_way_id: 202,
      name_cn: "直选复式",
      name_en: "zhixuanfushi",

      bet_note:
        "从万位、千位、百位、十位、个位中至少三位上各选1个号码组成一注，",
      bonus_note:
        "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方案：万位5，百位8，个位2。开奖号码58692，即中任三直选。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选三",
      p_name_cn: "任选三",
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
        },
        {
          title: "十位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 3,
          tools: true,
          cols: 1
        },
        {
          title: "个位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 4,
          tools: true,
          cols: 1
        }
      ],
      shortname: "sscrx3fs",
      isrx: 1,
      isButton: true
    },
    "79-82-203": {
      id: 203,
      pid: 82,
      series_way_id: 203,
      name_cn: "直选单式",
      name_en: "zhixuandanshi",

      bet_note:
        "从万位、千位、百位、十位、个位中至少选择三个位置，至少手动输入一个三位数的号码构成一注。",
      bonus_note:
        "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。投注方案：位置选择万位、百位和个位，输入号码528，开奖号码57298，即中任三直选（单式）。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选三",
      p_name_cn: "任选三",
      type: "input",
      selPosition: true,
      shortname: "sscrx3ds",
      isrx: 1,
      defaultposition: "00111"
    },
    "79-82-204": {
      id: 204,
      pid: 82,
      series_way_id: 204,
      name_cn: "直选和值",
      name_en: "zhixuanhezhi",

      bet_note:
        "从万位、千位、百位、十位、个位中至少选择三个位置，至少选择一个和值号码构成一注，所选号码与开奖号码的和值相同，即为中奖。",
      bonus_note:
        "所选号码与开奖号码的和值相同，即为中奖。如投注方案：位置选择万位、百位和个位，选择和值号码15，开奖号码51812，即中任三直选和值。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选三",
      p_name_cn: "任选三",
      type: "digital",
      layout: [
        {
          title: "和值",
          no:
            "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      isButton: false,
      selPosition: true,
      shortname: "ZXHZ3",
      isrx: 1,
      defaultposition: "00111"
    },
    "79-82-205": {
      id: 205,
      pid: 82,
      series_way_id: 205,
      name_cn: "组三复式",
      name_en: "zusanfushi",

      bet_note:
        "从万位、千位、百位、十位、个位中至少选择三个位置，号码区至少选择两个号码构成一注。",
      bonus_note:
        "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，选择号码12，开奖号码11812，即中任三组三。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选三",
      p_name_cn: "任选三",
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
      noBigIndex: 5,
      isButton: true,
      shortname: "rx3z3",
      isrx: 1,
      defaultposition: "00111",
      selPosition: true
    },
    "79-82-206": {
      id: 206,
      pid: 82,
      series_way_id: 206,
      name_cn: "组三单式",
      name_en: "zusandanshi",

      bet_note:
        "从万位、千位、百位、十位、个位中至少选择三个位置，手动至少输入两个号码构成一注。",
      bonus_note:
        "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，输入号码12，开奖号码11812，即中任三组三（单式）。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选三",
      p_name_cn: "任选三",
      type: "input",
      selPosition: true,
      shortname: "RX3Z3DS",
      isrx: 1,
      defaultposition: "00111"
    },
    "79-82-207": {
      id: 207,
      pid: 82,
      series_way_id: 207,
      name_cn: "组六复式",
      name_en: "zuliufushi",

      bet_note:
        "从万位、千位、百位、十位、个位中至少选择三个位置，号码区至少选择三个号码构成一注。",
      bonus_note:
        "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，选择号码512，开奖号码51812，即中任三组六。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选三",
      p_name_cn: "任选三",
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
      shortname: "rx3z6",
      isrx: 1,
      defaultposition: "00111",
      isButton: true,
      selPosition: true
    },
    "79-82-208": {
      id: 208,
      pid: 82,
      series_way_id: 208,
      name_cn: "组六单式",
      name_en: "zuliudanshi",

      bet_note:
        "从万位、千位、百位、十位、个位中至少选择三个位置，手动输入至少三个号码构成一注。",
      bonus_note:
        "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，输入号码512，开奖号码51812，即中任三组六（单式）。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选三",
      p_name_cn: "任选三",
      type: "input",
      selPosition: true,
      shortname: "RX3Z6DS",
      isrx: 1,
      defaultposition: "00111"
    },
    "79-82-209": {
      id: 209,
      pid: 82,
      series_way_id: 209,
      name_cn: "混合组选",
      name_en: "hunhezuxuan",

      bet_note:
        "从万位、千位、百位、十位、个位中至少选择三个位置，手动至少输入三个号码构成一注（不包含豹子号）。",
      bonus_note:
        "所选号码与开奖号码的指定位置的号码相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，输入号码512，开奖号码51812，即中任三混合组选。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选三",
      p_name_cn: "任选三",
      type: "input",
      selPosition: true,
      shortname: "RX3HHZX",
      isrx: 1,
      defaultposition: "00111"
    },
    "79-82-210": {
      id: 210,
      pid: 82,
      series_way_id: 210,
      name_cn: "组选和值",
      name_en: "zuxuanhezhi",

      bet_note:
        "从万位、千位、百位、十位、个位中至少选择三个位置，至少选择一个和值号码构成一注",
      bonus_note:
        "所选号码与开奖号码（不含豹子号）的指定位置的号码之和相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，选择和值号码8，开奖号码51812，即中任三组选和值。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选三",
      p_name_cn: "任选三",
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
      shortname: "rx3zxhz",
      isrx: 1,
      defaultposition: "00111",
      isButton: false,
      selPosition: true
    },
    "79-83-211": {
      id: 211,
      pid: 83,
      series_way_id: 211,
      name_cn: "直选复式",
      name_en: "zhixuanfushi",

      bet_note:
        "从万位、千位、百位、十位、个位中至少四位上各选1个号码组成一注。",
      bonus_note:
        "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方案：万位5，千位1，百位8，个位1，开奖号码51821，即中任四直选复式。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选四",
      p_name_cn: "任选四",
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
        },
        {
          title: "十位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 3,
          tools: true,
          cols: 1
        },
        {
          title: "个位",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 4,
          tools: true,
          cols: 1
        }
      ],
      shortname: "sscrx4fs",
      isrx: 1,
      isButton: true
    },
    "79-83-212": {
      id: 212,
      pid: 83,
      series_way_id: 212,
      name_cn: "直选单式",
      name_en: "zhixuandanshi",

      bet_note:
        "从万位、千位、百位、十位、个位中至少选择四个位置，至少手动输入一个四位数的号码构成一注。",
      bonus_note:
        "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方式：选择万位、千位、百位和个位，输入号码5181，开奖号码51821，即中任四直选单式。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选四",
      p_name_cn: "任选四",
      type: "input",
      selPosition: true,
      shortname: "sscrx4ds",
      isrx: 1,
      defaultposition: "01111"
    },
    "79-83-213": {
      id: 213,
      pid: 83,
      series_way_id: 213,
      name_cn: "组选24",
      name_en: "zuxuan24",

      bet_note:
        "从万位、千位、百位、十位、个位中至少选择四个位置，号码区至少选择四个号码构成一注。",
      bonus_note:
        "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方式：位置选择万位、百位、十位和个位，号码选择0568，开奖号码57086（顺序不限），即中任四组选24。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选四",
      p_name_cn: "任选四",
      type: "digital",
      layout: [
        {
          title: "组选24",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1,
          minchosen: 4
        }
      ],
      shortname: "rx4zx24",
      isrx: 1,
      defaultposition: "01111",
      isButton: true,
      selPosition: true
    },
    "79-83-214": {
      id: 214,
      pid: 83,
      series_way_id: 214,
      name_cn: "组选12",
      name_en: "zuxuan12",

      bet_note:
        "从万位、千位、百位、十位、个位中至少选择四个位置，从“二重号”选择一个号码，“单号”中选择两个号码组成一注。",
      bonus_note:
        "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方式：位置选择千位、百位、十位和个位，二重号：8，单号：06，开奖号码58086（顺序不限），即中任四组选12。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选四",
      p_name_cn: "任选四",
      type: "digital",
      layout: [
        {
          title: "二重号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          cols: 1,
          tools: true,
          minchosen: 1
        },
        {
          title: "单　号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 1,
          tools: true,
          cols: 1,
          minchosen: 2
        }
      ],
      shortname: "rx4zx12",
      isrx: 1,
      defaultposition: "01111",
      isButton: true,
      selPosition: true
    },
    "79-83-215": {
      id: 215,
      pid: 83,
      series_way_id: 215,
      name_cn: "组选6",
      name_en: "zuxuan6",

      bet_note:
        "从万位、千位、百位、十位、个位中至少选择四个位置，从“二重号”中至少选择两个号码组成一注。",
      bonus_note:
        "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方式：位置选择千位、百位、十位和个位，二重号：28，开奖号码58282（顺序不限），即中任四组选6。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选四",
      p_name_cn: "任选四",
      type: "digital",
      layout: [
        {
          title: "二重号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1,
          minchosen: 2
        }
      ],
      shortname: "rx4zx6",
      isrx: 1,
      defaultposition: "01111",
      isButton: true,
      selPosition: true
    },
    "79-83-216": {
      id: 216,
      pid: 83,
      series_way_id: 216,
      name_cn: "组选4",
      name_en: "zuxuan4",

      bet_note:
        "从万位、千位、百位、十位、个位中至少选择四个位置，从“三重号”中选择一个号码，“单号”中选择一个号码组成一注。",
      bonus_note:
        "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方式：位置选择千位、百位、十位和个位，三重号：8，单号：2，开奖号码58882（顺序不限），即中任四组选4。",
      top_id: 79,
      top_name_cn: "任选",
      pname_cn: "任选四",
      p_name_cn: "任选四",
      type: "digital",
      layout: [
        {
          title: "三重号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 0,
          tools: true,
          cols: 1,
          minchosen: 1
        },
        {
          title: "单　号",
          no: "0|1|2|3|4|5|6|7|8|9",
          place: 1,
          tools: true,
          cols: 1,
          minchosen: 1
        }
      ],
      shortname: "rx4zx4",
      isrx: 1,
      defaultposition: "01111",
      isButton: true,
      selPosition: true
    },
    "80-84-220": {
      id: 220,
      pid: 84,
      series_way_id: 220,
      name_cn: "万千",
      name_en: "wanqian",
      isSpecial:true,
      bet_note: "从万位、千位上选择一个形态组成一注。",
      bonus_note:
        "根据万位、千位号码数值比大小，万位号码大于千位号码为龙，万位号码小于千位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
      top_id: 80,
      top_name_cn: "龙虎",
      pname_cn: "龙虎和",
      p_name_cn: "龙虎和",
      type: "dxds",
      layout: [
        {
          title: "万千",
          no: "龙|虎|和",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "longhu",
      isrx: "0",
      isButton: false
    },
    "80-84-221": {
      id: 221,
      pid: 84,
      series_way_id: 221,
      name_cn: "万百",
      name_en: "wanbai",
      isSpecial:true,
      bet_note: "从万位、百位上选择一个形态组成一注。",
      bonus_note:
        "根据万位、百位号码数值比大小，万位号码大于百位号码为龙，万位号码小于百位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
      top_id: 80,
      top_name_cn: "龙虎",
      pname_cn: "龙虎和",
      p_name_cn: "龙虎和",
      type: "dxds",
      layout: [
        {
          title: "万百",
          no: "龙|虎|和",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "longhu",
      isrx: 0,
      isButton: false
    },
    "80-84-222": {
      id: 222,
      pid: 84,
      series_way_id: 222,
      name_cn: "万十",
      name_en: "wanshi",
      isSpecial:true,
      bet_note: "从万位、十位上选择一个形态组成一注。",
      bonus_note:
        "根据万位、十位号码数值比大小，万位号码大于十位号码为龙，万位号码小于十位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
      top_id: 80,
      top_name_cn: "龙虎",
      pname_cn: "龙虎和",
      p_name_cn: "龙虎和",
      type: "dxds",
      layout: [
        {
          title: "万十",
          no: "龙|虎|和",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "longhu",
      isrx: 0,
      isButton: false
    },
    "80-84-223": {
      id: 223,
      pid: 84,
      series_way_id: 223,
      name_cn: "万个",
      name_en: "wange",
      isSpecial:true,
      bet_note: "从万位、个位上选择一个形态组成一注。",
      bonus_note:
        "根据万位、个位号码数值比大小，万位号码大于个位号码为龙，万位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
      top_id: 80,
      top_name_cn: "龙虎",
      pname_cn: "龙虎和",
      p_name_cn: "龙虎和",
      type: "dxds",
      layout: [
        {
          title: "万个",
          no: "龙|虎|和",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "longhu",
      isrx: 0,
      isButton: false
    },
    "80-84-224": {
      id: 224,
      pid: 84,
      series_way_id: 224,
      name_cn: "千百",
      name_en: "qianbai",
      isSpecial:true,
      bet_note: "从千位、百位上选择一个形态组成一注。",
      bonus_note:
        "根据千位、百位号码数值比大小，千位号码大于百位号码为龙，千位号码小于百位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
      top_id: 80,
      top_name_cn: "龙虎",
      pname_cn: "龙虎和",
      p_name_cn: "龙虎和",
      type: "dxds",
      layout: [
        {
          title: "千百",
          no: "龙|虎|和",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "longhu",
      isrx: 0,
      isButton: false
    },
    "80-84-225": {
      id: 225,
      pid: 84,
      series_way_id: 225,
      name_cn: "千十",
      name_en: "qianshi",
      isSpecial:true,
      bet_note: "从千位、十位上选择一个形态组成一注。",
      bonus_note:
        "根据千位、十位号码数值比大小，千位号码大于十位号码为龙，千位号码小于十位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
      top_id: 80,
      top_name_cn: "龙虎",
      pname_cn: "龙虎和",
      p_name_cn: "龙虎和",
      type: "dxds",
      layout: [
        {
          title: "千十",
          no: "龙|虎|和",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "longhu",
      isrx: 0,
      isButton: false
    },
    "80-84-226": {
      id: 226,
      pid: 84,
      series_way_id: 226,
      name_cn: "千个",
      name_en: "qiange",
      isSpecial:true,
      bet_note: "从千位、个位上选择一个形态组成一注。",
      bonus_note:
        "根据千位、个位号码数值比大小，千位号码大于个位号码为龙，千位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
      top_id: 80,
      top_name_cn: "龙虎",
      pname_cn: "龙虎和",
      p_name_cn: "龙虎和",
      type: "dxds",
      layout: [
        {
          title: "千个",
          no: "龙|虎|和",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "longhu",
      isrx: 0,
      isButton: false
    },
    "80-84-227": {
      id: 227,
      pid: 84,
      series_way_id: 227,
      name_cn: "百十",
      name_en: "baishi",
      isSpecial:true,
      bet_note: "从百位、十位上选择一个形态组成一注。",
      bonus_note:
        "根据百位、十位号码数值比大小，百位号码大于十位号码为龙，百位号码小于十位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
      top_id: 80,
      top_name_cn: "龙虎",
      pname_cn: "龙虎和",
      p_name_cn: "龙虎和",
      type: "dxds",
      layout: [
        {
          title: "百十",
          no: "龙|虎|和",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "longhu",
      isrx: 0,
      isButton: false
    },
    "80-84-228": {
      id: 228,
      pid: 84,
      series_way_id: 228,
      name_cn: "百个",
      name_en: "baige",
      isSpecial:true,
      bet_note: "从百位、个位上选择一个形态组成一注。",
      bonus_note:
        "根据百位、个位号码数值比大小，百位号码大于个位号码为龙，百位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
      top_id: 80,
      top_name_cn: "龙虎",
      pname_cn: "龙虎和",
      p_name_cn: "龙虎和",
      type: "dxds",
      layout: [
        {
          title: "百个",
          no: "龙|虎|和",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "longhu",
      isrx: 0,
      isButton: false
    },
    "80-84-229": {
      id: 229,
      pid: 84,
      series_way_id: 229,
      name_cn: "十个",
      name_en: "shige",
      isSpecial:true,
      bet_note: "从十位、个位上选择一个形态组成一注。",
      bonus_note:
        "根据十位、个位号码数值比大小，十位号码大于个位号码为龙，十位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
      top_id: 80,
      top_name_cn: "龙虎",
      pname_cn: "龙虎和",
      p_name_cn: "龙虎和",
      type: "dxds",
      layout: [
        {
          title: "十个",
          no: "龙|虎|和",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      shortname: "longhu",
      isrx: 0,
      isButton: false
    },
    "180-181-286": {
      id: 286,
      pid: 181,
      series_way_id: 286,
      name_cn: "斗牛",
      name_en: "douniu",
      isSpecial:true,
      bet_note: "选择一个号码形态",
      bonus_note:
        "开奖号码不分顺序。 牛牛：根据开奖第一球 ~ 第五球开出的球号数字为基础，任意组合三个号码成0或10的倍数，取剩余两个号码之和为点数（大于10时减去10后的数字作为对奖基数，如：00026为 牛8，02818为牛9，68628、23500皆为牛10俗称牛牛；26378、15286因任意三个号码都无法组合成0或10的倍数，称为没牛，注：当五个号码相同时，只有00000视为牛牛，其它11111，66666等皆视为没牛）大小：牛大(牛6,牛7,牛8,牛9,牛牛)，牛小(牛1,牛2,牛3,牛4,牛5)，若开出斗牛结果为没牛，则投注牛大牛小皆为不中奖。单双：牛单(牛1,牛3,牛5,牛7,牛9)，牛双(牛2,牛4,牛6,牛8,牛牛)，若开出斗牛结果为没牛，则投注牛单牛双皆为不中奖。",
      top_id: 180,
      top_name_cn: "斗牛/梭哈",
      pname_cn: "斗牛/梭哈",
      p_name_cn: "斗牛/梭哈",
      type: "digital",
      layout: [
        {
          title: "斗牛",
          no:
            "牛牛|牛一|牛二|牛三|牛四|牛五|牛六|牛七|牛八|牛九|牛小|牛大|牛双|牛单|没牛",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      noBigIndex: 5,
      isButton: false,
      shortname: "douniu",
      isrx: 0
    },
    "180-181-287": {
      id: 287,
      pid: 181,
      series_way_id: 287,
      name_cn: "梭哈",
      name_en: "suoha",
      isSpecial:true,
      bet_note: "选择一个号码形态",
      bonus_note:
        "开奖号码不分顺序。 五条：开奖的五个号码全部相同，例如：22222、66666、88888 投注梭哈：五条 中奖，其它不中奖。四条：开奖的五个号码中有四个号码相同，例如：22221、66663、88885 投注梭哈：四条 中奖，其它不中奖。葫芦：开奖的五个号码中有三个号码相同(三条)另外两个号码也相同(一对)，例如：22211、66633 投注梭哈：葫芦 中奖，其它不中奖。顺子：开奖的五个号码从小到大排列为顺序(号码9、0、1相连)，例如：23456、89012、90123 投注梭哈：顺子 中奖，其它不中奖。三条：开奖的五个号码中有三个号码相同另外两个不相同，例如：22231、66623、88895 投注梭哈：三条 中奖，其它不中奖。两对：开奖的五个号码中有两组号码相同，例如：22166、66355、82668 投注梭哈：两对 中奖，其它不中奖。一对：开奖的五个号码中只有一组号码相同，例如：22168、66315、82968 投注梭哈：一对 中奖，其它不中奖。散号：开奖号码不是五条、四条、葫芦、三条、顺子、两对、一对的其它所有开奖号码，例如：23186、13579、21968 投注梭哈：散号 中奖，其它不中奖。",
      top_id: 180,
      top_name_cn: "斗牛/梭哈",
      pname_cn: "斗牛/梭哈",
      p_name_cn: "斗牛/梭哈",
      type: "digital",
      layout: [
        {
          title: "梭哈",
          no: "五条|四条|三条|两对|一对|葫芦|顺子|散号",
          place: 0,
          cols: 1,
          tools: false
        }
      ],
      noBigIndex: 5,
      isButton: false,
      shortname: "suoha",
      isrx: 0
    }
  };
}
