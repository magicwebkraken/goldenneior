(window.webpackJsonp = window.webpackJsonp || []).push([
  [58, 13, 22, 23, 32, 35, 36, 37, 44, 49],
  {
    572: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = {
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
        s = a(16),
        r = Object(s.a)(
          i,
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
      var i = {
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
        s = a(16),
        r = Object(s.a)(
          i,
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
      var i = a(66),
        s = a(7),
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
            return Object(s.a)(
              regeneratorRuntime.mark(function e() {
                var a, s, r, l;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.$nextTick();
                      case 2:
                        if (
                          ((t.name = "bubble_bubble"),
                          (s = t.name),
                          (r =
                            null ===
                              (a = t.$rive.files.find(function (t) {
                                return t.name === s;
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
                          (r = Object(i.a)(r)),
                          t.$rive.files.push({ name: s, file: r });
                      case 14:
                        (t.r = new o.Rive({
                          buffer: r,
                          canvas: t.$el,
                          artboard: s,
                          stateMachines: s,
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
      var i = a(581);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, a(76).default)("2e83e6d9", i, !0, { sourceMap: !1 });
    },
    576: function (t, e, a) {
      var i = a(583);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, a(76).default)("71b84d90", i, !0, { sourceMap: !1 });
    },
    577: function (t, e, a) {
      "use strict";
      var i = a(1),
        s = a(278),
        r = a(152);
      i({ target: "Array", proto: !0 }, { fill: s }), r("fill");
    },
    578: function (t, e, a) {
      "use strict";
      a.r(e);
      a(577), a(85);
      var i = {
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
        s = a(16),
        r = Object(s.a)(
          i,
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
      var i = a(7),
        s = (a(38), a(14), a(99), a(85), a(13)),
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
            return Object(i.a)(
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
                          (t.st = s.a
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
              i = this,
              s = i._self._c;
            return s(
              "article",
              i._g(
                { staticClass: "relative" },
                i.item.quickStart
                  ? {
                      click: function () {
                        return i.toggleModal();
                      },
                    }
                  : null
              ),
              [
                s(
                  "Link",
                  {
                    staticClass: "block h-trig",
                    attrs: {
                      to:
                        (null === (t = i.item.link) || void 0 === t
                          ? void 0
                          : t.to) || null,
                      static: !(
                        null !== (e = i.item.link) &&
                        void 0 !== e &&
                        e.to
                      ),
                    },
                  },
                  [
                    s(
                      "div",
                      {
                        staticClass: "frame overflow-hidden h-scale relative",
                        class: i.comics
                          ? "--comics bg-green media-contain"
                          : "media-fill h-scale",
                      },
                      [
                        s("div", { staticClass: "pt-[70%] s:pt-[100%]" }),
                        i._v(" "),
                        s("Media", { attrs: { item: i.item, fill: !0 } }),
                      ],
                      1
                    ),
                    i._v(" "),
                    s(
                      "div",
                      {
                        staticClass:
                          "relative frame flex flex-col items-start -mt-5 bg-gradient z-2",
                      },
                      [
                        s(
                          "div",
                          {
                            staticClass:
                              "absolute bottom-[calc(100%-13rem)] left-0 w-full flex flex-col items-start justify-end py-50 px-20 s:p-50 overflow-hidden",
                          },
                          [
                            i.item.tag
                              ? s(
                                  "div",
                                  {
                                    staticClass:
                                      "relative w-150 s:w-250 h-125 s:h-200 z-3",
                                  },
                                  [
                                    s("RiveBubble", {
                                      attrs: { text: i.item.tag },
                                    }),
                                  ],
                                  1
                                )
                              : i._e(),
                            i._v(" "),
                            s("h2", {
                              ref: "title",
                              staticClass:
                                "h2 !text-26 s:!text-55 flex flex-col items-start text-black relative z-2",
                              class: i.item.tag && "-mt-30 s:-mt-60",
                              domProps: {
                                textContent: i._s(i.$sanitize(i.item.title)),
                              },
                            }),
                          ]
                        ),
                        i._v(" "),
                        s(
                          "div",
                          { staticClass: "pt-100 pb-20 s:pb-40 px-20 s:px-40" },
                          [
                            i.item.text
                              ? s("p", {
                                  staticClass: "s:max-w-[55rem]",
                                  domProps: {
                                    textContent: i._s(i.$sanitize(i.item.text)),
                                  },
                                })
                              : i._e(),
                            i._v(" "),
                            s("BaseButton", {
                              staticClass: "mt-30",
                              attrs: {
                                label:
                                  (null === (a = i.item.link) || void 0 === a
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
      var i = a(75)(function (t) {
        return t[1];
      });
      i.push([
        t.i,
        ".media-menu{perspective:100vw}.media-menu__text{-webkit-background-clip:text;-webkit-text-fill-color:transparent}.media-menu__dd{transform:rotateX(30deg)}.media-menu__link.nuxt-link-exact-active{color:#ee9b01;pointer-events:none}",
        "",
      ]),
        (i.locals = {}),
        (t.exports = i);
    },
    582: function (t, e, a) {
      "use strict";
      a(576);
    },
    583: function (t, e, a) {
      var i = a(75)(function (t) {
        return t[1];
      });
      i.push([
        t.i,
        ".ground__image[data-v-70057ccc]{opacity:0}.ground__image.is-loaded[data-v-70057ccc]{opacity:1;transition:opacity .5s cubic-bezier(.25,.46,.45,.94),transform .75s cubic-bezier(.19,1,.22,1)}",
        "",
      ]),
        (i.locals = {}),
        (t.exports = i);
    },
    585: function (t, e, a) {
      "use strict";
      var i,
        s,
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
              m = Object(l.b)(".js-t-up", t);
            if (
              (null === (a = i) || void 0 === a || a.kill(),
              (i = n.a
                .timeline({
                  paused: !0,
                  defaults: { duration: 1.5, ease: "expo" },
                  onComplete: function () {
                    s = !1;
                  },
                })
                .add(function () {
                  return r.$nuxt.$emit("enter-content");
                }, 2)),
              o)
            ) {
              var f = new c.a(o, { type: "words, chars", charsClass: "c-fix" });
              i.fromTo(
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
              var p = new c.a(u, { type: "lines", linesClass: "c-fix" });
              i.fromTo(
                p.lines,
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
              (m.length > 0 &&
                i.fromTo(
                  m,
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
              i.fromTo(
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
            i.play();
          },
          leave: function (t, e) {
            if (!s) {
              s = !0;
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
      var i = a(13),
        s = {
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
                  (this.tl = i.a.timeline({
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
          s,
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
      var i = {
          data: function () {
            return { loaded: !1 };
          },
        },
        s = (a(582), a(16)),
        r = Object(s.a)(
          i,
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
      var i = {
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
        s = a(16),
        r = Object(s.a)(
          i,
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
      var i = {
          props: {
            title: { type: String, required: !1 },
            subtitle: { type: String, required: !1 },
          },
        },
        s = a(16),
        r = Object(s.a)(
          i,
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
    618: function (t, e, a) {
      var i = a(637);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, a(76).default)("43923d70", i, !0, { sourceMap: !1 });
    },
    636: function (t, e, a) {
      "use strict";
      a(618);
    },
    637: function (t, e, a) {
      var i = a(75)(function (t) {
        return t[1];
      });
      i.push([
        t.i,
        ".meme-card[data-v-13f485d1]{--left:0rem;--size:75%;--top:0rem;--x:0rem;--y:0rem;--z:1;margin-left:0;margin-left:var(--left);margin-top:0;margin-top:var(--top);width:75%;width:var(--size);z-index:1;z-index:var(--z)}@media (min-width:650px){.meme-card[data-v-13f485d1]{--size:50rem}}@media (hover:hover) and (pointer:fine){.meme-card[data-v-13f485d1]{transform:translate(var(--x),var(--y))}.meme-card:nth-child(3n+1) .meme-card__fig.is-active[data-v-13f485d1]{transform:translate3d(0,var(--d1),0)}.meme-card:nth-child(3n+2) .meme-card__fig.is-active[data-v-13f485d1]{transform:translate3d(0,var(--d3),0)}.meme-card:nth-child(3n+3) .meme-card__fig.is-active[data-v-13f485d1]{transform:translate3d(0,var(--d2),0)}}@media (max-width:649px){.meme-card[data-v-13f485d1]:nth-child(odd){--left:auto}.meme-card[data-v-13f485d1]:nth-child(2n){margin-right:auto}}@media (min-width:650px){.meme-card[data-v-13f485d1]:nth-child(13n+1){--size:57rem;--left:25rem;--z:2}.meme-card[data-v-13f485d1]:nth-child(13n+2){--size:40rem;--left:15rem;--top:3rem}.meme-card[data-v-13f485d1]:nth-child(13n+3){--size:60rem;--x:-25rem;--top:-2rem}.meme-card[data-v-13f485d1]:nth-child(13n+4){--size:60rem;--left:-30rem;--top:25rem;--z:2}.meme-card[data-v-13f485d1]:nth-child(13n+5){--size:60rem;--left:-5rem;--top:3rem}.meme-card[data-v-13f485d1]:nth-child(13n+6){--size:45rem;--left:-15rem;--top:5rem;--x:10rem;--z:3}.meme-card[data-v-13f485d1]:nth-child(13n+7){--size:45rem;--top:4rem}.meme-card[data-v-13f485d1]:nth-child(13n+8){--size:65rem;--left:15rem;--top:20rem}.meme-card[data-v-13f485d1]:nth-child(13n+9){--size:45rem;--left:-20rem;--top:-5rem;--z:2}.meme-card[data-v-13f485d1]:nth-child(13n+10){--size:60rem;--left:-30rem;--top:15rem;--x:10rem}.meme-card[data-v-13f485d1]:nth-child(13n+11){--size:60rem;--left:27.5rem;--top:15rem}.meme-card[data-v-13f485d1]:nth-child(13n+12){--size:40rem;--left:-5rem;--top:5rem;--z:3}}",
        "",
      ]),
        (i.locals = {}),
        (t.exports = i);
    },
    651: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a(7),
        s = (a(23), a(2), a(17), a(38), a(585)),
        r = a(31),
        n = {
          mixins: [s.a],
          data: function () {
            return { e: [0, 0, 0], d: [0, 0, 0] };
          },
          computed: {
            hasMouse: function () {
              return this.$store.state.app.features.hasMouse;
            },
          },
          asyncData: function (t) {
            return Object(i.a)(
              regeneratorRuntime.mark(function e() {
                var a, i, s, r;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = t.query),
                            (i = t.$dato),
                            (e.prev = 1),
                            (e.next = 4),
                            i.getPage({
                              slug: "memes",
                              preview: a && a.preview,
                            })
                          );
                        case 4:
                          return (
                            (s = e.sent),
                            (r = s.page),
                            e.abrupt("return", { page: r })
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
          mounted: function () {
            var t = this;
            return Object(i.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.$nextTick();
                      case 2:
                        if (t.hasMouse) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt("return");
                      case 4:
                        t.resize(),
                          t.$nuxt.$on("resize", t.resize),
                          t.$nuxt.$on("tick", t.tick);
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          beforeDestroy: function () {
            this.hasMouse &&
              (this.$nuxt.$off("resize", this.resize),
              this.$nuxt.$off("tick", this.tick),
              (this.c = null));
          },
          methods: {
            resize: function () {
              var t = this.$r.wh;
              (this.c = null),
                (this.c = this.$refs.card.map(function (e) {
                  var a = Object(r.c)(e),
                    i = a.top,
                    s = a.bottom;
                  return { el: e, start: i - t, end: s, active: !1 };
                }));
            },
            tick: function (t) {
              var e,
                a = this,
                i = t.y;
              (this.y = i),
                (this.d[0] = i - this.e[0]),
                (this.d[0] = Math.round(100 * this.d[0]) / 100),
                (this.d[1] = i - this.e[1]),
                (this.d[1] = Math.round(100 * this.d[1]) / 100),
                (this.d[2] = i - this.e[2]),
                (this.d[2] = Math.round(100 * this.d[2]) / 100),
                (this.e[0] += 0.2 * this.d[0]),
                (this.e[1] += 0.16 * this.d[1]),
                (this.e[2] += 0.12 * this.d[2]);
              var s = Math.abs(this.d[2]);
              if (!(s <= 0.01)) {
                var r = this.$refs.cards;
                r.style.setProperty("--d1", "".concat(this.d[0], "px")),
                  r.style.setProperty("--d2", "".concat(this.d[1], "px")),
                  r.style.setProperty("--d3", "".concat(this.d[2], "px"));
                var n = this.e[2] + s,
                  l = this.e[2] - s;
                null === (e = this.c) ||
                  void 0 === e ||
                  e.forEach(function (t) {
                    a.visible(t.start, t.end, n, l)
                      ? !t.active &&
                        ((t.active = !0), t.el.classList.add("is-active"))
                      : t.active &&
                        ((t.active = !1), t.el.classList.remove("is-active"));
                  });
              }
            },
            visible: function (t, e, a, i) {
              return a > t && i < e;
            },
            open: function (t) {
              this.$store.commit("app/SET_MODAL", {
                active: !0,
                component: "ModalShare",
                item: t,
              });
            },
          },
        },
        l = (a(636), a(16)),
        o = Object(l.a)(
          n,
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
                  "div",
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
                    t._v(" "),
                    e(
                      "LazySimple",
                      {
                        staticClass: "relative media-fit",
                        attrs: { image: "/space/orange-2.jpg" },
                      },
                      [e("div", { staticClass: "pt-[125%]" })]
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e("Hero", {
                  ref: "hero",
                  attrs: { title: t.page.title, subtitle: t.page.subtitle },
                }),
                t._v(" "),
                e(
                  "div",
                  {
                    ref: "cards",
                    staticClass:
                      "relative flex flex-wrap items-start overflow-hidden pt-200 -mt-200 pb-200 px-20 s:px-0",
                  },
                  t._l(t.page.items, function (a) {
                    return e("div", { key: a.id, staticClass: "meme-card" }, [
                      e(
                        "button",
                        {
                          ref: "card",
                          refInFor: !0,
                          staticClass:
                            "meme-card__fig block w-full frame radius-fix overflow-hidden cursor-pointer",
                          attrs: { type: "button" },
                          on: {
                            click: function (e) {
                              return t.open(a);
                            },
                          },
                        },
                        [
                          e("LazyPicture", {
                            staticClass: "w-full",
                            attrs: { image: a },
                          }),
                        ],
                        1
                      ),
                    ]);
                  }),
                  0
                ),
                t._v(" "),
                e("Ground", { staticClass: "mb-60" }),
                t._v(" "),
                e("Misc", { attrs: { items: t.page.misc } }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "13f485d1",
          null
        );
      e.default = o.exports;
      installComponents(o, {
        MediaMenu: a(586).default,
        LazySimple: a(275).default,
        Hero: a(590).default,
        LazyPicture: a(573).default,
        Ground: a(587).default,
        Misc: a(588).default,
      });
    },
  },
]);
