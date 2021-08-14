//@ sourceURL=b1.js


$("<script>").attr({src: GO_FILE_PREFIX + "b2.js"}).appendTo("body");

(function () {/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var c = this || self;

    function e(a, l) {
        a = a.split(".");
        var b = c;
        a[0] in b || "undefined" == typeof b.execScript || b.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === l ? b[d] && b[d] !== Object.prototype[d] ? b = b[d] : b = b[d] = {} : b[d] = l
    }

    var f = /^[\w+/_-]+[=]{0,2}$/, g = null;

    function h(a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && f.test(a) ? a : ""
    }

    function k(a) {
        return a
    };var m = {
        0: "\u7ffb\u8bd1",
        1: "\u53d6\u6d88",
        2: "\u53d6\u6d88",
        3: function (a) {
            return "Google \u5df2\u5c06\u6b64\u7f51\u9875\u81ea\u52a8\u7ffb\u8bd1\u6210\uff1a" + a
        },
        4: function (a) {
            return "\u5df2\u7ffb\u8bd1\u4e3a\u4ee5\u4e0b\u8bed\u8a00\uff1a" + a
        },
        5: "\u9519\u8bef\uff1a\u670d\u52a1\u5668\u65e0\u6cd5\u5b8c\u6210\u60a8\u7684\u8bf7\u6c42\u3002\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
        6: "\u4e86\u89e3\u8be6\u60c5",
        7: function (a) {
            return "\u7531 " + (a + "\u5f3a\u529b\u9a71\u52a8")
        },
        8: "\u7ffb\u8bd1",
        9: "\u6b63\u5728\u7ffb\u8bd1",
        10: function (a) {
            return "\u7528 Google \u7ffb\u8bd1\u5c06\u6b64\u7f51\u9875\u7ffb\u8bd1\u6210" + (a + "\uff1f")
        },
        11: function (a) {
            return "\u4f7f\u7528\u4ee5\u4e0b\u8bed\u8a00\u67e5\u770b\u6b64\u7f51\u9875\uff1a" + a
        },
        12: "\u663e\u793a\u539f\u6587",
        13: "\u6b64\u672c\u5730\u6587\u4ef6\u7684\u5185\u5bb9\u5c06\u901a\u8fc7\u5b89\u5168\u8fde\u63a5\u53d1\u9001\u7ed9 Google \u8fdb\u884c\u7ffb\u8bd1\u3002",
        14: "\u6b64\u5b89\u5168\u7f51\u9875\u7684\u5185\u5bb9\u5c06\u901a\u8fc7\u5b89\u5168\u8fde\u63a5\u53d1\u9001\u7ed9 Google \u8fdb\u884c\u7ffb\u8bd1\u3002",
        15: "\u6b64 Intranet \u7f51\u9875\u7684\u5185\u5bb9\u5c06\u901a\u8fc7\u5b89\u5168\u8fde\u63a5\u53d1\u9001\u7ed9 Google \u8fdb\u884c\u7ffb\u8bd1\u3002",
        16: "\u9009\u62e9\u8bed\u8a00",
        17: function (a) {
            return "\u5173\u95ed" + (a + "\u7ffb\u8bd1")
        },
        18: function (a) {
            return "\u5173\u95ed\u4ee5\u4e0b\u8bed\u8a00\u7684\u81ea\u52a8\u6a2a\u5e45\u5f39\u51fa\u529f\u80fd\uff1a" + a
        },
        19: "\u59cb\u7ec8\u9690\u85cf",
        20: "\u539f\u6587\uff1a",
        21: "\u63d0\u4f9b\u66f4\u597d\u7684\u7ffb\u8bd1\u5efa\u8bae",
        22: "\u63d0\u4f9b\u5efa\u8bae",
        23: "\u5168\u90e8\u7ffb\u8bd1",
        24: "\u5168\u90e8\u6062\u590d",
        25: "\u5168\u90e8\u53d6\u6d88",
        26: "\u5c06\u8fd9\u4e9b\u5185\u5bb9\u7ffb\u8bd1\u6210\u6211\u7684\u8bed\u8a00",
        27: function (a) {
            return "\u5c06\u6240\u6709\u5185\u5bb9\u7ffb\u8bd1\u6210" + a
        },
        28: "\u663e\u793a\u6e90\u8bed\u8a00",
        29: "\u9009\u9879",
        30: "\u5173\u95ed\u5bf9\u6b64\u7f51\u7ad9\u7684\u7ffb\u8bd1",
        31: null,
        32: "\u663e\u793a\u5176\u4ed6\u7ffb\u8bd1",
        33: "\u70b9\u51fb\u4e0a\u65b9\u7684\u5b57\u8bcd\u5373\u53ef\u83b7\u53d6\u5176\u4ed6\u7ffb\u8bd1",
        34: "\u91c7\u7528",
        35: "\u6309\u4f4f Shift \u952e\u8fdb\u884c\u62d6\u52a8\u53ef\u91cd\u65b0\u6392\u5e8f",
        36: "\u70b9\u51fb\u53ef\u663e\u793a\u5176\u4ed6\u7ffb\u8bd1",
        37: "\u6309\u4f4f Shift \u952e\u7684\u540c\u65f6\u70b9\u51fb\u5e76\u62d6\u52a8\u4e0a\u65b9\u7684\u5b57\u8bcd\u5373\u53ef\u91cd\u65b0\u6392\u5e8f\u3002",
        38: "\u611f\u8c22\u60a8\u4e3a Google \u7ffb\u8bd1\u63d0\u4f9b\u7ffb\u8bd1\u5efa\u8bae\u3002",
        39: "\u7ba1\u7406\u6b64\u7f51\u7ad9\u7684\u7ffb\u8bd1",
        40: "\u70b9\u51fb\u67d0\u4e2a\u5b57\u8bcd\u663e\u793a\u5176\u4ed6\u7ffb\u8bd1\u6216\u53cc\u51fb\u67d0\u4e2a\u5b57\u8bcd\u76f4\u63a5\u8fdb\u884c\u4fee\u6539",
        41: "\u539f\u6587",
        42: "\u7ffb\u8bd1",
        43: "\u7ffb\u8bd1",
        44: "\u60a8\u6240\u505a\u7684\u66f4\u6b63\u5df2\u63d0\u4ea4\u3002",
        45: "\u9519\u8bef\uff1a\u4e0d\u652f\u6301\u7f51\u9875\u6240\u7528\u8bed\u8a00\u3002",
        46: "\u8bed\u8a00\u7ffb\u8bd1\u5fae\u4ef6"
    };
    var n;

    function p(a, l) {
        this.g = l === q ? a : ""
    }

    p.prototype.toString = function () {
        return this.g + ""
    };
    var q = {};
    var r = window.google && google.translate && google.translate._const;
    if (r) {
        var t;
        a:{
            for (var u = [], v = [""], w = 0; w < v.length; ++w) {
                var x = v[w].split(","), y = x[0];
                if (y) {
                    var z = Number(x[1]);
                    if (!(!z || .1 < z || 0 > z)) {
                        var A = Number(x[2]), B = new Date,
                            C = 1E4 * B.getFullYear() + 100 * (B.getMonth() + 1) + B.getDate();
                        !A || A < C || u.push({version: y, ratio: z, h: A})
                    }
                }
            }
            var D = 0, E = window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),
                F = Number(E && E[1]) || Math.random();
            for (w = 0; w < u.length; ++w) {
                var G = u[w];
                D += G.ratio;
                if (1 <= D) break;
                if (F < D) {
                    t = G.version;
                    break a
                }
            }
            t = "TE_20210224_00"
        }
        var H = "/element/%s/e/js/element/element_main.js".replace("%s",
            t);
        if ("0" == t) {
            var I = " element %s e js element element_main.js".split(" ");
            I[I.length - 1] = "main_zh-CN.js";
            H = I.join("/").replace("%s", t)
        }

        e("google.translate.m", m);
        e("google.translate.v", t);
    }
}).call(window)
