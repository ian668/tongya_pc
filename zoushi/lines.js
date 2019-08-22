var tableid = "waitBox";
JoinLine = function (a, b) {
    this.color = a || "#000000";
    this.size = b || 1;
    this.lines = [];
    this.tmpDom = null;
    this.visible = true;
    var c = document.getElementById("container");
    this.box = document.body;
    if (c) {
        this.wrap = c.getElementsByTagName("DIV")[0];
        if (this.wrap) {
            this.box = this.wrap;
            this.wrap.style.position = "relative";
        }
    }
};
JoinLine.indent = 6;
var scrwidth = $("body").width(),scrheigjt = window.screen.height,moveheight="";
//      alert(scrwidth)
JoinLine.prototype = {
    show:function (b) {
        for (var a = 0; a < this.lines.length; a++) {
            this.lines[a].style.visibility = b ? "visible" : "hidden";
        }
    },
    remove:function () {
        for (var a = 0; a < this.lines.length; a++) {
            this.lines[a].parentNode.removeChild(this.lines[a]);
        }
        this.lines = [];
    },
    join:function (h, f, g) {
        //this.remove();
        this.visible = f ? "visible" : "hidden";
        this.tmpDom = document.createDocumentFragment();
        for (var e = 0; e < h.length - 1; e++) {
            var d = this.pos(h[e]);
            var c = this.pos(h[e + 1]);
            if (g && g(d, c) === false) {
                continue;
            }
            if (document.all) {
                this.IELine(d.x, d.y, c.x, c.y);
            } else {
                this.FFLine(d.x, d.y, c.x, c.y);
            }
        }
        return this.tmpDom;
        //document.getElementById(tableid).parentNode.appendChild(this.tmpDom);
    },
    pos:function (c) {
        if (c.nodeType == undefined) {
            return c;
        }
        var d = {x:0, y:0}, b = c;
        for (; b; b = b.offsetParent) {
            d.x += b.offsetLeft;
            d.y += b.offsetTop;
            if (this.wrap && b.offsetParent === this.wrap) {
                break;
            }
        }
        var waitBox = document.getElementById(tableid).parentNode.parentNode;
        if (document.getElementById(tableid).parentNode) {
            d.x -= waitBox.offsetLeft;
            d.y -= waitBox.offsetTop;
        }
        d.x += parseInt(c.offsetWidth / 2);
        d.y += parseInt(c.offsetHeight / 2);
        return d;
    },
    _oldDot:function (a, e, c, d) {
        var b = document.createElement("DIV");
        b.style.cssText = "z-index:3;position: absolute; left: " + a + "px; top: " + e + "px;background: " + c + ";width:" + d + "px;height:" + d + "px;font-size:1px;overflow:hidden";
        b.style.visibility = this.visible;
        this.lines.push(this.tmpDom.appendChild(b));
    },
    _oldLine:function (c, g, b, f) {
        var a = Math.floor(Math.sqrt((b - c) * (b - c) + (f - g) * (f - g)));
        var d = Math.atan((b - c) / (f - g));
        if (((f - g) < 0 && (b - c) > 0) || ((f - g) < 0 && (b - c) < 0)) {
            d = Math.PI + d;
        }
        var j = Math.sin(d), h = Math.cos(d), e = 0;
        do {
            this.FFDot(c + e * j, g + e * h, this.color, this.size);
        } while (e++ < a);
    },
    FFLine:function (c, g, b, f) {

        if(scrwidth <= 320){//5s
            moveheight = 213
        }else if(scrwidth <= 360){//普通安卓手机
            moveheight = 240
        }else if(scrwidth <= 375){//苹果6s 小屏
            moveheight = 250
        }else if(scrwidth <= 393){// 小米手机 393宽
            moveheight = 260
        }else if(scrwidth <= 414){  // 6s plus
            moveheight = 275
        }else if(scrwidth <= 425){  // 425
            moveheight = 280
        }else if(scrwidth <= 568){
            moveheight = 375
        }else if(scrwidth <= 640){//640
            moveheight = 255
        }else if(scrwidth <= 667){//6 7 8 横屏
            moveheight = 265
        }else if(scrwidth <= 692){//三星 s8 横屏
            moveheight = 275
        }else if(scrwidth <= 736){//8 plus 横屏
            moveheight = 290
        }else if(scrwidth <= 754){
            moveheight = 300
        }else if(scrwidth <= 768){//ipad
            moveheight = 310
        }else if(scrwidth <= 812){//iphone x横屏
            moveheight = 325
        }else if(scrwidth <= 823){
            moveheight = 330
        }else if(scrwidth <= 834){//ipad 9.5
            moveheight = 333
        }else if(scrwidth <= 856){
            moveheight = 340
        }else if(scrwidth <= 1024){//ipad 横屏
            moveheight = 410
        }else if(scrwidth <= 1112){//ipad 横屏
            moveheight = 445
        }else if(scrwidth <= 1366){ //ipad pro
            moveheight =550
        }
        c, g, b, f
        if (Math.abs(g - f) < (JoinLine.indent * 2) && c == b) {
            return;
        }
        var h = this.nPos(c, g, b, f, JoinLine.indent);
        c = h[0];
        g = h[1];
        b = h[2];
        f = h[3];
        var d = document.createElement("canvas");
        d.style.position = "absolute";
        d.style.zIndex = "1";
        d.style.visibility = this.visible;
        d.width = Math.abs(c - b) || this.size;
        d.width = Math.max(2, d.width);
        d.height = Math.abs(g - f) || this.size;
        var i = Math.min(g, f);
        var a = Math.min(c, b);
        d.style.top = i + "px";
        d.style.left = a + "px";
        var e = d.getContext("2d");
        e.save();
        e.strokeStyle = '#f44';//this.color;
        //	e.lineWidth = this.size;
        e.lineWidth = 1;
        e.beginPath();
        e.moveTo(c - a, g - i);
        e.lineTo(b - a, f - i);
        e.closePath();
        e.stroke();
        e.restore();

        //this.lines.push(d);
        this.tmpDom.appendChild(d);
    },
    IELine:function (c, e, b, d) {
        if (Math.abs(e - d) < (JoinLine.indent * 2) && c == b) {
            return;
        }
        var f = this.nPos(c, e, b, d, JoinLine.indent);
        c = f[0];
        e = f[1];
        b = f[2];
        d = f[3];
        var a = document.createElement("<esun:line></esun:line>");
        a.from = c + "," + e;
        a.to = b + "," + d;
        a.strokeColor = this.color;
//		a.strokeWeight = this.size + "px";
        a.strokeWeight = "1.5px";
        a.style.cssText = "position:absolute;z-index:3;top:0;left:0;behavior: url(#default#VML);";
        a.style.visibility = this.visible;
        a.coordOrigin = "0,0";
        this.lines.push(a);
        this.tmpDom.appendChild(a);
    },
    nPos:function (g, o, f, m, e) {
        var p = g - f, n = o - m;
        var k = Math.round(Math.sqrt(Math.pow(p, 2) + Math.pow(n, 2)));
        var d, j, q, h;
        var l = Math.round((p * e) / k);
        var i = Math.round((n * e) / k);
        return [f + l, m + i, g - l, o - i];
    }
};



