(function () {
    "use strict";
    var Line, Speed,
        bind = function (fn, me) {
            return function () {
                return fn.apply(me, arguments);
            };
        };

    Speed = (function () {
        function Speed() {
            this.loadDomainList = bind(this.loadDomainList, this);
            this.closeTip = bind(this.closeTip, this);
            this.domainValid = bind(this.domainValid, this);
            this.lines = [];
            this.domains = [];
            this.lines_oversea = [];
            this.domains_oversea = [];
            this.data = {};
            this.els = {};
            this.els.box = $('#list');
            this.els.reDet = $('button.reDetectBtn');
            this.els.valid = $('#dValid');
            this.els.dInput = $('#dInput');
            this.els.tipBox = $('#tipBox');
            this.els.tipMsg = $('#tipMsg');
            this.els.close = $('#tipBox .closeBtn');
            this.els.logo = $('#logo');
            this.els.plat = $('.platform');
            this.loadDomainList();
            this.els.reDet.on('click', this.loadDomainList);
            this.els.valid.on('click', this.domainValid);
            this.els.close.on('click', this.closeTip);
            this.els.valid.prop('disabled', true);
            this.els.dInput.on('keyup', (function (_this) {
                return function (event) {
                    if (event.keyCode === 13) {
                        return _this.els.valid.click();
                    }
                };
            })(this));
            this.els.box.attr('data-ua', this.myBrowser());
        }

        Speed.prototype.myBrowser = function () {
            var isFf, isMac, isWin, ua;
            ua = navigator.userAgent;
            isMac = ua.indexOf('Mac') > -1;
            isWin = ua.indexOf('Windows') > -1;
            isFf = ua.indexOf('Firefox') > -1;
            if (isMac && isFf) {
                return 'mac_ff';
            }
            if (isWin && isFf) {
                return 'win_ff';
            }
        };

        Speed.prototype.domainValid = function () {
            var arr, l, ref, val;
            val = this.els.dInput.val();
            if (!val) {
                this.els.tipMsg.removeClass().html('亲爱的，请输入您要验证的域名呀！');
                this.els.tipBox.fadeIn(200);
                return;
            }
            val = val.replace(/(^([\s]*http[s]?:\/\/)?)|(\/[\/\w.#]*[\s]*$)/g, '');
            if (((ref = val.match(/\./g)) != null ? ref.length : void 0) >= 2) {
                arr = val.split('.');
                l = arr.length;
                val = arr[l - 2] + "." + arr[l - 1];
            }
            if (this.domains.indexOf(val) !== -1) {
                this.els.tipMsg.removeClass().html("该域名是永泰在线官方域名，请放心使用！");
            } else {
                this.els.tipMsg.removeClass().addClass('text-red').html("非永泰在线官方域名，请不要使用！");
            }
            return this.els.tipBox.fadeIn(200);
        };

        Speed.prototype.closeTip = function () {
            return this.els.tipBox.fadeOut(200);
        };

        Speed.prototype.loadDomainList = function () {
            var btn;
            btn = this.els.reDet.prop('disabled', true);
            return $.ajax({
                url: "domain.json",
                dataType: 'json',
                success: (function (_this) {
                    return function (data) {
                        var i, j, k, m, ref, temp;
                        _this.lines = data.line.jh;
                        _this.lines_oversea = data.line.oversea;
                        _this.domains = data.domain.jh;
                        _this.domains_oversea = data.domain.oversea;
                        _this.els.valid.prop('disabled', false);
                        temp = '';
                        for (i = k = 0, ref = _this.lines.length; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
                            temp += "<li>\n	<label>官方地址" + (i + 1) + "</label>\n	<div class=\"d_mid\">\n		<div class=\"line_bg\">\n			<div class=\"cover aniCover\"></div>";
                            for (j = m = 0; m < 30; j = ++m) {
                                temp += '<span></span>\n';
                            }
                            temp += "		</div>\n	</div>\n	<span class=\"icon icon-loading icon-spin\"></span>\n	<a class=\"go_btn disabled\" href=\"javascript:;\" title=\"立即访问\" target=\"_blank\">立即访问</a>\n</li>";
                        }
                        _this.els.list = $(temp);
                        _this.els.box.empty().append(_this.els.list);
                        return _this.lineDetect();
                    };
                })(this)
            });
        };

        Speed.prototype.lineDetect = function () {
            var k, len, ref, results, url;
            this.data.index = 0;
            ref = this.lines;
            results = [];
            for (k = 0, len = ref.length; k < len; k++) {
                url = ref[k];
                results.push(new Line(url, this));
            }
            return results;
        };

        Speed.prototype.getLength = function (ms) {
            switch (true) {
                case (0 <= ms && ms < 60):
                    return 30;
                case (60 <= ms && ms < 80):
                    return 29;
                case (80 <= ms && ms < 100):
                    return 28;
                case (100 <= ms && ms < 120):
                    return 27;
                case (120 <= ms && ms < 140):
                    return 26;
                case (140 <= ms && ms < 160):
                    return 25;
                case (160 <= ms && ms < 180):
                    return 24;
                case (180 <= ms && ms < 200):
                    return 23;
                case (200 <= ms && ms < 220):
                    return 22;
                case (220 <= ms && ms < 240):
                    return 21;
                case (240 <= ms && ms < 280):
                    return 20;
                case (280 <= ms && ms < 320):
                    return 19;
                case (320 <= ms && ms < 360):
                    return 18;
                case (360 <= ms && ms < 400):
                    return 17;
                case (400 <= ms && ms < 440):
                    return 16;
                case (440 <= ms && ms < 480):
                    return 15;
                case (480 <= ms && ms < 520):
                    return 14;
                case (520 <= ms && ms < 560):
                    return 13;
                case (560 <= ms && ms < 600):
                    return 12;
                case (600 <= ms && ms < 640):
                    return 11;
                case (640 <= ms && ms < 1000):
                    return 10;
                case (1000 <= ms && ms < 1500):
                    return 9;
                case (1500 <= ms && ms < 2000):
                    return 8;
                case (2000 <= ms && ms < 2500):
                    return 7;
                case (2500 <= ms && ms < 3000):
                    return 6;
                case (3000 <= ms && ms < 3500):
                    return 5;
                case (3500 <= ms && ms < 4000):
                    return 4;
                case (4000 <= ms && ms < 4500):
                    return 3;
                case (4500 <= ms && ms < 5000):
                    return 2;
                case 5000 <= ms:
                    return 1;
            }
        };

        return Speed;

    })();

    Line = (function () {
        function Line(url1, view) {
            var el, target;
            this.url = url1;
            this.view = view;
            this.show = bind(this.show, this);
            this.st = new Date().getTime();

            /*
                    $.ajax
                        url: "#{ @url }/#{ Math.random().toString().slice 2 }"
                        complete: @show
             */
            target = $('body');
            el = $("<img src=\"" + this.url + "/" + (Math.random().toString().slice(2)) + "\" style=\"display: none;\"/>");
            el.on('error', this.show);
            // el.on('error', this.show_oversea);
            target.append(el);
        }

        Line.prototype.show = function (event) {
            var aEl, bs, dv, el, et, ico, li, n, rw, sw, tar, tim;
            el = $(event.currentTarget);
            el.off().remove();
            et = new Date().getTime();
            dv = et - this.st;
            li = this.view.els.list.eq(this.view.data.index++);
            ico = li.find('.icon-loading');
            ico.removeClass().addClass('tim').html(dv >= 1000 ? ">=1s" : dv + "ms");
            aEl = li.find('.go_btn').removeClass('disabled');
            aEl.attr({
                href: this.url
            });
            tar = li.find('.cover').removeClass('aniCover');
            n = this.view.getLength(dv);
            bs = li.find('.line_bg span');
            sw = parseInt(tar.css('width'));
            if (n === 30) {
                rw = sw - bs.eq(n - 1).position().left - bs.eq(n - 1).outerWidth() + 3;
            } else {
                rw = sw - bs.eq(n).position().left;
            }
            tim = 1000 / 30 * n;
            tar.css({
                width: sw
            });
            tar.animate({
                width: rw
            }, tim);
            switch (true) {
                case (0 <= dv && dv <= 400):
                    li.attr({
                        'data-type': 'fast'
                    });
                    break;
                case (400 < dv && dv <= 800):
                    li.attr({
                        'data-type': 'medium'
                    });
                    break;
                default:
                    li.attr({
                        'data-type': 'low'
                    });
            }
            if (this.view.data.index === this.view.lines.length) {
                return this.view.els.reDet.prop('disabled', false);
            }
        };

        return Line;

    })();

    new Speed();

}).call(this);
