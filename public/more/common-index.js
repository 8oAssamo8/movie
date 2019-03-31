/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
function showSecurityRiskDialog(e) {
    var t = $('<div>        <div data-login="bback" style="background:#000; opacity: 0.6; z-index:110; position: fixed; margin: 0px; padding: 0px; top: 0px; left: 0px; width: 100%; height: 100%;filter: alpha(opacity=60);"></div>        <div class="m-popbox" data-login="login-out" style="top: 50%;margin-top: -100px;">            <div class="headtip login-tip" style="display:block;padding: 20px;"> <a data-login="close" class="i-pop-close" title="关闭"></a>                <div class="popmid">                    <div class="tc mt25 mb30 px20 lh15" style="padding: 20px;">' + e + '</div>                    <div class="tc pb12 pt15">                        <a class="btnblue mr15 close" >确定</a>                    </div>                </div>            </div>        </div>    </div>');
    $(".close,.i-pop-close", t).on("click", function() { t.remove() }), $("body").append(t)
}

function showResetPasswordDialog(e) {
    var t = $('<div>        <div data-login="bback" style="background:#000; opacity: 0.6; z-index:110; position: fixed; margin: 0px; padding: 0px; top: 0px; left: 0px; width: 100%; height: 100%;filter: alpha(opacity=60);"></div>        <div class="m-popbox" data-login="login-out" style="top: 50%;margin-top: -100px;">            <div class="headtip login-tip" style="display:block;padding: 20px;"> <a data-login="close" class="i-pop-close" title="关闭"></a>                <div class="popmid">                    <div class="tc mt25 mb30 px20 lh15" style="padding: 20px;">很抱歉，账户已被冻结</div>                    <div class="yahei px14 tc bold" style="padding: 10px;">由于长时间未登录，账户已被临时冻结。<br/>请点击按钮，重新邮件激活。 </div>                    <div class="tc pb12 pt15">                        <a class="btnblue mr15 reset-password">立即激活</a>                    </div>                </div>            </div>        </div>    </div>');
    $(".i-pop-close", t).on("click", function() { t.remove() }), $(".reset-password", t).on("click", function() { window.location.href = e }), $("body").append(t)
}! function(e, t) {
    function n(e) {
        var t = e.length,
            n = le.type(e);
        return !le.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
    }

    function r(e) { var t = Te[e] = {}; return le.each(e.match(ue) || [], function(e, n) { t[n] = !0 }), t }

    function i(e, n, r, i) {
        if (le.acceptData(e)) {
            var o, a, s = le.expando,
                l = "string" == typeof n,
                c = e.nodeType,
                u = c ? le.cache : e,
                p = c ? e[s] : e[s] && s;
            if (p && u[p] && (i || u[p].data) || !l || r !== t) return p || (c ? e[s] = p = Z.pop() || le.guid++ : p = s), u[p] || (u[p] = {}, c || (u[p].toJSON = le.noop)), ("object" == typeof n || "function" == typeof n) && (i ? u[p] = le.extend(u[p], n) : u[p].data = le.extend(u[p].data, n)), o = u[p], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[le.camelCase(n)] = r), l ? (a = o[n], null == a && (a = o[le.camelCase(n)])) : a = o, a
        }
    }

    function o(e, t, n) {
        if (le.acceptData(e)) {
            var r, i, o, a = e.nodeType,
                l = a ? le.cache : e,
                c = a ? e[le.expando] : le.expando;
            if (l[c]) { if (t && (o = n ? l[c] : l[c].data)) { le.isArray(t) ? t = t.concat(le.map(t, le.camelCase)) : t in o ? t = [t] : (t = le.camelCase(t), t = t in o ? [t] : t.split(" ")); for (r = 0, i = t.length; i > r; r++) delete o[t[r]]; if (!(n ? s : le.isEmptyObject)(o)) return }(n || (delete l[c].data, s(l[c]))) && (a ? le.cleanData([e], !0) : le.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null) }
        }
    }

    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Ne, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try { r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : ke.test(r) ? le.parseJSON(r) : r) } catch (o) {}
                le.data(e, n, r)
            } else r = t
        }
        return r
    }

    function s(e) {
        var t;
        for (t in e)
            if (("data" !== t || !le.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function l() { return !0 }

    function c() { return !1 }

    function u(e, t) { do e = e[t]; while (e && 1 !== e.nodeType); return e }

    function p(e, t, n) {
        if (t = t || 0, le.isFunction(t)) return le.grep(e, function(e, r) { var i = !!t.call(e, r, e); return i === n });
        if (t.nodeType) return le.grep(e, function(e) { return e === t === n });
        if ("string" == typeof t) {
            var r = le.grep(e, function(e) { return 1 === e.nodeType });
            if (We.test(t)) return le.filter(t, r, !n);
            t = le.filter(t, r)
        }
        return le.grep(e, function(e) { return le.inArray(e, t) >= 0 === n })
    }

    function f(e) {
        var t = ze.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function d(e, t) { return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t)) }

    function h(e) { var t = e.getAttributeNode("type"); return e.type = (t && t.specified) + "/" + e.type, e }

    function g(e) { var t = it.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function m(e, t) { for (var n, r = 0; null != (n = e[r]); r++) le._data(n, "globalEval", !t || le._data(t[r], "globalEval")) }

    function y(e, t) {
        if (1 === t.nodeType && le.hasData(e)) {
            var n, r, i, o = le._data(e),
                a = le._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) le.event.add(t, n, s[n][r])
            }
            a.data && (a.data = le.extend({}, a.data))
        }
    }

    function v(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !le.support.noCloneEvent && t[le.expando]) {
                i = le._data(t);
                for (r in i.events) le.removeEvent(t, r, i.handle);
                t.removeAttribute(le.expando)
            }
            "script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), le.support.html5Clone && e.innerHTML && !le.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function b(e, n) {
        var r, i, o = 0,
            a = typeof e.getElementsByTagName !== V ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== V ? e.querySelectorAll(n || "*") : t;
        if (!a)
            for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) !n || le.nodeName(i, n) ? a.push(i) : le.merge(a, b(i, n));
        return n === t || n && le.nodeName(e, n) ? le.merge([e], a) : a
    }

    function x(e) { tt.test(e.type) && (e.defaultChecked = e.checked) }

    function w(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = kt.length; i--;)
            if (t = kt[i] + n, t in e) return t;
        return r
    }

    function C(e, t) { return e = t || e, "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e) }

    function T(e, t) { for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = le._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && C(r) && (o[a] = le._data(r, "olddisplay", j(r.nodeName)))) : o[a] || (i = C(r), (n && "none" !== n || !i) && le._data(r, "olddisplay", i ? n : le.css(r, "display")))); for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none")); return e }

    function k(e, t, n) { var r = yt.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t }

    function N(e, t, n, r, i) { for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += le.css(e, n + Tt[o], !0, i)), r ? ("content" === n && (a -= le.css(e, "padding" + Tt[o], !0, i)), "margin" !== n && (a -= le.css(e, "border" + Tt[o] + "Width", !0, i))) : (a += le.css(e, "padding" + Tt[o], !0, i), "padding" !== n && (a += le.css(e, "border" + Tt[o] + "Width", !0, i))); return a }

    function A(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = ut(e),
            a = le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = pt(e, t, o), (0 > i || null == i) && (i = e.style[t]), vt.test(i)) return i;
            r = a && (le.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + N(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function j(e) {
        var t = X,
            n = xt[e];
        return n || (n = E(e, t), "none" !== n && n || (ct = (ct || le("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ct[0].contentWindow || ct[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = E(e, t), ct.detach()), xt[e] = n), n
    }

    function E(e, t) {
        var n = le(t.createElement(e)).appendTo(t.body),
            r = le.css(n[0], "display");
        return n.remove(), r
    }

    function _(e, t, n, r) {
        var i;
        if (le.isArray(t)) le.each(t, function(t, i) { n || At.test(e) ? r(e, i) : _(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) });
        else if (n || "object" !== le.type(t)) r(e, t);
        else
            for (i in t) _(e + "[" + i + "]", t[i], n, r)
    }

    function S(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(ue) || [];
            if (le.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function D(e, n, r, i) {
        function o(l) { var c; return a[l] = !0, le.each(e[l] || [], function(e, l) { var u = l(n, r, i); return "string" != typeof u || s || a[u] ? s ? !(c = u) : t : (n.dataTypes.unshift(u), o(u), !1) }), c }
        var a = {},
            s = e === Wt;
        return o(n.dataTypes[0]) || !a["*"] && o("*")
    }

    function L(e, n) { var r, i, o = le.ajaxSettings.flatOptions || {}; for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]); return r && le.extend(!0, e, r), e }

    function O(e, n, r) {
        var i, o, a, s, l = e.contents,
            c = e.dataTypes,
            u = e.responseFields;
        for (s in u) s in r && (n[u[s]] = r[s]);
        for (;
            "*" === c[0];) c.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in l)
                if (l[s] && l[s].test(o)) { c.unshift(s); break }
        if (c[0] in r) a = c[0];
        else {
            for (s in r) {
                if (!c[0] || e.converters[s + " " + c[0]]) { a = s; break }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== c[0] && c.unshift(a), r[a]) : t
    }

    function M(e, t) {
        var n, r, i, o, a = {},
            s = 0,
            l = e.dataTypes.slice(),
            c = l[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), l[1])
            for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
        for (; r = l[++s];)
            if ("*" !== r) {
                if ("*" !== c && c !== r) {
                    if (i = a[c + " " + r] || a["* " + r], !i)
                        for (n in a)
                            if (o = n.split(" "), o[1] === r && (i = a[c + " " + o[0]] || a["* " + o[0]])) { i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], l.splice(s--, 0, r)); break }
                    if (i !== !0)
                        if (i && e["throws"]) t = i(t);
                        else try { t = i(t) } catch (u) { return { state: "parsererror", error: i ? u : "No conversion from " + c + " to " + r } }
                }
                c = r
            }
        return { state: "success", data: t }
    }

    function H() { try { return new e.XMLHttpRequest } catch (t) {} }

    function P() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }

    function R() { return setTimeout(function() { Qt = t }), Qt = le.now() }

    function I(e, t) {
        le.each(t, function(t, n) {
            for (var r = (on[t] || []).concat(on["*"]), i = 0, o = r.length; o > i; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function F(e, t, n) {
        var r, i, o = 0,
            a = rn.length,
            s = le.Deferred().always(function() { delete l.elem }),
            l = function() { if (i) return !1; for (var t = Qt || R(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o); return s.notifyWith(e, [c, o, n]), 1 > o && l ? n : (s.resolveWith(e, [c]), !1) },
            c = s.promise({
                elem: e,
                props: le.extend({}, t),
                opts: le.extend(!0, { specialEasing: {} }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Qt || R(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) { var r = le.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing); return c.tweens.push(r), r },
                stop: function(t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) c.tweens[n].run(1);
                    return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (B(u, c.opts.specialEasing); a > o; o++)
            if (r = rn[o].call(c, e, u, c.opts)) return r;
        return I(c, u), le.isFunction(c.opts.start) && c.opts.start.call(e, c), le.fx.timer(le.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function B(e, t) {
        var n, r, i, o, a;
        for (i in e)
            if (r = le.camelCase(i), o = t[r], n = e[i], le.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = le.cssHooks[r], a && "expand" in a) { n = a.expand(n), delete e[r]; for (i in n) i in e || (e[i] = n[i], t[i] = o) } else t[r] = o
    }

    function q(e, t, n) {
        var r, i, o, a, s, l, c, u, p, f = this,
            d = e.style,
            h = {},
            g = [],
            m = e.nodeType && C(e);
        n.queue || (u = le._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, p = u.empty.fire, u.empty.fire = function() { u.unqueued || p() }), u.unqueued++, f.always(function() { f.always(function() { u.unqueued--, le.queue(e, "fx").length || u.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === le.css(e, "display") && "none" === le.css(e, "float") && (le.support.inlineBlockNeedsLayout && "inline" !== j(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", le.support.shrinkWrapBlocks || f.always(function() { d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2] }));
        for (i in t)
            if (a = t[i], en.exec(a)) {
                if (delete t[i], l = l || "toggle" === a, a === (m ? "hide" : "show")) continue;
                g.push(i)
            }
        if (o = g.length) {
            s = le._data(e, "fxshow") || le._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), l && (s.hidden = !m), m ? le(e).show() : f.done(function() { le(e).hide() }), f.done(function() {
                var t;
                le._removeData(e, "fxshow");
                for (t in h) le.style(e, t, h[t])
            });
            for (i = 0; o > i; i++) r = g[i], c = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || le.style(e, r), r in s || (s[r] = c.start, m && (c.end = c.start, c.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function $(e, t, n, r, i) { return new $.prototype.init(e, t, n, r, i) }

    function W(e, t) {
        var n, r = { height: e },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Tt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function U(e) { return le.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow) }
    var J, z, V = typeof t,
        X = e.document,
        Y = e.location,
        G = e.jQuery,
        K = e.$,
        Q = {},
        Z = [],
        ee = "1.9.1",
        te = Z.concat,
        ne = Z.push,
        re = Z.slice,
        ie = Z.indexOf,
        oe = Q.toString,
        ae = Q.hasOwnProperty,
        se = ee.trim,
        le = function(e, t) { return new le.fn.init(e, t, z) },
        ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ue = /\S+/g,
        pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        fe = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        he = /^[\],:{}\s]*$/,
        ge = /(?:^|:|,)(?:\s*\[)+/g,
        me = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ye = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        ve = /^-ms-/,
        be = /-([\da-z])/gi,
        xe = function(e, t) { return t.toUpperCase() },
        we = function(e) {
            (X.addEventListener || "load" === e.type || "complete" === X.readyState) && (Ce(), le.ready())
        },
        Ce = function() { X.addEventListener ? (X.removeEventListener("DOMContentLoaded", we, !1), e.removeEventListener("load", we, !1)) : (X.detachEvent("onreadystatechange", we), e.detachEvent("onload", we)) };
    le.fn = le.prototype = {
        jquery: ee,
        constructor: le,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : fe.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof le ? n[0] : n, le.merge(this, le.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : X, !0)), de.test(i[1]) && le.isPlainObject(n))
                        for (i in n) le.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = X.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = X, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : le.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), le.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function() { return this.length },
        toArray: function() { return re.call(this) },
        get: function(e) { return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e] },
        pushStack: function(e) { var t = le.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t },
        each: function(e, t) { return le.each(this, e, t) },
        ready: function(e) { return le.ready.promise().done(e), this },
        slice: function() { return this.pushStack(re.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) { return this.pushStack(le.map(this, function(t, n) { return e.call(t, n, t) })) },
        end: function() { return this.prevObject || this.constructor(null) },
        push: ne,
        sort: [].sort,
        splice: [].splice
    }, le.fn.init.prototype = le.fn, le.extend = le.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
            l = 1,
            c = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[1] || {}, l = 2), "object" == typeof s || le.isFunction(s) || (s = {}), c === l && (s = this, --l); c > l; l++)
            if (null != (o = arguments[l]))
                for (i in o) e = s[i], r = o[i], s !== r && (u && r && (le.isPlainObject(r) || (n = le.isArray(r))) ? (n ? (n = !1, a = e && le.isArray(e) ? e : []) : a = e && le.isPlainObject(e) ? e : {}, s[i] = le.extend(u, a, r)) : r !== t && (s[i] = r));
        return s
    }, le.extend({
        noConflict: function(t) { return e.$ === le && (e.$ = K), t && e.jQuery === le && (e.jQuery = G), le },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) { e ? le.readyWait++ : le.ready(!0) },
        ready: function(e) {
            if (e === !0 ? !--le.readyWait : !le.isReady) {
                if (!X.body) return setTimeout(le.ready);
                le.isReady = !0, e !== !0 && --le.readyWait > 0 || (J.resolveWith(X, [le]), le.fn.trigger && le(X).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) { return "function" === le.type(e) },
        isArray: Array.isArray || function(e) { return "array" === le.type(e) },
        isWindow: function(e) { return null != e && e == e.window },
        isNumeric: function(e) { return !isNaN(parseFloat(e)) && isFinite(e) },
        type: function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[oe.call(e)] || "object" : typeof e },
        isPlainObject: function(e) { if (!e || "object" !== le.type(e) || e.nodeType || le.isWindow(e)) return !1; try { if (e.constructor && !ae.call(e, "constructor") && !ae.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (n) { return !1 } var r; for (r in e); return r === t || ae.call(e, r) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        error: function(e) { throw Error(e) },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || X;
            var r = de.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = le.buildFragment([e], t, i), i && le(i).remove(), le.merge([], r.childNodes))
        },
        parseJSON: function(n) { return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = le.trim(n), n && he.test(n.replace(me, "@").replace(ye, "]").replace(ge, ""))) ? Function("return " + n)() : (le.error("Invalid JSON: " + n), t) },
        parseXML: function(n) { var r, i; if (!n || "string" != typeof n) return null; try { e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n)) } catch (o) { r = t } return r && r.documentElement && !r.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + n), r },
        noop: function() {},
        globalEval: function(t) { t && le.trim(t) && (e.execScript || function(t) { e.eval.call(e, t) })(t) },
        camelCase: function(e) { return e.replace(ve, "ms-").replace(be, xe) },
        nodeName: function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() },
        each: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        },
        trim: se && !se.call("\ufeff ") ? function(e) { return null == e ? "" : se.call(e) } : function(e) { return null == e ? "" : (e + "").replace(pe, "") },
        makeArray: function(e, t) { var r = t || []; return null != e && (n(Object(e)) ? le.merge(r, "string" == typeof e ? [e] : e) : ne.call(r, e)), r },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (ie) return ie.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; a > o; o++) i = t(e[o], o, r), null != i && (l[l.length] = i);
            else
                for (o in e) i = t(e[o], o, r), null != i && (l[l.length] = i);
            return te.apply([], l)
        },
        guid: 1,
        proxy: function(e, n) { var r, i, o; return "string" == typeof n && (o = e[n], n = e, e = o), le.isFunction(e) ? (r = re.call(arguments, 2), i = function() { return e.apply(n || this, r.concat(re.call(arguments))) }, i.guid = e.guid = e.guid || le.guid++, i) : t },
        access: function(e, n, r, i, o, a, s) {
            var l = 0,
                c = e.length,
                u = null == r;
            if ("object" === le.type(r)) { o = !0; for (l in r) le.access(e, n, l, r[l], !0, a, s) } else if (i !== t && (o = !0, le.isFunction(i) || (s = !0), u && (s ? (n.call(e, i), n = null) : (u = n, n = function(e, t, n) { return u.call(le(e), n) })), n))
                for (; c > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : u ? n.call(e) : c ? n(e[0], r) : a
        },
        now: function() { return (new Date).getTime() }
    }), le.ready.promise = function(t) {
        if (!J)
            if (J = le.Deferred(), "complete" === X.readyState) setTimeout(le.ready);
            else if (X.addEventListener) X.addEventListener("DOMContentLoaded", we, !1), e.addEventListener("load", we, !1);
        else {
            X.attachEvent("onreadystatechange", we), e.attachEvent("onload", we);
            var n = !1;
            try { n = null == e.frameElement && X.documentElement } catch (r) {}
            n && n.doScroll && function i() {
                if (!le.isReady) {
                    try { n.doScroll("left") } catch (e) { return setTimeout(i, 50) }
                    Ce(), le.ready()
                }
            }()
        }
        return J.promise(t)
    }, le.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) { Q["[object " + t + "]"] = t.toLowerCase() }), z = le(X);
    var Te = {};
    le.Callbacks = function(e) {
        e = "string" == typeof e ? Te[e] || r(e) : le.extend({}, e);
        var n, i, o, a, s, l, c = [],
            u = !e.once && [],
            p = function(t) {
                for (i = e.memory && t, o = !0, s = l || 0, l = 0, a = c.length, n = !0; c && a > s; s++)
                    if (c[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) { i = !1; break }
                n = !1, c && (u ? u.length && p(u.shift()) : i ? c = [] : f.disable())
            },
            f = {
                add: function() { if (c) { var t = c.length;! function r(t) { le.each(t, function(t, n) { var i = le.type(n); "function" === i ? e.unique && f.has(n) || c.push(n) : n && n.length && "string" !== i && r(n) }) }(arguments), n ? a = c.length : i && (l = t, p(i)) } return this },
                remove: function() {
                    return c && le.each(arguments, function(e, t) {
                        for (var r;
                            (r = le.inArray(t, c, r)) > -1;) c.splice(r, 1), n && (a >= r && a--, s >= r && s--)
                    }), this
                },
                has: function(e) { return e ? le.inArray(e, c) > -1 : !(!c || !c.length) },
                empty: function() { return c = [], this },
                disable: function() { return c = u = i = t, this },
                disabled: function() { return !c },
                lock: function() { return u = t, i || f.disable(), this },
                locked: function() { return !u },
                fireWith: function(e, t) { return t = t || [], t = [e, t.slice ? t.slice() : t], !c || o && !u || (n ? u.push(t) : p(t)), this },
                fire: function() { return f.fireWith(this, arguments), this },
                fired: function() { return !!o }
            };
        return f
    }, le.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", le.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", le.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", le.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() { return n },
                    always: function() { return i.done(arguments).fail(arguments), this },
                    then: function() {
                        var e = arguments;
                        return le.Deferred(function(n) {
                            le.each(t, function(t, o) {
                                var a = o[0],
                                    s = le.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && le.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) { return null != e ? le.extend(e, r) : r }
                },
                i = {};
            return r.pipe = r.then, le.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() { return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = re.call(arguments),
                a = o.length,
                s = 1 !== a || e && le.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : le.Deferred(),
                c = function(e, n, r) { return function(i) { n[e] = this, r[e] = arguments.length > 1 ? re.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r) } };
            if (a > 1)
                for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && le.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(l.reject).progress(c(i, n, t)) : --s;
            return s || l.resolveWith(r, o), l.promise()
        }
    }), le.support = function() {
        var t, n, r, i, o, a, s, l, c, u, p = X.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        o = X.createElement("select"), s = o.appendChild(X.createElement("option")), i = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = { getSetAttribute: "t" !== p.className, leadingWhitespace: 3 === p.firstChild.nodeType, tbody: !p.getElementsByTagName("tbody").length, htmlSerialize: !!p.getElementsByTagName("link").length, style: /top/.test(r.getAttribute("style")), hrefNormalized: "/a" === r.getAttribute("href"), opacity: /^0.5/.test(r.style.opacity), cssFloat: !!r.style.cssFloat, checkOn: !!i.value, optSelected: s.selected, enctype: !!X.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== X.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === X.compatMode, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 }, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
        try { delete p.test } catch (f) { t.deleteExpando = !1 }
        i = X.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = X.createDocumentFragment(), a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() { t.noCloneEvent = !1 }), p.cloneNode(!0).click());
        for (u in { submit: !0, change: !0, focusin: !0 }) p.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        return p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === p.style.backgroundClip, le(function() {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = X.getElementsByTagName("body")[0];
            a && (n = X.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = p.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === p.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || { width: "4px" }).width, r = p.appendChild(X.createElement("div")), r.style.cssText = p.style.cssText = o, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== V && (p.innerHTML = "", p.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = i = r = null)
        }), n = o = a = s = r = i = null, t
    }();
    var ke = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Ne = /([A-Z])/g;
    le.extend({ cache: {}, expando: "jQuery" + (ee + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function(e) { return e = e.nodeType ? le.cache[e[le.expando]] : e[le.expando], !!e && !s(e) }, data: function(e, t, n) { return i(e, t, n) }, removeData: function(e, t) { return o(e, t) }, _data: function(e, t, n) { return i(e, t, n, !0) }, _removeData: function(e, t) { return o(e, t, !0) }, acceptData: function(e) { if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1; var t = e.nodeName && le.noData[e.nodeName.toLowerCase()]; return !t || t !== !0 && e.getAttribute("classid") === t } }), le.fn.extend({
        data: function(e, n) {
            var r, i, o = this[0],
                s = 0,
                l = null;
            if (e === t) {
                if (this.length && (l = le.data(o), 1 === o.nodeType && !le._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; r.length > s; s++) i = r[s].name, i.indexOf("data-") || (i = le.camelCase(i.slice(5)), a(o, i, l[i]));
                    le._data(o, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof e ? this.each(function() { le.data(this, e) }) : le.access(this, function(n) { return n === t ? o ? a(o, e, le.data(o, e)) : null : (this.each(function() { le.data(this, e, n) }), t) }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function(e) { return this.each(function() { le.removeData(this, e) }) }
    }), le.extend({
        queue: function(e, n, r) { var i; return e ? (n = (n || "fx") + "queue", i = le._data(e, n), r && (!i || le.isArray(r) ? i = le._data(e, n, le.makeArray(r)) : i.push(r)), i || []) : t },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = le.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = le._queueHooks(e, t),
                a = function() { le.dequeue(e, t) };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return le._data(e, n) || le._data(e, n, { empty: le.Callbacks("once memory").add(function() { le._removeData(e, t + "queue"), le._removeData(e, n) }) }) }
    }), le.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? le.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = le.queue(this, e, n);
                le._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && le.dequeue(this, e)
            })
        },
        dequeue: function(e) { return this.each(function() { le.dequeue(this, e) }) },
        delay: function(e, t) {
            return e = le.fx ? le.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() { clearTimeout(r) }
            })
        },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, n) {
            var r, i = 1,
                o = le.Deferred(),
                a = this,
                s = this.length,
                l = function() {--i || o.resolveWith(a, [a]) };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = le._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var Ae, je, Ee = /[\t\r\n]/g,
        _e = /\r/g,
        Se = /^(?:input|select|textarea|button|object)$/i,
        De = /^(?:a|area)$/i,
        Le = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        Oe = /^(?:checked|selected)$/i,
        Me = le.support.getSetAttribute,
        He = le.support.input;
    le.fn.extend({
        attr: function(e, t) { return le.access(this, le.attr, e, t, arguments.length > 1) },
        removeAttr: function(e) { return this.each(function() { le.removeAttr(this, e) }) },
        prop: function(e, t) { return le.access(this, le.prop, e, t, arguments.length > 1) },
        removeProp: function(e) { return e = le.propFix[e] || e, this.each(function() { try { this[e] = t, delete this[e] } catch (n) {} }) },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (le.isFunction(e)) return this.each(function(t) { le(this).addClass(e.call(this, t, this.className)) });
            if (l)
                for (t = (e || "").match(ue) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ee, " ") : " ")) {
                        for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = le.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (le.isFunction(e)) return this.each(function(t) { le(this).removeClass(e.call(this, t, this.className)) });
            if (l)
                for (t = (e || "").match(ue) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ee, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        n.className = e ? le.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return le.isFunction(e) ? this.each(function(n) { le(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function() {
                if ("string" === n)
                    for (var i, o = 0, a = le(this), s = t, l = e.match(ue) || []; i = l[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
                else(n === V || "boolean" === n) && (this.className && le._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : le._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ee, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            return arguments.length ? (i = le.isFunction(e), this.each(function(n) {
                var o, a = le(this);
                1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : le.isArray(o) && (o = le.map(o, function(e) { return null == e ? "" : e + "" })), r = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
            })) : o ? (r = le.valHooks[o.type] || le.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(_e, "") : null == n ? "" : n)) : void 0
        }
    }), le.extend({
        valHooks: {
            option: { get: function(e) { var t = e.attributes.value; return !t || t.specified ? e.value : e.text } },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (le.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && le.nodeName(n.parentNode, "optgroup"))) {
                            if (t = le(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) { var n = le.makeArray(t); return le(e).find("option").each(function() { this.selected = le.inArray(le(this).val(), n) >= 0 }), n.length || (e.selectedIndex = -1), n }
            }
        },
        attr: function(e, n, r) { var i, o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === V ? le.prop(e, n, r) : (o = 1 !== s || !le.isXMLDoc(e), o && (n = n.toLowerCase(), i = le.attrHooks[n] || (Le.test(n) ? je : Ae)), r === t ? i && o && "get" in i && null !== (a = i.get(e, n)) ? a : (typeof e.getAttribute !== V && (a = e.getAttribute(n)), null == a ? t : a) : null !== r ? i && o && "set" in i && (a = i.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (le.removeAttr(e, n), t)) },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(ue);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = le.propFix[n] || n, Le.test(n) ? !Me && Oe.test(n) ? e[le.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : le.attr(e, n, ""), e.removeAttribute(Me ? n : r)
        },
        attrHooks: { type: { set: function(e, t) { if (!le.support.radioValue && "radio" === t && le.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
        prop: function(e, n, r) { var i, o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !le.isXMLDoc(e), a && (n = le.propFix[n] || n, o = le.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n] },
        propHooks: { tabIndex: { get: function(e) { var n = e.getAttributeNode("tabindex"); return n && n.specified ? parseInt(n.value, 10) : Se.test(e.nodeName) || De.test(e.nodeName) && e.href ? 0 : t } } }
    }), je = {
        get: function(e, n) {
            var r = le.prop(e, n),
                i = "boolean" == typeof r && e.getAttribute(n),
                o = "boolean" == typeof r ? He && Me ? null != i : Oe.test(n) ? e[le.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) { return t === !1 ? le.removeAttr(e, n) : He && Me || !Oe.test(n) ? e.setAttribute(!Me && le.propFix[n] || n, n) : e[le.camelCase("default-" + n)] = e[n] = !0, n }
    }, He && Me || (le.attrHooks.value = { get: function(e, n) { var r = e.getAttributeNode(n); return le.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t }, set: function(e, n, r) { return le.nodeName(e, "input") ? (e.defaultValue = n, t) : Ae && Ae.set(e, n, r) } }), Me || (Ae = le.valHooks.button = { get: function(e, n) { var r = e.getAttributeNode(n); return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t }, set: function(e, n, r) { var i = e.getAttributeNode(r); return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t } }, le.attrHooks.contenteditable = { get: Ae.get, set: function(e, t, n) { Ae.set(e, "" !== t && t, n) } }, le.each(["width", "height"], function(e, n) { le.attrHooks[n] = le.extend(le.attrHooks[n], { set: function(e, r) { return "" === r ? (e.setAttribute(n, "auto"), r) : t } }) })), le.support.hrefNormalized || (le.each(["href", "src", "width", "height"], function(e, n) { le.attrHooks[n] = le.extend(le.attrHooks[n], { get: function(e) { var r = e.getAttribute(n, 2); return null == r ? t : r } }) }), le.each(["href", "src"], function(e, t) { le.propHooks[t] = { get: function(e) { return e.getAttribute(t, 4) } } })), le.support.style || (le.attrHooks.style = { get: function(e) { return e.style.cssText || t }, set: function(e, t) { return e.style.cssText = t + "" } }), le.support.optSelected || (le.propHooks.selected = le.extend(le.propHooks.selected, { get: function(e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } })), le.support.enctype || (le.propFix.enctype = "encoding"), le.support.checkOn || le.each(["radio", "checkbox"], function() { le.valHooks[this] = { get: function(e) { return null === e.getAttribute("value") ? "on" : e.value } } }), le.each(["radio", "checkbox"], function() { le.valHooks[this] = le.extend(le.valHooks[this], { set: function(e, n) { return le.isArray(n) ? e.checked = le.inArray(le(e).val(), n) >= 0 : t } }) });
    var Pe = /^(?:input|select|textarea)$/i,
        Re = /^key/,
        Ie = /^(?:mouse|contextmenu)|click/,
        Fe = /^(?:focusinfocus|focusoutblur)$/,
        Be = /^([^.]*)(?:\.(.+)|)$/;
    le.event = {
            global: {},
            add: function(e, n, r, i, o) {
                var a, s, l, c, u, p, f, d, h, g, m, y = le._data(e);
                if (y) {
                    for (r.handler && (c = r, r = c.handler, o = c.selector), r.guid || (r.guid = le.guid++), (s = y.events) || (s = y.events = {}), (p = y.handle) || (p = y.handle = function(e) { return typeof le === V || e && le.event.triggered === e.type ? t : le.event.dispatch.apply(p.elem, arguments) }, p.elem = e), n = (n || "").match(ue) || [""], l = n.length; l--;) a = Be.exec(n[l]) || [], h = m = a[1], g = (a[2] || "").split(".").sort(), u = le.event.special[h] || {}, h = (o ? u.delegateType : u.bindType) || h, u = le.event.special[h] || {}, f = le.extend({ type: h, origType: m, data: i, handler: r, guid: r.guid, selector: o, needsContext: o && le.expr.match.needsContext.test(o), namespace: g.join(".") }, c), (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, u.setup && u.setup.call(e, i, g, p) !== !1 || (e.addEventListener ? e.addEventListener(h, p, !1) : e.attachEvent && e.attachEvent("on" + h, p))), u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, f) : d.push(f), le.event.global[h] = !0;
                    e = null
                }
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, l, c, u, p, f, d, h, g, m = le.hasData(e) && le._data(e);
                if (m && (u = m.events)) {
                    for (t = (t || "").match(ue) || [""], c = t.length; c--;)
                        if (s = Be.exec(t[c]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                            for (p = le.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = u[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                            l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || le.removeEvent(e, d, m.handle), delete u[d])
                        } else
                            for (d in u) le.event.remove(e, d + t[c], n, r, !0);
                    le.isEmptyObject(u) && (delete m.handle, le._removeData(e, "events"))
                }
            },
            trigger: function(n, r, i, o) {
                var a, s, l, c, u, p, f, d = [i || X],
                    h = ae.call(n, "type") ? n.type : n,
                    g = ae.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = p = i = i || X, 3 !== i.nodeType && 8 !== i.nodeType && !Fe.test(h + le.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), s = 0 > h.indexOf(":") && "on" + h, n = n[le.expando] ? n : new le.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : le.makeArray(r, [n]), u = le.event.special[h] || {}, o || !u.trigger || u.trigger.apply(i, r) !== !1)) {
                    if (!o && !u.noBubble && !le.isWindow(i)) {
                        for (c = u.delegateType || h, Fe.test(c + h) || (l = l.parentNode); l; l = l.parentNode) d.push(l), p = l;
                        p === (i.ownerDocument || X) && d.push(p.defaultView || p.parentWindow || e)
                    }
                    for (f = 0;
                        (l = d[f++]) && !n.isPropagationStopped();) n.type = f > 1 ? c : u.bindType || h, a = (le._data(l, "events") || {})[n.type] && le._data(l, "handle"), a && a.apply(l, r), a = s && l[s], a && le.acceptData(l) && a.apply && a.apply(l, r) === !1 && n.preventDefault();
                    if (n.type = h, !(o || n.isDefaultPrevented() || u._default && u._default.apply(i.ownerDocument, r) !== !1 || "click" === h && le.nodeName(i, "a") || !le.acceptData(i) || !s || !i[h] || le.isWindow(i))) {
                        p = i[s], p && (i[s] = null), le.event.triggered = h;
                        try { i[h]() } catch (m) {}
                        le.event.triggered = t, p && (i[s] = p)
                    }
                    return n.result
                }
            },
            dispatch: function(e) {
                e = le.event.fix(e);
                var n, r, i, o, a, s = [],
                    l = re.call(arguments),
                    c = (le._data(this, "events") || {})[e.type] || [],
                    u = le.event.special[e.type] || {};
                if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (s = le.event.handlers.call(this, e, c), n = 0;
                        (o = s[n++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, a = 0;
                            (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((le.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, n) {
                var r, i, o, a, s = [],
                    l = n.delegateCount,
                    c = e.target;
                if (l && c.nodeType && (!e.button || "click" !== e.type))
                    for (; c != this; c = c.parentNode || this)
                        if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                            for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? le(r, this).index(c) >= 0 : le.find(r, this, null, [c]).length), o[r] && o.push(i);
                            o.length && s.push({ elem: c, handlers: o })
                        }
                return n.length > l && s.push({ elem: this, handlers: n.slice(l) }), s
            },
            fix: function(e) {
                if (e[le.expando]) return e;
                var t, n, r, i = e.type,
                    o = e,
                    a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = Ie.test(i) ? this.mouseHooks : Re.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new le.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || X), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, o, a = n.button,
                        s = n.fromElement;
                    return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || X, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            special: { load: { noBubble: !0 }, click: { trigger: function() { return le.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t } }, focus: { trigger: function() { if (this !== X.activeElement && this.focus) try { return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === X.activeElement && this.blur ? (this.blur(), !1) : t }, delegateType: "focusout" }, beforeunload: { postDispatch: function(e) { e.result !== t && (e.originalEvent.returnValue = e.result) } } },
            simulate: function(e, t, n, r) {
                var i = le.extend(new le.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
                r ? le.event.trigger(i, null, t) : le.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, le.removeEvent = X.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] === V && (e[r] = null), e.detachEvent(r, n))
        }, le.Event = function(e, n) { return this instanceof le.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, n && le.extend(this, n), this.timeStamp = e && e.timeStamp || le.now(), this[le.expando] = !0, t) : new le.Event(e, n) }, le.Event.prototype = {
            isDefaultPrevented: c,
            isPropagationStopped: c,
            isImmediatePropagationStopped: c,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() { this.isImmediatePropagationStopped = l, this.stopPropagation() }
        }, le.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(e, t) {
            le.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return (!i || i !== r && !le.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), le.support.submitBubbles || (le.event.special.submit = {
            setup: function() {
                return !le.nodeName(this, "form") && (le.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        r = le.nodeName(n, "input") || le.nodeName(n, "button") ? n.form : t;
                    r && !le._data(r, "submitBubbles") && (le.event.add(r, "submit._submit", function(e) { e._submit_bubble = !0 }), le._data(r, "submitBubbles", !0))
                }), t)
            },
            postDispatch: function(e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && le.event.simulate("submit", this.parentNode, e, !0)) },
            teardown: function() { return !le.nodeName(this, "form") && (le.event.remove(this, "._submit"), t) }
        }), le.support.changeBubbles || (le.event.special.change = {
            setup: function() {
                return Pe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (le.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), le.event.add(this, "click._change", function(e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), le.event.simulate("change", this, e, !0) })), !1) : (le.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Pe.test(t.nodeName) && !le._data(t, "changeBubbles") && (le.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || le.event.simulate("change", this.parentNode, e, !0) }), le._data(t, "changeBubbles", !0))
                }), t)
            },
            handle: function(e) { var n = e.target; return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t },
            teardown: function() { return le.event.remove(this, "._change"), !Pe.test(this.nodeName) }
        }), le.support.focusinBubbles || le.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
            var n = 0,
                r = function(e) { le.event.simulate(t, e.target, le.event.fix(e), !0) };
            le.event.special[t] = { setup: function() { 0 === n++ && X.addEventListener(e, r, !0) }, teardown: function() { 0 === --n && X.removeEventListener(e, r, !0) } }
        }), le.fn.extend({
            on: function(e, n, r, i, o) {
                var a, s;
                if ("object" == typeof e) { "string" != typeof n && (r = r || n, n = t); for (a in e) this.on(a, n, r, e[a], o); return this }
                if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = c;
                else if (!i) return this;
                return 1 === o && (s = i, i = function(e) { return le().off(e), s.apply(this, arguments) }, i.guid = s.guid || (s.guid = le.guid++)), this.each(function() { le.event.add(this, e, i, r, n) })
            },
            one: function(e, t, n, r) { return this.on(e, t, n, r, 1) },
            off: function(e, n, r) { var i, o; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, le(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (o in e) this.off(o, n, e[o]); return this } return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = c), this.each(function() { le.event.remove(this, e, r, n) }) },
            bind: function(e, t, n) { return this.on(e, null, t, n) },
            unbind: function(e, t) { return this.off(e, null, t) },
            delegate: function(e, t, n, r) { return this.on(t, e, n, r) },
            undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) },
            trigger: function(e, t) { return this.each(function() { le.event.trigger(e, t, this) }) },
            triggerHandler: function(e, n) { var r = this[0]; return r ? le.event.trigger(e, n, r, !0) : t }
        }),
        function(e, t) {
            function n(e) { return he.test(e + "") }

            function r() { var e, t = []; return e = function(n, r) { return t.push(n += " ") > k.cacheLength && delete e[t.shift()], e[n] = r } }

            function i(e) { return e[F] = !0, e }

            function o(e) { var t = D.createElement("div"); try { return e(t) } catch (n) { return !1 } finally { t = null } }

            function a(e, t, n, r) {
                var i, o, a, s, l, c, u, d, h, g;
                if ((t ? t.ownerDocument || t : B) !== D && S(t), t = t || D, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (s = t.nodeType) && 9 !== s) return [];
                if (!O && !r) {
                    if (i = ge.exec(e))
                        if (a = i[1]) { if (9 === s) { if (o = t.getElementById(a), !o || !o.parentNode) return n; if (o.id === a) return n.push(o), n } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && R(t, o) && o.id === a) return n.push(o), n } else { if (i[2]) return K.apply(n, Q.call(t.getElementsByTagName(e), 0)), n; if ((a = i[3]) && q.getByClassName && t.getElementsByClassName) return K.apply(n, Q.call(t.getElementsByClassName(a), 0)), n }
                    if (q.qsa && !M.test(e)) {
                        if (u = !0, d = F, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (c = p(e), (u = t.getAttribute("id")) ? d = u.replace(ve, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;) c[l] = d + f(c[l]);
                            h = de.test(e) && t.parentNode || t, g = c.join(",")
                        }
                        if (g) try { return K.apply(n, Q.call(h.querySelectorAll(g), 0)), n } catch (m) {} finally { u || t.removeAttribute("id") }
                    }
                }
                return x(e.replace(ae, "$1"), t, n, r)
            }

            function s(e, t) {
                var n = t && e,
                    r = n && (~t.sourceIndex || X) - (~e.sourceIndex || X);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function l(e) { return function(t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } }

            function c(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

            function u(e) { return i(function(t) { return t = +t, i(function(n, r) { for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) }

            function p(e, t) {
                var n, r, i, o, s, l, c, u = J[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (s = e, l = [], c = k.preFilter; s;) {
                    (!n || (r = se.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = ce.exec(s)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(ae, " ") }), s = s.slice(n.length));
                    for (o in k.filter) !(r = fe[o].exec(s)) || c[o] && !(r = c[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? a.error(e) : J(e, l).slice(0)
            }

            function f(e) { for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value; return r }

            function d(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === r,
                    o = W++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) return e(t, n, o)
                } : function(t, n, a) {
                    var s, l, c, u = $ + " " + o;
                    if (a) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || i)
                                if (c = t[F] || (t[F] = {}), (l = c[r]) && l[0] === u) { if ((s = l[1]) === !0 || s === T) return s === !0 } else if (l = c[r] = [u], l[1] = e(t, n, a) || T, l[1] === !0) return !0
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function g(e, t, n, r, i) { for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), c && t.push(s)); return a }

            function m(e, t, n, r, o, a) {
                return r && !r[F] && (r = m(r)), o && !o[F] && (o = m(o, a)), i(function(i, a, s, l) {
                    var c, u, p, f = [],
                        d = [],
                        h = a.length,
                        m = i || b(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !i && t ? m : g(m, f, e, s, l),
                        v = n ? o || (i ? e : h || r) ? [] : a : y;
                    if (n && n(y, v, s, l), r)
                        for (c = g(v, d), r(c, [], s, l), u = c.length; u--;)(p = c[u]) && (v[d[u]] = !(y[d[u]] = p));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (c = [], u = v.length; u--;)(p = v[u]) && c.push(y[u] = p);
                                o(null, v = [], c, l)
                            }
                            for (u = v.length; u--;)(p = v[u]) && (c = o ? Z.call(i, p) : f[u]) > -1 && (i[c] = !(a[c] = p))
                        }
                    } else v = g(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, l) : K.apply(a, v)
                })
            }

            function y(e) {
                for (var t, n, r, i = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, l = d(function(e) { return e === t }, a, !0), c = d(function(e) { return Z.call(t, e) > -1 }, a, !0), u = [function(e, n, r) { return !o && (r || n !== _) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r)) }]; i > s; s++)
                    if (n = k.relative[e[s].type]) u = [d(h(u), n)];
                    else {
                        if (n = k.filter[e[s].type].apply(null, e[s].matches), n[F]) { for (r = ++s; i > r && !k.relative[e[r].type]; r++); return m(s > 1 && h(u), s > 1 && f(e.slice(0, s - 1)).replace(ae, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e)) }
                        u.push(n)
                    }
                return h(u)
            }

            function v(e, t) {
                var n = 0,
                    r = t.length > 0,
                    o = e.length > 0,
                    s = function(i, s, l, c, u) {
                        var p, f, d, h = [],
                            m = 0,
                            y = "0",
                            v = i && [],
                            b = null != u,
                            x = _,
                            w = i || o && k.find.TAG("*", u && s.parentNode || s),
                            C = $ += null == x ? 1 : Math.random() || .1;
                        for (b && (_ = s !== D && s, T = n); null != (p = w[y]); y++) {
                            if (o && p) {
                                for (f = 0; d = e[f++];)
                                    if (d(p, s, l)) { c.push(p); break }
                                b && ($ = C, T = ++n)
                            }
                            r && ((p = !d && p) && m--, i && v.push(p))
                        }
                        if (m += y, r && y !== m) {
                            for (f = 0; d = t[f++];) d(v, h, s, l);
                            if (i) {
                                if (m > 0)
                                    for (; y--;) v[y] || h[y] || (h[y] = G.call(c));
                                h = g(h)
                            }
                            K.apply(c, h), b && !i && h.length > 0 && m + t.length > 1 && a.uniqueSort(c)
                        }
                        return b && ($ = C, _ = x), v
                    };
                return r ? i(s) : s
            }

            function b(e, t, n) { for (var r = 0, i = t.length; i > r; r++) a(e, t[r], n); return n }

            function x(e, t, n, r) {
                var i, o, a, s, l, c = p(e);
                if (!r && 1 === c.length) {
                    if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !O && k.relative[o[1].type]) {
                        if (t = k.find.ID(a.matches[0].replace(xe, we), t)[0], !t) return n;
                        e = e.slice(o.shift().value.length)
                    }
                    for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !k.relative[s = a.type]);)
                        if ((l = k.find[s]) && (r = l(a.matches[0].replace(xe, we), de.test(o[0].type) && t.parentNode || t))) { if (o.splice(i, 1), e = r.length && f(o), !e) return K.apply(n, Q.call(r, 0)), n; break }
                }
                return j(e, c)(r, t, O, n, de.test(e)), n
            }

            function w() {}
            var C, T, k, N, A, j, E, _, S, D, L, O, M, H, P, R, I, F = "sizzle" + -new Date,
                B = e.document,
                q = {},
                $ = 0,
                W = 0,
                U = r(),
                J = r(),
                z = r(),
                V = typeof t,
                X = 1 << 31,
                Y = [],
                G = Y.pop,
                K = Y.push,
                Q = Y.slice,
                Z = Y.indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                ee = "[\\x20\\t\\r\\n\\f]",
                te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ne = te.replace("w", "w#"),
                re = "([*^$|!~]?=)",
                ie = "\\[" + ee + "*(" + te + ")" + ee + "*(?:" + re + ee + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ne + ")|)|)" + ee + "*\\]",
                oe = ":(" + te + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ie.replace(3, 8) + ")*)|.*)\\)|)",
                ae = RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                se = RegExp("^" + ee + "*," + ee + "*"),
                ce = RegExp("^" + ee + "*([\\x20\\t\\r\\n\\f>+~])" + ee + "*"),
                ue = RegExp(oe),
                pe = RegExp("^" + ne + "$"),
                fe = { ID: RegExp("^#(" + te + ")"), CLASS: RegExp("^\\.(" + te + ")"), NAME: RegExp("^\\[name=['\"]?(" + te + ")['\"]?\\]"), TAG: RegExp("^(" + te.replace("w", "w*") + ")"), ATTR: RegExp("^" + ie), PSEUDO: RegExp("^" + oe), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"), needsContext: RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i") },
                de = /[\x20\t\r\n\f]*[+~]/,
                he = /^[^{]+\{\s*\[native code/,
                ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                me = /^(?:input|select|textarea|button)$/i,
                ye = /^h\d$/i,
                ve = /'|\\/g,
                be = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                xe = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                we = function(e, t) { var n = "0x" + t - 65536; return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n) };
            try { Q.call(B.documentElement.childNodes, 0)[0].nodeType } catch (Ce) { Q = function(e) { for (var t, n = []; t = this[e++];) n.push(t); return n } }
            A = a.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, S = a.setDocument = function(e) {
                var r = e ? e.ownerDocument || e : B;
                return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, L = r.documentElement, O = A(r), q.tagNameNoComments = o(function(e) { return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length }), q.attributes = o(function(e) { e.innerHTML = "<select></select>"; var t = typeof e.lastChild.getAttribute("multiple"); return "boolean" !== t && "string" !== t }), q.getByClassName = o(function(e) { return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) }), q.getByName = o(function(e) { e.id = F + 0, e.innerHTML = "<a name='" + F + "'></a><div name='" + F + "'></div>", L.insertBefore(e, L.firstChild); var t = r.getElementsByName && r.getElementsByName(F).length === 2 + r.getElementsByName(F + 0).length; return q.getIdNotName = !r.getElementById(F), L.removeChild(e), t }), k.attrHandle = o(function(e) { return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== V && "#" === e.firstChild.getAttribute("href") }) ? {} : { href: function(e) { return e.getAttribute("href", 2) }, type: function(e) { return e.getAttribute("type") } }, q.getIdNotName ? (k.find.ID = function(e, t) { if (typeof t.getElementById !== V && !O) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, k.filter.ID = function(e) { var t = e.replace(xe, we); return function(e) { return e.getAttribute("id") === t } }) : (k.find.ID = function(e, n) { if (typeof n.getElementById !== V && !O) { var r = n.getElementById(e); return r ? r.id === e || typeof r.getAttributeNode !== V && r.getAttributeNode("id").value === e ? [r] : t : [] } }, k.filter.ID = function(e) { var t = e.replace(xe, we); return function(e) { var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id"); return n && n.value === t } }), k.find.TAG = q.tagNameNoComments ? function(e, n) { return typeof n.getElementsByTagName !== V ? n.getElementsByTagName(e) : t } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) { for (; n = o[i++];) 1 === n.nodeType && r.push(n); return r }
                    return o
                }, k.find.NAME = q.getByName && function(e, n) { return typeof n.getElementsByName !== V ? n.getElementsByName(name) : t }, k.find.CLASS = q.getByClassName && function(e, n) { return typeof n.getElementsByClassName === V || O ? t : n.getElementsByClassName(e) }, H = [], M = [":focus"], (q.qsa = n(r.querySelectorAll)) && (o(function(e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || M.push("\\[" + ee + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || M.push(":checked") }), o(function(e) { e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && M.push("[*^$]=" + ee + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:") })), (q.matchesSelector = n(P = L.matchesSelector || L.mozMatchesSelector || L.webkitMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function(e) { q.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), H.push("!=", oe) }), M = RegExp(M.join("|")), H = RegExp(H.join("|")), R = n(L.contains) || L.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, I = L.compareDocumentPosition ? function(e, t) { var n; return e === t ? (E = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || R(B, e) ? -1 : t === r || R(B, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1 } : function(e, t) {
                    var n, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        l = [e],
                        c = [t];
                    if (e === t) return E = !0, 0;
                    if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0;
                    if (o === a) return s(e, t);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (n = t; n = n.parentNode;) c.unshift(n);
                    for (; l[i] === c[i];) i++;
                    return i ? s(l[i], c[i]) : l[i] === B ? -1 : c[i] === B ? 1 : 0
                }, E = !1, [0, 0].sort(I), q.detectDuplicates = E, D) : D
            }, a.matches = function(e, t) { return a(e, null, null, t) }, a.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== D && S(e), t = t.replace(be, "='$1']"), !(!q.matchesSelector || O || H && H.test(t) || M.test(t))) try { var n = P.call(e, t); if (n || q.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (r) {}
                return a(t, D, null, [e]).length > 0
            }, a.contains = function(e, t) { return (e.ownerDocument || e) !== D && S(e), R(e, t) }, a.attr = function(e, t) { var n; return (e.ownerDocument || e) !== D && S(e), O || (t = t.toLowerCase()), (n = k.attrHandle[t]) ? n(e) : O || q.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null }, a.error = function(e) { throw Error("Syntax error, unrecognized expression: " + e) }, a.uniqueSort = function(e) {
                var t, n = [],
                    r = 1,
                    i = 0;
                if (E = !q.detectDuplicates, e.sort(I), E) { for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r)); for (; i--;) e.splice(n[i], 1) }
                return e
            }, N = a.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += N(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                    for (; t = e[r]; r++) n += N(t);
                return n
            }, k = a.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(xe, we), e[3] = (e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[5] && e[2]; return fe.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ue.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { return "*" === e ? function() { return !0 } : (e = e.replace(xe, we).toLowerCase(), function(t) { return t.nodeName && t.nodeName.toLowerCase() === e }) },
                    CLASS: function(e) { var t = U[e + " "]; return t || (t = RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && U(e, function(e) { return t.test(e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "") }) },
                    ATTR: function(e, t, n) { return function(r) { var i = a.attr(r, e); return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-")) } },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) { return !!e.parentNode } : function(t, n, l) {
                            var c, u, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                v = !l && !s;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (p = t; p = p[g];)
                                            if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                    for (u = m[F] || (m[F] = {}), c = u[e] || [], d = c[0] === $ && c[1], f = c[0] === $ && c[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (f = d = 0) || h.pop();)
                                        if (1 === p.nodeType && ++f && p === t) { u[e] = [$, d, f]; break }
                                } else if (v && (c = (t[F] || (t[F] = {}))[e]) && c[0] === $) f = c[1];
                                else
                                    for (;
                                        (p = ++d && p && p[g] || (f = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++f || (v && ((p[F] || (p[F] = {}))[e] = [$, f]), p !== t)););
                                return f -= i, f === r || 0 === f % r && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) { var n, r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e); return r[F] ? r(t) : r.length > 1 ? (n = [e, e, "", t], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) { for (var i, o = r(e, t), a = o.length; a--;) i = Z.call(e, o[a]), e[i] = !(n[i] = o[a]) }) : function(e) { return r(e, 0, n) }) : r }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = j(e.replace(ae, "$1"));
                        return r[F] ? i(function(e, t, n, i) { for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, i, o) { return t[0] = e, r(t, null, o, n), !n.pop() }
                    }),
                    has: i(function(e) { return function(t) { return a(e, t).length > 0 } }),
                    contains: i(function(e) { return function(t) { return (t.textContent || t.innerText || N(t)).indexOf(e) > -1 } }),
                    lang: i(function(e) {
                        return pe.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = O ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                    root: function(e) { return e === L },
                    focus: function(e) { return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: function(e) { return e.disabled === !1 },
                    disabled: function(e) { return e.disabled === !0 },
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) { return !k.pseudos.empty(e) },
                    header: function(e) { return ye.test(e.nodeName) },
                    input: function(e) { return me.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type) },
                    first: u(function() { return [0] }),
                    last: u(function(e, t) { return [t - 1] }),
                    eq: u(function(e, t, n) { return [0 > n ? n + t : n] }),
                    even: u(function(e, t) { for (var n = 0; t > n; n += 2) e.push(n); return e }),
                    odd: u(function(e, t) { for (var n = 1; t > n; n += 2) e.push(n); return e }),
                    lt: u(function(e, t, n) { for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r); return e }),
                    gt: u(function(e, t, n) { for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r); return e })
                }
            };
            for (C in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) k.pseudos[C] = l(C);
            for (C in { submit: !0, reset: !0 }) k.pseudos[C] = c(C);
            j = a.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = z[e + " "];
                if (!o) {
                    for (t || (t = p(e)), n = t.length; n--;) o = y(t[n]), o[F] ? r.push(o) : i.push(o);
                    o = z(e, v(i, r))
                }
                return o
            }, k.pseudos.nth = k.pseudos.eq, k.filters = w.prototype = k.pseudos, k.setFilters = new w, S(), a.attr = le.attr, le.find = a, le.expr = a.selectors, le.expr[":"] = le.expr.pseudos, le.unique = a.uniqueSort, le.text = a.getText, le.isXMLDoc = a.isXML, le.contains = a.contains
        }(e);
    var qe = /Until$/,
        $e = /^(?:parents|prev(?:Until|All))/,
        We = /^.[^:#\[\.,]*$/,
        Ue = le.expr.match.needsContext,
        Je = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    le.fn.extend({
        find: function(e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return r = this, this.pushStack(le(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (le.contains(r[t], this)) return !0
            }));
            for (n = [], t = 0; i > t; t++) le.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? le.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        },
        has: function(e) {
            var t, n = le(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (le.contains(this, n[t])) return !0
            })
        },
        not: function(e) { return this.pushStack(p(this, e, !1)) },
        filter: function(e) { return this.pushStack(p(this, e, !0)) },
        is: function(e) { return !!e && ("string" == typeof e ? Ue.test(e) ? le(e, this.context).index(this[0]) >= 0 : le.filter(e, this).length > 0 : this.filter(e).length > 0) },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = Ue.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                    if (a ? a.index(n) > -1 : le.find.matchesSelector(n, e)) { o.push(n); break }
                    n = n.parentNode
                }
            return this.pushStack(o.length > 1 ? le.unique(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? le.inArray(this[0], le(e)) : le.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) {
            var n = "string" == typeof e ? le(e, t) : le.makeArray(e && e.nodeType ? [e] : e),
                r = le.merge(this.get(), n);
            return this.pushStack(le.unique(r))
        },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), le.fn.andSelf = le.fn.addBack, le.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return le.dir(e, "parentNode") }, parentsUntil: function(e, t, n) { return le.dir(e, "parentNode", n) }, next: function(e) { return u(e, "nextSibling") }, prev: function(e) { return u(e, "previousSibling") }, nextAll: function(e) { return le.dir(e, "nextSibling") }, prevAll: function(e) { return le.dir(e, "previousSibling") }, nextUntil: function(e, t, n) { return le.dir(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return le.dir(e, "previousSibling", n) }, siblings: function(e) { return le.sibling((e.parentNode || {}).firstChild, e) }, children: function(e) { return le.sibling(e.firstChild) }, contents: function(e) { return le.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : le.merge([], e.childNodes) } }, function(e, t) { le.fn[e] = function(n, r) { var i = le.map(this, t, n); return qe.test(e) || (r = n), r && "string" == typeof r && (i = le.filter(r, i)), i = this.length > 1 && !Je[e] ? le.unique(i) : i, this.length > 1 && $e.test(e) && (i = i.reverse()), this.pushStack(i) } }), le.extend({ filter: function(e, t, n) { return n && (e = ":not(" + e + ")"), 1 === t.length ? le.find.matchesSelector(t[0], e) ? [t[0]] : [] : le.find.matches(e, t) }, dir: function(e, n, r) { for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !le(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n]; return i }, sibling: function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n } });
    var ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ve = / jQuery\d+="(?:null|\d+)"/g,
        Xe = RegExp("<(?:" + ze + ")[\\s/>]", "i"),
        Ye = /^\s+/,
        Ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ke = /<([\w:]+)/,
        Qe = /<tbody/i,
        Ze = /<|&#?\w+;/,
        et = /<(?:script|style|link)/i,
        tt = /^(?:checkbox|radio)$/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rt = /^$|\/(?:java|ecma)script/i,
        it = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        at = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: le.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        st = f(X),
        lt = st.appendChild(X.createElement("div"));
    at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td, le.fn.extend({
        text: function(e) { return le.access(this, function(e) { return e === t ? le.text(this) : this.empty().append((this[0] && this[0].ownerDocument || X).createTextNode(e)) }, null, e, arguments.length) },
        wrapAll: function(e) {
            if (le.isFunction(e)) return this.each(function(t) { le(this).wrapAll(e.call(this, t)) });
            if (this[0]) {
                var t = le(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild; return e }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return le.isFunction(e) ? this.each(function(t) { le(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                var t = le(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) { var t = le.isFunction(e); return this.each(function(n) { le(this).wrapAll(t ? e.call(this, n) : e) }) },
        unwrap: function() { return this.parent().each(function() { le.nodeName(this, "body") || le(this).replaceWith(this.childNodes) }).end() },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() { return this.domManip(arguments, !1, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return this.domManip(arguments, !1, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        remove: function(e, t) { for (var n, r = 0; null != (n = this[r]); r++)(!e || le.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || le.cleanData(b(n)), n.parentNode && (t && le.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n))); return this },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && le.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && le.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return le.clone(this, e, t) }) },
        html: function(e) {
            return le.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ve, "") : t;
                if (!("string" != typeof e || et.test(e) || !le.support.htmlSerialize && Xe.test(e) || !le.support.leadingWhitespace && Ye.test(e) || at[(Ke.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Ge, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (le.cleanData(b(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            var t = le.isFunction(e);
            return t || "string" == typeof e || (e = le(e).not(this).detach()), this.domManip([e], !0, function(e) {
                var t = this.nextSibling,
                    n = this.parentNode;
                n && (le(this).remove(), n.insertBefore(e, t))
            })
        },
        detach: function(e) { return this.remove(e, !0) },
        domManip: function(e, n, r) {
            e = te.apply([], e);
            var i, o, a, s, l, c, u = 0,
                p = this.length,
                f = this,
                m = p - 1,
                y = e[0],
                v = le.isFunction(y);
            if (v || !(1 >= p || "string" != typeof y || le.support.checkClone) && nt.test(y)) return this.each(function(i) {
                var o = f.eq(i);
                v && (e[0] = y.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
            });
            if (p && (c = le.buildFragment(e, this[0].ownerDocument, !1, this), i = c.firstChild, 1 === c.childNodes.length && (c = i), i)) {
                for (n = n && le.nodeName(i, "tr"), s = le.map(b(c, "script"), h), a = s.length; p > u; u++) o = c, u !== m && (o = le.clone(o, !0, !0), a && le.merge(s, b(o, "script"))), r.call(n && le.nodeName(this[u], "table") ? d(this[u], "tbody") : this[u], o, u);
                if (a)
                    for (l = s[s.length - 1].ownerDocument, le.map(s, g), u = 0; a > u; u++) o = s[u], rt.test(o.type || "") && !le._data(o, "globalEval") && le.contains(l, o) && (o.src ? le.ajax({ url: o.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) : le.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
                c = i = null
            }
            return this
        }
    }), le.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { le.fn[e] = function(e) { for (var n, r = 0, i = [], o = le(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), le(o[r])[t](n), ne.apply(i, n.get()); return this.pushStack(i) } }), le.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = le.contains(e.ownerDocument, e);
            if (le.support.html5Clone || le.isXMLDoc(e) || !Xe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (lt.innerHTML = e.outerHTML, lt.removeChild(o = lt.firstChild)), !(le.support.noCloneEvent && le.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e)))
                for (r = b(o), s = b(e), a = 0; null != (i = s[a]); ++a) r[a] && v(i, r[a]);
            if (t)
                if (n)
                    for (s = s || b(e), r = r || b(o), a = 0; null != (i = s[a]); a++) y(i, r[a]);
                else y(e, o);
            return r = b(o, "script"), r.length > 0 && m(r, !l && b(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, l, c, u, p = e.length, d = f(t), h = [], g = 0; p > g; g++)
                if (o = e[g], o || 0 === o)
                    if ("object" === le.type(o)) le.merge(h, o.nodeType ? [o] : o);
                    else if (Ze.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), l = (Ke.exec(o) || ["", ""])[1].toLowerCase(), u = at[l] || at._default, s.innerHTML = u[1] + o.replace(Ge, "<$1></$2>") + u[2], i = u[0]; i--;) s = s.lastChild;
                if (!le.support.leadingWhitespace && Ye.test(o) && h.push(t.createTextNode(Ye.exec(o)[0])), !le.support.tbody)
                    for (o = "table" !== l || Qe.test(o) ? "<table>" !== u[1] || Qe.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) le.nodeName(c = o.childNodes[i], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (le.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = d.lastChild
            } else h.push(t.createTextNode(o));
            for (s && d.removeChild(s), le.support.appendChecked || le.grep(b(h, "input"), x), g = 0; o = h[g++];)
                if ((!r || -1 === le.inArray(o, r)) && (a = le.contains(o.ownerDocument, o), s = b(d.appendChild(o), "script"), a && m(s), n))
                    for (i = 0; o = s[i++];) rt.test(o.type || "") && n.push(o);
            return s = null, d
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = le.expando, l = le.cache, c = le.support.deleteExpando, u = le.event.special; null != (n = e[a]); a++)
                if ((t || le.acceptData(n)) && (i = n[s], o = i && l[i])) {
                    if (o.events)
                        for (r in o.events) u[r] ? le.event.remove(n, r) : le.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i], c ? delete n[s] : typeof n.removeAttribute !== V ? n.removeAttribute(s) : n[s] = null, Z.push(i))
                }
        }
    });
    var ct, ut, pt, ft = /alpha\([^)]*\)/i,
        dt = /opacity\s*=\s*([^)]*)/,
        ht = /^(top|right|bottom|left)$/,
        gt = /^(none|table(?!-c[ea]).+)/,
        mt = /^margin/,
        yt = RegExp("^(" + ce + ")(.*)$", "i"),
        vt = RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"),
        bt = RegExp("^([+-])=(" + ce + ")", "i"),
        xt = { BODY: "block" },
        wt = { position: "absolute", visibility: "hidden", display: "block" },
        Ct = { letterSpacing: 0, fontWeight: 400 },
        Tt = ["Top", "Right", "Bottom", "Left"],
        kt = ["Webkit", "O", "Moz", "ms"];
    le.fn.extend({
        css: function(e, n) {
            return le.access(this, function(e, n, r) {
                var i, o, a = {},
                    s = 0;
                if (le.isArray(n)) { for (o = ut(e), i = n.length; i > s; s++) a[n[s]] = le.css(e, n[s], !1, o); return a }
                return r !== t ? le.style(e, n, r) : le.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() { return T(this, !0) },
        hide: function() { return T(this) },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : C(this)) ? le(this).show(): le(this).hide()
            })
        }
    }), le.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = pt(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": le.support.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = le.camelCase(n),
                    c = e.style;
                if (n = le.cssProps[l] || (le.cssProps[l] = w(c, l)), s = le.cssHooks[n] || le.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : c[n];
                if (a = typeof r, "string" === a && (o = bt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(le.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || le.cssNumber[l] || (r += "px"), le.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (c[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try { c[n] = r } catch (u) {}
            }
        },
        css: function(e, n, r, i) { var o, a, s, l = le.camelCase(n); return n = le.cssProps[l] || (le.cssProps[l] = w(e.style, l)), s = le.cssHooks[n] || le.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = pt(e, n, i)), "normal" === a && n in Ct && (a = Ct[n]), "" === r || r ? (o = parseFloat(a), r === !0 || le.isNumeric(o) ? o || 0 : a) : a },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), e.getComputedStyle ? (ut = function(t) { return e.getComputedStyle(t, null) }, pt = function(e, n, r) {
        var i, o, a, s = r || ut(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            c = e.style;
        return s && ("" !== l || le.contains(e.ownerDocument, e) || (l = le.style(e, n)), vt.test(l) && mt.test(n) && (i = c.width, o = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = s.width, c.width = i, c.minWidth = o, c.maxWidth = a)), l
    }) : X.documentElement.currentStyle && (ut = function(e) { return e.currentStyle }, pt = function(e, n, r) {
        var i, o, a, s = r || ut(e),
            l = s ? s[n] : t,
            c = e.style;
        return null == l && c && c[n] && (l = c[n]), vt.test(l) && !ht.test(n) && (i = c.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = i, a && (o.left = a)), "" === l ? "auto" : l
    }), le.each(["height", "width"], function(e, n) { le.cssHooks[n] = { get: function(e, r, i) { return r ? 0 === e.offsetWidth && gt.test(le.css(e, "display")) ? le.swap(e, wt, function() { return A(e, n, i) }) : A(e, n, i) : t }, set: function(e, t, r) { var i = r && ut(e); return k(e, t, r ? N(e, n, r, le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, i), i) : 0) } } }), le.support.opacity || (le.cssHooks.opacity = {
        get: function(e, t) { return dt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = le.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === le.trim(o.replace(ft, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ft.test(o) ? o.replace(ft, i) : o + " " + i)
        }
    }), le(function() { le.support.reliableMarginRight || (le.cssHooks.marginRight = { get: function(e, n) { return n ? le.swap(e, { display: "inline-block" }, pt, [e, "marginRight"]) : t } }), !le.support.pixelPosition && le.fn.position && le.each(["top", "left"], function(e, n) { le.cssHooks[n] = { get: function(e, r) { return r ? (r = pt(e, n), vt.test(r) ? le(e).position()[n] + "px" : r) : t } } }) }), le.expr && le.expr.filters && (le.expr.filters.hidden = function(e) { return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !le.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || le.css(e, "display")) }, le.expr.filters.visible = function(e) { return !le.expr.filters.hidden(e) }), le.each({ margin: "", padding: "", border: "Width" }, function(e, t) { le.cssHooks[e + t] = { expand: function(n) { for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Tt[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, mt.test(e) || (le.cssHooks[e + t].set = k) });
    var Nt = /%20/g,
        At = /\[\]$/,
        jt = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        _t = /^(?:input|select|textarea|keygen)/i;
    le.fn.extend({ serialize: function() { return le.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = le.prop(this, "elements"); return e ? le.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !le(this).is(":disabled") && _t.test(this.nodeName) && !Et.test(e) && (this.checked || !tt.test(e)) }).map(function(e, t) { var n = le(this).val(); return null == n ? null : le.isArray(n) ? le.map(n, function(e) { return { name: t.name, value: e.replace(jt, "\r\n") } }) : { name: t.name, value: n.replace(jt, "\r\n") } }).get() } }), le.param = function(e, n) {
        var r, i = [],
            o = function(e, t) { t = le.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
        if (n === t && (n = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(e) || e.jquery && !le.isPlainObject(e)) le.each(e, function() { o(this.name, this.value) });
        else
            for (r in e) _(r, e[r], n, o);
        return i.join("&").replace(Nt, "+")
    }, le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { le.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), le.fn.hover = function(e, t) { return this.mouseenter(e).mouseleave(t || e) };
    var St, Dt, Lt = le.now(),
        Ot = /\?/,
        Mt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Rt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        It = /^(?:GET|HEAD)$/,
        Ft = /^\/\//,
        Bt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        qt = le.fn.load,
        $t = {},
        Wt = {},
        Ut = "*/".concat("*");
    try { Dt = Y.href } catch (Jt) { Dt = X.createElement("a"), Dt.href = "", Dt = Dt.href }
    St = Bt.exec(Dt.toLowerCase()) || [], le.fn.load = function(e, n, r) {
        if ("string" != typeof e && qt) return qt.apply(this, arguments);
        var i, o, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), le.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && le.ajax({ url: e, type: a, dataType: "html", data: n }).done(function(e) { o = arguments, s.html(i ? le("<div>").append(le.parseHTML(e)).find(i) : e) }).complete(r && function(e, t) { s.each(r, o || [e.responseText, t, e]) }), this
    }, le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { le.fn[t] = function(e) { return this.on(t, e) } }), le.each(["get", "post"], function(e, n) { le[n] = function(e, r, i, o) { return le.isFunction(r) && (o = o || i, i = r, r = t), le.ajax({ url: e, type: n, dataType: o, data: r, success: i }) } }), le.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: Dt, type: "GET", isLocal: Rt.test(St[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Ut, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": e.String, "text html": !0, "text json": le.parseJSON, "text xml": le.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? L(L(e, le.ajaxSettings), t) : L(le.ajaxSettings, e) },
        ajaxPrefilter: S($t),
        ajaxTransport: S(Wt),
        ajax: function(e, n) {
            function r(e, n, r, i) {
                var o, p, v, b, w, T = n;
                2 !== x && (x = 2, l && clearTimeout(l), u = t, s = i || "", C.readyState = e > 0 ? 4 : 0, r && (b = O(f, C, r)), e >= 200 && 300 > e || 304 === e ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (le.lastModified[a] = w), w = C.getResponseHeader("etag"), w && (le.etag[a] = w)), 204 === e ? (o = !0, T = "nocontent") : 304 === e ? (o = !0, T = "notmodified") : (o = M(f, b), T = o.state, p = o.data, v = o.error, o = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || T) + "", o ? g.resolveWith(d, [p, T, C]) : g.rejectWith(d, [C, T, v]), C.statusCode(y), y = t, c && h.trigger(o ? "ajaxSuccess" : "ajaxError", [C, f, o ? p : v]), m.fireWith(d, [C, T]), c && (h.trigger("ajaxComplete", [C, f]), --le.active || le.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, l, c, u, p, f = le.ajaxSetup({}, n),
                d = f.context || f,
                h = f.context && (d.nodeType || d.jquery) ? le(d) : le.event,
                g = le.Deferred(),
                m = le.Callbacks("once memory"),
                y = f.statusCode || {},
                v = {},
                b = {},
                x = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!p)
                                for (p = {}; t = Pt.exec(s);) p[t[1].toLowerCase()] = t[2];
                            t = p[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() { return 2 === x ? s : null },
                    setRequestHeader: function(e, t) { var n = e.toLowerCase(); return x || (e = b[n] = b[n] || e, v[e] = t), this },
                    overrideMimeType: function(e) { return x || (f.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) y[t] = [y[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function(e) { var t = e || w; return u && u.abort(t), r(0, t), this }
                };
            if (g.promise(C).complete = m.add, C.success = C.done, C.error = C.fail, f.url = ((e || f.url || Dt) + "").replace(Mt, "").replace(Ft, St[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = le.trim(f.dataType || "*").toLowerCase().match(ue) || [""], null == f.crossDomain && (i = Bt.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === St[1] && i[2] === St[2] && (i[3] || ("http:" === i[1] ? 80 : 443)) == (St[3] || ("http:" === St[1] ? 80 : 443)))), f.data && f.processData && "string" != typeof f.data && (f.data = le.param(f.data, f.traditional)), D($t, f, n, C), 2 === x) return C;
            c = f.global, c && 0 === le.active++ && le.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !It.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (Ot.test(a) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Ht.test(a) ? a.replace(Ht, "$1_=" + Lt++) : a + (Ot.test(a) ? "&" : "?") + "_=" + Lt++)), f.ifModified && (le.lastModified[a] && C.setRequestHeader("If-Modified-Since", le.lastModified[a]), le.etag[a] && C.setRequestHeader("If-None-Match", le.etag[a])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : f.accepts["*"]);
            for (o in f.headers) C.setRequestHeader(o, f.headers[o]);
            if (f.beforeSend && (f.beforeSend.call(d, C, f) === !1 || 2 === x)) return C.abort();
            w = "abort";
            for (o in { success: 1, error: 1, complete: 1 }) C[o](f[o]);
            if (u = D(Wt, f, n, C)) {
                C.readyState = 1, c && h.trigger("ajaxSend", [C, f]), f.async && f.timeout > 0 && (l = setTimeout(function() { C.abort("timeout") }, f.timeout));
                try { x = 1, u.send(v, r) } catch (T) {
                    if (!(2 > x)) throw T;
                    r(-1, T)
                }
            } else r(-1, "No Transport");
            return C
        },
        getScript: function(e, n) { return le.get(e, t, n, "script") },
        getJSON: function(e, t, n) { return le.get(e, t, n, "json") }
    }), le.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(e) { return le.globalEval(e), e } } }), le.ajaxPrefilter("script", function(e) { e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), le.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = X.head || le("head")[0] || X.documentElement;
            return {
                send: function(t, i) {
                    n = X.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() { n && n.onload(t, !0) }
            }
        }
    });
    var zt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    le.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = zt.pop() || le.expando + "_" + Lt++; return this[e] = !0, e } }), le.ajaxPrefilter("json jsonp", function(n, r, i) { var o, a, s, l = n.jsonp !== !1 && (Vt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(n.data) && "data"); return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = le.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Vt, "$1" + o) : n.jsonp !== !1 && (n.url += (Ot.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() { return s || le.error(o + " was not called"), s[0] }, n.dataTypes[0] = "json", a = e[o], e[o] = function() { s = arguments }, i.always(function() { e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, zt.push(o)), s && le.isFunction(a) && a(s[0]), s = a = t }), "script") : t });
    var Xt, Yt, Gt = 0,
        Kt = e.ActiveXObject && function() { var e; for (e in Xt) Xt[e](t, !0) };
    le.ajaxSettings.xhr = e.ActiveXObject ? function() { return !this.isLocal && H() || P() } : H, Yt = le.ajaxSettings.xhr(), le.support.cors = !!Yt && "withCredentials" in Yt, Yt = le.support.ajax = !!Yt, Yt && le.ajaxTransport(function(n) {
        if (!n.crossDomain || le.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try { for (s in i) l.setRequestHeader(s, i[s]) } catch (c) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, c, u, p;
                        try {
                            if (r && (i || 4 === l.readyState))
                                if (r = t, a && (l.onreadystatechange = le.noop, Kt && delete Xt[a]), i) 4 !== l.readyState && l.abort();
                                else {
                                    p = {}, s = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                    try { u = l.statusText } catch (f) { u = "" }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                        } catch (d) { i || o(-1, d) }
                        p && o(s, u, p, c)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Gt, Kt && (Xt || (Xt = {}, le(e).unload(Kt)), Xt[a] = r), l.onreadystatechange = r) : r()
                },
                abort: function() { r && r(t, !0) }
            }
        }
    });
    var Qt, Zt, en = /^(?:toggle|show|hide)$/,
        tn = RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"),
        nn = /queueHooks$/,
        rn = [q],
        on = {
            "*": [function(e, t) {
                var n, r, i = this.createTween(e, t),
                    o = tn.exec(t),
                    a = i.cur(),
                    s = +a || 0,
                    l = 1,
                    c = 20;
                if (o) {
                    if (n = +o[2], r = o[3] || (le.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                        s = le.css(i.elem, e, !0) || n || 1;
                        do l = l || ".5", s /= l, le.style(i.elem, e, s + r); while (l !== (l = i.cur() / a) && 1 !== l && --c)
                    }
                    i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                }
                return i
            }]
        };
    le.Animation = le.extend(F, { tweener: function(e, t) { le.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" "); for (var n, r = 0, i = e.length; i > r; r++) n = e[r], on[n] = on[n] || [], on[n].unshift(t) }, prefilter: function(e, t) { t ? rn.unshift(e) : rn.push(e) } }), le.Tween = $, $.prototype = { constructor: $, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (le.cssNumber[n] ? "" : "px") }, cur: function() { var e = $.propHooks[this.prop]; return e && e.get ? e.get(this) : $.propHooks._default.get(this) }, run: function(e) { var t, n = $.propHooks[this.prop]; return this.pos = t = this.options.duration ? le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this } }, $.prototype.init.prototype = $.prototype, $.propHooks = { _default: { get: function(e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = le.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function(e) { le.fx.step[e.prop] ? le.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[le.cssProps[e.prop]] || le.cssHooks[e.prop]) ? le.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, $.propHooks.scrollTop = $.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, le.each(["toggle", "show", "hide"], function(e, t) {
        var n = le.fn[t];
        le.fn[t] = function(e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i) }
    }), le.fn.extend({
        fadeTo: function(e, t, n, r) { return this.filter(C).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
        animate: function(e, t, n, r) {
            var i = le.isEmptyObject(e),
                o = le.speed(t, n, r),
                a = function() {
                    var t = F(this, le.extend({}, e), o);
                    a.finish = function() { t.stop(!0) }, (i || le._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = le.timers,
                    a = le._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && nn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && le.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = le._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = le.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, le.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), le.each({ slideDown: W("show"), slideUp: W("hide"), slideToggle: W("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { le.fn[e] = function(e, n, r) { return this.animate(t, e, n, r) } }), le.speed = function(e, t, n) { var r = e && "object" == typeof e ? le.extend({}, e) : { complete: n || !n && t || le.isFunction(e) && e, duration: e, easing: n && t || t && !le.isFunction(t) && t }; return r.duration = le.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in le.fx.speeds ? le.fx.speeds[r.duration] : le.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() { le.isFunction(r.old) && r.old.call(this), r.queue && le.dequeue(this, r.queue) }, r }, le.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 } }, le.timers = [], le.fx = $.prototype.init, le.fx.tick = function() {
        var e, n = le.timers,
            r = 0;
        for (Qt = le.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || le.fx.stop(), Qt = t
    }, le.fx.timer = function(e) { e() && le.timers.push(e) && le.fx.start() }, le.fx.interval = 13, le.fx.start = function() { Zt || (Zt = setInterval(le.fx.tick, le.fx.interval)) }, le.fx.stop = function() { clearInterval(Zt), Zt = null }, le.fx.speeds = { slow: 600, fast: 200, _default: 400 }, le.fx.step = {}, le.expr && le.expr.filters && (le.expr.filters.animated = function(e) { return le.grep(le.timers, function(t) { return e === t.elem }).length }), le.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) { le.offset.setOffset(this, e, t) });
        var n, r, i = { top: 0, left: 0 },
            o = this[0],
            a = o && o.ownerDocument;
        return a ? (n = a.documentElement, le.contains(n, o) ? (typeof o.getBoundingClientRect !== V && (i = o.getBoundingClientRect()), r = U(a), { top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : i) : void 0
    }, le.offset = {
        setOffset: function(e, t, n) {
            var r = le.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = le(e),
                s = a.offset(),
                l = le.css(e, "top"),
                c = le.css(e, "left"),
                u = ("absolute" === r || "fixed" === r) && le.inArray("auto", [l, c]) > -1,
                p = {},
                f = {};
            u ? (f = a.position(), i = f.top, o = f.left) : (i = parseFloat(l) || 0, o = parseFloat(c) || 0), le.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + i), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : a.css(p)
        }
    }, le.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = { top: 0, left: 0 },
                    r = this[0];
                return "fixed" === le.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), le.nodeName(e[0], "html") || (n = e.offset()), n.top += le.css(e[0], "borderTopWidth", !0), n.left += le.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - le.css(r, "marginTop", !0), left: t.left - n.left - le.css(r, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var e = this.offsetParent || X.documentElement; e && !le.nodeName(e, "html") && "static" === le.css(e, "position");) e = e.offsetParent; return e || X.documentElement }) }
    }), le.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, n) {
        var r = /Y/.test(n);
        le.fn[e] = function(i) { return le.access(this, function(e, i, o) { var a = U(e); return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? le(a).scrollLeft() : o, r ? o : le(a).scrollTop()) : e[i] = o, t) }, e, i, arguments.length, null) }
    }), le.each({ Height: "height", Width: "width" }, function(e, n) {
        le.each({ padding: "inner" + e, content: n, "": "outer" + e }, function(r, i) {
            le.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return le.access(this, function(n, r, i) { var o; return le.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? le.css(n, r, s) : le.style(n, r, i, s) }, n, a ? i : t, a, null)
            }
        })
    }), e.jQuery = e.$ = le, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() { return le })
}(window),
function() {
    function e(t, r) {
        function o(e) {
            if (o[e] !== m) return o[e];
            var t;
            if ("bug-string-char-index" == e) t = "a" != "a" [0];
            else if ("json" == e) t = o("json-stringify") && o("json-parse");
            else {
                var n;
                if ("json-stringify" == e) {
                    t = r.stringify;
                    var i = "function" == typeof t && v;
                    if (i) {
                        (n = function() { return 1 }).toJSON = n;
                        try { i = "0" === t(0) && "0" === t(new a) && '""' == t(new s) && t(y) === m && t(m) === m && t() === m && "1" === t(n) && "[1]" == t([n]) && "[null]" == t([m]) && "null" == t(null) && "[null,null,null]" == t([m, y, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == t({ a: [n, !0, !1, null, "\0\b\n\f\r\t"] }) && "1" === t(null, n) && "[\n 1,\n 2\n]" == t([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == t(new c((-864e13))) && '"+275760-09-13T00:00:00.000Z"' == t(new c(864e13)) && '"-000001-01-01T00:00:00.000Z"' == t(new c((-621987552e5))) && '"1969-12-31T23:59:59.999Z"' == t(new c((-1))) } catch (l) { i = !1 }
                    }
                    t = i
                }
                if ("json-parse" == e) {
                    if (t = r.parse, "function" == typeof t) try {
                        if (0 === t("0") && !t(!1)) {
                            n = t('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var u = 5 == n.a.length && 1 === n.a[0];
                            if (u) {
                                try { u = !t('"\t"') } catch (p) {}
                                if (u) try {
                                    u = 1 !== t("01")
                                } catch (f) {}
                                if (u) try { u = 1 !== t("1.") } catch (d) {}
                            }
                        }
                    } catch (h) { u = !1 }
                    t = u
                }
            }
            return o[e] = !!t
        }
        t || (t = i.Object()), r || (r = i.Object());
        var a = t.Number || i.Number,
            s = t.String || i.String,
            l = t.Object || i.Object,
            c = t.Date || i.Date,
            u = t.SyntaxError || i.SyntaxError,
            p = t.TypeError || i.TypeError,
            f = t.Math || i.Math,
            d = t.JSON || i.JSON;
        "object" == typeof d && d && (r.stringify = d.stringify, r.parse = d.parse);
        var h, g, m, l = l.prototype,
            y = l.toString,
            v = new c((-0xc782b5b800cec));
        try { v = -109252 == v.getUTCFullYear() && 0 === v.getUTCMonth() && 1 === v.getUTCDate() && 10 == v.getUTCHours() && 37 == v.getUTCMinutes() && 6 == v.getUTCSeconds() && 708 == v.getUTCMilliseconds() } catch (b) {}
        if (!o("json")) {
            var x = o("bug-string-char-index");
            if (!v) var w = f.floor,
                C = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                T = function(e, t) { return C[t] + 365 * (e - 1970) + w((e - 1969 + (t = +(1 < t))) / 4) - w((e - 1901 + t) / 100) + w((e - 1601 + t) / 400) };
            if ((h = l.hasOwnProperty) || (h = function(e) { var t, n = {}; return (n.__proto__ = null, n.__proto__ = { toString: 1 }, n).toString != y ? h = function(e) { var t = this.__proto__; return e = e in (this.__proto__ = null, this), this.__proto__ = t, e } : (t = n.constructor, h = function(e) { var n = (this.constructor || t).prototype; return e in this && !(e in n && this[e] === n[e]) }), n = null, h.call(this, e) }), g = function(e, t) {
                    var r, i, o, a = 0;
                    (r = function() { this.valueOf = 0 }).prototype.valueOf = 0, i = new r;
                    for (o in i) h.call(i, o) && a++;
                    return r = i = null, a ? g = 2 == a ? function(e, t) {
                        var n, r = {},
                            i = "[object Function]" == y.call(e);
                        for (n in e) i && "prototype" == n || h.call(r, n) || !(r[n] = 1) || !h.call(e, n) || t(n)
                    } : function(e, t) {
                        var n, r, i = "[object Function]" == y.call(e);
                        for (n in e) i && "prototype" == n || !h.call(e, n) || (r = "constructor" === n) || t(n);
                        (r || h.call(e, n = "constructor")) && t(n)
                    } : (i = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), g = function(e, t) {
                        var r, o = "[object Function]" == y.call(e),
                            a = !o && "function" != typeof e.constructor && n[typeof e.hasOwnProperty] && e.hasOwnProperty || h;
                        for (r in e) o && "prototype" == r || !a.call(e, r) || t(r);
                        for (o = i.length; r = i[--o]; a.call(e, r) && t(r));
                    }), g(e, t)
                }, !o("json-stringify")) {
                var k = { 92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t" },
                    N = function(e, t) { return ("000000" + (t || 0)).slice(-e) },
                    A = function(e) {
                        for (var t = '"', n = 0, r = e.length, i = !x || 10 < r, o = i && (x ? e.split("") : e); n < r; n++) {
                            var a = e.charCodeAt(n);
                            switch (a) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    t += k[a];
                                    break;
                                default:
                                    if (32 > a) { t += "\\u00" + N(2, a.toString(16)); break }
                                    t += i ? o[n] : e.charAt(n)
                            }
                        }
                        return t + '"'
                    },
                    j = function(e, t, n, r, i, o, a) {
                        var s, l, c, u, f, d, v, b, x;
                        try { s = t[e] } catch (C) {}
                        if ("object" == typeof s && s)
                            if (l = y.call(s), "[object Date]" != l || h.call(s, "toJSON")) "function" == typeof s.toJSON && ("[object Number]" != l && "[object String]" != l && "[object Array]" != l || h.call(s, "toJSON")) && (s = s.toJSON(e));
                            else if (s > -1 / 0 && s < 1 / 0) {
                            if (T) {
                                for (u = w(s / 864e5), l = w(u / 365.2425) + 1970 - 1; T(l + 1, 0) <= u; l++);
                                for (c = w((u - T(l, 0)) / 30.42); T(l, c + 1) <= u; c++);
                                u = 1 + u - T(l, c), f = (s % 864e5 + 864e5) % 864e5, d = w(f / 36e5) % 24, v = w(f / 6e4) % 60, b = w(f / 1e3) % 60, f %= 1e3
                            } else l = s.getUTCFullYear(), c = s.getUTCMonth(), u = s.getUTCDate(), d = s.getUTCHours(), v = s.getUTCMinutes(), b = s.getUTCSeconds(), f = s.getUTCMilliseconds();
                            s = (0 >= l || 1e4 <= l ? (0 > l ? "-" : "+") + N(6, 0 > l ? -l : l) : N(4, l)) + "-" + N(2, c + 1) + "-" + N(2, u) + "T" + N(2, d) + ":" + N(2, v) + ":" + N(2, b) + "." + N(3, f) + "Z"
                        } else s = null;
                        if (n && (s = n.call(t, e, s)), null === s) return "null";
                        if (l = y.call(s), "[object Boolean]" == l) return "" + s;
                        if ("[object Number]" == l) return s > -1 / 0 && s < 1 / 0 ? "" + s : "null";
                        if ("[object String]" == l) return A("" + s);
                        if ("object" == typeof s) {
                            for (e = a.length; e--;)
                                if (a[e] === s) throw p();
                            if (a.push(s), x = [], t = o, o += i, "[object Array]" == l) {
                                for (c = 0, e = s.length; c < e; c++) l = j(c, s, n, r, i, o, a), x.push(l === m ? "null" : l);
                                e = x.length ? i ? "[\n" + o + x.join(",\n" + o) + "\n" + t + "]" : "[" + x.join(",") + "]" : "[]"
                            } else g(r || s, function(e) {
                                var t = j(e, s, n, r, i, o, a);
                                t !== m && x.push(A(e) + ":" + (i ? " " : "") + t)
                            }), e = x.length ? i ? "{\n" + o + x.join(",\n" + o) + "\n" + t + "}" : "{" + x.join(",") + "}" : "{}";
                            return a.pop(), e
                        }
                    };
                r.stringify = function(e, t, r) {
                    var i, o, a, s;
                    if (n[typeof t] && t)
                        if ("[object Function]" == (s = y.call(t))) o = t;
                        else if ("[object Array]" == s) { a = {}; for (var l, c = 0, u = t.length; c < u; l = t[c++], s = y.call(l), ("[object String]" == s || "[object Number]" == s) && (a[l] = 1)); }
                    if (r)
                        if ("[object Number]" == (s = y.call(r))) {
                            if (0 < (r -= r % 1))
                                for (i = "", 10 < r && (r = 10); i.length < r; i += " ");
                        } else "[object String]" == s && (i = 10 >= r.length ? r : r.slice(0, 10));
                    return j("", (l = {}, l[""] = e, l), o, a, i, "", [])
                }
            }
            if (!o("json-parse")) {
                var E, _, S = s.fromCharCode,
                    D = { 92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r" },
                    L = function() { throw E = _ = null, u() },
                    O = function() {
                        for (var e, t, n, r, i, o = _, a = o.length; E < a;) switch (i = o.charCodeAt(E)) {
                            case 9:
                            case 10:
                            case 13:
                            case 32:
                                E++;
                                break;
                            case 123:
                            case 125:
                            case 91:
                            case 93:
                            case 58:
                            case 44:
                                return e = x ? o.charAt(E) : o[E], E++, e;
                            case 34:
                                for (e = "@", E++; E < a;)
                                    if (i = o.charCodeAt(E), 32 > i) L();
                                    else if (92 == i) switch (i = o.charCodeAt(++E)) {
                                    case 92:
                                    case 34:
                                    case 47:
                                    case 98:
                                    case 116:
                                    case 110:
                                    case 102:
                                    case 114:
                                        e += D[i], E++;
                                        break;
                                    case 117:
                                        for (t = ++E, n = E + 4; E < n; E++) i = o.charCodeAt(E), 48 <= i && 57 >= i || 97 <= i && 102 >= i || 65 <= i && 70 >= i || L();
                                        e += S("0x" + o.slice(t, E));
                                        break;
                                    default:
                                        L()
                                } else {
                                    if (34 == i) break;
                                    for (i = o.charCodeAt(E), t = E; 32 <= i && 92 != i && 34 != i;) i = o.charCodeAt(++E);
                                    e += o.slice(t, E)
                                }
                                if (34 == o.charCodeAt(E)) return E++, e;
                                L();
                            default:
                                if (t = E, 45 == i && (r = !0, i = o.charCodeAt(++E)), 48 <= i && 57 >= i) {
                                    for (48 == i && (i = o.charCodeAt(E + 1), 48 <= i && 57 >= i) && L(); E < a && (i = o.charCodeAt(E), 48 <= i && 57 >= i); E++);
                                    if (46 == o.charCodeAt(E)) {
                                        for (n = ++E; n < a && (i = o.charCodeAt(n), 48 <= i && 57 >= i); n++);
                                        n == E && L(), E = n
                                    }
                                    if (i = o.charCodeAt(E), 101 == i || 69 == i) {
                                        for (i = o.charCodeAt(++E), 43 != i && 45 != i || E++, n = E; n < a && (i = o.charCodeAt(n), 48 <= i && 57 >= i); n++);
                                        n == E && L(), E = n
                                    }
                                    return +o.slice(t, E)
                                }
                                if (r && L(), "true" == o.slice(E, E + 4)) return E += 4, !0;
                                if ("false" == o.slice(E, E + 5)) return E += 5, !1;
                                if ("null" == o.slice(E, E + 4)) return E += 4, null;
                                L()
                        }
                        return "$"
                    },
                    M = function(e) {
                        var t, n;
                        if ("$" == e && L(), "string" == typeof e) {
                            if ("@" == (x ? e.charAt(0) : e[0])) return e.slice(1);
                            if ("[" == e) { for (t = []; e = O(), "]" != e; n || (n = !0)) n && ("," == e ? (e = O(), "]" == e && L()) : L()), "," == e && L(), t.push(M(e)); return t }
                            if ("{" == e) { for (t = {}; e = O(), "}" != e; n || (n = !0)) n && ("," == e ? (e = O(), "}" == e && L()) : L()), "," != e && "string" == typeof e && "@" == (x ? e.charAt(0) : e[0]) && ":" == O() || L(), t[e.slice(1)] = M(O()); return t }
                            L()
                        }
                        return e
                    },
                    H = function(e, t, n) { n = P(e, t, n), n === m ? delete e[t] : e[t] = n },
                    P = function(e, t, n) {
                        var r, i = e[t];
                        if ("object" == typeof i && i)
                            if ("[object Array]" == y.call(i))
                                for (r = i.length; r--;) H(i, r, n);
                            else g(i, function(e) { H(i, e, n) });
                        return n.call(e, t, i)
                    };
                r.parse = function(e, t) { var n, r; return E = 0, _ = "" + e, n = M(O()), "$" != O() && L(), E = _ = null, t && "[object Function]" == y.call(t) ? P((r = {}, r[""] = n, r), "", t) : n }
            }
        }
        return r.runInContext = e, r
    }
    var t = "function" == typeof define && define.amd,
        n = { "function": !0, object: !0 },
        r = n[typeof exports] && exports && !exports.nodeType && exports,
        i = n[typeof window] && window || this,
        o = r && n[typeof module] && module && !module.nodeType && "object" == typeof global && global;
    if (!o || o.global !== o && o.window !== o && o.self !== o || (i = o), r && !t) e(i, r);
    else {
        var a = i.JSON,
            s = i.JSON3,
            l = !1,
            c = e(i, i.JSON3 = { noConflict: function() { return l || (l = !0, i.JSON = a, i.JSON3 = s, a = s = null), c } });
        i.JSON = { parse: c.parse, stringify: c.stringify }
    }
    t && define(function() { return c })
}.call(this),
    /*!
     * jQuery Cookie Plugin v1.4.1
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2013 Klaus Hartl
     * Released under the MIT license
     */
    function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery) }(function(e) {
        function t(e) { return s.raw ? e : encodeURIComponent(e) }

        function n(e) { return s.raw ? e : decodeURIComponent(e) }

        function r(e) { return t(s.json ? JSON.stringify(e) : String(e)) }

        function i(e) { 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return e = decodeURIComponent(e.replace(a, " ")), s.json ? JSON.parse(e) : e } catch (t) {} }

        function o(t, n) { var r = s.raw ? t : i(t); return e.isFunction(n) ? n(r) : r }
        var a = /\+/g,
            s = e.cookie = function(i, a, l) {
                if (void 0 !== a && !e.isFunction(a)) {
                    if (l = e.extend({}, s.defaults, l), "number" == typeof l.expires) {
                        var c = l.expires,
                            u = l.expires = new Date;
                        u.setTime(+u + 864e5 * c)
                    }
                    return document.cookie = [t(i), "=", r(a), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                }
                for (var p = i ? void 0 : {}, f = document.cookie ? document.cookie.split("; ") : [], d = 0, h = f.length; d < h; d++) {
                    var g = f[d].split("="),
                        m = n(g.shift()),
                        y = g.join("=");
                    if (i && i === m) { p = o(y, a); break }
                    i || void 0 === (y = o(y)) || (p[m] = y)
                }
                return p
            };
        s.defaults = {}, e.removeCookie = function(t, n) { return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, n, { expires: -1 })), !e.cookie(t)) }
    }),
    function() {
        var e = function() {
                var t = [].slice.call(arguments);
                return t.push(e.options), t[0].match(/^\s*#([\w:\-\.]+)\s*$/gim) && t[0].replace(/^\s*#([\w:\-\.]+)\s*$/gim, function(e, n) {
                    var r = document,
                        i = r && r.getElementById(n);
                    t[0] = i ? i.value || i.innerHTML : e
                }), e.documentHTML && (e.compile.call(e, e.documentHTML), e.documentHTML = ""), 1 == arguments.length ? e.compile.apply(e, t) : arguments.length >= 2 ? e.to_html.apply(e, t) : void 0
            },
            t = { escapehash: { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#x27;", "/": "&#x2f;" }, escapereplace: function(e) { return t.escapehash[e] }, escaping: function(e) { return "string" != typeof e ? e : e.replace(/[&<>"']/gim, this.escapereplace) }, detection: function(e) { return "undefined" == typeof e ? "" : e } },
            n = function(e) { if ("undefined" != typeof console) { if (console.warn) return void console.warn(e); if (console.log) return void console.log(e) } throw e },
            r = function(e, t) {
                if (e = e !== Object(e) ? {} : e, e.__proto__) return e.__proto__ = t, e;
                var n = function() {},
                    r = Object.create ? Object.create(t) : new(n.prototype = t, n);
                for (var i in e) e.hasOwnProperty(i) && (r[i] = e[i]);
                return r
            },
            i = function(e) {
                var t, n, r, i = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
                    o = /,/,
                    a = /^\s*(_?)(\S+?)\1\s*$/,
                    s = /^function[^{]+{([\s\S]*)}/m,
                    l = [];
                "function" == typeof e ? e.length && (t = e.toString()) : "string" == typeof e && (t = e), t = t.trim(), r = t.match(i), n = t.match(s)[1].trim();
                for (var c = 0; c < r[1].split(o).length; c++) {
                    var u = r[1].split(o)[c];
                    u.replace(a, function(e, t, n) { l.push(n) })
                }
                return [l, n]
            };
        e.__cache = {}, e.version = "0.6.14", e.settings = {}, e.documentHTML = "", e.tags = { operationOpen: "{@", operationClose: "}", interpolateOpen: "\\${", interpolateClose: "}", noneencodeOpen: "\\$\\${", noneencodeClose: "}", commentOpen: "\\{#", commentClose: "\\}" }, e.options = { cache: !0, strip: !0, errorhandling: !0, detection: !0, _method: r({ __escapehtml: t, __throw: n, __juicer: e }, {}) }, e.tagInit = function() {
            var t = e.tags.operationOpen + "each\\s*([^}]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?" + e.tags.operationClose,
                n = e.tags.operationOpen + "\\/each" + e.tags.operationClose,
                r = e.tags.operationOpen + "if\\s*([^}]*?)" + e.tags.operationClose,
                i = e.tags.operationOpen + "\\/if" + e.tags.operationClose,
                o = e.tags.operationOpen + "else" + e.tags.operationClose,
                a = e.tags.operationOpen + "else if\\s*([^}]*?)" + e.tags.operationClose,
                s = e.tags.interpolateOpen + "([\\s\\S]+?)" + e.tags.interpolateClose,
                l = e.tags.noneencodeOpen + "([\\s\\S]+?)" + e.tags.noneencodeClose,
                c = e.tags.commentOpen + "[^}]*?" + e.tags.commentClose,
                u = e.tags.operationOpen + "each\\s*(\\w*?)\\s*in\\s*range\\(([^}]+?)\\s*,\\s*([^}]+?)\\)" + e.tags.operationClose,
                p = e.tags.operationOpen + "include\\s*([^}]*?)\\s*,\\s*([^}]*?)" + e.tags.operationClose,
                f = e.tags.operationOpen + "helper\\s*([^}]*?)\\s*" + e.tags.operationClose,
                d = "([\\s\\S]*?)",
                h = e.tags.operationOpen + "\\/helper" + e.tags.operationClose;
            e.settings.forstart = new RegExp(t, "igm"), e.settings.forend = new RegExp(n, "igm"), e.settings.ifstart = new RegExp(r, "igm"), e.settings.ifend = new RegExp(i, "igm"), e.settings.elsestart = new RegExp(o, "igm"), e.settings.elseifstart = new RegExp(a, "igm"), e.settings.interpolate = new RegExp(s, "igm"), e.settings.noneencode = new RegExp(l, "igm"), e.settings.inlinecomment = new RegExp(c, "igm"), e.settings.rangestart = new RegExp(u, "igm"), e.settings.include = new RegExp(p, "igm"), e.settings.helperRegister = new RegExp(f + d + h, "igm")
        }, e.tagInit(), e.set = function(e, t) {
            var n = this,
                r = function(e) { return e.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/gim, function(e) { return "\\" + e }) },
                i = function(e, t) { var i = e.match(/^tag::(.*)$/i); return i ? (n.tags[i[1]] = r(t), void n.tagInit()) : void(n.options[e] = t) };
            if (2 === arguments.length) return void i(e, t);
            if (e === Object(e))
                for (var o in e) e.hasOwnProperty(o) && i(o, e[o])
        }, e.register = function(e, t) { var n = this.options._method; return !n.hasOwnProperty(e) && (n[e] = t) }, e.unregister = function(e) { var t = this.options._method; if (t.hasOwnProperty(e)) return delete t[e] }, e.template = function(t) {
            var n = this;
            this.options = t, this.__interpolate = function(e, t, n) {
                var r, i = e.split("|"),
                    o = i[0] || "";
                return i.length > 1 && (e = i.shift(), r = i.shift().split(","), o = "_method." + r.shift() + ".call({}, " + [e].concat(r) + ")"), "<%= " + (t ? "_method.__escapehtml.escaping" : "") + "(" + (n && n.detection === !1 ? "" : "_method.__escapehtml.detection") + "(" + o + ")) %>"
            }, this.__removeShell = function(t, r) {
                var o = 0;
                return t = t.replace(e.settings.helperRegister, function(t, n, r) {
                    var o = i(r),
                        a = o[0],
                        s = o[1],
                        l = new Function(a.join(","), s);
                    return e.register(n, l), t
                }).replace(e.settings.forstart, function(e, t, n, r) {
                    var n = n || "value",
                        r = r && r.substr(1),
                        i = "i" + o++;
                    return "<% ~function() {for(var " + i + " in " + t + ") {if(" + t + ".hasOwnProperty(" + i + ")) {var " + n + "=" + t + "[" + i + "];" + (r ? "var " + r + "=" + i + ";" : "") + " %>"
                }).replace(e.settings.forend, "<% }}}(); %>").replace(e.settings.ifstart, function(e, t) { return "<% if(" + t + ") { %>" }).replace(e.settings.ifend, "<% } %>").replace(e.settings.elsestart, function(e) { return "<% } else { %>" }).replace(e.settings.elseifstart, function(e, t) { return "<% } else if(" + t + ") { %>" }).replace(e.settings.noneencode, function(e, t) { return n.__interpolate(t, !1, r) }).replace(e.settings.interpolate, function(e, t) { return n.__interpolate(t, !0, r) }).replace(e.settings.inlinecomment, "").replace(e.settings.rangestart, function(e, t, n, r) { var i = "j" + o++; return "<% ~function() {for(var " + i + "=" + n + ";" + i + "<" + r + ";" + i + "++) {{var " + t + "=" + i + "; %>" }).replace(e.settings.include, function(e, t, n) { return t.match(/^file\:\/\//gim) ? e : "<%= _method.__juicer(" + t + ", " + n + "); %>" }), r && r.errorhandling === !1 || (t = "<% try { %>" + t, t += '<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>'), t
            }, this.__toNative = function(e, t) { return this.__convert(e, !t || t.strip) }, this.__lexicalAnalyze = function(t) {
                var n = [],
                    r = [],
                    i = "",
                    o = ["if", "each", "_", "_method", "console", "break", "case", "catch", "continue", "debugger", "default", "delete", "do", "finally", "for", "function", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "null", "typeof", "class", "enum", "export", "extends", "import", "super", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "const", "arguments", "true", "false", "undefined", "NaN"],
                    a = function(e, t) {
                        if (Array.prototype.indexOf && e.indexOf === Array.prototype.indexOf) return e.indexOf(t);
                        for (var n = 0; n < e.length; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    s = function(t, i) {
                        if (i = i.match(/\w+/gim)[0], a(n, i) === -1 && a(o, i) === -1 && a(r, i) === -1) {
                            if ("undefined" != typeof window && "function" == typeof window[i] && window[i].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) return t;
                            if ("undefined" != typeof global && "function" == typeof global[i] && global[i].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) return t;
                            if ("function" == typeof e.options._method[i] || e.options._method.hasOwnProperty(i)) return r.push(i), t;
                            if (i.match(/^\d+/gim)) return t;
                            n.push(i)
                        }
                        return t
                    };
                t.replace(e.settings.forstart, s).replace(e.settings.interpolate, s).replace(e.settings.ifstart, s).replace(e.settings.elseifstart, s).replace(e.settings.include, s).replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)\[\]]\s*([A-Za-z_0-9]+)/gim, s);
                for (var l = 0; l < n.length; l++) i += "var " + n[l] + "=_." + n[l] + ";";
                for (var l = 0; l < r.length; l++) i += "var " + r[l] + "=_method." + r[l] + ";";
                return "<% " + i + " %>"
            }, this.__convert = function(e, t) { var n = [].join(""); return n += "'use strict';", n += "var _=_||{};", n += "var _out='';_out+='", n += t !== !1 ? e.replace(/\\/g, "\\\\").replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out;" : e.replace(/\\/g, "\\\\").replace(/[\r]/g, "\\r").replace(/[\t]/g, "\\t").replace(/[\n]/g, "\\n").replace(/'(?=[^%]*%>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');" }, this.parse = function(e, t) { var i = this; return t && t.loose === !1 || (e = this.__lexicalAnalyze(e) + e), e = this.__removeShell(e, t), e = this.__toNative(e, t), this._render = new Function("_, _method", e), this.render = function(e, t) { return t && t === n.options._method || (t = r(t, n.options._method)), i._render.call(this, e, t) }, this }
        }, e.compile = function(e, t) {
            t && t === this.options || (t = r(t, this.options));
            var i = this,
                o = { get: function(e) { return t.cachestore ? t.cachestore.get(e) : i.__cache[e] }, set: function(e, n) { return t.cachestore ? t.cachestore.set(e, n) : i.__cache[e] = n } };
            try { var a = o.get(e) ? o.get(e) : new this.template(this.options).parse(e, t); return t && t.cache === !1 || o.set(e, a), a } catch (s) { return n("Juicer Compile Exception: " + s.message), { render: function() {} } }
        }, e.to_html = function(e, t, n) { return n && n === this.options || (n = r(n, this.options)), this.compile(e, n).render(t, n._method) }, "undefined" != typeof global && "undefined" == typeof window && e.set("cache", !1), "undefined" != typeof document && document.body && (e.documentHTML = document.body.innerHTML), "undefined" != typeof module && module.exports ? module.exports = e : this.juicer = e
    }(),
    function(e) {
        e.fn.pageLoad = function(t, n) {
            "function" == typeof t && (t = { e: t }), parseInt(n) > 0 && (t.df = n);
            var r = { df: 20, e: null, et: "scroll", ct: window };
            t && e.extend(r, t);
            var i = this;
            return "scroll" == r.et && e(r.ct).bind("scroll", function() {
                i.each(function() { e.gIsKs(this, r) || e(this).trigger("appear") });
                var t = e.grep(i, function(e) { return !e.loaded });
                i = e(t)
            }), this.each(function() {
                var t = this;
                t.loaded = !1, e(t).one("appear", function() { this.loaded || (null != r.e && "" != r.e && r.e.apply(t), t.loaded = !0) }), "scroll" != r.et && e(t).bind(r.et, function(n) { t.loaded || e(t).trigger("appear") })
            }), e(window).scroll(), this
        }, e.gIsKs = function(t, n) {
            if (void 0 === n.ct || n.ct === window) var r = e(window).height() + e(window).scrollTop();
            else var r = e(n.ct).offset().top + e(n.ct).height();
            return r <= e(t).offset().top - n.df
        }
    }(jQuery);
var formatMain = function() {};
formatMain.prototype = {
    dataSort: function(e, t) {
        function n(e) { if (e.length <= 1) return e; for (var r = Math.floor(e.length / 2), i = e.splice(r, 1)[0], o = i[t], a = [], s = [], l = 0; l < e.length; l++) e[l][t] < o ? a.push(e[l]) : s.push(e[l]); return n(a).concat(i, n(s)) }
        return n(e)
    },
    byteCut: function(e, t) {
        var n = e,
            r = n.replace(/[^\u0000-\u00ff]/g, "aa"),
            i = 0,
            o = 0;
        if (r.length > t) { for (t -= 2, o; o < e.length; o++) { var a = e.charAt(o).replace(/[^\u0000-\u00ff]/g, "aa").length; if (1 == a ? i++ : 2 == a && (i += 2), i > t) break } return e.substring(0, o) + "..." }
        return e
    },
    imgUrlProxy: function(e, t, n, r, i) { return e + "?uri=" + encodeURIComponent(t) + "&width=" + n + "&height=" + r + "&clipType=" + i },
    convertFenToYuan: function(e) { return e ? Number((.01 * e).toFixed(2)) : 0 },
    extendsFun: function(e, t, n) { for (var r in t) !t.hasOwnProperty(r) || e.hasOwnProperty(r) && !n || (e[r] = t[r]); return e },
    groupByKey: function(e, t) {
        for (var n = {}, r = null, i = 0; i < e.length; i++) {
            var o = e[i][t];
            r != o && (n[o] = [], r = o), n[r].push(e[i])
        }
        return n
    },
    arrRisingDimension: function(e, t) { for (var n = [], r = e.length, i = Math.ceil(r / t), o = 0; o < i; o++) n[o] = e.slice(o * t, (o + 1) * t); return n },
    dateCount: function(e, t) {
        var n;
        if ("object" == typeof e && e instanceof Date) n = new Date(e.getTime());
        else if ("string" == typeof e || "number" == typeof e) e = String(e), n = new Date(Number(e.substr(0, 4)), Number(e.substr(4, 2)) - 1, Number(e.substr(6)));
        else {
            if (e) throw new Error("Invalid param d for dateFormat(d, type, f)");
            n = new Date
        }
        return n.setDate(n.getDate() + parseInt(t)), n
    },
    dateFormat: function(e, t, n) {
        var r = this.dateCount(e, t),
            i = r.getFullYear(),
            o = r.getMonth() + 1,
            a = r.getDate();
        if ("string" == typeof n) {
            o = o < 10 ? "0" + o : o, a = a < 10 ? "0" + a : a;
            var s, l = n.split("-"),
                c = [];
            for (s in l) switch (l[s]) {
                case "YY":
                    c[s] = i;
                    break;
                case "MM":
                    c[s] = o;
                    break;
                case "DD":
                    c[s] = a
            }
            return c.join("-")
        }
        return 1 == n ? i + "年" + o + "月" + a + "日" : 2 == n ? o + "月" + a + "日" : void 0
    },
    countWeek: function(e, t) {
        var n = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            r = e.substr(0, 4),
            i = e.substr(4, 2),
            o = e.substr(6, 2);
        "string" == typeof e && (e = new Date(Number(r), Number(i) - 1, Number(o)));
        var a = new Date;
        if (!t) {
            var s = this.dateFormat(a, 0, "YY-MM-DD").split("-"),
                l = this.dateFormat(a, -1, "YY-MM-DD").split("-"),
                c = this.dateFormat(a, 1, "YY-MM-DD").split("-"),
                u = this.dateFormat(a, 2, "YY-MM-DD").split("-");
            if (s[0] == r && s[1] == i && s[2] == o) return unescape("%u4ECA%u5929");
            if (l[0] == r && l[1] == i && l[2] == o) return unescape("%u6628%u5929");
            if (c[0] == r && c[1] == i && c[2] == o) return unescape("%u660E%u5929");
            if (u[0] == r && u[1] == i && u[2] == o) return unescape("%u540E%u5929")
        }
        return n[e.getDay()]
    },
    evalData: function(data) { for (k in data) "" != data[k] && (data[k] = eval("(" + data[k] + ")")); return data }
};
var fmt = new formatMain;
! function(e, t) { "object" == typeof exports ? exports.fmt = new formatMain : e.eventUtil = t() }(this, function() {});
var verifierMain = function() {};
verifierMain.prototype = {
    Require: /.+/,
    Email: /\w+([-+.\w]+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/i,
    Url: /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,
    Number: /^\d+$/,
    Password: /^\S{6,20}$/,
    NickName: /^[0-9a-zA-Z\u4e00-\u9fa5_·-]*$/,
    Int: /^[-\+]?\d+$/,
    Double: /^[-\+]?\d+(\.\d+)?$/,
    English: /^[A-Za-z]+$/,
    Chinese: /^[\u0391-\uFFE5]+$/,
    Tag: /[\\\/\<\>\`\~\'\"\、\!\@\#\$\%\^\&\*\{\}\?\(\)\（\）\《\》\-\:]/,
    DateTime: /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2})$/,
    IdCard: /^(\d{18,18}|\d{15,15}|\d{17,17}[x|X])$/,
    MobilePhone: /^1[0-9]{10}$/,
    MobilePhone2: /^1[0-9]{10}$/,
    Postcode: /^[0-9][0-9]{5}$/,
    testRegExp: function(e, t) { return e.test(t) },
    vfUrl: function(e) { return this.testRegExp(this.Url, e) },
    vfEmail: function(e) { return this.testRegExp(this.Email, e) },
    vfPassword: function(e) { return this.testRegExp(this.Password, e) },
    vfNickName: function(e) { if (!e) return !1; var t = this.getChineseStringLength(e); return t >= 4 && t <= 20 && this.testRegExp(this.NickName, e) },
    vfMobilePhone: function(e) { return this.testRegExp(this.MobilePhone, e) },
    isChinese: function(e) { var t = /[u00-uFF]/; return !t.test(e) },
    encodePassword: function(e) {
        if (e.length < 6) return e;
        var t = e.substr(0, 1);
        if ("*" == t) { var n = parseInt(e.substr(e.length - 2, 2), 10); if (n == e.length) return e }
        var r = this._encode64(e),
            n = r.length + 1 + 2;
        return n < 10 && (n = "0" + n), "*" + r + n
    },
    _encode64: function(e) {
        var t, n, r, i, o, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            s = "",
            l = "",
            c = "",
            u = 0;
        do t = e.charCodeAt(u++), n = e.charCodeAt(u++), l = e.charCodeAt(u++), r = t >> 2, i = (3 & t) << 4 | n >> 4, o = (15 & n) << 2 | l >> 6, c = 63 & l, isNaN(n) ? o = c = 64 : isNaN(l) && (c = 64), s = s + a.charAt(r) + a.charAt(i) + a.charAt(o) + a.charAt(c), t = n = l = "", r = i = o = c = ""; while (u < e.length);
        return s
    }
};
var vf = new verifierMain;
! function(e, t) { "object" == typeof exports ? exports.vf = new verifierMain : e.eventUtil = t() }(this, function() {});
var checkUser = function() {};
checkUser.prototype = { userId: 0, getUser: function() { return this.userId }, setUser: function(e) { this.userId = e } };
var ckuser = new checkUser;
! function(e) {
    function t() {
        var e = (new Date).getTime(),
            t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) { var n = (e + 16 * Math.random()) % 16 | 0; return e = Math.floor(e / 16), ("x" == t ? n : 3 & n | 8).toString(16) });
        return t
    }

    function n(e, t) {
        function n(e, t) { return e << t | e >>> 32 - t }

        function r(e, t) { var n, r, i, o, a; return i = 2147483648 & e, o = 2147483648 & t, n = 1073741824 & e, r = 1073741824 & t, a = (1073741823 & e) + (1073741823 & t), n & r ? 2147483648 ^ a ^ i ^ o : n | r ? 1073741824 & a ? 3221225472 ^ a ^ i ^ o : 1073741824 ^ a ^ i ^ o : a ^ i ^ o }

        function i(e, t, n) { return e & t | ~e & n }

        function o(e, t, n) { return e & n | t & ~n }

        function a(e, t, n) { return e ^ t ^ n }

        function s(e, t, n) { return t ^ (e | ~n) }

        function l(e, t, o, a, s, l, c) { return e = r(e, r(r(i(t, o, a), s), c)), r(n(e, l), t) }

        function c(e, t, i, a, s, l, c) { return e = r(e, r(r(o(t, i, a), s), c)), r(n(e, l), t) }

        function u(e, t, i, o, s, l, c) { return e = r(e, r(r(a(t, i, o), s), c)), r(n(e, l), t) }

        function p(e, t, i, o, a, l, c) { return e = r(e, r(r(s(t, i, o), a), c)), r(n(e, l), t) }

        function f(e) { for (var t, n = e.length, r = n + 8, i = (r - r % 64) / 64, o = 16 * (i + 1), a = Array(o - 1), s = 0, l = 0; l < n;) t = (l - l % 4) / 4, s = l % 4 * 8, a[t] = a[t] | e.charCodeAt(l) << s, l++; return t = (l - l % 4) / 4, s = l % 4 * 8, a[t] = a[t] | 128 << s, a[o - 2] = n << 3, a[o - 1] = n >>> 29, a }

        function d(e) {
            var t, n, r = "",
                i = "";
            for (n = 0; n <= 3; n++) t = e >>> 8 * n & 255, i = "0" + t.toString(16), r += i.substr(i.length - 2, 2);
            return r
        }
        var h, g, m, y, v, b, x, w, C, T = Array(),
            k = 7,
            N = 12,
            A = 17,
            j = 22,
            E = 5,
            _ = 9,
            S = 14,
            D = 20,
            L = 4,
            O = 11,
            M = 16,
            H = 23,
            P = 6,
            R = 10,
            I = 15,
            F = 21;
        for (T = f(e), b = 1732584193, x = 4023233417, w = 2562383102, C = 271733878, h = 0; h < T.length; h += 16) g = b, m = x, y = w, v = C, b = l(b, x, w, C, T[h + 0], k, 3614090360), C = l(C, b, x, w, T[h + 1], N, 3905402710), w = l(w, C, b, x, T[h + 2], A, 606105819), x = l(x, w, C, b, T[h + 3], j, 3250441966), b = l(b, x, w, C, T[h + 4], k, 4118548399), C = l(C, b, x, w, T[h + 5], N, 1200080426), w = l(w, C, b, x, T[h + 6], A, 2821735955), x = l(x, w, C, b, T[h + 7], j, 4249261313), b = l(b, x, w, C, T[h + 8], k, 1770035416), C = l(C, b, x, w, T[h + 9], N, 2336552879), w = l(w, C, b, x, T[h + 10], A, 4294925233), x = l(x, w, C, b, T[h + 11], j, 2304563134), b = l(b, x, w, C, T[h + 12], k, 1804603682), C = l(C, b, x, w, T[h + 13], N, 4254626195), w = l(w, C, b, x, T[h + 14], A, 2792965006), x = l(x, w, C, b, T[h + 15], j, 1236535329), b = c(b, x, w, C, T[h + 1], E, 4129170786), C = c(C, b, x, w, T[h + 6], _, 3225465664), w = c(w, C, b, x, T[h + 11], S, 643717713), x = c(x, w, C, b, T[h + 0], D, 3921069994), b = c(b, x, w, C, T[h + 5], E, 3593408605), C = c(C, b, x, w, T[h + 10], _, 38016083), w = c(w, C, b, x, T[h + 15], S, 3634488961), x = c(x, w, C, b, T[h + 4], D, 3889429448), b = c(b, x, w, C, T[h + 9], E, 568446438), C = c(C, b, x, w, T[h + 14], _, 3275163606), w = c(w, C, b, x, T[h + 3], S, 4107603335), x = c(x, w, C, b, T[h + 8], D, 1163531501), b = c(b, x, w, C, T[h + 13], E, 2850285829), C = c(C, b, x, w, T[h + 2], _, 4243563512), w = c(w, C, b, x, T[h + 7], S, 1735328473), x = c(x, w, C, b, T[h + 12], D, 2368359562), b = u(b, x, w, C, T[h + 5], L, 4294588738), C = u(C, b, x, w, T[h + 8], O, 2272392833), w = u(w, C, b, x, T[h + 11], M, 1839030562), x = u(x, w, C, b, T[h + 14], H, 4259657740), b = u(b, x, w, C, T[h + 1], L, 2763975236), C = u(C, b, x, w, T[h + 4], O, 1272893353), w = u(w, C, b, x, T[h + 7], M, 4139469664), x = u(x, w, C, b, T[h + 10], H, 3200236656), b = u(b, x, w, C, T[h + 13], L, 681279174), C = u(C, b, x, w, T[h + 0], O, 3936430074), w = u(w, C, b, x, T[h + 3], M, 3572445317), x = u(x, w, C, b, T[h + 6], H, 76029189), b = u(b, x, w, C, T[h + 9], L, 3654602809), C = u(C, b, x, w, T[h + 12], O, 3873151461), w = u(w, C, b, x, T[h + 15], M, 530742520), x = u(x, w, C, b, T[h + 2], H, 3299628645), b = p(b, x, w, C, T[h + 0], P, 4096336452), C = p(C, b, x, w, T[h + 7], R, 1126891415), w = p(w, C, b, x, T[h + 14], I, 2878612391), x = p(x, w, C, b, T[h + 5], F, 4237533241), b = p(b, x, w, C, T[h + 12], P, 1700485571), C = p(C, b, x, w, T[h + 3], R, 2399980690), w = p(w, C, b, x, T[h + 10], I, 4293915773), x = p(x, w, C, b, T[h + 1], F, 2240044497), b = p(b, x, w, C, T[h + 8], P, 1873313359), C = p(C, b, x, w, T[h + 15], R, 4264355552), w = p(w, C, b, x, T[h + 6], I, 2734768916), x = p(x, w, C, b, T[h + 13], F, 1309151649), b = p(b, x, w, C, T[h + 4], P, 4149444226), C = p(C, b, x, w, T[h + 11], R, 3174756917), w = p(w, C, b, x, T[h + 2], I, 718787259), x = p(x, w, C, b, T[h + 9], F, 3951481745), b = r(b, g), x = r(x, m), w = r(w, y), C = r(C, v);
        return 16 == t ? d(x) + d(w) : d(b) + d(x) + d(w) + d(C)
    }

    function r() {
        var e, r, i = "",
            o = "",
            a = navigator.plugins,
            s = navigator.mimeTypes;
        if (a)
            for (a = Array.prototype.slice.call(navigator.plugins), e = 0, r = a.length; e < r; e++) i += a[e].filename;
        if (s)
            for (s = Array.prototype.slice.call(navigator.mimeTypes), e = 0, r = s.length; e < r; e++) o += s[e].description, s[e].enabledPlugin && (o += s[e].enabledPlugin.description, o += s[e].enabledPlugin.filename);
        return n(screen.width + t() + window.innerHeight + document.cookie + screen.height + navigator.userAgent + location.href + window.innerWidth + document.referrer + navigator.hardwareConcurrency + i + (new Date).getTime()).toUpperCase()
    }

    function i() { return /(?:;\s|^)_tt_=/gi.test(document.cookie) }
    e.fn.TrackerClickBase = function(t) {
        var n = function(e, t) { this.opt = t, this.obj = e, this.init() };
        n.prototype = {
            init: function() {
                var t = this;
                if (this.PAGE_TRACK_URL = "http://log.mtime.cn/_t.gif", this.PAGE_CLICK_URL = "http://log1.mtime.cn/_t.gif", this.AD_TRACK_URL = "http://log2.mtime.cn/_t.gif", this.AD_CLICK_URL = "http://log2.mtime.cn/_t.gif", this.MTIME_LOG_URL = "http://logx.mtime.com/", this.Pn = "", this.opt.pageview) t.trackPageView();
                else if (this.opt.adTrack) { var n = indexTGs; for (var r in n) n[r] ? (e("#" + r).html(n[r]), t.trackAdClick(r)) : e("#" + r).hide() } else t.onMtimeClick()
            },
            onMtimeClick: function() {
                var t = this,
                    n = t.opt.evt,
                    r = n.target;
                if (r && r.tagName) {
                    var i = r.tagName.toLowerCase();
                    if ("a" != i && "button" != i && "input" != i) {
                        if (r = e(r).closest("a")[0], !r || !r.tagName) {
                            if (r = e(r).closest("data-mtime-tracker")[0], !r || !r.tagName) return;
                            o = r.attr("data-mtime-tracker")
                        }
                        i = r.tagName.toLowerCase()
                    }
                    if ("input" != i || "submit" == r.type || "button" == r.type) {
                        var o = r.href || "";
                        if ("submit" == r.type) {
                            var a = e(r).closest("form")[0];
                            a && a.action && (o = a.action)
                        }
                        var s = { dom: r, tu: o, cp: { left: n.pageX, top: n.pageY } };
                        t.trackMtimeClick(s)
                    }
                }
            },
            trackMtimeClick: function(e) {
                var t = this;
                if (e && e.dom) {
                    var n = (new Date).getTime(),
                        o = [];
                    o = o.concat(this.MTIME_LOG_URL), o = o.concat(["?pvid=", n]), o = o.concat(["&u=", encodeURIComponent(location.href)]), o = o.concat(["&tp=", encodeURIComponent(t.getTargetDOMPath(e.dom))]), e.tu && (o = o.concat(["&tu=", encodeURIComponent(e.tu)])), e.cp && e.cp.left && e.cp.top && (o = o.concat(["&cp=", encodeURIComponent([e.cp.left, "_", e.cp.top].join(""))]));
                    var a = t.cookie("_ar_") || "";
                    a && (o = o.concat(["&ar=", encodeURIComponent(a)]));
                    var s = t.cookie("_mi_") || "";
                    s && (o = o.concat(["&ut=", s])), t.trackClick2(e), i() || t.setTTCookieInCom(r()), t.log(o.join(""))
                }
            },
            trackClick: function(t) {
                var n = this,
                    r = [];
                r = r.concat(this.PAGE_TRACK_URL), r = this.getBaseParam(r), r = e("body").attr("pn") ? r.concat(["&pn=", n.pn]) : r.concat(["&pn=", n.pn]), e(t.dom).attr("data-pan") && (r = r.concat(["&pan=", e(t.dom).attr("data-pan")])), this.log(r.join(""))
            },
            trackClick2: function(t) {
                var n = this,
                    r = [];
                r = r.concat(this.PAGE_CLICK_URL), r = this.getBaseParam(r), r = e("body").attr("pn") ? r.concat(["&pn=", e("body").attr("pn")]) : r.concat(["&pn=", n.pn]), e(t.dom).attr("data-pan") && (r = r.concat(["&pan=", e(t.dom).attr("data-pan")])), this.log(r.join(""))
            },
            trackAdClick: function(e) {
                var t = [];
                t = t.concat(this.AD_CLICK_URL), t = this.getBaseParam(t), t = t.concat(["&t=", 1]), t = t.concat(["&an=", e]), this.log(t.join(""))
            },
            trackMtimePageView: function(t) {
                var n = (new Date).getTime(),
                    r = e("body").attr("pn") ? e("body").attr("pn") : "",
                    o = [];
                o = o.concat(this.MTIME_LOG_URL), o = o.concat(["?pvid=", n]), o = o.concat(["&pn=", r]), o = o.concat(["&u=", encodeURIComponent(location.href)]), t = t || this.getReferrer() || "", t && (o = o.concat(["&ur=", encodeURIComponent(t)]));
                var a = this.cookie("_ar_") || "";
                a && (o = o.concat(["&ar=", encodeURIComponent(a)]));
                var s = this.cookie("_mi_") || "";
                s && (o = o.concat(["&ut=", s])), i() ? this.log(o.join("")) : this.getLogxCNCookie.call(this, function() { this.log(o.join("")) })
            },
            trackPageView: function() {
                this.trackMtimePageView(), this.trackGooglePageView();
                var t = [];
                t = t.concat(this.PAGE_TRACK_URL), t = this.getBaseParam(t), e("body").attr("pn") && (t = t.concat(["&pn=", e("body").attr("pn")])), this.log(t.join("")), this.trackBaiduPageView()
            },
            getTargetDOMPath: function(t) {
                var n = this,
                    r = [],
                    i = t;
                do {
                    var o = i.tagName || "";
                    if (o = o.toLowerCase(), !o || "html" == o) break;
                    var a = [];
                    if (a.push(o), i.id) a = a.concat(["#", i.id]);
                    else {
                        var s = i.parentNode;
                        if (s.childNodes.length > 1) {
                            for (var l = 1, c = 0; c < s.childNodes.length; ++c) {
                                var u = s.childNodes[c];
                                if (u == i) break;
                                var p = u.tagName || "";
                                p.toLowerCase() == o && l++
                            }
                            l > 1 && (a = a.concat([":eq(", l, ")"]))
                        }
                    }
                    if (i.className) {
                        var f = i.className.split(" ");
                        a = a.concat([".", f.join(".")])
                    }
                    var d = e(i),
                        h = d.attr("pan");
                    h = d.attr("data-pan") ? d.attr("data-pan") : h, h && (a = a.concat(["[pan='", h, "']"]));
                    var g = d.attr("pn");
                    g = d.attr("data-pn") ? d.attr("data-pn") : g, g && (a = a.concat(["[pn='", g, "']"]), n.pn = g), r.push(a.join("")), i = i.parentNode
                } while (i);
                return r.reverse().join(">")
            },
            trackBaiduPageView: function() { e.ajax({ url: "http://hm.baidu.com/h.js?6dd1e3b818c756974fb222f0eae5512e", dataType: "script", cache: !0, success: function(e) {} }) },
            trackGooglePageView: function() {
                if ("undefined" == typeof urchinTracker) {
                    var t = this;
                    e.ajax({ url: "http://www.google-analytics.com/ga.js", dataType: "script", success: function() { try { t._trackGooglePageView("UA-257914-4"), t._trackGooglePageView("UA-2192709-1") } catch (e) {} } })
                }
            },
            _trackGooglePageView: function(e) {
                var t = t || [];
                t.push(["_setAccount", e]), t.push(["_trackPageview"]),
                    function() {
                        var e = document.createElement("script");
                        e.type = "text/javascript", e.async = !0, e.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
                        var t = document.getElementsByTagName("script")[0];
                        t.parentNode.insertBefore(e, t)
                    }();
                var n = _gat._createTracker(e);
                n._trackPageview()
            },
            getBaseParam: function(e) {
                var t = this.getBrowser();
                e = e.concat(["?url=", encodeURIComponent(document.location.href)]), e = e.concat(["&u=", this.getUserCode()]), e = e.concat(["&uId=", this.getUserId()]), e = e.concat(["&w=", screen.width]), e = e.concat(["&h=", screen.height]), e = e.concat(["&r2=", encodeURIComponent(this.getReferrer())]), e = e.concat(["&b=", t.type]), e = e.concat(["&bVer=", t.ver]);
                var n = this.getUserIdentity();
                e = e.concat(["&u2=", n.id]), e = e.concat(["&isNew=", n.isNewbie]);
                var r = this.getPartnerType();
                return e = e.concat(["&pt=", r])
            },
            getReferrer: function() { var e = ""; try { e = top.document.referrer } catch (t) { if (parent) try { e = parent.document.referrer } catch (n) { e = "" } } return "" === e && (e = document.referrer), e },
            getBrowser: function() {
                var e = {
                        versions: function() {
                            var e = navigator.userAgent;
                            navigator.appVersion;
                            return { ie: e.indexOf("MSIE") > -1 || !!e.match(/Trident\/7\./), opera: e.indexOf("Presto") > -1, webkit: e.indexOf("AppleWebKit") > -1, gecko: e.indexOf("Gecko") > -1 && e.indexOf("KHTML") == -1 }
                        }(),
                        language: (navigator.browserLanguage || navigator.language).toLowerCase()
                    },
                    t = 0,
                    n = 0,
                    r = navigator.userAgent.toLowerCase(),
                    i = /(msie|firefox|chrome|opera|version|trident).*?([\d.]+)/,
                    o = r.match(i);
                return e.versions.ie ? (t = 1, n = e.versions.ie) : e.versions.gecko ? (t = 2, n = e.versions.gecko) : e.versions.opera ? (t = 3, n = e.versions.opera) : e.versions.webkit && (t = 4, n = e.versions.webkit), n = o[2], { type: t, ver: n }
            },
            cookie: function(e, t, n) {
                if ("undefined" == typeof t) {
                    var r = null;
                    if (document.cookie && "" != document.cookie)
                        for (var i = document.cookie.split(";"), o = 0; o < i.length; o++) { var a = jQuery.trim(i[o]); if (a.substring(0, e.length + 1) == e + "=") { r = decodeURIComponent(a.substring(e.length + 1)); break } }
                    return r
                }
                n = n || {}, null === t && (t = "", n.expires = -1);
                var s = "";
                if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) { var l; "number" == typeof n.expires ? (l = new Date, l.setTime(l.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : l = n.expires, s = "; expires=" + l.toUTCString() }
                var c = n.path ? "; path=" + n.path : "",
                    u = n.domain ? "; domain=" + n.domain : "",
                    p = n.secure ? "; secure" : "";
                document.cookie = [e, "=", encodeURIComponent(t), s, c, u, p].join("")
            },
            log: function(e) {
                var t = ((new Date).getTime(), new Image(1, 1));
                t.onLoad = function() {}, t.src = e + "&r=" + Math.random()
            },
            getUserCode: function() {
                var e = this.cookie("_userCode_");
                if (null === e || 0 === e.length) {
                    var t = new Date,
                        n = [];
                    n.push(t.getFullYear()), n.push(t.getMonth() + 1), n.push(t.getDate()), n.push(t.getHours()), n.push(t.getMinutes()), n.push(t.getSeconds()), n.push(parseInt(1e4 * Math.random(), 10)), e = n.join(""), this.cookie("_userCode_", e)
                }
                return e
            },
            getUserIdentity: function() {
                var e = this.cookie("_userIdentity_"),
                    t = !1;
                if (null === e || 0 === e.length) {
                    t = !0;
                    var n = new Date,
                        r = [];
                    r.push(n.getFullYear()), r.push(n.getMonth() + 1), r.push(n.getDate()), r.push(n.getHours()), r.push(n.getMinutes()), r.push(n.getSeconds()), r.push(parseInt(1e4 * Math.random(), 10)), e = r.join(""), this.cookie("_userIdentity_", e)
                }
                return { id: e, isNewbie: t }
            },
            getUserId: function() { var e = this.cookie("_mi_") || ""; return e || e.length > 0 ? e : "" },
            getEvent: function() { var e = ""; return e && 0 !== e.length || (e = this.cookie("_e_") || ""), e && e.length > 0 && this.cookie("_e_", e), e },
            getPartnerType: function() { var e = ""; return e && 0 !== e.length || (e = this.cookie("_pt_") || ""), e && e.length > 0 && this.cookie("_pt_", e), e },
            getLogxCNCookie: function(t) {
                var n = this;
                e.ajax({ url: "//logx.mtime.cn/get_tt?t=" + (new Date).getTime(), dataType: "jsonp", timeout: 5e3, success: function(e) { "_tt_" === e.Name ? n.setTTCookieInCom.call(n, e.Value) : n.setTTCookieInCom.call(n, r()) }, error: function(e, t) { "timeout" == t && n.setTTCookieInCom.call(n, r()) }, complete: function() { t.call(n) } })
            },
            setTTCookieInCom: function(e) { var t = {}; "https:" == location.protocol && (t.secure = !0), t.domain = "." + location.host.split(".").reverse().slice(0, 2).reverse().join("."), t.path = "/", t.expires = 3650, this.cookie("_tt_", e, t) }
        };
        var o = { evt: null };
        t = e.extend(o, t), this.each(function() { new n(e(this), t) })
    }
}(jQuery), $("body").bind("mousedown", function(e) { $(this).TrackerClickBase({ evt: e }) }), $("body").TrackerClickBase({ pageview: !0 }),
    function(e) {
        e.fn.dialogs = function(t) {
            var n = function(e, t) { this.opt = t, this.obj = e, this.init() };
            n.prototype = {
                init: function() {
                    var t = this;
                    e("body").append(t.dialogHtml()), t.popTop(), t.afterRender()
                },
                dialogHtml: function() {
                    var e = this,
                        t = null != e.opt.t ? e.opt.t : "",
                        n = null != e.opt.c ? e.opt.c : "",
                        r = null != e.opt.b ? e.opt.b : "",
                        i = (null != e.opt.x ? e.opt.x : "", "");
                    return i = '          <div data-dialog="bback" style="background:#000; opacity: 0.6; z-index: 110; position: fixed; margin: 0px; padding: 0px; top: 0px; left: 0px; width: 100%; height: 100%;filter: alpha(opacity=60);"></div>          <div data-dialog="layout" class="m-popbox">            <a class="i-pop-close" ' + e.opt.xk + ' href="javascript:void(0)" title="关闭"></a>            ' + t + '            <div class="m-popcont">' + n + "</div>            " + r + "          </div>"
                },
                afterRender: function() {
                    var t = this;
                    e("[" + t.opt.xk + "]").on("click", function() { t.opt.xe ? t.opt.xe.apply(e.extend({}, t)) : (e('[data-dialog="layout"]').remove(), e('[data-dialog="bback"]').remove()) }), e("[" + t.opt.bsk + "]").on("click", function() { t.opt.bse ? t.opt.bse.apply(e.extend({}, t)) : (e('[data-dialog="layout"]').remove(), e('[data-dialog="bback"]').remove()) }), e("[" + t.opt.bck + "]").on("click", function() { t.opt.bce ? t.opt.bce.apply(e.extend({}, t)) : (e('[data-dialog="layout"]').remove(), e('[data-dialog="bback"]').remove()) })
                },
                popTop: function() {
                    var t = e('[data-dialog="layout"]'),
                        n = t.height(),
                        r = t.width() / 2,
                        i = window.screen.availHeight,
                        o = parseInt((i - n) / 2 - 30);
                    o = o >= 0 ? o : 0, t.css({ top: o, "margin-left": -r })
                }
            };
            var r = { t: "", c: "", b: "", x: "", tk: 'data-dialog="tk"', ck: 'data-dialog="ck"', bsk: 'data-dialog="bsk"', bck: 'data-dialog="bck"', xk: 'data-dialog="xk"', bse: null, bce: null, xe: null };
            "object" == typeof t ? t = e.extend(r, t) : "string" == typeof t && (t = e.extend(r, { c: '<p class="alert">' + t + "</p>" })), this.each(function() { new n(e(this), t) })
        }
    }(jQuery);
var ajaxMain = function() {};
if (!console) var console = { log: function() {}, warn: function() {}, error: function() {} };
ajaxMain.prototype = {
    getAjax: function(dat) {
        var _d = {};
        _d.data = void 0;
        var _t = this,
            p = [],
            k, params = {};
        dat.Jparams instanceof Object ? params = dat.Jparams : dat.Jparams instanceof String && (params = JSON.parse(dat.Jparams));
        for (k in params) p.push(k + "=" + params[k]);
        params = p.join("&");
        var _crossDomain = !0;
        "boolean" == typeof dat.crossDomain && (_crossDomain = dat.crossDomain), $.ajax({
            type: dat.Jtype || "get",
            url: dat.Jurl,
            data: params,
            cache: dat.Jcache || !1,
            dataType: dat.JdataType || "json",
            crossDomain: _crossDomain,
            xhrFields: dat.JxhrFields || null,
            success: function(data, status, jqXHR) {
                if (dat.JdataType && "script" == dat.JdataType) _d.data = window[dat.Jmethod];
                else if (dat.JdataType && "text" == dat.JdataType) {
                    var valset = data.indexOf("="),
                        thestr = data.substring(4, valset);
                    eval(data), _d.data = eval(thestr)
                } else _d.data = data;
                _d.obj = _t, dat.Jparams && (_d.param = dat.Jparams), dat.Jback && (_d.callback = dat.Jback, dat.Jback.apply(_d)), dat.Jcall && dat.Jcall.apply(_d)
            },
            error: function(e, t) { console.log("请求发生错误-->", e, t) }
        })
    }
};
var ajax = new ajaxMain,
    uaMain = function() { this.isApp = !1, this.isHybird = !1, this.isAndroidApp = !1, this.isIphoneApp = !1, this.isIos = !1, this.isAndroidHybird = !1, this.isIphoneHybird = !1, this.IosVersion = null, this.AndroidVersion = null, this.isIe8 = !1, this.init() };
uaMain.prototype = {
    init: function() {
        var e, t = this,
            n = "Phone",
            r = "Android",
            i = navigator.userAgent,
            o = i.indexOf(n),
            a = i.indexOf(r),
            s = i.indexOf("Hybird"),
            l = i.indexOf("WebView");
        i.indexOf("MSIE 8.0");
        o >= 0 && (t.isApp = !0, t.isIphoneApp = !0, t.isIos = !0, e = i.split(n)[1].split("(WebView")[0], t.IosVersion = parseInt(e.replace(/\d/g, ""), 10), (s >= 0 || l >= 0) && (t.isHybird = !0, t.isIphoneHybird = !0)), a >= 0 && (this.isApp = !0, this.isAndroidApp = !0, e = i.split(r)[1].split("(WebView")[0], t.AndroidVersion = parseInt(e.replace(/\d/g, ""), 10), (s >= 0 || l >= 0) && (t.isHybird = !0,
            t.isAndroidHybird = !0), navigator.userAgent.indexOf("MSIE 8.0") > 0 && (t.isIe8 = !0))
    },
    isApp: function() { return this.isApp },
    isHybird: function() { return this.isHybird },
    isIos: function() { return this.isIos },
    isAndroidApp: function() { return this.isAndroidApp },
    isIphoneApp: function() { return this.isIphoneApp },
    isAndroidHybird: function() { return this.isAndroidHybird },
    isIphoneHybird: function() { return this.isIphoneHybird },
    IosVersion: function() { return this.IosVersion },
    AndroidVersion: function() { return this.AndroidVersion },
    isIe8: function() { return this.isIe8 },
    navigate: function(e) {
        var t = this,
            n = window.location,
            r = e ? e : n.protocol + "//" + n.host + n.pathname;
        if (t.isAndroidHybird) { var i = window.mtimeMall.jumpPage(r); if (i) return }
        if (t.isIphoneHybird) return void(location.href = r)
    }
};
var ua = new uaMain,
    headerNameSpace = "undefined" == typeof headerNameSpace ? {} : headerNameSpace;
! function() {
    var e = "https://passport.mtime.com/";
    headerNameSpace.constants = { HOME_PAGE_URL: "http://www.mtime.com/", PASSPORT_PAGE_URL: e, REGISTER_LOGIN_URL: e + "member/signin", FIND_PWD_BY_PHONE: e + "findpwd/phone", FIND_PWD_BY_EMAIL: e + "findpwd/email", emptyAccountMessage: "请输入登录账号", emptyMobileMessage: "请输入手机号码", errorMobileMessage: "请输入有效的手机号码", emptyPasswordMessage: "请输入密码", emptyVcodeMessage: "请输入图片验证码", errorVcodeMessage: "图片验证码错误", oftenSmsMessage: "您获取短信超过限制，请稍后再试", emptySmsMessage: "请输入短信验证码", errorSmsMessage: "短信验证码错误", SMS_VALID_CODE_SECOND: 60, errorAccountLoginMessage: "帐号或密码错误", ACCOUNT_PLACEHOLDER: "输入邮箱 / 手机号码", PASSWORD_PLACEHOLDER: "输入密码", VCODE_PLACEHOLDER: "图片验证码", PHONE_PLACEHOLDER: "输入手机号", SMS_PLACEHOLDER: "短信验证码", SMS_TIP: "未注册手机验证后自动登录", CODE_OUTOF_LIMIT_CONFIG_HOUR: 91880032, CODE_OUTOF_LIMIT_CONFIG_DAY: 91880033 }
}(),
function() {
    var e = headerNameSpace.constants,
        t = function() {};
    t.prototype = {
        isie8: navigator.userAgent.indexOf("MSIE 8.0") > 0,
        _encode64: function(e) {
            var t, n, r, i, o, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                s = "",
                l = "",
                c = "",
                u = 0;
            do t = e.charCodeAt(u++), n = e.charCodeAt(u++), l = e.charCodeAt(u++), r = t >> 2, i = (3 & t) << 4 | n >> 4, o = (15 & n) << 2 | l >> 6, c = 63 & l, isNaN(n) ? o = c = 64 : isNaN(l) && (c = 64), s = s + a.charAt(r) + a.charAt(i) + a.charAt(o) + a.charAt(c), t = n = l = "", r = i = o = c = ""; while (u < e.length);
            return s
        },
        encodePassword: function(e) {
            if (e.length < 6) return e;
            var t = e.substr(0, 1);
            if ("*" == t) { var n = parseInt(e.substr(e.length - 2, 2), 10); if (n == e.length) return e }
            var r = this._encode64(e),
                n = r.length + 1 + 2;
            return n < 10 && (n = "0" + n), "*" + r + n
        },
        validMobile: function(e) { var t = /^((13[0-9])|(14[0-9])|(15[^4,\\D])|(16[^4,\\D])|(18[0,0-9])|(19[0,0-9])|(17[0,5-9]))\d{8}$/; return t.test(e) },
        validEmail: function(e) { var t = new RegExp(/\w+([-+.\w]+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/i); return t.test(e) },
        jumpEmailFindPwd: function(t) {
            var n = {};
            n.email = t;
            var r = this._encode64(JSON.stringify(n));
            window.location.href = e.FIND_PWD_BY_EMAIL + "?token=" + r
        },
        jumpPhoneFindPwd: function(t) {
            var n = {};
            n.mobile = t;
            var r = this._encode64(JSON.stringify(n));
            window.location.href = e.FIND_PWD_BY_PHONE + "?token=" + r
        },
        jumpRegisterLoginPage: function() { window.location.href = e.REGISTER_LOGIN_URL }
    }, headerNameSpace.helper = new t
}(),
function(e) {
    var t = headerNameSpace.constants,
        n = headerNameSpace.helper;
    e.fn.login = function(r) {
        var i = function(e, t) { this.opt = t, this.obj = e, this.cfg = { domain: site_domain ? site_domain : ".mtime.com", server: server ? server : "www.mtime.com" }, this.init() };
        i.prototype = {
            init: function() {
                var e = this;
                e.initLogin()
            },
            initLogin: function() {
                var e = this;
                if (e.timeend = !0, e.opt.pop) {
                    var t = '<div data-login="bback" style="background:#000; opacity: 0.6; z-index: 110; position: fixed; margin: 0px; padding: 0px; top: 0px; left: 0px; width: 100%; height: 100%;filter: alpha(opacity=60);"></div>';
                    e.obj.append(t + e.loginHtml()), e.popTop()
                } else e.obj.html(e.loginHtml()), e.obj.find('[data-login="login-out"]').removeClass("m-popbox");
                e.events()
            },
            events: function() {
                var r = this;
                r.obj.find('[data-login="regist"]').on("click", function() {
                    var e = r.opt.ru ? r.opt.ru : window.location.href;
                    window.location.href = "https://passport.mtime.com/member/signin/?redirectUrl=" + e
                }), r.obj.find(".mailLogin").on("click", function() { r.bflag = !1, e('[data-login="bback"]').remove(), e('[data-login="login-out"]').remove(), r.initLogin() }), r.obj.find(".mesLogin").on("click", function() {
                    r.bflag = !0, e('[data-login="bback"]').remove(), e('[data-login="login-out"]').remove(), r.initLogin(), r.ajaxCode(function() {
                        var e = this.data ? this.data.value : null;
                        e && (r.obj.find(".imgCodeBox").attr("code-id", e.id), r.obj.find('[data-tel="codeImg"]').attr("src", e.src))
                    })
                }), r.obj.find('[data-tel="codeImg"]').on("click", function() {
                    r.ajaxCode(function() {
                        var e = this.data ? this.data.value : null;
                        e && (r.obj.find(".imgCodeBox").attr("code-id", e.id), r.obj.find('[data-tel="codeImg"]').attr("src", e.src))
                    })
                }), r.obj.find('[data-login="mail"]').focus(function() { e(this).parent().removeClass("red"), e(this).val() == r.opt.ph && e(this).val(""), e(this).parent().addClass("blue") }), r.obj.find(".getNewCode").on("click", function() {
                    if (r.timeend) {
                        var n = e('[data-tel="phone"]').val(),
                            i = e('[data-tel="code"]').val(),
                            o = e(".imgCodeBox").attr("code-id"),
                            a = 60,
                            s = r.notNull(n, i, "", !1);
                        s && (e(".loginWord").text("未注册手机验证后自动登录").removeClass("errorTips"), r.sendSmsLoginCode(function() {
                            var n = this.data;
                            if (n.value.success && n.value.vcodeValid) {
                                var i = n.value.smsCodeId;
                                e.cookie("smsid", i), r.timeend && (r.timer = setInterval(function() { a--, r.timeend = !1, e(".getNewCode").text(a + "s重新获取"), a <= 0 && (r.timeend = !0, clearInterval(r.timer), e(".getNewCode").text("重新获取")) }, 1e3))
                            } else n.value.success || (console.log("coming"), n.value.errCode == t.CODE_OUTOF_LIMIT_CONFIG_DAY || n.value.errCode == t.CODE_OUTOF_LIMIT_CONFIG_HOUR ? e(".loginWord").text(t.oftenSmsMessage).addClass("errorTips") : e(".loginWord").text(t.errorVcodeMessage).addClass("errorTips"), r.ajaxCode(function() {
                                var e = this.data ? this.data.value : null;
                                e && (r.obj.find(".imgCodeBox").attr("code-id", e.id), r.obj.find('[data-tel="codeImg"]').attr("src", e.src))
                            }))
                        }, n, o, i))
                    }
                }), r.obj.find('[data-tel="login"]').on("click", function() {
                    var n = e('[data-tel="phone"]').val(),
                        i = e.cookie("smsid"),
                        o = e('[data-tel="password"]').val(),
                        a = e(".imgCodeBox").attr("code-id"),
                        s = e('[data-tel="code"]').val(),
                        l = r.notNull(n, s, o, !0);
                    l && r.signInBySms(function() {
                        var n = this.data;
                        n.value.success ? location.reload() : 0 == n.value.vcodeValid ? (n.value.errCode == t.CODE_OUTOF_LIMIT_CONFIG_DAY || n.value.errCode == t.CODE_OUTOF_LIMIT_CONFIG_HOUR ? e(".loginWord").text(t.oftenSmsMessage).addClass("errorTips") : e(".loginWord").text(t.errorVcodeMessage).addClass("errorTips"), e('[data-tel="code"]').parent().addClass("red"), r.obj.find('[data-login="refresh"]').trigger("click")) : 0 == n.value.smsCodeValid && (e(".loginWord").text(t.errorSmsMessage).addClass("errorTips"), e('[data-tel="password"]').parent().addClass("red"))
                    }, n, i, o, !0, !0, a, s)
                }), r.obj.find('[data-tel="phone"]').on("focus", function() { e(this).val() === t.PHONE_PLACEHOLDER && e(this).val(""), e(this).parent().addClass("blue") }), r.obj.find('[data-tel="phone"]').on("blur", function() { "" === e(this).val() && e(this).val(t.PHONE_PLACEHOLDER), e(this).parent().removeClass("blue") }), r.obj.find('[data-tel="code"]').on("focus", function() { e(this).val() === t.VCODE_PLACEHOLDER && e(this).val(""), e(this).parent().addClass("blue") }), r.obj.find('[data-tel="code"]').on("blur", function() { "" === e(this).val() && e(this).val(t.VCODE_PLACEHOLDER), e(this).parent().removeClass("blue") }), r.obj.find('[data-tel="password"]').on("focus", function() { e(this).val() === t.SMS_PLACEHOLDER && e(this).val(""), e(this).parent().addClass("blue") }), r.obj.find('[data-tel="password"]').on("blur", function() { "" === e(this).val() && e(this).val(t.SMS_PLACEHOLDER), e(this).parent().removeClass("blue") }), r.obj.find('[data-login="mail"]').focus(function() { e(this).val() == t.ACCOUNT_PLACEHOLDER && e(this).val(""), e(this).parent().removeClass("blue") }), r.obj.find('[data-login="mail"]').blur(function() { "" == e(this).val() && e(this).val(t.ACCOUNT_PLACEHOLDER), e(this).parent().removeClass("blue") }), r.obj.find('[data-login="password"]').focus(function() { e(this).parent().removeClass("red"), e(this).parent().addClass("blue"), e(this).attr("placeholder", ""), e(this).val() == t.PASSWORD_PLACEHOLDER && e(this).val("") }), r.obj.find('[data-login="password"]').blur(function() { "" === e(this).val() && e(this).attr("placeholder", t.PASSWORD_PLACEHOLDER), e(this).parent().removeClass("blue") }), r.obj.find('[data-login="isauto"]').on("click", function() {
                    var t = e(this).hasClass("ico-checkend") ? "ico-check" : "ico-checkend";
                    e(this).attr("class", t)
                }), r.obj.find(".lostpassword a").on("click", function(t) {
                    t.preventDefault();
                    var r = e("[data-login='mail']").val();
                    n.validMobile(r) ? n.jumpPhoneFindPwd(r) : n.validEmail(r) ? n.jumpEmailFindPwd(r) : n.jumpPhoneFindPwd("")
                }), r.obj.find('[data-login="refresh"]').on("click", function() {
                    r.ajaxCode(function() {
                        var e = this.data ? this.data.value : null;
                        e && (r.obj.find('[data-login="refresh-out"]').attr("code-id", e.id), r.obj.find('[data-login="codeImg"]').attr("src", e.src))
                    })
                }), r.obj.find('[data-login="close"]').on("click", function() { e('[data-login="bback"]').remove(), e('[data-login="login-out"]').remove() }), r.obj.find('[data-login="login"]').on("click", function() {
                    var i = r.obj.find('[data-login="mail"]'),
                        o = r.obj.find('[data-login="password"]'),
                        a = r.obj.find('[data-login="code-out"]'),
                        s = r.obj.find('[data-login="refresh-out"]'),
                        l = r.obj.find('[data-login="captcha"]'),
                        c = !0;
                    return codeId = "", codeVal = "", isAllow = !0, saveEmail = !0, i.val() && i.val() != t.ACCOUNT_PLACEHOLDER ? (i.parent().removeClass("red"), isAllow = !0, o.val() && o.val() != t.PASSWORD_PLACEHOLDER ? (o.parent().removeClass("red"), isAllow = !0, a.is(":visible") && "" == l.val() || l.val() == t.VCODE_PLACEHOLDER ? (e(".errorTips").text(t.emptyVcodeMessage).show(), l.parent().addClass("red"), void(isAllow = !1)) : (a.is(":visible") && (codeId = s.attr("code-id"), codeVal = l.val(), l.parent().removeClass("red"), isAllow = !0), void(isAllow && r.ajaxLogin(function() {
                        var n = this.data ? this.data.value : null;
                        if (n)
                            if (n.userId && (r.opt.ce ? (e.cookie("loginuser", i.val()), r.opt.ce.apply(e.extend({}, r))) : (e.cookie("loginuser", i.val()), location.reload())), n.success) location.reload();
                            else {
                                if (n.isShieldStatus) return void showSecurityRiskDialog(n.shieldTip);
                                if (n.needResetPassword) return void showResetPasswordDialog(n.resetPasswordUrl);
                                if (n.redirect) return void(window.location.href = n.redirect);
                                n.isRobot ? (n.vcodeValid ? (e(".errorTips").text(t.errorAccountLoginMessage).show(), e('[data-login="mail"]').parent().addClass("red"), e('[data-login="password"]').parent().addClass("red")) : (e('[data-login="mail"]').parent().removeClass("red"), e('[data-login="password"]').parent().removeClass("red"), e(".errorTips").text(t.errorVcodeMessage).show(), e(".icode").parent().addClass("red")), r.obj.find('[data-login="refresh"]').trigger("click"), e(".codewrap,.codetxt").show(), (a.is(":visible") && "" == l.val() || l.val() == t.VCODE_PLACEHOLDER) && (e('[data-login="mail"]').parent().removeClass("red"), e('[data-login="password"]').parent().removeClass("red"), e(".errorTips").text(t.emptyVcodeMessage).show(), l.parent().addClass("red"))) : (e(".errorTips").text(t.errorAccountLoginMessage).show(), r.obj.find('[data-login="refresh"]').trigger("click"), e('[data-login="mail"]').parent().addClass("red"), e('[data-login="password"]').parent().addClass("red"))
                            }
                        else showSecurityRiskDialog("服务器出了点小状况，请稍候再试")
                    }, i.val(), n.encodePassword(o.val()), saveEmail, c, codeId, codeVal)))) : (e(".errorTips").text(t.emptyPasswordMessage).show(), o.parent().addClass("red"), void(isAllow = !1))) : (e(".errorTips").text(t.emptyAccountMessage).show(), i.parent().addClass("red"), void(isAllow = !1))
                })
            },
            notNull: function(r, i, o, a) {
                if (r === t.PHONE_PLACEHOLDER) e(".loginWord").text(t.emptyMobileMessage).addClass("errorTips"), e('[data-tel="phone"]').parent().addClass("red");
                else if (r && r !== t.PHONE_PLACEHOLDER && !n.validMobile(r)) e(".loginWord").text(t.errorMobileMessage).addClass("errorTips"), e('[data-tel="phone"]').parent().addClass("red");
                else {
                    if (i !== t.VCODE_PLACEHOLDER) return e('[data-tel="code"]').parent().removeClass("red"), e('[data-tel="phone"]').parent().removeClass("red"), !a || o !== t.SMS_PLACEHOLDER || (e(".loginWord").text(t.emptySmsMessage).addClass("errorTips"), e('[data-tel="password"]').parent().addClass("red"), !1);
                    e(".loginWord").text(t.emptyVcodeMessage).addClass("errorTips"), e('[data-tel="phone"]').parent().removeClass("red"), e('[data-tel="code"]').parent().addClass("red")
                }
                return !1
            },
            ajaxCode: function(e) { ajax.getAjax({ Jurl: "http://service" + site_domain + "/utility/managerservice.m", JdataType: "script", Jtype: "get", Jmethod: "RefreshVcodeResult", Jparams: { Ajax_CallBack: !0, Ajax_CallBackType: "Mtime.Community.Controls.CommunityPages.ManagerService", Ajax_CallBackMethod: "RefreshVcode", Ajax_CrossDomain: 1, Ajax_RequestUrl: "", t: (new Date).getTime() }, Jback: e }) },
            ajaxLogin: function(e, t, n, r, i, o, a) {
                i = !1;
                ajax.getAjax({ Jurl: "http://service" + site_domain + "/utility/managerservice.m", JdataType: "script", Jtype: "get", Jmethod: "signInResult", Jparams: { Ajax_CallBack: !0, Ajax_CallBackType: "Mtime.Community.Controls.CommunityPages.ManagerService", Ajax_CallBackMethod: "SignIn", Ajax_CrossDomain: 1, Ajax_RequestUrl: "", t: (new Date).getTime(), Ajax_CallBackArgument0: t, Ajax_CallBackArgument1: n, Ajax_CallBackArgument2: r, Ajax_CallBackArgument3: i, Ajax_CallBackArgument4: o, Ajax_CallBackArgument5: a }, Jback: e })
            },
            sendSmsLoginCode: function(e, t, n, r) { ajax.getAjax({ Jurl: "http://service" + site_domain + "/Service/Manager.msi", JdataType: "script", Jtype: "get", Jmethod: "sendSmsLoginCodeResult", Jparams: { Ajax_CallBack: !0, Ajax_CallBackType: "Mtime.Service.Pages.ManagerService", Ajax_CallBackMethod: "SendSmsLoginCode", Ajax_CrossDomain: 1, Ajax_RequestUrl: "", t: (new Date).getTime(), Ajax_CallBackArgument0: t, Ajax_CallBackArgument1: n, Ajax_CallBackArgument2: r }, Jback: e }) },
            signInBySms: function(e, t, n, r, i, o, a, s) {
                o = !1;
                ajax.getAjax({ Jurl: "http://service" + site_domain + "/Service/Manager.msi", JdataType: "script", Jtype: "get", Jmethod: "signInBySmsResult", Jparams: { Ajax_CallBack: !0, Ajax_CallBackType: "Mtime.Service.Pages.ManagerService", Ajax_CallBackMethod: "SignInBySms", Ajax_CrossDomain: 1, Ajax_RequestUrl: "", t: (new Date).getTime(), Ajax_CallBackArgument0: t, Ajax_CallBackArgument1: n, Ajax_CallBackArgument2: r, Ajax_CallBackArgument3: i, Ajax_CallBackArgument4: o, Ajax_CallBackArgument5: a, Ajax_CallBackArgument6: s }, Jback: e })
            },
            telLogin: function(e, n) { var r = '                <ul>                  <li>                    <input type="text" value="' + t.PHONE_PLACEHOLDER + '" class="tip" data-tel="phone">                    <i class="iusername ico-false"></i>                  </li>                  <li>                    <input type="text" value="' + t.VCODE_PLACEHOLDER + '" class="codeInput" data-tel="code">                    <span class="imgCodeBox">                      <img data-tel="codeImg" width="90" height="40" src="" style="cursor:pointer" class="v_m mr6">                    </span>                  </li>                  <li>                    <input type="text" value="' + t.SMS_PLACEHOLDER + '" data-tel="password">                    <span class="getNewCode">获取验证码</span>                  </li>                </ul>                <p class="loginWord ">' + t.SMS_TIP + '</p>                <p class="wrongmsg"></p>                <p class="loginbtn"><a href="javascript:;" class="btnblue" data-tel="login">登录</a></p>                <p class="loginmes">                <a class="mailLogin" href="javascript:;">账号密码登录</a>                <a href="javascript:;" class="regist" data-login="regist">立即注册</a>                </p>      '; return r },
            emailLogin: function(e, n) { return h = '          <ul>            <li>              <input type="text" value="' + n + '" class="tip" data-login="mail">              <i class="iusername ico-false"></i>            </li>            <li>              <input type="password" placeholder="' + t.PASSWORD_PLACEHOLDER + '" data-login="password">              <i class="ipassword ico-false"></i>            </li>            <li class="codewrap" data-login="code-out" style="display:' + e + '">              <input maxlength="4" type="text" placeholder="' + t.VCODE_PLACEHOLDER + '"  value="" data-login="captcha" style="width:100px">              <i class="icode ico-false"></i>              <p class="codetxt" data-login="refresh-out" style="display:' + e + '">                <span data-login="refresh">                  <img data-login="codeImg" width="90" height="40" src="" style="cursor:pointer" class="v_m mr6">                </span>              </p>            </li>          </ul>          <p class="lostpassword">          <span class="errorTips" style="display:none">' + t.errorAccountLoginMessage + '</span>          <a href="http://my.mtime.com/member/forget_password/" target="_blank" class="fr">忘记密码？</a></p>          <p class="loginbtn"><a href="javascript:;" class="btnblue" data-login="login">登录</a></p>          <p class="loginmes">          <a class="mesLogin" href="javascript:;">短信验证码登录</a>          <a href="javascript:;" class="regist" data-login="regist">立即注册</a>          </p>' },
            loginHtml: function(n) {
                var r = n ? "block" : "none",
                    i = "";
                i = headerNameSpace.userName ? headerNameSpace.userName : e.cookie("loginuser") ? e.cookie("loginuser") : t.ACCOUNT_PLACEHOLDER;
                var o = this.telLogin(r, i),
                    a = this.emailLogin(r, i),
                    s = this.bflag ? o : a,
                    l = '          <div class="new-login"><div class="m-popbox" data-login="login-out">            <a data-login="close" class="i-pop-close" href="javascript:;" title="关闭"></a>            <div class="headtip login-tip new-headtip" style="display:block">              <dl class="new-login-tool">                <dt><strong>为爱电影的人</strong> For people who love movies</dt>                <dd class="userlogin">                  ' + s + '</dd>              </dl>              <dl class="otherlogin">                <dd>                  <a href="https://passport.mtime.com/unitelogin/dispatch/weixin/web/" title="微信" class="ico-weixin"></a>                  <a href="https://passport.mtime.com/unitelogin/dispatch/qq/web/" title="QQ" class="ico-qq"></a>                  <a href="https://passport.mtime.com/unitelogin/dispatch/weibo/web/" title="新浪" class="ico-sina"></a>                </dd>              </dl>            </div>          </div></div>        ';
                return l
            },
            popTop: function() {
                var e = this,
                    t = e.obj.find('[data-login="login-out"]'),
                    n = t.height(),
                    r = window.screen.availHeight,
                    i = (r - n) / 2 - 30;
                i = i >= 0 ? i : 0, t.css("top", i)
            }
        };
        var o = { pop: !0, ph: "输入邮箱/手机号码", th: "输入手机号码", imgcode: "图片验证码", telcode: "短信验证码", ru: null, ce: null };
        r = e.extend(o, r), this.each(function() { new i(e(this), r) })
    }
}(jQuery),
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
function(e, t) {
    function n(e) {
        var t = e.length,
            n = le.type(e);
        return !le.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
    }

    function r(e) { var t = Te[e] = {}; return le.each(e.match(ue) || [], function(e, n) { t[n] = !0 }), t }

    function i(e, n, r, i) {
        if (le.acceptData(e)) {
            var o, a, s = le.expando,
                l = "string" == typeof n,
                c = e.nodeType,
                u = c ? le.cache : e,
                p = c ? e[s] : e[s] && s;
            if (p && u[p] && (i || u[p].data) || !l || r !== t) return p || (c ? e[s] = p = Z.pop() || le.guid++ : p = s), u[p] || (u[p] = {}, c || (u[p].toJSON = le.noop)), ("object" == typeof n || "function" == typeof n) && (i ? u[p] = le.extend(u[p], n) : u[p].data = le.extend(u[p].data, n)), o = u[p], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[le.camelCase(n)] = r), l ? (a = o[n], null == a && (a = o[le.camelCase(n)])) : a = o, a
        }
    }

    function o(e, t, n) {
        if (le.acceptData(e)) {
            var r, i, o, a = e.nodeType,
                l = a ? le.cache : e,
                c = a ? e[le.expando] : le.expando;
            if (l[c]) { if (t && (o = n ? l[c] : l[c].data)) { le.isArray(t) ? t = t.concat(le.map(t, le.camelCase)) : t in o ? t = [t] : (t = le.camelCase(t), t = t in o ? [t] : t.split(" ")); for (r = 0, i = t.length; i > r; r++) delete o[t[r]]; if (!(n ? s : le.isEmptyObject)(o)) return }(n || (delete l[c].data, s(l[c]))) && (a ? le.cleanData([e], !0) : le.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null) }
        }
    }

    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Ne, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try { r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : ke.test(r) ? le.parseJSON(r) : r) } catch (o) {}
                le.data(e, n, r)
            } else r = t
        }
        return r
    }

    function s(e) {
        var t;
        for (t in e)
            if (("data" !== t || !le.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function l() { return !0 }

    function c() { return !1 }

    function u(e, t) { do e = e[t]; while (e && 1 !== e.nodeType); return e }

    function p(e, t, n) {
        if (t = t || 0, le.isFunction(t)) return le.grep(e, function(e, r) { var i = !!t.call(e, r, e); return i === n });
        if (t.nodeType) return le.grep(e, function(e) { return e === t === n });
        if ("string" == typeof t) {
            var r = le.grep(e, function(e) { return 1 === e.nodeType });
            if (We.test(t)) return le.filter(t, r, !n);
            t = le.filter(t, r)
        }
        return le.grep(e, function(e) { return le.inArray(e, t) >= 0 === n })
    }

    function f(e) {
        var t = ze.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function d(e, t) { return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t)) }

    function h(e) { var t = e.getAttributeNode("type"); return e.type = (t && t.specified) + "/" + e.type, e }

    function g(e) { var t = it.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function m(e, t) { for (var n, r = 0; null != (n = e[r]); r++) le._data(n, "globalEval", !t || le._data(t[r], "globalEval")) }

    function y(e, t) {
        if (1 === t.nodeType && le.hasData(e)) {
            var n, r, i, o = le._data(e),
                a = le._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) le.event.add(t, n, s[n][r])
            }
            a.data && (a.data = le.extend({}, a.data))
        }
    }

    function v(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !le.support.noCloneEvent && t[le.expando]) {
                i = le._data(t);
                for (r in i.events) le.removeEvent(t, r, i.handle);
                t.removeAttribute(le.expando)
            }
            "script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), le.support.html5Clone && e.innerHTML && !le.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function b(e, n) {
        var r, i, o = 0,
            a = typeof e.getElementsByTagName !== V ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== V ? e.querySelectorAll(n || "*") : t;
        if (!a)
            for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) !n || le.nodeName(i, n) ? a.push(i) : le.merge(a, b(i, n));
        return n === t || n && le.nodeName(e, n) ? le.merge([e], a) : a
    }

    function x(e) { tt.test(e.type) && (e.defaultChecked = e.checked) }

    function w(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = kt.length; i--;)
            if (t = kt[i] + n, t in e) return t;
        return r
    }

    function C(e, t) { return e = t || e, "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e) }

    function T(e, t) { for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = le._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && C(r) && (o[a] = le._data(r, "olddisplay", j(r.nodeName)))) : o[a] || (i = C(r), (n && "none" !== n || !i) && le._data(r, "olddisplay", i ? n : le.css(r, "display")))); for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none")); return e }

    function k(e, t, n) { var r = yt.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t }

    function N(e, t, n, r, i) { for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += le.css(e, n + Tt[o], !0, i)), r ? ("content" === n && (a -= le.css(e, "padding" + Tt[o], !0, i)), "margin" !== n && (a -= le.css(e, "border" + Tt[o] + "Width", !0, i))) : (a += le.css(e, "padding" + Tt[o], !0, i), "padding" !== n && (a += le.css(e, "border" + Tt[o] + "Width", !0, i))); return a }

    function A(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = ut(e),
            a = le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = pt(e, t, o), (0 > i || null == i) && (i = e.style[t]), vt.test(i)) return i;
            r = a && (le.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + N(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function j(e) {
        var t = X,
            n = xt[e];
        return n || (n = E(e, t), "none" !== n && n || (ct = (ct || le("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ct[0].contentWindow || ct[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = E(e, t), ct.detach()), xt[e] = n), n
    }

    function E(e, t) {
        var n = le(t.createElement(e)).appendTo(t.body),
            r = le.css(n[0], "display");
        return n.remove(), r
    }

    function _(e, t, n, r) {
        var i;
        if (le.isArray(t)) le.each(t, function(t, i) { n || At.test(e) ? r(e, i) : _(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) });
        else if (n || "object" !== le.type(t)) r(e, t);
        else
            for (i in t) _(e + "[" + i + "]", t[i], n, r)
    }

    function S(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(ue) || [];
            if (le.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function D(e, n, r, i) {
        function o(l) { var c; return a[l] = !0, le.each(e[l] || [], function(e, l) { var u = l(n, r, i); return "string" != typeof u || s || a[u] ? s ? !(c = u) : t : (n.dataTypes.unshift(u), o(u), !1) }), c }
        var a = {},
            s = e === Wt;
        return o(n.dataTypes[0]) || !a["*"] && o("*")
    }

    function L(e, n) { var r, i, o = le.ajaxSettings.flatOptions || {}; for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]); return r && le.extend(!0, e, r), e }

    function O(e, n, r) {
        var i, o, a, s, l = e.contents,
            c = e.dataTypes,
            u = e.responseFields;
        for (s in u) s in r && (n[u[s]] = r[s]);
        for (;
            "*" === c[0];) c.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in l)
                if (l[s] && l[s].test(o)) { c.unshift(s); break }
        if (c[0] in r) a = c[0];
        else {
            for (s in r) {
                if (!c[0] || e.converters[s + " " + c[0]]) { a = s; break }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== c[0] && c.unshift(a), r[a]) : t
    }

    function M(e, t) {
        var n, r, i, o, a = {},
            s = 0,
            l = e.dataTypes.slice(),
            c = l[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), l[1])
            for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
        for (; r = l[++s];)
            if ("*" !== r) {
                if ("*" !== c && c !== r) {
                    if (i = a[c + " " + r] || a["* " + r], !i)
                        for (n in a)
                            if (o = n.split(" "), o[1] === r && (i = a[c + " " + o[0]] || a["* " + o[0]])) { i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], l.splice(s--, 0, r)); break }
                    if (i !== !0)
                        if (i && e["throws"]) t = i(t);
                        else try { t = i(t) } catch (u) { return { state: "parsererror", error: i ? u : "No conversion from " + c + " to " + r } }
                }
                c = r
            }
        return { state: "success", data: t }
    }

    function H() { try { return new e.XMLHttpRequest } catch (t) {} }

    function P() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }

    function R() { return setTimeout(function() { Qt = t }), Qt = le.now() }

    function I(e, t) {
        le.each(t, function(t, n) {
            for (var r = (on[t] || []).concat(on["*"]), i = 0, o = r.length; o > i; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function F(e, t, n) {
        var r, i, o = 0,
            a = rn.length,
            s = le.Deferred().always(function() { delete l.elem }),
            l = function() { if (i) return !1; for (var t = Qt || R(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o); return s.notifyWith(e, [c, o, n]), 1 > o && l ? n : (s.resolveWith(e, [c]), !1) },
            c = s.promise({
                elem: e,
                props: le.extend({}, t),
                opts: le.extend(!0, { specialEasing: {} }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Qt || R(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) { var r = le.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing); return c.tweens.push(r), r },
                stop: function(t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) c.tweens[n].run(1);
                    return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (B(u, c.opts.specialEasing); a > o; o++)
            if (r = rn[o].call(c, e, u, c.opts)) return r;
        return I(c, u), le.isFunction(c.opts.start) && c.opts.start.call(e, c), le.fx.timer(le.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function B(e, t) {
        var n, r, i, o, a;
        for (i in e)
            if (r = le.camelCase(i), o = t[r], n = e[i], le.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = le.cssHooks[r], a && "expand" in a) { n = a.expand(n), delete e[r]; for (i in n) i in e || (e[i] = n[i], t[i] = o) } else t[r] = o
    }

    function q(e, t, n) {
        var r, i, o, a, s, l, c, u, p, f = this,
            d = e.style,
            h = {},
            g = [],
            m = e.nodeType && C(e);
        n.queue || (u = le._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, p = u.empty.fire, u.empty.fire = function() { u.unqueued || p() }), u.unqueued++, f.always(function() { f.always(function() { u.unqueued--, le.queue(e, "fx").length || u.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === le.css(e, "display") && "none" === le.css(e, "float") && (le.support.inlineBlockNeedsLayout && "inline" !== j(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", le.support.shrinkWrapBlocks || f.always(function() { d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2] }));
        for (i in t)
            if (a = t[i], en.exec(a)) {
                if (delete t[i], l = l || "toggle" === a, a === (m ? "hide" : "show")) continue;
                g.push(i)
            }
        if (o = g.length) {
            s = le._data(e, "fxshow") || le._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), l && (s.hidden = !m), m ? le(e).show() : f.done(function() { le(e).hide() }), f.done(function() {
                var t;
                le._removeData(e, "fxshow");
                for (t in h) le.style(e, t, h[t])
            });
            for (i = 0; o > i; i++) r = g[i], c = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || le.style(e, r), r in s || (s[r] = c.start, m && (c.end = c.start, c.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function $(e, t, n, r, i) { return new $.prototype.init(e, t, n, r, i) }

    function W(e, t) {
        var n, r = { height: e },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Tt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function U(e) { return le.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow) }
    var J, z, V = typeof t,
        X = e.document,
        Y = e.location,
        G = e.jQuery,
        K = e.$,
        Q = {},
        Z = [],
        ee = "1.9.1",
        te = Z.concat,
        ne = Z.push,
        re = Z.slice,
        ie = Z.indexOf,
        oe = Q.toString,
        ae = Q.hasOwnProperty,
        se = ee.trim,
        le = function(e, t) { return new le.fn.init(e, t, z) },
        ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ue = /\S+/g,
        pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        fe = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        he = /^[\],:{}\s]*$/,
        ge = /(?:^|:|,)(?:\s*\[)+/g,
        me = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ye = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        ve = /^-ms-/,
        be = /-([\da-z])/gi,
        xe = function(e, t) { return t.toUpperCase() },
        we = function(e) {
            (X.addEventListener || "load" === e.type || "complete" === X.readyState) && (Ce(), le.ready())
        },
        Ce = function() { X.addEventListener ? (X.removeEventListener("DOMContentLoaded", we, !1), e.removeEventListener("load", we, !1)) : (X.detachEvent("onreadystatechange", we), e.detachEvent("onload", we)) };
    le.fn = le.prototype = {
        jquery: ee,
        constructor: le,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : fe.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof le ? n[0] : n, le.merge(this, le.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : X, !0)), de.test(i[1]) && le.isPlainObject(n))
                        for (i in n) le.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = X.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = X, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : le.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), le.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function() { return this.length },
        toArray: function() { return re.call(this) },
        get: function(e) { return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e] },
        pushStack: function(e) { var t = le.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t },
        each: function(e, t) { return le.each(this, e, t) },
        ready: function(e) { return le.ready.promise().done(e), this },
        slice: function() { return this.pushStack(re.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) { return this.pushStack(le.map(this, function(t, n) { return e.call(t, n, t) })) },
        end: function() { return this.prevObject || this.constructor(null) },
        push: ne,
        sort: [].sort,
        splice: [].splice
    }, le.fn.init.prototype = le.fn, le.extend = le.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
            l = 1,
            c = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[1] || {}, l = 2), "object" == typeof s || le.isFunction(s) || (s = {}), c === l && (s = this, --l); c > l; l++)
            if (null != (o = arguments[l]))
                for (i in o) e = s[i], r = o[i], s !== r && (u && r && (le.isPlainObject(r) || (n = le.isArray(r))) ? (n ? (n = !1, a = e && le.isArray(e) ? e : []) : a = e && le.isPlainObject(e) ? e : {}, s[i] = le.extend(u, a, r)) : r !== t && (s[i] = r));
        return s
    }, le.extend({
        noConflict: function(t) { return e.$ === le && (e.$ = K), t && e.jQuery === le && (e.jQuery = G), le },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) { e ? le.readyWait++ : le.ready(!0) },
        ready: function(e) {
            if (e === !0 ? !--le.readyWait : !le.isReady) {
                if (!X.body) return setTimeout(le.ready);
                le.isReady = !0, e !== !0 && --le.readyWait > 0 || (J.resolveWith(X, [le]), le.fn.trigger && le(X).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) { return "function" === le.type(e) },
        isArray: Array.isArray || function(e) { return "array" === le.type(e) },
        isWindow: function(e) { return null != e && e == e.window },
        isNumeric: function(e) { return !isNaN(parseFloat(e)) && isFinite(e) },
        type: function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[oe.call(e)] || "object" : typeof e },
        isPlainObject: function(e) { if (!e || "object" !== le.type(e) || e.nodeType || le.isWindow(e)) return !1; try { if (e.constructor && !ae.call(e, "constructor") && !ae.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (n) { return !1 } var r; for (r in e); return r === t || ae.call(e, r) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        error: function(e) { throw Error(e) },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || X;
            var r = de.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = le.buildFragment([e], t, i), i && le(i).remove(), le.merge([], r.childNodes))
        },
        parseJSON: function(n) { return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = le.trim(n), n && he.test(n.replace(me, "@").replace(ye, "]").replace(ge, ""))) ? Function("return " + n)() : (le.error("Invalid JSON: " + n), t) },
        parseXML: function(n) { var r, i; if (!n || "string" != typeof n) return null; try { e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n)) } catch (o) { r = t } return r && r.documentElement && !r.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + n), r },
        noop: function() {},
        globalEval: function(t) { t && le.trim(t) && (e.execScript || function(t) { e.eval.call(e, t) })(t) },
        camelCase: function(e) { return e.replace(ve, "ms-").replace(be, xe) },
        nodeName: function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() },
        each: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        },
        trim: se && !se.call("\ufeff ") ? function(e) { return null == e ? "" : se.call(e) } : function(e) { return null == e ? "" : (e + "").replace(pe, "") },
        makeArray: function(e, t) { var r = t || []; return null != e && (n(Object(e)) ? le.merge(r, "string" == typeof e ? [e] : e) : ne.call(r, e)), r },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (ie) return ie.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; a > o; o++) i = t(e[o], o, r), null != i && (l[l.length] = i);
            else
                for (o in e) i = t(e[o], o, r), null != i && (l[l.length] = i);
            return te.apply([], l)
        },
        guid: 1,
        proxy: function(e, n) { var r, i, o; return "string" == typeof n && (o = e[n], n = e, e = o), le.isFunction(e) ? (r = re.call(arguments, 2), i = function() { return e.apply(n || this, r.concat(re.call(arguments))) }, i.guid = e.guid = e.guid || le.guid++, i) : t },
        access: function(e, n, r, i, o, a, s) {
            var l = 0,
                c = e.length,
                u = null == r;
            if ("object" === le.type(r)) { o = !0; for (l in r) le.access(e, n, l, r[l], !0, a, s) } else if (i !== t && (o = !0, le.isFunction(i) || (s = !0), u && (s ? (n.call(e, i), n = null) : (u = n, n = function(e, t, n) { return u.call(le(e), n) })), n))
                for (; c > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : u ? n.call(e) : c ? n(e[0], r) : a
        },
        now: function() { return (new Date).getTime() }
    }), le.ready.promise = function(t) {
        if (!J)
            if (J = le.Deferred(), "complete" === X.readyState) setTimeout(le.ready);
            else if (X.addEventListener) X.addEventListener("DOMContentLoaded", we, !1), e.addEventListener("load", we, !1);
        else {
            X.attachEvent("onreadystatechange", we), e.attachEvent("onload", we);
            var n = !1;
            try { n = null == e.frameElement && X.documentElement } catch (r) {}
            n && n.doScroll && function i() {
                if (!le.isReady) {
                    try { n.doScroll("left") } catch (e) { return setTimeout(i, 50) }
                    Ce(), le.ready()
                }
            }()
        }
        return J.promise(t)
    }, le.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) { Q["[object " + t + "]"] = t.toLowerCase() }), z = le(X);
    var Te = {};
    le.Callbacks = function(e) {
        e = "string" == typeof e ? Te[e] || r(e) : le.extend({}, e);
        var n, i, o, a, s, l, c = [],
            u = !e.once && [],
            p = function(t) {
                for (i = e.memory && t, o = !0, s = l || 0, l = 0, a = c.length, n = !0; c && a > s; s++)
                    if (c[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) { i = !1; break }
                n = !1, c && (u ? u.length && p(u.shift()) : i ? c = [] : f.disable())
            },
            f = {
                add: function() { if (c) { var t = c.length;! function r(t) { le.each(t, function(t, n) { var i = le.type(n); "function" === i ? e.unique && f.has(n) || c.push(n) : n && n.length && "string" !== i && r(n) }) }(arguments), n ? a = c.length : i && (l = t, p(i)) } return this },
                remove: function() {
                    return c && le.each(arguments, function(e, t) {
                        for (var r;
                            (r = le.inArray(t, c, r)) > -1;) c.splice(r, 1), n && (a >= r && a--, s >= r && s--)
                    }), this
                },
                has: function(e) { return e ? le.inArray(e, c) > -1 : !(!c || !c.length) },
                empty: function() { return c = [], this },
                disable: function() { return c = u = i = t, this },
                disabled: function() { return !c },
                lock: function() { return u = t, i || f.disable(), this },
                locked: function() { return !u },
                fireWith: function(e, t) { return t = t || [], t = [e, t.slice ? t.slice() : t], !c || o && !u || (n ? u.push(t) : p(t)), this },
                fire: function() { return f.fireWith(this, arguments), this },
                fired: function() { return !!o }
            };
        return f
    }, le.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", le.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", le.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", le.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() { return n },
                    always: function() { return i.done(arguments).fail(arguments), this },
                    then: function() {
                        var e = arguments;
                        return le.Deferred(function(n) {
                            le.each(t, function(t, o) {
                                var a = o[0],
                                    s = le.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && le.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) { return null != e ? le.extend(e, r) : r }
                },
                i = {};
            return r.pipe = r.then, le.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() { return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = re.call(arguments),
                a = o.length,
                s = 1 !== a || e && le.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : le.Deferred(),
                c = function(e, n, r) { return function(i) { n[e] = this, r[e] = arguments.length > 1 ? re.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r) } };
            if (a > 1)
                for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && le.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(l.reject).progress(c(i, n, t)) : --s;
            return s || l.resolveWith(r, o), l.promise()
        }
    }), le.support = function() {
        var t, n, r, i, o, a, s, l, c, u, p = X.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        o = X.createElement("select"), s = o.appendChild(X.createElement("option")), i = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = { getSetAttribute: "t" !== p.className, leadingWhitespace: 3 === p.firstChild.nodeType, tbody: !p.getElementsByTagName("tbody").length, htmlSerialize: !!p.getElementsByTagName("link").length, style: /top/.test(r.getAttribute("style")), hrefNormalized: "/a" === r.getAttribute("href"), opacity: /^0.5/.test(r.style.opacity), cssFloat: !!r.style.cssFloat, checkOn: !!i.value, optSelected: s.selected, enctype: !!X.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== X.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === X.compatMode, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 }, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
        try { delete p.test } catch (f) { t.deleteExpando = !1 }
        i = X.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = X.createDocumentFragment(), a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() { t.noCloneEvent = !1 }), p.cloneNode(!0).click());
        for (u in { submit: !0, change: !0, focusin: !0 }) p.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        return p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === p.style.backgroundClip, le(function() {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = X.getElementsByTagName("body")[0];
            a && (n = X.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = p.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === p.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || { width: "4px" }).width, r = p.appendChild(X.createElement("div")), r.style.cssText = p.style.cssText = o, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== V && (p.innerHTML = "", p.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = i = r = null)
        }), n = o = a = s = r = i = null, t
    }();
    var ke = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Ne = /([A-Z])/g;
    le.extend({ cache: {}, expando: "jQuery" + (ee + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function(e) { return e = e.nodeType ? le.cache[e[le.expando]] : e[le.expando], !!e && !s(e) }, data: function(e, t, n) { return i(e, t, n) }, removeData: function(e, t) { return o(e, t) }, _data: function(e, t, n) { return i(e, t, n, !0) }, _removeData: function(e, t) { return o(e, t, !0) }, acceptData: function(e) { if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1; var t = e.nodeName && le.noData[e.nodeName.toLowerCase()]; return !t || t !== !0 && e.getAttribute("classid") === t } }), le.fn.extend({
        data: function(e, n) {
            var r, i, o = this[0],
                s = 0,
                l = null;
            if (e === t) {
                if (this.length && (l = le.data(o), 1 === o.nodeType && !le._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; r.length > s; s++) i = r[s].name, i.indexOf("data-") || (i = le.camelCase(i.slice(5)), a(o, i, l[i]));
                    le._data(o, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof e ? this.each(function() { le.data(this, e) }) : le.access(this, function(n) { return n === t ? o ? a(o, e, le.data(o, e)) : null : (this.each(function() { le.data(this, e, n) }), t) }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function(e) { return this.each(function() { le.removeData(this, e) }) }
    }), le.extend({
        queue: function(e, n, r) { var i; return e ? (n = (n || "fx") + "queue", i = le._data(e, n), r && (!i || le.isArray(r) ? i = le._data(e, n, le.makeArray(r)) : i.push(r)), i || []) : t },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = le.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = le._queueHooks(e, t),
                a = function() { le.dequeue(e, t) };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return le._data(e, n) || le._data(e, n, { empty: le.Callbacks("once memory").add(function() { le._removeData(e, t + "queue"), le._removeData(e, n) }) }) }
    }), le.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? le.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = le.queue(this, e, n);
                le._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && le.dequeue(this, e)
            })
        },
        dequeue: function(e) { return this.each(function() { le.dequeue(this, e) }) },
        delay: function(e, t) {
            return e = le.fx ? le.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() { clearTimeout(r) }
            })
        },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, n) {
            var r, i = 1,
                o = le.Deferred(),
                a = this,
                s = this.length,
                l = function() {--i || o.resolveWith(a, [a]) };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = le._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var Ae, je, Ee = /[\t\r\n]/g,
        _e = /\r/g,
        Se = /^(?:input|select|textarea|button|object)$/i,
        De = /^(?:a|area)$/i,
        Le = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        Oe = /^(?:checked|selected)$/i,
        Me = le.support.getSetAttribute,
        He = le.support.input;
    le.fn.extend({
        attr: function(e, t) { return le.access(this, le.attr, e, t, arguments.length > 1) },
        removeAttr: function(e) { return this.each(function() { le.removeAttr(this, e) }) },
        prop: function(e, t) { return le.access(this, le.prop, e, t, arguments.length > 1) },
        removeProp: function(e) { return e = le.propFix[e] || e, this.each(function() { try { this[e] = t, delete this[e] } catch (n) {} }) },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (le.isFunction(e)) return this.each(function(t) { le(this).addClass(e.call(this, t, this.className)) });
            if (l)
                for (t = (e || "").match(ue) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ee, " ") : " ")) {
                        for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = le.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (le.isFunction(e)) return this.each(function(t) { le(this).removeClass(e.call(this, t, this.className)) });
            if (l)
                for (t = (e || "").match(ue) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ee, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        n.className = e ? le.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return le.isFunction(e) ? this.each(function(n) { le(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function() {
                if ("string" === n)
                    for (var i, o = 0, a = le(this), s = t, l = e.match(ue) || []; i = l[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
                else(n === V || "boolean" === n) && (this.className && le._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : le._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ee, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            return arguments.length ? (i = le.isFunction(e), this.each(function(n) {
                var o, a = le(this);
                1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : le.isArray(o) && (o = le.map(o, function(e) { return null == e ? "" : e + "" })), r = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
            })) : o ? (r = le.valHooks[o.type] || le.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(_e, "") : null == n ? "" : n)) : void 0
        }
    }), le.extend({
        valHooks: {
            option: { get: function(e) { var t = e.attributes.value; return !t || t.specified ? e.value : e.text } },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (le.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && le.nodeName(n.parentNode, "optgroup"))) {
                            if (t = le(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) { var n = le.makeArray(t); return le(e).find("option").each(function() { this.selected = le.inArray(le(this).val(), n) >= 0 }), n.length || (e.selectedIndex = -1), n }
            }
        },
        attr: function(e, n, r) { var i, o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === V ? le.prop(e, n, r) : (o = 1 !== s || !le.isXMLDoc(e), o && (n = n.toLowerCase(), i = le.attrHooks[n] || (Le.test(n) ? je : Ae)), r === t ? i && o && "get" in i && null !== (a = i.get(e, n)) ? a : (typeof e.getAttribute !== V && (a = e.getAttribute(n)), null == a ? t : a) : null !== r ? i && o && "set" in i && (a = i.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (le.removeAttr(e, n), t)) },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(ue);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = le.propFix[n] || n, Le.test(n) ? !Me && Oe.test(n) ? e[le.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : le.attr(e, n, ""), e.removeAttribute(Me ? n : r)
        },
        attrHooks: { type: { set: function(e, t) { if (!le.support.radioValue && "radio" === t && le.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
        prop: function(e, n, r) { var i, o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !le.isXMLDoc(e), a && (n = le.propFix[n] || n, o = le.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n] },
        propHooks: { tabIndex: { get: function(e) { var n = e.getAttributeNode("tabindex"); return n && n.specified ? parseInt(n.value, 10) : Se.test(e.nodeName) || De.test(e.nodeName) && e.href ? 0 : t } } }
    }), je = {
        get: function(e, n) {
            var r = le.prop(e, n),
                i = "boolean" == typeof r && e.getAttribute(n),
                o = "boolean" == typeof r ? He && Me ? null != i : Oe.test(n) ? e[le.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t;
        },
        set: function(e, t, n) { return t === !1 ? le.removeAttr(e, n) : He && Me || !Oe.test(n) ? e.setAttribute(!Me && le.propFix[n] || n, n) : e[le.camelCase("default-" + n)] = e[n] = !0, n }
    }, He && Me || (le.attrHooks.value = { get: function(e, n) { var r = e.getAttributeNode(n); return le.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t }, set: function(e, n, r) { return le.nodeName(e, "input") ? (e.defaultValue = n, t) : Ae && Ae.set(e, n, r) } }), Me || (Ae = le.valHooks.button = { get: function(e, n) { var r = e.getAttributeNode(n); return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t }, set: function(e, n, r) { var i = e.getAttributeNode(r); return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t } }, le.attrHooks.contenteditable = { get: Ae.get, set: function(e, t, n) { Ae.set(e, "" !== t && t, n) } }, le.each(["width", "height"], function(e, n) { le.attrHooks[n] = le.extend(le.attrHooks[n], { set: function(e, r) { return "" === r ? (e.setAttribute(n, "auto"), r) : t } }) })), le.support.hrefNormalized || (le.each(["href", "src", "width", "height"], function(e, n) { le.attrHooks[n] = le.extend(le.attrHooks[n], { get: function(e) { var r = e.getAttribute(n, 2); return null == r ? t : r } }) }), le.each(["href", "src"], function(e, t) { le.propHooks[t] = { get: function(e) { return e.getAttribute(t, 4) } } })), le.support.style || (le.attrHooks.style = { get: function(e) { return e.style.cssText || t }, set: function(e, t) { return e.style.cssText = t + "" } }), le.support.optSelected || (le.propHooks.selected = le.extend(le.propHooks.selected, { get: function(e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } })), le.support.enctype || (le.propFix.enctype = "encoding"), le.support.checkOn || le.each(["radio", "checkbox"], function() { le.valHooks[this] = { get: function(e) { return null === e.getAttribute("value") ? "on" : e.value } } }), le.each(["radio", "checkbox"], function() { le.valHooks[this] = le.extend(le.valHooks[this], { set: function(e, n) { return le.isArray(n) ? e.checked = le.inArray(le(e).val(), n) >= 0 : t } }) });
    var Pe = /^(?:input|select|textarea)$/i,
        Re = /^key/,
        Ie = /^(?:mouse|contextmenu)|click/,
        Fe = /^(?:focusinfocus|focusoutblur)$/,
        Be = /^([^.]*)(?:\.(.+)|)$/;
    le.event = {
            global: {},
            add: function(e, n, r, i, o) {
                var a, s, l, c, u, p, f, d, h, g, m, y = le._data(e);
                if (y) {
                    for (r.handler && (c = r, r = c.handler, o = c.selector), r.guid || (r.guid = le.guid++), (s = y.events) || (s = y.events = {}), (p = y.handle) || (p = y.handle = function(e) { return typeof le === V || e && le.event.triggered === e.type ? t : le.event.dispatch.apply(p.elem, arguments) }, p.elem = e), n = (n || "").match(ue) || [""], l = n.length; l--;) a = Be.exec(n[l]) || [], h = m = a[1], g = (a[2] || "").split(".").sort(), u = le.event.special[h] || {}, h = (o ? u.delegateType : u.bindType) || h, u = le.event.special[h] || {}, f = le.extend({ type: h, origType: m, data: i, handler: r, guid: r.guid, selector: o, needsContext: o && le.expr.match.needsContext.test(o), namespace: g.join(".") }, c), (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, u.setup && u.setup.call(e, i, g, p) !== !1 || (e.addEventListener ? e.addEventListener(h, p, !1) : e.attachEvent && e.attachEvent("on" + h, p))), u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, f) : d.push(f), le.event.global[h] = !0;
                    e = null
                }
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, l, c, u, p, f, d, h, g, m = le.hasData(e) && le._data(e);
                if (m && (u = m.events)) {
                    for (t = (t || "").match(ue) || [""], c = t.length; c--;)
                        if (s = Be.exec(t[c]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                            for (p = le.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = u[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                            l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || le.removeEvent(e, d, m.handle), delete u[d])
                        } else
                            for (d in u) le.event.remove(e, d + t[c], n, r, !0);
                    le.isEmptyObject(u) && (delete m.handle, le._removeData(e, "events"))
                }
            },
            trigger: function(n, r, i, o) {
                var a, s, l, c, u, p, f, d = [i || X],
                    h = ae.call(n, "type") ? n.type : n,
                    g = ae.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = p = i = i || X, 3 !== i.nodeType && 8 !== i.nodeType && !Fe.test(h + le.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), s = 0 > h.indexOf(":") && "on" + h, n = n[le.expando] ? n : new le.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : le.makeArray(r, [n]), u = le.event.special[h] || {}, o || !u.trigger || u.trigger.apply(i, r) !== !1)) {
                    if (!o && !u.noBubble && !le.isWindow(i)) {
                        for (c = u.delegateType || h, Fe.test(c + h) || (l = l.parentNode); l; l = l.parentNode) d.push(l), p = l;
                        p === (i.ownerDocument || X) && d.push(p.defaultView || p.parentWindow || e)
                    }
                    for (f = 0;
                        (l = d[f++]) && !n.isPropagationStopped();) n.type = f > 1 ? c : u.bindType || h, a = (le._data(l, "events") || {})[n.type] && le._data(l, "handle"), a && a.apply(l, r), a = s && l[s], a && le.acceptData(l) && a.apply && a.apply(l, r) === !1 && n.preventDefault();
                    if (n.type = h, !(o || n.isDefaultPrevented() || u._default && u._default.apply(i.ownerDocument, r) !== !1 || "click" === h && le.nodeName(i, "a") || !le.acceptData(i) || !s || !i[h] || le.isWindow(i))) {
                        p = i[s], p && (i[s] = null), le.event.triggered = h;
                        try { i[h]() } catch (m) {}
                        le.event.triggered = t, p && (i[s] = p)
                    }
                    return n.result
                }
            },
            dispatch: function(e) {
                e = le.event.fix(e);
                var n, r, i, o, a, s = [],
                    l = re.call(arguments),
                    c = (le._data(this, "events") || {})[e.type] || [],
                    u = le.event.special[e.type] || {};
                if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (s = le.event.handlers.call(this, e, c), n = 0;
                        (o = s[n++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, a = 0;
                            (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((le.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, n) {
                var r, i, o, a, s = [],
                    l = n.delegateCount,
                    c = e.target;
                if (l && c.nodeType && (!e.button || "click" !== e.type))
                    for (; c != this; c = c.parentNode || this)
                        if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                            for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? le(r, this).index(c) >= 0 : le.find(r, this, null, [c]).length), o[r] && o.push(i);
                            o.length && s.push({ elem: c, handlers: o })
                        }
                return n.length > l && s.push({ elem: this, handlers: n.slice(l) }), s
            },
            fix: function(e) {
                if (e[le.expando]) return e;
                var t, n, r, i = e.type,
                    o = e,
                    a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = Ie.test(i) ? this.mouseHooks : Re.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new le.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || X), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, o, a = n.button,
                        s = n.fromElement;
                    return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || X, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            special: { load: { noBubble: !0 }, click: { trigger: function() { return le.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t } }, focus: { trigger: function() { if (this !== X.activeElement && this.focus) try { return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === X.activeElement && this.blur ? (this.blur(), !1) : t }, delegateType: "focusout" }, beforeunload: { postDispatch: function(e) { e.result !== t && (e.originalEvent.returnValue = e.result) } } },
            simulate: function(e, t, n, r) {
                var i = le.extend(new le.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
                r ? le.event.trigger(i, null, t) : le.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, le.removeEvent = X.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] === V && (e[r] = null), e.detachEvent(r, n))
        }, le.Event = function(e, n) { return this instanceof le.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, n && le.extend(this, n), this.timeStamp = e && e.timeStamp || le.now(), this[le.expando] = !0, t) : new le.Event(e, n) }, le.Event.prototype = {
            isDefaultPrevented: c,
            isPropagationStopped: c,
            isImmediatePropagationStopped: c,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() { this.isImmediatePropagationStopped = l, this.stopPropagation() }
        }, le.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(e, t) {
            le.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return (!i || i !== r && !le.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), le.support.submitBubbles || (le.event.special.submit = {
            setup: function() {
                return !le.nodeName(this, "form") && (le.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        r = le.nodeName(n, "input") || le.nodeName(n, "button") ? n.form : t;
                    r && !le._data(r, "submitBubbles") && (le.event.add(r, "submit._submit", function(e) { e._submit_bubble = !0 }), le._data(r, "submitBubbles", !0))
                }), t)
            },
            postDispatch: function(e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && le.event.simulate("submit", this.parentNode, e, !0)) },
            teardown: function() { return !le.nodeName(this, "form") && (le.event.remove(this, "._submit"), t) }
        }), le.support.changeBubbles || (le.event.special.change = {
            setup: function() {
                return Pe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (le.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), le.event.add(this, "click._change", function(e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), le.event.simulate("change", this, e, !0) })), !1) : (le.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Pe.test(t.nodeName) && !le._data(t, "changeBubbles") && (le.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || le.event.simulate("change", this.parentNode, e, !0) }), le._data(t, "changeBubbles", !0))
                }), t)
            },
            handle: function(e) { var n = e.target; return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t },
            teardown: function() { return le.event.remove(this, "._change"), !Pe.test(this.nodeName) }
        }), le.support.focusinBubbles || le.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
            var n = 0,
                r = function(e) { le.event.simulate(t, e.target, le.event.fix(e), !0) };
            le.event.special[t] = { setup: function() { 0 === n++ && X.addEventListener(e, r, !0) }, teardown: function() { 0 === --n && X.removeEventListener(e, r, !0) } }
        }), le.fn.extend({
            on: function(e, n, r, i, o) {
                var a, s;
                if ("object" == typeof e) { "string" != typeof n && (r = r || n, n = t); for (a in e) this.on(a, n, r, e[a], o); return this }
                if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = c;
                else if (!i) return this;
                return 1 === o && (s = i, i = function(e) { return le().off(e), s.apply(this, arguments) }, i.guid = s.guid || (s.guid = le.guid++)), this.each(function() { le.event.add(this, e, i, r, n) })
            },
            one: function(e, t, n, r) { return this.on(e, t, n, r, 1) },
            off: function(e, n, r) { var i, o; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, le(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (o in e) this.off(o, n, e[o]); return this } return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = c), this.each(function() { le.event.remove(this, e, r, n) }) },
            bind: function(e, t, n) { return this.on(e, null, t, n) },
            unbind: function(e, t) { return this.off(e, null, t) },
            delegate: function(e, t, n, r) { return this.on(t, e, n, r) },
            undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) },
            trigger: function(e, t) { return this.each(function() { le.event.trigger(e, t, this) }) },
            triggerHandler: function(e, n) { var r = this[0]; return r ? le.event.trigger(e, n, r, !0) : t }
        }),
        function(e, t) {
            function n(e) { return he.test(e + "") }

            function r() { var e, t = []; return e = function(n, r) { return t.push(n += " ") > k.cacheLength && delete e[t.shift()], e[n] = r } }

            function i(e) { return e[F] = !0, e }

            function o(e) { var t = D.createElement("div"); try { return e(t) } catch (n) { return !1 } finally { t = null } }

            function a(e, t, n, r) {
                var i, o, a, s, l, c, u, d, h, g;
                if ((t ? t.ownerDocument || t : B) !== D && S(t), t = t || D, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (s = t.nodeType) && 9 !== s) return [];
                if (!O && !r) {
                    if (i = ge.exec(e))
                        if (a = i[1]) { if (9 === s) { if (o = t.getElementById(a), !o || !o.parentNode) return n; if (o.id === a) return n.push(o), n } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && R(t, o) && o.id === a) return n.push(o), n } else { if (i[2]) return K.apply(n, Q.call(t.getElementsByTagName(e), 0)), n; if ((a = i[3]) && q.getByClassName && t.getElementsByClassName) return K.apply(n, Q.call(t.getElementsByClassName(a), 0)), n }
                    if (q.qsa && !M.test(e)) {
                        if (u = !0, d = F, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (c = p(e), (u = t.getAttribute("id")) ? d = u.replace(ve, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;) c[l] = d + f(c[l]);
                            h = de.test(e) && t.parentNode || t, g = c.join(",")
                        }
                        if (g) try { return K.apply(n, Q.call(h.querySelectorAll(g), 0)), n } catch (m) {} finally { u || t.removeAttribute("id") }
                    }
                }
                return x(e.replace(ae, "$1"), t, n, r)
            }

            function s(e, t) {
                var n = t && e,
                    r = n && (~t.sourceIndex || X) - (~e.sourceIndex || X);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function l(e) { return function(t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } }

            function c(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

            function u(e) { return i(function(t) { return t = +t, i(function(n, r) { for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) }

            function p(e, t) {
                var n, r, i, o, s, l, c, u = J[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (s = e, l = [], c = k.preFilter; s;) {
                    (!n || (r = se.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = ce.exec(s)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(ae, " ") }), s = s.slice(n.length));
                    for (o in k.filter) !(r = fe[o].exec(s)) || c[o] && !(r = c[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? a.error(e) : J(e, l).slice(0)
            }

            function f(e) { for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value; return r }

            function d(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === r,
                    o = W++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) return e(t, n, o)
                } : function(t, n, a) {
                    var s, l, c, u = $ + " " + o;
                    if (a) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || i)
                                if (c = t[F] || (t[F] = {}), (l = c[r]) && l[0] === u) { if ((s = l[1]) === !0 || s === T) return s === !0 } else if (l = c[r] = [u], l[1] = e(t, n, a) || T, l[1] === !0) return !0
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function g(e, t, n, r, i) { for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), c && t.push(s)); return a }

            function m(e, t, n, r, o, a) {
                return r && !r[F] && (r = m(r)), o && !o[F] && (o = m(o, a)), i(function(i, a, s, l) {
                    var c, u, p, f = [],
                        d = [],
                        h = a.length,
                        m = i || b(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !i && t ? m : g(m, f, e, s, l),
                        v = n ? o || (i ? e : h || r) ? [] : a : y;
                    if (n && n(y, v, s, l), r)
                        for (c = g(v, d), r(c, [], s, l), u = c.length; u--;)(p = c[u]) && (v[d[u]] = !(y[d[u]] = p));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (c = [], u = v.length; u--;)(p = v[u]) && c.push(y[u] = p);
                                o(null, v = [], c, l)
                            }
                            for (u = v.length; u--;)(p = v[u]) && (c = o ? Z.call(i, p) : f[u]) > -1 && (i[c] = !(a[c] = p))
                        }
                    } else v = g(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, l) : K.apply(a, v)
                })
            }

            function y(e) {
                for (var t, n, r, i = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, l = d(function(e) { return e === t }, a, !0), c = d(function(e) { return Z.call(t, e) > -1 }, a, !0), u = [function(e, n, r) { return !o && (r || n !== _) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r)) }]; i > s; s++)
                    if (n = k.relative[e[s].type]) u = [d(h(u), n)];
                    else {
                        if (n = k.filter[e[s].type].apply(null, e[s].matches), n[F]) { for (r = ++s; i > r && !k.relative[e[r].type]; r++); return m(s > 1 && h(u), s > 1 && f(e.slice(0, s - 1)).replace(ae, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e)) }
                        u.push(n)
                    }
                return h(u)
            }

            function v(e, t) {
                var n = 0,
                    r = t.length > 0,
                    o = e.length > 0,
                    s = function(i, s, l, c, u) {
                        var p, f, d, h = [],
                            m = 0,
                            y = "0",
                            v = i && [],
                            b = null != u,
                            x = _,
                            w = i || o && k.find.TAG("*", u && s.parentNode || s),
                            C = $ += null == x ? 1 : Math.random() || .1;
                        for (b && (_ = s !== D && s, T = n); null != (p = w[y]); y++) {
                            if (o && p) {
                                for (f = 0; d = e[f++];)
                                    if (d(p, s, l)) { c.push(p); break }
                                b && ($ = C, T = ++n)
                            }
                            r && ((p = !d && p) && m--, i && v.push(p))
                        }
                        if (m += y, r && y !== m) {
                            for (f = 0; d = t[f++];) d(v, h, s, l);
                            if (i) {
                                if (m > 0)
                                    for (; y--;) v[y] || h[y] || (h[y] = G.call(c));
                                h = g(h)
                            }
                            K.apply(c, h), b && !i && h.length > 0 && m + t.length > 1 && a.uniqueSort(c)
                        }
                        return b && ($ = C, _ = x), v
                    };
                return r ? i(s) : s
            }

            function b(e, t, n) { for (var r = 0, i = t.length; i > r; r++) a(e, t[r], n); return n }

            function x(e, t, n, r) {
                var i, o, a, s, l, c = p(e);
                if (!r && 1 === c.length) {
                    if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !O && k.relative[o[1].type]) {
                        if (t = k.find.ID(a.matches[0].replace(xe, we), t)[0], !t) return n;
                        e = e.slice(o.shift().value.length)
                    }
                    for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !k.relative[s = a.type]);)
                        if ((l = k.find[s]) && (r = l(a.matches[0].replace(xe, we), de.test(o[0].type) && t.parentNode || t))) { if (o.splice(i, 1), e = r.length && f(o), !e) return K.apply(n, Q.call(r, 0)), n; break }
                }
                return j(e, c)(r, t, O, n, de.test(e)), n
            }

            function w() {}
            var C, T, k, N, A, j, E, _, S, D, L, O, M, H, P, R, I, F = "sizzle" + -new Date,
                B = e.document,
                q = {},
                $ = 0,
                W = 0,
                U = r(),
                J = r(),
                z = r(),
                V = typeof t,
                X = 1 << 31,
                Y = [],
                G = Y.pop,
                K = Y.push,
                Q = Y.slice,
                Z = Y.indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                ee = "[\\x20\\t\\r\\n\\f]",
                te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ne = te.replace("w", "w#"),
                re = "([*^$|!~]?=)",
                ie = "\\[" + ee + "*(" + te + ")" + ee + "*(?:" + re + ee + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ne + ")|)|)" + ee + "*\\]",
                oe = ":(" + te + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ie.replace(3, 8) + ")*)|.*)\\)|)",
                ae = RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                se = RegExp("^" + ee + "*," + ee + "*"),
                ce = RegExp("^" + ee + "*([\\x20\\t\\r\\n\\f>+~])" + ee + "*"),
                ue = RegExp(oe),
                pe = RegExp("^" + ne + "$"),
                fe = { ID: RegExp("^#(" + te + ")"), CLASS: RegExp("^\\.(" + te + ")"), NAME: RegExp("^\\[name=['\"]?(" + te + ")['\"]?\\]"), TAG: RegExp("^(" + te.replace("w", "w*") + ")"), ATTR: RegExp("^" + ie), PSEUDO: RegExp("^" + oe), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"), needsContext: RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i") },
                de = /[\x20\t\r\n\f]*[+~]/,
                he = /^[^{]+\{\s*\[native code/,
                ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                me = /^(?:input|select|textarea|button)$/i,
                ye = /^h\d$/i,
                ve = /'|\\/g,
                be = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                xe = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                we = function(e, t) { var n = "0x" + t - 65536; return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n) };
            try { Q.call(B.documentElement.childNodes, 0)[0].nodeType } catch (Ce) { Q = function(e) { for (var t, n = []; t = this[e++];) n.push(t); return n } }
            A = a.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, S = a.setDocument = function(e) {
                var r = e ? e.ownerDocument || e : B;
                return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, L = r.documentElement, O = A(r), q.tagNameNoComments = o(function(e) { return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length }), q.attributes = o(function(e) { e.innerHTML = "<select></select>"; var t = typeof e.lastChild.getAttribute("multiple"); return "boolean" !== t && "string" !== t }), q.getByClassName = o(function(e) { return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) }), q.getByName = o(function(e) { e.id = F + 0, e.innerHTML = "<a name='" + F + "'></a><div name='" + F + "'></div>", L.insertBefore(e, L.firstChild); var t = r.getElementsByName && r.getElementsByName(F).length === 2 + r.getElementsByName(F + 0).length; return q.getIdNotName = !r.getElementById(F), L.removeChild(e), t }), k.attrHandle = o(function(e) { return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== V && "#" === e.firstChild.getAttribute("href") }) ? {} : { href: function(e) { return e.getAttribute("href", 2) }, type: function(e) { return e.getAttribute("type") } }, q.getIdNotName ? (k.find.ID = function(e, t) { if (typeof t.getElementById !== V && !O) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, k.filter.ID = function(e) { var t = e.replace(xe, we); return function(e) { return e.getAttribute("id") === t } }) : (k.find.ID = function(e, n) { if (typeof n.getElementById !== V && !O) { var r = n.getElementById(e); return r ? r.id === e || typeof r.getAttributeNode !== V && r.getAttributeNode("id").value === e ? [r] : t : [] } }, k.filter.ID = function(e) { var t = e.replace(xe, we); return function(e) { var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id"); return n && n.value === t } }), k.find.TAG = q.tagNameNoComments ? function(e, n) { return typeof n.getElementsByTagName !== V ? n.getElementsByTagName(e) : t } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) { for (; n = o[i++];) 1 === n.nodeType && r.push(n); return r }
                    return o
                }, k.find.NAME = q.getByName && function(e, n) { return typeof n.getElementsByName !== V ? n.getElementsByName(name) : t }, k.find.CLASS = q.getByClassName && function(e, n) { return typeof n.getElementsByClassName === V || O ? t : n.getElementsByClassName(e) }, H = [], M = [":focus"], (q.qsa = n(r.querySelectorAll)) && (o(function(e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || M.push("\\[" + ee + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || M.push(":checked") }), o(function(e) { e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && M.push("[*^$]=" + ee + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:") })), (q.matchesSelector = n(P = L.matchesSelector || L.mozMatchesSelector || L.webkitMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function(e) { q.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), H.push("!=", oe) }), M = RegExp(M.join("|")), H = RegExp(H.join("|")), R = n(L.contains) || L.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, I = L.compareDocumentPosition ? function(e, t) { var n; return e === t ? (E = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || R(B, e) ? -1 : t === r || R(B, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1 } : function(e, t) {
                    var n, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        l = [e],
                        c = [t];
                    if (e === t) return E = !0, 0;
                    if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0;
                    if (o === a) return s(e, t);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (n = t; n = n.parentNode;) c.unshift(n);
                    for (; l[i] === c[i];) i++;
                    return i ? s(l[i], c[i]) : l[i] === B ? -1 : c[i] === B ? 1 : 0
                }, E = !1, [0, 0].sort(I), q.detectDuplicates = E, D) : D
            }, a.matches = function(e, t) { return a(e, null, null, t) }, a.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== D && S(e), t = t.replace(be, "='$1']"), !(!q.matchesSelector || O || H && H.test(t) || M.test(t))) try { var n = P.call(e, t); if (n || q.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (r) {}
                return a(t, D, null, [e]).length > 0
            }, a.contains = function(e, t) { return (e.ownerDocument || e) !== D && S(e), R(e, t) }, a.attr = function(e, t) { var n; return (e.ownerDocument || e) !== D && S(e), O || (t = t.toLowerCase()), (n = k.attrHandle[t]) ? n(e) : O || q.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null }, a.error = function(e) { throw Error("Syntax error, unrecognized expression: " + e) }, a.uniqueSort = function(e) {
                var t, n = [],
                    r = 1,
                    i = 0;
                if (E = !q.detectDuplicates, e.sort(I), E) { for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r)); for (; i--;) e.splice(n[i], 1) }
                return e
            }, N = a.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += N(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                    for (; t = e[r]; r++) n += N(t);
                return n
            }, k = a.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(xe, we), e[3] = (e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[5] && e[2]; return fe.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ue.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { return "*" === e ? function() { return !0 } : (e = e.replace(xe, we).toLowerCase(), function(t) { return t.nodeName && t.nodeName.toLowerCase() === e }) },
                    CLASS: function(e) { var t = U[e + " "]; return t || (t = RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && U(e, function(e) { return t.test(e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "") }) },
                    ATTR: function(e, t, n) { return function(r) { var i = a.attr(r, e); return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-")) } },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) { return !!e.parentNode } : function(t, n, l) {
                            var c, u, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                v = !l && !s;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (p = t; p = p[g];)
                                            if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                    for (u = m[F] || (m[F] = {}), c = u[e] || [], d = c[0] === $ && c[1], f = c[0] === $ && c[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (f = d = 0) || h.pop();)
                                        if (1 === p.nodeType && ++f && p === t) { u[e] = [$, d, f]; break }
                                } else if (v && (c = (t[F] || (t[F] = {}))[e]) && c[0] === $) f = c[1];
                                else
                                    for (;
                                        (p = ++d && p && p[g] || (f = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++f || (v && ((p[F] || (p[F] = {}))[e] = [$, f]), p !== t)););
                                return f -= i, f === r || 0 === f % r && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) { var n, r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e); return r[F] ? r(t) : r.length > 1 ? (n = [e, e, "", t], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) { for (var i, o = r(e, t), a = o.length; a--;) i = Z.call(e, o[a]), e[i] = !(n[i] = o[a]) }) : function(e) { return r(e, 0, n) }) : r }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = j(e.replace(ae, "$1"));
                        return r[F] ? i(function(e, t, n, i) { for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, i, o) { return t[0] = e, r(t, null, o, n), !n.pop() }
                    }),
                    has: i(function(e) { return function(t) { return a(e, t).length > 0 } }),
                    contains: i(function(e) { return function(t) { return (t.textContent || t.innerText || N(t)).indexOf(e) > -1 } }),
                    lang: i(function(e) {
                        return pe.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = O ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                    root: function(e) { return e === L },
                    focus: function(e) { return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: function(e) { return e.disabled === !1 },
                    disabled: function(e) { return e.disabled === !0 },
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) { return !k.pseudos.empty(e) },
                    header: function(e) { return ye.test(e.nodeName) },
                    input: function(e) { return me.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type) },
                    first: u(function() { return [0] }),
                    last: u(function(e, t) { return [t - 1] }),
                    eq: u(function(e, t, n) { return [0 > n ? n + t : n] }),
                    even: u(function(e, t) { for (var n = 0; t > n; n += 2) e.push(n); return e }),
                    odd: u(function(e, t) { for (var n = 1; t > n; n += 2) e.push(n); return e }),
                    lt: u(function(e, t, n) { for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r); return e }),
                    gt: u(function(e, t, n) { for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r); return e })
                }
            };
            for (C in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) k.pseudos[C] = l(C);
            for (C in { submit: !0, reset: !0 }) k.pseudos[C] = c(C);
            j = a.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = z[e + " "];
                if (!o) {
                    for (t || (t = p(e)), n = t.length; n--;) o = y(t[n]), o[F] ? r.push(o) : i.push(o);
                    o = z(e, v(i, r))
                }
                return o
            }, k.pseudos.nth = k.pseudos.eq, k.filters = w.prototype = k.pseudos, k.setFilters = new w, S(), a.attr = le.attr, le.find = a, le.expr = a.selectors, le.expr[":"] = le.expr.pseudos, le.unique = a.uniqueSort, le.text = a.getText, le.isXMLDoc = a.isXML, le.contains = a.contains
        }(e);
    var qe = /Until$/,
        $e = /^(?:parents|prev(?:Until|All))/,
        We = /^.[^:#\[\.,]*$/,
        Ue = le.expr.match.needsContext,
        Je = { children: !0, contents: !0, next: !0, prev: !0 };
    le.fn.extend({
        find: function(e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return r = this, this.pushStack(le(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (le.contains(r[t], this)) return !0
            }));
            for (n = [], t = 0; i > t; t++) le.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? le.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        },
        has: function(e) {
            var t, n = le(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (le.contains(this, n[t])) return !0
            })
        },
        not: function(e) { return this.pushStack(p(this, e, !1)) },
        filter: function(e) { return this.pushStack(p(this, e, !0)) },
        is: function(e) { return !!e && ("string" == typeof e ? Ue.test(e) ? le(e, this.context).index(this[0]) >= 0 : le.filter(e, this).length > 0 : this.filter(e).length > 0) },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = Ue.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                    if (a ? a.index(n) > -1 : le.find.matchesSelector(n, e)) { o.push(n); break }
                    n = n.parentNode
                }
            return this.pushStack(o.length > 1 ? le.unique(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? le.inArray(this[0], le(e)) : le.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) {
            var n = "string" == typeof e ? le(e, t) : le.makeArray(e && e.nodeType ? [e] : e),
                r = le.merge(this.get(), n);
            return this.pushStack(le.unique(r))
        },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), le.fn.andSelf = le.fn.addBack, le.each({
        parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null },
        parents: function(e) { return le.dir(e, "parentNode") },
        parentsUntil: function(e, t, n) { return le.dir(e, "parentNode", n) },
        next: function(e) { return u(e, "nextSibling") },
        prev: function(e) { return u(e, "previousSibling") },
        nextAll: function(e) { return le.dir(e, "nextSibling") },
        prevAll: function(e) {
            return le.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) { return le.dir(e, "nextSibling", n) },
        prevUntil: function(e, t, n) { return le.dir(e, "previousSibling", n) },
        siblings: function(e) { return le.sibling((e.parentNode || {}).firstChild, e) },
        children: function(e) { return le.sibling(e.firstChild) },
        contents: function(e) { return le.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : le.merge([], e.childNodes) }
    }, function(e, t) { le.fn[e] = function(n, r) { var i = le.map(this, t, n); return qe.test(e) || (r = n), r && "string" == typeof r && (i = le.filter(r, i)), i = this.length > 1 && !Je[e] ? le.unique(i) : i, this.length > 1 && $e.test(e) && (i = i.reverse()), this.pushStack(i) } }), le.extend({ filter: function(e, t, n) { return n && (e = ":not(" + e + ")"), 1 === t.length ? le.find.matchesSelector(t[0], e) ? [t[0]] : [] : le.find.matches(e, t) }, dir: function(e, n, r) { for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !le(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n]; return i }, sibling: function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n } });
    var ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ve = / jQuery\d+="(?:null|\d+)"/g,
        Xe = RegExp("<(?:" + ze + ")[\\s/>]", "i"),
        Ye = /^\s+/,
        Ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ke = /<([\w:]+)/,
        Qe = /<tbody/i,
        Ze = /<|&#?\w+;/,
        et = /<(?:script|style|link)/i,
        tt = /^(?:checkbox|radio)$/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rt = /^$|\/(?:java|ecma)script/i,
        it = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        at = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: le.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        st = f(X),
        lt = st.appendChild(X.createElement("div"));
    at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td, le.fn.extend({
        text: function(e) { return le.access(this, function(e) { return e === t ? le.text(this) : this.empty().append((this[0] && this[0].ownerDocument || X).createTextNode(e)) }, null, e, arguments.length) },
        wrapAll: function(e) {
            if (le.isFunction(e)) return this.each(function(t) { le(this).wrapAll(e.call(this, t)) });
            if (this[0]) {
                var t = le(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild; return e }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return le.isFunction(e) ? this.each(function(t) { le(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                var t = le(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) { var t = le.isFunction(e); return this.each(function(n) { le(this).wrapAll(t ? e.call(this, n) : e) }) },
        unwrap: function() { return this.parent().each(function() { le.nodeName(this, "body") || le(this).replaceWith(this.childNodes) }).end() },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() { return this.domManip(arguments, !1, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return this.domManip(arguments, !1, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        remove: function(e, t) { for (var n, r = 0; null != (n = this[r]); r++)(!e || le.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || le.cleanData(b(n)), n.parentNode && (t && le.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n))); return this },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && le.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && le.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return le.clone(this, e, t) }) },
        html: function(e) {
            return le.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ve, "") : t;
                if (!("string" != typeof e || et.test(e) || !le.support.htmlSerialize && Xe.test(e) || !le.support.leadingWhitespace && Ye.test(e) || at[(Ke.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Ge, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (le.cleanData(b(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            var t = le.isFunction(e);
            return t || "string" == typeof e || (e = le(e).not(this).detach()), this.domManip([e], !0, function(e) {
                var t = this.nextSibling,
                    n = this.parentNode;
                n && (le(this).remove(), n.insertBefore(e, t))
            })
        },
        detach: function(e) { return this.remove(e, !0) },
        domManip: function(e, n, r) {
            e = te.apply([], e);
            var i, o, a, s, l, c, u = 0,
                p = this.length,
                f = this,
                m = p - 1,
                y = e[0],
                v = le.isFunction(y);
            if (v || !(1 >= p || "string" != typeof y || le.support.checkClone) && nt.test(y)) return this.each(function(i) {
                var o = f.eq(i);
                v && (e[0] = y.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
            });
            if (p && (c = le.buildFragment(e, this[0].ownerDocument, !1, this), i = c.firstChild, 1 === c.childNodes.length && (c = i), i)) {
                for (n = n && le.nodeName(i, "tr"), s = le.map(b(c, "script"), h), a = s.length; p > u; u++) o = c, u !== m && (o = le.clone(o, !0, !0), a && le.merge(s, b(o, "script"))), r.call(n && le.nodeName(this[u], "table") ? d(this[u], "tbody") : this[u], o, u);
                if (a)
                    for (l = s[s.length - 1].ownerDocument, le.map(s, g), u = 0; a > u; u++) o = s[u], rt.test(o.type || "") && !le._data(o, "globalEval") && le.contains(l, o) && (o.src ? le.ajax({ url: o.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) : le.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
                c = i = null
            }
            return this
        }
    }), le.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { le.fn[e] = function(e) { for (var n, r = 0, i = [], o = le(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), le(o[r])[t](n), ne.apply(i, n.get()); return this.pushStack(i) } }), le.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = le.contains(e.ownerDocument, e);
            if (le.support.html5Clone || le.isXMLDoc(e) || !Xe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (lt.innerHTML = e.outerHTML, lt.removeChild(o = lt.firstChild)), !(le.support.noCloneEvent && le.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e)))
                for (r = b(o), s = b(e), a = 0; null != (i = s[a]); ++a) r[a] && v(i, r[a]);
            if (t)
                if (n)
                    for (s = s || b(e), r = r || b(o), a = 0; null != (i = s[a]); a++) y(i, r[a]);
                else y(e, o);
            return r = b(o, "script"), r.length > 0 && m(r, !l && b(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, l, c, u, p = e.length, d = f(t), h = [], g = 0; p > g; g++)
                if (o = e[g], o || 0 === o)
                    if ("object" === le.type(o)) le.merge(h, o.nodeType ? [o] : o);
                    else if (Ze.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), l = (Ke.exec(o) || ["", ""])[1].toLowerCase(), u = at[l] || at._default, s.innerHTML = u[1] + o.replace(Ge, "<$1></$2>") + u[2], i = u[0]; i--;) s = s.lastChild;
                if (!le.support.leadingWhitespace && Ye.test(o) && h.push(t.createTextNode(Ye.exec(o)[0])), !le.support.tbody)
                    for (o = "table" !== l || Qe.test(o) ? "<table>" !== u[1] || Qe.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) le.nodeName(c = o.childNodes[i], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (le.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = d.lastChild
            } else h.push(t.createTextNode(o));
            for (s && d.removeChild(s), le.support.appendChecked || le.grep(b(h, "input"), x), g = 0; o = h[g++];)
                if ((!r || -1 === le.inArray(o, r)) && (a = le.contains(o.ownerDocument, o), s = b(d.appendChild(o), "script"), a && m(s), n))
                    for (i = 0; o = s[i++];) rt.test(o.type || "") && n.push(o);
            return s = null, d
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = le.expando, l = le.cache, c = le.support.deleteExpando, u = le.event.special; null != (n = e[a]); a++)
                if ((t || le.acceptData(n)) && (i = n[s], o = i && l[i])) {
                    if (o.events)
                        for (r in o.events) u[r] ? le.event.remove(n, r) : le.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i], c ? delete n[s] : typeof n.removeAttribute !== V ? n.removeAttribute(s) : n[s] = null, Z.push(i))
                }
        }
    });
    var ct, ut, pt, ft = /alpha\([^)]*\)/i,
        dt = /opacity\s*=\s*([^)]*)/,
        ht = /^(top|right|bottom|left)$/,
        gt = /^(none|table(?!-c[ea]).+)/,
        mt = /^margin/,
        yt = RegExp("^(" + ce + ")(.*)$", "i"),
        vt = RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"),
        bt = RegExp("^([+-])=(" + ce + ")", "i"),
        xt = { BODY: "block" },
        wt = { position: "absolute", visibility: "hidden", display: "block" },
        Ct = { letterSpacing: 0, fontWeight: 400 },
        Tt = ["Top", "Right", "Bottom", "Left"],
        kt = ["Webkit", "O", "Moz", "ms"];
    le.fn.extend({
        css: function(e, n) {
            return le.access(this, function(e, n, r) {
                var i, o, a = {},
                    s = 0;
                if (le.isArray(n)) { for (o = ut(e), i = n.length; i > s; s++) a[n[s]] = le.css(e, n[s], !1, o); return a }
                return r !== t ? le.style(e, n, r) : le.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() { return T(this, !0) },
        hide: function() { return T(this) },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : C(this)) ? le(this).show(): le(this).hide()
            })
        }
    }), le.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = pt(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": le.support.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = le.camelCase(n),
                    c = e.style;
                if (n = le.cssProps[l] || (le.cssProps[l] = w(c, l)), s = le.cssHooks[n] || le.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : c[n];
                if (a = typeof r, "string" === a && (o = bt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(le.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || le.cssNumber[l] || (r += "px"), le.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (c[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try { c[n] = r } catch (u) {}
            }
        },
        css: function(e, n, r, i) { var o, a, s, l = le.camelCase(n); return n = le.cssProps[l] || (le.cssProps[l] = w(e.style, l)), s = le.cssHooks[n] || le.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = pt(e, n, i)), "normal" === a && n in Ct && (a = Ct[n]), "" === r || r ? (o = parseFloat(a), r === !0 || le.isNumeric(o) ? o || 0 : a) : a },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), e.getComputedStyle ? (ut = function(t) { return e.getComputedStyle(t, null) }, pt = function(e, n, r) {
        var i, o, a, s = r || ut(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            c = e.style;
        return s && ("" !== l || le.contains(e.ownerDocument, e) || (l = le.style(e, n)), vt.test(l) && mt.test(n) && (i = c.width, o = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = s.width, c.width = i, c.minWidth = o, c.maxWidth = a)), l
    }) : X.documentElement.currentStyle && (ut = function(e) { return e.currentStyle }, pt = function(e, n, r) {
        var i, o, a, s = r || ut(e),
            l = s ? s[n] : t,
            c = e.style;
        return null == l && c && c[n] && (l = c[n]), vt.test(l) && !ht.test(n) && (i = c.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = i, a && (o.left = a)), "" === l ? "auto" : l
    }), le.each(["height", "width"], function(e, n) { le.cssHooks[n] = { get: function(e, r, i) { return r ? 0 === e.offsetWidth && gt.test(le.css(e, "display")) ? le.swap(e, wt, function() { return A(e, n, i) }) : A(e, n, i) : t }, set: function(e, t, r) { var i = r && ut(e); return k(e, t, r ? N(e, n, r, le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, i), i) : 0) } } }), le.support.opacity || (le.cssHooks.opacity = {
        get: function(e, t) { return dt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = le.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === le.trim(o.replace(ft, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ft.test(o) ? o.replace(ft, i) : o + " " + i)
        }
    }), le(function() { le.support.reliableMarginRight || (le.cssHooks.marginRight = { get: function(e, n) { return n ? le.swap(e, { display: "inline-block" }, pt, [e, "marginRight"]) : t } }), !le.support.pixelPosition && le.fn.position && le.each(["top", "left"], function(e, n) { le.cssHooks[n] = { get: function(e, r) { return r ? (r = pt(e, n), vt.test(r) ? le(e).position()[n] + "px" : r) : t } } }) }), le.expr && le.expr.filters && (le.expr.filters.hidden = function(e) { return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !le.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || le.css(e, "display")) }, le.expr.filters.visible = function(e) { return !le.expr.filters.hidden(e) }), le.each({ margin: "", padding: "", border: "Width" }, function(e, t) { le.cssHooks[e + t] = { expand: function(n) { for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Tt[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, mt.test(e) || (le.cssHooks[e + t].set = k) });
    var Nt = /%20/g,
        At = /\[\]$/,
        jt = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        _t = /^(?:input|select|textarea|keygen)/i;
    le.fn.extend({ serialize: function() { return le.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = le.prop(this, "elements"); return e ? le.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !le(this).is(":disabled") && _t.test(this.nodeName) && !Et.test(e) && (this.checked || !tt.test(e)) }).map(function(e, t) { var n = le(this).val(); return null == n ? null : le.isArray(n) ? le.map(n, function(e) { return { name: t.name, value: e.replace(jt, "\r\n") } }) : { name: t.name, value: n.replace(jt, "\r\n") } }).get() } }), le.param = function(e, n) {
        var r, i = [],
            o = function(e, t) { t = le.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
        if (n === t && (n = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(e) || e.jquery && !le.isPlainObject(e)) le.each(e, function() { o(this.name, this.value) });
        else
            for (r in e) _(r, e[r], n, o);
        return i.join("&").replace(Nt, "+")
    }, le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { le.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), le.fn.hover = function(e, t) { return this.mouseenter(e).mouseleave(t || e) };
    var St, Dt, Lt = le.now(),
        Ot = /\?/,
        Mt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Rt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        It = /^(?:GET|HEAD)$/,
        Ft = /^\/\//,
        Bt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        qt = le.fn.load,
        $t = {},
        Wt = {},
        Ut = "*/".concat("*");
    try { Dt = Y.href } catch (Jt) { Dt = X.createElement("a"), Dt.href = "", Dt = Dt.href }
    St = Bt.exec(Dt.toLowerCase()) || [], le.fn.load = function(e, n, r) {
        if ("string" != typeof e && qt) return qt.apply(this, arguments);
        var i, o, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), le.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && le.ajax({ url: e, type: a, dataType: "html", data: n }).done(function(e) { o = arguments, s.html(i ? le("<div>").append(le.parseHTML(e)).find(i) : e) }).complete(r && function(e, t) { s.each(r, o || [e.responseText, t, e]) }), this
    }, le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { le.fn[t] = function(e) { return this.on(t, e) } }), le.each(["get", "post"], function(e, n) { le[n] = function(e, r, i, o) { return le.isFunction(r) && (o = o || i, i = r, r = t), le.ajax({ url: e, type: n, dataType: o, data: r, success: i }) } }), le.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: Dt, type: "GET", isLocal: Rt.test(St[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Ut, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": e.String, "text html": !0, "text json": le.parseJSON, "text xml": le.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? L(L(e, le.ajaxSettings), t) : L(le.ajaxSettings, e) },
        ajaxPrefilter: S($t),
        ajaxTransport: S(Wt),
        ajax: function(e, n) {
            function r(e, n, r, i) {
                var o, p, v, b, w, T = n;
                2 !== x && (x = 2, l && clearTimeout(l), u = t, s = i || "", C.readyState = e > 0 ? 4 : 0, r && (b = O(f, C, r)), e >= 200 && 300 > e || 304 === e ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (le.lastModified[a] = w), w = C.getResponseHeader("etag"), w && (le.etag[a] = w)), 204 === e ? (o = !0, T = "nocontent") : 304 === e ? (o = !0, T = "notmodified") : (o = M(f, b), T = o.state, p = o.data, v = o.error, o = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || T) + "", o ? g.resolveWith(d, [p, T, C]) : g.rejectWith(d, [C, T, v]), C.statusCode(y), y = t, c && h.trigger(o ? "ajaxSuccess" : "ajaxError", [C, f, o ? p : v]), m.fireWith(d, [C, T]), c && (h.trigger("ajaxComplete", [C, f]), --le.active || le.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, l, c, u, p, f = le.ajaxSetup({}, n),
                d = f.context || f,
                h = f.context && (d.nodeType || d.jquery) ? le(d) : le.event,
                g = le.Deferred(),
                m = le.Callbacks("once memory"),
                y = f.statusCode || {},
                v = {},
                b = {},
                x = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!p)
                                for (p = {}; t = Pt.exec(s);) p[t[1].toLowerCase()] = t[2];
                            t = p[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() { return 2 === x ? s : null },
                    setRequestHeader: function(e, t) { var n = e.toLowerCase(); return x || (e = b[n] = b[n] || e, v[e] = t), this },
                    overrideMimeType: function(e) { return x || (f.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) y[t] = [y[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function(e) { var t = e || w; return u && u.abort(t), r(0, t), this }
                };
            if (g.promise(C).complete = m.add, C.success = C.done, C.error = C.fail, f.url = ((e || f.url || Dt) + "").replace(Mt, "").replace(Ft, St[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = le.trim(f.dataType || "*").toLowerCase().match(ue) || [""], null == f.crossDomain && (i = Bt.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === St[1] && i[2] === St[2] && (i[3] || ("http:" === i[1] ? 80 : 443)) == (St[3] || ("http:" === St[1] ? 80 : 443)))), f.data && f.processData && "string" != typeof f.data && (f.data = le.param(f.data, f.traditional)), D($t, f, n, C), 2 === x) return C;
            c = f.global, c && 0 === le.active++ && le.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !It.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (Ot.test(a) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Ht.test(a) ? a.replace(Ht, "$1_=" + Lt++) : a + (Ot.test(a) ? "&" : "?") + "_=" + Lt++)), f.ifModified && (le.lastModified[a] && C.setRequestHeader("If-Modified-Since", le.lastModified[a]), le.etag[a] && C.setRequestHeader("If-None-Match", le.etag[a])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : f.accepts["*"]);
            for (o in f.headers) C.setRequestHeader(o, f.headers[o]);
            if (f.beforeSend && (f.beforeSend.call(d, C, f) === !1 || 2 === x)) return C.abort();
            w = "abort";
            for (o in { success: 1, error: 1, complete: 1 }) C[o](f[o]);
            if (u = D(Wt, f, n, C)) {
                C.readyState = 1, c && h.trigger("ajaxSend", [C, f]), f.async && f.timeout > 0 && (l = setTimeout(function() { C.abort("timeout") }, f.timeout));
                try { x = 1, u.send(v, r) } catch (T) {
                    if (!(2 > x)) throw T;
                    r(-1, T)
                }
            } else r(-1, "No Transport");
            return C
        },
        getScript: function(e, n) { return le.get(e, t, n, "script") },
        getJSON: function(e, t, n) { return le.get(e, t, n, "json") }
    }), le.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(e) { return le.globalEval(e), e } } }), le.ajaxPrefilter("script", function(e) { e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), le.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = X.head || le("head")[0] || X.documentElement;
            return {
                send: function(t, i) {
                    n = X.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() { n && n.onload(t, !0) }
            }
        }
    });
    var zt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    le.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = zt.pop() || le.expando + "_" + Lt++; return this[e] = !0, e } }), le.ajaxPrefilter("json jsonp", function(n, r, i) { var o, a, s, l = n.jsonp !== !1 && (Vt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(n.data) && "data"); return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = le.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Vt, "$1" + o) : n.jsonp !== !1 && (n.url += (Ot.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() { return s || le.error(o + " was not called"), s[0] }, n.dataTypes[0] = "json", a = e[o], e[o] = function() { s = arguments }, i.always(function() { e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, zt.push(o)), s && le.isFunction(a) && a(s[0]), s = a = t }), "script") : t });
    var Xt, Yt, Gt = 0,
        Kt = e.ActiveXObject && function() { var e; for (e in Xt) Xt[e](t, !0) };
    le.ajaxSettings.xhr = e.ActiveXObject ? function() { return !this.isLocal && H() || P() } : H, Yt = le.ajaxSettings.xhr(), le.support.cors = !!Yt && "withCredentials" in Yt, Yt = le.support.ajax = !!Yt, Yt && le.ajaxTransport(function(n) {
        if (!n.crossDomain || le.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try { for (s in i) l.setRequestHeader(s, i[s]) } catch (c) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, c, u, p;
                        try {
                            if (r && (i || 4 === l.readyState))
                                if (r = t, a && (l.onreadystatechange = le.noop, Kt && delete Xt[a]), i) 4 !== l.readyState && l.abort();
                                else {
                                    p = {}, s = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                    try { u = l.statusText } catch (f) { u = "" }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                        } catch (d) { i || o(-1, d) }
                        p && o(s, u, p, c)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Gt, Kt && (Xt || (Xt = {}, le(e).unload(Kt)), Xt[a] = r), l.onreadystatechange = r) : r()
                },
                abort: function() { r && r(t, !0) }
            }
        }
    });
    var Qt, Zt, en = /^(?:toggle|show|hide)$/,
        tn = RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"),
        nn = /queueHooks$/,
        rn = [q],
        on = {
            "*": [function(e, t) {
                var n, r, i = this.createTween(e, t),
                    o = tn.exec(t),
                    a = i.cur(),
                    s = +a || 0,
                    l = 1,
                    c = 20;
                if (o) {
                    if (n = +o[2], r = o[3] || (le.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                        s = le.css(i.elem, e, !0) || n || 1;
                        do l = l || ".5", s /= l, le.style(i.elem, e, s + r); while (l !== (l = i.cur() / a) && 1 !== l && --c)
                    }
                    i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                }
                return i
            }]
        };
    le.Animation = le.extend(F, { tweener: function(e, t) { le.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" "); for (var n, r = 0, i = e.length; i > r; r++) n = e[r], on[n] = on[n] || [], on[n].unshift(t) }, prefilter: function(e, t) { t ? rn.unshift(e) : rn.push(e) } }), le.Tween = $, $.prototype = { constructor: $, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (le.cssNumber[n] ? "" : "px") }, cur: function() { var e = $.propHooks[this.prop]; return e && e.get ? e.get(this) : $.propHooks._default.get(this) }, run: function(e) { var t, n = $.propHooks[this.prop]; return this.pos = t = this.options.duration ? le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this } }, $.prototype.init.prototype = $.prototype, $.propHooks = { _default: { get: function(e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = le.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function(e) { le.fx.step[e.prop] ? le.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[le.cssProps[e.prop]] || le.cssHooks[e.prop]) ? le.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, $.propHooks.scrollTop = $.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, le.each(["toggle", "show", "hide"], function(e, t) {
        var n = le.fn[t];
        le.fn[t] = function(e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i) }
    }), le.fn.extend({
        fadeTo: function(e, t, n, r) { return this.filter(C).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
        animate: function(e, t, n, r) {
            var i = le.isEmptyObject(e),
                o = le.speed(t, n, r),
                a = function() {
                    var t = F(this, le.extend({}, e), o);
                    a.finish = function() { t.stop(!0) }, (i || le._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = le.timers,
                    a = le._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && nn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && le.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = le._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = le.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, le.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), le.each({ slideDown: W("show"), slideUp: W("hide"), slideToggle: W("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { le.fn[e] = function(e, n, r) { return this.animate(t, e, n, r) } }), le.speed = function(e, t, n) { var r = e && "object" == typeof e ? le.extend({}, e) : { complete: n || !n && t || le.isFunction(e) && e, duration: e, easing: n && t || t && !le.isFunction(t) && t }; return r.duration = le.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in le.fx.speeds ? le.fx.speeds[r.duration] : le.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() { le.isFunction(r.old) && r.old.call(this), r.queue && le.dequeue(this, r.queue) }, r }, le.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 } }, le.timers = [], le.fx = $.prototype.init, le.fx.tick = function() {
        var e, n = le.timers,
            r = 0;
        for (Qt = le.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || le.fx.stop(), Qt = t
    }, le.fx.timer = function(e) { e() && le.timers.push(e) && le.fx.start() }, le.fx.interval = 13, le.fx.start = function() { Zt || (Zt = setInterval(le.fx.tick, le.fx.interval)) }, le.fx.stop = function() { clearInterval(Zt), Zt = null }, le.fx.speeds = { slow: 600, fast: 200, _default: 400 }, le.fx.step = {}, le.expr && le.expr.filters && (le.expr.filters.animated = function(e) { return le.grep(le.timers, function(t) { return e === t.elem }).length }), le.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) { le.offset.setOffset(this, e, t) });
        var n, r, i = { top: 0, left: 0 },
            o = this[0],
            a = o && o.ownerDocument;
        return a ? (n = a.documentElement, le.contains(n, o) ? (typeof o.getBoundingClientRect !== V && (i = o.getBoundingClientRect()), r = U(a), { top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : i) : void 0
    }, le.offset = {
        setOffset: function(e, t, n) {
            var r = le.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = le(e),
                s = a.offset(),
                l = le.css(e, "top"),
                c = le.css(e, "left"),
                u = ("absolute" === r || "fixed" === r) && le.inArray("auto", [l, c]) > -1,
                p = {},
                f = {};
            u ? (f = a.position(), i = f.top, o = f.left) : (i = parseFloat(l) || 0, o = parseFloat(c) || 0), le.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + i), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : a.css(p)
        }
    }, le.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = { top: 0, left: 0 },
                    r = this[0];
                return "fixed" === le.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), le.nodeName(e[0], "html") || (n = e.offset()), n.top += le.css(e[0], "borderTopWidth", !0), n.left += le.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - le.css(r, "marginTop", !0), left: t.left - n.left - le.css(r, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var e = this.offsetParent || X.documentElement; e && !le.nodeName(e, "html") && "static" === le.css(e, "position");) e = e.offsetParent; return e || X.documentElement }) }
    }), le.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, n) {
        var r = /Y/.test(n);
        le.fn[e] = function(i) { return le.access(this, function(e, i, o) { var a = U(e); return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? le(a).scrollLeft() : o, r ? o : le(a).scrollTop()) : e[i] = o, t) }, e, i, arguments.length, null) }
    }), le.each({ Height: "height", Width: "width" }, function(e, n) {
        le.each({ padding: "inner" + e, content: n, "": "outer" + e }, function(r, i) {
            le.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return le.access(this, function(n, r, i) { var o; return le.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? le.css(n, r, s) : le.style(n, r, i, s) }, n, a ? i : t, a, null)
            }
        })
    }), e.jQuery = e.$ = le, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() { return le })
}(window),
function() {
    function e(t, r) {
        function o(e) {
            if (o[e] !== m) return o[e];
            var t;
            if ("bug-string-char-index" == e) t = "a" != "a" [0];
            else if ("json" == e) t = o("json-stringify") && o("json-parse");
            else {
                var n;
                if ("json-stringify" == e) {
                    t = r.stringify;
                    var i = "function" == typeof t && v;
                    if (i) {
                        (n = function() { return 1 }).toJSON = n;
                        try { i = "0" === t(0) && "0" === t(new a) && '""' == t(new s) && t(y) === m && t(m) === m && t() === m && "1" === t(n) && "[1]" == t([n]) && "[null]" == t([m]) && "null" == t(null) && "[null,null,null]" == t([m, y, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == t({ a: [n, !0, !1, null, "\0\b\n\f\r\t"] }) && "1" === t(null, n) && "[\n 1,\n 2\n]" == t([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == t(new c((-864e13))) && '"+275760-09-13T00:00:00.000Z"' == t(new c(864e13)) && '"-000001-01-01T00:00:00.000Z"' == t(new c((-621987552e5))) && '"1969-12-31T23:59:59.999Z"' == t(new c((-1))) } catch (l) { i = !1 }
                    }
                    t = i
                }
                if ("json-parse" == e) {
                    if (t = r.parse, "function" == typeof t) try {
                        if (0 === t("0") && !t(!1)) {
                            n = t('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var u = 5 == n.a.length && 1 === n.a[0];
                            if (u) {
                                try { u = !t('"\t"') } catch (p) {}
                                if (u) try { u = 1 !== t("01") } catch (f) {}
                                if (u) try { u = 1 !== t("1.") } catch (d) {}
                            }
                        }
                    } catch (h) { u = !1 }
                    t = u
                }
            }
            return o[e] = !!t
        }
        t || (t = i.Object()), r || (r = i.Object());
        var a = t.Number || i.Number,
            s = t.String || i.String,
            l = t.Object || i.Object,
            c = t.Date || i.Date,
            u = t.SyntaxError || i.SyntaxError,
            p = t.TypeError || i.TypeError,
            f = t.Math || i.Math,
            d = t.JSON || i.JSON;
        "object" == typeof d && d && (r.stringify = d.stringify, r.parse = d.parse);
        var h, g, m, l = l.prototype,
            y = l.toString,
            v = new c((-0xc782b5b800cec));
        try { v = -109252 == v.getUTCFullYear() && 0 === v.getUTCMonth() && 1 === v.getUTCDate() && 10 == v.getUTCHours() && 37 == v.getUTCMinutes() && 6 == v.getUTCSeconds() && 708 == v.getUTCMilliseconds() } catch (b) {}
        if (!o("json")) {
            var x = o("bug-string-char-index");
            if (!v) var w = f.floor,
                C = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                T = function(e, t) { return C[t] + 365 * (e - 1970) + w((e - 1969 + (t = +(1 < t))) / 4) - w((e - 1901 + t) / 100) + w((e - 1601 + t) / 400) };
            if ((h = l.hasOwnProperty) || (h = function(e) { var t, n = {}; return (n.__proto__ = null, n.__proto__ = { toString: 1 }, n).toString != y ? h = function(e) { var t = this.__proto__; return e = e in (this.__proto__ = null, this), this.__proto__ = t, e } : (t = n.constructor, h = function(e) { var n = (this.constructor || t).prototype; return e in this && !(e in n && this[e] === n[e]) }), n = null, h.call(this, e) }), g = function(e, t) {
                    var r, i, o, a = 0;
                    (r = function() { this.valueOf = 0 }).prototype.valueOf = 0, i = new r;
                    for (o in i) h.call(i, o) && a++;
                    return r = i = null, a ? g = 2 == a ? function(e, t) {
                        var n, r = {},
                            i = "[object Function]" == y.call(e);
                        for (n in e) i && "prototype" == n || h.call(r, n) || !(r[n] = 1) || !h.call(e, n) || t(n)
                    } : function(e, t) {
                        var n, r, i = "[object Function]" == y.call(e);
                        for (n in e) i && "prototype" == n || !h.call(e, n) || (r = "constructor" === n) || t(n);
                        (r || h.call(e, n = "constructor")) && t(n)
                    } : (i = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), g = function(e, t) {
                        var r, o = "[object Function]" == y.call(e),
                            a = !o && "function" != typeof e.constructor && n[typeof e.hasOwnProperty] && e.hasOwnProperty || h;
                        for (r in e) o && "prototype" == r || !a.call(e, r) || t(r);
                        for (o = i.length; r = i[--o]; a.call(e, r) && t(r));
                    }), g(e, t)
                }, !o("json-stringify")) {
                var k = { 92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t" },
                    N = function(e, t) { return ("000000" + (t || 0)).slice(-e) },
                    A = function(e) {
                        for (var t = '"', n = 0, r = e.length, i = !x || 10 < r, o = i && (x ? e.split("") : e); n < r; n++) {
                            var a = e.charCodeAt(n);
                            switch (a) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    t += k[a];
                                    break;
                                default:
                                    if (32 > a) { t += "\\u00" + N(2, a.toString(16)); break }
                                    t += i ? o[n] : e.charAt(n)
                            }
                        }
                        return t + '"'
                    },
                    j = function(e, t, n, r, i, o, a) {
                        var s, l, c, u, f, d, v, b, x;
                        try { s = t[e] } catch (C) {}
                        if ("object" == typeof s && s)
                            if (l = y.call(s), "[object Date]" != l || h.call(s, "toJSON")) "function" == typeof s.toJSON && ("[object Number]" != l && "[object String]" != l && "[object Array]" != l || h.call(s, "toJSON")) && (s = s.toJSON(e));
                            else if (s > -1 / 0 && s < 1 / 0) {
                            if (T) {
                                for (u = w(s / 864e5), l = w(u / 365.2425) + 1970 - 1; T(l + 1, 0) <= u; l++);
                                for (c = w((u - T(l, 0)) / 30.42); T(l, c + 1) <= u; c++);
                                u = 1 + u - T(l, c), f = (s % 864e5 + 864e5) % 864e5, d = w(f / 36e5) % 24, v = w(f / 6e4) % 60, b = w(f / 1e3) % 60, f %= 1e3
                            } else l = s.getUTCFullYear(), c = s.getUTCMonth(), u = s.getUTCDate(), d = s.getUTCHours(), v = s.getUTCMinutes(), b = s.getUTCSeconds(), f = s.getUTCMilliseconds();
                            s = (0 >= l || 1e4 <= l ? (0 > l ? "-" : "+") + N(6, 0 > l ? -l : l) : N(4, l)) + "-" + N(2, c + 1) + "-" + N(2, u) + "T" + N(2, d) + ":" + N(2, v) + ":" + N(2, b) + "." + N(3, f) + "Z"
                        } else s = null;
                        if (n && (s = n.call(t, e, s)), null === s) return "null";
                        if (l = y.call(s), "[object Boolean]" == l) return "" + s;
                        if ("[object Number]" == l) return s > -1 / 0 && s < 1 / 0 ? "" + s : "null";
                        if ("[object String]" == l) return A("" + s);
                        if ("object" == typeof s) {
                            for (e = a.length; e--;)
                                if (a[e] === s) throw p();
                            if (a.push(s), x = [], t = o, o += i, "[object Array]" == l) {
                                for (c = 0, e = s.length; c < e; c++) l = j(c, s, n, r, i, o, a), x.push(l === m ? "null" : l);
                                e = x.length ? i ? "[\n" + o + x.join(",\n" + o) + "\n" + t + "]" : "[" + x.join(",") + "]" : "[]"
                            } else g(r || s, function(e) {
                                var t = j(e, s, n, r, i, o, a);
                                t !== m && x.push(A(e) + ":" + (i ? " " : "") + t)
                            }), e = x.length ? i ? "{\n" + o + x.join(",\n" + o) + "\n" + t + "}" : "{" + x.join(",") + "}" : "{}";
                            return a.pop(), e
                        }
                    };
                r.stringify = function(e, t, r) {
                    var i, o, a, s;
                    if (n[typeof t] && t)
                        if ("[object Function]" == (s = y.call(t))) o = t;
                        else if ("[object Array]" == s) { a = {}; for (var l, c = 0, u = t.length; c < u; l = t[c++], s = y.call(l), ("[object String]" == s || "[object Number]" == s) && (a[l] = 1)); }
                    if (r)
                        if ("[object Number]" == (s = y.call(r))) {
                            if (0 < (r -= r % 1))
                                for (i = "", 10 < r && (r = 10); i.length < r; i += " ");
                        } else "[object String]" == s && (i = 10 >= r.length ? r : r.slice(0, 10));
                    return j("", (l = {}, l[""] = e, l), o, a, i, "", [])
                }
            }
            if (!o("json-parse")) {
                var E, _, S = s.fromCharCode,
                    D = { 92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r" },
                    L = function() { throw E = _ = null, u() },
                    O = function() {
                        for (var e, t, n, r, i, o = _, a = o.length; E < a;) switch (i = o.charCodeAt(E)) {
                            case 9:
                            case 10:
                            case 13:
                            case 32:
                                E++;
                                break;
                            case 123:
                            case 125:
                            case 91:
                            case 93:
                            case 58:
                            case 44:
                                return e = x ? o.charAt(E) : o[E], E++, e;
                            case 34:
                                for (e = "@", E++; E < a;)
                                    if (i = o.charCodeAt(E), 32 > i) L();
                                    else if (92 == i) switch (i = o.charCodeAt(++E)) {
                                    case 92:
                                    case 34:
                                    case 47:
                                    case 98:
                                    case 116:
                                    case 110:
                                    case 102:
                                    case 114:
                                        e += D[i], E++;
                                        break;
                                    case 117:
                                        for (t = ++E, n = E + 4; E < n; E++) i = o.charCodeAt(E), 48 <= i && 57 >= i || 97 <= i && 102 >= i || 65 <= i && 70 >= i || L();
                                        e += S("0x" + o.slice(t, E));
                                        break;
                                    default:
                                        L()
                                } else {
                                    if (34 == i) break;
                                    for (i = o.charCodeAt(E), t = E; 32 <= i && 92 != i && 34 != i;) i = o.charCodeAt(++E);
                                    e += o.slice(t, E)
                                }
                                if (34 == o.charCodeAt(E)) return E++, e;
                                L();
                            default:
                                if (t = E, 45 == i && (r = !0, i = o.charCodeAt(++E)), 48 <= i && 57 >= i) {
                                    for (48 == i && (i = o.charCodeAt(E + 1), 48 <= i && 57 >= i) && L(); E < a && (i = o.charCodeAt(E), 48 <= i && 57 >= i); E++);
                                    if (46 == o.charCodeAt(E)) {
                                        for (n = ++E; n < a && (i = o.charCodeAt(n), 48 <= i && 57 >= i); n++);
                                        n == E && L(), E = n
                                    }
                                    if (i = o.charCodeAt(E), 101 == i || 69 == i) {
                                        for (i = o.charCodeAt(++E), 43 != i && 45 != i || E++, n = E; n < a && (i = o.charCodeAt(n), 48 <= i && 57 >= i); n++);
                                        n == E && L(), E = n
                                    }
                                    return +o.slice(t, E)
                                }
                                if (r && L(), "true" == o.slice(E, E + 4)) return E += 4, !0;
                                if ("false" == o.slice(E, E + 5)) return E += 5, !1;
                                if ("null" == o.slice(E, E + 4)) return E += 4, null;
                                L()
                        }
                        return "$"
                    },
                    M = function(e) {
                        var t, n;
                        if ("$" == e && L(), "string" == typeof e) {
                            if ("@" == (x ? e.charAt(0) : e[0])) return e.slice(1);
                            if ("[" == e) { for (t = []; e = O(), "]" != e; n || (n = !0)) n && ("," == e ? (e = O(), "]" == e && L()) : L()), "," == e && L(), t.push(M(e)); return t }
                            if ("{" == e) { for (t = {}; e = O(), "}" != e; n || (n = !0)) n && ("," == e ? (e = O(), "}" == e && L()) : L()), "," != e && "string" == typeof e && "@" == (x ? e.charAt(0) : e[0]) && ":" == O() || L(), t[e.slice(1)] = M(O()); return t }
                            L()
                        }
                        return e
                    },
                    H = function(e, t, n) { n = P(e, t, n), n === m ? delete e[t] : e[t] = n },
                    P = function(e, t, n) {
                        var r, i = e[t];
                        if ("object" == typeof i && i)
                            if ("[object Array]" == y.call(i))
                                for (r = i.length; r--;) H(i, r, n);
                            else g(i, function(e) { H(i, e, n) });
                        return n.call(e, t, i)
                    };
                r.parse = function(e, t) { var n, r; return E = 0, _ = "" + e, n = M(O()), "$" != O() && L(), E = _ = null, t && "[object Function]" == y.call(t) ? P((r = {}, r[""] = n, r), "", t) : n }
            }
        }
        return r.runInContext = e, r
    }
    var t = "function" == typeof define && define.amd,
        n = { "function": !0, object: !0 },
        r = n[typeof exports] && exports && !exports.nodeType && exports,
        i = n[typeof window] && window || this,
        o = r && n[typeof module] && module && !module.nodeType && "object" == typeof global && global;
    if (!o || o.global !== o && o.window !== o && o.self !== o || (i = o), r && !t) e(i, r);
    else {
        var a = i.JSON,
            s = i.JSON3,
            l = !1,
            c = e(i, i.JSON3 = { noConflict: function() { return l || (l = !0, i.JSON = a, i.JSON3 = s, a = s = null), c } });
        i.JSON = { parse: c.parse, stringify: c.stringify }
    }
    t && define(function() { return c })
}.call(this),
    /*!
     * jQuery Cookie Plugin v1.4.1
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2013 Klaus Hartl
     * Released under the MIT license
     */
    function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery) }(function(e) {
        function t(e) { return s.raw ? e : encodeURIComponent(e) }

        function n(e) { return s.raw ? e : decodeURIComponent(e) }

        function r(e) { return t(s.json ? JSON.stringify(e) : String(e)) }

        function i(e) { 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return e = decodeURIComponent(e.replace(a, " ")), s.json ? JSON.parse(e) : e } catch (t) {} }

        function o(t, n) { var r = s.raw ? t : i(t); return e.isFunction(n) ? n(r) : r }
        var a = /\+/g,
            s = e.cookie = function(i, a, l) {
                if (void 0 !== a && !e.isFunction(a)) {
                    if (l = e.extend({}, s.defaults, l), "number" == typeof l.expires) {
                        var c = l.expires,
                            u = l.expires = new Date;
                        u.setTime(+u + 864e5 * c)
                    }
                    return document.cookie = [t(i), "=", r(a), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                }
                for (var p = i ? void 0 : {}, f = document.cookie ? document.cookie.split("; ") : [], d = 0, h = f.length; d < h; d++) {
                    var g = f[d].split("="),
                        m = n(g.shift()),
                        y = g.join("=");
                    if (i && i === m) { p = o(y, a); break }
                    i || void 0 === (y = o(y)) || (p[m] = y)
                }
                return p
            };
        s.defaults = {}, e.removeCookie = function(t, n) { return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, n, { expires: -1 })), !e.cookie(t)) }
    });