export function sscLayout() {
    return [{
        "isrx": "0",
        "isdefault": "0",
        "title": "五星",
        "id": 2,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "万位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "千位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "百位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "十位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 3,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "个位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 4,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 68,
            "name": "复式",
            "shortname": "wxzhixfs",
            "isrx": 0,
            "defaultposition": "11111",
            "desc": "直选复式"
        }, {
            "selectarea": {
                "type": "input"
            },
            "methodid": 7,
            "name": "单式",
            "shortname": "wxzhixds",
            "isrx": 0,
            "desc": "直选单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "万位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "千位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "百位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "十位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 3,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "个位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 4,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 15,
            "name": "组合",
            "shortname": "wxzhixzh",
            "isrx": 0,
            "desc": "直选组合"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组选120",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1,
                    "minchosen": 5
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 32,
            "name": "组选120",
            "shortname": "wxzux120",
            "isrx": 0,
            "desc": "组选120"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "二重号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1,
                    "minchosen": 1
                }, {
                    "title": "单　号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "tools": true,
                    "cols": 1,
                    "minchosen": 3
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 31,
            "name": "组选60",
            "shortname": "wxzux60",
            "isrx": 0,
            "desc": "组选60"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "二重号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1,
                    "minchosen": 2
                }, {
                    "title": "单　号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "tools": true,
                    "cols": 1,
                    "minchosen": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 30,
            "name": "组选30",
            "shortname": "wxzux30",
            "isrx": 0,
            "desc": "组选30"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "三重号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1,
                    "minchosen": 1
                }, {
                    "title": "单　号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "tools": true,
                    "cols": 1,
                    "minchosen": 2
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 29,
            "name": "组选20",
            "shortname": "wxzux20",
            "isrx": 0,
            "desc": "组选20"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "三重号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "cols": 1,
                    "tools": true,
                    "minchosen": 1
                }, {
                    "title": "二重号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "cols": 1,
                    "tools": true,
                    "minchosen": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 28,
            "name": "组选10",
            "shortname": "wxzux10",
            "isrx": 0,
            "desc": "组选10"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "四重号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "cols": 1,
                    "tools": true,
                    "minchosen": 1
                }, {
                    "title": "单　号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "cols": 1,
                    "tools": true,
                    "minchosen": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 27,
            "name": "组选5",
            "shortname": "wxzux5",
            "isrx": 0,
            "desc": "组选5"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "总和",
                    "no": "总和大|总和小|总和单|总和双",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 414,
            "name": "特殊",
            "shortname": "zonghe",
            "isrx": 0,
            "desc": "特殊"
        }]
    }, {
        "isrx": "0",
        "isdefault": "0",
        "title": "四星",
        "id": 3,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "千位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "百位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,"tools": true,
                    "cols": 1
                }, {
                    "title": "十位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 2,"tools": true,
                    "cols": 1
                }, {
                    "title": "个位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 3,"tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 67,
            "name": "复式",
            "shortname": "sixzhixfsh",
            "isrx": 0,
            "desc": "直选复式"
        }, {
            "selectarea": {
                "type": "input"
            },
            "show_str": "X",
            "code_sp": " ",
            "methodid": 6,
            "name": "单式",
            "shortname": "sixzhixdsh",
            "isrx": 0,
            "desc": "直选单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "千位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,"tools": true,
                    "cols": 1
                }, {
                    "title": "百位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,"tools": true,
                    "cols": 1
                }, {
                    "title": "十位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 2,"tools": true,
                    "cols": 1
                }, {
                    "title": "个位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 3,"tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 79,
            "name": "组合",
            "shortname": "sixzhixzhh",
            "isrx": 0,
            "desc": "直选组合"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组选24",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,"tools": true,
                    "cols": 1,
                    "minchosen": 4
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 26,
            "name": "组选24",
            "shortname": "sixzux24h",
            "isrx": 0,
            "desc": "组选24"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "二重号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,"tools": true,
                    "cols": 1,
                    "minchosen": 1
                }, {
                    "title": "单　号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "cols": 1,"tools": true,
                    "minchosen": 2
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 25,
            "name": "组选12",
            "shortname": "sixzux12h",
            "isrx": 0,
            "desc": "组选12"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "二重号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,"tools": true,
                    "cols": 1,
                    "minchosen": 2
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 24,
            "name": "组选6",
            "shortname": "sixzux6h",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "01111",
            "desc": "组选6"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "三重号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,"tools": true,
                    "cols": 1,
                    "minchosen": 1
                }, {
                    "title": "单　号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,"tools": true,
                    "cols": 1,
                    "minchosen": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X,X",
            "code_sp": "",
            "methodid": 23,
            "name": "组选4",
            "shortname": "sixzux4h",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "01111",
            "desc": "组选4"
        }]
    }, {
        "isrx": "0",
        "isdefault": "1",
        "title": "后三",
        "id": 1,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "百位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "十位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "个位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 69,
            "name": "直选复式",
            "shortname": "sxzhixfsh",
            "isrx": 0,
            "defaultposition": "00111",
            "desc": "直选复式"
        }, {
            "selectarea": {
                "type": "input"
            },
            "methodid": 8,
            "name": "直选单式",
            "shortname": "sxzhixdsh",
            "isrx": 0,
            "defaultposition": "00111",
            "desc": "直选单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "百位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "十位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "个位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 82,
            "name": "组合",
            "shortname": "sxhsanzh",
            "isrx": 0,
            "defaultposition": "00111",
            "desc": "后三组合"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "methodid": 73,
            "name": "直选和值",
            "shortname": "sxzhixhzh",
            "isrx": 0,
            "defaultposition": "00111",
            "desc": "直选和值"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "跨度",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 62,
            "name": "直选跨度",
            "shortname": "ZXKD",
            "isrx": 0,
            "defaultposition": "00111",
            "desc": "直选跨度"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组三",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 49,
            "name": "组三复式",
            "shortname": "sxzuxzsh",
            "isrx": 0,
            "defaultposition": "00111",
            "desc": "组三复式"
        }, {
            "selectarea": {
                "type": "input"
            },
            "methodid": 9,
            "shortname": "ZUS",
            "name": "组三单式",
            "isrx": 0,
            "defaultposition": "00111",
            "desc": "组三单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组六",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 50,
            "name": "组六复式",
            "shortname": "sxzuxzlh",
            "isrx": 0,
            "defaultposition": "00111",
            "desc": "组六复式"
        }, {
            "selectarea": {
                "type": "input"
            },
            "methodid": 10,
            "name": "组六单式",
            "shortname": "ZUL",
            "isrx": 0,
            "defaultposition": "00111",
            "desc": "组六单式"
        }, {
            "selectarea": {
                "type": "input"
            },
            "methodid": 81,
            "name": "混合组选",
            "shortname": "sxhhzxh",
            "isrx": 0,
            "defaultposition": "00111",
            "desc": "混合组选"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "methodid": 80,
            "name": "组选和值",
            "shortname": "ZUHZ",
            "isrx": 0,
            "defaultposition": "00111",
            "desc": "组选和值"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "包胆",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "methodid": 83,
            "name": "组选包胆",
            "shortname": "ZU3BD",
            "maxcodecount": 1,
            "isrx": 0,
            "defaultposition": "00111",
            "desc": "组选包胆"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值尾数",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "cols": 1,
                    "tools": true
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 54,
            "shortname": "HZWS",
            "name": "后三和值尾数",
            "isrx": 0,
            "defaultposition": "00111",
            "desc": "和值尾数"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "特殊号码",
                    "no": "豹子|顺子|对子",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "methodid": 57,
            "name": "特殊号码",
            "shortname": "TSH",
            "isrx": 0,
            "defaultposition": "00111",
            "desc": "特殊号码"
        }]
    }, {
        "isrx": "0",
        "isdefault": "0",
        "title": "前三",
        "id": 8,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "万位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "千位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "百位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X,X,X,-,-",
            "code_sp": "",
            "methodid": 65,
            "name": "直选复式",
            "shortname": "sxzhixfsq",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "直选复式"
        }, {
            "selectarea": {
                "type": "input"
            },
            "show_str": "X",
            "code_sp": " ",
            "methodid": 1,
            "name": "直选单式",
            "shortname": "sxzhixdsq",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "直选单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "万位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "千位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "百位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X,X,X,-,-",
            "code_sp": "",
            "methodid": 14,
            "name": "组合",
            "shortname": "sxqsanzh",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "前三组合"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 71,
            "name": "直选和值",
            "shortname": "sxzhixhzq",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "直选和值"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "跨度",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 60,
            "name": "直选跨度",
            "shortname": "ZXKD",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "直选跨度"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组三",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X",
            "code_sp": "",
            "methodid": 16,
            "name": "组三复式",
            "shortname": "sxzuxzsq",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "组三复式"
        }, {
            "selectarea": {
                "type": "input"
            },
            "show_str": "X",
            "code_sp": " ",
            "methodid": 2,
            "name": "组三单式",
            "shortname": "ZUS",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "组三单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组六",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X",
            "code_sp": "",
            "methodid": 17,
            "name": "组六复式",
            "shortname": "sxzuxzlq",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "组六复式"
        }, {
            "selectarea": {
                "type": "input"
            },
            "show_str": "X",
            "code_sp": " ",
            "methodid": 3,
            "name": "组六单式",
            "shortname": "ZUL",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "组六单式"
        }, {
            "selectarea": {
                "type": "input"
            },
            "show_str": "X",
            "code_sp": " ",
            "methodid": 13,
            "shortname": "sxhhzxq",
            "name": "混合组选",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "混合组选"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 75,
            "name": "组选和值",
            "shortname": "ZUHZ",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "组选和值"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "包胆",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "show_str": "X",
            "code_sp": "",
            "methodid": 64,
            "name": "组选包胆",
            "shortname": "ZU3BD",
            "maxcodecount": 1,
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "组选包胆"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值尾数",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "tools": true,
                    "place": 0,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 33,
            "shortname": "HZWS",
            "name": "前三和值尾数",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "和值尾数"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "特殊号码",
                    "no": "豹子|顺子|对子",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "show_str": "X",
            "code_sp": "|",
            "methodid": 48,
            "name": "特殊号码",
            "shortname": "TSH",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "特殊号码"
        }]
    }, {
        "isrx": "0",
        "isdefault": "0",
        "title": "中三",
        "id": 61,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "千位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "百位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "十位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X,X,X,-,-",
            "code_sp": "",
            "methodid": 142,
            "name": "直选复式",
            "shortname": "sxzhixfsq",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "直选复式"
        }, {
            "selectarea": {
                "type": "input"
            },
            "show_str": "X",
            "code_sp": " ",
            "methodid": 143,
            "name": "直选单式",
            "shortname": "sxzhixdsq",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "直选单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "千位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "百位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "十位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X,X,X,-,-",
            "code_sp": "",
            "methodid": 148,
            "name": "组合",
            "shortname": "sxqsanzh",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "中三组合"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 145,
            "name": "和值",
            "shortname": "sxzhixhzq",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "直选和值"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "跨度",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 147,
            "name": "跨度",
            "shortname": "ZXKD",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "直选跨度"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组三",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X",
            "code_sp": "",
            "methodid": 150,
            "name": "组三复式",
            "shortname": "sxzuxzsq",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "组三复式"
        }, {
            "selectarea": {
                "type": "input"
            },
            "show_str": "X",
            "code_sp": " ",
            "methodid": 144,
            "name": "组三单式",
            "shortname": "ZUS",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "组三单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组六",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X",
            "code_sp": "",
            "methodid": 152,
            "name": "组六复式",
            "shortname": "sxzuxzlq",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "组六复式"
        }, {
            "selectarea": {
                "type": "input"
            },
            "show_str": "X",
            "code_sp": " ",
            "methodid": 146,
            "name": "组六单式",
            "shortname": "ZUL",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "组六单式"
        }, {
            "selectarea": {
                "type": "input"
            },
            "show_str": "X",
            "code_sp": " ",
            "methodid": 154,
            "shortname": "sxhhzxq",
            "name": "混合组选",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "混合组选"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 160,
            "name": "组选和值",
            "shortname": "ZUHZ",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "组选和值"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "包胆",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "show_str": "X",
            "code_sp": "",
            "methodid": 153,
            "name": "组选包胆",
            "shortname": "ZU3BD",
            "maxcodecount": 1,
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "组选包胆"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值尾数",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 149,
            "shortname": "HZWS",
            "name": "中三和值尾数",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "和值尾数"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "特殊号码",
                    "no": "豹子|顺子|对子",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "show_str": "X",
            "code_sp": "|",
            "methodid": 151,
            "name": "特殊号码",
            "shortname": "TSH",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "特殊号码"
        }]
    }, {
        "isrx": "0",
        "isdefault": "0",
        "title": "二星",
        "id": 15,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "万位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "千位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X,X,-,-,-",
            "code_sp": "",
            "methodid": 66,
            "name": "前二复式",
            "shortname": "exzhixfsq",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11000",
            "desc": "前二复式"
        }, {
            "selectarea": {
                "type": "input"
            },
            "show_str": "X",
            "code_sp": " ",
            "methodid": 4,
            "name": "单式",
            "shortname": "exzhixdsq",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11000",
            "desc": "前二单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 72,
            "name": "和值",
            "shortname": "exzhixhzq",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11000",
            "desc": "前二和值"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "跨度",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 61,
            "shortname": "ZXKD2",
            "name": "跨度",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11000",
            "desc": "前二跨度"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组选",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 20,
            "name": "复式",
            "shortname": "exzuxfsq",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11000",
            "desc": "前二复式"
        }, {
            "selectarea": {
                "type": "input"
            },
            "show_str": "X",
            "code_sp": " ",
            "methodid": 5,
            "name": "单式",
            "shortname": "exzuxdsq",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11000",
            "desc": "前二单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 76,
            "name": "和值",
            "shortname": "ZUHZ2",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11000",
            "desc": "前二和值"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "包胆",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "show_str": "X",
            "code_sp": "",
            "methodid": 84,
            "name": "包胆",
            "shortname": "ZU2BD",
            "maxcodecount": 1,
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11000",
            "desc": "前二包胆"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "十位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "个位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "-,-,-,X,X",
            "code_sp": "",
            "methodid": 70,
            "name": "复式",
            "shortname": "exzhixfsh",
            "isrx": 0,
            "issuper": 1,
            "numcount": 0,
            "defaultposition": "00011",
            "desc": "后二复式"
        }, {
            "selectarea": {
                "type": "input"
            },
            "show_str": "X",
            "code_sp": " ",
            "methodid": 11,
            "name": "单式",
            "shortname": "exzhixdsh",
            "isrx": 0,
            "issuper": 1,
            "numcount": 0,
            "defaultposition": "00011",
            "desc": "后二单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 74,
            "name": "和值",
            "shortname": "exzhixhzh",
            "isrx": 0,
            "issuper": 1,
            "numcount": 0,
            "defaultposition": "00011",
            "desc": "后二和值"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "跨度",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 63,
            "name": "跨度",
            "shortname": "ZXKD2",
            "isrx": 0,
            "issuper": 1,
            "numcount": 0,
            "defaultposition": "00011",
            "desc": "后二跨度"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组选",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 59,
            "name": "复式",
            "shortname": "exzuxfsh",
            "isrx": 0,
            "issuper": 1,
            "numcount": 0,
            "defaultposition": "00011",
            "desc": "后二复式"
        }, {
            "selectarea": {
                "type": "input"
            },
            "show_str": "X",
            "code_sp": " ",
            "methodid": 12,
            "name": "单式",
            "shortname": "exzuxdsh",
            "isrx": 0,
            "issuper": 1,
            "numcount": 0,
            "defaultposition": "00011",
            "desc": "后二单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 77,
            "name": "和值",
            "shortname": "ZUHZ2",
            "isrx": 0,
            "issuper": 1,
            "numcount": 0,
            "defaultposition": "00011",
            "desc": "后二和值"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "包胆",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "show_str": "X",
            "code_sp": "",
            "methodid": 85,
            "name": "包胆",
            "shortname": "ZU2BD",
            "maxcodecount": 1,
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "00011",
            "desc": "后二包胆"
        }]
    }, {
        "isrx": "0",
        "isdefault": "0",
        "title": "一星",
        "id": 18,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "万位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                },{
                    "title": "千位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                },{
                    "title": "百位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "十位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 3,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "个位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 4,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X,X,X,X,X",
            "code_sp": "",
            "methodid": 78,
            "name": "定位胆",
            "shortname": "dw",
            "isrx": 0,
            "issuper": 1,
            "numcount": 0,
            "defaultposition": "10000",
            "desc": "定位胆"
        }]
    }, {
        "isrx": "0",
        "isdefault": "0",
        "title": "不定位",
        "id": 20,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "不定位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 51,
            "name": "后三一码",
            "shortname": "bdw1mh",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "00111",
            "desc": "后三一码不定位"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "不定位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 18,
            "name": "前三一码",
            "shortname": "bdw1mq",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "前三一码不定位"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "不定位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "show_str": "X",
            "code_sp": ",",
            "methodid": 155,
            "name": "中三一码",
            "shortname": "bdw1mq",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "中三一码不定位"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "不定位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 52,
            "name": "后三二码",
            "shortname": "bdw2mh",
            "isrx": 0,
            "desc": "后三二码不定位"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "不定位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 21,
            "name": "前三二码",
            "shortname": "bdw2mq",
            "isrx": 0,
            "desc": "前三二码不定位"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "不定位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 156,
            "name": "中三二码",
            "shortname": "bdw2mq",
            "isrx": 0,
            "desc": "中三二码不定位"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "不定位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 34,
            "name": "四星一码",
            "shortname": "bdws1m",
            "isrx": 0,
            "desc": "四星一码不定位"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "不定位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 35,
            "name": "四星二码不定位",
            "shortname": "bdws2m",
            "isrx": 0,
            "desc": "四星二码不定位"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "不定位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 36,
            "name": "五星二码不定位",
            "shortname": "bdww2m",
            "isrx": 0,
            "desc": "五星二码不定位"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "不定位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 37,
            "name": "五星三码",
            "shortname": "bdww3m",
            "isrx": 0,
            "desc": "五星三码不定位"
        }]
    }, {
        "isrx": "0",
        "isdefault": "0",
        "title": "趣味",
        "id": 26,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "一帆风顺",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 44,
            "shortname": "qwyffs",
            "isrx": 0,
            "desc": "一帆风顺"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "好事成双",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 45,
            "shortname": "qwhscs",
            "isrx": 0,
            "desc": "好事成双"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "三星报喜",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 46,
            "shortname": "qwsxbx",
            "isrx": 0,
            "desc": "三星报喜"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "四季发财",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 47,
            "shortname": "qwsjfc",
            "isrx": 0,
            "desc": "四季发财"
        }]
    }, {

        "isrx": "0",
        "isdefault": "0",
        "title": "大小单双",
        "id": 24,
        "label": [{
            "selectarea": {
                "type": "dxds",
                "layout": [{
                    "title": "万位",
                    "no": "大|小|单|双",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }, {
                    "title": "千位",
                    "no": "大|小|单|双",
                    "place": 1,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "show_str": "X,X",
            "code_sp": "",
            "methodid": 19,
            "shortname": "dxdsq",
            "name": "前二大小单双",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11000",
            "desc": "前二大小单双"
        }, {
            "selectarea": {
                "type": "dxds",
                "layout": [{
                    "title": "十位",
                    "no": "大|小|单|双",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }, {
                    "title": "个位",
                    "no": "大|小|单|双",
                    "place": 1,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "show_str": "X,X",
            "code_sp": "",
            "methodid": 58,
            "name": "后二大小单双",
            "shortname": "dxdsh",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "00011",
            "desc": "后二大小单双"
        }, {
            "selectarea": {
                "type": "dxds",
                "layout": [{
                    "title": "万位",
                    "no": "大|小|单|双",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }, {
                    "title": "千位",
                    "no": "大|小|单|双",
                    "place": 1,
                    "cols": 1,
                    "tools": false
                }, {
                    "title": "百位",
                    "no": "大|小|单|双",
                    "place": 2,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "show_str": "X,X,X",
            "code_sp": "",
            "methodid": 22,
            "name": "前三大小单双",
            "shortname": "dxdsq3",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "11100",
            "desc": "前三大小单双"
        }, {
            "selectarea": {
                "type": "dxds",
                "layout": [{
                    "title": "百位",
                    "no": "大|小|单|双",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }, {
                    "title": "十位",
                    "no": "大|小|单|双",
                    "place": 1,
                    "cols": 1,
                    "tools": false
                }, {
                    "title": "个位",
                    "no": "大|小|单|双",
                    "place": 2,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "show_str": "X,X,X",
            "code_sp": "",
            "methodid": 53,
            "name": "后三大小单双",
            "shortname": "dxdsh3",
            "desc": "后三大小单双"
        }, {
            "selectarea": {
                "type": "dxds",
                "layout": [{
                    "title": "百位",
                    "no": "大|小|单|双",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }, {
                    "title": "十位",
                    "no": "大|小|单|双",
                    "place": 1,
                    "cols": 1,
                    "tools": false
                }, {
                    "title": "个位",
                    "no": "大|小|单|双",
                    "place": 2,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "show_str": "X,X,X",
            "code_sp": "",
            "methodid": 157,
            "name": "中三大小单双",
            "shortname": "dxdsh3",
            "isrx": 0,
            "issuper": 0,
            "numcount": 0,
            "defaultposition": "00111",
            "desc": "中三大小单双"
        }]
    }, {
        "isrx": "0",
        "isdefault": "0",
        "title": "龙虎",
        "id": 80,
        "label": [{
            "selectarea": {
                "type": "dxds",
                "layout": [{
                    "title": "万千",
                    "no": "龙|虎|和",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "show_str": "X,X",
            "code_sp": "",
            "methodid": 220,
            "shortname": "longhu",
            "isrx":"0",
            "name": "万千",
            "desc": "万千"
        }, {
            "selectarea": {
                "type": "dxds",
                "layout": [{
                    "title": "万百",
                    "no": "龙|虎|和",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "show_str": "X,X",
            "code_sp": "",
            "methodid": 221,
            "shortname": "longhu",
            "isrx":0,
            "name": "万百",
            "desc": "万百"
        }, {
            "selectarea": {
                "type": "dxds",
                "layout": [{
                    "title": "万十",
                    "no": "龙|虎|和",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "show_str": "X,X",
            "code_sp": "",
            "methodid": 222,
            "shortname": "longhu",
            "name": "万十",
            "desc": "万十"
        }, {
            "selectarea": {
                "type": "dxds",
                "layout": [{
                    "title": "万个",
                    "no": "龙|虎|和",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "show_str": "X,X",
            "code_sp": "",
            "methodid": 223,
            "shortname": "longhu",
            "name": "万个",
            "desc": "万个"
        }, {
            "selectarea": {
                "type": "dxds",
                "layout": [{
                    "title": "千百",
                    "no": "龙|虎|和",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "show_str": "X,X",
            "code_sp": "",
            "methodid": 224,
            "shortname": "longhu",
            "name": "万千",
            "desc": "万千"
        }, {
            "selectarea": {
                "type": "dxds",
                "layout": [{
                    "title": "千十",
                    "no": "龙|虎|和",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "show_str": "X,X",
            "code_sp": "",
            "methodid": 225,
            "shortname": "longhu",
            "name": "千十",
            "desc": "千十"
        }, {
            "selectarea": {
                "type": "dxds",
                "layout": [{
                    "title": "千个",
                    "no": "龙|虎|和",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "show_str": "X,X",
            "code_sp": "",
            "methodid": 226,
            "shortname": "longhu",
            "name": "千个",
            "desc": "千个"
        }, {
            "selectarea": {
                "type": "dxds",
                "layout": [{
                    "title": "百十",
                    "no": "龙|虎|和",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "show_str": "X,X",
            "code_sp": "",
            "methodid": 227,
            "shortname": "longhu",
            "name": "百十",
            "desc": "百十"
        }, {
            "selectarea": {
                "type": "dxds",
                "layout": [{
                    "title": "百个",
                    "no": "龙|虎|和",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "show_str": "X,X",
            "code_sp": "",
            "methodid": 228,
            "shortname": "longhu",
            "name": "百个",
            "desc": "百个"
        }, {
            "selectarea": {
                "type": "dxds",
                "layout": [{
                    "title": "十个",
                    "no": "龙|虎|和",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false
            },
            "methodid": 229,
            "shortname": "longhu",
            "name": "十个",
            "desc": "十个"
        }]
    }, {
        "isrx": "1",
        "isdefault": "0",
        "title": "任选",
        "id": 79,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "万位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "千位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "百位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "十位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 3,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "个位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 4,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 199,
            "name": "直选复式",
            "shortname": "sscrx2fs",
            "isrx": 1,
            "desc": "直选复式"

        }, {
            "selectarea": {
                "type": "input",
                "selPosition": true
            },
            "methodid": 200,
            "name": "直选单式",
            "shortname": "sscrx2ds",
            "isrx": 1,
            "defaultposition": "00011",
            "desc": "直选单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false,
                "selPosition": true
            },
            "methodid": 201,
            "name": "直选和值",
            "shortname": "ZXHZ2",
            "isrx": 1,
            "defaultposition": "00011",
            "desc": "直选和值"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组选",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true,
                "selPosition": true
            },
            "methodid": 217,
            "name": "组选复式",
            "shortname": "rx2zx",
            "isrx": 1,
            "defaultposition": "00011",
            "desc": "组选复式"
        }, {
            "selectarea": {
                "type": "input",
                "selPosition": true
            },
            "methodid": 218,
            "name": "组选单式",
            "shortname": "ZU2",
            "isrx": 1,
            "defaultposition": "00011",
            "desc": "组选单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false,
                "selPosition": true
            },
            "methodid": 219,
            "name": "组选和值",
            "shortname": "rx2zxhz",
            "isrx": 1,
            "defaultposition": "00011",
            "desc": "组选和值"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "万位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "千位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "百位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "十位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 3,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "个位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 4,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 202,
            "name": "直选复式",
            "shortname": "sscrx3fs",
            "isrx": 1,
            "desc": "直选复式"
        }, {
            "selectarea": {
                "type": "input",
                "selPosition": true
            },
            "methodid": 203,
            "name": "直选单式",
            "shortname": "sscrx3ds",
            "isrx": 1,
            "defaultposition": "00111",
            "desc": "直选单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "isButton": false,
                "selPosition": true
            },
            "methodid": 204,
            "name": "直选和值",
            "shortname": "ZXHZ3",
            "isrx": 1,
            "defaultposition": "00111",
            "desc": "直选和值"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组三",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true,
                "selPosition": true
            },
            "methodid": 205,
            "name": "组三复式",
            "shortname": "rx3z3",
            "isrx": 1,
            "defaultposition": "00111",
            "desc": "组三复式"
        }, {
            "selectarea": {
                "type": "input",
                "selPosition": true
            },
            "methodid": 206,
            "name": "组三单式",
            "shortname": "RX3Z3DS",
            "isrx": 1,
            "defaultposition": "00111",
            "desc": "组三单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组六",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true,
                "selPosition": true
            },
            "methodid": 207,
            "name": "组六复式",
            "shortname": "rx3z6",
            "isrx": 1,
            "defaultposition": "00111",
            "desc": "组六复式"
        }, {
            "selectarea": {
                "type": "input",
                "selPosition": true
            },
            "methodid": 208,
            "name": "组六单式",
            "shortname": "RX3Z6DS",
            "isrx": 1,
            "defaultposition": "00111",
            "desc": "组六单式"
        }, {
            "selectarea": {
                "type": "input",
                "selPosition": true
            },
            "methodid": 209,
            "name": "混合组选",
            "shortname": "RX3HHZX",
            "isrx": 1,
            "selfposition": true,
            "defaultposition": "00111",
            "desc": "混合组选"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false,
                "selPosition": true
            },
            "methodid": 210,
            "name": "组选和值",
            "shortname": "rx3zxhz",
            "isrx": 1,
            "selfposition": true,
            "defaultposition": "00111",
            "desc": "组选和值"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "万位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "千位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "百位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "十位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 3,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "个位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 4,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 211,
            "name": "直选复式",
            "shortname": "sscrx4fs",
            "isrx": 1,
            "desc": "直选复式"
        }, {
            "selectarea": {
                "type": "input",
                "selPosition": true
            },
            "methodid": 212,
            "name": "直选单式",
            "shortname": "sscrx4ds",
            "isrx": 1,
            "defaultposition": "01111",
            "desc": "直选单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组选24",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1,
                    "minchosen": 4
                }],
                "noBigIndex": 5,
                "isButton": true,
                "selPosition": true
            },
            "methodid": 213,
            "name": "组选24",
            "shortname": "rx4zx24",
            "isrx": 1,
            "defaultposition": "01111",
            "desc": "组选24"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "二重号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "cols": 1,
                    "tools": true,
                    "minchosen": 1
                }, {
                    "title": "单　号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "tools": true,
                    "cols": 1,
                    "minchosen": 2
                }],
                "noBigIndex": 5,
                "isButton": true,
                "selPosition": true
            },
            "methodid": 214,
            "name": "组选12",
            "shortname": "rx4zx12",
            "isrx": 1,
            "defaultposition": "01111",
            "desc": "组选12"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "二重号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1,
                    "minchosen": 2
                }],
                "noBigIndex": 5,
                "isButton": true,
                "selPosition": true
            },
            "methodid": 215,
            "name": "组选6",
            "shortname": "rx4zx6",
            "isrx": 1,
            "defaultposition": "01111",
            "desc": "组选6"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "三重号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1,
                    "minchosen": 1
                }, {
                    "title": "单　号",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,
                    "tools": true,
                    "cols": 1,
                    "minchosen": 1
                }],
                "noBigIndex": 5,
                "isButton": true,
                "selPosition": true
            },
            "methodid": 216,
            "name": "组选4",
            "shortname": "rx4zx4",
            "isrx": 1,
            "defaultposition": "01111",
            "desc": "组选4"
        }]
    },{
        isrx: "0",
        isdefault: "0",
        title: "斗牛/梭哈",
        id: 180,
        label: [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "斗牛",
                    "no": "牛牛|牛一|牛二|牛三|牛四|牛五|牛六|牛七|牛八|牛九|牛小|牛大|牛双|牛单|没牛",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "methodid": 286,
            "name": "斗牛",
            "shortname": "douniu",
            "isrx": 0,
            "defaultposition": "00111",
            "desc": "斗牛"
        },{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "梭哈",
                    "no": "五条|四条|三条|两对|一对|葫芦|顺子|散号",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "methodid": 287,
            "name": "梭哈",
            "shortname": "suoha",
            "isrx": 0,
            "defaultposition": "00111",
            "desc": "梭哈"
        }]
    }]
}

export function x115Layout() {
    return [{
        "isdefault": "1",
        "isrx": "0",
        "id": 30,
        "title": "三码",
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "第一位",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "第二位",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "第三位",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 112,
            "shortname": "sanmzhixfsq",
            "name": "前三直选复式",
            "isrx": 0,
            "desc": "前三直选复式"
        }, {
            "selectarea": {
                "type": "input",
                "singletypetips": "三码 01 02 03;02 03 04任选 01 02 03 04 05"
            },
            "methodid": 95,
            "name": "前三直选单式",
            "shortname": "sanmzhixdsq",
            "isrx": 0,
            "desc": "前三直选单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组选",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "tools": true,
                    "cols": 1,
                    "minchosen": 3
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 108,
            "name": "前三组选复式",
            "shortname": "sanmzuxfsq",
            "isrx": 0,
            "desc": "前三组选复式"
        }, {
            "selectarea": {
                "type": "input",
                "singletypetips": "三码 01 02 03;02 03 04任选 01 02 03 04 05"
            },
            "methodid": 97,
            "shortname": "sanmzuxdsq",
            "name": "前三组选单式",
            "isrx": 0,
            "desc": "前三组选单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "胆码",
                    "title_en": "danma",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "tools": false,
                    "maxpic": 2,
                    "isdt": 1,
                    "cols": 1
                }, {
                    "title": "拖码",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 1,
                    "cols": 1,
                    "tools": true,
                }],
                "noBigIndex": 5,
                "isButton": true,
                "isDanTuo": true
            },
            "methodid": 121,
            "name": "前三组选胆拖",
            "shortname": "sanmazxtd",
            "isrx": 0,
            "desc": "前三组选胆拖"
        }]
    }, {
        "title": "二码",
        "isrx": 0,
        "id": 31,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "第一位",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "第二位",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 111,
            "name": "前二直选复式",
            "shortname": "ermzhixfsq",
            "isrx": 0,
            "desc": "前二直选复式"
        }, {
            "selectarea": {
                "type": "input",
                "singletypetips": "三码 01 02 03;02 03 04任选 01 02 03 04 05"
            },
            "methodid": 94,
            "name": "前二直选单式",
            "shortname": "ermzhixdsq",
            "isrx": 0,
            "desc": "前二直选单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组选",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "tools": true,
                    "cols": 1,
                    "minchosen": 2
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 107,
            "name": "前二组选复式",
            "shortname": "ermzuxfsq",
            "isrx": 0,
            "desc": "前二组选复式"
        }, {
            "selectarea": {
                "type": "input",
                "singletypetips": "三码 01 02 03;02 03 04任选 01 02 03 04 05"
            },
            "methodid": 96,
            "name": "前二组选单式",
            "shortname": "ermzuxdsq",
            "isrx": 0,
            "desc": "前二组选单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "胆码",
                    "title_en": "danma",
                    "maxpic": 1,
                    "isdt": 1,
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "tools": false,
                    "cols": 1
                }, {
                    "title": "拖码",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true,
                "isDanTuo": true
            },
            "methodid": 120,
            "name": "前二组选胆拖",
            "shortname": "ermazxtd",
            "isrx": 0,
            "desc": "前二组选胆拖"
        }]
    }, {
        "title": "不定位",
        "isrx": 0,
        "id": 32,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "前三位",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 122,
            "name": "前三位",
            "shortname": "bdw",
            "isrx": 0,
            "desc": "前三位"
        }]
    }, {
        "title": "定位胆",
        "isrx": "0",
        "id": 42,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "第一位",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "第二位",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "第三位",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 106,
            "name": "定位胆",
            "shortname": "dwd",
            "isrx": 0,
            "desc": "定位胆"
        }]
    }, {
        "title": "趣味型",
        "isrx": "0",
        "id": 33,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "定单双",
                    "no": "5单0双|4单1双|3单2双|2单3双|1单4双|0单5双",
                    "place": 0,
                    "cols": 0
                }]
            },
            "methodid": 109,
            "name": "定单双",
            "shortname": "dds",
            "isrx": 0,
            "desc": "趣味_定单双"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "猜中位",
                    "no": "3|4|5|6|7|8|9",
                    "place": 0,
                    "cols": 1
                }],
                "noBigIndex": 3,
                "isButton": true
            },
            "methodid": 110,
            "name": "猜中位",
            "shortname": "czw",
            "isrx": 0,
            "desc": "趣味_猜中位"
        }]
    }, {
        "title": "任选复式",
        "isrx": "1",
        "id": 34,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "选1中1",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 98,
            "name": "任选一中一",
            "shortname": "rx1fs",
            "isrx": 0,
            "desc": "任选一中一"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "选2中2",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "tools": true,
                    "cols": 1,
                    "minchosen": 2
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 99,
            "name": "任选二中二",
            "shortname": "rx2fs",
            "isrx": 0,
            "desc": "任选二中二"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "选3中3",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "tools": true,
                    "cols": 1,
                    "minchosen": 3
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 100,
            "name": "任选三中三",
            "shortname": "rx3fs",
            "isrx": 0,
            "desc": "任选三中三"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "选4中4",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "tools": true,
                    "cols": 1,
                    "minchosen": 4
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 101,
            "name": "任选四中四",
            "shortname": "rx4fs",
            "isrx": 0,
            "desc": "任选四中四"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "选5中5",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "tools": true,
                    "cols": 1,
                    "minchosen": 5
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 102,
            "name": "任选五中五",
            "shortname": "rx5fs",
            "isrx": 0,
            "desc": "任选五中五"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "选6中5",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "cols": 1,
                    "tools": true,
                    "minchosen": 6
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 103,
            "name": "任选六中五",
            "shortname": "rx6fs",
            "isrx": 0,
            "desc": "任选六中五"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "选7中5",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "tools": true,
                    "cols": 1,
                    "minchosen": 7
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 104,
            "shortname": "rx7fs",
            "name": "任选七中五",
            "isrx": 0,
            "desc": "任选七中五"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "选8中5",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "cols": 1,
                    "tools": true,
                    "minchosen": 8
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 105,
            "name": "任选八中五",
            "shortname": "rx8fs",
            "isrx": 0,
            "desc": "任选八中五"
        }]
    }, {
        "title": "任选单式",
        "isrx": "1",
        "id": 35,
        "label": [{
            "selectarea": {
                "type": "input",
                "singletypetips": "三码 01 02 03;02 03 04任选 01 02 03 04 05"
            },
            "methodid": 86,
            "name": "任选一中一",
            "shortname": "rx1ds",
            "isrx": 0,
            "desc": "任选一中一"
        }, {
            "selectarea": {
                "type": "input",
                "singletypetips": "三码 01 02 03;02 03 04任选 01 02 03 04 05"
            },
            "methodid": 87,
            "name": "任选二中二",
            "shortname": "rx2ds",
            "isrx": 0,
            "desc": "任选二中二"
        }, {
            "selectarea": {
                "type": "input",
                "singletypetips": "三码 01 02 03;02 03 04任选 01 02 03 04 05"
            },
            "methodid": 88,
            "name": "任选三中三",
            "shortname": "rx3ds",
            "isrx": 0,
            "desc": "任选三中三"
        }, {
            "selectarea": {
                "type": "input",
                "singletypetips": "三码 01 02 03;02 03 04任选 01 02 03 04 05"
            },
            "methodid": 89,
            "name": "任选四中四",
            "shortname": "rx4ds",
            "isrx": 0,

            "desc": "任选四中四"
        }, {
            "selectarea": {
                "type": "input",
                "singletypetips": "三码 01 02 03;02 03 04任选 01 02 03 04 05"
            },
            "methodid": 90,
            "name": "任选五中五",
            "shortname": "rx5ds",
            "isrx": 0,
            "desc": "任选五中五"
        }, {
            "selectarea": {
                "type": "input",
                "singletypetips": "三码 01 02 03;02 03 04任选 01 02 03 04 05"
            },
            "methodid": 91,
            "name": "任选六中五",
            "shortname": "rx6ds",
            "isrx": 0,
            "desc": "任选六中五"
        }, {
            "selectarea": {
                "type": "input",
                "singletypetips": "三码 01 02 03;02 03 04任选 01 02 03 04 05"
            },
            "methodid": 92,
            "name": "任选七中五",
            "shortname": "rx7ds",
            "isrx": 0,
            "desc": "任选七中五"
        }, {
            "selectarea": {
                "type": "input",
                "singletypetips": "三码 01 02 03;02 03 04任选 01 02 03 04 05"
            },
            "methodid": 93,
            "name": "任选八中五",
            "shortname": "rx8ds",
            "isrx": 0,
            "desc": "任选八中五"
        }]
    }, {
        "title": "任选胆拖",
        "id": 36,
        "isrx": "1",
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "胆码",
                    "title_en": "danma",
                    "maxpic": 1,
                    "isdt": 1,
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "tools": false,
                    "cols": 1
                }, {
                    "title": "拖码",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true,
                "isDanTuo": true
            },
            "methodid": 113,
            "name": "任选二中二",
            "shortname": "rxtd2d2",
            "isrx": 0,
            "desc": "任选二中二"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "胆码",
                    "title_en": "danma",
                    "maxpic": 2,
                    "isdt": 1,
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "tools": false,
                    "cols": 1
                }, {
                    "title": "拖码",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true,
                "isDanTuo": true
            },
            "methodid": 114,
            "name": "任选三中三",
            "shortname": "rxtd3d3",
            "isrx": 0,
            "desc": "任选三中三"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "胆码",
                    "title_en": "danma",
                    "maxpic": 3,
                    "isdt": 1,
                    "tools": false,
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "cols": 1
                }, {
                    "title": "拖码",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true,
                "isDanTuo": true
            },
            "methodid": 115,
            "name": "任选四中四",
            "shortname": "rxtd4d4",
            "isrx": 0,
            "desc": "任选四中四"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "胆码",
                    "title_en": "danma",
                    "maxpic": 4,
                    "isdt": 1,
                    "tools": false,
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "cols": 1
                }, {
                    "title": "拖码",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true,
                "isDanTuo": true
            },
            "show_str": "X] X",
            "code_sp": ",",
            "methodid": 116,
            "name": "任选五中五",
            "shortname": "rxtd5d5",
            "isrx": 0,
            "desc": "任选五中五"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "胆码",
                    "title_en": "danma",
                    "tools": false,
                    "maxpic": 5,
                    "isdt": 1,
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "cols": 1
                }, {
                    "title": "拖码",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true,
                "isDanTuo": true
            },
            "methodid": 117,
            "name": "任选六中五",
            "shortname": "rxtd6d5",
            "isrx": 0,
            "desc": "任选六中五"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "胆码",
                    "title_en": "danma",
                    "maxpic": 6,
                    "isdt": 1,
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "tools": false,
                    "cols": 1
                }, {
                    "title": "拖码",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true,
                "isDanTuo": true
            },
            "methodid": 118,
            "name": "任选七中五",
            "shortname": "rxtd7d5",
            "isrx": 0,
            "desc": "任选七中五"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "胆码",
                    "title_en": "danma",
                    "maxpic": 7,
                    "isdt": 1,
                    "tools": false,
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 0,
                    "cols": 1
                }, {
                    "title": "拖码",
                    "no": "01|02|03|04|05|06|07|08|09|10|11",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true,
                "isDanTuo": true
            },
            "methodid": 119,
            "name": "任选八中五",
            "shortname": "rxtd8d5",
            "isrx": 0,
            "desc": "任选八中五"
        }]
    }]
}
export function k3Layout() {
    return [{
        "isrx": "0",
        "isdefault": "1",
        "title": "快3",
        "id": 85,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18",
                    "place": 0,
                    "cols": 1
                }],
                "isButton": false
            },
            "methodid": 237,
            "name": "和值",
            "shortname": "hezhi",
            "isrx": 0,
            "desc": "和值"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "三同号",
                    "no": "111|222|333|444|555|666",
                    "place": 0,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "methodid": 230,
            "shortname": "sthdx",
            "name": "三同号单选",
            "isrx": 0,
            "desc": "三同号单选"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "二同号",
                    "no": "112|122|133|144|155|166|113|223|233|244|255|266|114|224|334|344|355|366|115|225|335|445|455|466|116|226|336|446|556|566",
                    "place": 0,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "methodid": 231,
            "shortname": "ethdx",
            "name": "二同号单选",
            "isrx": 0,
            "desc": "二同号单选"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "三不同号",
                    "no": "123|134|146|236|345|124|135|156|245|346|125|136|234|246|356|126|145|235|256|456",
                    "place": 0,
                    "cols": 1
                }],
                "isButton": false
            },
            "methodid": 233,
            "shortname": "sbthdx",
            "name": "三不同号",
            "isrx": 0,
            "desc": "三不同号"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "二不同号",
                    "no": "12|13|14|15|16|23|24|25|26|34|35|36|45|46|56",
                    "place": 0,
                    "cols": 1
                }],
                "isButton": false
            },
            "methodid": 234,
            "shortname": "ebthdx",
            "name": "二不同号",
            "isrx": 0,
            "desc": "二不同号"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "三连号",
                    "no": "123|234|345|456",
                    "place": 0,
                    "cols": 1
                }],
                "isButton": false
            },
            "methodid": 235,
            "shortname": "slhtx",
            "name": "三连号",
            "isrx": 0,
            "desc": "三连号"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "单挑一骰",
                    "no": "1|2|3|4|5|6",
                    "place": 0,
                    "cols": 1
                }],
                "isButton": false
            },
            "methodid": 236,
            "shortname": "dtyg",
            "name": "单挑一骰",
            "isrx": 0,
            "desc": "单挑一骰"
        }]
    }]
}

