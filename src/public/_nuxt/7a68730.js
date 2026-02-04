(window.webpackJsonp = window.webpackJsonp || []).push([
  [52, 10, 13, 22, 23, 32, 35, 36, 37, 43, 44, 49],
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
    574: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = a(66),
        i = a(7),
        r = a(27),
        n =
          (a(38),
          a(91),
          a(150),
          a(151),
          a(22),
          a(124),
          a(2),
          a(193),
          a(194),
          a(195),
          a(196),
          a(197),
          a(198),
          a(199),
          a(200),
          a(201),
          a(202),
          a(203),
          a(204),
          a(205),
          a(206),
          a(207),
          a(208),
          a(209),
          a(210),
          a(211),
          a(212),
          a(213),
          a(214),
          a(215),
          a(216),
          a(13)),
        l = a(109),
        o = a(67),
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
                var a, i, r, l;
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
                              (a = t.$rive.files.find(function (t) {
                                return t.name === i;
                              })) || void 0 === a
                              ? void 0
                              : a.file))
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
                          (r = Object(s.a)(r)),
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
        u = a(16),
        d = Object(u.a)(
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
      e.default = d.exports;
    },
    575: function (t, e, a) {
      var s = a(581);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.i, s, ""]]),
        s.locals && (t.exports = s.locals);
      (0, a(76).default)("2e83e6d9", s, !0, { sourceMap: !1 });
    },
    576: function (t, e, a) {
      var s = a(583);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.i, s, ""]]),
        s.locals && (t.exports = s.locals);
      (0, a(76).default)("71b84d90", s, !0, { sourceMap: !1 });
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
    579: function (t, e, a) {
      "use strict";
      a.r(e);
      a(277);
      var s = a(7),
        i = (a(38), a(14), a(99), a(85), a(13)),
        r = a(125),
        n = a.n(r),
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
            return Object(s.a)(
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
        o = a(16),
        c = Object(o.a)(
          l,
          function () {
            var t,
              e,
              a,
              s = this,
              i = s._self._c;
            return i(
              "article",
              s._g(
                { staticClass: "relative" },
                s.item.quickStart
                  ? {
                      click: function () {
                        return s.toggleModal();
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
                        (null === (t = s.item.link) || void 0 === t
                          ? void 0
                          : t.to) || null,
                      static: !(
                        null !== (e = s.item.link) &&
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
                        class: s.comics
                          ? "--comics bg-green media-contain"
                          : "media-fill h-scale",
                      },
                      [
                        i("div", { staticClass: "pt-[70%] s:pt-[100%]" }),
                        s._v(" "),
                        i("Media", { attrs: { item: s.item, fill: !0 } }),
                      ],
                      1
                    ),
                    s._v(" "),
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
                            s.item.tag
                              ? i(
                                  "div",
                                  {
                                    staticClass:
                                      "relative w-150 s:w-250 h-125 s:h-200 z-3",
                                  },
                                  [
                                    i("RiveBubble", {
                                      attrs: { text: s.item.tag },
                                    }),
                                  ],
                                  1
                                )
                              : s._e(),
                            s._v(" "),
                            i("h2", {
                              ref: "title",
                              staticClass:
                                "h2 !text-26 s:!text-55 flex flex-col items-start text-black relative z-2",
                              class: s.item.tag && "-mt-30 s:-mt-60",
                              domProps: {
                                textContent: s._s(s.$sanitize(s.item.title)),
                              },
                            }),
                          ]
                        ),
                        s._v(" "),
                        i(
                          "div",
                          { staticClass: "pt-100 pb-20 s:pb-40 px-20 s:px-40" },
                          [
                            s.item.text
                              ? i("p", {
                                  staticClass: "s:max-w-[55rem]",
                                  domProps: {
                                    textContent: s._s(s.$sanitize(s.item.text)),
                                  },
                                })
                              : s._e(),
                            s._v(" "),
                            i("BaseButton", {
                              staticClass: "mt-30",
                              attrs: {
                                label:
                                  (null === (a = s.item.link) || void 0 === a
                                    ? void 0
                                    : a.label) || "Learn More",
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
        Media: a(578).default,
        RiveBubble: a(574).default,
        BaseButton: a(192).default,
        Link: a(276).default,
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
    582: function (t, e, a) {
      "use strict";
      a(576);
    },
    583: function (t, e, a) {
      var s = a(75)(function (t) {
        return t[1];
      });
      s.push([
        t.i,
        ".ground__image[data-v-70057ccc]{opacity:0}.ground__image.is-loaded[data-v-70057ccc]{opacity:1;transition:opacity .5s cubic-bezier(.25,.46,.45,.94),transform .75s cubic-bezier(.19,1,.22,1)}",
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
        n = (a(33), a(2), a(126), a(38), a(13)),
        l = a(31),
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
                  e = Object(l.b)(".js-s-chars", this.$el);
                e.length &&
                  e.forEach(function (e) {
                    var a = new c.a(e, {
                      type: "words, chars",
                      wordsClass: "c-fix-p whitespace-nowrap",
                      charsClass: "c-fix",
                    });
                    t.a.push(
                      n.a.fromTo(
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
                  (e = Object(l.b)(".js-s-chars-up", this.$el)).length &&
                    e.forEach(function (e) {
                      var a = new c.a(e, {
                        type: "words, chars",
                        wordsClass: "c-fix-p whitespace-nowrap",
                        charsClass: "c-fix",
                      });
                      t.a.push(
                        n.a.fromTo(
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
                  (e = Object(l.b)(".js-s-lines", this.$el)).length &&
                    e.forEach(function (e) {
                      var a = new c.a(e, { type: "lines" });
                      t.a.push(
                        n.a.fromTo(
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
            var a,
              r = this;
            window.scrollTo(0, 0), e(), this.$nuxt.$emit("enter");
            var o = Object(l.a)(".js-t-title", t),
              u = Object(l.a)(".js-t-subtitle", t),
              d = Object(l.b)(".js-t-pop-up", t),
              p = Object(l.b)(".js-t-up", t);
            if (
              (null === (a = s) || void 0 === a || a.kill(),
              (s = n.a
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
              var h = this.$r.wh,
                v = d.filter(function (t) {
                  return Object(l.c)(t).top < h;
                });
              s.fromTo(
                v,
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
        n = Object(r.a)(
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
      e.default = n.exports;
    },
    587: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = {
          data: function () {
            return { loaded: !1 };
          },
        },
        i = (a(582), a(16)),
        r = Object(i.a)(
          s,
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
    588: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = {
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
        i = a(16),
        r = Object(i.a)(
          s,
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
      installComponents(r, { CardMisc: a(579).default });
    },
    590: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = {
          props: {
            title: { type: String, required: !1 },
            subtitle: { type: String, required: !1 },
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
    599: function (t, e, a) {
      "use strict";
      a.r(e);
      a(22), a(124);
      var s = {
          props: {
            total: { type: Number, required: !0 },
            max: { type: Number, required: !1, default: 20 },
            current: { type: Number, required: !0 },
          },
          mounted: function () {},
          computed: {
            start: function () {
              return 1 === this.current
                ? 1
                : this.current === this.pagesTotal
                ? this.pagesTotal
                : this.current - 1;
            },
            pagesTotal: function () {
              return Math.ceil(this.total / this.max);
            },
            pages: function () {
              var t = [],
                e =
                  1 === this.current
                    ? 1
                    : this.current === this.pagesTotal
                    ? this.current - 3
                    : this.current - 1,
                a =
                  this.current === this.pagesTotal
                    ? this.pagesTotal
                    : 1 === this.current
                    ? this.current + 3
                    : this.current + 2;
              (e = Math.max(e, 1)),
                (a = Math.max(a, e)),
                (a = Math.min(a, this.pagesTotal));
              for (var s = e; s <= a - 1; s++)
                t.push({ name: s, disabled: s === this.current });
              return t;
            },
            first: function () {
              return 1 === this.current;
            },
            last: function () {
              return this.current === this.pagesTotal;
            },
          },
          methods: {
            previous: function () {
              this.$emit("page-changed", this.current - 1);
            },
            next: function () {
              this.$emit("page-changed", this.current + 1);
            },
            change: function (t) {
              this.$emit("page-changed", t);
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
              "nav",
              {
                staticClass:
                  "flex items-center gap-x-30 s:gap-x-45 mt-40 s:mt-100",
              },
              [
                e(
                  "BaseButton",
                  {
                    attrs: { label: "Previous", circle: !0, disabled: t.first },
                    nativeOn: {
                      click: function (e) {
                        return t.previous.apply(null, arguments);
                      },
                    },
                  },
                  [
                    e(
                      "svg",
                      {
                        staticClass: "relative w-19 h-25 z-3",
                        attrs: {
                          viewBox: "0 0 19 25",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                      },
                      [
                        e("path", {
                          attrs: {
                            d: "M18.369 17.3632C15.1574 16.4498 10.719 14.443 8.03172 12.2799C11.5078 10.9029 15.1848 9.07308 18.4523 7.18583C18.685 4.87318 18.7046 3.05937 18.6718 0.73958C12.9311 4.65549 6.03933 8.10939 1.16931 10.5237C1.20722 12.5435 1.23521 13.7212 0.951284 16.207C6.01622 18.6966 13.6217 21.3986 18.4653 24.2866C18.433 21.9661 18.4362 19.0865 18.369 17.3632Z",
                            fill: "#EBD7A5",
                          },
                        }),
                      ]
                    ),
                  ]
                ),
                t._v(" "),
                e("div", { staticClass: "flex" }, [
                  e(
                    "ul",
                    {
                      staticClass:
                        "flex gap-x-15 font-disp-2 uppercase text-19",
                    },
                    [
                      t.current > 2
                        ? e("li", [
                            e(
                              "button",
                              {
                                staticClass:
                                  "transition-colors duration-500 ease-out has-hover:hover:text-red",
                                attrs: { type: "button", disabled: t.first },
                                on: {
                                  click: function () {
                                    return t.change(1);
                                  },
                                },
                              },
                              [
                                t._v(
                                  "\n                    1\n                "
                                ),
                              ]
                            ),
                          ])
                        : t._e(),
                      t._v(" "),
                      t.current > 2 ? e("li", [t._v("...")]) : t._e(),
                      t._v(" "),
                      t._l(t.pages, function (a) {
                        return e("li", { key: a.name }, [
                          e(
                            "button",
                            {
                              staticClass:
                                "transition-colors duration-500 ease-out has-hover:hover:text-red",
                              class: a.name === t.current && "text-red",
                              attrs: { type: "button", disabled: a.disabled },
                              on: {
                                click: function () {
                                  return t.change(a.name);
                                },
                              },
                            },
                            [
                              t._v(
                                "\n                    " +
                                  t._s(a.name) +
                                  "\n                "
                              ),
                            ]
                          ),
                        ]);
                      }),
                      t._v(" "),
                      e("li", [t._v("...")]),
                      t._v(" "),
                      e("li", [
                        e(
                          "button",
                          {
                            staticClass:
                              "transition-colors duration-500 ease-out has-hover:hover:text-red",
                            class: t.pagesTotal === t.current && "text-red",
                            attrs: { type: "button", disabled: t.last },
                            on: {
                              click: function () {
                                return t.change(t.pagesTotal);
                              },
                            },
                          },
                          [
                            t._v(
                              "\n                    " +
                                t._s(t.pagesTotal) +
                                "\n                "
                            ),
                          ]
                        ),
                      ]),
                    ],
                    2
                  ),
                ]),
                t._v(" "),
                e(
                  "BaseButton",
                  {
                    attrs: { label: "next", circle: !0, disabled: t.last },
                    nativeOn: {
                      click: function (e) {
                        return t.next.apply(null, arguments);
                      },
                    },
                  },
                  [
                    e(
                      "svg",
                      {
                        staticClass: "relative w-19 h-25 scale-x-[-1] z-3",
                        attrs: {
                          viewBox: "0 0 19 25",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                      },
                      [
                        e("path", {
                          attrs: {
                            d: "M18.369 17.3632C15.1574 16.4498 10.719 14.443 8.03172 12.2799C11.5078 10.9029 15.1848 9.07308 18.4523 7.18583C18.685 4.87318 18.7046 3.05937 18.6718 0.73958C12.9311 4.65549 6.03933 8.10939 1.16931 10.5237C1.20722 12.5435 1.23521 13.7212 0.951284 16.207C6.01622 18.6966 13.6217 21.3986 18.4653 24.2866C18.433 21.9661 18.4362 19.0865 18.369 17.3632Z",
                            fill: "#EBD7A5",
                          },
                        }),
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
      installComponents(r, { BaseButton: a(192).default });
    },
    623: function (t, e, a) {
      "use strict";
      a.r(e);
      a(277);
      var s = { props: { item: { type: Object, default: function () {} } } },
        i = a(16),
        r = Object(i.a)(
          s,
          function () {
            var t = this,
              e = t._self._c;
            return e("article", { staticClass: "relative" }, [
              e(
                "div",
                { staticClass: "frame-s overflow-hidden bg-gradient-s w-full" },
                [
                  e(
                    "Link",
                    {
                      staticClass:
                        "s:p-65 flex flex-col s:flex-row s:justify-between w-full h-trig",
                      attrs: { to: t.item.link },
                    },
                    [
                      e(
                        "LazySimple",
                        {
                          staticClass:
                            "relative media-fill overflow-hidden frame w-full s:min-w-[69.2rem] s:max-w-[69.2rem] h-scale s:order-2",
                          attrs: { image: t.item.featuredImage.thumbnail },
                        },
                        [e("div", { staticClass: "pt-[70%]" })]
                      ),
                      t._v(" "),
                      e(
                        "div",
                        {
                          staticClass:
                            "frame-max-s bg-gradient-max-s p-20 pb-30 s:p-0 flex-1 flex flex-col items-start justify-center w-full s:max-w-[51.5rem] -mt-5 s:mt-0 s:order-1",
                        },
                        [
                          e(
                            "figure",
                            {
                              staticClass:
                                "relative w-150 s:w-250 h-125 s:h-200 z-3 ml-10 s:ml-0 -mt-20 s:mt-0",
                            },
                            [
                              e("RiveBubble", {
                                attrs: { text: "New Collab!" },
                              }),
                            ],
                            1
                          ),
                          t._v(" "),
                          e("h2", {
                            staticClass: "h3 font-disp-2",
                            domProps: {
                              textContent: t._s(t.$sanitize(t.item.title)),
                            },
                          }),
                          t._v(" "),
                          t.item.subtitle
                            ? e("p", {
                                staticClass: "mt-18 text-left",
                                domProps: {
                                  textContent: t._s(
                                    t.$sanitize(t.item.subtitle)
                                  ),
                                },
                              })
                            : t._e(),
                          t._v(" "),
                          t.item.link
                            ? e(
                                "div",
                                {
                                  staticClass:
                                    "uline-double text-yellow h5 font-disp-2 mt-30",
                                },
                                [t._v("Read more")]
                              )
                            : t._e(),
                        ]
                      ),
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
                  staticClass:
                    "frame -mt-5 overflow-hidden bg-gradient flex flex-col s:flex-row",
                },
                [
                  e(
                    "div",
                    {
                      staticClass:
                        "flex-1 flex items-center justify-center py-20 s:py-30",
                    },
                    [
                      e("LazySimple", {
                        staticClass:
                          "relative h-40 s:h-70 w-175 s:w-250 media-contain",
                        attrs: { image: "/logo-light.svg" },
                      }),
                    ],
                    1
                  ),
                  t._v(" "),
                  t._l(t.item.logos, function (t, a) {
                    var s;
                    return e(
                      "Link",
                      {
                        key: a,
                        staticClass:
                          "flex-1 flex items-center justify-center border-t-[.5rem] s:border-t-0 s:border-l-[.5rem] border-black py-20 s:py-30",
                        attrs: { to: t.url },
                      },
                      [
                        e("LazySimple", {
                          staticClass:
                            "relative h-49 s:h-70 w-175 s:w-250 media-contain",
                          attrs: {
                            image:
                              null === (s = t.logo) || void 0 === s
                                ? void 0
                                : s.url,
                          },
                        }),
                      ],
                      1
                    );
                  }),
                ],
                2
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
      installComponents(r, {
        LazySimple: a(275).default,
        RiveBubble: a(574).default,
        Link: a(276).default,
      });
    },
    646: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = a(7),
        i = (a(38), a(13)),
        r = {
          mixins: [a(585).a],
          data: function () {
            return { current: 1, max: 5 };
          },
          asyncData: function (t) {
            return Object(s.a)(
              regeneratorRuntime.mark(function e() {
                var a, s, i, r, n, l;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = t.query),
                            t.params,
                            t.redirect,
                            (s = t.$dato),
                            t.store,
                            (e.prev = 1),
                            (e.next = 4),
                            s.getPage({
                              slug: "collabs",
                              variables: { first: 5, skip: 0 },
                              preview: a && a.preview,
                            })
                          );
                        case 4:
                          return (
                            (i = e.sent),
                            (r = i.page),
                            (n = i.collabs),
                            (l = i.total),
                            e.abrupt("return", {
                              page: r,
                              collabs: n,
                              total: l,
                            })
                          );
                        case 12:
                          return (
                            (e.prev = 12),
                            (e.t0 = e.catch(1)),
                            e.abrupt("return", e.t0)
                          );
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 12]]
                );
              })
            )();
          },
          methods: {
            update: function () {
              var t = this;
              return Object(s.a)(
                regeneratorRuntime.mark(function e() {
                  var a, s;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              t.$dato.getPage({
                                slug: "collabs",
                                variables: {
                                  first: t.max,
                                  skip: t.max * (t.current - 1),
                                },
                              })
                            );
                          case 3:
                            (a = e.sent),
                              (s = a.collabs),
                              t.transition(s),
                              (e.next = 12);
                            break;
                          case 8:
                            return (
                              (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              e.abrupt("return", e.t0)
                            );
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]]
                  );
                })
              )();
            },
            transition: function (t) {
              var e = this;
              !this.tl &&
                (this.tl = i.a.timeline({
                  defaults: { duration: 0.5, ease: "power1" },
                })),
                this.tl
                  .clear()
                  .to(window, { scrollTo: 0, duration: 0.75, ease: "snappy" })
                  .add(function () {
                    return (e.collabs = t);
                  })
                  .to(this.$refs.elems, { alpha: 0 }, 0)
                  .to(this.$refs.elems, { alpha: 1 })
                  .restart();
            },
            changePage: function (t) {
              (this.current = t), this.update();
            },
          },
        },
        n = a(16),
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
                    staticClass: "absolute top-0 left-0 w-full",
                    attrs: { top: !0 },
                  },
                  [
                    e(
                      "Space",
                      {
                        staticClass: "relative",
                        attrs: {
                          image: "/space/subs/collabs-1.jpg",
                          "image-mobile": "/space/subs/collabs-1.jp",
                        },
                      },
                      [e("div", { staticClass: "pt-[150%] s:pt-[47.5%]" })]
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e("Hero", {
                  attrs: { title: t.page.title, subtitle: t.page.subtitle },
                }),
                t._v(" "),
                e(
                  "div",
                  {
                    ref: "elems",
                    staticClass:
                      "site-max relative flex flex-col gap-y-20 s:gap-y-100",
                  },
                  t._l(t.collabs || [], function (t) {
                    return e("CardCollab", {
                      key: t.id,
                      staticClass: "js-t-pop-up",
                      attrs: { item: t },
                    });
                  }),
                  1
                ),
                t._v(" "),
                t.total.count > t.max
                  ? e(
                      "div",
                      { staticClass: "site-max flex justify-center" },
                      [
                        e("Pagination", {
                          attrs: {
                            total: t.total.count,
                            max: t.max,
                            current: t.current,
                          },
                          on: { "page-changed": t.changePage },
                        }),
                      ],
                      1
                    )
                  : t._e(),
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
        MediaMenu: a(586).default,
        Space: a(279).default,
        Parallax: a(411).default,
        Hero: a(590).default,
        CardCollab: a(623).default,
        Pagination: a(599).default,
        Ground: a(587).default,
        Misc: a(588).default,
      });
    },
  },
]);
