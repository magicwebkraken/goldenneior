(window.webpackJsonp = window.webpackJsonp || []).push([
  [
    56, 13, 14, 19, 20, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37,
    44, 45, 46, 49,
  ],
  {
    572: function (t, e, s) {
      "use strict";
      s.r(e);
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
        a = s(16),
        r = Object(a.a)(
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
      installComponents(r, { Video: s(572).default });
    },
    573: function (t, e, s) {
      "use strict";
      s.r(e);
      s(51), s(124);
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
        a = s(16),
        r = Object(a.a)(
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
    574: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = s(66),
        a = s(7),
        r = s(27),
        l =
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
        n = s(109),
        o = s(67),
        c = {
          mixins: [n.a],
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
            return Object(a.a)(
              regeneratorRuntime.mark(function e() {
                var s, a, r, n;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.$nextTick();
                      case 2:
                        if (
                          ((t.name = "bubble_bubble"),
                          (a = t.name),
                          (r =
                            null ===
                              (s = t.$rive.files.find(function (t) {
                                return t.name === a;
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
                        (n = e.sent),
                          (r = new Uint8Array(n)),
                          (r = Object(i.a)(r)),
                          t.$rive.files.push({ name: a, file: r });
                      case 14:
                        (t.r = new o.Rive({
                          buffer: r,
                          canvas: t.$el,
                          artboard: a,
                          stateMachines: a,
                          autoplay: !1,
                          onLoad: function () {
                            t.resize(),
                              t.r.setTextRunValue("txt_bubble", t.text),
                              t.instant
                                ? t.r.play()
                                : (t.st = l.a
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
    576: function (t, e, s) {
      var i = s(583);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, s(76).default)("71b84d90", i, !0, { sourceMap: !1 });
    },
    577: function (t, e, s) {
      "use strict";
      var i = s(1),
        a = s(278),
        r = s(152);
      i({ target: "Array", proto: !0 }, { fill: a }), r("fill");
    },
    578: function (t, e, s) {
      "use strict";
      s.r(e);
      s(577), s(85);
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
        a = s(16),
        r = Object(a.a)(
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
        Video: s(572).default,
        LazyPicture: s(573).default,
      });
    },
    579: function (t, e, s) {
      "use strict";
      s.r(e);
      s(277);
      var i = s(7),
        a = (s(38), s(14), s(99), s(85), s(13)),
        r = s(125),
        l = s.n(r),
        n = {
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
                        (t.split = new l.a(t.$refs.title, {
                          type: "lines, words",
                          linesClass: "title-line-wrapped",
                          wordsClass: "relative z-3",
                        })),
                          (t.st = a.a
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
          n,
          function () {
            var t,
              e,
              s,
              i = this,
              a = i._self._c;
            return a(
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
                a(
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
                    a(
                      "div",
                      {
                        staticClass: "frame overflow-hidden h-scale relative",
                        class: i.comics
                          ? "--comics bg-green media-contain"
                          : "media-fill h-scale",
                      },
                      [
                        a("div", { staticClass: "pt-[70%] s:pt-[100%]" }),
                        i._v(" "),
                        a("Media", { attrs: { item: i.item, fill: !0 } }),
                      ],
                      1
                    ),
                    i._v(" "),
                    a(
                      "div",
                      {
                        staticClass:
                          "relative frame flex flex-col items-start -mt-5 bg-gradient z-2",
                      },
                      [
                        a(
                          "div",
                          {
                            staticClass:
                              "absolute bottom-[calc(100%-13rem)] left-0 w-full flex flex-col items-start justify-end py-50 px-20 s:p-50 overflow-hidden",
                          },
                          [
                            i.item.tag
                              ? a(
                                  "div",
                                  {
                                    staticClass:
                                      "relative w-150 s:w-250 h-125 s:h-200 z-3",
                                  },
                                  [
                                    a("RiveBubble", {
                                      attrs: { text: i.item.tag },
                                    }),
                                  ],
                                  1
                                )
                              : i._e(),
                            i._v(" "),
                            a("h2", {
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
                        a(
                          "div",
                          { staticClass: "pt-100 pb-20 s:pb-40 px-20 s:px-40" },
                          [
                            i.item.text
                              ? a("p", {
                                  staticClass: "s:max-w-[55rem]",
                                  domProps: {
                                    textContent: i._s(i.$sanitize(i.item.text)),
                                  },
                                })
                              : i._e(),
                            i._v(" "),
                            a("BaseButton", {
                              staticClass: "mt-30",
                              attrs: {
                                label:
                                  (null === (s = i.item.link) || void 0 === s
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
    582: function (t, e, s) {
      "use strict";
      s(576);
    },
    583: function (t, e, s) {
      var i = s(75)(function (t) {
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
    584: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = s(66),
        a = s(7),
        r = s(27),
        l =
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
        n = s(109),
        o = s(67),
        c = {
          mixins: [n.a],
          props: Object(r.a)(
            {
              delay: { type: Boolean, required: !1, default: !0 },
              text: { type: String, required: !1, default: "" },
              lazy: { type: Boolean, required: !1, default: !1 },
              dpr: { type: Number, required: !1, default: 1.5 },
              instant: { type: Boolean, required: !1, default: !1 },
            },
            "delay",
            { type: Number, required: !1, default: 0 }
          ),
          mounted: function () {
            var t = this;
            return Object(a.a)(
              regeneratorRuntime.mark(function e() {
                var s, a, r, n;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.$nextTick();
                      case 2:
                        if (
                          ((a = "bubble_star"),
                          (r =
                            null ===
                              (s = t.$rive.files.find(function (t) {
                                return t.name === a;
                              })) || void 0 === s
                              ? void 0
                              : s.file))
                        ) {
                          e.next = 13;
                          break;
                        }
                        return (
                          (e.next = 7), fetch(new Request("/riv/bubbles.riv"))
                        );
                      case 7:
                        return (e.next = 9), e.sent.arrayBuffer();
                      case 9:
                        (n = e.sent),
                          (r = new Uint8Array(n)),
                          (r = Object(i.a)(r)),
                          t.$rive.files.push({ name: a, file: r });
                      case 13:
                        (t.r = new o.Rive({
                          buffer: r,
                          canvas: t.$el,
                          artboard: a,
                          stateMachines: a,
                          autoplay: !1,
                          onLoad: function () {
                            t.resize(),
                              t.r.setTextRunValue("txt_star-bubble", t.text),
                              t.instant
                                ? l.a.delayedCall(t.delay, function () {
                                    return t.r.play();
                                  })
                                : (t.st = l.a
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
                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
        },
        u = s(16),
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
    585: function (t, e, s) {
      "use strict";
      var i,
        a,
        r = s(7),
        l = (s(33), s(2), s(126), s(38), s(13)),
        n = s(31),
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
                  e = Object(n.b)(".js-s-chars", this.$el);
                e.length &&
                  e.forEach(function (e) {
                    var s = new c.a(e, {
                      type: "words, chars",
                      wordsClass: "c-fix-p whitespace-nowrap",
                      charsClass: "c-fix",
                    });
                    t.a.push(
                      l.a.fromTo(
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
                  (e = Object(n.b)(".js-s-chars-up", this.$el)).length &&
                    e.forEach(function (e) {
                      var s = new c.a(e, {
                        type: "words, chars",
                        wordsClass: "c-fix-p whitespace-nowrap",
                        charsClass: "c-fix",
                      });
                      t.a.push(
                        l.a.fromTo(
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
                  (e = Object(n.b)(".js-s-lines", this.$el)).length &&
                    e.forEach(function (e) {
                      var s = new c.a(e, { type: "lines" });
                      t.a.push(
                        l.a.fromTo(
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
            var s,
              r = this;
            window.scrollTo(0, 0), e(), this.$nuxt.$emit("enter");
            var o = Object(n.a)(".js-t-title", t),
              u = Object(n.a)(".js-t-subtitle", t),
              d = Object(n.b)(".js-t-pop-up", t),
              f = Object(n.b)(".js-t-up", t);
            if (
              (null === (s = i) || void 0 === s || s.kill(),
              (i = l.a
                .timeline({
                  paused: !0,
                  defaults: { duration: 1.5, ease: "expo" },
                  onComplete: function () {
                    a = !1;
                  },
                })
                .add(function () {
                  return r.$nuxt.$emit("enter-content");
                }, 2)),
              o)
            ) {
              var m = new c.a(o, { type: "words, chars", charsClass: "c-fix" });
              i.fromTo(
                m.chars,
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
              (f.length > 0 &&
                i.fromTo(
                  f,
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
                  return Object(n.c)(t).top < h;
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
            if (!a) {
              a = !0;
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
    587: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = {
          data: function () {
            return { loaded: !1 };
          },
        },
        a = (s(582), s(16)),
        r = Object(a.a)(
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
    588: function (t, e, s) {
      "use strict";
      s.r(e);
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
        a = s(16),
        r = Object(a.a)(
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
      installComponents(r, { CardMisc: s(579).default });
    },
    589: function (t, e, s) {
      var i = s(596);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, s(76).default)("5c4b6011", i, !0, { sourceMap: !1 });
    },
    591: function (t, e, s) {
      "use strict";
      var i = s(7),
        a = (s(38), s(23), s(2), s(85), s(17), s(13)),
        r = s(592),
        l = s.n(r),
        n = s(31);
      e.a = {
        data: function () {
          return {
            on: 0,
            cancelX: 0,
            cancelY: 0,
            t: 0,
            tc: 0,
            dx: 0,
            speed: 2,
            offset: 0,
            active: !1,
            total: 0,
            max: 0,
            so: 0,
            idx: 0,
          };
        },
        computed: {
          hasMouse: function () {
            return this.$store.state.app.features.hasMouse;
          },
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
                      return (e.next = 4), t.$nextTick();
                    case 4:
                      (t.speed = t.hasMouse ? 2 : 3.5),
                        t.bindEvents(),
                        t.resize(),
                        t.small && t.loop();
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )();
        },
        beforeDestroy: function () {
          this.unbindEvents(), (this.cache = null);
        },
        methods: {
          bindEvents: function () {
            (this.e = {
              move: this.hasMouse ? "mousemove" : "touchmove",
              down: this.hasMouse ? "mousedown" : "touchstart",
              up: this.hasMouse ? "mouseup" : "touchend",
            }),
              window.addEventListener(this.e.up, this.up),
              this.$refs.carousel.addEventListener(this.e.down, this.down),
              this.$refs.carousel.addEventListener(this.e.move, this.move),
              this.$nuxt.$on("resize", this.resize),
              this.$nuxt.$on("tick", this.tick);
          },
          unbindEvents: function () {
            window.removeEventListener(this.e.up, this.up),
              this.$refs.carousel.removeEventListener(this.e.down, this.down),
              this.$refs.carousel.removeEventListener(this.e.move, this.move),
              this.$nuxt.$off("resize", this.resize),
              this.$nuxt.$off("tick", this.tick);
          },
          resize: function () {
            var t,
              e = this;
            (this.resizing = !0),
              (this.total =
                (null === (t = this.$refs.slide) || void 0 === t
                  ? void 0
                  : t.length) - 1);
            var s = this.total,
              i = Object(n.c)(this.$refs.carousel).left;
            (this.$progress = this.$refs.progress),
              (this.snaps = []),
              this.cache
                ? this.cache.forEach(function (t, a) {
                    t.xSet(0);
                    var r = Object(n.c)(t.el),
                      l = r.left,
                      o = r.right,
                      c = r.width;
                    (t.start = l - e.$r.ww),
                      (t.end = o),
                      (t.out = !0),
                      (t.width = c),
                      e.snaps.push(l - i),
                      a === s && e.calcMax(t.el, o, i);
                  })
                : ((this.elems = []),
                  (this.cache = this.$refs.slide.map(function (t, r) {
                    var l = t.$el;
                    l.style.transform = "none";
                    var o = Object(n.c)(l),
                      c = o.left,
                      u = o.right,
                      d = o.width,
                      f = c - e.$r.ww,
                      m = u,
                      p = a.a.quickSetter(l, "x", "px");
                    return (
                      e.snaps.push(c - i),
                      r === s && e.calcMax(l, u, i),
                      { el: l, xSet: p, start: f, end: m, width: d, out: !0 }
                    );
                  }))),
              this.transform(),
              this.$nextTick(function () {
                e.$nuxt.$emit("draggable-resize"), (e.resizing = !1);
              });
          },
          calcMax: function (t, e, s) {
            (this.margin = parseInt(
              getComputedStyle(t).getPropertyValue("margin-right")
            )),
              (this.max = Math.max(0, e + this.margin - s));
          },
          pos: function (t) {
            return {
              x: t.changedTouches ? t.changedTouches[0].clientX : t.clientX,
              y: t.changedTouches ? t.changedTouches[0].clientY : t.clientY,
            };
          },
          down: function (t) {
            var e = this.pos(t),
              s = e.x,
              i = e.y;
            (this.active = !0),
              (this.cx = s),
              (this.cy = i),
              (this.dx = s),
              (this.on = this.t + s * this.speed);
          },
          move: function (t) {
            if (this.active) {
              var e = this.pos(t),
                s = e.x,
                i = e.y;
              Math.abs(s - this.cx) > Math.abs(i - this.cy) &&
                t.cancelable &&
                (t.preventDefault(), t.stopPropagation()),
                (this.t = this.on - s * this.speed);
            }
          },
          up: function (t) {
            if (this.active) {
              this.active = !1;
              var e = this.pos(t).x;
              if (Math.abs(e - this.dx) < 10) {
                var s = t.target.closest("[data-url]");
                s && this.$router.push(s.dataset.url);
              } else this.snap();
              this.small && this.loop();
            }
          },
          next: function () {
            if (this.cache) {
              var t = this.cache[this.idx];
              if (t) {
                var e = t.width;
                (this.t += e + this.margin),
                  (this.idx = a.a.utils.wrap(0, this.total + 1, this.idx + 1));
              }
            }
          },
          previous: function () {
            if (this.cache) {
              var t = this.cache[this.idx];
              if (t) {
                var e = t.width;
                (this.t -= e + this.margin),
                  (this.idx = a.a.utils.wrap(0, this.total + 1, this.idx - 1));
              }
            }
          },
          snap: function () {
            var t = a.a.utils.wrap(0, this.max, this.t),
              e = a.a.utils.snap(this.snaps, t),
              s = e - t;
            (this.t += s), (this.idx = this.snaps.indexOf(e));
          },
          loop: function () {
            var t,
              e = this;
            null === (t = this.d) || void 0 === t || t.kill(),
              this.small &&
                (this.d = a.a.delayedCall(5, function () {
                  e.next(), e.loop();
                }));
          },
          tick: function (t) {
            var e = t.ratio;
            (this.tc = l()(this.tc, this.t, 0.1 * e)),
              (this.tc = Math.round(100 * this.tc) / 100),
              Math.abs(this.t - this.tc) <= 0.1 || this.transform();
          },
          transform: function () {
            var t,
              e = this;
            null === (t = this.cache) ||
              void 0 === t ||
              t.forEach(function (t) {
                var s = t.start,
                  i = t.end,
                  r = t.xSet,
                  l = a.a.utils.wrap(-(e.max - i), i, e.tc);
                e.visible(s, i, l) || e.resizing
                  ? (t.out && (t.out = !1), r(-l))
                  : t.out || ((t.out = !0), r(-l));
              });
          },
          visible: function (t, e, s) {
            return s > t && s < e;
          },
        },
      };
    },
    592: function (t, e, s) {
      const i = s(593);
      t.exports = function (t, e, s, a, r = 60) {
        if (void 0 === a) return i(t, e, s);
        const l = a / (1 / r),
          n = 1 - s;
        return i(t, e, 1 - Math.pow(n, l));
      };
    },
    593: function (t, e) {
      t.exports = function (t, e, s) {
        return t * (1 - s) + e * s;
      };
    },
    594: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = s(7),
        a = (s(38), s(124), s(85), s(13)),
        r = s(110),
        l = s(31),
        n = {
          props: { m: { type: Number, default: 10 } },
          data: function () {
            return { active: !1 };
          },
          computed: {
            size: function () {
              return this.$store.state.app.bounds.small ? 390 : 1800;
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
                        t.resize(),
                          t.$nuxt.$on("resize", t.resize),
                          (t.st = r.a.create({
                            trigger: t.$el,
                            onToggle: function (e) {
                              return (t.active = e.isActive);
                            },
                          }));
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          beforeDestroy: function () {
            var t;
            null === (t = this.st) || void 0 === t || t.kill(),
              this.$nuxt.$off("resize", this.resize);
          },
          methods: {
            resize: function () {
              var t = Object(l.a)(".js-marquee", this.$el),
                e = (Object(l.c)(t).width / this.size) * this.m;
              a.a.set(this.$el, { "--time": "".concat(e, "s") });
            },
          },
        },
        o = s(16),
        c = Object(o.a)(
          n,
          function () {
            var t = this;
            return (0, t._self._c)(
              "span",
              { class: t.active && "is-active" },
              [t._t("default")],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = c.exports;
    },
    595: function (t, e, s) {
      "use strict";
      s(589);
    },
    596: function (t, e, s) {
      var i = s(75)(function (t) {
        return t[1];
      });
      i.push([
        t.i,
        ".cs-image.--comics img{transform:rotate(-6deg) scale(1.15) translateX(10%) translateY(20%);transform-origin:bottom right}@media (min-width:650px){.cs-image.--comics img{transform:rotate(-6deg) translateX(10%) translateY(10%)}}@media (hover:hover) and (pointer:fine){.cs:hover .cs-image.--comics img{transform:rotate(0deg) translateX(0) translateY(10%)}}",
        "",
      ]),
        (i.locals = {}),
        (t.exports = i);
    },
    597: function (t, e, s) {
      "use strict";
      var i = s(1),
        a = s(280);
      i(
        { target: "String", proto: !0, forced: s(281)("big") },
        {
          big: function () {
            return a(this, "big", "", "");
          },
        }
      );
    },
    600: function (t, e, s) {
      "use strict";
      s.r(e);
      s(277), s(26);
      var i = {
          props: {
            item: { type: Object, default: function () {} },
            button: { type: Boolean, default: !0 },
            comics: { type: Boolean, default: !1 },
          },
          computed: {
            image: function () {
              var t, e;
              return (
                (null === (t = this.item) ||
                void 0 === t ||
                null === (t = t.featuredImage) ||
                void 0 === t
                  ? void 0
                  : t.thumbnail) ||
                (null === (e = this.item) ||
                void 0 === e ||
                null === (e = e.image) ||
                void 0 === e
                  ? void 0
                  : e.thumbnail) ||
                "/card-test-small.jpg"
              );
            },
          },
          methods: {
            truncate: function (t) {
              return t.length > 70 ? t.slice(0, 70) + "..." : t;
            },
          },
        },
        a = (s(595), s(16)),
        r = Object(a.a)(
          i,
          function () {
            var t,
              e,
              s = this,
              i = s._self._c;
            return i(
              "article",
              { staticClass: "cs relative flex" },
              [
                i(
                  "Link",
                  {
                    staticClass:
                      "flex flex-col w-full text-left relative h-trig",
                    attrs: {
                      to:
                        (null === (t = s.item.link) || void 0 === t
                          ? void 0
                          : t.to) || null,
                    },
                  },
                  [
                    i(
                      "LazySimple",
                      {
                        staticClass:
                          "cs-image relative rounded-[2rem] border-[.5rem] border-black overflow-hidden w-full",
                        class: s.comics
                          ? "--comics bg-green media-contain"
                          : "media-fill h-scale",
                        attrs: { image: s.image },
                      },
                      [i("div", { staticClass: "pt-[85%] s:pt-[110%]" })]
                    ),
                    s._v(" "),
                    i(
                      "div",
                      {
                        staticClass:
                          "relative flex-1 flex flex-col items-start justify-between bg-gradient-flipped rounded-[2rem] border-[.5rem] border-t-0 border-black px-20 s:px-30 pb-30",
                        class: s.item.tag || s.comics ? "pt-90" : "pt-30",
                      },
                      [
                        s.item.tag || s.comics
                          ? i(
                              "div",
                              {
                                staticClass:
                                  "absolute bottom-[calc(100%-8rem)] left-20 s:left-30 w-175 s:w-225 h-150 s:h-185 z-3",
                              },
                              [
                                i("RiveStarBubble", {
                                  attrs: {
                                    text: s.comics ? s.item.title : s.item.tag,
                                  },
                                }),
                              ],
                              1
                            )
                          : s._e(),
                        s._v(" "),
                        i("p", {
                          domProps: {
                            innerHTML: s._s(
                              s.$sanitize(
                                s.item.subtitle || s.truncate(s.item.text)
                              )
                            ),
                          },
                        }),
                        s._v(" "),
                        s.button
                          ? i("BaseButton", {
                              staticClass: "mt-20",
                              attrs: {
                                label: s.item.link.label || "Get started",
                              },
                            })
                          : i(
                              "div",
                              {
                                staticClass:
                                  "uline-double text-yellow h5 font-disp-2 mt-30",
                              },
                              [
                                s._v(
                                  s._s(
                                    (null === (e = s.item.link) || void 0 === e
                                      ? void 0
                                      : e.label) || "Learn more"
                                  )
                                ),
                              ]
                            ),
                      ],
                      1
                    ),
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
      e.default = r.exports;
      installComponents(r, {
        LazySimple: s(275).default,
        RiveStarBubble: s(584).default,
        BaseButton: s(192).default,
        Link: s(276).default,
      });
    },
    602: function (t, e, s) {
      "use strict";
      s.r(e);
      s(277), s(26);
      var i = {
          props: { item: { type: Object, default: function () {} } },
          methods: {
            truncate: function (t) {
              return t.length > 125 ? t.slice(0, 125) + "..." : t;
            },
          },
        },
        a = s(16),
        r = Object(a.a)(
          i,
          function () {
            var t,
              e,
              s = this,
              i = s._self._c;
            return i("article", {}, [
              i(
                "div",
                { staticClass: "flex flex-col s:flex-row s:min-h-[24rem]" },
                [
                  s.item.image
                    ? i(
                        "LazySimple",
                        {
                          staticClass:
                            "s:min-w-[24rem] s:max-w-[24rem] frame radius-fix overflow-hidden relative media-fill",
                          attrs: { image: s.item.image.thumbnail },
                        },
                        [i("div", { staticClass: "pt-[100%] s:pt-0 s:hidden" })]
                      )
                    : s._e(),
                  s._v(" "),
                  i("div", { staticClass: "flex-1 relative -mt-5 s:mt-0" }, [
                    i(
                      "div",
                      {
                        staticClass:
                          "relative s:absolute s:top-0 s:bottom-0 s:right-0 s:-left-5 frame bg-gradient flex flex-col items-start justify-between p-30 pr-85",
                      },
                      [
                        i("p", {
                          domProps: {
                            textContent: s._s(
                              s.$sanitize(s.truncate(s.item.text))
                            ),
                          },
                        }),
                        
                      ],
                      1
                    ),
                  ]),
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
      installComponents(r, {
        LazySimple: s(275).default,
        Link: s(276).default,
      });
    },
    603: function (t, e, s) {
      var i = s(616);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, s(76).default)("5f22dbe5", i, !0, { sourceMap: !1 });
    },
    608: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = { props: { text: { type: String, required: !0 } } },
        a = s(16),
        r = Object(a.a)(
          i,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass:
                  "relative overflow-hidden py-30 s:py-90 pointer-events-none z-5",
              },
              [
                e(
                  "div",
                  { staticClass: "relative rotate-[-6deg]" },
                  [
                    e(
                      "MarqueeSimple",
                      t._l(3, function (s, i) {
                        return e(
                          "div",
                          {
                            key: i,
                            staticClass: "flex",
                            class: 1 === i && "text-right justify-end",
                          },
                          t._l(2, function (s, a) {
                            return e(
                              "div",
                              {
                                key: a,
                                staticClass:
                                  "flex h1 whitespace-nowrap marquee",
                                class: [
                                  0 === a && 0 === i && "js-marquee",
                                  1 === i && "--reversed",
                                ],
                              },
                              t._l(3, function (s, i) {
                                return e("div", {
                                  key: i,
                                  ref: "item",
                                  refInFor: !0,
                                  staticClass: "mr-50 whitespace-nowrap",
                                  domProps: {
                                    textContent: t._s(t.$sanitize(t.text)),
                                  },
                                });
                              }),
                              0
                            );
                          }),
                          0
                        );
                      }),
                      0
                    ),
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
      e.default = r.exports;
      installComponents(r, { MarqueeSimple: s(594).default });
    },
    610: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = s(7),
        a = (s(38), s(91), s(22), s(124), s(2), s(13)),
        r = s(109),
        l = s(67),
        n = s(413),
        o = {
          mixins: [r.a],
          props: { dpr: { type: Number, required: !1, default: 1.625 } },
          computed: {
            rives: function () {
              return this.$store.state.app.rives;
            },
            safari: function () {
              return this.$store.state.app.device.isSafari;
            },
            hasMouse: function () {
              return this.$store.state.app.features.hasMouse;
            },
          },
          mounted: function () {
            var t = this;
            return Object(i.a)(
              regeneratorRuntime.mark(function e() {
                var s, i, a, r, o, c, u, d;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.$nextTick();
                      case 2:
                        (s = t.safari ? l : n),
                          (i = s.Rive),
                          (a = s.Fit),
                          (r = s.Alignment),
                          (o = s.Layout),
                          (c = "hero"),
                          (u = t.$rive.instances.find(function (t) {
                            return t.name === c;
                          }))
                            ? ((t.r = u.r),
                              t.r.reset({
                                artboard: t.state,
                                stateMachines: t.state,
                              }),
                              t.$el.appendChild(t.r.canvas),
                              t.setup(),
                              t.resize())
                            : ((d =
                                document.createElement("canvas")).classList.add(
                                "absolute",
                                "top-0",
                                "left-0",
                                "w-full",
                                "h-full"
                              ),
                              t.$el.appendChild(d),
                              (t.r = new i({
                                src: "/riv/".concat(c, ".riv"),
                                canvas: d,
                                artboard: t.state,
                                stateMachines: t.state,
                                layout: new o({
                                  fit: a.Contain,
                                  alignment: r.TopCenter,
                                }),
                                autoplay: !1,
                                onLoad: function () {
                                  t.resize(),
                                    !t.clean &&
                                      t.$rive.instances.push({
                                        name: c,
                                        r: t.r,
                                      }),
                                    t.$nuxt.$emit("hero-loaded"),
                                    t.$store.commit("app/SET_HERO_LOADED", !0),
                                    t.setup();
                                },
                              }))),
                          t.init();
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          beforeDestroy: function () {
            (this.xSpeed = null), (this.xSet = null), (this.ySet = null);
          },
          methods: {
            setup: function () {
              (this.inputs = this.r.stateMachineInputs(this.state)),
                (this.scroll = this.inputs.find(function (t) {
                  return "scroll" === t.name;
                })),
                (this.speed = this.inputs.find(function (t) {
                  return "master-speed" === t.name;
                })),
                (this.xSpeed = a.a.utils.pipe(
                  a.a.utils.mapRange(0, this.$r.ww, 0, 100),
                  a.a.utils.clamp(0, 100),
                  a.a.quickTo(this.speed, "value", {
                    duration: 0.5,
                    ease: "power1",
                  })
                )),
                this.hasMouse &&
                  ((this.x = this.inputs.find(function (t) {
                    return "X_mouse" === t.name;
                  })),
                  (this.y = this.inputs.find(function (t) {
                    return "Y_mouse" === t.name;
                  })),
                  (this.xSet = a.a.utils.pipe(
                    a.a.utils.mapRange(0, this.$r.ww, 0, 100),
                    a.a.utils.clamp(0, 100),
                    a.a.quickTo(this.x, "value", {
                      duration: 0.5,
                      ease: "power1",
                    })
                  )),
                  (this.ySet = a.a.utils.pipe(
                    a.a.utils.mapRange(0, this.$r.wh, 0, 100),
                    a.a.utils.clamp(0, 100),
                    a.a.quickTo(this.y, "value", {
                      duration: 0.5,
                      ease: "power1",
                    })
                  )));
            },
          },
        },
        c = s(16),
        u = Object(c.a)(
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
      e.default = u.exports;
    },
    611: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = s(66),
        a =
          (s(51),
          s(85),
          {
            mixins: [s(591).a],
            props: {
              items: {
                type: Array,
                default: function () {
                  return [];
                },
              },
            },
          }),
        r = s(16),
        l = Object(r.a)(
          a,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              { staticClass: "overflow-hidden relative select-none z-2" },
              [
                e(
                  "div",
                  { staticClass: "site-max" },
                  [
                    e("div", { staticClass: "relative cursor-grab" }, [
                      e(
                        "div",
                        {
                          ref: "carousel",
                          staticClass: "flex w-full max-w-[70rem] mx-auto",
                        },
                        t._l(
                          [].concat(Object(i.a)(t.items), Object(i.a)(t.items)),
                          function (t, s) {
                            return e("CarouselSlideSmall", {
                              key: s,
                              ref: "slide",
                              refInFor: !0,
                              staticClass:
                                "mr-10 s:mr-45 min-w-[100%] max-w-[100%]",
                              attrs: { item: t },
                            });
                          }
                        ),
                        1
                      ),
                    ]),
                    t._v(" "),
                    e(
                      "div",
                      { staticClass: "hidden justify-center mt-30 s:mt-40" },
                      [
                        e(
                          "BaseButton",
                          {
                            attrs: { label: "Previous", circle: !0 },
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
                        e(
                          "client-only",
                          [
                            t.small
                              ? t._e()
                              : e("BaseButton", {
                                  staticClass: "relative z-2",
                                  attrs: {
                                    to: "/memes",
                                    label: "Coming soon",
                                  },
                                }),
                          ],
                          1
                        ),
                        t._v(" "),
                        e(
                          "BaseButton",
                          {
                            attrs: { label: "next", circle: !0 },
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
                                staticClass:
                                  "relative w-19 h-25 scale-x-[-1] z-3",
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
                    ),
                    t._v(" "),
                    e("client-only", [
                      t.small
                        ? e(
                            "div",
                            { staticClass: "flex justify-center mt-30" },
                            [
                              e("BaseButton", {
                                staticClass: "relative z-2",
                                attrs: {
                                  to: "/memes",
                                  label: "Coming soon",
                                },
                              }),
                            ],
                            1
                          )
                        : t._e(),
                    ]),
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
      e.default = l.exports;
      installComponents(l, {
        CarouselSlideSmall: s(602).default,
        BaseButton: s(192).default,
      });
    },
    615: function (t, e, s) {
      "use strict";
      s(603);
    },
    616: function (t, e, s) {
      var i = s(75)(function (t) {
        return t[1];
      });
      i.push([
        t.i,
        '.tile[data-v-64fb90bc]{--h1:52.7rem;--h2:41.3rem;--diff:-11.4rem;height:var(--h)}.tile figure[data-v-64fb90bc]{border-radius:2rem;overflow:hidden}.tile-g[data-v-64fb90bc]:before{background:radial-gradient(84.3% 84.3% at 50% 12.67%,rgba(15,15,28,0) 28.5%,rgba(15,15,28,.67) 74.11%,#0f0f1c 98%);content:"";height:110%;left:0;pointer-events:none;position:absolute;width:100%;z-index:5}.tile-g[data-v-64fb90bc]:first-child:before{top:0;transform:scaleY(-1)}.tile-g[data-v-64fb90bc]:last-child:before{bottom:0}.tile-r.--2[data-v-64fb90bc],.tile-r.--3[data-v-64fb90bc]{margin-top:-5.7rem}.--1 .tile[data-v-64fb90bc]:first-child{--h:var(--h1);grid-column:span 2/span 2}.--2 .tile[data-v-64fb90bc]:first-child{--h:var(--h2);grid-column:span 1/span 1}.--3 .tile[data-v-64fb90bc]:first-child{--h:var(--h1);grid-column:span 2/span 2}.--1 .tile[data-v-64fb90bc]:nth-child(2),.--1 .tile[data-v-64fb90bc]:nth-child(3),.--2 .tile[data-v-64fb90bc]:nth-child(2),.--3 .tile[data-v-64fb90bc]:nth-child(2){--h:var(--h2);grid-column:span 1/span 1}.--2 .tile[data-v-64fb90bc]:nth-child(3){--h:var(--h1);grid-column:span 2/span 2}.--3 .tile[data-v-64fb90bc]:nth-child(3){--h:var(--h2);grid-column:span 1/span 1}.--1 .tile[data-v-64fb90bc]:nth-child(4){--h:var(--h1);grid-column:span 2/span 2}.--2 .tile[data-v-64fb90bc]:nth-child(4){--h:var(--h2);grid-column:span 1/span 1}.--3 .tile[data-v-64fb90bc]:nth-child(4){--h:var(--h1);grid-column:span 2/span 2}.--2 .tile[data-v-64fb90bc]:nth-child(5){--h:var(--h2);grid-column:span 1/span 1}',
        "",
      ]),
        (i.locals = {}),
        (t.exports = i);
    },
    626: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = s(7),
        a = (s(38), s(85), s(13)),
        r = s(31),
        l = {
          props: {
            title: { type: String, default: "" },
            subtitle: { type: String, default: "" },
          },
          data: function () {
            return { speed: 0 };
          },
          computed: {
            hasMouse: function () {
              return this.$store.state.app.features.hasMouse;
            },
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
                        return (e.next = 4), t.$nextTick();
                      case 4:
                        if (((t.hero = t.$refs.hero), !t.small)) {
                          e.next = 7;
                          break;
                        }
                        return e.abrupt("return");
                      case 7:
                        (t.$target = Object(r.a)(".js-flip-target")),
                          (t.$grid = Object(r.a)(".js-grid")),
                          (t.$items = Object(r.b)(".js-scale")),
                          t.resize(),
                          t.$nuxt.$on("resize", t.resize);
                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          destroyed: function () {
            var t;
            this.$nuxt.$off("resize", this.resize),
              null === (t = this.st) || void 0 === t || t.kill();
          },
          methods: {
            resize: function () {
              var t,
                e = this;
              null === (t = this.st) || void 0 === t || t.revert();
              var s = this.$store.state.app.device.isSafari,
                i = Object(r.c)(this.$target),
                l = i.width / this.$r.ww,
                n = i.top + window.scrollY;
              (this.st = a.a
                .timeline({
                  scrollTrigger: {
                    trigger: this.$el,
                    endTrigger: this.$target,
                    start: "top top",
                    end: "center center",
                    scrub: !0,
                    onUpdate: function (t) {
                      e.hero.scroll && (e.hero.scroll.value = 100 * t.progress);
                    },
                  },
                })
                .fromTo(
                  this.$refs.flip,
                  { y: 0, scale: 1 },
                  { y: n, scale: l, force3D: !0, ease: "power1.inOut" }
                )),
                !s &&
                  this.st
                    .fromTo(
                      this.$grid,
                      { scale: 1.25 },
                      { scale: 1, ease: "power1.inOut" },
                      0
                    )
                    .fromTo(
                      this.$items,
                      { scale: 0.75 },
                      { scale: 1, ease: "power1.inOut" },
                      0
                    );
            },
            move: function (t) {
              var e,
                s,
                i,
                a,
                r,
                l,
                n = t.clientX,
                o = t.clientY;
              this.hero &&
                (null === (e = (s = this.hero).xSpeed) ||
                  void 0 === e ||
                  e.call(s, n),
                null === (i = (a = this.hero).xSet) ||
                  void 0 === i ||
                  i.call(a, n),
                null === (r = (l = this.hero).ySet) ||
                  void 0 === r ||
                  r.call(l, o));
            },
            down: function (t) {
              var e,
                s,
                i = t.clientX;
              this.hero &&
                (null === (e = (s = this.hero).xSpeed) ||
                  void 0 === e ||
                  e.call(s, i));
            },
          },
        },
        n = s(16),
        o = Object(n.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              t._g(
                { staticClass: "relative z-5 s:min-h-[100vh]" },
                t.hasMouse
                  ? {
                      mousemove: function (e) {
                        return t.move(e);
                      },
                    }
                  : {
                      pointerdown: function (e) {
                        return t.down(e);
                      },
                    }
              ),
              [
                e("div", { staticClass: "relative" }, [
                  e("div", { staticClass: "hidden s:block pt-[77.8%]" }),
                  t._v(" "),
                  e(
                    "div",
                    {
                      ref: "flip",
                      staticClass:
                        "relative s:absolute s:inset-0 origin-top bg-black overflow-hidden z-2",
                    },
                    [
                      e(
                        "Space",
                        {
                          staticClass:
                            "absolute top-0 s:top-[-37.5rem] left-0 w-full",
                          attrs: {
                            image: "/space/home/home-1.jpg",
                            "image-mobile": "/space/home/home-mobile-1.jpg",
                          },
                        },
                        [e("div", { staticClass: "pt-[150%] s:pt-[70%]" })]
                      ),
                      t._v(" "),
                      e(
                        "div",
                        {
                          staticClass:
                            "relative s:absolute s:inset-0 flex flex-col items-center pt-90 s:pt-120 pointer-events-none z-2",
                        },
                        [
                          e("h1", {
                            staticClass:
                              "h1 font-disp text-red text-center js-t-title js-i-title",
                            domProps: {
                              innerHTML: t._s(t.$sanitize(t.title, ["br"])),
                            },
                          }),
                          t._v(" "),
                          e("h2", {
                            staticClass:
                              "text-center b-large mt-10 js-t-up js-i-subtitle",
                            domProps: {
                              textContent: t._s(t.$sanitize(t.subtitle)),
                            },
                          }),
                          t._v(" "),
                          e("BaseButton", {
                            staticClass:
                              "mt-20 pointer-events-auto js-t-up js-i-up",
                            attrs: {
                              to: "https://app.uniswap.org/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                              label: "Buy $ELONEIRO",
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
                            "relative s:absolute s:inset-0 max-s:pt-[77.8%] -mt-70 s:mt-0 z-1",
                        },
                        [
                          e("RiveHomeHero", {
                            ref: "hero",
                            attrs: { clean: !1, state: "hero-nest" },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = o.exports;
      installComponents(o, {
        Space: s(279).default,
        BaseButton: s(192).default,
        RiveHomeHero: s(610).default,
      });
    },
    627: function (t, e, s) {
      "use strict";
      s.r(e);
      s(26), s(55), s(31);
      var i = {
          props: {
            grid: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          computed: {
            items1: function () {
              return this.grid.slice(0, 4);
            },
            items2: function () {
              var t = this.grid.slice(4, 9);
              return t.splice(2, 0, void 0), t;
            },
            items3: function () {
              return this.grid.slice(8, 13);
            },
          },
        },
        a = (s(615), s(16)),
        r = Object(a.a)(
          i,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "relative z-1" }, [
              e("div", { staticClass: "relative overflow-hidden" }, [
                t._m(0),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass:
                      "tiles relative flex flex-col gap-y-30 overflow-hidden js-grid",
                  },
                  [
                    e(
                      "div",
                      {
                        staticClass:
                          "tile-r --1 grid grid-cols-6 items-center -ml-180 w-[calc(100%+36rem)] gap-x-30",
                      },
                      t._l(t.items1, function (t, s) {
                        return e(
                          "div",
                          { key: s, staticClass: "relative tile" },
                          [
                            e("LazySimple", {
                              staticClass:
                                "absolute inset-[-1px] media-fill js-scale",
                              attrs: { image: t.url },
                            }),
                          ],
                          1
                        );
                      }),
                      0
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass:
                          "tile-r --2 grid grid-cols-6 items-center -ml-180 w-[calc(100%+36rem)] gap-x-30",
                      },
                      t._l(t.items2, function (s, i) {
                        return e(
                          "div",
                          {
                            key: i,
                            staticClass: "relative tile",
                            class: 2 === i && "js-ref",
                          },
                          [
                            s
                              ? e("LazySimple", {
                                  staticClass:
                                    "absolute inset-[-1px] media-fill js-scale",
                                  attrs: { image: s.url },
                                })
                              : t._e(),
                          ],
                          1
                        );
                      }),
                      0
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass:
                          "tile-r --3 grid grid-cols-6 items-center -ml-180 w-[calc(100%+36rem)] gap-x-30",
                      },
                      t._l(t.items3, function (t, s) {
                        return e(
                          "div",
                          { key: s, staticClass: "relative tile" },
                          [
                            e("LazySimple", {
                              staticClass:
                                "absolute inset-[-1px] media-fill js-scale",
                              attrs: { image: t.url },
                            }),
                          ],
                          1
                        );
                      }),
                      0
                    ),
                  ]
                ),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass:
                      "absolute inset-0 flex flex-col items-center justify-center",
                  },
                  [
                    e("div", {
                      ref: "target",
                      staticClass: "h-[52.7rem] w-[70rem] js-flip-target",
                    }),
                  ]
                ),
              ]),
            ]);
          },
          [
            function () {
              var t = this._self._c;
              return t(
                "div",
                {
                  staticClass:
                    "absolute inset-0 flex flex-col pointer-events-none",
                },
                [
                  t("div", {
                    staticClass: "tile-g relative flex-1 overflow-hidden",
                  }),
                  this._v(" "),
                  t("div", {
                    staticClass: "tile-g relative flex-1 overflow-hidden",
                  }),
                ]
              );
            },
          ],
          !1,
          null,
          "64fb90bc",
          null
        );
      e.default = r.exports;
      installComponents(r, { LazySimple: s(275).default });
    },
    628: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = {
          props: { item: { type: Object, default: function () {} } },
          computed: {
            global: function () {
              return this.$store.state.app.global;
            },
          },
        },
        a = s(16),
        r = Object(a.a)(
          i,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              { staticClass: "relative" },
              [
                e(
                  "Parallax",
                  { staticClass: "absolute top-0 left-0 w-full" },
                  [
                    e(
                      "Space",
                      {
                        staticClass: "relative w-full",
                        attrs: {
                          image: "/space/home/home-2.jpg",
                          "image-mobile": "/space/home/home-mobile-2.jpg",
                        },
                      },
                      [e("div", { staticClass: "pt-[150%] s:pt-[70%]" })]
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "site-max flex flex-col items-start" },
                  [
                    e(
                      "div",
                      { staticClass: "relative w-190 s:w-250 h-150 s:h-200" },
                      [e("RiveStarBubble", { attrs: { text: t.item.bubble } })],
                      1
                    ),
                    t._v(" "),
                    e("h2", {
                      staticClass:
                        "h1 rotate-[-6deg] s:-mt-30 pr-30 js-s-chars",
                      domProps: {
                        innerHTML: t._s(t.$sanitize(t.item.title, ["br"])),
                      },
                    }),
                  ]
                ),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "relative" },
                  [
                    e(
                      "div",
                      {
                        staticClass:
                          "relative s:absolute s:left-0 s:-top-100 w-full max-w-[85rem] z-2",
                      },
                      [
                        e("div", { staticClass: "pt-[137.8%]" }),
                        t._v(" "),
                        e("div", { staticClass: "absolute top-0 left-0 w-full h-full pointer-events-none has-hover:pointer-events-auto will-change-transform" },
                          [
                            e("img", { attrs: {src: "https://i.ibb.co/h7tbbnR/light.gif"} }),
                          ]
                        ),
                        // e("RiveBase", {
                        //   staticClass: "will-change-transform",
                        //   attrs: {
                        //     file: "doge-surfer",
                        //     name: "doge-surfer",
                        //     delay: !0,
                        //     gl: !0,
                        //     clean: !1,
                        //   },
                        // }),
                      ],
                      1
                    ),
                    t._v(" "),
                    e("div", { staticClass: "site-max" }, [
                      e(
                        "div",
                        {
                          staticClass:
                            "flex flex-col items-start w-full max-w-[65rem] s:ml-auto",
                        },
                        [
                          e("h3", {
                            staticClass: "h3 js-s-lines",
                            domProps: {
                              textContent: t._s(t.$sanitize(t.item.subtitle)),
                            },
                          }),
                          t._v(" "),
                          e("div", {
                            staticClass: "txt b-large mt-10",
                            domProps: {
                              innerHTML: t._s(t.$sanitize(t.item.text)),
                            },
                          }),
                          t._v(" "),
                          e(
                            "div",
                            {
                              staticClass:
                                "flex flex-col s:flex-row gap-x-35 gap-y-20 mt-30",
                            },
                            [
                              e(
                                "div",
                                { staticClass: "flex" },
                                [
                                  e("BaseButton", {
                                    attrs: {
                                      to: "https://x.com/ElonNeiro",
                                      label: "Follow",
                                    },
                                  }),
                                  t._v(" "),
                                  e(
                                    "BaseButton",
                                    {
                                      attrs: {
                                        to: "https://x.com/ElonNeiro",
                                        label: "Twitter",
                                        circle: !0,
                                      },
                                    },
                                    [
                                      e(
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
                                ],
                                1
                              ),
                              t._v(" "),
                              e(
                                "div",
                                { staticClass: "flex" },
                                [
                                  e("BaseButton", {
                                    attrs: {
                                      to: "https://t.me/elonneiro",
                                      label: "Follow",
                                    },
                                  }),
                                  t._v(" "),
                                  e(
                                    "BaseButton",
                                    {
                                      attrs: {
                                        to: "https://t.me/elonneiro",
                                        label: "Telegram",
                                        circle: !0,
                                      },
                                    },
                                    [
                                      e(
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
                                          e("path", {
                                            attrs: {
                                              d: "M0.698018 15.0177C4.51054 12.9219 8.78709 11.1507 12.7608 9.3795C19.6234 6.49288 26.4859 3.63458 33.4574 0.991956C34.819 0.530097 37.2416 0.0922025 37.4877 2.10739C37.3527 4.93955 36.8342 7.77171 36.4529 10.5755C35.527 16.7845 34.4377 22.9673 33.3746 29.148C33.0195 31.2176 30.4335 32.2808 28.7734 30.9453C24.7975 28.2765 20.8216 25.6078 16.9001 22.8845C15.6213 21.5774 16.8173 19.6994 17.9633 18.7714C21.2312 15.558 24.6886 12.8064 27.7952 9.4296C28.6405 7.41442 26.1613 9.10282 25.3443 9.61914C20.8782 12.6975 16.5211 15.9654 11.7826 18.6886C9.3862 20.0219 6.55405 18.8781 4.15761 18.1439C2.00517 17.2725 -1.15378 16.3749 0.698018 15.0133V15.0177Z",
                                              fill: "#EBD7A5",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]),
                    t._v(" "),
                    e("Ground", { staticClass: "mt-50 s:mt-250" }),
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
      e.default = r.exports;
      installComponents(r, {
        Space: s(279).default,
        Parallax: s(411).default,
        RiveStarBubble: s(584).default,
        RiveBase: s(412).default,
        BaseButton: s(192).default,
        Ground: s(587).default,
      });
    },
    629: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = s(7),
        a =
          (s(38),
          s(414),
          {
            props: { item: { type: Object, default: function () {} } },
            computed: {
              coin: function () {
                var t,
                  e,
                  s,
                  i = this.$store.state.app.coin;
                if (i)
                  return [
                    {
                      title: "LP",
                      text: "Burnt"
                    },
                    { title: "Tax", text: "0" },
                    {
                      title: "Market Cap",
                      text: "420.69 B",
                    },
                    {
                      title: "Ownership",
                      text: "Renounced"
                    },
                  ];
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
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          }),
        r = s(16),
        l = Object(r.a)(
          a,
          function () {
            var t = this,
              e = t._self._c;
            return e("section", [
              e(
                "div",
                {
                  staticClass:
                    "site-max flex flex-col items-center text-center",
                },
                [
                  e("h2", { staticClass: "h1 js-s-chars" }, [
                    t._v(t._s(t.item.title)),
                  ]),
                  t._v(" "),
                  e(
                    "h3",
                    { staticClass: "h3 s:max-w-[95rem] mt-10 js-s-lines" },
                    [t._v(t._s(t.item.subtitle))]
                  ),
                  t._v(" "),
                  e(
                    "div",
                    {
                      staticClass:
                        "flex flex-col s:flex-row s:items-start w-full mt-40 gap-x-120",
                    },
                    [
                      e(
                        "div",
                        {
                          staticClass:
                            "relative flex flex-col items-center w-full max-w-[42.5rem] bg-gradient rounded-3xl pb-50 px-25 overflow-hidden",
                        },
                        [
                          e(
                            "div",
                            {
                              staticClass:
                                "relative w-full max-w-[30rem] relative z-2",
                            },
                            [
                              e("div", { staticClass: "pt-[125%]" }),
                              t._v(" "),
                              e("RiveBase", {
                                attrs: { file: "chip", name: "chip" },
                              }),
                            ],
                            1
                          ),
                          t._v(" "),
                          e(
                            "p",
                            {
                              staticClass:
                                "b-large -mt-20 w-full max-w-[35rem] relative z-2",
                            },
                            [t._v(t._s(t.item.subtitle))]
                          ),
                          
                          t._v(" "),
                          e("LazySimple", {
                            staticClass:
                              "absolute bottom-0 left-0 w-full h-auto",
                            attrs: { image: "/mars-ground-small.png" },
                          }),
                        ],
                        1
                      ),
                      t._v(" "),
                      e(
                        "div",
                        {
                          staticClass:
                            "flex-1 grid grid-cols-1 s:grid-cols-2 gap-x-120 gap-y-50 mt-60 s:mt-0",
                        },
                        t._l(t.coin, function (s, i) {
                          return e(
                            "div",
                            { key: i, staticClass: "col-span-1" },
                            [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "relative flex flex-col items-start",
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "relative h-120 s:h-165 w-full bg-green overflow-hidden rounded-[7rem] flex items-center justify-center text-black",
                                    },
                                    [
                                      e("div", {
                                        staticClass:
                                          "absolute top-10 left-10 bottom-10 right-10 bg-sand rounded-[7rem] z-1",
                                      }),
                                      t._v(" "),
                                      e("div", {
                                        staticClass:
                                          "absolute top-20 left-20 h-full w-full bg-green rounded-[7rem] z-2",
                                      }),
                                      t._v(" "),
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "h3 max-s:!text-37 relative mt-10 z-3",
                                        },
                                        [t._v(t._s(s.text))]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "h3 text-green relative mt-20",
                                    },
                                    [
                                      t._v(
                                        "\n                            " +
                                          t._s(s.title) +
                                          "\n                            "
                                      ),
                                      e(
                                        "svg",
                                        {
                                          staticClass:
                                            "absolute top-full left-0 w-full h-9",
                                          attrs: {
                                            viewBox: "0 0 262 9",
                                            preserveAspectRatio: "none",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                          },
                                        },
                                        [
                                          e("path", {
                                            staticClass: "fill-current",
                                            attrs: {
                                              d: "M96.5105 8.70226C48.006 8.50401 0.459721 7.41768 0.889699 5.58241C1.19165 3.8426 68.9049 1.75333 127.042 1.16324C193.01 0.496046 257.772 1.00945 261.555 3.0565C266.455 5.74604 183.132 7.1756 96.5105 8.70226Z",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          );
                        }),
                        0
                      ),
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
      e.default = l.exports;
      installComponents(l, {
        RiveBase: s(412).default,
        BaseButton: s(192).default,
        LazySimple: s(275).default,
      });
    },
    630: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = {
          computed: {
            items: function () {
              return this.$store.state.app.partners;
            },
          },
        },
        a = s(16),
        r = Object(a.a)(
          i,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass:
                  "overflow-hidden py-30 s:py-90 pointer-events-none relative z-5",
              },
              [
                e(
                  "div",
                  { staticClass: "relative rotate-[-6deg] w-full" },
                  [
                    t._m(0),
                    t._v(" "),
                    e(
                      "MarqueeSimple",
                      { attrs: { m: 20 } },
                      t._l(2, function (s, i) {
                        return e(
                          "div",
                          {
                            key: i,
                            staticClass: "flex",
                            class: 1 === i && "text-right justify-end",
                          },
                          t._l(2, function (s, a) {
                            return e(
                              "div",
                              {
                                key: a,
                                staticClass: "flex whitespace-nowrap marquee",
                                class: [
                                  0 === a && 0 === i && "js-marquee",
                                  1 === i && "--reversed",
                                ],
                              },
                              t._l(t.items, function (t, s) {
                                var i;
                                return e(
                                  "div",
                                  {
                                    key: s,
                                    ref: "item",
                                    refInFor: !0,
                                    staticClass: "mt-40 s:mt-85",
                                  },
                                  [
                                    e("LazySimple", {
                                      staticClass:
                                        "relative h-30 s:h-50 w-120 s:w-160 flex items-center mr-80 s:mr-120 media-contain",
                                      attrs: {
                                        image:
                                          null === (i = t.logo) || void 0 === i
                                            ? void 0
                                            : i.url,
                                      },
                                    }),
                                  ],
                                  1
                                );
                              }),
                              0
                            );
                          }),
                          0
                        );
                      }),
                      0
                    ),
                  ],
                  1
                ),
              ]
            );
          },
         
          !1,
          null,
          null,
          null
        );
      e.default = r.exports;
      installComponents(r, {
        LazySimple: s(275).default,
        MarqueeSimple: s(594).default,
      });
    },
    631: function (t, e, s) {
      "use strict";
      s.r(e);
      s(597), s(85);
      var i = {
          props: {
            big: {
              type: Array,
              default: function () {
                return [];
              },
            },
            small: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          computed: {
            mobile: function () {
              return this.$store.state.app.bounds.small;
            },
            componentType: function () {
              return this.mobile ? "card-misc" : "card-big";
            },
          },
        },
        a = s(16),
        r = Object(a.a)(
          i,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              { staticClass: "relative z-3" },
              [
                e(
                  "Parallax",
                  {
                    staticClass:
                      "absolute -top-300 s:top-[-60rem] left-0 w-full",
                  },
                  [
                    e(
                      "Space",
                      {
                        staticClass: "relative",
                        attrs: {
                          image: "/space/home/home-3.jpg",
                          "image-mobile": "/space/home/home-mobile-3.jpg",
                        },
                      },
                      [e("div", { staticClass: "pt-[350%] s:pt-[140%]" })]
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "overflow-hidden relative z-2" },
                  [
                    e(
                      "div",
                      { staticClass: "site-max flex flex-col gap-y-60 z-2" },
                      t._l(t.big || [], function (s) {
                        return e(t.componentType, {
                          key: s.id,
                          tag: "component",
                          staticClass: "w-full",
                          attrs: { item: s },
                        });
                      }),
                      1
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass:
                          "site-max grid grid-cols-1 s:grid-cols-3 gap-y-20 s:gap-y-60 gap-x-90 relative mt-20 s:mt-60 z-2",
                      },
                      t._l(t.small || [], function (t) {
                        return e("CardSmallSimple", {
                          key: t.id,
                          staticClass: "col-span-1",
                          attrs: { item: t },
                        });
                      }),
                      1
                    ),
                    t._v(" "),
                    e(
                      "LazySimple",
                      {
                        staticClass:
                          "relative media-fit -mt-50 s:-mt-100 -mx-100 s:mx-0 z-1",
                        attrs: { image: "/mars-ground-bottom.png" },
                      },
                      [e("div", { staticClass: "pt-[23.75%]" })]
                    ),
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
      e.default = r.exports;
      installComponents(r, {
        Space: s(279).default,
        Parallax: s(411).default,
        CardSmallSimple: s(600).default,
        LazySimple: s(275).default,
      });
    },
    632: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = { props: { item: { type: Object, default: function () {} } } },
        a = s(16),
        r = Object(a.a)(
          i,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              { staticClass: "relative z-1" },
              [
                e(
                  "Parallax",
                  { staticClass: "absolute -top-150 s:-top-300 left-0 w-full" },
                  [
                    e(
                      "Space",
                      {
                        staticClass: "relative",
                        attrs: {
                          image: "/space/home/home-4.jpg",
                          "image-mobile": "/space/home/home-mobile-4.jpg",
                        },
                      },
                      [e("div", { staticClass: "pt-[150%] s:pt-[70%]" })]
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass:
                      "site-max flex flex-col items-center text-center relative z-2",
                  },
                  [
                    e("h2", { staticClass: "h1 js-s-chars" }, [
                      t._v(t._s(t.item.title)),
                    ]),
                    t._v(" "),
                    e(
                      "h3",
                      { staticClass: "h3 s:max-w-[95rem] mt-10 js-s-lines" },
                      [t._v(t._s(t.item.subtitle))]
                    ),
                  ]
                ),
                t._v(" "),
                e("div", { staticClass: "overflow-hidden -mt-90 s:-mt-250" }, [
                  e(
                    "div",
                    { staticClass: "relative -mx-165 s:mx-0" },
                    [
                      e("div", { staticClass: "pt-[57.3%]" }),
                      t._v(" "),
                      e("RiveBase", {
                        attrs: {
                          file: "console",
                          name: "console",
                          clean: !1,
                          gl: !0,
                          dpr: 1.5,
                        },
                      }),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                e("CarouselSmall", {
                  staticClass: "overflow-hidden relative mt-20 s:mt-0 z-2",
                  attrs: { items: t.item.items },
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
      e.default = r.exports;
      installComponents(r, {
        Space: s(279).default,
        Parallax: s(411).default,
        RiveBase: s(412).default,
        CarouselSmall: s(611).default,
      });
    },
    633: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = s(7),
        a = (s(38), s(13)),
        r = {
          data: function () {
            return { active: !0 };
          },
          computed: {
            item: function () {
              return this.$store.state.app.global;
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
                        (t.tl = a.a.timeline({ paused: !0 })),
                          t.$nuxt.$on("scroll", t.scroll),
                          t.$nuxt.$on("enter-content", t.in);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          beforeDestroy: function () {
            var t;
            this.$nuxt.$off("scroll", this.scroll),
              this.$nuxt.$off("enter-content", this.in),
              null === (t = this.tl) || void 0 === t || t.kill();
          },
          methods: {
            scroll: function (t) {
              var e = t.y;
              e > 100 && this.active
                ? ((this.active = !1), this.out())
                : e <= 100 && !this.active && ((this.active = !0), this.in());
            },
            in: function () {
              var t = this;
              this.tl
                .clear()
                .set(this.$el, { autoAlpha: 1 })
                .fromTo(
                  this.$el,
                  { xPercent: 100 },
                  { xPercent: 0, duration: 1.125, ease: "expo" }
                )
                .fromTo(
                  this.$refs.content,
                  { xPercent: 25 },
                  { xPercent: 0, duration: 1.25, ease: "expo" },
                  0
                )
                .add(function () {
                  var e;
                  return null === (e = t.$refs.bubble) || void 0 === e
                    ? void 0
                    : e.restart();
                }, 0)
                .restart();
            },
            out: function () {
              this.tl
                .clear()
                .to(this.$el, {
                  xPercent: 100,
                  duration: 0.5,
                  ease: "power2.inOut",
                })
                .set(this.$el, { autoAlpha: 0 })
                .restart();
            },
          },
        },
        l = s(16),
        n = Object(l.a)(
          r,
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
      installComponents(n, {
        RiveBubble: s(574).default,
        Link: s(276).default,
        LazySimple: s(275).default,
      });
    },
    652: function (t, e, s) {
      "use strict";
      s.r(e);
      s(85);
      var i = s(7),
        a =
          (s(38),
          {
            mixins: [s(585).a],
            asyncData: function (t) {
              return Object(i.a)(
                regeneratorRuntime.mark(function e() {
                  var s, i, a, r;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (s = t.query),
                              t.params,
                              t.redirect,
                              (i = t.$dato),
                              t.store,
                              (e.prev = 1),
                              (e.next = 4),
                              i.getPage({
                                slug: "home",
                                preview: s && s.preview,
                              })
                            );
                          case 4:
                            return (
                              (a = e.sent),
                              (r = a.page),
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
            computed: {
              mission: function () {
                return {
                  bubble: this.page.missionBubble,
                  title: this.page.missionTitle,
                  subtitle: this.page.missionSubtitle,
                  text: this.page.missionText,
                };
              },
              governance: function () {
                return {
                  title: this.page.govTitle,
                  subtitle: this.page.govSubtitle,
                };
              },
              media: function () {
                return {
                  title: this.page.mediaTitle,
                  subtitle: this.page.mediaSubtitle,
                  items: this.page.mediaCarousel,
                };
              },
              small: function () {
                return this.$store.state.app.bounds.small;
              },
              highlight: function () {
                return this.$store.state.app.global.highlight;
              },
            },
          }),
        r = s(16),
        l = Object(r.a)(
          a,
          function () {
            var t,
              e = this,
              s = e._self._c;
            return s(
              "article",
              {},
              [
                s("HomeHero", {
                  attrs: { title: e.page.title, subtitle: e.page.subtitle },
                }),
                e._v(" "),
                s(
                  "client-only",
                  [
                    e.small
                      ? e._e()
                      : s("HomeGrid", { attrs: { grid: e.page.grid } }),
                  ],
                  1
                ),
                e._v(" "),
                s("HomeMission", {
                  staticClass: "mb-50",
                  attrs: { item: e.mission },
                }),
                e._v(" "),
                s("HomeGovernance", {
                  staticClass: "mb-50 s:mb-100 hidden",
                  attrs: { item: e.governance },
                }),
                e._v(" "),
                s("HomePartners", { staticClass: "mb-20 s:mb-0" }),
                e._v(" "),
                null !== (t = e.page.marquee) && void 0 !== t && t.text
                  ? s("Marquee", {
                      staticClass: "mb-50 s:mb-125 z-2",
                      attrs: { text: e.page.marquee.text },
                    })
                  : e._e(),
                e._v(" "),
                s("HomeLatest", {
                  staticClass: "mb-50 s:mb-125",
                  attrs: { big: e.page.cardsBig, small: e.page.cardsSmall },
                }),
                e._v(" "),
                s("HomeMedia", {
                  staticClass: "mb-100 s:mb-160",
                  attrs: { item: e.media },
                }),
                e._v(" "),
                s("Misc", { attrs: { items: e.page.misc } }),
                e._v(" "),
                s(
                  "client-only",
                  [e.highlight && !e.small ? s("Highlight") : e._e()],
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
      e.default = l.exports;
      installComponents(l, {
        HomeHero: s(626).default,
        HomeGrid: s(627).default,
        HomeMission: s(628).default,
        HomeGovernance: s(629).default,
        HomePartners: s(630).default,
        Marquee: s(608).default,
        HomeLatest: s(631).default,
        HomeMedia: s(632).default,
        Misc: s(588).default,
        Highlight: s(633).default,
      });
    },
  },
]);
