import { notification } from "antd";
export function qqtjm(s) {
  var es = [],
    c = "",
    ec = "";
  s = s.split("");
  for (var i = 0, length = s.length; i < length; i++) {
    c = s[i];
    ec = encodeURIComponent(c);
    if (ec === c) {
      ec = c.charCodeAt().toString(16);
      ec = ("00" + ec).slice(-2);
    }
    es.push(ec);
  }
  return es
    .join("")
    .replace(/%/g, "")
    .toUpperCase();
}

export function showNotification(type, title, message, duration) {
  notification[type]({
    message: title,
    description: message,
    duration: duration || 4.5
  });
}

var filterErrorData = function(a) {
  var s = [],
    l = 0,
    i = a.length,
    e = 0,
    n = {},
    t,
    r = !1;
  for (l = 0; i > l; l++) {
    for (n = {}, r = !1, e = 0, t = a[l].length; t > e; e++) {
      n["" + a[l][e]] && (r = !0) && (n["" + a[l][e]] = !0);
    }
    r || s.push(a[l]);
  }
  return s;
};
//二维数组的排列组合
//arr2 二维数组
var combination = function(arr2) {
  if (arr2.length < 1) {
    return [];
  }
  var h = arr2.length,
    i,
    j,
    m = [],
    n,
    result = [],
    _row = [];

  m[(i = h)] = 1;

  while (i--) {
    m[i] = m[i + 1] * arr2[i].length;
  }
  n = m[0];
  for (i = 0; i < n; i++) {
    _row = [];
    for (j = 0; j < h; j++) {
      _row[j] = arr2[j][~~((i % m[j]) / m[j + 1])];
    }
    result[i] = _row;
  }
  return result;
};
// 组合数
var ComNum = function(n, m) {
  m = parseInt(m);
  n = parseInt(n);
  if (m < 0 || n < 0) {
    return false;
  }
  if (m === 0 || n === 0) {
    return 1;
  }
  if (m > n) {
    return 0;
  }
  if (m > n / 2.0) {
    m = n - m;
  }
  var result = 0.0;
  for (var i = n; i >= n - m + 1; i--) {
    result += Math.log(i);
  }
  for (var k = m; k >= 1; k--) {
    result -= Math.log(k);
  }
  result = Math.exp(result);
  return Math.round(result);
};

// 组合值
var ComVal = function(source, m, x) {
  var n = source.length;
  var list = [];
  var start = 0;
  while (m > 0) {
    if (m === 1) {
      list.push(source[start + x]);
      break;
    }
    for (var i = 0; i <= n - m; i++) {
      var cnm = Number(ComNum(n - 1 - i, m - 1));
      if (x <= cnm - 1) {
        list.push(source[start + i]);
        start = start + (i + 1);
        n = n - (i + 1);
        m--;
        break;
      } else {
        x = x - cnm;
      }
    }
  }
  return list;
};

// 判断是否存在
var inArray = function(e, data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i] === e) return true;
  }
  return false;
};

// 数组去重复
var uniquelize = function(data) {
  // var array = new Array();
  // var array = [];
  var array = [];
  for (var i = 0; i < data.length; i++) {
    if (!inArray(data[i], array)) {
      array.push(data[i]);
    }
  }
  return array;
};

//求两个集合的并集
var union = function(a, b) {
  return uniquelize(a.concat(b));
};

//求两个集合的差集
var minus = function(a, b) {
  // var array = new Array();
  var array = [];
  var ua = uniquelize(a);
  for (var i = 0; i < ua.length; i++) {
    if (!inArray(ua[i], b)) {
      array.push(ua[i]);
    }
  }
  return array;
};

//求两个集合的交集
var intersect = function(a, b) {
  // var array = new Array();
  var array = [];
  var ua = uniquelize(a);
  for (var i = 0; i < ua.length; i++) {
    if (inArray(ua[i], b)) {
      array.push(ua[i]);
    }
  }
  return array;
};

//求两个集合的补集
// var complement = function(a, b) {
//   return minus(union(a, b), intersect(a, b));
// };

// 去除重复，最快速方法，会排序
var unique = function(data) {
  data.sort();
  var re = [data[0]];
  for (var i = 1; i < data.length; i++) {
    if (data[i] !== re[re.length - 1]) {
      re.push(data[i]);
    }
  }
  return re;
};

//组三单式
var v = function(N, I) {
  if (I !==3) {
    return false;
  }
  var M = "";
  var K = "";
  var J = "";
  var L = 0;
  for (L = 0; L < I; L++) {
    if (L === 0) {
      M = N.substr(L, 1);
    }
    if (L === 1) {
      K = N.substr(L, 1);
    }
    if (L === 2) {
      J = N.substr(L, 1);
    }
  }
  if (M === K && K === J) {
    return false;
  }
  if (M === K || K === J || J === M) {
    return true;
  }
  return false;
};
//组六单式
var w = function(N, I) {
  if (I !==3) {
    return false;
  }
  var M = "";
  var K = "";
  var J = "";
  var L = 0;
  for (L = 0; L < I; L++) {
    if (L === 0) {
      M = N.substr(L, 1);
    }
    if (L === 1) {
      K = N.substr(L, 1);
    }
    if (L === 2) {
      J = N.substr(L, 1);
    }
  }
  if (M === K || K === J || J === M) {
    return false;
  } else {
    return true;
  }
};
// 根据下标删除
// var remove = function(data, idx) {
//   if (data.length > idx) {
//     data.splice(idx, 1);
//   }
//   return data;
// };
/**
 * 输入框号码检测------11x5
 */
var _numberCheck_Num = function(n) {
  var t = n.split(" ");
  var l = t.length;
  for (var i = 0; i < l; i++) {
    if (Number(t[i]) > 11 || Number(t[i]) < 1) {
      return false;
    }
    for (var j = i + 1; j < l; j++) {
      if (Number(t[i]) === Number(t[j])) {
        return false;
      }
    }
  }
  return true;
};

/**
 * 输入框类型检测
 */
var _inputCheck_Num_11x5 = function(datasel, l, fun) {
  fun =
    typeof fun === "function"
      ? fun
      : function(n, l) {
          return true;
        };
  var newsel = []; // 新的号码
  datasel = unique(datasel); // 去除重复
  var regex = new RegExp("^([0-9]{2}\\s{1}){" + (l - 1) + "}[0-9]{2}$");
  for (let i = 0; i < datasel.length; i++) {
    if (regex.test(datasel[i]) && fun(datasel[i], l)) {
      newsel.push(datasel[i]);
    }
  }
  return newsel;
};

/**
 * 输入框类型检测ssc
 */
var _inputCheck_Num = function(datasel, l, fun, sort, position) {
  // console.log('datasel1',datasel);
  fun =
    typeof fun === "function"
      ? fun
      : function(n, l) {
          return true;
        };
  position = position || false;
  var newsel = []; // 新的号码
  var dump = []; //被过滤的号码
  if (sort) {
    // 如果需要号码排序
    var sortsel = [];
    if (position) {
      datasel = datasel.slice(1, datasel.length);
    }
    // console.log('datasel2',datasel);
    for (let i = 0; i < datasel.length; i++) {
      sortsel.push(
        datasel[i]
          .split("")
          .sort()
          .toString()
          .replace(/\,/g, "")
      );
    }
    // $.each(datasel, function (i, n) {
    //   sortsel.push(n.split('').sort().toString().replace(/\,/g, ''));
    // });
    datasel = sortsel;
  }
  datasel = unique(datasel); // 去除重复
  var regex = new RegExp("^[0-9]{" + l + "}$");
  for (let i = 0; i < datasel.length; i++) {
    if (regex.test(datasel[i]) && fun(datasel[i], l)) {
      newsel.push(datasel[i]);
    } else {
      dump.push(datasel[i]);
    }
  }
  // $.each(datasel, function (i, n) {
  //   if (regex.test(n) && fun(n, l)) {
  //     newsel.push(n);
  //   } else {
  //     dump.push(n);
  //   }
  // });
  return newsel;
};

/**
 * 输入框类型检测---k3
 */
var _inputCheck_Num_k3 = function(datasel, l, fun) {
  fun =
    typeof fun === "function"
      ? fun
      : function(n, l) {
          return true;
        };
  var newsel = []; // 新的号码
  datasel = unique(datasel); // 去除重复
  var regex = new RegExp("^[0-6]{" + l + "}$");
  for (let i = 0; i < datasel.length; i++) {
    if (regex.test(datasel[i]) && fun(datasel[i], l)) {
      newsel.push(datasel[i]);
    }
  }
  return newsel;
};

/**
 * 2排不重复检测
 */
var _uniqueCheck = function(a, b) {
  return intersect(a, b).length === 0 ? true : false;
};

/**
 * 二同号单式
 */
var _ethdsCheck = function(n, l) {
  if (l !==3) return false;
  var first = n.substring(0, 1);
  var second = n.substring(1, 2);
  var third = n.substring(2, 3);
  if (first === second && second === third) return false;
  if (first === second || second === third || third === first) return true;
  return false;
};

/**
 * 二不同号单式
 */
var _ebthdsCheck = function(n, l) {
  if (l !==2) return false;
  var first = n.substring(0, 1);
  var second = n.substring(1, 2);
  if (first === second) return false;
  return true;
};

/**
 * 三不同号单式
 */
var _sbthdsCheck = function(n, l) {
  if (l !==3) return false;
  var first = n.substring(0, 1);
  var second = n.substring(1, 2);
  var third = n.substring(2, 3);
  if (first !==second && second !==third && third !==first) return true;
  return false;
};

/**
 * 和值检测
 */
var _HHZXCheck_Num = function(n, l) {
  // var a = new Array();
  var a = [];
  if (l === 2) {
    //两位
    a = ["00", "11", "22", "33", "44", "55", "66", "77", "88", "99"];
  } else {
    //三位[默认]
    a = ["000", "111", "222", "333", "444", "555", "666", "777", "888", "999"];
  }
  // a.indexOf(n);
  // return $.inArray(n, a) === -1 ? true : false;
  return a.indexOf(n) === -1 ? true : false;
};

/**
 * 多少注计算
 */