export function pk10Layout() {
    return [{
        "isdefault": "1",
        "isrx": "0",
        "title": "和值",
        "id": 93,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "methodid": 257,
            "shortname": "pk10hezhi",
            "name": "和值",
            "isrx": 0,
            "desc": "和值"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "methodid": 270,
            "name": "前三和值",
            "shortname": "pk10qiansanhezhi",
            "isrx": 0,
            "desc": "前三和值"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "methodid": 269,
            "name": "后二和值",
            "shortname": "pk10houerhezhi",
            "isrx": 0,
            "desc": "后二和值"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "methodid": 271,
            "shortname": "pk10housanhezhi",
            "name": "后三和值",
            "isrx": 0,
            "desc": "后三和值"
        }]
    }, {
        "title": "大小单双",
        "isrx": 0,
        "id": 94,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "冠军",
                    "no": "大|小|单|双",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }, {
                    "title": "亚军",
                    "no": "大|小|单|双",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }, {
                    "title": "第三名",
                    "no": "大|小|单|双",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }, {
                    "title": "第四名",
                    "no": "大|小|单|双",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }, {
                    "title": "第五名",
                    "no": "大|小|单|双",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }, {
                    "title": "第六名",
                    "no": "大|小|单|双",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }, {
                    "title": "第七名",
                    "no": "大|小|单|双",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }, {
                    "title": "第八名",
                    "no": "大|小|单|双",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }, {
                    "title": "第九名",
                    "no": "大|小|单|双",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }, {
                    "title": "第十名",
                    "no": "大|小|单|双",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 272,
            "name": "大小单双",
            "shortname": "pk10daxiaodanshuang",
            "isrx": 0,
            "desc": "大小单双"
        }]
    }, {
        "title": "龙虎",
        "isrx": 0,
        "id": 103,
        "label": [{
            "selectarea": {
                "type": "dxds",
                "layout": [{
                    "title": "1v10",
                    "no": "龙|虎",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 285,
            "name": "龙虎",
            "shortname": "pk10longhu",
            "isrx": 0,
            "desc": "龙虎"
        }]
    }, {
        "title": "猜车号",
        "isrx": "0",
        "id": 95,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "第一位",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "第二位",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "第三位",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "第四位",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "第五位",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "第六位",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "第七位",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "第八位",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "第九位",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "第十位",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 258,
            "name": "猜车号",
            "shortname": "pk10caichehao",
            "isrx": 0,
            "desc": "猜车号"
        }]
    }, {
        "title": "猜排位",
        "isrx": "0",
        "id": 96,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "冠军",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "亚军",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 259,
            "name": "冠亚军",
            "shortname": "pk10caipaiweiguanyajun",
            "isrx": 0,
            "desc": "冠亚军"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "冠军",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "亚军",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "第三位",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 260,
            "name": "前三",
            "shortname": "pk10caipaiweiqiansan",
            "isrx": 0,
            "desc": "前三"
        }, {
            "selectarea": {
                "type": "input"
            },
            "methodid": 278,
            "name": "前三单式",
            "shortname": "pk10qiansandanshi",
            "isrx": 0,
            "desc": "前三单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "冠军",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "亚军",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 1,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "第三位",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "第四位",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 2,
                    "tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 261,
            "name": "前四",
            "shortname": "pk10caipaiweiqiansi",
            "isrx": 0,
            "desc": "前四"
        }, {
            "selectarea": {
                "type": "input"
            },
            "methodid": 279,
            "name": "前四单式",
            "shortname": "pk10qiansidanshi",
            "isrx": 0,
            "desc": "前四单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "冠军",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "亚军",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "tools": true,
                    "place": 1,
                    "cols": 1
                }, {
                    "title": "第三位",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "tools": true,
                    "place": 2,
                    "cols": 1
                }, {
                    "title": "第四位",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "tools": true,
                    "place": 2,
                    "cols": 1
                }, {
                    "title": "第五位",
                    "no": "01|02|03|04|05|06|07|08|09|10",
                    "tools": true,
                    "place": 2,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 262,
            "name": "前五",
            "shortname": "pk10caipaiweiqianwu",
            "isrx": 0,
            "desc": "前五"
        }, {
            "selectarea": {
                "type": "input"
            },
            "methodid": 280,
            "name": "前五单式",
            "shortname": "pk10qianwudanshi",
            "isrx": 0,
            "desc": "前五单式"
        }]
    }]
}
export function p35Layout() {
    return [{
        "isrx": "0",
        "isdefault": "1",
        "id": 67,
        "title": "排三",
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "万位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,
                    "tools": true,
                    "cols": 1
                }, {
                    "title": "千位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,"tools": true,
                    "cols": 1
                }, {
                    "title": "百位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 2,"tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 189,
            "name": "复式",
            "shortname": "sxzhixfsq",
            "isrx": 0,
            "desc": "直选复式"
        }, {
            "selectarea": {
                "type": "input",
                "singletypetips": "三星123,234"
            },
            "methodid": 177,
            "name": "单式",
            "shortname": "sxzhixdsq",
            "isrx": 0,
            "desc": "直选单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27",
                    "place": 0,
                    "tools": false,
                    "cols": 1
                }],
                "isButton": false
            },
            "methodid": 192,
            "name": "和值",
            "shortname": "sxzhixhzq",
            "isrx": 0,
            "desc": "直选和值"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组三",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,"tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 184,
            "name": "组三复式",
            "shortname": "sxzuxzsq",
            "isrx": 0,
            "desc": "组三复式"
        }, {
            "methodexample": "投注方案:001；开奖号码:1 个 1，2 个 0 (顺序不限)，即中组选三。",
            "selectarea": {
                "type": "input",
                "singletypetips": "三星112,363"
            },
            "methodid": 178,
            "name": "组三单式",
            "shortname": "ZUS",
            "isrx": 0,
            "desc": "组三单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组六",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,"tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 185,
            "name": "组六复式",
            "shortname": "sxzuxzlq",
            "isrx": 0,
            "desc": "组六复式"
        }, {
            "methodexample": "投注方案:123；开奖号码:1 个 1，1 个 2，1 个 3 (顺序不限)，即中组选六。",
            "selectarea": {
                "type": "input",
                "singletypetips": "三星123,234"
            },
            "methodid": 179,
            "name": "组六单式",
            "shortname": "ZUL",
            "isrx": 0,
            "desc": "组六单式"
        }, {
            "selectarea": {
                "type": "input",
                "singletypetips": "三星123,234"
            },
            "methodid": 195,
            "name": "混合组选",
            "shortname": "sxhhzxq",
            "isrx": 0,
            "desc": "混合组选"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "和值",
                    "no": "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26",
                    "place": 0,
                    "cols": 1,
                    "tools": false
                }],
                "noBigIndex": 5,
                "isButton": false
            },
            "methodid": 193,
            "name": "组选和值",
            "shortname": "ZUHZ",
            "isrx": 0,
            "desc": "组选和值"
        }]
    }, {
        "isrx": "0",
        "isdefault": "0",
        "title": "二星",
        "id": 68,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "百位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,"tools": true,
                    "cols": 1
                }, {
                    "title": "十位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,"tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 190,
            "name": "前二(排五)直选复式",
            "shortname": "exzhixfsq",
            "isrx": 0,
            "desc": "(前二)直选复式"
        }, {
            "selectarea": {
                "type": "input",
                "singletypetips": "三星123,234"
            },
            "methodid": 180,
            "name": "前二(排五)直选单式",
            "shortname": "exzhixdsq",
            "isrx": 0,
            "desc": "(前二)直选单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "十位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,"tools": true,
                    "cols": 1
                }, {
                    "title": "个位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,"tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 191,
            "name": "后二(排五)直选复式",
            "shortname": "exzhixfsh",
            "isrx": 0,
            "desc": "(后二)直选复式"
        }, {
            "selectarea": {
                "type": "input",
                "singletypetips": "三星123,234"
            },
            "methodid": 182,
            "name": "后二(排五)直选单式",
            "shortname": "exzhixdsh",
            "isrx": 0,
            "desc": "(后二)直选单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组选",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,"tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 187,
            "name": "前二(排五)组选复式",
            "shortname": "exzuxfsq",
            "isrx": 0,
            "desc": "(前二)组选复式"
        }, {
            "selectarea": {
                "type": "input",
                "singletypetips": "三星123,234"
            },
            "methodid": 181,
            "name": "前二(排五)组选单式",
            "shortname": "exzuxdsq",
            "isrx": 0,
            "desc": "(前二)组选单式"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "组选",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,"tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 188,
            "name": "后二(排五)组选复式",
            "shortname": "exzuxfsh",
            "isrx": 0,
            "desc": "(后二)组选复式"
        }, {
            "selectarea": {
                "type": "input",
                "singletypetips": "三星123,234"
            },
            "methodid": 183,
            "name": "后二(排五)组选单式",
            "shortname": "exzhixdsh",
            "isrx": 0,
            "desc": "(后二)组选单式"
        }]
    }, {
        "isrx": "0",
        "isdefault": "0",
        "title": "一星",
        "id": 69,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "万位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,"tools": true,
                    "cols": 1
                }, {
                    "title": "千位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,"tools": true,
                    "cols": 1
                }, {
                    "title": "百位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,"tools": true,
                    "cols": 1
                }, {
                    "title": "十位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 1,"tools": true,
                    "cols": 1
                }, {
                    "title": "个位",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 2,"tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 194,
            "name": "定位胆",
            "shortname": "dw",
            "isrx": 0,
            "desc": "定位胆"
        }]
    }, {
        "isrx": "0",
        "isdefault": "0",
        "title": "不定位",
        "id": 70,
        "label": [{
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "一码 ",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,"tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 186,
            "name": "前三一码不定位",
            "shortname": "bdw1mh",
            "isrx": 0,
            "desc": "一码不定位"
        }, {
            "selectarea": {
                "type": "digital",
                "layout": [{
                    "title": "二码",
                    "no": "0|1|2|3|4|5|6|7|8|9",
                    "place": 0,"tools": true,
                    "cols": 1
                }],
                "noBigIndex": 5,
                "isButton": true
            },
            "methodid": 196,
            "name": "前三二码不定位",
            "shortname": "bdw2mh",
            "isrx": 0,
            "desc": "二码不定位"
        }]
    }, {
        "isrx": "0",
        "isdefault": "0",
        "title": "大小单双",
        "id": 71,
        "label": [{
            "selectarea": {
                "type": "dxds",
                "layout": [{
                    "title": "百位",
                    "no": "大|小|单|双",
                    "place": 0,
                    "cols": 1
                }, {
                    "title": "十位",
                    "no": "大|小|单|双",
                    "place": 1,
                    "cols": 1
                }]
            },
            "methodid": 197,
            "name": "前二大小单双",
            "shortname": "dxdsq",
            "isrx": 0,
            "desc": "前二大小单双"
        }, {
            "selectarea": {
                "type": "dxds",
                "layout": [{
                    "title": "十位",
                    "no": "大|小|单|双",
                    "place": 0,
                    "cols": 1
                }, {
                    "title": "个位",
                    "no": "大|小|单|双",
                    "place": 1,
                    "cols": 1
                }]
            },
            "methodid": 198,
            "name": "后二大小单双",
            "shortname": "dxdsh",
            "isrx": 0,
            "desc": "后二大小单双"
        }]
    }]
}

