(this.webpackJsonpfilms = this.webpackJsonpfilms || []).push([
  [0],
  {
    18: function(e, t, n) {
      e.exports = n(32);
    },
    28: function(e, t, n) {},
    29: function(e, t, n) {},
    30: function(e, t, n) {},
    31: function(e, t, n) {},
    32: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0),
        a = n.n(r),
        o = n(5),
        c = n.n(o),
        i = n(4),
        s = (n(28), n(29), n(6)),
        u = n(7),
        l = n(10),
        p = n(8),
        d = n(11),
        m =
          (n(30),
          n(31),
          (function(e) {
            function t() {
              return (
                Object(s.a)(this, t),
                Object(l.a)(this, Object(p.a)(t).apply(this, arguments))
              );
            }
            return (
              Object(d.a)(t, e),
              Object(u.a)(t, [
                {
                  key: "render",
                  value: function() {
                    var e = this.props.item,
                      t = e.name,
                      n = e.pathImg,
                      r = e.desc,
                      o = e.date;
                    return a.a.createElement(
                      "div",
                      { className: "EpisodItem" },
                      a.a.createElement(
                        "div",
                        { className: "EpisodItem__photo" },
                        a.a.createElement("img", { src: n, alt: t })
                      ),
                      a.a.createElement(
                        "div",
                        { className: "EpisodItem__content" },
                        a.a.createElement(
                          "h3",
                          { className: "EpisodItem__name" },
                          t
                        ),
                        a.a.createElement("div", {
                          dangerouslySetInnerHTML: { __html: r },
                          className: "EpisodItem__desc"
                        }),
                        a.a.createElement(
                          "div",
                          { className: "EpisodItem__date" },
                          o
                        )
                      )
                    );
                  }
                }
              ]),
              t
            );
          })(r.Component)),
        f = function() {
          return { type: "NAME_SORT" };
        },
        h = function(e) {
          return { type: "REPLACE_FILMS", payload: e };
        },
        E = (function(e) {
          function t() {
            var e, n;
            Object(s.a)(this, t);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(a))
              )).handleNameSort = function() {
                (0, n.props.nameSort)();
              }),
              (n.handleDateSort = function() {
                (0, n.props.dateSort)();
              }),
              n
            );
          }
          return (
            Object(d.a)(t, e),
            Object(u.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.filmsRequest();
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props.episods,
                    t = e.episodList,
                    n = e.isFetching,
                    r = e.isFetched,
                    o = e.error,
                    c = e.nameSort,
                    i = e.dateSort,
                    s = t.map(function(e, t) {
                      return a.a.createElement(m, {
                        item: e,
                        key: e.name + e.date
                      });
                    });
                  return a.a.createElement(
                    "div",
                    { className: "episods" },
                    a.a.createElement(
                      "div",
                      { className: "episods__header" },
                      a.a.createElement(
                        "div",
                        { className: "episods__filter" },
                        a.a.createElement(
                          "button",
                          { onClick: this.handleNameSort },
                          "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",
                          c && !i ? ("up" === c ? "\u21d1" : "\u21d3") : ""
                        ),
                        a.a.createElement(
                          "button",
                          { onClick: this.handleDateSort },
                          "\u0414\u0430\u0442\u0430",
                          " ",
                          i && !c ? ("up" === i ? "\u21d1" : "\u21d3") : ""
                        )
                      ),
                      n
                        ? a.a.createElement(
                            "div",
                            null,
                            "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."
                          )
                        : null,
                      r
                        ? a.a.createElement(
                            "div",
                            null,
                            "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430!"
                          )
                        : null,
                      o
                        ? a.a.createElement(
                            "div",
                            null,
                            "\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 ",
                            o.toString()
                          )
                        : null
                    ),
                    a.a.createElement("div", { className: "episods__list" }, s)
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        O = {
          filmsRequest: function() {
            return { type: "FILMS_REQUEST" };
          },
          nameSort: f,
          dateSort: function() {
            return { type: "DATE_SORT" };
          }
        },
        S = Object(i.b)(function(e) {
          return { episods: e.episods };
        }, O)(E);
      var v = Object(i.b)()(function() {
        return a.a.createElement(
          "div",
          { className: "App" },
          a.a.createElement(
            "header",
            { className: "App-header" },
            a.a.createElement(
              "h1",
              null,
              "\u0421\u043f\u0438\u0441\u043e\u043a \u0444\u0438\u043b\u044c\u043c\u043e\u0432"
            )
          ),
          a.a.createElement(
            "section",
            { className: "content" },
            a.a.createElement(S, null)
          )
        );
      });
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var y = n(2),
        b = n(15),
        g = n(9);
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(n, !0).forEach(function(t) {
                Object(g.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var j = {
          isFetching: !1,
          isFetched: !1,
          error: null,
          nameSort: "up",
          dateSort: !1,
          episodList: []
        },
        L = { openPage: !0 },
        I = Object(y.c)({
          episods: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : j,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "FILMS_REQUEST":
                return _({}, e, { isFetching: !0, isFetched: !1 });
              case "FILMS_SUCCESS":
                return _({}, e, {
                  isFetching: !1,
                  isFetched: !0,
                  episodList: Object(b.a)(t.payload)
                });
              case "FILMS_FAILURE":
                return _({}, e, {
                  isFetching: !1,
                  isFetched: !0,
                  error: t.error
                });
              case "NAME_SORT":
                return _({}, e, {
                  dateSort: !1,
                  nameSort: e.nameSort
                    ? "down" === e.nameSort
                      ? "up"
                      : "down"
                    : "up"
                });
              case "DATE_SORT":
                return _({}, e, {
                  nameSort: !1,
                  dateSort: e.dateSort
                    ? "down" === e.dateSort
                      ? "up"
                      : "down"
                    : "up"
                });
              case "REPLACE_FILMS":
                return (
                  console.log("aaaa", t),
                  _({}, e, { episodList: Object(b.a)(t.payload) })
                );
              default:
                return e;
            }
          },
          settings: function() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : L;
            return e;
          }
        });
      function F(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var N = Object(y.e)(
        I,
        void 0,
        Object(y.d)(
          Object(y.a)(
            function(e) {
              return function(t) {
                return function(n) {
                  "FILMS_REQUEST" === n.type &&
                    fetch("http://api.tvmaze.com/shows/1/episodes?specials=1", {
                      method: "GET",
                      mode: "cors"
                    })
                      .then(function(e) {
                        return e.json();
                      })
                      .then(function(t) {
                        var n = t.map(function(e, t) {
                          var n = "";
                          return (
                            null !== e.image &&
                              "medium" in e.image &&
                              (n = e.image.medium),
                            {
                              name: e.name,
                              date: e.airdate,
                              desc: e.summary,
                              pathImg: n
                            }
                          );
                        });
                        e.dispatch({ type: "FILMS_SUCCESS", payload: n }),
                          e.dispatch({ type: "NAME_SORT" });
                      })
                      .catch(function(t) {
                        e.dispatch(
                          (function(e) {
                            return { type: "FILMS_FAILURE", error: e };
                          })(t)
                        );
                      }),
                    t(n);
                };
              };
            },
            function(e) {
              return function(t) {
                return function(n) {
                  var r = (function(e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? F(n, !0).forEach(function(t) {
                              Object(g.a)(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n)
                            )
                          : F(n).forEach(function(t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(n, t)
                              );
                            });
                      }
                      return e;
                    })({}, e.getState().episods),
                    a = r.nameSort,
                    o = r.dateSort,
                    c = r.episodList;
                  return (
                    console.log("type", n.type, a, o),
                    "NAME_SORT" === n.type &&
                      ("down" === a &&
                        (c.sort(function(e, t) {
                          var n = e.name.toLowerCase(),
                            r = t.name.toLowerCase();
                          return n < r ? -1 : n > r ? 1 : 0;
                        }),
                        e.dispatch(h(c))),
                      "up" === a &&
                        (c.sort(function(e, t) {
                          var n = e.name.toLowerCase(),
                            r = t.name.toLowerCase();
                          return n > r ? -1 : n < r ? 1 : 0;
                        }),
                        e.dispatch(h(c)))),
                    "DATE_SORT" === n.type &&
                      ("down" === o &&
                        (c.sort(function(e, t) {
                          var n = new Date(e.date),
                            r = new Date(t.date);
                          return n < r ? -1 : n > r ? 1 : 0;
                        }),
                        e.dispatch(h(c))),
                      "up" === o &&
                        (c.sort(function(e, t) {
                          var n = new Date(e.date),
                            r = new Date(t.date);
                          return n > r ? -1 : n < r ? 1 : 0;
                        }),
                        e.dispatch(h(c)))),
                    t(n)
                  );
                };
              };
            },
            function(e) {
              return function(e) {
                return function(t) {
                  return console.log("logger: ", t.type), e(t);
                };
              };
            }
          ),
          window.devToolsExtension
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : function(e) {
                return e;
              }
        )
      );
      c.a.render(
        a.a.createElement(i.a, { store: N }, a.a.createElement(v, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  },
  [[18, 1, 2]]
]);
//# sourceMappingURL=main.1bddf207.chunk.js.map