export function _inputNumbers(type, datasel, pkind) {
  // console.log('type=>'+type);
  var nums = 0,
    tmp_nums = 1;
  switch (type) {
    case "rx3z3":
      var maxplace = 1;
      if (datasel.length > 1) {
        var place = 0;
        for (var i = 0; i < datasel[0].length; i++) {
          if (datasel[0][i] === "√") place++;
        }
        var newsel = datasel[1];
        var m = 3;
        // 任选3必须大于选了3位以上才能组成组合
        if (place >= m) {
          var h = Number(ComNum(place, m));
          if (h > 0) {
            // 组合数必须大于0
            for (var i = 0; i < maxplace; i++) {
              var s = newsel.length;
              // 组三必须选两位或者以上
              if (s > 1) {
                nums += s * (s - 1);
              }
            }
            nums *= h;
          }
        }
      }
      break;
    case "rx3z6":
      var maxplace = 1;
      if (datasel.length > 1) {
        var place = 0;
        for (var i = 0; i < datasel[0].length; i++) {
          if (datasel[0][i] === "√") place++;
        }
        var newsel = datasel[1];
        var m = 3;
        // 任选3必须大于选了3位以上才能组成组合
        if (place >= m) {
          var h = Number(ComNum(place, m));
          if (h > 0) {
            // 组合数必须大于0
            for (var i = 0; i < maxplace; i++) {
              var s = newsel.length;
              // 组六必须选三位或者以上
              if (s > 2) {
                nums += (s * (s - 1) * (s - 2)) / 6;
              }
            }
            nums *= h;
          }
        }
      }
      break;
    case "rx2zx":
      var maxplace = 1;
      if (datasel.length > 1) {
        var place = 0;
        for (var i = 0; i < datasel[0].length; i++) {
          if (datasel[0][i] === "√") place++;
        }
        var newsel = datasel[1];
        var m = 2;
        // 任选2必须大于选了2位以上才能组成组合
        if (place >= m) {
          var h = Number(ComNum(place, m));
          if (h > 0) {
            // 组合数必须大于0
            for (var i = 0; i < maxplace; i++) {
              var s = newsel.length;
              // 二码不定位必须选两位或者以上
              if (s > 1) {
                nums += (s * (s - 1)) / 2;
              }
            }
            nums *= h;
          }
        }
      }
      break;
    case "sscrx2ds":
    case "sscrx3ds":
    case "sscrx4ds":
      if (datasel.length > 1) {
        var place = 0;
        for (var i = 0; i < datasel[0].length; i++) {
          if (datasel[0][i] === "√") place++;
        }
        var arr = [];
        for (var i = 1; i < datasel.length; i++) {
          arr.push(datasel[i]);
        }
        var m = 0;
        if (type === "sscrx2ds") {
          m = 2;
        }
        if (type === "sscrx3ds") {
          m = 3;
        }
        if (type === "sscrx4ds") {
          m = 4;
        }
        // 任选2必须大于选了2位以上才能组成组合
        if (place >= m) {
          var h = Number(ComNum(place, m));
          if (h > 0) {
            // 组合数必须大于0
            nums += _inputCheck_Num(arr, m, null, null, null).length;
            nums *= h;
          }
        }
      }
      break;
    case "wxzhixds":
      nums = _inputCheck_Num(datasel, 5, null, null, null).length;
      break;
    case "sixzhixdsh":
    case "sixzhixdsq":
      nums = _inputCheck_Num(datasel, 4, null, null, null).length;
      break;
    case "sxzhixdsh":
    case "sxzhixdsz":
    case "sxzhixdsq":
      nums = _inputCheck_Num(datasel, 3, null, null, null).length;
      break;
    case "ZUS":
      nums = _inputCheck_Num(datasel, 3, v, true, null).length;
      break;
    case "ZUL":
      nums = _inputCheck_Num(datasel, 3, w, true, null).length;
      break;
    case "sxhhzxh":
    case "sxhhzxz":
    case "sxhhzxq":
      nums = _inputCheck_Num(datasel, 3, _HHZXCheck_Num, true, null).length;
      break;
    case "ZU2":
      nums = _inputCheck_Num(datasel, 2, _HHZXCheck_Num, true, true).length;
      var place = 0;
      for (var i = 0; i < datasel[0].length; i++) {
        if (datasel[0][i] === "√") place++;
      }
      nums *= place === 0 ? 0 : Number(ComNum(place, 2));
      break;
    case "RX3Z3DS":
      nums = _inputCheck_Num(datasel, 3, v, true, true).length;
      var place = 0;
      for (var i = 0; i < datasel[0].length; i++) {
        if (datasel[0][i] === "√") place++;
      }
      nums *= place === 0 ? 0 : Number(ComNum(place, 3));
      break;
    case "RX3Z6DS":
      nums = _inputCheck_Num(datasel, 3, w, true, true).length;
      var place = 0;
      for (var i = 0; i < datasel[0].length; i++) {
        if (datasel[0][i] === "√") place++;
      }
      nums *= place === 0 ? 0 : Number(ComNum(place, 3));
      break;
    case "RX3HHZX":
      nums = _inputCheck_Num(datasel, 3, _HHZXCheck_Num, true, true).length;
      var place = 0;
      for (var i = 0; i < datasel[0].length; i++) {
        if (datasel[0][i] === "√") place++;
      }
      nums *= place === 0 ? 0 : Number(ComNum(place, 3));
      break;
    case "exzhixdsh":
    case "exzhixdsq":
      nums = _inputCheck_Num(datasel, 2, null, null, null).length;
      break;
    case "exzuxdsh":
    case "exzuxdsq":
      nums = _inputCheck_Num(datasel, 2, _HHZXCheck_Num, true, null).length;
      break;
    case "wxzux120":
      var s = datasel[0].length;
      if (s > 4) {
        nums += Number(ComNum(s, 5));
      }
      break;
    case "wxzux60":
    case "wxzux30":
    case "wxzux20":
    case "wxzux10":
    case "wxzux5":
      var minchosen = new Array();
      if (type === "wxzux60") {
        minchosen = [1, 3];
      }
      if (type === "wxzux30") {
        minchosen = [2, 1];
      }
      if (type === "wxzux20") {
        minchosen = [1, 2];
      }
      if (type === "wxzux10" || type === "wxzux5") {
        minchosen = [1, 1];
      }
      if (
        datasel[0].length >= minchosen[0] &&
        datasel[1].length >= minchosen[1]
      ) {
        var h = intersect(datasel[0], datasel[1]).length;
        tmp_nums = Number(
          ComNum(datasel[0].length, minchosen[0]) *
            Number(ComNum(datasel[1].length, minchosen[1]))
        );
        if (h > 0) {
          if (type === "wxzux60") {
            tmp_nums -= Number(
              ComNum(h, 1) * Number(ComNum(datasel[1].length - 1, 2))
            );
          }
          if (type === "wxzux30") {
            tmp_nums -= Number(ComNum(h, 2) * Number(ComNum(2, 1)));
            if (datasel[0].length - h > 0) {
              tmp_nums -= Number(
                ComNum(h, 1) * Number(ComNum(datasel[0].length - h, 1))
              );
            }
          }
          if (type === "wxzux20") {
            tmp_nums -= Number(
              ComNum(h, 1) * Number(ComNum(datasel[1].length - 1, 1))
            );
          }
          if (type === "wxzux10" || type === "wxzux5") {
            tmp_nums -= Number(ComNum(h, 1));
          }
        }
        nums += tmp_nums;
      }
      break;
    case "sixzux24h":
    case "sixzux24q":
      var s = datasel[0].length;
      if (s > 3) {
        nums += Number(ComNum(s, 4));
      }
      break;
    case "rx4zx24":
      var s = datasel[1].length;
      if (s > 3) {
        nums += Number(ComNum(s, 4));
      }
      var place = 0;
      for (var i = 0; i < datasel[0].length; i++) {
        if (datasel[0][i] === "√") place++;
      }
      nums *= place === 0 ? 0 : Number(ComNum(place, 4));
      break;
    case "sixzux6h":
    case "sixzux6q":
      var mcs = [2];
      if (datasel[0].length >= mcs[0]) {
        nums += Number(ComNum(datasel[0].length, mcs[0]));
      }
      break;
    case "rx4zx6":
      var mcs = [2];
      if (datasel[1].length >= mcs[0]) {
        nums += Number(ComNum(datasel[1].length, mcs[0]));
      }
      var place = 0;
      for (var i = 0; i < datasel[0].length; i++) {
        if (datasel[0][i] === "√") place++;
      }
      nums *= place === 0 ? 0 : Number(ComNum(place, 4));
      break;
    case "sixzux12h":
    case "sixzux12q":
    case "sixzux4h":
    case "sixzux4q":
      var minchosen = new Array();
      if (type === "sixzux12h" || type === "sixzux12q") {
        minchosen = [1, 2];
      }
      if (type === "sixzux4h" || type === "sixzux4q") {
        minchosen = [1, 1];
      }
      if (
        datasel[0].length >= minchosen[0] &&
        datasel[1].length >= minchosen[1]
      ) {
        var h = intersect(datasel[0], datasel[1]).length;
        tmp_nums = Number(
          ComNum(datasel[0].length, minchosen[0]) *
            Number(ComNum(datasel[1].length, minchosen[1]))
        );
        if (h > 0) {
          if (type === "sixzux12h" || type === "sixzux12q") {
            tmp_nums -= Number(
              ComNum(h, 1) * Number(ComNum(datasel[1].length - 1, 1))
            );
          }
          if (type === "sixzux4h" || type === "sixzux4q") {
            tmp_nums -= Number(ComNum(h, 1));
          }
        }
        nums += tmp_nums;
      }
      break;
    case "rx4zx12":
    case "rx4zx4":
      var minchosen = new Array();
      if (type === "rx4zx12") {
        minchosen = [1, 2];
      }
      if (type === "rx4zx4") {
        minchosen = [1, 1];
      }
      if (
        datasel[1].length >= minchosen[0] &&
        datasel[2].length >= minchosen[1]
      ) {
        var h = intersect(datasel[1], datasel[2]).length;
        tmp_nums = Number(
          ComNum(datasel[1].length, minchosen[0]) *
            Number(ComNum(datasel[2].length, minchosen[1]))
        );
        if (h > 0) {
          if (type === "rx4zx12") {
            tmp_nums -= Number(
              ComNum(h, 1) * Number(ComNum(datasel[2].length - 1, 1))
            );
          }
          if (type === "rx4zx4") {
            tmp_nums -= Number(ComNum(h, 1));
          }
        }
        nums += tmp_nums;
      }
      var place = 0;
      for (var i = 0; i < datasel[0].length; i++) {
        if (datasel[0][i] === "√") place++;
      }
      nums *= place === 0 ? 0 : Number(ComNum(place, 4));
      break;
    case "sxzuxzsh":
    case "sxzuxzsz":
    case "sxzuxzsq":
      var maxplace = 1;
      for (var i = 0; i < maxplace; i++) {
        var s = datasel[i].length;
        // 组三必须选两位或者以上
        if (s > 1) {
          nums += s * (s - 1);
        }
      }
      break;
    case "sxzuxzlh":
    case "sxzuxzlz":
    case "sxzuxzlq":
      var maxplace = 1;
      for (var i = 0; i < maxplace; i++) {
        var s = datasel[i].length;
        // 组六必须选三位或者以上
        if (s > 2) {
          nums += (s * (s - 1) * (s - 2)) / 6;
        }
      }
      break;
    case "wxzhixzh":
    case "sixzhixzhh":
    case "sixzhixzhq":
    case "sxhsanzh":
    case "sxqsanzh":
      var maxplace = 0;
      //五星组合
      if ("wxzhixzh" === type) {
        maxplace = 5;
      }
      if ("sixzhixzhh" === type || "sixzhixzhq" === type) {
        maxplace = 4;
      }
      //后三组合
      if ("sxhsanzh" === type || "sxqsanzh" === type) {
        maxplace = 3;
      }
      for (var i = 0; i < maxplace; i++) {
        // 有位置上没有选择
        if (datasel[i].length === 0) {
          tmp_nums = 0;
          break;
        }
        tmp_nums *= datasel[i].length;
      }
      nums += tmp_nums * maxplace;
      break;
    case "sxzhixhzh":
    case "sxzhixhzz":
    case "sxzhixhzq":
    case "exzhixhzh":
    case "exzhixhzq":
      var cc;
      if (type === "exzhixhzh" || type === "exzhixhzq") {
        cc = {
          0: 1,
          1: 2,
          2: 3,
          3: 4,
          4: 5,
          5: 6,
          6: 7,
          7: 8,
          8: 9,
          9: 10,
          10: 9,
          11: 8,
          12: 7,
          13: 6,
          14: 5,
          15: 4,
          16: 3,
          17: 2,
          18: 1
        };
      } else {
        cc = {
          0: 1,
          1: 3,
          2: 6,
          3: 10,
          4: 15,
          5: 21,
          6: 28,
          7: 36,
          8: 45,
          9: 55,
          10: 63,
          11: 69,
          12: 73,
          13: 75,
          14: 75,
          15: 73,
          16: 69,
          17: 63,
          18: 55,
          19: 45,
          20: 36,
          21: 28,
          22: 21,
          23: 15,
          24: 10,
          25: 6,
          26: 3,
          27: 1
        };
      }
      for (var i = 0; i < datasel[0].length; i++) {
        nums += cc[parseInt(datasel[0][i], 10)];
      }
      break;
    case "sscrx2fs":
    case "sscrx3fs":
    case "sscrx4fs":
      var minplace = 0;
      if (type === "sscrx2fs") {
        minplace = 2;
      }
      if (type === "sscrx3fs") {
        minplace = 3;
      }
      if (type === "sscrx4fs") {
        minplace = 4;
      }
      var arr = [];
      for (var i = 0; i < datasel.length; i++) {
        if (datasel[i].length !==0) {
          arr.push(datasel[i]);
        }
      }
      // 最少位数
      if (arr.length >= minplace) {
        var l = ComNum(arr.length, minplace);
        for (var i = 0; i < l; i++) {
          tmp_nums = 1;
          var data = ComVal(arr, minplace, i);
          for (var j = 0; j < data.length; j++) {
            tmp_nums *= data[j].length;
          }
          nums += tmp_nums;
        }
      }
      break;
    case "dw": //定位胆所有在一起特殊处理
      var maxplace = 5;
      // var maxplace = 3;
      for (var i = 0; i < maxplace; i++) {
        nums += datasel[i].length;
      }
      break;
    case "dwd3d": //定位胆所有在一起特殊处理
      var maxplace = 3;
      for (var i = 0; i < maxplace; i++) {
        nums += datasel[i].length;
      }
      break;
    case "bdw2mh":
    case "bdw2mz":
    case "bdw2mq":
    case "bdws2m":
    case "bdww2m":
    case "exzuxfsh":
    case "exzuxfsq":
      var maxplace = 1;
      for (var i = 0; i < maxplace; i++) {
        var s = datasel[i].length;
        // 二码不定位必须选两位或者以上
        if (s > 1) {
          nums += (s * (s - 1)) / 2;
        }
      }
      break;
    case "bdww3m":
      var maxplace = 1;
      for (var i = 0; i < maxplace; i++) {
        var s = datasel[i].length;
        // 三码不定位必须选三位或者以上
        if (s > 2) {
          // nums += s * (s - 1) / 3;
          nums += Number(ComNum(s, 3));
        }
      }
      break;
    case "ZXKD":
      var maxplace = 0;
      var S = {
        0: 10,
        1: 54,
        2: 96,
        3: 126,
        4: 144,
        5: 150,
        6: 144,
        7: 126,
        8: 96,
        9: 54
      };
      for (j = 0; j < datasel[maxplace].length; j++) {
        nums += S[parseInt(datasel[maxplace][j], 10)];
      }
      break;
    case "ZXKD2":
      var maxplace = 0;
      var S = {
        0: 10,
        1: 18,
        2: 16,
        3: 14,
        4: 12,
        5: 10,
        6: 8,
        7: 6,
        8: 4,
        9: 2
      };
      for (j = 0; j < datasel[maxplace].length; j++) {
        nums += S[parseInt(datasel[maxplace][j], 10)];
      }
      break;
    case "ZUHZ2":
      var maxplace = 0;
      var S1 = {
        0: 0,
        1: 1,
        2: 1,
        3: 2,
        4: 2,
        5: 3,
        6: 3,
        7: 4,
        8: 4,
        9: 5,
        10: 4,
        11: 4,
        12: 3,
        13: 3,
        14: 2,
        15: 2,
        16: 1,
        17: 1,
        18: 0
      };
      for (j = 0; j < datasel[maxplace].length; j++) {
        nums += S1[parseInt(datasel[maxplace][j], 10)];
      }
      break;
    case "rx2zxhz":
      var maxplace = 1;
      var S2 = {
        0: 0,
        1: 1,
        2: 1,
        3: 2,
        4: 2,
        5: 3,
        6: 3,
        7: 4,
        8: 4,
        9: 5,
        10: 4,
        11: 4,
        12: 3,
        13: 3,
        14: 2,
        15: 2,
        16: 1,
        17: 1,
        18: 0
      };
      for (j = 0; j < datasel[maxplace].length; j++) {
        nums += S2[parseInt(datasel[maxplace][j], 10)];
      }
      var place = 0;
      for (var i = 0; i < datasel[0].length; i++) {
        if (datasel[0][i] === "√") place++;
      }
      nums *= place === 0 ? 0 : Number(ComNum(place, 2));
      break;
    case "rx3zxhz":
      var maxplace = 1;
      var S3 = {
        1: 1,
        2: 2,
        3: 2,
        4: 4,
        5: 5,
        6: 6,
        7: 8,
        8: 10,
        9: 11,
        10: 13,
        11: 14,
        12: 14,
        13: 15,
        14: 15,
        15: 14,
        16: 14,
        17: 13,
        18: 11,
        19: 10,
        20: 8,
        21: 6,
        22: 5,
        23: 4,
        24: 2,
        25: 2,
        26: 1
      };
      for (j = 0; j < datasel[maxplace].length; j++) {
        nums += S3[parseInt(datasel[maxplace][j], 10)];
      }
      var place = 0;
      for (var i = 0; i < datasel[0].length; i++) {
        if (datasel[0][i] === "√") place++;
      }
      nums *= place === 0 ? 0 : Number(ComNum(place, 3));
      break;
    case "ZXHZ3":
      var maxplace = 1;
      var S4 = {
        0: 1,
        1: 3,
        2: 6,
        3: 10,
        4: 15,
        5: 21,
        6: 28,
        7: 36,
        8: 45,
        9: 55,
        10: 63,
        11: 69,
        12: 73,
        13: 75,
        14: 75,
        15: 73,
        16: 69,
        17: 63,
        18: 55,
        19: 45,
        20: 36,
        21: 28,
        22: 21,
        23: 15,
        24: 10,
        25: 6,
        26: 3,
        27: 1
      };
      for (var j = 0; j < datasel[maxplace].length; j++) {
        nums += S4[parseInt(datasel[maxplace][j], 10)];
      }
      // console.log(pkind);
      if (pkind === "1") {
        var place = 0;
        for (var i = 0; i < datasel[0].length; i++) {
          if (datasel[0][i] === "√") place++;
        }
        nums *= place === 0 ? 0 : Number(ComNum(place, 3));
      }
      break;
    case "ZXHZ2":
      var maxplace = 1;
      var S5 = {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 9,
        11: 8,
        12: 7,
        13: 6,
        14: 5,
        15: 4,
        16: 3,
        17: 2,
        18: 1
      };
      // console.log('ZXHZ2-datasel',datasel);
      for (var j = 0; j < datasel[maxplace].length; j++) {
        nums += S5[parseInt(datasel[maxplace][j], 10)];
      }
      if (pkind === "1") {
        var place = 0;
        for (var i = 0; i < datasel[0].length; i++) {
          if (datasel[0][i] === "√") place++;
        }
        nums *= place === 0 ? 0 : Number(ComNum(place, 2));
      }
      // console.log(nums)
      break;
    case "ZU2BD":
      var maxplace = 0;
      nums = datasel[maxplace].length * 9;
      break;
    case "ZU3BD":
      var maxplace = 0;
      nums = datasel[maxplace].length * 54;
      break;
    case "ZUHZ":
      var maxplace = 0;
      var S6 = {
        1: 1,
        2: 2,
        3: 2,
        4: 4,
        5: 5,
        6: 6,
        7: 8,
        8: 10,
        9: 11,
        10: 13,
        11: 14,
        12: 14,
        13: 15,
        14: 15,
        15: 14,
        16: 14,
        17: 13,
        18: 11,
        19: 10,
        20: 8,
        21: 6,
        22: 5,
        23: 4,
        24: 2,
        25: 2,
        26: 1
      };
      for (j = 0; j < datasel[maxplace].length; j++) {
        nums += S6[parseInt(datasel[maxplace][j], 10)];
      }
      break;
    //11x5
    case "sanmzhixdsq":
    case "pk10qiansandanshi":
    case "sanmzuxdsq":
      return _inputCheck_Num_11x5(datasel, 3, _numberCheck_Num).length;
    case "pk10qiansidanshi":
      return _inputCheck_Num_11x5(datasel, 4, _numberCheck_Num).length;
    case "pk10qianwudanshi":
      return _inputCheck_Num_11x5(datasel, 5, _numberCheck_Num).length;
    case "ermzhixdsq":
    case "ermzuxdsq":
      return _inputCheck_Num_11x5(datasel, 2, _numberCheck_Num).length;
    case "rx1ds":
      return _inputCheck_Num_11x5(datasel, 1, _numberCheck_Num).length;
    case "rx2ds":
      return _inputCheck_Num_11x5(datasel, 2, _numberCheck_Num).length;
    case "rx3ds":
      return _inputCheck_Num_11x5(datasel, 3, _numberCheck_Num).length;
    case "rx4ds":
      return _inputCheck_Num_11x5(datasel, 4, _numberCheck_Num).length;
    case "rx5ds":
      return _inputCheck_Num_11x5(datasel, 5, _numberCheck_Num).length;
    case "rx6ds":
      return _inputCheck_Num_11x5(datasel, 6, _numberCheck_Num).length;
    case "rx7ds":
      return _inputCheck_Num_11x5(datasel, 7, _numberCheck_Num).length;
    case "rx8ds":
      return _inputCheck_Num_11x5(datasel, 8, _numberCheck_Num).length;
    // 这里验证选号类型
    case "sanmzhixfsq":
    case "pk10caipaiweiqiansan":
      if (
        datasel[0].length > 0 &&
        datasel[1].length > 0 &&
        datasel[2].length > 0
      ) {
        for (var i = 0; i < datasel[0].length; i++) {
          for (var j = 0; j < datasel[1].length; j++) {
            for (var k = 0; k < datasel[2].length; k++) {
              if (
                datasel[0][i] !==datasel[1][j] &&
                datasel[0][i] !==datasel[2][k] &&
                datasel[1][j] !==datasel[2][k]
              ) {
                nums++;
              }
            }
          }
        }
      }
      break;
    case "pk10caipaiweiqiansi":
      if (
        datasel[0].length > 0 &&
        datasel[1].length > 0 &&
        datasel[2].length > 0 &&
        datasel[3].length > 0
      ) {
        nums = filterErrorData(combination(datasel)).length;
      }
      break;
    case "pk10caipaiweiqianwu":
      if (
        datasel[0].length > 0 &&
        datasel[1].length > 0 &&
        datasel[2].length > 0 &&
        datasel[3].length > 0 &&
        datasel[4].length > 0
      ) {
        nums = filterErrorData(combination(datasel)).length;
      }
      break;
    case "sanmzuxfsq":
      var maxplace = 1;
      for (var i = 0; i < maxplace; i++) {
        var s = datasel[i].length;
        if (s > 2) {
          nums += (s * (s - 1) * (s - 2)) / 6;
        }
      }
      break;
    case "ermzhixfsq":
    case "pk10caipaiweiguanyajun":
      if (datasel[0].length > 0 && datasel[1].length > 0) {
        for (var i = 0; i < datasel[0].length; i++) {
          for (var j = 0; j < datasel[1].length; j++) {
            if (datasel[0][i] !==datasel[1][j]) {
              nums++;
            }
          }
        }
      }
      break;
    case "ermzuxfsq":
      var maxplace = 1;
      for (var i = 0; i < maxplace; i++) {
        var s = datasel[i].length;
        if (s > 1) {
          nums += (s * (s - 1)) / 2;
        }
      }
      break;
    //三码组选胆拖
    case "sanmazxtd":
    case "rxtd3d3":
      var G = datasel[0].length;
      var N = datasel[1].length;
      var M = 3;
      if (G < 1 || N < 1 || G >= M) {
        nums = 0;
      } else {
        nums = Number(ComNum(N, M - G));
      }
      break;
    case "ermazxtd":
    case "rxtd2d2":
      var G = datasel[0].length;
      var N = datasel[1].length;
      var M = 2;
      if (G < 1 || N < 1 || G >= M) {
        nums = 0;
      } else {
        nums = Number(ComNum(N, M - G));
      }
      break;
    case "rxtd4d4":
      var G = datasel[0].length;
      var N = datasel[1].length;
      var M = 4;
      if (G < 1 || N < 1 || G >= M) {
        nums = 0;
      } else {
        nums = Number(ComNum(N, M - G));
      }
      break;
    case "rxtd5d5":
      var G = datasel[0].length;
      var N = datasel[1].length;
      var M = 5;
      if (G < 1 || N < 1 || G >= M) {
        nums = 0;
      } else {
        nums = Number(ComNum(N, M - G));
      }
      break;
    case "rxtd6d5":
      var G = datasel[0].length;
      var N = datasel[1].length;
      var M = 6;
      if (G < 1 || N < 1 || G >= M) {
        nums = 0;
      } else {
        nums = Number(ComNum(N, M - G));
      }
      break;
    case "rxtd7d5":
      var G = datasel[0].length;
      var N = datasel[1].length;
      var M = 7;
      if (G < 1 || N < 1 || G >= M) {
        nums = 0;
      } else {
        nums = Number(ComNum(N, M - G));
      }
      break;
    case "rxtd8d5":
      var G = datasel[0].length;
      var N = datasel[1].length;
      var M = 8;
      if (G < 1 || N < 1 || G >= M) {
        nums = 0;
      } else {
        nums = Number(ComNum(N, M - G));
      }
      break;
    case "bdw":
    case "dwd":
    case "dds":
    case "czw":
    case "rx1fs": // 任选1中1
      var maxplace = 0;
      if ("bdw" === type || "dds" === type || "czw" === type || "rx1fs" === type) {
        maxplace = 1;
      }
      if ("dwd" === type) {
        maxplace = 3;
      }
      for (var i = 0; i < maxplace; i++) {
        nums += datasel[i].length;
      }
      break;
    case "rx2fs": // 任选2中2
      var maxplace = 1;
      for (var i = 0; i < maxplace; i++) {
        var s = datasel[i].length;
        if (s > 1) {
          nums += (s * (s - 1)) / 2;
        }
      }
      break;
    case "rx3fs": // 任选3中3
      var maxplace = 1;
      for (var i = 0; i < maxplace; i++) {
        var s = datasel[i].length;
        if (s > 2) {
          nums += (s * (s - 1) * (s - 2)) / 6;
        }
      }
      break;
    case "rx4fs": // 任选4中4
      var maxplace = 1;
      for (var i = 0; i < maxplace; i++) {
        var s = datasel[i].length;
        if (s > 3) {
          nums += (s * (s - 1) * (s - 2) * (s - 3)) / 24;
        }
      }
      break;
    case "rx5fs": // 任选5中5
      var maxplace = 1;
      for (var i = 0; i < maxplace; i++) {
        var s = datasel[i].length;
        if (s > 4) {
          nums += (s * (s - 1) * (s - 2) * (s - 3) * (s - 4)) / 120;
        }
      }
      break;
    case "rx6fs": // 任选6中6
      var maxplace = 1;
      for (var i = 0; i < maxplace; i++) {
        var s = datasel[i].length;
        if (s > 5) {
          nums += (s * (s - 1) * (s - 2) * (s - 3) * (s - 4) * (s - 5)) / 720;
        }
      }
      break;
    case "rx7fs": // 任选7中7
      var maxplace = 1;
      for (var i = 0; i < maxplace; i++) {
        var s = datasel[i].length;
        if (s > 6) {
          nums +=
            (s * (s - 1) * (s - 2) * (s - 3) * (s - 4) * (s - 5) * (s - 6)) /
            5040;
        }
      }
      break;
    case "rx8fs": // 任选8中8
      var maxplace = 1;
      for (var i = 0; i < maxplace; i++) {
        var s = datasel[i].length;
        if (s > 7) {
          nums +=
            (s *
              (s - 1) *
              (s - 2) *
              (s - 3) *
              (s - 4) *
              (s - 5) *
              (s - 6) *
              (s - 7)) /
            40320;
        }
      }
      break;

    /*****************k3********************/
    case "ebthds":
      return _inputCheck_Num_k3(datasel, 2, _ebthdsCheck).length;
    case "ethds":
      return _inputCheck_Num_k3(datasel, 3, _ethdsCheck).length;
    case "sbthds":
      return _inputCheck_Num_k3(datasel, 3, _sbthdsCheck).length;
    // 选号
    // case 'ebthdx': // 二不同号，标准选号
    // 	if (datasel[0].length >= 2) {
    // 		nums += ComNum(datasel[0].length, 2);
    // 	}
    // 	break;
    case "ebthdt":
      var maxplace = 2;
      if (datasel.length === maxplace) {
        if (_uniqueCheck(datasel[0], datasel[1])) {
          for (var i = 0; i < maxplace; i++) {
            var s = datasel[i].length;
            if (s > 0) {
              if (i > 0) {
                nums = datasel[i].length;
              }
            } else {
              nums = 0;
              break;
            }
          }
        }
      }
      break;
    case "ethfx":
      nums = datasel[0].length;
      break;
    // case 'sbthdx': // 三不同号单选
    // 	if (datasel[0].length >= 3) {
    // 		nums += ComNum(datasel[0].length, 3);
    // 	}
    // 	break;
    case "sthdx": // 三同号单选
    case "ethdx": // 二同号单选
    case "sbthdx":
    case "ebthdx": //二不同号单选
    case "hezhi": // 和值
    case "slhtx": // 三连号通选
    case "dtyg": //单挑一骰
      nums = datasel[0].length;
      break;
    case "sthtx": // 三同号通选
      //case 'slhtx': // 三连号通选
      nums = datasel[0].length > 0 ? 1 : 0;
      break;
    case "pk10daxiaodanshuang":
    case "pk10caichehao":
      var maxplace = 10;
      for (var i = 0; i < maxplace; i++) {
        nums += datasel[i].length;
      }
      break;
    default:
      var maxplace = 0;
      switch (type) {
        case "wxzhixfs":
          maxplace = 5;
          break;
        case "sixzhixfsh":
        case "sixzhixfsq":
          maxplace = 4;
          break;
        case "sxzhixfsh":
        case "sxzhixfsz":
        case "sxzhixfsq":
        case "dxdsq3":
        case "dxdsh3":
          maxplace = 3;
          break;
        case "exzhixfsh":
        case "exzhixfsq":
        case "dxdsh":
        case "dxdsq":
          maxplace = 2;
          break;
        case "bdw1mh":
        case "bdw1mz":
        case "bdw1mq":
        case "bdws1m":
        case "qwyffs":
        case "qwhscs":
        case "qwsxbx":
        case "qwsjfc":
        case "HZWS":
        case "longhu":
        case "TSH":
        case "pk10hezhi":
        case "pk10qiansanhezhi":
        case "pk10housanhezhi":
        case "pk10houerhezhi":
        case "pk10budingweiqiansan":
        case "pk10budingweihousan":
        case "pk10longhu":
        case "douniu":
        case "suoha":
        case "zonghe":
          maxplace = 1;
          break;
      }
      if (datasel.length === maxplace) {
        for (var i = 0; i < maxplace; i++) {
          // 有位置上没有选择
          if (datasel[i].length === 0) {
            tmp_nums = 0;
            break;
          }
          tmp_nums *= datasel[i].length;
        }
        nums += tmp_nums;
      }
  }
  return nums;
}

