(window.webpackJsonp = window.webpackJsonp || []).push([
  [
    57, 9, 11, 13, 14, 15, 16, 17, 18, 23, 32, 33, 34, 35, 36, 37, 44, 46, 48,
    49,
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
        l = Object(a.a)(
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
      e.default = l.exports;
      installComponents(l, { Video: s(572).default });
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
        l = Object(a.a)(
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
      e.default = l.exports;
    },
    574: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = s(66),
        a = s(7),
        l = s(27),
        r =
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
          props: Object(l.a)(
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
                var s, a, l, n;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.$nextTick();
                      case 2:
                        if (
                          ((t.name = "bubble_bubble"),
                          (a = t.name),
                          (l =
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
                          (l = new Uint8Array(n)),
                          (l = Object(i.a)(l)),
                          t.$rive.files.push({ name: a, file: l });
                      case 14:
                        (t.r = new o.Rive({
                          buffer: l,
                          canvas: t.$el,
                          artboard: a,
                          stateMachines: a,
                          autoplay: !1,
                          onLoad: function () {
                            t.resize(),
                              t.r.setTextRunValue("txt_bubble", t.text),
                              t.instant
                                ? t.r.play()
                                : (t.st = r.a
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
    575: function (t, e, s) {
      var i = s(581);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, s(76).default)("2e83e6d9", i, !0, { sourceMap: !1 });
    },
    577: function (t, e, s) {
      "use strict";
      var i = s(1),
        a = s(278),
        l = s(152);
      i({ target: "Array", proto: !0 }, { fill: a }), l("fill");
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
        l = Object(a.a)(
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
      e.default = l.exports;
      installComponents(l, {
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
        l = s(125),
        r = s.n(l),
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
                        (t.split = new r.a(t.$refs.title, {
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
    580: function (t, e, s) {
      "use strict";
      s(575);
    },
    581: function (t, e, s) {
      var i = s(75)(function (t) {
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
    584: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = s(66),
        a = s(7),
        l = s(27),
        r =
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
          props: Object(l.a)(
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
                var s, a, l, n;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.$nextTick();
                      case 2:
                        if (
                          ((a = "bubble_star"),
                          (l =
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
                          (l = new Uint8Array(n)),
                          (l = Object(i.a)(l)),
                          t.$rive.files.push({ name: a, file: l });
                      case 13:
                        (t.r = new o.Rive({
                          buffer: l,
                          canvas: t.$el,
                          artboard: a,
                          stateMachines: a,
                          autoplay: !1,
                          onLoad: function () {
                            t.resize(),
                              t.r.setTextRunValue("txt_star-bubble", t.text),
                              t.instant
                                ? r.a.delayedCall(t.delay, function () {
                                    return t.r.play();
                                  })
                                : (t.st = r.a
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
        l = s(7),
        r = (s(33), s(2), s(126), s(38), s(13)),
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
                      r.a.fromTo(
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
                        r.a.fromTo(
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
                        r.a.fromTo(
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
                        r.a.fromTo(
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
          return Object(l.a)(
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
              l = this;
            window.scrollTo(0, 0), e(), this.$nuxt.$emit("enter");
            var o = Object(n.a)(".js-t-title", t),
              u = Object(n.a)(".js-t-subtitle", t),
              d = Object(n.b)(".js-t-pop-up", t),
              f = Object(n.b)(".js-t-up", t);
            if (
              (null === (s = i) || void 0 === s || s.kill(),
              (i = r.a
                .timeline({
                  paused: !0,
                  defaults: { duration: 1.5, ease: "expo" },
                  onComplete: function () {
                    a = !1;
                  },
                })
                .add(function () {
                  return l.$nuxt.$emit("enter-content");
                }, 2)),
              o)
            ) {
              var p = new c.a(o, { type: "words, chars", charsClass: "c-fix" });
              i.fromTo(
                p.chars,
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
              i.fromTo(
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
              var v = this.$r.wh,
                h = d.filter(function (t) {
                  return Object(n.c)(t).top < v;
                });
              i.fromTo(
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
    586: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = s(13),
        a = {
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
        l = (s(580), s(16)),
        r = Object(l.a)(
          a,
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
        l = Object(a.a)(
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
      e.default = l.exports;
      installComponents(l, { CardMisc: s(579).default });
    },
    589: function (t, e, s) {
      var i = s(596);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, s(76).default)("5c4b6011", i, !0, { sourceMap: !1 });
    },
    590: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = {
          props: {
            title: { type: String, required: !1 },
            subtitle: { type: String, required: !1 },
          },
        },
        a = s(16),
        l = Object(a.a)(
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
      e.default = l.exports;
    },
    591: function (t, e, s) {
      "use strict";
      var i = s(7),
        a = (s(38), s(23), s(2), s(85), s(17), s(13)),
        l = s(592),
        r = s.n(l),
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
                    var l = Object(n.c)(t.el),
                      r = l.left,
                      o = l.right,
                      c = l.width;
                    (t.start = r - e.$r.ww),
                      (t.end = o),
                      (t.out = !0),
                      (t.width = c),
                      e.snaps.push(r - i),
                      a === s && e.calcMax(t.el, o, i);
                  })
                : ((this.elems = []),
                  (this.cache = this.$refs.slide.map(function (t, l) {
                    var r = t.$el;
                    r.style.transform = "none";
                    var o = Object(n.c)(r),
                      c = o.left,
                      u = o.right,
                      d = o.width,
                      f = c - e.$r.ww,
                      p = u,
                      m = a.a.quickSetter(r, "x", "px");
                    return (
                      e.snaps.push(c - i),
                      l === s && e.calcMax(r, u, i),
                      { el: r, xSet: m, start: f, end: p, width: d, out: !0 }
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
            (this.tc = r()(this.tc, this.t, 0.1 * e)),
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
                  l = t.xSet,
                  r = a.a.utils.wrap(-(e.max - i), i, e.tc);
                e.visible(s, i, r) || e.resizing
                  ? (t.out && (t.out = !1), l(-r))
                  : t.out || ((t.out = !0), l(-r));
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
      t.exports = function (t, e, s, a, l = 60) {
        if (void 0 === a) return i(t, e, s);
        const r = a / (1 / l),
          n = 1 - s;
        return i(t, e, 1 - Math.pow(n, r));
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
        l = s(110),
        r = s(31),
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
                          (t.st = l.a.create({
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
              var t = Object(r.a)(".js-marquee", this.$el),
                e = (Object(r.c)(t).width / this.size) * this.m;
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
        l = Object(a.a)(
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
      e.default = l.exports;
      installComponents(l, {
        LazySimple: s(275).default,
        RiveStarBubble: s(584).default,
        BaseButton: s(192).default,
        Link: s(276).default,
      });
    },
    601: function (t, e, s) {
      "use strict";
      s.r(e);
      s(43), s(23);
      var i = {
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
        a = s(16),
        l = Object(a.a)(
          i,
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
      e.default = l.exports;
      installComponents(l, {
        Video: s(572).default,
        LazySimple: s(275).default,
      });
    },
    606: function (t, e, s) {
      "use strict";
      s.r(e);
      s(597);
      var i = {
          props: {
            item: { type: Object, default: function () {} },
            big: { type: Boolean, default: !1 },
          },
        },
        a = s(16),
        l = Object(a.a)(
          i,
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
      e.default = l.exports;
      installComponents(l, { LazySimple: s(275).default });
    },
    607: function (t, e, s) {
      "use strict";
      s.r(e);
      s(43), s(23);
      var i = {
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
        a = s(16),
        l = Object(a.a)(
          i,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "article",
              {
                staticClass:
                  "frame-s overflow-hidden bg-gradient-s s:p-65 flex flex-col s:flex-row s:justify-between",
                attrs: { "data-url": "/blog/".concat(t.item.slug) },
              },
              [
                e(
                  "div",
                  {
                    staticClass:
                      "relative overflow-hidden frame media-fill s:min-w-[69.2rem] s:max-w-[69.2rem] s:order-2",
                  },
                  [
                    e("div", { staticClass: "pt-[70%]" }),
                    t._v(" "),
                    t.item.featuredVideoUrl
                      ? e("Video", { attrs: { url: t.item.featuredVideoUrl } })
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
                      "flex-1 flex flex-col items-start w-full s:max-w-[51.5rem] s:order-1 p-20 s:p-0 frame-max-s bg-gradient-max-s",
                  },
                  [
                    t._m(0),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass:
                          "skewed-text --rotated text-26 s:text-50 -mt-30 z-2",
                      },
                      [t._v("Blog")]
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass:
                          "flex gap-x-30 text-red h5 font-disp-2 mt-30",
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
                        t.cats ? e("span", [t._v(t._s(t.cats))]) : t._e(),
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
            );
          },
          [
            function () {
              var t = this._self._c;
              return t(
                "figure",
                {
                  staticClass:
                    "relative media-contain w-full max-w-[16.5rem] s:ml-30",
                },
                [
                  t("div", { staticClass: "pt-[83.7%]" }),
                  this._v(" "),
                  t("img", {
                    attrs: { src: "/new-post.svg", alt: "New Post" },
                  }),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = l.exports;
      installComponents(l, {
        Video: s(572).default,
        LazySimple: s(275).default,
      });
    },
    608: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = { props: { text: { type: String, required: !0 } } },
        a = s(16),
        l = Object(a.a)(
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
      e.default = l.exports;
      installComponents(l, { MarqueeSimple: s(594).default });
    },
    609: function (t, e, s) {
      "use strict";
      s.r(e);
      s(277);
      var i = { props: { item: { type: Object, default: function () {} } } },
        a = s(16),
        l = Object(a.a)(
          i,
          function () {
            var t = this,
              e = t._self._c;
            return e("article", { staticClass: "relative" }, [
              e(
                "div",
                {
                  staticClass: "frame-s overflow-hidden bg-gradient-s",
                  attrs: { "data-url": t.item.link },
                },
                [
                  e(
                    "div",
                    {
                      staticClass:
                        "s:p-65 flex flex-col s:flex-row s:justify-between w-full h-trig",
                    },
                    [
                      e(
                        "LazySimple",
                        {
                          staticClass:
                            "relative media-fill overflow-hidden frame s:min-w-[69.2rem] s:max-w-[69.2rem] h-scale s:order-2",
                          attrs: { image: t.item.featuredImage.thumbnail },
                        },
                        [e("div", { staticClass: "pt-[70%]" })]
                      ),
                      t._v(" "),
                      e(
                        "div",
                        {
                          staticClass:
                            "frame-max-s bg-gradient-max-s p-20 pb-30 s:p-0 flex-1 flex flex-col items-start justify-center w-full s:max-w-[51.5rem] s:order-1 -mt-5 s:mt-0",
                        },
                        [
                          t._m(0),
                          t._v(" "),
                          e("h2", {
                            staticClass: "h3 font-disp-2 mt-20 s:mt-25",
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
                ]
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
                  t._l(t.item.logos, function (t, s) {
                    var i;
                    return e(
                      "Link",
                      {
                        key: s,
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
                              null === (i = t.logo) || void 0 === i
                                ? void 0
                                : i.url,
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
          [
            function () {
              var t = this._self._c;
              return t(
                "figure",
                {
                  staticClass:
                    "relative media-contain w-full max-w-[18.5rem] s:max-w-[28rem]",
                },
                [
                  t("div", { staticClass: "pt-[43%]" }),
                  this._v(" "),
                  t("img", {
                    attrs: { src: "/new-collab.svg", alt: "New Collab" },
                  }),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = l.exports;
      installComponents(l, {
        LazySimple: s(275).default,
        Link: s(276).default,
      });
    },
    617: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = {
          props: {
            title: { type: String, required: !1 },
            subtitle: { type: String, required: !1 },
          },
        },
        a = s(16),
        l = Object(a.a)(
          i,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "site-max flex flex-col items-center" },
              [
                e("h2", {
                  staticClass:
                    "skewed-text h2 max-s:!text-26 is-to-animate js-s-chars-up",
                  domProps: { textContent: t._s(t.$sanitize(t.title)) },
                }),
                t._v(" "),
                e("h3", {
                  staticClass:
                    "h3 s:max-w-[100rem] mt-20 text-center js-s-lines",
                  domProps: { textContent: t._s(t.$sanitize(t.subtitle)) },
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
      e.default = l.exports;
    },
    624: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = {
          mixins: [s(591).a],
          props: {
            items: {
              type: Array,
              default: function () {
                return [];
              },
            },
            collabs: { type: Boolean, default: !1 },
          },
        },
        a = s(16),
        l = Object(a.a)(
          i,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              { staticClass: "pb-100" },
              [
                t._t("default"),
                t._v(" "),
                e("div", { staticClass: "overflow-hidden relative z-2" }, [
                  e("div", { staticClass: "site-max relative z-2" }, [
                    e(
                      "div",
                      {
                        ref: "carousel",
                        staticClass: "relative flex cursor-grab",
                      },
                      t._l(t.items, function (t, s) {
                        return e("CarouselSlide", {
                          key: s,
                          ref: "slide",
                          refInFor: !0,
                          staticClass:
                            "mr-10 s:mr-45 min-w-[100%] max-w-[100%]",
                          attrs: { item: t },
                        });
                      }),
                      1
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass:
                          "flex justify-center gap-x-40 s:gap-x-30 mt-30 s:mt-40",
                      },
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
                                staticClass: "relative w-15 s:w-19 h-auto z-3",
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
                                  "relative w-15 s:w-19 h-auto scale-x-[-1] z-3",
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
                  ]),
                ]),
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
      e.default = l.exports;
      installComponents(l, {
        CarouselSlide: s(607).default,
        BaseButton: s(192).default,
      });
    },
    625: function (t, e, s) {
      "use strict";
      s.r(e);
      s(85);
      var i = {
          mixins: [s(591).a],
          props: {
            items: {
              type: Array,
              default: function () {
                return [];
              },
            },
            collabs: { type: Boolean, default: !1 },
          },
          computed: {
            small: function () {
              return this.$store.state.app.bounds.small;
            },
          },
        },
        a = s(16),
        l = Object(a.a)(
          i,
          function () {
            var t = this,
              e = t._self._c;
            return e("section", { staticClass: "overflow-hidden pb-100" }, [
              e(
                "div",
                { staticClass: "site-max" },
                [
                  e(
                    "div",
                    {
                      ref: "carousel",
                      staticClass: "relative flex cursor-grab",
                    },
                    t._l(t.items, function (t, s) {
                      return e("CarouselCollabsSlide", {
                        key: s,
                        ref: "slide",
                        refInFor: !0,
                        staticClass: "mr-10 s:mr-45 min-w-[100%] max-w-[100%]",
                        attrs: { item: t },
                      });
                    }),
                    1
                  ),
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
                                  to: "/collaborations",
                                  label: "View all collabs",
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
                                to: "/collaborations",
                                label: "View all collabs",
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
        CarouselCollabsSlide: s(609).default,
        BaseButton: s(192).default,
      });
    },
    650: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = s(66),
        a = (s(51), s(26), s(7)),
        l = (s(38), s(585)),
        r =
          (s(617),
          {
            mixins: [l.a],
            asyncData: function (t) {
              return Object(a.a)(
                regeneratorRuntime.mark(function e() {
                  var s, i, a, l;
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
                                slug: "media",
                                preview: s && s.preview,
                              })
                            );
                          case 4:
                            return (
                              (a = e.sent),
                              (l = a.page),
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
              blog: function () {
                return this.$store.state.app.blog;
              },
              comics: function () {
                return this.$store.state.app.comics;
              },
              gifs: function () {
                return this.$store.state.app.gifs;
              },
              episodes: function () {
                return this.$store.state.app.episodes;
              },
              collabs: function () {
                return this.$store.state.app.collabs;
              },
            },
            methods: {
              openComic: function (t) {
                this.$store.commit("app/SET_MODAL", {
                  active: !0,
                  component: "ModalComic",
                  item: t,
                });
              },
              openEpisode: function (t) {
                this.$store.commit("app/SET_MODAL", {
                  active: !0,
                  component: "ModalEpisode",
                  item: t,
                });
              },
            },
          }),
        n = s(16),
        o = Object(n.a)(
          r,
          function () {
            var t,
              e = this,
              s = e._self._c;
            return s(
              "article",
              { staticClass: "relative" },
              [
                s("MediaMenu", {
                  staticClass:
                    "fixed top-50 left-1/2 -translate-x-1/2 hidden s:block z-10",
                }),
                e._v(" "),
                s(
                  "Hero",
                  {
                    staticClass: "pb-0 relative",
                    attrs: { title: e.page.title, subtitle: e.page.subtitle },
                  },
                  [
                    s(
                      "Parallax",
                      {
                        staticClass:
                          "absolute top-0 s:top-[-40rem] left-0 w-full",
                      },
                      [
                        s(
                          "Space",
                          {
                            staticClass: "relative",
                            attrs: {
                              image: "/space/media/media-1.jpg",
                              "image-mobile": "/space/media/media-mobile-1.jpg",
                            },
                          },
                          [s("div", { staticClass: "pt-[125%] s:pt-[70%]" })]
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    s(
                      "div",
                      {
                        staticClass:
                          "relative overflow-hidden -mt-90 s:-mt-250 z-2",
                      },
                      [
                        s(
                          "div",
                          { staticClass: "relative -mx-160 s:mx-0 s:w-full" },
                          [
                            s("div", { staticClass: "pt-[57.3%]" }),
                            e._v(" "),
                            s("RiveBase", {
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
                      ]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                s(
                  "Carousel",
                  {
                    staticClass: "relative mt-0 s:mt-50 z-1",
                    attrs: { items: e.blog },
                  },
                  [
                    s(
                      "Space",
                      {
                        staticClass:
                          "absolute top-0 left-0 w-full max-s:hidden",
                        attrs: { image: "/space/media/media-1.jpg" },
                      },
                      [s("div", { staticClass: "pt-[70%]" })]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                s(
                  "section",
                  {
                    staticClass:
                      "relative flex flex-col items-center mb-60 s:mb-120 z-2",
                  },
                  [
                    s(
                      "Parallax",
                      { staticClass: "absolute top-0 s:top-1/2 left-0 w-full" },
                      [
                        s(
                          "Space",
                          {
                            staticClass: "relative",
                            attrs: {
                              image: "/space/media/media-2.jpg",
                              "image-mobile": "/space/media/media-mobile-2.jpg",
                            },
                          },
                          [s("div", { staticClass: "pt-[200%] s:pt-[70%]" })]
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    s("TitleSubtitle", {
                      staticClass: "relative z-2",
                      attrs: {
                        title: e.page.comicsTitle,
                        subtitle: e.page.comicsSubtitle,
                      },
                    }),
                    e._v(" "),
                    s(
                      "div",
                      {
                        staticClass:
                          "site-max grid grid-cols-1 s:grid-cols-3 gap-y-20 s:gap-y-60 gap-x-90 relative mt-30 s:mt-60 z-2",
                      },
                      e._l(e.comics.slice(0, 3), function (t) {
                        return s("CardSmallSimple", {
                          key: t.id,
                          staticClass: "col-span-1",
                          attrs: { item: t, button: !1, comics: !0 },
                          nativeOn: {
                            click: function (s) {
                              return e.openComic(t);
                            },
                          },
                        });
                      }),
                      1
                    ),
                    e._v(" "),
                    s("BaseButton", {
                      staticClass: "mt-40",
                      attrs: { to: "/comics", label: "View All Comics" },
                    }),
                  ],
                  1
                ),
                e._v(" "),
                s(
                  "section",
                  {
                    staticClass:
                      "relative flex flex-col items-center mb-60 s:mb-60 s:mb-120 z-5",
                  },
                  [
                    s("TitleSubtitle", {
                      attrs: {
                        title: e.page.blogTitle,
                        subtitle: e.page.blogSubtitle,
                      },
                    }),
                    e._v(" "),
                    s(
                      "div",
                      {
                        staticClass:
                          "site-max grid grid-cols-1 s:grid-cols-2 gap-x-95 gap-y-20 s:gap-y-60 mt-30 s:mt-60",
                      },
                      e._l(e.blog.slice(0, 2), function (t, e) {
                        return s("CardBlog", { key: e, attrs: { item: t } });
                      }),
                      1
                    ),
                    e._v(" "),
                    s("BaseButton", {
                      staticClass: "mt-40",
                      attrs: { to: "/blog", label: "Check Out The Blog" },
                    }),
                  ],
                  1
                ),
                e._v(" "),
                s(
                  "div",
                  { staticClass: "relative z-4" },
                  [
                    s(
                      "Parallax",
                      {
                        staticClass: "absolute top-0 s:-top-250 left-0 w-full",
                      },
                      [
                        s(
                          "Space",
                          {
                            staticClass: "relative",
                            attrs: {
                              image: "/space/media/media-5.jpg",
                              "image-mobile": "/space/media/media-mobile-5.jpg",
                            },
                          },
                          [s("div", { staticClass: "pt-[400%] s:pt-[100%]" })]
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    null !== (t = e.page.marquee) && void 0 !== t && t.text
                      ? s("Marquee", {
                          staticClass: "mb-10 s:mb-70 relative z-2",
                          attrs: { text: e.page.marquee.text },
                        })
                      : e._e(),
                    e._v(" "),
                    s(
                      "div",
                      {
                        staticClass:
                          "relative overflow-hidden py-30 s:py-90 s:-mt-90 mb-60 s:mb-80 z-2",
                      },
                      [
                        s(
                          "div",
                          { staticClass: "relative rotate-[-6deg] z-2" },
                          [
                            s("MarqueeSimple", [
                              s(
                                "div",
                                { staticClass: "relative flex" },
                                e._l(2, function (t, a) {
                                  return s(
                                    "div",
                                    {
                                      key: a,
                                      staticClass: "flex marquee",
                                      class: 0 === a && "js-marquee",
                                    },
                                    e._l(
                                      [].concat(
                                        Object(i.a)(e.gifs),
                                        Object(i.a)(e.gifs)
                                      ),
                                      function (t, i) {
                                        return s(
                                          "figure",
                                          {
                                            key: i,
                                            staticClass:
                                              "relative min-w-[10rem] s:min-w-[25rem] max-w-[10rem] s:max-w-[25rem] media-fill frame radius-fix overflow-hidden mr-20 s:mr-30",
                                          },
                                          [
                                            s("div", {
                                              staticClass: "pt-[100%]",
                                            }),
                                            e._v(" "),
                                            s("img", {
                                              attrs: {
                                                src: t.gif.src,
                                                alt: "",
                                              },
                                            }),
                                          ]
                                        );
                                      }
                                    ),
                                    0
                                  );
                                }),
                                0
                              ),
                            ]),
                            e._v(" "),
                            s(
                              "div",
                              { staticClass: "flex justify-center" },
                              [
                                s("BaseButton", {
                                  staticClass: "mt-30 s:mt-40",
                                  attrs: {
                                    to: "/gifs",
                                    label: "View All Gifs",
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
                  ],
                  1
                ),
                e._v(" "),
                s(
                  "section",
                  {
                    staticClass:
                      "relative flex flex-col items-center mb-60 s:mb-120 z-7",
                  },
                  [
                    s("TitleSubtitle", {
                      attrs: {
                        title: e.page.episodesTitle,
                        subtitle: e.page.episodesSubtitle,
                      },
                    }),
                    e._v(" "),
                    s(
                      "div",
                      {
                        staticClass:
                          "site-max grid grid-cols-1 s:grid-cols-3 gap-x-95 gap-y-20 s:gap-y-60 mt-30 s:mt-60",
                      },
                      e._l(e.episodes, function (t, i) {
                        return s("CardEpisode", {
                          key: i,
                          attrs: { item: t },
                          nativeOn: {
                            click: function (s) {
                              return e.openEpisode(t);
                            },
                          },
                        });
                      }),
                      1
                    ),
                    e._v(" "),
                    s("BaseButton", {
                      staticClass: "mt-30 s:mt-40",
                      attrs: { to: "/episodes", label: "View All Episodes" },
                    }),
                  ],
                  1
                ),
                e._v(" "),
                s(
                  "section",
                  { staticClass: "relative mb-60 s:mb-120 z-6" },
                  [
                    s(
                      "Parallax",
                      { staticClass: "absolute -top-250 left-0 w-full" },
                      [
                        s(
                          "Space",
                          {
                            staticClass: "relative",
                            attrs: {
                              image: "/space/media/media-3.jpg",
                              "image-mobile": "/space/media/media-mobile-3.jpg",
                            },
                          },
                          [s("div", { staticClass: "pt-[150%] s:pt-[70%]" })]
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    s("TitleSubtitle", {
                      staticClass: "relative z-2",
                      attrs: {
                        title: e.page.collabsTitle,
                        subtitle: e.page.collabsSubtitle,
                      },
                    }),
                    e._v(" "),
                    s("CarouselCollabs", {
                      staticClass: "mt-30 s:mt-60 relative z-2",
                      attrs: { items: e.collabs },
                    }),
                  ],
                  1
                ),
                e._v(" "),
                s("Misc", { attrs: { items: e.page.misc } }),
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
      e.default = o.exports;
      installComponents(o, {
        MediaMenu: s(586).default,
        Space: s(279).default,
        Parallax: s(411).default,
        RiveBase: s(412).default,
        Hero: s(590).default,
        Carousel: s(624).default,
        TitleSubtitle: s(617).default,
        CardSmallSimple: s(600).default,
        BaseButton: s(192).default,
        CardBlog: s(601).default,
        Marquee: s(608).default,
        MarqueeSimple: s(594).default,
        CardEpisode: s(606).default,
        CarouselCollabs: s(625).default,
        Misc: s(588).default,
      });
    },
  },
]);
