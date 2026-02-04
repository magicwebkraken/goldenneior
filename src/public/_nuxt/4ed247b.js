(window.webpackJsonp = window.webpackJsonp || []).push([
  [54, 11, 13, 22, 23, 32, 35, 36, 37, 44, 49],
  {
    572: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = {
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
        i = s(16),
        r = Object(i.a)(
          a,
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
      installComponents(r, { Video: s(572).default });
    },
    573: function (t, e, s) {
      "use strict";
      s.r(e);
      s(51), s(124);
      var a = {
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
        i = s(16),
        r = Object(i.a)(
          a,
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
    574: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = s(66),
        i = s(7),
        r = s(27),
        n =
          (s(38),
          s(91),
          s(150),
          s(151),
          s(22),
          s(124),
          s(2),
          s(193),
          s(194),
          s(195),
          s(196),
          s(197),
          s(198),
          s(199),
          s(200),
          s(201),
          s(202),
          s(203),
          s(204),
          s(205),
          s(206),
          s(207),
          s(208),
          s(209),
          s(210),
          s(211),
          s(212),
          s(213),
          s(214),
          s(215),
          s(216),
          s(13)),
        l = s(109),
        o = s(67),
        c = {
          mixins: [l.a],
          props: Object(r.a)(
            {
              delay: { type: Boolean, required: !1, default: !0 },
              text: { type: String, required: !1, default: "" },
              lazy: { type: Boolean, required: !1, default: !1 },
              instant: { type: Boolean, required: !1, default: !1 },
            },
            "delay",
            { type: Number, required: !1, default: 0 }
          ),
          mounted: function () {
            var t = this;
            return Object(i.a)(
              regeneratorRuntime.mark(function e() {
                var s, i, r, l;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.$nextTick();
                      case 2:
                        if (
                          ((t.name = "bubble_bubble"),
                          (i = t.name),
                          (r =
                            null ===
                              (s = t.$rive.files.find(function (t) {
                                return t.name === i;
                              })) || void 0 === s
                              ? void 0
                              : s.file))
                        ) {
                          e.next = 14;
                          break;
                        }
                        return (
                          (e.next = 8), fetch(new Request("/riv/bubbles.riv"))
                        );
                      case 8:
                        return (e.next = 10), e.sent.arrayBuffer();
                      case 10:
                        (l = e.sent),
                          (r = new Uint8Array(l)),
                          (r = Object(a.a)(r)),
                          t.$rive.files.push({ name: i, file: r });
                      case 14:
                        (t.r = new o.Rive({
                          buffer: r,
                          canvas: t.$el,
                          artboard: i,
                          stateMachines: i,
                          autoplay: !1,
                          onLoad: function () {
                            t.resize(),
                              t.r.setTextRunValue("txt_bubble", t.text),
                              t.instant
                                ? t.r.play()
                                : (t.st = n.a
                                    .timeline({
                                      scrollTrigger: {
                                        trigger: t.$el,
                                        start: "top center",
                                        once: !0,
                                      },
                                    })
                                    .add(function () {
                                      return t.r.play();
                                    })
                                    .add(function () {
                                      return t.r.stopRendering();
                                    }, 2));
                          },
                        })),
                          t.init();
                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          methods: {
            restart: function () {
              var t, e;
              null === (t = this.r) ||
                void 0 === t ||
                t.reset({ artboard: this.name, stateMachines: this.name }),
                null === (e = this.r) || void 0 === e || e.play();
            },
          },
        },
        u = s(16),
        p = Object(u.a)(
          c,
          function () {
            return (0, this._self._c)("canvas", {
              staticClass:
                "absolute top-0 left-0 w-full h-full scale-[2] pointer-events-none has-hover:pointer-events-auto",
            });
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = p.exports;
    },
    575: function (t, e, s) {
      var a = s(581);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      (0, s(76).default)("2e83e6d9", a, !0, { sourceMap: !1 });
    },
    576: function (t, e, s) {
      var a = s(583);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      (0, s(76).default)("71b84d90", a, !0, { sourceMap: !1 });
    },
    577: function (t, e, s) {
      "use strict";
      var a = s(1),
        i = s(278),
        r = s(152);
      a({ target: "Array", proto: !0 }, { fill: i }), r("fill");
    },
    578: function (t, e, s) {
      "use strict";
      s.r(e);
      s(577), s(85);
      var a = {
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
        i = s(16),
        r = Object(i.a)(
          a,
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
        Video: s(572).default,
        LazyPicture: s(573).default,
      });
    },
    579: function (t, e, s) {
      "use strict";
      s.r(e);
      s(277);
      var a = s(7),
        i = (s(38), s(14), s(99), s(85), s(13)),
        r = s(125),
        n = s.n(r),
        l = {
          props: {
            item: { type: Object, default: function () {} },
            comics: { type: Boolean, default: !1 },
          },
          computed: {
            small: function () {
              return this.$store.state.app.bounds.small;
            },
          },
          mounted: function () {
            var t = this;
            return Object(a.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.$nextTick();
                      case 2:
                        (t.split = new n.a(t.$refs.title, {
                          type: "lines, words",
                          linesClass: "title-line-wrapped",
                          wordsClass: "relative z-3",
                        })),
                          (t.st = i.a
                            .timeline({
                              scrollTrigger: {
                                trigger: t.$el,
                                start: "bottom bottom",
                                once: !0,
                              },
                            })
                            .from(t.split.lines, {
                              xPercent: -150,
                              duration: 1.5,
                              stagger: 0.1,
                              ease: "elastic.out(1,0.75)",
                            }));
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          destroyed: function () {
            var t;
            null === (t = this.st) || void 0 === t || t.kill();
          },
          methods: {
            toggleModal: function () {
              this.$store.commit("app/SET_MODAL", {
                active: !0,
                component: "ModalQuick",
                item: this.$store.state.app.global.quickSteps,
              });
            },
          },
        },
        o = s(16),
        c = Object(o.a)(
          l,
          function () {
            var t,
              e,
              s,
              a = this,
              i = a._self._c;
            return i(
              "article",
              a._g(
                { staticClass: "relative" },
                a.item.quickStart
                  ? {
                      click: function () {
                        return a.toggleModal();
                      },
                    }
                  : null
              ),
              [
                i(
                  "Link",
                  {
                    staticClass: "block h-trig",
                    attrs: {
                      to:
                        (null === (t = a.item.link) || void 0 === t
                          ? void 0
                          : t.to) || null,
                      static: !(
                        null !== (e = a.item.link) &&
                        void 0 !== e &&
                        e.to
                      ),
                    },
                  },
                  [
                    i(
                      "div",
                      {
                        staticClass: "frame overflow-hidden h-scale relative",
                        class: a.comics
                          ? "--comics bg-green media-contain"
                          : "media-fill h-scale",
                      },
                      [
                        i("div", { staticClass: "pt-[70%] s:pt-[100%]" }),
                        a._v(" "),
                        i("Media", { attrs: { item: a.item, fill: !0 } }),
                      ],
                      1
                    ),
                    a._v(" "),
                    i(
                      "div",
                      {
                        staticClass:
                          "relative frame flex flex-col items-start -mt-5 bg-gradient z-2",
                      },
                      [
                        i(
                          "div",
                          {
                            staticClass:
                              "absolute bottom-[calc(100%-13rem)] left-0 w-full flex flex-col items-start justify-end py-50 px-20 s:p-50 overflow-hidden",
                          },
                          [
                            a.item.tag
                              ? i(
                                  "div",
                                  {
                                    staticClass:
                                      "relative w-150 s:w-250 h-125 s:h-200 z-3",
                                  },
                                  [
                                    i("RiveBubble", {
                                      attrs: { text: a.item.tag },
                                    }),
                                  ],
                                  1
                                )
                              : a._e(),
                            a._v(" "),
                            i("h2", {
                              ref: "title",
                              staticClass:
                                "h2 !text-26 s:!text-55 flex flex-col items-start text-black relative z-2",
                              class: a.item.tag && "-mt-30 s:-mt-60",
                              domProps: {
                                textContent: a._s(a.$sanitize(a.item.title)),
                              },
                            }),
                          ]
                        ),
                        a._v(" "),
                        i(
                          "div",
                          { staticClass: "pt-100 pb-20 s:pb-40 px-20 s:px-40" },
                          [
                            a.item.text
                              ? i("p", {
                                  staticClass: "s:max-w-[55rem]",
                                  domProps: {
                                    textContent: a._s(a.$sanitize(a.item.text)),
                                  },
                                })
                              : a._e(),
                            a._v(" "),
                            i("BaseButton", {
                              staticClass: "mt-30",
                              attrs: {
                                label:
                                  (null === (s = a.item.link) || void 0 === s
                                    ? void 0
                                    : s.label) || "Learn More",
                              },
                            }),
                          ],
                          1
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
      e.default = c.exports;
      installComponents(c, {
        Media: s(578).default,
        RiveBubble: s(574).default,
        BaseButton: s(192).default,
        Link: s(276).default,
      });
    },
    580: function (t, e, s) {
      "use strict";
      s(575);
    },
    581: function (t, e, s) {
      var a = s(75)(function (t) {
        return t[1];
      });
      a.push([
        t.i,
        ".media-menu{perspective:100vw}.media-menu__text{-webkit-background-clip:text;-webkit-text-fill-color:transparent}.media-menu__dd{transform:rotateX(30deg)}.media-menu__link.nuxt-link-exact-active{color:#ee9b01;pointer-events:none}",
        "",
      ]),
        (a.locals = {}),
        (t.exports = a);
    },
    582: function (t, e, s) {
      "use strict";
      s(576);
    },
    583: function (t, e, s) {
      var a = s(75)(function (t) {
        return t[1];
      });
      a.push([
        t.i,
        ".ground__image[data-v-70057ccc]{opacity:0}.ground__image.is-loaded[data-v-70057ccc]{opacity:1;transition:opacity .5s cubic-bezier(.25,.46,.45,.94),transform .75s cubic-bezier(.19,1,.22,1)}",
        "",
      ]),
        (a.locals = {}),
        (t.exports = a);
    },
    585: function (t, e, s) {
      "use strict";
      var a,
        i,
        r = s(7),
        n = (s(33), s(2), s(126), s(38), s(13)),
        l = s(31),
        o = s(125),
        c = s.n(o),
        u =
          (s(17),
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
                  e = Object(l.b)(".js-s-chars", this.$el);
                e.length &&
                  e.forEach(function (e) {
                    var s = new c.a(e, {
                      type: "words, chars",
                      wordsClass: "c-fix-p whitespace-nowrap",
                      charsClass: "c-fix",
                    });
                    t.a.push(
                      n.a.fromTo(
                        s.chars,
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
                  (e = Object(l.b)(".js-s-chars-up", this.$el)).length &&
                    e.forEach(function (e) {
                      var s = new c.a(e, {
                        type: "words, chars",
                        wordsClass: "c-fix-p whitespace-nowrap",
                        charsClass: "c-fix",
                      });
                      t.a.push(
                        n.a.fromTo(
                          s.chars,
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
                  (e = Object(l.b)(".js-s-lines", this.$el)).length &&
                    e.forEach(function (e) {
                      var s = new c.a(e, { type: "lines" });
                      t.a.push(
                        n.a.fromTo(
                          s.lines,
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
                  (e = Object(l.b)(".js-s-up", this.$el)).length &&
                    e.forEach(function (e) {
                      t.a.push(
                        n.a.fromTo(
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
            var s,
              r = this;
            window.scrollTo(0, 0), e(), this.$nuxt.$emit("enter");
            var o = Object(l.a)(".js-t-title", t),
              u = Object(l.a)(".js-t-subtitle", t),
              p = Object(l.b)(".js-t-pop-up", t),
              d = Object(l.b)(".js-t-up", t);
            if (
              (null === (s = a) || void 0 === s || s.kill(),
              (a = n.a
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
              a.fromTo(
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
              a.fromTo(
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
              (d.length > 0 &&
                a.fromTo(
                  d,
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
              p.length > 0)
            ) {
              var v = this.$r.wh,
                h = p.filter(function (t) {
                  return Object(l.c)(t).top < v;
                });
              a.fromTo(
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
            a.play();
          },
          leave: function (t, e) {
            if (!i) {
              i = !0;
              var s = this.$store.state.app;
              s.flags.menu &&
                (this.$store.commit("app/SET_MENU", !1),
                this.$nuxt.$emit("menu-close")),
                s.modal.active &&
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
    586: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = s(13),
        i = {
          data: function () {
            return {
              items: [
                { title: "Home", to: "/media" },
                { title: "Blog", to: "/blog" },
                { title: "Comics", to: "/comics" },
                { title: "Episodes", to: "/episodes" },
                { title: "Telegram", to: "https://t.me/elonneiro" },
                { title: "X", to: "https://x.com/elonneiro" },
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
                  (this.tl = a.a.timeline({
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
        r = (s(580), s(16)),
        n = Object(r.a)(
          i,
          function () {
            var t = this,
              e = t._self._c;
            return null
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = n.exports;
    },
    587: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = {
          data: function () {
            return { loaded: !1 };
          },
        },
        i = (s(582), s(16)),
        r = Object(i.a)(
          a,
          function () {
            var t = this,
              e = t._self._c;
            return e("figure", { staticClass: "ground relative media-fit" }, [
              e("picture", [
                e("source", {
                  attrs: {
                    srcset: "/mars-ground-1-small.png",
                    media: "(max-width: 649px)",
                  },
                }),
                t._v(" "),
                e("img", {
                  staticClass: "ground__image",
                  class: t.loaded && "is-loaded",
                  attrs: { src: "/mars-ground-1.png", alt: "" },
                  on: {
                    load: function (e) {
                      t.loaded = !0;
                    },
                  },
                }),
              ]),
              t._v(" "),
              e("div", { staticClass: "pt-[42.6%] s:pt-[17.8%]" }),
            ]);
          },
          [],
          !1,
          null,
          "70057ccc",
          null
        );
      e.default = r.exports;
    },
    588: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = {
          props: {
            items: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          computed: {
            global: function () {
              return this.$store.state.app.global.misc;
            },
            misc: function () {
              return this.items.length > 0 ? this.items : this.global;
            },
          },
        },
        i = s(16),
        r = Object(i.a)(
          a,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "relative" }, [
              e(
                "div",
                {
                  staticClass:
                    "site-max grid grid-cols-1 s:grid-cols-2 gap-x-95 gap-y-20 s:gap-y-60",
                },
                t._l(t.misc, function (t) {
                  return e("CardMisc", { key: t.id, attrs: { item: t } });
                }),
                1
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
      installComponents(r, { CardMisc: s(579).default });
    },
    590: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = {
          props: {
            title: { type: String, required: !1 },
            subtitle: { type: String, required: !1 },
          },
        },
        i = s(16),
        r = Object(i.a)(
          a,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass:
                  "relative pt-90 pb-50 s:pb-120 s:pt-140 overflow-hidden",
              },
              [
                e(
                  "div",
                  {
                    staticClass:
                      "site-max flex flex-col items-center relative z-3",
                  },
                  [
                    e("h1", {
                      staticClass: "h1 text-center px-20 js-t-title js-i-title",
                      domProps: { textContent: t._s(t.$sanitize(t.title)) },
                    }),
                    t._v(" "),
                    e("h2", {
                      staticClass:
                        "h3 text-center max-w-[120rem] px-20 mt-20 js-t-subtitle js-i-subtitle",
                      domProps: { textContent: t._s(t.$sanitize(t.subtitle)) },
                    }),
                  ]
                ),
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
    },
    597: function (t, e, s) {
      "use strict";
      var a = s(1),
        i = s(280);
      a(
        { target: "String", proto: !0, forced: s(281)("big") },
        {
          big: function () {
            return i(this, "big", "", "");
          },
        }
      );
    },
    606: function (t, e, s) {
      "use strict";
      s.r(e);
      s(597);
      var a = {
          props: {
            item: { type: Object, default: function () {} },
            big: { type: Boolean, default: !1 },
          },
        },
        i = s(16),
        r = Object(i.a)(
          a,
          function () {
            var t,
              e = this,
              s = e._self._c;
            return s("article", { staticClass: "relative flex" }, [
              s(
                "button",
                {
                  staticClass: "flex flex-col text-left w-full h-trig",
                  attrs: { type: "button" },
                },
                [
                  s(
                    "LazySimple",
                    {
                      staticClass:
                        "relative media-fill frame overflow-hidden w-full h-scale",
                      attrs: {
                        image:
                          null === (t = e.item.thumbnail) || void 0 === t
                            ? void 0
                            : t.thumbnail,
                      },
                    },
                    [
                      s("div", {
                        class: e.big ? "pt-[100%] s:pt-[40%]" : "pt-[100%]",
                      }),
                      e._v(" "),
                      s(
                        "div",
                        {
                          staticClass:
                            "absolute inset-0 flex items-center justify-center z-2",
                        },
                        [
                          s(
                            "svg",
                            {
                              staticClass: "h-86 w-auto",
                              attrs: {
                                viewBox: "0 0 188 86",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                              },
                            },
                            [
                              s("rect", {
                                attrs: {
                                  x: "2.91992",
                                  y: "2.59009",
                                  width: "182",
                                  height: "80",
                                  rx: "40",
                                  fill: "url(#paint0_linear_5189_7357)",
                                  stroke: "url(#paint1_linear_5189_7357)",
                                  "stroke-width": "5",
                                },
                              }),
                              e._v(" "),
                              s("path", {
                                attrs: {
                                  d: "M28.5934 53.4665C30.5134 46.5065 32.3134 39.5465 34.7734 32.2565C36.3634 31.7465 39.1834 31.1165 41.7934 31.2065C44.6734 31.2965 49.7134 31.6865 49.7734 37.4465C49.8034 43.5665 44.6734 48.8165 35.9734 47.6465C34.9234 50.6465 34.7434 51.3665 33.9334 53.3765C32.4334 53.3765 30.2734 53.3465 28.5934 53.4665ZM37.5334 42.6065C39.3634 42.8465 40.9834 42.5165 42.0034 41.6465C43.5034 40.2365 44.3434 36.8765 41.8234 36.4865C41.0734 36.4265 40.0834 36.4865 39.1234 36.9065C38.5534 38.7665 38.1034 40.7165 37.5334 42.6065ZM55.0637 48.2165C57.0137 48.2165 60.4037 47.9465 62.6537 47.6765C61.9337 49.5065 61.1837 51.3365 60.1637 53.1965C56.1137 53.4665 51.0137 53.4665 48.1037 53.4665C49.9037 46.2365 51.5837 39.6065 54.0437 32.0165C56.5937 31.5665 58.6637 31.4765 61.2137 31.5365C58.3337 38.5265 56.8937 42.6965 55.0637 48.2165ZM67.7795 53.2265C65.8895 53.0765 64.0595 53.0765 62.3795 53.2265C65.5295 46.2965 68.8895 38.7965 72.4595 31.8965C75.3095 31.4465 77.8295 31.4465 80.4695 31.5365C80.5295 38.8265 80.7095 46.3865 80.3795 53.4065C78.5795 53.3465 76.5695 53.2865 74.7695 53.4965C74.8595 52.2665 74.8895 50.9465 74.9195 49.6865C73.2095 49.7465 71.5895 49.7465 69.5495 49.8965C68.9795 50.9765 68.4395 52.1165 67.7795 53.2265ZM71.2595 44.5565C72.7895 44.4965 74.1695 44.4665 75.7895 44.6165C75.8195 42.1265 75.6695 39.3665 75.5195 36.8165C73.9895 39.3365 72.6095 42.0665 71.2595 44.5565ZM101.634 31.8965C97.614 39.1865 94.224 45.2465 89.814 53.5265C87.654 53.4065 85.824 53.4365 83.994 53.5865C84.744 52.0265 85.674 50.0465 86.694 47.9465C86.304 48.0065 85.494 47.9465 85.134 48.0065C84.714 45.6365 83.904 38.1665 83.634 31.8965C85.614 31.6265 88.314 31.6865 90.234 31.8965C89.934 34.9265 89.994 38.6465 90.204 41.6165C91.764 38.4365 93.654 34.6265 94.974 32.0765C97.314 31.7765 99.414 31.7765 101.634 31.8965Z",
                                  fill: "#EBD7A5",
                                },
                              }),
                              e._v(" "),
                              s("rect", {
                                attrs: {
                                  x: "106.574",
                                  y: "2.59009",
                                  width: "78.3466",
                                  height: "79.564",
                                  rx: "39.1733",
                                  fill: "url(#paint2_linear_5189_7357)",
                                  stroke: "url(#paint3_linear_5189_7357)",
                                  "stroke-width": "5",
                                },
                              }),
                              e._v(" "),
                              s("path", {
                                attrs: {
                                  d: "M138.376 26.9149C146.913 31.9592 156.626 40.8371 163.927 43.9903C156.014 46.9144 144.782 52.708 137.182 56.1335C138.085 43.0309 137.341 41.8753 138.376 26.9149Z",
                                  fill: "#EBD7A5",
                                },
                              }),
                              e._v(" "),
                              s(
                                "defs",
                                [
                                  s(
                                    "linearGradient",
                                    {
                                      attrs: {
                                        id: "paint0_linear_5189_7357",
                                        x1: "93.9199",
                                        y1: "2.59009",
                                        x2: "93.9199",
                                        y2: "82.5901",
                                        gradientUnits: "userSpaceOnUse",
                                      },
                                    },
                                    [
                                      s("stop", {
                                        attrs: { "stop-color": "#EE9B01" },
                                      }),
                                      e._v(" "),
                                      s("stop", {
                                        attrs: {
                                          offset: "0.21",
                                          "stop-color": "#EF3F28",
                                        },
                                      }),
                                      e._v(" "),
                                      s("stop", {
                                        attrs: {
                                          offset: "0.7",
                                          "stop-color": "#392136",
                                        },
                                      }),
                                      e._v(" "),
                                      s("stop", {
                                        attrs: {
                                          offset: "0.94",
                                          "stop-color": "#08193C",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  e._v(" "),
                                  s(
                                    "linearGradient",
                                    {
                                      attrs: {
                                        id: "paint1_linear_5189_7357",
                                        x1: "93.9199",
                                        y1: "2.59009",
                                        x2: "93.9199",
                                        y2: "82.5901",
                                        gradientUnits: "userSpaceOnUse",
                                      },
                                    },
                                    [
                                      s("stop", {
                                        attrs: { "stop-color": "#EE9B01" },
                                      }),
                                      e._v(" "),
                                      s("stop", {
                                        attrs: {
                                          offset: "1",
                                          "stop-color": "#EF3F28",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  e._v(" "),
                                  s(
                                    "linearGradient",
                                    {
                                      attrs: {
                                        id: "paint2_linear_5189_7357",
                                        x1: "145.748",
                                        y1: "2.59009",
                                        x2: "145.748",
                                        y2: "82.1541",
                                        gradientUnits: "userSpaceOnUse",
                                      },
                                    },
                                    [
                                      s("stop", {
                                        attrs: { "stop-color": "#EE9B01" },
                                      }),
                                      e._v(" "),
                                      s("stop", {
                                        attrs: {
                                          offset: "0.21",
                                          "stop-color": "#EF3F28",
                                        },
                                      }),
                                      e._v(" "),
                                      s("stop", {
                                        attrs: {
                                          offset: "0.7",
                                          "stop-color": "#392136",
                                        },
                                      }),
                                      e._v(" "),
                                      s("stop", {
                                        attrs: {
                                          offset: "0.94",
                                          "stop-color": "#08193C",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  e._v(" "),
                                  s(
                                    "linearGradient",
                                    {
                                      attrs: {
                                        id: "paint3_linear_5189_7357",
                                        x1: "145.748",
                                        y1: "2.59009",
                                        x2: "145.748",
                                        y2: "82.1541",
                                        gradientUnits: "userSpaceOnUse",
                                      },
                                    },
                                    [
                                      s("stop", {
                                        attrs: { "stop-color": "#EE9B01" },
                                      }),
                                      e._v(" "),
                                      s("stop", {
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
                    ]
                  ),
                  e._v(" "),
                  s(
                    "div",
                    {
                      staticClass:
                        "flex-1 frame bg-gradient-flipped pl-20 s:pl-30 pr-20 s:pr-10 pt-30 pb-30 s:pb-50 w-full -mt-5",
                    },
                    [
                      s("h2", {
                        staticClass: "h4 font-disp-2",
                        domProps: {
                          textContent: e._s(e.$sanitize(e.item.title)),
                        },
                      }),
                    ]
                  ),
                ],
                1
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
      installComponents(r, { LazySimple: s(275).default });
    },
    648: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = s(7),
        i =
          (s(38),
          {
            mixins: [s(585).a],
            asyncData: function (t) {
              return Object(a.a)(
                regeneratorRuntime.mark(function e() {
                  var s, a, i, r, n, l;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (s = t.query),
                              t.params,
                              t.redirect,
                              (a = t.$dato),
                              t.store,
                              (e.prev = 1),
                              (e.next = 4),
                              a.getPage({
                                slug: "episodes",
                                variables: { first: 10, skip: 0 },
                                preview: s && s.preview,
                              })
                            );
                          case 4:
                            return (
                              (i = e.sent),
                              (r = i.page),
                              (n = i.episodes),
                              (l = i.total),
                              e.abrupt("return", {
                                page: r,
                                episodes: n,
                                total: l,
                              })
                            );
                          case 11:
                            return (
                              (e.prev = 11),
                              (e.t0 = e.catch(1)),
                              e.abrupt("return", e.t0)
                            );
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 11]]
                  );
                })
              )();
            },
            methods: {
              open: function (t) {
                this.$store.commit("app/SET_MODAL", {
                  active: !0,
                  component: "ModalEpisode",
                  item: t,
                });
              },
            },
          }),
        r = i,
        n = s(16),
        l = Object(n.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "article",
              {},
              [
                e("MediaMenu", {
                  staticClass:
                    "fixed top-50 left-1/2 -translate-x-1/2 hidden s:block z-10",
                }),
                t._v(" "),
                e(
                  "Parallax",
                  {
                    staticClass:
                      "absolute top-0 s:top-[-36.25rem] left-0 w-full",
                  },
                  [
                    e(
                      "LazySimple",
                      {
                        staticClass: "relative media-fit scale-y-[-1]",
                        attrs: { image: "/space/orange-1.jpg" },
                      },
                      [e("div", { staticClass: "pt-[70%]" })]
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e("Hero", {
                  staticClass: "relative z-2",
                  attrs: { title: t.page.title, subtitle: t.page.subtitle },
                }),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass:
                      "site-max grid grid-cols-1 s:grid-cols-3 gap-x-95 gap-y-20 s:gap-y-60 relative z-2",
                  },
                  t._l(t.episodes, function (s, a) {
                    return e("CardEpisode", {
                      key: a,
                      staticClass: "js-t-pop-up",
                      class: 0 === a ? "col-span-1 s:col-span-3" : "col-span-1",
                      attrs: { item: s, big: 0 === a },
                      nativeOn: {
                        click: function (e) {
                          return t.open(s);
                        },
                      },
                    });
                  }),
                  1
                ),
                t._v(" "),
                e("Ground", { staticClass: "mt-100 s:mt-150 mb-60" }),
                t._v(" "),
                e("Misc", { attrs: { items: t.page.misc } }),
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
      e.default = l.exports;
      installComponents(l, {
        MediaMenu: s(586).default,
        LazySimple: s(275).default,
        Parallax: s(411).default,
        Hero: s(590).default,
        CardEpisode: s(606).default,
        Ground: s(587).default,
        Misc: s(588).default,
      });
    },
  },
]);