//11x5
var _formatSelect_Num_11x5 = function(datasel, m, n) {
  var newsel = new Array();
  if (!m) m = 0;
  if (!n) n = 0;
  for (var i = 0; i < m; i++) {
    newsel.push("-");
  }
  for (var i = 0; i < datasel.length; i++) {
    var f = datasel[i].toString().replace(/\,|√|-/g, " ");
    if (f === "") {
      newsel.push("-");
    } else {
      newsel.push(f);
    }
  }
  for (var i = 0; i < n; i++) {
    newsel.push("-");
  }
  return newsel.toString();
};

//pk10
var _formatSelect_Num_pk10 = function(datasel, m, n) {
  var newsel = new Array();
  if (!m) m = 0;
  if (!n) n = 0;
  for (var i = 0; i < m; i++) {
    newsel.push("-");
  }
  for (var i = 0; i < datasel.length; i++) {
    var f = datasel[i].toString().replace(/\,|√|-/g, "|");
    if (f === "") {
      newsel.push("|");
    } else {
      newsel.push(f);
    }
  }
  for (var i = 0; i < n; i++) {
    newsel.push("|");
  }
  return newsel.toString();
};
var _formatSelect_Num_pk10_dxds = function(datasel, m, n) {
  var newsel = new Array();
  if (!m) m = 0;
  if (!n) n = 0;
  for (var i = 0; i < m; i++) {
    newsel.push("-");
  }
  for (var i = 0; i < datasel.length; i++) {
    var f = datasel[i].toString().replace(/\,|√|-/g, "");
    if (f === "") {
      newsel.push("|");
    } else {
      newsel.push(f);
    }
  }
  for (var i = 0; i < n; i++) {
    newsel.push("|");
  }
  return newsel.toString();
};
var _formatSelect_Num_pk10_caichehao = function(datasel, m, n) {
  var newsel = new Array();
  if (!m) m = 0;
  if (!n) n = 0;
  for (var i = 0; i < m; i++) {
    newsel.push("-");
  }
  for (var i = 0; i < datasel.length; i++) {
    var f = datasel[i].toString().replace(/\,|√|-/g, " ");
    if (f === "") {
      newsel.push("");
    } else {
      newsel.push(f);
    }
  }
  for (var i = 0; i < n; i++) {
    newsel.push("|");
  }
  return newsel.join("|");
};
//ssc
//处理大小单双 龙虎和的格式 大-1 小-0 单-3 双-2 龙-0 虎-1 和-2
var _formmatSelect_word = function(datasel) {
  var newsel = [];
  for (var i = 0; i < datasel.length; i++) {
    var f = datasel[i];
    for (var p in f) {
      var name = f[p];
      switch (name) {
        case "大":
          f[p] = 1;
          break;
        case "小":
          f[p] = 0;
          break;
        case "单":
          f[p] = 3;
          break;
        case "双":
          f[p] = 2;
          break;
        case "龙":
          f[p] = 0;
          break;
        case "虎":
          f[p] = 1;
          break;
        case "和":
          f[p] = 2;
          break;
      }
    }
    newsel.push(f);
  }
  return newsel.toString();
};
var _formatSelect_Num = function(datasel, m, n) {
  var newsel = new Array();
  if (!m) m = 0;
  if (!n) n = 0;
  for (var i = 0; i < m; i++) {
    newsel.push("-");
  }
  for (var i = 0; i < datasel.length; i++) {
    var f = datasel[i].toString().replace(/\,|√|-/g, "");
    if (f === "") {
      newsel.push("-");
    } else {
      newsel.push(f);
    }
  }
  for (var i = 0; i < n; i++) {
    newsel.push("-");
  }
  return newsel.toString();
};

