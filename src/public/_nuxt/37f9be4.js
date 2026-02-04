/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    109: function (e, t, i) {
      "use strict";
      var n = i(13);
      t.a = {
        props: {
          artboard: { type: String, required: !1 },
          state: { type: String, required: !1 },
          file: { type: String, required: !1 },
          autoplay: { type: Boolean, default: !0 },
          fade: { type: Boolean, default: !0 },
          lazy: { type: Boolean, default: !0 },
          defaultClasses: { type: Boolean, default: !0 },
          clean: { type: Boolean, default: !0 },
        },
        data: function () {
          return { played: !1 };
        },
        destroyed: function () {
          var e, t, i;
          this.lazy && this.$lazy.remove(this.$el),
            null === (e = this.st) || void 0 === e || e.kill(),
            this.clean
              ? null === (t = this.r) || void 0 === t || t.cleanup()
              : (this.r.cleanupInstances(),
                null === (i = this.r) || void 0 === i || i.stopRendering()),
            this.$nuxt.$off("resize", this.resize);
        },
        methods: {
          init: function () {
            var e;
            this.lazy &&
              (null === (e = this.$lazy) ||
                void 0 === e ||
                e.add(this.$el, this.start, this.stop)),
              this.$nuxt.$on("resize", this.resize);
          },
          resize: function () {
            var e,
              t,
              i = this.dpr || 1.75;
            !this.ratio && (this.ratio = window.devicePixelRatio),
              this.resized
                ? null === (e = this.r) || void 0 === e || e.resizeToCanvas()
                : ((this.resized = !0),
                  null === (t = this.r) ||
                    void 0 === t ||
                    t.resizeDrawingSurfaceToCanvas(Math.min(i, this.ratio)));
          },
          start: function () {
            var e,
              t,
              i = this;
            this.delay && !this.played
              ? ((this.played = !0),
                n.a.delayedCall(0.5, function () {
                  var e, t;
                  return null === (e = i.r) ||
                    void 0 === e ||
                    null === (t = e.play) ||
                    void 0 === t
                    ? void 0
                    : t.call(e);
                }))
              : null === (e = this.r) ||
                void 0 === e ||
                null === (t = e.play) ||
                void 0 === t ||
                t.call(e);
          },
          stop: function () {
            var e, t;
            null === (e = this.r) ||
              void 0 === e ||
              null === (t = e.stopRendering) ||
              void 0 === t ||
              t.call(e);
          },
        },
      };
    },
    125: function (e, t, i) {
      var n,
        a,
        r,
        s,
        l = i(478);
      i(43),
        i(26),
        i(55),
        i(2),
        i(14),
        i(29),
        i(99),
        i(17),
        (s = function (e) {
          "use strict";
          var t =
            /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
          function i(e) {
            var t = e.nodeType,
              n = "";
            if (1 === t || 9 === t || 11 === t) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
            } else if (3 === t || 4 === t) return e.nodeValue;
            return n;
          }
          var n,
            a,
            r,
            s = /(?:\r|\n|\t\t)/g,
            o = /(?:\s\s+)/g,
            d = function (e) {
              return a.getComputedStyle(e);
            },
            u = Array.isArray,
            m = [].slice,
            c = function (e, t) {
              var i;
              return u(e)
                ? e
                : "string" === (i = l(e)) && !t && e
                ? m.call(n.querySelectorAll(e), 0)
                : e && "object" === i && "length" in e
                ? m.call(e, 0)
                : e
                ? [e]
                : [];
            },
            v = function (e) {
              return "absolute" === e.position || !0 === e.absolute;
            },
            p = function (e, t) {
              for (var i, n = t.length; --n > -1; )
                if (((i = t[n]), e.substr(0, i.length) === i)) return i.length;
            },
            f = function (e, t) {
              void 0 === e && (e = "");
              var i = ~e.indexOf("++"),
                n = 1;
              return (
                i && (e = e.split("++").join("")),
                function () {
                  return (
                    "<" +
                    t +
                    " style='position:relative;display:inline-block;'" +
                    (e ? " class='" + e + (i ? n++ : "") + "'>" : ">")
                  );
                }
              );
            },
            g = function e(t, i, n) {
              var a = t.nodeType;
              if (1 === a || 9 === a || 11 === a)
                for (t = t.firstChild; t; t = t.nextSibling) e(t, i, n);
              else
                (3 !== a && 4 !== a) ||
                  (t.nodeValue = t.nodeValue.split(i).join(n));
            },
            k = function (e, t) {
              for (var i = t.length; --i > -1; ) e.push(t[i]);
            },
            h = function (e, t, i) {
              for (var n; e && e !== t; ) {
                if ((n = e._next || e.nextSibling))
                  return n.textContent.charAt(0) === i;
                e = e.parentNode || e._parent;
              }
            },
            D = function e(t) {
              var i,
                n,
                a = c(t.childNodes),
                r = a.length;
              for (i = 0; i < r; i++)
                (n = a[i])._isSplit
                  ? e(n)
                  : (i && 3 === n.previousSibling.nodeType
                      ? (n.previousSibling.nodeValue +=
                          3 === n.nodeType
                            ? n.nodeValue
                            : n.firstChild.nodeValue)
                      : 3 !== n.nodeType && t.insertBefore(n.firstChild, n),
                    t.removeChild(n));
            },
            b = function (e, t) {
              return parseFloat(t[e]) || 0;
            },
            w = function (e, t, i, a, r, s, l) {
              var o,
                u,
                m,
                c,
                p,
                f,
                w,
                C,
                x,
                F,
                S,
                y,
                N = d(e),
                E = b("paddingLeft", N),
                _ = -999,
                B = b("borderBottomWidth", N) + b("borderTopWidth", N),
                z = b("borderLeftWidth", N) + b("borderRightWidth", N),
                j = b("paddingTop", N) + b("paddingBottom", N),
                O = b("paddingLeft", N) + b("paddingRight", N),
                T = 0.2 * b("fontSize", N),
                M = N.textAlign,
                A = [],
                $ = [],
                I = [],
                L = t.wordDelimiter || " ",
                V = t.tag ? t.tag : t.span ? "span" : "div",
                P = t.type || t.split || "chars,words,lines",
                q = r && ~P.indexOf("lines") ? [] : null,
                R = ~P.indexOf("words"),
                Z = ~P.indexOf("chars"),
                X = v(t),
                Y = t.linesClass,
                H = ~(Y || "").indexOf("++"),
                G = [];
              for (
                H && (Y = Y.split("++").join("")),
                  m = (u = e.getElementsByTagName("*")).length,
                  p = [],
                  o = 0;
                o < m;
                o++
              )
                p[o] = u[o];
              if (q || X)
                for (o = 0; o < m; o++)
                  ((f = (c = p[o]).parentNode === e) || X || (Z && !R)) &&
                    ((y = c.offsetTop),
                    q &&
                      f &&
                      Math.abs(y - _) > T &&
                      ("BR" !== c.nodeName || 0 === o) &&
                      ((w = []), q.push(w), (_ = y)),
                    X &&
                      ((c._x = c.offsetLeft),
                      (c._y = y),
                      (c._w = c.offsetWidth),
                      (c._h = c.offsetHeight)),
                    q &&
                      (((c._isSplit && f) ||
                        (!Z && f) ||
                        (R && f) ||
                        (!R &&
                          c.parentNode.parentNode === e &&
                          !c.parentNode._isSplit)) &&
                        (w.push(c),
                        (c._x -= E),
                        h(c, e, L) && (c._wordEnd = !0)),
                      "BR" === c.nodeName &&
                        ((c.nextSibling && "BR" === c.nextSibling.nodeName) ||
                          0 === o) &&
                        q.push([])));
              for (o = 0; o < m; o++)
                (f = (c = p[o]).parentNode === e),
                  "BR" !== c.nodeName
                    ? (X &&
                        ((x = c.style),
                        R ||
                          f ||
                          ((c._x += c.parentNode._x),
                          (c._y += c.parentNode._y)),
                        (x.left = c._x + "px"),
                        (x.top = c._y + "px"),
                        (x.position = "absolute"),
                        (x.display = "block"),
                        (x.width = c._w + 1 + "px"),
                        (x.height = c._h + "px")),
                      !R && Z
                        ? c._isSplit
                          ? ((c._next = c.nextSibling),
                            c.parentNode.appendChild(c))
                          : c.parentNode._isSplit
                          ? ((c._parent = c.parentNode),
                            !c.previousSibling &&
                              c.firstChild &&
                              (c.firstChild._isFirst = !0),
                            c.nextSibling &&
                              " " === c.nextSibling.textContent &&
                              !c.nextSibling.nextSibling &&
                              G.push(c.nextSibling),
                            (c._next =
                              c.nextSibling && c.nextSibling._isFirst
                                ? null
                                : c.nextSibling),
                            c.parentNode.removeChild(c),
                            p.splice(o--, 1),
                            m--)
                          : f ||
                            ((y = !c.nextSibling && h(c.parentNode, e, L)),
                            c.parentNode._parent &&
                              c.parentNode._parent.appendChild(c),
                            y &&
                              c.parentNode.appendChild(n.createTextNode(" ")),
                            "span" === V && (c.style.display = "inline"),
                            A.push(c))
                        : c.parentNode._isSplit &&
                          !c._isSplit &&
                          "" !== c.innerHTML
                        ? $.push(c)
                        : Z &&
                          !c._isSplit &&
                          ("span" === V && (c.style.display = "inline"),
                          A.push(c)))
                    : q || X
                    ? (c.parentNode && c.parentNode.removeChild(c),
                      p.splice(o--, 1),
                      m--)
                    : R || e.appendChild(c);
              for (o = G.length; --o > -1; ) G[o].parentNode.removeChild(G[o]);
              if (q) {
                for (
                  X &&
                    ((F = n.createElement(V)),
                    e.appendChild(F),
                    (S = F.offsetWidth + "px"),
                    (y = F.offsetParent === e ? 0 : e.offsetLeft),
                    e.removeChild(F)),
                    x = e.style.cssText,
                    e.style.cssText = "display:none;";
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (
                  C = " " === L && (!X || (!R && !Z)), o = 0;
                  o < q.length;
                  o++
                ) {
                  for (
                    w = q[o],
                      (F = n.createElement(V)).style.cssText =
                        "display:block;text-align:" +
                        M +
                        ";position:" +
                        (X ? "absolute;" : "relative;"),
                      Y && (F.className = Y + (H ? o + 1 : "")),
                      I.push(F),
                      m = w.length,
                      u = 0;
                    u < m;
                    u++
                  )
                    "BR" !== w[u].nodeName &&
                      ((c = w[u]),
                      F.appendChild(c),
                      C && c._wordEnd && F.appendChild(n.createTextNode(" ")),
                      X &&
                        (0 === u &&
                          ((F.style.top = c._y + "px"),
                          (F.style.left = E + y + "px")),
                        (c.style.top = "0px"),
                        y && (c.style.left = c._x - y + "px")));
                  0 === m
                    ? (F.innerHTML = "&nbsp;")
                    : R || Z || (D(F), g(F, String.fromCharCode(160), " ")),
                    X && ((F.style.width = S), (F.style.height = c._h + "px")),
                    e.appendChild(F);
                }
                e.style.cssText = x;
              }
              X &&
                (l > e.clientHeight &&
                  ((e.style.height = l - j + "px"),
                  e.clientHeight < l && (e.style.height = l + B + "px")),
                s > e.clientWidth &&
                  ((e.style.width = s - O + "px"),
                  e.clientWidth < s && (e.style.width = s + z + "px"))),
                k(i, A),
                R && k(a, $),
                k(r, I);
            },
            C = function (e, a, r, l) {
              var d,
                u,
                m,
                c,
                f,
                k,
                h,
                D,
                b = a.tag ? a.tag : a.span ? "span" : "div",
                w = ~(a.type || a.split || "chars,words,lines").indexOf(
                  "chars"
                ),
                C = v(a),
                x = a.wordDelimiter || " ",
                F = " " !== x ? "" : C ? "&#173; " : " ",
                S = "</" + b + ">",
                y = 1,
                N = a.specialChars
                  ? "function" == typeof a.specialChars
                    ? a.specialChars
                    : p
                  : null,
                E = n.createElement("div"),
                _ = e.parentNode;
              for (
                _.insertBefore(E, e),
                  E.textContent = e.nodeValue,
                  _.removeChild(e),
                  h = -1 !== (d = i((e = E))).indexOf("<"),
                  !1 !== a.reduceWhiteSpace &&
                    (d = d.replace(o, " ").replace(s, "")),
                  h && (d = d.split("<").join("{{LT}}")),
                  f = d.length,
                  u = (" " === d.charAt(0) ? F : "") + r(),
                  m = 0;
                m < f;
                m++
              )
                if (
                  ((k = d.charAt(m)), N && (D = N(d.substr(m), a.specialChars)))
                )
                  (k = d.substr(m, D || 1)),
                    (u += w && " " !== k ? l() + k + "</" + b + ">" : k),
                    (m += D - 1);
                else if (k === x && d.charAt(m - 1) !== x && m) {
                  for (u += y ? S : "", y = 0; d.charAt(m + 1) === x; )
                    (u += F), m++;
                  m === f - 1
                    ? (u += F)
                    : ")" !== d.charAt(m + 1) && ((u += F + r()), (y = 1));
                } else
                  "{" === k && "{{LT}}" === d.substr(m, 6)
                    ? ((u += w ? l() + "{{LT}}</" + b + ">" : "{{LT}}"),
                      (m += 5))
                    : (k.charCodeAt(0) >= 55296 && k.charCodeAt(0) <= 56319) ||
                      (d.charCodeAt(m + 1) >= 65024 &&
                        d.charCodeAt(m + 1) <= 65039)
                    ? ((c =
                        ((d.substr(m, 12).split(t) || [])[1] || "").length ||
                        2),
                      (u +=
                        w && " " !== k
                          ? l() + d.substr(m, c) + "</" + b + ">"
                          : d.substr(m, c)),
                      (m += c - 1))
                    : (u += w && " " !== k ? l() + k + "</" + b + ">" : k);
              (e.outerHTML = u + (y ? S : "")), h && g(_, "{{LT}}", "<");
            },
            x = function e(t, i, n, a) {
              var r,
                s,
                l = c(t.childNodes),
                o = l.length,
                u = v(i);
              if (3 !== t.nodeType || o > 1) {
                for (i.absolute = !1, r = 0; r < o; r++)
                  (3 !== (s = l[r]).nodeType || /\S+/.test(s.nodeValue)) &&
                    (u &&
                      3 !== s.nodeType &&
                      "inline" === d(s).display &&
                      ((s.style.display = "inline-block"),
                      (s.style.position = "relative")),
                    (s._isSplit = !0),
                    e(s, i, n, a));
                return (i.absolute = u), void (t._isSplit = !0);
              }
              C(t, i, n, a);
            },
            F = (function () {
              function e(e, t) {
                r || ((n = document), (a = window), (r = 1)),
                  (this.elements = c(e)),
                  (this.chars = []),
                  (this.words = []),
                  (this.lines = []),
                  (this._originals = []),
                  (this.vars = t || {}),
                  this.split(t);
              }
              var t = e.prototype;
              return (
                (t.split = function (e) {
                  this.isSplit && this.revert(),
                    (this.vars = e = e || this.vars),
                    (this._originals.length =
                      this.chars.length =
                      this.words.length =
                      this.lines.length =
                        0);
                  for (
                    var t,
                      i,
                      n,
                      a = this.elements.length,
                      r = e.tag ? e.tag : e.span ? "span" : "div",
                      s = f(e.wordsClass, r),
                      l = f(e.charsClass, r);
                    --a > -1;

                  )
                    (n = this.elements[a]),
                      (this._originals[a] = n.innerHTML),
                      (t = n.clientHeight),
                      (i = n.clientWidth),
                      x(n, e, s, l),
                      w(n, e, this.chars, this.words, this.lines, i, t);
                  return (
                    this.chars.reverse(),
                    this.words.reverse(),
                    this.lines.reverse(),
                    (this.isSplit = !0),
                    this
                  );
                }),
                (t.revert = function () {
                  var e = this._originals;
                  if (!e) throw "revert() call wasn't scoped properly.";
                  return (
                    this.elements.forEach(function (t, i) {
                      return (t.innerHTML = e[i]);
                    }),
                    (this.chars = []),
                    (this.words = []),
                    (this.lines = []),
                    (this.isSplit = !1),
                    this
                  );
                }),
                (e.create = function (t, i) {
                  return new e(t, i);
                }),
                e
              );
            })();
          (F.version = "3.0.0"),
            (e.SplitText = F),
            (e.default = F),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        "object" === l(t) && void 0 !== e
          ? s(t)
          : ((a = [t]),
            void 0 === (r = "function" == typeof (n = s) ? n.apply(t, a) : n) ||
              (e.exports = r));
    },
    183: function (e, t, i) {
      "use strict";
      i(81), i(87), i(173);
      t.a = {
        props: {
          to: { type: String, required: !1 },
          static: { type: Boolean, required: !1, default: !1 },
        },
        computed: {
          isNuxtLink: function () {
            return (
              this.to && (this.to.startsWith("/") || this.to.startsWith("?"))
            );
          },
          isExternalLink: function () {
            return this.to && !this.isNuxtLink;
          },
          componentType: function () {
            return this.static
              ? "div"
              : this.isExternalLink
              ? "a"
              : this.isNuxtLink
              ? "nuxt-link"
              : "button";
          },
          buttonProps: function () {
            if (!this.static) {
              if (this.isNuxtLink) {
                var e = this.to;
                return (
                  e.startsWith("?") && (e = this.$route.path + e), { to: e }
                );
              }
              return this.isExternalLink && this.to.includes("http")
                ? {
                    href: this.to,
                    rel: "noopener noreferrer",
                    target: "_blank",
                  }
                : { type: "button" };
            }
          },
        },
      };
    },
    192: function (e, t, i) {
      "use strict";
      i.r(t);
      i(85);
      var n = i(7),
        a = (i(38), i(13)),
        r = i(183),
        s = i(31),
        l = {
          mixins: [r.a],
          props: {
            label: { type: String, default: "Learn More" },
            circle: { type: Boolean, default: !1 },
            small: { type: Boolean, default: !1 },
          },
          computed: {
            hasMouse: function () {
              return this.$store.state.app.features.hasMouse;
            },
          },
          mounted: function () {
            var e = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.$nextTick();
                      case 2:
                        e.hasMouse &&
                          e.$el.addEventListener("mouseenter", e.enter);
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          destroyed: function () {
            var e;
            null === (e = this.tl) || void 0 === e || e.kill(),
              this.hasMouse &&
                this.$el.removeEventListener("mouseenter", this.enter);
          },
          methods: {
            enter: function () {
              if (!this.tl) {
                var e = Object(s.a)(".js-label", this.$el),
                  t = [this.$el, e];
                this.tl = a.a
                  .timeline({ paused: !0 })
                  .to(t, {
                    scale: a.a.utils.wrap([1.05, 1.1]),
                    duration: 0.25,
                    stagger: 0.05,
                    ease: "back.in",
                  })
                  .to(t, {
                    scale: 1,
                    duration: 0.4,
                    stagger: 0.05,
                    ease: "back.out",
                  })
                  .addLabel("sparkle", "-=.5")
                  .fromTo(
                    this.$refs.sparkle,
                    { rotation: 0 },
                    { rotation: 97.5, duration: 1, ease: "expo" },
                    "sparkle"
                  )
                  .to(
                    this.$refs.sparkle,
                    { scale: 1, duration: 0.5, ease: "snappy" },
                    "sparkle"
                  )
                  .to(
                    this.$refs.sparkle,
                    { scale: 0, duration: 0.5, ease: "snappy" },
                    "sparkle+=.5"
                  );
              }
              this.tl.restart();
            },
          },
        },
        o = (i(476), i(16)),
        d = Object(o.a)(
          l,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              e.componentType,
              e._b(
                {
                  tag: "component",
                  staticClass: "btn inline-flex",
                  attrs: { "aria-label": e.$sanitize(e.label) },
                },
                "component",
                e.buttonProps,
                !1
              ),
              [
                t(
                  "div",
                  {
                    staticClass:
                      "flex items-center justify-center text-center relative rounded-full bord-gradient",
                    class: [
                      e.circle
                        ? "min-w-[6rem] s:min-w-[8rem] max-w-[6rem] s:max-w-[8rem]"
                        : e.small
                        ? "px-28 s:px-30"
                        : "px-28 s:px-50",
                      e.small ? "h-60 s:h-55" : "h-60 s:h-80",
                    ],
                  },
                  [
                    t("div", {
                      staticClass:
                        "btn__inner absolute inset-5 rounded-full overflow-hidden",
                    }),
                    e._v(" "),
                    e.circle
                      ? e._e()
                      : t("div", {
                          staticClass:
                            "relative text-21 s:text-30 uppercase font-disp-2 leading-none z-2 js-label",
                          attrs: { "aria-hidden": "true" },
                          domProps: { textContent: e._s(e.$sanitize(e.label)) },
                        }),
                    e._v(" "),
                    t("img", {
                      ref: "sparkle",
                      staticClass: "absolute h-30 w-30 scale-0 z-2",
                      class: e.circle ? "-top-10 right-10" : "-top-15 right-30",
                      attrs: { src: "/sparkle.svg", alt: "" },
                    }),
                    e._v(" "),
                    e._t("default"),
                  ],
                  2
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = d.exports;
    },
    252: function (e, t) {},
    253: function (e, t) {},
    266: function (e, t, i) {
      "use strict";
      i(2), i(509);
      var n = i(6),
        a = i(390),
        r = i.n(a);
      (n.a.prototype.$sanitize = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : ["br"];
        return r()(e, { allowedTags: t });
      }),
        (n.a.prototype.$removeDuplicates = function (e, t) {
          return Object.values(
            e.reduce(function (i, n) {
              return (e[n[t]] = n), i;
            }, {})
          );
        });
    },
    268: function (e, t, i) {
      "use strict";
      var n = i(13),
        a = i(191),
        r = i(391),
        s = i(110),
        l = i(149);
      n.a.registerPlugin(s.a, a.a, r.a, l.a),
        n.a.config({ defaults: { ease: "none" } }),
        a.a.create(
          "snappy",
          "M0,0 C0.094,0.026 0.124,0.127 0.157,0.29 0.197,0.486 0.254,0.8 0.348,0.884 0.42,0.949 0.374,1 1,1"
        ),
        a.a.create("unmask", "M0,0 C0.2,0 0,1 1,1");
    },
    269: function (e, t, i) {
      "use strict";
      t.a = function (e, t) {
        t("rive", { instances: [], files: [] });
      };
    },
    270: function (e, t, i) {
      "use strict";
      var n = i(27),
        a = i(10),
        r = i(11),
        s = (i(41), i(33), i(82), i(72), i(36), i(2), i(85), i(17), i(392)),
        l = i.n(s),
        o = i(110),
        d = i(31);
      function u(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      var m = (function () {
        return Object(r.a)(
          function e(t) {
            var i = this;
            Object(a.a)(this, e),
              (this.resize = l()(function () {
                var e, t, n;
                i.setup(),
                  null === (e = i.ctx) ||
                    void 0 === e ||
                    null === (e = e.$s) ||
                    void 0 === e ||
                    e.resize(),
                  o.a.refresh(),
                  null === (t = i.ctx) ||
                    void 0 === t ||
                    null === (t = t.$nuxt) ||
                    void 0 === t ||
                    null === (n = t.$emit) ||
                    void 0 === n ||
                    n.call(t, "resize", i.b);
              }, 100)),
              (this.app = t),
              (this.o = new ResizeObserver(this.resize)),
              this.o.observe(document.body),
              (this.b = { ww: 0, wh: 0, small: !1, max: 0 });
          },
          [
            {
              key: "mount",
              value: function (e) {
                (this.ctx = e), this.setup();
              },
            },
            {
              key: "setup",
              value: function () {
                var e;
                (this.b.ww = window.innerWidth),
                  (this.b.wh = window.innerHeight),
                  (this.b.small =
                    window.matchMedia("(max-width: 649px)").matches),
                  (this.b.max = Math.max(
                    0,
                    Object(d.c)(document.body).height - (this.b.wh || 0)
                  )),
                  null === (e = this.app) ||
                    void 0 === e ||
                    e.store.dispatch(
                      "app/setBounds",
                      (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var i = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? u(Object(i), !0).forEach(function (t) {
                                Object(n.a)(e, t, i[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(i)
                              )
                            : u(Object(i)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(i, t)
                                );
                              });
                        }
                        return e;
                      })({}, this.b)
                    ),
                  this.svhp();
              },
            },
            {
              key: "svhp",
              value: function () {
                document.documentElement.style.setProperty(
                  "--vh",
                  "".concat(this.b.wh / 100, "px")
                );
              },
            },
            {
              key: "ww",
              get: function () {
                return this.b.ww;
              },
            },
            {
              key: "wh",
              get: function () {
                return this.b.wh;
              },
            },
            {
              key: "max",
              get: function () {
                return this.b.max;
              },
            },
            {
              key: "bounds",
              get: function () {
                return this.b;
              },
            },
            {
              key: "small",
              get: function () {
                return this.b.small;
              },
            },
          ]
        );
      })();
      t.a = function (e, t) {
        var i = e.app;
        t("r", new m(i));
      };
    },
    271: function (e, t, i) {
      "use strict";
      var n = i(10),
        a = i(11),
        r = i(13),
        s = i(110),
        l = i(393),
        o = (function () {
          return Object(a.a)(
            function e(t) {
              var i = this;
              Object(n.a)(this, e),
                (this.tick = function (e) {
                  var t, n;
                  i.lenis.raf(1e3 * e),
                    null === (t = i.ctx) ||
                      void 0 === t ||
                      null === (t = t.$nuxt) ||
                      void 0 === t ||
                      null === (n = t.$emit) ||
                      void 0 === n ||
                      n.call(t, "tick", {
                        y: i.lenis.animatedScroll,
                        time: e,
                        ratio: r.a.ticker.deltaRatio(60),
                      });
                }),
                (this.scroll = function () {
                  var e, t;
                  s.a.update(),
                    null === (e = i.ctx) ||
                      void 0 === e ||
                      null === (e = e.$nuxt) ||
                      void 0 === e ||
                      null === (t = e.$emit) ||
                      void 0 === t ||
                      t.call(e, "scroll", { y: i.lenis.actualScroll });
                }),
                (this.mobileTick = function (e) {
                  var t, n;
                  null === (t = i.ctx) ||
                    void 0 === t ||
                    null === (t = t.$nuxt) ||
                    void 0 === t ||
                    null === (n = t.$emit) ||
                    void 0 === n ||
                    n.call(t, "tick", {
                      y: i.y,
                      time: e,
                      ratio: r.a.ticker.deltaRatio(60),
                    });
                }),
                (this.mobileScroll = function () {
                  var e, t;
                  (i.y = window.scrollY),
                    null === (e = i.ctx) ||
                      void 0 === e ||
                      null === (e = e.$nuxt) ||
                      void 0 === e ||
                      null === (t = e.$emit) ||
                      void 0 === t ||
                      t.call(e, "scroll", { y: i.y });
                }),
                (this.resize = function () {
                  var e;
                  null === (e = i.lenis) || void 0 === e || e.resize();
                }),
                (this.reset = function () {
                  i.lenis
                    ? i.lenis.scrollTo(0, { immediate: !0 })
                    : window.scrollTo(0, 0);
                }),
                (this.app = t);
            },
            [
              {
                key: "mount",
                value: function (e) {
                  (this.ctx = e), this.setup();
                },
              },
              {
                key: "setup",
                value: function () {
                  var e;
                  (this.y = 0),
                    this.ctx.$store.state.app.features.hasMouse
                      ? (r.a.ticker.add(this.tick),
                        r.a.ticker.lagSmoothing(0),
                        (this.lenis = new l.a({
                          lerp: 0.175,
                          wheelMultiplier: 1.25,
                          autoResize: !1,
                        })),
                        this.lenis.on("scroll", this.scroll))
                      : (r.a.ticker.add(this.mobileTick),
                        window.addEventListener("scroll", this.mobileScroll)),
                    null === (e = this.ctx) ||
                      void 0 === e ||
                      null === (e = e.$nuxt) ||
                      void 0 === e ||
                      e.$on("scroll-reset", this.reset);
                },
              },
            ]
          );
        })();
      t.a = function (e, t) {
        var i = e.app;
        t("s", new o(i));
      };
    },
    272: function (e, t, i) {
      "use strict";
      var n = i(10),
        a = i(11),
        r =
          (i(91),
          i(55),
          i(2),
          i(17),
          (function () {
            return Object(a.a)(
              function e(t) {
                var i = this;
                Object(n.a)(this, e),
                  (this.mount = function (e) {
                    null == e ||
                      e.forEach(function (e) {
                        var t,
                          n,
                          a,
                          r,
                          s = e.target;
                        e.isIntersecting
                          ? null ===
                              (t = i.cache.find(function (e) {
                                return e.el == s;
                              })) ||
                            void 0 === t ||
                            null === (n = t.cbe) ||
                            void 0 === n ||
                            n.call(t)
                          : null ===
                              (a = i.cache.find(function (e) {
                                return e.el == s;
                              })) ||
                            void 0 === a ||
                            null === (r = a.cbl) ||
                            void 0 === r ||
                            r.call(a);
                      });
                  }),
                  (this.remove = function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    if (e) {
                      var t = i.cache.indexOf(
                        i.cache.find(function (t) {
                          return t.el === e;
                        })
                      );
                      t && (i.cache.splice(t, 1), i.o.unobserve(e));
                    }
                  }),
                  (this.app = t),
                  (this.cache = []),
                  (this.o = new IntersectionObserver(this.mount, {
                    rootMargin: "0% 0% 0% 0%",
                  }));
              },
              [
                {
                  key: "add",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null;
                    e &&
                      (this.cache.push({ el: e, cbe: t, cbl: i }),
                      this.o.observe(e));
                  },
                },
              ]
            );
          })());
      t.a = function (e, t) {
        var i = e.app;
        t("lazy", new r(i));
      };
    },
    273: function (e, t, i) {
      "use strict";
      var n = i(11),
        a = i(10),
        r =
          (i(2),
          i(17),
          Object(n.a)(function e(t) {
            var i = this;
            Object(a.a)(this, e),
              (this.mount = function (e) {
                null == e ||
                  e.forEach(function (e) {
                    var t,
                      i,
                      n = e.target;
                    e.isIntersecting
                      ? null == n ||
                        null === (t = n.play) ||
                        void 0 === t ||
                        t.call(n)
                      : null == n ||
                        null === (i = n.pause) ||
                        void 0 === i ||
                        i.call(n);
                  });
              }),
              (this.observe = function (e) {
                i.o.observe(e);
              }),
              (this.unobserve = function (e) {
                i.o.unobserve(e);
              }),
              (this.app = t),
              (this.o = new IntersectionObserver(this.mount, {
                rootMargin: "25% 25% 25% 25%",
              }));
          }));
      t.a = function (e, t) {
        var i = e.app;
        t("lazyVid", new r(i));
      };
    },
    274: function (e, t, i) {
      "use strict";
      var n = i(7),
        a = i(10),
        r = i(11),
        s = (i(38), i(394)),
        l = i.n(s),
        o = i(395),
        d = i.n(o),
        u = i(396),
        m = i.n(u),
        c = i(397),
        v = i.n(c),
        p = i(398),
        f = i.n(p),
        g = i(399),
        k = i.n(g),
        h = i(400),
        D = i(401),
        b = i.n(D),
        w = i(402),
        C = i.n(w),
        x = i(403),
        F = i.n(x),
        S = i(404),
        y = i.n(S),
        N = i(405),
        E = i(406);
      function _(e) {
        var t = e.query,
          i = e.variables,
          n = e.preview
            ? "https://graphql.datocms.com/preview"
            : "https://graphql.datocms.com/";
        return new N.GraphQLClient(n, {
          headers: { authorization: "Bearer ".concat(E.token) },
        }).request(t, i);
      }
      var B = (function () {
        return Object(r.a)(
          function e(t) {
            Object(a.a)(this, e), (this.store = t);
          },
          [
            {
              key: "getPage",
              value:
                ((t = Object(n.a)(
                  regeneratorRuntime.mark(function e(t) {
                    var i, n, a, r, s;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (i = t.slug),
                                (n = t.preview),
                                (a = t.variables),
                                (r = null),
                                (e.t0 = i),
                                (e.next =
                                  "gifs" === e.t0
                                    ? 5
                                    : "comics-detail" === e.t0
                                    ? 7
                                    : "comics" === e.t0
                                    ? 9
                                    : "episodes" === e.t0
                                    ? 11
                                    : "collabs" === e.t0
                                    ? 13
                                    : "media" === e.t0
                                    ? 15
                                    : "blog-detail" === e.t0
                                    ? 17
                                    : "blog" === e.t0
                                    ? 19
                                    : "home" === e.t0
                                    ? 21
                                    : "memes" === e.t0
                                    ? 23
                                    : 25);
                              break;
                            case 5:
                              return (r = m.a), e.abrupt("break", 25);
                            case 7:
                              return (r = v.a), e.abrupt("break", 25);
                            case 9:
                              return (r = f.a), e.abrupt("break", 25);
                            case 11:
                              return (r = k.a), e.abrupt("break", 25);
                            case 13:
                              return (r = h.CollabIndex), e.abrupt("break", 25);
                            case 15:
                              return (r = b.a), e.abrupt("break", 25);
                            case 17:
                              return (r = C.a), e.abrupt("break", 25);
                            case 19:
                              return (r = F.a), e.abrupt("break", 25);
                            case 21:
                              return (r = d.a), e.abrupt("break", 25);
                            case 23:
                              return (r = y.a), e.abrupt("break", 25);
                            case 25:
                              return (
                                (e.prev = 25),
                                (e.next = 28),
                                _({ query: r, preview: n, variables: a })
                              );
                            case 28:
                              return (s = e.sent), e.abrupt("return", s);
                            case 32:
                              return (
                                (e.prev = 32),
                                (e.t1 = e.catch(25)),
                                e.abrupt("return", e.t1)
                              );
                            case 36:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[25, 32]]
                    );
                  })
                )),
                function (e) {
                  return t.apply(this, arguments);
                }),
            },
            {
              key: "getSettings",
              value:
                ((e = Object(n.a)(
                  regeneratorRuntime.mark(function e() {
                    var t, i, n;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (t = l.a),
                                (i = t && t.preview),
                                (e.next = 5),
                                _({ query: t, preview: i })
                              );
                            case 5:
                              return (n = e.sent), e.abrupt("return", n);
                            case 9:
                              return (
                                (e.prev = 9),
                                (e.t0 = e.catch(0)),
                                e.abrupt("return", e.t0)
                              );
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 9]]
                    );
                  })
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            },
          ]
        );
        var e, t;
      })();
      t.a = function (e, t) {
        var i = e.store;
        t("dato", new B(i));
      };
    },
    275: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = {
          props: {
            image: { type: String, required: !0 },
            altText: { type: String, required: !1, default: "" },
          },
          data: function () {
            return { loaded: !1 };
          },
        },
        a = (i(491), i(16)),
        r = Object(a.a)(
          n,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "figure",
              { staticClass: "media" },
              [
                e._t("default"),
                e._v(" "),
                t("img", {
                  staticClass: "media__image",
                  class: e.loaded && "is-loaded",
                  attrs: { src: e.image, alt: e.altText, draggable: "false" },
                  on: {
                    load: function (t) {
                      e.loaded = !0;
                    },
                  },
                }),
              ],
              2
            );
          },
          [],
          !1,
          null,
          "156a094a",
          null
        );
      t.default = r.exports;
    },
    276: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = { mixins: [i(183).a] },
        a = i(16),
        r = Object(a.a)(
          n,
          function () {
            var e = this;
            return (0, e._self._c)(
              e.componentType,
              e._b({ tag: "component" }, "component", e.buttonProps, !1),
              [e._t("default")],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = r.exports;
    },
    279: function (e, t, i) {
      "use strict";
      i.r(t);
      i(85);
      var n = {
          props: {
            image: { type: String, required: !0 },
            imageMobile: { type: String, required: !1 },
            cover: { type: Boolean, default: !1 },
          },
          data: function () {
            return { loaded: !1 };
          },
          computed: {
            small: function () {
              return this.imageMobile || this.image;
            },
          },
        },
        a = (i(474), i(16)),
        r = Object(a.a)(
          n,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "figure",
              {
                staticClass: "media",
                class: e.cover ? "media-fill" : "media-fit",
              },
              [
                e._t("default"),
                e._v(" "),
                t("picture", [
                  t("source", {
                    attrs: { media: "(max-width: 649px)", srcset: e.small },
                  }),
                  e._v(" "),
                  t("img", {
                    staticClass: "media__image",
                    class: e.loaded && "is-loaded",
                    attrs: { src: e.image, alt: "", draggable: "false" },
                    on: {
                      load: function (t) {
                        e.loaded = !0;
                      },
                    },
                  }),
                ]),
              ],
              2
            );
          },
          [],
          !1,
          null,
          "0a39772a",
          null
        );
      t.default = r.exports;
    },
    31: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return r;
        }),
        i.d(t, "c", function () {
          return s;
        });
      var n = i(66),
        a = function (e) {
          return (
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : document
          ).querySelector(e);
        },
        r = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : document;
          return Object(n.a)(t.querySelectorAll(e));
        },
        s = function (e) {
          return e.getBoundingClientRect();
        };
    },
    328: function (e, t, i) {
      var n = i(473);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
      (0, i(76).default)("1871ae14", n, !0, { sourceMap: !1 });
    },
    329: function (e, t, i) {
      var n = i(475);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
      (0, i(76).default)("89382164", n, !0, { sourceMap: !1 });
    },
    330: function (e, t, i) {
      var n = i(477);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
      (0, i(76).default)("f4eec284", n, !0, { sourceMap: !1 });
    },
    331: function (e, t, i) {
      var n = i(480);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
      (0, i(76).default)("65487fb8", n, !0, { sourceMap: !1 });
    },
    336: function (e, t, i) {
      var n = i(492);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
      (0, i(76).default)("24c79e73", n, !0, { sourceMap: !1 });
    },
    337: function (e, t, i) {
      var n = i(494);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
      (0, i(76).default)("34e4f7e0", n, !0, { sourceMap: !1 });
    },
    338: function (e, t, i) {
      var n = i(496);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
      (0, i(76).default)("67cbcd3c", n, !0, { sourceMap: !1 });
    },
    376: function (e, t) {},
    380: function (e, t) {},
    394: function (e, t, i) {
      var n = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "Settings" },
            variableDefinitions: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "site" },
                  name: { kind: "Name", value: "_site" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "globalSeo" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "siteName" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "titleSuffix" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "twitterAccount" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fallbackSeo" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "description",
                                    },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "title" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "twitterCard",
                                    },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "image" },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                          arguments: [],
                                          directives: [],
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "favicon" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "mimeType" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "faviconMetaTags" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "content" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tag" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "global" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "coingecko" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "coinmarketcap" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "etherscan" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "instagram" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegram" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitter" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "uniswap" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "footTitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "footSubtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "footMenu" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "label" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "to" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "highlightTag" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "highlightTitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "highlightText" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "highlightLink" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "highlight" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "misc" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tag" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "text" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "link" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "to" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "ImageFragment",
                                    },
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "videoUrl" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "quickStart" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "exchanges" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "logo" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "quickSteps" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "text" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "blog" },
                  name: { kind: "Name", value: "allBlogs" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "StringValue", value: "7", block: !1 },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "slug" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tags" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "categories" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "excerpt" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "featuredImage" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              alias: { kind: "Name", value: "thumbnail" },
                              name: { kind: "Name", value: "url" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "imgixParams" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "fit" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "max",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "w" },
                                        value: {
                                          kind: "IntValue",
                                          value: "1000",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "h" },
                                        value: {
                                          kind: "IntValue",
                                          value: "1000",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "auto" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "compress",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "featuredVideoUrl" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "comics" },
                  name: { kind: "Name", value: "allComics" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "StringValue", value: "9", block: !1 },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "slug" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "subtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "text" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "opensea" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "featuredImage" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              alias: { kind: "Name", value: "thumbnail" },
                              name: { kind: "Name", value: "url" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "imgixParams" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "fit" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "max",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "w" },
                                        value: {
                                          kind: "IntValue",
                                          value: "700",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "h" },
                                        value: {
                                          kind: "IntValue",
                                          value: "700",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "auto" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "compress",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                              directives: [],
                            },
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "ImageFragment" },
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "collabs" },
                  name: { kind: "Name", value: "allCollabs" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "StringValue", value: "4", block: !1 },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "slug" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "subtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "featuredImage" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "ImageFragment" },
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "logos" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "logo" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "episodes" },
                  name: { kind: "Name", value: "allEpisodes" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "StringValue", value: "3", block: !1 },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "slug" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "thumbnail" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              alias: { kind: "Name", value: "thumbnail" },
                              name: { kind: "Name", value: "url" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "imgixParams" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "fit" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "max",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "w" },
                                        value: {
                                          kind: "IntValue",
                                          value: "700",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "h" },
                                        value: {
                                          kind: "IntValue",
                                          value: "700",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "auto" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "compress",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "videoUrl" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "gifs" },
                  name: { kind: "Name", value: "allGifs" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "StringValue", value: "9", block: !1 },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "slug" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "gif" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              alias: { kind: "Name", value: "src" },
                              name: { kind: "Name", value: "url" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "imgixParams" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "fit" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "max",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "w" },
                                        value: {
                                          kind: "IntValue",
                                          value: "300",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "h" },
                                        value: {
                                          kind: "IntValue",
                                          value: "300",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "auto" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "compress",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "partners" },
                  name: { kind: "Name", value: "allPartners" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "name" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "slug" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "url" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "logo" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 2129 },
      };
      n.loc.source = {
        body: '#import "../fragments/image.graphql"\n\nquery Settings {\n  site: _site {\n    globalSeo {\n      siteName\n      titleSuffix\n      twitterAccount\n      fallbackSeo {\n        description\n        title\n        twitterCard\n        image {\n          url\n        }\n      }\n    }\n    favicon {\n      mimeType\n      url\n    }\n    faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n  }\n  global {\n    coingecko\n    coinmarketcap\n    etherscan\n    instagram\n    telegram\n    twitter\n    uniswap\n    footTitle\n    footSubtitle\n    footMenu {\n      id\n      label\n      to\n    }\n    highlightTag\n    highlightTitle\n    highlightText\n    highlightLink\n    highlight\n  \tmisc {\n\t\t\tid\n\t\t\ttag\n\t\t\ttitle\n\t\t\ttext\n\t\t\tlink {\n\t\t\t\tlabel\n\t\t\t\tto\n\t\t\t}\n\t\t\timage {\n\t\t\t\t...ImageFragment\n\t\t\t}\n      videoUrl\n      quickStart\n\t\t}\n    exchanges {\n      id\n      name\n      url\n      logo {\n        url\n      }\n    }\n    quickSteps {\n      id\n      title\n      text\n    }\n  }\n  blog: allBlogs(first: "7") {\n    id\n    title\n    slug\n    tags {\n      id\n      title\n      slug\n    }\n    categories {\n      id\n      title\n      slug\n    }\n    excerpt\n    featuredImage {\n      thumbnail: url(imgixParams: { fit: max, w: 1000, h: 1000, auto: compress })\n    }\n    featuredVideoUrl\n  }\n  comics: allComics(first: "9") {\n    id\n    title\n    slug\n    subtitle\n    text\n    opensea\n    featuredImage {\n      thumbnail: url(imgixParams: { fit: max, w: 700, h: 700, auto: compress })\n      ...ImageFragment\n    }\n  }\n  collabs: allCollabs(first: "4") {\n    id\n    title\n    slug\n    subtitle\n    featuredImage {\n      ...ImageFragment\n    }\n    logos {\n      id\n      name\n      url\n      logo {\n        url\n      }\n    }\n  }\n  episodes: allEpisodes(first: "3") {\n    id\n    title\n    slug\n    thumbnail {\n      thumbnail: url(imgixParams: { fit: max, w: 700, h: 700, auto: compress })\n    }\n    videoUrl\n  }\n  gifs: allGifs(first: "9") {\n    id\n    title\n    slug\n    gif {\n      url\n      src: url(imgixParams: { fit: max, w: 300, h: 300, auto: compress })\n    }\n  }\n  partners: allPartners {\n    id\n    name\n    slug\n    url\n    logo {\n      url\n    }\n  }\n}\n',
        name: "GraphQL request",
        locationOffset: { line: 1, column: 1 },
      };
      var a = {};
      function r(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && t.add(i.name.value);
        }
        e.selectionSet &&
          e.selectionSet.selections.forEach(function (e) {
            r(e, t);
          }),
          e.variableDefinitions &&
            e.variableDefinitions.forEach(function (e) {
              r(e, t);
            }),
          e.definitions &&
            e.definitions.forEach(function (e) {
              r(e, t);
            });
      }
      n.definitions = n.definitions.concat(
        i(73).definitions.filter(function (e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var t = e.name.value;
          return !a[t] && ((a[t] = !0), !0);
        })
      );
      var s = {};
      function l(e, t) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == t) return n;
        }
      }
      n.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          r(e, t), (s[e.name.value] = t);
        }
      }),
        (e.exports = n),
        (e.exports.Settings = (function (e, t) {
          var i = { kind: e.kind, definitions: [l(e, t)] };
          e.hasOwnProperty("loc") && (i.loc = e.loc);
          var n = s[t] || new Set(),
            a = new Set(),
            r = new Set();
          for (
            n.forEach(function (e) {
              r.add(e);
            });
            r.size > 0;

          ) {
            var o = r;
            (r = new Set()),
              o.forEach(function (e) {
                a.has(e) ||
                  (a.add(e),
                  (s[e] || new Set()).forEach(function (e) {
                    r.add(e);
                  }));
              });
          }
          return (
            a.forEach(function (t) {
              var n = l(e, t);
              n && i.definitions.push(n);
            }),
            i
          );
        })(n, "Settings"));
    },
    395: function (e, t, i) {
      var n = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "Home" },
            variableDefinitions: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "page" },
                  name: { kind: "Name", value: "home" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "subtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "grid" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "ImageFragment" },
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "missionBubble" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "missionTitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "missionSubtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "missionText" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "govTitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "govSubtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mediaTitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mediaSubtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mediaCarousel" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "text" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    alias: { kind: "Name", value: "thumbnail" },
                                    name: { kind: "Name", value: "url" },
                                    arguments: [
                                      {
                                        kind: "Argument",
                                        name: {
                                          kind: "Name",
                                          value: "imgixParams",
                                        },
                                        value: {
                                          kind: "ObjectValue",
                                          fields: [
                                            {
                                              kind: "ObjectField",
                                              name: {
                                                kind: "Name",
                                                value: "fit",
                                              },
                                              value: {
                                                kind: "EnumValue",
                                                value: "max",
                                              },
                                            },
                                            {
                                              kind: "ObjectField",
                                              name: {
                                                kind: "Name",
                                                value: "w",
                                              },
                                              value: {
                                                kind: "IntValue",
                                                value: "700",
                                              },
                                            },
                                            {
                                              kind: "ObjectField",
                                              name: {
                                                kind: "Name",
                                                value: "h",
                                              },
                                              value: {
                                                kind: "IntValue",
                                                value: "700",
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "link" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "to" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "marquee" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "text" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "cardsBig" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tag" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "text" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "link" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "to" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "ImageFragment",
                                    },
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "videoUrl" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "cardsSmall" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              alias: { kind: "Name", value: "tag" },
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "text" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "link" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "to" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "ImageFragment",
                                    },
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "misc" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tag" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "text" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "link" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "to" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "ImageFragment",
                                    },
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "videoUrl" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "quickStart" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "seo" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "description" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 837 },
      };
      n.loc.source = {
        body: '#import "../fragments/image.graphql"\n\nquery Home {\n\tpage: home {\n        id\n\t\ttitle\n\t\tsubtitle\n\t\tgrid {\n\t\t\t...ImageFragment\n\t\t}\n\t\tmissionBubble\n\t\tmissionTitle\n\t\tmissionSubtitle\n\t\tmissionText\n\t\tgovTitle\n\t\tgovSubtitle\n\t\tmediaTitle\n\t\tmediaSubtitle\n\t\tmediaCarousel {\n\t\t\tid\n\t\t\ttext\n\t\t\timage {\n\t\t\t\tthumbnail: url(imgixParams: { fit: max, w: 700, h: 700 })\n\t\t\t}\n\t\t\tlink {\n\t\t\t\tlabel\n\t\t\t\tto\n\t\t\t}\n\t\t}\n\t\tmarquee {\n\t\t\ttext\n\t\t}\n\t\tcardsBig {\n\t\t\tid\n\t\t\ttag\n\t\t\ttitle\n\t\t\ttext\n\t\t\tlink {\n\t\t\t\tlabel\n\t\t\t\tto\n\t\t\t}\n\t\t\timage {\n\t\t\t\t...ImageFragment\n\t\t\t}\n\t\t\tvideoUrl\n\t\t}\n\t\tcardsSmall {\n\t\t\tid\n\t\t\ttag: title\n\t\t\ttext\n\t\t\tlink {\n\t\t\t\tlabel\n\t\t\t\tto\n\t\t\t}\n\t\t\timage {\n\t\t\t\t...ImageFragment\n\t\t\t}\n\t\t}\n\t\tmisc {\n\t\t\tid\n\t\t\ttag\n\t\t\ttitle\n\t\t\ttext\n\t\t\tlink {\n\t\t\t\tlabel\n\t\t\t\tto\n\t\t\t}\n\t\t\timage {\n\t\t\t\t...ImageFragment\n\t\t\t}\n\t\t\tvideoUrl\n\t\t\tquickStart\n\t\t}\n\t\tseo {\n\t\t\ttitle\n\t\t\tdescription\n\t\t}\n\t}\n}',
        name: "GraphQL request",
        locationOffset: { line: 1, column: 1 },
      };
      var a = {};
      function r(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && t.add(i.name.value);
        }
        e.selectionSet &&
          e.selectionSet.selections.forEach(function (e) {
            r(e, t);
          }),
          e.variableDefinitions &&
            e.variableDefinitions.forEach(function (e) {
              r(e, t);
            }),
          e.definitions &&
            e.definitions.forEach(function (e) {
              r(e, t);
            });
      }
      n.definitions = n.definitions.concat(
        i(73).definitions.filter(function (e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var t = e.name.value;
          return !a[t] && ((a[t] = !0), !0);
        })
      );
      var s = {};
      function l(e, t) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == t) return n;
        }
      }
      n.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          r(e, t), (s[e.name.value] = t);
        }
      }),
        (e.exports = n),
        (e.exports.Home = (function (e, t) {
          var i = { kind: e.kind, definitions: [l(e, t)] };
          e.hasOwnProperty("loc") && (i.loc = e.loc);
          var n = s[t] || new Set(),
            a = new Set(),
            r = new Set();
          for (
            n.forEach(function (e) {
              r.add(e);
            });
            r.size > 0;

          ) {
            var o = r;
            (r = new Set()),
              o.forEach(function (e) {
                a.has(e) ||
                  (a.add(e),
                  (s[e] || new Set()).forEach(function (e) {
                    r.add(e);
                  }));
              });
          }
          return (
            a.forEach(function (t) {
              var n = l(e, t);
              n && i.definitions.push(n);
            }),
            i
          );
        })(n, "Home"));
    },
    396: function (e, t, i) {
      var n = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "GifIndex" },
            variableDefinitions: [
              {
                kind: "VariableDefinition",
                variable: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "IntType" },
                },
                directives: [],
              },
              {
                kind: "VariableDefinition",
                variable: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "IntType" },
                },
                directives: [],
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "page" },
                  name: { kind: "Name", value: "gifIndex" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "subtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "misc" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tag" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "text" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "link" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "to" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "ImageFragment",
                                    },
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "seo" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "description" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "gifs" },
                  name: { kind: "Name", value: "allGifs" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "first" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "skip" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "skip" },
                      },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "slug" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "gif" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              alias: { kind: "Name", value: "src" },
                              name: { kind: "Name", value: "url" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "imgixParams" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "fit" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "max",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "w" },
                                        value: {
                                          kind: "IntValue",
                                          value: "300",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "h" },
                                        value: {
                                          kind: "IntValue",
                                          value: "300",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "auto" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "compress",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "url" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "total" },
                  name: { kind: "Name", value: "_allGifsMeta" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "count" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 592 },
      };
      n.loc.source = {
        body: '#import "../fragments/image.graphql"\n\nquery GifIndex($first: IntType, $skip: IntType) {\n\tpage: gifIndex {\n        title\n        subtitle\n\t\tmisc {\n\t\t\tid\n\t\t\ttag\n\t\t\ttitle\n\t\t\ttext\n\t\t\tlink {\n\t\t\t\tlabel\n\t\t\t\tto\n\t\t\t}\n\t\t\timage {\n\t\t\t\t...ImageFragment\n\t\t\t}\n\t\t}\n        seo {\n            title\n            description\n        }\n    }\n    gifs: allGifs(first: $first, skip: $skip) {\n        id\n        title\n        slug\n        gif {\n            url\n            src: url(imgixParams: { fit: max, w: 300, h: 300, auto: compress })\n        }\n        url\n    }\n    total: _allGifsMeta {\n        count\n    }\n}',
        name: "GraphQL request",
        locationOffset: { line: 1, column: 1 },
      };
      var a = {};
      function r(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && t.add(i.name.value);
        }
        e.selectionSet &&
          e.selectionSet.selections.forEach(function (e) {
            r(e, t);
          }),
          e.variableDefinitions &&
            e.variableDefinitions.forEach(function (e) {
              r(e, t);
            }),
          e.definitions &&
            e.definitions.forEach(function (e) {
              r(e, t);
            });
      }
      n.definitions = n.definitions.concat(
        i(73).definitions.filter(function (e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var t = e.name.value;
          return !a[t] && ((a[t] = !0), !0);
        })
      );
      var s = {};
      function l(e, t) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == t) return n;
        }
      }
      n.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          r(e, t), (s[e.name.value] = t);
        }
      }),
        (e.exports = n),
        (e.exports.GifIndex = (function (e, t) {
          var i = { kind: e.kind, definitions: [l(e, t)] };
          e.hasOwnProperty("loc") && (i.loc = e.loc);
          var n = s[t] || new Set(),
            a = new Set(),
            r = new Set();
          for (
            n.forEach(function (e) {
              r.add(e);
            });
            r.size > 0;

          ) {
            var o = r;
            (r = new Set()),
              o.forEach(function (e) {
                a.has(e) ||
                  (a.add(e),
                  (s[e] || new Set()).forEach(function (e) {
                    r.add(e);
                  }));
              });
          }
          return (
            a.forEach(function (t) {
              var n = l(e, t);
              n && i.definitions.push(n);
            }),
            i
          );
        })(n, "GifIndex"));
    },
    397: function (e, t, i) {
      var n = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "ComicBySlug" },
            variableDefinitions: [
              {
                kind: "VariableDefinition",
                variable: {
                  kind: "Variable",
                  name: { kind: "Name", value: "slug" },
                },
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "String" },
                },
                directives: [],
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "page" },
                  name: { kind: "Name", value: "comic" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "filter" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "slug" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "slug" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "slug" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "subtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "opensea" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "featuredImage" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "ImageFragment" },
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 265 },
      };
      n.loc.source = {
        body: '#import "../fragments/image.graphql"\n\nquery ComicBySlug($slug: String) {\n    page: comic(filter: { slug: { eq: $slug } }) {\n        id\n        title\n        slug\n        subtitle\n        opensea\n        featuredImage {\n            ...ImageFragment\n        }\n    }\n}',
        name: "GraphQL request",
        locationOffset: { line: 1, column: 1 },
      };
      var a = {};
      function r(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && t.add(i.name.value);
        }
        e.selectionSet &&
          e.selectionSet.selections.forEach(function (e) {
            r(e, t);
          }),
          e.variableDefinitions &&
            e.variableDefinitions.forEach(function (e) {
              r(e, t);
            }),
          e.definitions &&
            e.definitions.forEach(function (e) {
              r(e, t);
            });
      }
      n.definitions = n.definitions.concat(
        i(73).definitions.filter(function (e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var t = e.name.value;
          return !a[t] && ((a[t] = !0), !0);
        })
      );
      var s = {};
      function l(e, t) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == t) return n;
        }
      }
      n.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          r(e, t), (s[e.name.value] = t);
        }
      }),
        (e.exports = n),
        (e.exports.ComicBySlug = (function (e, t) {
          var i = { kind: e.kind, definitions: [l(e, t)] };
          e.hasOwnProperty("loc") && (i.loc = e.loc);
          var n = s[t] || new Set(),
            a = new Set(),
            r = new Set();
          for (
            n.forEach(function (e) {
              r.add(e);
            });
            r.size > 0;

          ) {
            var o = r;
            (r = new Set()),
              o.forEach(function (e) {
                a.has(e) ||
                  (a.add(e),
                  (s[e] || new Set()).forEach(function (e) {
                    r.add(e);
                  }));
              });
          }
          return (
            a.forEach(function (t) {
              var n = l(e, t);
              n && i.definitions.push(n);
            }),
            i
          );
        })(n, "ComicBySlug"));
    },
    398: function (e, t, i) {
      var n = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "ComicIndex" },
            variableDefinitions: [
              {
                kind: "VariableDefinition",
                variable: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "IntType" },
                },
                directives: [],
              },
              {
                kind: "VariableDefinition",
                variable: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "IntType" },
                },
                directives: [],
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "page" },
                  name: { kind: "Name", value: "comicIndex" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "subtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "misc" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tag" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "text" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "link" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "to" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "ImageFragment",
                                    },
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "seo" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "description" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "comics" },
                  name: { kind: "Name", value: "allComics" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "first" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "skip" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "skip" },
                      },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "slug" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "subtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "text" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "opensea" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "categories" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "featuredImage" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "ImageFragment" },
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "total" },
                  name: { kind: "Name", value: "_allComicsMeta" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "count" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 657 },
      };
      n.loc.source = {
        body: '#import "../fragments/image.graphql"\n\nquery ComicIndex($first: IntType, $skip: IntType) {\n\tpage: comicIndex {\n        title\n        subtitle\n\t\tmisc {\n\t\t\tid\n\t\t\ttag\n\t\t\ttitle\n\t\t\ttext\n\t\t\tlink {\n\t\t\t\tlabel\n\t\t\t\tto\n\t\t\t}\n\t\t\timage {\n\t\t\t\t...ImageFragment\n\t\t\t}\n\t\t}\n        seo {\n            title\n            description\n        }\n\t}\n    comics: allComics(first: $first, skip: $skip) {\n        id\n        title\n        slug\n        subtitle\n        text\n        opensea\n        categories {\n            id\n            title\n            slug\n        }\n        featuredImage {\n            ...ImageFragment\n        }\n    }\n    total: _allComicsMeta {\n        count\n    }\n}',
        name: "GraphQL request",
        locationOffset: { line: 1, column: 1 },
      };
      var a = {};
      function r(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && t.add(i.name.value);
        }
        e.selectionSet &&
          e.selectionSet.selections.forEach(function (e) {
            r(e, t);
          }),
          e.variableDefinitions &&
            e.variableDefinitions.forEach(function (e) {
              r(e, t);
            }),
          e.definitions &&
            e.definitions.forEach(function (e) {
              r(e, t);
            });
      }
      n.definitions = n.definitions.concat(
        i(73).definitions.filter(function (e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var t = e.name.value;
          return !a[t] && ((a[t] = !0), !0);
        })
      );
      var s = {};
      function l(e, t) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == t) return n;
        }
      }
      n.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          r(e, t), (s[e.name.value] = t);
        }
      }),
        (e.exports = n),
        (e.exports.ComicIndex = (function (e, t) {
          var i = { kind: e.kind, definitions: [l(e, t)] };
          e.hasOwnProperty("loc") && (i.loc = e.loc);
          var n = s[t] || new Set(),
            a = new Set(),
            r = new Set();
          for (
            n.forEach(function (e) {
              r.add(e);
            });
            r.size > 0;

          ) {
            var o = r;
            (r = new Set()),
              o.forEach(function (e) {
                a.has(e) ||
                  (a.add(e),
                  (s[e] || new Set()).forEach(function (e) {
                    r.add(e);
                  }));
              });
          }
          return (
            a.forEach(function (t) {
              var n = l(e, t);
              n && i.definitions.push(n);
            }),
            i
          );
        })(n, "ComicIndex"));
    },
    399: function (e, t, i) {
      var n = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "EpisodeIndex" },
            variableDefinitions: [
              {
                kind: "VariableDefinition",
                variable: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "IntType" },
                },
                directives: [],
              },
              {
                kind: "VariableDefinition",
                variable: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "IntType" },
                },
                directives: [],
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "page" },
                  name: { kind: "Name", value: "episodeIndex" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "subtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "misc" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tag" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "text" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "link" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "to" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "ImageFragment",
                                    },
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "seo" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "description" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "episodes" },
                  name: { kind: "Name", value: "allEpisodes" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "first" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "skip" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "skip" },
                      },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "slug" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "thumbnail" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              alias: { kind: "Name", value: "large" },
                              name: { kind: "Name", value: "url" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "imgixParams" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "fit" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "max",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "w" },
                                        value: {
                                          kind: "IntValue",
                                          value: "2000",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "h" },
                                        value: {
                                          kind: "IntValue",
                                          value: "1000",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "auto" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "compress",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              alias: { kind: "Name", value: "thumbnail" },
                              name: { kind: "Name", value: "url" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "imgixParams" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "fit" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "max",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "w" },
                                        value: {
                                          kind: "IntValue",
                                          value: "700",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "h" },
                                        value: {
                                          kind: "IntValue",
                                          value: "700",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "auto" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "compress",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "videoUrl" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "total" },
                  name: { kind: "Name", value: "_allEpisodesMeta" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "count" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 640 },
      };
      n.loc.source = {
        body: '#import "../fragments/image.graphql"\n\nquery EpisodeIndex($first: IntType, $skip: IntType) {\n\tpage: episodeIndex {\n        title\n        subtitle\n\t\tmisc {\n\t\t\tid\n\t\t\ttag\n\t\t\ttitle\n\t\t\ttext\n\t\t\tlink {\n\t\t\t\tlabel\n\t\t\t\tto\n\t\t\t}\n\t\t\timage {\n\t\t\t\t...ImageFragment\n\t\t\t}\n\t\t}\n        seo {\n            title\n            description\n        }\n\t}\n    episodes: allEpisodes(first: $first, skip: $skip) {\n\t\tid\n\t\ttitle\n\t\tslug\n\t\tthumbnail {\n\t\t\tlarge: url(imgixParams: { fit: max, w: 2000, h: 1000, auto: compress })\n\t\t\tthumbnail: url(imgixParams: { fit: max, w: 700, h: 700, auto: compress })\n\t\t}\n\t\tvideoUrl\n    }\n    total: _allEpisodesMeta {\n        count\n    }\n}',
        name: "GraphQL request",
        locationOffset: { line: 1, column: 1 },
      };
      var a = {};
      function r(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && t.add(i.name.value);
        }
        e.selectionSet &&
          e.selectionSet.selections.forEach(function (e) {
            r(e, t);
          }),
          e.variableDefinitions &&
            e.variableDefinitions.forEach(function (e) {
              r(e, t);
            }),
          e.definitions &&
            e.definitions.forEach(function (e) {
              r(e, t);
            });
      }
      n.definitions = n.definitions.concat(
        i(73).definitions.filter(function (e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var t = e.name.value;
          return !a[t] && ((a[t] = !0), !0);
        })
      );
      var s = {};
      function l(e, t) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == t) return n;
        }
      }
      n.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          r(e, t), (s[e.name.value] = t);
        }
      }),
        (e.exports = n),
        (e.exports.EpisodeIndex = (function (e, t) {
          var i = { kind: e.kind, definitions: [l(e, t)] };
          e.hasOwnProperty("loc") && (i.loc = e.loc);
          var n = s[t] || new Set(),
            a = new Set(),
            r = new Set();
          for (
            n.forEach(function (e) {
              r.add(e);
            });
            r.size > 0;

          ) {
            var o = r;
            (r = new Set()),
              o.forEach(function (e) {
                a.has(e) ||
                  (a.add(e),
                  (s[e] || new Set()).forEach(function (e) {
                    r.add(e);
                  }));
              });
          }
          return (
            a.forEach(function (t) {
              var n = l(e, t);
              n && i.definitions.push(n);
            }),
            i
          );
        })(n, "EpisodeIndex"));
    },
    400: function (e, t, i) {
      var n = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "CollabIndex" },
            variableDefinitions: [
              {
                kind: "VariableDefinition",
                variable: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "IntType" },
                },
                directives: [],
              },
              {
                kind: "VariableDefinition",
                variable: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "IntType" },
                },
                directives: [],
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "page" },
                  name: { kind: "Name", value: "collabIndex" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "subtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "misc" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tag" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "text" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "link" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "to" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "ImageFragment",
                                    },
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "seo" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "description" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "collabs" },
                  name: { kind: "Name", value: "allCollabs" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "first" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "skip" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "skip" },
                      },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "subtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "link" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "featuredImage" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "ImageFragment" },
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "logos" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "logo" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "total" },
                  name: { kind: "Name", value: "_allCollabsMeta" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "count" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 557 },
      };
      n.loc.source = {
        body: '#import "../fragments/image.graphql"\n\nquery CollabIndex($first: IntType, $skip: IntType) {\n\tpage: collabIndex {\n        title\n        subtitle\n\t\tmisc {\n\t\t\tid\n\t\t\ttag\n\t\t\ttitle\n\t\t\ttext\n\t\t\tlink {\n\t\t\t\tlabel\n\t\t\t\tto\n\t\t\t}\n\t\t\timage {\n\t\t\t\t...ImageFragment\n\t\t\t}\n\t\t}\n        seo {\n            title\n            description\n        }\n\t}\n\tcollabs: allCollabs(first: $first, skip: $skip) {\n\t\tid\n\t\ttitle\n\t\tsubtitle\n\t\tlink\n\t\tfeaturedImage {\n\t\t\t...ImageFragment\n\t\t}\n\t\tlogos {\n\t\t\tid\n\t\t\tname\n\t\t\turl\n\t\t\tlogo {\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t}\n\ttotal: _allCollabsMeta {\n        count\n    } \n}',
        name: "GraphQL request",
        locationOffset: { line: 1, column: 1 },
      };
      var a = {};
      function r(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && t.add(i.name.value);
        }
        e.selectionSet &&
          e.selectionSet.selections.forEach(function (e) {
            r(e, t);
          }),
          e.variableDefinitions &&
            e.variableDefinitions.forEach(function (e) {
              r(e, t);
            }),
          e.definitions &&
            e.definitions.forEach(function (e) {
              r(e, t);
            });
      }
      n.definitions = n.definitions.concat(
        i(73).definitions.filter(function (e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var t = e.name.value;
          return !a[t] && ((a[t] = !0), !0);
        })
      );
      var s = {};
      function l(e, t) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == t) return n;
        }
      }
      n.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          r(e, t), (s[e.name.value] = t);
        }
      }),
        (e.exports = n),
        (e.exports.CollabIndex = (function (e, t) {
          var i = { kind: e.kind, definitions: [l(e, t)] };
          e.hasOwnProperty("loc") && (i.loc = e.loc);
          var n = s[t] || new Set(),
            a = new Set(),
            r = new Set();
          for (
            n.forEach(function (e) {
              r.add(e);
            });
            r.size > 0;

          ) {
            var o = r;
            (r = new Set()),
              o.forEach(function (e) {
                a.has(e) ||
                  (a.add(e),
                  (s[e] || new Set()).forEach(function (e) {
                    r.add(e);
                  }));
              });
          }
          return (
            a.forEach(function (t) {
              var n = l(e, t);
              n && i.definitions.push(n);
            }),
            i
          );
        })(n, "CollabIndex"));
    },
    401: function (e, t, i) {
      var n = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "Media" },
            variableDefinitions: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "page" },
                  name: { kind: "Name", value: "mediaIndex" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "subtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "blogTitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "blogSubtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "collabsTitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "collabsSubtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "comicsTitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "comicsSubtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "episodesTitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "episodesSubtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "marquee" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "text" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "misc" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tag" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "text" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "link" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "to" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "ImageFragment",
                                    },
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "videoUrl" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "seo" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "description" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 528 },
      };
      n.loc.source = {
        body: '#import "../fragments/image.graphql"\n\nquery Media {\n\tpage: mediaIndex {\n        title\n        subtitle\n        blogTitle\n        blogSubtitle\n        collabsTitle\n        collabsSubtitle\n        comicsTitle\n        comicsSubtitle\n        episodesTitle\n        episodesSubtitle\n        marquee {\n            text\n        }\n\t\tmisc {\n\t\t\tid\n\t\t\ttag\n\t\t\ttitle\n\t\t\ttext\n\t\t\tlink {\n\t\t\t\tlabel\n\t\t\t\tto\n\t\t\t}\n\t\t\timage {\n\t\t\t\t...ImageFragment\n\t\t\t}\n            videoUrl\n\t\t}\n        seo {\n            title\n            description\n        }\n    }\n}',
        name: "GraphQL request",
        locationOffset: { line: 1, column: 1 },
      };
      var a = {};
      function r(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && t.add(i.name.value);
        }
        e.selectionSet &&
          e.selectionSet.selections.forEach(function (e) {
            r(e, t);
          }),
          e.variableDefinitions &&
            e.variableDefinitions.forEach(function (e) {
              r(e, t);
            }),
          e.definitions &&
            e.definitions.forEach(function (e) {
              r(e, t);
            });
      }
      n.definitions = n.definitions.concat(
        i(73).definitions.filter(function (e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var t = e.name.value;
          return !a[t] && ((a[t] = !0), !0);
        })
      );
      var s = {};
      function l(e, t) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == t) return n;
        }
      }
      n.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          r(e, t), (s[e.name.value] = t);
        }
      }),
        (e.exports = n),
        (e.exports.Media = (function (e, t) {
          var i = { kind: e.kind, definitions: [l(e, t)] };
          e.hasOwnProperty("loc") && (i.loc = e.loc);
          var n = s[t] || new Set(),
            a = new Set(),
            r = new Set();
          for (
            n.forEach(function (e) {
              r.add(e);
            });
            r.size > 0;

          ) {
            var o = r;
            (r = new Set()),
              o.forEach(function (e) {
                a.has(e) ||
                  (a.add(e),
                  (s[e] || new Set()).forEach(function (e) {
                    r.add(e);
                  }));
              });
          }
          return (
            a.forEach(function (t) {
              var n = l(e, t);
              n && i.definitions.push(n);
            }),
            i
          );
        })(n, "Media"));
    },
    402: function (e, t, i) {
      var n = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "BlogBySlug" },
            variableDefinitions: [
              {
                kind: "VariableDefinition",
                variable: {
                  kind: "Variable",
                  name: { kind: "Name", value: "slug" },
                },
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "String" },
                },
                directives: [],
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "page" },
                  name: { kind: "Name", value: "blog" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "filter" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "slug" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "slug" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "slug" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "date" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tags" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "categories" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "featuredImage" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "ImageFragment" },
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "featuredVideoUrl" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "blocks" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: {
                                  kind: "Name",
                                  value: "MediaBlockRecord",
                                },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    alias: { kind: "Name", value: "type" },
                                    name: {
                                      kind: "Name",
                                      value: "_modelApiKey",
                                    },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "title" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "embed" },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "width",
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "height",
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "providerUid",
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "provider",
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "title",
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "embedCode" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "image" },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "FragmentSpread",
                                          name: {
                                            kind: "Name",
                                            value: "ImageFragment",
                                          },
                                          directives: [],
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: {
                                  kind: "Name",
                                  value: "QuoteBlockRecord",
                                },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    alias: { kind: "Name", value: "type" },
                                    name: {
                                      kind: "Name",
                                      value: "_modelApiKey",
                                    },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "quote" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: {
                                  kind: "Name",
                                  value: "TextBlockRecord",
                                },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    alias: { kind: "Name", value: "type" },
                                    name: {
                                      kind: "Name",
                                      value: "_modelApiKey",
                                    },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "text" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 1144 },
      };
      n.loc.source = {
        body: '#import "../fragments/image.graphql"\n\nquery BlogBySlug($slug: String) {\n    page: blog(filter: { slug: { eq: $slug } }) {\n        id\n        title\n        slug\n        date\n        tags {\n            id\n            title\n            slug\n        }\n        categories {\n            id\n            title\n            slug\n        }\n        featuredImage {\n            ...ImageFragment\n        }\n        featuredVideoUrl\n        blocks {\n            ... on MediaBlockRecord {\n                id\n                type: _modelApiKey\n                title\n                embed {\n                    width\n                    height\n                    url\n                    providerUid\n                    provider\n                    title\n                }\n                embedCode\n                image {\n                    ...ImageFragment\n                }\n            }\n            ... on QuoteBlockRecord {\n                id\n                type: _modelApiKey\n                quote\n            }\n            ... on TextBlockRecord {\n                id\n                type: _modelApiKey\n                text\n            }\n        }\n    }\n}',
        name: "GraphQL request",
        locationOffset: { line: 1, column: 1 },
      };
      var a = {};
      function r(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && t.add(i.name.value);
        }
        e.selectionSet &&
          e.selectionSet.selections.forEach(function (e) {
            r(e, t);
          }),
          e.variableDefinitions &&
            e.variableDefinitions.forEach(function (e) {
              r(e, t);
            }),
          e.definitions &&
            e.definitions.forEach(function (e) {
              r(e, t);
            });
      }
      n.definitions = n.definitions.concat(
        i(73).definitions.filter(function (e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var t = e.name.value;
          return !a[t] && ((a[t] = !0), !0);
        })
      );
      var s = {};
      function l(e, t) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == t) return n;
        }
      }
      n.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          r(e, t), (s[e.name.value] = t);
        }
      }),
        (e.exports = n),
        (e.exports.BlogBySlug = (function (e, t) {
          var i = { kind: e.kind, definitions: [l(e, t)] };
          e.hasOwnProperty("loc") && (i.loc = e.loc);
          var n = s[t] || new Set(),
            a = new Set(),
            r = new Set();
          for (
            n.forEach(function (e) {
              r.add(e);
            });
            r.size > 0;

          ) {
            var o = r;
            (r = new Set()),
              o.forEach(function (e) {
                a.has(e) ||
                  (a.add(e),
                  (s[e] || new Set()).forEach(function (e) {
                    r.add(e);
                  }));
              });
          }
          return (
            a.forEach(function (t) {
              var n = l(e, t);
              n && i.definitions.push(n);
            }),
            i
          );
        })(n, "BlogBySlug"));
    },
    403: function (e, t, i) {
      var n = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "BlogIndex" },
            variableDefinitions: [
              {
                kind: "VariableDefinition",
                variable: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "IntType" },
                },
                directives: [],
              },
              {
                kind: "VariableDefinition",
                variable: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "IntType" },
                },
                directives: [],
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "page" },
                  name: { kind: "Name", value: "blogIndex" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "subtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "featured" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tags" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "title" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "slug" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "categories" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "title" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "slug" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "excerpt" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "featuredImage" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    alias: { kind: "Name", value: "thumbnail" },
                                    name: { kind: "Name", value: "url" },
                                    arguments: [
                                      {
                                        kind: "Argument",
                                        name: {
                                          kind: "Name",
                                          value: "imgixParams",
                                        },
                                        value: {
                                          kind: "ObjectValue",
                                          fields: [
                                            {
                                              kind: "ObjectField",
                                              name: {
                                                kind: "Name",
                                                value: "fit",
                                              },
                                              value: {
                                                kind: "EnumValue",
                                                value: "max",
                                              },
                                            },
                                            {
                                              kind: "ObjectField",
                                              name: {
                                                kind: "Name",
                                                value: "w",
                                              },
                                              value: {
                                                kind: "IntValue",
                                                value: "1000",
                                              },
                                            },
                                            {
                                              kind: "ObjectField",
                                              name: {
                                                kind: "Name",
                                                value: "h",
                                              },
                                              value: {
                                                kind: "IntValue",
                                                value: "1000",
                                              },
                                            },
                                            {
                                              kind: "ObjectField",
                                              name: {
                                                kind: "Name",
                                                value: "auto",
                                              },
                                              value: {
                                                kind: "EnumValue",
                                                value: "compress",
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "featuredVideoUrl" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "misc" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tag" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "text" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "link" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "to" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "ImageFragment",
                                    },
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "seo" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "description" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "blog" },
                  name: { kind: "Name", value: "allBlogs" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "first" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "skip" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "skip" },
                      },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "slug" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "date" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tags" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "categories" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "excerpt" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "featuredImage" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              alias: { kind: "Name", value: "thumbnail" },
                              name: { kind: "Name", value: "url" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "imgixParams" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "fit" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "max",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "w" },
                                        value: {
                                          kind: "IntValue",
                                          value: "1000",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "h" },
                                        value: {
                                          kind: "IntValue",
                                          value: "1000",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "auto" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "compress",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "featuredVideoUrl" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "total" },
                  name: { kind: "Name", value: "_allBlogsMeta" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "count" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 1254 },
      };
      n.loc.source = {
        body: '#import "../fragments/image.graphql"\n\nquery BlogIndex($first: IntType, $skip: IntType) {\n\tpage: blogIndex {\n        title\n        subtitle\n        featured {\n            id\n            title\n            slug\n            tags {\n                id\n                title\n                slug\n            }\n            categories {\n                id\n                title\n                slug\n            }\n            excerpt\n            featuredImage {\n                thumbnail: url(imgixParams: { fit: max, w: 1000, h: 1000, auto: compress })\n            }\n            featuredVideoUrl\n        }\n\t\tmisc {\n\t\t\tid\n\t\t\ttag\n\t\t\ttitle\n\t\t\ttext\n\t\t\tlink {\n\t\t\t\tlabel\n\t\t\t\tto\n\t\t\t}\n\t\t\timage {\n\t\t\t\t...ImageFragment\n\t\t\t}\n\t\t}\n        seo {\n            title\n            description\n        }\n    }\n    blog: allBlogs(first: $first, skip: $skip) {\n        id\n        title\n        slug\n        date\n        tags {\n            id\n            title\n            slug\n        }\n        categories {\n            id\n            title\n            slug\n        }\n        excerpt\n        featuredImage {\n            thumbnail: url(imgixParams: { fit: max, w: 1000, h: 1000, auto: compress })\n        }\n        featuredVideoUrl\n    }\n    total: _allBlogsMeta {\n        count\n    }\n}',
        name: "GraphQL request",
        locationOffset: { line: 1, column: 1 },
      };
      var a = {};
      function r(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && t.add(i.name.value);
        }
        e.selectionSet &&
          e.selectionSet.selections.forEach(function (e) {
            r(e, t);
          }),
          e.variableDefinitions &&
            e.variableDefinitions.forEach(function (e) {
              r(e, t);
            }),
          e.definitions &&
            e.definitions.forEach(function (e) {
              r(e, t);
            });
      }
      n.definitions = n.definitions.concat(
        i(73).definitions.filter(function (e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var t = e.name.value;
          return !a[t] && ((a[t] = !0), !0);
        })
      );
      var s = {};
      function l(e, t) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == t) return n;
        }
      }
      n.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          r(e, t), (s[e.name.value] = t);
        }
      }),
        (e.exports = n),
        (e.exports.BlogIndex = (function (e, t) {
          var i = { kind: e.kind, definitions: [l(e, t)] };
          e.hasOwnProperty("loc") && (i.loc = e.loc);
          var n = s[t] || new Set(),
            a = new Set(),
            r = new Set();
          for (
            n.forEach(function (e) {
              r.add(e);
            });
            r.size > 0;

          ) {
            var o = r;
            (r = new Set()),
              o.forEach(function (e) {
                a.has(e) ||
                  (a.add(e),
                  (s[e] || new Set()).forEach(function (e) {
                    r.add(e);
                  }));
              });
          }
          return (
            a.forEach(function (t) {
              var n = l(e, t);
              n && i.definitions.push(n);
            }),
            i
          );
        })(n, "BlogIndex"));
    },
    404: function (e, t, i) {
      var n = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "MemeIndex" },
            variableDefinitions: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "page" },
                  name: { kind: "Name", value: "memeIndex" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "subtitle" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "misc" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tag" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "text" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "link" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "to" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "ImageFragment",
                                    },
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "items" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "ImageFragment" },
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "seo" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "description" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 331 },
      };
      n.loc.source = {
        body: '#import "../fragments/image.graphql"\n\nquery MemeIndex {\n\tpage: memeIndex {\n        title\n        subtitle\n\t\tmisc {\n\t\t\tid\n\t\t\ttag\n\t\t\ttitle\n\t\t\ttext\n\t\t\tlink {\n\t\t\t\tlabel\n\t\t\t\tto\n\t\t\t}\n\t\t\timage {\n\t\t\t\t...ImageFragment\n\t\t\t}\n\t\t}\n\t\titems {\n\t\t\tid\n\t\t\t...ImageFragment\n\t\t}\n        seo {\n            title\n            description\n        }\n    }\n}',
        name: "GraphQL request",
        locationOffset: { line: 1, column: 1 },
      };
      var a = {};
      function r(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && t.add(i.name.value);
        }
        e.selectionSet &&
          e.selectionSet.selections.forEach(function (e) {
            r(e, t);
          }),
          e.variableDefinitions &&
            e.variableDefinitions.forEach(function (e) {
              r(e, t);
            }),
          e.definitions &&
            e.definitions.forEach(function (e) {
              r(e, t);
            });
      }
      n.definitions = n.definitions.concat(
        i(73).definitions.filter(function (e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var t = e.name.value;
          return !a[t] && ((a[t] = !0), !0);
        })
      );
      var s = {};
      function l(e, t) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == t) return n;
        }
      }
      n.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          r(e, t), (s[e.name.value] = t);
        }
      }),
        (e.exports = n),
        (e.exports.MemeIndex = (function (e, t) {
          var i = { kind: e.kind, definitions: [l(e, t)] };
          e.hasOwnProperty("loc") && (i.loc = e.loc);
          var n = s[t] || new Set(),
            a = new Set(),
            r = new Set();
          for (
            n.forEach(function (e) {
              r.add(e);
            });
            r.size > 0;

          ) {
            var o = r;
            (r = new Set()),
              o.forEach(function (e) {
                a.has(e) ||
                  (a.add(e),
                  (s[e] || new Set()).forEach(function (e) {
                    r.add(e);
                  }));
              });
          }
          return (
            a.forEach(function (t) {
              var n = l(e, t);
              n && i.definitions.push(n);
            }),
            i
          );
        })(n, "MemeIndex"));
    },
    406: function (e) {
      e.exports = JSON.parse('{"token":"aacd83b9ef18c3aeb3ef4e2e9ff243"}');
    },
    409: function (e, t, i) {
      "use strict";
      i(85);
      var n = i(7),
        a = (i(38), i(41), i(70), i(33), i(2), i(126), i(13)),
        r = i(31),
        s = {
          head: function () {
            var e = "https://www.elonneiro.vip/",
              t = this.seo,
              i = t.title,
              n = t.description,
              a = t.image;
            return {
              title: i,
              meta: [
                // { hid: "description", name: "description", content: n },
                // { hid: "og:title", property: "og:title", content: i },
                // {
                //   hid: "og:description",
                //   property: "og:description",
                //   content: n,
                // },
                // {
                //   hid: "og:image",
                //   property: "og:image",
                //   // content: null == a ? void 0 : a.url,
                // },
                // { hid: "og:url", property: "og:url", content: e },
                // { hid: "og:type", property: "og:type", content: "website" },
                // {
                //   hid: "twitter:card",
                //   name: "twitter:card",
                //   // content: "summary_large_image",
                // },
                // {
                //   hid: "twitter:site",
                //   name: "twitter:site",
                //   // content: "@dogelonmars",
                // },
                // { hid: "twitter:title", name: "twitter:title", content: i },
                // {
                //   hid: "twitter:description",
                //   name: "twitter:description",
                //   // content: n,
                // },
                // {
                //   hid: "twitter:image",
                //   name: "twitter:image",
                //   // content: null == a ? void 0 : a.url,
                // },
              ].filter(function (e) {
                return e.content;
              }),
              link: [
                // { rel: "icon", type: "image/png", href: this.favicon },
                // { rel: "canonical", href: e },
              ],
            };
          },
          computed: {
            small: function () {
              return this.$store.state.app.bounds.small;
            },
            flags: function () {
              return this.$store.state.app.flags;
            },
            modal: function () {
              return this.$store.state.app.modal;
            },
            site: function () {
              return this.$store.state.app.site;
            },
            seo: function () {
              return this.site.globalSeo.fallbackSeo;
            },
            favicon: function () {
              var e;
              return (
                (null === (e = this.site.favicon) || void 0 === e
                  ? void 0
                  : e.url) || ""
              );
            },
          },
          beforeMount: function () {
            window.scrollTo(0, 0),
              this.$store.commit("app/SET_DEVICE"),
              this.$store.commit("app/SET_FEATURES"),
              this.cmc();
          },
          mounted: function () {
            var e, t, i, n;
            null === (e = this.$r) ||
              void 0 === e ||
              null === (t = e.mount) ||
              void 0 === t ||
              t.call(e, this.$nuxt),
              null === (i = this.$s) ||
                void 0 === i ||
                null === (n = i.mount) ||
                void 0 === n ||
                n.call(i, this.$nuxt),
              history.scrollRestoration &&
                (history.scrollRestoration = "manual");
          },
          methods: {
            cmc: function () {
              var e = this;
              return Object(n.a)(
                regeneratorRuntime.mark(function t() {
                  var i;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              e.$axios.$get(
                                "https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/widget?id=9436"
                              )
                            );
                          case 3:
                            (i = t.sent),
                              e.$store.commit("app/SET_COIN", i.data[9436]),
                              (t.next = 10);
                            break;
                          case 7:
                            (t.prev = 7), (t.t0 = t.catch(0));
                          case 10:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 7]]
                  );
                })
              )();
            },
            modalEnter: function (e, t) {
              t(),
                a.a.fromTo(
                  Object(r.a)(".js-bg", e),
                  { alpha: 0 },
                  { alpha: 1, duration: 0.5, ease: "linear" }
                );
            },
            modalLeave: function (e, t) {
              a.a.to(e, {
                autoAlpha: 0,
                duration: 0.5,
                ease: "power1",
                onComplete: t,
              });
            },
          },
        },
        l = i(16),
        o = Object(l.a)(
          s,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              { staticClass: "relative w-full" },
              [
                t("SiteHead"),
                e._v(" "),
                t("Menu"),
                e._v(" "),
                t("Intro"),
                e._v(" "),
                t("Nuxt", { ref: "page", staticClass: "relative z-2" }),
                e._v(" "),
                t("SiteFoot"),
                e._v(" "),
                t("RiveTransition"),
                e._v(" "),
                t("client-only", [e.small ? e._e() : t("Sides")], 1),
                e._v(" "),
                t(
                  "transition",
                  {
                    attrs: { css: !1 },
                    on: { enter: e.modalEnter, leave: e.modalLeave },
                  },
                  [e.modal.active ? t("Modal") : e._e()],
                  1
                ),
                e._v(" "),
                t("div", {
                  staticClass: "hidden pr-[.25em] ml-[-.25em] overflow-hidden",
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.a = o.exports;
      installComponents(o, {
        SiteHead: i(554).default,
        Menu: i(556).default,
        Intro: i(557).default,
        SiteFoot: i(559).default,
        RiveTransition: i(561).default,
        Sides: i(562).default,
        Modal: i(563).default,
      });
    },
    411: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i(7),
        a = (i(38), i(124), i(13)),
        r = {
          props: {
            amount: { type: Number, default: 7.5 },
            top: { type: Boolean, default: !1 },
          },
          mounted: function () {
            var e = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.$nextTick();
                      case 2:
                        (e.mm = a.a.matchMedia()),
                          e.mm.add("(min-width: 650px)", function () {
                            var t = a.a.fromTo(
                              e.$refs.parallax,
                              { y: "-".concat(e.top ? 0 : e.amount, "rem") },
                              {
                                y: "".concat(
                                  e.top ? 2 * e.amount : e.amount,
                                  "rem"
                                ),
                                ease: "none",
                                scrollTrigger: {
                                  trigger: e.$el,
                                  start: "clamp(top bottom)",
                                  end: "bottom top",
                                  scrub: !0,
                                },
                              }
                            );
                            return function () {
                              null == t || t.kill();
                            };
                          });
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          destroyed: function () {
            var e;
            null === (e = this.mm) || void 0 === e || e.kill();
          },
        },
        s = i(16),
        l = Object(s.a)(
          r,
          function () {
            var e = this._self._c;
            return e("div", { staticClass: "pointer-events-none" }, [
              e("div", { ref: "parallax" }, [this._t("default")], 2),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = l.exports;
    },
    412: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i(66),
        a = i(7),
        r =
          (i(38),
          i(91),
          i(150),
          i(151),
          i(22),
          i(124),
          i(2),
          i(193),
          i(194),
          i(195),
          i(196),
          i(197),
          i(198),
          i(199),
          i(200),
          i(201),
          i(202),
          i(203),
          i(204),
          i(205),
          i(206),
          i(207),
          i(208),
          i(209),
          i(210),
          i(211),
          i(212),
          i(213),
          i(214),
          i(215),
          i(216),
          i(109)),
        s = i(67),
        l = i(413),
        o = {
          mixins: [r.a],
          props: {
            file: { type: String, required: !0 },
            name: { type: String, required: !0 },
            delay: { type: Boolean, required: !1, default: !1 },
            cover: { type: Boolean, required: !1, default: !1 },
            gl: { type: Boolean, required: !1, default: !1 },
            clean: { type: Boolean, required: !1, default: !0 },
            dpr: { type: Number, required: !1, default: 1.75 },
          },
          computed: {
            safari: function () {
              return this.$store.state.app.device.isSafari;
            },
          },
          mounted: function () {
            var e = this;
            return Object(a.a)(
              regeneratorRuntime.mark(function t() {
                var i, a, r, o, d, u;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.$nextTick();
                      case 2:
                        if (
                          ((i = e.gl && !e.safari ? l : s),
                          (a = e.$rive.instances.find(function (t) {
                            return t.name === e.name;
                          })))
                        ) {
                          t.next = 22;
                          break;
                        }
                        if (
                          ((o = document.createElement("canvas")).classList.add(
                            "absolute",
                            "top-0",
                            "left-0",
                            "w-full",
                            "h-full"
                          ),
                          e.$el.appendChild(o),
                          (d =
                            null ===
                              (r = e.$rive.files.find(function (t) {
                                return t.name === e.name;
                              })) || void 0 === r
                              ? void 0
                              : r.file))
                        ) {
                          t.next = 18;
                          break;
                        }
                        return (
                          (t.next = 12),
                          fetch(new Request("/riv/".concat(e.file, ".riv")))
                        );
                      case 12:
                        return (t.next = 14), t.sent.arrayBuffer();
                      case 14:
                        (u = t.sent),
                          (d = new Uint8Array(u)),
                          (d = Object(n.a)(d)),
                          e.$rive.files.push({ name: e.name, file: d });
                      case 18:
                        (e.r = new i.Rive({
                          buffer: d,
                          canvas: o,
                          artboard: e.name,
                          stateMachines: e.name,
                          autoplay: !1,
                          onLoad: function () {
                            e.resize(),
                              !e.clean &&
                                e.$rive.instances.push({
                                  name: e.name,
                                  r: e.r,
                                });
                          },
                        })),
                          e.cover &&
                            (e.r.layout = new i.Layout({ fit: i.Fit.Cover })),
                          (t.next = 27);
                        break;
                      case 22:
                        (e.r = a.r),
                          e.$el.appendChild(e.r.canvas),
                          e.resize(),
                          e.r.reset({
                            artboard: e.name,
                            stateMachines: e.name,
                          });
                      case 27:
                        e.init();
                      case 28:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
        },
        d = i(16),
        u = Object(d.a)(
          o,
          function () {
            return (0, this._self._c)("div", {
              staticClass:
                "absolute top-0 left-0 w-full h-full pointer-events-none has-hover:pointer-events-auto",
            });
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = u.exports;
    },
    415: function (e, t, i) {
      i(416), (e.exports = i(417));
    },
    459: function (e, t, i) {
      var n = i(460);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
      (0, i(76).default)("d706d280", n, !0, { sourceMap: !1 });
    },
    460: function (e, t, i) {
      var n = i(75)(function (e) {
        return e[1];
      });
      n.push([
        e.i,
        '/*! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid;box-sizing:border-box}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:Roboto Flex,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-feature-settings:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.invisible{visibility:hidden}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{bottom:0;left:0;right:0;top:0}.inset-5{bottom:.5rem;left:.5rem;right:.5rem;top:.5rem}.inset-\\[-1px\\]{bottom:-1px;left:-1px;right:-1px;top:-1px}.-bottom-40{bottom:-4rem}.-bottom-7{bottom:-.7rem}.-right-12{right:-1.2rem}.-right-20{right:-2rem}.-top-10{top:-1rem}.-top-15{top:-1.5rem}.-top-150{top:-15rem}.-top-250{top:-25rem}.-top-300{top:-30rem}.-top-60{top:-6rem}.bottom-0{bottom:0}.bottom-10{bottom:1rem}.bottom-\\[calc\\(100\\%-13rem\\)\\]{bottom:calc(100% - 13rem)}.bottom-\\[calc\\(100\\%-4\\.75rem\\)\\]{bottom:calc(100% - 4.75rem)}.bottom-\\[calc\\(100\\%-8rem\\)\\]{bottom:calc(100% - 8rem)}.left-0{left:0}.left-1\\/2{left:50%}.left-10{left:1rem}.left-20{left:2rem}.left-40{left:4rem}.left-45{left:4.5rem}.left-full{left:100%}.right-0{right:0}.right-10{right:1rem}.right-30{right:3rem}.right-45{right:4.5rem}.top-0{top:0}.top-1\\/2{top:50%}.top-10{top:1rem}.top-125{top:12.5rem}.top-20{top:2rem}.top-5{top:.5rem}.top-50{top:5rem}.top-60{top:6rem}.top-\\[calc\\(100\\%-1px\\)\\]{top:calc(100% - 1px)}.top-\\[calc\\(50\\%-8rem\\)\\]{top:calc(50% - 8rem)}.top-full{top:100%}.z-1{z-index:1}.z-10{z-index:10}.z-2{z-index:2}.z-3{z-index:3}.z-4{z-index:4}.z-5{z-index:5}.z-6{z-index:6}.z-7{z-index:7}.z-\\[1000\\]{z-index:1000}.z-\\[9999\\]{z-index:9999}.z-\\[999\\]{z-index:999}.col-span-1{grid-column:span 1/span 1}.-mx-100{margin-left:-10rem;margin-right:-10rem}.-mx-160{margin-left:-16rem;margin-right:-16rem}.-mx-165{margin-left:-16.5rem;margin-right:-16.5rem}.-mx-200{margin-left:-20rem;margin-right:-20rem}.mx-auto{margin-left:auto;margin-right:auto}.-ml-180{margin-left:-18rem}.-ml-5{margin-left:-.5rem}.-mr-20{margin-right:-2rem}.-mt-20{margin-top:-2rem}.-mt-200{margin-top:-20rem}.-mt-275{margin-top:-27.5rem}.-mt-3{margin-top:-.3rem}.-mt-30{margin-top:-3rem}.-mt-5{margin-top:-.5rem}.-mt-50{margin-top:-5rem}.-mt-6{margin-top:-.6rem}.-mt-70{margin-top:-7rem}.-mt-75{margin-top:-7.5rem}.-mt-90{margin-top:-9rem}.mb-10{margin-bottom:1rem}.mb-100{margin-bottom:10rem}.mb-120{margin-bottom:12rem}.mb-15{margin-bottom:1.5rem}.mb-20{margin-bottom:2rem}.mb-3{margin-bottom:.3rem}.mb-50{margin-bottom:5rem}.mb-60{margin-bottom:6rem}.ml-0{margin-left:0}.ml-10{margin-left:1rem}.ml-\\[-\\.25em\\]{margin-left:-.25em}.mr-10{margin-right:1rem}.mr-20{margin-right:2rem}.mr-3{margin-right:.3rem}.mr-50{margin-right:5rem}.mr-80{margin-right:8rem}.mt-0{margin-top:0}.mt-10{margin-top:1rem}.mt-100{margin-top:10rem}.mt-15{margin-top:1.5rem}.mt-18{margin-top:1.8rem}.mt-20{margin-top:2rem}.mt-25{margin-top:2.5rem}.mt-30{margin-top:3rem}.mt-40{margin-top:4rem}.mt-5{margin-top:.5rem}.mt-50{margin-top:5rem}.mt-60{margin-top:6rem}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.hidden{display:none}.h-0{height:0}.h-10{height:1rem}.h-110{height:11rem}.h-120{height:12rem}.h-125{height:12.5rem}.h-14{height:1.4rem}.h-150{height:15rem}.h-160{height:16rem}.h-20{height:2rem}.h-25{height:2.5rem}.h-30{height:3rem}.h-40{height:4rem}.h-41{height:4.1rem}.h-46{height:4.6rem}.h-49{height:4.9rem}.h-58{height:5.8rem}.h-60{height:6rem}.h-65{height:6.5rem}.h-86{height:8.6rem}.h-9{height:.9rem}.h-\\[3rem\\]{height:3rem}.h-\\[5\\.8rem\\]{height:5.8rem}.h-\\[52\\.7rem\\]{height:52.7rem}.h-auto{height:auto}.h-full{height:100%}.max-h-\\[calc\\(100svh-6rem\\)\\]{max-height:calc(100svh - 6rem)}.w-100{width:10rem}.w-120{width:12rem}.w-13{width:1.3rem}.w-15{width:1.5rem}.w-150{width:15rem}.w-17{width:1.7rem}.w-170{width:17rem}.w-175{width:17.5rem}.w-19{width:1.9rem}.w-190{width:19rem}.w-20{width:2rem}.w-25{width:2.5rem}.w-30{width:3rem}.w-300{width:30rem}.w-40{width:4rem}.w-41{width:4.1rem}.w-45{width:4.5rem}.w-\\[19\\.1rem\\]{width:19.1rem}.w-\\[39\\.5rem\\]{width:39.5rem}.w-\\[5\\.8rem\\]{width:5.8rem}.w-\\[70rem\\]{width:70rem}.w-\\[85\\%\\]{width:85%}.w-\\[calc\\(100\\%\\+36rem\\)\\]{width:calc(100% + 36rem)}.w-auto{width:auto}.w-full{width:100%}.min-w-\\[100\\%\\]{min-width:100%}.min-w-\\[10rem\\]{min-width:10rem}.min-w-\\[27\\.5rem\\]{min-width:27.5rem}.min-w-\\[6rem\\]{min-width:6rem}.max-w-\\[100\\%\\]{max-width:100%}.max-w-\\[100rem\\]{max-width:100rem}.max-w-\\[10rem\\]{max-width:10rem}.max-w-\\[120rem\\]{max-width:120rem}.max-w-\\[16\\.5rem\\]{max-width:16.5rem}.max-w-\\[18\\.5rem\\]{max-width:18.5rem}.max-w-\\[28\\.5rem\\]{max-width:28.5rem}.max-w-\\[30rem\\]{max-width:30rem}.max-w-\\[35rem\\]{max-width:35rem}.max-w-\\[42\\.5rem\\]{max-width:42.5rem}.max-w-\\[43rem\\]{max-width:43rem}.max-w-\\[45rem\\]{max-width:45rem}.max-w-\\[65rem\\]{max-width:65rem}.max-w-\\[67\\.5rem\\]{max-width:67.5rem}.max-w-\\[6rem\\]{max-width:6rem}.max-w-\\[70rem\\]{max-width:70rem}.max-w-\\[75rem\\]{max-width:75rem}.max-w-\\[77\\.5rem\\]{max-width:77.5rem}.max-w-\\[80rem\\]{max-width:80rem}.max-w-\\[85rem\\]{max-width:85rem}.flex-1{flex:1 1 0%}.origin-top{transform-origin:top}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(-50%,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-90{--tw-rotate:-90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(-90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-6deg\\]{--tw-rotate:-6deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(-6deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-0{--tw-scale-x:0;--tw-scale-y:0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(0) scaleY(0);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-\\[2\\]{--tw-scale-x:2;--tw-scale-y:2;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(2) scaleY(2);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-x-\\[-1\\]{--tw-scale-x:-1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(-1) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-y-\\[-1\\]{--tw-scale-y:-1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(-1)}.scale-y-\\[-1\\],.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize{resize:both}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-x-10{-moz-column-gap:1rem;column-gap:1rem}.gap-x-120{-moz-column-gap:12rem;column-gap:12rem}.gap-x-15{-moz-column-gap:1.5rem;column-gap:1.5rem}.gap-x-150{-moz-column-gap:15rem;column-gap:15rem}.gap-x-18{-moz-column-gap:1.8rem;column-gap:1.8rem}.gap-x-20{-moz-column-gap:2rem;column-gap:2rem}.gap-x-30{-moz-column-gap:3rem;column-gap:3rem}.gap-x-35{-moz-column-gap:3.5rem;column-gap:3.5rem}.gap-x-40{-moz-column-gap:4rem;column-gap:4rem}.gap-x-90{-moz-column-gap:9rem;column-gap:9rem}.gap-x-95{-moz-column-gap:9.5rem;column-gap:9.5rem}.gap-y-10{row-gap:1rem}.gap-y-15{row-gap:1.5rem}.gap-y-20{row-gap:2rem}.gap-y-30{row-gap:3rem}.gap-y-5{row-gap:.5rem}.gap-y-50{row-gap:5rem}.gap-y-60{row-gap:6rem}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.truncate{overflow:hidden;text-overflow:ellipsis}.truncate,.whitespace-nowrap{white-space:nowrap}.rounded-3xl,.rounded-\\[1\\.5rem\\]{border-radius:1.5rem}.rounded-\\[2rem\\]{border-radius:2rem}.rounded-\\[7rem\\]{border-radius:7rem}.rounded-full{border-radius:9999px}.rounded-b-\\[2rem\\]{border-bottom-left-radius:2rem;border-bottom-right-radius:2rem}.rounded-l-\\[2rem\\]{border-bottom-left-radius:2rem;border-top-left-radius:2rem}.rounded-t-\\[2rem\\]{border-top-left-radius:2rem;border-top-right-radius:2rem}.rounded-bl-\\[1\\.5rem\\]{border-bottom-left-radius:1.5rem}.rounded-bl-\\[2rem\\]{border-bottom-left-radius:2rem}.rounded-br-\\[1\\.5rem\\]{border-bottom-right-radius:1.5rem}.rounded-br-\\[2rem\\]{border-bottom-right-radius:2rem}.rounded-tl-\\[1\\.5rem\\]{border-top-left-radius:1.5rem}.rounded-tl-\\[2rem\\]{border-top-left-radius:2rem}.rounded-tr-\\[1\\.5rem\\]{border-top-right-radius:1.5rem}.rounded-tr-\\[2rem\\]{border-top-right-radius:2rem}.border{border-width:1px}.border-\\[\\.5rem\\]{border-width:.5rem}.border-l-\\[\\.5rem\\]{border-left-width:.5rem}.border-t-0{border-top-width:0}.border-t-\\[\\.5rem\\]{border-top-width:.5rem}.border-black{--tw-border-opacity:1;border-color:#0f0f1c;border-color:rgba(15,15,28,var(--tw-border-opacity))}.bg-black{--tw-bg-opacity:1;background-color:#0f0f1c;background-color:rgba(15,15,28,var(--tw-bg-opacity))}.bg-black\\/80{background-color:rgba(15,15,28,.8)}.bg-green{--tw-bg-opacity:1;background-color:#18c8a9;background-color:rgba(24,200,169,var(--tw-bg-opacity))}.bg-sand{--tw-bg-opacity:1;background-color:#f8d9ad;background-color:rgba(248,217,173,var(--tw-bg-opacity))}.bg-white-classic{--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.fill-current{fill:currentColor}.stroke-current{stroke:currentColor}.object-contain{-o-object-fit:contain;object-fit:contain}.p-15{padding:1.5rem}.p-20{padding:2rem}.p-30{padding:3rem}.p-45{padding:4.5rem}.p-5{padding:.5rem}.p-50{padding:5rem}.px-10{padding-left:1rem;padding-right:1rem}.px-20{padding-left:2rem;padding-right:2rem}.px-24{padding-left:2.4rem;padding-right:2.4rem}.px-25{padding-left:2.5rem;padding-right:2.5rem}.px-28{padding-left:2.8rem;padding-right:2.8rem}.px-30{padding-left:3rem;padding-right:3rem}.px-40{padding-left:4rem;padding-right:4rem}.px-45{padding-left:4.5rem;padding-right:4.5rem}.px-50{padding-left:5rem;padding-right:5rem}.px-60{padding-left:6rem;padding-right:6rem}.py-10{padding-bottom:1rem;padding-top:1rem}.py-120{padding-bottom:12rem;padding-top:12rem}.py-20{padding-bottom:2rem;padding-top:2rem}.py-25{padding-bottom:2.5rem;padding-top:2.5rem}.py-3{padding-bottom:.3rem;padding-top:.3rem}.py-30{padding-bottom:3rem;padding-top:3rem}.py-40{padding-bottom:4rem;padding-top:4rem}.py-50{padding-bottom:5rem;padding-top:5rem}.pb-0{padding-bottom:0}.pb-100{padding-bottom:10rem}.pb-20{padding-bottom:2rem}.pb-200{padding-bottom:20rem}.pb-30{padding-bottom:3rem}.pb-40{padding-bottom:4rem}.pb-50{padding-bottom:5rem}.pb-60{padding-bottom:6rem}.pb-80{padding-bottom:8rem}.pl-20{padding-left:2rem}.pl-\\[\\.25rem\\]{padding-left:.25rem}.pr-20{padding-right:2rem}.pr-25{padding-right:2.5rem}.pr-30{padding-right:3rem}.pr-85{padding-right:8.5rem}.pr-\\[\\.25em\\]{padding-right:.25em}.pr-\\[\\.25rem\\]{padding-right:.25rem}.pt-0{padding-top:0}.pt-100{padding-top:10rem}.pt-15{padding-top:1.5rem}.pt-20{padding-top:2rem}.pt-200{padding-top:20rem}.pt-30{padding-top:3rem}.pt-35{padding-top:3.5rem}.pt-90{padding-top:9rem}.pt-\\[100\\%\\]{padding-top:100%}.pt-\\[125\\%\\]{padding-top:125%}.pt-\\[128\\%\\]{padding-top:128%}.pt-\\[137\\.8\\%\\]{padding-top:137.8%}.pt-\\[144\\%\\]{padding-top:144%}.pt-\\[150\\%\\]{padding-top:150%}.pt-\\[200\\%\\]{padding-top:200%}.pt-\\[23\\.75\\%\\]{padding-top:23.75%}.pt-\\[350\\%\\]{padding-top:350%}.pt-\\[400\\%\\]{padding-top:400%}.pt-\\[42\\.6\\%\\]{padding-top:42.6%}.pt-\\[43\\%\\]{padding-top:43%}.pt-\\[48\\%\\]{padding-top:48%}.pt-\\[50\\%\\]{padding-top:50%}.pt-\\[56\\.25\\%\\]{padding-top:56.25%}.pt-\\[57\\.3\\%\\]{padding-top:57.3%}.pt-\\[70\\%\\]{padding-top:70%}.pt-\\[77\\.8\\%\\]{padding-top:77.8%}.pt-\\[83\\.7\\%\\]{padding-top:83.7%}.pt-\\[84\\%\\]{padding-top:84%}.pt-\\[85\\%\\]{padding-top:85%}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.font-disp{font-family:disp}.font-disp-2{font-family:disp-2}.\\!text-16{font-size:1.6rem!important}.\\!text-19{font-size:1.9rem!important}.\\!text-26{font-size:2.6rem!important}.text-15{font-size:1.5rem}.text-16{font-size:1.6rem}.text-17{font-size:1.7rem}.text-18{font-size:1.8rem}.text-19{font-size:1.9rem}.text-20{font-size:2rem}.text-21{font-size:2.1rem}.text-26{font-size:2.6rem}.text-30{font-size:3rem}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.leading-none{line-height:1}.text-black{--tw-text-opacity:1;color:#0f0f1c;color:rgba(15,15,28,var(--tw-text-opacity))}.text-green{--tw-text-opacity:1;color:#18c8a9;color:rgba(24,200,169,var(--tw-text-opacity))}.text-red{--tw-text-opacity:1;color:#ef3f28;color:rgba(239,63,40,var(--tw-text-opacity))}.text-yellow{--tw-text-opacity:1;color:#ee9b01;color:rgba(238,155,1,var(--tw-text-opacity))}.opacity-0{opacity:0}.opacity-100{opacity:1}.drop-shadow-lg{--tw-drop-shadow:drop-shadow(0 10px 8px rgba(0,0,0,.04)) drop-shadow(0 4px 3px rgba(0,0,0,.1));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) drop-shadow(0 10px 8px rgba(0,0,0,.04)) drop-shadow(0 4px 3px rgba(0,0,0,.1))}.drop-shadow-lg,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.23,1,.32,1)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.23,1,.32,1)}.transition-opacity{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.23,1,.32,1)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.23,1,.32,1)}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.duration-700{transition-duration:.7s}.ease-out-expo{transition-timing-function:cubic-bezier(.19,1,.22,1)}.will-change-transform{will-change:transform}.before\\:absolute:before{content:var(--tw-content);position:absolute}.before\\:inset-5:before{bottom:.5rem;content:var(--tw-content);left:.5rem;right:.5rem;top:.5rem}.before\\:bottom-0:before{bottom:0;content:var(--tw-content)}.before\\:bottom-10:before{bottom:1rem;content:var(--tw-content)}.before\\:left-0:before{content:var(--tw-content);left:0}.before\\:right-0:before{content:var(--tw-content);right:0}.before\\:top-0:before{content:var(--tw-content);top:0}.before\\:top-12:before{content:var(--tw-content);top:1.2rem}.before\\:z-1:before{content:var(--tw-content);z-index:1}.before\\:w-65:before{content:var(--tw-content);width:6.5rem}.before\\:rounded-\\[1\\.65rem\\]:before{border-radius:1.65rem;content:var(--tw-content)}.before\\:bg-black:before{content:var(--tw-content);--tw-bg-opacity:1;background-color:#0f0f1c;background-color:rgba(15,15,28,var(--tw-bg-opacity))}.before\\:bg-sand:before{content:var(--tw-content);--tw-bg-opacity:1;background-color:#f8d9ad;background-color:rgba(248,217,173,var(--tw-bg-opacity))}@media (min-width:650px){.s\\:\\!absolute{position:absolute!important}.s\\:absolute{position:absolute}.s\\:sticky{position:sticky}.s\\:inset-0{bottom:0;left:0;right:0;top:0}.s\\:-left-5{left:-.5rem}.s\\:-top-1\\/3{top:-33.333333%}.s\\:-top-100{top:-10rem}.s\\:-top-250{top:-25rem}.s\\:-top-300{top:-30rem}.s\\:bottom-0{bottom:0}.s\\:bottom-20{bottom:2rem}.s\\:left-0{left:0}.s\\:left-1\\/2{left:50%}.s\\:left-30{left:3rem}.s\\:left-full{left:100%}.s\\:right-0{right:0}.s\\:top-0{top:0}.s\\:top-1\\/2{top:50%}.s\\:top-\\[-36\\.25rem\\]{top:-36.25rem}.s\\:top-\\[-37\\.5rem\\]{top:-37.5rem}.s\\:top-\\[-40rem\\]{top:-40rem}.s\\:top-\\[-60rem\\]{top:-60rem}.s\\:order-1{order:1}.s\\:order-2{order:2}.s\\:order-3{order:3}.s\\:col-span-3{grid-column:span 3/span 3}.s\\:mx-0{margin-left:0;margin-right:0}.s\\:-mt-100{margin-top:-10rem}.s\\:-mt-250{margin-top:-25rem}.s\\:-mt-30{margin-top:-3rem}.s\\:-mt-60{margin-top:-6rem}.s\\:-mt-90{margin-top:-9rem}.s\\:mb-0{margin-bottom:0}.s\\:mb-100{margin-bottom:10rem}.s\\:mb-120{margin-bottom:12rem}.s\\:mb-125{margin-bottom:12.5rem}.s\\:mb-160{margin-bottom:16rem}.s\\:mb-60{margin-bottom:6rem}.s\\:mb-70{margin-bottom:7rem}.s\\:mb-80{margin-bottom:8rem}.s\\:ml-0{margin-left:0}.s\\:ml-30{margin-left:3rem}.s\\:ml-50{margin-left:5rem}.s\\:ml-auto{margin-left:auto}.s\\:mr-120{margin-right:12rem}.s\\:mr-30{margin-right:3rem}.s\\:mr-45{margin-right:4.5rem}.s\\:mt-0{margin-top:0}.s\\:mt-100{margin-top:10rem}.s\\:mt-150{margin-top:15rem}.s\\:mt-25{margin-top:2.5rem}.s\\:mt-250{margin-top:25rem}.s\\:mt-30{margin-top:3rem}.s\\:mt-35{margin-top:3.5rem}.s\\:mt-40{margin-top:4rem}.s\\:mt-50{margin-top:5rem}.s\\:mt-55{margin-top:5.5rem}.s\\:mt-60{margin-top:6rem}.s\\:mt-70{margin-top:7rem}.s\\:mt-85{margin-top:8.5rem}.s\\:mt-90{margin-top:9rem}.s\\:block{display:block}.s\\:flex{display:flex}.s\\:hidden{display:none}.s\\:h-165{height:16.5rem}.s\\:h-185{height:18.5rem}.s\\:h-200{height:20rem}.s\\:h-50{height:5rem}.s\\:h-55{height:5.5rem}.s\\:h-70{height:7rem}.s\\:h-80{height:8rem}.s\\:h-\\[6\\.25rem\\]{height:6.25rem}.s\\:h-\\[6\\.7rem\\]{height:6.7rem}.s\\:h-\\[calc\\(100vh-20rem\\)\\]{height:calc(100vh - 20rem)}.s\\:max-h-\\[78rem\\]{max-height:78rem}.s\\:min-h-\\[100vh\\]{min-height:100vh}.s\\:min-h-\\[20rem\\]{min-height:20rem}.s\\:min-h-\\[24rem\\]{min-height:24rem}.s\\:w-1\\/2{width:50%}.s\\:w-160{width:16rem}.s\\:w-19{width:1.9rem}.s\\:w-20{width:2rem}.s\\:w-225{width:22.5rem}.s\\:w-250{width:25rem}.s\\:w-32{width:3.2rem}.s\\:w-36{width:3.6rem}.s\\:w-37{width:3.7rem}.s\\:w-38{width:3.8rem}.s\\:w-42{width:4.2rem}.s\\:w-\\[14\\.8rem\\]{width:14.8rem}.s\\:w-\\[30\\.15rem\\]{width:30.15rem}.s\\:w-\\[6\\.7rem\\]{width:6.7rem}.s\\:w-full{width:100%}.s\\:min-w-\\[23rem\\]{min-width:23rem}.s\\:min-w-\\[24rem\\]{min-width:24rem}.s\\:min-w-\\[25rem\\]{min-width:25rem}.s\\:min-w-\\[69\\.2rem\\]{min-width:69.2rem}.s\\:min-w-\\[8rem\\]{min-width:8rem}.s\\:max-w-\\[100rem\\]{max-width:100rem}.s\\:max-w-\\[117\\.5rem\\]{max-width:117.5rem}.s\\:max-w-\\[148rem\\]{max-width:148rem}.s\\:max-w-\\[23rem\\]{max-width:23rem}.s\\:max-w-\\[24rem\\]{max-width:24rem}.s\\:max-w-\\[25rem\\]{max-width:25rem}.s\\:max-w-\\[28rem\\]{max-width:28rem}.s\\:max-w-\\[51\\.5rem\\]{max-width:51.5rem}.s\\:max-w-\\[55rem\\]{max-width:55rem}.s\\:max-w-\\[65rem\\]{max-width:65rem}.s\\:max-w-\\[69\\.2rem\\]{max-width:69.2rem}.s\\:max-w-\\[75rem\\]{max-width:75rem}.s\\:max-w-\\[80rem\\]{max-width:80rem}.s\\:max-w-\\[8rem\\]{max-width:8rem}.s\\:max-w-\\[95rem\\]{max-width:95rem}.s\\:-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(-50%,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.s\\:-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x),-50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.s\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.s\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.s\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.s\\:flex-row{flex-direction:row}.s\\:items-start{align-items:flex-start}.s\\:items-center{align-items:center}.s\\:justify-between{justify-content:space-between}.s\\:gap-x-20{-moz-column-gap:2rem;column-gap:2rem}.s\\:gap-x-25{-moz-column-gap:2.5rem;column-gap:2.5rem}.s\\:gap-x-30{-moz-column-gap:3rem;column-gap:3rem}.s\\:gap-x-45{-moz-column-gap:4.5rem;column-gap:4.5rem}.s\\:gap-x-95{-moz-column-gap:9.5rem;column-gap:9.5rem}.s\\:gap-y-0{row-gap:0}.s\\:gap-y-100{row-gap:10rem}.s\\:gap-y-40{row-gap:4rem}.s\\:gap-y-60{row-gap:6rem}.s\\:gap-y-90{row-gap:9rem}.s\\:whitespace-nowrap{white-space:nowrap}.s\\:rounded-\\[2rem\\]{border-radius:2rem}.s\\:rounded-tl-none{border-top-left-radius:0}.s\\:rounded-tr-none{border-top-right-radius:0}.s\\:border-\\[\\.5rem\\]{border-width:.5rem}.s\\:border-l-\\[\\.5rem\\]{border-left-width:.5rem}.s\\:border-r-0{border-right-width:0}.s\\:border-t-0{border-top-width:0}.s\\:border-black{--tw-border-opacity:1;border-color:#0f0f1c;border-color:rgba(15,15,28,var(--tw-border-opacity))}.s\\:p-0{padding:0}.s\\:p-20{padding:2rem}.s\\:p-30{padding:3rem}.s\\:p-45{padding:4.5rem}.s\\:p-50{padding:5rem}.s\\:p-65{padding:6.5rem}.s\\:p-80{padding:8rem}.s\\:px-0{padding-left:0;padding-right:0}.s\\:px-25{padding-left:2.5rem;padding-right:2.5rem}.s\\:px-30{padding-left:3rem;padding-right:3rem}.s\\:px-40{padding-left:4rem;padding-right:4rem}.s\\:px-45{padding-left:4.5rem;padding-right:4.5rem}.s\\:px-50{padding-left:5rem;padding-right:5rem}.s\\:px-80{padding-left:8rem;padding-right:8rem}.s\\:py-30{padding-bottom:3rem;padding-top:3rem}.s\\:py-40{padding-bottom:4rem;padding-top:4rem}.s\\:py-90{padding-bottom:9rem;padding-top:9rem}.s\\:pb-120{padding-bottom:12rem}.s\\:pb-150{padding-bottom:15rem}.s\\:pb-40{padding-bottom:4rem}.s\\:pb-50{padding-bottom:5rem}.s\\:pl-30{padding-left:3rem}.s\\:pl-80{padding-left:8rem}.s\\:pr-10{padding-right:1rem}.s\\:pr-20{padding-right:2rem}.s\\:pr-90{padding-right:9rem}.s\\:pt-0{padding-top:0}.s\\:pt-120{padding-top:12rem}.s\\:pt-140{padding-top:14rem}.s\\:pt-40{padding-top:4rem}.s\\:pt-50{padding-top:5rem}.s\\:pt-\\[100\\%\\]{padding-top:100%}.s\\:pt-\\[110\\%\\]{padding-top:110%}.s\\:pt-\\[140\\%\\]{padding-top:140%}.s\\:pt-\\[17\\.8\\%\\]{padding-top:17.8%}.s\\:pt-\\[38\\.5\\%\\]{padding-top:38.5%}.s\\:pt-\\[40\\%\\]{padding-top:40%}.s\\:pt-\\[47\\.5\\%\\]{padding-top:47.5%}.s\\:pt-\\[70\\%\\]{padding-top:70%}.s\\:pt-\\[75\\%\\]{padding-top:75%}.s\\:text-left{text-align:left}.s\\:\\!text-55{font-size:5.5rem!important}.s\\:text-18{font-size:1.8rem}.s\\:text-27{font-size:2.7rem}.s\\:text-30{font-size:3rem}.s\\:text-50{font-size:5rem}}@media (hover:hover) and (pointer:fine){.has-hover\\:pointer-events-auto{pointer-events:auto}.has-hover\\:transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.23,1,.32,1)}.has-hover\\:duration-1000{transition-duration:1s}.has-hover\\:ease-out-expo{transition-timing-function:cubic-bezier(.19,1,.22,1)}.has-hover\\:hover\\:text-red:hover{--tw-text-opacity:1;color:#ef3f28;color:rgba(239,63,40,var(--tw-text-opacity))}.has-hover\\:hover\\:text-yellow:hover{--tw-text-opacity:1;color:#ee9b01;color:rgba(238,155,1,var(--tw-text-opacity))}.has-hover\\:hover\\:opacity-70:hover{opacity:.7}.group:hover .has-hover\\:group-hover\\:scale-\\[1\\.05\\]{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.05) scaleY(1.05);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.group:hover .has-hover\\:group-hover\\:text-yellow{--tw-text-opacity:1;color:#ee9b01;color:rgba(238,155,1,var(--tw-text-opacity))}.group:hover .has-hover\\:group-hover\\:opacity-50{opacity:.5}}@media (max-width:649px){.max-s\\:hidden{display:none}.max-s\\:max-w-\\[100\\%\\]{max-width:100%}.max-s\\:-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(-50%,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.max-s\\:items-center{align-items:center}.max-s\\:overflow-y-auto{overflow-y:auto}.max-s\\:pt-\\[77\\.8\\%\\]{padding-top:77.8%}.max-s\\:text-center{text-align:center}.max-s\\:\\!text-21{font-size:2.1rem!important}.max-s\\:\\!text-24{font-size:2.4rem!important}.max-s\\:\\!text-26{font-size:2.6rem!important}.max-s\\:\\!text-37{font-size:3.7rem!important}}',
        "",
      ]),
        (n.locals = {}),
        (e.exports = n);
    },
    461: function (e, t, i) {
      var n = i(462);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
      (0, i(76).default)("26841bab", n, !0, { sourceMap: !1 });
    },
    462: function (e, t, i) {
      var n = i(75),
        a = i(463),
        r = i(464),
        s = i(465),
        l = i(466),
        o = n(function (e) {
          return e[1];
        }),
        d = a(r),
        u = a(s),
        m = a(l);
      o.push([
        e.i,
        '@font-face{font-display:swap;font-family:"disp-2";font-style:normal;font-weight:400;src:url(' +
          d +
          ') format("woff2"),url(' +
          u +
          ') format("woff")}@font-face{font-display:swap;font-family:"disp";font-style:normal;font-weight:400;src:url(' +
          m +
          ') format("woff")}:root{--size:390}@media(min-width:650px){:root{--size:1800}}html{font-feature-settings:"kern" off;font-kerning:none;font-size:clamp(1px,20px,10*100vw/390);font-size:clamp(1px,20px,10*100vw/var(--size));-webkit-text-size-adjust:none;-webkit-font-smoothing:subpixel-antialiased;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0,0,0,0)}body,html{overscroll-behavior:none;width:100%}body{background-color:#0f0f1c;color:#f8d9ad;font-family:Roboto Flex,sans-serif;font-size:1.9rem;font-size:max(12px,min(30px,1.9rem));font-weight:400;line-height:1.36}@media (min-width:650px){body{font-size:2.2rem;font-size:max(12px,min(30px,2.2rem))}}body.is-loading{cursor:wait}button{border-radius:0;font-family:inherit}button,input,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}input,textarea{background:transparent;border:0;border-radius:0;box-shadow:none;margin:0;outline:0;padding:0}iframe{width:100%}::-moz-placeholder{color:#f8d9ad}::placeholder{color:#f8d9ad}.txt>:not(:last-child){margin-bottom:2rem}.txt h1,.txt h2,.txt h3,.txt h4,.txt h5{font-family:disp-2}.txt h1:not(:last-child),.txt h2:not(:last-child),.txt h3:not(:last-child),.txt h4:not(:last-child),.txt h5:not(:last-child){margin-bottom:1.5rem!important}.txt h1:not(:first-child),.txt h2:not(:first-child),.txt h3:not(:first-child),.txt h4:not(:first-child),.txt h5:not(:first-child){padding-top:1.5rem}@media (min-width:650px){.txt h1:not(:first-child),.txt h2:not(:first-child),.txt h3:not(:first-child),.txt h4:not(:first-child),.txt h5:not(:first-child){padding-top:3rem}}.txt ul{display:flex;flex-direction:column;gap:2rem 0;padding-left:1rem}.txt ul li{padding-left:1.5rem;position:relative}.txt ul li:before{background-color:currentColor;border-radius:999px;content:"";height:.25em;left:0;position:absolute;top:.5em;width:.25em}h1,h2,h3,h4{font-weight:400}.font-roboto-flex{font-optical-sizing:auto;font-style:normal;font-variation-settings:"slnt" 0,"wdth" 100,"GRAD" 0,"XOPQ" 96,"XTRA" 468,"YOPQ" 79,"YTAS" 750,"YTDE" -203,"YTFI" 738,"YTLC" 514,"YTUC" 712;font-weight:400}.h1{color:#ef3f28;font-family:disp;font-size:3.6rem;line-height:1;text-transform:uppercase}@media (min-width:650px){.h1{font-size:10rem}}.h2{font-family:disp;font-size:7rem;line-height:1;text-transform:uppercase}.h3{font-family:disp-2;font-size:2.7rem;line-height:1.1}@media (min-width:650px){.h3{font-size:4.5rem}}.h4{font-size:2.1rem;line-height:1.06}@media (min-width:650px){.h4{font-size:3rem}}.txt h1,.txt h2,.txt h3,.txt h4{font-size:2.1rem;line-height:1.06}@media (min-width:650px){.txt h1,.txt h2,.txt h3,.txt h4{font-size:3rem}}.h5{font-size:1.6rem;line-height:1.15}@media (min-width:650px){.h5{font-size:1.9rem}}.b-large{font-size:2.3rem;line-height:1.4}@media (min-width:650px){.b-large{font-size:2.7rem}}.b-small{font-size:1.8rem;line-height:1.33}.font-disp,.font-disp-2,.skewed-text{text-transform:uppercase}.skewed-text{color:#0f0f1c;font-family:disp;line-height:1;margin-left:.2em;overflow:hidden;padding:.3em .9em .3em .7em;position:relative;transform-origin:bottom left}.skewed-text:before{background-color:#ef3f28;border:.2em solid #0f0f1c;border-radius:.35em;content:"";height:100%;left:.2em;position:absolute;right:.2em;top:0;transform:skewX(-20deg);transform-origin:left;z-index:-1}@media (min-width:650px){.skewed-text:before{border-width:.1em}}.skewed-text.is-to-animate:before{transform:skewX(-20deg) scaleX(0);transition:transform 1s cubic-bezier(.19,1,.22,1)}.skewed-text.is-to-animate.is-animated:before{transform:skewX(-20deg) scaleX(1)}.skewed-text.--rotated{transform:rotate(-6deg)}.c-fix{margin-left:-.25em;padding-right:.25em}.c-fix-p{margin-left:.25em}.site-max{margin-left:auto;margin-right:auto;max-width:152rem;padding-left:2rem;padding-right:2rem;width:100%}.site-max .site-max{padding-left:0;padding-right:0}.site-max.--l{max-width:166rem}.media-fill img,.media-fill video{-o-object-fit:cover;object-fit:cover}.media-contain img,.media-contain video,.media-fill img,.media-fill video,.media-fit img,.media-fit video{height:100%;left:0;position:absolute;top:0;width:100%}.media-contain img,.media-contain video{-o-object-fit:contain;object-fit:contain}.media-iframe iframe{height:100%;left:0;position:absolute;top:0;width:100%}.aspect{padding-top:var(--aspect)}.uline-active:before{background-color:currentColor;bottom:-.2em;content:"";height:.05em;left:0;min-height:1px;position:absolute;right:0;transform:scaleX(0);transform-origin:right;transition:transform .75s cubic-bezier(.19,1,.22,1)}.uline-active.is-active:before{transform:scaleX(1);transform-origin:left}.uline{display:inline-flex;position:relative;white-space:nowrap;--bottom:0}.uline:before{background-color:currentColor;bottom:var(--bottom);content:"";height:.05em;left:0;min-height:1px;position:absolute;right:0;transform:scaleX(0);transform-origin:right;transition:transform .75s cubic-bezier(.19,1,.22,1)}@media (hover:hover) and (pointer:fine){.uline:hover:before{transform:scaleX(1);transform-origin:left}}.uline.nuxt-link-exact-active:before,.uline.sh__link.nuxt-link-active:before{transform:scaleX(1);transform-origin:left}@media (hover:hover) and (pointer:fine){.h-trig .h-scale img{transition:.75s cubic-bezier(.19,1,.22,1)}.h-trig:hover .h-scale img{transform:scale(1.025)}}.uline-double{display:inline-flex;position:relative;white-space:nowrap;--bottom:0}.uline-double:after,.uline-double:before{background-color:currentColor;bottom:var(--bottom);content:"";height:.05em;left:0;min-height:1px;position:absolute;right:0}.uline-double:before{transform:scaleX(1);transform-origin:left;transition:transform .75s cubic-bezier(.19,1,.22,1);transition-delay:.5s}.uline-double:after{transform:scaleX(0);transform-origin:right;transition:transform .75s cubic-bezier(.19,1,.22,1);transition-delay:0s}@media (hover:hover) and (pointer:fine){.h-trig:hover .uline-double:before,.uline-double:hover:before{transform:scaleX(0);transform-origin:right;transition:transform .75s cubic-bezier(.19,1,.22,1);transition-delay:0s}.h-trig:hover .uline-double:after,.uline-double:hover:after{transform:scaleX(1);transform-origin:left;transition:transform .75s cubic-bezier(.19,1,.22,1);transition-delay:.2s}}.cursor-grab{cursor:grab}.cursor-none{cursor:none}.radius-fix{-webkit-mask-image:-webkit-radial-gradient(#fff,#000)}.fade-enter-active,.fade-leave-active{transition:opacity .5s ease-out}.fade-enter,.fade-leave-active{opacity:0}input,textarea{min-width:0}.bg-gradient{background:linear-gradient(0deg,#1b1010 -26.51%,#d93e22 247.68%);background:var(--module-gradient,linear-gradient(0deg,#1b1010 -26.51%,#d93e22 247.68%))}@media (min-width:650px){.bg-gradient-s{background:linear-gradient(0deg,#1b1010 -26.51%,#d93e22 247.68%);background:var(--module-gradient,linear-gradient(0deg,#1b1010 -26.51%,#d93e22 247.68%))}}@media (max-width:649px){.bg-gradient-max-s{background:linear-gradient(0deg,#1b1010 -26.51%,#d93e22 247.68%);background:var(--module-gradient,linear-gradient(0deg,#1b1010 -26.51%,#d93e22 247.68%))}}.bg-gradient-flipped{background:linear-gradient(180deg,#1b1010 -26.51%,#d93e22 247.68%);background:var(--module-gradient,linear-gradient(180deg,#1b1010 -26.51%,#d93e22 247.68%))}.bord-gradient{background:linear-gradient(180deg,#ee9b01 50%,#ef3f28)}.modal-gradient{background:linear-gradient(0deg,#12101b -107.84%,#d93e22 342.63%)}.frame{border:.5rem solid #0f0f1c;border-radius:2rem}@media (min-width:650px){.frame-s{border:.5rem solid #0f0f1c;border-radius:2rem}}@media (max-width:649px){.frame-max-s{border:.5rem solid #0f0f1c;border-radius:2rem}}.is-active .marquee{animation:marquee var(--time) linear infinite}.is-active .marquee.--reversed{animation:marquee-reversed var(--time) linear infinite}.active-yellow.nuxt-link-exact-active{color:#ee9b01}.title-line-wrapped{display:inline-flex;padding-left:.2em;padding-right:.55em;position:relative;will-change:transform}.title-line-wrapped:before{background-color:#0f0f1c;border-radius:.75rem;bottom:.01em;content:"";left:-.05em;position:absolute;right:-.3em;top:-.05em;transform:skewX(-20deg);z-index:1}@media (min-width:650px){.title-line-wrapped:before{border-radius:1.35rem}}.title-line-wrapped:after{background-color:#f8d9ad;border-radius:.6rem;bottom:0;content:"";height:100%;left:0;position:absolute;transform:skewX(-20deg);width:100%;z-index:2}@media (min-width:650px){.title-line-wrapped:after{border-radius:1rem}}.title-line-wrapped:first-child{padding-top:.25em;z-index:5}.title-line-wrapped:not(:first-child){z-index:4}.title-line-wrapped:last-child{padding-bottom:.25em;z-index:3}.title-line-wrapped:last-child:before{bottom:-.05em}@keyframes marquee{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes marquee-reversed{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes blink{0%{opacity:0}25%{opacity:1}50%{opacity:0}to{opacity:0}}',
        "",
      ]),
        (o.locals = {}),
        (e.exports = o);
    },
    464: function (e, t, i) {
      e.exports = i.p + "fonts/AvengeanceMightiestAvenger.60e4d99.woff2";
    },
    465: function (e, t, i) {
      e.exports = i.p + "fonts/AvengeanceMightiestAvenger.cbe3bdc.woff";
    },
    466: function (e, t, i) {
      e.exports = i.p + "fonts/falconpunchexpand.2159b7f.woff";
    },
    472: function (e, t, i) {
      "use strict";
      i(328);
    },
    473: function (e, t, i) {
      var n = i(75)(function (e) {
        return e[1];
      });
      n.push([
        e.i,
        ".menu-dd-icon{transition:transform .75s cubic-bezier(.19,1,.22,1)}.menu-dd-parent.is-active .menu-dd-icon{transform:scaleY(-1)}",
        "",
      ]),
        (n.locals = {}),
        (e.exports = n);
    },
    474: function (e, t, i) {
      "use strict";
      i(329);
    },
    475: function (e, t, i) {
      var n = i(75)(function (e) {
        return e[1];
      });
      n.push([
        e.i,
        ".media__image[data-v-0a39772a]{opacity:0}.media__image.is-loaded[data-v-0a39772a]{opacity:1;transition:opacity .5s cubic-bezier(.25,.46,.45,.94),transform .75s cubic-bezier(.19,1,.22,1)}",
        "",
      ]),
        (n.locals = {}),
        (e.exports = n);
    },
    476: function (e, t, i) {
      "use strict";
      i(330);
    },
    477: function (e, t, i) {
      var n = i(75)(function (e) {
        return e[1];
      });
      n.push([
        e.i,
        ".btn__inner{background:linear-gradient(180deg,#ee9b01,#ef3f28 21%,#392136 70%,#08193c 94%)}",
        "",
      ]),
        (n.locals = {}),
        (e.exports = n);
    },
    479: function (e, t, i) {
      "use strict";
      i(331);
    },
    480: function (e, t, i) {
      var n = i(75)(function (e) {
        return e[1];
      });
      n.push([
        e.i,
        ".stickers{--left:0;--size:15rem;--offset:calc(var(--size)/2);--bottom-multiple:1.5;--bottom:calc(var(--offset)*var(--bottom-multiple));pointer-events:none}.stickers__sticker{bottom:calc(var(--offset)*-1.125);height:var(--size);left:calc(var(--left) - var(--offset));position:absolute;width:var(--size)}.stickers__sticker:first-child{--left:0}.stickers__sticker:nth-child(2){--left:30%;--size:18.5rem}.stickers__sticker:nth-child(3){--left:50%;--size:12.5rem}.stickers__sticker:nth-child(4){--left:75%}.stickers__sticker:nth-child(5){--left:100%}",
        "",
      ]),
        (n.locals = {}),
        (e.exports = n);
    },
    491: function (e, t, i) {
      "use strict";
      i(336);
    },
    492: function (e, t, i) {
      var n = i(75)(function (e) {
        return e[1];
      });
      n.push([
        e.i,
        ".media__image[data-v-156a094a]{opacity:0}.media__image.is-loaded[data-v-156a094a]{opacity:1;transition:opacity .5s cubic-bezier(.25,.46,.45,.94),transform .75s cubic-bezier(.19,1,.22,1)}",
        "",
      ]),
        (n.locals = {}),
        (e.exports = n);
    },
    493: function (e, t, i) {
      "use strict";
      i(337);
    },
    494: function (e, t, i) {
      var n = i(75)(function (e) {
        return e[1];
      });
      n.push([
        e.i,
        ".side-btn__mask{transition:transform .75s cubic-bezier(.19,1,.22,1)}@media (hover:hover) and (pointer:fine){.side-btn:hover .side-btn__mask.--1{transform:translateX(-100%)}.side-btn:hover .side-btn__mask.--2{transform:translateX(100%)}}.side-menu{opacity:0;pointer-events:none;transition:opacity .25s ease-out}.side:active .side-menu,.side:hover .side-menu{opacity:1;pointer-events:all}.item-bordered{border:.5rem solid #ee9b01;margin-left:-.5rem;margin-top:-.5rem}.item-bordered:nth-child(3n-2){--radius:2rem;border-bottom-left-radius:2rem;border-bottom-left-radius:var(--radius);border-top-left-radius:2rem;border-top-left-radius:var(--radius)}.item-bordered:last-child,.item-bordered:nth-child(3n){--radius:2rem;border-bottom-right-radius:2rem;border-bottom-right-radius:var(--radius);border-top-right-radius:2rem;border-top-right-radius:var(--radius)}",
        "",
      ]),
        (n.locals = {}),
        (e.exports = n);
    },
    495: function (e, t, i) {
      "use strict";
      i(338);
    },
    496: function (e, t, i) {
      var n = i(75)(function (e) {
        return e[1];
      });
      n.push([
        e.i,
        "@media (hover:hover) and (pointer:fine){.close-modal{transition:opacity .35s ease-out}.close-modal:hover{opacity:.5}}",
        "",
      ]),
        (n.locals = {}),
        (e.exports = n);
    },
    497: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, "actions", function () {
          return a;
        });
      var n = i(7),
        a =
          (i(38),
          {
            nuxtServerInit: function (e, t) {
              var i = this;
              return Object(n.a)(
                regeneratorRuntime.mark(function n() {
                  var a, r, s, l, o, d, u, m, c, v;
                  return regeneratorRuntime.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              e.state,
                              e.dispatch,
                              (a = e.commit),
                              t.req,
                              (n.prev = 2),
                              (n.next = 5),
                              i.$dato.getSettings()
                            );
                          case 5:
                            if (
                              ((r = n.sent),
                              (s = r.site),
                              (l = r.global),
                              (o = r.blog),
                              (d = r.comics),
                              (u = r.episodes),
                              (m = r.partners),
                              (c = r.gifs),
                              (v = r.collabs),
                              !s)
                            ) {
                              n.next = 17;
                              break;
                            }
                            return (n.next = 17), a("app/SET_SITE", s);
                          case 17:
                            if (!l) {
                              n.next = 20;
                              break;
                            }
                            return (n.next = 20), a("app/SET_GLOBAL", l);
                          case 20:
                            if (!o) {
                              n.next = 23;
                              break;
                            }
                            return (n.next = 23), a("app/SET_BLOG", o);
                          case 23:
                            if (!d) {
                              n.next = 26;
                              break;
                            }
                            return (n.next = 26), a("app/SET_COMICS", d);
                          case 26:
                            if (!u) {
                              n.next = 29;
                              break;
                            }
                            return (n.next = 29), a("app/SET_EPISODES", u);
                          case 29:
                            if (!m) {
                              n.next = 32;
                              break;
                            }
                            return (n.next = 32), a("app/SET_PARTNERS", m);
                          case 32:
                            if (!c) {
                              n.next = 35;
                              break;
                            }
                            return (n.next = 35), a("app/SET_GIFS", c);
                          case 35:
                            if (!v) {
                              n.next = 38;
                              break;
                            }
                            return (n.next = 38), a("app/SET_COLLABS", v);
                          case 38:
                            n.next = 44;
                            break;
                          case 40:
                            return (
                              (n.prev = 40),
                              (n.t0 = n.catch(2)),
                              n.abrupt("return")
                            );
                          case 44:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[2, 40]]
                  );
                })
              )();
            },
          });
    },
    498: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, "state", function () {
          return a;
        }),
        i.d(t, "actions", function () {
          return r;
        }),
        i.d(t, "mutations", function () {
          return s;
        });
      var n = i(27),
        a =
          (i(14),
          i(126),
          i(499),
          function () {
            return {
              bounds: {},
              flags: { loaded: !1, menu: !1, light: !1, hero: !1 },
              page: { to: null, from: null, id: null },
              device: {},
              features: {},
              global: {},
              site: {},
              modal: { active: !1, component: "", item: null },
              blog: [],
              collabs: [],
              comics: [],
              episodes: [],
              partners: [],
              gifs: [],
              rives: [],
              coin: null,
            };
          }),
        r = {
          setBounds: function (e, t) {
            (0, e.commit)("SET_BOUNDS", t);
          },
        },
        s = {
          SET_GLOBAL: function (e, t) {
            e.global = t;
          },
          SET_BOUNDS: function (e, t) {
            e.bounds = t;
          },
          SET_LOADED: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            e.flags.loaded = t;
          },
          SET_HERO_LOADED: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            e.flags.hero = t;
          },
          SET_MENU: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            e.flags.menu = t;
          },
          SET_PAGE: function (e, t) {
            e.page = t;
          },
          SET_SITE: function (e, t) {
            e.site = t;
          },
          SET_BLOG: function (e, t) {
            e.blog = t;
          },
          SET_COLLABS: function (e, t) {
            e.collabs = t;
          },
          SET_COMICS: function (e, t) {
            e.comics = t;
          },
          SET_EPISODES: function (e, t) {
            e.episodes = t;
          },
          SET_PARTNERS: function (e, t) {
            e.partners = t;
          },
          SET_GIFS: function (e, t) {
            e.gifs = t;
          },
          SET_RIVE: function (e, t) {
            e.rives.push(t);
          },
          SET_MODAL: function (e, t) {
            (e.modal.active = t.active),
              (e.modal.component = t.component),
              (e.modal.item = t.item);
          },
          SET_COIN: function (e, t) {
            e.coin = t;
          },
          SET_DEVICE: function (e) {
            e.device = Object(n.a)(
              Object(n.a)(
                {
                  isWindows: navigator.platform.indexOf("Win") > -1,
                  isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
                  isMobile:
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    ) ||
                    ("MacIntel" === navigator.platform &&
                      navigator.maxTouchPoints > 1),
                },
                "isWindows",
                -1 !==
                  ["Win32", "Win64", "Windows", "WinCE"].indexOf(
                    window.navigator.platform
                  )
              ),
              "isSafari",
              /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
            );
          },
          SET_FEATURES: function (e) {
            e.features = {
              hasWheelEvent: "onwheel" in document,
              hasMouseWheelEvent: "onmousewheel" in document,
              hasTouch: "ontouchstart" in document,
              hasTouchWin:
                navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
              hasPointer: !!window.navigator.msPointerEnabled,
              hasKeyDown: "onkeydown" in document,
              hasMouse: window.matchMedia("(hover: hover) and (pointer: fine)")
                .matches,
            };
          },
        };
    },
    539: function (e, t) {},
    554: function (e, t, i) {
      "use strict";
      i.r(t);
      i(22), i(414), i(126);
      var n = i(13),
        a = {
          computed: {
            hasMouse: function () {
              return this.$store.state.app.features.hasMouse;
            },
            menu: function () {
              return this.$store.state.app.flags.menu;
            },
            price: function () {
              var e;
              return (
                (null === (e = this.$store.state.app.coin) ||
                void 0 === e ||
                null === (e = e.quote) ||
                void 0 === e ||
                null === (e = e.USD) ||
                void 0 === e ||
                null === (e = e.price) ||
                void 0 === e
                  ? void 0
                  : e.toFixed(9)) || 0
              );
            },
          },
          methods: {
            home: function () {
              "index" === this.$route.name
                ? n.a.to(window, { scrollTo: 0, duration: 1.5, ease: "snappy" })
                : this.$router.push("/");
            },
            toggle: function () {
              var e = this.menu;
              e
                ? this.$nuxt.$emit("menu-close")
                : this.$nuxt.$emit("menu-open"),
                this.$store.commit("app/SET_MENU", !e);
            },
            enter: function () {
              var e;
              null === (e = this.$refs.toggle) ||
                void 0 === e ||
                null === (e = e.inputs.hover) ||
                void 0 === e ||
                e.fire();
            },
          },
        },
        r = i(16),
        s = Object(r.a)(
          a,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "header",
              {
                staticClass:
                  "fixed top-0 left-0 w-full z-[1000] pt-15 s:pt-40 pointer-events-none",
              },
              [
                t(
                  "div",
                  {
                    staticClass:
                      "site-max --l flex items-center justify-between relative",
                  },
                  [
                    t("button", {
                      staticClass:
                        "relative w-[19.1rem] s:w-[30.15rem] h-[3rem] s:h-[6.25rem] pointer-events-auto js-logo-to js-logo-parent",
                      attrs: { type: "button" },
                      on: { click: e.home },
                    }),
                    e._v(" "),
                    // t(
                    //   "nav",
                    //   { staticClass: "s:flex s:items-center s:gap-x-25" },
                    //   [
                    //     e._v(" "),
                    //     t(
                    //       "button",
                    //       e._g(
                    //         {
                    //           staticClass:
                    //             "w-[5.8rem] s:w-[6.7rem] h-[5.8rem] s:h-[6.7rem] relative opacity-0 pointer-events-auto js-i-up",
                    //           attrs: { type: "button" },
                    //           on: { click: e.toggle },
                    //         },
                    //         e.hasMouse
                    //           ? {
                    //               mouseenter: function () {
                    //                 return e.enter();
                    //               },
                    //             }
                    //           : null
                    //       ),
                    //       [
                    //         t("RiveToggle", {
                    //           ref: "toggle",
                    //           staticClass: "pointer-events-none",
                    //           attrs: { lazy: !1 },
                    //         }),
                    //       ],
                    //       1
                    //     ),
                    //   ]
                    // ),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = s.exports;
      installComponents(s, { RiveToggle: i(555).default });
    },
    555: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i(7),
        a = (i(38), i(91), i(22), i(2), i(67)),
        r = {
          mixins: [i(109).a],
          mounted: function () {
            var e = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.$nextTick();
                      case 2:
                        (e.r = new a.Rive({
                          src: "/riv/ui.riv",
                          canvas: e.$el,
                          artboard: "nav",
                          stateMachines: "nav",
                          autoplay: !0,
                          onLoad: function () {
                            e.resize(),
                              (e.input = e.r.stateMachineInputs("nav")),
                              (e.inputs = {
                                hover: e.input.find(function (e) {
                                  return "hover" === e.name;
                                }),
                                close: e.input.find(function (e) {
                                  return "close" === e.name;
                                }),
                                menu: e.input.find(function (e) {
                                  return "menu" === e.name;
                                }),
                              }),
                              e.$nuxt.$on("menu-open", e.open),
                              e.$nuxt.$on("menu-close", e.close);
                          },
                        })),
                          e.init();
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          methods: {
            open: function () {
              this.inputs.close.fire();
            },
            close: function () {
              this.inputs.menu.fire();
            },
          },
        },
        s = i(16),
        l = Object(s.a)(
          r,
          function () {
            return (0, this._self._c)("canvas", {
              staticClass: "absolute top-0 left-0 w-full h-full",
            });
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = l.exports;
    },
    556: function (e, t, i) {
      "use strict";
      i.r(t);
      i(85);
      var n = i(66),
        a = i(7),
        r = (i(38), i(51), i(23), i(22), i(2), i(277), i(17), i(13)),
        s = i(31),
        l = {
          mounted: function () {
            var e = this;
            return Object(a.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.$nextTick();
                      case 2:
                        r.a.set(e.$refs.bg.$el, { alpha: 0 }),
                          r.a.set(e.$refs.item, {
                            scale: 0.25,
                            yPercent: 50,
                            alpha: 0,
                          }),
                          r.a.set(e.$refs.link, { yPercent: 100 }),
                          e.$nuxt.$on("menu-open", e.open),
                          e.$nuxt.$on("menu-close", e.close),
                          e.$nuxt.$on("leave", e.close);
                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          data: function () {
            return {
              menu: [
                {
                  title: "Media",
                  items: [
                    { title: "Telegram", to: "https://t.me/elonneiro" },
                    { title: "X", to: "https://x.com/ElonNeiro" },
                  ],
                },
              ],
              menuSmall: [
                {
                  title: "Media",
                  items: [
                    { title: "X", to: "https://x.com/ElonNeiro" },
                    { title: "Telegram", to: "https://t.me/elonneiro" },
                  ],
                },
              ],
              active: !1,
            };
          },
          beforeDestroy: function () {
            var e;
            null === (e = this.mm) || void 0 === e || e.revert();
          },
          computed: {
            exchanges: function () {
              return {
                title: "Exchanges",
                items: this.$store.state.app.global.exchanges.map(function (e) {
                  return { title: e.name, to: e.url, logo: e.logo.url };
                }),
              };
            },
            small: function () {
              return this.$store.state.app.bounds.small;
            },
            items: function () {
              return this.small
                ? [].concat(Object(n.a)(this.menuSmall), [this.exchanges])
                : this.menu;
            },
          },
          methods: {
            open: function () {
              if (!this.active) {
                var e;
                if (
                  ((this.active = !0),
                  !this.parents &&
                    (this.parents = Object(s.b)(".js-dd-parent", this.$el)),
                  this.small)
                )
                  null === (e = this.parents) ||
                    void 0 === e ||
                    e.forEach(function (e) {
                      return e.classList.remove("is-active");
                    }),
                    r.a.set(this.$refs.dd, { height: 0 });
                else
                  this.parents[0].classList.add("is-active"),
                    r.a.set(this.$refs.dd, { height: "auto" });
                (this.$socials = Object(s.a)(".js-socials", this.$el)),
                  (this.$items = this.$refs.item),
                  document.body.classList.add("overflow-hidden"),
                  !this.tl &&
                    (this.tl = r.a.timeline({
                      paused: !0,
                      defaults: { duration: 1, ease: "elastic(1, 0.5)" },
                    })),
                  this.tl
                    .clear()
                    .set(this.$el, { autoAlpha: 1 })
                    .to(
                      this.$refs.bg.$el,
                      { alpha: 1, duration: 0.5, ease: "power1" },
                      0
                    )
                    .to(
                      this.$items,
                      { scale: 1, yPercent: 0, alpha: 1, stagger: 0.075 },
                      0
                    )
                    .fromTo(
                      this.$refs.link,
                      { yPercent: 100 },
                      { yPercent: 0, stagger: 0.075, ease: "elastic(1, 0.75)" },
                      0.1
                    ),
                  this.$socials &&
                    this.tl.fromTo(
                      this.$socials,
                      { yPercent: 50, alpha: 0 },
                      {
                        yPercent: 0,
                        alpha: 1,
                        duration: 1,
                        ease: "elastic(1, 0.75)",
                      },
                      0.15
                    ),
                  this.tl.restart();
              }
            },
            close: function () {
              this.active &&
                ((this.active = !1),
                document.body.classList.remove("overflow-hidden"),
                this.tl
                  .clear()
                  .to(
                    this.$items,
                    {
                      scale: 0.5,
                      yPercent: 50,
                      stagger: -0.075,
                      duration: 0.5,
                      ease: "back.in",
                    },
                    0
                  )
                  .to(
                    this.$items,
                    {
                      alpha: 0,
                      stagger: -0.075,
                      duration: 0.5,
                      ease: "power1",
                    },
                    0
                  )
                  .to(
                    this.$refs.bg.$el,
                    { alpha: 0, duration: 1, ease: "power1" },
                    0
                  )
                  .set(this.$el, { autoAlpha: 0 }),
                this.$socials &&
                  this.tl.to(
                    this.$socials,
                    { yPercent: 50, alpha: 0, duration: 0.5, ease: "back.in" },
                    0
                  ),
                this.tl.restart());
            },
            toggle: function (e) {
              var t = e.currentTarget;
              Object(s.b)(".js-dd-t", this.$el).forEach(function (e) {
                var i = e.closest(".js-dd-parent"),
                  n = Object(s.a)(".js-dd", i);
                e !== t || i.classList.contains("is-active")
                  ? (i.classList.remove("is-active"),
                    r.a.to(n, { height: 0, duration: 0.5, ease: "snappy" }))
                  : (i.classList.add("is-active"),
                    r.a.to(n, {
                      height: "auto",
                      duration: 1,
                      ease: "elastic(1, 0.75)",
                    }));
              });
            },
            closeMenu: function () {
              this.$nuxt.$emit("menu-close"),
                this.$store.commit("app/SET_MENU", !1);
            },
          },
        },
        o = (i(472), i(16)),
        d = Object(o.a)(
          l,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "aside",
              {
                staticClass:
                  "fixed inset-0 flex items-start s:items-center justify-center invisible pt-100 s:pt-0 z-[999]",
                attrs: { "data-lenis-prevent": "" },
              },
              [
                t("Space", {
                  ref: "bg",
                  staticClass: "absolute inset-0",
                  attrs: {
                    cover: !0,
                    image: "/space/menu.jpg",
                    "image-mobile": "/space/menu-mobile.jpg",
                  },
                  nativeOn: {
                    click: function (t) {
                      return e.closeMenu.apply(null, arguments);
                    },
                  },
                }),
                e._v(" "),
                t(
                  "nav",
                  { staticClass: "relative site-max flex flex-col" },
                  [
                    t(
                      "ul",
                      {
                        staticClass:
                          "flex flex-col w-full max-w-[100rem] mx-auto",
                      },
                      e._l(e.items, function (i, n) {
                        return t(
                          "li",
                          {
                            key: n,
                            ref: "item",
                            refInFor: !0,
                            staticClass:
                              "relative w-full bg-gradient border-[.5rem] border-black overflow-hidden",
                            class: [
                              n > 0 && "-mt-5",
                              0 === n && "rounded-t-[2rem]",
                              n === e.items.length - 1 && "rounded-b-[2rem]",
                            ],
                          },
                          [
                            t(
                              "div",
                              {
                                ref: "link",
                                refInFor: !0,
                                class: [
                                  i.items && "menu-dd-parent js-dd-parent",
                                ],
                              },
                              [
                                i.to || !i.items
                                  ? t(
                                      "Link",
                                      {
                                        staticClass:
                                          "flex items-center h2 max-s:!text-24 whitespace-nowrap px-20 s:px-40 py-20 transition-colors duration-500 ease-out has-hover:hover:text-yellow active-yellow",
                                        attrs: { to: i.to },
                                      },
                                      [e._v(e._s(i.title))]
                                    )
                                  : t(
                                      "button",
                                      {
                                        staticClass:
                                          "flex items-center justify-between w-full h2 max-s:!text-24 whitespace-nowrap px-20 s:px-40 py-20 transition-colors duration-500 ease-out has-hover:hover:text-yellow js-dd-t",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function (t) {
                                            return e.toggle(t);
                                          },
                                        },
                                      },
                                      [
                                        e._v(
                                          "\n                        " +
                                            e._s(i.title) +
                                            "\n                        "
                                        ),
                                        t(
                                          "svg",
                                          {
                                            staticClass:
                                              "menu-dd-icon relative w-20 s:w-32 h-auto",
                                            attrs: {
                                              viewBox: "0 0 42 32",
                                              fill: "none",
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                            },
                                          },
                                          [
                                            t("path", {
                                              attrs: {
                                                d: "M12.4144 1.35321C13.8927 6.91006 17.2175 14.6113 20.863 19.3021C23.3361 13.3574 26.5951 7.07999 29.9409 1.50934C33.9297 1.17677 37.0534 1.19649 41.0468 1.32121C34.1352 11.0906 27.9853 22.8555 23.6849 31.1699C20.2081 31.0452 18.1812 30.9623 13.8926 31.378C9.75505 22.5837 5.32643 9.40869 0.496216 0.983643C4.4909 1.10763 9.44924 1.18693 12.4144 1.35321Z",
                                                fill: "url(#paint0_linear_1139_11316)",
                                              },
                                            }),
                                            e._v(" "),
                                            t(
                                              "defs",
                                              [
                                                t(
                                                  "linearGradient",
                                                  {
                                                    attrs: {
                                                      id: "paint0_linear_1139_11316",
                                                      x1: "20.7508",
                                                      y1: "0.983643",
                                                      x2: "20.7508",
                                                      y2: "31.378",
                                                      gradientUnits:
                                                        "userSpaceOnUse",
                                                    },
                                                  },
                                                  [
                                                    t("stop", {
                                                      attrs: {
                                                        "stop-color": "#EE9B01",
                                                      },
                                                    }),
                                                    e._v(" "),
                                                    t("stop", {
                                                      attrs: {
                                                        offset: "1",
                                                        "stop-color": "#EF3F28",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                e._v(" "),
                                i.items
                                  ? t(
                                      "div",
                                      {
                                        ref: "dd",
                                        refInFor: !0,
                                        staticClass:
                                          "menu-dd overflow-hidden h-0 js-dd",
                                      },
                                      [
                                        t(
                                          "ul",
                                          {
                                            staticClass:
                                              "grid s:grid-cols-3 s:pr-20 pb-20 gap-y-10 s:gap-y-0",
                                            class:
                                              "Exchanges" === i.title
                                                ? "grid-cols-1"
                                                : "grid-cols-2",
                                          },
                                          e._l(i.items, function (i, n) {
                                            return t(
                                              "li",
                                              {
                                                key: n,
                                                staticClass: "col-span-1",
                                              },
                                              [
                                                t(
                                                  "Link",
                                                  {
                                                    staticClass:
                                                      "flex justify-between h3 max-s:!text-21 uppercase font-disp-2 whitespace-nowrap px-20 s:px-40 transition-colors duration-500 ease-out has-hover:hover:text-yellow active-yellow",
                                                    attrs: { to: i.to },
                                                  },
                                                  [
                                                    e._v(
                                                      "\n                                    " +
                                                        e._s(i.title) +
                                                        "\n                                    "
                                                    ),
                                                    i.logo
                                                      ? t("img", {
                                                          staticClass:
                                                            "w-20 h-20 object-contain",
                                                          attrs: {
                                                            src: i.logo,
                                                            alt: "logo",
                                                          },
                                                        })
                                                      : e._e(),
                                                  ]
                                                ),
                                              ],
                                              1
                                            );
                                          }),
                                          0
                                        ),
                                      ]
                                    )
                                  : e._e(),
                              ],
                              1
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                    e._v(" "),
                    t("client-only", [
                      e.small
                        ? t(
                            "div",
                            {
                              staticClass:
                                "py-20 px-40 flex flex-col items-center frame bg-gradient mt-15 js-socials",
                            },
                            [
                              t("h3", { staticClass: "h3 text-red" }, [
                                e._v("Give us a follow"),
                              ]),
                              e._v(" "),
                              t(
                                "nav",
                                {
                                  staticClass:
                                    "flex flex-wrap justify-center gap-x-10 gap-y-10 s:gap-x-20 mt-20",
                                },
                                [
                                  t(
                                    "BaseButton",
                                    {
                                      attrs: {
                                        to: "https://x.com/ElonNeiro",
                                        label: "Twitter",
                                        circle: !0,
                                      },
                                    },
                                    [
                                      t(
                                        "svg",
                                        {
                                          staticClass:
                                            "block relative w-20 s:w-32 h-auto mb-3 z-3 js-label",
                                          attrs: {
                                            viewBox: "0 0 32 29",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                          },
                                        },
                                        [
                                          t("path", {
                                            staticClass: "fill-current",
                                            attrs: {
                                              d: "M0.807042 0.336914L12.6082 16.1159L0.732666 28.9451H3.40559L13.8029 17.7127L22.2033 28.9451H31.2987L18.8333 12.2786L29.8871 0.336914H27.2142L17.6391 10.6814L9.90248 0.336914H0.807042ZM4.73769 2.30557H8.91609L27.3675 26.9764H23.1891L4.73769 2.30557Z",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                  e._v(" "),
                                  t(
                                    "BaseButton",
                                    {
                                      attrs: {
                                        to: "https://t.me/elonneiro",
                                        label: "Telegram",
                                        circle: !0,
                                      },
                                    },
                                    [
                                      t(
                                        "svg",
                                        {
                                          staticClass:
                                            "block relative w-25 s:w-38 h-auto mb-3 mr-3 z-3 js-label",
                                          attrs: {
                                            viewBox: "0 0 38 32",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                          },
                                        },
                                        [
                                          t("path", {
                                            staticClass: "fill-current",
                                            attrs: {
                                              d: "M0.698018 15.0177C4.51054 12.9219 8.78709 11.1507 12.7608 9.3795C19.6234 6.49288 26.4859 3.63458 33.4574 0.991956C34.819 0.530097 37.2416 0.0922025 37.4877 2.10739C37.3527 4.93955 36.8342 7.77171 36.4529 10.5755C35.527 16.7845 34.4377 22.9673 33.3746 29.148C33.0195 31.2176 30.4335 32.2808 28.7734 30.9453C24.7975 28.2765 20.8216 25.6078 16.9001 22.8845C15.6213 21.5774 16.8173 19.6994 17.9633 18.7714C21.2312 15.558 24.6886 12.8064 27.7952 9.4296C28.6405 7.41442 26.1613 9.10282 25.3443 9.61914C20.8782 12.6975 16.5211 15.9654 11.7826 18.6886C9.3862 20.0219 6.55405 18.8781 4.15761 18.1439C2.00517 17.2725 -1.15378 16.3749 0.698018 15.0133V15.0177Z",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                  e._v(" "),

                                  t(
                                    "BaseButton",
                                    {
                                      attrs: {
                                        to: "https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon",
                                        label: "Reddit",
                                        circle: !0,
                                      },
                                    },
                                    [
                                        t("img", {
                                            
                                            ref: "sparkle",
                                            staticClass: "w-25 s:w-38 h-auto",
                                            class: "",
                                            attrs: { src: "/dextools.svg",
                                                style:'z-index:10' },
                                          }),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]
                          )
                        : e._e(),
                    ]),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = d.exports;
      installComponents(d, {
        Space: i(279).default,
        Link: i(276).default,
        BaseButton: i(192).default,
      });
    },
    557: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i(7),
        a = (i(38), i(126), i(13)),
        r = i(149),
        s = i(31),
        l = i(125),
        o = i.n(l),
        d = {
          mounted: function () {
            var e = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.$nextTick();
                      case 2:
                        e.$store.state.app.flags.loaded
                          ? e.run()
                          : e.$nuxt.$on("loaded", e.run);
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          methods: {
            run: function () {
              var e = this,
                t = Object(s.a)(".js-logo"),
                i = Object(s.a)(".js-logo-to"),
                n = r.a.getState(t),
                l = Object(s.b)(".js-i-up"),
                d = Object(s.a)(".js-i-title"),
                u = Object(s.a)(".js-i-subtitle"),
                m = Object(s.b)(".js-i-side"),
                c = 0.5;
              i.appendChild(t);
              var v = r.a
                .from(n, {
                  absolute: !0,
                  scale: !0,
                  duration: 0.85,
                  delay: 2,
                  ease: "expo.inOut",
                  onComplete: function () {
                    e.$el.remove();
                  },
                })
                .to(this.$el, { alpha: 0, duration: 0.5, ease: "power1" }, 0)
                .fromTo(
                  l,
                  { y: "3.5rem", alpha: 0 },
                  {
                    y: 0,
                    alpha: 1,
                    duration: 1.5,
                    stagger: 0.1,
                    ease: "elastic.out(1,0.5)",
                  },
                  c
                )
                .add(function () {
                  return e.$nuxt.$emit("enter-content");
                }, c);
              if (d) {
                var p = new o.a(d, {
                  type: "words, chars",
                  charsClass: "c-fix",
                });
                v.fromTo(
                  p.chars,
                  { scale: 0.25, xPercent: -100, alpha: 0 },
                  {
                    scale: 1,
                    xPercent: 0,
                    alpha: 1,
                    stagger: { each: 0.035, from: "center" },
                    duration: 1,
                    ease: "elastic(1, .5)",
                  },
                  0.35
                );
              }
              if (u) {
                var f = new o.a(u, { type: "lines, words" });
                v.fromTo(
                  f.words,
                  { scale: 0.5, yPercent: 100, alpha: 0 },
                  {
                    scale: 1,
                    yPercent: 0,
                    alpha: 1,
                    stagger: 0.035,
                    duration: 1,
                    ease: "elastic(1, .5)",
                  },
                  c
                );
              }
              m.length &&
                v.fromTo(
                  m,
                  { xPercent: a.a.utils.wrap([-100, 100]) },
                  { xPercent: 0, duration: 1, ease: "expo" },
                  0.75
                );
            },
          },
        },
        u = i(16),
        m = Object(u.a)(
          d,
          function () {
            var e = this._self._c;
            return e(
              "div",
              {
                staticClass:
                  "fixed inset-0 z-[999] flex items-center justify-center bg-black",
              },
              [
                e(
                  "div",
                  { staticClass: "relative w-300 h-60 js-logo-from" },
                  [
                    e("img", {
                      staticClass:
                        "absolute top-0 left-0 w-full h-full js-initial-logo",
                      attrs: { src: "/loading-logo.svg", alt: "Loading" },
                    }),
                    this._v(" "),
                    e("RiveLogo", {
                      ref: "logo",
                      staticClass: "absolute top-0 left-0 w-full h-full",
                      attrs: { lazy: !1 },
                    }),
                  ],
                  1
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = m.exports;
      installComponents(m, { RiveLogo: i(558).default });
    },
    558: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i(7),
        a = (i(38), i(91), i(22), i(2), i(126), i(67)),
        r = i(109),
        s = i(31),
        l = {
          mixins: [r.a],
          computed: {
            hasMouse: function () {
              return this.$store.state.app.features.hasMouse;
            },
          },
          mounted: function () {
            var e = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.$nextTick();
                      case 2:
                        (e.r = new a.Rive({
                          src: "/riv/preloader.riv",
                          canvas: e.$el,
                          artboard: "preloader",
                          stateMachines: "preloader",
                          shouldDisableRiveListeners: !0,
                          autoplay: !0,
                          onLoad: function () {
                            var t;
                            (e.resize(),
                            Object(s.a)(".js-initial-logo").remove(),
                            (e.inputs = e.r.stateMachineInputs("preloader")),
                            (e.loaded = e.inputs.find(function (e) {
                              return "loaded" === e.name;
                            })),
                            e.hasMouse) &&
                              ((e.hover = e.inputs.find(function (e) {
                                return "hover" === e.name;
                              })),
                              (e.logoParent = Object(s.a)(".js-logo-parent")),
                              null === (t = e.logoParent) ||
                                void 0 === t ||
                                t.addEventListener("mouseenter", e.logoEnter));
                            "complete" === document.readyState
                              ? e.hero()
                              : window.addEventListener("load", e.hero);
                          },
                        })),
                          e.init();
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          beforeDestroy: function () {
            var e;
            this.hasMouse &&
              (null === (e = this.logoParent) ||
                void 0 === e ||
                e.removeEventListener("mouseenter", this.logoEnter));
          },
          methods: {
            hero: function () {
              this.$store.state.app.flags.hero || "index" !== this.$route.name
                ? this.load()
                : this.$nuxt.$on("hero-loaded", this.load);
            },
            load: function () {
              this.$store.commit("app/SET_LOADED", !0),
                (this.loaded.value = !0),
                this.$nuxt.$emit("loaded");
            },
            logoEnter: function () {
              var e;
              null === (e = this.hover) || void 0 === e || e.fire();
            },
          },
        },
        o = i(16),
        d = Object(o.a)(
          l,
          function () {
            return (0, this._self._c)("canvas", {
              staticClass: "pointer-events-none js-logo",
            });
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = d.exports;
    },
    559: function (e, t, i) {
      "use strict";
      i.r(t);
      i(85);
      var n = i(7),
        a = (i(38), i(23), i(14), i(99), i(13)),
        r = i(125),
        s = i.n(r),
        l = {
          computed: {
            global: function () {
              return this.$store.state.app.global;
            },
            year: function () {
              return new Date().getFullYear();
            },
            small: function () {
              return this.$store.state.app.bounds.small;
            },
            hasMouse: function () {
              return this.$store.state.app.features.hasMouse;
            },
          },
          mounted: function () {
            var e = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.$nextTick();
                      case 2:
                        e.setup(), e.$nuxt.$on("enter", e.setup);
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          methods: {
            bump: function (e, t) {
              if (!this.small && this.hasMouse) {
                var i = this.stickers[t];
                i &&
                  (!i.tl &&
                    (i.tl = a.a.timeline({
                      paused: !0,
                      defaults: { duration: 0.75, ease: "power1" },
                    })),
                  i.tl
                    .clear()
                    .to(i.el, { yPercent: "random(-100, -200)" })
                    .to(i.el, { yPercent: 0, ease: "power1.in" })
                    .to(
                      i.el,
                      { rotation: "random(-125, 125)", duration: 1.5 },
                      0
                    )
                    .restart());
              }
            },
            setup: function () {
              var e;
              (this.stickers = this.$refs.stickers.map(function (e) {
                return { el: e.$el };
              })),
                null === (e = this.st) || void 0 === e || e.revert(),
                (this.st = a.a.timeline({
                  scrollTrigger: {
                    trigger: this.$refs.title,
                    start: "top 75%",
                    once: !0,
                  },
                })),
                !this.split &&
                  (this.split = new s.a(this.$refs.title, { type: "lines" })),
                this.st
                  .fromTo(
                    this.split.lines,
                    { scale: 0.5, yPercent: 100, alpha: 0 },
                    {
                      scale: 1,
                      yPercent: 0,
                      alpha: 1,
                      stagger: 0.1,
                      duration: 1,
                      ease: "elastic(1, .5)",
                    }
                  )
                  .fromTo(
                    [this.$refs.up1, this.$refs.up2.$el],
                    { y: "5rem", alpha: 0 },
                    {
                      y: 0,
                      alpha: 1,
                      stagger: 0.1,
                      duration: 1,
                      ease: "elastic(1, .5)",
                    },
                    "-=.9"
                  );
            },
          },
        },
        o = (i(479), i(16)),
        d = Object(o.a)(
          l,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "footer",
              { staticClass: "relative mt-100 s:mt-150 js-sf" },
              [
                t(
                  "Parallax",
                  { staticClass: "absolute top-0 s:-top-1/3 left-0 w-full" },
                  [
                    t(
                      "Space",
                      {
                        staticClass: "relative",
                        attrs: {
                          image: "/space/foot.jpg",
                          "image-mobile": "/space/foot-mobile.jpg",
                        },
                      },
                      [t("div", { staticClass: "pt-[150%] s:pt-[75%]" })]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                t(
                  "div",
                  {
                    staticClass:
                      "relative s:absolute s:inset-0 z-2 flex flex-col justify-center s:justify-between pb-60 pointer-events-none",
                  },
                  [
                    t(
                      "div",
                      {
                        staticClass:
                          "site-max flex flex-col items-center s:items-start relative z-2",
                      },
                      [
                        t("h2", {
                          ref: "title",
                          staticClass:
                            "h1 s:max-w-[75rem] text-center s:text-left js-s-lines",
                          domProps: {
                            innerHTML: e._s(
                              e.$sanitize(e.global.footTitle, ["br"])
                            ),
                          },
                        }),
                        e._v(" "),
                        t("p", {
                          ref: "up1",
                          staticClass:
                            "b-large s:max-w-[80rem] px-30 s:px-0 mt-20 s:mt-30 max-s:text-center",
                          domProps: {
                            textContent: e._s(
                              e.$sanitize(e.global.footSubtitle)
                            ),
                          },
                        }),
                        e._v(" "),
                        t("BaseButton", {
                          ref: "up2",
                          staticClass: "mt-30 s:mt-35 pointer-events-auto",
                          attrs: {
                            to: "https://app.uniswap.org/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                            label: "Buy $ELONEIRO",
                          },
                        }),
                      ],
                      1
                    ),
                    e._v(" "),
                    t("client-only", [
                      e.small
                        ? t(
                            "div",
                            { staticClass: "relative overflow-hidden mt-30" },
                            [
                              t(
                                "div",
                                { staticClass: "site-max relative z-2" },
                                [
                                  t(
                                    "div",
                                    { staticClass: "relative" },
                                    [
                                      t("div", { staticClass: "pt-[144%]" }),
                                      e._v(" "),
                                      t("div", { staticClass: "absolute top-0 left-0 w-full h-full pointer-events-none has-hover:pointer-events-auto" },
                                        [
                                          t("img", { attrs: {src: "https://i.ibb.co/h7tbbnR/light.gif" }}),
                                        ]
                                      ),
                                      // t("RiveBase", {
                                      //   attrs: {
                                      //     file: "footer",
                                      //     name: "footer",
                                      //   },
                                      // }),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                              e._v(" "),
                              t(
                                "LazySimple",
                                {
                                  staticClass:
                                    "relative media-fit -mt-275 -mx-200 z-1",
                                  attrs: { image: "/footer-ledge.png" },
                                },
                                [t("div", { staticClass: "pt-[48%]" })]
                              ),
                            ],
                            1
                          )
                        : e._e(),
                    ]),
                    e._v(" "),
                    t(
                      "div",
                      {
                        staticClass:
                          "site-max -mt-75 s:mt-0 relative pointer-events-auto z-2",
                      },
                      [
                        t(
                          "div",
                          {
                            staticClass:
                              "flex flex-col s:flex-row max-s:items-center rounded-[2rem] border-[.5rem] border-black overflow-hidden bg-gradient-flipped",
                          },
                          [
                            t(
                              "div",
                              {
                                staticClass:
                                  "w-full max-w-[28.5rem] px-20 s:border-l-[.5rem] s:border-black s:order-3 hidden",
                              },
                              [
                                t(
                                  "div",
                                  {
                                    staticClass: "relative w-full relative z-2",
                                  },
                                  [
                                    t("div", { staticClass: "pt-[125%]" }),
                                    e._v(" "),
                                    t("RiveBase", {
                                      attrs: { file: "chip", name: "chip" },
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            ),
                            e._v(" "),
                            t(
                              "div",
                              {
                                staticClass:
                                  "relative flex-1 px-45 pt-0 pb-40 s:py-40 s:order-1 overflow-hidden",
                              },
                              [
                                t("h3", { staticClass: "h3 text-red" }, [
                                  e._v("Give us a follow"),
                                ]),
                                e._v(" "),
                                t(
                                  "nav",
                                  {
                                    staticClass:
                                      "relative flex flex-wrap justify-center gap-x-15 gap-y-15 s:gap-x-20 mt-20",
                                  },
                                  [
                                    t(
                                      "BaseButton",
                                      {
                                        attrs: {
                                          to: "https://x.com/ElonNeiro",
                                          label: "Twitter",
                                          circle: !0,
                                        },
                                        nativeOn: {
                                          mouseenter: function (t) {
                                            return e.bump(t, 0);
                                          },
                                        },
                                      },
                                      [
                                        t(
                                          "svg",
                                          {
                                            staticClass:
                                              "block relative w-20 s:w-32 h-auto mb-3 z-3 js-label",
                                            attrs: {
                                              viewBox: "0 0 32 29",
                                              fill: "none",
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                            },
                                          },
                                          [
                                            t("path", {
                                              staticClass: "fill-current",
                                              attrs: {
                                                d: "M0.807042 0.336914L12.6082 16.1159L0.732666 28.9451H3.40559L13.8029 17.7127L22.2033 28.9451H31.2987L18.8333 12.2786L29.8871 0.336914H27.2142L17.6391 10.6814L9.90248 0.336914H0.807042ZM4.73769 2.30557H8.91609L27.3675 26.9764H23.1891L4.73769 2.30557Z",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                    e._v(" "),
                                    t(
                                      "BaseButton",
                                      {
                                        attrs: {
                                          to: "https://t.me/elonneiro",
                                          label: "Telegram",
                                          circle: !0,
                                        },
                                        nativeOn: {
                                          mouseenter: function (t) {
                                            return e.bump(t, 1);
                                          },
                                        },
                                      },
                                      [
                                        t(
                                          "svg",
                                          {
                                            staticClass:
                                              "block relative w-25 s:w-38 h-auto mb-3 mr-3 z-3 js-label",
                                            attrs: {
                                              viewBox: "0 0 38 32",
                                              fill: "none",
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                            },
                                          },
                                          [
                                            t("path", {
                                              staticClass: "fill-current",
                                              attrs: {
                                                d: "M0.698018 15.0177C4.51054 12.9219 8.78709 11.1507 12.7608 9.3795C19.6234 6.49288 26.4859 3.63458 33.4574 0.991956C34.819 0.530097 37.2416 0.0922025 37.4877 2.10739C37.3527 4.93955 36.8342 7.77171 36.4529 10.5755C35.527 16.7845 34.4377 22.9673 33.3746 29.148C33.0195 31.2176 30.4335 32.2808 28.7734 30.9453C24.7975 28.2765 20.8216 25.6078 16.9001 22.8845C15.6213 21.5774 16.8173 19.6994 17.9633 18.7714C21.2312 15.558 24.6886 12.8064 27.7952 9.4296C28.6405 7.41442 26.1613 9.10282 25.3443 9.61914C20.8782 12.6975 16.5211 15.9654 11.7826 18.6886C9.3862 20.0219 6.55405 18.8781 4.15761 18.1439C2.00517 17.2725 -1.15378 16.3749 0.698018 15.0133V15.0177Z",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                    e._v(" "),

                                    t(
                                      "BaseButton",
                                      {
                                        attrs: {
                                          to: "https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon",
                                          label: "Reddit",
                                          circle: !0,
                                        },
                                        nativeOn: {
                                          mouseenter: function (t) {
                                            return e.bump(t, 4);
                                          },
                                        },
                                      },
                                      [
                                        t("img", {
                                            
                                            ref: "sparkle",
                                            staticClass: "w-25 s:w-38 h-auto",
                                            class: "",
                                            attrs: { src: "/dextools.svg",
                                                style:'z-index:10' },
                                          }),
                                          
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                t(
                                  "div",
                                  {
                                    staticClass:
                                      "stickers absolute bottom-0 left-0 w-full max-s:hidden",
                                  },
                                  e._l(5, function (e, i) {
                                    return t("LazySimple", {
                                      key: i,
                                      ref: "stickers",
                                      refInFor: !0,
                                      staticClass: "stickers__sticker",
                                      attrs: {
                                        image: "/stickers/sticker_".concat(
                                          i + 1,
                                          ".png"
                                        ),
                                      },
                                    });
                                  }),
                                  1
                                ),
                              ]
                            ),
                            e._v(" "),
                            t(
                              "div",
                              {
                                staticClass:
                                  "hidden s:block flex-1 border-l-[.5rem] border-black px-45 py-40 s:order-2",
                              },
                              [
                                t("h3", { staticClass: "h3 text-red" }, [
                                  e._v("Elon Neiro"),
                                ]),
                                e._v(" "),
                                t(
                                  "ul",
                                  {
                                    staticClass:
                                      "flex flex-col items-start gap-y-10 mt-20",
                                  },
                                  e._l(e.global.footMenu, function (i) {
                                    return t(
                                      "li",
                                      { key: i.id },
                                      [
                                        t(
                                          "Link",
                                          {
                                            staticClass:
                                              "text-left font-disp-2 uppercase leading-none text-30 transition-colors duration-500 ease-out has-hover:hover:text-yellow active-yellow",
                                          },
                                          ["Elon Neiro is best version of Neiro which target billy MC!"]
                                        ),
                                      ],
                                      1
                                    );
                                  }),
                                  0
                                ),
                              ]
                            ),
                          ]
                        ),
                        e._v(" "),
                        t(
                          "div",
                          {
                            staticClass:
                              "flex flex-col s:flex-row max-s:items-center s:justify-between pt-35 capitalize text-15",
                          },
                          [
                            t(
                              "div",
                              {
                                staticClass:
                                  "relative flex flex-col s:flex-row items-center max-s:text-center px-60 s:px-0",
                              },
                              [
                                t("p", [
                                  e._v(
                                    "Copyright " +
                                      e._s(e.year) +
                                      " - Elon Neiro."
                                  ),
                                ]),
                                e._v(" "),
                                e._m(0),
                              ]
                            ),
                            e._v(" "),
                            t("MiscLinks", {
                              staticClass: "mt-30 s:mt-0",
                              attrs: { global: e.global },
                            }),
                          ],
                          1
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                t("client-only", [
                  e.small
                    ? e._e()
                    : t(
                        "div",
                        { staticClass: "relative z-1" },
                        [
                          t("div", { staticClass: "site-max relative z-2" }, [
                            t("div", { staticClass: "relative" }, [
                              t(
                                "div",
                                {
                                  staticClass:
                                    "absolute top-60 -right-20 w-full max-w-[67.5rem]",
                                },
                                [
                                  t("div", { staticClass: "pt-[144%]" }),
                                  e._v(" "),
                                  t("div", { staticClass: "absolute top-0 left-0 w-full h-full pointer-events-none has-hover:pointer-events-auto" },
                                    [
                                      t("img", { attrs: { style: "transform: scale(1.5)" , src: "https://i.ibb.co/h7tbbnR/light.gif" }}),
                                    ]
                                  ),
                                  // t("RiveBase", {
                                  //   attrs: { file: "footer", name: "footer" },
                                  // }),
                                ],
                                1
                              ),
                            ]),
                          ]),
                          e._v(" "),
                          t("div", { staticClass: "pt-[84%] relative" }),
                          e._v(" "),
                          t(
                            "LazySimple",
                            {
                              staticClass:
                                "absolute bottom-0 left-0 w-full media-fit z-1",
                              attrs: { image: "/footer-ledge.png" },
                            },
                            [t("div", { staticClass: "pt-[48%]" })]
                          ),
                        ],
                        1
                      ),
                ]),
              ],
              1
            );
          },
          [
            function () {
              var e = this._self._c;
              return e("p", { staticClass: "s:ml-50 mt-20 s:mt-0" });
            },
          ],
          !1,
          null,
          null,
          null
        );
      t.default = d.exports;
      installComponents(d, {
        Space: i(279).default,
        Parallax: i(411).default,
        BaseButton: i(192).default,
        RiveBase: i(412).default,
        LazySimple: i(275).default,
        Link: i(276).default,
        MiscLinks: i(560).default,
      });
    },
    560: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = { props: { global: { type: Object, required: !0 } } },
        a = i(16),
        r = Object(a.a)(
          n,
          function () {
            var e = this,
              t = e._self._c;
            return t("ul", { staticClass: "flex items-center gap-x-40" }, [
               
              t("li", [
                t(
                  "a",
                  {
                    staticClass:
                      "block transition-opacity duration-500 ease-out has-hover:hover:opacity-70",
                    attrs: {
                      href: e.global.uniswap,
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": "Uniswap",
                    },
                  },
                  [
                    t(
                      "svg",
                      {
                        staticClass: "w-41 h-46",
                        attrs: {
                          viewBox: "0 0 41 46",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                      },
                      [
                        t("path", {
                          attrs: {
                            d: "M16.3857 10.4843C15.8908 10.4136 15.8673 10.3901 16.1029 10.3665C16.5506 10.2958 17.5874 10.3901 18.3178 10.555C20.0143 10.9556 21.5459 11.9924 23.1717 13.8067L23.5959 14.3015L24.2085 14.2073C26.824 13.7831 29.5101 14.113 31.7486 15.1498C32.3612 15.4325 33.3273 15.998 33.4451 16.1394C33.4922 16.1865 33.5629 16.4928 33.6101 16.7992C33.775 17.9066 33.7043 18.7313 33.3509 19.3675C33.1624 19.7209 33.1624 19.8152 33.2802 20.1215C33.3744 20.3571 33.6572 20.5221 33.9164 20.5221C34.4819 20.5221 35.0709 19.6267 35.3537 18.3779L35.4715 17.883L35.6836 18.1187C36.8853 19.4618 37.8278 21.3232 37.9692 22.6427L38.0163 22.9962L37.8042 22.6899C37.4508 22.1479 37.1209 21.7945 36.6732 21.4882C35.8721 20.9462 35.0238 20.7813 32.7854 20.6635C30.759 20.5456 29.6044 20.3807 28.4734 20.0037C26.5412 19.3675 25.5516 18.5428 23.266 15.5032C22.2528 14.1601 21.6166 13.4297 20.9804 12.817C19.5902 11.474 18.2 10.7671 16.3857 10.4843Z",
                            fill: "#EBD7A5",
                          },
                        }),
                        e._v(" "),
                        t("path", {
                          attrs: {
                            d: "M33.94 13.4758C33.9871 12.5804 34.1049 11.9913 34.3641 11.4494C34.4584 11.2373 34.5526 11.0488 34.5762 11.0488C34.5997 11.0488 34.5526 11.2138 34.4819 11.4023C34.2934 11.9207 34.2699 12.6511 34.3877 13.4758C34.5526 14.5361 34.6233 14.6775 35.7543 15.8321C36.2727 16.374 36.8853 17.0573 37.121 17.3401L37.5215 17.8585L37.121 17.4815C36.6261 17.0102 35.4951 16.1148 35.2359 15.997C35.071 15.9028 35.0474 15.9028 34.9296 16.0206C34.8354 16.1148 34.8118 16.2562 34.8118 16.9395C34.7882 17.9998 34.6469 18.6596 34.2934 19.3429C34.1049 19.6964 34.0814 19.6257 34.2463 19.2251C34.3641 18.9188 34.3877 18.7774 34.3877 17.7642C34.3877 15.7143 34.152 15.2194 32.7147 14.3947C32.3613 14.1827 31.7486 13.8764 31.3952 13.7114C31.0182 13.5465 30.7354 13.4051 30.759 13.4051C30.8061 13.358 32.1963 13.7585 32.7383 13.9942C33.563 14.3241 33.7043 14.3476 33.7986 14.3241C33.8693 14.2534 33.9164 14.0649 33.94 13.4758Z",
                            fill: "#EBD7A5",
                          },
                        }),
                        e._v(" "),
                        t("path", {
                          attrs: {
                            d: "M17.3518 16.9876C16.3621 15.6209 15.726 13.5003 15.8673 11.9216L15.9145 11.4268L16.1501 11.4739C16.5742 11.5446 17.3047 11.8273 17.6581 12.0394C18.6006 12.6049 19.0247 13.3825 19.4253 15.3146C19.5431 15.8801 19.7081 16.5399 19.7787 16.7519C19.8966 17.1054 20.3443 17.9301 20.7213 18.4485C20.9805 18.8255 20.8155 19.014 20.2264 18.9668C19.3311 18.8726 18.1294 18.0479 17.3518 16.9876Z",
                            fill: "#EBD7A5",
                          },
                        }),
                        e._v(" "),
                        t("path", {
                          attrs: {
                            d: "M32.7382 27.2364C28.0727 25.3514 26.4233 23.7256 26.4233 20.9687C26.4233 20.5682 26.4469 20.2383 26.4469 20.2383C26.4705 20.2383 26.6354 20.3797 26.8475 20.5446C27.79 21.2986 28.8503 21.6285 31.7957 22.0526C33.5157 22.3118 34.5054 22.5003 35.4008 22.8066C38.2519 23.7491 40.0191 25.6813 40.4432 28.2968C40.561 29.0508 40.4903 30.4881 40.3018 31.2421C40.1369 31.8312 39.6656 32.9151 39.5478 32.9386C39.5242 32.9386 39.4771 32.8208 39.4771 32.6323C39.43 31.6427 38.9352 30.7002 38.1105 29.9697C37.1208 29.1215 35.8485 28.4853 32.7382 27.2364Z",
                            fill: "#EBD7A5",
                          },
                        }),
                        e._v(" "),
                        t("path", {
                          attrs: {
                            d: "M29.4395 28.014C29.3924 27.6605 29.2746 27.2128 29.2039 27.0243L29.0861 26.6709L29.2981 26.9301C29.6044 27.2835 29.8401 27.7077 30.0521 28.2967C30.2171 28.7444 30.2171 28.8858 30.2171 29.6162C30.2171 30.3231 30.1935 30.4881 30.0521 30.8886C29.8165 31.5248 29.5338 31.9725 29.0625 32.4673C28.2142 33.3392 27.1068 33.8104 25.5281 34.0225C25.2453 34.046 24.4442 34.1167 23.7373 34.1639C21.9701 34.2581 20.792 34.4466 19.7316 34.8236C19.5903 34.8707 19.4489 34.9179 19.4253 34.8943C19.3782 34.8472 20.1086 34.4231 20.6977 34.1403C21.5224 33.7397 22.3707 33.5277 24.2321 33.1978C25.1511 33.0564 26.0936 32.8679 26.3292 32.7737C28.6619 32.0432 29.8165 30.2289 29.4395 28.014Z",
                            fill: "#EBD7A5",
                          },
                        }),
                        e._v(" "),
                        t("path", {
                          attrs: {
                            d: "M31.5836 31.8087C30.971 30.4656 30.8296 29.1932 31.1595 27.9915C31.2066 27.8737 31.2538 27.7559 31.3009 27.7559C31.348 27.7559 31.4894 27.8265 31.6308 27.9208C31.9135 28.1093 32.5026 28.4392 34.0106 29.2639C35.9192 30.3006 37.0031 31.1018 37.7571 32.0207C38.4168 32.8219 38.8174 33.7408 39.0059 34.8718C39.1237 35.508 39.053 37.0396 38.8881 37.6758C38.3697 39.6786 37.1916 41.2809 35.4715 42.1998C35.2123 42.3412 35.0002 42.4355 34.9767 42.4355C34.9531 42.4355 35.0474 42.1998 35.1888 41.9171C35.7543 40.7154 35.8249 39.5608 35.4008 38.2649C35.1416 37.4637 34.5997 36.4977 33.5158 34.8718C32.2198 32.9868 31.9135 32.492 31.5836 31.8087Z",
                            fill: "#EBD7A5",
                          },
                        }),
                        e._v(" "),
                        t("path", {
                          attrs: {
                            d: "M14.0294 39.0177C15.7731 37.5568 17.9173 36.5201 19.8966 36.1902C20.7448 36.0488 22.1586 36.0959 22.9362 36.308C24.185 36.6379 25.316 37.3448 25.9051 38.2166C26.4706 39.0648 26.7298 39.7953 26.989 41.4211C27.0832 42.0573 27.201 42.7171 27.2246 42.8585C27.4131 43.7067 27.7901 44.3665 28.2613 44.7199C28.9918 45.2619 30.2642 45.2854 31.513 44.8142C31.7251 44.7435 31.9136 44.6728 31.9136 44.6964C31.9607 44.7435 31.3245 45.1676 30.9004 45.3797C30.3113 45.686 29.84 45.7802 29.2039 45.7802C28.0728 45.7802 27.1068 45.1912 26.3292 44.013C26.1643 43.7774 25.8344 43.0941 25.5516 42.4579C24.7269 40.5493 24.3028 39.9838 23.3367 39.3476C22.4885 38.8057 21.4046 38.6878 20.5799 39.0884C19.496 39.6068 19.2132 40.997 19.9672 41.8453C20.2736 42.1987 20.8391 42.4815 21.3103 42.5521C22.1821 42.67 22.9362 41.9866 22.9362 41.1148C22.9362 40.5493 22.7241 40.2194 22.1586 39.9602C21.4046 39.6304 20.5799 40.0074 20.6034 40.7378C20.6034 41.0441 20.7448 41.2326 21.0511 41.374C21.2396 41.4683 21.2396 41.4683 21.0983 41.4447C20.4149 41.3033 20.25 40.4551 20.7919 39.9131C21.4517 39.2534 22.8419 39.5361 23.3132 40.4551C23.5017 40.8321 23.5252 41.5861 23.3603 42.0573C22.9597 43.0941 21.8287 43.636 20.6741 43.3297C19.8966 43.1176 19.5667 42.9056 18.6242 41.9395C16.9748 40.243 16.3386 39.9131 13.9823 39.5597L13.5346 39.489L14.0294 39.0177Z",
                            fill: "#EBD7A5",
                          },
                        }),
                        e._v(" "),
                        t("path", {
                          attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M1.63543 1.10597C7.12556 7.77424 15.5846 18.1419 16.0087 18.7074C16.3622 19.1786 16.2208 19.6263 15.6317 19.9562C15.3018 20.1447 14.6185 20.3332 14.2886 20.3332C13.9116 20.3332 13.464 20.1447 13.1576 19.8384C12.9456 19.6263 12.0266 18.2832 9.9531 15.0551C8.37439 12.581 7.03131 10.5311 7.00775 10.5075C6.9135 10.4604 6.9135 10.4604 9.78816 15.5971C11.6025 18.8252 12.1916 19.9798 12.1916 20.1211C12.1916 20.4275 12.0973 20.5924 11.7203 21.0165C11.0841 21.7234 10.8014 22.5245 10.5893 24.1975C10.3537 26.059 9.71747 27.3785 7.90313 29.6169C6.84281 30.9365 6.67787 31.1721 6.41868 31.714C6.0888 32.3738 5.99455 32.7508 5.94742 33.599C5.9003 34.4944 5.99455 35.0599 6.25374 35.9082C6.48937 36.6622 6.74856 37.157 7.38475 38.1231C7.9267 38.9714 8.25658 39.6076 8.25658 39.8432C8.25658 40.0317 8.3037 40.0317 9.15196 39.8432C11.1784 39.3719 12.8513 38.5708 13.7703 37.5812C14.3358 36.9685 14.4771 36.6386 14.4771 35.7904C14.4771 35.2484 14.4536 35.1306 14.3122 34.8008C14.0766 34.2824 13.6289 33.8582 12.6628 33.1985C11.3904 32.3267 10.8485 31.6198 10.7071 30.6773C10.5893 29.8761 10.7307 29.3342 11.4376 27.8497C12.168 26.3181 12.3565 25.682 12.4743 24.1268C12.545 23.1372 12.6628 22.7366 12.9456 22.4303C13.2519 22.1004 13.5111 21.9826 14.2415 21.8883C15.4432 21.7234 16.2208 21.4171 16.8334 20.828C17.3754 20.3332 17.611 19.8384 17.6346 19.1079L17.6581 18.566L17.3518 18.2361C16.2444 16.9637 0.904988 0.0927734 0.8343 0.0927734C0.810737 0.0927734 1.18774 0.540466 1.63543 1.10597ZM8.86921 34.6122C9.1284 34.1646 8.98702 33.599 8.56289 33.3163C8.16232 33.0571 7.54969 33.1749 7.54969 33.5284C7.54969 33.6226 7.59682 33.7169 7.73819 33.764C7.95026 33.8818 7.97382 33.9996 7.80888 34.2588C7.64394 34.518 7.64394 34.7536 7.85601 34.9186C8.18589 35.1778 8.63358 35.0364 8.86921 34.6122Z",
                            fill: "#EBD7A5",
                          },
                        }),
                        e._v(" "),
                        t("path", {
                          attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M18.4122 22.2187C17.8467 22.3837 17.3047 22.9963 17.1398 23.6089C17.0455 23.9859 17.0926 24.6693 17.2576 24.8813C17.5168 25.2112 17.7524 25.3055 18.4122 25.3055C19.7081 25.3055 20.8156 24.7399 20.9334 24.0566C21.0512 23.4911 20.5564 22.7135 19.8731 22.3601C19.5196 22.1716 18.7892 22.1009 18.4122 22.2187ZM19.9202 23.3969C20.1087 23.1141 20.038 22.8078 19.6846 22.5957C19.0484 22.1952 18.0823 22.525 18.0823 23.1377C18.0823 23.444 18.5771 23.7739 19.0484 23.7739C19.3547 23.7739 19.7788 23.5854 19.9202 23.3969Z",
                            fill: "#EBD7A5",
                          },
                        }),
                      ]
                    ),
                  ]
                ),
              ]),
              e._v(" "),
              t("li", [
                t(
                  "a",
                  {
                    staticClass:
                      "block transition-opacity duration-500 ease-out has-hover:hover:opacity-70",
                    attrs: {
                      href: e.global.etherscan,
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": "Etherscan",
                    },
                  },
                  [
                    t(
                      "svg",
                      {
                        staticClass: "w-41 h-41",
                        attrs: {
                          viewBox: "0 0 41 41",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                      },
                      [
                        t("path", {
                          attrs: {
                            d: "M8.40425 19.8244C8.40425 19.6008 8.44699 19.3805 8.53577 19.1734C8.62126 18.9662 8.74621 18.7788 8.90404 18.621C9.06187 18.4632 9.24929 18.3382 9.45644 18.2527C9.66359 18.1672 9.88389 18.1245 10.1075 18.1245L12.932 18.1343C13.3824 18.1343 13.8132 18.3119 14.1321 18.6308C14.4511 18.9498 14.6286 19.3805 14.6286 19.831V30.5108C14.9476 30.4154 15.3553 30.3168 15.8025 30.2115C16.1116 30.1392 16.391 29.9616 16.5883 29.7118C16.7856 29.4619 16.8941 29.1528 16.8941 28.8338V15.5861C16.8941 15.1356 17.0717 14.7049 17.3906 14.3859C17.7096 14.067 18.1403 13.8894 18.5908 13.8894H21.4218C21.8723 13.8894 22.3031 14.067 22.622 14.3859C22.9409 14.7049 23.1185 15.1356 23.1185 15.5861V27.8803C23.1185 27.8803 23.8254 27.5942 24.5159 27.3016C24.7724 27.1931 24.9927 27.0122 25.144 26.7788C25.2985 26.5453 25.3807 26.2757 25.3807 25.9962V11.3477C25.3807 10.8972 25.5583 10.4665 25.8772 10.1475C26.1962 9.8286 26.6269 9.65104 27.0774 9.65104H29.9084C30.3589 9.65104 30.7896 9.8286 31.1086 10.1475C31.4275 10.4665 31.6051 10.8972 31.6051 11.3477V23.4183C34.058 21.6395 36.5438 19.5022 38.52 16.9309C38.806 16.5561 38.9967 16.1187 39.0724 15.6551C39.148 15.1915 39.1085 14.7147 38.954 14.2708C38.0399 11.6436 36.5899 9.23345 34.6926 7.2014C32.7954 5.16607 30.4937 3.55161 27.9356 2.45667C25.3807 1.35845 22.622 0.809333 19.8403 0.842214C17.0585 0.875095 14.313 1.48997 11.7811 2.64409C9.24929 3.79822 6.98708 5.46857 5.13916 7.54665C3.29125 9.62473 1.89709 12.0678 1.04548 14.718C0.193858 17.3682 -0.0922067 20.1664 0.200434 22.9317C0.493075 25.697 1.36113 28.3735 2.74542 30.787C2.98546 31.2045 3.34057 31.5432 3.76802 31.7635C4.19548 31.9838 4.67554 32.0792 5.1556 32.0364C5.69156 31.9904 6.35576 31.9214 7.14819 31.8293C7.49344 31.7898 7.81239 31.6254 8.04256 31.3657C8.27272 31.1059 8.40096 30.7705 8.40096 30.4253V19.8244H8.40425Z",
                            fill: "#EDDEB9",
                          },
                        }),
                        e._v(" "),
                        t("path", {
                          attrs: {
                            d: "M8.34174 36.9551C11.324 39.1253 14.8489 40.4273 18.5283 40.72C22.2044 41.0093 25.8936 40.2794 29.1784 38.6057C32.4665 36.9321 35.2253 34.3805 37.1521 31.2338C39.0789 28.0871 40.0982 24.4702 40.0982 20.7809C40.0982 20.3206 40.0785 19.8636 40.0456 19.4131C32.7394 30.3099 19.2517 35.4031 8.34174 36.9551Z",
                            fill: "#EDDEB9",
                          },
                        }),
                      ]
                    ),
                  ]
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = r.exports;
    },
    561: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i(7),
        a = (i(38), i(91), i(22), i(2), i(67)),
        r = {
          mounted: function () {
            var e = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.$nextTick();
                      case 2:
                        (e.r = new a.Rive({
                          src: "/riv/page-transition.riv",
                          canvas: e.$refs.canvas,
                          artboard: "page-transition",
                          stateMachines: "page-transition",
                          layout: new a.Layout({
                            fit: a.Fit.Cover,
                            alignment: a.Alignment.CenterCenter,
                          }),
                          autoplay: !1,
                          onLoad: function () {
                            e.r.resizeDrawingSurfaceToCanvas(
                              Math.min(1.25, window.devicePixelRatio)
                            ),
                              (e.inputs =
                                e.r.stateMachineInputs("page-transition")),
                              (e.t = e.inputs.find(function (e) {
                                return "transition" === e.name;
                              })),
                              e.$nuxt.$on("leave", e.leave),
                              e.$nuxt.$on("resize", e.resize);
                          },
                        })),
                          e.r.on(a.EventType.RiveEvent, e.event);
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          beforeDestroy: function () {
            this.$nuxt.$off("leave", this.leave),
              this.$nuxt.$off("resize", this.resize);
          },
          methods: {
            leave: function (e) {
              (this.cb = e), this.r.play(), this.t.fire();
            },
            event: function (e) {
              var t,
                i = e.data.name;
              "js_page-switch" === i
                ? null === (t = this.cb) || void 0 === t || t.call(this)
                : "js_pause-rive" === i && this.r.stopRendering();
            },
            resize: function () {
              var e;
              null === (e = this.r) || void 0 === e || e.resizeToCanvas();
            },
          },
        },
        s = i(16),
        l = Object(s.a)(
          r,
          function () {
            var e = this._self._c;
            return e(
              "div",
              { staticClass: "fixed inset-0 z-[9999] pointer-events-none" },
              [
                e("canvas", {
                  ref: "canvas",
                  staticClass: "absolute top-0 left-0 w-full h-full",
                }),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = l.exports;
    },
    562: function (e, t, i) {
      "use strict";
      i.r(t);
      i(22);
      var n = {
          computed: {
            exchanges: function () {
              return this.$store.state.app.global.exchanges;
            },
          },
        },
        a = (i(493), i(16)),
        r = Object(a.a)(
          n,
          function () {
            var e = this,
              t = e._self._c;
            return t("span", [
              t(
                "div",
                {
                  staticClass:
                    "side fixed top-[calc(50%-8rem)] left-0 z-10 cursor-pointer js-t-side js-i-side hidden",
                },
                [
                  e._m(0),
                  e._v(" "),
                  t(
                    "nav",
                    {
                      staticClass:
                        "side-menu absolute left-45 top-5 w-[39.5rem] grid grid-cols-3",
                    },
                    e._l(e.exchanges, function (i, n) {
                      return t(
                        "a",
                        {
                          key: i.id,
                          staticClass:
                            "item-bordered group flex flex-col gap-y-15 h-160 items-center justify-center bg-black",
                          attrs: {
                            href: i.url,
                            target: "_blank",
                            rel: "noreferrer",
                          },
                        },
                        [
                          t("LazySimple", {
                            staticClass: "relative h-40 w-40 media-contain",
                            attrs: { image: i.logo.url },
                          }),
                          e._v(" "),
                          t(
                            "span",
                            {
                              staticClass:
                                "text-18 transition-colors duration-500 ease-out has-hover:group-hover:text-yellow",
                            },
                            [e._v(e._s(i.name))]
                          ),
                        ],
                        1
                      );
                    }),
                    0
                  ),
                ]
              ),
              e._v(" "),
              t(
                "div",
                {
                  staticClass:
                    "side fixed top-[calc(50%-8rem)] right-0 z-10 cursor-pointer js-t-side js-i-side",
                },
                [
                  e._m(1),
                  e._v(" "),
                  t(
                    "nav",
                    {
                      staticClass:
                        "side-menu absolute right-45 top-5 w-[39.5rem] grid grid-cols-3",
                    },
                    [
                      t(
                        "div",
                        {
                          staticClass:
                            "item-bordered group flex flex-col gap-y-15 h-160 items-center justify-center bg-black",
                        },
                        [
                          t(
                            "BaseButton",
                            {
                              attrs: {
                                to: "https://x.com/ElonNeiro",
                                label: "Twitter",
                                circle: !0,
                              },
                            },
                            [
                              t(
                                "svg",
                                {
                                  staticClass:
                                    "block relative w-20 s:w-32 h-auto mb-3 z-3 js-label",
                                  attrs: {
                                    viewBox: "0 0 32 29",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                  },
                                },
                                [
                                  t("path", {
                                    staticClass: "fill-current",
                                    attrs: {
                                      d: "M0.807042 0.336914L12.6082 16.1159L0.732666 28.9451H3.40559L13.8029 17.7127L22.2033 28.9451H31.2987L18.8333 12.2786L29.8871 0.336914H27.2142L17.6391 10.6814L9.90248 0.336914H0.807042ZM4.73769 2.30557H8.91609L27.3675 26.9764H23.1891L4.73769 2.30557Z",
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      e._v(" "),
                      t(
                        "div",
                        {
                          staticClass:
                            "item-bordered group flex flex-col gap-y-15 h-160 items-center justify-center bg-black",
                        },
                        [
                          t(
                            "BaseButton",
                            {
                              attrs: {
                                to: "https://t.me/elonneiro",
                                label: "Telegram",
                                circle: !0,
                              },
                            },
                            [
                              t(
                                "svg",
                                {
                                  staticClass:
                                    "block relative w-25 s:w-38 h-auto mb-3 mr-3 z-3 js-label",
                                  attrs: {
                                    viewBox: "0 0 38 32",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                  },
                                },
                                [
                                  t("path", {
                                    staticClass: "fill-current",
                                    attrs: {
                                      d: "M0.698018 15.0177C4.51054 12.9219 8.78709 11.1507 12.7608 9.3795C19.6234 6.49288 26.4859 3.63458 33.4574 0.991956C34.819 0.530097 37.2416 0.0922025 37.4877 2.10739C37.3527 4.93955 36.8342 7.77171 36.4529 10.5755C35.527 16.7845 34.4377 22.9673 33.3746 29.148C33.0195 31.2176 30.4335 32.2808 28.7734 30.9453C24.7975 28.2765 20.8216 25.6078 16.9001 22.8845C15.6213 21.5774 16.8173 19.6994 17.9633 18.7714C21.2312 15.558 24.6886 12.8064 27.7952 9.4296C28.6405 7.41442 26.1613 9.10282 25.3443 9.61914C20.8782 12.6975 16.5211 15.9654 11.7826 18.6886C9.3862 20.0219 6.55405 18.8781 4.15761 18.1439C2.00517 17.2725 -1.15378 16.3749 0.698018 15.0133V15.0177Z",
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),

                      e._v(" "),
                      t(
                        "div",
                        {
                          staticClass:
                            "item-bordered group flex flex-col gap-y-15 h-160 items-center justify-center bg-black",
                        },
                        [
                          t(
                            "BaseButton",
                            {
                              attrs: {
                                to: "https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon",
                                label: "Reddit",
                                circle: !0,
                              },
                            },
                            [
                                t("img", {
                                            
                                    ref: "sparkle",
                                    staticClass: "w-25 s:w-38 h-auto",
                                    class: "",
                                    attrs: { src: "/dextools.svg",
                                        style:'z-index:10' },
                                  }),
                            ]
                          ),
                        ],
                        1
                      ),
                    ]
                  ),
                ]
              ),
            ]);
          },
          [
            function () {
              var e = this,
                t = e._self._c;
              return t(
                "button",
                {
                  staticClass:
                    "side-btn overflow-hidden relative bord-gradient w-45 h-160 rounded-tr-[2rem] rounded-br-[2rem] z-2",
                  attrs: { type: "button" },
                },
                [
                  t(
                    "div",
                    {
                      staticClass:
                        "absolute inset-0 flex items-center justify-center",
                    },
                    [
                      t(
                        "div",
                        {
                          staticClass:
                            "relative text-19 font-disp-2 uppercase -rotate-90",
                        },
                        [e._v("Exchanges")]
                      ),
                    ]
                  ),
                  e._v(" "),
                  t(
                    "div",
                    {
                      staticClass:
                        "side-btn__mask --1 absolute inset-5 left-0 bg-black text-yellow rounded-tr-[1.5rem] rounded-br-[1.5rem] overflow-hidden",
                    },
                    [
                      t(
                        "div",
                        {
                          staticClass:
                            "side-btn__mask --2 absolute inset-0 flex items-center justify-center pl-[.25rem]",
                        },
                        [
                          t(
                            "div",
                            {
                              staticClass:
                                "relative text-19 font-disp-2 uppercase -rotate-90",
                              attrs: { "aria-hidden": "true" },
                            },
                            [e._v("Exchanges")]
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              );
            },
            function () {
              var e = this,
                t = e._self._c;
              return t(
                "button",
                {
                  staticClass:
                    "side-btn --reverse overflow-hidden relative bord-gradient w-45 h-160 rounded-tl-[2rem] rounded-bl-[2rem]",
                  attrs: { type: "button" },
                },
                [
                  t(
                    "div",
                    {
                      staticClass:
                        "absolute inset-0 flex items-center justify-center",
                    },
                    [
                      t(
                        "div",
                        {
                          staticClass:
                            "relative text-19 font-disp-2 uppercase -rotate-90",
                        },
                        [e._v("Follow")]
                      ),
                    ]
                  ),
                  e._v(" "),
                  t(
                    "div",
                    {
                      staticClass:
                        "side-btn__mask --2 absolute inset-5 right-0 bg-black text-yellow rounded-tl-[1.5rem] rounded-bl-[1.5rem] overflow-hidden",
                    },
                    [
                      t(
                        "div",
                        {
                          staticClass:
                            "side-btn__mask --1 absolute inset-0 flex items-center justify-center pr-[.25rem]",
                        },
                        [
                          t(
                            "div",
                            {
                              staticClass:
                                "relative text-19 font-disp-2 uppercase -rotate-90",
                              attrs: { "aria-hidden": "true" },
                            },
                            [e._v("Follow")]
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        );
      t.default = r.exports;
      installComponents(r, {
        LazySimple: i(275).default,
        BaseButton: i(192).default,
      });
    },
    563: function (e, t, i) {
      "use strict";
      i.r(t);
      i(26), i(14), i(29);
      var n = {
          computed: {
            modal: function () {
              return this.$store.state.app.modal;
            },
            componentType: function () {
              return this.toPascal(this.modal.component);
            },
          },
          mounted: function () {
            document.body.classList.add("overflow-hidden");
          },
          beforeDestroy: function () {
            document.body.classList.remove("overflow-hidden");
          },
          methods: {
            toPascal: function (e) {
              if (e) {
                var t = e.replace(/_([a-z])/g, function (e, t) {
                  return t.toUpperCase();
                });
                return t.charAt(0).toUpperCase() + t.slice(1);
              }
            },
            close: function () {
              this.$store.commit("app/SET_MODAL", { active: !1 });
            },
          },
        },
        a = (i(495), i(16)),
        r = Object(a.a)(
          n,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "aside",
              {
                staticClass:
                  "fixed inset-0 z-[9999] flex items-center justify-center p-20",
                attrs: { "data-lenis-prevent": "" },
              },
              [
                t("div", {
                  ref: "bg",
                  staticClass: "absolute inset-0 bg-black/80 js-bg",
                  on: { click: e.close },
                }),
                e._v(" "),
                t(e.componentType, {
                  tag: "component",
                  staticClass: "max-h-[calc(100svh-6rem)]",
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = r.exports;
    },
    73: function (e, t) {
      var i = {
        kind: "Document",
        definitions: [
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "ImageFragment" },
            typeCondition: {
              kind: "NamedType",
              name: { kind: "Name", value: "FileField" },
            },
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "url" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "title" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "focalPoint" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "x" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "y" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "thumbnail" },
                  name: { kind: "Name", value: "url" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "imgixParams" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "fit" },
                            value: { kind: "EnumValue", value: "max" },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "w" },
                            value: { kind: "IntValue", value: "700" },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "h" },
                            value: { kind: "IntValue", value: "700" },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "auto" },
                            value: { kind: "EnumValue", value: "compress" },
                          },
                        ],
                      },
                    },
                  ],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "height" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "width" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "alt" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "imgixParams" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "fit" },
                            value: { kind: "EnumValue", value: "max" },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "w" },
                            value: { kind: "IntValue", value: "2000" },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "h" },
                            value: { kind: "IntValue", value: "2000" },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "auto" },
                            value: { kind: "EnumValue", value: "compress" },
                          },
                        ],
                      },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "srcSet" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "webpSrcSet" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sizes" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "src" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "width" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "height" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aspectRatio" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "alt" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "base64" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 356 },
      };
      i.loc.source = {
        body: "fragment ImageFragment on FileField {\n  url\n  title\n  focalPoint {\n    x\n    y\n  }\n  thumbnail: url(imgixParams: { fit: max, w: 700, h: 700, auto: compress })\n  height\n  width\n  alt\n\tresponsiveImage(imgixParams: { fit: max, w: 2000, h: 2000, auto: compress }) {\n\t\tsrcSet\n\t\twebpSrcSet\n\t\tsizes\n\t\tsrc\n\t\twidth\n\t\theight\n\t\taspectRatio\n\t\talt\n\t\ttitle\n\t\tbase64\n\t}\n}",
        name: "GraphQL request",
        locationOffset: { line: 1, column: 1 },
      };
      function n(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && t.add(i.name.value);
        }
        e.selectionSet &&
          e.selectionSet.selections.forEach(function (e) {
            n(e, t);
          }),
          e.variableDefinitions &&
            e.variableDefinitions.forEach(function (e) {
              n(e, t);
            }),
          e.definitions &&
            e.definitions.forEach(function (e) {
              n(e, t);
            });
      }
      var a = {};
      function r(e, t) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == t) return n;
        }
      }
      i.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          n(e, t), (a[e.name.value] = t);
        }
      }),
        (e.exports = i),
        (e.exports.ImageFragment = (function (e, t) {
          var i = { kind: e.kind, definitions: [r(e, t)] };
          e.hasOwnProperty("loc") && (i.loc = e.loc);
          var n = a[t] || new Set(),
            s = new Set(),
            l = new Set();
          for (
            n.forEach(function (e) {
              l.add(e);
            });
            l.size > 0;

          ) {
            var o = l;
            (l = new Set()),
              o.forEach(function (e) {
                s.has(e) ||
                  (s.add(e),
                  (a[e] || new Set()).forEach(function (e) {
                    l.add(e);
                  }));
              });
          }
          return (
            s.forEach(function (t) {
              var n = r(e, t);
              n && i.definitions.push(n);
            }),
            i
          );
        })(i, "ImageFragment"));
    },
  },
  [[415, 59, 1, 60]],
]);
