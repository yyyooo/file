//@ sourceURL=b2.js

(function () {/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var aa = '" style="background-image:url(', ba = "-disabled", ca = "-document.getElementById('",
        da = "/translate_a/t", ea = "/translate_suggestion?client=", fa = '</button></div></div></td></tr><tr id="',
        ha = '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="',
        ia = '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="',
        ja = "Component already rendered", g = "DIV", ka = "Edge", la = "Google Website Translator",
        ma = "IFRAME", na = "INPUT", oa = "INTERNAL_SERVER_ERROR", pa = "Not available", qa = "Opera", ra = "POST",
        sa = "SPAN", ta = "Symbol.iterator", ua = "TEXTAREA", va = "Unable to set parent component",
        wa = "[goog.net.IframeIo] Unable to send, already active.", xa = "about:invalid#zClosurez",
        ya = "about:invalid#zSoyz", za = "absolute", Aa = "action", Ba = "activedescendant",
        Ca = "activity-form-container", Da = "alt-edited", Ea = "array", Fa = "auto", Ga = "backgroundImage",
        Ia = "backgroundPosition", Ja = "blur", Ka = "border-box", La = "button", Ma = "callback", Na = "cancelled",
        Oa = "change", Pa = "character", Qa = "checked", Ra = "chg_tgt_lang", Sa = "click", Ta = "clk_no_ap_site",
        Ua = "complete", Va = "container", Wa = "contextmenu", Xa = "dblclick", Ya = "direction", Za = "div",
        $a = "finish", ab = "finishSourceLang", bb = "finishTargetLang", cb = "focus", db = "focusin", eb = "focusout",
        p = "function", fb = "goog-float-bottom", gb = "goog-float-top", hb = "goog-inline-block ",
        ib = "goog-menuheader", jb = "goog-menuseparator", kb = "goog-option", lb = "goog-option-selected",
        mb = "goog-te-menu-value", nb = "goog-te-menu2-item-selected", ob = "goog-te-spinner-animation-show",
        pb = "goog-te-spinner-pos-show", qb = "hidden", rb = "hide", sb = "horizontal",
        tb = "https://translate.google.com",
        ub = "https://www.google.com/images/cleardot.gif",
        vb = "javascript:void(0)", wb = "keydown", xb = "keypress", yb = "load", zb = "mousedown", Ab = "mousemove",
        Bb = "mouseout", Cb = "mouseover", Db = "move_offscreen", r = "none", Eb = "number", Fb = "object",
        Gb = "opacity 1s linear", Hb = "paddingLeft", Ib = "paddingRight", Jb = "position", Kb = "progressSection",
        Lb = "promptSourceLang", Mb = "promptTargetLang", Nb = "ready", Ob = "readystatechange", Pb = "rtl",
        Qb = "selected", Rb = "skiptranslate", Sb = "status-message", t = "string", Tb = "submitted",
        Ub = "targetLanguage", Vb = "textarea-placeholder-input", Wb = "toggle_display", Xb = "trans-target-empty",
        Yb = "trans-target-highlight", Zb = "transition", $b = "translate", ac = "vertical", bc = "visible",
        cc = "withCredentials", dc = "zClosurez", v;

    function ec(a) {
        var b = 0;
        return function () {
            return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
        }
    }

    var fc = typeof Object.defineProperties == p ? Object.defineProperty : function (a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function gc(a) {
        a = [Fb == typeof globalThis && globalThis, a, Fb == typeof window && window, Fb == typeof self && self, Fb == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }

    var hc = gc(this);

    function ic(a, b) {
        if (b) a:{
            var c = hc;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && fc(c, a, {configurable: !0, writable: !0, value: b})
        }
    }

    ic("Symbol", function (a) {
        function b(e) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c("jscomp_symbol_" + (e || "") + "_" + d++, e)
        }

        function c(e, f) {
            this.g = e;
            fc(this, "description", {configurable: !0, writable: !0, value: f})
        }

        if (a) return a;
        c.prototype.toString = function () {
            return this.g
        };
        var d = 0;
        return b
    });
    ic(ta, function (a) {
        if (a) return a;
        a = Symbol(ta);
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = hc[b[c]];
            typeof d === p && typeof d.prototype[a] != p && fc(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function () {
                    return jc(ec(this))
                }
            })
        }
        return a
    });

    function jc(a) {
        a = {next: a};
        a[Symbol.iterator] = function () {
            return this
        };
        return a
    }

    function kc(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {next: ec(a)}
    }

    var lc = typeof Object.create == p ? Object.create : function (a) {
        function b() {
        }

        b.prototype = a;
        return new b
    }, mc;
    if (typeof Object.setPrototypeOf == p) mc = Object.setPrototypeOf; else {
        var nc;
        a:{
            var oc = {a: !0}, rc = {};
            try {
                rc.__proto__ = oc;
                nc = rc.a;
                break a
            } catch (a) {
            }
            nc = !1
        }
        mc = nc ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var sc = mc;

    function w(a, b) {
        a.prototype = lc(b.prototype);
        a.prototype.constructor = a;
        if (sc) sc(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
        } else a[c] = b[c];
        a.G = b.prototype
    }

    function tc(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    ic("Array.from", function (a) {
        return a ? a : function (b, c, d) {
            c = null != c ? c : function (k) {
                return k
            };
            var e = [], f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if (typeof f == p) {
                b = f.call(b);
                for (var h = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, h++))
            } else for (f = b.length, h = 0; h < f; h++) e.push(c.call(d, b[h], h));
            return e
        }
    });
    ic("WeakMap", function (a) {
        function b(l) {
            this.g = (k += Math.random() + 1).toString();
            if (l) {
                l = kc(l);
                for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
            }
        }

        function c() {
        }

        function d(l) {
            var m = typeof l;
            return m === Fb && null !== l || m === p
        }

        function e(l) {
            if (!tc(l, h)) {
                var m = new c;
                fc(l, h, {value: m})
            }
        }

        function f(l) {
            var m = Object[l];
            m && (Object[l] = function (n) {
                if (n instanceof c) return n;
                Object.isExtensible(n) && e(n);
                return m(n)
            })
        }

        if (function () {
            if (!a || !Object.seal) return !1;
            try {
                var l = Object.seal({}), m = Object.seal({}), n = new a([[l,
                    2], [m, 3]]);
                if (2 != n.get(l) || 3 != n.get(m)) return !1;
                n.delete(l);
                n.set(m, 4);
                return !n.has(l) && 4 == n.get(m)
            } catch (q) {
                return !1
            }
        }()) return a;
        var h = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var k = 0;
        b.prototype.set = function (l, m) {
            if (!d(l)) throw Error("Invalid WeakMap key");
            e(l);
            if (!tc(l, h)) throw Error("WeakMap key fail: " + l);
            l[h][this.g] = m;
            return this
        };
        b.prototype.get = function (l) {
            return d(l) && tc(l, h) ? l[h][this.g] : void 0
        };
        b.prototype.has = function (l) {
            return d(l) && tc(l, h) && tc(l[h],
                this.g)
        };
        b.prototype.delete = function (l) {
            return d(l) && tc(l, h) && tc(l[h], this.g) ? delete l[h][this.g] : !1
        };
        return b
    });
    ic("Map", function (a) {
        function b() {
            var k = {};
            return k.vb = k.next = k.head = k
        }

        function c(k, l) {
            var m = k.g;
            return jc(function () {
                if (m) {
                    for (; m.head != k.g;) m = m.vb;
                    for (; m.next != m.head;) return m = m.next, {done: !1, value: l(m)};
                    m = null
                }
                return {done: !0, value: void 0}
            })
        }

        function d(k, l) {
            var m = l && typeof l;
            m == Fb || m == p ? f.has(l) ? m = f.get(l) : (m = "" + ++h, f.set(l, m)) : m = "p_" + l;
            var n = k.h[m];
            if (n && tc(k.h, m)) for (k = 0; k < n.length; k++) {
                var q = n[k];
                if (l !== l && q.key !== q.key || l === q.key) return {id: m, list: n, index: k, Ba: q}
            }
            return {
                id: m, list: n, index: -1,
                Ba: void 0
            }
        }

        function e(k) {
            this.h = {};
            this.g = b();
            this.size = 0;
            if (k) {
                k = kc(k);
                for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        }

        if (function () {
            if (!a || typeof a != p || !a.prototype.entries || typeof Object.seal != p) return !1;
            try {
                var k = Object.seal({x: 4}), l = new a(kc([[k, "s"]]));
                if ("s" != l.get(k) || 1 != l.size || l.get({x: 4}) || l.set({x: 4}, "t") != l || 2 != l.size) return !1;
                var m = l.entries(), n = m.next();
                if (n.done || n.value[0] != k || "s" != n.value[1]) return !1;
                n = m.next();
                return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ?
                    !1 : !0
            } catch (q) {
                return !1
            }
        }()) return a;
        var f = new WeakMap;
        e.prototype.set = function (k, l) {
            k = 0 === k ? 0 : k;
            var m = d(this, k);
            m.list || (m.list = this.h[m.id] = []);
            m.Ba ? m.Ba.value = l : (m.Ba = {
                next: this.g,
                vb: this.g.vb,
                head: this.g,
                key: k,
                value: l
            }, m.list.push(m.Ba), this.g.vb.next = m.Ba, this.g.vb = m.Ba, this.size++);
            return this
        };
        e.prototype.delete = function (k) {
            k = d(this, k);
            return k.Ba && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this.h[k.id], k.Ba.vb.next = k.Ba.next, k.Ba.next.vb = k.Ba.vb, k.Ba.head = null, this.size--, !0) :
                !1
        };
        e.prototype.clear = function () {
            this.h = {};
            this.g = this.g.vb = b();
            this.size = 0
        };
        e.prototype.has = function (k) {
            return !!d(this, k).Ba
        };
        e.prototype.get = function (k) {
            return (k = d(this, k).Ba) && k.value
        };
        e.prototype.entries = function () {
            return c(this, function (k) {
                return [k.key, k.value]
            })
        };
        e.prototype.keys = function () {
            return c(this, function (k) {
                return k.key
            })
        };
        e.prototype.values = function () {
            return c(this, function (k) {
                return k.value
            })
        };
        e.prototype.forEach = function (k, l) {
            for (var m = this.entries(), n; !(n = m.next()).done;) n = n.value,
                k.call(l, n[1], n[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var h = 0;
        return e
    });
    var uc = uc || {}, x = this || self;

    function vc() {
        if (null === wc) a:{
            var a = x.document;
            if ((a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && xc.test(a)) {
                wc = a;
                break a
            }
            wc = ""
        }
        return wc
    }

    var xc = /^[\w+/_-]+[=]{0,2}$/, wc = null;

    function y() {
    }

    function yc(a) {
        a.Ne = void 0;
        a.da = function () {
            return a.Ne ? a.Ne : a.Ne = new a
        }
    }

    function zc(a) {
        var b = typeof a;
        return b != Fb ? b : a ? Array.isArray(a) ? Ea : b : "null"
    }

    function Ac(a) {
        var b = zc(a);
        return b == Ea || b == Fb && typeof a.length == Eb
    }

    function Bc(a) {
        var b = typeof a;
        return b == Fb && null != a || b == p
    }

    function Cc(a) {
        return Object.prototype.hasOwnProperty.call(a, Dc) && a[Dc] || (a[Dc] = ++Ec)
    }

    var Dc = "closure_uid_" + (1E9 * Math.random() >>> 0), Ec = 0;

    function Fc(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Gc(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function A(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? A = Fc : A = Gc;
        return A.apply(null, arguments)
    }

    function Hc(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ic() {
        return Date.now()
    }

    function Jc(a, b) {
        a = a.split(".");
        var c = x;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function B(a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.G = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.ak = function (d, e, f) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
            return b.prototype[e].apply(d, h)
        }
    }

    function Kc(a) {
        return a
    };

    function Lc(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Lc); else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }

    B(Lc, Error);
    Lc.prototype.name = "CustomError";
    var Mc, Nc = {};

    function Oc(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Lc.call(this, c + a[d])
    }

    B(Oc, Lc);
    Oc.prototype.name = "AssertionError";

    function Pc(a) {
        return a[a.length - 1]
    }

    var Qc = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function (a, b) {
        if (typeof a === t) return typeof b !== t || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1
    }, Rc = Array.prototype.forEach ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = typeof a === t ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }, Sc = Array.prototype.filter ? function (a, b) {
        return Array.prototype.filter.call(a, b,
            void 0)
    } : function (a, b) {
        for (var c = a.length, d = [], e = 0, f = typeof a === t ? a.split("") : a, h = 0; h < c; h++) if (h in f) {
            var k = f[h];
            b.call(void 0, k, h, a) && (d[e++] = k)
        }
        return d
    }, Tc = Array.prototype.map ? function (a, b) {
        return Array.prototype.map.call(a, b, void 0)
    } : function (a, b) {
        for (var c = a.length, d = Array(c), e = typeof a === t ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }, Uc = Array.prototype.some ? function (a, b) {
        return Array.prototype.some.call(a, b, void 0)
    } : function (a, b) {
        for (var c = a.length, d = typeof a ===
        t ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }, Vc = Array.prototype.every ? function (a, b) {
        return Array.prototype.every.call(a, b, void 0)
    } : function (a, b) {
        for (var c = a.length, d = typeof a === t ? a.split("") : a, e = 0; e < c; e++) if (e in d && !b.call(void 0, d[e], e, a)) return !1;
        return !0
    };

    function Wc(a, b) {
        a:{
            for (var c = a.length, d = typeof a === t ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break a
            }
            b = -1
        }
        return 0 > b ? null : typeof a === t ? a.charAt(b) : a[b]
    }

    function Xc(a, b) {
        return 0 <= Qc(a, b)
    }

    function Yc(a, b) {
        b = Qc(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Zc(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function $c(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function ad(a, b, c, d) {
        Array.prototype.splice.apply(a, bd(arguments, 1))
    }

    function bd(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };

    function cd(a) {
        var b = !1, c;
        return function () {
            b || (c = a(), b = !0);
            return c
        }
    };

    function dd(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function ed(a, b) {
        for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function fd(a) {
        var b = [], c = 0, d;
        for (d in a) b[c++] = d;
        return b
    }

    function gd(a, b) {
        return null !== a && b in a
    }

    function hd() {
        var a = id, b;
        for (b in a) return !1;
        return !0
    }

    function jd(a, b, c) {
        if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    }

    function kd(a) {
        var b = {}, c;
        for (c in a) b[c] = a[c];
        return b
    }

    var ld = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function md(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < ld.length; f++) c = ld[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };var nd = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var od;

    function pd() {
        if (void 0 === od) {
            var a = null, b = x.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {createHTML: Kc, createScript: Kc, createScriptURL: Kc})
                } catch (c) {
                    x.console && x.console.error(c.message)
                }
                od = a
            } else od = a
        }
        return od
    };

    function qd(a, b) {
        this.g = a === rd && b || "";
        this.h = sd
    }

    qd.prototype.Wa = !0;
    qd.prototype.Ha = function () {
        return this.g
    };

    function td(a) {
        return a instanceof qd && a.constructor === qd && a.h === sd ? a.g : "type_error:Const"
    }

    function ud(a) {
        return new qd(rd, a)
    }

    var sd = {}, rd = {};
    var vd = {};

    function wd(a, b) {
        this.g = b === vd ? a : "";
        this.Wa = !0
    }

    function xd() {
        var a = td(ud('(function(){/*\n\n Copyright The Closure Library Authors.\n SPDX-License-Identifier: Apache-2.0\n*/\nvar e="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},f;if("function"==typeof Object.setPrototypeOf)f=Object.setPrototypeOf;else{var g;a:{var h={a:!0},k={};try{k.__proto__=h;g=k.a;break a}catch(a){}g=!1}f=g?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}\nvar l=f,n=function(a,b){a.prototype=e(b.prototype);a.prototype.constructor=a;if(l)l(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.l=b.prototype};var p={};function q(a){if(a!==p)throw Error("Bad secret");};function r(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}var t;function u(){var a,b;void 0===t&&(t=null!==(b=null===(a=r())||void 0===a?void 0:a.createPolicy("google#safe",{createHTML:function(c){return c},createScript:function(c){return c},createScriptURL:function(c){return c}}))&&void 0!==b?b:null);return t};var v,w=function(){},x=function(a,b){q(b);this.h=a};n(x,w);x.prototype.toString=function(){return this.h.toString()};var y=null===(v=r())||void 0===v?void 0:v.emptyHTML;new x(null!==y&&void 0!==y?y:"",p);var z,A=function(){},B=function(a,b){q(b);this.i=a};n(B,A);B.prototype.toString=function(){return this.i.toString()};var C=null===(z=r())||void 0===z?void 0:z.emptyScript;new B(null!==C&&void 0!==C?C:"",p);var D=function(){},E=function(a,b){q(b);this.j=a};n(E,D);E.prototype.toString=function(){return this.j};new E("about:blank",p);new E("about:invalid#zTSz",p);var F=function(){},G=function(a,b){q(b);this.g=a};n(G,F);G.prototype.toString=function(){return this.g.toString()};function H(a){var b;if(null===(b=r())||void 0===b?0:b.isScriptURL(a))return a;if(a instanceof G)return a.g;throw Error("wrong type");};function I(a){var b,c=null===(b=u())||void 0===b?void 0:b.createScriptURL(a);return new G(null!==c&&void 0!==c?c:a,p)};if(!function(){if(self.origin)return"null"===self.origin;if(""!==location.host)return!1;try{return window.parent.escape(""),!1}catch(a){return!0}}())throw Error("sandboxing error");\nwindow.addEventListener("message",function(a){var b=a.ports[0];a=a.data;var c=a.callbackName.split("."),d=window;"window"===c[0]&&c.unshift();for(var m=0;m<c.length-1;m++)d[c[m]]={},d=d[c[m]];d[c[c.length-1]]=function(J){b.postMessage(JSON.stringify(J))};c=document.createElement("script");a=I(a.url);c.src=H(a);document.body.appendChild(c)},!0);}).call(this);\n'));
        return 0 ===
        a.length ? yd : zd(a)
    }

    wd.prototype.Ha = function () {
        return this.g.toString()
    };

    function zd(a) {
        var b = pd();
        a = b ? b.createScript(a) : a;
        return new wd(a, vd)
    }

    wd.prototype.toString = function () {
        return this.g.toString()
    };
    var yd = zd("");
    var Ad = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;

    function Bd(a, b) {
        this.g = b === Cd ? a : ""
    }

    v = Bd.prototype;
    v.Wa = !0;
    v.Ha = function () {
        return this.g.toString()
    };
    v.Le = !0;
    v.xb = function () {
        return 1
    };
    v.toString = function () {
        return this.g + ""
    };

    function Dd(a) {
        return a instanceof Bd && a.constructor === Bd ? a.g : "type_error:TrustedResourceUrl"
    }

    var Cd = {};

    function Ed(a) {
        var b = pd();
        a = b ? b.createScriptURL(a) : a;
        return new Bd(a, Cd)
    };var Fd = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };

    function Gd(a, b) {
        return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
    }

    function Hd(a, b) {
        if (b) a = a.replace(Id, "&amp;").replace(Jd, "&lt;").replace(Kd, "&gt;").replace(Ld, "&quot;").replace(Md, "&#39;").replace(Nd, "&#0;"); else {
            if (!Od.test(a)) return a;
            -1 != a.indexOf("&") && (a = a.replace(Id, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(Jd, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(Kd, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(Ld, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(Md, "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(Nd, "&#0;"))
        }
        return a
    }

    var Id = /&/g, Jd = /</g, Kd = />/g, Ld = /"/g, Md = /'/g, Nd = /\x00/g, Od = /[\x00&<>"']/;

    function Pd(a, b) {
        var c = 0;
        a = Fd(String(a)).split(".");
        b = Fd(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "", h = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == f[0].length && 0 == h[0].length) break;
                c = Qd(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Qd(0 == f[2].length, 0 == h[2].length) || Qd(f[2], h[2]);
                f = f[3];
                h = h[3]
            } while (0 == c)
        }
        return c
    }

    function Qd(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Rd(a, b) {
        this.g = b === Sd ? a : ""
    }

    v = Rd.prototype;
    v.Wa = !0;
    v.Ha = function () {
        return this.g.toString()
    };
    v.Le = !0;
    v.xb = function () {
        return 1
    };
    v.toString = function () {
        return this.g.toString()
    };

    function Td(a) {
        return a instanceof Rd && a.constructor === Rd ? a.g : "type_error:SafeUrl"
    }

    var Ud = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
        Vd = /^data:(.*);base64,[a-z0-9+\/]+=*$/i, Wd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Xd(a) {
        if (a instanceof Rd) return a;
        a = typeof a == Fb && a.Wa ? a.Ha() : String(a);
        if (Wd.test(a)) a = Yd(a); else {
            a = String(a);
            a = a.replace(/(%0A|%0D)/g, "");
            var b = a.match(Vd);
            a = b && Ud.test(b[1]) ? Yd(a) : null
        }
        return a
    }

    var Sd = {};

    function Yd(a) {
        return new Rd(a, Sd)
    }

    var Zd = Yd(xa);

    function $d(a, b) {
        this.g = b === ae ? a : ""
    }

    $d.prototype.Wa = !0;
    $d.prototype.Ha = function () {
        return this.g
    };
    $d.prototype.toString = function () {
        return this.g.toString()
    };

    function be(a) {
        return a instanceof $d && a.constructor === $d ? a.g : "type_error:SafeStyle"
    }

    var ae = {}, ce = new $d("", ae);

    function de(a) {
        if (a instanceof Rd) return 'url("' + Td(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        a = a instanceof qd ? td(a) : ee(String(a));
        if (/[{;}]/.test(a)) throw new Oc("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function ee(a) {
        var b = a.replace(fe, "$1").replace(fe, "$1").replace(ge, "url");
        if (he.test(b)) {
            if (ie.test(a)) return dc;
            for (var c = b = !0, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                "'" == e && c ? b = !b : '"' == e && b && (c = !c)
            }
            if (!b || !c || !je(a)) return dc
        } else return dc;
        return ke(a)
    }

    function je(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }

    var he = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
        ge = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        fe = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
        ie = /\/\*/;

    function ke(a) {
        return a.replace(ge, function (b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function (h, k, l) {
                f = k;
                return l
            });
            b = (Xd(d) || Zd).Ha();
            return c + f + b + f + e
        })
    };var le = {};

    function me(a, b) {
        this.g = b === le ? a : "";
        this.Wa = !0
    }

    me.prototype.Ha = function () {
        return this.g
    };

    function ne(a) {
        return a instanceof me && a.constructor === me ? a.g : "type_error:SafeStyleSheet"
    }

    me.prototype.toString = function () {
        return this.g.toString()
    };
    var oe;
    a:{
        var pe = x.navigator;
        if (pe) {
            var qe = pe.userAgent;
            if (qe) {
                oe = qe;
                break a
            }
        }
        oe = ""
    }

    function C(a) {
        return -1 != oe.indexOf(a)
    }

    function re(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };

    function se() {
        return C("Trident") || C("MSIE")
    }

    function te() {
        return C("Firefox") || C("FxiOS")
    }

    function ue() {
        return (C("Chrome") || C("CriOS")) && !C(ka)
    }

    function ve() {
        function a(e) {
            e = Wc(e, d);
            return c[e] || ""
        }

        var b = oe;
        if (!se()) {
            b = re(b);
            var c = {};
            Rc(b, function (e) {
                c[e[0]] = e[1]
            });
            var d = Hc(gd, c);
            C(qa) ? a(["Version", qa]) : C(ka) ? a([ka]) : C("Edg/") ? a(["Edg"]) : ue() && a(["Chrome", "CriOS", "HeadlessChrome"])
        }
    };

    function we(a, b, c) {
        this.g = c === xe ? a : "";
        this.h = b
    }

    v = we.prototype;
    v.Le = !0;
    v.xb = function () {
        return this.h
    };
    v.Wa = !0;
    v.Ha = function () {
        return this.g.toString()
    };
    v.toString = function () {
        return this.g.toString()
    };

    function ye(a) {
        return ze(a).toString()
    }

    function ze(a) {
        return a instanceof we && a.constructor === we ? a.g : "type_error:SafeHtml"
    }

    function Ae(a) {
        if (a instanceof we) return a;
        var b = typeof a == Fb, c = null;
        b && a.Le && (c = a.xb());
        return Be(Hd(b && a.Wa ? a.Ha() : String(a)), c)
    }

    function Ce(a) {
        if (a instanceof we) return a;
        a = Ae(a);
        var b = ye(a);
        b = Gd(b.replace(/  /g, " &#160;"), void 0);
        return Be(b, a.xb())
    }

    var De = /^[a-zA-Z0-9-]+$/,
        Ee = {action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0}, Fe = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };

    function Ge(a, b, c) {
        He(String(a));
        return Ie(String(a), b, c)
    }

    function He(a) {
        if (!De.test(a)) throw Error("");
        if (a.toUpperCase() in Fe) throw Error("");
    }

    function Je(a) {
        var b = {nonce: vc()};
        for (d in b) if (Object.prototype.hasOwnProperty.call(b, d)) {
            var c = d.toLowerCase();
            if ("language" == c || "src" == c || "text" == c || "type" == c) throw Error("");
        }
        var d = "";
        a = Zc(a);
        for (c = 0; c < a.length; c++) {
            var e = a[c];
            d += (e instanceof wd && e.constructor === wd ? e.g : "type_error:SafeScript").toString()
        }
        a = Be(d, 0);
        return Ie("script", b, a)
    }

    function Ke(a) {
        function b(f) {
            Array.isArray(f) ? Rc(f, b) : (f = Ae(f), e.push(ye(f)), f = f.xb(), 0 == d ? d = f : 0 != f && d != f && (d = null))
        }

        var c = Ae(Le), d = c.xb(), e = [];
        Rc(a, b);
        return Be(e.join(ye(c)), d)
    }

    function Me(a) {
        return Ke(Array.prototype.slice.call(arguments))
    }

    var xe = {};

    function Be(a, b) {
        var c = pd();
        a = c ? c.createHTML(a) : a;
        return new we(a, b, xe)
    }

    function Ie(a, b, c) {
        var d = null;
        var e = "<" + a + Ne(b);
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === nd[a.toLowerCase()] ? e += ">" : (d = Me(c), e += ">" + ye(d) + "</" + a + ">", d = d.xb());
        (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
        return Be(e, d)
    }

    function Ne(a) {
        var b = "";
        if (a) for (var c in a) if (Object.prototype.hasOwnProperty.call(a, c)) {
            if (!De.test(c)) throw Error("");
            var d = a[c];
            if (null != d) {
                var e = c;
                var f = d;
                if (f instanceof qd) f = td(f); else if ("style" == e.toLowerCase()) {
                    d = void 0;
                    if (!Bc(f)) throw Error("");
                    if (!(f instanceof $d)) {
                        var h = "";
                        for (d in f) if (Object.prototype.hasOwnProperty.call(f, d)) {
                            if (!/^[-_a-zA-Z0-9]+$/.test(d)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + d);
                            var k = f[d];
                            null != k && (k = Array.isArray(k) ? Tc(k, de).join(" ") : de(k), h += d +
                                ":" + k + ";")
                        }
                        f = h ? new $d(h, ae) : ce
                    }
                    f = be(f)
                } else {
                    if (/^on/i.test(e)) throw Error("");
                    if (e.toLowerCase() in Ee) if (f instanceof Bd) f = Dd(f).toString(); else if (f instanceof Rd) f = Td(f); else if (typeof f === t) f = (Xd(f) || Zd).Ha(); else throw Error("");
                }
                f.Wa && (f = f.Ha());
                e = e + '="' + Hd(String(f)) + '"';
                b += " " + e
            }
        }
        return b
    }

    var Oe = Be("<!DOCTYPE html>", 0), Le = new we(x.trustedTypes && x.trustedTypes.emptyHTML || "", 0, xe),
        Pe = Be("<br>", 0);

    function Qe(a, b, c) {
        td(a);
        td(a);
        return Be(b, c || null)
    }

    function Re(a, b) {
        td(a);
        td(a);
        return Ed(b)
    };var Se = cd(function () {
        var a = document.createElement(Za), b = document.createElement(Za);
        b.appendChild(document.createElement(Za));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = ze(Le);
        return !b.parentElement
    });

    function Te(a, b) {
        if (Se()) for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = ze(b)
    }

    function Ue(a, b) {
        b instanceof Rd || b instanceof Rd || (b = typeof b == Fb && b.Wa ? b.Ha() : String(b), Wd.test(b) || (b = xa), b = Yd(b));
        a.action = Td(b)
    };

    function Ve(a) {
        return a.replace(/\xa0|[ \t]+/g, " ")
    }

    function We(a) {
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    }

    function Xe(a) {
        return a.replace(/^[\s\xa0]+/, "")
    }

    function Ye(a) {
        return a.replace(/[\s\xa0]+$/, "")
    }

    function Ze(a) {
        return encodeURIComponent(String(a))
    }

    function $e(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }

    function af(a) {
        return a = Hd(a, void 0)
    }

    function bf(a) {
        return -1 != a.indexOf("&") ? "document" in x ? cf(a) : df(a) : a
    }

    function cf(a) {
        var b = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"'};
        var c = x.document.createElement(Za);
        return a.replace(ef, function (d, e) {
            var f = b[d];
            if (f) return f;
            "#" == e.charAt(0) && (e = Number("0" + e.substr(1)), isNaN(e) || (f = String.fromCharCode(e)));
            f || (f = Qe(ud("Single HTML entity."), d + " "), Te(c, f), f = c.firstChild.nodeValue.slice(0, -1));
            return b[d] = f
        })
    }

    function df(a) {
        return a.replace(/&([^;]+);/g, function (b, c) {
            switch (c) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? b : String.fromCharCode(c)
            }
        })
    }

    var ef = /&([^;\s<&]+);?/g;

    function ff() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Ic()).toString(36)
    }

    function gf(a) {
        return String(a).replace(/\-([a-z])/g, function (b, c) {
            return c.toUpperCase()
        })
    }

    function hf(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function jf() {
        return C("iPhone") && !C("iPod") && !C("iPad")
    }

    function kf() {
        return jf() || C("iPad") || C("iPod")
    };

    function lf(a) {
        lf[" "](a);
        return a
    }

    lf[" "] = y;

    function mf(a, b) {
        try {
            return lf(a[b]), !0
        } catch (c) {
        }
        return !1
    }

    function nf(a, b, c) {
        return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : a[b] = c(b)
    };var of = C(qa), D = se(), pf = C(ka), qf = pf || D,
        E = C("Gecko") && !(-1 != oe.toLowerCase().indexOf("webkit") && !C(ka)) && !(C("Trident") || C("MSIE")) && !C(ka),
        F = -1 != oe.toLowerCase().indexOf("webkit") && !C(ka), rf = F && C("Mobile"), sf = C("Macintosh"),
        tf = C("Windows"), uf = C("Android"), vf = jf(), wf = C("iPad"), xf = C("iPod"), yf = kf();

    function zf() {
        var a = x.document;
        return a ? a.documentMode : void 0
    }

    var Af;
    a:{
        var Bf = "", Cf = function () {
            var a = oe;
            if (E) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (pf) return /Edge\/([\d\.]+)/.exec(a);
            if (D) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (F) return /WebKit\/(\S+)/.exec(a);
            if (of) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        Cf && (Bf = Cf ? Cf[1] : "");
        if (D) {
            var Df = zf();
            if (null != Df && Df > parseFloat(Bf)) {
                Af = String(Df);
                break a
            }
        }
        Af = Bf
    }
    var Ef = Af, Ff = {};

    function H(a) {
        return nf(Ff, a, function () {
            return 0 <= Pd(Ef, a)
        })
    }

    function Gf(a) {
        return Number(Hf) >= a
    }

    var If;
    if (x.document && D) {
        var Jf = zf();
        If = Jf ? Jf : parseInt(Ef, 10) || void 0
    } else If = void 0;
    var Hf = If;
    var Kf = te(), Lf = jf() || C("iPod"), Mf = C("iPad"), Nf = C("Android") && !(ue() || te() || C(qa) || C("Silk")),
        Of = ue(),
        Pf = C("Safari") && !(ue() || C("Coast") || C(qa) || C(ka) || C("Edg/") || C("OPR") || te() || C("Silk") || C("Android")) && !kf();
    var Qf = null, Rf = E || F && !Pf || of || !Pf && !D && typeof x.atob == p;

    function Sf(a) {
        if (Rf) return x.atob(a);
        var b = "";
        Tf(a, function (c) {
            b += String.fromCharCode(c)
        });
        return b
    }

    function Tf(a, b) {
        function c(l) {
            for (; d < a.length;) {
                var m = a.charAt(d++), n = Qf[m];
                if (null != n) return n;
                if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
            }
            return l
        }

        Uf();
        for (var d = 0; ;) {
            var e = c(-1), f = c(0), h = c(64), k = c(64);
            if (64 === k && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != h && (b(f << 4 & 240 | h >> 2), 64 != k && b(h << 6 & 192 | k))
        }
    }

    function Uf() {
        if (!Qf) {
            Qf = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                var f = d[e];
                void 0 === Qf[f] && (Qf[f] = e)
            }
        }
    };

    function Vf() {
    }

    var Wf = typeof Uint8Array == p;

    function Xf(a, b, c) {
        a.g = null;
        b || (b = []);
        a.A = void 0;
        a.l = -1;
        a.h = b;
        a:{
            if (b = a.h.length) {
                --b;
                var d = a.h[b];
                if (!(null === d || typeof d != Fb || Array.isArray(d) || Wf && d instanceof Uint8Array)) {
                    a.m = b - a.l;
                    a.j = d;
                    break a
                }
            }
            a.m = Number.MAX_VALUE
        }
        a.o = {};
        if (c) for (b = 0; b < c.length; b++) d = c[b], d < a.m ? (d += a.l, a.h[d] = a.h[d] || Yf) : (Zf(a), a.j[d] = a.j[d] || Yf)
    }

    var Yf = [];

    function Zf(a) {
        var b = a.m + a.l;
        a.h[b] || (a.j = a.h[b] = {})
    }

    function $f(a, b) {
        if (b < a.m) {
            b += a.l;
            var c = a.h[b];
            return c !== Yf ? c : a.h[b] = []
        }
        if (a.j) return c = a.j[b], c === Yf ? a.j[b] = [] : c
    }

    function ag(a, b, c) {
        b < a.m ? a.h[b + a.l] = c : (Zf(a), a.j[b] = c);
        return a
    }

    function bg(a, b, c) {
        a.g || (a.g = {});
        var d = c ? cg(c) : c;
        a.g[b] = c;
        ag(a, b, d)
    }

    function dg(a, b, c) {
        a.g || (a.g = {});
        if (!a.g[b]) {
            var d = $f(a, b);
            for (var e = [], f = 0; f < d.length; f++) e[f] = new c(d[f]);
            a.g[b] = e
        }
        d = a.g[b];
        d == Yf && (d = a.g[b] = []);
        c = new c;
        a = $f(a, b);
        d.push(c);
        a.push(cg(c));
        return c
    }

    function cg(a) {
        if (a.g) for (var b in a.g) {
            var c = a.g[b];
            if (Array.isArray(c)) for (var d = 0; d < c.length; d++) c[d] && cg(c[d]); else c && cg(c)
        }
        return a.h
    }

    Vf.prototype.toString = function () {
        return cg(this).toString()
    };
    var eg = "StopIteration" in x ? x.StopIteration : {message: "StopIteration", stack: ""};

    function fg() {
    }

    fg.prototype.next = function () {
        throw eg;
    };
    fg.prototype.Ma = function () {
        return this
    };

    function gg(a) {
        if (a instanceof fg) return a;
        if (typeof a.Ma == p) return a.Ma(!1);
        if (Ac(a)) {
            var b = 0, c = new fg;
            c.next = function () {
                for (; ;) {
                    if (b >= a.length) throw eg;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function hg(a, b, c) {
        a = gg(a);
        try {
            for (; b.call(c, a.next(), void 0, a);) ;
        } catch (d) {
            if (d !== eg) throw d;
        }
    };

    function ig(a, b) {
        this.h = {};
        this.g = [];
        this.l = this.j = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) if (a instanceof ig) for (c = a.Va(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d])); else for (d in a) this.set(d, a[d])
    }

    v = ig.prototype;
    v.Fa = function () {
        jg(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
        return a
    };
    v.Va = function () {
        jg(this);
        return this.g.concat()
    };

    function kg(a, b) {
        return lg(a.h, b)
    }

    function mg(a) {
        a.h = {};
        a.g.length = 0;
        a.j = 0;
        a.l = 0
    }

    v.remove = function (a) {
        return lg(this.h, a) ? (delete this.h[a], this.j--, this.l++, this.g.length > 2 * this.j && jg(this), !0) : !1
    };

    function jg(a) {
        if (a.j != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length;) {
                var d = a.g[b];
                lg(a.h, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.j != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length;) d = a.g[b], lg(e, d) || (a.g[c++] = d, e[d] = 1), b++;
            a.g.length = c
        }
    }

    v.get = function (a, b) {
        return lg(this.h, a) ? this.h[a] : b
    };
    v.set = function (a, b) {
        lg(this.h, a) || (this.j++, this.g.push(a), this.l++);
        this.h[a] = b
    };
    v.forEach = function (a, b) {
        for (var c = this.Va(), d = 0; d < c.length; d++) {
            var e = c[d], f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    v.Ma = function (a) {
        jg(this);
        var b = 0, c = this.l, d = this, e = new fg;
        e.next = function () {
            if (c != d.l) throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length) throw eg;
            var f = d.g[b++];
            return a ? f : d.h[f]
        };
        return e
    };

    function lg(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function ng(a) {
        if (a.Fa && typeof a.Fa == p) return a.Fa();
        if (typeof a === t) return a.split("");
        if (Ac(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        b = [];
        c = 0;
        for (d in a) b[c++] = a[d];
        return b
    }

    function og(a) {
        if (a.Va && typeof a.Va == p) return a.Va();
        if (!a.Fa || typeof a.Fa != p) {
            if (Ac(a) || typeof a === t) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++) b.push(c);
                return b
            }
            return fd(a)
        }
    }

    function pg(a, b, c) {
        if (a.forEach && typeof a.forEach == p) a.forEach(b, c); else if (Ac(a) || typeof a === t) Rc(a, b, c); else for (var d = og(a), e = ng(a), f = e.length, h = 0; h < f; h++) b.call(c, e[h], d && d[h], a)
    };var qg = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function rg(a) {
        return a ? decodeURI(a) : a
    }

    function sg(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="), e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else f = a[c];
                b(f, e ? $e(e) : "")
            }
        }
    };

    function tg(a) {
        this.l = this.C = this.j = "";
        this.A = null;
        this.m = this.o = "";
        this.h = !1;
        if (a instanceof tg) {
            this.h = a.h;
            ug(this, a.j);
            this.C = a.C;
            this.l = a.l;
            vg(this, a.A);
            this.o = a.o;
            var b = a.g;
            var c = new wg;
            c.j = b.j;
            b.g && (c.g = new ig(b.g), c.h = b.h);
            xg(this, c);
            this.m = a.m
        } else a && (b = String(a).match(qg)) ? (this.h = !1, ug(this, b[1] || "", !0), this.C = yg(b[2] || ""), this.l = yg(b[3] || "", !0), vg(this, b[4]), this.o = yg(b[5] || "", !0), xg(this, b[6] || "", !0), this.m = yg(b[7] || "")) : (this.h = !1, this.g = new wg(null, this.h))
    }

    tg.prototype.toString = function () {
        var a = [], b = this.j;
        b && a.push(zg(b, Ag, !0), ":");
        var c = this.l;
        if (c || "file" == b) a.push("//"), (b = this.C) && a.push(zg(b, Ag, !0), "@"), a.push(Ze(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.A, null != c && a.push(":", String(c));
        if (c = this.o) this.l && "/" != c.charAt(0) && a.push("/"), a.push(zg(c, "/" == c.charAt(0) ? Bg : Dg, !0));
        (c = this.g.toString()) && a.push("?", c);
        (c = this.m) && a.push("#", zg(c, Eg));
        return a.join("")
    };

    function ug(a, b, c) {
        a.j = c ? yg(b, !0) : b;
        a.j && (a.j = a.j.replace(/:$/, ""))
    }

    function vg(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.A = b
        } else a.A = null
    }

    function xg(a, b, c) {
        b instanceof wg ? (a.g = b, Fg(a.g, a.h)) : (c || (b = zg(b, Gg)), a.g = new wg(b, a.h))
    }

    function yg(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }

    function zg(a, b, c) {
        return typeof a === t ? (a = encodeURI(a).replace(b, Hg), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }

    function Hg(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }

    var Ag = /[#\/\?@]/g, Dg = /[#\?:]/g, Bg = /[#\?]/g, Gg = /[#\?@]/g, Eg = /#/g;

    function wg(a, b) {
        this.h = this.g = null;
        this.j = a || null;
        this.l = !!b
    }

    function Ig(a) {
        a.g || (a.g = new ig, a.h = 0, a.j && sg(a.j, function (b, c) {
            a.add($e(b), c)
        }))
    }

    function Jg(a) {
        var b = og(a);
        if ("undefined" == typeof b) throw Error("Keys are undefined");
        var c = new wg(null, void 0);
        a = ng(a);
        for (var d = 0; d < b.length; d++) {
            var e = b[d], f = a[d];
            Array.isArray(f) ? Kg(c, e, f) : c.add(e, f)
        }
        return c
    }

    v = wg.prototype;
    v.add = function (a, b) {
        Ig(this);
        this.j = null;
        a = Lg(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.h = this.h + 1;
        return this
    };
    v.remove = function (a) {
        Ig(this);
        a = Lg(this, a);
        return kg(this.g, a) ? (this.j = null, this.h = this.h - this.g.get(a).length, this.g.remove(a)) : !1
    };

    function Mg(a, b) {
        Ig(a);
        b = Lg(a, b);
        return kg(a.g, b)
    }

    v.forEach = function (a, b) {
        Ig(this);
        this.g.forEach(function (c, d) {
            Rc(c, function (e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    v.Va = function () {
        Ig(this);
        for (var a = this.g.Fa(), b = this.g.Va(), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    v.Fa = function (a) {
        Ig(this);
        var b = [];
        if (typeof a === t) Mg(this, a) && (b = Zc(b, this.g.get(Lg(this, a)))); else {
            a = this.g.Fa();
            for (var c = 0; c < a.length; c++) b = Zc(b, a[c])
        }
        return b
    };
    v.set = function (a, b) {
        Ig(this);
        this.j = null;
        a = Lg(this, a);
        Mg(this, a) && (this.h = this.h - this.g.get(a).length);
        this.g.set(a, [b]);
        this.h = this.h + 1;
        return this
    };
    v.get = function (a, b) {
        if (!a) return b;
        a = this.Fa(a);
        return 0 < a.length ? String(a[0]) : b
    };

    function Kg(a, b, c) {
        a.remove(b);
        0 < c.length && (a.j = null, a.g.set(Lg(a, b), $c(c)), a.h = a.h + c.length)
    }

    v.toString = function () {
        if (this.j) return this.j;
        if (!this.g) return "";
        for (var a = [], b = this.g.Va(), c = 0; c < b.length; c++) {
            var d = b[c], e = Ze(d);
            d = this.Fa(d);
            for (var f = 0; f < d.length; f++) {
                var h = e;
                "" !== d[f] && (h += "=" + Ze(d[f]));
                a.push(h)
            }
        }
        return this.j = a.join("&")
    };

    function Lg(a, b) {
        b = String(b);
        a.l && (b = b.toLowerCase());
        return b
    }

    function Fg(a, b) {
        b && !a.l && (Ig(a), a.j = null, a.g.forEach(function (c, d) {
            var e = d.toLowerCase();
            d != e && (this.remove(d), Kg(this, e, c))
        }, a));
        a.l = b
    }

    v.Zd = function (a) {
        for (var b = 0; b < arguments.length; b++) pg(arguments[b], function (c, d) {
            this.add(d, c)
        }, this)
    };
    var Ng = {}, Og = {}, Pg = {}, Qg = {};

    function Rg() {
        throw Error("Do not instantiate directly");
    }

    Rg.prototype.nd = null;
    Rg.prototype.ka = function () {
        return this.g
    };
    Rg.prototype.toString = function () {
        return this.g
    };

    function Sg(a) {
        if (a.Mb !== Ng) throw Error("Sanitized content was not of kind HTML.");
        return Qe(ud("Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value."), a.toString(), a.nd)
    }

    function Tg() {
        Rg.call(this)
    }

    B(Tg, Rg);
    Tg.prototype.Mb = Ng;

    function Ug() {
        Rg.call(this)
    }

    B(Ug, Rg);
    Ug.prototype.Mb = Qg;
    Ug.prototype.nd = 1;

    function Vg(a, b) {
        return null != a && a.Mb === b
    };

    function Wg(a) {
        a:{
            var b = ["window", "location", "href"];
            var c = x;
            for (var d = 0; d < b.length; d++) if (c = c[b[d]], null == c) {
                c = null;
                break a
            }
        }
        null == a && (a = 'Unknown Error of type "null/undefined"');
        if (typeof a === t) return {message: a, name: "Unknown error", lineNumber: pa, fileName: c, stack: pa};
        b = !1;
        try {
            var e = a.lineNumber || a.line || pa
        } catch (h) {
            e = pa, b = !0
        }
        try {
            var f = a.fileName || a.filename || a.sourceURL || x.$googDebugFname || c
        } catch (h) {
            f = pa, b = !0
        }
        c = Xg(a);
        if (!(!b && a.lineNumber && a.fileName && a.stack && a.message && a.name)) return b = a.message,
        null == b && (b = a.constructor && a.constructor instanceof Function ? 'Unknown Error of type "' + (a.constructor.name ? a.constructor.name : Yg(a.constructor)) + '"' : "Unknown Error of unknown type", typeof a.toString === p && Object.prototype.toString !== a.toString && (b += ": " + a.toString())), {
            message: b,
            name: a.name || "UnknownError",
            lineNumber: e,
            fileName: f,
            stack: c || pa
        };
        a.stack = c;
        return a
    }

    function Xg(a, b) {
        b || (b = {});
        b[Zg(a)] = !0;
        var c = a.stack || "";
        (a = a.bk) && !b[Zg(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += typeof a === t ? a : a.message + "\n"), c += Xg(a, b));
        return c
    }

    function Zg(a) {
        var b = "";
        typeof a.toString === p && (b = "" + a);
        return b + a.stack
    }

    function $g(a) {
        var b = Error();
        if (Error.captureStackTrace) Error.captureStackTrace(b, a || $g), b = String(b.stack); else {
            try {
                throw b;
            } catch (c) {
                b = c
            }
            b = (b = b.stack) ? String(b) : null
        }
        b || (b = ah(a || arguments.callee.caller, []));
        return b
    }

    function ah(a, b) {
        var c = [];
        if (Xc(b, a)) c.push("[...circular reference...]"); else if (a && 50 > b.length) {
            c.push(Yg(a) + "(");
            for (var d = a.arguments, e = 0; d && e < d.length; e++) {
                0 < e && c.push(", ");
                var f = d[e];
                switch (typeof f) {
                    case Fb:
                        f = f ? Fb : "null";
                        break;
                    case t:
                        break;
                    case Eb:
                        f = String(f);
                        break;
                    case "boolean":
                        f = f ? "true" : "false";
                        break;
                    case p:
                        f = (f = Yg(f)) ? f : "[fn]";
                        break;
                    default:
                        f = typeof f
                }
                40 < f.length && (f = f.substr(0, 40) + "...");
                c.push(f)
            }
            b.push(a);
            c.push(")\n");
            try {
                c.push(ah(a.caller, b))
            } catch (h) {
                c.push("[exception trying to get caller]\n")
            }
        } else a ?
            c.push("[...long stack...]") : c.push("[end]");
        return c.join("")
    }

    function Yg(a) {
        if (bh[a]) return bh[a];
        a = String(a);
        if (!bh[a]) {
            var b = /function\s+([^\(]+)/m.exec(a);
            bh[a] = b ? b[1] : "[Anonymous]"
        }
        return bh[a]
    }

    var bh = {};

    function ch(a) {
        if (null != a) switch (a.nd) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function dh(a) {
        return Vg(a, Ng) ? a : a instanceof we ? eh(ye(a), a.xb()) : eh(String(String(a)).replace(fh, gh), ch(a))
    }

    var eh = function (a) {
        function b(c) {
            this.g = c
        }

        b.prototype = a.prototype;
        return function (c, d) {
            c = new b(String(c));
            void 0 !== d && (c.nd = d);
            return c
        }
    }(Tg), hh = function (a) {
        function b(c) {
            this.g = c
        }

        b.prototype = a.prototype;
        return function (c) {
            return new b(String(c))
        }
    }(Ug);

    function ih(a) {
        return a instanceof Rg ? !!a.ka() : !!a
    }

    function jh(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function I(a) {
        if (Vg(a, Ng)) {
            var b = String;
            a = String(a.ka()).replace(kh, "").replace(lh, "&lt;");
            b = b(a).replace(mh, gh)
        } else b = String(a).replace(fh, gh);
        return b
    }

    function nh(a) {
        Vg(a, Og) || Vg(a, Pg) ? a = oh(a) : a instanceof Rd ? a = oh(Td(a)) : a instanceof Bd ? a = oh(Dd(a).toString()) : (a = String(a), a = ph.test(a) ? a.replace(qh, rh) : ya);
        return a
    }

    function sh(a) {
        Vg(a, Og) || Vg(a, Pg) ? a = oh(a) : a instanceof Rd ? a = oh(Td(a)) : a instanceof Bd ? a = oh(Dd(a).toString()) : (a = String(a), a = th.test(a) ? a.replace(qh, rh) : ya);
        return a
    }

    function uh(a) {
        return Vg(a, Pg) ? a.ka() : a instanceof Bd ? Dd(a).toString() : ya
    }

    function vh(a) {
        Vg(a, Qg) ? a = jh(a.ka()) : null == a ? a = "" : a instanceof $d ? a = jh(be(a)) : a instanceof me ? a = jh(ne(a)) : (a = String(a), a = wh.test(a) ? a : "zSoyz");
        return a
    }

    var xh = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function gh(a) {
        return xh[a]
    }

    var yh = {
        "\x00": "\\0 ",
        "\b": "\\8 ",
        "\t": "\\9 ",
        "\n": "\\a ",
        "\x0B": "\\b ",
        "\f": "\\c ",
        "\r": "\\d ",
        '"': "\\22 ",
        "&": "\\26 ",
        "'": "\\27 ",
        "(": "\\28 ",
        ")": "\\29 ",
        "*": "\\2a ",
        "/": "\\2f ",
        ":": "\\3a ",
        ";": "\\3b ",
        "<": "\\3c ",
        "=": "\\3d ",
        ">": "\\3e ",
        "@": "\\40 ",
        "\\": "\\5c ",
        "{": "\\7b ",
        "}": "\\7d ",
        "\u0085": "\\85 ",
        "\u00a0": "\\a0 ",
        "\u2028": "\\2028 ",
        "\u2029": "\\2029 "
    };

    function zh(a) {
        return yh[a]
    }

    var Ah = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function rh(a) {
        return Ah[a]
    }

    var fh = /[\x00\x22\x26\x27\x3c\x3e]/g, mh = /[\x00\x22\x27\x3c\x3e]/g,
        Bh = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g,
        qh = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        wh = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        ph =
            /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
        th = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function oh(a) {
        return String(a).replace(qh, rh)
    }

    var kh = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g, lh = /</g;
    var Ch = !D || Gf(9), Dh = !E && !D || D && Gf(9) || E && H("1.9.1"), Eh = D && !H("9"), Fh = D || of || F,
        Gh = D && !Gf(9);

    function J(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }

    function Hh(a) {
        return new J(a.x, a.y)
    }

    function Ih(a, b) {
        return new J(a.x - b.x, a.y - b.y)
    }

    J.prototype.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    J.prototype.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    J.prototype.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    J.prototype.translate = function (a, b) {
        a instanceof J ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), typeof b === Eb && (this.y += b));
        return this
    };

    function Jh(a, b) {
        this.width = a;
        this.height = b
    }

    Jh.prototype.aspectRatio = function () {
        return this.width / this.height
    };
    Jh.prototype.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Jh.prototype.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Jh.prototype.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Kh(a) {
        return a ? new Lh(K(a)) : Mc || (Mc = new Lh)
    }

    function Mh(a, b) {
        return typeof b === t ? a.getElementById(b) : b
    }

    function Nh(a, b) {
        return (b || document).getElementsByTagName(String(a))
    }

    function Oh() {
        var a = document;
        return a.querySelectorAll && a.querySelector ? a.querySelectorAll(".alt-edited") : Ph(document, "*", Da, void 0)
    }

    function Qh(a, b) {
        var c = b || document;
        if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0]; else {
            c = document;
            var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : Ph(c, "*", a, b)[0] || null
        }
        return a || null
    }

    function Ph(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, h; h = a[f]; f++) b == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; h = a[f]; f++) b = h.className, typeof b.split == p && Xc(b.split(/\s+/), c) && (d[e++] = h);
            d.length = e;
            return d
        }
        return a
    }

    function Rh(a, b) {
        dd(b, function (c, d) {
            c && typeof c == Fb && c.Wa && (c = c.Ha());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Sh.hasOwnProperty(d) ? a.setAttribute(Sh[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }

    var Sh = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Th(a) {
        a = a.document;
        a = Uh(a) ? a.documentElement : a.body;
        return new Jh(a.clientWidth, a.clientHeight)
    }

    function Vh(a) {
        var b = Wh(a);
        a = a.parentWindow || a.defaultView;
        return D && H("10") && a.pageYOffset != b.scrollTop ? new J(b.scrollLeft, b.scrollTop) : new J(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Wh(a) {
        return a.scrollingElement ? a.scrollingElement : !F && Uh(a) ? a.documentElement : a.body || a.documentElement
    }

    function Xh(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function Yh(a, b, c) {
        return Zh(document, arguments)
    }

    function Zh(a, b) {
        var c = String(b[0]), d = b[1];
        if (!Ch && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', af(d.name), '"');
            if (d.type) {
                c.push(' type="', af(d.type), '"');
                var e = {};
                md(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = $h(a, c);
        d && (typeof d === t ? c.className = d : Array.isArray(d) ? c.className = d.join(" ") : Rh(c, d));
        2 < b.length && ai(a, c, b, 2);
        return c
    }

    function ai(a, b, c, d) {
        function e(k) {
            k && b.appendChild(typeof k === t ? a.createTextNode(k) : k)
        }

        for (; d < c.length; d++) {
            var f = c[d];
            if (!Ac(f) || Bc(f) && 0 < f.nodeType) e(f); else {
                a:{
                    if (f && typeof f.length == Eb) {
                        if (Bc(f)) {
                            var h = typeof f.item == p || typeof f.item == t;
                            break a
                        }
                        if (typeof f === p) {
                            h = typeof f.item == p;
                            break a
                        }
                    }
                    h = !1
                }
                Rc(h ? $c(f) : f, e)
            }
        }
    }

    function $h(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function bi() {
        var a = Ge("WBR"), b = document, c = $h(b, g);
        D ? (a = Me(Pe, a), Te(c, a), c.removeChild(c.firstChild)) : Te(c, a);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild); else {
            for (b = b.createDocumentFragment(); c.firstChild;) b.appendChild(c.firstChild);
            c = b
        }
        return c
    }

    function Uh(a) {
        return "CSS1Compat" == a.compatMode
    }

    function ci(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case na:
            case ma:
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    }

    function di(a, b) {
        ai(K(a), a, arguments, 1)
    }

    function ei(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    }

    function fi(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    }

    function gi(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }

    function hi(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function ii(a) {
        return Dh && void 0 != a.children ? a.children : Sc(a.childNodes, function (b) {
            return 1 == b.nodeType
        })
    }

    function ji(a) {
        return void 0 !== a.firstElementChild ? a.firstElementChild : ki(a.firstChild, !0)
    }

    function ki(a, b) {
        for (; a && 1 != a.nodeType;) a = b ? a.nextSibling : a.previousSibling;
        return a
    }

    function li(a) {
        return Bc(a) && 1 == a.nodeType
    }

    function mi(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    }

    function ni(a, b) {
        if (a == b) return 0;
        if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (D && !Gf(9)) {
            if (9 == a.nodeType) return -1;
            if (9 == b.nodeType) return 1
        }
        if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
            var c = 1 == a.nodeType, d = 1 == b.nodeType;
            if (c && d) return a.sourceIndex - b.sourceIndex;
            var e = a.parentNode, f = b.parentNode;
            return e == f ? oi(a, b) : !c && mi(e, b) ? -1 * pi(a, b) : !d && mi(f, a) ? pi(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
        }
        d = K(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        a = d.createRange();
        a.selectNode(b);
        a.collapse(!0);
        return c.compareBoundaryPoints(x.Range.START_TO_END, a)
    }

    function pi(a, b) {
        var c = a.parentNode;
        if (c == b) return -1;
        for (; b.parentNode != c;) b = b.parentNode;
        return oi(b, a)
    }

    function oi(a, b) {
        for (; b = b.previousSibling;) if (b == a) return -1;
        return 1
    }

    function qi(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [], e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], h = arguments[b]; h;) f.unshift(h), h = h.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            h = d[0][b];
            for (var k = 1; k < c; k++) if (h != d[k][b]) return f;
            f = h
        }
        return f
    }

    function K(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function ri(a) {
        return a.contentDocument || a.contentWindow.document
    }

    function si(a) {
        try {
            return a.contentWindow || (a.contentDocument ? Xh(a.contentDocument) : null)
        } catch (b) {
        }
        return null
    }

    function ti(a, b) {
        if ("textContent" in a) a.textContent = b; else if (3 == a.nodeType) a.data = String(b); else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else {
            ei(a);
            var c = K(a);
            a.appendChild(c.createTextNode(String(b)))
        }
    }

    var ui = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1}, vi = {IMG: " ", BR: "\n"};

    function wi(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    }

    function xi(a) {
        return D && !H("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex")
    }

    function yi(a) {
        a = a.tabIndex;
        return typeof a === Eb && 0 <= a && 32768 > a
    }

    function zi(a) {
        if (Eh && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n"); else {
            var b = [];
            Ai(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Eh || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Bi(a) {
        var b = [];
        Ai(a, b, !1);
        return b.join("")
    }

    function Ai(a, b, c) {
        if (!(a.nodeName in ui)) if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue); else if (a.nodeName in vi) b.push(vi[a.nodeName]); else for (a = a.firstChild; a;) Ai(a, b, c), a = a.nextSibling
    }

    function Lh(a) {
        this.g = a || x.document || document
    }

    v = Lh.prototype;
    v.s = function (a) {
        return Mh(this.g, a)
    };
    v.J = function (a, b, c) {
        return Zh(this.g, arguments)
    };

    function Ci(a, b) {
        return $h(a.g, b)
    }

    function Di(a) {
        a = a.g;
        return a.parentWindow || a.defaultView
    }

    v.appendChild = function (a, b) {
        a.appendChild(b)
    };
    v.Rc = ei;
    v.Rh = ii;
    v.dg = ji;
    v.contains = mi;
    v.jb = ti;
    v.Cf = zi;

    function Ei(a, b) {
        b = a(b || Fi, void 0);
        a = Ci(Kh(), g);
        b = Gi(b);
        Te(a, b);
        1 == a.childNodes.length && (b = a.firstChild, 1 == b.nodeType && (a = b));
        return a
    }

    function Gi(a) {
        return Bc(a) ? a instanceof Rg ? Sg(a) : Ae("zSoyz") : Ae(String(a))
    }

    var Fi = {};

    function Hi(a) {
        return typeof a.className == t ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }

    function Ii(a) {
        return a.classList ? a.classList : Hi(a).match(/\S+/g) || []
    }

    function Ji(a, b) {
        typeof a.className == t ? a.className = b : a.setAttribute && a.setAttribute("class", b)
    }

    function Ki(a, b) {
        return a.classList ? a.classList.contains(b) : Xc(Ii(a), b)
    }

    function L(a, b) {
        if (a.classList) a.classList.add(b); else if (!Ki(a, b)) {
            var c = Hi(a);
            Ji(a, c + (0 < c.length ? " " + b : b))
        }
    }

    function Li(a, b) {
        if (a.classList) Rc(b, function (e) {
            L(a, e)
        }); else {
            var c = {};
            Rc(Ii(a), function (e) {
                c[e] = !0
            });
            Rc(b, function (e) {
                c[e] = !0
            });
            b = "";
            for (var d in c) b += 0 < b.length ? " " + d : d;
            Ji(a, b)
        }
    }

    function Mi(a, b) {
        a.classList ? a.classList.remove(b) : Ki(a, b) && Ji(a, Sc(Ii(a), function (c) {
            return c != b
        }).join(" "))
    }

    function Ni(a, b) {
        a.classList ? Rc(b, function (c) {
            Mi(a, c)
        }) : Ji(a, Sc(Ii(a), function (c) {
            return !Xc(b, c)
        }).join(" "))
    };

    function Oi() {
    }

    Oi.prototype.h = function () {
    };

    function Pi(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }

    v = Pi.prototype;
    v.contains = function (a) {
        return this && a ? a instanceof Pi ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    v.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    v.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    v.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    v.translate = function (a, b) {
        a instanceof J ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, typeof b === Eb && (this.top += b, this.bottom += b));
        return this
    };

    function Qi(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    v = Qi.prototype;
    v.contains = function (a) {
        return a instanceof J ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    v.ceil = function () {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    v.floor = function () {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    v.round = function () {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    v.translate = function (a, b) {
        a instanceof J ? (this.left += a.x, this.top += a.y) : (this.left += a, typeof b === Eb && (this.top += b));
        return this
    };

    function M(a, b, c) {
        if (typeof b === t) (b = Ri(a, b)) && (a.style[b] = c); else for (var d in b) {
            c = a;
            var e = b[d], f = Ri(c, d);
            f && (c.style[f] = e)
        }
    }

    var Si = {};

    function Ri(a, b) {
        var c = Si[b];
        if (!c) {
            var d = gf(b);
            c = d;
            void 0 === a.style[d] && (d = (F ? "Webkit" : E ? "Moz" : D ? "ms" : of ? "O" : null) + hf(d), void 0 !== a.style[d] && (c = d));
            Si[b] = c
        }
        return c
    }

    function Ti(a, b) {
        var c = K(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Ui(a, b) {
        return Ti(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Vi(a, b, c) {
        if (b instanceof J) {
            var d = b.x;
            b = b.y
        } else d = b, b = c;
        a.style.left = Wi(d);
        a.style.top = Wi(b)
    }

    function Xi(a) {
        a = a ? K(a) : document;
        return !D || Gf(9) || Uh(Kh(a).g) ? a.documentElement : a.body
    }

    function Yi(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {left: 0, top: 0, right: 0, bottom: 0}
        }
    }

    function Zi(a) {
        if (D && !Gf(8)) return a.offsetParent;
        var b = K(a), c = Ui(a, Jb), d = "fixed" == c || c == za;
        for (a = a.parentNode; a && a != b; a = a.parentNode) if (11 == a.nodeType && a.host && (a = a.host), c = Ui(a, Jb), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || c == za || "relative" == c)) return a;
        return null
    }

    function $i(a) {
        for (var b = new Pi(0, Infinity, Infinity, 0), c = Kh(a), d = c.g.body, e = c.g.documentElement, f = Wh(c.g); a = Zi(a);) if (!(D && 0 == a.clientWidth || F && 0 == a.clientHeight && a == d) && a != d && a != e && Ui(a, "overflow") != bc) {
            var h = aj(a), k = new J(a.clientLeft, a.clientTop);
            h.x += k.x;
            h.y += k.y;
            b.top = Math.max(b.top, h.y);
            b.right = Math.min(b.right, h.x + a.clientWidth);
            b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
            b.left = Math.max(b.left, h.x)
        }
        d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, f);
        c = Th(Di(c) ||
            window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    }

    function aj(a) {
        var b = K(a), c = new J(0, 0), d = Xi(b);
        if (a == d) return c;
        a = Yi(a);
        b = Vh(Kh(b).g);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function bj(a, b) {
        var c = new J(0, 0), d = Xh(K(a));
        if (!mf(d, "parent")) return c;
        do {
            if (d == b) var e = aj(a); else e = Yi(a), e = new J(e.left, e.top);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    }

    function Wi(a) {
        typeof a == Eb && (a += "px");
        return a
    }

    function cj(a) {
        var b = dj;
        if (Ui(a, "display") != r) return b(a);
        var c = a.style, d = c.display, e = c.visibility, f = c.position;
        c.visibility = qb;
        c.position = za;
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function dj(a) {
        var b = a.offsetWidth, c = a.offsetHeight, d = F && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Yi(a), new Jh(a.right - a.left, a.bottom - a.top)) : new Jh(b, c)
    }

    function N(a, b) {
        a.style.display = b ? "" : r
    }

    function ej(a, b) {
        b = Kh(b);
        var c = b.g;
        if (D && c.createStyleSheet) b = c.createStyleSheet(), fj(b, a); else {
            c = Ph(b.g, "HEAD", void 0, void 0)[0];
            if (!c) {
                var d = Ph(b.g, "BODY", void 0, void 0)[0];
                c = b.J("HEAD");
                d.parentNode.insertBefore(c, d)
            }
            d = b.J("STYLE");
            var e = vc();
            e && d.setAttribute("nonce", e);
            fj(d, a);
            b.appendChild(c, d)
        }
    }

    function fj(a, b) {
        b = ne(b);
        D && void 0 !== a.cssText ? a.cssText = b : x.trustedTypes ? ti(a, b) : a.innerHTML = b
    }

    function gj(a) {
        return Pb == Ui(a, Ya)
    }

    var hj = E ? "MozUserSelect" : F || pf ? "WebkitUserSelect" : null;

    function ij(a, b, c) {
        c = c ? null : a.getElementsByTagName("*");
        if (hj) {
            if (b = b ? r : "", a.style && (a.style[hj] = b), c) {
                a = 0;
                for (var d; d = c[a]; a++) d.style && (d.style[hj] = b)
            }
        } else if (D || of) if (b = b ? "on" : "", a.setAttribute("unselectable", b), c) for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
    }

    function jj(a) {
        return new Jh(a.offsetWidth, a.offsetHeight)
    }

    function kj(a, b) {
        var c = K(a), d = Uh(Kh(c).g);
        !D || H("10") || d && H("8") ? lj(a, b, "content-box") : (c = a.style, d ? (c.pixelWidth = b.width, c.pixelHeight = b.height) : (d = mj(a), a = nj(a), c.pixelWidth = b.width + a.left + d.left + d.right + a.right, c.pixelHeight = b.height + a.top + d.top + d.bottom + a.bottom))
    }

    function lj(a, b, c) {
        a = a.style;
        E ? a.MozBoxSizing = c : F ? a.WebkitBoxSizing = c : a.boxSizing = c;
        a.width = Math.max(b.width, 0) + "px";
        a.height = Math.max(b.height, 0) + "px"
    }

    function oj(a, b, c, d) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var e = a.style[c], f = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = f;
        return +b
    }

    function pj(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? oj(a, b, "left", "pixelLeft") : 0
    }

    function mj(a) {
        if (D) {
            var b = pj(a, Hb), c = pj(a, Ib), d = pj(a, "paddingTop");
            a = pj(a, "paddingBottom");
            return new Pi(d, c, a, b)
        }
        b = Ti(a, Hb);
        c = Ti(a, Ib);
        d = Ti(a, "paddingTop");
        a = Ti(a, "paddingBottom");
        return new Pi(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    }

    var qj = {thin: 2, medium: 4, thick: 6};

    function rj(a, b) {
        if ((a.currentStyle ? a.currentStyle[b + "Style"] : null) == r) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in qj ? qj[b] : oj(a, b, "left", "pixelLeft")
    }

    function nj(a) {
        if (D && !Gf(9)) {
            var b = rj(a, "borderLeft"), c = rj(a, "borderRight"), d = rj(a, "borderTop");
            a = rj(a, "borderBottom");
            return new Pi(d, c, a, b)
        }
        b = Ti(a, "borderLeftWidth");
        c = Ti(a, "borderRightWidth");
        d = Ti(a, "borderTopWidth");
        a = Ti(a, "borderBottomWidth");
        return new Pi(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    };var sj = function () {
        if (tf) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(oe)) ? a[1] : "0"
        }
        return sf ? (a = /1[0|1][_.][0-9_.]+/, (a = a.exec(oe)) ? a[0].replace(/_/g, ".") : "10") : uf ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(oe)) ? a[1] : "") : vf || wf || xf ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(oe)) ? a[1].replace(/_/g, ".") : "") : ""
    }();

    function tj(a) {
        return (a = a.exec(oe)) ? a[1] : ""
    }

    var uj = function () {
        if (Kf) return tj(/Firefox\/([0-9.]+)/);
        if (D || pf || of) return Ef;
        if (Of) return kf() ? tj(/CriOS\/([0-9.]+)/) : tj(/Chrome\/([0-9.]+)/);
        if (Pf && !kf()) return tj(/Version\/([0-9.]+)/);
        if (Lf || Mf) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(oe);
            if (a) return a[1] + "." + a[2]
        } else if (Nf) return (a = tj(/Android\s+([0-9.]+)/)) ? a : tj(/Version\/([0-9.]+)/);
        return ""
    }();

    function vj(a, b, c, d, e, f, h, k, l) {
        var m = wj(c);
        var n = aj(a);
        var q = cj(a);
        n = new Qi(n.x, n.y, q.width, q.height);
        if (q = $i(a)) {
            var u = new Qi(q.left, q.top, q.right - q.left, q.bottom - q.top);
            q = Math.max(n.left, u.left);
            var z = Math.min(n.left + n.width, u.left + u.width);
            if (q <= z) {
                var G = Math.max(n.top, u.top);
                u = Math.min(n.top + n.height, u.top + u.height);
                G <= u && (n.left = q, n.top = G, n.width = z - q, n.height = u - G)
            }
        }
        q = Kh(a);
        G = Kh(c);
        q.g != G.g && (z = q.g.body, G = bj(z, Di(G)), G = Ih(G, aj(z)), !D || Gf(9) || Uh(q.g) || (G = Ih(G, Vh(q.g))), n.left += G.x, n.top += G.y);
        a = xj(a, b);
        b = n.left;
        a & 4 ? b += n.width : a & 2 && (b += n.width / 2);
        b = new J(b, n.top + (a & 1 ? n.height : 0));
        b = Ih(b, m);
        e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
        if (h) if (l) var U = l; else if (U = $i(c)) U.top -= m.y, U.right -= m.x, U.bottom -= m.y, U.left -= m.x;
        return yj(b, c, d, f, U, h, k)
    }

    function wj(a) {
        if (a = a.offsetParent) {
            var b = "HTML" == a.tagName || "BODY" == a.tagName;
            if (!b || "static" != Ui(a, Jb)) {
                var c = aj(a);
                if (!b) {
                    b = gj(a);
                    var d;
                    if (d = b) {
                        d = Pf && 0 <= Pd(uj, 10);
                        var e;
                        if (e = yf) e = 0 <= Pd(sj, 10);
                        var f = Of && 0 <= Pd(uj, 85);
                        d = E || d || e || f
                    }
                    b = d ? -a.scrollLeft : !b || qf && H("8") || Ui(a, "overflowX") == bc ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft;
                    c = Ih(c, new J(b, a.scrollTop))
                }
            }
        }
        return c || new J
    }

    function yj(a, b, c, d, e, f, h) {
        a = Hh(a);
        var k = xj(b, c);
        c = cj(b);
        h = h ? new Jh(h.width, h.height) : new Jh(c.width, c.height);
        a = Hh(a);
        h = new Jh(h.width, h.height);
        var l = 0;
        if (d || 0 != k) k & 4 ? a.x -= h.width + (d ? d.right : 0) : k & 2 ? a.x -= h.width / 2 : d && (a.x += d.left), k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (f) {
            if (e) {
                d = a;
                k = h;
                l = 0;
                65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
                132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
                d.x < e.left && f & 1 && (d.x = e.left, l |= 1);
                if (f & 16) {
                    var m = d.x;
                    d.x < e.left && (d.x = e.left, l |= 4);
                    d.x + k.width > e.right &&
                    (k.width = Math.min(e.right - d.x, m + k.width - e.left), k.width = Math.max(k.width, 0), l |= 4)
                }
                d.x + k.width > e.right && f & 1 && (d.x = Math.max(e.right - k.width, e.left), l |= 1);
                f & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
                d.y < e.top && f & 4 && (d.y = e.top, l |= 2);
                f & 32 && (m = d.y, d.y < e.top && (d.y = e.top, l |= 8), d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, m + k.height - e.top), k.height = Math.max(k.height, 0), l |= 8));
                d.y + k.height > e.bottom && f & 4 && (d.y = Math.max(e.bottom - k.height, e.top), l |= 2);
                f & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height >
                e.bottom ? 128 : 0));
                e = l
            } else e = 256;
            l = e
        }
        f = new Qi(0, 0, 0, 0);
        f.left = a.x;
        f.top = a.y;
        f.width = h.width;
        f.height = h.height;
        e = l;
        if (e & 496) return e;
        Vi(b, new J(f.left, f.top));
        h = new Jh(f.width, f.height);
        c == h || c && h && c.width == h.width && c.height == h.height || (c = h, h = K(b), a = Uh(Kh(h).g), !D || H("10") || a && H("8") ? lj(b, c, Ka) : (h = b.style, a ? (a = mj(b), b = nj(b), h.pixelWidth = c.width - b.left - a.left - a.right - b.right, h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth = c.width, h.pixelHeight = c.height)));
        return e
    }

    function xj(a, b) {
        return (b & 8 && gj(a) ? b ^ 4 : b) & -9
    };var zj;

    function Aj(a, b) {
        b ? a.setAttribute("role", b) : a.removeAttribute("role")
    }

    function Bj(a, b, c) {
        Array.isArray(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (zj || (zj = {
            atomic: !1,
            autocomplete: r,
            dropeffect: r,
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: ac,
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: r,
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = zj, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    };

    function Cj(a) {
        a && typeof a.R == p && a.R()
    };

    function O() {
        this.wa = this.wa;
        this.Pa = this.Pa
    }

    O.prototype.wa = !1;
    O.prototype.R = function () {
        this.wa || (this.wa = !0, this.L())
    };

    function Dj(a, b) {
        a.wa ? b() : (a.Pa || (a.Pa = []), a.Pa.push(b))
    }

    O.prototype.L = function () {
        if (this.Pa) for (; this.Pa.length;) this.Pa.shift()()
    };

    function Ej(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.j = !1
    }

    Ej.prototype.stopPropagation = function () {
        this.j = !0
    };
    Ej.prototype.g = function () {
        this.defaultPrevented = !0
    };
    var Fj = function () {
        if (!x.addEventListener || !Object.defineProperty) return !1;
        var a = !1, b = Object.defineProperty({}, "passive", {
            get: function () {
                a = !0
            }
        });
        try {
            x.addEventListener("test", y, b), x.removeEventListener("test", y, b)
        } catch (c) {
        }
        return a
    }();
    var Gj = {$b: zb, ac: "mouseup", zc: "mousecancel", Gj: Ab, Ij: Cb, Hj: Bb, Ej: "mouseenter", Fj: "mouseleave"};

    function Hj(a, b) {
        Ej.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.l = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.h = null;
        if (a) {
            var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            (b = a.relatedTarget) ? E && (mf(b,
                "nodeName") || (b = null)) : c == Cb ? b = a.fromElement : c == Bb && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.l = sf ? a.metaKey : a.ctrlKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = typeof a.pointerType === t ? a.pointerType : Ij[a.pointerType] || "";
            this.state = a.state;
            this.h = a;
            a.defaultPrevented && Hj.G.g.call(this)
        }
    }

    B(Hj, Ej);
    var Ij = {2: "touch", 3: "pen", 4: "mouse"};
    Hj.prototype.stopPropagation = function () {
        Hj.G.stopPropagation.call(this);
        this.h.stopPropagation ? this.h.stopPropagation() : this.h.cancelBubble = !0
    };
    Hj.prototype.g = function () {
        Hj.G.g.call(this);
        var a = this.h;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var Jj = "closure_listenable_" + (1E6 * Math.random() | 0);

    function Kj(a) {
        return !(!a || !a[Jj])
    };var Lj = 0;

    function Mj(a, b, c, d, e) {
        this.listener = a;
        this.g = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Fd = e;
        this.key = ++Lj;
        this.qc = this.md = !1
    }

    function Nj(a) {
        a.qc = !0;
        a.listener = null;
        a.g = null;
        a.src = null;
        a.Fd = null
    };

    function Oj(a) {
        this.src = a;
        this.g = {};
        this.h = 0
    }

    Oj.prototype.add = function (a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.h++);
        var h = Pj(a, b, d, e);
        -1 < h ? (b = a[h], c || (b.md = !1)) : (b = new Mj(b, this.src, f, !!d, e), b.md = c, a.push(b));
        return b
    };
    Oj.prototype.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.g)) return !1;
        var e = this.g[a];
        b = Pj(e, b, c, d);
        return -1 < b ? (Nj(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.g[a], this.h--), !0) : !1
    };

    function Qj(a, b) {
        var c = b.type;
        if (!(c in a.g)) return !1;
        var d = Yc(a.g[c], b);
        d && (Nj(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
        return d
    }

    function Rj(a, b) {
        b = b && b.toString();
        var c = 0, d;
        for (d in a.g) if (!b || d == b) {
            for (var e = a.g[d], f = 0; f < e.length; f++) ++c, Nj(e[f]);
            delete a.g[d];
            a.h--
        }
        return c
    }

    Oj.prototype.Mc = function (a, b, c, d) {
        a = this.g[a.toString()];
        var e = -1;
        a && (e = Pj(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    Oj.prototype.hasListener = function (a, b) {
        var c = void 0 !== a, d = c ? a.toString() : "", e = void 0 !== b;
        return ed(this.g, function (f) {
            for (var h = 0; h < f.length; ++h) if (!(c && f[h].type != d || e && f[h].capture != b)) return !0;
            return !1
        })
    };

    function Pj(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.qc && f.listener == b && f.capture == !!c && f.Fd == d) return e
        }
        return -1
    };var Sj = "closure_lm_" + (1E6 * Math.random() | 0), Tj = {}, Uj = 0;

    function P(a, b, c, d, e) {
        if (d && d.once) return Vj(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) P(a, b[f], c, d, e);
            return null
        }
        c = Wj(c);
        return Kj(a) ? a.D(b, c, Bc(d) ? !!d.capture : !!d, e) : Xj(a, b, c, !1, d, e)
    }

    function Xj(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var h = Bc(e) ? !!e.capture : !!e, k = Yj(a);
        k || (a[Sj] = k = new Oj(a));
        c = k.add(b, c, d, h, f);
        if (c.g) return c;
        d = Zj();
        c.g = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) Fj || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e); else if (a.attachEvent) a.attachEvent(ak(b.toString()), d); else if (a.addListener && a.removeListener) a.addListener(d); else throw Error("addEventListener and attachEvent are unavailable.");
        Uj++;
        return c
    }

    function Zj() {
        function a(c) {
            return b.call(a.src, a.listener, c)
        }

        var b = bk;
        return a
    }

    function Vj(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) Vj(a, b[f], c, d, e);
            return null
        }
        c = Wj(c);
        return Kj(a) ? a.Eb(b, c, Bc(d) ? !!d.capture : !!d, e) : Xj(a, b, c, !0, d, e)
    }

    function ck(a, b, c, d, e) {
        if (Array.isArray(b)) for (var f = 0; f < b.length; f++) ck(a, b[f], c, d, e); else d = Bc(d) ? !!d.capture : !!d, c = Wj(c), Kj(a) ? a.ha(b, c, d, e) : a && (a = Yj(a)) && (b = a.Mc(b, c, d, e)) && dk(b)
    }

    function dk(a) {
        if (typeof a === Eb || !a || a.qc) return !1;
        var b = a.src;
        if (Kj(b)) return Qj(b.Na, a);
        var c = a.type, d = a.g;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(ak(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        Uj--;
        (c = Yj(b)) ? (Qj(c, a), 0 == c.h && (c.src = null, b[Sj] = null)) : Nj(a);
        return !0
    }

    function ek(a, b) {
        if (!a) return 0;
        if (Kj(a)) return a.Na ? Rj(a.Na, b) : 0;
        a = Yj(a);
        if (!a) return 0;
        var c = 0;
        b = b && b.toString();
        for (var d in a.g) if (!b || d == b) for (var e = a.g[d].concat(), f = 0; f < e.length; ++f) dk(e[f]) && ++c;
        return c
    }

    function ak(a) {
        return a in Tj ? Tj[a] : Tj[a] = "on" + a
    }

    function fk(a, b) {
        var c = a.listener, d = a.Fd || a.src;
        a.md && dk(a);
        return c.call(d, b)
    }

    function bk(a, b) {
        return a.qc ? !0 : fk(a, new Hj(b, this))
    }

    function Yj(a) {
        a = a[Sj];
        return a instanceof Oj ? a : null
    }

    var gk = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Wj(a) {
        if (typeof a === p) return a;
        a[gk] || (a[gk] = function (b) {
            return a.handleEvent(b)
        });
        return a[gk]
    };

    function Q() {
        O.call(this);
        this.Na = new Oj(this);
        this.Fh = this;
        this.df = null
    }

    B(Q, O);
    Q.prototype[Jj] = !0;
    v = Q.prototype;
    v.td = function () {
        return this.df
    };
    v.mf = function (a) {
        this.df = a
    };
    v.addEventListener = function (a, b, c, d) {
        P(this, a, b, c, d)
    };
    v.removeEventListener = function (a, b, c, d) {
        ck(this, a, b, c, d)
    };
    v.dispatchEvent = function (a) {
        var b = this.td();
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.td()) c.push(b), ++d
        }
        b = this.Fh;
        d = a.type || a;
        if (typeof a === t) a = new Ej(a, b); else if (a instanceof Ej) a.target = a.target || b; else {
            var e = a;
            a = new Ej(d, b);
            md(a, e)
        }
        e = !0;
        if (c) for (var f = c.length - 1; !a.j && 0 <= f; f--) {
            var h = a.currentTarget = c[f];
            e = hk(h, d, !0, a) && e
        }
        a.j || (h = a.currentTarget = b, e = hk(h, d, !0, a) && e, a.j || (e = hk(h, d, !1, a) && e));
        if (c) for (f = 0; !a.j && f < c.length; f++) h = a.currentTarget = c[f], e = hk(h, d, !1, a) && e;
        return e
    };
    v.L = function () {
        Q.G.L.call(this);
        this.Na && Rj(this.Na, void 0);
        this.df = null
    };
    v.D = function (a, b, c, d) {
        return this.Na.add(String(a), b, !1, c, d)
    };
    v.Eb = function (a, b, c, d) {
        return this.Na.add(String(a), b, !0, c, d)
    };
    v.ha = function (a, b, c, d) {
        return this.Na.remove(String(a), b, c, d)
    };

    function hk(a, b, c, d) {
        b = a.Na.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.qc && h.capture == c) {
                var k = h.listener, l = h.Fd || h.src;
                h.md && Qj(a.Na, h);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && !d.defaultPrevented
    }

    v.Mc = function (a, b, c, d) {
        return this.Na.Mc(String(a), b, c, d)
    };
    v.hasListener = function (a, b) {
        return this.Na.hasListener(void 0 !== a ? String(a) : void 0, b)
    };

    function ik(a, b) {
        this.l = a;
        this.j = b;
        this.h = 0;
        this.g = null
    }

    ik.prototype.get = function () {
        if (0 < this.h) {
            this.h--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else a = this.l();
        return a
    };

    function jk(a, b) {
        a.j(b);
        100 > a.h && (a.h++, b.next = a.g, a.g = b)
    };var kk;

    function lk() {
        var a = x.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !C("Presto") && (a = function () {
            var e = $h(document, ma);
            e.style.display = r;
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var h = "callImmediate" + Math.random(),
                k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = A(function (l) {
                if (("*" == k || l.origin == k) && l.data == h) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e,
                !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    f.postMessage(h, k)
                }
            }
        });
        if ("undefined" !== typeof a && !se()) {
            var b = new a, c = {}, d = c;
            b.port1.onmessage = function () {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.Uf;
                    c.Uf = null;
                    e()
                }
            };
            return function (e) {
                d.next = {Uf: e};
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function (e) {
            x.setTimeout(e, 0)
        }
    };

    function mk(a) {
        x.setTimeout(function () {
            throw a;
        }, 0)
    };

    function nk() {
        this.h = this.g = null
    }

    nk.prototype.add = function (a, b) {
        var c = ok.get();
        c.set(a, b);
        this.h ? this.h.next = c : this.g = c;
        this.h = c
    };
    nk.prototype.remove = function () {
        var a = null;
        this.g && (a = this.g, this.g = this.g.next, this.g || (this.h = null), a.next = null);
        return a
    };
    var ok = new ik(function () {
        return new pk
    }, function (a) {
        return a.reset()
    });

    function pk() {
        this.next = this.g = this.h = null
    }

    pk.prototype.set = function (a, b) {
        this.h = a;
        this.g = b;
        this.next = null
    };
    pk.prototype.reset = function () {
        this.next = this.g = this.h = null
    };

    function qk(a, b) {
        rk || sk();
        tk || (rk(), tk = !0);
        uk.add(a, b)
    }

    var rk;

    function sk() {
        if (x.Promise && x.Promise.resolve) {
            var a = x.Promise.resolve(void 0);
            rk = function () {
                a.then(vk)
            }
        } else rk = function () {
            var b = vk;
            typeof x.setImmediate !== p || x.Window && x.Window.prototype && !C(ka) && x.Window.prototype.setImmediate == x.setImmediate ? (kk || (kk = lk()), kk(b)) : x.setImmediate(b)
        }
    }

    var tk = !1, uk = new nk;

    function vk() {
        for (var a; a = uk.remove();) {
            try {
                a.h.call(a.g)
            } catch (b) {
                mk(b)
            }
            jk(ok, a)
        }
        tk = !1
    };

    function wk(a, b) {
        this.g = 0;
        this.A = void 0;
        this.l = this.h = this.j = null;
        this.m = this.o = !1;
        if (a != y) try {
            var c = this;
            a.call(b, function (d) {
                xk(c, 2, d)
            }, function (d) {
                xk(c, 3, d)
            })
        } catch (d) {
            xk(this, 3, d)
        }
    }

    function yk() {
        this.next = this.j = this.h = this.l = this.g = null;
        this.m = !1
    }

    yk.prototype.reset = function () {
        this.j = this.h = this.l = this.g = null;
        this.m = !1
    };
    var zk = new ik(function () {
        return new yk
    }, function (a) {
        a.reset()
    });

    function Ak(a, b, c) {
        var d = zk.get();
        d.l = a;
        d.h = b;
        d.j = c;
        return d
    }

    function Bk(a) {
        if (a instanceof wk) return a;
        var b = new wk(y);
        xk(b, 2, a);
        return b
    }

    function Ck() {
        var a = Dk[5];
        return new wk(function (b, c) {
            c(a)
        })
    }

    function Ek() {
        var a, b, c = new wk(function (d, e) {
            a = d;
            b = e
        });
        return new Fk(c, a, b)
    }

    wk.prototype.then = function (a, b, c) {
        return Gk(this, typeof a === p ? a : null, typeof b === p ? b : null, c)
    };
    wk.prototype.$goog_Thenable = !0;
    wk.prototype.cancel = function (a) {
        if (0 == this.g) {
            var b = new Hk(a);
            qk(function () {
                Ik(this, b)
            }, this)
        }
    };

    function Ik(a, b) {
        if (0 == a.g) if (a.j) {
            var c = a.j;
            if (c.h) {
                for (var d = 0, e = null, f = null, h = c.h; h && (h.m || (d++, h.g == a && (e = h), !(e && 1 < d))); h = h.next) e || (f = h);
                e && (0 == c.g && 1 == d ? Ik(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : Jk(c), Kk(c, e, 3, b)))
            }
            a.j = null
        } else xk(a, 3, b)
    }

    function Lk(a, b) {
        a.h || 2 != a.g && 3 != a.g || Mk(a);
        a.l ? a.l.next = b : a.h = b;
        a.l = b
    }

    function Gk(a, b, c, d) {
        var e = Ak(null, null, null);
        e.g = new wk(function (f, h) {
            e.l = b ? function (k) {
                try {
                    var l = b.call(d, k);
                    f(l)
                } catch (m) {
                    h(m)
                }
            } : f;
            e.h = c ? function (k) {
                try {
                    var l = c.call(d, k);
                    void 0 === l && k instanceof Hk ? h(k) : f(l)
                } catch (m) {
                    h(m)
                }
            } : h
        });
        e.g.j = a;
        Lk(a, e);
        return e.g
    }

    wk.prototype.B = function (a) {
        this.g = 0;
        xk(this, 2, a)
    };
    wk.prototype.H = function (a) {
        this.g = 0;
        xk(this, 3, a)
    };

    function xk(a, b, c) {
        if (0 == a.g) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.g = 1;
            a:{
                var d = c, e = a.B, f = a.H;
                if (d instanceof wk) {
                    Lk(d, Ak(e || y, f || null, a));
                    var h = !0
                } else {
                    if (d) try {
                        var k = !!d.$goog_Thenable
                    } catch (m) {
                        k = !1
                    } else k = !1;
                    if (k) d.then(e, f, a), h = !0; else {
                        if (Bc(d)) try {
                            var l = d.then;
                            if (typeof l === p) {
                                Nk(d, l, e, f, a);
                                h = !0;
                                break a
                            }
                        } catch (m) {
                            f.call(a, m);
                            h = !0;
                            break a
                        }
                        h = !1
                    }
                }
            }
            h || (a.A = c, a.g = b, a.j = null, Mk(a), 3 != b || c instanceof Hk || Ok(a, c))
        }
    }

    function Nk(a, b, c, d, e) {
        function f(l) {
            k || (k = !0, d.call(e, l))
        }

        function h(l) {
            k || (k = !0, c.call(e, l))
        }

        var k = !1;
        try {
            b.call(a, h, f)
        } catch (l) {
            f(l)
        }
    }

    function Mk(a) {
        a.o || (a.o = !0, qk(a.C, a))
    }

    function Jk(a) {
        var b = null;
        a.h && (b = a.h, a.h = b.next, b.next = null);
        a.h || (a.l = null);
        return b
    }

    wk.prototype.C = function () {
        for (var a; a = Jk(this);) Kk(this, a, this.g, this.A);
        this.o = !1
    };

    function Kk(a, b, c, d) {
        if (3 == c && b.h && !b.m) for (; a && a.m; a = a.j) a.m = !1;
        if (b.g) b.g.j = null, Pk(b, c, d); else try {
            b.m ? b.l.call(b.j) : Pk(b, c, d)
        } catch (e) {
            Qk.call(null, e)
        }
        jk(zk, b)
    }

    function Pk(a, b, c) {
        2 == b ? a.l.call(a.j, c) : a.h && a.h.call(a.j, c)
    }

    function Ok(a, b) {
        a.m = !0;
        qk(function () {
            a.m && Qk.call(null, b)
        })
    }

    var Qk = mk;

    function Hk(a) {
        Lc.call(this, a)
    }

    B(Hk, Lc);
    Hk.prototype.name = "cancel";

    function Fk(a, b, c) {
        this.promise = a;
        this.h = b;
        this.g = c
    };

    function Rk(a, b, c) {
        if (typeof a === p) c && (a = A(a, c)); else if (a && typeof a.handleEvent == p) a = A(a.handleEvent, a); else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : x.setTimeout(a, b || 0)
    }

    function Sk(a) {
        x.clearTimeout(a)
    };

    function Tk(a, b, c) {
        O.call(this);
        this.h = a;
        this.l = b || 0;
        this.j = c;
        this.g = A(this.eh, this)
    }

    B(Tk, O);
    v = Tk.prototype;
    v.Wb = 0;
    v.L = function () {
        Tk.G.L.call(this);
        this.stop();
        delete this.h;
        delete this.j
    };
    v.start = function (a) {
        this.stop();
        this.Wb = Rk(this.g, void 0 !== a ? a : this.l)
    };
    v.stop = function () {
        0 != this.Wb && Sk(this.Wb);
        this.Wb = 0
    };
    v.eh = function () {
        this.Wb = 0;
        this.h && this.h.call(this.j)
    };

    function Uk(a) {
        O.call(this);
        this.h = a;
        this.g = {}
    }

    B(Uk, O);
    var Vk = [];
    v = Uk.prototype;
    v.D = function (a, b, c, d) {
        return Wk(this, a, b, c, d)
    };

    function Xk(a, b, c, d) {
        Wk(a, b, Sa, c, !1, d)
    }

    function Wk(a, b, c, d, e, f) {
        Array.isArray(c) || (c && (Vk[0] = c.toString()), c = Vk);
        for (var h = 0; h < c.length; h++) {
            var k = P(b, c[h], d || a.handleEvent, e || !1, f || a.h || a);
            if (!k) break;
            a.g[k.key] = k
        }
        return a
    }

    v.Eb = function (a, b, c, d) {
        return Yk(this, a, b, c, d)
    };

    function Yk(a, b, c, d, e, f) {
        if (Array.isArray(c)) for (var h = 0; h < c.length; h++) Yk(a, b, c[h], d, e, f); else {
            b = Vj(b, c, d || a.handleEvent, e, f || a.h || a);
            if (!b) return a;
            a.g[b.key] = b
        }
        return a
    }

    v.ha = function (a, b, c, d, e) {
        if (Array.isArray(b)) for (var f = 0; f < b.length; f++) this.ha(a, b[f], c, d, e); else c = c || this.handleEvent, d = Bc(d) ? !!d.capture : !!d, e = e || this.h || this, c = Wj(c), d = !!d, b = Kj(a) ? a.Mc(b, c, d, e) : a ? (a = Yj(a)) ? a.Mc(b, c, d, e) : null : null, b && (dk(b), delete this.g[b.key]);
        return this
    };

    function Zk(a) {
        dd(a.g, function (b, c) {
            this.g.hasOwnProperty(c) && dk(b)
        }, a);
        a.g = {}
    }

    v.L = function () {
        Uk.G.L.call(this);
        Zk(this)
    };
    v.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function $k(a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
        if (al(a.keyCode)) return !0;
        switch (a.keyCode) {
            case 18:
            case 20:
            case 93:
            case 17:
            case 40:
            case 35:
            case 27:
            case 36:
            case 45:
            case 37:
            case 224:
            case 91:
            case 144:
            case 12:
            case 34:
            case 33:
            case 19:
            case 255:
            case 44:
            case 39:
            case 145:
            case 16:
            case 38:
            case 252:
            case 224:
            case 92:
                return !1;
            case 0:
                return !E;
            default:
                return 166 > a.keyCode || 183 < a.keyCode
        }
    }

    function bl(a, b, c, d, e, f) {
        if (F && !H("525")) return !0;
        if (sf && e) return al(a);
        if (e && !d) return !1;
        if (!E) {
            typeof b === Eb && (b = cl(b));
            var h = 17 == b || 18 == b || sf && 91 == b;
            if ((!c || sf) && h || sf && 16 == b && (d || f)) return !1
        }
        if ((F || pf) && d && c) switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (D && d && b == a) return !1;
        switch (a) {
            case 13:
                return E ? f || e ? !1 : !(c && d) : !0;
            case 27:
                return !(F || pf || E)
        }
        return E && (d || e || f) ? !1 : al(a)
    }

    function al(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (F || pf) && 0 == a) return !0;
        switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
            case 163:
            case 58:
                return !0;
            case 173:
                return E;
            default:
                return !1
        }
    }

    function cl(a) {
        if (E) a = dl(a); else if (sf && F) switch (a) {
            case 93:
                a = 91
        }
        return a
    }

    function dl(a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    };

    function el(a, b, c, d) {
        Hj.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.repeat = c
    }

    B(el, Hj);

    function fl(a, b) {
        Q.call(this);
        a && gl(this, a, b)
    }

    B(fl, Q);
    v = fl.prototype;
    v.F = null;
    v.Id = null;
    v.Pe = null;
    v.Jd = null;
    v.Ga = -1;
    v.ib = -1;
    v.pe = !1;
    var hl = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    }, il = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    }, jl = !F || H("525"), kl = sf && E;
    v = fl.prototype;
    v.hi = function (a) {
        if (F || pf) if (17 == this.Ga && !a.ctrlKey || 18 == this.Ga && !a.altKey || sf && 91 == this.Ga && !a.metaKey) this.ib = this.Ga = -1;
        -1 == this.Ga && (a.ctrlKey && 17 != a.keyCode ? this.Ga = 17 : a.altKey && 18 != a.keyCode ? this.Ga = 18 : a.metaKey && 91 != a.keyCode && (this.Ga = 91));
        jl && !bl(a.keyCode, this.Ga, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.ib = cl(a.keyCode), kl && (this.pe = a.altKey))
    };
    v.ii = function (a) {
        this.ib = this.Ga = -1;
        this.pe = a.altKey
    };
    v.handleEvent = function (a) {
        var b = a.h, c = b.altKey;
        if (D && a.type == xb) {
            var d = this.ib;
            var e = 13 != d && 27 != d ? b.keyCode : 0
        } else (F || pf) && a.type == xb ? (d = this.ib, e = 0 <= b.charCode && 63232 > b.charCode && al(d) ? b.charCode : 0) : of && !F ? (d = this.ib, e = al(d) ? b.keyCode : 0) : (a.type == xb ? (kl && (c = this.pe), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.ib, e = b.charCode) : (d = b.keyCode || this.ib, e = b.charCode || 0)) : (d = b.keyCode || this.ib, e = b.charCode || 0), sf && 63 == e && 224 == d && (d = 191));
        var f = d = cl(d);
        d ? 63232 <= d && d in hl ? f = hl[d] : 25 == d &&
            a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in il && (f = il[b.keyIdentifier]);
        E && jl && a.type == xb && !bl(f, this.Ga, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.Ga, this.Ga = f, b = new el(f, e, a, b), b.altKey = c, this.dispatchEvent(b))
    };
    v.s = function () {
        return this.F
    };

    function gl(a, b, c) {
        a.Jd && ll(a);
        a.F = b;
        a.Id = P(a.F, xb, a, c);
        a.Pe = P(a.F, wb, a.hi, c, a);
        a.Jd = P(a.F, "keyup", a.ii, c, a)
    }

    function ll(a) {
        a.Id && (dk(a.Id), dk(a.Pe), dk(a.Jd), a.Id = null, a.Pe = null, a.Jd = null);
        a.F = null;
        a.Ga = -1;
        a.ib = -1
    }

    v.L = function () {
        fl.G.L.call(this);
        ll(this)
    };

    function ml() {
    }

    yc(ml);
    ml.prototype.g = 0;

    function R(a) {
        Q.call(this);
        this.h = a || Kh();
        this.ua = nl;
        this.T = null;
        this.$ = !1;
        this.F = null;
        this.P = void 0;
        this.M = this.C = this.H = this.Ta = null;
        this.Db = !1
    }

    B(R, Q);
    R.prototype.Vb = ml.da();
    var nl = null;

    function ol(a, b) {
        switch (a) {
            case 1:
                return b ? "disable" : "enable";
            case 2:
                return b ? "highlight" : "unhighlight";
            case 4:
                return b ? "activate" : "deactivate";
            case 8:
                return b ? "select" : "unselect";
            case 16:
                return b ? "check" : "uncheck";
            case 32:
                return b ? cb : Ja;
            case 64:
                return b ? "open" : "close"
        }
        throw Error("Invalid component state");
    }

    function pl(a) {
        return a.T || (a.T = ":" + (a.Vb.g++).toString(36))
    }

    function ql(a, b) {
        if (a.H && a.H.M) {
            var c = a.H.M, d = a.T;
            d in c && delete c[d];
            jd(a.H.M, b, a)
        }
        a.T = b
    }

    v = R.prototype;
    v.s = function () {
        return this.F
    };

    function rl(a, b) {
        return a.F ? Qh(b, a.F || a.h.g) : null
    }

    function S(a) {
        a.P || (a.P = new Uk(a));
        return a.P
    }

    function sl(a, b) {
        if (a == b) throw Error(va);
        if (b && a.H && a.T && tl(a.H, a.T) && a.H != b) throw Error(va);
        a.H = b;
        R.G.mf.call(a, b)
    }

    v.yb = function () {
        return this.H
    };
    v.mf = function (a) {
        if (this.H && this.H != a) throw Error("Method not supported");
        R.G.mf.call(this, a)
    };
    v.J = function () {
        this.F = Ci(this.h, g)
    };
    v.la = function (a) {
        ul(this, a)
    };

    function ul(a, b, c) {
        if (a.$) throw Error(ja);
        a.F || a.J();
        b ? b.insertBefore(a.F, c || null) : a.h.g.body.appendChild(a.F);
        a.H && !a.H.$ || a.U()
    }

    function vl(a, b) {
        if (a.$) throw Error(ja);
        if (b && a.$d(b)) {
            a.Db = !0;
            var c = K(b);
            a.h && a.h.g == c || (a.h = Kh(b));
            a.Y(b);
            a.U()
        } else throw Error("Invalid element to decorate");
    }

    v.$d = function () {
        return !0
    };
    v.Y = function (a) {
        this.F = a
    };
    v.U = function () {
        this.$ = !0;
        wl(this, function (a) {
            !a.$ && a.s() && a.U()
        })
    };
    v.ea = function () {
        wl(this, function (a) {
            a.$ && a.ea()
        });
        this.P && Zk(this.P);
        this.$ = !1
    };
    v.L = function () {
        this.$ && this.ea();
        this.P && (this.P.R(), delete this.P);
        wl(this, function (a) {
            a.R()
        });
        !this.Db && this.F && hi(this.F);
        this.H = this.Ta = this.F = this.M = this.C = null;
        R.G.L.call(this)
    };

    function T(a, b) {
        return pl(a) + "." + b
    }

    v.Ac = function (a, b) {
        this.me(a, xl(this), b)
    };
    v.me = function (a, b, c) {
        if (a.$ && (c || !this.$)) throw Error(ja);
        if (0 > b || b > xl(this)) throw Error("Child component index out of bounds");
        this.M && this.C || (this.M = {}, this.C = []);
        if (a.yb() == this) {
            var d = pl(a);
            this.M[d] = a;
            Yc(this.C, a)
        } else jd(this.M, pl(a), a);
        sl(a, this);
        ad(this.C, b, 0, a);
        a.$ && this.$ && a.yb() == this ? (c = this.Wc(), (c.childNodes[b] || null) != a.s() && (a.s().parentElement == c && c.removeChild(a.s()), b = c.childNodes[b] || null, c.insertBefore(a.s(), b))) : c ? (this.F || this.J(), b = yl(this, b + 1), ul(a, this.Wc(), b ? b.F : null)) :
            this.$ && !a.$ && a.F && a.F.parentNode && 1 == a.F.parentNode.nodeType && a.U()
    };
    v.Wc = function () {
        return this.F
    };

    function zl(a) {
        null == a.ua && (a.ua = gj(a.$ ? a.F : a.h.g.body));
        return a.ua
    }

    function xl(a) {
        return a.C ? a.C.length : 0
    }

    function tl(a, b) {
        a.M && b ? (a = a.M, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
        return b
    }

    function yl(a, b) {
        return a.C ? a.C[b] || null : null
    }

    function wl(a, b, c) {
        a.C && Rc(a.C, b, c)
    }

    function Al(a, b) {
        return a.C && b ? Qc(a.C, b) : -1
    }

    v.ae = function (a, b) {
        if (a) {
            var c = typeof a === t ? a : pl(a);
            a = tl(this, c);
            if (c && a) {
                var d = this.M;
                c in d && delete d[c];
                Yc(this.C, a);
                b && (a.ea(), a.F && hi(a.F));
                sl(a, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    v.Rc = function (a) {
        for (var b = []; this.C && 0 != this.C.length;) {
            var c = b, d = c.push;
            var e = this.ae(yl(this, 0), a);
            d.call(c, e)
        }
        return b
    };

    function Bl() {
    }

    var Cl;
    yc(Bl);
    var Dl = {
        button: "pressed",
        checkbox: Qa,
        menuitem: Qb,
        menuitemcheckbox: Qa,
        menuitemradio: Qa,
        radio: Qa,
        tab: Qb,
        treeitem: Qb
    };
    v = Bl.prototype;
    v.Xb = function () {
    };
    v.J = function (a) {
        return a.h.J(g, El(this, a).join(" "), a.ka())
    };
    v.zb = function (a) {
        return a
    };

    function Fl(a, b, c) {
        if (a = a.s ? a.s() : a) {
            var d = [b];
            D && !H("7") && (d = Gl(Ii(a), b), d.push(b));
            (c ? Li : Ni)(a, d)
        }
    }

    v.Xc = function () {
        return !0
    };
    v.Ja = function (a, b) {
        b.id && ql(a, b.id);
        var c = this.zb(b);
        c && c.firstChild ? Hl(a, c.firstChild.nextSibling ? $c(c.childNodes) : c.firstChild) : a.Ib = null;
        var d = 0, e = this.ia(), f = this.ia(), h = !1, k = !1, l = !1, m = $c(Ii(b));
        Rc(m, function (q) {
            h || q != e ? k || q != f ? d |= this.vd(q) : k = !0 : (h = !0, f == e && (k = !0));
            1 == this.vd(q) && xi(c) && yi(c) && wi(c, !1)
        }, this);
        a.aa = d;
        h || (m.push(e), f == e && (k = !0));
        k || m.push(f);
        (a = a.ze) && m.push.apply(m, a);
        if (D && !H("7")) {
            var n = Gl(m);
            0 < n.length && (m.push.apply(m, n), l = !0)
        }
        h && k && !a && !l || Ji(b, m.join(" "));
        return b
    };
    v.Df = function (a) {
        zl(a) && this.ce(a.s(), !0);
        a.isEnabled() && this.Yb(a, a.isVisible())
    };

    function Il(a, b, c) {
        if (a = c || a.Xb()) c = b.getAttribute("role") || null, a != c && Aj(b, a)
    }

    function Jl(a, b, c) {
        b.isVisible() || Bj(c, qb, !b.isVisible());
        b.isEnabled() || a.Za(c, 1, !b.isEnabled());
        b.ga & 8 && a.Za(c, 8, !!(b.aa & 8));
        b.ga & 16 && a.Za(c, 16, !!(b.aa & 16));
        b.ga & 64 && a.Za(c, 64, !!(b.aa & 64))
    }

    v.Yc = function (a, b) {
        ij(a, !b, !D && !of)
    };
    v.ce = function (a, b) {
        Fl(a, this.ia() + "-rtl", b)
    };
    v.be = function (a) {
        var b;
        return a.ga & 32 && (b = a.s()) ? xi(b) && yi(b) : !1
    };
    v.Yb = function (a, b) {
        var c;
        if (a.ga & 32 && (c = a.s())) {
            if (!b && a.aa & 32) {
                try {
                    c.blur()
                } catch (d) {
                }
                a.aa & 32 && a.Ef(null)
            }
            (xi(c) && yi(c)) != b && wi(c, b)
        }
    };
    v.O = function (a, b) {
        N(a, b);
        a && Bj(a, qb, !b)
    };
    v.uc = function (a, b, c) {
        var d = a.s();
        if (d) {
            var e = this.Lc(b);
            e && Fl(a, e, c);
            this.Za(d, b, c)
        }
    };
    v.Za = function (a, b, c) {
        Cl || (Cl = {1: "disabled", 8: Qb, 16: Qa, 64: "expanded"});
        b = Cl[b];
        var d = a.getAttribute("role") || null;
        d && (d = Dl[d] || b, b = b == Qa || b == Qb ? d : b);
        b && Bj(a, b, c)
    };
    v.sc = function (a, b) {
        var c = this.zb(a);
        c && (ei(c), b && (typeof b === t ? ti(c, b) : (a = function (d) {
            if (d) {
                var e = K(c);
                c.appendChild(typeof d === t ? e.createTextNode(d) : d)
            }
        }, Array.isArray(b) ? Rc(b, a) : !Ac(b) || "nodeType" in b ? a(b) : Rc($c(b), a))))
    };
    v.ia = function () {
        return "goog-control"
    };

    function El(a, b) {
        var c = a.ia(), d = [c], e = a.ia();
        e != c && d.push(e);
        c = b.aa;
        for (e = []; c;) {
            var f = c & -c;
            e.push(a.Lc(f));
            c &= ~f
        }
        d.push.apply(d, e);
        (a = b.ze) && d.push.apply(d, a);
        D && !H("7") && d.push.apply(d, Gl(d));
        return d
    }

    function Gl(a, b) {
        var c = [];
        b && (a = Zc(a, [b]));
        Rc([], function (d) {
            !Vc(d, Hc(Xc, a)) || b && !Xc(d, b) || c.push(d.join("_"))
        });
        return c
    }

    v.Lc = function (a) {
        this.g || Kl(this);
        return this.g[a]
    };
    v.vd = function (a) {
        if (!this.j) {
            this.g || Kl(this);
            var b = this.g, c = {}, d;
            for (d in b) c[b[d]] = d;
            this.j = c
        }
        a = parseInt(this.j[a], 10);
        return isNaN(a) ? 0 : a
    };

    function Kl(a) {
        var b = a.ia();
        b.replace(/\xa0|\s/g, " ");
        a.g = {
            1: b + ba,
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    };

    function Ll() {
    }

    B(Ll, Bl);
    yc(Ll);
    v = Ll.prototype;
    v.Xb = function () {
        return La
    };
    v.Za = function (a, b, c) {
        switch (b) {
            case 8:
            case 16:
                Bj(a, "pressed", c);
                break;
            default:
            case 64:
            case 1:
                Ll.G.Za.call(this, a, b, c)
        }
    };
    v.J = function (a) {
        var b = Ll.G.J.call(this, a);
        this.Sd(b, a.ba());
        var c = a.Ca();
        c && this.za(b, c);
        a.ga & 16 && this.Za(b, 16, !!(a.aa & 16));
        return b
    };
    v.Ja = function (a, b) {
        b = Ll.G.Ja.call(this, a, b);
        var c = this.Ca(b);
        a.m = c;
        a.A = this.ba(b);
        a.ga & 16 && this.Za(b, 16, !!(a.aa & 16));
        return b
    };
    v.Ca = y;
    v.za = y;
    v.ba = function (a) {
        return a.title
    };
    v.Sd = function (a, b) {
        a && (b ? a.title = b : a.removeAttribute("title"))
    };
    v.ia = function () {
        return "goog-button"
    };

    function Ml(a, b) {
        if (!a) throw Error("Invalid class name " + a);
        if (typeof b !== p) throw Error("Invalid decorator function " + b);
        Nl[a] = b
    }

    var Ol = {}, Nl = {};

    function V(a, b, c) {
        R.call(this, c);
        if (!b) {
            for (b = this.constructor; b;) {
                var d = Cc(b);
                if (d = Ol[d]) break;
                b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor
            }
            b = d ? typeof d.da === p ? d.da() : new d : null
        }
        this.g = b;
        this.Ib = void 0 !== a ? a : null
    }

    B(V, R);
    v = V.prototype;
    v.Ib = null;
    v.aa = 0;
    v.ga = 39;
    v.rb = 255;
    v.Vc = 0;
    v.ma = !0;
    v.ze = null;
    v.He = !0;
    v.gd = !1;

    function Pl(a, b) {
        a.$ && b != a.He && Ql(a, b);
        a.He = b
    }

    v.J = function () {
        var a = this.g.J(this);
        this.F = a;
        Il(this.g, a, this.Nc());
        this.gd || this.g.Yc(a, !1);
        this.isVisible() || this.g.O(a, !1)
    };
    v.Nc = function () {
        return null
    };
    v.Wc = function () {
        return this.g.zb(this.s())
    };
    v.$d = function (a) {
        return this.g.Xc(a)
    };
    v.Y = function (a) {
        this.F = a = this.g.Ja(this, a);
        Il(this.g, a, this.Nc());
        this.gd || this.g.Yc(a, !1);
        this.ma = a.style.display != r
    };
    v.U = function () {
        V.G.U.call(this);
        Jl(this.g, this, this.F);
        this.g.Df(this);
        if (this.ga & -2 && (this.He && Ql(this, !0), this.ga & 32)) {
            var a = this.s();
            if (a) {
                var b = this.l || (this.l = new fl);
                gl(b, a);
                S(this).D(b, "key", this.Ia).D(a, cb, this.fh).D(a, Ja, this.Ef)
            }
        }
    };

    function Ql(a, b) {
        var c = S(a), d = a.s();
        b ? (c.D(d, Gj.$b, a.wc).D(d, [Gj.ac, Gj.zc], a.fc).D(d, Cb, a.de).D(d, Bb, a.Ie), a.Pc != y && c.D(d, Wa, a.Pc), D && (H(9) || c.D(d, Xa, a.gg), a.o || (a.o = new Rl(a), Dj(a, Hc(Cj, a.o))))) : (c.ha(d, Gj.$b, a.wc).ha(d, [Gj.ac, Gj.zc], a.fc).ha(d, Cb, a.de).ha(d, Bb, a.Ie), a.Pc != y && c.ha(d, Wa, a.Pc), D && (H(9) || c.ha(d, Xa, a.gg), Cj(a.o), a.o = null))
    }

    v.ea = function () {
        V.G.ea.call(this);
        this.l && ll(this.l);
        this.isVisible() && this.isEnabled() && this.g.Yb(this, !1)
    };
    v.L = function () {
        V.G.L.call(this);
        this.l && (this.l.R(), delete this.l);
        delete this.g;
        this.o = this.ze = this.Ib = null
    };
    v.ka = function () {
        return this.Ib
    };
    v.Jb = function (a) {
        this.g.sc(this.s(), a);
        this.Ib = a
    };

    function Hl(a, b) {
        a.Ib = b
    }

    v.gb = function () {
        var a = this.ka();
        if (!a) return "";
        a = typeof a === t ? a : Array.isArray(a) ? Tc(a, Bi).join("") : zi(a);
        return We(a)
    };
    v.Pg = function (a) {
        this.Jb(a)
    };
    v.isVisible = function () {
        return this.ma
    };
    v.O = function (a, b) {
        return b || this.ma != a && this.dispatchEvent(a ? "show" : rb) ? ((b = this.s()) && this.g.O(b, a), this.isEnabled() && this.g.Yb(this, a), this.ma = a, !0) : !1
    };
    v.isEnabled = function () {
        return !(this.aa & 1)
    };
    v.pa = function (a) {
        var b = this.yb();
        b && typeof b.isEnabled == p && !b.isEnabled() || !Sl(this, 1, !a) || (a || (Tl(this, !1), Ul(this, !1)), this.isVisible() && this.g.Yb(this, a), Vl(this, 1, !a, !0))
    };

    function Ul(a, b) {
        Sl(a, 2, b) && Vl(a, 2, b)
    }

    function Tl(a, b) {
        Sl(a, 4, b) && Vl(a, 4, b)
    }

    function Wl(a, b) {
        Sl(a, 64, b) && Vl(a, 64, b)
    }

    function Vl(a, b, c, d) {
        d || 1 != b ? a.ga & b && c != !!(a.aa & b) && (a.g.uc(a, b, c), a.aa = c ? a.aa | b : a.aa & ~b) : a.pa(!c)
    }

    v.ta = function (a, b) {
        if (this.$ && this.aa & a && !b) throw Error(ja);
        !b && this.aa & a && Vl(this, a, !1);
        this.ga = b ? this.ga | a : this.ga & ~a
    };

    function Xl(a, b) {
        return !!(a.rb & b) && !!(a.ga & b)
    }

    function Sl(a, b, c) {
        return !!(a.ga & b) && !!(a.aa & b) != c && (!(a.Vc & b) || a.dispatchEvent(ol(b, c))) && !a.wa
    }

    v.de = function (a) {
        !Yl(a, this.s()) && this.dispatchEvent("enter") && this.isEnabled() && Xl(this, 2) && Ul(this, !0)
    };
    v.Ie = function (a) {
        !Yl(a, this.s()) && this.dispatchEvent("leave") && (Xl(this, 4) && Tl(this, !1), Xl(this, 2) && Ul(this, !1))
    };
    v.Pc = y;

    function Yl(a, b) {
        return !!a.relatedTarget && mi(b, a.relatedTarget)
    }

    v.wc = function (a) {
        this.isEnabled() && (Xl(this, 2) && Ul(this, !0), 0 != a.h.button || sf && a.ctrlKey || (Xl(this, 4) && Tl(this, !0), this.g && this.g.be(this) && this.s().focus()));
        this.gd || 0 != a.h.button || sf && a.ctrlKey || a.g()
    };
    v.fc = function (a) {
        this.isEnabled() && (Xl(this, 2) && Ul(this, !0), this.aa & 4 && this.oc(a) && Xl(this, 4) && Tl(this, !1))
    };
    v.gg = function (a) {
        this.isEnabled() && this.oc(a)
    };
    v.oc = function (a) {
        if (Xl(this, 16)) {
            var b = !(this.aa & 16);
            Sl(this, 16, b) && Vl(this, 16, b)
        }
        Xl(this, 8) && Sl(this, 8, !0) && Vl(this, 8, !0);
        Xl(this, 64) && Wl(this, !(this.aa & 64));
        b = new Ej(Aa, this);
        a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.l = a.l);
        return this.dispatchEvent(b)
    };
    v.fh = function () {
        Xl(this, 32) && Sl(this, 32, !0) && Vl(this, 32, !0)
    };
    v.Ef = function () {
        Xl(this, 4) && Tl(this, !1);
        Xl(this, 32) && Sl(this, 32, !1) && Vl(this, 32, !1)
    };
    v.Ia = function (a) {
        return this.isVisible() && this.isEnabled() && this.vc(a) ? (a.g(), a.stopPropagation(), !0) : !1
    };
    v.vc = function (a) {
        return 13 == a.keyCode && this.oc(a)
    };
    if (typeof V !== p) throw Error("Invalid component class " + V);
    if (typeof Bl !== p) throw Error("Invalid renderer class " + Bl);
    var Zl = Cc(V);
    Ol[Zl] = Bl;
    Ml("goog-control", function () {
        return new V(null)
    });

    function Rl(a) {
        O.call(this);
        this.h = a;
        this.g = !1;
        this.j = new Uk(this);
        Dj(this, Hc(Cj, this.j));
        a = this.h.F;
        this.j.D(a, Gj.$b, this.m).D(a, Gj.ac, this.o).D(a, Sa, this.l)
    }

    B(Rl, O);
    var $l = !D || Gf(9);
    Rl.prototype.m = function () {
        this.g = !1
    };
    Rl.prototype.o = function () {
        this.g = !0
    };

    function am(a, b) {
        if (!$l) return a.button = 0, a.type = b, a;
        var c = document.createEvent("MouseEvents");
        c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
        return c
    }

    Rl.prototype.l = function (a) {
        if (this.g) this.g = !1; else {
            var b = a.h, c = b.button, d = b.type, e = am(b, zb);
            this.h.wc(new Hj(e, a.currentTarget));
            e = am(b, "mouseup");
            this.h.fc(new Hj(e, a.currentTarget));
            $l || (b.button = c, b.type = d)
        }
    };
    Rl.prototype.L = function () {
        this.h = null;
        Rl.G.L.call(this)
    };

    function bm() {
    }

    B(bm, Ll);
    yc(bm);
    v = bm.prototype;
    v.Xb = function () {
    };
    v.J = function (a) {
        Pl(a, !1);
        a.rb &= -256;
        a.ta(32, !1);
        return a.h.J("BUTTON", {
            "class": El(this, a).join(" "),
            disabled: !a.isEnabled(),
            title: a.ba() || "",
            value: a.Ca() || ""
        }, a.gb() || "")
    };
    v.Xc = function (a) {
        return "BUTTON" == a.tagName || a.tagName == na && (a.type == La || "submit" == a.type || "reset" == a.type)
    };
    v.Ja = function (a, b) {
        Pl(a, !1);
        a.rb &= -256;
        a.ta(32, !1);
        if (b.disabled) {
            var c = this.Lc(1);
            L(b, c)
        }
        return bm.G.Ja.call(this, a, b)
    };
    v.Df = function (a) {
        S(a).D(a.s(), Sa, a.oc)
    };
    v.Yc = y;
    v.ce = y;
    v.be = function (a) {
        return a.isEnabled()
    };
    v.Yb = y;
    v.uc = function (a, b, c) {
        bm.G.uc.call(this, a, b, c);
        (a = a.s()) && 1 == b && (a.disabled = c)
    };
    v.Ca = function (a) {
        return a.value
    };
    v.za = function (a, b) {
        a && (a.value = b)
    };
    v.Za = y;

    function cm(a, b, c) {
        V.call(this, a, b || bm.da(), c)
    }

    B(cm, V);
    v = cm.prototype;
    v.Ca = function () {
        return this.m
    };
    v.za = function (a) {
        this.m = a;
        this.g.za(this.s(), a)
    };
    v.ba = function () {
        return this.A
    };
    v.Sd = function (a) {
        this.A = a;
        this.g.Sd(this.s(), a)
    };
    v.L = function () {
        cm.G.L.call(this);
        delete this.m;
        delete this.A
    };
    v.U = function () {
        cm.G.U.call(this);
        if (this.ga & 32) {
            var a = this.s();
            a && S(this).D(a, "keyup", this.vc)
        }
    };
    v.vc = function (a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.oc(a) : 32 == a.keyCode
    };
    Ml("goog-button", function () {
        return new cm(null)
    });

    function dm() {
    }

    B(dm, Ll);
    yc(dm);
    v = dm.prototype;
    v.J = function (a) {
        var b = El(this, a);
        b = a.h.J(g, hb + b.join(" "), em(this, a.ka(), a.h));
        this.Sd(b, a.ba());
        return b
    };
    v.Xb = function () {
        return La
    };
    v.zb = function (a) {
        return a && a.firstChild && a.firstChild.firstChild
    };

    function em(a, b, c) {
        return c.J(g, hb + (a.ia() + "-outer-box"), c.J(g, hb + (a.ia() + "-inner-box"), b))
    }

    v.Xc = function (a) {
        return a.tagName == g
    };
    v.Ja = function (a, b) {
        fm(b, !0);
        fm(b, !1);
        a:{
            var c = a.h.dg(b);
            var d = this.ia() + "-outer-box";
            if (c && Ki(c, d) && (c = a.h.dg(c), d = this.ia() + "-inner-box", c && Ki(c, d))) {
                c = !0;
                break a
            }
            c = !1
        }
        c || b.appendChild(em(this, b.childNodes, a.h));
        Li(b, ["goog-inline-block", this.ia()]);
        return dm.G.Ja.call(this, a, b)
    };
    v.ia = function () {
        return "goog-custom-button"
    };

    function fm(a, b) {
        if (a) for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
            d = b ? c.nextSibling : c.previousSibling;
            if (3 == c.nodeType) {
                var e = c.nodeValue;
                if ("" == Fd(e)) a.removeChild(c); else {
                    c.nodeValue = b ? Xe(e) : Ye(e);
                    break
                }
            } else break;
            c = d
        }
    };

    function gm(a, b, c) {
        cm.call(this, a, b || dm.da(), c);
        this.ta(16, !0)
    }

    B(gm, cm);
    Ml("goog-toggle-button", function () {
        return new gm(null)
    });

    function hm() {
    }

    hm.prototype.g = null;

    function jm(a) {
        var b;
        (b = a.g) || (b = {}, km(a) && (b[0] = !0, b[1] = !0), b = a.g = b);
        return b
    };var lm;

    function mm() {
    }

    B(mm, hm);

    function nm(a) {
        return (a = km(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }

    function km(a) {
        if (!a.h && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.h = d
                } catch (e) {
                }
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.h
    }

    lm = new mm;

    function om(a) {
        Q.call(this);
        this.headers = new ig;
        this.M = a || null;
        this.h = !1;
        this.H = this.g = null;
        this.m = "";
        this.j = 0;
        this.C = "";
        this.l = this.K = this.A = this.I = !1;
        this.o = 0;
        this.B = null;
        this.T = "";
        this.P = this.N = !1
    }

    B(om, Q);
    var pm = /^https?$/i, qm = [ra, "PUT"], rm = [];

    function sm(a, b, c, d, e) {
        var f = new om;
        rm.push(f);
        b && f.D(Ua, b);
        f.Eb(Nb, f.Ih);
        e && (f.o = Math.max(0, e));
        f.send(a, c, d, void 0)
    }

    v = om.prototype;
    v.Ih = function () {
        this.R();
        Yc(rm, this)
    };
    v.send = function (a, b, c, d) {
        if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.m + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.m = a;
        this.C = "";
        this.j = 0;
        this.I = !1;
        this.h = !0;
        this.g = this.M ? nm(this.M) : nm(lm);
        this.H = this.M ? jm(this.M) : jm(lm);
        this.g.onreadystatechange = A(this.Gg, this);
        try {
            this.K = !0, this.g.open(b, String(a), !0), this.K = !1
        } catch (f) {
            tm(this, f);
            return
        }
        a = c || "";
        var e = new ig(this.headers);
        d && pg(d, function (f, h) {
            e.set(h, f)
        });
        d = Wc(e.Va(), um);
        c = x.FormData && a instanceof x.FormData;
        !Xc(qm, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function (f, h) {
            this.g.setRequestHeader(h, f)
        }, this);
        this.T && (this.g.responseType = this.T);
        cc in this.g && this.g.withCredentials !== this.N && (this.g.withCredentials = this.N);
        try {
            vm(this), 0 < this.o && ((this.P = wm(this.g)) ? (this.g.timeout = this.o, this.g.ontimeout = A(this.Zg, this)) : this.B = Rk(this.Zg, this.o, this)), this.A = !0, this.g.send(a), this.A = !1
        } catch (f) {
            tm(this, f)
        }
    };

    function wm(a) {
        return D && H(9) && typeof a.timeout === Eb && void 0 !== a.ontimeout
    }

    function um(a) {
        return "content-type" == a.toLowerCase()
    }

    v.Zg = function () {
        "undefined" != typeof uc && this.g && (this.C = "Timed out after " + this.o + "ms, aborting", this.j = 8, this.dispatchEvent("timeout"), this.abort(8))
    };

    function tm(a, b) {
        a.h = !1;
        a.g && (a.l = !0, a.g.abort(), a.l = !1);
        a.C = b;
        a.j = 5;
        xm(a);
        ym(a)
    }

    function xm(a) {
        a.I || (a.I = !0, a.dispatchEvent(Ua), a.dispatchEvent("error"))
    }

    v.abort = function (a) {
        this.g && this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1, this.j = a || 7, this.dispatchEvent(Ua), this.dispatchEvent("abort"), ym(this))
    };
    v.L = function () {
        this.g && (this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1), ym(this, !0));
        om.G.L.call(this)
    };
    v.Gg = function () {
        this.wa || (this.K || this.A || this.l ? zm(this) : this.Xi())
    };
    v.Xi = function () {
        zm(this)
    };

    function zm(a) {
        if (a.h && "undefined" != typeof uc && (!a.H[1] || 4 != Am(a) || 2 != Bm(a))) if (a.A && 4 == Am(a)) Rk(a.Gg, 0, a); else if (a.dispatchEvent(Ob), 4 == Am(a)) {
            a.h = !1;
            try {
                if (Cm(a)) a.dispatchEvent(Ua), a.dispatchEvent("success"); else {
                    a.j = 6;
                    try {
                        var b = 2 < Am(a) ? a.g.statusText : ""
                    } catch (c) {
                        b = ""
                    }
                    a.C = b + " [" + Bm(a) + "]";
                    xm(a)
                }
            } finally {
                ym(a)
            }
        }
    }

    function ym(a, b) {
        if (a.g) {
            vm(a);
            var c = a.g, d = a.H[0] ? y : null;
            a.g = null;
            a.H = null;
            b || a.dispatchEvent(Nb);
            try {
                c.onreadystatechange = d
            } catch (e) {
            }
        }
    }

    function vm(a) {
        a.g && a.P && (a.g.ontimeout = null);
        a.B && (Sk(a.B), a.B = null)
    }

    function Cm(a) {
        var b = Bm(a);
        a:switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var c = !0;
                break a;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b) a = String(a.m).match(qg)[1] || null, !a && x.self && x.self.location && (a = x.self.location.protocol, a = a.substr(0, a.length - 1)), b = !pm.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    }

    function Am(a) {
        return a.g ? a.g.readyState : 0
    }

    function Bm(a) {
        try {
            return 2 < Am(a) ? a.g.status : -1
        } catch (b) {
            return -1
        }
    }

    function Dm(a) {
        try {
            return a.g ? a.g.responseText : ""
        } catch (b) {
            return ""
        }
    };

    function Em() {
    }

    yc(Em);

    function Fm(a) {
        Xf(this, a, null)
    }

    B(Fm, Vf);

    function Gm(a) {
        Xf(this, a, Hm)
    }

    B(Gm, Vf);
    var Hm = [3, 4];

    function Im(a) {
        Xf(this, a, Jm)
    }

    B(Im, Vf);
    var Jm = [3];

    function Km(a) {
        Xf(this, a, Lm)
    }

    B(Km, Vf);
    var Lm = [2];

    function Mm(a) {
        Xf(this, a, Nm)
    }

    B(Mm, Vf);
    var Nm = [26, 80];
    Mm.prototype.hb = function () {
        return $f(this, 16)
    };
    Mm.prototype.Tb = function (a) {
        ag(this, 16, a)
    };
    Mm.prototype.ra = function () {
        return $f(this, 1)
    };
    Mm.prototype.va = function (a) {
        ag(this, 1, a)
    };

    function Om() {
        this.j = this.g = "";
        Em.da()
    }

    Om.prototype.Tb = function (a) {
        this.g = a
    };
    Om.prototype.va = function (a) {
        this.j = a
    };
    Om.prototype.store = function (a) {
        ag(a, 65, 0);
        a.Tb(this.g);
        ag(a, 14, "");
        a.va(this.j);
        ag(a, 50, "");
        ag(a, 52, "");
        ag(a, 32, 0)
    };
    yc(Om);

    function Pm(a, b) {
        var c = a[b - 1];
        if (null == c || Qm(c)) a = a[a.length - 1], Qm(a) && (c = a[b]);
        return c
    }

    function Qm(a) {
        return Bc(a) && !Ac(a)
    };

    function Rm(a, b) {
        return a === b ? !0 : Vc(a, function (c, d) {
            if (Qm(c)) {
                d = c;
                for (var e in d) if (c = d[e], !Sm(c, Pm(b, +e))) return !1;
                return !0
            }
            return Sm(c, Pm(b, d + 1))
        }) && Vc(b, function (c, d) {
            if (Qm(c)) {
                for (var e in c) if (null == Pm(a, +e)) return !1;
                return !0
            }
            return null == c == (null == Pm(a, d + 1))
        })
    }

    function Sm(a, b) {
        return a === b || null == a && null == b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b) ? !0 : Array.isArray(a) && Array.isArray(b) ? Rm(a, b) : !1
    };

    function Tm() {
    }

    function Um(a, b, c) {
        a = a.g = b = b || [];
        if (a.length) {
            b = a.length - 1;
            var d = Qm(a[b]);
            b = d ? a[b] : {};
            d && a.length--;
            d = 0;
            for (var e in b) {
                var f = +e;
                f <= c ? (a[f - 1] = b[e], delete b[e]) : d++
            }
            if (a.length > c) {
                e = d;
                d = c;
                f = a.length - c;
                for (var h = 0; 0 < f; --f, ++d) null != a[d] && (b[d + 1] = a[d], delete a[d], h++);
                d = e + h;
                a.length = c
            }
            d && (a[c] = b)
        }
    }

    function Vm(a, b, c) {
        a = a.g[b];
        return null != a ? a : c
    }

    function Wm(a, b) {
        return !!Vm(a, b, void 0)
    }

    function Xm(a, b) {
        return +Vm(a, b, 0)
    }

    function Ym(a, b) {
        return Vm(a, b, "")
    }

    function Zm(a, b, c) {
        a = a.g;
        a[b] || (a[b] = []);
        return a[b][c]
    }

    function W(a, b) {
        return (a = a.g[b]) ? a.length : 0
    };new Uint8Array(0);

    function $m(a) {
        Um(this, a, 9)
    }

    B($m, Tm);

    function an() {
        O.call(this);
        this.g = Om.da()
    }

    w(an, O);
    an.prototype.h = function () {
        bn(this, 25)
    };

    function bn(a, b) {
        var c = new Mm;
        a.g.store(c);
        ag(c, 31, b);
        return c
    }

    yc(an);

    function cn() {
        this.h = [];
        this.g = {};
        this.l = !1;
        this.H = 1;
        this.o = {};
        this.j = null;
        this.m = "";
        P(window, "beforeunload", this.B, !1, this)
    }

    function dn(a, b, c) {
        if (null == b) return "1";
        switch (zc(b)) {
            case t:
                return a = b, 64 < a.length && (null == c || !c) && (a = a.substr(0, 64)), Ze(a);
            case Eb:
                return "" + b;
            case "boolean":
                return b ? "1" : "0";
            case Ea:
                var d = [], e;
                for (e in b) d.push(dn(a, b[e], c));
                return d.join(",");
            case Fb:
                d = [];
                for (e in b) d.push(en(a, e, b[e], c));
                return d.join(",");
            default:
                return ""
        }
    }

    function en(a, b, c, d) {
        return [Ze(b), dn(a, c, d || "smtalt" == b)].join("=")
    }

    cn.prototype.log = function (a, b) {
        this.h.push([a, b]);
        this.l || (this.l = !0, Rk(this.A, 0, this))
    };
    cn.prototype.A = function () {
        for (var a = 0; a < this.h.length; a++) {
            var b = this.h[a];
            fn(this, b[0], b[1])
        }
        this.h = [];
        this.l = !1
    };

    function fn(a, b, c) {
        gn(a, a.m + "/gen204?" + (a.j ? ["client=", a.j, "&"].join("") : "") + en(a, b, c))
    }

    function gn(a, b) {
        var c = new Image, d = a.H++;
        a.o[d] = c;
        c.onload = c.onerror = function () {
            delete cn.da().o[d]
        };
        c.src = b;
        c = null
    }

    function hn(a, b) {
        var c = 0, d = null;
        b in a.g && (d = a.g[b], c = d[0], d = d[1]);
        if (zc(1) == Fb) {
            zc(d) != Fb && (d = {});
            for (var e in 1) d[e] = jn(e in d ? d[e] : null, 1[e])
        } else d = jn(d, 1);
        a.g[b] = [c, d];
        Sk(a.g[b][0]);
        c = Rk(A(a.C, a, b), 2E3);
        a.g[b][0] = c
    }

    cn.prototype.C = function (a) {
        fn(this, a, this.g[a][1]);
        a in this.g && (Sk(this.g[a][0]), delete this.g[a])
    };

    function jn(a, b) {
        null == b && (b = 1);
        isNaN(a) && (a = parseInt(a, 10));
        isNaN(b) && (b = parseInt(b, 10));
        return a + b
    }

    cn.prototype.B = function () {
        this.A();
        for (var a in this.g) 0 != this.g[a] && this.C(a)
    };
    yc(cn);

    function kn() {
        this.g = []
    }

    kn.prototype.add = function (a) {
        this.g.push(a)
    };

    function ln() {
        this.g = []
    }

    w(ln, kn);
    ln.prototype.add = function (a) {
        if (a) for (; a();) ;
    };
    yc(ln);

    function mn(a) {
        this.g = [];
        this.h = .5;
        nn(this, a);
        this.l = 0;
        this.j = !0;
        this.m = A(this.o, this)
    }

    w(mn, kn);

    function nn(a, b) {
        1 < b ? a.h = 1 : .001 > b ? a.h = .001 : b && (a.h = b)
    }

    mn.prototype.add = function (a) {
        kn.prototype.add.call(this, a);
        this.j && on(this)
    };

    function on(a) {
        a.j = !1;
        window.setTimeout(a.m, Math.min(a.l, 5E3))
    }

    mn.prototype.o = function () {
        var a = (new Date).getTime();
        do {
            this.g.length && (this.g[0] && this.g[0]() || this.g.shift());
            var b = !!this.g.length;
            var c = 95 * this.h + 5;
            var d = (new Date).getTime() - a
        } while (b && d < c);
        this.l = Math.ceil(d * (1 / this.h - 1)) + 1;
        b ? on(this) : this.j = !0
    };

    function pn(a, b) {
        this.B = a || null;
        this.I = b || ln.da();
        this.A = this.o = this.M = null;
        this.l = this.j = !1;
        this.m = null;
        this.g = [];
        this.h = 0
    }

    function qn(a, b) {
        a.j || (a.M = b)
    }

    function rn(a, b, c) {
        a.o = c ? A(b, c) : b
    }

    function sn(a, b, c) {
        a.A = c ? A(b, c) : b
    }

    function tn(a, b) {
        a.j || (a.j = !0, a.H = b, a.h++, a.m = a.M, a.C())
    }

    pn.prototype.stop = function () {
        this.h++;
        this.j = !1;
        this.g = []
    };

    function un(a) {
        if (!a.j) return null;
        for (var b = !1, c = 0; c < a.g.length; ++c) if (a.g[c].target === a) {
            a.g[c].ready = !1;
            a.g[c].ah = a.h + 1;
            b = !0;
            break
        }
        b || a.g.push({target: a, ready: !1, ah: a.h + 1});
        return A(a.C, a, a, a.h + 1)
    }

    function vn(a) {
        if (!a.j) return !0;
        for (var b = 0; b < a.g.length; ++b) if (a.g[b].target === a && a.g[b].ah == a.h) return a.g[b].ready;
        return !0
    }

    pn.prototype.C = function (a, b) {
        if (this.j) {
            if (a) for (var c = 0; c < this.g.length; ++c) if (this.g[c].target === a) {
                this.g[c].ready = !0;
                break
            }
            this.l || this.I.add(A(this.K, this, b || this.h))
        }
    };
    pn.prototype.K = function (a) {
        if (this.h != a) return !1;
        a = this.m;
        if (a == wn) return this.stop(), this.o && this.o.call(this.B, this, this.H), !1;
        this.l = !0;
        try {
            var b = a.call(this.B, this, this.H);
            if (!b) throw Error();
        } catch (c) {
            this.stop();
            a = c;
            if (this.A) this.A.call(this.B, a, this, this.H); else throw a;
            return !1
        } finally {
            this.l = !1
        }
        b != xn && (this.m = b, this.h++, this.C());
        return !1
    };

    function xn() {
    }

    function wn() {
    };

    function yn() {
        Q.call(this);
        this.g = 0;
        this.endTime = this.h = null
    }

    B(yn, Q);
    yn.prototype.j = function () {
        this.Ua("begin")
    };
    yn.prototype.l = function () {
        this.Ua("end")
    };
    yn.prototype.Fb = function () {
        this.Ua("stop")
    };
    yn.prototype.Ua = function (a) {
        this.dispatchEvent(a)
    };

    function zn(a, b) {
        Array.isArray(b) || (b = [b]);
        b = Tc(b, function (c) {
            return typeof c === t ? c : c.fk + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        M(a, Zb, b.join(","))
    }

    var An = cd(function () {
        if (D) return H("10.0");
        var a = $h(document, g), b = F ? "-webkit" : E ? "-moz" : D ? "-ms" : of ? "-o" : null, c = {transition: Gb};
        b && (c[b + "-transition"] = Gb);
        b = Ge(Za, {style: c});
        Te(a, b);
        a = a.firstChild;
        b = a.style[gf(Zb)];
        return "" != ("undefined" !== typeof b ? b : a.style[Ri(a, Zb)] || "")
    });

    function Bn(a, b, c, d, e) {
        yn.call(this);
        this.F = a;
        this.A = b;
        this.C = c;
        this.m = d;
        this.B = Array.isArray(e) ? e : [e]
    }

    B(Bn, yn);
    v = Bn.prototype;
    v.play = function () {
        if (1 == this.g) return !1;
        this.j();
        this.Ua("play");
        this.h = Ic();
        this.g = 1;
        if (An()) return M(this.F, this.C), this.o = Rk(this.bj, void 0, this), !0;
        this.uf(!1);
        return !1
    };
    v.bj = function () {
        cj(this.F);
        zn(this.F, this.B);
        M(this.F, this.m);
        this.o = Rk(A(this.uf, this, !1), 1E3 * this.A)
    };
    v.stop = function () {
        1 == this.g && this.uf(!0)
    };
    v.uf = function (a) {
        M(this.F, Zb, "");
        Sk(this.o);
        M(this.F, this.m);
        this.endTime = Ic();
        this.g = 0;
        a ? this.Fb() : this.Ua($a);
        this.l()
    };
    v.L = function () {
        this.stop();
        Bn.G.L.call(this)
    };

    function Cn(a, b) {
        Q.call(this);
        this.o = new Uk(this);
        this.Zb(a || null);
        b && (this.rc = b)
    }

    B(Cn, Q);
    v = Cn.prototype;
    v.F = null;
    v.Bc = !0;
    v.Rf = null;
    v.jc = !1;
    v.Qe = -1;
    v.rc = Wb;
    v.s = function () {
        return this.F
    };
    v.Zb = function (a) {
        Dn(this);
        this.F = a
    };
    v.Tc = function (a) {
        Dn(this);
        this.Bc = a
    };

    function Dn(a) {
        if (a.jc) throw Error("Can not change this state of the popup while showing.");
    }

    v.isVisible = function () {
        return this.jc
    };
    v.O = function (a) {
        this.ya && this.ya.stop();
        this.ua && this.ua.stop();
        if (a) {
            if (!this.jc && this.ee()) {
                if (!this.F) throw Error("Caller must call setElement before trying to show the popup");
                this.kb();
                a = K(this.F);
                if (this.Bc) if (this.o.D(a, zb, this.$e, !0), D) {
                    try {
                        var b = a.activeElement
                    } catch (d) {
                    }
                    for (; b && b.nodeName == ma;) {
                        try {
                            var c = ri(b)
                        } catch (d) {
                            break
                        }
                        a = c;
                        b = a.activeElement
                    }
                    this.o.D(a, zb, this.$e, !0);
                    this.o.D(a, "deactivate", this.Fg)
                } else this.o.D(a, Ja, this.Fg);
                this.rc == Wb ? (this.F.style.visibility = bc, N(this.F, !0)) : this.rc ==
                    Db && this.kb();
                this.jc = !0;
                this.Qe = Ic();
                this.ya ? (Vj(this.ya, "end", this.Hg, !1, this), this.ya.play()) : this.Hg()
            }
        } else En(this)
    };
    v.kb = y;

    function En(a, b) {
        a.jc && a.dispatchEvent({
            type: "beforehide",
            target: b
        }) && (a.o && Zk(a.o), a.jc = !1, a.ua ? (Vj(a.ua, "end", Hc(a.Vf, b), !1, a), a.ua.play()) : a.Vf(b))
    }

    v.Vf = function (a) {
        this.rc == Wb ? this.Ai() : this.rc == Db && (this.F.style.top = "-10000px");
        this.af(a)
    };
    v.Ai = function () {
        this.F.style.visibility = qb;
        N(this.F, !1)
    };
    v.ee = function () {
        return this.dispatchEvent("beforeshow")
    };
    v.Hg = function () {
        this.dispatchEvent("show")
    };
    v.af = function (a) {
        this.dispatchEvent({type: rb, target: a})
    };
    v.$e = function (a) {
        a = a.target;
        mi(this.F, a) || Fn(this, a) || 150 > Ic() - this.Qe || En(this, a)
    };
    v.Fg = function (a) {
        var b = K(this.F);
        if ("undefined" != typeof document.activeElement) {
            if (a = b.activeElement, !a || mi(this.F, a) || "BODY" == a.tagName || Fn(this, a)) return
        } else if (a.target != b) return;
        150 > Ic() - this.Qe || En(this)
    };

    function Fn(a, b) {
        return Uc(a.Rf || [], function (c) {
            return b === c || mi(c, b)
        })
    }

    v.L = function () {
        Cn.G.L.call(this);
        this.o.R();
        Cj(this.ya);
        Cj(this.ua);
        delete this.F;
        delete this.o;
        delete this.Rf
    };

    function Gn(a, b) {
        this.C = b || void 0;
        Cn.call(this, a)
    }

    B(Gn, Cn);
    Gn.prototype.kb = function () {
        if (this.C) {
            var a = !this.isVisible() && this.rc != Db, b = this.s();
            a && (b.style.visibility = qb, N(b, !0));
            this.C.h(b, 8, this.Te);
            a && N(b, !1)
        }
    };

    function Hn(a, b) {
        Gn.call(this, a);
        this.j = b;
        this.g = 0;
        this.h = null;
        this.l = 0;
        this.O(!0);
        this.O(!1);
        L(this.s(), "round-trip-popup");
        L(this.j, "round-trip-content")
    }

    w(Hn, Gn);
    Hn.prototype.B = function () {
        Sk(this.l);
        1 == this.g ? Vj(this.h, $a, A(this.B, this)) : 0 == this.g && (this.l = Rk(A(this.A, this, -1), 200))
    };
    Hn.prototype.A = function (a) {
        if (this.g != a && (0 != this.g || !(this.isVisible() && 1 == a || !this.isVisible() && -1 == a))) {
            var b = this.isVisible();
            this.O(!0);
            var c = -Math.ceil(cj(this.j).width);
            gj(this.s()) && (c = -c);
            var d = 1 == a ? c : 0;
            c = 1 == a ? 0 : c;
            this.O(b);
            if (An()) {
                b = .2;
                if (0 != this.g) {
                    var e = parseInt(Ti(this.j, "left"), 10);
                    this.m();
                    b *= (c - e) / (c - d);
                    d = e
                }
                this.g = a;
                this.h = new Bn(this.j, b, {left: d + "px"}, {left: c + "px"}, "left " + b + "s");
                this.h.play();
                Vj(this.h, $a, A(this.m, this));
                -1 == a ? Vj(this.h, $a, A(this.O, this, !1)) : this.O(!0)
            } else M(this.j,
                "left", c + "px"), this.O(1 == a ? !0 : !1)
        }
    };
    Hn.prototype.m = function () {
        0 != this.g && (this.h.stop(), Rk(A(ek, this, this.h)), this.g = 0, this.h = null)
    };

    function In(a) {
        Um(this, a, 4)
    }

    B(In, Tm);

    function Jn(a) {
        Um(this, a, 2)
    }

    B(Jn, Tm);

    function Kn(a) {
        Um(this, a, 7)
    }

    B(Kn, Tm);

    function Ln(a, b) {
        return new In(Zm(a, 2, b))
    };

    function Mn(a) {
        Um(this, a, 21)
    }

    B(Mn, Tm);

    function Nn(a, b) {
        return new Kn(Zm(a, 5, b))
    };

    function On() {
        this.F = null;
        this.g = Yh(g, "gt-hl-layer", document.createTextNode(""));
        this.h = null;
        this.F && (fi(this.g, this.F), Pn(this))
    }

    function Qn(a, b, c, d, e) {
        var f = d || "gt-hl-text";
        d = a.F && (a.F.value || zi(a.F));
        Pn(a);
        ei(a.g);
        if (b != c || e) {
            if (0 < b) {
                var h = d.substring(0, b);
                Rn(a.g, h, 0, e)
            }
            b < c && (h = d.substring(b, c), f = Yh(sa, f), Rn(f, h, b, e), a.g.appendChild(f));
            c < d.length && (h = d.substring(c), Rn(a.g, h, c, e))
        }
    }

    function Pn(a) {
        var b = a.F;
        var c = K(b), d = D && b.currentStyle;
        d && Uh(Kh(c).g) && d.width != Fa && d.height != Fa && !d.boxSizing ? (c = oj(b, d.width, "width", "pixelWidth"), b = oj(b, d.height, "height", "pixelHeight"), b = new Jh(c, b)) : (d = jj(b), c = mj(b), b = nj(b), b = new Jh(d.width - b.left - c.left - c.right - b.right, d.height - b.top - c.top - c.bottom - b.bottom));
        kj(a.g, b);
        c = aj(a.F);
        b = a.g;
        d = c.x;
        c = c.y;
        var e = aj(b);
        d instanceof J && (c = d.y, d = d.x);
        Vi(b, b.offsetLeft + (d - e.x), b.offsetTop + (Number(c) - e.y));
        b = mj(a.F);
        M(a.g, Hb, b.left + "px");
        M(a.g, Ib, b.right +
            "px");
        a.g.dir = a.F.dir
    }

    function Rn(a, b, c, d) {
        d = d || [];
        for (var e = 0, f; f = d[e]; e++) if (!(0 > f.Ic - c)) {
            if (f.Ic - c >= b.length) break;
            if (0 < f.Ic - c) {
                var h = b.substring(0, f.Ic - c);
                Sn(a, h)
            }
            var k = f.className || "gt-hl-text";
            h = b.substring(f.Ic - c, f.vf - c);
            var l = Yh(sa);
            Ji(l, k);
            Sn(l, h);
            a.appendChild(l);
            b = b.substring(f.vf - c);
            c = f.vf
        }
        b && Sn(a, b)
    }

    function Sn(a, b) {
        b = b.replace(/(\r\n|\r|\n)/g, "\n").split("\n");
        for (var c = 0, d = b.length; c < d; c++) {
            if (0 < c) {
                var e = Yh("BR");
                a.appendChild(e)
            }
            a.appendChild(document.createTextNode(String(b[c])))
        }
    };

    function Tn(a, b, c, d, e) {
        this.A = !!b;
        this.node = null;
        this.m = 0;
        this.Wd = !1;
        this.M = !c;
        a && Un(this, a, d);
        this.depth = void 0 != e ? e : this.m || 0;
        this.A && (this.depth *= -1)
    }

    B(Tn, fg);

    function Un(a, b, c, d) {
        if (a.node = b) a.m = typeof c === Eb ? c : 1 != a.node.nodeType ? 0 : a.A ? -1 : 1;
        typeof d === Eb && (a.depth = d)
    }

    Tn.prototype.C = function () {
        var a = this.A ? -1 : 1;
        this.m == a && (this.m = -1 * a, this.depth += this.m * (this.A ? -1 : 1))
    };
    Tn.prototype.next = function () {
        if (this.Wd) {
            if (!this.node || this.M && 0 == this.depth) throw eg;
            var a = this.node;
            var b = this.A ? -1 : 1;
            if (this.m == b) {
                var c = this.A ? a.lastChild : a.firstChild;
                c ? Un(this, c) : Un(this, a, -1 * b)
            } else (c = this.A ? a.previousSibling : a.nextSibling) ? Un(this, c) : Un(this, a.parentNode, -1 * b);
            this.depth += this.m * (this.A ? -1 : 1)
        } else this.Wd = !0;
        a = this.node;
        if (!this.node) throw eg;
        return a
    };

    function Vn() {
    }

    function Wn(a) {
        for (var b = [], c = 0, d = a.Oc(); c < d; c++) b.push(a.dc(c));
        return b
    }

    function Xn(a) {
        return a.Oe() ? a.Ka() : a.ab()
    }

    Vn.prototype.Oe = function () {
        return !1
    };

    function Yn(a, b) {
        Tn.call(this, a, b, !0)
    }

    B(Yn, Tn);

    function Zn(a, b, c, d, e) {
        this.h = this.g = null;
        this.l = this.j = 0;
        this.o = !!e;
        if (a) {
            this.g = a;
            this.j = b;
            this.h = c;
            this.l = d;
            if (1 == a.nodeType && "BR" != a.tagName) if (a = a.childNodes, b = a[b]) this.g = b, this.j = 0; else {
                a.length && (this.g = Pc(a));
                var f = !0
            }
            1 == c.nodeType && ((this.h = c.childNodes[d]) ? this.l = 0 : this.h = c)
        }
        Tn.call(this, this.o ? this.h : this.g, this.o, !0);
        if (f) try {
            this.next()
        } catch (h) {
            if (h != eg) throw h;
        }
    }

    B(Zn, Yn);
    Zn.prototype.H = function () {
        return this.g
    };
    Zn.prototype.B = function () {
        return this.Wd && (this.node != (this.o ? this.g : this.h) ? !1 : this.o ? this.j ? -1 != this.m : 1 == this.m : !this.l || 1 != this.m)
    };
    Zn.prototype.next = function () {
        if (this.B()) throw eg;
        return Zn.G.next.call(this)
    };
    Zn.prototype.C = function () {
        Zn.G.C.apply(this);
        if (mi(this.node, this.o ? this.g : this.h)) throw eg;
    };

    function $n() {
    }

    function ao(a, b) {
        b = b.Jc();
        try {
            return 0 <= a.fb(b, 0, 0) && 0 >= a.fb(b, 1, 1)
        } catch (c) {
            if (!D) throw c;
            return !1
        }
    }

    $n.prototype.Ma = function () {
        return new Zn(this.Qa(), this.mb(), this.lb(), this.Ab())
    };

    function bo(a) {
        this.g = a
    }

    B(bo, $n);

    function co(a) {
        var b = K(a).createRange();
        if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length); else if (eo(a)) {
            for (var c, d = a; (c = d.firstChild) && eo(c);) d = c;
            b.setStart(d, 0);
            for (d = a; (c = d.lastChild) && eo(c);) d = c;
            b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
        } else c = a.parentNode, a = Qc(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
        return b
    }

    function fo(a, b, c, d) {
        var e = K(a).createRange();
        e.setStart(a, b);
        e.setEnd(c, d);
        return e
    }

    v = bo.prototype;
    v.Jc = function () {
        return this.g
    };
    v.fe = function () {
        return this.g.commonAncestorContainer
    };
    v.Qa = function () {
        return this.g.startContainer
    };
    v.mb = function () {
        return this.g.startOffset
    };
    v.lb = function () {
        return this.g.endContainer
    };
    v.Ab = function () {
        return this.g.endOffset
    };
    v.fb = function (a, b, c) {
        return this.g.compareBoundaryPoints(1 == c ? 1 == b ? x.Range.START_TO_START : x.Range.START_TO_END : 1 == b ? x.Range.END_TO_START : x.Range.END_TO_END, a)
    };
    v.Ra = function () {
        return this.g.collapsed
    };
    v.Ff = function () {
        return this.g.toString()
    };
    v.select = function (a) {
        var b = Xh(K(this.Qa()));
        this.Sc(b.getSelection(), a)
    };
    v.Sc = function (a) {
        a.removeAllRanges();
        a.addRange(this.g)
    };

    function go(a) {
        this.g = a
    }

    B(go, bo);
    go.prototype.Sc = function (a, b) {
        !b || this.Ra() ? go.G.Sc.call(this, a, b) : (a.collapse(this.lb(), this.Ab()), a.extend(this.Qa(), this.mb()))
    };

    function ho(a) {
        this.h = this.g = this.o = null;
        this.l = this.j = -1;
        this.m = a
    }

    B(ho, $n);

    function io(a) {
        var b = K(a).body.createTextRange();
        if (1 == a.nodeType) b.moveToElementText(a), eo(a) && !a.childNodes.length && b.collapse(!1); else {
            for (var c = 0, d = a; d = d.previousSibling;) {
                var e = d.nodeType;
                if (3 == e) c += d.length; else if (1 == e) {
                    b.moveToElementText(d);
                    break
                }
            }
            d || b.moveToElementText(a.parentNode);
            b.collapse(!d);
            c && b.move(Pa, c);
            b.moveEnd(Pa, a.length)
        }
        return b
    }

    v = ho.prototype;
    v.Jc = function () {
        return this.m
    };
    v.fe = function () {
        if (!this.o) {
            var a = this.m.text, b = this.m.duplicate(), c = a.replace(/ +$/, "");
            (c = a.length - c.length) && b.moveEnd(Pa, -c);
            c = b.parentElement();
            b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
            if (this.Ra() && 0 < b) return this.o = c;
            for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) c = c.parentNode;
            for (; 1 == c.childNodes.length && c.innerText == jo(c.firstChild) && eo(c.firstChild);) c = c.firstChild;
            0 == a.length && (c = ko(this, c));
            this.o = c
        }
        return this.o
    };

    function ko(a, b) {
        for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
            var f = c[d];
            if (eo(f)) {
                var h = io(f), k = h.htmlText != f.outerHTML;
                if (a.Ra() && k ? 0 <= a.fb(h, 1, 1) && 0 >= a.fb(h, 1, 0) : a.m.inRange(h)) return ko(a, f)
            }
        }
        return b
    }

    v.Qa = function () {
        this.g || (this.g = lo(this, 1), this.Ra() && (this.h = this.g));
        return this.g
    };
    v.mb = function () {
        0 > this.j && (this.j = mo(this, 1), this.Ra() && (this.l = this.j));
        return this.j
    };
    v.lb = function () {
        if (this.Ra()) return this.Qa();
        this.h || (this.h = lo(this, 0));
        return this.h
    };
    v.Ab = function () {
        if (this.Ra()) return this.mb();
        0 > this.l && (this.l = mo(this, 0), this.Ra() && (this.j = this.l));
        return this.l
    };
    v.fb = function (a, b, c) {
        return this.m.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
    };

    function lo(a, b, c) {
        c = c || a.fe();
        if (!c || !c.firstChild) return c;
        for (var d = 1 == b, e = 0, f = c.childNodes.length; e < f; e++) {
            var h = d ? e : f - e - 1, k = c.childNodes[h];
            try {
                var l = no(k)
            } catch (n) {
                continue
            }
            var m = l.Jc();
            if (a.Ra()) if (!eo(k)) {
                if (0 == a.fb(m, 1, 1)) {
                    a.j = a.l = h;
                    break
                }
            } else {
                if (ao(l, a)) return lo(a, b, k)
            } else {
                if (ao(a, l)) {
                    if (!eo(k)) {
                        d ? a.j = h : a.l = h + 1;
                        break
                    }
                    return lo(a, b, k)
                }
                if (0 > a.fb(m, 1, 0) && 0 < a.fb(m, 0, 1)) return lo(a, b, k)
            }
        }
        return c
    }

    function mo(a, b) {
        var c = 1 == b, d = c ? a.Qa() : a.lb();
        if (1 == d.nodeType) {
            d = d.childNodes;
            for (var e = d.length, f = c ? 1 : -1, h = c ? 0 : e - 1; 0 <= h && h < e; h += f) {
                var k = d[h];
                if (!eo(k) && 0 == a.m.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), no(k).Jc())) return c ? h : h + 1
            }
            return -1 == h ? 0 : h
        }
        a = a.m.duplicate();
        b = io(d);
        a.setEndPoint(c ? "EndToEnd" : "StartToStart", b);
        a = a.text.length;
        return c ? d.length - a : a
    }

    function jo(a) {
        return 3 == a.nodeType ? a.nodeValue : a.innerText
    }

    v.Ra = function () {
        return 0 == this.m.compareEndPoints("StartToEnd", this.m)
    };
    v.Ff = function () {
        return this.m.text
    };
    v.select = function () {
        this.m.select()
    };

    function oo(a) {
        this.g = a
    }

    B(oo, bo);
    oo.prototype.Sc = function (a) {
        a.collapse(this.Qa(), this.mb());
        this.lb() == this.Qa() && this.Ab() == this.mb() || a.extend(this.lb(), this.Ab());
        0 == a.rangeCount && a.addRange(this.g)
    };

    function po(a) {
        this.g = a
    }

    B(po, bo);
    po.prototype.fb = function (a, b, c) {
        return H("528") ? po.G.fb.call(this, a, b, c) : this.g.compareBoundaryPoints(1 == c ? 1 == b ? x.Range.START_TO_START : x.Range.END_TO_START : 1 == b ? x.Range.START_TO_END : x.Range.END_TO_END, a)
    };
    po.prototype.Sc = function (a, b) {
        b ? a.setBaseAndExtent(this.lb(), this.Ab(), this.Qa(), this.mb()) : a.setBaseAndExtent(this.Qa(), this.mb(), this.lb(), this.Ab())
    };

    function qo(a) {
        return Gh ? new ho(a, K(a.parentElement())) : F ? new po(a) : E ? new go(a) : of ? new oo(a) : new bo(a)
    }

    function no(a) {
        if (D && !Gf(9)) {
            var b = new ho(io(a), K(a));
            if (eo(a)) {
                for (var c, d = a; (c = d.firstChild) && eo(c);) d = c;
                b.g = d;
                b.j = 0;
                for (d = a; (c = d.lastChild) && eo(c);) d = c;
                b.h = d;
                b.l = 1 == d.nodeType ? d.childNodes.length : d.length;
                b.o = a
            } else b.g = b.h = b.o = a.parentNode, b.j = Qc(b.o.childNodes, a), b.l = b.j + 1;
            a = b
        } else a = F ? new po(co(a)) : E ? new go(co(a)) : of ? new oo(co(a)) : new bo(co(a));
        return a
    }

    function eo(a) {
        return ci(a) || 3 == a.nodeType
    };

    function ro() {
        this.l = this.h = this.j = this.g = this.m = null;
        this.o = !1
    }

    B(ro, Vn);

    function so(a, b) {
        var c = new ro;
        c.m = a;
        c.o = !!b;
        return c
    }

    v = ro.prototype;
    v.Be = function () {
        return to(this).Jc()
    };
    v.Oc = function () {
        return 1
    };
    v.dc = function () {
        return this
    };

    function to(a) {
        var b;
        if (!(b = a.m)) {
            b = a.Ka();
            var c = a.La(), d = a.ab(), e = a.bb();
            if (D && !Gf(9)) {
                var f = b, h = c, k = d, l = e, m = !1;
                1 == f.nodeType && (h = f.childNodes[h], m = !h, f = h || f.lastChild || f, h = 0);
                var n = io(f);
                h && n.move(Pa, h);
                f == k && h == l ? n.collapse(!0) : (m && n.collapse(!1), m = !1, 1 == k.nodeType && (k = (h = k.childNodes[l]) || k.lastChild || k, l = 0, m = !h), f = io(k), f.collapse(!m), l && f.moveEnd(Pa, l), n.setEndPoint("EndToEnd", f));
                l = new ho(n, K(b));
                l.g = b;
                l.j = c;
                l.h = d;
                l.l = e;
                b = l
            } else b = F ? new po(fo(b, c, d, e)) : E ? new go(fo(b, c, d, e)) : of ? new oo(fo(b,
                c, d, e)) : new bo(fo(b, c, d, e));
            b = a.m = b
        }
        return b
    }

    v.Zc = function () {
        return to(this).fe()
    };
    v.Ka = function () {
        return this.g || (this.g = to(this).Qa())
    };
    v.La = function () {
        return null != this.j ? this.j : this.j = to(this).mb()
    };
    v.ab = function () {
        return this.h || (this.h = to(this).lb())
    };
    v.bb = function () {
        return null != this.l ? this.l : this.l = to(this).Ab()
    };
    v.Oe = function () {
        return this.o
    };
    v.ad = function () {
        return to(this).Ra()
    };
    v.$c = function () {
        return to(this).Ff()
    };
    v.Ma = function () {
        return new Zn(this.Ka(), this.La(), this.ab(), this.bb())
    };
    v.select = function () {
        to(this).select(this.o)
    };

    function uo() {
    }

    B(uo, Vn);

    function vo() {
        this.j = this.h = this.g = null
    }

    B(vo, uo);
    v = vo.prototype;
    v.Be = function () {
        return this.g || document.body.createControlRange()
    };
    v.Oc = function () {
        return this.g ? this.g.length : 0
    };
    v.dc = function (a) {
        a = this.g.item(a);
        return so(no(a), void 0)
    };
    v.Zc = function () {
        return qi.apply(null, this.De())
    };
    v.Ka = function () {
        return wo(this)[0]
    };
    v.La = function () {
        return 0
    };
    v.ab = function () {
        var a = wo(this), b = Pc(a);
        return Wc(a, function (c) {
            return mi(c, b)
        })
    };
    v.bb = function () {
        return this.ab().childNodes.length
    };
    v.De = function () {
        if (!this.h && (this.h = [], this.g)) for (var a = 0; a < this.g.length; a++) this.h.push(this.g.item(a));
        return this.h
    };

    function wo(a) {
        a.j || (a.j = a.De().concat(), a.j.sort(function (b, c) {
            return b.sourceIndex - c.sourceIndex
        }));
        return a.j
    }

    v.ad = function () {
        return !this.g || !this.g.length
    };
    v.$c = function () {
        return ""
    };
    v.Ma = function () {
        return new xo(this)
    };
    v.select = function () {
        this.g && this.g.select()
    };

    function xo(a) {
        this.j = this.h = this.g = null;
        a && (this.j = wo(a), this.g = this.j.shift(), this.h = Pc(this.j) || this.g);
        Tn.call(this, this.g, !1, !0)
    }

    B(xo, Yn);
    xo.prototype.H = function () {
        return this.g
    };
    xo.prototype.B = function () {
        return !this.depth && !this.j.length
    };
    xo.prototype.next = function () {
        if (this.B()) throw eg;
        if (!this.depth) {
            var a = this.j.shift();
            Un(this, a, 1, 1);
            return a
        }
        return xo.G.next.call(this)
    };

    function yo() {
        this.g = [];
        this.l = [];
        this.j = this.h = null
    }

    B(yo, uo);
    v = yo.prototype;
    v.Be = function () {
        return this.g[0]
    };
    v.Oc = function () {
        return this.g.length
    };
    v.dc = function (a) {
        this.l[a] || (this.l[a] = so(qo(this.g[a]), void 0));
        return this.l[a]
    };
    v.Zc = function () {
        if (!this.j) {
            for (var a = [], b = 0, c = this.Oc(); b < c; b++) a.push(this.dc(b).Zc());
            this.j = qi.apply(null, a)
        }
        return this.j
    };

    function zo(a) {
        a.h || (a.h = Wn(a), a.h.sort(function (b, c) {
            var d = b.Ka();
            b = b.La();
            var e = c.Ka();
            c = c.La();
            return d == e && b == c ? 0 : Ao(d, b, e, c) ? 1 : -1
        }));
        return a.h
    }

    v.Ka = function () {
        return zo(this)[0].Ka()
    };
    v.La = function () {
        return zo(this)[0].La()
    };
    v.ab = function () {
        return Pc(zo(this)).ab()
    };
    v.bb = function () {
        return Pc(zo(this)).bb()
    };
    v.ad = function () {
        return 0 == this.g.length || 1 == this.g.length && this.dc(0).ad()
    };
    v.$c = function () {
        return Tc(Wn(this), function (a) {
            return a.$c()
        }).join("")
    };
    v.Ma = function () {
        return new Bo(this)
    };
    v.select = function () {
        var a = Xh(K(D ? this.Zc() : this.Ka())).getSelection();
        a.removeAllRanges();
        for (var b = 0, c = this.Oc(); b < c; b++) a.addRange(this.dc(b).Be())
    };

    function Bo(a) {
        this.g = null;
        this.h = 0;
        a && (this.g = Tc(zo(a), function (b) {
            return gg(b)
        }));
        Tn.call(this, a ? this.H() : null, !1, !0)
    }

    B(Bo, Yn);
    Bo.prototype.H = function () {
        return this.g[0].H()
    };
    Bo.prototype.B = function () {
        return this.g[this.h].B()
    };
    Bo.prototype.next = function () {
        try {
            var a = this.g[this.h], b = a.next();
            Un(this, a.node, a.m, a.depth);
            return b
        } catch (c) {
            if (c !== eg || this.g.length - 1 == this.h) throw c;
            this.h++;
            return this.next()
        }
    };

    function Co() {
        var a = window.getSelection();
        return a && Do(a)
    }

    function Do(a) {
        var b = !1;
        if (a.createRange) try {
            var c = a.createRange()
        } catch (e) {
            return null
        } else if (a.rangeCount) {
            if (1 < a.rangeCount) {
                b = new yo;
                c = 0;
                for (var d = a.rangeCount; c < d; c++) b.g.push(a.getRangeAt(c));
                return b
            }
            c = a.getRangeAt(0);
            b = Ao(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
        } else return null;
        (a = c) && a.addElement ? (b = new vo, b.g = a, a = b) : a = so(qo(a), b);
        return a
    }

    function Ao(a, b, c, d) {
        if (a == c) return d < b;
        var e;
        if (1 == a.nodeType && b) if (e = a.childNodes[b]) a = e, b = 0; else if (mi(a, c)) return !0;
        if (1 == c.nodeType && d) if (e = c.childNodes[d]) c = e, d = 0; else if (mi(c, a)) return !1;
        return 0 < (ni(a, c) || b - d)
    };

    function Eo() {
        var a = Co();
        return null != a && !a.ad() && 0 < a.$c().length
    };

    function Fo(a) {
        Q.call(this);
        this.F = a;
        a = D ? eb : Ja;
        this.g = P(this.F, D ? db : cb, this, !D);
        this.h = P(this.F, a, this, !D)
    }

    B(Fo, Q);
    Fo.prototype.handleEvent = function (a) {
        var b = new Hj(a.h);
        b.type = a.type == db || a.type == cb ? db : eb;
        this.dispatchEvent(b)
    };
    Fo.prototype.L = function () {
        Fo.G.L.call(this);
        dk(this.g);
        dk(this.h);
        delete this.F
    };

    function Go(a, b, c) {
        this.j = a;
        this.l = b;
        this.C = c
    }

    B(Go, Oi);
    Go.prototype.h = function (a, b, c) {
        vj(this.j, this.l, a, b, void 0, c, this.C)
    };

    function Ho(a, b) {
        this.g = a instanceof J ? a : new J(a, b)
    }

    B(Ho, Oi);
    Ho.prototype.h = function (a, b, c) {
        vj(Xi(a), 0, a, b, this.g, c, null, void 0)
    };

    function Io() {
        this.g = new ig
    }

    function Jo(a) {
        var b = typeof a;
        return b == Fb && a || b == p ? "o" + Cc(a) : b.substr(0, 1) + a
    }

    v = Io.prototype;
    v.add = function (a) {
        this.g.set(Jo(a), a)
    };
    v.remove = function (a) {
        return this.g.remove(Jo(a))
    };
    v.contains = function (a) {
        return kg(this.g, Jo(a))
    };
    v.Fa = function () {
        return this.g.Fa()
    };
    v.Ma = function () {
        return this.g.Ma(!1)
    };

    function Ko(a, b, c) {
        this.S = c || (a ? Kh(Mh(document, a)) : Kh());
        Gn.call(this, this.S.J(g, {style: "position:absolute;display:none;"}));
        this.Db = new J(1, 1);
        this.B = new Io;
        this.M = null;
        a && Lo(this, a);
        null != b && this.Oa(b)
    }

    B(Ko, Gn);
    var Mo = [];
    v = Ko.prototype;
    v.Aa = null;
    v.className = "goog-tooltip";
    v.Tg = 500;
    v.tg = 0;

    function Lo(a, b) {
        b = Mh(document, b);
        a.B.add(b);
        P(b, Cb, a.ge, !1, a);
        P(b, Bb, a.ec, !1, a);
        P(b, Ab, a.kg, !1, a);
        P(b, cb, a.Gf, !1, a);
        P(b, Ja, a.ec, !1, a)
    }

    function No(a, b) {
        if (b) b = Mh(document, b), Oo(a, b), a.B.remove(b); else {
            for (var c = a.B.Fa(), d = 0; b = c[d]; d++) Oo(a, b);
            mg(a.B.g)
        }
    }

    function Oo(a, b) {
        ck(b, Cb, a.ge, !1, a);
        ck(b, Bb, a.ec, !1, a);
        ck(b, Ab, a.kg, !1, a);
        ck(b, cb, a.Gf, !1, a);
        ck(b, Ja, a.ec, !1, a)
    }

    v.Oa = function (a) {
        ti(this.s(), a)
    };
    v.Zb = function (a) {
        var b = this.s();
        b && hi(b);
        Ko.G.Zb.call(this, a);
        a ? (b = this.S.g.body, b.insertBefore(a, b.lastChild), Cj(this.M), this.M = new Fo(this.s()), Dj(this, Hc(Cj, this.M)), P(this.M, db, this.cc, void 0, this), P(this.M, eb, this.Vd, void 0, this)) : (Cj(this.M), this.M = null)
    };
    v.xc = function () {
        return zi(this.s())
    };

    function Po(a) {
        return a.T ? a.isVisible() ? 4 : 1 : a.ja ? 3 : a.isVisible() ? 2 : 0
    }

    v.ee = function () {
        if (!Cn.prototype.ee.call(this)) return !1;
        if (this.h) for (var a, b = 0; a = Mo[b]; b++) mi(a.s(), this.h) || a.O(!1);
        Xc(Mo, this) || Mo.push(this);
        a = this.s();
        a.className = this.className;
        this.cc();
        P(a, Cb, this.Ed, !1, this);
        P(a, Bb, this.Dd, !1, this);
        Qo(this);
        return !0
    };
    v.af = function () {
        Yc(Mo, this);
        for (var a = this.s(), b, c = 0; b = Mo[c]; c++) b.h && mi(a, b.h) && b.O(!1);
        this.kd && this.kd.Vd();
        ck(a, Cb, this.Ed, !1, this);
        ck(a, Bb, this.Dd, !1, this);
        this.h = void 0;
        0 == Po(this) && (this.Sa = !1);
        Cn.prototype.af.call(this)
    };
    v.We = function (a, b) {
        this.h == a && this.B.contains(this.h) && (this.Sa || !this.Sf ? (this.O(!1), this.isVisible() || (this.h = a, this.C = b || new Ro(Hh(this.Db)), this.isVisible() && this.kb(), this.O(!0))) : this.h = void 0);
        this.T = void 0
    };
    v.De = function () {
        return this.B
    };
    v.Ri = function (a) {
        this.ja = void 0;
        if (a == this.h) {
            a = this.S;
            var b = a.g;
            try {
                var c = b && b.activeElement;
                var d = c && c.nodeName ? c : null
            } catch (e) {
                d = null
            }
            d = d && this.s() && a.contains(this.s(), d);
            null != this.Aa && (this.Aa == this.s() || this.B.contains(this.Aa)) || d || this.bc && this.bc.Aa || this.O(!1)
        }
    };

    function So(a, b) {
        var c = Vh(a.S.g);
        a.Db.x = b.clientX + c.x;
        a.Db.y = b.clientY + c.y
    }

    v.ge = function (a) {
        var b = To(this, a.target);
        this.Aa = b;
        this.cc();
        b != this.h && (this.h = b, Uo(this, b), Vo(this), So(this, a))
    };

    function To(a, b) {
        try {
            for (; b && !a.B.contains(b);) b = b.parentNode;
            return b
        } catch (c) {
            return null
        }
    }

    v.kg = function (a) {
        So(this, a);
        this.Sa = !0
    };
    v.Gf = function (a) {
        this.Aa = a = To(this, a.target);
        this.Sa = !0;
        if (this.h != a) {
            this.h = a;
            var b = new Wo(this.Aa);
            this.cc();
            Uo(this, a, b);
            Vo(this)
        }
    };

    function Vo(a) {
        if (a.h) for (var b, c = 0; b = Mo[c]; c++) mi(b.s(), a.h) && (b.bc = a, a.kd = b)
    }

    v.ec = function (a) {
        var b = To(this, a.target), c = To(this, a.relatedTarget);
        b != c && (b == this.Aa && (this.Aa = null), Qo(this), this.Sa = !1, !this.isVisible() || a.relatedTarget && mi(this.s(), a.relatedTarget) ? this.h = void 0 : this.Vd())
    };
    v.Ed = function () {
        var a = this.s();
        this.Aa != a && (this.cc(), this.Aa = a)
    };
    v.Dd = function (a) {
        var b = this.s();
        this.Aa != b || a.relatedTarget && mi(b, a.relatedTarget) || (this.Aa = null, this.Vd())
    };

    function Uo(a, b, c) {
        a.T || (a.T = Rk(A(a.We, a, b, c), a.Tg))
    }

    function Qo(a) {
        a.T && (Sk(a.T), a.T = void 0)
    }

    v.Vd = function () {
        2 == Po(this) && (this.ja = Rk(A(this.Ri, this, this.h), this.tg))
    };
    v.cc = function () {
        this.ja && (Sk(this.ja), this.ja = void 0)
    };
    v.L = function () {
        this.O(!1);
        Qo(this);
        No(this);
        this.s() && hi(this.s());
        this.Aa = null;
        delete this.S;
        Ko.G.L.call(this)
    };

    function Ro(a, b) {
        Ho.call(this, a, b)
    }

    B(Ro, Ho);
    Ro.prototype.h = function (a, b, c) {
        b = Xi(a);
        b = $i(b);
        c = c ? new Pi(c.top + 10, c.right, c.bottom, c.left + 10) : new Pi(10, 0, 0, 10);
        yj(this.g, a, 8, c, b, 9) & 496 && yj(this.g, a, 8, c, b, 5)
    };

    function Wo(a) {
        Go.call(this, a, 5)
    }

    B(Wo, Go);
    Wo.prototype.h = function (a, b, c) {
        var d = new J(10, 0);
        vj(this.j, this.l, a, b, d, c, 9) & 496 && vj(this.j, 4, a, 1, d, c, 5)
    };

    function Xo() {
        this.h = []
    }

    B(Xo, Bl);
    yc(Xo);

    function Yo(a, b) {
        var c = a.h[b];
        if (!c) {
            switch (b) {
                case 0:
                    c = a.ia() + "-highlight";
                    break;
                case 1:
                    c = a.ia() + "-checkbox";
                    break;
                case 2:
                    c = a.ia() + "-content"
            }
            a.h[b] = c
        }
        return c
    }

    v = Xo.prototype;
    v.Xb = function () {
        return "menuitem"
    };
    v.J = function (a) {
        var b = a.h.J(g, El(this, a).join(" "), Zo(this, a.ka(), a.h));
        $o(this, a, b, !!(a.ga & 8) || !!(a.ga & 16));
        return b
    };
    v.zb = function (a) {
        return a && a.firstChild
    };
    v.Ja = function (a, b) {
        var c = ji(b), d = Yo(this, 2);
        c && Ki(c, d) || b.appendChild(Zo(this, b.childNodes, a.h));
        Ki(b, kb) && (a.Rd(!0), this.Rd(a, b, !0));
        return Xo.G.Ja.call(this, a, b)
    };
    v.sc = function (a, b) {
        var c = this.zb(a), d = ap(this, a) ? c.firstChild : null;
        Xo.G.sc.call(this, a, b);
        d && !ap(this, a) && c.insertBefore(d, c.firstChild || null)
    };

    function Zo(a, b, c) {
        a = Yo(a, 2);
        return c.J(g, a, b)
    }

    v.Sg = function (a, b, c) {
        a && b && $o(this, a, b, c)
    };
    v.Rd = function (a, b, c) {
        a && b && $o(this, a, b, c)
    };

    function ap(a, b) {
        return (b = a.zb(b)) ? (b = b.firstChild, a = Yo(a, 1), !!b && li(b) && Ki(b, a)) : !1
    }

    function $o(a, b, c, d) {
        Il(a, c, b.Nc());
        Jl(a, b, c);
        d != ap(a, c) && (d ? L(c, kb) : Mi(c, kb), c = a.zb(c), d ? (a = Yo(a, 1), c.insertBefore(b.h.J(g, a), c.firstChild || null)) : c.removeChild(c.firstChild))
    }

    v.Lc = function (a) {
        switch (a) {
            case 2:
                return Yo(this, 0);
            case 16:
            case 8:
                return lb;
            default:
                return Xo.G.Lc.call(this, a)
        }
    };
    v.vd = function (a) {
        var b = Yo(this, 0);
        switch (a) {
            case lb:
                return 16;
            case b:
                return 2;
            default:
                return Xo.G.vd.call(this, a)
        }
    };
    v.ia = function () {
        return "goog-menuitem"
    };

    function bp(a, b, c, d) {
        V.call(this, a, d || Xo.da(), c);
        this.za(b)
    }

    B(bp, V);
    v = bp.prototype;
    v.Ca = function () {
        var a = this.Ta;
        return null != a ? a : this.gb()
    };
    v.za = function (a) {
        this.Ta = a
    };
    v.ta = function (a, b) {
        bp.G.ta.call(this, a, b);
        switch (a) {
            case 8:
                this.aa & 16 && !b && Sl(this, 16, !1) && Vl(this, 16, !1);
                (a = this.s()) && this.g.Sg(this, a, b);
                break;
            case 16:
                (a = this.s()) && this.g.Rd(this, a, b)
        }
    };
    v.Sg = function (a) {
        this.ta(8, a)
    };
    v.Rd = function (a) {
        this.ta(16, a)
    };
    v.gb = function () {
        var a = this.ka();
        return Array.isArray(a) ? (a = Tc(a, function (b) {
            return li(b) && (Ki(b, "goog-menuitem-accel") || Ki(b, "goog-menuitem-mnemonic-separator")) ? "" : Bi(b)
        }).join(""), We(a)) : bp.G.gb.call(this)
    };
    v.fc = function (a) {
        var b = this.yb();
        if (b) {
            var c = b.V;
            b.V = null;
            if (b = c && typeof a.clientX === Eb) b = new J(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
            if (b) return
        }
        bp.G.fc.call(this, a)
    };
    v.vc = function (a) {
        return a.keyCode == this.Dg && this.oc(a) ? !0 : bp.G.vc.call(this, a)
    };
    v.Sh = function () {
        return this.Dg
    };
    Ml("goog-menuitem", function () {
        return new bp(null)
    });
    bp.prototype.Nc = function () {
        return this.ga & 16 ? "menuitemcheckbox" : this.ga & 8 ? "menuitemradio" : bp.G.Nc.call(this)
    };
    bp.prototype.yb = function () {
        return V.prototype.yb.call(this)
    };
    bp.prototype.td = function () {
        return V.prototype.td.call(this)
    };

    function cp(a) {
        this.g = a
    }

    yc(cp);

    function dp(a, b) {
        a && (a.tabIndex = b ? 0 : -1)
    }

    v = cp.prototype;
    v.J = function (a) {
        var b = a.h, c = b.J, d = this.bd(), e = [d, a.Sb == sb ? d + "-horizontal" : d + "-vertical"];
        a.isEnabled() || e.push(d + ba);
        return c.call(b, g, e.join(" "))
    };
    v.he = function (a) {
        return a.tagName == g
    };

    function ep(a, b, c) {
        c.id && ql(b, c.id);
        var d = a.bd(), e = !1, f = Ii(c);
        f && Rc(f, function (h) {
            h == d ? e = !0 : h && (h == d + ba ? b.pa(!1) : h == d + "-horizontal" ? fp(b, sb) : h == d + "-vertical" && fp(b, ac))
        }, a);
        e || L(c, d);
        gp(a, b, c);
        return c
    }

    function gp(a, b, c) {
        if (c) for (var d = c.firstChild, e; d && d.parentNode == c;) {
            e = d.nextSibling;
            if (1 == d.nodeType) {
                var f = a.Ce(d);
                f && (f.F = d, b.isEnabled() || f.pa(!1), b.Ac(f), vl(f, d))
            } else d.nodeValue && "" != Fd(d.nodeValue) || c.removeChild(d);
            d = e
        }
    }

    v.Ce = function (a) {
        a:{
            a = Ii(a);
            for (var b = 0, c = a.length; b < c; b++) {
                var d = a[b];
                if (d = d in Nl ? Nl[d]() : null) {
                    a = d;
                    break a
                }
            }
            a = null
        }
        return a
    };
    v.ie = function (a) {
        a = a.s();
        ij(a, !0, E);
        D && (a.hideFocus = !0);
        var b = this.g;
        b && Aj(a, b)
    };
    v.bd = function () {
        return "goog-container"
    };

    function hp() {
    }

    B(hp, Bl);
    yc(hp);
    hp.prototype.J = function (a) {
        return a.h.J(g, this.ia())
    };
    hp.prototype.Ja = function (a, b) {
        b.id && ql(a, b.id);
        if ("HR" == b.tagName) {
            var c = b;
            b = this.J(a);
            fi(b, c);
            hi(c)
        } else L(b, this.ia());
        return b
    };
    hp.prototype.sc = function () {
    };
    hp.prototype.ia = function () {
        return jb
    };

    function ip(a, b) {
        V.call(this, null, a || hp.da(), b);
        this.ta(1, !1);
        this.ta(2, !1);
        this.ta(4, !1);
        this.ta(32, !1);
        this.aa = 1
    }

    B(ip, V);
    ip.prototype.U = function () {
        ip.G.U.call(this);
        var a = this.s();
        Aj(a, "separator")
    };
    Ml(jb, function () {
        return new ip
    });

    function jp(a) {
        this.g = a || "menu"
    }

    B(jp, cp);
    yc(jp);
    v = jp.prototype;
    v.he = function (a) {
        return "UL" == a.tagName || jp.G.he.call(this, a)
    };
    v.Ce = function (a) {
        return "HR" == a.tagName ? new ip : jp.G.Ce.call(this, a)
    };
    v.Ec = function (a, b) {
        return mi(a.s(), b)
    };
    v.bd = function () {
        return "goog-menu"
    };
    v.ie = function (a) {
        jp.G.ie.call(this, a);
        a = a.s();
        Bj(a, "haspopup", "true")
    };

    function kp(a, b, c, d) {
        Go.call(this, a, b);
        this.A = c ? 5 : 0;
        this.m = d || void 0
    }

    B(kp, Go);
    kp.prototype.o = function (a) {
        this.A = a
    };
    kp.prototype.h = function (a, b, c) {
        var d = vj(this.j, this.l, a, b, null, c, 10, void 0, this.m);
        if (d & 496) {
            var e = lp(d, this.l);
            b = lp(d, b);
            d = vj(this.j, e, a, b, null, c, 10, void 0, this.m);
            d & 496 && (e = lp(d, e), b = lp(d, b), vj(this.j, e, a, b, null, c, this.A, void 0, this.m))
        }
    };

    function lp(a, b) {
        a & 48 && (b ^= 4);
        a & 192 && (b ^= 1);
        return b
    };

    function mp(a, b) {
        this.g = a instanceof J ? a : new J(a, b)
    }

    B(mp, Oi);
    mp.prototype.h = function (a, b, c) {
        var d = K(a);
        var e = d.body;
        d = d.documentElement;
        d = new J(e.scrollLeft || d.scrollLeft, e.scrollTop || d.scrollTop);
        e = this.g.x + d.x;
        d = this.g.y + d.y;
        var f = wj(a);
        e -= f.x;
        d -= f.y;
        yj(new J(e, d), a, b, c, null, null, void 0)
    };

    function np(a, b) {
        mp.call(this, a, b)
    }

    B(np, mp);
    np.prototype.j = 0;
    np.prototype.o = function (a) {
        this.j = a
    };
    np.prototype.h = function (a, b, c) {
        var d = Xi(a);
        d = $i(d);
        var e = Wh(Kh(a).g);
        e = new J(this.g.x + e.scrollLeft, this.g.y + e.scrollTop);
        var f = b, h = yj(e, a, f, c, d, 10, void 0);
        if (0 != (h & 496)) {
            if (h & 16 || h & 32) f ^= 4;
            if (h & 64 || h & 128) f ^= 1;
            h = yj(e, a, f, c, d, 10, void 0);
            0 != (h & 496) && yj(e, a, b, c, d, this.j, void 0)
        }
    };

    function op(a, b, c) {
        R.call(this, c);
        this.Cb = b || cp.da();
        this.Sb = a || ac
    }

    B(op, R);
    v = op.prototype;
    v.kc = null;
    v.yc = null;
    v.Cb = null;
    v.Sb = null;
    v.ma = !0;
    v.Bb = !0;
    v.Nb = !0;
    v.na = -1;
    v.sa = null;
    v.lc = !1;
    v.sb = null;

    function X(a) {
        return a.kc || a.s()
    }

    function pp(a, b) {
        if (a.Nb) {
            var c = X(a), d = a.$;
            a.kc = b;
            var e = X(a);
            d && (a.kc = c, qp(a, !1), a.kc = b, gl(rp(a), e), qp(a, !0))
        } else throw Error("Can't set key event target for container that doesn't support keyboard focus!");
    }

    function rp(a) {
        return a.yc || (a.yc = new fl(X(a)))
    }

    v.J = function () {
        this.F = this.Cb.J(this)
    };
    v.Wc = function () {
        return this.s()
    };
    v.$d = function (a) {
        return this.Cb.he(a)
    };
    v.Y = function (a) {
        this.F = ep(this.Cb, this, a);
        a.style.display == r && (this.ma = !1)
    };
    v.U = function () {
        op.G.U.call(this);
        wl(this, function (b) {
            b.$ && sp(this, b)
        }, this);
        var a = this.s();
        this.Cb.ie(this);
        this.O(this.ma, !0);
        S(this).D(this, "enter", this.Fe).D(this, "highlight", this.Qc).D(this, "unhighlight", this.Je).D(this, "open", this.li).D(this, "close", this.$h).D(a, Gj.$b, this.gh).D(K(a), [Gj.ac, Gj.zc], this.bi).D(a, [Gj.$b, Gj.ac, Gj.zc, Cb, Bb, Wa], this.Yh);
        this.Nb && qp(this, !0)
    };

    function qp(a, b) {
        var c = S(a), d = X(a);
        b ? c.D(d, cb, a.Hf).D(d, Ja, a.cd).D(rp(a), "key", a.Ia) : c.ha(d, cb, a.Hf).ha(d, Ja, a.cd).ha(rp(a), "key", a.Ia)
    }

    v.ea = function () {
        this.Gb(-1);
        this.sa && Wl(this.sa, !1);
        this.lc = !1;
        op.G.ea.call(this)
    };
    v.L = function () {
        op.G.L.call(this);
        this.yc && (this.yc.R(), this.yc = null);
        this.Cb = this.sa = this.sb = this.kc = null
    };
    v.Fe = function () {
        return !0
    };
    v.Qc = function (a) {
        var b = Al(this, a.target);
        if (-1 < b && b != this.na) {
            var c = tp(this);
            c && Ul(c, !1);
            this.na = b;
            c = tp(this);
            this.lc && Tl(c, !0);
            this.sa && c != this.sa && (c.ga & 64 ? Wl(c, !0) : Wl(this.sa, !1))
        }
        b = this.s();
        null != a.target.s() && Bj(b, Ba, a.target.s().id)
    };
    v.Je = function (a) {
        a.target == tp(this) && (this.na = -1);
        this.s().removeAttribute("aria-activedescendant")
    };
    v.li = function (a) {
        (a = a.target) && a != this.sa && a.yb() == this && (this.sa && Wl(this.sa, !1), this.sa = a)
    };
    v.$h = function (a) {
        a.target == this.sa && (this.sa = null);
        var b = this.s(), c = a.target.s();
        b && a.target.aa & 2 && c && (a = "", c && (a = c.id), Bj(b, Ba, a))
    };
    v.gh = function (a) {
        this.Bb && (this.lc = !0);
        var b = X(this);
        b && xi(b) && yi(b) ? b.focus() : a.g()
    };
    v.bi = function () {
        this.lc = !1
    };
    v.Yh = function (a) {
        a:{
            var b = a.target;
            if (this.sb) for (var c = this.s(); b && b !== c;) {
                var d = b.id;
                if (d in this.sb) {
                    b = this.sb[d];
                    break a
                }
                b = b.parentNode
            }
            b = null
        }
        if (b) switch (a.type) {
            case Gj.$b:
                b.wc(a);
                break;
            case Gj.ac:
            case Gj.zc:
                b.fc(a);
                break;
            case Cb:
                b.de(a);
                break;
            case Bb:
                b.Ie(a);
                break;
            case Wa:
                b.Pc(a)
        }
    };
    v.Hf = function () {
    };
    v.cd = function () {
        this.Gb(-1);
        this.lc = !1;
        this.sa && Wl(this.sa, !1)
    };
    v.Ia = function (a) {
        return this.isEnabled() && this.isVisible() && (0 != xl(this) || this.kc) && this.je(a) ? (a.g(), a.stopPropagation(), !0) : !1
    };
    v.je = function (a) {
        var b = tp(this);
        if (b && typeof b.Ia == p && b.Ia(a) || this.sa && this.sa != b && typeof this.sa.Ia == p && this.sa.Ia(a)) return !0;
        if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
        switch (a.keyCode) {
            case 27:
                if (this.Nb) X(this).blur(); else return !1;
                break;
            case 36:
                up(this);
                break;
            case 35:
                vp(this);
                break;
            case 38:
                if (this.Sb == ac) wp(this); else return !1;
                break;
            case 37:
                if (this.Sb == sb) zl(this) ? xp(this) : wp(this); else return !1;
                break;
            case 40:
                if (this.Sb == ac) xp(this); else return !1;
                break;
            case 39:
                if (this.Sb == sb) zl(this) ?
                    wp(this) : xp(this); else return !1;
                break;
            default:
                return !1
        }
        return !0
    };

    function sp(a, b) {
        var c = b.s();
        c = c.id || (c.id = pl(b));
        a.sb || (a.sb = {});
        a.sb[c] = b
    }

    v.Ac = function (a, b) {
        op.G.Ac.call(this, a, b)
    };
    v.me = function (a, b, c) {
        a.Vc |= 2;
        a.Vc |= 64;
        a.ta(32, !1);
        Pl(a, !1);
        var d = a.yb() == this ? Al(this, a) : -1;
        op.G.me.call(this, a, b, c);
        a.$ && this.$ && sp(this, a);
        a = d;
        -1 == a && (a = xl(this));
        a == this.na ? this.na = Math.min(xl(this) - 1, b) : a > this.na && b <= this.na ? this.na++ : a < this.na && b > this.na && this.na--
    };
    v.ae = function (a, b) {
        if (a = typeof a === t ? tl(this, a) : a) {
            var c = Al(this, a);
            -1 != c && (c == this.na ? (Ul(a, !1), this.na = -1) : c < this.na && this.na--);
            var d = a.s();
            d && d.id && this.sb && (c = this.sb, d = d.id, d in c && delete c[d])
        }
        a = op.G.ae.call(this, a, b);
        Pl(a, !0);
        return a
    };

    function fp(a, b) {
        if (a.s()) throw Error(ja);
        a.Sb = b
    }

    v.isVisible = function () {
        return this.ma
    };
    v.O = function (a, b) {
        if (b || this.ma != a && this.dispatchEvent(a ? "show" : rb)) {
            this.ma = a;
            var c = this.s();
            c && (N(c, a), this.Nb && dp(X(this), this.Bb && this.ma), b || this.dispatchEvent(this.ma ? "aftershow" : "afterhide"));
            return !0
        }
        return !1
    };
    v.isEnabled = function () {
        return this.Bb
    };
    v.pa = function (a) {
        this.Bb != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Bb = !0, wl(this, function (b) {
            b.bh ? delete b.bh : b.pa(!0)
        })) : (wl(this, function (b) {
            b.isEnabled() ? b.pa(!1) : b.bh = !0
        }), this.lc = this.Bb = !1), this.Nb && dp(X(this), a && this.ma))
    };

    function yp(a, b) {
        b != a.Nb && a.$ && qp(a, b);
        a.Nb = b;
        a.Bb && a.ma && dp(X(a), b)
    }

    v.Gb = function (a) {
        (a = yl(this, a)) ? Ul(a, !0) : -1 < this.na && Ul(tp(this), !1)
    };

    function tp(a) {
        return yl(a, a.na)
    }

    function up(a) {
        zp(a, function (b, c) {
            return (b + 1) % c
        }, xl(a) - 1)
    }

    function vp(a) {
        zp(a, function (b, c) {
            b--;
            return 0 > b ? c - 1 : b
        }, 0)
    }

    function xp(a) {
        zp(a, function (b, c) {
            return (b + 1) % c
        }, a.na)
    }

    function wp(a) {
        zp(a, function (b, c) {
            b--;
            return 0 > b ? c - 1 : b
        }, a.na)
    }

    function zp(a, b, c) {
        c = 0 > c ? Al(a, a.sa) : c;
        var d = xl(a);
        c = b.call(a, c, d);
        for (var e = 0; e <= d;) {
            var f = yl(a, c);
            if (f && a.Tf(f)) {
                a.Gb(c);
                break
            }
            e++;
            c = b.call(a, c, d)
        }
    }

    v.Tf = function (a) {
        return a.isVisible() && a.isEnabled() && !!(a.ga & 2)
    };

    function Ap() {
    }

    B(Ap, Bl);
    yc(Ap);
    Ap.prototype.ia = function () {
        return ib
    };

    function Bp(a, b, c) {
        V.call(this, a, c || Ap.da(), b);
        this.ta(1, !1);
        this.ta(2, !1);
        this.ta(4, !1);
        this.ta(32, !1);
        this.aa = 1
    }

    B(Bp, V);
    Ml(ib, function () {
        return new Bp(null)
    });
    Ml(jb, function () {
        return new ip
    });

    function Cp(a, b) {
        op.call(this, ac, b || jp.da(), a);
        yp(this, !1)
    }

    B(Cp, op);
    v = Cp.prototype;
    v.ne = !0;
    v.Ec = function (a) {
        if (this.Cb.Ec(this, a)) return !0;
        for (var b = 0, c = xl(this); b < c; b++) {
            var d = yl(this, b);
            if (typeof d.Ec == p && d.Ec(a)) return !0
        }
        return !1
    };
    v.O = function (a, b, c) {
        (b = Cp.G.O.call(this, a, b)) && a && this.$ && this.ne && X(this).focus();
        a && c && typeof c.clientX === Eb ? this.V = new J(c.clientX, c.clientY) : this.V = null;
        return b
    };
    v.Fe = function (a) {
        this.ne && X(this).focus();
        return Cp.G.Fe.call(this, a)
    };
    v.Tf = function (a) {
        return a.isEnabled() && a.isVisible() && !!(a.ga & 2)
    };
    v.Y = function (a) {
        for (var b = this.Cb, c = Ph(this.h.g, g, b.bd() + "-content", a), d = c.length, e = 0; e < d; e++) gp(b, this, c[e]);
        Cp.G.Y.call(this, a)
    };
    v.je = function (a) {
        var b = Cp.G.je.call(this, a);
        b || wl(this, function (c) {
            !b && c.Sh && c.Dg == a.keyCode && (this.isEnabled() && this.Gb(Al(this, c)), b = c.Ia(a))
        }, this);
        return b
    };
    v.Gb = function (a) {
        Cp.G.Gb.call(this, a);
        if (a = yl(this, a)) {
            var b = a.s();
            a = this.s() || Wh(document);
            var c = a || Wh(document);
            var d = aj(b), e = aj(c), f = nj(c);
            if (c == Wh(document)) {
                var h = d.x - c.scrollLeft;
                d = d.y - c.scrollTop;
                D && !Gf(10) && (h += f.left, d += f.top)
            } else h = d.x - e.x - f.left, d = d.y - e.y - f.top;
            b = dj(b);
            f = c.clientHeight - b.height;
            e = c.scrollLeft;
            var k = c.scrollTop;
            e += Math.min(h, Math.max(h - (c.clientWidth - b.width), 0));
            k += Math.min(d, Math.max(d - f, 0));
            c = new J(e, k);
            a.scrollLeft = c.x;
            a.scrollTop = c.y
        }
    };

    function Dp(a, b) {
        Cp.call(this, a, b);
        this.ne = !0;
        yp(this, !0);
        this.O(!1, !0);
        this.g = new ig
    }

    B(Dp, Cp);
    v = Dp.prototype;
    v.$g = !1;
    v.xg = 0;
    v.Ea = null;
    v.Y = function (a) {
        Dp.G.Y.call(this, a);
        (a = a.getAttribute("for") || a.htmlFor) && Ep(this, this.h.s(a), 1)
    };
    v.U = function () {
        Dp.G.U.call(this);
        this.g.forEach(this.hd, this);
        var a = S(this);
        a.D(this, Aa, this.Ye);
        a.D(this.h.g, zb, this.Vi, !0)
    };

    function Ep(a, b, c, d, e, f) {
        b && kg(a.g, Cc(b)) || (c = a.ue(b, c, d, e, f), a.$ && a.hd(c), b = Hc(a.Wi, b), a.s() && S(a).D(a.s(), wb, b))
    }

    v.Wi = function (a, b) {
        if (27 == b.keyCode) a.focus(); else if (a = yl(this, this.na)) {
            var c = a.s();
            a = new Hj(b.h, c);
            a.target = c;
            if (32 == b.keyCode || 13 == b.keyCode) if (Kj(c)) hk(c, wb, !1, a); else if (c = Yj(c)) if (c = c.g["keydown".toString()]) {
                c = c.concat();
                for (var d = 0; d < c.length; d++) {
                    var e = c[d];
                    e && 0 == e.capture && !e.qc && fk(e, a)
                }
            }
            32 == b.keyCode && this.nb()
        }
    };
    v.ue = function (a, b, c, d, e) {
        if (!a) return null;
        b = {F: a, Wg: b, Si: c, Hc: d ? Wa : zb, Te: e};
        this.g.set(Cc(a), b);
        return b
    };
    v.hd = function (a) {
        S(this).D(a.F, a.Hc, this.Pd);
        a.Hc != Wa && S(this).D(a.F, wb, this.Zi)
    };
    v.pd = function () {
        if (this.$) for (var a = this.g.Va(), b = 0; b < a.length; b++) this.we(this.g.get(a[b]));
        mg(this.g)
    };
    v.we = function (a) {
        S(this).ha(a.F, a.Hc, this.Pd)
    };
    v.dd = function (a, b, c) {
        b = void 0 !== a.Wg ? new kp(a.F, a.Wg, !0) : new np(b, c);
        b.o && b.o(5);
        var d = a.Si;
        c = a.Te;
        var e = a.F;
        a = this.isVisible();
        (this.isVisible() || 150 > Ic() - this.xg) && this.$g ? this.nb() : (this.Ea = e || null, this.dispatchEvent("beforeshow") && (d = "undefined" != typeof d ? d : 8, a || (this.s().style.visibility = qb), N(this.s(), !0), b.h(this.s(), d, c), a || (this.s().style.visibility = bc), this.Gb(-1), this.O(!0)))
    };
    v.nb = function () {
        this.isVisible() && (this.O(!1), this.isVisible() || (this.xg = Ic(), this.Ea = null))
    };
    v.Ye = function () {
        this.nb()
    };
    v.Pd = function (a) {
        Fp(this, a)
    };
    v.Zi = function (a) {
        32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || Fp(this, a);
        40 == a.keyCode && up(this)
    };

    function Fp(a, b) {
        for (var c = a.g.Va(), d = 0; d < c.length; d++) {
            var e = a.g.get(c[d]);
            if (e.F == b.currentTarget) {
                a.dd(e, b.clientX, b.clientY);
                b.g();
                b.stopPropagation();
                break
            }
        }
    }

    v.Vi = function (a) {
        this.isVisible() && !this.Ec(a.target) && this.nb()
    };
    v.cd = function (a) {
        Dp.G.cd.call(this, a);
        this.nb()
    };
    v.L = function () {
        Dp.G.L.call(this);
        this.g && (mg(this.g), delete this.g)
    };

    function Y(a, b, c) {
        Dp.call(this, b, c);
        this.o = new ig;
        this.l = a || 5;
        this.A = null;
        this.B = !1;
        this.m = Array(this.l);
        this.N = Array(this.l);
        this.I = cn.da();
        this.K = an.da();
        this.S = null;
        this.$g = !0
    }

    B(Y, Dp);
    var Gp = "";
    v = Y.prototype;
    v.J = function () {
        Y.G.J.call(this);
        for (var a = 0; a < this.l; ++a) this.Ac(new bp(""), !0)
    };
    v.la = function (a) {
        Y.G.la.call(this, a);
        L(this.s(), "alt-menu")
    };
    v.pf = function (a) {
        a = this.o.get(Cc(a));
        for (var b = 0; b < W(a, 2) && b < this.l; ++b) {
            var c = yl(this, b);
            c.Jb(Ym(Ln(a, b), 0));
            c.za(b);
            c.O(!0, !0)
        }
        for (; b < this.l; ++b) yl(this, b).O(!1)
    };

    function Hp(a, b, c) {
        a.o.set(Cc(b), c);
        Ep(a, b, 9, 8, !1, new Pi(-2, 1, -2, 1))
    }

    v.pd = function () {
        Y.G.pd.call(this);
        mg(this.o)
    };
    v.O = function (a, b) {
        var c = this.Ea;
        this.S = c;
        a && null != c ? (Ip(this, c), hn(this.I, "altshow"), bn(this.K, 207)) : null != this.A && Qn(this.A, 0, 0);
        null != c && (a ? this.ve(c) : this.se(c));
        b = Y.G.O.call(this, a, b);
        a && null != this.s() && ij(this.s(), !1);
        return b
    };
    v.gb = function () {
        if (null != this.S) {
            var a = zi(this.S);
            if (null != a) return a
        }
        return ""
    };
    v.nb = function () {
        Y.G.nb.call(this);
        if (this.B) for (var a = 0; a < this.m.length; a++) {
            var b = this.m[a];
            Sk(b.l);
            b.m();
            b.A(-1);
            b.m();
            b.O(!1)
        }
    };
    v.ve = function (a) {
        L(a, "trans-target");
        a.title = ""
    };
    v.se = function (a) {
        Mi(a, "trans-target");
        a.title = Gp
    };
    v.Ia = function (a) {
        if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode) return !1;
        var b = Y.G.Ia.call(this, a);
        if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
            var c = gj(this.Ea.parentNode.parentNode), d = null;
            if (!c && 37 == a.keyCode || c && 39 == a.keyCode) d = !1;
            if (!c && 39 == a.keyCode || c && 37 == a.keyCode) d = !0;
            if (this.oe(d) && (c = this.Ea, (c = d ? void 0 !== c.nextElementSibling ? c.nextElementSibling : ki(c.nextSibling, !0) : void 0 !== c.previousElementSibling ? c.previousElementSibling : ki(c.previousSibling, !1)) && c != this.Ea)) return this.nb(),
                this.Rg(d), this.dd(c ? this.g.get(Cc(c)) : null, 0, 0), Jp(this), a.g(), a.stopPropagation(), !0
        }
        return b
    };
    v.dd = function (a, b, c) {
        gj((a.F || this.Ea).parentNode.parentNode) ? M(this.s(), Ya, Pb) : M(this.s(), Ya, "");
        if (this.B) for (var d = 0; d < this.m.length; d++) Kp(this, d), ti(this.m[d].j, "...");
        this.pf(a.F);
        Y.G.dd.call(this, a, b, c)
    };

    function Lp(a, b, c) {
        !a.B || b >= a.l || "" == c || (ti(a.m[b].j, c), Kp(a, b))
    }

    function Kp(a, b) {
        var c = a.m[b];
        vj(yl(a, b).s(), 12, c.s(), 8, new J(1, 0))
    }

    v.Qc = function (a) {
        Y.G.Qc.call(this, a);
        var b = this.Ea;
        null != b && (hn(this.I, "altmenuhl"), bn(this.K, 209), Ip(this, b), a = this.ud(a.target), -1 != a && a != this.l && (Sk(this.N[a]), this.N[a] = Rk(this.Pi, 300, this), this.B && (b = this.m[a], gj(this.Ea.parentNode.parentNode) ? (L(b.s(), Pb), M(b.s(), Ya, Pb)) : (Mi(b.s(), Pb), M(b.s(), Ya, "")), Kp(this, a), Sk(b.l), 0 == b.g ? b.l = Rk(A(b.A, b, 1), 300) : b.A(1))))
    };
    v.Pi = function () {
        hn(this.I, "altmenuhold");
        bn(this.K, 208)
    };
    v.Je = function (a) {
        Y.G.Je.call(this, a);
        a = this.ud(a.target);
        -1 != a && a != this.l && (Sk(this.N[a]), this.B && this.m[a].B())
    };
    v.ud = function (a) {
        return Al(this, a)
    };
    v.oe = function () {
        return !0
    };
    v.Rg = function () {
    };
    v.ue = function (a, b, c, d, e) {
        (a = Y.G.ue.call(this, a, b, c, d, e)) && a.Hc == zb && (a.Hc = Sa);
        return a
    };
    v.hd = function (a) {
        Y.G.hd.call(this, a);
        S(this).D(a.F, Cb, this.pg);
        S(this).D(a.F, Bb, this.Bd);
        S(this).D(a.F, Wa, this.ng);
        S(this).D(a.F, Ab, this.og)
    };
    v.we = function (a) {
        Y.G.we.call(this, a);
        S(this).ha(a.F, Cb, this.pg);
        S(this).ha(a.F, Bb, this.Bd);
        S(this).ha(a.F, Wa, this.ng);
        S(this).ha(a.F, Ab, this.og)
    };

    function Ip(a, b) {
        if (null != a.A && (b = a.o.get(Cc(b))) && (a = a.A, a.h)) for (var c = a.F && (a.F.value || zi(a.F)), d = -1, e = -1, f = !1, h = 0; h < W(a.h, 5); h++) {
            var k = Nn(a.h, h);
            if (0 != W(k, 2) && (0 == Xm(k, 5) && (f = c.indexOf(Ym(k, 4), e + 1), 0 <= f ? (d = f, e = d + Ym(k, 4).length, f = !0) : f = !1), Nn(a.h, h).g == b.g)) {
                if (f) {
                    c = [];
                    for (e = 0; e < W(b, 3); ++e) c.push({
                        Ic: d + Xm(new Jn(Zm(b, 3, e)), 0),
                        vf: d + Xm(new Jn(Zm(b, 3, e)), 1)
                    });
                    Qn(a, 0, 0, void 0, c)
                } else d = c.indexOf(Ym(b, 0)), 0 <= d && Qn(a, d, d + Ym(b, 0).length);
                break
            }
        }
    }

    function Mp(a, b) {
        b ? hg(a.g.Ma(!1), function (c) {
            "" == this.h.Cf(c.F) && (L(c.F, Xb), this.h.jb(c.F, "_"));
            return !0
        }, a) : hg(a.g.Ma(!1), function (c) {
            Ki(c.F, Xb) && (Mi(c.F, Xb), this.h.jb(c.F, ""));
            return !0
        }, a)
    }

    v.pg = function (a) {
        !Eo() && this.isEnabled() && (L(a.target, Yb), Ip(this, a.target), Mp(this, !0), hn(this.I, "althighlight"), bn(this.K, 206))
    };
    v.Bd = function (a) {
        Mi(a.target, Yb);
        null == this.A || this.isVisible() || Qn(this.A, 0, 0);
        Mp(this, !1)
    };
    v.og = function (a) {
        Eo() && this.Bd(a)
    };
    v.ng = function (a) {
        Eo() || (this.Bd(a), so(no(a.target), void 0).select())
    };

    function Jp(a) {
        hg(a.g.Ma(!1), function (b) {
            Mi(b.F, Yb);
            return !0
        }, a)
    }

    v.Ye = function (a) {
        a && a.currentTarget && a.currentTarget.Ea && (a.m = a.currentTarget.Ea);
        Y.G.Ye.call(this, a)
    };
    v.Pd = function (a) {
        Eo() ? Jp(this) : this.Bb && Y.G.Pd.call(this, a)
    };

    function Np(a, b, c) {
        this.X = this.j = null;
        Y.call(this, a, b, c)
    }

    B(Np, Y);
    v = Np.prototype;
    v.Rg = function (a) {
        this.j = a
    };
    v.O = function (a, b) {
        b = Np.G.O.call(this, a, b);
        this.j = null;
        a ? this.X = this.gb() : null != this.X && this.X != this.gb() && this.dispatchEvent(new Ej(Aa, this));
        return b
    };
    v.ve = function (a) {
        Np.G.ve.call(this, a);
        L(a, "trans-edit");
        a.contentEditable = !0;
        pp(this, a);
        X(this).focus();
        wi(X(this), !0);
        S(this).D(a, wb, this.hg);
        S(this).D(a, Bb, this.Cd);
        S(this).D(a, Cb, this.Cd);
        if (null != this.j) {
            a = so(no(a), void 0);
            var b = this.j ? a.La() : a.bb(), c = Xn(a);
            a = c;
            var d = b, e = new ro;
            e.o = Ao(a, d, c, b);
            if (li(a) && !ci(a)) {
                var f = a.parentNode;
                d = Qc(f.childNodes, a);
                a = f
            }
            li(c) && !ci(c) && (f = c.parentNode, b = Qc(f.childNodes, c), c = f);
            e.o ? (e.g = c, e.j = b, e.h = a, e.l = d) : (e.g = a, e.j = d, e.h = c, e.l = b);
            e.select()
        }
    };
    v.se = function (a) {
        Np.G.se.call(this, a);
        Mi(a, "trans-edit");
        a.contentEditable = !1;
        X(this) && wi(X(this), !1);
        S(this).ha(a, wb, this.hg);
        S(this).ha(a, Bb, this.Cd);
        S(this).ha(a, Cb, this.Cd)
    };
    v.Cd = function () {
        var a = Co();
        null == a || a.Ka() == a.ab() && a.La() == a.bb() || this.O(a.Ka() == a.ab())
    };
    v.hg = function (a) {
        for (var b = 0; b < this.l; ++b) yl(this, b).O(!1);
        if (13 == a.keyCode || 3 == a.keyCode) return null === tp(this) ? (this.nb(), a.stopPropagation(), a.g(), !0) : !1;
        null === tp(this) || !$k(a) && 37 != a.keyCode && 39 != a.keyCode || (this.Ea.focus(), this.Gb(Al(this, null)));
        return !1
    };
    v.oe = function (a) {
        var b = Co();
        if (b.Ka() == b.ab() && b.La() == b.bb()) {
            var c = b.Oe() ? b.La() : b.bb();
            b = so(no(Xn(b)), void 0);
            if (!a && c == b.La() || a && c == b.bb()) return !0
        }
        return !1
    };

    function Op(a, b, c) {
        Y.call(this, a, b, c);
        this.j = null
    }

    w(Op, Y);
    v = Op.prototype;
    v.la = function (a) {
        Y.prototype.la.call(this, a);
        this.j = new Pp("");
        this.Ac(this.j, !0)
    };
    v.pf = function (a) {
        Y.prototype.pf.call(this, a);
        this.j.tb().value = this.h.Cf(a)
    };
    v.O = function (a, b) {
        b = Y.prototype.O.call(this, a, b);
        a && null != this.s() && (X(this) == this.j.tb() || X(this) == this.j.Kc()) && Ul(this.j, !0);
        return b
    };
    v.Qc = function (a) {
        Y.prototype.Qc.call(this, a);
        a.target == this.j ? pp(this, this.j.tb()) : pp(this, this.s());
        X(this).focus();
        X(this).tabIndex = 0
    };
    v.ud = function (a) {
        return a == this.j ? -1 : Y.prototype.ud.call(this, a)
    };
    v.Ia = function (a) {
        return 9 == a.keyCode ? (this.j.aa & 2 ? (X(this) == this.j.tb() ? pp(this, this.j.Kc()) : pp(this, this.j.tb()), X(this).focus(), X(this).tabIndex = 0) : Ul(this.j, !0), a.g(), a.stopPropagation(), !0) : Y.prototype.Ia.call(this, a)
    };
    v.oe = function () {
        return null === tp(this) || !(tp(this) instanceof Pp)
    };

    function Pp(a, b, c) {
        V.call(this, a, c || Qp.da(), b);
        this.ta(4, !1)
    }

    w(Pp, V);
    v = Pp.prototype;
    v.wc = function (a) {
        a.target == this.Kc() && this.dispatchEvent(Aa)
    };
    v.U = function () {
        V.prototype.U.call(this);
        S(this).D(this.tb(), wb, function (a) {
            32 == a.keyCode && a.stopPropagation()
        })
    };
    v.tb = function () {
        return this.g.tb(this.s())
    };
    v.Kc = function () {
        return this.g.Kc(this.s())
    };
    v.gb = function () {
        return this.tb().value
    };

    function Qp() {
    }

    w(Qp, Bl);
    Qp.prototype.J = function (a) {
        var b = a.h.J(na, {value: a.ka(), id: "alt-input-text", type: "text"}),
            c = a.h.J(na, {value: Rp, id: "alt-input-submit", "class": Sp, type: La});
        return a.h.J(g, {id: "alt-input"}, b, c)
    };
    Qp.prototype.tb = function (a) {
        return a.firstChild
    };
    Qp.prototype.Kc = function (a) {
        return a.firstChild.nextSibling
    };
    yc(Qp);
    var Rp = "", Sp = "";

    function Tp() {
    }

    B(Tp, Bl);
    yc(Tp);
    v = Tp.prototype;
    v.Xb = function () {
    };
    v.Ja = function (a, b) {
        Pl(a, !1);
        a.rb &= -256;
        a.ta(32, !1);
        Tp.G.Ja.call(this, a, b);
        a.Jb(b.value);
        return b
    };
    v.J = function (a) {
        Pl(a, !1);
        a.rb &= -256;
        a.ta(32, !1);
        return a.h.J(ua, {"class": El(this, a).join(" "), disabled: !a.isEnabled()}, a.ka() || "")
    };
    v.Xc = function (a) {
        return a.tagName == ua
    };
    v.ce = y;
    v.be = function (a) {
        return a.isEnabled()
    };
    v.Yb = y;
    v.uc = function (a, b, c) {
        Tp.G.uc.call(this, a, b, c);
        (a = a.s()) && 1 == b && (a.disabled = c)
    };
    v.Za = y;
    v.sc = function (a, b) {
        a && (a.value = b)
    };
    v.ia = function () {
        return "goog-textarea"
    };

    function Up(a, b, c) {
        V.call(this, a, b || Tp.da(), c);
        Pl(this, !1);
        this.gd = !0;
        (b = this.s()) && this.g.Yc(b, !0);
        this.hc = "" != a;
        a || (this.Ib = "")
    }

    B(Up, V);
    var Vp = !(D && !Gf(11));
    v = Up.prototype;
    v.ic = !1;
    v.Gd = !1;
    v.hc = !1;
    v.ub = 0;
    v.Bg = 0;
    v.Xe = 0;
    v.sg = !1;
    v.Nd = !1;
    v.kf = !1;
    v.jf = !1;
    v.pc = "";

    function Wp(a) {
        return a.j.top + a.j.bottom + a.B.top + a.B.bottom
    }

    function Xp(a) {
        var b = a.Xe, c = a.s();
        b && c && a.Nd && (b -= Wp(a));
        return b
    }

    function Yp(a) {
        a.Xe = 50;
        Zp(a)
    }

    function $p(a) {
        a.Bg = 50;
        Zp(a)
    }

    v.za = function (a) {
        this.Jb(String(a))
    };
    v.Ca = function () {
        return this.s().value != this.pc || aq(this) || this.hc ? this.s().value : ""
    };
    v.Jb = function (a) {
        Up.G.Jb.call(this, a);
        this.hc = "" != a;
        Zp(this)
    };
    v.pa = function (a) {
        Up.G.pa.call(this, a);
        this.s().disabled = !a
    };

    function Zp(a) {
        a.s() && a.xd()
    }

    function aq(a) {
        a.s();
        return "placeholder" in a.s()
    }

    function bq(a) {
        a.pc && (aq(a) ? a.s().placeholder = a.pc : !a.s() || a.hc || a.Gd || (L(a.s(), Vb), a.s().value = a.pc))
    }

    v.U = function () {
        Up.G.U.call(this);
        var a = this.s();
        M(a, {overflowY: qb, overflowX: Fa, boxSizing: Ka, MsBoxSizing: Ka, WebkitBoxSizing: Ka, MozBoxSizing: Ka});
        this.j = mj(a);
        this.B = nj(a);
        S(this).D(a, "scroll", this.xd).D(a, cb, this.xd).D(a, "keyup", this.xd).D(a, "mouseup", this.Ti).D(a, Ja, this.Hh);
        bq(this);
        Zp(this)
    };

    function cq(a) {
        if (!a.sg) {
            var b = a.s().cloneNode(!1);
            M(b, {
                position: za,
                height: Fa,
                top: "-9999px",
                margin: "0",
                padding: "1px",
                border: "1px solid #000",
                overflow: qb
            });
            a.h.g.body.appendChild(b);
            var c = b.scrollHeight;
            b.style.padding = "10px";
            var d = b.scrollHeight;
            a.kf = d > c;
            b.style.borderWidth = "10px";
            a.jf = b.scrollHeight > d;
            b.style.height = "100px";
            100 != b.offsetHeight && (a.Nd = !0);
            hi(b);
            a.sg = !0
        }
        b = a.s();
        isNaN(a.j.top) && (a.j = mj(b), a.B = nj(b));
        c = a.s().scrollHeight;
        var e = a.s();
        d = e.offsetHeight - e.clientHeight;
        if (!a.kf) {
            var f = a.j;
            d -= f.top + f.bottom
        }
        a.jf || (e = nj(e), d -= e.top + e.bottom);
        c += 0 < d ? d : 0;
        a.Nd ? c -= Wp(a) : (a.kf || (d = a.j, c += d.top + d.bottom), a.jf || (a = nj(b), c += a.top + a.bottom));
        return c
    }

    function dq(a, b) {
        a.ub != b && (a.ub = b, a.s().style.height = b + "px")
    }

    function eq(a) {
        var b = a.s();
        b.style.height = Fa;
        var c = b.value.match(/\n/g) || [];
        b.rows = c.length + 1;
        a.ub = 0
    }

    v.Hh = function () {
        aq(this) || (this.Gd = !1, "" == this.s().value && (this.hc = !1, bq(this)))
    };
    v.xd = function (a) {
        if (!this.ic) {
            var b = this.s();
            !aq(this) && a && a.type == cb && (b.value == this.pc && this.pc && !this.Gd && (Mi(b, Vb), b.value = ""), this.Gd = !0, this.hc = "" != b.value);
            var c = !1;
            this.ic = !0;
            a = this.ub;
            if (b.scrollHeight) {
                var d = !1, e = !1, f = cq(this), h = b.offsetHeight, k = Xp(this);
                var l = this.Bg;
                var m = this.s();
                l && m && this.Nd && (l -= Wp(this));
                k && f < k ? (dq(this, k), d = !0) : l && f > l ? (dq(this, l), b.style.overflowY = "", e = !0) : h != f ? dq(this, f) : this.ub || (this.ub = f);
                d || e || !Vp || (c = !0)
            } else eq(this);
            this.ic = !1;
            c && (b = this.s(), this.ic || (this.ic =
                !0, (e = b.scrollHeight) ? (f = cq(this), c = Xp(this), c && f <= c || (d = this.j, b.style.paddingBottom = d.bottom + 1 + "px", cq(this) == f && (b.style.paddingBottom = d.bottom + e + "px", b.scrollTop = 0, e = cq(this) - e, e >= c ? dq(this, e) : dq(this, c)), b.style.paddingBottom = d.bottom + "px")) : eq(this), this.ic = !1));
            a != this.ub && this.dispatchEvent("resize")
        }
    };
    v.Ti = function () {
        var a = this.s(), b = a.offsetHeight;
        a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
        b != this.ub && (this.ub = this.Xe = b)
    };

    function fq(a) {
        return function () {
            return a
        }
    }

    function gq(a, b) {
        for (var c = 0; c < b.length - 2; c += 3) {
            var d = b.charAt(c + 2);
            d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
            d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
            a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
        }
        return a
    }

    function hq(a, b) {
        var c = b.split(".");
        b = Number(c[0]) || 0;
        for (var d = [], e = 0, f = 0; f < a.length; f++) {
            var h = a.charCodeAt(f);
            128 > h ? d[e++] = h : (2048 > h ? d[e++] = h >> 6 | 192 : (55296 == (h & 64512) && f + 1 < a.length && 56320 == (a.charCodeAt(f + 1) & 64512) ? (h = 65536 + ((h & 1023) << 10) + (a.charCodeAt(++f) & 1023), d[e++] = h >> 18 | 240, d[e++] = h >> 12 & 63 | 128) : d[e++] = h >> 12 | 224, d[e++] = h >> 6 & 63 | 128), d[e++] = h & 63 | 128)
        }
        a = b;
        for (e = 0; e < d.length; e++) a += d[e], a = gq(a, "+-a^+6");
        a = gq(a, "+-3^+b+-f");
        a ^= Number(c[1]) || 0;
        0 > a && (a = (a & 2147483647) + 2147483648);
        c = a % 1E6;
        return c.toString() +
            "." + (c ^ b)
    }

    var iq = null;

    function jq() {
        var a = fq(String.fromCharCode(116)), b = fq(String.fromCharCode(107));
        a = [a(), a()];
        a[1] = b();
        return a.join("")
    };

    function kq() {
        this.g = 0;
        this.h = an.da()
    }

    function lq(a) {
        a = a.Fa("q").join("");
        if (null !== iq) var b = iq; else {
            var c = fq(String.fromCharCode(84));
            b = fq(String.fromCharCode(75));
            c = [c(), c()];
            c[1] = b();
            b = (iq = window[c.join(b())] || "") || ""
        }
        return "&" + jq() + "=" + hq(a, b)
    }

    function mq(a, b, c, d, e) {
        c = c.toString();
        c += lq(d);
        d = d.toString();
        var f = ra;
        b += "?" + c;
        2E3 > b.length + d.length && (f = "GET", b += "&" + d, d = "");
        ++a.g;
        sm(b, function (h) {
            --a.g;
            e(h)
        }, f, d, void 0)
    }

    kq.prototype.j = function (a, b, c) {
        c = c.target;
        !Cm(c) || "[" != Dm(c)[0] && "{" != Dm(c)[0] ? (nq(this, c), b && b(Bm(c))) : (b = oq(c, "handleSingleResult_"), Array.isArray(b) && (b = new Mn(b)), a(b))
    };
    kq.prototype.l = function (a, b, c) {
        c = c.target;
        if (Cm(c)) {
            c = oq(c, "handleTextResult_");
            var d = [];
            if (a) d.push(Array.isArray(c) ? c[0] : c); else if (Array.isArray(c)) for (a = 0; a < c.length; ++a) d.push(Array.isArray(c[a]) ? c[a][0] : c[a]);
            b(d)
        } else nq(this, c), b(null, c.j)
    };

    function oq(a, b) {
        var c = Dm(a);
        a = {"class": "trans.common.TranslationAPI", func: b, url: String(a.m)};
        try {
            var d = JSON.parse(c)
        } catch (e) {
            throw d = cn.da(), a.js = c, a.error = e.message, d.log("jsonParseErr", a), e;
        }
        return d
    }

    function nq(a, b) {
        var c = b.j;
        c = c in pq ? pq[c] : 0;
        a = bn(a.h, 148);
        var d = new Fm;
        d = ag(d, 1, 156);
        c && ag(d, 5, c);
        bg(a, 63, d);
        c = cn.da();
        a = String(b.m);
        b = Dm(b);
        c.log("invalidResponse", {q: a.substring(0, 500), ql: a.length, r: b.substring(0, 500), rl: b.length})
    }

    var qq = {},
        pq = (qq[1] = 15, qq[2] = 16, qq[3] = 17, qq[4] = 18, qq[5] = 19, qq[6] = 20, qq[7] = 21, qq[8] = 22, qq[9] = 23, qq);

    function rq(a) {
        switch (a) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 3;
            case 10:
                return 4;
            case 3:
                return 5;
            default:
                return 0
        }
    };

    function sq(a, b) {
        this.h = b;
        for (var c = [], d = !0, e = a.length - 1; 0 <= e; e--) {
            var f = a[e] | 0;
            d && f == b || (c[e] = f, d = !1)
        }
        this.g = c
    }

    var tq = {};

    function uq(a) {
        return -128 <= a && 128 > a ? nf(tq, a, function (b) {
            return new sq([b | 0], 0 > b ? -1 : 0)
        }) : new sq([a | 0], 0 > a ? -1 : 0)
    }

    function vq(a) {
        if (isNaN(a) || !isFinite(a)) return wq;
        if (0 > a) return xq(vq(-a));
        for (var b = [], c = 1, d = 0; a >= c; d++) b[d] = a / c | 0, c *= 4294967296;
        return new sq(b, 0)
    }

    var wq = uq(0), yq = uq(1), zq = uq(16777216);

    function Aq(a) {
        if (-1 == a.h) return -Aq(xq(a));
        for (var b = 0, c = 1, d = 0; d < a.g.length; d++) {
            var e = Bq(a, d);
            b += (0 <= e ? e : 4294967296 + e) * c;
            c *= 4294967296
        }
        return b
    }

    v = sq.prototype;
    v.toString = function (a) {
        a = a || 10;
        if (2 > a || 36 < a) throw Error("radix out of range: " + a);
        if (Cq(this)) return "0";
        if (-1 == this.h) return "-" + xq(this).toString(a);
        for (var b = vq(Math.pow(a, 6)), c = this, d = ""; ;) {
            var e = Dq(c, b).g;
            c = Eq(c, Fq(e, b));
            var f = ((0 < c.g.length ? c.g[0] : c.h) >>> 0).toString(a);
            c = e;
            if (Cq(c)) return f + d;
            for (; 6 > f.length;) f = "0" + f;
            d = "" + f + d
        }
    };

    function Bq(a, b) {
        return 0 > b ? 0 : b < a.g.length ? a.g[b] : a.h
    }

    function Cq(a) {
        if (0 != a.h) return !1;
        for (var b = 0; b < a.g.length; b++) if (0 != a.g[b]) return !1;
        return !0
    }

    function Gq(a, b) {
        a = Eq(a, b);
        return -1 == a.h ? -1 : Cq(a) ? 0 : 1
    }

    function xq(a) {
        for (var b = a.g.length, c = [], d = 0; d < b; d++) c[d] = ~a.g[d];
        return (new sq(c, ~a.h)).add(yq)
    }

    v.abs = function () {
        return -1 == this.h ? xq(this) : this
    };
    v.add = function (a) {
        for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0, e = 0; e <= b; e++) {
            var f = d + (Bq(this, e) & 65535) + (Bq(a, e) & 65535),
                h = (f >>> 16) + (Bq(this, e) >>> 16) + (Bq(a, e) >>> 16);
            d = h >>> 16;
            f &= 65535;
            h &= 65535;
            c[e] = h << 16 | f
        }
        return new sq(c, c[c.length - 1] & -2147483648 ? -1 : 0)
    };

    function Eq(a, b) {
        return a.add(xq(b))
    }

    function Fq(a, b) {
        if (Cq(a) || Cq(b)) return wq;
        if (-1 == a.h) return -1 == b.h ? Fq(xq(a), xq(b)) : xq(Fq(xq(a), b));
        if (-1 == b.h) return xq(Fq(a, xq(b)));
        if (0 > Gq(a, zq) && 0 > Gq(b, zq)) return vq(Aq(a) * Aq(b));
        for (var c = a.g.length + b.g.length, d = [], e = 0; e < 2 * c; e++) d[e] = 0;
        for (e = 0; e < a.g.length; e++) for (var f = 0; f < b.g.length; f++) {
            var h = Bq(a, e) >>> 16, k = Bq(a, e) & 65535, l = Bq(b, f) >>> 16, m = Bq(b, f) & 65535;
            d[2 * e + 2 * f] += k * m;
            Hq(d, 2 * e + 2 * f);
            d[2 * e + 2 * f + 1] += h * m;
            Hq(d, 2 * e + 2 * f + 1);
            d[2 * e + 2 * f + 1] += k * l;
            Hq(d, 2 * e + 2 * f + 1);
            d[2 * e + 2 * f + 2] += h * l;
            Hq(d, 2 * e + 2 * f + 2)
        }
        for (e = 0; e <
        c; e++) d[e] = d[2 * e + 1] << 16 | d[2 * e];
        for (e = c; e < 2 * c; e++) d[e] = 0;
        return new sq(d, 0)
    }

    function Hq(a, b) {
        for (; (a[b] & 65535) != a[b];) a[b + 1] += a[b] >>> 16, a[b] &= 65535, b++
    }

    function Iq(a, b) {
        this.g = a;
        this.h = b
    }

    function Dq(a, b) {
        if (Cq(b)) throw Error("division by zero");
        if (Cq(a)) return new Iq(wq, wq);
        if (-1 == a.h) return b = Dq(xq(a), b), new Iq(xq(b.g), xq(b.h));
        if (-1 == b.h) return b = Dq(a, xq(b)), new Iq(xq(b.g), b.h);
        if (30 < a.g.length) {
            if (-1 == a.h || -1 == b.h) throw Error("slowDivide_ only works with positive integers.");
            for (var c = yq, d = b; 0 >= Gq(d, a);) c = Jq(c, 1), d = Jq(d, 1);
            var e = Kq(c, 1), f = Kq(d, 1);
            d = Kq(d, 2);
            for (c = Kq(c, 2); !Cq(d);) {
                var h = f.add(d);
                0 >= Gq(h, a) && (e = e.add(c), f = h);
                d = Kq(d, 1);
                c = Kq(c, 1)
            }
            b = Eq(a, Fq(e, b));
            return new Iq(e, b)
        }
        for (e =
                 wq; 0 <= Gq(a, b);) {
            c = Math.max(1, Math.floor(Aq(a) / Aq(b)));
            d = Math.ceil(Math.log(c) / Math.LN2);
            d = 48 >= d ? 1 : Math.pow(2, d - 48);
            f = vq(c);
            for (h = Fq(f, b); -1 == h.h || 0 < Gq(h, a);) c -= d, f = vq(c), h = Fq(f, b);
            Cq(f) && (f = yq);
            e = e.add(f);
            a = Eq(a, h)
        }
        return new Iq(e, a)
    }

    v.and = function (a) {
        for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = Bq(this, d) & Bq(a, d);
        return new sq(c, this.h & a.h)
    };
    v.or = function (a) {
        for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = Bq(this, d) | Bq(a, d);
        return new sq(c, this.h | a.h)
    };
    v.xor = function (a) {
        for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = Bq(this, d) ^ Bq(a, d);
        return new sq(c, this.h ^ a.h)
    };

    function Jq(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.g.length + c + (0 < b ? 1 : 0), e = [], f = 0; f < d; f++) e[f] = 0 < b ? Bq(a, f - c) << b | Bq(a, f - c - 1) >>> 32 - b : Bq(a, f - c);
        return new sq(e, a.h)
    }

    function Kq(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.g.length - c, e = [], f = 0; f < d; f++) e[f] = 0 < b ? Bq(a, f + c) >>> b | Bq(a, f + c + 1) << 32 - b : Bq(a, f + c);
        return new sq(e, a.h)
    };Eq(Jq(yq, 32), yq);
    Eq(Jq(yq, 128), yq);
    var Lq = D || F || of || pf || !1;
    Of && 0 <= Pd(uj, "4") || Pf && H("533") || E && H("2.0") || D && H("10") || of && ve();

    function Mq(a, b, c, d, e, f, h, k, l) {
        R.call(this, a);
        this.l = h || null;
        null != this.l && this.l.A(A(this.ci, this));
        this.A = null;
        this.g = Fa;
        this.ya = this.j = "";
        this.qb = new kq;
        this.bc = !!b && Lq && !D;
        this.V = null != e ? e : 0;
        this.m = this.bc ? new Np : new Op;
        l && this.m.pa(!1);
        if (0 < this.V) for (a = this.m, a.B = !0, b = 0; b < a.l; b++) h = Yh(g, "goog-menu", ""), e = Yh(g, null, h), h = new Hn(e, h), a.m[b] = h, document.body.appendChild(e);
        this.m.la(c);
        this.o = k || null;
        this.pb = null != d ? d : -1;
        this.S = cn.da();
        this.I = new ig;
        this.N = null;
        this.cb = "t";
        this.X = this.ja = null;
        this.B =
            f || null;
        this.Sa = !1;
        null != this.B && (this.B.l(A(this.hj, this)), this.B.j(A(this.Zh, this)));
        this.xa = null;
        this.K = an.da()
    }

    w(Mq, R);

    function Nq(a, b) {
        a.xa = b;
        a.m.A = b
    }

    function Oq(a) {
        a.N = tb;
        a.m.I.m = a.N || ""
    }

    function Pq(a) {
        var b = Qq;
        a.S.j = b;
        a.cb = b
    }

    function Rq(a, b) {
        null != a.B && a.B.g();
        b && (a.A = new Mn(b), a.X = null);
        Sq(a) && (a.l.h(), null != a.o && a.o.g(!1));
        if (a.A) {
            b = 0 != Oh().length;
            a.h.Rc(a.s());
            a.m.pd();
            a.xa && (a.xa.h = a.A);
            for (var c = "", d = 0, e = 0; e < W(a.A, 5); e++) Tq(a.A, e) && (c += " "), c += Uq(a.A, e), d += W(Nn(a.A, e), 2);
            if (0 != d) {
                c = [];
                d = !1;
                e = a.A;
                for (var f = "", h = 0; h < W(e, 5); h++) {
                    var k = Nn(e, h);
                    null != k.g[4] && 0 < Ym(k, 4).length ? f = Ym(k, 4) : (new Kn(k.g)).g[4] = f
                }
                for (e = 0; e < W(a.A, 5); e++) {
                    f = Nn(a.A, e);
                    h = Ln(f, 0);
                    if (Tq(a.A, e)) a.h.appendChild(a.s(), a.h.g.createTextNode(" ")); else if ("km" ==
                        a.j || "lo" == a.j) {
                        k = a.h;
                        var l = k.appendChild, m = a.s();
                        var n = F ? bi() : of ? document.createTextNode("&shy;") : D ? document.createTextNode("&#8203;") : bi();
                        l.call(k, m, n)
                    }
                    null != f.g[4] && 0 < Ym(f, 4).length && 0 == Xm(f, 5) && c.push(Ym(f, 4));
                    var q;
                    k = Uq(a.A, e);
                    /^[\s\xa0]*$/.test(k) ? 0 == k.length || (q = Vq(k)) : (q = a.h.J(sa, null, k), h = Xm(h, 1), 0 <= a.pb && h < a.pb && L(q, "alt-low-conf"), kg(a.I, a.g + "." + a.j + "." + Ym(f, 0)) && (h = a.I.get(a.g + "." + a.j + "." + Ym(f, 0)), h != Wq(f, 0) && (a.h.jb(q, h), L(q, Da), d = !0, Xq(a, !0))), q.title = Gp, Hp(a.m, q, f));
                    q && a.h.appendChild(a.s(),
                        q)
                }
                if (null != a.l) {
                    q = a.g + "." + a.j;
                    for (e = 0; e < c.length; ++e) q += "." + c[e];
                    kg(a.I, q) && (Yq(a, !1), d = !0, Zq(a, a.I.get(q)), null != a.o && a.o.g(!1), Xq(a, !0))
                }
                d || (Xq(a, !1), Yq(a, !1));
                (d || b) && a.dispatchEvent(Aa)
            }
        } else Xq(a, !1), Yq(a, !1)
    }

    function Vq(a) {
        a = Gd(af(a)).split("<br>");
        var b = document.createDocumentFragment(), c = 0;
        Rc(a, function (d) {
            0 != c && b.appendChild(Yh("BR"));
            c++;
            "" != d && b.appendChild(document.createTextNode(String(bf(d))))
        });
        return b
    }

    function $q(a, b) {
        if (Sq(a)) return a.l.g();
        var c = [];
        if (a.s() && a.s().childNodes) for (var d = 0; d < a.s().childNodes.length; ++d) {
            var e = a.s().childNodes[d];
            c[d] = b && "BR" == e.tagName ? "\n" : zi(e)
        }
        return c.join("")
    }

    function ar(a, b, c, d) {
        if (b) for (a = 0; a < W(b, 5); a++) {
            var e = Nn(b, a), f = c;
            if ((e = e && e) && Rm(f.g, e.g)) {
                c = b;
                b = a;
                f = -1;
                a = W(c, 5);
                for (e = b; 0 <= e; e--) if (0 == Xm(Nn(c, e), 5)) {
                    f = e;
                    break
                }
                for (e = b + 1; e <= W(c, 5); e++) if (0 == Xm(Nn(c, e), 5)) {
                    a = e;
                    break
                }
                if (d) b = br(c, f, a); else if (d = c, c = f, d) {
                    f = b + 1;
                    e = b;
                    for (b = Uq(d, b).length; 64 > b && (f != a || e != c);) f < a && (b += Uq(d, f++).length + 1), 64 > b && e > c && (b += Uq(d, --e).length + 1);
                    b = br(d, e, f)
                } else b = "";
                return b
            }
        }
        return ""
    }

    function br(a, b, c) {
        var d = [];
        d.push(Uq(a, b));
        for (b += 1; b < c; b++) Tq(a, b) && d.push(" "), d.push(Uq(a, b));
        return d.join("")
    }

    function Tq(a, b) {
        if (0 == b) return !1;
        var c = Nn(a, b), d = Nn(a, b - 1);
        if (c = Wm(Ln(c, 0), 2) && !Wm(Ln(d, 0), 3)) a = Uq(a, b - 1), b = a.length - 1, c = !(0 <= b && a.indexOf("\n", b) == b);
        return c
    }

    v = Mq.prototype;
    v.hb = function () {
        return this.g
    };
    v.ra = function () {
        return this.j
    };
    v.J = function () {
        this.Y(Ci(this.h, "span"))
    };
    v.Y = function (a) {
        R.prototype.Y.call(this, a);
        Rq(this)
    };
    v.U = function () {
        R.prototype.U.call(this);
        S(this).D(this.m, Aa, this.oi);
        null != this.o && null != this.o.h && (S(this).D(this.o.h, Sa, this.ti), Xk(S(this), this.o.h, this.K.h, this.K));
        S(this).D(this.m, "show", this.ni);
        this.s() && S(this).D(this.s(), wb, function (a) {
            32 == a.keyCode && a.stopPropagation()
        }, !0)
    };
    v.L = function () {
        R.prototype.L.call(this);
        this.m.R()
    };
    v.ci = function () {
        this.B.pa(this.l.j());
        Xq(this, this.l.j())
    };
    v.oi = function (a) {
        if (a.type != rb || a.target == this.m) if (null == a.target && null != this.l) this.S.log("editpopupclk"), bn(this.K, 233), null != this.o && this.o.g(!0), this.l.l($q(this)), this.Sa = this.B.s().style.display != r, this.B.reset(), null != this.o ? this.B.pa(this.o.h.style.display != r) : this.B.pa(!1), Xq(this, !1); else {
            var b = a.m;
            null == b && null != a.currentTarget && (b = a.currentTarget.Ea);
            var c = a.target.gb();
            if (null != b && null != a.target) {
                var d = b, e = this.m.o.get(Cc(d));
                this.h.jb(d, c);
                c == Wq(e, 0) ? (Mi(d, Da), 0 == Oh().length && (Xq(this,
                    !1), Yq(this, !1))) : (L(d, Da), Xq(this, !0), Yq(this, !0));
                null != this.I && this.I.set(this.g + "." + this.j + "." + Ym(e, 0), c);
                e = this.m.o.get(Cc(b));
                null != this.I && this.I.set(this.g + "." + this.j + "." + Ym(e, 0), c);
                d = Wq(e, 0);
                b = Al(this.m, a.target);
                d = {
                    sl: this.g,
                    tl: this.j,
                    utrans: c,
                    gtrans: d,
                    index: b,
                    ophrase: Ym(e, 0),
                    osentence: Ym(e, 4),
                    tsentence: ar(this, this.A, e)
                };
                0 < W(e, 2) && (d.confidence = Xm(Ln(e, 0), 1));
                if (a.target instanceof Pp || -1 == b) d.manual = 1, bn(this.K, 240); else {
                    a = bn(this.K, 239);
                    e = new Km;
                    var f = dg(dg(e, 2, Im), 3, Gm);
                    ag(f, 1, b);
                    bg(a,
                        27, e)
                }
                for (var h in d) typeof d[h] === t && 64 < d[h].length && (d.tr = 1, d[h] = d[h].substr(0, 64));
                this.S.log("usealt", d, this.N);
                h = new Ej("usealt");
                h.text = c;
                this.dispatchEvent(h);
                this.dispatchEvent(Aa)
            }
        }
    };

    function Zq(a, b) {
        if (a.s()) {
            null == a.ja && (a.X = $c(a.h.Rh(a.s())));
            a.ja = b;
            var c;
            if (c = a.s().childNodes && 0 < a.s().childNodes.length) c = (c = a.s().childNodes[0]) ? kg(a.m.g, Cc(c)) : !1;
            if (c) a.h.Rc(a.s()), a.m.pd(), b = a.h.J(sa, Da, a.ja), a.h.appendChild(a.s(), b), Hp(a.m, b, new Kn); else {
                ei(a.s());
                a = a.s();
                c = af(b);
                b = Yh(g);
                c = Gd(c).split("<br>");
                for (var d = 0; d < c.length; ++d) {
                    var e = c[d];
                    e.length && (e = Yh(sa, Da, e), b.appendChild(e));
                    d != c.length - 1 && (e = Yh("BR"), b.appendChild(e))
                }
                a.appendChild(b)
            }
        }
    }

    v.ti = function () {
        null != this.l && Sq(this) ? this.l.o() : cr(this);
        this.S.log("clkundo", void 0, this.N)
    };
    v.Zh = function () {
        Sq(this) && (this.l.j() && (Zq(this, this.l.g()), this.Sa = !0), this.l.h(), null != this.o && this.o.g(!1), this.l.j() && Xq(this, !0), this.B.pa(!0), N(this.B.s(), this.Sa), this.dispatchEvent(Aa));
        bn(this.K, 215);
        this.S.log("clkcancel", void 0, this.N)
    };
    v.ni = function () {
        var a = this.m.o.get(Cc(this.m.Ea));
        if (a) {
            if (0 < this.V) {
                var b = new wg("source=baf");
                if (1 == this.V) {
                    for (var c = [], d = 0, e = W(a, 2); d < e; d++) c.push(Wq(a, d));
                    d = this.qb;
                    var f = this.j, h = this.g, k = dr(this), l = A(this.jj, this);
                    e = new wg;
                    var m = new wg;
                    e.set("client", "mt");
                    e.set("sl", f);
                    e.set("tl", h);
                    e.set("hl", k);
                    e.set("v", "1.0");
                    b && e.Zd(b);
                    (b = !Array.isArray(c) || Array.isArray(c) && 1 == c.length) ? m.set("q", c) : Kg(m, "q", c);
                    b = A(d.l, d, b, l);
                    mq(d, da, e, m, b)
                } else for (d = 0, e = W(a, 2); d < e; d++) {
                    h = Wq(a, d);
                    c = this.qb;
                    m = this.j;
                    l = this.g;
                    f = dr(this);
                    k = A(this.kj, this, d);
                    var n = b, q = new wg, u = new wg;
                    q.set("client", "mt");
                    q.set("sl", m);
                    q.set("tl", l);
                    q.set("hl", f);
                    Kg(q, "dt", ["at", "t"]);
                    n && q.Zd(n);
                    u.set("q", h);
                    mq(c, "/translate_a/single", q, u, A(c.j, c, k, void 0))
                }
            }
            b = new Ej(Sa);
            b.text = this.m.gb();
            b.o = W(this.A, 5);
            this.dispatchEvent(b);
            b = {};
            b.confidence = Xm(Ln(a, 0), 1);
            this.g && this.j && this.ya && (b.segments = W(this.A, 5), b.sl = this.g, b.tl = this.j, b.hl = this.ya);
            bn(this.K, 238);
            this.S.log("phrsclk", b, this.N)
        }
    };
    v.kj = function (a, b) {
        if (1 == this.V || 1 < W(b, 5)) {
            var c = Ym(new $m(Zm(b, 0, 0)), 0);
            var d = 1;
            for (var e = W(b, 0); d < e; d++) c += " " + Ym(new $m(Zm(b, 0, d)), 0);
            d = c
        } else if (1 == W(b, 5)) {
            c = [];
            b = Nn(b, 0);
            d = 0;
            for (e = Math.min(this.V, W(b, 2)); d < e; d++) c.push(Wq(b, d));
            d = c.join(", ")
        } else d = "...";
        Lp(this.m, a, d)
    };
    v.jj = function (a) {
        for (var b = 0; b < a.length; b++) Lp(this.m, b, a[b])
    };

    function cr(a) {
        Sq(a) && (null != a.o && a.o.g(!1), a.l.h());
        mg(a.I);
        a.ja = null;
        Rq(a);
        a.dispatchEvent(Aa)
    }

    function Xq(a, b) {
        null != a.o && null != a.o.h && N(a.o.h, b)
    }

    function Yq(a, b) {
        null != a.B && (b && a.B.reset(), N(a.B.s(), b))
    }

    v.hj = function () {
        bn(this.K, 374);
        var a = [], b;
        null != this.X ? b = this.X : b = ii(this.s());
        for (var c = {segment: []}, d = null, e = 0, f = 0; f < b.length; f++) {
            var h = Nn(this.A, f);
            if (null != h) {
                var k = zi(b[f]);
                a:{
                    var l = k;
                    var m = h;
                    if (0 == W(m, 2)) l = 0; else {
                        for (var n = 0; n < W(m, 2); ++n) if (l == Wq(m, n)) {
                            l = n;
                            break a
                        }
                        l = -1
                    }
                }
                m = Fd(Ym(h, 4));
                n = ar(this, this.A, h, !0);
                if (0 != m.length) {
                    if (0 == a.length || m != a[a.length - 1]) a.push(m), e = a.length - 1, d = null, e < W(this.A, 0) && (d = Vm(new $m(Zm(this.A, 0, e)), 4, 0)), d = rq(d), e = 0, d = {
                        source: m, original_target: n, segment_source: d,
                        phrase_correction: []
                    }, c.segment.push(d);
                    if (0 != l) for (m = Wq(h, 0).length, l = {
                        alternative_index: l,
                        edited_phrase: k,
                        source_span: [],
                        target_span: [{start: e, end: e + m}]
                    }, d.phrase_correction.push(l), m = 0; m < W(h, 3); ++m) n = new Jn(Zm(h, 3, m)), l.source_span.push({
                        start: Xm(n, 0),
                        end: Xm(n, 1)
                    });
                    e += k.length;
                    Wm(Ln(h, 0), 2) && e++
                }
            }
        }
        if (Sq(this)) {
            this.dispatchEvent(Aa);
            this.l.h();
            null != this.o && this.o.g(!1);
            Xq(this, !0);
            this.l.g() != $q(this) && Zq(this, this.l.g());
            b = this.g + "." + this.j;
            for (f = 0; f < a.length; ++f) b += "." + a[f];
            a = this.l.g();
            this.I.set(b,
                a);
            c.contains_full_edit = !0
        }
        c.edited_target = $q(this, !0);
        a = new wg;
        a.set("ue", JSON.stringify(c));
        a.set("sl", this.g);
        a.set("tl", this.j);
        sm(ea + this.cb, void 0, ra, a.toString(), 1E4)
    };

    function Sq(a) {
        return null != a.l && a.l.m()
    }

    function Uq(a, b) {
        a = Nn(a, b);
        return 0 == W(a, 2) ? Ym(a, 0) : Wq(a, 0)
    }

    function Wq(a, b) {
        return Ym(Ln(a, b), 0)
    }

    function dr(a) {
        a = a.ya;
        0 === a.length && null != Mh(document, "hl") && (a = Mh(document, "hl").value);
        return a
    };var er = window.google && google.translate && google.translate._const;
    er || (er = {
        _cac: "",
        _cam: "",
        _cest: new Date,
        _cjlc: "",
        _cl: "",
        _cuc: "",
        _cnad: !1,
        _cnal: {},
        Zj: "",
        _pah: "",
        _pas: "",
        _pbi: "",
        _pci: "",
        _phf: "",
        _pli: "",
        _plla: "",
        _pmi: "",
        _ps: "",
        _pta: "",
        _puh: ""
    });
    var fr = window.google && window.google.translate && window.google.translate.v || "", gr = er._cl || "en",
        hr = er._cuc, ir = er._cnad, jr = er._cest, kr = er._cnal || {}, lr = "lib" == er._cam ? 1 : 0,
        mr = (er._cac || "te") + (1 == lr ? "_lib" : ""), nr = function () {
            function a(d) {
                return function () {
                    return d
                }
            }

            var b = String.fromCharCode(107), c = a(String.fromCharCode(116));
            b = a(b);
            c = [c(), c()];
            c[1] = b();
            return er["_c" + c.join(b())] || ""
        }(), or = er._pah || "", pr = er._pas || "https://", qr = er._pbi || "", rr = er._pci || "", sr = er._plla || "",
        tr = er._pli || "", ur = er._ps || "", vr = er._puh ||
        "", wr = "//" + vr + ea + mr,
        xr = "https://www.google.com/support/translate" + ("en" == gr ? "" : "#googtrans/en/" + gr);

    function yr(a) {
        for (var b = {}, c = 0; c < a.length; ++c) b[a[c]] = !0;
        return b
    }

    function zr(a) {
        this.h = a ? [a] : [];
        this.g = [0];
        this.j = !1
    }

    zr.prototype.register = function (a) {
        if (this.j) return a || y;
        this.g.push(0);
        var b = this.g.length - 1;
        return A(function () {
            this.g[b]++;
            a && a.apply(null, arguments);
            Ar(this)
        }, this)
    };
    zr.prototype.delay = function (a) {
        return this.j ? a : A(function () {
            if (this.j) a.apply(null, arguments); else {
                var b = arguments;
                this.h.push(function () {
                    a.apply(null, b)
                })
            }
        }, this)
    };
    zr.prototype.finish = function () {
        this.g[0] = 1;
        Ar(this)
    };

    function Ar(a) {
        for (var b = 0; b < a.g.length; ++b) if (0 == a.g[b]) return;
        a.j = !0;
        for (b = 0; b < a.h.length; ++b) {
            var c = a.h[b];
            a.h[b] = null;
            c.call()
        }
        a.h = [];
        a.g = []
    }

    function Br(a) {
        this.j = a;
        this.h = this.g = !1
    }

    function Cr(a, b) {
        return A(function () {
            b && b.apply(null, arguments);
            this.h ? this.g || (this.j.call(), this.g = !0) : this.g = !0
        }, a)
    }

    Br.prototype.finish = function () {
        this.h || (this.h = !0, this.g && this.j.call())
    };

    function Dr(a, b, c) {
        this.g = b;
        this.A = a;
        this.o = c || 0;
        this.j = this.h = !1
    }

    function Er(a) {
        a.h || a.m()
    }

    Dr.prototype.m = function () {
        (this.h = (this.j = !!this.A.call()) || 0 >= --this.o) ? (this.g.call(null, this.j), this.l = 0) : this.l = window.setTimeout(A(this.m, this), 30)
    };
    Dr.prototype.cancel = function () {
        this.l && window.clearTimeout(this.l);
        this.h = !0;
        this.g.call(null, this.j)
    };

    function Fr(a, b) {
        return function () {
            a.dispatchEvent(b)
        }
    }

    function Gr(a) {
        a = Fd(a).toLowerCase().replace("_", "-");
        if ("zh-cn" == a) return "zh-CN";
        if ("zh-tw" == a) return "zh-TW";
        var b = a.indexOf("-");
        a = 0 <= b ? a.substring(0, b) : a;
        return "zh" == a ? "zh-CN" : a
    }

    function Hr(a) {
        var b = [], c;
        for (c in a) if (a[c] !== Object.prototype[c]) {
            var d = Ze(c);
            if (zc(a[c]) == Ea) for (var e = 0; e < a[c].length; ++e) b.push(d + "=" + Ze(a[c][e])); else b.push(d + "=" + Ze(a[c]))
        }
        return b.join("&")
    }

    function Ir(a, b) {
        b = b || {};
        b.nca = a;
        b.client = mr;
        fr && (b.logld = "v" + fr);
        var c = new Image;
        c.src = "//" + vr + "/gen204?" + Hr(b);
        c.onload = function () {
            c.onload = null
        }
    }

    function Jr(a, b) {
        if ((D || of) && window.location.hostname != document.domain) {
            Kr = Kr ? Kr + 1 : 1;
            var c = "f" + Kr + "_" + Ic().toString(36);
            window[c] = function () {
                window[c] = void 0;
                a.src = vb;
                b && window.setTimeout(function () {
                    b()
                }, 0)
            };
            a.src = "javascript:void(document.write(\"<script>document.domain='" + document.domain + "';parent['" + c + "']();\x3c/script>\"))"
        } else b && b()
    }

    var Kr;

    function Lr() {
        var a = {};
        try {
            for (var b in Object.prototype) {
                var c = Object.prototype[b];
                delete Object.prototype[b];
                a[b] = c
            }
        } catch (d) {
            return {}
        }
        return a
    }

    function Mr(a) {
        for (var b in a) Object.prototype[b] = a[b]
    }

    function Nr(a) {
        for (var b in a) if (a[b] !== Object.prototype[b]) return !1;
        return !0
    }

    function Or(a, b) {
        return a != Fa && "zh-CN" != a && a == b
    };var Pr = null, Qr = null;

    function Rr(a, b, c) {
        for (var d in c) c[d] !== Object.prototype[d] && (b[d] = typeof c[d] === p ? c[d] : Hc(Sr, a, Number(c[d])))
    }

    function Tr() {
        Pr && Ur();
        Pr = [];
        Qr = P(window, "unload", function () {
            Ur()
        })
    }

    function Ur() {
        Qr && (dk(Qr), Qr = null);
        Pr && Pr.length && Ir(Pr.join(""));
        Pr = null
    }

    function Sr(a, b, c) {
        var d = Array.prototype.slice.call(arguments);
        d.splice(0, 2);
        d = "l" + a.toString(16) + "i" + b.toString(16) + (d.length ? "-" + d.join("_") : "");
        Pr ? Pr.push(d) : Ir(d)
    };

    function Vr(a) {
        this.url = a;
        this.timeout = -1;
        this.l = this.j = Ma;
        this.g = this.h = null
    }

    function Wr(a, b) {
        b = void 0 === b ? {} : b;
        a.g = Ek();
        var c = new tg(a.url), d = new Map;
        a.l && d.set(a.l, a.j);
        c.g.Zd(Jg(b), d);
        Xr(a).then(function () {
            Yr(a, c.toString())
        }).then(function () {
            return a.g.promise
        }).then(function () {
            Zr(a)
        }, function () {
            Zr(a)
        });
        0 < a.timeout && (a.m = setTimeout(function () {
            a.g.g("Timeout!")
        }, a.timeout));
        return a.g.promise
    }

    function Yr(a, b) {
        var c = new MessageChannel;
        a.h.contentWindow.postMessage({url: b, callbackName: a.j}, "*", [c.port2]);
        c.port1.onmessage = function (d) {
            var e = {};
            void 0 !== a.m && (clearTimeout(a.m), a.m = void 0);
            void 0 === d.data && a.g.g("Callback called, but no data received");
            typeof d.data !== t && a.g.g("Exploitation attempt! Data is not a string!");
            try {
                e = JSON.parse(d.data)
            } catch (f) {
                a.g.g("Invalid Data received: " + f.message)
            }
            a.g.h(e)
        }
    }

    function Xr(a) {
        var b = Ek(), c = $h(document, ma);
        if (!c.sandbox) throw Error("iframe sandboxes not supported");
        c.sandbox.value = "allow-scripts";
        c.style.display = r;
        a.h = c;
        a = xd();
        a = Me(Oe, Ge("body", {}, Je(a)));
        c.srcdoc = ze(a);
        a = Re(ud("data URL to be opened only in a sandbox"), "data:text/html;charset=UTF-8;base64," + btoa(ye(a)));
        c.src = Dd(a).toString();
        c.addEventListener(yb, function () {
            return b.h(c)
        }, !1);
        c.addEventListener("error", function (d) {
            b.g(d)
        }, !1);
        document.documentElement.appendChild(c);
        return b.promise
    }

    function Zr(a) {
        null !== a.h && (document.documentElement.removeChild(a.h), a.h = null)
    };

    function $r(a, b) {
        O.call(this);
        this.g = new tg(a);
        if (b) for (var c in b) b[c] !== Object.prototype[c] && this.g.g.set(c, b[c])
    }

    w($r, O);
    $r.prototype.j = function () {
        return !0
    };
    $r.prototype.Xa = function () {
        return this.j()
    };
    $r.prototype.send = function () {
        return null
    };
    $r.prototype.cancel = function () {
    };

    function as(a, b, c, d) {
        $r.call(this, a, b);
        this.l = null == d || !!d;
        a = this.h = new Vr(this.g);
        a.j = Ma;
        a.l = void 0 === c ? Ma : c
    }

    w(as, $r);
    as.prototype.j = function () {
        return this.l
    };
    as.prototype.send = function (a, b) {
        a = Wr(this.h, a);
        a.then(b);
        return a
    };
    as.prototype.cancel = function (a) {
        a.cancel()
    };

    function bs(a, b) {
        $r.call(this, a, b);
        this.l = {};
        this.h = this.m = 0;
        window.XMLHttpRequest && cc in new XMLHttpRequest && (this.h = 1);
        !this.h && window.XDomainRequest && "file:" != window.location.protocol && (this.h = 2, this.g.g.set("u", window.location.href))
    }

    w(bs, $r);
    bs.prototype.j = function () {
        return !!this.h
    };
    bs.prototype.send = function (a, b) {
        var c = Lr(), d = ++this.m, e = {}, f = {};
        "q" in a && (f.q = a.q, delete a.q);
        a.mode = this.h;
        1 == this.h ? (e.wb = new om, P(e.wb, Ua, A(function () {
            if (!e.Cc) {
                if (Cm(e.wb)) b(Dm(e.wb)); else {
                    this.zg();
                    var h = Dm(e.wb);
                    b(null, h || null)
                }
                cs(this, d)
            }
        }, this)), P(e.wb, "timeout", A(function () {
            e.Cc || (this.Ag(), cs(this, d))
        }, this)), e.wb.send(this.g.toString() + "&" + Hr(a), ra, Hr(f), {"Content-Type": "application/x-www-form-urlencoded"})) : (e.$a = new XDomainRequest, e.$a.timeout = 2E4, e.$a.onload = A(function () {
            e.Cc || (b(e.$a.responseText),
                cs(this, d))
        }, this), e.$a.onerror = A(function () {
            e.Cc || (this.zg(), b(null), cs(this, d))
        }, this), e.$a.ontimeout = A(function () {
            e.Cc || (this.Ag(), b(null), cs(this, d))
        }, this), e.$a.open(ra, this.g.toString() + "&" + Hr(a)), e.$a.send(Hr(f)));
        this.l[d] = e;
        Mr(c);
        return d
    };
    bs.prototype.cancel = function (a) {
        var b = this.l[a];
        b && (b.Cc = !0, b.$a && b.$a.abort(), cs(this, a))
    };

    function cs(a, b) {
        var c = a.l[b];
        c && (c.wb ? (c.wb.R(), c.wb = null) : c.$a && (c.$a = null), delete a.l[b])
    }

    bs.prototype.L = function () {
        $r.prototype.L.call(this);
        for (var a in this.l) this.cancel(a)
    };
    Rr(17170, bs.prototype, {Ag: 1, zg: 2});

    function ds(a, b, c) {
        $r.call(this, a, c);
        this.l = b.proxyIsSupported;
        this.m = b.proxySend;
        this.h = b.proxyCancel
    }

    w(ds, $r);
    ds.prototype.j = function () {
        return this.l()
    };
    ds.prototype.send = function (a, b) {
        return this.m(this.g.toString(), a, b)
    };
    ds.prototype.cancel = function (a) {
        this.h(a)
    };

    function es(a, b) {
        O.call(this);
        this.j = !0;
        this.h = a;
        this.g = b ? b : null
    }

    w(es, O);

    function fs(a, b) {
        if (!a.j) return b;
        if (zc(b) != Ea) a = [[b, 200]]; else if (2 == b.length && zc(b[0]) != Ea && zc(b[1]) != Ea) a = [[b[0], 200, b[1]], [b[1], 200, b[1]]]; else {
            a = [];
            for (var c = 0; c < b.length; ++c) a[c] = zc(b[c]) != Ea ? [b[c], 200] : [b[c][0], 200, b[c][1]]
        }
        return a
    }

    es.prototype.m = function (a) {
        var b = this;
        return function (c) {
            if (c) try {
                var d = c.indexOf("\x00");
                0 <= d && (c = c.substr(0, d));
                var e = JSON.parse(c)
            } catch (f) {
                e = null, b.Gi()
            }
            e ? a(fs(b, e), 200) : a([], 500)
        }
    };
    es.prototype.l = function (a) {
        var b = this;
        return function (c) {
            c ? a(fs(b, c), 200) : a([], 500)
        }
    };
    es.prototype.L = function () {
        O.prototype.L.call(this)
    };
    Rr(47504, es.prototype, {
        Gi: function () {
            Ir("te_afbr")
        }
    });
    var Dk = {
        0: "NO_ERROR",
        1: "UNKNOWN_ERROR",
        2: "JWT_TOKEN_CANNOT_PARSE",
        3: "JWT_TOKEN_MISS_PARAM",
        4: "JWT_TOKEN_INVALID_ISS",
        5: "JWT_TOKEN_INVALID",
        6: oa,
        7: "OUT_OF_QUOTA",
        8: oa
    };

    function gs() {
    }

    gs.prototype.h = function () {
    };

    function hs(a) {
        a = a.split(".");
        if (3 !== a.length) return !1;
        a = JSON.parse(Sf(a[1]));
        return null == a || !a.exp || 1E3 * a.exp < Ic() ? !1 : !0
    }

    function is(a) {
        this.g = a
    }

    w(is, gs);
    is.prototype.h = function () {
        return hs(this.g) ? Bk(this.g) : Ck()
    };

    function js(a) {
        this.g = null;
        this.j = a
    }

    w(js, gs);
    js.prototype.h = function () {
        if (null != this.g && hs(this.g)) return Bk(this.g);
        this.g = null;
        return new wk(function (a, b) {
            var c = this;
            this.j(function (d) {
                c.g = d;
                hs(c.g) ? a(d) : b(Dk[5])
            }, b)
        }, this)
    };

    function ks(a, b, c, d, e, f) {
        O.call(this);
        var h;
        b ? h = {client: b} : h = {anno: 3, client: mr, format: "html", v: "1.0"};
        c && (h.sp = c);
        h.key = a;
        fr && (h.logld = "v" + fr);
        this.o = d || null;
        this.Ub = e || null;
        this.g = null;
        this.h = {Dc: A(this.tj, this), Cg: 300};
        a = this.l = new es(h, f);
        b = pr + sr;
        this.m = a.g ? new ds(b, a.g, {client: mr}) : new as(b, {client: mr}, "cb");
        a = this.l;
        if (a.g) {
            if (!a.g) throw Error("this.remoteApiProxyHandlers_ is null");
            a = [{qa: new ds(pr + or + da, a.g, a.h), Dc: A(a.l, a), Md: 1900, Ve: 4294967295, Ue: -1, lf: 0, qd: !1}]
        } else b = pr + or, a = [{
            qa: new bs(b +
                da, a.h), Dc: A(a.m, a), Md: 30720, Ve: 4294967295, Ue: -1, lf: 0, qd: !1
        }, {
            qa: new as(b + da, a.h, "cb", D && 7 >= Ef),
            Dc: A(a.l, a),
            Md: 1900,
            Ve: 4294967295,
            Ue: -1,
            lf: 3,
            qd: !0
        }];
        this.A = new ls(a);
        this.j = !1;
        for (b = 0; b < a.length; ++b) this.j = this.j || a[b].qa.j();
        this.j || this.Hi()
    }

    w(ks, O);
    v = ks.prototype;
    v.tj = function (a) {
        return function (b) {
            if (b) try {
                var c = JSON.parse(b)
            } catch (d) {
                c = null
            }
            a(c && c[1] || void 0)
        }
    };
    v.If = function (a) {
        this.C || (this.C = !0, this.A.start(A(function (b) {
            b && (this.g = b, this.h.qa = b.qa);
            a()
        }, this)))
    };
    v.Xa = function () {
        return null !== this.g && null !== this.g.qa && this.g.qa.Xa()
    };
    v.translate = function (a, b, c, d, e, f, h, k) {
        var l = this, m = this.g.Dc(a), n = {q: b, sl: c, tl: d};
        n.tc = e;
        f && (n.ctt = 1);
        h && (n.dom = 1);
        k && (n.sr = 1);
        n[jq()] = hq(b.join(""), nr);
        return this.o ? this.o.h().then(function (q) {
            null != q && (n.jwtt = q, n.rurl = location.hostname);
            return l.g.qa.send(n, A(ms(m), l))
        }, function (q) {
            q && l.Ub && l.Ub(q)
        }) : this.g.qa.send(n, m)
    };

    function ms(a) {
        return function (b, c) {
            if (c && this.Ub) {
                try {
                    var d = JSON.parse(c).error_code
                } catch (e) {
                    d = null
                }
                c = Dk[1];
                this.Ub(null == d ? c : Dk[d] || c)
            }
            a(b)
        }
    }

    function ns(a, b) {
        b instanceof wk ? b.then(function (c) {
            a.g.qa.cancel(c)
        }) : a.g.qa.cancel(b)
    }

    v.L = function () {
        O.prototype.L.call(this);
        this.g && (this.g.qa.R(), this.g.qa = null);
        this.h.qa = null;
        this.m.R();
        this.m = null
    };
    Rr(7361, ks.prototype, {
        Hi: function () {
            Ir("te_au")
        }
    });

    function ls(a) {
        this.h = a
    }

    ls.prototype.start = function (a) {
        this.g = a;
        this.j = 0;
        os(this)
    };

    function os(a) {
        if (a.j >= a.h.length) a.g(null); else {
            var b = a.h[a.j++];
            b.cj ? Er(new Dr(A(b.qa.Xa, b.qa), A(function (c) {
                c ? this.g(b) : os(this)
            }, a), b.cj)) : b.qa.Xa() ? a.g(b) : os(a)
        }
    };var ps = yr(["A", "ABBR", "ACRONYM", "B", "BASEFONT", "BDO", "BIG", "CITE", "DFN", "EM", "FONT", "I", na, "NOBR", "LABEL", "Q", "S", "SMALL", sa, "STRIKE", "STRONG", "SUB", "SUP", ua, "TT", "U", "VAR"]),
        qs = yr(["APPLET", "AREA", "BASE", "FRAME", "FRAMESET", "HR", "LINK", "META", "NOFRAMES", "NOSCRIPT", na, ua, "TITLE"]),
        rs = yr("BR CODE IMG KBD MAP OBJECT PARAM SCRIPT STYLE WBR svg".split(" ")), ss = yr(["submit", La]);

    function ts(a, b) {
        this.j = D ? [] : null;
        this.h = [];
        this.done = !1;
        for (this.g = new Tn(a, !1, b, 3 === a.nodeType ? 0 : 1, 1); a = a.parentNode;) us(this, a, !0);
        this.h.push(!1);
        this.h.reverse();
        for (a = 1; a < this.h.length; ++a) null == this.h[a] && (this.h[a] = this.h[a - 1])
    }

    function us(a, b, c) {
        c = void 0 === c ? !1 : c;
        var d = (b.style && b.style.whiteSpace || "").substring(0, 3);
        "pre" === d || !d && "PRE" === b.tagName ? a.h.push(!0) : d && "pre" !== d ? a.h.push(!1) : c ? a.h.push(null) : a.h.push(a.h[a.h.length - 1])
    }

    function vs(a) {
        return !!a.h[a.h.length - 1]
    }

    ts.prototype.node = function () {
        return this.g.node
    };
    ts.prototype.depth = function () {
        return this.g.depth
    };
    ts.prototype.next = function () {
        try {
            this.j && 0 < this.j.length && -1 === this.g.m && this.j.length--, -1 === this.g.m && this.h.length--, this.j && 0 < this.j.length && 1 !== this.g.m && !this.g.node.nextSibling ? Un(this.g, this.j[this.j.length - 1], -1, this.g.depth - 1) : (this.g.next(), this.j && 1 === this.g.m && this.j.push(this.g.node)), 1 === this.g.m && this.g.Wd && us(this, this.g.node)
        } catch (a) {
            a !== eg && this.Ni(a), this.done = !0
        }
    };
    Rr(52754, ts.prototype, {Ni: 1});

    function ws() {
        return "[msg_undefined]"
    }

    var Z = {};
    (function () {
        function a(b) {
            return function () {
                return b
            }
        }

        Z = {
            Of: a(0),
            zf: a(1),
            Af: a(2),
            Kj: a(3),
            yh: a(4),
            Bf: a(5),
            ph: a(45),
            qh: a(6),
            th: a(7),
            fd: a(8),
            zh: a(9),
            Vj: a(10),
            Dh: a(11),
            uh: a(12),
            Rj: a(13),
            wh: a(14),
            Qj: a(15),
            vh: a(16),
            Xj: a(17),
            Ah: a(18),
            wj: a(19),
            Jj: a(20),
            dh: a(21),
            xh: a(22),
            Oj: a(23),
            Nj: a(24),
            Lj: a(25),
            Wj: a(26),
            Uj: a(27),
            Mj: a(28),
            rh: a(29),
            Bh: a(30),
            vj: a(32),
            uj: a(33),
            Ch: a(34),
            Bj: a(35),
            zj: a(36),
            Aj: a(37),
            Nf: a(38),
            Dj: a(39),
            yf: a(40),
            sh: a(41),
            Mf: a(46)
        }
    })();

    function xs(a) {
        return eh('<span id="' + I(a.id) + '"></span>')
    }

    function ys(a) {
        var b = a.id, c = a.Lg;
        return eh(dh(a.Mg) + '<div id="' + I(b) + '"></div>' + dh(c))
    }

    function zs(a) {
        var b = a.Qi, c = Z.fd, d = Z.sh;
        return eh('<div id="goog-gt-tt" class="skiptranslate" dir="' + I(a.dir) + '"><div style="padding: 8px;"><div><div class="logo"><img src="' + I(sh(b)) + '" width="20" height="20" alt="Google ' + I(c) + '"/></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">' + dh(d) + '</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"/><div class="activity-root"></div></div></div><div class="status-message"></div></div>')
    }

    function As(a) {
        var b = a.method, c = a.Qh, d = a.dir, e = Z.xh, f = Z.zf;
        a = '<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="' + I(nh(a.Eh)) + '" method="' + I(b) + '"><div class="form-buttons" style="text-align:' + ((d && d.Ci && "rtl".Ci ? d.Mb !== "rtl".Mb ? 0 : d.toString() === "rtl".toString() : d == Pb) ? "right" : "left") + '"><input class="activity-submit" type="button" value="' + I(e) + '"><input class="activity-cancel" type="button" value="' + I(f) + '"></div><div class="parameters"><input type="hidden" name="gtrans"/><input type="hidden" name="utrans"/><input type="hidden" name="hl"/><input type="hidden" name="text"/><input type="hidden" name="langpair"/><input type="hidden" name="oe" value="UTF-8"/>';
        b = c.length;
        for (d = 0; d < b; d++) a += '<input type="hidden" name="' + I(c[d]) + '"/>';
        return eh(a + "</div></form></div>")
    }

    function Bs() {
        return eh('<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>')
    }

    function Cs(a) {
        return eh('<div><span class="alt-translated-text"></span><div class="alt-helper-text">' + dh(a.yi) + '</div><div class="activity-form-container"></div></div>')
    }

    function Ds() {
        return eh('<div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"/></svg></div></div>')
    };

    function Es(a) {
        R.call(this);
        a = a || {};
        this.id = a.id || pl(this);
        this.Re = a.Re || "";
        this.Kd = a.Kd || null;
        this.Ld = a.Ld || null;
        this.ld = a.ld || !1;
        this.className = a.className || null;
        this.A = null
    }

    B(Es, R);
    v = Es.prototype;
    v.nc = function (a) {
        this.A = a
    };
    v.Kb = function () {
        if (!this.$) throw Error("Activity must be rendered before it can be resumed.");
        if (!this.A) throw Error("Activity must have a tooltip instance to be resumed");
    };
    v.Fb = function () {
    };
    v.R = function () {
        this.wa || (Es.G.R.call(this), delete this.Ld)
    };
    v.ba = function () {
        return this.A
    };

    function Fs(a) {
        Gs();
        return Be(a, null)
    }

    function Hs(a) {
        Gs();
        return Ed(a)
    }

    var Gs = y;

    function Is() {
        Q.call(this);
        this.j = "closure_frame" + Js++;
        this.h = [];
        Ks[this.j] = this
    }

    var Ls;
    B(Is, Q);
    var Ks = {}, Js = 0;

    function Ms(a, b) {
        var c = Kh(a);
        pg(b, function (d, e) {
            Array.isArray(d) || (d = [d]);
            Rc(d, function (f) {
                f = c.J(na, {type: qb, name: e, value: f});
                a.appendChild(f)
            })
        })
    }

    v = Is.prototype;
    v.ca = null;
    v.oa = null;
    v.Qb = null;
    v.Ui = 0;
    v.ob = !1;
    v.ke = null;
    v.wg = null;
    v.Pb = null;
    v.send = function (a, b, c, d) {
        if (this.ob) throw Error(wa);
        this.ke = a = new tg(a);
        b = b ? b.toUpperCase() : "GET";
        c && (c = ff(), a.g.set("zx", c));
        Ls || (Ls = Yh("FORM"), Ls.acceptCharset = "utf-8", c = Ls.style, c.position = za, c.visibility = qb, c.top = c.left = "-10px", c.width = c.height = "10px", c.overflow = qb, document.body.appendChild(Ls));
        this.ca = Ls;
        "GET" == b && Ms(this.ca, a.g);
        d && Ms(this.ca, d);
        d = this.ca;
        a = a.toString();
        Gs();
        Ue(d, Yd(a));
        this.ca.method = b;
        Ns(this);
        Os(this)
    };

    function Ps(a, b) {
        if (a.ob) throw Error(wa);
        var c = new tg(b.action);
        a.ke = c;
        a.ca = b;
        Ue(a.ca, c.toString());
        Ns(a)
    }

    v.abort = function () {
        if (this.ob) {
            var a = Qs(this);
            ek(a);
            this.ob = !1;
            this.dispatchEvent("abort");
            Rs(this)
        }
    };
    v.L = function () {
        this.ob && this.abort();
        Is.G.L.call(this);
        this.oa && Ss(this);
        Os(this);
        delete this.l;
        this.ke = this.wg = this.ca = null;
        delete Ks[this.j]
    };

    function Ns(a) {
        a.ob = !0;
        a.Qb = a.j + "_" + (a.Ui++).toString(36);
        a.oa = Kh(a.ca).J(ma, {name: a.Qb, id: a.Qb});
        D && 7 > Number(Ef) && Ue(a.oa, Yd(td(ud('javascript:""'))));
        var b = a.oa.style;
        b.visibility = qb;
        b.width = b.height = "10px";
        b.display = r;
        F ? b.marginTop = b.marginLeft = "-10px" : (b.position = za, b.top = b.left = "-10px");
        if (D && !H("11")) {
            a.ca.target = a.Qb || "";
            Kh(a.ca).g.body.appendChild(a.oa);
            P(a.oa, Ob, a.bf, !1, a);
            try {
                a.g = !1, a.ca.submit()
            } catch (pc) {
                ck(a.oa, Ob, a.bf, !1, a), Ts(a)
            }
        } else {
            Kh(a.ca).g.body.appendChild(a.oa);
            b = a.Qb + "_inner";
            var c = ri(a.oa);
            if (document.baseURI) {
                var d = af(b);
                d = Qe(ud("Short HTML snippet, input escaped, safe URL, for performance"), '<head><base href="' + af(document.baseURI) + '"></head><body><iframe id="' + d + '" name="' + d + '"></iframe>')
            } else d = af(b), d = Qe(ud("Short HTML snippet, input escaped, for performance"), '<body><iframe id="' + d + '" name="' + d + '"></iframe>');
            of && !F ? Te(c.documentElement, d) : c.write(ze(d));
            P(c.getElementById(b), yb, a.Od, !1, a);
            d = Nh(ua, a.ca);
            for (var e = 0, f = d.length; e < f; e++) {
                var h = d[e].value;
                Bi(d[e]) !=
                h && (ti(d[e], h), d[e].value = h)
            }
            d = c.importNode(a.ca, !0);
            d.target = b;
            d.action = a.ca.action;
            c.body.appendChild(d);
            e = Nh("SELECT", a.ca);
            f = Nh("SELECT", d);
            h = 0;
            for (var k = e.length; h < k; h++) for (var l = Nh("OPTION", e[h]), m = Nh("OPTION", f[h]), n = 0, q = l.length; n < q; n++) m[n].selected = l[n].selected;
            e = Nh(na, a.ca);
            f = Nh(na, d);
            h = 0;
            for (k = e.length; h < k; h++) if ("file" == e[h].type && e[h].value != f[h].value) {
                a.ca.target = b;
                d = a.ca;
                break
            }
            try {
                a.g = !1, d.submit(), c.close(), E && Rk(a.Xg, 250, a)
            } catch (pc) {
                try {
                    var u = Wg(pc);
                    var z = u.fileName;
                    null == z &&
                    (z = "");
                    if (/^https?:\/\//i.test(z)) {
                        var G = Xd(z) || Zd, U = ud("view-source scheme plus HTTP/HTTPS URL"),
                            Cg = "view-source:" + Td(G);
                        td(U);
                        td(U);
                        var qc = Yd(Cg)
                    } else qc = Yd(td(ud("sanitizedviewsrc")));
                    var Ha = Me(Ce("Message: " + u.message + "\nUrl: "), Ge("a", {
                        href: qc,
                        target: "_new"
                    }, u.fileName), Ce("\nLine: " + u.lineNumber + "\n\nBrowser stack:\n" + u.stack + "-> [end]\n\nJS stack traversal:\n" + $g(void 0) + "-> "))
                } catch (im) {
                    Ha = Ce("Exception trying to expose exception! You win, we lose. " + im)
                }
                ye(Ha);
                ck(c.getElementById(b), yb,
                    a.Od, !1, a);
                c.close();
                Ts(a)
            }
        }
    }

    v.bf = function () {
        if (this.oa.readyState == Ua) {
            ck(this.oa, Ob, this.bf, !1, this);
            try {
                var a = ri(this.oa);
                if (D && "about:blank" == a.location && !navigator.onLine) {
                    Ts(this);
                    return
                }
            } catch (b) {
                Ts(this);
                return
            }
            Us(this, a)
        }
    };
    v.Od = function () {
        if (!of || F || "about:blank" != (this.oa ? ri(Qs(this)) : null).location) {
            ck(Qs(this), yb, this.Od, !1, this);
            try {
                Us(this, this.oa ? ri(Qs(this)) : null)
            } catch (a) {
                Ts(this)
            }
        }
    };

    function Us(a, b) {
        a.ob = !1;
        try {
            var c = b.body;
            a.wg = c.textContent || c.innerText
        } catch (e) {
            var d = 1
        }
        d || typeof a.l != p || (b = a.l(b)) && (d = 4);
        d ? Ts(a) : (a.dispatchEvent(Ua), a.dispatchEvent("success"), Rs(a))
    }

    function Ts(a) {
        a.g || (a.ob = !1, a.dispatchEvent(Ua), a.dispatchEvent("error"), Rs(a), a.g = !0)
    }

    function Rs(a) {
        Ss(a);
        Os(a);
        a.ca = null;
        a.dispatchEvent(Nb)
    }

    function Ss(a) {
        var b = a.oa;
        b && (b.onreadystatechange = null, b.onload = null, b.onerror = null, a.h.push(b));
        a.Pb && (Sk(a.Pb), a.Pb = null);
        E || of && !F ? a.Pb = Rk(a.Xf, 2E3, a) : a.Xf();
        a.oa = null;
        a.Qb = null
    }

    v.Xf = function () {
        this.Pb && (Sk(this.Pb), this.Pb = null);
        for (; 0 != this.h.length;) {
            var a = this.h.pop();
            hi(a)
        }
    };

    function Os(a) {
        a.ca && a.ca == Ls && ei(a.ca)
    }

    function Qs(a) {
        return a.oa ? D && !H("11") ? a.oa : ri(a.oa).getElementById(a.Qb + "_inner") : null
    }

    v.Xg = function () {
        if (this.ob) {
            var a = this.oa ? ri(Qs(this)) : null;
            a && !mf(a, "documentUri") ? (ck(Qs(this), yb, this.Od, !1, this), Ts(this)) : Rk(this.Xg, 250, this)
        }
    };

    function Vs(a, b) {
        R.call(this);
        this.A = a || "";
        this.j = null;
        this.m = [];
        this.g = null;
        this.B = b || "GET";
        this.l = this.o = null
    }

    w(Vs, R);
    v = Vs.prototype;
    v.J = function () {
        var a = {Eh: this.A, method: this.B, Qh: this.m, dir: Ad.test(gr) ? Pb : "ltr"};
        this.Y(Ei(As, a))
    };
    v.Y = function (a) {
        this.F = a;
        this.g = rl(this, "activity-form");
        a = rl(this, "activity-submit");
        this.l = new cm("");
        vl(this.l, a);
        a = rl(this, "activity-cancel");
        this.j = new cm("");
        vl(this.j, a);
        rl(this, "form-message")
    };
    v.U = function () {
        var a = S(this);
        a.D(this.l, Aa, A(this.oj, this));
        a.D(this.j, Aa, A(this.dispatchEvent, this, Na))
    };
    v.oj = function () {
        var a = !0;
        this.o && (a = this.o());
        a && (a = new Is, P(a, "success", function () {
            this.dispatchEvent("successful")
        }), P(a, "error", function () {
            this.dispatchEvent("failed")
        }), Ps(a, this.g));
        this.dispatchEvent(Tb)
    };

    function Ws(a, b) {
        for (var c in b) a.g[c] && (a.g[c].value = b[c])
    }

    function Xs(a, b) {
        return a.g[b] ? a.g[b].value : ""
    }

    v.L = function () {
        this.l = this.g = this.j = null;
        R.prototype.L.call(this)
    };

    function Ys(a, b) {
        a.o = b
    };

    function Zs(a, b) {
        Es.call(this, a);
        this.j = null;
        this.B = b || {};
        this.m = new On;
        this.o = this.g = null;
        this.l = new ks((a || {}).eb || "", Qq);
        this.l.l.j = !1
    }

    w(Zs, Es);
    v = Zs.prototype;
    v.nc = function (a) {
        Es.prototype.nc.call(this, a);
        this.l.If(A(this.Kb, this))
    };
    v.Kb = function () {
        Es.prototype.Kb.call(this);
        var a = this.ba().N, b = this.ba().H;
        if (a && b) {
            ti(this.o, a);
            var c = this.m;
            c.F = b;
            fi(c.g, c.F);
            Pn(c);
            N(this.m.g, !0);
            b = this.ba().hb();
            c = this.ba().ra();
            if (this.l.Xa() && b && c) {
                var d = this.ba().xc(), e = A(this.Yi, this);
                this.l && this.l.translate(e, [d], b, c, 0, !1);
                Ws(this.g, {gtrans: a, text: this.ba().xc(), hl: gr, langpair: b + "|" + c});
                Ws(this.g, this.B);
                Ws(this.g, {client: Qq})
            }
            this.dispatchEvent(Nb)
        }
    };
    v.J = function () {
        this.Y(Ei(Cs, {yi: Z.yf}))
    };
    v.Y = function (a) {
        this.F = a;
        this.o = rl(this, "alt-translated-text");
        var b = rl(this, Ca);
        this.g = new Vs(wr, ra);
        this.g.m = fd(this.B);
        Ys(this.g, A(function () {
            Ws(this.g, {utrans: $q(this.j)});
            return Xs(this.g, "utrans") != Xs(this.g, "gtrans")
        }, this));
        this.g.la(b);
        Rp = Z.Ch;
        Gp = Z.yf;
        this.j = new Mq(void 0, !0, a);
        Nq(this.j, this.m);
        Oq(this.j);
        Pq(this.j);
        vl(this.j, this.o)
    };
    v.U = function () {
        Es.prototype.U.call(this);
        var a = S(this);
        a.D(this.g, Na, A(function () {
            cr(this.j);
            this.dispatchEvent(Na)
        }, this));
        a.D(this.g, Tb, A(function () {
            var b = $q(this.j);
            this.ba().N = b && Fd(b);
            this.dispatchEvent(Tb);
            b = Z.Nf;
            ti(this.ba().m.s(), b)
        }, this))
    };
    v.Yi = function (a) {
        a && Rq(this.j, a)
    };
    v.Fb = function () {
        N(this.m.g, !1)
    };
    v.L = function () {
        this.j && this.j.R();
        this.o = this.m = this.j = null;
        this.l && this.l.R();
        this.l = null;
        this.g && this.g.R();
        this.g = null;
        Es.prototype.L.call(this)
    };
    var Qq = mr.replace("_", "-") + "-alt";

    function $s(a, b) {
        Es.call(this, a);
        this.m = !1;
        this.l = b || {};
        this.j = null
    }

    w($s, Es);
    v = $s.prototype;
    v.nc = function (a) {
        Es.prototype.nc.call(this, a);
        S(this).D(this.j.s(), wb, A(this.ba().Tc, this.ba(), !1));
        this.m = this.ba().Bc;
        this.Kb()
    };
    v.Kb = function () {
        Es.prototype.Kb.call(this);
        this.j.Jb(this.ba().N);
        var a = this.ba().hb(), b = this.ba().ra();
        a && b && (Ws(this.g, {
            gtrans: this.ba().N,
            text: this.ba().xc(),
            hl: gr,
            langpair: a + "|" + b
        }), Ws(this.g, this.l));
        this.dispatchEvent(Nb);
        this.j.s().focus()
    };
    v.Fb = function () {
        this.ba().Tc(this.m)
    };
    v.J = function () {
        this.Y(Ei(Bs))
    };
    v.Y = function (a) {
        this.F = a;
        a = rl(this, "contribute-original-text");
        this.j = new Up("");
        vl(this.j, a);
        $p(this.j);
        Yp(this.j);
        a = rl(this, Ca);
        this.g = new Vs(wr, ra);
        this.g.m = fd(this.l);
        Ys(this.g, A(function () {
            Ws(this.g, {utrans: Fd(this.j.Ca())});
            return Xs(this.g, "utrans") != Xs(this.g, "gtrans")
        }, this));
        this.g.la(a)
    };
    v.U = function () {
        Es.prototype.U.call(this);
        var a = S(this);
        a.D(this.g, Na, A(function () {
            this.dispatchEvent(Na)
        }, this));
        a.D(this.g, Tb, A(function () {
            var b = this.j.Ca();
            this.ba().N = b && Fd(b);
            this.dispatchEvent(Tb);
            b = Z.Nf;
            ti(this.ba().m.s(), b)
        }, this))
    };
    v.L = function () {
        this.j && this.j.R();
        this.j = null;
        this.g && this.g.R();
        this.g = null;
        Es.prototype.L.call(this)
    };

    function at(a) {
        Q.call(this);
        this.m = a;
        this.o = {};
        this.j = new Uk(this);
        this.l = null
    }

    w(at, Q);
    at.prototype.Jf = function () {
    };
    at.prototype.Kf = function () {
    };
    at.prototype.L = function () {
        this.j.R();
        this.j = null
    };

    function bt(a, b, c) {
        if (b = a.m.j[b]) {
            c = c || "undefined" == typeof c;
            for (var d = 0; d < b.Da.length; ++d) b.Da[d] && a.ug(b.Da[d], c)
        }
    }

    at.prototype.ug = function (a, b) {
        M(a, "backgroundColor", b ? "#E6ECF9" : "");
        M(a, "color", b ? "#000" : "")
    };
    var id = {}, ct = null;

    function dt(a) {
        a = Cc(a);
        delete id[a];
        hd() && ct && ct.stop()
    }

    function et() {
        ct || (ct = new Tk(function () {
            ft()
        }, 20));
        var a = ct;
        0 != a.Wb || a.start()
    }

    function ft() {
        var a = Ic();
        dd(id, function (b) {
            gt(b, a)
        });
        hd() || et()
    };

    function ht(a, b, c, d) {
        yn.call(this);
        if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.m = a;
        this.M = b;
        this.duration = c;
        this.B = d;
        this.coords = [];
        this.progress = 0;
        this.H = null
    }

    B(ht, yn);
    v = ht.prototype;
    v.play = function (a) {
        if (a || 0 == this.g) this.progress = 0, this.coords = this.m; else if (1 == this.g) return !1;
        dt(this);
        this.h = a = Ic();
        -1 == this.g && (this.h -= this.duration * this.progress);
        this.endTime = this.h + this.duration;
        this.H = this.h;
        this.progress || this.j();
        this.Ua("play");
        -1 == this.g && this.Ua("resume");
        this.g = 1;
        var b = Cc(this);
        b in id || (id[b] = this);
        et();
        gt(this, a);
        return !0
    };
    v.stop = function (a) {
        dt(this);
        this.g = 0;
        a && (this.progress = 1);
        it(this, this.progress);
        this.Fb();
        this.l()
    };
    v.nf = function (a) {
        this.progress = a;
        1 == this.g && (this.h = Ic() - this.duration * this.progress, this.endTime = this.h + this.duration)
    };
    v.L = function () {
        0 == this.g || this.stop(!1);
        this.Ua("destroy");
        ht.G.L.call(this)
    };

    function gt(a, b) {
        b < a.h && (a.endTime = b + a.endTime - a.h, a.h = b);
        a.progress = (b - a.h) / (a.endTime - a.h);
        1 < a.progress && (a.progress = 1);
        a.H = b;
        it(a, a.progress);
        1 == a.progress ? (a.g = 0, dt(a), a.Ua($a), a.l()) : 1 == a.g && a.Ze()
    }

    function it(a, b) {
        typeof a.B === p && (b = a.B(b));
        a.coords = Array(a.m.length);
        for (var c = 0; c < a.m.length; c++) a.coords[c] = (a.M[c] - a.m[c]) * b + a.m[c]
    }

    v.Ze = function () {
        this.Ua("animate")
    };
    v.Ua = function (a) {
        this.dispatchEvent(new jt(a, this))
    };

    function jt(a, b) {
        Ej.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.z = b.coords[2];
        this.duration = b.duration;
        this.progress = b.progress;
        this.state = b.g
    }

    B(jt, Ej);

    function kt(a, b, c, d, e) {
        ht.call(this, b, c, d, e);
        this.o = a
    }

    B(kt, ht);
    kt.prototype.C = y;
    kt.prototype.Ze = function () {
        this.C();
        kt.G.Ze.call(this)
    };
    kt.prototype.l = function () {
        this.C();
        kt.G.l.call(this)
    };
    kt.prototype.j = function () {
        this.C();
        kt.G.j.call(this)
    };

    function lt(a, b, c, d, e) {
        typeof b === Eb && (b = [b]);
        typeof c === Eb && (c = [c]);
        kt.call(this, a, b, c, d, e);
        if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
        this.A = -1
    }

    B(lt, kt);
    var mt = 1 / 1024;
    lt.prototype.C = function () {
        var a = this.coords[0];
        if (Math.abs(a - this.A) >= mt) {
            var b = this.o.style;
            "opacity" in b ? b.opacity = a : "MozOpacity" in b ? b.MozOpacity = a : "filter" in b && (b.filter = "" === a ? "" : "alpha(opacity=" + 100 * Number(a) + ")");
            this.A = a
        }
    };
    lt.prototype.j = function () {
        this.A = -1;
        lt.G.j.call(this)
    };
    lt.prototype.l = function () {
        this.A = -1;
        lt.G.l.call(this)
    };

    function nt(a, b, c) {
        lt.call(this, a, 1, 0, b, c)
    }

    B(nt, lt);
    nt.prototype.j = function () {
        this.o.style.display = "";
        nt.G.j.call(this)
    };
    nt.prototype.l = function () {
        this.o.style.display = r;
        nt.G.l.call(this)
    };

    function ot(a, b, c) {
        lt.call(this, a, 0, 1, b, c)
    }

    B(ot, lt);
    ot.prototype.j = function () {
        this.o.style.display = "";
        ot.G.j.call(this)
    };

    function pt() {
        R.call(this);
        this.g = null
    }

    w(pt, R);
    v = pt.prototype;
    v.J = function () {
        this.Y(this.h.J(g, {"class": Sb}))
    };
    v.Y = function (a) {
        this.F = a;
        a.style.display = r
    };

    function qt(a) {
        var b = c;
        var c = A(function () {
            ti(this.s(), "");
            b && b()
        }, a);
        c = A(a.zi, a, 750, c);
        rt(a, c)
    }

    function st(a) {
        a.g && (a.g.stop(!0), a.g = null);
        ti(a.s(), "");
        a.O(!1)
    }

    function rt(a, b) {
        a.g = new ot(a.s(), 750);
        S(a).Eb(a.g, "begin", A(function () {
            this.s().style.display = "block"
        }, a));
        S(a).Eb(a.g, $a, A(function () {
            this.g = null;
            window.setTimeout(b, 2E3)
        }, a));
        a.g.play()
    }

    v.zi = function (a, b) {
        this.isVisible() && (this.g = new nt(this.s(), a), S(this).Eb(this.g, $a, A(function () {
            b && b()
        }, this)), this.g.play())
    };
    v.O = function (a) {
        this.s().style.display = a ? "block" : r;
        this.s().style.opacity = a ? "1" : "0"
    };
    v.isVisible = function () {
        return this.s().style.display !== r && "0" !== this.s().style.opacity
    };

    function tt() {
        Ko.call(this);
        this.V = {};
        this.pb = {};
        this.K = null;
        this.Vb = !1;
        this.qb = this.l = this.P = null;
        this.X = {};
        this.A = new Uk(this);
        this.H = this.j = this.m = this.Ta = this.g = this.N = this.xa = null;
        this.I = !0;
        this.cb = []
    }

    w(tt, Ko);
    v = tt.prototype;
    v.la = function () {
        this.I = !1;
        var a = Ad.test(gr) ? Pb : "ltr";
        this.Zb(Ei(zs, {
            Qi: "https://www.gstatic.com/images/branding/product/1x/translate_24dp.png",
            ck: ub,
            ek: rr,
            dir: a
        }));
        this.className += " skiptranslate";
        this.s() && this.K && this.Ta && this.m.s() && this.P && this.H && (this.A.D(window, "resize", A(this.kb, this)), this.A.D(this, rb, A(this.$i, this)), this.cb.length && (this.le.apply(this, this.cb), this.cb = []))
    };
    v.le = function (a) {
        for (var b = [], c = 0; c < arguments.length; ++c) {
            var d = arguments[c];
            if (d) if (this.K || d.Ld) {
                var e = d;
                var f = Yh(sa, {"class": e.className || "activity-link"});
                ti(f, e.Re || "");
                e = f;
                b.push(e);
                di(d.Ld || this.K, e);
                d.nc && d.Fb && (f = A(this.Th, this, d), this.A.D(e, Sa, f), d.Kd && this.A.D(this.P, d.Kd, f));
                d.id = d.id || pl(d);
                this.V[d.id] && this.Ng(d);
                this.V[d.id] = d;
                this.pb[d.id] = e
            } else this.cb.push(d)
        }
        return b
    };
    v.Ng = function (a) {
        for (var b = 0; b < arguments.length; ++b) {
            var c = typeof arguments[b] === t || arguments[b] instanceof String ? arguments[b] : arguments[b].id,
                d = this.V[c], e = this.pb[c];
            d && e && (this.l && this.l.id === c && this.te(), this.A.ha(d, [Tb, Na]), d.R(), this.X[c] && delete this.X[c], delete this.V[c], delete this.pb[c], hi(e))
        }
    };
    v.Th = function (a) {
        if (this.P) {
            a != this.l && this.l && (st(this.m), this.l.Fb.call(this.l), this.l.s() && (this.l.s().style.display = r), ut(this, !1), this.l = null);
            ut(this, !0);
            st(this.m);
            this.l = a;
            if (this.X[a.id]) {
                var b = this.X[a.id];
                var c = a.Kb
            } else a.la(), b = a.s(), c = a.nc, this.A.D(a, [Tb, Na], A(this.te, this)), a.ld && (this.X[a.id] = b);
            di(this.P, b);
            c.call(a, this);
            a = new ot(b, 100);
            this.A.Eb(a, $a, A(this.kb, this, !0, !0));
            a.play()
        }
    };
    v.te = function () {
        if (this.l) if (st(this.m), this.l.Fb.call(this.l), this.l.s()) {
            var a = new nt(this.l.s(), 100);
            this.A.Eb(a, $a, A(function () {
                hi(this.l.s());
                this.l = null;
                ut(this, !1);
                zi(this.m.s()) && (qt(this.m), this.kb(!0, !0))
            }, this));
            a.play()
        } else ut(this, !1), this.l = null
    };
    v.We = function (a, b) {
        this.qb = a;
        Ko.prototype.We.call(this, a, b);
        this.s().style.display = "block"
    };
    v.ge = function (a) {
        if (!this.I) {
            var b = To(this, a.target);
            this.Aa = b;
            this.cc();
            b != this.h ? (this.h = b, Uo(this, b), Vo(this), So(this, a)) : Uo(this, b)
        }
    };
    v.$i = function () {
        st(this.m);
        this.Vb && this.te()
    };
    v.L = function () {
        for (var a in this.V) this.Ng(a);
        this.A && this.A.R();
        this.A = null;
        this.m && this.m.R();
        this.H = this.Ta = this.qb = this.P = this.K = this.m = null;
        Ko.prototype.L.call(this)
    };

    function ut(a, b) {
        a.Vb = b;
        a.I = b;
        if (a.I) {
            var c = a.s();
            a.xa = new J(c.offsetLeft, c.offsetTop)
        } else a.xa && (null != (a.C || null) && ((a.C || null).g = a.xa), Vi(a.s(), a.xa), a.xa = null);
        a.K.style.display = b ? r : "inline-block";
        a.Ta.style.display = b ? "inline-block" : r
    }

    v.Tc = function (a) {
        if (this.isVisible()) {
            a = (this.Bc = a) ? this.o.D : this.o.ha;
            var b = K(this.s());
            a.call(this.o, b, zb, this.$e, !0)
        } else Ko.prototype.Tc.call(this, a)
    };
    v.Zb = function (a) {
        Ko.prototype.Zb.call(this, a);
        if (a) {
            this.K = Qh("activity-links", a);
            var b = Qh(Sb, a);
            b && (this.m = new pt, vl(this.m, b));
            this.Ta = Qh("started-activity-container", a);
            this.P = Qh("activity-root", a);
            this.H = Qh("original-text", a)
        }
    };
    v.kb = function (a, b) {
        var c = aj(document.body).y;
        if (this.C) {
            (this.C || null).g.y += c;
            Ko.prototype.kb.call(this);
            var d = parseInt(this.s().style.left, 10);
            a = parseInt(this.s().style.top, 10) - (a ? 0 : c);
            b && (b = this.Te || {}, a -= b.top || 10, d -= b.left || 10);
            a -= c;
            (this.C || null).g.y = a;
            (this.C || null).g.x = d;
            c = new J(d, a);
            Vi(this.s(), c)
        }
    };
    v.O = function (a) {
        Ko.prototype.O.call(this, a)
    };
    v.Tb = function (a) {
        this.g = a
    };
    v.va = function (a) {
        this.j = a
    };
    v.Oa = function (a) {
        a = a ? Fd(a) : "";
        this.H ? ti(this.H, a) : Ko.prototype.Oa.call(this, a)
    };
    v.hb = function () {
        return this.g
    };
    v.ra = function () {
        return this.j
    };
    v.xc = function () {
        return this.H ? zi(this.H) : Ko.prototype.xc.call(this)
    };
    v.ec = function (a) {
        this.I || Ko.prototype.ec.call(this, a)
    };
    v.Ed = function (a) {
        this.I || Ko.prototype.Ed.call(this, a)
    };
    v.Dd = function (a) {
        this.I || Ko.prototype.Dd.call(this, a)
    };
    var vt = {
        set: function (a, b) {
            a.className = b
        }, get: function (a) {
            a = a.className;
            return typeof a === t && a.match(/\S+/g) || []
        }, add: function (a, b) {
            var c = vt.get(a), d = bd(arguments, 1), e = c.length + d.length;
            vt.Pf(c, d);
            vt.set(a, c.join(" "));
            return c.length == e
        }, remove: function (a, b) {
            var c = vt.get(a), d = bd(arguments, 1), e = vt.cg(c, d);
            vt.set(a, e.join(" "));
            return e.length == c.length - d.length
        }, Pf: function (a, b) {
            for (var c = 0; c < b.length; c++) Xc(a, b[c]) || a.push(b[c])
        }, cg: function (a, b) {
            return Sc(a, function (c) {
                return !Xc(b, c)
            })
        }, ik: function (a,
                         b, c) {
            for (var d = vt.get(a), e = !1, f = 0; f < d.length; f++) d[f] == b && (ad(d, f--, 1), e = !0);
            e && (d.push(c), vt.set(a, d.join(" ")));
            return e
        }, $j: function (a, b, c) {
            var d = vt.get(a);
            typeof b === t ? Yc(d, b) : Array.isArray(b) && (d = vt.cg(d, b));
            typeof c !== t || Xc(d, c) ? Array.isArray(c) && vt.Pf(d, c) : d.push(c);
            vt.set(a, d.join(" "))
        }, has: function (a, b) {
            return Xc(vt.get(a), b)
        }, enable: function (a, b, c) {
            c ? vt.add(a, b) : vt.remove(a, b)
        }, toggle: function (a, b) {
            var c = !vt.has(a, b);
            vt.enable(a, b, c);
            return c
        }
    };

    function wt(a, b) {
        at.call(this, a);
        b = b || {};
        this.g = {eb: b.eb || "", Ob: b.Ob || 1};
        this.h = null
    }

    w(wt, at);
    v = wt.prototype;
    v.Jf = function (a, b) {
        b && (b.g = a, Lo(this.h, b))
    };
    v.Kf = function (a) {
        a && No(this.h, a)
    };
    v.ih = function () {
        var a = this.h.qb;
        if (a && void 0 !== a.g) {
            var b = a.g;
            a = this.m.j[b];
            bt(this, this.l, !1);
            this.l = b;
            bt(this, b);
            this.h.Tb(a.nj);
            this.h.va(a.pj);
            b = a.Z;
            this.h.N = b && Fd(b);
            this.h.Oa(a.text)
        }
    };
    v.hh = function () {
        bt(this, this.l, !1)
    };
    v.Ig = function () {
        this.m.j[this.l].Ph.dispatchEvent("updating")
    };
    v.L = function () {
        this.h.R();
        this.h = null;
        at.prototype.L.call(this)
    };
    v.ug = function (a, b) {
        vt[b ? "add" : "remove"](a, "goog-text-highlight")
    };/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
    var xt = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");

    function yt(a) {
        this.o = a;
        this.l = this.h = this.m = this.j = -1;
        this.g = !1;
        this.C = 0;
        this.B = "";
        this.H = 0
    }

    yt.prototype.start = function () {
        if (!this.g) {
            this.g = !0;
            var a = [], b;
            var c = 62;
            for (b = 0; 15 > b; b++) a[b] = xt[0 | Math.random() * c];
            this.B = a.join("");
            this.C = 0;
            this.l = this.h = this.m = this.j = -1;
            this.H = Ic();
            Rk(this.A, 1E4, this)
        }
    };
    yt.prototype.stop = function () {
        this.g && (this.g = !1, zt(this))
    };
    yt.prototype.A = function () {
        this.g && (zt(this), Rk(this.A, 1E3, this))
    };

    function zt(a) {
        var b = a.o.l, c = a.o.o, d = a.o.j, e = a.o.m;
        if (a.j != b || a.m != c || a.h != d || a.l != e) {
            var f = {};
            f.ct = b;
            f.cv = c;
            f.cts = d;
            f.cvs = e;
            f.sid = a.B;
            f.seq = a.C++;
            f.tat = Ic() - a.H;
            if (0 <= a.j || 0 <= a.m || 0 <= a.h || 0 <= a.l) f.pt = a.j, f.pv = a.m, f.pts = a.h, f.pvs = a.l;
            Ir("te_v", f);
            a.j = b;
            a.m = c;
            a.h = d;
            a.l = e
        }
    };

    function At() {
        this.m = this.j = this.o = this.l = 0;
        this.g = [];
        this.h = null != x.IntersectionObserver ? new IntersectionObserver(A(this.A, this)) : null
    }

    At.prototype.reset = function () {
        this.m = this.j = this.o = this.l = 0;
        this.g = []
    };
    At.prototype.A = function (a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (0 < c.intersectionRatio && null != c.target[Bt]) {
                this.o += zi(c.target).length;
                var d = c.target[Bt];
                this.m += this.g[d];
                this.g[d] = 0;
                c.target[Bt] = void 0
            }
        }
    };
    Rr(36546, At.prototype, {yg: 1});
    var Bt = "_gt_" + Math.random().toString(36).substr(2);

    function Ct(a, b) {
        O.call(this);
        a = a || {};
        this.g = kd(a);
        this.g.Ob = a.Ob;
        this.g.rf = !!a.rf;
        this.g.Kh = parseInt(a.Kh, 10) || 300;
        this.g.dj = a.dj;
        this.g.trackVisibility = a.trackVisibility || !1;
        this.A = 0;
        this.j = {};
        this.o = new Uk(this);
        this.l = new wt(this, this.g);
        b && (this.l.o = b || {});
        a = this.l;
        a.h = new tt({mj: a.g.mj});
        a.h.tg = 300;
        a.h.Tg = 1E3;
        a.h.Tc(!0);
        a.j.D(a.h, "show", A(a.ih, a));
        a.j.D(a.h, rb, A(a.hh, a));
        b = new Zs({eb: a.g.eb, id: "alternate", Re: Z.dh, ld: !0}, a.o);
        a.h.le(b);
        a.j.D(b, Tb, A(a.Ig, a));
        a.g.Ob && (b = new $s({
            id: "contribute",
            Kd: Xa, ld: !0
        }, a.o), a.h.le(b), a.j.D(b, Tb, A(a.Ig, a)));
        a.h.la();
        this.m = this.h = null;
        this.g.trackVisibility && null != x.IntersectionObserver && (this.h = new At, this.m = new yt(this.h))
    }

    w(Ct, O);

    function Dt(a) {
        a.m && a.m.stop();
        for (var b in a.j) {
            var c = a, d = b, e = c.j[d];
            if (e) {
                if (c.h) for (var f = c.h, h = e.Da, k = 0; k < h.length; ++k) {
                    var l = f, m = h[k];
                    li(m) ? (m[Bt] = void 0, l.h && l.h.unobserve(m)) : l.yg(m.nodeType)
                }
                for (f = 0; f < e.Da.length; ++f) e.Da[f] && c.l.Kf(e.Da[f]);
                delete c.j[d]
            }
        }
        a.h && a.h.reset()
    }

    Ct.prototype.L = function () {
        Dt(this);
        this.o.R();
        this.o = null;
        this.l.R();
        this.l = null
    };

    function Et(a) {
        for (var b = 0; b < a.length; ++b) if (a[b] && a[b].node) return a[b].node;
        return null
    }

    function Ft(a) {
        var b = Et(a);
        if (!b) return null;
        var c = [], d = [], e = [];
        b = new ts(b, !0);
        var f = a[a.length - 1].node, h = 0, k = !1;
        do {
            b.next();
            var l = b.node();
            if (!l) break;
            var m = b.g.m, n = b.depth();
            for (1 == m && --n; h < a.length && !a[h].node;) ++h;
            l == a[h].node || !k && 1 == m && (null != l && null == l.previousSibling ? 0 : !Gt(Ht(l))) ? (m = It(l), d.push({
                node: m,
                Oa: function () {
                }
            }), e[d.length - 1] = n, fi(m, l), l == a[h].node && (c[h++] = d.length - 1, k = !0)) : k = !1
        } while (l != f);
        return {xf: e, aj: c, Bi: d}
    }

    function Gt(a) {
        return null != a && rs[a.tagName]
    }

    function Ht(a) {
        if (null == a) return null;
        for (a = a.previousSibling; null != a && null != a && 3 == a.nodeType && "" == Fd(zi(a));) a = a.previousSibling;
        return a
    }

    function Jt(a, b, c, d, e, f) {
        Q.call(this);
        this.g = [];
        for (var h = 0; h < a.length; ++h) this.g.push("nodeType" in a[h] ? Kt(a[h]) : a[h]), Lt(a[h].node);
        this.j = b;
        this.M = d || 0;
        this.N = e || 0;
        this.C = c;
        this.A = f || null;
        this.K = this.H = this.P = !1;
        this.m = [];
        this.o = [];
        this.h = [];
        this.T = [];
        new Uk(this);
        this.l = this.I = !1
    }

    var Kt;
    w(Jt, Q);

    function Mt(a) {
        if (!a) return !1;
        if (3 != a.nodeType || !D) return Nt in a && !!a[Nt];
        if (!a.parentNode) return !0;
        if (!(Ot in a.parentNode)) return !1;
        var b = a.parentNode[Ot];
        if (!b || !b[a.nodeValue]) return !1;
        b = b[a.nodeValue];
        for (var c = 0; c < b.length; ++c) if (b[c] == a) return !0;
        return !1
    }

    function Pt(a, b) {
        if (!a) return "";
        if ("TITLE" == a.tagName) return String(document.title);
        3 == a.nodeType ? b = "nodeValue" : b || (b = "value");
        return a.getAttribute && a.getAttribute(b) ? String(a.getAttribute(b)) : typeof a[b] === t ? String(a[b]) : ""
    }

    Jt.prototype.ka = function () {
        return this.j
    };

    function Qt(a, b, c) {
        b = {Jg: b, cf: c, fa: []};
        a.h.push(b);
        return b
    }

    function Rt(a) {
        if (!a.l && a.P && !a.H && !a.K) {
            a.H = !0;
            var b;
            if (b = St(a.g)) {
                b = a.g;
                var c = a.h;
                if (1 == b.length && b[0] && b[0].wf) {
                    for (var d = [], e = 0; e < c.length; ++e) for (var f = 0; f < c[e].fa.length; ++f) d.push(c[e].fa[f].Z);
                    b[0].Oa(d.join(" "), b[0].node);
                    b = !0
                } else b = !1;
                b = !b
            }
            if (b && (b = Ft(a.g))) {
                a.o = b.aj;
                a.m = b.Bi;
                d = a.g;
                e = a.o;
                f = a.m;
                var h = b.xf;
                c = [];
                for (var k = 0; k < d.length; ++k) if (c[k] = [], d[k].node && void 0 !== e[k]) for (var l = 0; l < f.length; ++l) if (!(h[l] > h[e[k]])) {
                    if (h[l] == h[e[k]]) {
                        if (f[l].node.parentNode != f[e[k]].node.parentNode) continue
                    } else {
                        for (var m =
                            h[e[k]] - h[l], n = f[e[k]].node.parentNode; m-- && n && n != f[l].node.parentNode;) n = n.parentNode;
                        if (n != f[l].node.parentNode) continue
                    }
                    c[k].push(l)
                }
                d = a.g;
                e = a.h;
                f = -1;
                for (h = e.length - 1; 0 <= h; --h) for (k = e[h], l = k.fa.length - 1; 0 <= l; --l) if (m = k.fa[l], !(0 > m.W) && d[m.W] && d[m.W].node) if (0 > f) m.Hd = yr(c[m.W]), f = c[m.W][c[m.W].length - 1]; else for (n = c[m.W].length - 1; 0 <= n; --n) if (c[m.W][n] <= f) {
                    m.Hd = yr(c[m.W].slice(0, n + 1));
                    f = c[m.W][n];
                    break
                }
                for (c = d = 0; c < a.h.length; ++c) {
                    e = a.h[c];
                    f = a.g;
                    h = e;
                    k = b.xf;
                    l = a.o;
                    m = "";
                    for (n = 0; n < h.fa.length; ++n) {
                        var q =
                            h.fa[n];
                        m += q.Z;
                        if (0 > q.W) {
                            var u = -1, z = -1, G = l[h.fa[n - 1].W];
                            void 0 !== G && (u = k[G]);
                            n < h.fa.length - 1 && (G = l[h.fa[n + 1].W], void 0 !== G && (z = k[G]));
                            if (0 <= u || 0 <= z) a:if (z = (0 > u || z < u) && n < h.fa.length - 1, u = h.fa[z ? n + 1 : n - 1], !(u.W >= f.length || null == f[u.W].node)) {
                                G = q.Z;
                                q.Z = "";
                                if (/^ +$/.test(G) && (q = z ? u.Z.charCodeAt(0) : u.Z.charCodeAt(u.Z.length - 1), 3584 <= q && 3711 >= q || 12288 <= q && 12351 >= q || 12352 <= q && 12543 >= q || 12784 <= q && 12799 >= q || 19968 <= q && 40959 >= q || 65280 <= q && 65519 >= q)) break a;
                                u.Z = z ? G + u.Z : u.Z + G
                            }
                        }
                    }
                    f = m;
                    h = a.g;
                    k = e;
                    l = a.m;
                    m = b.xf;
                    n = a.o;
                    q = [];
                    for (u = 0; u < k.fa.length && !(d >= l.length); ++u) if (z = k.fa[u], z.Hd && !(0 > z.W) && h[z.W].node && z.Z) if (d == n[z.W] || d in z.Hd && (!(d + 1 in z.Hd) || d + 1 != n[z.W])) {
                        if (l[d] && l[d].node) {
                            G = It(l[d].node);
                            q.push(G);
                            for (var U = l[d].node, Cg = m[n[z.W]] - m[d], qc = G, Ha = h[z.W].node.parentNode, pc = qc; Ha && Cg--;) pc = Ha.cloneNode(!1), pc.appendChild(qc), Ha = Ha.parentNode, qc = pc;
                            U.appendChild(pc);
                            U = h[z.W].node;
                            h[z.W].Yd ? h[z.W].vg || G.appendChild(U) : (U = h[z.W].node.cloneNode(!1), U.id && (U.id = ""), G.appendChild(U));
                            h[z.W].Oa(z.Z, U)
                        }
                    } else ++d,
                        --u;
                    h = q;
                    q = a.g;
                    k = a.C;
                    if (e.Jg) k = e.Jg; else {
                        l = q.length;
                        m = -1;
                        for (n = 0; n < e.fa.length; ++n) u = e.fa[n].W, 0 <= u && q[u] && q[u].node && (m = Math.max(m, u), l = Math.min(l, u));
                        q = "";
                        for (n = l; n <= m; ++n) k[n] && (q += k[n]);
                        k = q
                    }
                    m = h;
                    n = k;
                    if (a.A) {
                        if (3 != a.A.g.Ob) {
                            h = a.T;
                            k = h.push;
                            l = a.A;
                            e = e.cf;
                            q = a;
                            e = l.j[++l.A] = {
                                id: l.A.toString(),
                                Ph: q,
                                text: n,
                                gk: e || n,
                                Z: f,
                                nj: l.C,
                                pj: l.B,
                                Da: m
                            };
                            for (f = 0; f < m.length; ++f) m[f] && l.l.Jf(e.id, m[f]);
                            if (l.h) for (f = l.h, q = n.length, f.j += q, n = f.g.length, f.g.push(q), q = 0; q < m.length; ++q) u = f, z = m[q], li(z) ? (z[Bt] = n, u.l += zi(z).length,
                            u.h && u.h.observe(z)) : u.yg(z.nodeType);
                            l.m && l.m.start();
                            k.call(h, e.id)
                        }
                    } else for (e = 0; e < m.length; ++e) m[e].title = n
                }
                b = a.g;
                for (c = 0; c < b.length; ++c) b[c].node && !b[c].Yd && hi(b[c].node);
                b = a.g;
                c = a.m;
                a = a.o;
                for (e = d = 0; e < c.length; ++e) if (f = c[e].node) {
                    for (; d < b.length && e > a[d];) d++;
                    (d >= b.length || e != a[d]) && !f.firstChild && (hi(f), c[e].node = null)
                }
            }
        }
    }

    Jt.prototype.restore = function () {
        if (this.H) if (this.H = !1, this.A && Dt(this.A), this.T = [], St(this.m), 1 == this.g.length && this.g[0].wf) this.g[0].Oa(this.C[0], this.g[0].node); else {
            for (var a = 0, b = 0; b < this.m.length; ++b) {
                var c = this.m[b].node;
                if (c) {
                    for (; a < this.g.length && b > this.o[a];) {
                        var d = a++;
                        this.g[d].node && (Tt(this.g[d].node), this.g[d].node = null)
                    }
                    if (a < this.g.length && b == this.o[a] && this.g[a].node) {
                        this.g[a].vg || (ei(c), c.appendChild(this.g[a].node));
                        this.g[a].Oa(this.C[a], this.g[a].node);
                        a++;
                        d = c;
                        var e = d.parentNode;
                        if (e && 11 != e.nodeType) if (d.removeNode) d.removeNode(!1); else {
                            for (; c = d.firstChild;) e.insertBefore(c, d);
                            hi(d)
                        }
                    } else hi(c)
                }
            }
            this.m = []
        }
    };
    Jt.prototype.L = function () {
        Q.prototype.L.call(this);
        this.restore();
        for (var a = 0; a < this.g.length; ++a) this.g[a].node && Tt(this.g[a].node);
        this.g = null
    };

    function Lt(a) {
        if (a) if (3 == a.nodeType && D) {
            Ot in a.parentNode && a.parentNode[Ot] || (a.parentNode[Ot] = {});
            var b = a.parentNode[Ot];
            b[a.nodeValue] || (b[a.nodeValue] = []);
            b = b[a.nodeValue];
            for (var c = 0; c < b.length; ++c) if (b[c] == a) return;
            b.push(a)
        } else a[Nt] = 1
    }

    function Tt(a) {
        if (!a || 3 == a.nodeType && D) {
            var b = a.parentNode;
            if (b && Ot in b) {
                var c = b[Ot];
                if (c && a && c[a.nodeValue]) {
                    var d = c[a.nodeValue];
                    if (d) for (var e = 0; e < d.length; ++e) if (d[e] == a) {
                        d.splice(e, 1);
                        break
                    }
                    0 == d.length && delete c[a.nodeValue]
                }
                if (c && Nr(c)) try {
                    delete b[Ot]
                } catch (f) {
                    b[Ot] = ""
                }
            }
        } else if (Nt in a) try {
            delete a[Nt]
        } catch (f) {
            a[Nt] = ""
        }
    }

    function St(a) {
        for (var b = 0; b < a.length; ++b) try {
            a[b].node && !a[b].node.parentNode && (a[b].node = null)
        } catch (c) {
            a[b].node = null
        }
        for (b = a.length - 1; 0 <= b && !a[b].node; --b) ;
        a.length = b + 1;
        return a.length
    }

    function It(a) {
        a = a.ownerDocument ? a.ownerDocument.createElement("font") : $h(document, "font");
        Lt(a);
        a.style.verticalAlign = "inherit";
        return a
    }

    function Ut() {
        this.h = {};
        this.g = {}
    }

    Ut.prototype.has = function (a, b) {
        return null != this.h[a] || null != this.g[a] || b && (a in this.h || a in this.g)
    };
    Ut.prototype.write = function (a, b) {
        this.g[a] = b
    };
    Ut.prototype.remove = function (a) {
        delete this.g[a];
        delete this.h[a]
    };
    var Nt = "_gt_" + Math.random().toString(36).substr(2), Ot = "_gtn_" + Math.random().toString(36).substr(2);
    (function () {
        function a(c) {
            document.title = c
        }

        var b = {};
        Kt = function (c, d) {
            if ("TITLE" == c.tagName) return {node: c, Oa: a, Yd: !0, vg: !0, wf: !0};
            if (3 == c.nodeType) return {
                node: c, Oa: function (e, f) {
                    ti(f, e)
                }
            };
            d || (d = "value");
            b[d] || (b[d] = function (e, f) {
                f.setAttribute && f.setAttribute(d, e);
                typeof e === t && (f[d] = e)
            });
            c = {node: c, Oa: b[d], Yd: !0};
            "value" != d && (c.wf = !0);
            return c
        }
    })();

    function Vt(a, b, c, d) {
        d = d.firstChild && 3 == d.firstChild.nodeType ? d.firstChild.nodeValue : zi(d);
        d = {W: c, Z: bf(d)};
        a.push(d);
        b[c] ? b[c].end = d : b[c] = {start: d, end: d};
        return d
    }

    function Wt(a) {
        for (var b, c = a.firstChild; c; c = b) b = c.nextSibling, 3 != c.nodeType && (c == a.firstChild ? fi(c, a) : gi(c, a), Wt(c))
    };

    function Xt(a, b, c, d, e) {
        b = b || {};
        this.K = e || [];
        this.o = [];
        this.H = [];
        Yt(this, a || document.documentElement, void 0 === b.Og || !!b.Og);
        this.C = c || Jt;
        this.B = b.Fi;
        this.j = this.g = this.m = this.Gc = null;
        this.A = !!b.sj;
        this.P = !!b.rj;
        this.wa = this.A ? 27 : 13;
        this.I = !0;
        this.M = [];
        this.l = new pn(this, d)
    }

    function Zt(a, b, c, d) {
        a.l.j || (b = {
            Yg: b,
            Ug: c,
            Da: [],
            Kg: [],
            Lb: [],
            textLength: 0,
            size: 0,
            continuous: !0
        }, a.Gc = null, qn(a.l, a.h), rn(a.l, d), sn(a.l, A(function (e) {
            this.Mi(e);
            d()
        }, a)), tn(a.l, b))
    }

    function $t(a, b) {
        return 0 < a.Da.length ? new b(a.Da, a.Lb.join(""), a.Kg, a.textLength, a.size) : null
    }

    function au(a, b) {
        if (!a.j) return a.Gc = $t(b, a.C), !0;
        if (!b.continuous && 0 < b.Da.length) return a.Gc = $t(b, a.C), !0;
        b.continuous = a.j.Eg;
        a:{
            var c = a.j;
            var d = a.wa;
            if (b.size > b.Ug || b.textLength > b.Yg) c = !1; else {
                var e = c.size, f = c.text.length;
                if (0 != b.Da.length && (e += 1 == b.Da.length ? b.size + d + d : b.size + d, f += b.textLength, e > b.Ug || f > b.Yg)) {
                    c = !1;
                    break a
                }
                b.size = e;
                b.textLength = f;
                b.Da.push(c.node);
                b.Kg.push(c.text);
                d = b.Da.length - 1;
                0 == d ? b.Lb.push(c.ye) : (1 == d && (b.Lb[0] = "<a i=0>" + b.Lb[0] + "</a>"), b.Lb.push("<a i=" + d + ">"), b.Lb.push(c.ye),
                    b.Lb.push("</a>"));
                c = !0
            }
        }
        if (c) return a.j = null, !1;
        a.Gc = $t(b, a.C);
        return !0
    }

    function bu(a, b, c) {
        var d = Pt(b, c);
        d && Fd(Ve(d)) && a.M.push({node: b, Gh: c, text: d})
    }

    Xt.prototype.h = function (a, b) {
        var c = this;
        if (this.j && au(this, b)) return wn;
        if (!this.g) {
            this.I = !!this.o.length;
            if (!this.o.length && (a = this.M.shift())) return this.j = {
                Eg: !1,
                node: Kt(a.node, a.Gh),
                text: a.text,
                ye: af(a.text),
                size: this.A ? Ze(a.text).length : a.text.length
            }, b.continuous = !1, au(this, b), wn;
            a = this.o.shift() || this.H.shift();
            if (!a) return this.j = null, au(this, b), wn;
            this.m = [a.qj];
            this.g = new ts(a.root)
        }
        this.g.next();
        if (this.g.done) return this.g = null, b.continuous = !1, this.h;
        a = this.g.node();
        var d = this.g.g.m;
        if (-1 ==
            d) return cu(this), du(a) || (b.continuous = !1), this.h;
        eu(this, a);
        d = 1 == d;
        var e = fu(a);
        if ((e || d) && this.I && !gu(a)) return Yt(this, a, hu(this), !0), this.g.g.C(), cu(this), this.h;
        if (d && hu(this) && (this.P && bu(this, a, "title"), bu(this, a, "alt"), bu(this, a, "placeholder"), bu(this, a, "aria-label"), bu(this, a, "aria-placeholder"), bu(this, a, "aria-roledescription"), bu(this, a, "aria-valuetext"), vs(this.g))) for (var f = a.firstChild; f;) {
            if (3 == f.nodeType) {
                var h = f.nodeValue.split("\n");
                if (2 < h.length || 2 == h.length && "" != Fd(h[0]) && "" != Fd(h[1])) {
                    f.nodeValue =
                        h[0];
                    for (var k = 1; k < h.length; ++k) {
                        var l = K(a).createElement("font");
                        this.K.push(l);
                        gi(l, f);
                        f = l;
                        gi(K(a).createTextNode("\n" + h[k]), f);
                        f = f.nextSibling
                    }
                }
            }
            f = f.nextSibling
        }
        a.shadowRoot && Array.from(a.shadowRoot.childNodes).forEach(function (n) {
            Yt(c, n, hu(c))
        });
        if (e) {
            this.g.g.C();
            if (hu(this)) {
                var m = Pt(a);
                if (Fd(Ve(m)) && (this.j = {
                    Eg: !0,
                    node: Kt(a),
                    text: m,
                    ye: af(m),
                    size: this.A ? Ze(m).length : m.length
                }, au(this, b))) return cu(this), wn
            }
            cu(this);
            return this.h
        }
        if (d) {
            if (iu(a) || !a.firstChild && a.tagName != ma) return b.continuous =
                b.continuous && !!rs[a.tagName], this.g.g.C(), cu(this), this.h;
            if (a.tagName == ma) {
                try {
                    a.src.match(/https?:\/\//) && rg(a.src.match(qg)[3] || null) != window.location.hostname || (m = ri(a).documentElement) && Yt(this, m, hu(this))
                } catch (n) {
                }
                b.continuous = !1;
                this.g.g.C();
                cu(this);
                return this.h
            }
            hu(this) && du(a) ? this.B && "A" == a.tagName && a.href && this.B(a) : b.continuous = !1;
            return this.h
        }
        this.g.g.C();
        cu(this);
        return this.h
    };

    function iu(a) {
        return Mt(a) || 3 != a.nodeType && (!a.tagName || qs[a.tagName] || rs[a.tagName] || Ki(a, Rb))
    }

    function ju(a) {
        var b = K(a);
        return b.defaultView && b.defaultView.getComputedStyle ? b.defaultView.getComputedStyle(a, null) : a.currentStyle
    }

    function gu(a) {
        return 3 == a.nodeType ? !0 : 1 != a.nodeType ? !1 : a.offsetWidth && a.offsetHeight ? !0 : (a = ju(a), !!a && a.display != r && a.visibility != qb)
    }

    function du(a) {
        if (3 == a.nodeType) return !0;
        if (1 != a.nodeType) return !1;
        var b = ju(a);
        return !!ps[a.tagName] && (!b || !b.display || "inline" == b.display)
    }

    function fu(a) {
        return !!a && (3 == a.nodeType && typeof a.nodeValue === t || "TITLE" == a.tagName && typeof a.value === t || a.tagName == ua && Ki(a, $b) || a.tagName == na && (ss[a.type] || Ki(a, $b)))
    }

    function Yt(a, b, c, d) {
        (d ? a.H : a.o).push({root: b, qj: void 0 === c || c})
    }

    function hu(a) {
        return a.m[a.m.length - 1]
    }

    function eu(a, b) {
        b = !Mt(b) && (b.nodeType == Nc && hu(a) || !(Ki(b, "notranslate") || b.attributes && b.attributes.translate && "no" == b.attributes.translate.value) && (Ki(b, $b) || !!b.attributes && !!b.attributes.translate && "yes" == b.attributes.translate.value || hu(a)));
        a.m.push(b)
    }

    function cu(a) {
        a.m.pop()
    }

    Rr(5762, Xt.prototype, {Mi: 1});

    function ku() {
        O.call(this);
        this.g = []
    }

    w(ku, O);
    ku.prototype.restore = function () {
        Rk(this.h, 0, this)
    };
    ku.prototype.h = function () {
        for (var a = 0; a < this.g.length; ++a) hi(this.g[a]);
        this.g = []
    };
    ku.prototype.L = function () {
        O.prototype.L.call(this);
        this.restore()
    };

    function lu(a) {
        var b = new Io;
        pg(a, function (c) {
            if (li(c)) b.add(c); else {
                a:{
                    var d;
                    if (Fh && !(D && H("9") && !H("10") && x.SVGElement && c instanceof x.SVGElement) && (d = c.parentElement)) {
                        c = d;
                        break a
                    }
                    d = c.parentNode;
                    c = li(d) ? d : null
                }
                null != c && b.add(c)
            }
        });
        return b
    };

    function mu(a) {
        this.h = !0;
        this.l = a;
        this.j = !1;
        this.g = []
    }

    mu.prototype.ka = function () {
        return this.g.join("")
    };

    function nu(a, b) {
        this.m = a;
        this.l = !0;
        this.j = b;
        this.g = null;
        this.h = 0
    }

    function ou(a, b) {
        return a.l ? (b(A(a.o, a), a.m, a.j ? "en" : ""), !0) : !1
    }

    nu.prototype.o = function (a, b, c) {
        this.g = b;
        this.h = c;
        a()
    };

    function pu(a, b) {
        this.l = a;
        this.B = !!b;
        this.g = this.C = 0;
        this.m = this.j = -1;
        this.o = this.A = this.h = 0
    }

    function qu(a, b, c) {
        a.B && (b -= 9);
        for (var d = "", e = 0, f = a.C; f < a.l.length; ++f) {
            var h = a.l.charAt(f), k = h.charCodeAt(0);
            e++;
            a.h += a.B ? 127 >= k ? 32 >= k || ru[k] ? 3 : 1 : 2047 >= k || 55296 <= k && 56319 >= k || 56320 <= k && 57343 >= k ? 6 : 9 : 1;
            k = a.h >= b;
            su[h] ? (a.m = f, a.A = a.h, k = k || e > c) : " " == h && (a.j = f, a.o = a.h, k = k || e > c);
            if (k) return 0 <= a.m ? (d = a.l.substring(a.g, a.m + 1), a.h -= a.A, a.g = a.m + 1, a.m >= a.j ? (a.j = -1, a.o = 0) : a.o -= a.A, a.m = -1, a.A = 0) : 0 <= a.j ? (d = a.l.substring(a.g, a.j + 1), a.h -= a.o, a.g = a.j + 1, a.j = -1, a.o = 0) : (d = a.l.substring(a.g, f + 1), a.h = 0, a.g = f + 1, a.m = a.j =
                -1, a.o = a.A = 0), a.C = f + 1, d
        }
        a.g < a.l.length && (d = a.l.substring(a.g), a.g = a.l.length);
        return d
    }

    var su = yr(". , ; : \\? !".split(" ")),
        ru = yr([34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 127]);

    function tu(a, b, c, d, e, f) {
        this.A = d || y;
        this.V = f || y;
        this.wa = !!e;
        this.j = a.g.Ve;
        this.l = 0;
        this.I = y;
        this.B = c;
        this.H = this.h = this.m = 0;
        this.g = null;
        this.K = 0;
        this.ja = !1;
        this.X = a.g.Ue;
        this.P = [];
        this.N = 0;
        this.o = (this.Pa = a.g.qd) ? a.g.Md - (new tg(a.g.qa.g)).toString().length : a.g.Md;
        this.xa = this.wa ? 1 : 6;
        this.ya = a.g.lf;
        this.T = b;
        this.C = [];
        this.S = a
    }

    function uu(a, b) {
        var c = 0;
        a.I = A(function () {
            ++c == this.C.length && b()
        }, a)
    }

    function vu(a, b, c) {
        if (0 == a.h && (a.h = b ? 860 : a.o, !c || c <= a.o)) {
            a.m = a.h;
            return
        }
        do b = a.h, a.h < a.o && (a.h *= a.xa, a.h > a.o && (a.h = a.o)); while (b != a.h && c && a.h < c);
        a.m = a.h
    }

    function wu(a, b) {
        var c = null != b, d = !c && !a.ja;
        (d || c) && a.A(100, d, b)
    }

    function xu(a) {
        return a.Pa ? a.g.N : a.g.ka().length
    }

    function yu(a, b, c, d, e) {
        return new Xt(a.T.shift(), {sj: a.Pa, Fi: b, Og: !0, rj: !!c}, function () {
            var f = Array.prototype.slice.call(arguments);
            return new Jt(f.shift(), f.shift(), f.shift(), f.shift(), f.shift(), c, d)
        }, a.B, e)
    }

    function zu(a, b, c) {
        if (0 < a.X && Au(b) >= a.X) return !0;
        if (xu(a) > a.h) {
            if (0 < Au(b)) return !0;
            vu(a, c, xu(a));
            for (var d = a.g.ka(), e = new pu(d, a.Pa), f; f = qu(e, a.h, a.j);) if (b.m.push(new nu([f], !1)), a.l += f.length, a.j -= f.length, 0 >= a.j) {
                b.H = d.substring(e.g);
                break
            } else vu(a, c);
            Bu(b, a.g, !0);
            a.g = null;
            return !0
        }
        if (xu(a) > a.m) return !0;
        Bu(b, a.g, !0);
        a.m -= xu(a) + a.ya;
        a.l += a.g.M;
        a.j -= a.g.M;
        a.g = null;
        return !1
    };

    function Cu(a, b) {
        O.call(this);
        this.l = b;
        this.j = {rootMargin: a};
        this.g = new IntersectionObserver(A(this.h, this), this.j)
    }

    w(Cu, O);
    Cu.prototype.L = function () {
        O.prototype.L.call(this);
        this.g = null
    };
    Cu.prototype.h = function (a) {
        for (var b = 0; b < a.length; b++) if (0 < a[b].intersectionRatio) {
            this.l();
            break
        }
    };

    function Du() {
        R.call(this)
    }

    w(Du, R);
    Du.prototype.J = function () {
        this.Y(Ei(Ds))
    };
    Du.prototype.Y = function (a) {
        this.F = a
    };

    function Eu(a) {
        Mi(a.s(), pb);
        Mi(a.s().firstChild, ob)
    };

    function Fu() {
        this.g = new Du;
        this.g.J();
        this.g.la();
        this.h = 0
    }

    Fu.prototype.reset = function () {
        this.h = 0;
        Eu(this.g)
    };

    function Gu(a, b, c, d, e, f, h, k) {
        this.m = a;
        this.h = b;
        this.C = [];
        this.H = null;
        this.l = c;
        this.g = d;
        this.j = e;
        this.wa = f;
        this.P = h;
        this.B = this.o = null;
        this.A = k || null;
        this.K = this.I = !1;
        this.M = {}
    }

    function Hu(a) {
        for (var b = new Io, c = 0; c < a.length; c++) {
            for (var d = a[c], e = new Io, f = 0; f < d.g.length; f++) {
                var h = d.g[f].node;
                null != h && e.add(h)
            }
            d = b;
            e = ng(e);
            f = e.length;
            for (h = 0; h < f; h++) d.add(e[h])
        }
        return b
    }

    v = Gu.prototype;
    v.trackVisibility = function (a) {
        a = this.o = new Cu("200px", A(this.pi, this, a));
        var b = lu(Hu([].concat(this.h, this.C)));
        pg(b, A(a.g.observe, a.g));
        a = this.B = new Cu("0px", A(this.ui, this));
        b = lu(Hu([].concat(this.h, this.C)));
        pg(b, A(a.g.observe, a.g))
    };
    v.pi = function (a) {
        this.o && (this.o.g.disconnect(), this.o = null);
        a()
    };
    v.ui = function () {
        this.I = !0;
        Iu(this);
        if (!this.K && this.A) {
            var a = this.A;
            0 == a.h++ && (a = a.g, L(a.s(), pb), L(a.s().firstChild, ob))
        }
    };

    function Iu(a) {
        a.B && (a.B.g.disconnect(), a.B = null)
    }

    v.Lf = function () {
        if (this.I && !this.K && this.A) {
            var a = this.A;
            0 == --a.h && Eu(a.g)
        }
        this.o && (this.o.g.disconnect(), this.o = null);
        Iu(this)
    };

    function Bu(a, b, c) {
        c ? (a.h.push(b), a.M[b.ka()] = !0) : a.C.push(b)
    }

    function Au(a) {
        return a.h.length + a.C.length
    }

    function Ju(a) {
        if (0 == a.m.length) {
            for (var b = [], c = 0; c < a.h.length; ++c) b.push(a.h[c].ka());
            a.m.push(new nu(b, !1))
        }
    }

    v.translate = function (a) {
        function b() {
            d++;
            d == c && e()
        }

        Ju(this);
        for (var c = 0, d = 0, e = y, f = this.l, h = this.g, k = this.j, l = this.wa, m = this.P, n = 0; n < this.m.length; ++n) ou(this.m[n], function (q, u, z) {
            q = f.S.translate(Hc(q, b), u, z || h, k, ++f.N, l, m, f.wa);
            f.P.push(q);
            return q
        }) && c++;
        0 != c && (e = un(a));
        return c
    };

    function Ku(a, b) {
        O.call(this);
        this.h = [];
        this.l = [];
        this.g = a;
        this.j = b
    }

    w(Ku, O);
    Ku.prototype.m = function (a) {
        var b = Fd(a.href);
        0 == b.indexOf("javascript:") || 0 <= b.indexOf("#") || (this.l.push(a.href), this.h.push(a), a.href = b + "#googtrans/" + this.g + "/" + this.j)
    };
    Ku.prototype.L = function () {
        O.prototype.L.call(this);
        this.restore()
    };
    Ku.prototype.restore = function () {
        if (this.h.length) {
            for (var a = 0; a < this.h.length; ++a) this.h[a].href = this.l[a];
            this.h = [];
            this.l = []
        }
    };

    function Lu(a, b) {
        O.call(this);
        this.g = a;
        this.h = Ad.test(b) ? "translated-rtl" : "translated-ltr";
        a = [].concat(this.g);
        for (b = 0; b < a.length; ++b) li(a[b]) && L(a[b], this.h)
    }

    w(Lu, O);
    Lu.prototype.L = function () {
        O.prototype.L.call(this);
        this.restore()
    };
    Lu.prototype.restore = function () {
        for (var a = [].concat(this.g), b = 0; b < a.length; ++b) li(a[b]) && Mi(a[b], this.h)
    };

    function Mu(a, b, c, d, e, f, h, k, l, m) {
        O.call(this);
        this.B = a;
        this.Db = b;
        this.S = c || null;
        this.ja = m || null;
        this.I = null;
        this.Sa = !!d;
        this.bc = e || "transparent";
        this.Vb = !!f;
        this.H = [];
        this.qb = this.M = this.h = !1;
        this.l = k || new Ut;
        this.Jh = !k;
        this.X = h || ln.da();
        this.Ta = new ku;
        this.xa = this.ua = this.K = !1;
        this.cb = this.m = .5;
        this.pb = .01;
        this.C = new mn(this.m);
        this.N = (this.A = this.V = !!l) ? new MutationObserver(A(this.ki, this)) : null;
        this.j = this.g = null;
        P(window, Ja, this.qg, !0, this);
        P(window, cb, this.rg, !0, this)
    }

    w(Mu, O);
    v = Mu.prototype;
    v.hb = function () {
        return this.g ? this.g : ""
    };
    v.ra = function () {
        return this.j ? this.j : ""
    };
    v.Mh = function (a) {
        this.Ii.apply(this, arguments);
        this.o && this.o(0, !1, 1)
    };
    v.Zf = function (a) {
        this.Ji.apply(this, arguments);
        this.o && this.o(0, !1, 1)
    };
    v.Nh = function (a) {
        this.Ki.apply(this, arguments);
        this.o && this.o(0, !1, 1)
    };
    v.Oh = function (a) {
        this.Li.apply(this, arguments);
        this.o && this.o(0, !1, 1)
    };
    v.translate = function (a, b, c, d, e) {
        if (d || a != this.g || b != this.j) Nu(this), this.Jh && (this.l = new Ut); else if (this.h) return;
        this.o = c;
        this.kd = e;
        this.A = this.V;
        this.N && this.N.observe(document.body, {attributes: !0, childList: !0, characterData: !0, subtree: !0});
        this.h = !0;
        this.g = a;
        this.j = b;
        this.Sa && (this.I = new Ku(a, b));
        this.xa = this.g == Fa;
        this.S && (c = this.S, a && (c.C = a), b && (c.B = b));
        this.ya = new Lu(this.B, this.j);
        this.P = Ou(this);
        (a = this.B instanceof Node ? this.B : null) && Pu(a, this.j)
    };

    function Ou(a) {
        var b = new pn(a, a.X);
        qn(b, a.mg);
        sn(b, A(a.Mh, a));
        tn(b, new tu(a.Db, [].concat(a.B), a.X, a.o, a.A, a.kd));
        return b
    }

    v.restore = function () {
        Nu(this);
        this.Ta.restore();
        var a = this.B instanceof Node ? this.B : null;
        a && Pu(a, this.hb())
    };
    v.L = function () {
        O.prototype.L.call(this);
        this.restore();
        ck(window, Ja, this.qg, !0, this);
        ck(window, cb, this.rg, !0, this)
    };

    function Qu(a, b, c, d) {
        var e = Nr(a.l.h), f = new pn(a, b.B);
        b.C.push(f);
        rn(f, b.I);
        vu(b, e);
        qn(f, d || a.ig);
        b = c || new Gu([], [], b, a.hb(), a.ra(), a.qb, a.M, a.ja);
        sn(f, a.ri, a);
        a.A && rn(f, b.Lf, b);
        tn(f, b)
    }

    v.ri = function (a, b, c) {
        c.Lf();
        this.M ? this.Oh(a) : this.Nh(a);
        c.l.I()
    };
    v.rg = function () {
        this.K = !1;
        this.T = 0;
        nn(this.C, this.m)
    };
    v.qg = function (a) {
        a.target == window && (this.K = !0, this.T = 0, nn(this.C, .01))
    };
    v.ki = function (a) {
        if (this.h && this.A) {
            for (var b = 0; b < a.length; b++) if (a[b].target && a[b].target.className && typeof a[b].target.className === t && (0 <= a[b].target.className.indexOf($b) || 0 == a[b].target.className.indexOf("goog-"))) return;
            this.X.add(A(this.ej, this))
        }
    };
    v.ej = function () {
        this.M = !0;
        this.P.stop();
        this.P = Ou(this);
        return !1
    };
    v.mg = function (a, b) {
        uu(b, un(a));
        Qu(this, b);
        return this.wi
    };
    v.wi = function (a, b) {
        if (!this.h) return wn;
        if (!vn(a)) return xn;
        if (!this.A) for (a = 0; a < this.H.length; ++a) {
            var c = A(this.Qf, this, b, this.H[a]);
            b.B.add(c)
        }
        return this.vi
    };
    v.fg = function (a, b) {
        if (this.T && !this.K) {
            a = (new Date).getTime() - this.T;
            var c = this.m;
            900 > a && .01 < c ? c = Math.max(.9 * c, .01) : 1100 < a && .5 > c && (c = Math.min(1.5 * c, .5));
            this.m = c;
            this.ua ? this.pb = .01 : this.cb = this.m
        }
        this.M = this.h = !0;
        this.T = (new Date).getTime();
        this.Sf != (a = document.body.innerText || document.body.textContent || document.body.innerHTML) ? (this.Sf = a, a = !0) : a = !1;
        a ? (this.ua = !1, this.m = this.cb, this.K || nn(this.C, this.m), a = [].concat(this.B), c = this.C, b.A = y, b.T = a, b.g = null, b.N = 0, b.C = [], b.I = y, b.B = c, a = new pn(this, this.C),
            qn(a, this.mg), sn(a, A(this.Zf, this)), tn(a, b), this.P = a) : (this.ua = !0, this.m = this.pb, this.K || nn(this.C, this.m), a = new pn(this, this.C), qn(a, this.fg), sn(a, A(this.Zf, this)), tn(a, b), this.P = a);
        return wn
    };
    v.vi = function (a, b) {
        if (!this.h) return wn;
        this.M = this.h = !1;
        this.xa ? wu(b, !0) : (wu(b), b.V(b.l));
        if (this.Vb) return this.fg;
        for (a = 0; a < b.C.length; ++a) b.C[a].stop();
        for (a = 0; a < b.P.length; ++a) ns(b.S, b.P[a]);
        return wn
    };

    function Ru(a, b, c) {
        a:{
            var d = a.Sa ? A(a.I.m, a.I) : y, e = a.S, f = a.bc, h = a.Ta.g;
            b = un(b);
            if (!c.M) {
                if (0 == c.T.length) {
                    0 == c.l && 0 == c.N && c.A(0, !0);
                    c = !1;
                    break a
                }
                c.M = yu(c, d, e, f, h)
            }
            c.ua = !0;
            Zt(c.M, c.j, c.h, b);
            c = !0
        }
        return c ? a.ig : a.Ad
    }

    v.ig = function (a, b) {
        if (!this.h) return wn;
        var c = b.l;
        if (null == c.g) {
            if (!c.ua) return Ru(this, a, b.l);
            if (!vn(a)) return xn;
            c.ua = !1;
            c.g = c.M.Gc || null;
            var d = c.g ? c.g : c.M = null;
            if (!d) return Ru(this, a, b.l);
            this.H.push(d);
            var e = d.ka();
            if (this.l.has(e, !this.A) || null != b.M[e] && b.M[e]) return e = c.g.M, c.l += e, c.j -= e, c.g = null, this.A && Bu(b, d, !1), Ru(this, a, b.l);
            this.l.g[d.ka()] = null
        }
        0 < Au(b) && nn(this.C, .5);
        return zu(c, b, Nr(this.l.h)) ? this.Ad : Ru(this, a, b.l)
    };
    v.Ad = function (a, b) {
        if (!this.h || 0 == Au(b)) return wn;
        Qu(this, b.l);
        return this.A ? (b.trackVisibility(un(a)), this.xi) : 0 == b.translate(a) ? wn : this.lg
    };
    v.xi = function (a, b) {
        return this.h ? vn(a) ? 0 == b.translate(a) ? wn : this.lg : xn : wn
    };
    v.Qf = function (a, b) {
        b.l && this.l.remove(b.j);
        if (!this.h) return !1;
        if (this.l.has(b.ka(), !1)) {
            var c = this.l;
            if (c.has(b.j, !1)) {
                var d = b.j, e = c.g[d];
                e || (e = c.h[d], c.g[d] = e);
                b.h = e;
                b.P = !0
            } else c.remove(b.j), b.l = !0;
            Rt(b)
        } else if (c = this.l, b.l) c.remove(b.j); else if (b.B) {
            d = b.B.replace(/<a /g, "<span ").replace(/\/a>/g, "/span>");
            b.P = !0;
            delete b.B;
            b.B = null;
            b.h = [];
            e = $h(document, Za);
            N(e, !1);
            d = Fs(0 <= d.indexOf("<i>") ? d : "<b>" + d + "</b>");
            Te(e, d);
            document.body.appendChild(e);
            d = [];
            var f;
            for (f = e.firstChild; f; f = f.nextSibling) if ("I" ==
                f.tagName) var h = Qt(b, zi(f), f.innerHTML); else if ("B" == f.tagName) {
                h || (h = Qt(b, "", ""));
                if (1 == b.g.length) Vt(h.fa, d, 0, f); else {
                    var k = d;
                    var l = f;
                    var m = b.g;
                    h = h.fa;
                    for (var n = [], q = l.firstChild; q; q = u) {
                        var u = q.nextSibling;
                        Wt(q)
                    }
                    for (u = l.firstChild; u; u = u.nextSibling) u.attributes && u.attributes.i ? (l = parseInt(u.attributes.i.nodeValue, 10), !isNaN(l) && 0 <= l && l < m.length && (m[l].Yd && n[l] ? n[l].Z += u.firstChild && 3 == u.firstChild.nodeType ? u.firstChild.nodeValue : zi(u) : n[l] = Vt(h, k, l, u))) : 3 == u.nodeType && h.push({
                        W: -1,
                        Z: bf(u.nodeValue)
                    });
                    null != h && 0 < h.length && -1 == h[0].W && (1 == h.length ? h[0].W = 0 : (h[1].Z = h[0].Z + h[1].Z, h.shift()))
                }
                h = void 0
            }
            f = b.h;
            for (k = 0; k < f.length - 1; ++k) m = f[k], h = Ye(m.fa[m.fa.length - 1].Z), h = h.charCodeAt(h.length - 1), 12288 <= h && 12351 >= h || 65280 <= h && 65519 >= h || (m.fa[m.fa.length - 1].Z += " ");
            hi(e);
            for (e = 0; e < b.g.length; ++e) e < d.length && e < b.C.length && null != d[e] && (f = b.C[e], k = d[e].start, null != k && (m = f.substring(0, f.length - Xe(f).length), " " == m && (m = ""), m && (k.Z = m + Xe(k.Z))), k = d[e].end, null != k && (f = f.substring(Ye(f).length), " " == f && (f = ""), f &&
            (k.Z = Ye(k.Z) + f)));
            1 != b.h.length || b.h[0].cf || (b.h[0].cf = b.j);
            c.write(b.j, b.h);
            Rt(b)
        }
        b.I || (this.xa = !1);
        c = b.l ? !0 : void 0;
        a.K += b.M;
        null != c && (a.ja = !0);
        b = Math.min(Math.floor(100 * a.K / a.l), 100);
        if (a.H != b || c) a.H = b, a.wa ? (a.A(a.H, !0, c), a.V(a.K)) : a.A(a.H, !1, c);
        return !1
    };
    v.lg = function (a, b) {
        if (!this.h) return wn;
        if (!vn(a)) return xn;
        if (1 < Au(b)) {
            a = b.m[0];
            var c = b.h;
            if (a.j || 0 == c.length || null == a.g || 0 == a.g.length) a = null; else {
                for (var d = [], e = [], f = 0; f < a.g.length && f < c.length; ++f) {
                    var h = a.g[f];
                    h && h[0] && 200 == h[1] || (e.push(c[f]), d.push(a.m[f]))
                }
                a = 0 < e.length ? {fj: new nu(d, !0), gj: e} : null
            }
            a = a ? new Gu([a.fj], a.gj, b.l, b.g, b.j, b.wa, b.P, b.A) : null;
            null != a && Qu(this, b.l, a, this.Ad)
        } else {
            a = !1;
            for (c = 0; c < b.m.length; ++c) d = b.m[c], d.j || 200 == d.h && d.g && d.g[0] ? d = d.l = !1 : (d.j = !0, d = d.l = !0), a = d || a;
            if (a) return this.Ad
        }
        d =
            this.hb();
        a = this.ra();
        if (1 < b.h.length) if (c = b.m[0], e = d == Fa, d = b.h, 200 == c.h) for (f = 0; f < c.g.length && f < d.length; ++f) if ((h = c.g[f]) && 200 == h[1]) {
            var k = h[2], l = d[f], m = l, n = null != k && k == a;
            m.B = h[0];
            void 0 !== n && (m.K = n);
            l.I = e && null == k
        } else d[f].l = !0; else for (a = 0; a < d.length; ++a) d[a].l = !0; else {
            c = new mu(d == Fa);
            for (d = 0; d < b.m.length; ++d) h = b.m[d], e = a, f = c, 200 == h.h && h.g && h.g[0] ? (h = h.g[0], f.g.push(h[0]), h = h[2], f.h = f.h && null != h && h == e, null != h && (f.l = !1)) : 500 != h.h && (f.j = !0);
            null != b.H && (c.g.push(b.H), b.H = null);
            if (a = b.h[0]) d = c.h,
                a.B = c.ka(), void 0 !== d && (a.K = d), a.I = c.l, a.l = c.j
        }
        if (this.A) {
            a = A(this.Qf, this);
            for (c = 0; c < b.h.length; c++) a(b.l, b.h[c]);
            for (c = 0; c < b.C.length; c++) a(b.l, b.C[c]);
            Iu(b);
            b.K = !0;
            b.I && b.A && (b = b.A, 0 == --b.h && Eu(b.g))
        }
        return wn
    };

    function Nu(a) {
        a.N && a.N.disconnect();
        a.ja && a.ja.reset();
        a.h && (a.P.stop(), a.h = !1, a.M = !1);
        if (a.H.length) {
            for (var b = 0; b < a.H.length; ++b) a.H[b].R();
            a.H = []
        }
        null != a.I && (a.I.restore(), a.I = null);
        null != a.ya && (a.ya.restore(), a.ya = null)
    }

    function Pu(a, b) {
        a.getAttribute("xml:lang") && a.setAttribute("xml:lang", b);
        a.getAttribute("lang") && a.setAttribute("lang", b)
    }

    Rr(3046, Mu.prototype, {Ii: 1, Ki: 2, Ji: 3, Li: 4});

    function Su(a, b, c, d, e, f, h, k, l, m, n) {
        O.call(this);
        this.K = b || null;
        this.T = !!c;
        this.I = d || "transparent";
        this.H = f || "";
        b = h || {fetchStart: 0, dk: 0};
        a = b.fetchStart || 0;
        b = b.fetchEnd || 0;
        this.M = a && b ? b - a : 0;
        this.N = Ic() - jr;
        this.o = !1;
        this.h = new ks(e || "", void 0, f, l, m, n);
        this.P = new mn(1);
        this.A = new Ut;
        this.l = null;
        this.C = !0;
        this.m = null != x.IntersectionObserver;
        this.B = k || null;
        new Uk(this);
        e = new zr;
        f = new Br(A(this.h.If, this.h, e.register()));
        this.wd = Cr(f, e.delay(A(this.wd, this)));
        this.sd = Cr(f, e.delay(A(this.sd, this)));
        this.Xd =
            Cr(f, e.delay(A(this.Xd, this)));
        this.restore = Cr(f, e.delay(A(this.restore, this)));
        f.finish();
        e.finish()
    }

    B(Su, O);
    Rr(14097, Su.prototype, {
        Se: function () {
            Ir(this.h.j ? "te_afas" : "te_afau")
        }
    });
    v = Su.prototype;
    v.ij = function (a) {
        this.m = a
    };
    v.Xa = function () {
        return this.h.j
    };
    v.wd = function (a, b) {
        if (this.h.Xa()) {
            var c = this.h, d = {alpha: !0};
            b && (d.hl = b);
            c.m.send(d, a)
        } else this.Se(), a(null)
    };
    v.sd = function (a) {
        var b = document.documentElement.lang;
        if (b) a(b); else if (this.h.Xa()) {
            var c = new Tn(document.body, !1, !1, 1, 1);
            b = [];
            try {
                for (var d = 0, e = this.h.h.Cg; b.length + d < e;) {
                    var f = c.next();
                    if (1 == c.m && iu(f)) c.C(); else if (3 == f.nodeType) {
                        var h = Fd(Ve(f.nodeValue));
                        h && (b.push(h), d += h.length)
                    }
                }
            } catch (k) {
                if (k != eg) throw k;
            }
            e = this.h;
            b = b.join(" ");
            a = e.h.Dc(a);
            e.h.qa.send({q: b.substring(0, e.h.Cg), sl: Fa, tl: "en"}, a)
        } else this.Se(), a(null, !0)
    };
    v.Xd = function (a, b, c, d, e) {
        var f = Ic();
        Tr();
        if (!a || Or(a, b)) a = Fa;
        if (e || a != this.g || b != this.j) this.A = new Ut;
        this.g = a;
        this.j = b;
        this.h.Xa() ? (d = d || document.documentElement, this.l && this.l.R(), this.B.reset(), this.l = new Mu(d, this.h, this.K, this.T, this.I, !0, this.P, this.A, this.m, this.B), this.l.qb = this.o, this.C = !0, this.l.translate(a, b, c, e, A(this.Oi, this, f, a, b))) : (this.Se(), c(0, !1, !0))
    };
    v.jh = function () {
        return !!this.l && this.l.h
    };
    v.Qg = function (a) {
        this.o = a
    };
    v.restore = function () {
        Tr();
        this.h.Xa() && this.l && this.l.restore()
    };
    v.L = function () {
        Ur();
        Su.G.L.call(this);
        this.h.R();
        this.l = this.h = null;
        this.A = new Ut
    };
    v.Oi = function (a, b, c, d) {
        this.C && (this.C = !1, b = {
            sl: b,
            tl: c,
            textlen: d
        }, this.o && (b.ctt = "1"), "" != this.H && (b.sp = this.H), b.ttt = Ic() - a, b.ttl = this.N, this.M && (b.ttf = this.M), this.m && (b.sr = 1), Ir("te_time", b))
    };

    function Tu(a) {
        R.call(this, a);
        this.o = new Uk(this)
    }

    w(Tu, R);
    v = Tu.prototype;
    v.J = function () {
        var a = Ci(this.h, "select");
        a.className = "goog-te-combo";
        a.setAttribute("aria-label", Z.Mf);
        this.Y(a)
    };
    v.U = function () {
        R.prototype.U.call(this);
        this.Yf()
    };
    v.Yf = function () {
        P(this.s(), Oa, Fr(this, Oa));
        this.dispatchEvent(yb)
    };
    v.ea = function () {
        R.prototype.ea.call(this);
        this.o.R();
        this.o = null
    };

    function Uu(a, b) {
        a.s().parentNode != b && (a.s().parentNode.removeChild(a.s()), b.appendChild(a.s()))
    }

    v.Uc = function (a) {
        this.h.Rc(this.s());
        for (var b in a) if (a[b] !== Object.prototype[b]) {
            var c = this.h.J("OPTION", {value: b});
            this.h.jb(c, a[b]);
            this.s().appendChild(c)
        }
        this.s().selectedIndex = 0
    };
    v.Ca = function () {
        return this.s().value
    };
    v.za = function (a) {
        if (this.s().value != a) for (var b = 0, c; c = this.s().options.item(b); ++b) if (c.value == a) {
            this.s().selectedIndex = b;
            break
        }
    };
    v.ed = function (a) {
        if ("undefined" == zc(a)) return this.s().options.item(this.s().selectedIndex).text;
        for (var b = 0, c; c = this.s().options.item(b); ++b) if (c.value == a) return c.text
    };
    v.pa = function (a) {
        this.s().disabled = !a
    };

    function Vu(a) {
        Tu.call(this, a)
    }

    w(Vu, Tu);
    Vu.prototype.Hb = function (a) {
        this.Uc.call(this, a)
    };

    function Wu(a, b) {
        Tu.call(this, b);
        this.g = a && kd(a) || {};
        this.g.hf = this.g.hf || 11;
        this.g.Ud = 0 != this.g.Ud;
        this.g.Ya || (this.g.Ya = ur)
    }

    w(Wu, Tu);
    v = Wu.prototype;
    v.od = function () {
        throw Error("Not implemented.");
    };
    v.J = function () {
        this.od();
        this.B = this.s();
        this.l = Yh(ma, {frameBorder: 0, "class": "goog-te-menu-frame skiptranslate", title: Z.Mf});
        this.l.style.visibility = bc;
        N(this.l, !1);
        document.body.appendChild(this.l)
    };
    v.Yf = function () {
        var a = Ad.test(gr) ? Pb : "ltr", b = Hs(this.g.Ya), c = T(this, "menuBody");
        this.o.D(this.l, yb, this.kh);
        Jr(this.l, A(function () {
            var d = ri(this.l);
            var e = eh(ia + I(uh(b)) + '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="' + I(a) + '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="' + I(c) + '" class="goog-te-menu"></div></body>');
            e = Sg(e);
            d.write(ze(e));
            d.close()
        }, this))
    };
    v.kh = function () {
        this.j = new Lh(ri(this.l));
        this.N = this.j.s(T(this, "menuBody"));
        this.o.D(this.B, Sa, this.Ge);
        D ? this.o.D(this.l, Ja, this.zd) : this.o.D(si(this.l), Ja, this.zd);
        this.dispatchEvent(yb)
    };
    v.ea = function () {
        Tu.prototype.ea.call(this);
        hi(this.l);
        this.B = this.V = this.A = this.N = this.j = this.l = null
    };
    v.jg = function (a) {
        this.m != a.currentTarget.value && (this.za(a.currentTarget.value), this.dispatchEvent(Oa));
        this.zd()
    };
    v.Ge = function () {
        Xu(this);
        si(this.l).focus();
        this.X = !0
    };
    v.zd = function () {
        this.X && (this.X = !1, Xu(this, !1), Xh(K(this.B)).focus())
    };
    v.ef = function () {
    };
    v.ff = function () {
    };

    function Xu(a, b) {
        if ("undefined" == typeof b || b) {
            a.ff();
            b = bj(a.B, window);
            var c = b.y + a.B.offsetHeight, d = b.y - a.I.height, e = b.x, f = b.x + a.B.offsetWidth - a.I.width;
            if (D && !H("7.0")) {
                var h = document.body;
                c -= h.offsetTop;
                d -= h.offsetTop;
                e -= h.offsetLeft;
                f -= h.offsetLeft
            } else h = Vh(document), c -= h.y, d -= h.y, e -= h.x, f -= h.x;
            h = Th(window);
            b.y = b.y <= h.height - a.I.height ? c : d;
            b.y > h.height - a.I.height && (b.y = h.height - a.I.height);
            0 > b.y && (b.y = 0);
            Ad.test(gr) ? b.x = 0 <= f ? f : e : b.x = e <= h.width - a.I.width ? e : f;
            b.x > h.width - a.I.width && (b.x = h.width -
                a.I.width);
            0 > b.x && (b.x = 0);
            Vi(a.l, b);
            N(a.l, !0);
            Yu(a)
        } else a.ef(), N(a.l, !1)
    }

    v.Ca = function () {
        return this.m
    };
    v.Uc = function (a) {
        this.j.Rc(this.N);
        N(this.l, !0);
        this.ja = a;
        this.A = [];
        for (var b in a) if (a[b] !== Object.prototype[b]) if ("---" == a[b]) {
            var c = {link: this.j.J(g, {className: "goog-te-menu2-separator", value: b}), Di: !0};
            this.A.push(c)
        } else {
            c = {link: this.j.J("A", {className: nb, href: vb, value: b})};
            this.A.push(c);
            var d = this.j.J(g, {style: "white-space:nowrap"});
            this.j.appendChild(c.link, d);
            this.g.Ud && this.j.appendChild(d, this.j.J(sa, {className: "indicator"}, "\u203a"));
            this.j.appendChild(d, this.j.J(sa, {className: "text"},
                a[b]));
            this.o.D(c.link, Sa, this.jg)
        }
        a = this.A.length - 1;
        a = Math.round((a - a % this.g.hf) / this.g.hf) + 1;
        this.V = this.j.J("TABLE", {cellspacing: 0, cellpadding: 0, border: 0});
        c = this.j.J("TBODY");
        b = this.j.J("TR", {valign: "top"});
        this.N.className = "goog-te-menu2";
        this.j.appendChild(this.N, this.V);
        this.j.appendChild(this.V, c);
        this.j.appendChild(c, b);
        for (d = c = 0; c < a; ++c) {
            var e = this.j.J("TD");
            this.j.appendChild(b, e);
            for (var f = 0; 11 > f && d < this.A.length; ++f, ++d) this.j.appendChild(e, this.A[d].link);
            c != a - 1 && (e = this.j.J("TD", {"class": "goog-te-menu2-colpad"},
                "\u00a0"), this.j.appendChild(b, e))
        }
        this.m = null;
        this.za(this.A[0].link.value);
        Yu(this);
        N(this.l, !1)
    };
    v.ed = function (a) {
        return this.ja["undefined" == zc(a) ? this.m : a]
    };
    v.gf = function () {
    };
    v.za = function (a) {
        if (this.m != a) {
            this.ed(a) && (this.m = a, this.gf());
            for (var b = 0; b < this.A.length; ++b) {
                var c = this.A[b];
                c.Di || (c.link.className = c.link.value == a && this.g.Ud ? nb : "goog-te-menu2-item")
            }
        }
    };

    function Yu(a) {
        kj(a.N, jj(a.V));
        kj(a.l, jj(a.N));
        a.I = jj(a.l)
    }

    function Zu(a, b) {
        Wu.call(this, a, b)
    }

    w(Zu, Wu);
    v = Zu.prototype;
    v.od = function () {
        var a = this.h.J("a", {"aria-haspopup": "true"});
        a.className = mb;
        a.href = vb;
        this.K = this.h.J(sa);
        a.appendChild(this.K);
        this.S = this.h.J("IMG", {
            src: ub,
            alt: "",
            style: "background-image:url(" + rr + ");background-position:-14px 0px;border:none",
            width: 14,
            height: 14
        });
        a.appendChild(this.S);
        this.Y(a)
    };
    v.ef = function () {
        M(this.S, Ia, "-14px 0px")
    };
    v.ff = function () {
        M(this.S, Ia, "0px 0px")
    };
    v.ea = function () {
        Wu.prototype.ea.call(this);
        this.S = this.K = null
    };
    v.gf = function () {
        this.h.jb(this.K, this.ed(this.m) || "")
    };
    v.Hb = function (a) {
        this.Uc.call(this, a)
    };

    function $u(a, b) {
        Wu.call(this, a, b)
    }

    w($u, Wu);
    v = $u.prototype;
    v.od = function () {
        var a = this.h.J("a", {"aria-haspopup": "true"});
        a.className = mb;
        a.href = vb;
        this.K = this.h.J(sa);
        a.appendChild(this.K);
        a.appendChild(this.h.J("IMG", {src: ub, alt: "", width: 1, height: 1}));
        a.appendChild(this.h.J(sa, {style: "border-left:1px solid #bbb"}, "\u200b"));
        a.appendChild(this.h.J("IMG", {src: ub, alt: "", width: 1, height: 1}));
        this.S = this.h.J("span", {style: "color:#767676", "aria-hidden": "true"}, "\u25bc");
        a.appendChild(this.S);
        this.Y(a)
    };
    v.ef = function () {
        M(this.S, "color", "#9b9b9b")
    };
    v.ff = function () {
        M(this.S, "color", "#d5d5d5")
    };
    v.ea = function () {
        Wu.prototype.ea.call(this);
        this.S = this.K = null
    };
    v.gf = function () {
        this.h.jb(this.K, this.ed(this.m) || "")
    };
    v.Hb = function (a) {
        this.Uc.call(this, a)
    };

    function av(a, b) {
        Wu.call(this, a, b);
        this.g.Ud = !1
    }

    w(av, Wu);
    av.prototype.od = function () {
        var a = Ci(this.h, Za);
        a.className = "goog-te-button";
        var b = this.h.J(g, {style: "background: url(" + qr + ") repeat-x 0 -39px"});
        a.appendChild(b);
        this.K = Ci(this.h, La);
        b.appendChild(this.K);
        this.Y(a)
    };
    av.prototype.Pg = function (a) {
        ei(this.K);
        this.K.appendChild(this.h.g.createTextNode(String(a + "\u00a0\u25bc")))
    };
    av.prototype.ea = function () {
        Wu.prototype.ea.call(this);
        this.K = null
    };
    av.prototype.jg = function (a) {
        this.za(a.currentTarget.value);
        this.dispatchEvent(Oa);
        this.zd()
    };

    function bv() {
        this.h = {};
        this.g = 0
    }

    bv.prototype.j = function (a, b) {
        a = this.h[b];
        if (!a) return b;
        b = "";
        a.tf && (b += "<" + a.tf + a.attributes + ">");
        a.Ke && (b += a.Ke);
        a.xe && (b += "</" + a.xe + ">");
        return b
    };
    bv.prototype.tf = function (a, b) {
        He(a);
        return cv(this, {tf: a, attributes: Ne(b)})
    };
    bv.prototype.xe = function (a) {
        He(a);
        return cv(this, {xe: a})
    };
    bv.prototype.text = function (a) {
        return cv(this, {Ke: af(a)})
    };

    function cv(a, b) {
        a.g++;
        var c = "{SafeHtmlFormatter:" + a.g + "_" + ff() + "}";
        a.h[af(c)] = b;
        return c
    };

    function dv(a, b) {
        R.call(this, b);
        this.g = a && kd(a) || {};
        this.j = new Uk(this)
    }

    B(dv, R);
    var ev = {Yj: 0, Cj: 1, Pj: 2};
    v = dv.prototype;
    v.J = function () {
        var a = Ci(this.h, Za);
        L(a, Rb);
        L(a, "goog-te-gadget");
        a.dir = Ad.test(gr) ? Pb : "ltr";
        N(a, !1);
        if (2 == this.g.Rb) {
            var b = ys({id: T(this, Ub), Mg: "", Lg: ""});
            Te(a, Gi(b))
        } else {
            b = new bv;
            if (D && !H("7.0")) var c = "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='" + "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png".replace(Bh, zh) + "',sizingMethod='scale');\"></span>"; else c = Z.fd, c =
                '<img src="' + I(sh("https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png")) + '" width="37px" height="14px" style="padding-right: 3px" alt="Google ' + I(c) + '">';
            var d = Z.fd;
            var e = eh('<span style="white-space:nowrap"><a class="goog-logo-link" href="' + I(nh(tb)) + '" target="_blank">' + c + dh(d) + "</a></span>");
            c = Z;
            d = c.th;
            e = Sg(e);
            e = cv(b, {Ke: ye(e)});
            c = d.call(c, e);
            d = af("SafeHtmlFormatter:");
            b = af(c).replace(new RegExp("\\{" + d + "[\\w&#;]+\\}", "g"), A(b.j, b, []));
            b = Be(b, null);
            b = ys({
                id: T(this,
                    Ub), Mg: "", Lg: 1 == this.g.Rb ? Me("\u00a0", "\u00a0", b) : b
            });
            Te(a, Gi(b))
        }
        this.Y(a)
    };
    v.U = function () {
        dv.G.U.call(this);
        this.l = 2 == this.g.Rb ? new $u(null, this.h) : new Vu(this.h);
        this.j.D(this.l, Oa, Fr(this, Ra));
        this.j.D(this.l, yb, this.lh);
        var a = this.h.s(T(this, Ub));
        if (2 == this.g.Rb) {
            var b = this.h.J("IMG", {src: ub, "class": "goog-te-gadget-icon", alt: ""});
            b.style.backgroundImage = "url(" + rr + ")";
            b.style.backgroundPosition = "-65px 0px";
            var c = this.h.J(sa, {style: "vertical-align: middle"});
            a.appendChild(b);
            a.appendChild(c);
            this.l.la(c);
            a.style.whiteSpace = "nowrap";
            a.className = "goog-te-gadget-simple"
        } else this.l.la(a),
        1 == this.g.Rb && (a.style.display = "inline")
    };
    v.lh = function () {
        if (2 == this.g.Rb) {
            var a = this.l, b = this.h.s(T(this, Ub));
            a.o.ha(a.B, Sa, a.Ge);
            a.B = b;
            a.o.D(a.B, Sa, a.Ge)
        }
        this.dispatchEvent(yb)
    };
    v.ea = function () {
        dv.G.ea.call(this);
        this.j.R();
        this.j = null;
        this.l.R();
        this.l = null
    };
    v.ra = function () {
        return this.l.Ca()
    };
    v.va = function (a) {
        "" == a ? this.K && this.l.Hb(this.K) : this.I && this.l.Hb(this.I);
        this.l.za(a)
    };
    v.O = function (a) {
        N(this.s(), a)
    };
    v.pa = function (a) {
        this.l.pa(a)
    };
    v.qf = function (a, b) {
        this.K = a;
        this.I = b
    };

    function fv() {
        Kh()
    }

    fv.prototype.la = function (a) {
        a = a({}, {});
        this.g(null, a instanceof Rg ? a.Mb : null)
    };

    function gv(a, b) {
        b = b || {};
        var c = b.id, d = b.top, e = b.left, f = b.bottom, h = b.right;
        b = hh("." + vh(b.className) + " {z-index:9999999; overflow:visible; position:fixed; _position:absolute;" + (ih(d) || 0 == d ? "top:" + vh(d) + "px; _top:expression((" + vh(d) + "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "top:auto;") + (ih(e) || 0 == e ? "left:" + vh(e) + "px; _left:expression((" + vh(e) + "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "left:auto;") + (ih(f) || 0 == f ? "bottom:" + vh(f) +
            "px; _top:expression((-" + vh(f) + ca + String(c).replace(Bh, zh) + "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "bottom:auto;") + (ih(h) || 0 == h ? "right:" + vh(h) + "px; _left:expression((-" + vh(h) + ca + String(c).replace(Bh, zh) + "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "right:auto;") +
            "}");
        a.g(null, b.Mb);
        a = b.toString();
        b = ud("Soy SanitizedCss produces SafeStyleSheet-contract-compliant value.");
        td(b);
        td(b);
        return new me(a, le)
    }

    fv.prototype.g = y;

    function hv(a, b) {
        R.call(this, b);
        this.g = a && kd(a) || {};
        this.g.Ya || (this.g.Ya = ur);
        this.j = new Uk(this)
    }

    B(hv, R);
    var iv = {Sj: 1, Tj: 2, yj: 3, xj: 4};
    v = hv.prototype;
    v.J = function () {
        var a = Ci(this.h, Za);
        this.ma = !1;
        N(a, !1);
        var b = T(this, Va);
        b = eh('<iframe id="' + I(b) + '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>');
        Te(a, Gi(b));
        this.Y(a)
    };
    v.U = function () {
        hv.G.U.call(this);
        var a = Ad.test(gr) ? Pb : "ltr", b = Hs(this.g.Ya), c = T(this, $b);
        this.s().id = T(this, "floatContainer");
        var d = {id: this.s().id, className: "goog-te-ftab-float"};
        this.s().className += " goog-te-ftab-float";
        switch (this.g.rd) {
            case 2:
                var e = gb;
                d.top = 0;
                d.right = 20;
                break;
            case 3:
                e = fb;
                d.bottom = 0;
                d.right = 20;
                break;
            case 4:
                e = fb;
                d.bottom = 0;
                d.left = 20;
                break;
            default:
                e = gb, d.top = 0, d.left = 20
        }
        ej(gv(new fv, d), this.s());
        this.A = this.h.s(T(this, Va));
        this.j.D(this.A, yb, this.mh);
        Jr(this.A, A(function () {
            var f =
                ri(this.A);
            var h = e;
            var k = Z.Of;
            h = eh(ia + I(uh(b)) + '"></head><body class="goog-te-ftab ' + I(h) + '" scroll="no" style="overflow:hidden" dir="' + I(a) + '"><a id="' + I(c) + '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="' + I(sh(ub)) + aa + I(sh(rr)) + ');background-position:-65px 0px"><span>' + dh(k) + "</span></a></body>");
            h = Sg(h);
            f.write(ze(h));
            f.close()
        }, this))
    };
    v.mh = function () {
        this.l = (new Lh(ri(this.A))).s(T(this, $b));
        this.j.D(this.l, Sa, Fr(this, "clk_trans"));
        N(this.s(), !0);
        var a = jj(this.l);
        N(this.s(), !1);
        kj(this.A, a);
        kj(this.s(), a);
        this.dispatchEvent(yb)
    };
    v.ea = function () {
        hv.G.ea.call(this);
        this.j.R();
        this.j = null;
        hi(this.A);
        this.l = this.A = null
    };
    v.isVisible = function () {
        return this.ma
    };
    v.O = function (a) {
        this.ma = a;
        N(this.s(), a)
    };

    function jv(a, b) {
        R.call(this, b);
        this.o = new Uk(this);
        this.g = a && kd(a) || {};
        this.g.Ya || (this.g.Ya = ur);
        this.g.sf = !1;
        M(this.h.g.body, Jb, "relative");
        Nf || M(this.h.g.body, "minHeight", "100%");
        M(this.h.g.documentElement, "height", "100%");
        M(this.h.g.body, "top", "0px");
        D && (window._bannerquirkfixleft = -parseInt("0" + this.h.g.body.leftMargin, 10), window._bannerquirkfixtop = -parseInt("0" + this.h.g.body.topMargin, 10) - 40)
    }

    B(jv, R);
    v = jv.prototype;
    v.la = function () {
        var a = this.h.g.body.firstChild;
        ul(this, a.parentNode, a)
    };
    v.J = function () {
        var a = Ci(this.h, Za);
        this.ma = !1;
        N(a, !1);
        L(a, Rb);
        var b = T(this, Va);
        b = eh('<iframe id="' + I(b) + '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>');
        Te(a, Gi(b));
        this.Y(a)
    };
    v.U = function () {
        jv.G.U.call(this);
        var a = Ad.test(gr) ? Pb : "ltr", b = Hs(this.g.Ya), c = T(this, "promptSection"), d = T(this, "confirm"),
            e = T(this, Kb), f = T(this, "progressValue"), h = T(this, "cancel"), k = T(this, "finishSection"),
            l = T(this, "restore"), m = T(this, "errorSection"), n = T(this, "errorContent"), q = T(this, "close"),
            u = T(this, "noAutoPopup"), z, G = [];
        this.g.sf && G.push(xs({id: T(this, Lb)}));
        G.push(xs({id: T(this, Mb)}));
        var U = Fs(Z.Dh.apply(null, G));
        G = [];
        this.g.sf && G.push(xs({id: T(this, ab)}));
        G.push(xs({id: T(this, bb)}));
        var Cg = Fs(Z.yh.apply(null,
            G));
        this.g.Vg && (z = this.g.Vg);
        this.A = this.h.s(T(this, Va));
        this.o.D(this.A, yb, this.nh);
        Jr(this.A, A(function () {
            var qc = ri(this.A);
            var Ha = z;
            var pc = Z.fd, im = Z.Of, zv = Z.zh, Av = Z.zf, Bv = Z.uh, Cv = Z.Af, Dv = Z.Af;
            Ha = eh(ia + I(uh(b)) + '"></head><body class="goog-te-banner" scroll="no" border=0 dir="' + I(a) + '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="' + I(nh(tb)) + '" class="goog-logo-link" target="_blank"><img src="' + I(sh("https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_68x28dp.png")) +
                '" alt="Google ' + I(pc) + '"></a></td>' + (Ha ? '<td width=1><img src="' + I(sh(ub)) + '" width="9" height="15" title="' + I(Ha) + '" alt="' + I(Ha) + aa + I(sh(rr)) + ');background-position:-56px 0px;margin:0 4px"></td>' : "") + '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="' + I(c) + '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">' + dh(U) + ha + I(d) + '"><b>' + dh(im) + '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' +
                I(u) + '"></button></div></div></td></tr><tr id="' + I(e) + '" style="display:none" valign=middle><td><span class="goog-te-banner-content">' + dh(zv) + '&nbsp;<span dir="ltr">(<b id="' + I(f) + '"></b>%)</span>&nbsp;<img src="' + I(sh(tr)) + '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + I(h) + '">' + dh(Av) + fa + I(k) + '" style="display:none"><td><span class="goog-te-banner-content">' + dh(Cg) + ha + I(l) + '">' + dh(Bv) + fa + I(m) + '" style="display:none" valign=middle><td><span id="' +
                I(n) + '" class="goog-te-banner-content"></span></td></tr></table></td><td><td class="goog-te-banner-margin"></td></td><td width=1 id="options"></td><td width=1><a id="' + I(q) + '" class="goog-close-link" href="javascript:void(0)" title="' + I(Cv) + '"><img src="' + I(sh(ub)) + '" width="15" height="15" alt="' + I(Dv) + aa + I(sh(rr)) + ');background-position:-28px 0px"></a></td></tr></table></body>');
            Ha = Sg(Ha);
            qc.write(ze(Ha));
            qc.close()
        }, this))
    };
    v.nh = function () {
        this.j = new Lh(ri(this.A));
        kv(this, Z.Bf);
        if (this.g.Ya == ur) {
            var a = "url(" + qr + ")";
            M(this.j.g.body, Ga, a);
            for (var b = this.j.g.getElementsByTagName(La), c = 0; c < b.length; ++c) {
                var d = b[c].parentNode;
                M(d, Ga, a);
                M(d, "backgroundRepeat", "repeat-x");
                M(d, Ia, "0 -39px")
            }
        }
        this.g.sf && (this.m = new Zu(this.g, this.j));
        this.l = new Zu(this.g, this.j);
        this.B = new av(this.g, this.j);
        this.o.D(this.j.s(T(this, "confirm")), Sa, Fr(this, "clk_confirm"));
        this.o.D(this.j.s(T(this, "cancel")), Sa, Fr(this, "clk_cancel"));
        this.o.D(this.j.s(T(this,
            "restore")), Sa, Fr(this, "clk_restore"));
        this.o.D(this.j.s(T(this, "close")), Sa, Fr(this, "clk_close"));
        this.N = this.j.s(T(this, "noAutoPopup"));
        this.o.D(this.N, Sa, Fr(this, "clk_no_ap"));
        this.m && this.o.D(this.m, Oa, Fr(this, "chg_src_lang"));
        this.o.D(this.l, Oa, Fr(this, Ra));
        this.o.D(this.B, Oa, this.mi);
        a = new zr(A(this.oh, this));
        this.m && this.o.D(this.m, yb, a.register());
        this.o.D(this.l, yb, a.register());
        this.o.D(this.B, yb, a.register());
        a.finish();
        this.m && this.m.la(this.j.s(T(this, Lb)));
        this.l.la(this.j.s(T(this,
            Mb)));
        this.B.la(this.j.s("options"))
    };
    v.oh = function () {
        this.B.Pg(Z.rh);
        this.B.Uc({turn_off_site: Z.Bh, s1: "---", learn_more: Z.qh});
        this.dispatchEvent(yb)
    };
    v.mi = function () {
        switch (this.B.Ca()) {
            case "learn_more":
                window.open(xr, "_blank");
                break;
            case "turn_off_site":
                this.dispatchEvent(Ta)
        }
    };
    v.ea = function () {
        this.O(!1);
        jv.G.ea.call(this);
        this.o.R();
        this.o = null;
        this.m && (this.m.R(), this.m = null);
        this.l.R();
        this.l = null;
        this.B.R();
        this.B = null;
        hi(this.A);
        this.Fc = this.j = null
    };
    v.hb = function () {
        return this.m ? this.m.Ca() : ""
    };
    v.ra = function () {
        return this.l.Ca()
    };
    v.Tb = function (a) {
        this.m && this.m.za(a);
        this.S && this.S[a] && this.j.jb(this.N, Z.Ah(this.S[a]))
    };
    v.va = function (a) {
        this.l.za(a)
    };

    function lv(a, b, c, d) {
        if (a.Fc != b) {
            a.Fc = b;
            if (0 == b) {
                a.m && Uu(a.m, a.j.s(T(a, Lb)));
                if (a.K) {
                    var e = a.ra();
                    a.l.Hb(a.K);
                    a.va(e)
                }
                Uu(a.l, a.j.s(T(a, Mb)))
            } else 2 == b && (a.m && Uu(a.m, a.j.s(T(a, ab))), a.I && (e = a.ra(), a.l.Hb(a.I), a.va(e)), Uu(a.l, a.j.s(T(a, bb))));
            e = {};
            e[-1] = a.j.s(T(a, "errorSection"));
            e[0] = a.j.s(T(a, "promptSection"));
            e[1] = a.j.s(T(a, Kb));
            e[2] = a.j.s(T(a, "finishSection"));
            for (var f in e) e[f] !== Object.prototype[f] && N(e[f], f == b)
        }
        c && a.O(!0);
        a.N.parentNode.parentNode.style.display = d ? "block" : r
    }

    v.isVisible = function () {
        return this.ma
    };
    v.O = function (a) {
        if (this.ma != a) {
            this.ma = a;
            if (D) var b = parseInt("0" + this.h.g.body.leftMargin, 10),
                c = parseInt("0" + this.h.g.body.topMargin, 10);
            var d = "BackCompat" == this.h.g.compatMode;
            a ? (M(this.h.g.body, "top", "40px"), N(this.s(), !0), D && (H("7.0") ? (window._bannerquirkfixleft = window._bannerquirkfixtop = 0, d && (this.h.g.body.topMargin = c + 40)) : d ? (this.h.g.body.topMargin = c + 40, window._bannerquirkfixleft = window._bannerquirkfixtop = 0) : (window._bannerquirkfixleft = -b, window._bannerquirkfixtop = -c - 40))) : (M(this.h.g.body, "top",
                "0px"), N(this.s(), !1), d && 40 <= c && (this.h.g.body.topMargin = c - 40))
        }
    };
    v.nf = function (a) {
        this.j.jb(this.j.s(T(this, "progressValue")), a)
    };

    function kv(a, b) {
        a.j.jb(a.j.s(T(a, "errorContent")), b)
    }

    v.qf = function (a, b) {
        this.K = a;
        this.I = b;
        this.l.Hb(a)
    };

    function mv(a, b) {
        O.call(this);
        zc(a) == t && (b = a, a = {});
        zc(b) == t && (b = Mh(document, String(b)));
        this.V = b;
        this.o = new Uk(this);
        this.Ub = this.X = void 0;
        a = Object(a);
        this.m = Fa;
        !(b = window.parent != window) && (b = (!window.external || !window.external.googleToolbarVersion || 6.2 > parseFloat(window.external.googleToolbarVersion)) && (!window.gtbExternal || !window.gtbExternal.isTranslateEnabled || !window.gtbExternal.isTranslateEnabled())) && (b = navigator.appVersion && navigator.appVersion.match(/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/),
            b = !(b && b[2] && b[3] && 4001 <= 1E3 * Number(b[2]) + Number(b[3])));
        this.g = {
            qe: b,
            ag: !1,
            re: null,
            jd: null,
            Me: [],
            $f: [],
            Lh: !1,
            mc: !1,
            eb: "",
            bg: !1,
            Ae: "",
            Rb: 0,
            Wf: !1
        };
        this.xa = {Ya: ur, Vg: "https://" == pr ? Z.wh : null};
        this.S = {Ya: ur, rd: null};
        a && ("autoDisplay" in a && (this.g.qe = this.g.qe && !!a.autoDisplay), "multilanguagePage" in a && (this.g.mc = !!a.multilanguagePage), "gaTrack" in a && (this.g.bg = !!a.gaTrack), "layout" in a && (this.g.Rb = a.layout), a.pageLanguage && (this.g.Qd = Gr(a.pageLanguage)), a.includedLanguages && (this.g.Me = a.includedLanguages.split(",")),
        a.excludedLanguages && (this.g.$f = a.excludedLanguages.split(",")), this.g.Qd && (this.m = this.g.Qd), a.key && (this.g.eb = a.key), a.gaId && (this.g.Ae = a.gaId), this.S.rd = Number(a.floatPosition) || this.S.rd, "disableAutoTranslation" in a && (this.g.Wf = !!a.disableAutoTranslation), a.jwtToken && (this.X = new is(a.jwtToken)), a.jwtTokenProvider && (this.X = new js(a.jwtTokenProvider)), a.translateErrorHandler && (this.Ub = a.translateErrorHandler));
        !this.g.Wf && nv(this) && (this.g.ag = !0);
        this.C = {};
        if ((a = document.cookie.match(/(^|; )googtransopt=(.*?)(;|$)/)) &&
            a[2]) for (this.C = {}, a = $e(a[2]).split("|"), b = 0; b < a.length; ++b) {
            var c = a[b].split("=");
            c[0] && (this.C[c[0]] = c[1])
        }
        this.ua = new Ct({eb: this.g.eb, Ob: 1, rf: !0, hk: wr}, {client: mr, u: window.location.href});
        this.H = new Su(void 0, this.ua, void 0, void 0, this.g.eb, void 0, void 0, new Fu, this.X, this.Ub);
        this.M = !1;
        this.o.D(window, "unload", this.R);
        this.K = new zr(A(this.gi, this));
        this.I = new zr(A(this.ji, this));
        this.T = new Br(A(this.Ei, this));
        this.h = new jv(this.xa);
        this.H.wd(this.K.register(A(this.fi, this)), gr);
        this.V ? (this.l =
            new dv(this.g), this.o.D(this.l, yb, this.K.register()), this.o.D(this.l, Ra, Cr(this.T, this.I.delay(A(this.ei, this)))), this.l.la(this.V)) : this.S.rd && (this.A = new hv(this.S), this.o.D(this.A, yb, this.K.register()), this.o.D(this.A, "clk_trans", Cr(this.T, this.I.delay(A(this.di, this)))), this.A.la());
        !this.g.Qd && this.g.Lh && this.H.sd(this.K.register(A(this.ai, this)));
        this.K.finish()
    }

    w(mv, O);

    function nv(a) {
        function b(f, h) {
            if (f = $e(f).match("^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)")) {
                if (f[3]) return h.g.re = f[2], h.g.jd = f[3], !0;
                if (f[6]) return h.g.re = f[5], h.g.jd = f[6], !0
            }
            return !1
        }

        var c = {
            url: function () {
                var f = window.location.href.match(/#.*googtrans(.*)/);
                return f && f[1]
            }, cookie: function () {
                var f = document.cookie.match(/(^|; )googtrans=(.*?)(;|$)/);
                return f && f[2]
            }
        }, d;
        for (d in c) if (c[d] !== Object.prototype[d]) {
            var e = c[d]();
            if (e && b(e, a)) return d
        }
        return ""
    }

    function ov(a, b) {
        for (var c = window.location.hostname.split("."); 2 < c.length;) c.shift();
        c = ";domain=" + c.join(".");
        null != b ? a = a + "=" + b : (b = new Date, b.setTime(b.getTime() - 1), a = a + "=none;expires=" + b.toGMTString());
        a += ";path=/";
        document.cookie = a;
        try {
            document.cookie = a + c
        } catch (d) {
        }
    }

    function pv(a, b) {
        var c = null;
        void 0 !== b && (c = void 0 !== a ? "/" + a + "/" + b : "/" + b);
        ov("googtrans", c)
    }

    v = mv.prototype;
    v.fi = function (a) {
        this.j = Gr(gr);
        this.P = a || {};
        this.B = {};
        this.N = {};
        a = !this.g.Me.length;
        var b = yr(this.g.Me), c = yr(this.g.$f);
        this.B[gr] = "";
        this.N[gr] = "";
        for (var d in this.P.tl) this.P.tl[d] === Object.prototype[d] || !(a || d in b) || d in c || (this.N[d] = this.P.tl[d], d == this.g.Qd && !this.g.mc) || (this.B[d] = this.P.tl[d]);
        this.B[gr] || delete this.B[gr];
        this.N[gr] || delete this.N[gr];
        this.ja = kd(this.P.sl)
    };
    v.ai = function (a) {
        a && (this.m = Gr(a))
    };
    v.gi = function () {
        delete this.K;
        if (this.P) {
            this.m = this.m || this.g.re;
            this.j = this.g.jd || this.j;
            var a = this.g.ag || this.g.qe && this.m != this.j && !(this.m in kr) && "1" != this.C.os && "1" != this.C["o" + this.m];
            "zh-TW" == this.m && (this.m = "zh-CN");
            this.ja[this.m] || (a = !1, this.m = Fa);
            if (!this.B[this.j]) if (a = !1, this.B.en) this.j = "en"; else for (var b in this.B) if (this.B[b] !== Object.prototype[b]) {
                this.j = b;
                break
            }
            if (this.l) {
                var c = this.B, d = {"": Z.vh};
                for (b in c) c[b] !== Object.prototype[b] && (d[b] = c[b]);
                this.l.qf(d, this.N);
                this.l.va("")
            }
            !ir &&
            a ? this.g.jd ? Cr(this.T, this.I.delay(A(this.Td, this, !0, !0))).call() : (this.M = !0, Cr(this.T, this.I.delay(A(this.Td, this))).call(), Ir("te_ap", {sl: this.m})) : (this.A && this.A.O(!0), this.l && this.l.O(!0));
            window.google.translate.TranslateService && this.pa(!1);
            this.T.finish()
        }
    };
    v.ji = function () {
        var a = this.h, b = this.ja;
        a.m && a.m.Hb(b);
        a.S = b;
        this.h.qf(this.B, this.N);
        this.h.Tb(this.m);
        this.h.va(this.j);
        this.o.D(this.h, "clk_confirm", this.Vh);
        this.o.D(this.h, "clk_cancel", this.Uh);
        this.o.D(this.h, "clk_restore", this.Ee);
        this.o.D(this.h, "clk_close", this.yd);
        this.o.D(this.h, "clk_no_ap", this.Wh);
        this.o.D(this.h, Ta, this.Xh);
        this.o.D(this.h, "chg_src_lang", this.eg);
        this.o.D(this.h, Ra, this.eg);
        this.l && this.l.O(!0)
    };
    v.Ei = function () {
        this.o.D(this.h, yb, this.I.register());
        this.h.la();
        this.I.finish()
    };
    v.L = function () {
        this.H.restore();
        O.prototype.L.call(this);
        this.H.R();
        this.o.R();
        this.o = null;
        this.h && this.h.R();
        this.h = null;
        this.A && this.A.R();
        this.A = null;
        this.l && this.l.R();
        this.V = this.l = null
    };
    v.Vh = function () {
        !this.h.isVisible() || !this.g.mc && Or(this.m, this.h.ra()) || (this.M && Ir("te_apt", {sl: this.m}), qv(this, !1), this.l && this.l.va(this.h.ra()))
    };
    v.Uh = function () {
        this.h.isVisible() && (rv(this), lv(this.h, 0), this.l && this.l.va(""))
    };
    v.Ee = function () {
        this.h.isVisible() && (rv(this), lv(this.h, 0));
        this.l && this.l.va("")
    };
    v.yd = function () {
        this.h.isVisible() && (this.M && (this.M = !1, Ir("te_apc", {sl: this.m})), rv(this), this.h.O(!1), this.l && this.l.va(""), this.A && this.A.O(!0))
    };
    v.Wh = function () {
        this.h.isVisible() && (this.C["o" + this.m] = "1", Ir("te_apr", {sl: this.m}), this.M = !1, this.yd())
    };
    v.Xh = function () {
        if (this.h.isVisible()) {
            this.M = !1;
            this.C.os = "1";
            var a = null;
            if (this.C) {
                a = [];
                for (var b in this.C) this.C[b] !== Object.prototype[b] && a.push(b + "=" + this.C[b]);
                a = a.join("|")
            }
            ov("googtransopt", a);
            this.yd()
        }
    };
    v.eg = function () {
        this.h.isVisible() && (!this.g.mc && Or(this.m, this.h.ra()) ? this.Ee() : (this.m = this.h.hb() || this.m, this.j = this.h.ra(), 2 == this.h.Fc && (this.l && this.l.va(this.h.ra()), qv(this))))
    };
    v.Td = function (a, b) {
        this.h.isVisible() || (this.A && this.A.O(!1), a ? qv(this, b) : lv(this.h, 0, !0, this.M))
    };
    v.lj = function (a, b) {
        Cr(this.T, this.I.delay(A(this.Td, this, a, b))).call()
    };
    v.di = function () {
        this.Td(2 == this.h.Fc)
    };
    v.ei = function () {
        this.l.ra() ? !this.g.mc && Or(this.m, this.h.ra()) ? this.Ee() : (this.j = this.l.ra(), this.h.va(this.j), qv(this)) : this.l.va(this.j)
    };

    function qv(a, b) {
        if (window.google.translate.TranslateService) try {
            window.google.translate.TranslateService.getInstance().restore()
        } catch (c) {
        }
        pv(a.m, a.j);
        a.M = !1;
        !b && a.m in kr && Ir("te_ape", {sl: a.m});
        a.h.nf(0);
        lv(a.h, 1, !0);
        a.H.Qg(!!b);
        window.setTimeout(A(a.H.Xd, a.H, a.g.mc ? Fa : a.m, a.j, A(a.si, a), void 0, void 0), 0);
        if (a.g.bg && window._gaq && window._gat) try {
            a.g.Ae ? window._gat._getTracker(a.g.Ae)._trackEvent(la, "Translate", a.j) : window._gat._getTrackerByName()._trackEvent(la, "Translate", a.j)
        } catch (c) {
        }
    }

    v.si = function (a, b, c) {
        typeof this.ya == p && this.ya();
        this.h.isVisible() && 1 == this.h.Fc && (c ? (rv(this), lv(this.h, -1, !0), 2 == c ? kv(this.h, Z.ph) : kv(this.h, Z.Bf)) : (this.h.nf(a), b && (this.l && this.l.va(this.j), this.h.Tb(this.m), lv(this.h, 2))))
    };

    function rv(a) {
        pv();
        window.setTimeout(A(a.H.restore, a.H, null), 0)
    }

    v.pa = function (a) {
        a || this.yd();
        this.l && this.l.pa(a);
        this.A && this.A.O(a)
    };

    function sv(a) {
        if (a && (a = String(a), a = a.split("."), a.length)) {
            for (var b = window, c = 0; c < a.length; ++c) {
                var d = a[c];
                if (!(d && d in b)) return;
                b = b[d]
            }
            return b
        }
    };var tv = sv("google.translate.m");
    if (tv) for (var uv in Z) if (Z[uv] !== Object.prototype[Z[uv]] && Z[uv]) {
        var vv = Z[uv]();
        Z[uv] = tv[vv] ? tv[vv] : ws
    }
    if (1 == lr) {
        var wv = null, xv = function (a) {
            if (!wv) {
                var b, c, d, e;
                a && ("key" in a && (b = a.key), "serverParams" in a && (c = a.serverParams), "timeInfo" in a && (d = a.timeInfo), "remoteApiProxyHandlers" in a && (e = a.remoteApiProxyHandlers), (a = (a = window.location.hash.match(/google\.translate\.element\.sp=([^&]+)/)) && a[1] ? a[1] : null) && (c = a));
                a = 0;
                if ("te_lib" == mr || rf) a = 3;
                wv = new Su(void 0, new Ct({
                    eb: b,
                    Ob: a,
                    rf: !0,
                    trackVisibility: "tvis" == c
                }), void 0, void 0, b, c, d, new Fu, void 0, void 0, e);
                wv.constructor = y;
                wv.isAvailable = wv.Xa;
                wv.getSupportedLanguages =
                    wv.wd;
                wv.getPageLanguage = wv.sd;
                wv.setClickThrough = wv.Qg;
                wv.translatePage = wv.Xd;
                wv.restore = wv.restore;
                wv.isTranslating = wv.jh;
                wv.setCheckVisibility = wv.ij
            }
            return wv
        };
        xv.getInstance = function () {
            return wv
        };
        Jc("google.translate.TranslateService", xv);
        Ir("te_li")
    } else {
        var yv = null, Ev = function (a, b) {
            yv || (yv = new mv(a, b), yv.constructor = y);
            return yv
        };
        Ev.getInstance = function () {
            return yv
        };
        Jc("google.translate.TranslateElement", Ev);
        mv.prototype.dispose = mv.prototype.R;
        mv.prototype.showBanner = mv.prototype.lj;
        mv.prototype.setEnabled =
            mv.prototype.pa;
        Jc("google.translate.TranslateElement.FloatPosition", iv);
        iv.TOP_LEFT = 1;
        iv.TOP_RIGHT = 2;
        iv.BOTTOM_RIGHT = 3;
        iv.BOTTOM_LEFT = 4;
        Jc("google.translate.TranslateElement.InlineLayout", ev);
        ev.VERTICAL = 0;
        ev.HORIZONTAL = 1;
        ev.SIMPLE = 2
    }
    (function () {
        for (var a in Object.prototype) {
            dd = function (d, e, f) {
                for (var h in d) d[h] !== Object.prototype[h] && e.call(f, d[h], h, d)
            };
            break
        }
        var b = Ic(), c = sv(hr);
        c && typeof c == p && (1 == lr ? c() : function e() {
            var f = document.readyState;
            "undefined" == zc(f) || f == Ua || "interactive" == f || 2E4 <= Ic() - b ? c() : window.setTimeout(e, 500)
        }())
    })();
}).call(window)