//单式计算
var _formatTextarea_Num = function(type, datasel) {
  switch (type) {
    case "wxzhixds":
      datasel = _inputCheck_Num(datasel, 5, null, null, null);
      break;
    case "sixzhixdsh":
    case "sixzhixdsq":
      datasel = _inputCheck_Num(datasel, 4, null, null, null);
      break;
    case "sxzhixdsh":
    case "sxzhixdsz":
    case "sxzhixdsq":
      datasel = _inputCheck_Num(datasel, 3, null, null, null);
      break;
    case "ZUS":
      datasel = _inputCheck_Num(datasel, 3, v, true, null);
      break;
    case "ZUL":
      datasel = _inputCheck_Num(datasel, 3, w, true, null);
      break;
    case "sxhhzxh":
    case "sxhhzxz":
    case "sxhhzxq":
      datasel = _inputCheck_Num(datasel, 3, _HHZXCheck_Num, true, null);
      break;
    case "exzhixdsh":
    case "exzhixdsq":
      datasel = _inputCheck_Num(datasel, 2, null, null, null);
      break;
    case "exzuxdsh":
    case "exzuxdsq":
      datasel = _inputCheck_Num(datasel, 2, _HHZXCheck_Num, true, null);
      break;
    case "ZU2":
      datasel = _inputCheck_Num(datasel, 2, _HHZXCheck_Num, true, true);
      break;
    case "RX3Z3DS":
      datasel = _inputCheck_Num(datasel, 3, v, true, true);
      break;
    case "RX3Z6DS":
      datasel = _inputCheck_Num(datasel, 3, w, true, true);
      break;
    case "RX3HHZX":
      datasel = _inputCheck_Num(datasel, 3, _HHZXCheck_Num, true, true);
      break;
    case "sscrx2ds":
    case "sscrx3ds":
    case "sscrx4ds":
      if (datasel.length > 1) {
        var place = 0;
        for (var i = 0; i < datasel[0].length; i++) {
          if (datasel[0][i] === "√") place++;
        }
        var newsel = [];
        for (var i = 1; i < datasel.length; i++) {
          newsel.push(datasel[i]);
        }
        var m = 0;
        if (type === "sscrx2ds") {
          m = 2;
        }
        if (type === "sscrx3ds") {
          m = 3;
        }
        if (type === "sscrx4ds") {
          m = 4;
        }
        // 任选2必须大于选了2位以上才能组成组合
        if (place >= m) {
          var h = Number(ComNum(place, m));
          if (h > 0) {
            // 组合数必须大于0
            // return '[' + datasel[0] + ']' + _inputCheck_Num(newsel, m);
            return _inputCheck_Num(newsel, m, null, null, null);
          }
        }
      }
      break;

    //11x5单式
    case "sanmzhixdsq":
    case "pk10qiansandanshi":
    case "sanmzuxdsq":
      datasel = _inputCheck_Num_11x5(datasel, 3, _numberCheck_Num);
      break;
    case "pk10qiansidanshi":
      datasel = _inputCheck_Num_11x5(datasel, 4, _numberCheck_Num);
      break;
    case "pk10qianwudanshi":
      datasel = _inputCheck_Num_11x5(datasel, 5, _numberCheck_Num);
      break;
    case "ermzhixdsq":
    case "ermzuxdsq":
      datasel = _inputCheck_Num_11x5(datasel, 2, _numberCheck_Num);
      break;
    case "rx1ds":
      datasel = _inputCheck_Num_11x5(datasel, 1, _numberCheck_Num);
      break;
    case "rx2ds":
      datasel = _inputCheck_Num_11x5(datasel, 2, _numberCheck_Num);
      break;
    case "rx3ds":
      datasel = _inputCheck_Num_11x5(datasel, 3, _numberCheck_Num);
      break;
    case "rx4ds":
      datasel = _inputCheck_Num_11x5(datasel, 4, _numberCheck_Num);
      break;
    case "rx5ds":
      datasel = _inputCheck_Num_11x5(datasel, 5, _numberCheck_Num);
      break;
    case "rx6ds":
      datasel = _inputCheck_Num_11x5(datasel, 6, _numberCheck_Num);
      break;
    case "rx7ds":
      datasel = _inputCheck_Num_11x5(datasel, 7, _numberCheck_Num);
      break;
    case "rx8ds":
      datasel = _inputCheck_Num_11x5(datasel, 8, _numberCheck_Num);
      break;
    /*************k3*******************/
    case "ebthds":
      datasel = _inputCheck_Num_k3(datasel, 2, _ebthdsCheck);
      break;
    case "ethds":
      datasel = _inputCheck_Num_k3(datasel, 3, _ethdsCheck);
      break;
    case "sbthds":
      datasel = _inputCheck_Num_k3(datasel, 3, _sbthdsCheck);
      break;
    default:
      break;
  }
  return datasel.toString().replace(/\,/g, ",");
};