export function d3Layout() {
    return [{
        isrx: "0",
        isdefault: "1",
        title: "三星",
        id: 48,
        label: [{
            selectarea: {
                type: "digital",
                layout: [{
                    title: "百位",
                    no: "0|1|2|3|4|5|6|7|8|9",
                    place: 0,
                    tools: true,
                    cols: 1
                }, {
                    title: "十位",
                    no: "0|1|2|3|4|5|6|7|8|9",
                    place: 1,
                    tools: true,
                    cols: 1
                }, {
                    title: "个位",
                    no: "0|1|2|3|4|5|6|7|8|9",
                    tools: true,
                    place: 2,
                    cols: 1
                }],
                noBigIndex: 5,
                isButton: true
            },
            methodid: 136,
            name: "复式",
            shortname: "sxzhixfsq",
            isrx: 0,
            desc: "直选复式"
        }, {
            selectarea: {
                type: "input",
                singletypetips: "三星123,234"
            },
            methodid: 123,
            name: "单式",
            shortname: "sxzhixdsq",
            isrx: 0,
            desc: "直选单式"
        }, {
            selectarea: {
                type: "digital",
                layout: [{
                    title: "和值",
                    no: "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27",
                    place: 0,
                    tools: !1,
                    cols: 1
                }],
                isButton: !1
            },
            methodid: 139,
            name: "和值",
            shortname: "sxzhixhzq",
            isrx: 0,
            desc: "直选和值"
        }, {
            selectarea: {
                type: "digital",
                layout: [{
                    title: "组三",
                    no: "0|1|2|3|4|5|6|7|8|9",
                    place: 0,
                    tools: true,
                    cols: 1
                }],
                noBigIndex: 5,
                isButton: !0
            },
            methodid: 131,
            name: "组三复式",
            shortname: "sxzuxzsq",
            isrx: 0,
            desc: "组三复式"
        }, {
            methodexample: "投注方案:001；开奖号码:1 个 1，2 个 0 (顺序不限)，即中组选三。",
            selectarea: {
                type: "input",
                singletypetips: "三星112,363"
            },
            methodid: 124,
            name: "组三单式",
            shortname: "ZUS",
            isrx: 0,
            desc: "组三单式"
        }, {
            selectarea: {
                type: "digital",
                layout: [{
                    title: "组六",
                    no: "0|1|2|3|4|5|6|7|8|9",
                    place: 0,tools: true,
                    cols: 1
                }],
                noBigIndex: 5,
                isButton: !0
            },
            methodid: 132,
            name: "组六复式",
            shortname: "sxzuxzlq",
            isrx: 0,
            desc: "组六复式"
        }, {
            methodexample: "投注方案:123；开奖号码:1 个 1，1 个 2，1 个 3 (顺序不限)，即中组选六。",
            selectarea: {
                type: "input",
                singletypetips: "三星123,234"
            },
            methodid: 125,
            name: "组六单式",
            shortname: "ZUL",
            isrx: 0,
            desc: "组六单式"
        }, {
            selectarea: {
                type: "input",
                singletypetips: "三星123,234"
            },
            methodid: 130,
            name: "混合组选",
            shortname: "sxhhzxq",
            isrx: 0,
            desc: "混合组选"
        }, {
            selectarea: {
                type: "digital",
                layout: [{
                    title: "和值",
                    no: "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26",
                    place: 0,
                    cols: 1,
                    tools: !1
                }],
                noBigIndex: 5,
                isButton: !1
            },
            methodid: 140,
            name: "组选和值",
            shortname: "ZUHZ",
            isrx: 0,
            desc: "组选和值"
        }]
    }, {
        isrx: "0",
        isdefault: "0",
        title: "二星",
        id: 49,
        label: [{
            selectarea: {
                type: "digital",
                layout: [{
                    title: "百位",
                    no: "0|1|2|3|4|5|6|7|8|9",
                    place: 0,tools: true,
                    cols: 1
                }, {
                    title: "十位",
                    no: "0|1|2|3|4|5|6|7|8|9",
                    place: 1,tools: true,
                    cols: 1
                }],
                noBigIndex: 5,
                isButton: !0
            },
            methodid: 137,
            name: "前二直选复式",
            shortname: "exzhixfsq",
            isrx: 0,
            desc: "(前二)直选复式"
        }, {
            selectarea: {
                type: "input",
                singletypetips: "三星123,234"
            },
            methodid: 126,
            name: "前二直选单式",
            shortname: "exzhixdsq",
            isrx: 0,
            desc: "(前二)直选单式"
        }, {
            selectarea: {
                type: "digital",
                layout: [{
                    title: "十位",
                    no: "0|1|2|3|4|5|6|7|8|9",
                    place: 0,tools: true,
                    cols: 1
                }, {
                    title: "个位",
                    no: "0|1|2|3|4|5|6|7|8|9",
                    place: 1,tools: true,
                    cols: 1
                }],
                noBigIndex: 5,
                isButton: !0
            },
            methodid: 138,
            name: "后二直选复式",
            shortname: "exzhixfsh",
            isrx: 0,
            desc: "(后二)直选复式"
        }, {
            selectarea: {
                type: "input",
                singletypetips: "三星123,234"
            },
            methodid: 128,
            name: "后二直选单式",
            shortname: "exzhixdsh",
            isrx: 0,
            desc: "(后二)直选单式"
        }, {
            selectarea: {
                type: "digital",
                layout: [{
                    title: "组选",
                    no: "0|1|2|3|4|5|6|7|8|9",
                    place: 0,tools: true,
                    cols: 1
                }],
                noBigIndex: 5,
                isButton: !0
            },
            methodid: 134,
            name: "前二组选复式",
            shortname: "exzuxfsq",
            isrx: 0,
            desc: "(前二)组选复式"
        }, {
            selectarea: {
                type: "input",
                singletypetips: "三星123,234"
            },
            methodid: 127,
            name: "前二组选单式",
            shortname: "exzuxdsq",
            isrx: 0,
            desc: "(前二)组选单式"
        }, {
            selectarea: {
                type: "digital",
                layout: [{
                    title: "组选",
                    no: "0|1|2|3|4|5|6|7|8|9",
                    place: 0,tools: true,
                    cols: 1
                }],
                noBigIndex: 5,
                isButton: !0
            },
            methodid: 135,
            name: "后二组选复式",
            shortname: "exzuxfsh",
            isrx: 0,
            desc: "(后二)组选复式"
        }, {
            selectarea: {
                type: "input",
                singletypetips: "三星123,234"
            },
            methodid: 129,
            name: "后二组选单式",
            shortname: "exzhixdsh",
            isrx: 0,
            desc: "(后二)组选单式"
        }]
    }, {
        isrx: "0",
        isdefault: "0",
        title: "一星",
        id: 50,
        label: [{
            selectarea: {
                type: "digital",
                layout: [{
                    title: "百位",
                    no: "0|1|2|3|4|5|6|7|8|9",
                    place: 0,tools: true,
                    cols: 1
                }, {
                    title: "十位",
                    no: "0|1|2|3|4|5|6|7|8|9",
                    place: 1,tools: true,
                    cols: 1
                }, {
                    title: "个位",
                    no: "0|1|2|3|4|5|6|7|8|9",
                    place: 2,tools: true,
                    cols: 1
                }],
                noBigIndex: 5,
                isButton: !0
            },
            methodid: 141,
            name: "定位胆",
            shortname: "dwd3d",
            isrx: 0,
            desc: "定位胆"
        }]
    }, {
        isrx: "0",
        isdefault: "0",
        title: "不定位",
        id: 51,
        label: [{
            selectarea: {
                type: "digital",
                layout: [{
                    title: "一码 ",
                    no: "0|1|2|3|4|5|6|7|8|9",
                    place: 0,tools: true,
                    cols: 1
                }],
                noBigIndex: 5,
                isButton: !0
            },
            methodid: 133,
            name: "一码不定位",
            shortname: "bdw1mh",
            isrx: 0,
            desc: "一码不定位"
        }, {
            selectarea: {
                type: "digital",
                layout: [{
                    title: "二码",
                    no: "0|1|2|3|4|5|6|7|8|9",
                    place: 0,tools: true,
                    cols: 1
                }],
                noBigIndex: 5,
                isButton: !0
            },
            methodid: 162,
            name: "二码不定位",
            shortname: "bdw2mh",
            isrx: 0,
            desc: "二码不定位"
        }]
    }, {
        isrx: "0",
        isdefault: "0",
        title: "大小单双",
        id: 65,
        label: [{
            selectarea: {
                type: "dxds",
                layout: [{
                    title: "百位",
                    no: "大|小|单|双",
                    place: 0,
                    cols: 1
                }, {
                    title: "十位",
                    no: "大|小|单|双",
                    place: 1,
                    cols: 1
                }]
            },
            methodid: 175,
            name: "前二大小单双",
            shortname: "dxdsq",
            isrx: 0,
            desc: "前二大小单双"
        }, {
            selectarea: {
                type: "dxds",
                layout: [{
                    title: "十位",
                    no: "大|小|单|双",
                    place: 0,
                    cols: 1
                }, {
                    title: "个位",
                    no: "大|小|单|双",
                    place: 1,
                    cols: 1
                }]
            },
            methodid: 176,
            name: "后二大小单双",
            shortname: "dxdsh",
            isrx: 0,
            desc: "后二大小单双"
        }]
    }]
}
