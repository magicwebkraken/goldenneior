(window.webpackJsonp = window.webpackJsonp || []).push([
  [40, 46],
  {
    584: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = s(66),
        r = s(7),
        n = s(27),
        i =
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
        u = {
          mixins: [l.a],
          props: Object(n.a)(
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
            return Object(r.a)(
              regeneratorRuntime.mark(function e() {
                var s, r, n, l;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.$nextTick();
                      case 2:
                        if (
                          ((r = "bubble_star"),
                          (n =
                            null ===
                              (s = t.$rive.files.find(function (t) {
                                return t.name === r;
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
                        (l = e.sent),
                          (n = new Uint8Array(l)),
                          (n = Object(a.a)(n)),
                          t.$rive.files.push({ name: r, file: n });
                      case 13:
                        (t.r = new o.Rive({
                          buffer: n,
                          canvas: t.$el,
                          artboard: r,
                          stateMachines: r,
                          autoplay: !1,
                          onLoad: function () {
                            t.resize(),
                              t.r.setTextRunValue("txt_star-bubble", t.text),
                              t.instant
                                ? i.a.delayedCall(t.delay, function () {
                                    return t.r.play();
                                  })
                                : (t.st = i.a
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
        c = s(16),
        d = Object(c.a)(
          u,
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
    658: function (t, e, s) {
      "use strict";
      s.r(e);
      s(85);
      var a = s(7),
        r = (s(38), s(13)),
        n = s(31),
        i = {
          computed: {
            item: function () {
              return this.$store.state.app.modal.item;
            },
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
                        t.tl = r.a
                          .timeline()
                          .from(t.$el, {
                            alpha: 0,
                            duration: 0.35,
                            ease: "power1",
                          })
                          .from(
                            t.$refs.item,
                            {
                              y: "5rem",
                              alpha: 0,
                              duration: 1,
                              stagger: 0.1,
                              ease: "elastic.out(1, 0.5)",
                            },
                            0
                          )
                          .from(
                            Object(n.b)(".js-up", t.$el),
                            {
                              yPercent: 100,
                              alpha: 0,
                              stagger: 0.1,
                              duration: 1,
                              ease: "elastic(1, .5)",
                            },
                            0.25
                          );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          beforeDestroy: function () {
            var t;
            null === (t = this.tl) || void 0 === t || t.kill();
          },
          methods: {
            close: function () {
              this.$store.commit("app/SET_MODAL", { active: !1 });
            },
          },
        },
        l = s(16),
        o = Object(l.a)(
          i,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass:
                  "quick-modal relative w-full s:max-w-[148rem] overflow-hidden",
              },
              [
                e(
                  "div",
                  {
                    ref: "content",
                    staticClass:
                      "frame relative radius-fix modal-gradient max-h-[calc(100svh-6rem)] s:h-[calc(100vh-20rem)] s:max-h-[78rem] overflow-x-hidden max-s:overflow-y-auto",
                  },
                  [
                    e(
                      "button",
                      {
                        staticClass:
                          "close-modal absolute right-0 top-0 p-30 z-2",
                        attrs: { type: "button" },
                        on: { click: t.close },
                      },
                      [
                        e(
                          "svg",
                          {
                            staticClass: "relative w-20 h-30",
                            attrs: {
                              viewBox: "0 0 19 28",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            e("path", {
                              attrs: {
                                d: "M3.18359 25.0866L15.9998 2.85681",
                                stroke: "url(#paint0_linear_1346_23679)",
                                "stroke-width": "5",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              },
                            }),
                            t._v(" "),
                            e("path", {
                              attrs: {
                                d: "M3.18359 2.85709L15.9998 25.0869",
                                stroke: "url(#paint1_linear_1346_23679)",
                                "stroke-width": "5",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              },
                            }),
                            t._v(" "),
                            e(
                              "defs",
                              [
                                e(
                                  "linearGradient",
                                  {
                                    attrs: {
                                      id: "paint0_linear_1346_23679",
                                      x1: "9.59169",
                                      y1: "13.9717",
                                      x2: "10.458",
                                      y2: "14.4712",
                                      gradientUnits: "userSpaceOnUse",
                                    },
                                  },
                                  [
                                    e("stop", {
                                      attrs: { "stop-color": "#EE9B01" },
                                    }),
                                    t._v(" "),
                                    e("stop", {
                                      attrs: {
                                        offset: "1",
                                        "stop-color": "#EF3F28",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "linearGradient",
                                  {
                                    attrs: {
                                      id: "paint1_linear_1346_23679",
                                      x1: "9.59169",
                                      y1: "13.972",
                                      x2: "10.458",
                                      y2: "13.4725",
                                      gradientUnits: "userSpaceOnUse",
                                    },
                                  },
                                  [
                                    e("stop", {
                                      attrs: { "stop-color": "#EE9B01" },
                                    }),
                                    t._v(" "),
                                    e("stop", {
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
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass: "s:flex px-20 s:px-80 pt-20 s:pt-50 pb-30",
                      },
                      [
                        e(
                          "div",
                          { staticClass: "flex flex-col s:flex-row w-full" },
                          [
                            e(
                              "div",
                              { staticClass: "flex flex-col" },
                              [
                                t._m(0),
                                t._v(" "),
                                e(
                                  "client-only",
                                  [
                                    t.small
                                      ? t._e()
                                      : e("BaseButton", {
                                          staticClass: "mt-30 js-up",
                                          attrs: {
                                            to: "https://app.uniswap.org/swap?inputCurrency=eth&outputCurrency=0x08CD78B29aE435578820B1a3d256c1D6D5EcD6b1",
                                            label: "Buy here!",
                                          },
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
                                staticClass:
                                  "flex-1 flex flex-col items-start gap-y-20 s:gap-y-40 w-full s:pl-80 mt-30 s:mt-0",
                              },
                              [
                                t._l(t.item, function (s, a) {
                                  return e(
                                    "div",
                                    {
                                      key: a,
                                      staticClass: "flex flex-col s:flex-row",
                                    },
                                    [
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "relative s:min-w-[23rem] s:max-w-[23rem]",
                                        },
                                        [
                                          e(
                                            "div",
                                            {
                                              staticClass:
                                                "s:absolute s:top-1/2 s:left-1/2 s:-translate-x-1/2 s:-translate-y-1/2 w-150 h-125 z-3",
                                            },
                                            [
                                              e("RiveStarBubble", {
                                                attrs: {
                                                  text: "Step ".concat(a + 1),
                                                  instant: !0,
                                                  delay: 0.1 * a,
                                                  lazy: !1,
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e(
                                        "div",
                                        {
                                          ref: "item",
                                          refInFor: !0,
                                          staticClass:
                                            "flex flex-col items-start flex-1 mt-15 s:mt-0",
                                        },
                                        [
                                          e("h3", {
                                            staticClass:
                                              "h4 font-disp-2 text-red",
                                            domProps: {
                                              innerHTML: t._s(
                                                t.$sanitize(s.title)
                                              ),
                                            },
                                          }),
                                          t._v(" "),
                                          e("p", {
                                            staticClass: "mt-5",
                                            domProps: {
                                              innerHTML: t._s(
                                                t.$sanitize(s.text)
                                              ),
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  );
                                }),
                                t._v(" "),
                                e(
                                  "client-only",
                                  [
                                    t.small
                                      ? e("BaseButton", {
                                          staticClass: "mt-10",
                                          attrs: { to: "", label: "Buy here!" },
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
              ]
            );
          },
          [
            function () {
              var t = this,
                e = t._self._c;
              return e("h2", { staticClass: "h1" }, [
                e("div", { staticClass: "js-up" }, [t._v("Quick")]),
                t._v(" "),
                e("div", { staticClass: "js-up" }, [t._v("Start")]),
                t._v(" "),
                e("div", { staticClass: "js-up" }, [t._v("Guide")]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = o.exports;
      installComponents(o, {
        BaseButton: s(192).default,
        RiveStarBubble: s(584).default,
      });
    },
  },
]);