export function _inputFormat(type, datasel) {
  //时时彩的计算
  switch (type) {
    case "wxzhixds":
    case "sixzhixdsh":
    case "sixzhixdsq":
    case "sxzhixdsh":
    case "sxzhixdsz":
    case "sxzhixdsq":
    case "ZUX":
    case "ZU2":
    case "ZUS":
    case "ZUL":
    case "ZUHZ2":
    case "RX3Z3DS":
    case "RX3Z6DS":
    case "sxhhzxh":
    case "sxhhzxz":
    case "sxhhzxq":
    case "RX3HHZX":
    case "exzhixdsh":
    case "exzhixdsq":
    case "exzuxdsh":
    case "exzuxdsq":
    case "sscrx2ds":
    case "sscrx3ds":
    case "sscrx4ds":
      return _formatTextarea_Num(type, datasel);
    case "TSH":
    case "sxzhixhzh":
    case "sxzhixhzz":
    case "sxzhixhzq":
    case "exzhixhzh":
    case "exzhixhzq":
    case "ZUHZ":
    case "ZXHZ2":
    case "rx2zxhz":
    case "rx3zxhz":
    case "ZXHZ3":
    case "suoha":
      return datasel.toString();
    case "sixzhixfsh":
    case "sixzhixzhh":
      return _formatSelect_Num(datasel, 1, null);
    case "sixzhixfsq":
    case "sixzhixzhq":
      return _formatSelect_Num(datasel, 0, 1);
    case "sxzhixfsh":
      return _formatSelect_Num(datasel, 2, null);
    case "sxzhixfsz":
      return _formatSelect_Num(datasel, 1, 1);
    case "sxzhixfsq":
      return _formatSelect_Num(datasel, 0, 2);
    case "exzhixfsh":
      return _formatSelect_Num(datasel, 3, null);
    case "exzhixfsq":
      return _formatSelect_Num(datasel, 0, 3);
    //pk10
    case "pk10hezhi":
    case "pk10qiansanhezhi":
    case "pk10housanhezhi":
    case "pk10houerhezhi":
      return _formatSelect_Num_pk10(datasel, null, null);
    case "pk10daxiaodanshuang":
      return _formatSelect_Num_pk10_dxds(datasel, null, null);
    case "pk10caichehao":
      return _formatSelect_Num_pk10_caichehao(datasel, null, null);
    //11x5
    case "sanmzhixfsq":
    case "dwd":
      return _formatSelect_Num_11x5(datasel, null, null);
    case "pk10caipaiweiqiansi":
      return _formatSelect_Num_11x5(datasel, 0, 4);
    case "pk10caipaiweiqianwu":
      return _formatSelect_Num_11x5(datasel, 0, 5);
    case "pk10caipaiweiqianliu":
      return _formatSelect_Num_11x5(datasel, 0, 6);
    case "pk10caipaiweiqianqi":
      return _formatSelect_Num_11x5(datasel, 0, 7);
    case "pk10caipaiweiqianba":
      return _formatSelect_Num_11x5(datasel, 0, 8);
    case "pk10caipaiweiqianjiu":
      return _formatSelect_Num_11x5(datasel, 0, 9);
    case "ermzhixfsq":
    case "sanmazxtd":
    case "ermazxtd":
    case "rxtd2d2":
    case "rxtd3d3":
    case "rxtd4d4":
    case "rxtd5d5":
    case "rxtd6d5":
    case "rxtd7d5":
    case "rxtd8d5":
    case "pk10caipaiweiguanyajun":
    case "pk10caipaiweiqiansan":
      return _formatSelect_Num_11x5(datasel, 0, 3);
    case "sanmzuxfsq":
    case "ermzuxfsq":
    case "bdw":
    case "pk10budingweiqiansan":
    case "pk10budingweihousan":
    case "rx1fs":
    case "rx2fs":
    case "rx3fs":
    case "rx4fs":
    case "rx5fs":
    case "rx6fs":
    case "rx7fs":
    case "rx8fs":
      return datasel[0].toString().replace(/\,/g, " ");
    case "sanmzhixdsq":
    case "pk10qiansandanshi":
    case "pk10qiansidanshi":
    case "pk10qianwudanshi":
    case "sanmzuxdsq":
    case "ermzhixdsq":
    case "ermzuxdsq":
    case "rx1ds":
    case "rx2ds":
    case "rx3ds":
    case "rx4ds":
    case "rx5ds":
    case "rx6ds":
    case "rx7ds":
    case "rx8ds":
      return _formatTextarea_Num(type, datasel);
    case "dds":
      return datasel[0].toString().replace(/\,/g, "|");
    case "czw":
      return datasel[0].toString();
    /*****************k3************************/
    case "ebthds":
    case "sbthds":
      return _formatTextarea_Num(type, datasel);
    case "ebthdx":
    case "ethfx":
    case "ethds":
    case "sbthdx":
    case "sthdx":
    case "sthtx":
    case "slhtx":
    case "hezhi":
    case "dtyg":
    case "ethdx":
    case "douniu":
    case "zonghe":
      return datasel[0].toString();
    case "ebthdt":
      // case 'ethdx':
      return _formatSelect_Num(datasel, null, null);
    default:
      return _formatSelect_Num(datasel, null, null);
  }
}

