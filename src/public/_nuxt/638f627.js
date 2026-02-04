(window.webpackJsonp = window.webpackJsonp || []).push([
  [50, 3, 4, 5, 6, 7, 9, 32, 35, 36, 49],
  {
    572: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = {
          props: { url: { type: String, required: !0 } },
          mounted: function () {
            var t;
            null === (t = this.$lazyVid) || void 0 === t || t.observe(this.$el);
          },
          destroyed: function () {
            var t;
            null === (t = this.$lazyVid) ||
              void 0 === t ||
              t.unobserve(this.$el);
          },
        },
        i = a(16),
        r = Object(i.a)(
          s,
          function () {
            return (0, this._self._c)("video", {
              attrs: {
                src: this.url,
                preload: "meta",
                muted: "",
                loop: "",
                playsinline: "",
              },
              domProps: { muted: !0 },
            });
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = r.exports;
      installComponents(r, { Video: a(572).default });
    },
    573: function (t, e, a) {
      "use strict";
      a.r(e);
      a(51), a(124);
      var s = {
          props: {
            image: { type: Object, required: !0 },
            lazy: { type: Boolean, default: !0 },
            aspect: { type: Boolean, default: !0 },
            customAspect: { type: Number, default: null },
            contain: { type: Boolean, default: !1 },
          },
          data: function () {
            return { loaded: !1 };
          },
          computed: {
            classes: function () {
              return [
                this.contain ? "media-contain" : "media-fill",
                this.lazy && "lazy",
                this.aspect ? "relative w-full" : "absolute inset-0",
              ];
            },
            ratio: function () {
              return (
                this.customAspect ||
                (1 / this.image.responsiveImage.aspectRatio) * 100
              );
            },
            styles: function () {
              return {
                objectFit: this.contain ? "contain" : "cover",
                objectPosition: this.image.focalPoint
                  ? ""
                      .concat(100 * this.image.focalPoint.x, "% ")
                      .concat(100 * this.image.focalPoint.y, "%")
                  : "center",
              };
            },
          },
          mounted: function () {
            var t = this;
            this.$nextTick(function () {
              t.$refs.media &&
                (t.$refs.media.complete
                  ? (t.loaded = !0)
                  : (t.$refs.media.onload = function () {
                      return (t.loaded = !0);
                    }));
            });
          },
        },
        i = a(16),
        r = Object(i.a)(
          s,
          function () {
            var t = this,
              e = t._self._c;
            return t.image
              ? e(
                  "figure",
                  { staticClass: "overflow-hidden", class: t.classes },
                  [
                    t.aspect && !t.customAspect
                      ? e("div", {
                          style: "padding-top: ".concat(t.ratio, "%;"),
                        })
                      : t._e(),
                    t._v(" "),
                    t.aspect && t.customAspect
                      ? e("div", {
                          style: "padding-top: ".concat(t.customAspect, "%"),
                        })
                      : t._e(),
                    t._v(" "),
                    e(
                      "picture",
                      { ref: "picture", staticClass: "absolute inset-0" },
                      [
                        e("source", {
                          attrs: {
                            srcset: t.image.responsiveImage.webpSrcSet,
                            sizes: t.image.responsiveImage.sizes,
                            type: "image/webp",
                          },
                        }),
                        t._v(" "),
                        e("source", {
                          attrs: {
                            srcset: t.image.responsiveImage.srcSet,
                            sizes: t.image.responsiveImage.sizes,
                            type: "image/jpeg",
                          },
                        }),
                        t._v(" "),
                        e("img", {
                          ref: "media",
                          class: [
                            "transition-opacity duration-500 ease-out",
                            t.loaded ? "opacity-100" : "opacity-0",
                          ],
                          style: t.styles,
                          attrs: {
                            src: t.image.responsiveImage.src,
                            width: t.image.responsiveImage.width,
                            height: t.image.responsiveImage.height,
                            alt: t.image.responsiveImage.alt,
                            title: t.image.responsiveImage.title,
                            loading: "lazy",
                            decoding: "async",
                            draggable: "false",
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    t._t("default"),
                  ],
                  2
                )
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = r.exports;
    },
    575: function (t, e, a) {
      var s = a(581);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.i, s, ""]]),
        s.locals && (t.exports = s.locals);
      (0, a(76).default)("2e83e6d9", s, !0, { sourceMap: !1 });
    },
    577: function (t, e, a) {
      "use strict";
      var s = a(1),
        i = a(278),
        r = a(152);
      s({ target: "Array", proto: !0 }, { fill: i }), r("fill");
    },
    578: function (t, e, a) {
      "use strict";
      a.r(e);
      a(577), a(85);
      var s = {
          props: {
            item: { type: [Object, Array], required: !0 },
            fill: { type: Boolean, default: !1 },
          },
          computed: {
            media: function () {
              return Array.isArray(this.item) ? this.item[0] : this.item;
            },
            small: function () {
              return this.$store.state.app.bounds.small;
            },
            image: function () {
              return this.media.image;
            },
            video: function () {
              var t;
              return this.media.videoUrl
                ? this.media.videoUrl
                : null === (t = this.media.video) || void 0 === t
                ? void 0
                : t.url;
            },
            aspect: function () {
              if (!this.image) return 0;
              var t = this.image,
                e = t.width;
              return (t.height / e) * 100;
            },
          },
        },
        i = a(16),
        r = Object(i.a)(
          s,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "bg-white-cream",
                class: t.fill ? "absolute inset-0" : "relative w-full",
              },
              [
                t.video
                  ? e(
                      "div",
                      {
                        staticClass: "media-fill",
                        class: t.fill ? "absolute inset-0" : "relative w-full",
                      },
                      [
                        e("Video", { attrs: { url: t.video } }),
                        t._v(" "),
                        t.fill
                          ? t._e()
                          : e("div", {
                              staticClass: "aspect",
                              style: "--aspect: ".concat(t.aspect, "%;"),
                            }),
                      ],
                      1
                    )
                  : e("LazyPicture", {
                      attrs: { image: t.image, aspect: !t.fill },
                    }),
                t._v(" "),
                t._t("default"),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = r.exports;
      installComponents(r, {
        Video: a(572).default,
        LazyPicture: a(573).default,
      });
    },
    580: function (t, e, a) {
      "use strict";
      a(575);
    },
    581: function (t, e, a) {
      var s = a(75)(function (t) {
        return t[1];
      });
      s.push([
        t.i,
        ".media-menu{perspective:100vw}.media-menu__text{-webkit-background-clip:text;-webkit-text-fill-color:transparent}.media-menu__dd{transform:rotateX(30deg)}.media-menu__link.nuxt-link-exact-active{color:#ee9b01;pointer-events:none}",
        "",
      ]),
        (s.locals = {}),
        (t.exports = s);
    },
    585: function (t, e, a) {
      "use strict";
      var s,
        i,
        r = a(7),
        l = (a(33), a(2), a(126), a(38), a(13)),
        n = a(31),
        o = a(125),
        c = a.n(o),
        u =
          (a(17),
          {
            data: function () {
              return { a: [] };
            },
            methods: {
              st_init: function () {
                this.$store.state.app.flags.loaded
                  ? this.st_setup()
                  : this.$nuxt.$on("loaded", this.st_setup);
              },
              st_setup: function () {
                var t = this,
                  e = Object(n.b)(".js-s-chars", this.$el);
                e.length &&
                  e.forEach(function (e) {
                    var a = new c.a(e, {
                      type: "words, chars",
                      wordsClass: "c-fix-p whitespace-nowrap",
                      charsClass: "c-fix",
                    });
                    t.a.push(
                      l.a.fromTo(
                        a.chars,
                        { scale: 0.25, xPercent: -100, alpha: 0 },
                        {
                          scale: 1,
                          xPercent: 0,
                          alpha: 1,
                          stagger: -0.05,
                          duration: 1,
                          ease: "elastic(1, .5)",
                          scrollTrigger: {
                            trigger: e,
                            start: "top 75%",
                            once: !0,
                          },
                        }
                      )
                    );
                  }),
                  (e = Object(n.b)(".js-s-chars-up", this.$el)).length &&
                    e.forEach(function (e) {
                      var a = new c.a(e, {
                        type: "words, chars",
                        wordsClass: "c-fix-p whitespace-nowrap",
                        charsClass: "c-fix",
                      });
                      t.a.push(
                        l.a.fromTo(
                          a.chars,
                          { yPercent: 100, alpha: 0 },
                          {
                            yPercent: 0,
                            alpha: 1,
                            stagger: -0.065,
                            duration: 1.1,
                            ease: "elastic(1, .5)",
                            scrollTrigger: {
                              trigger: e,
                              start: "top 75%",
                              toggleClass: "is-animated",
                              once: !0,
                            },
                          }
                        )
                      );
                    }),
                  (e = Object(n.b)(".js-s-lines", this.$el)).length &&
                    e.forEach(function (e) {
                      var a = new c.a(e, { type: "lines" });
                      t.a.push(
                        l.a.fromTo(
                          a.lines,
                          { scale: 0.5, yPercent: 100, alpha: 0 },
                          {
                            scale: 1,
                            yPercent: 0,
                            alpha: 1,
                            stagger: 0.1,
                            duration: 1,
                            ease: "elastic(1, .5)",
                            scrollTrigger: {
                              trigger: e,
                              start: "top 75%",
                              once: !0,
                            },
                          }
                        )
                      );
                    }),
                  (e = Object(n.b)(".js-s-up", this.$el)).length &&
                    e.forEach(function (e) {
                      t.a.push(
                        l.a.fromTo(
                          e,
                          { y: "5rem", alpha: 0 },
                          {
                            y: 0,
                            alpha: 1,
                            duration: 1,
                            ease: "elastic(1, .5)",
                            scrollTrigger: {
                              trigger: e,
                              start: "top 75%",
                              once: !0,
                            },
                          }
                        )
                      );
                    });
              },
              st_kill: function () {
                this.a.forEach(function (t) {
                  var e;
                  return null == t || null === (e = t.kill) || void 0 === e
                    ? void 0
                    : e.call(t);
                }),
                  (this.a = null);
              },
            },
          });
      e.a = {
        mixins: [u],
        mounted: function () {
          var t = this;
          return Object(r.a)(
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), t.$nextTick();
                    case 2:
                      t.st_init();
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )();
        },
        transition: {
          name: "page",
          appear: !1,
          mode: "out-in",
          enter: function (t, e) {
            var a,
              r = this;
            window.scrollTo(0, 0), e(), this.$nuxt.$emit("enter");
            var o = Object(n.a)(".js-t-title", t),
              u = Object(n.a)(".js-t-subtitle", t),
              d = Object(n.b)(".js-t-pop-up", t),
              p = Object(n.b)(".js-t-up", t);
            if (
              (null === (a = s) || void 0 === a || a.kill(),
              (s = l.a
                .timeline({
                  paused: !0,
                  defaults: { duration: 1.5, ease: "expo" },
                  onComplete: function () {
                    i = !1;
                  },
                })
                .add(function () {
                  return r.$nuxt.$emit("enter-content");
                }, 2)),
              o)
            ) {
              var f = new c.a(o, { type: "words, chars", charsClass: "c-fix" });
              s.fromTo(
                f.chars,
                { scale: 0.25, xPercent: -100, alpha: 0 },
                {
                  scale: 1,
                  xPercent: 0,
                  alpha: 1,
                  stagger: -0.05,
                  duration: 1,
                  ease: "elastic(1, .5)",
                },
                1.75
              );
            }
            if (u) {
              var m = new c.a(u, { type: "lines", linesClass: "c-fix" });
              s.fromTo(
                m.lines,
                { scale: 0.5, yPercent: 100, alpha: 0 },
                {
                  scale: 1,
                  yPercent: 0,
                  alpha: 1,
                  stagger: 0.1,
                  duration: 1,
                  ease: "elastic(1, .5)",
                },
                1.75
              );
            }
            if (
              (p.length > 0 &&
                s.fromTo(
                  p,
                  { scale: 0.5, yPercent: 100, alpha: 0 },
                  {
                    scale: 1,
                    yPercent: 0,
                    alpha: 1,
                    stagger: 0.1,
                    duration: 1,
                    ease: "elastic(1, .5)",
                  },
                  1.75
                ),
              d.length > 0)
            ) {
              var C = this.$r.wh,
                h = d.filter(function (t) {
                  return Object(n.c)(t).top < C;
                });
              s.fromTo(
                h,
                { y: "10rem", alpha: 0 },
                {
                  y: 0,
                  alpha: 1,
                  stagger: 0.1,
                  duration: 1,
                  ease: "elastic(1, .5)",
                },
                1.875
              );
            }
            s.play();
          },
          leave: function (t, e) {
            if (!i) {
              i = !0;
              var a = this.$store.state.app;
              a.flags.menu &&
                (this.$store.commit("app/SET_MENU", !1),
                this.$nuxt.$emit("menu-close")),
                a.modal.active &&
                  this.$store.commit("app/SET_MODAL", { active: !1 }),
                this.$nuxt.$emit("leave", e);
            }
          },
        },
        destroyed: function () {
          this.st_kill();
        },
      };
    },
    586: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = a(13),
        i = {
          data: function () {
            return {
              items: [
                { title: "Home", to: "/media" },
                { title: "Blog", to: "/blog" },
                { title: "Comics", to: "/comics" },
                { title: "Episodes", to: "/episodes" },
                { title: "Telegram", to: "https://t.me/elonneiro" },
                { title: "X", to: "https://x.com/ElonNeiro" },
                { title: "Collabs", to: "/collaborations" },
              ],
              active: !1,
            };
          },
          computed: {
            hasMouse: function () {
              return this.$store.state.app.features.hasMouse;
            },
          },
          beforeDestroy: function () {
            var t;
            (this.active = !1),
              null === (t = this.tl) || void 0 === t || t.kill();
          },
          methods: {
            enter: function () {
              this.active ||
                ((this.active = !0),
                !this.tl &&
                  (this.tl = s.a.timeline({
                    paused: !0,
                    defaults: { duration: 1.25, ease: "elastic.out(1,0.5)" },
                  })),
                this.tl
                  .clear()
                  .fromTo(
                    this.$refs.dd,
                    { autoAlpha: 0 },
                    { autoAlpha: 1, duration: 0.35 }
                  )
                  .fromTo(this.$refs.dd, { rotationX: 75 }, { rotationX: 0 }, 0)
                  .restart());
            },
            leave: function () {
              var t;
              this.active &&
                ((this.active = !1),
                null === (t = this.tl) ||
                  void 0 === t ||
                  t
                    .clear()
                    .to(this.$refs.dd, {
                      autoAlpha: 0,
                      duration: 0.35,
                      ease: "power1",
                    })
                    .restart());
            },
            toggle: function () {
              this.active ? this.leave() : this.enter();
            },
          },
        },
        r = (a(580), a(16)),
        l = Object(r.a)(
          i,
          function () {
            var t = this,
              e = t._self._c;
            return null;
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = l.exports;
    },
    598: function (t, e, a) {
      var s = a(605);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.i, s, ""]]),
        s.locals && (t.exports = s.locals);
      (0, a(76).default)("4092b431", s, !0, { sourceMap: !1 });
    },
    601: function (t, e, a) {
      "use strict";
      a.r(e);
      a(43), a(23);
      var s = {
          props: { item: { type: Object, default: function () {} } },
          computed: {
            cats: function () {
              var t;
              return null === (t = this.item.categories) || void 0 === t
                ? void 0
                : t
                    .map(function (t) {
                      return t.title;
                    })
                    .join(", ");
            },
          },
        },
        i = a(16),
        r = Object(i.a)(
          s,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "article",
              { staticClass: "relative flex" },
              [
                e(
                  "nuxt-link",
                  {
                    staticClass: "block flex flex-col w-full h-trig",
                    attrs: { to: "/blog/".concat(t.item.slug) },
                  },
                  [
                    e(
                      "div",
                      {
                        staticClass:
                          "relative media-fill frame overflow-hidden w-full h-scale",
                      },
                      [
                        e("div", { staticClass: "pt-[70%]" }),
                        t._v(" "),
                        t.item.featuredVideoUrl
                          ? e("Video", {
                              attrs: { url: t.item.featuredVideoUrl },
                            })
                          : t.item.featuredImage
                          ? e("LazySimple", {
                              staticClass: "absolute inset-0",
                              attrs: { image: t.item.featuredImage.thumbnail },
                            })
                          : t._e(),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass:
                          "frame flex-1 flex flex-col items-start overflow-hidden -mt-5 bg-gradient-flipped pt-20 pb-30 s:pb-40 px-20 s:px-40",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass:
                              "flex gap-x-15 s:gap-x-30 text-red h5 font-disp-2",
                          },
                          [
                            t.item.date
                              ? e("span", {
                                  domProps: {
                                    textContent: t._s(t.$sanitize(t.item.date)),
                                  },
                                })
                              : t._e(),
                            t._v(" "),
                            e("span", [t._v(t._s(t.cats))]),
                          ]
                        ),
                        t._v(" "),
                        e("h2", {
                          staticClass: "h4 font-disp-2 mt-25",
                          domProps: {
                            textContent: t._s(t.$sanitize(t.item.title)),
                          },
                        }),
                        t._v(" "),
                        e("p", {
                          staticClass: "mt-18",
                          domProps: {
                            textContent: t._s(t.$sanitize(t.item.excerpt)),
                          },
                        }),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass:
                              "uline-double text-yellow h5 font-disp-2 mt-30",
                          },
                          [t._v("Learn More")]
                        ),
                      ]
                    ),
                  ]
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
      e.default = r.exports;
      installComponents(r, {
        Video: a(572).default,
        LazySimple: a(275).default,
      });
    },
    604: function (t, e, a) {
      "use strict";
      a(598);
    },
    605: function (t, e, a) {
      var s = a(75)(function (t) {
        return t[1];
      });
      s.push([t.i, ".quote-mark__rect{stroke-width:.5rem}", ""]),
        (s.locals = {}),
        (t.exports = s);
    },
    612: function (t, e, a) {
      "use strict";
      a.r(e);
      a(14), a(29);
      var s = {
          props: { item: { type: Object, default: function () {} } },
          computed: {
            text: function () {
              return this.item.text.replace(
                /\s((class|id|(data-\w+))|style)\s*=\s*['"][^'"]*['"]/gi,
                ""
              );
            },
          },
        },
        i = a(16),
        r = Object(i.a)(
          s,
          function () {
            var t = this;
            return (0, t._self._c)("div", {
              staticClass: "txt",
              domProps: { innerHTML: t._s(t.text) },
            });
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = r.exports;
    },
    613: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = { props: { item: { type: Object, default: function () {} } } },
        i = (a(604), a(16)),
        r = Object(i.a)(
          s,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "relative frame bg-gradient" }, [
              e(
                "div",
                {
                  staticClass:
                    "relative z-2 -ml-5 -mt-6 inline-flex before:absolute before:top-0 before:left-0 before:bottom-10 before:w-65 before:bg-sand",
                },
                [
                  e(
                    "svg",
                    {
                      staticClass:
                        "block quote__mark text-black w-170 h-110 relative z-2",
                      attrs: {
                        viewBox: "0 0 170 110",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                    },
                    [
                      e("rect", {
                        staticClass:
                          "quote-mark__rect fill-current stroke-current",
                        attrs: {
                          x: "1.40204",
                          y: "2.24599",
                          width: "87.2766",
                          height: "115.311",
                          rx: "17.5184",
                          transform:
                            "matrix(1 0 -0.439184 0.898397 77.8096 1.20159)",
                        },
                      }),
                      t._v(" "),
                      e(
                        "mask",
                        {
                          attrs: {
                            id: "path-2-inside-1_1135_11935",
                            fill: "white",
                          },
                        },
                        [
                          e("path", {
                            attrs: {
                              d: "M37.4978 18.9578C42.3534 9.02531 55.2521 0.973389 66.3079 0.973389H130.815C141.871 0.973389 146.897 9.0253 142.042 18.9578L106.787 91.0761C101.931 101.009 89.0322 109.061 77.9764 109.061H13.4692C2.41341 109.061 -2.61291 101.009 2.24263 91.0761L37.4978 18.9578Z",
                            },
                          }),
                        ]
                      ),
                      t._v(" "),
                      e("path", {
                        attrs: {
                          d: "M37.4978 18.9578C42.3534 9.02531 55.2521 0.973389 66.3079 0.973389H130.815C141.871 0.973389 146.897 9.0253 142.042 18.9578L106.787 91.0761C101.931 101.009 89.0322 109.061 77.9764 109.061H13.4692C2.41341 109.061 -2.61291 101.009 2.24263 91.0761L37.4978 18.9578Z",
                          fill: "#EF3F28",
                        },
                      }),
                      t._v(" "),
                      e("path", {
                        attrs: {
                          d: "M37.4978 18.9578L41.9898 21.1538L37.4978 18.9578ZM2.24263 91.0761L-2.24935 88.8802L2.24263 91.0761ZM41.9898 21.1538C43.9169 17.2117 47.6132 13.3615 52.2254 10.4824C56.8377 7.60317 61.9201 5.97339 66.3079 5.97339V-4.02661C59.6399 -4.02661 52.745 -1.63044 46.9301 1.99948C41.1152 5.62939 35.9343 10.7714 33.0058 16.7619L41.9898 21.1538ZM66.3079 5.97339H130.815V-4.02661H66.3079V5.97339ZM130.815 5.97339C135.183 5.97339 137.299 7.51952 138.154 8.88858C139.008 10.2577 139.468 12.8381 137.55 16.7619L146.534 21.1537C149.471 15.145 149.845 8.73325 146.637 3.59323C143.428 -1.54679 137.503 -4.02661 130.815 -4.02661V5.97339ZM137.55 16.7619L102.295 88.8802L111.278 93.272L146.534 21.1537L137.55 16.7619ZM102.295 88.8802C100.367 92.8222 96.6712 96.6724 92.0589 99.5516C87.4466 102.431 82.3643 104.061 77.9764 104.061V114.061C84.6444 114.061 91.5393 111.664 97.3542 108.034C103.169 104.405 108.35 99.2625 111.278 93.272L102.295 88.8802ZM77.9764 104.061H13.4692V114.061H77.9764V104.061ZM13.4692 104.061C9.10167 104.061 6.98524 102.514 6.13061 101.145C5.27599 99.7763 4.81645 97.1958 6.73462 93.272L-2.24935 88.8802C-5.18673 94.8889 -5.56087 101.301 -2.35227 106.441C0.85634 111.581 6.78098 114.061 13.4692 114.061V104.061ZM6.73462 93.272L41.9898 21.1538L33.0058 16.7619L-2.24935 88.8802L6.73462 93.272Z",
                          fill: "#0F0F1C",
                          mask: "url(#path-2-inside-1_1135_11935)",
                        },
                      }),
                      t._v(" "),
                      e("path", {
                        attrs: {
                          d: "M45.0612 58.7605L49.9612 48.0605C50.4279 47.1272 51.3946 46.1939 52.8612 45.2605C54.3279 44.3272 55.9946 43.5272 57.8612 42.8605C59.7279 42.1272 61.6279 41.5605 63.5612 41.1605C65.4946 40.6939 67.1946 40.4605 68.6612 40.4605C69.0612 40.4605 69.6279 40.4939 70.3612 40.5605C71.0946 40.6272 71.8279 40.7272 72.5612 40.8605C73.2946 40.9939 73.9279 41.1939 74.4612 41.4605C74.9946 41.6605 75.2612 41.9272 75.2612 42.2605L67.7612 58.7605C67.0279 60.2939 66.3279 61.5605 65.6612 62.5605C65.0612 63.4939 64.3946 64.2605 63.6612 64.8605C62.9946 65.3939 62.2279 65.7605 61.3612 65.9605C60.4946 66.1605 59.4612 66.2605 58.2612 66.2605H47.5612C46.0946 66.2605 45.0279 66.1272 44.3612 65.8605C43.6946 65.5272 43.3612 64.8939 43.3612 63.9605C43.3612 63.2939 43.9279 61.5605 45.0612 58.7605ZM73.8612 58.7605L78.7612 48.0605C79.2279 47.1272 80.1946 46.1939 81.6612 45.2605C83.1279 44.3272 84.7946 43.5272 86.6612 42.8605C88.5279 42.1272 90.4279 41.5605 92.3612 41.1605C94.2946 40.6939 95.9946 40.4605 97.4612 40.4605C97.8612 40.4605 98.4279 40.4939 99.1612 40.5605C99.8946 40.6272 100.628 40.7272 101.361 40.8605C102.095 40.9939 102.728 41.1939 103.261 41.4605C103.795 41.6605 104.061 41.9272 104.061 42.2605L96.5612 58.7605C95.8279 60.2939 95.1279 61.5605 94.4612 62.5605C93.8612 63.4939 93.1946 64.2605 92.4612 64.8605C91.7946 65.3939 91.0279 65.7605 90.1612 65.9605C89.2946 66.1605 88.2612 66.2605 87.0612 66.2605H76.3612C74.8946 66.2605 73.8279 66.1272 73.1612 65.8605C72.4946 65.5272 72.1612 64.8939 72.1612 63.9605C72.1612 63.2939 72.7279 61.5605 73.8612 58.7605Z",
                          fill: "#0F0F1C",
                        },
                      }),
                    ]
                  ),
                ]
              ),
              t._v(" "),
              e("blockquote", {
                staticClass: "h3 text-red px-50 pb-80 mt-10 js-s-lines",
                domProps: { textContent: t._s(t.$sanitize(t.item.quote)) },
              }),
              t._v(" "),
              e(
                "div",
                {
                  staticClass:
                    "absolute -bottom-7 -right-12 z-2 inline-flex before:absolute before:top-12 before:right-0 before:bottom-0 before:w-65 before:bg-sand",
                },
                [
                  e(
                    "svg",
                    {
                      staticClass:
                        "block quote__mark text-black w-170 h-110 relative z-2",
                      attrs: {
                        viewBox: "0 0 170 110",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                    },
                    [
                      e("rect", {
                        staticClass:
                          "quote-mark__rect fill-current stroke-current",
                        attrs: {
                          x: "1.40204",
                          y: "2.24599",
                          width: "87.2766",
                          height: "115.311",
                          rx: "17.5184",
                          transform:
                            "matrix(1 0 -0.439184 0.898397 77.8096 1.20159)",
                        },
                      }),
                      t._v(" "),
                      e(
                        "mask",
                        {
                          attrs: {
                            id: "path-2-inside-1_1135_11935",
                            fill: "white",
                          },
                        },
                        [
                          e("path", {
                            attrs: {
                              d: "M37.4978 18.9578C42.3534 9.02531 55.2521 0.973389 66.3079 0.973389H130.815C141.871 0.973389 146.897 9.0253 142.042 18.9578L106.787 91.0761C101.931 101.009 89.0322 109.061 77.9764 109.061H13.4692C2.41341 109.061 -2.61291 101.009 2.24263 91.0761L37.4978 18.9578Z",
                            },
                          }),
                        ]
                      ),
                      t._v(" "),
                      e("path", {
                        attrs: {
                          d: "M37.4978 18.9578C42.3534 9.02531 55.2521 0.973389 66.3079 0.973389H130.815C141.871 0.973389 146.897 9.0253 142.042 18.9578L106.787 91.0761C101.931 101.009 89.0322 109.061 77.9764 109.061H13.4692C2.41341 109.061 -2.61291 101.009 2.24263 91.0761L37.4978 18.9578Z",
                          fill: "#EF3F28",
                        },
                      }),
                      t._v(" "),
                      e("path", {
                        attrs: {
                          d: "M37.4978 18.9578L41.9898 21.1538L37.4978 18.9578ZM2.24263 91.0761L-2.24935 88.8802L2.24263 91.0761ZM41.9898 21.1538C43.9169 17.2117 47.6132 13.3615 52.2254 10.4824C56.8377 7.60317 61.9201 5.97339 66.3079 5.97339V-4.02661C59.6399 -4.02661 52.745 -1.63044 46.9301 1.99948C41.1152 5.62939 35.9343 10.7714 33.0058 16.7619L41.9898 21.1538ZM66.3079 5.97339H130.815V-4.02661H66.3079V5.97339ZM130.815 5.97339C135.183 5.97339 137.299 7.51952 138.154 8.88858C139.008 10.2577 139.468 12.8381 137.55 16.7619L146.534 21.1537C149.471 15.145 149.845 8.73325 146.637 3.59323C143.428 -1.54679 137.503 -4.02661 130.815 -4.02661V5.97339ZM137.55 16.7619L102.295 88.8802L111.278 93.272L146.534 21.1537L137.55 16.7619ZM102.295 88.8802C100.367 92.8222 96.6712 96.6724 92.0589 99.5516C87.4466 102.431 82.3643 104.061 77.9764 104.061V114.061C84.6444 114.061 91.5393 111.664 97.3542 108.034C103.169 104.405 108.35 99.2625 111.278 93.272L102.295 88.8802ZM77.9764 104.061H13.4692V114.061H77.9764V104.061ZM13.4692 104.061C9.10167 104.061 6.98524 102.514 6.13061 101.145C5.27599 99.7763 4.81645 97.1958 6.73462 93.272L-2.24935 88.8802C-5.18673 94.8889 -5.56087 101.301 -2.35227 106.441C0.85634 111.581 6.78098 114.061 13.4692 114.061V104.061ZM6.73462 93.272L41.9898 21.1538L33.0058 16.7619L-2.24935 88.8802L6.73462 93.272Z",
                          fill: "#0F0F1C",
                          mask: "url(#path-2-inside-1_1135_11935)",
                        },
                      }),
                      t._v(" "),
                      e("path", {
                        attrs: {
                          d: "M45.0612 58.7605L49.9612 48.0605C50.4279 47.1272 51.3946 46.1939 52.8612 45.2605C54.3279 44.3272 55.9946 43.5272 57.8612 42.8605C59.7279 42.1272 61.6279 41.5605 63.5612 41.1605C65.4946 40.6939 67.1946 40.4605 68.6612 40.4605C69.0612 40.4605 69.6279 40.4939 70.3612 40.5605C71.0946 40.6272 71.8279 40.7272 72.5612 40.8605C73.2946 40.9939 73.9279 41.1939 74.4612 41.4605C74.9946 41.6605 75.2612 41.9272 75.2612 42.2605L67.7612 58.7605C67.0279 60.2939 66.3279 61.5605 65.6612 62.5605C65.0612 63.4939 64.3946 64.2605 63.6612 64.8605C62.9946 65.3939 62.2279 65.7605 61.3612 65.9605C60.4946 66.1605 59.4612 66.2605 58.2612 66.2605H47.5612C46.0946 66.2605 45.0279 66.1272 44.3612 65.8605C43.6946 65.5272 43.3612 64.8939 43.3612 63.9605C43.3612 63.2939 43.9279 61.5605 45.0612 58.7605ZM73.8612 58.7605L78.7612 48.0605C79.2279 47.1272 80.1946 46.1939 81.6612 45.2605C83.1279 44.3272 84.7946 43.5272 86.6612 42.8605C88.5279 42.1272 90.4279 41.5605 92.3612 41.1605C94.2946 40.6939 95.9946 40.4605 97.4612 40.4605C97.8612 40.4605 98.4279 40.4939 99.1612 40.5605C99.8946 40.6272 100.628 40.7272 101.361 40.8605C102.095 40.9939 102.728 41.1939 103.261 41.4605C103.795 41.6605 104.061 41.9272 104.061 42.2605L96.5612 58.7605C95.8279 60.2939 95.1279 61.5605 94.4612 62.5605C93.8612 63.4939 93.1946 64.2605 92.4612 64.8605C91.7946 65.3939 91.0279 65.7605 90.1612 65.9605C89.2946 66.1605 88.2612 66.2605 87.0612 66.2605H76.3612C74.8946 66.2605 73.8279 66.1272 73.1612 65.8605C72.4946 65.5272 72.1612 64.8939 72.1612 63.9605C72.1612 63.2939 72.7279 61.5605 73.8612 58.7605Z",
                          fill: "#0F0F1C",
                        },
                      }),
                    ]
                  ),
                ]
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = r.exports;
    },
    614: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = {
          props: { item: { type: Object, default: function () {} } },
          computed: {
            url: function () {
              return "youtube" === this.item.embed.provider
                ? "https://www.youtube.com/embed/".concat(
                    this.item.embed.providerUid,
                    "?rel=0"
                  )
                : this.item.embed.url;
            },
            aspect: function () {
              return (this.item.embed.height / this.item.embed.width) * 100;
            },
          },
        },
        i = a(16),
        r = Object(i.a)(
          s,
          function () {
            var t = this,
              e = t._self._c;
            return t.item.image || t.item.embed
              ? e(
                  "div",
                  { staticClass: "relative" },
                  [
                    t.item.title
                      ? e("h3", {
                          staticClass: "h4 font-disp-2 mb-15",
                          domProps: {
                            innerHTML: t._s(t.$sanitize(t.item.title)),
                          },
                        })
                      : t._e(),
                    t._v(" "),
                    t.item.embed
                      ? e("div", { staticClass: "relative media-iframe" }, [
                          e("div", {
                            staticClass: "aspect",
                            style: "--aspect: ".concat(t.aspect, "%;"),
                          }),
                          t._v(" "),
                          e("iframe", {
                            staticClass: "block w-full",
                            attrs: {
                              width: t.item.embed.width,
                              height: t.item.embed.height,
                              loading: "lazy",
                              src: t.url,
                              title: t.item.embed.title,
                              frameborder: "0",
                              allowfullscreen: "",
                            },
                          }),
                        ])
                      : t.item.image
                      ? e("LazyPicture", { attrs: { image: t.item.image } })
                      : t._e(),
                  ],
                  1
                )
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = r.exports;
      installComponents(r, { LazyPicture: a(573).default });
    },
    634: function (t, e, a) {
      "use strict";
      a.r(e);
      a(51);
      var s = {
          props: { title: { type: String, required: !0 } },
          data: function () {
            return { copied: !1 };
          },
          computed: {
            x: function () {
              return "https://twitter.com/intent/tweet?text="
                .concat(this.title, "&url=")
                .concat(window.location.href);
            },
            fb: function () {
              return "https://www.facebook.com/sharer/sharer.php?u=".concat(
                window.location.href
              );
            },
          },
          methods: {
            copy: function () {
              navigator.clipboard.writeText(window.location.href),
                (this.copied = !0);
            },
          },
        },
        i = a(16),
        r = Object(i.a)(
          s,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass:
                  "frame relative bg-gradient-flipped p-20 s:min-h-[20rem]",
              },
              [
                e(
                  "div",
                  { staticClass: "flex flex-col items-center s:items-start" },
                  [
                    e("span", { staticClass: "h3 text-red" }, [t._v("Share")]),
                    t._v(" "),
                    e(
                      "div",
                      { staticClass: "flex gap-x-18 mt-15" },
                      [
                        e(
                          "client-only",
                          [
                            e(
                              "BaseButton",
                              {
                                attrs: {
                                  label: "Share on X",
                                  to: t.x,
                                  circle: !0,
                                },
                              },
                              [
                                e(
                                  "svg",
                                  {
                                    staticClass:
                                      "block relative w-25 s:w-32 h-auto mb-3 z-3 js-label",
                                    attrs: {
                                      viewBox: "0 0 32 29",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                    },
                                  },
                                  [
                                    e("path", {
                                      attrs: {
                                        d: "M0.807042 0.336914L12.6082 16.1159L0.732666 28.9451H3.40559L13.8029 17.7127L22.2033 28.9451H31.2987L18.8333 12.2786L29.8871 0.336914H27.2142L17.6391 10.6814L9.90248 0.336914H0.807042ZM4.73769 2.30557H8.91609L27.3675 26.9764H23.1891L4.73769 2.30557Z",
                                        fill: "#EBD7A5",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                            t._v(" "),
                            e(
                              "BaseButton",
                              {
                                attrs: {
                                  label: "Share on Facebook",
                                  to: t.fb,
                                  circle: !0,
                                },
                              },
                              [
                                e(
                                  "svg",
                                  {
                                    staticClass:
                                      "w-25 s:w-32 h-auto mb-3 z-3 js-label",
                                    attrs: {
                                      viewBox: "0 0 32 32",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                    },
                                  },
                                  [
                                    e("path", {
                                      attrs: {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M23.2144 6.56901C22.8374 6.53622 22.444 6.51983 22.067 6.48705C22.0342 6.29035 21.8703 6.35592 21.7555 6.35592C20.7884 6.30674 19.8213 6.37231 18.8542 6.43787C18.4281 6.47066 17.9527 6.48705 17.5757 6.7821C17.3134 6.7821 17.0839 6.84766 16.9364 7.07715C16.9364 7.07715 16.8217 7.07715 16.7889 7.14271C16.3463 7.42137 15.9037 7.70003 15.5431 8.09343C14.8055 8.88022 14.281 9.74898 14.0679 10.8144C14.0679 10.8636 14.0187 10.8964 14.0023 10.9292C13.8876 11.2242 13.8712 11.5521 13.8712 11.8635C13.8712 13.1257 13.8712 14.3878 13.8712 15.6336C13.8712 15.9286 13.7892 15.9942 13.5106 15.9942C12.4615 15.9942 11.4124 15.9942 10.3798 15.9942C10.265 15.9942 10.1175 15.9286 10.0355 16.0925C9.83884 16.0925 9.87162 16.2237 9.87162 16.3384C9.87162 17.6825 9.87162 19.043 9.87162 20.3871C9.87162 20.5019 9.83884 20.6494 10.0355 20.6166C10.1175 20.7805 10.265 20.715 10.3798 20.715C11.4452 20.715 12.4943 20.715 13.5597 20.715C13.8056 20.715 13.8876 20.7805 13.8876 21.0264C13.8876 24.4195 13.8876 27.8289 13.8876 31.222C13.8876 31.4843 13.8056 31.5662 13.5433 31.5662C12.1009 31.5662 10.6748 31.5826 9.23235 31.5662C7.39649 31.517 5.56063 31.7629 3.74116 31.3695C3.11828 31.3531 2.6921 30.9597 2.24952 30.5991C1.92169 30.3369 1.67582 29.9926 1.42994 29.6484C1.20046 29.3534 1.18407 28.9763 1.03654 28.6485C1.03654 28.5502 1.06933 28.419 1.03654 28.3371C0.921802 28.1076 1.10211 27.8125 0.839844 27.6486C0.839844 27.4519 0.839844 27.2716 0.839844 27.0749C0.938193 26.9602 0.90541 26.829 0.90541 26.6979C0.90541 19.4036 0.90541 12.1094 0.90541 4.8315C0.90541 4.70036 0.954585 4.56923 0.839844 4.45449C0.839844 4.4381 0.839844 4.40531 0.839844 4.38892C0.839844 4.37253 0.839844 4.33975 0.839844 4.32336H0.872627C0.872627 4.30696 0.872627 4.29057 0.872627 4.27418C1.00376 3.81522 1.00376 3.33986 1.21685 2.89728C1.59386 1.91379 2.24952 1.19256 3.23302 0.782766C3.72477 0.569675 4.23291 0.405759 4.77383 0.422151C12.5598 0.422151 20.3459 0.422151 28.1319 0.422151C29.6235 0.553284 30.7709 1.19256 31.4922 2.55306C31.5086 2.73337 31.5741 2.88089 31.7053 2.99563C31.7053 2.99563 31.6889 3.15955 31.7872 3.20873C31.7872 3.20873 31.7708 3.37264 31.8692 3.42182C31.8528 3.73326 31.9184 4.0447 32.0003 4.35614C32.0003 4.56923 32.0003 4.78232 32.0003 4.99541C32.0003 5.15933 32.0003 5.32324 32.0003 5.48716C32.0003 12.6339 32.0003 19.7643 32.0003 26.911C32.0003 27.4519 31.8364 27.9601 31.8528 28.501C31.7872 29.0747 31.525 29.5664 31.1643 29.9762C30.6234 30.5991 30.0333 31.14 29.1809 31.3695C28.7875 31.4843 28.3942 31.5662 27.9844 31.5662C25.1158 31.5662 22.2309 31.5662 19.3624 31.5662C19.1165 31.5662 18.9854 31.5334 18.9854 31.222C18.9854 27.8289 18.9854 24.4195 18.9854 21.0264C18.9854 20.7805 19.0673 20.6986 19.3132 20.6986C20.2475 20.6986 21.1982 20.6986 22.1326 20.6986C22.2473 20.6986 22.3948 20.7641 22.4932 20.6166C22.739 20.4855 22.7882 20.2888 22.6407 20.0429C22.6407 19.9774 22.6571 19.9118 22.6735 19.8462C22.8702 19.8134 22.821 19.6495 22.8374 19.5348C23.0341 18.4529 23.1816 17.3547 23.4275 16.2892C23.4603 16.1745 23.4439 16.0761 23.28 16.0761C23.198 15.9286 23.0505 15.9942 22.9194 15.9942C21.7228 15.9942 20.5262 15.9942 19.3296 15.9942C19.0673 15.9942 18.9854 15.9122 18.9854 15.65C19.0018 15.0435 19.0018 14.437 18.9854 13.8305C18.969 13.0765 18.9526 12.3225 19.4115 11.6504C19.4115 11.6504 19.4115 11.634 19.4115 11.6176C19.4115 11.6176 19.4607 11.5684 19.4935 11.5521C19.5263 11.5193 19.5427 11.5029 19.5755 11.4701C19.6082 11.4373 19.6246 11.4209 19.6574 11.3881C19.7558 11.3881 19.8049 11.3554 19.8049 11.2406C20.0016 11.257 20.1164 11.1423 20.2311 11.0275C20.2311 11.0275 20.2803 10.9947 20.3131 10.9784C20.5262 10.9292 20.7393 10.88 20.9524 10.8144C21.6736 10.8144 22.3948 10.8144 23.1161 10.8144C23.2964 10.8144 23.2964 10.8144 23.3783 10.6669C23.3783 9.30641 23.3783 7.9459 23.3783 6.56901C23.3291 6.56901 23.2964 6.53622 23.2472 6.51983",
                                        fill: "#F8D9AD",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        t._v(" "),
                        e(
                          "BaseButton",
                          {
                            attrs: { label: "Copy url", circle: !0 },
                            nativeOn: {
                              click: function (e) {
                                return t.copy.apply(null, arguments);
                              },
                            },
                          },
                          [
                            e(
                              "svg",
                              {
                                staticClass:
                                  "w-30 s:w-42 h-auto mb-3 z-3 js-label",
                                attrs: {
                                  viewBox: "0 0 42 42",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                },
                              },
                              [
                                e("rect", {
                                  attrs: {
                                    x: "3.69073",
                                    y: "27.3224",
                                    width: "21",
                                    height: "11.9385",
                                    rx: "5.96924",
                                    transform: "rotate(-45 3.69073 27.3224)",
                                    stroke: "#F8D9AD",
                                    "stroke-width": "4",
                                  },
                                }),
                                t._v(" "),
                                e("rect", {
                                  attrs: {
                                    x: "15.1497",
                                    y: "21.1039",
                                    width: "21",
                                    height: "11.9385",
                                    rx: "5.96924",
                                    transform: "rotate(-45 15.1497 21.1039)",
                                    stroke: "#F8D9AD",
                                    "stroke-width": "4",
                                  },
                                }),
                              ]
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                    t._v(" "),
                    t.copied
                      ? e("p", { staticClass: "mt-15" }, [t._v("Copied url!")])
                      : t._e(),
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
      e.default = r.exports;
      installComponents(r, { BaseButton: a(192).default });
    },
    635: function (t, e, a) {
      "use strict";
      a.r(e);
      a(26), a(14), a(29);
      var s = a(612),
        i = a(613),
        r = a(614),
        l = {
          components: {
            TextBlock: s.default,
            QuoteBlock: i.default,
            MediaBlock: r.default,
          },
          props: { data: { type: Object, required: !0 } },
          computed: {
            componentType: function () {
              return this.toPascal(this.data.type || this.data._modelApiKey);
            },
            componentData: function () {
              return this.data;
            },
          },
          methods: {
            toPascal: function (t) {
              if (t) {
                var e = t.replace(/_([a-z])/g, function (t, e) {
                  return e.toUpperCase();
                });
                return e.charAt(0).toUpperCase() + e.slice(1);
              }
            },
          },
        },
        n = a(16),
        o = Object(n.a)(
          l,
          function () {
            var t = this;
            return (0, t._self._c)(t.componentType, {
              tag: "component",
              attrs: { item: t.componentData },
            });
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = o.exports;
    },
    638: function (t, e, a) {
      "use strict";
      var s = a(1),
        i = a(56).findIndex,
        r = a(152),
        l = "findIndex",
        n = !0;
      l in [] &&
        Array(1)[l](function () {
          n = !1;
        }),
        s(
          { target: "Array", proto: !0, forced: n },
          {
            findIndex: function (t) {
              return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
        r(l);
    },
    653: function (t, e, a) {
      "use strict";
      a.r(e);
      a(85);
      var s = a(7),
        i = (a(638), a(43), a(23), a(38), a(13)),
        r = {
          mixins: [a(585).a],
          asyncData: function (t) {
            return Object(s.a)(
              regeneratorRuntime.mark(function e() {
                var a, s, i, r, l;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = t.query),
                            (s = t.params),
                            t.redirect,
                            (i = t.$dato),
                            t.store,
                            (e.prev = 1),
                            (e.next = 4),
                            i.getPage({
                              slug: "blog-detail",
                              variables: { slug: s.slug },
                              preview: a && a.preview,
                            })
                          );
                        case 4:
                          return (
                            (r = e.sent),
                            (l = r.page),
                            e.abrupt("return", { page: l })
                          );
                        case 10:
                          return (
                            (e.prev = 10),
                            (e.t0 = e.catch(1)),
                            e.abrupt("return", e.t0)
                          );
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 10]]
                );
              })
            )();
          },
          computed: {
            small: function () {
              return this.$store.state.app.bounds.small;
            },
            blog: function () {
              return this.$store.state.app.blog;
            },
            related: function () {
              var t = this,
                e = this.blog.findIndex(function (e) {
                  return e.slug === t.page.slug;
                });
              return [
                this.blog[i.a.utils.wrap(0, this.blog.length, e + 1)],
                this.blog[i.a.utils.wrap(0, this.blog.length, e + 2)],
              ];
            },
            cats: function () {
              var t;
              return null === (t = this.page.categories) || void 0 === t
                ? void 0
                : t
                    .map(function (t) {
                      return t.title;
                    })
                    .join(", ");
            },
            media: function () {
              return {
                image: this.page.featuredImage,
                videoUrl: this.page.featuredVideoUrl,
              };
            },
          },
        },
        l = a(16),
        n = Object(l.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "article",
              { staticClass: "pt-90 s:pt-140" },
              [
                e("MediaMenu", {
                  staticClass:
                    "fixed top-50 left-1/2 -translate-x-1/2 hidden s:block z-10",
                }),
                t._v(" "),
                e(
                  "Parallax",
                  {
                    staticClass: "absolute top-0 left-0 w-full",
                    attrs: { top: !0 },
                  },
                  [
                    e(
                      "LazySimple",
                      {
                        staticClass: "relative media-fit",
                        attrs: { image: "/space/red-top.jpg" },
                      },
                      [e("div", { staticClass: "pt-[50%]" })]
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass:
                      "site-max relative flex flex-col items-center text-center z-2",
                  },
                  [
                    e(
                      "div",
                      {
                        staticClass:
                          "flex gap-x-30 text-red h5 font-disp-2 js-t-up",
                      },
                      [
                        t.page.date
                          ? e("span", {
                              domProps: {
                                textContent: t._s(t.$sanitize(t.page.date)),
                              },
                            })
                          : t._e(),
                        t._v(" "),
                        e("span", [t._v(t._s(t.cats))]),
                      ]
                    ),
                    t._v(" "),
                    e("h1", {
                      staticClass: "h3 mt-25 s:max-w-[65rem] js-t-subtitle",
                      domProps: {
                        textContent: t._s(t.$sanitize(t.page.title)),
                      },
                    }),
                  ]
                ),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "site-max mt-40 s:mt-55 mb-100 s:mb-125" },
                  [
                    e(
                      "div",
                      {
                        staticClass:
                          "relative w-full mx-auto s:max-w-[117.5rem] s:flex s:items-start",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass:
                              "hidden s:block relative s:sticky top-125 left-0 flex-1 ml-0 -mr-20 rounded-l-[2rem] bg-sand p-45 pr-25",
                          },
                          [
                            e(
                              "client-only",
                              [
                                t.small
                                  ? t._e()
                                  : e("BlogShare", {
                                      attrs: { title: t.page.title },
                                    }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass: "relative",
                            class: t.page.featuredVideoUrl && "media-fill",
                          },
                          [
                            t.page.featuredVideoUrl
                              ? e("div", { staticClass: "pt-[56.25%]" })
                              : t._e(),
                            t._v(" "),
                            e("Media", {
                              staticClass: "frame s:hidden",
                              attrs: {
                                item: t.media,
                                fill: t.page.featuredVideoUrl,
                              },
                            }),
                          ],
                          1
                        ),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass:
                              "relative w-full max-w-[80rem] rounded-[2rem] bg-sand px-20 py-30 s:p-45 text-black",
                          },
                          [
                            e(
                              "div",
                              {
                                staticClass: "relative hidden s:block",
                                class: t.page.featuredVideoUrl && "media-fill",
                              },
                              [
                                t.page.featuredVideoUrl
                                  ? e("div", { staticClass: "pt-[56.25%]" })
                                  : t._e(),
                                t._v(" "),
                                e("Media", {
                                  attrs: {
                                    item: t.media,
                                    fill: t.page.featuredVideoUrl,
                                  },
                                }),
                              ],
                              1
                            ),
                            t._v(" "),
                            e(
                              "div",
                              {
                                staticClass:
                                  "flex flex-col gap-y-30 s:gap-y-60 s:mt-30",
                              },
                              [
                                t._l(t.page.blocks, function (t) {
                                  return e("Block", {
                                    key: "block-".concat(t.id),
                                    attrs: { data: t },
                                  });
                                }),
                                t._v(" "),
                                e(
                                  "client-only",
                                  [
                                    t.small
                                      ? e("BlogShare", {
                                          attrs: { title: t.page.title },
                                        })
                                      : t._e(),
                                  ],
                                  1
                                ),
                              ],
                              2
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "site-max flex flex-col items-center" },
                  [
                    e(
                      "h2",
                      {
                        staticClass:
                          "skewed-text h2 max-s:!text-26 text-center is-to-animate js-s-chars-up",
                      },
                      [t._v("Next Posts")]
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass:
                          "grid grid-cols-1 s:grid-cols-2 gap-x-95 gap-y-20 s:gap-y-90 mt-30 s:mt-70 w-full",
                      },
                      t._l(t.related, function (t, a) {
                        return e("CardBlog", { key: a, attrs: { item: t } });
                      }),
                      1
                    ),
                  ]
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
      e.default = n.exports;
      installComponents(n, {
        MediaMenu: a(586).default,
        LazySimple: a(275).default,
        Parallax: a(411).default,
        BlogShare: a(634).default,
        Media: a(578).default,
        Block: a(635).default,
        CardBlog: a(601).default,
      });
    },
  },
]);