//修改后---update by ian
var getSelectPlace = function(positions) {
  var places = [],
    place = [];
  // console.log("positions=>",positions);
  //万 千 百 十 个 五个位置
  if (positions.length > 0) {
    for (let i = 0; i < 5; i++) {
      if (positions.indexOf(i) > -1) {
        place.push("√");
      } else {
        place.push("-");
      }
    }
    places.push(place);
  }
  // console.log('places=>',places);
  return places;
};
// 得到用户输入的号码，格式化后的数据
var getTextareaBall = function(isinput, cptype, textarea_value) {
  var datasel = [];
  if (isinput) {
    //根据gameid
    var ass, format;
    switch (cptype) {
      case "ssc":
      case "k3":
      case "p35":
      case "d3":
        format = textarea_value
          .replace(/\,|\;|\n|\t/g, " ")
          .replace("\\|", " ");
        ass = format.split(" ");
        break;
      case "pk10":
      case "mqtpk10":
      case "x115":
        format = textarea_value.replace(/\,|\;|\n|\t/g, ";");
        ass = format.split(";");
        break;
      default:
        format = textarea_value.replace(/\,|\;|\n|\t/g, " ");
        ass = format.split(" ");
        break;
    }
    for (let i = 0; i < ass.length; i++) {
      datasel.push(ass[i]);
    }
  }
  return datasel;
};

export function getData(
  // isrxinput,
  positions,
  balls,
  isinput,
  cptype,
  textarea_value
) {
  let datasel = [],
    places = getSelectPlace(positions), //任选 --位置
    textarea = getTextareaBall(isinput, cptype, textarea_value);
  return datasel
    .concat(places)
    .concat(balls)
    .concat(textarea);
}
//multiple=倍数 model=模式 method=玩法 isrx=是否是任选 isrxinput=是否是任选单式 balls=选择的球号  isinput=是否是单式 gameId=游戏id
export function playOptions(
  multiple,
  model_value,
  method,
  isrx,
  isrxinput,
  positions,
  balls,
  isinput,
  cptype,
  textarea_value
) {
  var model = function() {
    var data;
    switch (model_value) {
      case "yuan":
        data = {
          val: 1,
          money: 1
        };
        break;
      case "jiao":
        data = {
          val: 2,
          money: 0.1
        };
        break;
      case "fen":
        data = {
          val: 3,
          money: 0.01
        };
        break;
      case "li":
        data = {
          val: 4,
          money: 0.001
        };
        break;
      case "yuan2":
        data = {
          val: 5,
          money: 2
        };
        break;
      case "jiao2":
        data = {
          val: 6,
          money: 0.2
        };
        break;
      case "fen2":
        data = {
          val: 7,
          money: 0.02
        };
        break;
      case "li2":
        data = {
          val: 8,
          money: 0.002
        };
        break;
    }
    return data;
  };
  /**************p_kind是否任选 methodid玩法id*********************/
  var update = function() {
    var bUnitMoney = 1,
      num = _inputNumbers(
        method,
        getData(positions, balls, isinput, cptype, textarea_value),
        isrx.toString()
      ),
      total = Number(multiple) * num * bUnitMoney * model().money;
    return {
      num: num,
      total: total.toFixed(3)
    };
  };

  return {
    update: update
  };
}
export function fftime(n) {
  return Number(n) < 10 ? "" + 0 + Number(n) : Number(n);
}
export function diff(t) {
  return t > 0
    ? {
        day: Math.floor(t / 86400),
        hour: Math.floor((t % 86400) / 3600),
        minute: Math.floor((t % 3600) / 60),
        second: Math.floor(t % 60)
      }
    : {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0
      };
}

export function getURL() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    // return 'https://www.jiahe6006.com';
    return 'https://web-zb.wtest666.com';
} else {
    // production code
    return window.location.protocol+'//'+window.location.host;
}
}

export function getAllLotterylogo(id) {
  var obj = {
    34: require("../assets/img/lottery/cplogo/txffc.png"),
    1: require("../assets/img/lottery/cplogo/cqssc.png"),
    6: require("../assets/img/lottery/cplogo/xjssc.png"),
    71: require("../assets/img/lottery/cplogo/tx5fc.png"),
    72: require("../assets/img/lottery/cplogo/xyffc.png"),
    73: require("../assets/img/lottery/cplogo/tx10fc.png"),
    44: require("../assets/img/lottery/cplogo/xjpk8.png"),
    35: require("../assets/img/lottery/cplogo/md3fc.png"),
    59: require("../assets/img/lottery/cplogo/twk8.png"),
    60: require("../assets/img/lottery/cplogo/hgk8.png"),
    61: require("../assets/img/lottery/cplogo/djk8.png"),
    57: require("../assets/img/lottery/cplogo/bjk8.png"),
    46: require("../assets/img/lottery/cplogo/xjp30m.png"),
    55: require("../assets/img/lottery/cplogo/xy10fc.png"),
    24: require("../assets/img/lottery/cplogo/hn1fc.png"),
    25: require("../assets/img/lottery/cplogo/xjp2fc.png"),
    26: require("../assets/img/lottery/cplogo/hn5fc.png"),
    28: require("../assets/img/lottery/cplogo/hg15fc.png"),
    30: require("../assets/img/lottery/cplogo/dj15fc.png"),
    40: require("../assets/img/lottery/cplogo/els15fc.png"),
    41: require("../assets/img/lottery/cplogo/bjssc.png"),
    42: require("../assets/img/lottery/cplogo/yd15fc.png"),
    43: require("../assets/img/lottery/cplogo/xdl15fc.png"),
    27: require("../assets/img/lottery/cplogo/sh11x5.png"),
    62: require("../assets/img/lottery/cplogo/jnd11x5.png"),
    63: require("../assets/img/lottery/cplogo/ny11x5.png"),
    9: require("../assets/img/lottery/cplogo/gd11x5.png"),
    67: require("../assets/img/lottery/cplogo/ah11x5.png"),
    68: require("../assets/img/lottery/cplogo/ln11x5.png"),
    8: require("../assets/img/lottery/cplogo/jx11x5.png"),
    2: require("../assets/img/lottery/cplogo/sd11x5.png"),
    12: require("../assets/img/lottery/cplogo/am11x5.png"),
    13: require("../assets/img/lottery/cplogo/fc3d.png"),
    14: require("../assets/img/lottery/cplogo/pl3.png"),
    22: require("../assets/img/lottery/cplogo/ahk3.png"),
    64: require("../assets/img/lottery/cplogo/jlpk3.png"),
    65: require("../assets/img/lottery/cplogo/xxlk3.png"),
    21: require("../assets/img/lottery/cplogo/jsk3.png"),
    20: require("../assets/img/lottery/cplogo/amk3.png"),
    31: require("../assets/img/lottery/cplogo/bjsc.png"),
    58: require("../assets/img/lottery/cplogo/xyft.png"),
    74: require("../assets/img/lottery/cplogo/jssc.png"),
    36: require("../assets/img/lottery/cplogo/yg120m.png"),
    38: require("../assets/img/lottery/cplogo/yg180m.png")
  };
  return obj[id];
}

export function getAllLottery(){
  return {
        34:"腾讯分分彩",
        1:"重庆时时彩",
        6:"新疆时时彩",
        71:"腾讯5分彩",
        72:"幸运分分彩",
        73:"腾讯10分彩",
        44:"新加坡快乐8",
        35:"缅甸3分彩",
        59:"台湾快乐8",
        60:"韩国快乐8",
        61:"东京快乐8",
        57:"北京快乐8",
        46:"新加坡30秒彩",
        55:"幸运10分",
        24:"河内一分彩",
        25:"新加坡2分彩",
        26:"河内5分彩",
        28:"韩国1.5分彩",
        30:"东京1.5分彩",
        40:"俄罗斯1.5分彩",
        41:"北京时时彩",
        42:"印度1.5分彩",
        43:"新德里1.5分彩",
        27:"上海11选5",
        62:"加拿大11选5",
        // 63:"纽约11选5",
        9:"广东11选5",
        67:"安徽11选5",
        68:"辽宁11选5",
        8:"江西11选5",
        12:"澳门11选5",
        13:"福彩3D",
        14:"排列3/5",
        22:"安徽快3",
        64:"吉隆坡快3",
        65:"新西兰快3",
        21:"江苏快3",
        20:"澳门k3",
        31:"北京赛车",
        58:"幸运飞艇",
        // 74:"极速赛车",
        36:"英国120秒赛",
        38:"英国180秒赛"
  };
}

export function getBanks() {
  return {
    25: "中国工商银行",
    26: "中国建设银行",
    27: "中国农业银行",
    28: "中国银行",
    29: "招商银行",
    30: "中国交通银行",
    31: "中国民生银行",
    32: "中信银行",
    33: "上海浦东发展银行",
    34: "广东发展银行",
    35: "平安银行",
    37: "兴业银行",
    38: "华夏银行",
    39: "中国光大银行",
    40: "中国邮政储蓄银行",
    42: "上海银行",
    43: "上海农行",
    44: "北京银行"
  };
}

export function getProvinces() {
  return {
    "1": {
      id: 1,
      name: "北京市",
      children: [
        { id: 35, name: "东城区" },
        { id: 36, name: "西城区" },
        { id: 38, name: "朝阳区" },
        { id: 39, name: "海淀区" },
        { id: 40, name: "丰台区" },
        { id: 41, name: "石景山区" },
        { id: 42, name: "门头沟区" },
        { id: 43, name: "房山区" },
        { id: 44, name: "通州区" },
        { id: 45, name: "顺义区" },
        { id: 46, name: "昌平区" },
        { id: 47, name: "大兴区" },
        { id: 48, name: "平谷区" },
        { id: 49, name: "怀柔区" },
        { id: 50, name: "密云县" },
        { id: 51, name: "延庆县" }
      ]
    },
    "2": {
      id: 2,
      name: "上海市",
      children: [
        { id: 140, name: "黄浦区" },
        { id: 141, name: "卢湾区" },
        { id: 142, name: "徐汇区" },
        { id: 143, name: "长宁区" },
        { id: 144, name: "静安区" },
        { id: 145, name: "普陀区" },
        { id: 146, name: "闸北区" },
        { id: 147, name: "虹口区" },
        { id: 148, name: "杨浦区" },
        { id: 149, name: "宝山区" },
        { id: 150, name: "闵行区" },
        { id: 151, name: "嘉定区" },
        { id: 152, name: "浦东新区" },
        { id: 153, name: "松江区" },
        { id: 154, name: "金山区" },
        { id: 155, name: "青浦区" },
        { id: 156, name: "南汇区" },
        { id: 157, name: "奉贤区" },
        { id: 158, name: "崇明县" }
      ]
    },
    "3": {
      id: 3,
      name: "天津市",
      children: [
        { id: 52, name: "和平区" },
        { id: 53, name: "河东区" },
        { id: 54, name: "河西区" },
        { id: 55, name: "南开区" },
        { id: 56, name: "河北区" },
        { id: 57, name: "红桥区" },
        { id: 58, name: "塘沽区" },
        { id: 59, name: "汉沽区" },
        { id: 60, name: "大港区" },
        { id: 61, name: "东丽区" },
        { id: 62, name: "西青区" },
        { id: 63, name: "北辰区" },
        { id: 64, name: "津南区" },
        { id: 65, name: "武清区" },
        { id: 66, name: "静海县" },
        { id: 67, name: "宁河县" },
        { id: 68, name: "宝坻区" },
        { id: 69, name: "蓟县" }
      ]
    },
    "4": {
      id: 4,
      name: "重庆市",
      children: [
        { id: 337, name: "渝中区" },
        { id: 338, name: "大渡口" },
        { id: 339, name: "江北区" },
        { id: 340, name: "沙坪坝" },
        { id: 341, name: "九龙坡" },
        { id: 342, name: "南岸区" },
        { id: 343, name: "北碚区" },
        { id: 344, name: "万盛区" },
        { id: 345, name: "双桥区" },
        { id: 346, name: "渝北区" },
        { id: 347, name: "巴南区" },
        { id: 348, name: "万州区" },
        { id: 349, name: "涪陵区" },
        { id: 350, name: "黔江区" },
        { id: 351, name: "永川区" },
        { id: 352, name: "合川区" },
        { id: 353, name: "江津区" },
        { id: 354, name: "南川区" },
        { id: 355, name: "长寿县" },
        { id: 356, name: "綦江县" },
        { id: 357, name: "潼南县" },
        { id: 358, name: "荣昌县" },
        { id: 359, name: "璧山县" },
        { id: 360, name: "大足县" },
        { id: 361, name: "铜梁县" },
        { id: 362, name: "梁平县" },
        { id: 363, name: "城口县" },
        { id: 364, name: "垫江县" },
        { id: 365, name: "武隆县" },
        { id: 366, name: "丰都县" },
        { id: 367, name: "奉节县" },
        { id: 368, name: "开县" },
        { id: 369, name: "云阳县" },
        { id: 370, name: "忠县" },
        { id: 371, name: "巫溪县" },
        { id: 372, name: "巫山县" },
        { id: 373, name: "石柱县" },
        { id: 374, name: "秀山县" },
        { id: 375, name: "酉阳县" },
        { id: 376, name: "彭水县" },
        { id: 489, name: "高新区" }
      ]
    },
    "5": {
      id: 5,
      name: "广东省",
      children: [
        { id: 286, name: "广州" },
        { id: 287, name: "深圳" },
        { id: 288, name: "珠海" },
        { id: 289, name: "汕头" },
        { id: 290, name: "韶关" },
        { id: 291, name: "河源" },
        { id: 292, name: "梅州" },
        { id: 293, name: "惠州" },
        { id: 294, name: "汕尾" },
        { id: 295, name: "东莞" },
        { id: 296, name: "中山" },
        { id: 297, name: "佛山" },
        { id: 298, name: "阳江" },
        { id: 299, name: "湛江" },
        { id: 300, name: "茂名" },
        { id: 301, name: "肇庆" },
        { id: 302, name: "清远" },
        { id: 303, name: "潮州" },
        { id: 304, name: "揭阳" },
        { id: 305, name: "云浮" },
        { id: 480, name: "江门" }
      ]
    },
    "6": {
      id: 6,
      name: "广西自治区",
      children: [
        { id: 306, name: "南宁" },
        { id: 307, name: "柳州" },
        { id: 308, name: "桂林" },
        { id: 309, name: "梧州市" },
        { id: 310, name: "北海" },
        { id: 311, name: "防城港" },
        { id: 312, name: "钦州" },
        { id: 313, name: "贵港" },
        { id: 314, name: "玉林" },
        { id: 315, name: "贺州" },
        { id: 316, name: "百色" },
        { id: 317, name: "河池" },
        { id: 487, name: "南宁地区" },
        { id: 488, name: "柳州地区" }
      ]
    },
    "7": {
      id: 7,
      name: "福建省",
      children: [
        { id: 200, name: "福州" },
        { id: 201, name: "厦门" },
        { id: 202, name: "三明" },
        { id: 203, name: "莆田" },
        { id: 204, name: "泉州" },
        { id: 205, name: "漳州" },
        { id: 206, name: "南平" },
        { id: 207, name: "龙岩" },
        { id: 208, name: "宁德" }
      ]
    },
    "8": {
      id: 8,
      name: "浙江省",
      children: [
        { id: 172, name: "杭州" },
        { id: 173, name: "宁波" },
        { id: 174, name: "温州" },
        { id: 175, name: "嘉兴" },
        { id: 176, name: "湖州" },
        { id: 177, name: "绍兴" },
        { id: 178, name: "金华" },
        { id: 179, name: "衢州" },
        { id: 180, name: "舟山" },
        { id: 181, name: "台州" },
        { id: 182, name: "丽水" }
      ]
    },
    "9": {
      id: 9,
      name: "江苏省",
      children: [
        { id: 159, name: "南京" },
        { id: 160, name: "徐州" },
        { id: 161, name: "连云港" },
        { id: 162, name: "淮安" },
        { id: 163, name: "宿迁" },
        { id: 164, name: "盐城" },
        { id: 165, name: "扬州" },
        { id: 166, name: "泰州" },
        { id: 167, name: "南通" },
        { id: 168, name: "镇江" },
        { id: 169, name: "常州" },
        { id: 170, name: "无锡" },
        { id: 171, name: "苏州" }
      ]
    },
    "10": {
      id: 10,
      name: "山东省",
      children: [
        { id: 220, name: "济南" },
        { id: 221, name: "青岛" },
        { id: 222, name: "淄博" },
        { id: 223, name: "枣庄" },
        { id: 224, name: "东营" },
        { id: 225, name: "潍坊" },
        { id: 226, name: "烟台" },
        { id: 227, name: "威海" },
        { id: 228, name: "济宁" },
        { id: 229, name: "泰安" },
        { id: 230, name: "日照" },
        { id: 231, name: "莱芜" },
        { id: 232, name: "德州" },
        { id: 233, name: "临沂" },
        { id: 234, name: "聊城" },
        { id: 235, name: "菏泽" },
        { id: 236, name: "滨州" }
      ]
    },
    "11": {
      id: 11,
      name: "山西省",
      children: [
        { id: 81, name: "太原" },
        { id: 82, name: "大同" },
        { id: 83, name: "阳泉" },
        { id: 84, name: "长治" },
        { id: 85, name: "晋城" },
        { id: 86, name: "朔州" },
        { id: 87, name: "晋中" },
        { id: 88, name: "忻州" },
        { id: 89, name: "临汾" },
        { id: 90, name: "运城" },
        { id: 91, name: "吕梁地区" }
      ]
    },
    "12": {
      id: 12,
      name: "辽宁省",
      children: [
        { id: 104, name: "沈阳" },
        { id: 105, name: "大连" },
        { id: 106, name: "鞍山" },
        { id: 107, name: "抚顺" },
        { id: 108, name: "本溪" },
        { id: 109, name: "丹东" },
        { id: 110, name: "锦州" },
        { id: 111, name: "葫芦岛" },
        { id: 112, name: "营口" },
        { id: 113, name: "盘锦" },
        { id: 114, name: "阜新" },
        { id: 115, name: "辽阳" },
        { id: 116, name: "铁岭" },
        { id: 117, name: "朝阳" }
      ]
    },
    "13": {
      id: 13,
      name: "吉林省",
      children: [
        { id: 118, name: "长春" },
        { id: 119, name: "吉林市" },
        { id: 120, name: "四平" },
        { id: 121, name: "辽源" },
        { id: 122, name: "通化" },
        { id: 123, name: "白山" },
        { id: 124, name: "松原" },
        { id: 125, name: "白城" },
        { id: 126, name: "延边自治州" }
      ]
    },
    "14": {
      id: 14,
      name: "黑龙江省",
      children: [
        { id: 127, name: "哈尔滨" },
        { id: 128, name: "齐齐哈尔" },
        { id: 129, name: "鹤岗" },
        { id: 130, name: "双鸭山" },
        { id: 131, name: "鸡西" },
        { id: 132, name: "大庆" },
        { id: 133, name: "伊春" },
        { id: 134, name: "牡丹江" },
        { id: 135, name: "佳木斯" },
        { id: 136, name: "七台河" },
        { id: 137, name: "黑河" },
        { id: 138, name: "绥化" },
        { id: 139, name: "大兴安岭地区" }
      ]
    },
    "15": {
      id: 15,
      name: "河北省",
      children: [
        { id: 70, name: "石家庄" },
        { id: 71, name: "唐山" },
        { id: 72, name: "秦皇岛" },
        { id: 73, name: "邯郸" },
        { id: 74, name: "邢台" },
        { id: 75, name: "保定" },
        { id: 76, name: "张家口" },
        { id: 77, name: "承德" },
        { id: 78, name: "沧州" },
        { id: 79, name: "廊坊" },
        { id: 80, name: "衡水" }
      ]
    },
    "16": {
      id: 16,
      name: "河南省",
      children: [
        { id: 237, name: "郑州" },
        { id: 238, name: "开封" },
        { id: 239, name: "洛阳" },
        { id: 240, name: "平顶山" },
        { id: 241, name: "焦作" },
        { id: 242, name: "鹤壁" },
        { id: 243, name: "新乡" },
        { id: 244, name: "安阳" },
        { id: 245, name: "濮阳" },
        { id: 246, name: "许昌" },
        { id: 247, name: "漯河" },
        { id: 248, name: "三门峡" },
        { id: 249, name: "南阳" },
        { id: 250, name: "商丘" },
        { id: 251, name: "信阳" },
        { id: 252, name: "周口" },
        { id: 253, name: "驻马店" },
        { id: 254, name: "济源" }
      ]
    },
    "17": {
      id: 17,
      name: "四川省",
      children: [
        { id: 377, name: "成都" },
        { id: 378, name: "自贡" },
        { id: 379, name: "攀枝花" },
        { id: 380, name: "泸州" },
        { id: 381, name: "德阳" },
        { id: 382, name: "绵阳" },
        { id: 383, name: "广元" },
        { id: 384, name: "遂宁" },
        { id: 385, name: "内江" },
        { id: 386, name: "乐山" },
        { id: 387, name: "南充" },
        { id: 388, name: "宜宾" },
        { id: 389, name: "广安" },
        { id: 390, name: "达州" },
        { id: 391, name: "巴中" },
        { id: 392, name: "雅安" },
        { id: 393, name: "眉山" },
        { id: 394, name: "资阳" },
        { id: 395, name: "阿坝自治州" },
        { id: 396, name: "甘孜自治州" },
        { id: 397, name: "凉山自治州" }
      ]
    },
    "18": {
      id: 18,
      name: "陕西省",
      children: [
        { id: 430, name: "西安" },
        { id: 431, name: "铜川" },
        { id: 432, name: "宝鸡" },
        { id: 433, name: "咸阳" },
        { id: 434, name: "渭南" },
        { id: 435, name: "延安" },
        { id: 436, name: "汉中" },
        { id: 437, name: "榆林" },
        { id: 438, name: "安康" },
        { id: 439, name: "商洛地区" }
      ]
    },
    "19": {
      id: 19,
      name: "湖北省",
      children: [
        { id: 255, name: "武汉" },
        { id: 256, name: "黄石" },
        { id: 257, name: "襄樊" },
        { id: 258, name: "十堰" },
        { id: 259, name: "荆州" },
        { id: 260, name: "宜昌" },
        { id: 261, name: "荆门" },
        { id: 262, name: "鄂州" },
        { id: 263, name: "孝感" },
        { id: 264, name: "黄冈" },
        { id: 265, name: "咸宁" },
        { id: 266, name: "随州" },
        { id: 267, name: "恩施自治州" },
        { id: 268, name: "仙桃" },
        { id: 269, name: "天门" },
        { id: 270, name: "潜江" },
        { id: 271, name: "神农架林区" },
        { id: 483, name: "黄岗" }
      ]
    },
    "20": {
      id: 20,
      name: "湖南省",
      children: [
        { id: 272, name: "长沙" },
        { id: 273, name: "株洲" },
        { id: 274, name: "湘潭" },
        { id: 275, name: "衡阳" },
        { id: 276, name: "邵阳" },
        { id: 277, name: "岳阳" },
        { id: 278, name: "常德" },
        { id: 279, name: "张家界" },
        { id: 280, name: "益阳" },
        { id: 281, name: "郴州" },
        { id: 282, name: "永州" },
        { id: 283, name: "怀化" },
        { id: 284, name: "娄底" },
        { id: 285, name: "湘西自治州" }
      ]
    },
    "21": {
      id: 21,
      name: "江西省",
      children: [
        { id: 209, name: "南昌" },
        { id: 210, name: "景德镇" },
        { id: 211, name: "萍乡" },
        { id: 212, name: "新余" },
        { id: 213, name: "九江" },
        { id: 214, name: "鹰潭" },
        { id: 215, name: "赣州" },
        { id: 216, name: "吉安" },
        { id: 217, name: "宜春" },
        { id: 218, name: "上饶" },
        { id: 219, name: "抚州" }
      ]
    },
    "22": {
      id: 22,
      name: "云南省",
      children: [
        { id: 407, name: "昆明" },
        { id: 408, name: "曲靖" },
        { id: 409, name: "玉溪" },
        { id: 410, name: "保山" },
        { id: 411, name: "昭通" },
        { id: 412, name: "普洱市" },
        { id: 413, name: "临沧地区" },
        { id: 414, name: "丽江" },
        { id: 415, name: "文山自治州" },
        { id: 416, name: "红河自治州" },
        { id: 417, name: "西双版纳自治州" },
        { id: 418, name: "楚雄自治州" },
        { id: 419, name: "大理" },
        { id: 420, name: "德宏自治州" },
        { id: 421, name: "怒江自治州" },
        { id: 422, name: "迪庆自治州" }
      ]
    },
    "23": {
      id: 23,
      name: "安徽省",
      children: [
        { id: 183, name: "合肥" },
        { id: 184, name: "芜湖" },
        { id: 185, name: "蚌埠" },
        { id: 186, name: "淮南" },
        { id: 187, name: "马鞍山" },
        { id: 188, name: "淮北" },
        { id: 189, name: "铜陵" },
        { id: 190, name: "安庆" },
        { id: 191, name: "黄山" },
        { id: 192, name: "滁州" },
        { id: 193, name: "阜阳" },
        { id: 194, name: "宿州" },
        { id: 195, name: "巢湖" },
        { id: 196, name: "六安" },
        { id: 197, name: "毫州" },
        { id: 198, name: "宣城" },
        { id: 199, name: "池州" }
      ]
    },
    "24": {
      id: 24,
      name: "海南省",
      children: [
        { id: 318, name: "海口" },
        { id: 319, name: "三亚" },
        { id: 320, name: "五指山" },
        { id: 321, name: "琼海" },
        { id: 322, name: "儋州" },
        { id: 324, name: "文昌" },
        { id: 325, name: "万宁" },
        { id: 326, name: "东方" },
        { id: 327, name: "澄迈县" },
        { id: 328, name: "安定县" },
        { id: 329, name: "屯昌县" },
        { id: 330, name: "临高县" },
        { id: 331, name: "白沙自治县" },
        { id: 332, name: "昌江自治县" },
        { id: 333, name: "乐东自治县" },
        { id: 334, name: "陵水自治县" },
        { id: 335, name: "保亭自治县" },
        { id: 336, name: "琼中自治县" }
      ]
    },
    "25": {
      id: 25,
      name: "贵州省",
      children: [
        { id: 398, name: "贵阳" },
        { id: 399, name: "六盘水" },
        { id: 400, name: "遵义" },
        { id: 401, name: "安顺" },
        { id: 402, name: "铜仁地区" },
        { id: 403, name: "毕节地区" },
        { id: 404, name: "黔西南自治州" },
        { id: 405, name: "黔东南自治州" },
        { id: 406, name: "黔南自治州" }
      ]
    },
    "26": {
      id: 26,
      name: "甘肃省",
      children: [
        { id: 440, name: "兰州" },
        { id: 441, name: "金昌" },
        { id: 442, name: "白银" },
        { id: 443, name: "天水" },
        { id: 444, name: "嘉峪关" },
        { id: 445, name: "定西地区" },
        { id: 446, name: "平凉市" },
        { id: 447, name: "庆阳市" },
        { id: 448, name: "陇南地区" },
        { id: 449, name: "武威市" },
        { id: 450, name: "张掖市" },
        { id: 451, name: "酒泉" },
        { id: 452, name: "甘南自治州" },
        { id: 453, name: "临夏自治州" }
      ]
    },
    "27": {
      id: 27,
      name: "新疆自治区",
      children: [
        { id: 465, name: "乌鲁木齐" },
        { id: 466, name: "克拉玛依" },
        { id: 467, name: "石河子" },
        { id: 468, name: "吐鲁番" },
        { id: 469, name: "哈密地区" },
        { id: 470, name: "和田地区" },
        { id: 471, name: "阿克苏地区" },
        { id: 472, name: "喀什地区" },
        { id: 473, name: "克孜勒苏柯尔克孜自治" },
        { id: 474, name: "巴音郭楞自治州" },
        { id: 475, name: "昌吉自治州" },
        { id: 476, name: "博尔塔拉自治州" },
        { id: 477, name: "伊犁自治州" },
        { id: 481, name: "伊宁" }
      ]
    },
    "28": {
      id: 28,
      name: "内蒙古自治区",
      children: [
        { id: 92, name: "呼和浩特" },
        { id: 93, name: "包头" },
        { id: 94, name: "乌海" },
        { id: 95, name: "赤峰" },
        { id: 96, name: "通辽" },
        { id: 97, name: "乌兰察布" },
        { id: 98, name: "锡林郭勒盟" },
        { id: 99, name: "乌兰察布盟" },
        { id: 100, name: "鄂尔多斯市" },
        { id: 101, name: "巴彦淖尔盟" },
        { id: 102, name: "阿拉善" },
        { id: 103, name: "兴安" }
      ]
    },
    "29": {
      id: 29,
      name: "宁夏自治区",
      children: [
        { id: 461, name: "银川" },
        { id: 462, name: "石嘴山" },
        { id: 463, name: "吴忠" },
        { id: 464, name: "固原" }
      ]
    },
    "30": {
      id: 30,
      name: "青海省",
      children: [
        { id: 454, name: "西宁" },
        { id: 455, name: "海东地区" },
        { id: 456, name: "海北自治州" },
        { id: 457, name: "海南自治州" },
        { id: 458, name: "果洛自治州" },
        { id: 459, name: "玉树自治州" },
        { id: 460, name: "海西自治州" },
        { id: 484, name: "黄南自治州" }
      ]
    },
    "31": {
      id: 31,
      name: "西藏自治区",
      children: [
        { id: 423, name: "拉萨" },
        { id: 424, name: "那曲" },
        { id: 425, name: "昌都地区" },
        { id: 426, name: "山南地区" },
        { id: 427, name: "日喀则" },
        { id: 428, name: "阿里地区" },
        { id: 429, name: "林芝地区" }
      ]
    }
  };
}


