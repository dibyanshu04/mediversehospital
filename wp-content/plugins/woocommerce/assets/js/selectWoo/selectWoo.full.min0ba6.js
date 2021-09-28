/*!
 * SelectWoo 1.0.6
 * https://github.com/woocommerce/selectWoo
 *
 * Released under the MIT license
 * https://github.com/woocommerce/selectWoo/blob/master/LICENSE.md
 */
!(function (n) {
  "function" == typeof define && define.amd
    ? define(["jquery"], n)
    : "object" == typeof module && module.exports
    ? (module.exports = function (e, t) {
        return (
          t === undefined &&
            (t =
              "undefined" != typeof window
                ? require("jquery")
                : require("jquery")(e)),
          n(t),
          t
        );
      })
    : n(jQuery);
})(function (t) {
  var e,
    n,
    p,
    s,
    r,
    h,
    f,
    g,
    m,
    y,
    v,
    i,
    o,
    w,
    a,
    a =
      (t && t.fn && t.fn.select2 && t.fn.select2.amd && (u = t.fn.select2.amd),
      (u && u.requirejs) ||
        (u ? (n = u) : (u = {}),
        (g = {}),
        (m = {}),
        (y = {}),
        (v = {}),
        (i = Object.prototype.hasOwnProperty),
        (o = [].slice),
        (w = /\.js$/),
        (h = function (e, t) {
          var n,
            i,
            o = c(e),
            s = o[0],
            t = t[1];
          return (
            (e = o[1]),
            s && (n = x((s = l(s, t)))),
            s
              ? (e =
                  n && n.normalize
                    ? n.normalize(
                        e,
                        ((i = t),
                        function (e) {
                          return l(e, i);
                        })
                      )
                    : l(e, t))
              : ((s = (o = c((e = l(e, t))))[0]), (e = o[1]), s && (n = x(s))),
            { f: s ? s + "!" + e : e, n: e, pr: s, p: n }
          );
        }),
        (f = {
          require: function (e) {
            return b(e);
          },
          exports: function (e) {
            var t = g[e];
            return void 0 !== t ? t : (g[e] = {});
          },
          module: function (e) {
            return {
              id: e,
              uri: "",
              exports: g[e],
              config:
                ((t = e),
                function () {
                  return (y && y.config && y.config[t]) || {};
                }),
            };
            var t;
          },
        }),
        (s = function (e, t, n, i) {
          var o,
            s,
            r,
            a,
            l,
            c = [],
            u = typeof n,
            d = A((i = i || e));
          if ("undefined" == u || "function" == u) {
            for (
              t = !t.length && n.length ? ["require", "exports", "module"] : t,
                a = 0;
              a < t.length;
              a += 1
            )
              if ("require" === (s = (r = h(t[a], d)).f)) c[a] = f.require(e);
              else if ("exports" === s) (c[a] = f.exports(e)), (l = !0);
              else if ("module" === s) o = c[a] = f.module(e);
              else if (_(g, s) || _(m, s) || _(v, s)) c[a] = x(s);
              else {
                if (!r.p) throw new Error(e + " missing " + s);
                r.p.load(
                  r.n,
                  b(i, !0),
                  (function (t) {
                    return function (e) {
                      g[t] = e;
                    };
                  })(s),
                  {}
                ),
                  (c[a] = g[s]);
              }
            (u = n ? n.apply(g[e], c) : undefined),
              e &&
                (o && o.exports !== p && o.exports !== g[e]
                  ? (g[e] = o.exports)
                  : (u === p && l) || (g[e] = u));
          } else e && (g[e] = n);
        }),
        (e =
          n =
          r =
            function (e, t, n, i, o) {
              if ("string" == typeof e) return f[e] ? f[e](t) : x(h(e, A(t)).f);
              if (!e.splice) {
                if (((y = e).deps && r(y.deps, y.callback), !t)) return;
                t.splice ? ((e = t), (t = n), (n = null)) : (e = p);
              }
              return (
                (t = t || function () {}),
                "function" == typeof n && ((n = i), (i = o)),
                i
                  ? s(p, e, t, n)
                  : setTimeout(function () {
                      s(p, e, t, n);
                    }, 4),
                r
              );
            }),
        (r.config = function (e) {
          return r(e);
        }),
        (e._defined = g),
        ((a = function (e, t, n) {
          if ("string" != typeof e)
            throw new Error(
              "See almond README: incorrect module build, no module name"
            );
          t.splice || ((n = t), (t = [])),
            _(g, e) || _(m, e) || (m[e] = [e, t, n]);
        }).amd = { jQuery: !0 }),
        (u.requirejs = e),
        (u.require = n),
        (u.define = a)),
      u.define("almond", function () {}),
      u.define("jquery", [], function () {
        var e = t || $;
        return (
          null == e &&
            console &&
            console.error &&
            console.error(
              "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
            ),
          e
        );
      }),
      u.define("select2/utils", ["jquery"], function (s) {
        var e = {};
        function c(e) {
          var t,
            n = e.prototype,
            i = [];
          for (t in n) {
            "function" == typeof n[t] && "constructor" !== t && i.push(t);
          }
          return i;
        }
        (e.Extend = function (e, t) {
          var n,
            i = {}.hasOwnProperty;
          function o() {
            this.constructor = e;
          }
          for (n in t) i.call(t, n) && (e[n] = t[n]);
          return (
            (o.prototype = t.prototype),
            (e.prototype = new o()),
            (e.__super__ = t.prototype),
            e
          );
        }),
          (e.Decorate = function (i, o) {
            var e = c(o),
              t = c(i);
            function s() {
              var e = Array.prototype.unshift,
                t = o.prototype.constructor.length,
                n = i.prototype.constructor;
              0 < t &&
                (e.call(arguments, i.prototype.constructor),
                (n = o.prototype.constructor)),
                n.apply(this, arguments);
            }
            (o.displayName = i.displayName),
              (s.prototype = new (function () {
                this.constructor = s;
              })());
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              s.prototype[r] = i.prototype[r];
            }
            for (var a = 0; a < e.length; a++) {
              var l = e[a];
              s.prototype[l] = (function (e) {
                var t = function () {};
                e in s.prototype && (t = s.prototype[e]);
                var n = o.prototype[e];
                return function () {
                  return (
                    Array.prototype.unshift.call(arguments, t),
                    n.apply(this, arguments)
                  );
                };
              })(l);
            }
            return s;
          });
        var t = function () {
          this.listeners = {};
        };
        return (
          (t.prototype.on = function (e, t) {
            (this.listeners = this.listeners || {}),
              e in this.listeners
                ? this.listeners[e].push(t)
                : (this.listeners[e] = [t]);
          }),
          (t.prototype.trigger = function (e) {
            var t = Array.prototype.slice,
              n = t.call(arguments, 1);
            (this.listeners = this.listeners || {}),
              null == n && (n = []),
              0 === n.length && n.push({}),
              (n[0]._type = e) in this.listeners &&
                this.invoke(this.listeners[e], t.call(arguments, 1)),
              "*" in this.listeners &&
                this.invoke(this.listeners["*"], arguments);
          }),
          (t.prototype.invoke = function (e, t) {
            for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t);
          }),
          (e.Observable = t),
          (e.generateChars = function (e) {
            for (var t = "", n = 0; n < e; n++) {
              t += Math.floor(36 * Math.random()).toString(36);
            }
            return t;
          }),
          (e.bind = function (e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }),
          (e._convertData = function (e) {
            for (var t in e) {
              var n = t.split("-"),
                i = e;
              if (1 !== n.length) {
                for (var o = 0; o < n.length; o++) {
                  var s = n[o];
                  (s = s.substring(0, 1).toLowerCase() + s.substring(1)) in i ||
                    (i[s] = {}),
                    o == n.length - 1 && (i[s] = e[t]),
                    (i = i[s]);
                }
                delete e[t];
              }
            }
            return e;
          }),
          (e.hasScroll = function (e, t) {
            var n = s(t),
              i = t.style.overflowX,
              o = t.style.overflowY;
            return (
              (i !== o || ("hidden" !== o && "visible" !== o)) &&
              ("scroll" === i ||
                "scroll" === o ||
                n.innerHeight() < t.scrollHeight ||
                n.innerWidth() < t.scrollWidth)
            );
          }),
          (e.escapeMarkup = function (e) {
            var t = {
              "\\": "&#92;",
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
              "/": "&#47;",
            };
            return "string" != typeof e
              ? e
              : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                  return t[e];
                });
          }),
          (e.entityDecode = function (e) {
            var t = document.createElement("textarea");
            return (t.innerHTML = e), t.value;
          }),
          (e.appendMany = function (e, t) {
            var n;
            "1.7" === s.fn.jquery.substr(0, 3) &&
              ((n = s()),
              s.map(t, function (e) {
                n = n.add(e);
              }),
              (t = n)),
              e.append(t);
          }),
          (e.isTouchscreen = function () {
            return (
              "undefined" == typeof e._isTouchscreenCache &&
                (e._isTouchscreenCache =
                  "ontouchstart" in document.documentElement),
              e._isTouchscreenCache
            );
          }),
          e
        );
      }),
      u.define("select2/results", ["jquery", "./utils"], function (d, e) {
        function i(e, t, n) {
          (this.$element = e),
            (this.data = n),
            (this.options = t),
            i.__super__.constructor.call(this);
        }
        return (
          e.Extend(i, e.Observable),
          (i.prototype.render = function () {
            var e = d(
              '<ul class="select2-results__options" role="listbox" tabindex="-1"></ul>'
            );
            return (
              this.options.get("multiple") &&
                e.attr("aria-multiselectable", "true"),
              (this.$results = e)
            );
          }),
          (i.prototype.clear = function () {
            this.$results.empty();
          }),
          (i.prototype.displayMessage = function (e) {
            var t = this.options.get("escapeMarkup");
            this.clear(), this.hideLoading();
            var n = d(
                '<li role="alert" aria-live="assertive" class="select2-results__option"></li>'
              ),
              i = this.options.get("translations").get(e.message);
            n.append(t(i(e.args))),
              (n[0].className += " select2-results__message"),
              this.$results.append(n);
          }),
          (i.prototype.hideMessages = function () {
            this.$results.find(".select2-results__message").remove();
          }),
          (i.prototype.append = function (e) {
            this.hideLoading();
            var t = [];
            if (null != e.results && 0 !== e.results.length) {
              e.results = this.sort(e.results);
              for (var n = 0; n < e.results.length; n++) {
                var i = e.results[n],
                  i = this.option(i);
                t.push(i);
              }
              this.$results.append(t);
            } else
              0 === this.$results.children().length &&
                this.trigger("results:message", { message: "noResults" });
          }),
          (i.prototype.position = function (e, t) {
            t.find(".select2-results").append(e);
          }),
          (i.prototype.sort = function (e) {
            return this.options.get("sorter")(e);
          }),
          (i.prototype.highlightFirstItem = function () {
            var e = this.$results.find(
                ".select2-results__option[data-selected]"
              ),
              t = e.filter("[data-selected=true]");
            (0 < t.length ? t : e).first().trigger("mouseenter"),
              this.ensureHighlightVisible();
          }),
          (i.prototype.setClasses = function () {
            var t = this;
            this.data.current(function (e) {
              var i = d.map(e, function (e) {
                return e.id.toString();
              });
              t.$results
                .find(".select2-results__option[data-selected]")
                .each(function () {
                  var e = d(this),
                    t = d.data(this, "data"),
                    n = "" + t.id;
                  (null != t.element && t.element.selected) ||
                  (null == t.element && -1 < d.inArray(n, i))
                    ? e.attr("data-selected", "true")
                    : e.attr("data-selected", "false");
                });
            });
          }),
          (i.prototype.showLoading = function (e) {
            this.hideLoading();
            (e = {
              disabled: !0,
              loading: !0,
              text: this.options.get("translations").get("searching")(e),
            }),
              (e = this.option(e));
            (e.className += " loading-results"), this.$results.prepend(e);
          }),
          (i.prototype.hideLoading = function () {
            this.$results.find(".loading-results").remove();
          }),
          (i.prototype.option = function (e) {
            var t = document.createElement("li");
            t.className = "select2-results__option";
            var n,
              i = { role: "option", "data-selected": "false", tabindex: -1 };
            for (n in (e.disabled &&
              (delete i["data-selected"], (i["aria-disabled"] = "true")),
            null == e.id && delete i["data-selected"],
            null != e._resultId && (t.id = e._resultId),
            e.title && (t.title = e.title),
            e.children &&
              ((i["aria-label"] = e.text), delete i["data-selected"]),
            i)) {
              var o = i[n];
              t.setAttribute(n, o);
            }
            if (e.children) {
              var s = d(t),
                r = document.createElement("strong");
              r.className = "select2-results__group";
              var a = d(r);
              this.template(e, r), a.attr("role", "presentation");
              for (var l = [], c = 0; c < e.children.length; c++) {
                var u = e.children[c],
                  u = this.option(u);
                l.push(u);
              }
              a = d("<ul></ul>", {
                class:
                  "select2-results__options select2-results__options--nested",
                role: "listbox",
              });
              a.append(l), s.attr("role", "list"), s.append(r), s.append(a);
            } else this.template(e, t);
            return d.data(t, "data", e), t;
          }),
          (i.prototype.bind = function (t, e) {
            var o = this,
              n = t.id + "-results";
            this.$results.attr("id", n),
              t.on("results:all", function (e) {
                o.clear(),
                  o.append(e.data),
                  t.isOpen() && (o.setClasses(), o.highlightFirstItem());
              }),
              t.on("results:append", function (e) {
                o.append(e.data), t.isOpen() && o.setClasses();
              }),
              t.on("query", function (e) {
                o.hideMessages(), o.showLoading(e);
              }),
              t.on("select", function () {
                t.isOpen() && (o.setClasses(), o.highlightFirstItem());
              }),
              t.on("unselect", function () {
                t.isOpen() && (o.setClasses(), o.highlightFirstItem());
              }),
              t.on("open", function () {
                o.$results.attr("aria-expanded", "true"),
                  o.$results.attr("aria-hidden", "false"),
                  o.setClasses(),
                  o.ensureHighlightVisible();
              }),
              t.on("close", function () {
                o.$results.attr("aria-expanded", "false"),
                  o.$results.attr("aria-hidden", "true"),
                  o.$results.removeAttr("aria-activedescendant");
              }),
              t.on("results:toggle", function () {
                var e = o.getHighlightedResults();
                0 !== e.length && e.trigger("mouseup");
              }),
              t.on("results:select", function () {
                var e,
                  t = o.getHighlightedResults();
                0 !== t.length &&
                  ((e = t.data("data")),
                  "true" == t.attr("data-selected")
                    ? o.trigger("close", {})
                    : o.trigger("select", { data: e }));
              }),
              t.on("results:previous", function () {
                var e,
                  t = o.getHighlightedResults(),
                  n = o.$results.find("[data-selected]"),
                  i = n.index(t);
                0 !== i &&
                  ((e = i - 1),
                  0 === t.length && (e = 0),
                  (i = n.eq(e)).trigger("mouseenter"),
                  (t = o.$results.offset().top),
                  (n = i.offset().top),
                  (i = o.$results.scrollTop() + (n - t)),
                  0 === e
                    ? o.$results.scrollTop(0)
                    : n - t < 0 && o.$results.scrollTop(i));
              }),
              t.on("results:next", function () {
                var e,
                  t = o.getHighlightedResults(),
                  n = o.$results.find("[data-selected]"),
                  i = n.index(t) + 1;
                i >= n.length ||
                  ((e = n.eq(i)).trigger("mouseenter"),
                  (t = o.$results.offset().top + o.$results.outerHeight(!1)),
                  (n = e.offset().top + e.outerHeight(!1)),
                  (e = o.$results.scrollTop() + n - t),
                  0 === i
                    ? o.$results.scrollTop(0)
                    : t < n && o.$results.scrollTop(e));
              }),
              t.on("results:focus", function (e) {
                e.element
                  .addClass("select2-results__option--highlighted")
                  .attr("aria-selected", "true"),
                  o.$results.attr(
                    "aria-activedescendant",
                    e.element.attr("id")
                  );
              }),
              t.on("results:message", function (e) {
                o.displayMessage(e);
              }),
              d.fn.mousewheel &&
                this.$results.on("mousewheel", function (e) {
                  var t = o.$results.scrollTop(),
                    n = o.$results.get(0).scrollHeight - t + e.deltaY,
                    t = 0 < e.deltaY && t - e.deltaY <= 0,
                    n = e.deltaY < 0 && n <= o.$results.height();
                  t
                    ? (o.$results.scrollTop(0),
                      e.preventDefault(),
                      e.stopPropagation())
                    : n &&
                      (o.$results.scrollTop(
                        o.$results.get(0).scrollHeight - o.$results.height()
                      ),
                      e.preventDefault(),
                      e.stopPropagation());
                }),
              this.$results.on(
                "mouseup",
                ".select2-results__option[data-selected]",
                function (e) {
                  var t = d(this),
                    n = t.data("data");
                  "true" !== t.attr("data-selected")
                    ? o.trigger("select", { originalEvent: e, data: n })
                    : o.options.get("multiple")
                    ? o.trigger("unselect", { originalEvent: e, data: n })
                    : o.trigger("close", {});
                }
              ),
              this.$results.on(
                "mouseenter",
                ".select2-results__option[data-selected]",
                function (e) {
                  var t = d(this).data("data");
                  o
                    .getHighlightedResults()
                    .removeClass("select2-results__option--highlighted")
                    .attr("aria-selected", "false"),
                    o.trigger("results:focus", { data: t, element: d(this) });
                }
              );
          }),
          (i.prototype.getHighlightedResults = function () {
            return this.$results.find(".select2-results__option--highlighted");
          }),
          (i.prototype.destroy = function () {
            this.$results.remove();
          }),
          (i.prototype.ensureHighlightVisible = function () {
            var e,
              t,
              n,
              i,
              o = this.getHighlightedResults();
            0 !== o.length &&
              ((e = this.$results.find("[data-selected]").index(o)),
              (i = this.$results.offset().top),
              (t = o.offset().top),
              (n = this.$results.scrollTop() + (t - i)),
              (i = t - i),
              (n -= 2 * o.outerHeight(!1)),
              e <= 2
                ? this.$results.scrollTop(0)
                : (i > this.$results.outerHeight() || i < 0) &&
                  this.$results.scrollTop(n));
          }),
          (i.prototype.template = function (e, t) {
            var n = this.options.get("templateResult"),
              i = this.options.get("escapeMarkup"),
              e = n(e, t);
            null == e
              ? (t.style.display = "none")
              : "string" == typeof e
              ? (t.innerHTML = i(e))
              : d(t).append(e);
          }),
          i
        );
      }),
      u.define("select2/keys", [], function () {
        return {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46,
        };
      }),
      u.define(
        "select2/selection/base",
        ["jquery", "../utils", "../keys"],
        function (i, e, o) {
          function n(e, t) {
            (this.$element = e),
              (this.options = t),
              n.__super__.constructor.call(this);
          }
          return (
            e.Extend(n, e.Observable),
            (n.prototype.render = function () {
              var e = i(
                '<span class="select2-selection"  aria-haspopup="true" aria-expanded="false"></span>'
              );
              return (
                (this._tabindex = 0),
                null != this.$element.data("old-tabindex")
                  ? (this._tabindex = this.$element.data("old-tabindex"))
                  : null != this.$element.attr("tabindex") &&
                    (this._tabindex = this.$element.attr("tabindex")),
                e.attr("title", this.$element.attr("title")),
                e.attr("tabindex", this._tabindex),
                (this.$selection = e)
              );
            }),
            (n.prototype.bind = function (e, t) {
              var n = this,
                i = (e.id, e.id + "-results");
              this.options.get("minimumResultsForSearch"), Infinity;
              (this.container = e),
                this.$selection.on("focus", function (e) {
                  n.trigger("focus", e);
                }),
                this.$selection.on("blur", function (e) {
                  n._handleBlur(e);
                }),
                this.$selection.on("keydown", function (e) {
                  n.trigger("keypress", e),
                    e.which === o.SPACE && e.preventDefault();
                }),
                e.on("results:focus", function (e) {
                  n.$selection.attr("aria-activedescendant", e.data._resultId);
                }),
                e.on("selection:update", function (e) {
                  n.update(e.data);
                }),
                e.on("open", function () {
                  n.$selection.attr("aria-expanded", "true"),
                    n.$selection.attr("aria-owns", i),
                    n._attachCloseHandler(e);
                }),
                e.on("close", function () {
                  n.$selection.attr("aria-expanded", "false"),
                    n.$selection.removeAttr("aria-activedescendant"),
                    n.$selection.removeAttr("aria-owns"),
                    window.setTimeout(function () {
                      n.$selection.focus();
                    }, 1),
                    n._detachCloseHandler(e);
                }),
                e.on("enable", function () {
                  n.$selection.attr("tabindex", n._tabindex);
                }),
                e.on("disable", function () {
                  n.$selection.attr("tabindex", "-1");
                });
            }),
            (n.prototype._handleBlur = function (e) {
              var t = this;
              window.setTimeout(function () {
                document.activeElement == t.$selection[0] ||
                  i.contains(t.$selection[0], document.activeElement) ||
                  t.trigger("blur", e);
              }, 1);
            }),
            (n.prototype._attachCloseHandler = function (e) {
              i(document.body).on("mousedown.select2." + e.id, function (e) {
                var t = i(e.target),
                  n = t.closest(".select2");
                i(".select2.select2-container--open").each(function () {
                  var e = i(this);
                  this != n[0] &&
                    (e.data("element").select2("close"),
                    setTimeout(function () {
                      e.find("*:focus").blur(), t.focus();
                    }, 1));
                });
              });
            }),
            (n.prototype._detachCloseHandler = function (e) {
              i(document.body).off("mousedown.select2." + e.id);
            }),
            (n.prototype.position = function (e, t) {
              t.find(".selection").append(e);
            }),
            (n.prototype.destroy = function () {
              this._detachCloseHandler(this.container);
            }),
            (n.prototype.update = function (e) {
              throw new Error(
                "The `update` method must be defined in child classes."
              );
            }),
            n
          );
        }
      ),
      u.define(
        "select2/selection/single",
        ["jquery", "./base", "../utils", "../keys"],
        function (e, t, i, n) {
          function o() {
            o.__super__.constructor.apply(this, arguments);
          }
          return (
            i.Extend(o, t),
            (o.prototype.render = function () {
              var e = o.__super__.render.call(this);
              return (
                e.addClass("select2-selection--single"),
                e.html(
                  '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                ),
                e
              );
            }),
            (o.prototype.bind = function (t, e) {
              var n = this;
              o.__super__.bind.apply(this, arguments);
              var i = t.id + "-container";
              this.$selection
                .find(".select2-selection__rendered")
                .attr("id", i)
                .attr("role", "textbox")
                .attr("aria-readonly", "true"),
                this.$selection.attr("aria-labelledby", i),
                this.$selection.attr("role", "combobox"),
                this.$selection.on("mousedown", function (e) {
                  1 === e.which && n.trigger("toggle", { originalEvent: e });
                }),
                this.$selection.on("focus", function (e) {}),
                this.$selection.on("keydown", function (e) {
                  !t.isOpen() && 48 <= e.which && e.which <= 90 && t.open();
                }),
                this.$selection.on("blur", function (e) {}),
                t.on("focus", function (e) {
                  t.isOpen() || n.$selection.focus();
                }),
                t.on("selection:update", function (e) {
                  n.update(e.data);
                });
            }),
            (o.prototype.clear = function () {
              this.$selection.find(".select2-selection__rendered").empty();
            }),
            (o.prototype.display = function (e, t) {
              var n = this.options.get("templateSelection");
              return this.options.get("escapeMarkup")(n(e, t));
            }),
            (o.prototype.selectionContainer = function () {
              return e("<span></span>");
            }),
            (o.prototype.update = function (e) {
              var t, n;
              0 !== e.length
                ? ((t = e[0]),
                  (n = this.$selection.find(".select2-selection__rendered")),
                  (e = i.entityDecode(this.display(t, n))),
                  n.empty().text(e),
                  n.prop("title", t.title || t.text))
                : this.clear();
            }),
            o
          );
        }
      ),
      u.define(
        "select2/selection/multiple",
        ["jquery", "./base", "../utils"],
        function (i, e, l) {
          function o(e, t) {
            o.__super__.constructor.apply(this, arguments);
          }
          return (
            l.Extend(o, e),
            (o.prototype.render = function () {
              var e = o.__super__.render.call(this);
              return (
                e.addClass("select2-selection--multiple"),
                e.html(
                  '<ul class="select2-selection__rendered" aria-live="polite" aria-relevant="additions removals" aria-atomic="true"></ul>'
                ),
                e
              );
            }),
            (o.prototype.bind = function (t, e) {
              var n = this;
              o.__super__.bind.apply(this, arguments),
                this.$selection.on("click", function (e) {
                  n.trigger("toggle", { originalEvent: e });
                }),
                this.$selection.on(
                  "click",
                  ".select2-selection__choice__remove",
                  function (e) {
                    var t;
                    n.options.get("disabled") ||
                      ((t = i(this).parent().data("data")),
                      n.trigger("unselect", { originalEvent: e, data: t }));
                  }
                ),
                this.$selection.on("keydown", function (e) {
                  !t.isOpen() && 48 <= e.which && e.which <= 90 && t.open();
                }),
                t.on("focus", function () {
                  n.focusOnSearch();
                });
            }),
            (o.prototype.clear = function () {
              this.$selection.find(".select2-selection__rendered").empty();
            }),
            (o.prototype.display = function (e, t) {
              var n = this.options.get("templateSelection");
              return this.options.get("escapeMarkup")(n(e, t));
            }),
            (o.prototype.selectionContainer = function () {
              return i(
                '<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation" aria-hidden="true">&times;</span></li>'
              );
            }),
            (o.prototype.focusOnSearch = function () {
              var e = this;
              "undefined" != typeof e.$search &&
                setTimeout(function () {
                  (e._keyUpPrevented = !0), e.$search.focus();
                }, 1);
            }),
            (o.prototype.update = function (e) {
              if ((this.clear(), 0 !== e.length)) {
                for (var t = [], n = 0; n < e.length; n++) {
                  var i = e[n],
                    o = this.selectionContainer(),
                    s = o.html(),
                    r = this.display(i, o);
                  "string" == typeof r && (r = l.entityDecode(r.trim())),
                    o.text(r),
                    o.prepend(s),
                    o.prop("title", i.title || i.text),
                    o.data("data", i),
                    t.push(o);
                }
                var a = this.$selection.find(".select2-selection__rendered");
                l.appendMany(a, t);
              }
            }),
            o
          );
        }
      ),
      u.define("select2/selection/placeholder", ["../utils"], function (i) {
        function e(e, t, n) {
          (this.placeholder = this.normalizePlaceholder(n.get("placeholder"))),
            e.call(this, t, n);
        }
        return (
          (e.prototype.normalizePlaceholder = function (e, t) {
            return "string" == typeof t && (t = { id: "", text: t }), t;
          }),
          (e.prototype.createPlaceholder = function (e, t) {
            var n = this.selectionContainer();
            return (
              n.text(i.entityDecode(this.display(t))),
              n
                .addClass("select2-selection__placeholder")
                .removeClass("select2-selection__choice"),
              n
            );
          }),
          (e.prototype.update = function (e, t) {
            var n = 1 == t.length && t[0].id != this.placeholder.id;
            if (1 < t.length || n) return e.call(this, t);
            this.clear();
            t = this.createPlaceholder(this.placeholder);
            this.$selection.find(".select2-selection__rendered").append(t);
          }),
          e
        );
      }),
      u.define(
        "select2/selection/allowClear",
        ["jquery", "../keys"],
        function (n, i) {
          function e() {}
          return (
            (e.prototype.bind = function (e, t, n) {
              var i = this;
              e.call(this, t, n),
                null == this.placeholder &&
                  this.options.get("debug") &&
                  window.console &&
                  console.error &&
                  console.error(
                    "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                  ),
                this.$selection.on(
                  "mousedown",
                  ".select2-selection__clear",
                  function (e) {
                    i._handleClear(e);
                  }
                ),
                t.on("keypress", function (e) {
                  i._handleKeyboardClear(e, t);
                });
            }),
            (e.prototype._handleClear = function (e, t) {
              if (!this.options.get("disabled")) {
                var n = this.$selection.find(".select2-selection__clear");
                if (0 !== n.length) {
                  t.stopPropagation();
                  for (var i = n.data("data"), o = 0; o < i.length; o++) {
                    var s = { data: i[o] };
                    if ((this.trigger("unselect", s), s.prevented)) return;
                  }
                  this.$element.val(this.placeholder.id).trigger("change"),
                    this.trigger("toggle", {});
                }
              }
            }),
            (e.prototype._handleKeyboardClear = function (e, t, n) {
              n.isOpen() ||
                (t.which != i.DELETE && t.which != i.BACKSPACE) ||
                this._handleClear(t);
            }),
            (e.prototype.update = function (e, t) {
              e.call(this, t),
                0 <
                  this.$selection.find(".select2-selection__placeholder")
                    .length ||
                  0 === t.length ||
                  ((e = n(
                    '<span class="select2-selection__clear">&times;</span>'
                  )).data("data", t),
                  this.$selection
                    .find(".select2-selection__rendered")
                    .prepend(e));
            }),
            e
          );
        }
      ),
      u.define(
        "select2/selection/search",
        ["jquery", "../utils", "../keys"],
        function (n, e, r) {
          function t(e, t, n) {
            e.call(this, t, n);
          }
          return (
            (t.prototype.render = function (e) {
              var t = n(
                '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="text" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>'
              );
              (this.$searchContainer = t), (this.$search = t.find("input"));
              e = e.call(this);
              return this._transferTabIndex(), e;
            }),
            (t.prototype.bind = function (e, n, t) {
              var i = this,
                o = n.id + "-results";
              e.call(this, n, t),
                n.on("open", function () {
                  i.$search.attr("aria-owns", o), i.$search.trigger("focus");
                }),
                n.on("close", function () {
                  i.$search.val(""),
                    i.$search.removeAttr("aria-activedescendant"),
                    i.$search.removeAttr("aria-owns"),
                    i.$search.trigger("focus");
                }),
                n.on("enable", function () {
                  i.$search.prop("disabled", !1), i._transferTabIndex();
                }),
                n.on("disable", function () {
                  i.$search.prop("disabled", !0);
                }),
                n.on("focus", function (e) {
                  i.$search.trigger("focus");
                }),
                n.on("results:focus", function (e) {
                  i.$search.attr("aria-activedescendant", e.data._resultId);
                }),
                this.$selection.on(
                  "focusin",
                  ".select2-search--inline",
                  function (e) {
                    i.trigger("focus", e);
                  }
                ),
                this.$selection.on(
                  "focusout",
                  ".select2-search--inline",
                  function (e) {
                    i._handleBlur(e);
                  }
                ),
                this.$selection.on(
                  "keydown",
                  ".select2-search--inline",
                  function (e) {
                    var t;
                    e.stopPropagation(),
                      i.trigger("keypress", e),
                      (i._keyUpPrevented = e.isDefaultPrevented()),
                      e.which === r.BACKSPACE && "" === i.$search.val()
                        ? 0 <
                            (t = i.$searchContainer.prev(
                              ".select2-selection__choice"
                            )).length &&
                          ((t = t.data("data")),
                          i.searchRemoveChoice(t),
                          e.preventDefault())
                        : e.which === r.ENTER && (n.open(), e.preventDefault());
                  }
                );
              var t = document.documentMode,
                s = t && t <= 11;
              this.$selection.on(
                "input.searchcheck",
                ".select2-search--inline",
                function (e) {
                  s
                    ? i.$selection.off("input.search input.searchcheck")
                    : i.$selection.off("keyup.search");
                }
              ),
                this.$selection.on(
                  "keyup.search input.search",
                  ".select2-search--inline",
                  function (e) {
                    var t;
                    s && "input" === e.type
                      ? i.$selection.off("input.search input.searchcheck")
                      : (t = e.which) != r.SHIFT &&
                        t != r.CTRL &&
                        t != r.ALT &&
                        t != r.TAB &&
                        i.handleSearch(e);
                  }
                );
            }),
            (t.prototype._transferTabIndex = function (e) {
              this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                this.$selection.attr("tabindex", "-1");
            }),
            (t.prototype.createPlaceholder = function (e, t) {
              this.$search.attr("placeholder", t.text);
            }),
            (t.prototype.update = function (e, t) {
              var n = this.$search[0] == document.activeElement;
              this.$search.attr("placeholder", ""),
                e.call(this, t),
                this.$selection
                  .find(".select2-selection__rendered")
                  .append(this.$searchContainer),
                this.resizeSearch(),
                n && this.$search.focus();
            }),
            (t.prototype.handleSearch = function () {
              var e;
              this.resizeSearch(),
                this._keyUpPrevented ||
                  ((e = this.$search.val()),
                  this.trigger("query", { term: e })),
                (this._keyUpPrevented = !1);
            }),
            (t.prototype.searchRemoveChoice = function (e, t) {
              this.trigger("unselect", { data: t }),
                this.$search.val(t.text),
                this.handleSearch();
            }),
            (t.prototype.resizeSearch = function () {
              this.$search.css("width", "25px");
              var e = "";
              (e =
                "" !== this.$search.attr("placeholder")
                  ? this.$selection
                      .find(".select2-selection__rendered")
                      .innerWidth()
                  : 0.75 * (this.$search.val().length + 1) + "em"),
                this.$search.css("width", e);
            }),
            t
          );
        }
      ),
      u.define("select2/selection/eventRelay", ["jquery"], function (r) {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            var i = this,
              o = [
                "open",
                "opening",
                "close",
                "closing",
                "select",
                "selecting",
                "unselect",
                "unselecting",
              ],
              s = ["opening", "closing", "selecting", "unselecting"];
            e.call(this, t, n),
              t.on("*", function (e, t) {
                var n;
                -1 !== r.inArray(e, o) &&
                  ((t = t || {}),
                  (n = r.Event("select2:" + e, { params: t })),
                  i.$element.trigger(n),
                  -1 !== r.inArray(e, s) &&
                    (t.prevented = n.isDefaultPrevented()));
              });
          }),
          e
        );
      }),
      u.define("select2/translation", ["jquery", "require"], function (t, n) {
        function i(e) {
          this.dict = e || {};
        }
        return (
          (i.prototype.all = function () {
            return this.dict;
          }),
          (i.prototype.get = function (e) {
            return this.dict[e];
          }),
          (i.prototype.extend = function (e) {
            this.dict = t.extend({}, e.all(), this.dict);
          }),
          (i._cache = {}),
          (i.loadPath = function (e) {
            var t;
            return (
              e in i._cache || ((t = n(e)), (i._cache[e] = t)),
              new i(i._cache[e])
            );
          }),
          i
        );
      }),
      u.define("select2/diacritics", [], function () {
        return {
          "Ⓐ": "A",
          Ａ: "A",
          À: "A",
          Á: "A",
          Â: "A",
          Ầ: "A",
          Ấ: "A",
          Ẫ: "A",
          Ẩ: "A",
          Ã: "A",
          Ā: "A",
          Ă: "A",
          Ằ: "A",
          Ắ: "A",
          Ẵ: "A",
          Ẳ: "A",
          Ȧ: "A",
          Ǡ: "A",
          Ä: "A",
          Ǟ: "A",
          Ả: "A",
          Å: "A",
          Ǻ: "A",
          Ǎ: "A",
          Ȁ: "A",
          Ȃ: "A",
          Ạ: "A",
          Ậ: "A",
          Ặ: "A",
          Ḁ: "A",
          Ą: "A",
          Ⱥ: "A",
          Ɐ: "A",
          Ꜳ: "AA",
          Æ: "AE",
          Ǽ: "AE",
          Ǣ: "AE",
          Ꜵ: "AO",
          Ꜷ: "AU",
          Ꜹ: "AV",
          Ꜻ: "AV",
          Ꜽ: "AY",
          "Ⓑ": "B",
          Ｂ: "B",
          Ḃ: "B",
          Ḅ: "B",
          Ḇ: "B",
          Ƀ: "B",
          Ƃ: "B",
          Ɓ: "B",
          "Ⓒ": "C",
          Ｃ: "C",
          Ć: "C",
          Ĉ: "C",
          Ċ: "C",
          Č: "C",
          Ç: "C",
          Ḉ: "C",
          Ƈ: "C",
          Ȼ: "C",
          Ꜿ: "C",
          "Ⓓ": "D",
          Ｄ: "D",
          Ḋ: "D",
          Ď: "D",
          Ḍ: "D",
          Ḑ: "D",
          Ḓ: "D",
          Ḏ: "D",
          Đ: "D",
          Ƌ: "D",
          Ɗ: "D",
          Ɖ: "D",
          Ꝺ: "D",
          Ǳ: "DZ",
          Ǆ: "DZ",
          ǲ: "Dz",
          ǅ: "Dz",
          "Ⓔ": "E",
          Ｅ: "E",
          È: "E",
          É: "E",
          Ê: "E",
          Ề: "E",
          Ế: "E",
          Ễ: "E",
          Ể: "E",
          Ẽ: "E",
          Ē: "E",
          Ḕ: "E",
          Ḗ: "E",
          Ĕ: "E",
          Ė: "E",
          Ë: "E",
          Ẻ: "E",
          Ě: "E",
          Ȅ: "E",
          Ȇ: "E",
          Ẹ: "E",
          Ệ: "E",
          Ȩ: "E",
          Ḝ: "E",
          Ę: "E",
          Ḙ: "E",
          Ḛ: "E",
          Ɛ: "E",
          Ǝ: "E",
          "Ⓕ": "F",
          Ｆ: "F",
          Ḟ: "F",
          Ƒ: "F",
          Ꝼ: "F",
          "Ⓖ": "G",
          Ｇ: "G",
          Ǵ: "G",
          Ĝ: "G",
          Ḡ: "G",
          Ğ: "G",
          Ġ: "G",
          Ǧ: "G",
          Ģ: "G",
          Ǥ: "G",
          Ɠ: "G",
          Ꞡ: "G",
          Ᵹ: "G",
          Ꝿ: "G",
          "Ⓗ": "H",
          Ｈ: "H",
          Ĥ: "H",
          Ḣ: "H",
          Ḧ: "H",
          Ȟ: "H",
          Ḥ: "H",
          Ḩ: "H",
          Ḫ: "H",
          Ħ: "H",
          Ⱨ: "H",
          Ⱶ: "H",
          Ɥ: "H",
          "Ⓘ": "I",
          Ｉ: "I",
          Ì: "I",
          Í: "I",
          Î: "I",
          Ĩ: "I",
          Ī: "I",
          Ĭ: "I",
          İ: "I",
          Ï: "I",
          Ḯ: "I",
          Ỉ: "I",
          Ǐ: "I",
          Ȉ: "I",
          Ȋ: "I",
          Ị: "I",
          Į: "I",
          Ḭ: "I",
          Ɨ: "I",
          "Ⓙ": "J",
          Ｊ: "J",
          Ĵ: "J",
          Ɉ: "J",
          "Ⓚ": "K",
          Ｋ: "K",
          Ḱ: "K",
          Ǩ: "K",
          Ḳ: "K",
          Ķ: "K",
          Ḵ: "K",
          Ƙ: "K",
          Ⱪ: "K",
          Ꝁ: "K",
          Ꝃ: "K",
          Ꝅ: "K",
          Ꞣ: "K",
          "Ⓛ": "L",
          Ｌ: "L",
          Ŀ: "L",
          Ĺ: "L",
          Ľ: "L",
          Ḷ: "L",
          Ḹ: "L",
          Ļ: "L",
          Ḽ: "L",
          Ḻ: "L",
          Ł: "L",
          Ƚ: "L",
          Ɫ: "L",
          Ⱡ: "L",
          Ꝉ: "L",
          Ꝇ: "L",
          Ꞁ: "L",
          Ǉ: "LJ",
          ǈ: "Lj",
          "Ⓜ": "M",
          Ｍ: "M",
          Ḿ: "M",
          Ṁ: "M",
          Ṃ: "M",
          Ɱ: "M",
          Ɯ: "M",
          "Ⓝ": "N",
          Ｎ: "N",
          Ǹ: "N",
          Ń: "N",
          Ñ: "N",
          Ṅ: "N",
          Ň: "N",
          Ṇ: "N",
          Ņ: "N",
          Ṋ: "N",
          Ṉ: "N",
          Ƞ: "N",
          Ɲ: "N",
          Ꞑ: "N",
          Ꞥ: "N",
          Ǌ: "NJ",
          ǋ: "Nj",
          "Ⓞ": "O",
          Ｏ: "O",
          Ò: "O",
          Ó: "O",
          Ô: "O",
          Ồ: "O",
          Ố: "O",
          Ỗ: "O",
          Ổ: "O",
          Õ: "O",
          Ṍ: "O",
          Ȭ: "O",
          Ṏ: "O",
          Ō: "O",
          Ṑ: "O",
          Ṓ: "O",
          Ŏ: "O",
          Ȯ: "O",
          Ȱ: "O",
          Ö: "O",
          Ȫ: "O",
          Ỏ: "O",
          Ő: "O",
          Ǒ: "O",
          Ȍ: "O",
          Ȏ: "O",
          Ơ: "O",
          Ờ: "O",
          Ớ: "O",
          Ỡ: "O",
          Ở: "O",
          Ợ: "O",
          Ọ: "O",
          Ộ: "O",
          Ǫ: "O",
          Ǭ: "O",
          Ø: "O",
          Ǿ: "O",
          Ɔ: "O",
          Ɵ: "O",
          Ꝋ: "O",
          Ꝍ: "O",
          Ƣ: "OI",
          Ꝏ: "OO",
          Ȣ: "OU",
          "Ⓟ": "P",
          Ｐ: "P",
          Ṕ: "P",
          Ṗ: "P",
          Ƥ: "P",
          Ᵽ: "P",
          Ꝑ: "P",
          Ꝓ: "P",
          Ꝕ: "P",
          "Ⓠ": "Q",
          Ｑ: "Q",
          Ꝗ: "Q",
          Ꝙ: "Q",
          Ɋ: "Q",
          "Ⓡ": "R",
          Ｒ: "R",
          Ŕ: "R",
          Ṙ: "R",
          Ř: "R",
          Ȑ: "R",
          Ȓ: "R",
          Ṛ: "R",
          Ṝ: "R",
          Ŗ: "R",
          Ṟ: "R",
          Ɍ: "R",
          Ɽ: "R",
          Ꝛ: "R",
          Ꞧ: "R",
          Ꞃ: "R",
          "Ⓢ": "S",
          Ｓ: "S",
          ẞ: "S",
          Ś: "S",
          Ṥ: "S",
          Ŝ: "S",
          Ṡ: "S",
          Š: "S",
          Ṧ: "S",
          Ṣ: "S",
          Ṩ: "S",
          Ș: "S",
          Ş: "S",
          Ȿ: "S",
          Ꞩ: "S",
          Ꞅ: "S",
          "Ⓣ": "T",
          Ｔ: "T",
          Ṫ: "T",
          Ť: "T",
          Ṭ: "T",
          Ț: "T",
          Ţ: "T",
          Ṱ: "T",
          Ṯ: "T",
          Ŧ: "T",
          Ƭ: "T",
          Ʈ: "T",
          Ⱦ: "T",
          Ꞇ: "T",
          Ꜩ: "TZ",
          "Ⓤ": "U",
          Ｕ: "U",
          Ù: "U",
          Ú: "U",
          Û: "U",
          Ũ: "U",
          Ṹ: "U",
          Ū: "U",
          Ṻ: "U",
          Ŭ: "U",
          Ü: "U",
          Ǜ: "U",
          Ǘ: "U",
          Ǖ: "U",
          Ǚ: "U",
          Ủ: "U",
          Ů: "U",
          Ű: "U",
          Ǔ: "U",
          Ȕ: "U",
          Ȗ: "U",
          Ư: "U",
          Ừ: "U",
          Ứ: "U",
          Ữ: "U",
          Ử: "U",
          Ự: "U",
          Ụ: "U",
          Ṳ: "U",
          Ų: "U",
          Ṷ: "U",
          Ṵ: "U",
          Ʉ: "U",
          "Ⓥ": "V",
          Ｖ: "V",
          Ṽ: "V",
          Ṿ: "V",
          Ʋ: "V",
          Ꝟ: "V",
          Ʌ: "V",
          Ꝡ: "VY",
          "Ⓦ": "W",
          Ｗ: "W",
          Ẁ: "W",
          Ẃ: "W",
          Ŵ: "W",
          Ẇ: "W",
          Ẅ: "W",
          Ẉ: "W",
          Ⱳ: "W",
          "Ⓧ": "X",
          Ｘ: "X",
          Ẋ: "X",
          Ẍ: "X",
          "Ⓨ": "Y",
          Ｙ: "Y",
          Ỳ: "Y",
          Ý: "Y",
          Ŷ: "Y",
          Ỹ: "Y",
          Ȳ: "Y",
          Ẏ: "Y",
          Ÿ: "Y",
          Ỷ: "Y",
          Ỵ: "Y",
          Ƴ: "Y",
          Ɏ: "Y",
          Ỿ: "Y",
          "Ⓩ": "Z",
          Ｚ: "Z",
          Ź: "Z",
          Ẑ: "Z",
          Ż: "Z",
          Ž: "Z",
          Ẓ: "Z",
          Ẕ: "Z",
          Ƶ: "Z",
          Ȥ: "Z",
          Ɀ: "Z",
          Ⱬ: "Z",
          Ꝣ: "Z",
          "ⓐ": "a",
          ａ: "a",
          ẚ: "a",
          à: "a",
          á: "a",
          â: "a",
          ầ: "a",
          ấ: "a",
          ẫ: "a",
          ẩ: "a",
          ã: "a",
          ā: "a",
          ă: "a",
          ằ: "a",
          ắ: "a",
          ẵ: "a",
          ẳ: "a",
          ȧ: "a",
          ǡ: "a",
          ä: "a",
          ǟ: "a",
          ả: "a",
          å: "a",
          ǻ: "a",
          ǎ: "a",
          ȁ: "a",
          ȃ: "a",
          ạ: "a",
          ậ: "a",
          ặ: "a",
          ḁ: "a",
          ą: "a",
          ⱥ: "a",
          ɐ: "a",
          ꜳ: "aa",
          æ: "ae",
          ǽ: "ae",
          ǣ: "ae",
          ꜵ: "ao",
          ꜷ: "au",
          ꜹ: "av",
          ꜻ: "av",
          ꜽ: "ay",
          "ⓑ": "b",
          ｂ: "b",
          ḃ: "b",
          ḅ: "b",
          ḇ: "b",
          ƀ: "b",
          ƃ: "b",
          ɓ: "b",
          "ⓒ": "c",
          ｃ: "c",
          ć: "c",
          ĉ: "c",
          ċ: "c",
          č: "c",
          ç: "c",
          ḉ: "c",
          ƈ: "c",
          ȼ: "c",
          ꜿ: "c",
          ↄ: "c",
          "ⓓ": "d",
          ｄ: "d",
          ḋ: "d",
          ď: "d",
          ḍ: "d",
          ḑ: "d",
          ḓ: "d",
          ḏ: "d",
          đ: "d",
          ƌ: "d",
          ɖ: "d",
          ɗ: "d",
          ꝺ: "d",
          ǳ: "dz",
          ǆ: "dz",
          "ⓔ": "e",
          ｅ: "e",
          è: "e",
          é: "e",
          ê: "e",
          ề: "e",
          ế: "e",
          ễ: "e",
          ể: "e",
          ẽ: "e",
          ē: "e",
          ḕ: "e",
          ḗ: "e",
          ĕ: "e",
          ė: "e",
          ë: "e",
          ẻ: "e",
          ě: "e",
          ȅ: "e",
          ȇ: "e",
          ẹ: "e",
          ệ: "e",
          ȩ: "e",
          ḝ: "e",
          ę: "e",
          ḙ: "e",
          ḛ: "e",
          ɇ: "e",
          ɛ: "e",
          ǝ: "e",
          "ⓕ": "f",
          ｆ: "f",
          ḟ: "f",
          ƒ: "f",
          ꝼ: "f",
          "ⓖ": "g",
          ｇ: "g",
          ǵ: "g",
          ĝ: "g",
          ḡ: "g",
          ğ: "g",
          ġ: "g",
          ǧ: "g",
          ģ: "g",
          ǥ: "g",
          ɠ: "g",
          ꞡ: "g",
          ᵹ: "g",
          ꝿ: "g",
          "ⓗ": "h",
          ｈ: "h",
          ĥ: "h",
          ḣ: "h",
          ḧ: "h",
          ȟ: "h",
          ḥ: "h",
          ḩ: "h",
          ḫ: "h",
          ẖ: "h",
          ħ: "h",
          ⱨ: "h",
          ⱶ: "h",
          ɥ: "h",
          ƕ: "hv",
          "ⓘ": "i",
          ｉ: "i",
          ì: "i",
          í: "i",
          î: "i",
          ĩ: "i",
          ī: "i",
          ĭ: "i",
          ï: "i",
          ḯ: "i",
          ỉ: "i",
          ǐ: "i",
          ȉ: "i",
          ȋ: "i",
          ị: "i",
          į: "i",
          ḭ: "i",
          ɨ: "i",
          ı: "i",
          "ⓙ": "j",
          ｊ: "j",
          ĵ: "j",
          ǰ: "j",
          ɉ: "j",
          "ⓚ": "k",
          ｋ: "k",
          ḱ: "k",
          ǩ: "k",
          ḳ: "k",
          ķ: "k",
          ḵ: "k",
          ƙ: "k",
          ⱪ: "k",
          ꝁ: "k",
          ꝃ: "k",
          ꝅ: "k",
          ꞣ: "k",
          "ⓛ": "l",
          ｌ: "l",
          ŀ: "l",
          ĺ: "l",
          ľ: "l",
          ḷ: "l",
          ḹ: "l",
          ļ: "l",
          ḽ: "l",
          ḻ: "l",
          ſ: "l",
          ł: "l",
          ƚ: "l",
          ɫ: "l",
          ⱡ: "l",
          ꝉ: "l",
          ꞁ: "l",
          ꝇ: "l",
          ǉ: "lj",
          "ⓜ": "m",
          ｍ: "m",
          ḿ: "m",
          ṁ: "m",
          ṃ: "m",
          ɱ: "m",
          ɯ: "m",
          "ⓝ": "n",
          ｎ: "n",
          ǹ: "n",
          ń: "n",
          ñ: "n",
          ṅ: "n",
          ň: "n",
          ṇ: "n",
          ņ: "n",
          ṋ: "n",
          ṉ: "n",
          ƞ: "n",
          ɲ: "n",
          ŉ: "n",
          ꞑ: "n",
          ꞥ: "n",
          ǌ: "nj",
          "ⓞ": "o",
          ｏ: "o",
          ò: "o",
          ó: "o",
          ô: "o",
          ồ: "o",
          ố: "o",
          ỗ: "o",
          ổ: "o",
          õ: "o",
          ṍ: "o",
          ȭ: "o",
          ṏ: "o",
          ō: "o",
          ṑ: "o",
          ṓ: "o",
          ŏ: "o",
          ȯ: "o",
          ȱ: "o",
          ö: "o",
          ȫ: "o",
          ỏ: "o",
          ő: "o",
          ǒ: "o",
          ȍ: "o",
          ȏ: "o",
          ơ: "o",
          ờ: "o",
          ớ: "o",
          ỡ: "o",
          ở: "o",
          ợ: "o",
          ọ: "o",
          ộ: "o",
          ǫ: "o",
          ǭ: "o",
          ø: "o",
          ǿ: "o",
          ɔ: "o",
          ꝋ: "o",
          ꝍ: "o",
          ɵ: "o",
          ƣ: "oi",
          ȣ: "ou",
          ꝏ: "oo",
          "ⓟ": "p",
          ｐ: "p",
          ṕ: "p",
          ṗ: "p",
          ƥ: "p",
          ᵽ: "p",
          ꝑ: "p",
          ꝓ: "p",
          ꝕ: "p",
          "ⓠ": "q",
          ｑ: "q",
          ɋ: "q",
          ꝗ: "q",
          ꝙ: "q",
          "ⓡ": "r",
          ｒ: "r",
          ŕ: "r",
          ṙ: "r",
          ř: "r",
          ȑ: "r",
          ȓ: "r",
          ṛ: "r",
          ṝ: "r",
          ŗ: "r",
          ṟ: "r",
          ɍ: "r",
          ɽ: "r",
          ꝛ: "r",
          ꞧ: "r",
          ꞃ: "r",
          "ⓢ": "s",
          ｓ: "s",
          ß: "s",
          ś: "s",
          ṥ: "s",
          ŝ: "s",
          ṡ: "s",
          š: "s",
          ṧ: "s",
          ṣ: "s",
          ṩ: "s",
          ș: "s",
          ş: "s",
          ȿ: "s",
          ꞩ: "s",
          ꞅ: "s",
          ẛ: "s",
          "ⓣ": "t",
          ｔ: "t",
          ṫ: "t",
          ẗ: "t",
          ť: "t",
          ṭ: "t",
          ț: "t",
          ţ: "t",
          ṱ: "t",
          ṯ: "t",
          ŧ: "t",
          ƭ: "t",
          ʈ: "t",
          ⱦ: "t",
          ꞇ: "t",
          ꜩ: "tz",
          "ⓤ": "u",
          ｕ: "u",
          ù: "u",
          ú: "u",
          û: "u",
          ũ: "u",
          ṹ: "u",
          ū: "u",
          ṻ: "u",
          ŭ: "u",
          ü: "u",
          ǜ: "u",
          ǘ: "u",
          ǖ: "u",
          ǚ: "u",
          ủ: "u",
          ů: "u",
          ű: "u",
          ǔ: "u",
          ȕ: "u",
          ȗ: "u",
          ư: "u",
          ừ: "u",
          ứ: "u",
          ữ: "u",
          ử: "u",
          ự: "u",
          ụ: "u",
          ṳ: "u",
          ų: "u",
          ṷ: "u",
          ṵ: "u",
          ʉ: "u",
          "ⓥ": "v",
          ｖ: "v",
          ṽ: "v",
          ṿ: "v",
          ʋ: "v",
          ꝟ: "v",
          ʌ: "v",
          ꝡ: "vy",
          "ⓦ": "w",
          ｗ: "w",
          ẁ: "w",
          ẃ: "w",
          ŵ: "w",
          ẇ: "w",
          ẅ: "w",
          ẘ: "w",
          ẉ: "w",
          ⱳ: "w",
          "ⓧ": "x",
          ｘ: "x",
          ẋ: "x",
          ẍ: "x",
          "ⓨ": "y",
          ｙ: "y",
          ỳ: "y",
          ý: "y",
          ŷ: "y",
          ỹ: "y",
          ȳ: "y",
          ẏ: "y",
          ÿ: "y",
          ỷ: "y",
          ẙ: "y",
          ỵ: "y",
          ƴ: "y",
          ɏ: "y",
          ỿ: "y",
          "ⓩ": "z",
          ｚ: "z",
          ź: "z",
          ẑ: "z",
          ż: "z",
          ž: "z",
          ẓ: "z",
          ẕ: "z",
          ƶ: "z",
          ȥ: "z",
          ɀ: "z",
          ⱬ: "z",
          ꝣ: "z",
          Ά: "Α",
          Έ: "Ε",
          Ή: "Η",
          Ί: "Ι",
          Ϊ: "Ι",
          Ό: "Ο",
          Ύ: "Υ",
          Ϋ: "Υ",
          Ώ: "Ω",
          ά: "α",
          έ: "ε",
          ή: "η",
          ί: "ι",
          ϊ: "ι",
          ΐ: "ι",
          ό: "ο",
          ύ: "υ",
          ϋ: "υ",
          ΰ: "υ",
          ω: "ω",
          ς: "σ",
        };
      }),
      u.define("select2/data/base", ["../utils"], function (i) {
        function n(e, t) {
          n.__super__.constructor.call(this);
        }
        return (
          i.Extend(n, i.Observable),
          (n.prototype.current = function (e) {
            throw new Error(
              "The `current` method must be defined in child classes."
            );
          }),
          (n.prototype.query = function (e, t) {
            throw new Error(
              "The `query` method must be defined in child classes."
            );
          }),
          (n.prototype.bind = function (e, t) {}),
          (n.prototype.destroy = function () {}),
          (n.prototype.generateResultId = function (e, t) {
            var n = "";
            return (
              (n += null != e ? e.id : i.generateChars(4)),
              (n += "-result-"),
              (n += i.generateChars(4)),
              null != t.id
                ? (n += "-" + t.id.toString())
                : (n += "-" + i.generateChars(4)),
              n
            );
          }),
          n
        );
      }),
      u.define(
        "select2/data/select",
        ["./base", "../utils", "jquery"],
        function (e, t, r) {
          function n(e, t) {
            (this.$element = e),
              (this.options = t),
              n.__super__.constructor.call(this);
          }
          return (
            t.Extend(n, e),
            (n.prototype.current = function (e) {
              var t = [],
                n = this;
              this.$element.find(":selected").each(function () {
                var e = r(this),
                  e = n.item(e);
                t.push(e);
              }),
                e(t);
            }),
            (n.prototype.select = function (o) {
              var e,
                s = this;
              if (((o.selected = !0), r(o.element).is("option")))
                return (
                  (o.element.selected = !0),
                  void this.$element.trigger("change")
                );
              this.$element.prop("multiple")
                ? this.current(function (e) {
                    var t = [];
                    (o = [o]).push.apply(o, e);
                    for (var n = 0; n < o.length; n++) {
                      var i = o[n].id;
                      -1 === r.inArray(i, t) && t.push(i);
                    }
                    s.$element.val(t), s.$element.trigger("change");
                  })
                : ((e = o.id),
                  this.$element.val(e),
                  this.$element.trigger("change"));
            }),
            (n.prototype.unselect = function (o) {
              var s = this;
              if (this.$element.prop("multiple")) {
                if (((o.selected = !1), r(o.element).is("option")))
                  return (
                    (o.element.selected = !1),
                    void this.$element.trigger("change")
                  );
                this.current(function (e) {
                  for (var t = [], n = 0; n < e.length; n++) {
                    var i = e[n].id;
                    i !== o.id && -1 === r.inArray(i, t) && t.push(i);
                  }
                  s.$element.val(t), s.$element.trigger("change");
                });
              }
            }),
            (n.prototype.bind = function (e, t) {
              var n = this;
              (this.container = e).on("select", function (e) {
                n.select(e.data);
              }),
                e.on("unselect", function (e) {
                  n.unselect(e.data);
                });
            }),
            (n.prototype.destroy = function () {
              this.$element.find("*").each(function () {
                r.removeData(this, "data");
              });
            }),
            (n.prototype.query = function (t, e) {
              var n = [],
                i = this;
              this.$element.children().each(function () {
                var e = r(this);
                (e.is("option") || e.is("optgroup")) &&
                  ((e = i.item(e)),
                  null !== (e = i.matches(t, e)) && n.push(e));
              }),
                e({ results: n });
            }),
            (n.prototype.addOptions = function (e) {
              t.appendMany(this.$element, e);
            }),
            (n.prototype.option = function (e) {
              var t;
              e.children
                ? ((t = document.createElement("optgroup")).label = e.text)
                : (t = document.createElement("option")).textContent !==
                  undefined
                ? (t.textContent = e.text)
                : (t.innerText = e.text),
                e.id !== undefined && (t.value = e.id),
                e.disabled && (t.disabled = !0),
                e.selected && (t.selected = !0),
                e.title && (t.title = e.title);
              var n = r(t),
                e = this._normalizeItem(e);
              return (e.element = t), r.data(t, "data", e), n;
            }),
            (n.prototype.item = function (e) {
              var t = {};
              if (null != (t = r.data(e[0], "data"))) return t;
              if (e.is("option"))
                t = {
                  id: e.val(),
                  text: e.text(),
                  disabled: e.prop("disabled"),
                  selected: e.prop("selected"),
                  title: e.prop("title"),
                };
              else if (e.is("optgroup")) {
                t = {
                  text: e.prop("label"),
                  children: [],
                  title: e.prop("title"),
                };
                for (
                  var n = e.children("option"), i = [], o = 0;
                  o < n.length;
                  o++
                ) {
                  var s = r(n[o]),
                    s = this.item(s);
                  i.push(s);
                }
                t.children = i;
              }
              return (
                ((t = this._normalizeItem(t)).element = e[0]),
                r.data(e[0], "data", t),
                t
              );
            }),
            (n.prototype._normalizeItem = function (e) {
              r.isPlainObject(e) || (e = { id: e, text: e });
              return (
                null != (e = r.extend({}, { text: "" }, e)).id &&
                  (e.id = e.id.toString()),
                null != e.text && (e.text = e.text.toString()),
                null == e._resultId &&
                  e.id &&
                  (e._resultId = this.generateResultId(this.container, e)),
                r.extend({}, { selected: !1, disabled: !1 }, e)
              );
            }),
            (n.prototype.matches = function (e, t) {
              return this.options.get("matcher")(e, t);
            }),
            n
          );
        }
      ),
      u.define(
        "select2/data/array",
        ["./select", "../utils", "jquery"],
        function (e, c, u) {
          function i(e, t) {
            var n = t.get("data") || [];
            i.__super__.constructor.call(this, e, t),
              this.addOptions(this.convertToOptions(n));
          }
          return (
            c.Extend(i, e),
            (i.prototype.select = function (n) {
              var e = this.$element.find("option").filter(function (e, t) {
                return t.value == n.id.toString();
              });
              0 === e.length && ((e = this.option(n)), this.addOptions(e)),
                i.__super__.select.call(this, n);
            }),
            (i.prototype.convertToOptions = function (e) {
              var t = this,
                n = this.$element.find("option"),
                i = n
                  .map(function () {
                    return t.item(u(this)).id;
                  })
                  .get(),
                o = [];
              for (var s = 0; s < e.length; s++) {
                var r,
                  a,
                  l = this._normalizeItem(e[s]);
                0 <= u.inArray(l.id, i)
                  ? ((r = n.filter(
                      (function (e) {
                        return function () {
                          return u(this).val() == e.id;
                        };
                      })(l)
                    )),
                    (a = this.item(r)),
                    (a = u.extend(!0, {}, l, a)),
                    (a = this.option(a)),
                    r.replaceWith(a))
                  : ((a = this.option(l)),
                    l.children &&
                      ((l = this.convertToOptions(l.children)),
                      c.appendMany(a, l)),
                    o.push(a));
              }
              return o;
            }),
            i
          );
        }
      ),
      u.define(
        "select2/data/ajax",
        ["./array", "../utils", "jquery"],
        function (e, t, s) {
          function n(e, t) {
            (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
              null != this.ajaxOptions.processResults &&
                (this.processResults = this.ajaxOptions.processResults),
              n.__super__.constructor.call(this, e, t);
          }
          return (
            t.Extend(n, e),
            (n.prototype._applyDefaults = function (e) {
              var t = {
                data: function (e) {
                  return s.extend({}, e, { q: e.term });
                },
                transport: function (e, t, n) {
                  e = s.ajax(e);
                  return e.then(t), e.fail(n), e;
                },
              };
              return s.extend({}, t, e, !0);
            }),
            (n.prototype.processResults = function (e) {
              return e;
            }),
            (n.prototype.query = function (t, n) {
              var i = this;
              null != this._request &&
                (s.isFunction(this._request.abort) && this._request.abort(),
                (this._request = null));
              var o = s.extend({ type: "GET" }, this.ajaxOptions);
              function e() {
                var e = o.transport(
                  o,
                  function (e) {
                    e = i.processResults(e, t);
                    i.options.get("debug") &&
                      window.console &&
                      console.error &&
                      ((e && e.results && s.isArray(e.results)) ||
                        console.error(
                          "Select2: The AJAX results did not return an array in the `results` key of the response."
                        )),
                      n(e),
                      i.container.focusOnActiveElement();
                  },
                  function () {
                    (e.status && "0" === e.status) ||
                      i.trigger("results:message", { message: "errorLoading" });
                  }
                );
                i._request = e;
              }
              "function" == typeof o.url &&
                (o.url = o.url.call(this.$element, t)),
                "function" == typeof o.data &&
                  (o.data = o.data.call(this.$element, t)),
                this.ajaxOptions.delay && null != t.term
                  ? (this._queryTimeout &&
                      window.clearTimeout(this._queryTimeout),
                    (this._queryTimeout = window.setTimeout(
                      e,
                      this.ajaxOptions.delay
                    )))
                  : e();
            }),
            n
          );
        }
      ),
      u.define("select2/data/tags", ["jquery"], function (a) {
        function e(e, t, n) {
          var i = n.get("tags"),
            o = n.get("createTag");
          o !== undefined && (this.createTag = o);
          o = n.get("insertTag");
          if (
            (o !== undefined && (this.insertTag = o),
            e.call(this, t, n),
            a.isArray(i))
          )
            for (var s = 0; s < i.length; s++) {
              var r = i[s],
                r = this._normalizeItem(r),
                r = this.option(r);
              this.$element.append(r);
            }
        }
        return (
          (e.prototype.query = function (e, l, c) {
            var u = this;
            this._removeOldTags(),
              null != l.term && null == l.page
                ? e.call(this, l, function d(e, t) {
                    for (var n = e.results, i = 0; i < n.length; i++) {
                      var o = n[i],
                        s =
                          null != o.children && !d({ results: o.children }, !0);
                      if (
                        (o.text || "").toUpperCase() ===
                          (l.term || "").toUpperCase() ||
                        s
                      )
                        return !t && ((e.data = n), void c(e));
                    }
                    if (t) return !0;
                    var r,
                      a = u.createTag(l);
                    null != a &&
                      ((r = u.option(a)).attr("data-select2-tag", !0),
                      u.addOptions([r]),
                      u.insertTag(n, a)),
                      (e.results = n),
                      c(e);
                  })
                : e.call(this, l, c);
          }),
          (e.prototype.createTag = function (e, t) {
            t = a.trim(t.term);
            return "" === t ? null : { id: t, text: t };
          }),
          (e.prototype.insertTag = function (e, t, n) {
            t.unshift(n);
          }),
          (e.prototype._removeOldTags = function (e) {
            this._lastTag;
            this.$element.find("option[data-select2-tag]").each(function () {
              this.selected || a(this).remove();
            });
          }),
          e
        );
      }),
      u.define("select2/data/tokenizer", ["jquery"], function (c) {
        function e(e, t, n) {
          var i = n.get("tokenizer");
          i !== undefined && (this.tokenizer = i), e.call(this, t, n);
        }
        return (
          (e.prototype.bind = function (e, t, n) {
            e.call(this, t, n),
              (this.$search =
                t.dropdown.$search ||
                t.selection.$search ||
                n.find(".select2-search__field"));
          }),
          (e.prototype.query = function (e, t, n) {
            var i = this;
            t.term = t.term || "";
            var o = this.tokenizer(t, this.options, function (e) {
              var t,
                n = i._normalizeItem(e);
              i.$element.find("option").filter(function () {
                return c(this).val() === n.id;
              }).length ||
                ((t = i.option(n)).attr("data-select2-tag", !0),
                i._removeOldTags(),
                i.addOptions([t])),
                (t = n),
                i.trigger("select", { data: t });
            });
            o.term !== t.term &&
              (this.$search.length &&
                (this.$search.val(o.term), this.$search.focus()),
              (t.term = o.term)),
              e.call(this, t, n);
          }),
          (e.prototype.tokenizer = function (e, t, n, i) {
            for (
              var o = n.get("tokenSeparators") || [],
                s = t.term,
                r = 0,
                a =
                  this.createTag ||
                  function (e) {
                    return { id: e.term, text: e.term };
                  };
              r < s.length;

            ) {
              var l = s[r];
              -1 !== c.inArray(l, o)
                ? ((l = s.substr(0, r)),
                  null != (l = a(c.extend({}, t, { term: l })))
                    ? (i(l), (s = s.substr(r + 1) || ""), (r = 0))
                    : r++)
                : r++;
            }
            return { term: s };
          }),
          e
        );
      }),
      u.define("select2/data/minimumInputLength", [], function () {
        function e(e, t, n) {
          (this.minimumInputLength = n.get("minimumInputLength")),
            e.call(this, t, n);
        }
        return (
          (e.prototype.query = function (e, t, n) {
            (t.term = t.term || ""),
              t.term.length < this.minimumInputLength
                ? this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {
                      minimum: this.minimumInputLength,
                      input: t.term,
                      params: t,
                    },
                  })
                : e.call(this, t, n);
          }),
          e
        );
      }),
      u.define("select2/data/maximumInputLength", [], function () {
        function e(e, t, n) {
          (this.maximumInputLength = n.get("maximumInputLength")),
            e.call(this, t, n);
        }
        return (
          (e.prototype.query = function (e, t, n) {
            (t.term = t.term || ""),
              0 < this.maximumInputLength &&
              t.term.length > this.maximumInputLength
                ? this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {
                      maximum: this.maximumInputLength,
                      input: t.term,
                      params: t,
                    },
                  })
                : e.call(this, t, n);
          }),
          e
        );
      }),
      u.define("select2/data/maximumSelectionLength", [], function () {
        function e(e, t, n) {
          (this.maximumSelectionLength = n.get("maximumSelectionLength")),
            e.call(this, t, n);
        }
        return (
          (e.prototype.query = function (t, n, i) {
            var o = this;
            this.current(function (e) {
              e = null != e ? e.length : 0;
              0 < o.maximumSelectionLength && e >= o.maximumSelectionLength
                ? o.trigger("results:message", {
                    message: "maximumSelected",
                    args: { maximum: o.maximumSelectionLength },
                  })
                : t.call(o, n, i);
            });
          }),
          e
        );
      }),
      u.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
        function n(e, t) {
          (this.$element = e),
            (this.options = t),
            n.__super__.constructor.call(this);
        }
        return (
          e.Extend(n, e.Observable),
          (n.prototype.render = function () {
            var e = t(
              '<span class="select2-dropdown"><span class="select2-results"></span></span>'
            );
            return e.attr("dir", this.options.get("dir")), (this.$dropdown = e);
          }),
          (n.prototype.bind = function () {}),
          (n.prototype.position = function (e, t) {}),
          (n.prototype.destroy = function () {
            this.$dropdown.remove();
          }),
          n
        );
      }),
      u.define(
        "select2/dropdown/search",
        ["jquery", "../utils"],
        function (s, e) {
          function t() {}
          return (
            (t.prototype.render = function (e) {
              var t = e.call(this),
                e = s(
                  '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="text" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="true" /></span>'
                );
              return (
                (this.$searchContainer = e),
                (this.$search = e.find("input")),
                t.prepend(e),
                t
              );
            }),
            (t.prototype.bind = function (e, t, n) {
              var i = this,
                o = t.id + "-results";
              e.call(this, t, n),
                this.$search.on("keydown", function (e) {
                  i.trigger("keypress", e),
                    (i._keyUpPrevented = e.isDefaultPrevented());
                }),
                this.$search.on("input", function (e) {
                  s(this).off("keyup");
                }),
                this.$search.on("keyup input", function (e) {
                  i.handleSearch(e);
                }),
                t.on("open", function () {
                  i.$search.attr("tabindex", 0),
                    i.$search.attr("aria-owns", o),
                    i.$search.focus(),
                    window.setTimeout(function () {
                      i.$search.focus();
                    }, 0);
                }),
                t.on("close", function () {
                  i.$search.attr("tabindex", -1),
                    i.$search.removeAttr("aria-activedescendant"),
                    i.$search.removeAttr("aria-owns"),
                    i.$search.val("");
                }),
                t.on("focus", function () {
                  t.isOpen() || i.$search.focus();
                }),
                t.on("results:all", function (e) {
                  (null != e.query.term && "" !== e.query.term) ||
                    (i.showSearch(e)
                      ? i.$searchContainer.removeClass("select2-search--hide")
                      : i.$searchContainer.addClass("select2-search--hide"));
                }),
                t.on("results:focus", function (e) {
                  i.$search.attr("aria-activedescendant", e.data._resultId);
                });
            }),
            (t.prototype.handleSearch = function (e) {
              var t;
              this._keyUpPrevented ||
                ((t = this.$search.val()), this.trigger("query", { term: t })),
                (this._keyUpPrevented = !1);
            }),
            (t.prototype.showSearch = function (e, t) {
              return !0;
            }),
            t
          );
        }
      ),
      u.define("select2/dropdown/hidePlaceholder", [], function () {
        function e(e, t, n, i) {
          (this.placeholder = this.normalizePlaceholder(n.get("placeholder"))),
            e.call(this, t, n, i);
        }
        return (
          (e.prototype.append = function (e, t) {
            (t.results = this.removePlaceholder(t.results)), e.call(this, t);
          }),
          (e.prototype.normalizePlaceholder = function (e, t) {
            return "string" == typeof t && (t = { id: "", text: t }), t;
          }),
          (e.prototype.removePlaceholder = function (e, t) {
            for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--) {
              var o = t[i];
              this.placeholder.id === o.id && n.splice(i, 1);
            }
            return n;
          }),
          e
        );
      }),
      u.define("select2/dropdown/infiniteScroll", ["jquery"], function (o) {
        function e(e, t, n, i) {
          (this.lastParams = {}),
            e.call(this, t, n, i),
            (this.$loadingMore = this.createLoadingMore()),
            (this.loading = !1);
        }
        return (
          (e.prototype.append = function (e, t) {
            this.$loadingMore.remove(),
              (this.loading = !1),
              e.call(this, t),
              this.showLoadingMore(t) &&
                this.$results.append(this.$loadingMore);
          }),
          (e.prototype.bind = function (e, t, n) {
            var i = this;
            e.call(this, t, n),
              t.on("query", function (e) {
                (i.lastParams = e), (i.loading = !0);
              }),
              t.on("query:append", function (e) {
                (i.lastParams = e), (i.loading = !0);
              }),
              this.$results.on("scroll", function () {
                var e = o.contains(document.documentElement, i.$loadingMore[0]);
                !i.loading &&
                  e &&
                  ((e = i.$results.offset().top + i.$results.outerHeight(!1)),
                  i.$loadingMore.offset().top +
                    i.$loadingMore.outerHeight(!1) <=
                    e + 50 && i.loadMore());
              });
          }),
          (e.prototype.loadMore = function () {
            this.loading = !0;
            var e = o.extend({}, { page: 1 }, this.lastParams);
            e.page++, this.trigger("query:append", e);
          }),
          (e.prototype.showLoadingMore = function (e, t) {
            return t.pagination && t.pagination.more;
          }),
          (e.prototype.createLoadingMore = function () {
            var e = o(
                '<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'
              ),
              t = this.options.get("translations").get("loadingMore");
            return e.html(t(this.lastParams)), e;
          }),
          e
        );
      }),
      u.define(
        "select2/dropdown/attachBody",
        ["jquery", "../utils"],
        function (c, r) {
          function e(e, t, n) {
            (this.$dropdownParent =
              n.get("dropdownParent") || c(document.body)),
              e.call(this, t, n);
          }
          return (
            (e.prototype.bind = function (e, t, n) {
              var i = this,
                o = !1;
              e.call(this, t, n),
                t.on("open", function () {
                  i._showDropdown(),
                    i._attachPositioningHandler(t),
                    o ||
                      ((o = !0),
                      t.on("results:all", function () {
                        i._positionDropdown(), i._resizeDropdown();
                      }),
                      t.on("results:append", function () {
                        i._positionDropdown(), i._resizeDropdown();
                      }));
                }),
                t.on("close", function () {
                  i._hideDropdown(), i._detachPositioningHandler(t);
                }),
                this.$dropdownContainer.on("mousedown", function (e) {
                  e.stopPropagation();
                });
            }),
            (e.prototype.destroy = function (e) {
              e.call(this), this.$dropdownContainer.remove();
            }),
            (e.prototype.position = function (e, t, n) {
              t.attr("class", n.attr("class")),
                t.removeClass("select2"),
                t.addClass("select2-container--open"),
                t.css({ position: "absolute", top: -999999 }),
                (this.$container = n);
            }),
            (e.prototype.render = function (e) {
              var t = c("<span></span>"),
                e = e.call(this);
              return t.append(e), (this.$dropdownContainer = t);
            }),
            (e.prototype._hideDropdown = function (e) {
              this.$dropdownContainer.detach();
            }),
            (e.prototype._attachPositioningHandler = function (e, t) {
              var n = this,
                i = "scroll.select2." + t.id,
                o = "resize.select2." + t.id,
                s = "orientationchange.select2." + t.id,
                t = this.$container.parents().filter(r.hasScroll);
              t.each(function () {
                c(this).data("select2-scroll-position", {
                  x: c(this).scrollLeft(),
                  y: c(this).scrollTop(),
                });
              }),
                t.on(i, function (e) {
                  var t = c(this).data("select2-scroll-position");
                  c(this).scrollTop(t.y);
                }),
                c(window).on(i + " " + o + " " + s, function (e) {
                  n._positionDropdown(), n._resizeDropdown();
                });
            }),
            (e.prototype._detachPositioningHandler = function (e, t) {
              var n = "scroll.select2." + t.id,
                i = "resize.select2." + t.id,
                t = "orientationchange.select2." + t.id;
              this.$container.parents().filter(r.hasScroll).off(n),
                c(window).off(n + " " + i + " " + t);
            }),
            (e.prototype._positionDropdown = function () {
              var e = c(window),
                t = this.$dropdown.hasClass("select2-dropdown--above"),
                n = this.$dropdown.hasClass("select2-dropdown--below"),
                i = null,
                o = this.$container.offset();
              o.bottom = o.top + this.$container.outerHeight(!1);
              var s = { height: this.$container.outerHeight(!1) };
              (s.top = o.top), (s.bottom = o.top + s.height);
              var r = this.$dropdown.outerHeight(!1),
                a = e.scrollTop(),
                l = e.scrollTop() + e.height(),
                e = a < o.top - r,
                a = l > o.bottom + r,
                l = { left: o.left, top: s.bottom },
                o = this.$dropdownParent;
              "static" === o.css("position") && (o = o.offsetParent());
              o = o.offset();
              (l.left -= o.left),
                t || n || (i = "below"),
                a || !e || t ? !e && a && t && (i = "below") : (i = "above"),
                ("above" == i || (t && "below" !== i)) && (l.top = s.top - r),
                null != i &&
                  (this.$dropdown
                    .removeClass(
                      "select2-dropdown--below select2-dropdown--above"
                    )
                    .addClass("select2-dropdown--" + i),
                  this.$container
                    .removeClass(
                      "select2-container--below select2-container--above"
                    )
                    .addClass("select2-container--" + i)),
                this.$dropdownContainer.css(l);
            }),
            (e.prototype._resizeDropdown = function () {
              var e = { width: this.$container.outerWidth(!1) + "px" };
              this.options.get("dropdownAutoWidth") &&
                ((e.minWidth = e.width),
                (e.position = "relative"),
                (e.width = "auto")),
                this.$dropdown.css(e);
            }),
            (e.prototype._showDropdown = function (e) {
              this.$dropdownContainer.appendTo(this.$dropdownParent),
                this._positionDropdown(),
                this._resizeDropdown();
            }),
            e
          );
        }
      ),
      u.define("select2/dropdown/minimumResultsForSearch", [], function () {
        function e(e, t, n, i) {
          (this.minimumResultsForSearch = n.get("minimumResultsForSearch")),
            this.minimumResultsForSearch < 0 &&
              (this.minimumResultsForSearch = Infinity),
            e.call(this, t, n, i);
        }
        return (
          (e.prototype.showSearch = function (e, t) {
            return (
              !(
                (function o(e) {
                  for (var t = 0, n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.children ? (t += o(i.children)) : t++;
                  }
                  return t;
                })(t.data.results) < this.minimumResultsForSearch
              ) && e.call(this, t)
            );
          }),
          e
        );
      }),
      u.define("select2/dropdown/selectOnClose", [], function () {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            var i = this;
            e.call(this, t, n),
              t.on("close", function (e) {
                i._handleSelectOnClose(e);
              });
          }),
          (e.prototype._handleSelectOnClose = function (e, t) {
            if (t && null != t.originalSelect2Event) {
              var n = t.originalSelect2Event;
              if ("select" === n._type || "unselect" === n._type) return;
            }
            n = this.getHighlightedResults();
            n.length < 1 ||
              (null != (n = n.data("data")).element && n.element.selected) ||
              (null == n.element && n.selected) ||
              this.trigger("select", { data: n });
          }),
          e
        );
      }),
      u.define("select2/dropdown/closeOnSelect", [], function () {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            var i = this;
            e.call(this, t, n),
              t.on("select", function (e) {
                i._selectTriggered(e);
              }),
              t.on("unselect", function (e) {
                i._selectTriggered(e);
              });
          }),
          (e.prototype._selectTriggered = function (e, t) {
            var n = t.originalEvent;
            (n && n.ctrlKey) ||
              this.trigger("close", {
                originalEvent: n,
                originalSelect2Event: t,
              });
          }),
          e
        );
      }),
      u.define("select2/i18n/en", [], function () {
        return {
          errorLoading: function () {
            return "The results could not be loaded.";
          },
          inputTooLong: function (e) {
            var t = e.input.length - e.maximum,
              e = "Please delete " + t + " character";
            return 1 != t && (e += "s"), e;
          },
          inputTooShort: function (e) {
            return (
              "Please enter " +
              (e.minimum - e.input.length) +
              " or more characters"
            );
          },
          loadingMore: function () {
            return "Loading more results…";
          },
          maximumSelected: function (e) {
            var t = "You can only select " + e.maximum + " item";
            return 1 != e.maximum && (t += "s"), t;
          },
          noResults: function () {
            return "No results found";
          },
          searching: function () {
            return "Searching…";
          },
        };
      }),
      u.define(
        "select2/defaults",
        [
          "jquery",
          "require",
          "./results",
          "./selection/single",
          "./selection/multiple",
          "./selection/placeholder",
          "./selection/allowClear",
          "./selection/search",
          "./selection/eventRelay",
          "./utils",
          "./translation",
          "./diacritics",
          "./data/select",
          "./data/array",
          "./data/ajax",
          "./data/tags",
          "./data/tokenizer",
          "./data/minimumInputLength",
          "./data/maximumInputLength",
          "./data/maximumSelectionLength",
          "./dropdown",
          "./dropdown/search",
          "./dropdown/hidePlaceholder",
          "./dropdown/infiniteScroll",
          "./dropdown/attachBody",
          "./dropdown/minimumResultsForSearch",
          "./dropdown/selectOnClose",
          "./dropdown/closeOnSelect",
          "./i18n/en",
        ],
        function (
          p,
          h,
          f,
          g,
          m,
          y,
          v,
          w,
          _,
          $,
          b,
          t,
          x,
          A,
          C,
          S,
          O,
          E,
          D,
          T,
          q,
          j,
          L,
          k,
          P,
          I,
          M,
          R,
          e
        ) {
          function n() {
            this.reset();
          }
          return (
            (n.prototype.apply = function (e) {
              var t, n;
              if (
                (null == (e = p.extend(!0, {}, this.defaults, e)).dataAdapter &&
                  (null != e.ajax
                    ? (e.dataAdapter = C)
                    : null != e.data
                    ? (e.dataAdapter = A)
                    : (e.dataAdapter = x),
                  0 < e.minimumInputLength &&
                    (e.dataAdapter = $.Decorate(e.dataAdapter, E)),
                  0 < e.maximumInputLength &&
                    (e.dataAdapter = $.Decorate(e.dataAdapter, D)),
                  0 < e.maximumSelectionLength &&
                    (e.dataAdapter = $.Decorate(e.dataAdapter, T)),
                  e.tags && (e.dataAdapter = $.Decorate(e.dataAdapter, S)),
                  (null == e.tokenSeparators && null == e.tokenizer) ||
                    (e.dataAdapter = $.Decorate(e.dataAdapter, O)),
                  null != e.query &&
                    ((t = h(e.amdBase + "compat/query")),
                    (e.dataAdapter = $.Decorate(e.dataAdapter, t))),
                  null != e.initSelection &&
                    ((t = h(e.amdBase + "compat/initSelection")),
                    (e.dataAdapter = $.Decorate(e.dataAdapter, t)))),
                null == e.resultsAdapter &&
                  ((e.resultsAdapter = f),
                  null != e.ajax &&
                    (e.resultsAdapter = $.Decorate(e.resultsAdapter, k)),
                  null != e.placeholder &&
                    (e.resultsAdapter = $.Decorate(e.resultsAdapter, L)),
                  e.selectOnClose &&
                    (e.resultsAdapter = $.Decorate(e.resultsAdapter, M))),
                null == e.dropdownAdapter &&
                  (e.multiple
                    ? (e.dropdownAdapter = q)
                    : ((n = $.Decorate(q, j)), (e.dropdownAdapter = n)),
                  0 !== e.minimumResultsForSearch &&
                    (e.dropdownAdapter = $.Decorate(e.dropdownAdapter, I)),
                  e.closeOnSelect &&
                    (e.dropdownAdapter = $.Decorate(e.dropdownAdapter, R)),
                  (null == e.dropdownCssClass &&
                    null == e.dropdownCss &&
                    null == e.adaptDropdownCssClass) ||
                    ((n = h(e.amdBase + "compat/dropdownCss")),
                    (e.dropdownAdapter = $.Decorate(e.dropdownAdapter, n))),
                  (e.dropdownAdapter = $.Decorate(e.dropdownAdapter, P))),
                null == e.selectionAdapter &&
                  (e.multiple
                    ? (e.selectionAdapter = m)
                    : (e.selectionAdapter = g),
                  null != e.placeholder &&
                    (e.selectionAdapter = $.Decorate(e.selectionAdapter, y)),
                  e.allowClear &&
                    (e.selectionAdapter = $.Decorate(e.selectionAdapter, v)),
                  e.multiple &&
                    (e.selectionAdapter = $.Decorate(e.selectionAdapter, w)),
                  (null == e.containerCssClass &&
                    null == e.containerCss &&
                    null == e.adaptContainerCssClass) ||
                    ((l = h(e.amdBase + "compat/containerCss")),
                    (e.selectionAdapter = $.Decorate(e.selectionAdapter, l))),
                  (e.selectionAdapter = $.Decorate(e.selectionAdapter, _))),
                "string" == typeof e.language &&
                  (0 < e.language.indexOf("-")
                    ? ((c = e.language.split("-")[0]),
                      (e.language = [e.language, c]))
                    : (e.language = [e.language])),
                p.isArray(e.language))
              ) {
                var i = new b();
                e.language.push("en");
                for (var o = e.language, s = 0; s < o.length; s++) {
                  var r = o[s],
                    a = {};
                  try {
                    a = b.loadPath(r);
                  } catch (u) {
                    try {
                      (r = this.defaults.amdLanguageBase + r),
                        (a = b.loadPath(r));
                    } catch (d) {
                      e.debug &&
                        window.console &&
                        console.warn &&
                        console.warn(
                          'Select2: The language file for "' +
                            r +
                            '" could not be automatically loaded. A fallback will be used instead.'
                        );
                      continue;
                    }
                  }
                  i.extend(a);
                }
                e.translations = i;
              } else {
                var l = b.loadPath(this.defaults.amdLanguageBase + "en"),
                  c = new b(e.language);
                c.extend(l), (e.translations = c);
              }
              return e;
            }),
            (n.prototype.reset = function () {
              function r(e) {
                return e.replace(/[^\u0000-\u007E]/g, function (e) {
                  return t[e] || e;
                });
              }
              this.defaults = {
                amdBase: "./",
                amdLanguageBase: "./i18n/",
                closeOnSelect: !0,
                debug: !1,
                dropdownAutoWidth: !1,
                escapeMarkup: $.escapeMarkup,
                language: e,
                matcher: function a(e, t) {
                  if ("" === p.trim(e.term)) return t;
                  if (t.children && 0 < t.children.length) {
                    for (
                      var n = p.extend(!0, {}, t), i = t.children.length - 1;
                      0 <= i;
                      i--
                    )
                      null == a(e, t.children[i]) && n.children.splice(i, 1);
                    return 0 < n.children.length ? n : a(e, n);
                  }
                  var o = r(t.text).toUpperCase(),
                    s = r(e.term).toUpperCase();
                  return -1 < o.indexOf(s) ? t : null;
                },
                minimumInputLength: 0,
                maximumInputLength: 0,
                maximumSelectionLength: 0,
                minimumResultsForSearch: 0,
                selectOnClose: !1,
                sorter: function (e) {
                  return e;
                },
                templateResult: function (e) {
                  return e.text;
                },
                templateSelection: function (e) {
                  return e.text;
                },
                theme: "default",
                width: "resolve",
              };
            }),
            (n.prototype.set = function (e, t) {
              var n = {};
              n[p.camelCase(e)] = t;
              n = $._convertData(n);
              p.extend(this.defaults, n);
            }),
            new n()
          );
        }
      ),
      u.define(
        "select2/options",
        ["require", "jquery", "./defaults", "./utils"],
        function (n, s, i, r) {
          function e(e, t) {
            (this.options = e),
              null != t && this.fromElement(t),
              (this.options = i.apply(this.options)),
              t &&
                t.is("input") &&
                ((t = n(this.get("amdBase") + "compat/inputData")),
                (this.options.dataAdapter = r.Decorate(
                  this.options.dataAdapter,
                  t
                )));
          }
          return (
            (e.prototype.fromElement = function (e) {
              var t = ["select2"];
              null == this.options.multiple &&
                (this.options.multiple = e.prop("multiple")),
                null == this.options.disabled &&
                  (this.options.disabled = e.prop("disabled")),
                null == this.options.language &&
                  (e.prop("lang")
                    ? (this.options.language = e.prop("lang").toLowerCase())
                    : e.closest("[lang]").prop("lang") &&
                      (this.options.language = e
                        .closest("[lang]")
                        .prop("lang"))),
                null == this.options.dir &&
                  (e.prop("dir")
                    ? (this.options.dir = e.prop("dir"))
                    : e.closest("[dir]").prop("dir")
                    ? (this.options.dir = e.closest("[dir]").prop("dir"))
                    : (this.options.dir = "ltr")),
                e.prop("disabled", this.options.disabled),
                e.prop("multiple", this.options.multiple),
                e.data("select2Tags") &&
                  (this.options.debug &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                    ),
                  e.data("data", e.data("select2Tags")),
                  e.data("tags", !0)),
                e.data("ajaxUrl") &&
                  (this.options.debug &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                    ),
                  e.attr("ajax--url", e.data("ajaxUrl")),
                  e.data("ajax--url", e.data("ajaxUrl")));
              var n,
                i = {},
                i =
                  s.fn.jquery &&
                  "1." == s.fn.jquery.substr(0, 2) &&
                  e[0].dataset
                    ? s.extend(!0, {}, e[0].dataset, e.data())
                    : e.data(),
                o = s.extend(!0, {}, i);
              for (n in (o = r._convertData(o)))
                -1 < s.inArray(n, t) ||
                  (s.isPlainObject(this.options[n])
                    ? s.extend(this.options[n], o[n])
                    : (this.options[n] = o[n]));
              return this;
            }),
            (e.prototype.get = function (e) {
              return this.options[e];
            }),
            (e.prototype.set = function (e, t) {
              this.options[e] = t;
            }),
            e
          );
        }
      ),
      u.define(
        "select2/core",
        ["jquery", "./options", "./utils", "./keys"],
        function (o, s, n, r) {
          var a = function (e, t) {
            null != e.data("select2") && e.data("select2").destroy(),
              (this.$element = e),
              (this.id = this._generateId(e)),
              (t = t || {}),
              (this.options = new s(t, e)),
              a.__super__.constructor.call(this);
            var n = e.attr("tabindex") || 0;
            e.data("old-tabindex", n), e.attr("tabindex", "-1");
            t = this.options.get("dataAdapter");
            this.dataAdapter = new t(e, this.options);
            n = this.render();
            this._placeContainer(n);
            t = this.options.get("selectionAdapter");
            (this.selection = new t(e, this.options)),
              (this.$selection = this.selection.render()),
              this.selection.position(this.$selection, n);
            t = this.options.get("dropdownAdapter");
            (this.dropdown = new t(e, this.options)),
              (this.$dropdown = this.dropdown.render()),
              this.dropdown.position(this.$dropdown, n);
            n = this.options.get("resultsAdapter");
            (this.results = new n(e, this.options, this.dataAdapter)),
              (this.$results = this.results.render()),
              this.results.position(this.$results, this.$dropdown);
            var i = this;
            this._bindAdapters(),
              this._registerDomEvents(),
              this._registerDataEvents(),
              this._registerSelectionEvents(),
              this._registerDropdownEvents(),
              this._registerResultsEvents(),
              this._registerEvents(),
              this.dataAdapter.current(function (e) {
                i.trigger("selection:update", { data: e });
              }),
              e.addClass("select2-hidden-accessible"),
              e.attr("aria-hidden", "true"),
              this._syncAttributes(),
              e.data("select2", this);
          };
          return (
            n.Extend(a, n.Observable),
            (a.prototype._generateId = function (e) {
              return (
                "select2-" +
                (null != e.attr("id")
                  ? e.attr("id")
                  : null != e.attr("name")
                  ? e.attr("name") + "-" + n.generateChars(2)
                  : n.generateChars(4)
                ).replace(/(:|\.|\[|\]|,)/g, "")
              );
            }),
            (a.prototype._placeContainer = function (e) {
              e.insertAfter(this.$element);
              var t = this._resolveWidth(
                this.$element,
                this.options.get("width")
              );
              null != t && e.css("width", t);
            }),
            (a.prototype._resolveWidth = function (e, t) {
              var n =
                /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
              if ("resolve" == t) {
                var i = this._resolveWidth(e, "style");
                return null != i ? i : this._resolveWidth(e, "element");
              }
              if ("element" == t) {
                i = e.outerWidth(!1);
                return i <= 0 ? "auto" : i + "px";
              }
              if ("style" != t) return t;
              e = e.attr("style");
              if ("string" != typeof e) return null;
              for (var o = e.split(";"), s = 0, r = o.length; s < r; s += 1) {
                var a = o[s].replace(/\s/g, "").match(n);
                if (null !== a && 1 <= a.length) return a[1];
              }
              return null;
            }),
            (a.prototype._bindAdapters = function () {
              this.dataAdapter.bind(this, this.$container),
                this.selection.bind(this, this.$container),
                this.dropdown.bind(this, this.$container),
                this.results.bind(this, this.$container);
            }),
            (a.prototype._registerDomEvents = function () {
              var t = this;
              this.$element.on("change.select2", function () {
                t.dataAdapter.current(function (e) {
                  t.trigger("selection:update", { data: e });
                });
              }),
                this.$element.on("focus.select2", function (e) {
                  t.trigger("focus", e);
                }),
                (this._syncA = n.bind(this._syncAttributes, this)),
                (this._syncS = n.bind(this._syncSubtree, this)),
                this.$element[0].attachEvent &&
                  this.$element[0].attachEvent("onpropertychange", this._syncA);
              var e =
                window.MutationObserver ||
                window.WebKitMutationObserver ||
                window.MozMutationObserver;
              null != e
                ? ((this._observer = new e(function (e) {
                    o.each(e, t._syncA), o.each(e, t._syncS);
                  })),
                  this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1,
                  }))
                : this.$element[0].addEventListener &&
                  (this.$element[0].addEventListener(
                    "DOMAttrModified",
                    t._syncA,
                    !1
                  ),
                  this.$element[0].addEventListener(
                    "DOMNodeInserted",
                    t._syncS,
                    !1
                  ),
                  this.$element[0].addEventListener(
                    "DOMNodeRemoved",
                    t._syncS,
                    !1
                  ));
            }),
            (a.prototype._registerDataEvents = function () {
              var n = this;
              this.dataAdapter.on("*", function (e, t) {
                n.trigger(e, t);
              });
            }),
            (a.prototype._registerSelectionEvents = function () {
              var n = this,
                i = ["toggle", "focus"];
              this.selection.on("toggle", function () {
                n.toggleDropdown();
              }),
                this.selection.on("focus", function (e) {
                  n.focus(e);
                }),
                this.selection.on("*", function (e, t) {
                  -1 === o.inArray(e, i) && n.trigger(e, t);
                });
            }),
            (a.prototype._registerDropdownEvents = function () {
              var n = this;
              this.dropdown.on("*", function (e, t) {
                n.trigger(e, t);
              });
            }),
            (a.prototype._registerResultsEvents = function () {
              var n = this;
              this.results.on("*", function (e, t) {
                n.trigger(e, t);
              });
            }),
            (a.prototype._registerEvents = function () {
              var i = this;
              this.on("open", function () {
                i.$container.addClass("select2-container--open");
              }),
                this.on("close", function () {
                  i.$container.removeClass("select2-container--open");
                }),
                this.on("enable", function () {
                  i.$container.removeClass("select2-container--disabled");
                }),
                this.on("disable", function () {
                  i.$container.addClass("select2-container--disabled");
                }),
                this.on("blur", function () {
                  i.$container.removeClass("select2-container--focus");
                }),
                this.on("query", function (t) {
                  i.isOpen() || i.trigger("open", {}),
                    this.dataAdapter.query(t, function (e) {
                      i.trigger("results:all", { data: e, query: t });
                    });
                }),
                this.on("query:append", function (t) {
                  this.dataAdapter.query(t, function (e) {
                    i.trigger("results:append", { data: e, query: t });
                  });
                }),
                this.on("open", function () {
                  setTimeout(function () {
                    i.focusOnActiveElement();
                  }, 1);
                }),
                o(document).on("keydown", function (e) {
                  var t,
                    n = e.which;
                  i.isOpen()
                    ? (n === r.ESC || (n === r.UP && e.altKey)
                        ? (i.close(), e.preventDefault())
                        : n === r.ENTER || n === r.TAB
                        ? (i.trigger("results:select", {}), e.preventDefault())
                        : n === r.SPACE && e.ctrlKey
                        ? (i.trigger("results:toggle", {}), e.preventDefault())
                        : n === r.UP
                        ? (i.trigger("results:previous", {}),
                          e.preventDefault())
                        : n === r.DOWN &&
                          (i.trigger("results:next", {}), e.preventDefault()),
                      (t = i.$dropdown.find(".select2-search__field")).length ||
                        (t = i.$container.find(".select2-search__field")),
                      n === r.DOWN || n === r.UP
                        ? i.focusOnActiveElement()
                        : (t.focus(),
                          setTimeout(function () {
                            i.focusOnActiveElement();
                          }, 1e3)))
                    : i.hasFocus() &&
                      ((n !== r.ENTER && n !== r.SPACE && n !== r.DOWN) ||
                        (i.open(), e.preventDefault()));
                });
            }),
            (a.prototype.focusOnActiveElement = function () {
              this.isOpen() &&
                !n.isTouchscreen() &&
                this.$results
                  .find("li.select2-results__option--highlighted")
                  .focus();
            }),
            (a.prototype._syncAttributes = function () {
              this.options.set("disabled", this.$element.prop("disabled")),
                this.options.get("disabled")
                  ? (this.isOpen() && this.close(), this.trigger("disable", {}))
                  : this.trigger("enable", {});
            }),
            (a.prototype._syncSubtree = function (e, t) {
              var n = !1,
                i = this;
              if (
                !e ||
                !e.target ||
                "OPTION" === e.target.nodeName ||
                "OPTGROUP" === e.target.nodeName
              ) {
                if (t)
                  if (t.addedNodes && 0 < t.addedNodes.length)
                    for (var o = 0; o < t.addedNodes.length; o++) {
                      t.addedNodes[o].selected && (n = !0);
                    }
                  else t.removedNodes && 0 < t.removedNodes.length && (n = !0);
                else n = !0;
                n &&
                  this.dataAdapter.current(function (e) {
                    i.trigger("selection:update", { data: e });
                  });
              }
            }),
            (a.prototype.trigger = function (e, t) {
              var n = a.__super__.trigger,
                i = {
                  open: "opening",
                  close: "closing",
                  select: "selecting",
                  unselect: "unselecting",
                };
              if ((t === undefined && (t = {}), e in i)) {
                var o = i[e],
                  i = { prevented: !1, name: e, args: t };
                if ((n.call(this, o, i), i.prevented))
                  return void (t.prevented = !0);
              }
              n.call(this, e, t);
            }),
            (a.prototype.toggleDropdown = function () {
              this.options.get("disabled") ||
                (this.isOpen() ? this.close() : this.open());
            }),
            (a.prototype.open = function () {
              this.isOpen() || this.trigger("query", {});
            }),
            (a.prototype.close = function () {
              this.isOpen() && this.trigger("close", {});
            }),
            (a.prototype.isOpen = function () {
              return this.$container.hasClass("select2-container--open");
            }),
            (a.prototype.hasFocus = function () {
              return this.$container.hasClass("select2-container--focus");
            }),
            (a.prototype.focus = function (e) {
              this.hasFocus() ||
                (this.$container.addClass("select2-container--focus"),
                this.trigger("focus", {}));
            }),
            (a.prototype.enable = function (e) {
              this.options.get("debug") &&
                window.console &&
                console.warn &&
                console.warn(
                  'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                ),
                (null != e && 0 !== e.length) || (e = [!0]);
              e = !e[0];
              this.$element.prop("disabled", e);
            }),
            (a.prototype.data = function () {
              this.options.get("debug") &&
                0 < arguments.length &&
                window.console &&
                console.warn &&
                console.warn(
                  'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                );
              var t = [];
              return (
                this.dataAdapter.current(function (e) {
                  t = e;
                }),
                t
              );
            }),
            (a.prototype.val = function (e) {
              if (
                (this.options.get("debug") &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                  ),
                null == e || 0 === e.length)
              )
                return this.$element.val();
              e = e[0];
              o.isArray(e) &&
                (e = o.map(e, function (e) {
                  return e.toString();
                })),
                this.$element.val(e).trigger("change");
            }),
            (a.prototype.destroy = function () {
              this.$container.remove(),
                this.$element[0].detachEvent &&
                  this.$element[0].detachEvent("onpropertychange", this._syncA),
                null != this._observer
                  ? (this._observer.disconnect(), (this._observer = null))
                  : this.$element[0].removeEventListener &&
                    (this.$element[0].removeEventListener(
                      "DOMAttrModified",
                      this._syncA,
                      !1
                    ),
                    this.$element[0].removeEventListener(
                      "DOMNodeInserted",
                      this._syncS,
                      !1
                    ),
                    this.$element[0].removeEventListener(
                      "DOMNodeRemoved",
                      this._syncS,
                      !1
                    )),
                (this._syncA = null),
                (this._syncS = null),
                this.$element.off(".select2"),
                this.$element.attr(
                  "tabindex",
                  this.$element.data("old-tabindex")
                ),
                this.$element.removeClass("select2-hidden-accessible"),
                this.$element.attr("aria-hidden", "false"),
                this.$element.removeData("select2"),
                this.dataAdapter.destroy(),
                this.selection.destroy(),
                this.dropdown.destroy(),
                this.results.destroy(),
                (this.dataAdapter = null),
                (this.selection = null),
                (this.dropdown = null),
                (this.results = null);
            }),
            (a.prototype.render = function () {
              var e = o(
                '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
              );
              return (
                e.attr("dir", this.options.get("dir")),
                (this.$container = e),
                this.$container.addClass(
                  "select2-container--" + this.options.get("theme")
                ),
                e.data("element", this.$element),
                e
              );
            }),
            a
          );
        }
      ),
      u.define("select2/compat/utils", ["jquery"], function (r) {
        return {
          syncCssClasses: function (e, t, n) {
            var i,
              o = [],
              s = r.trim(e.attr("class"));
            s &&
              r((s = "" + s).split(/\s+/)).each(function () {
                0 === this.indexOf("select2-") && o.push(this);
              }),
              (s = r.trim(t.attr("class"))) &&
                r((s = "" + s).split(/\s+/)).each(function () {
                  0 !== this.indexOf("select2-") &&
                    null != (i = n(this)) &&
                    o.push(i);
                }),
              e.attr("class", o.join(" "));
          },
        };
      }),
      u.define(
        "select2/compat/containerCss",
        ["jquery", "./utils"],
        function (s, r) {
          function a(e) {
            return null;
          }
          function e() {}
          return (
            (e.prototype.render = function (e) {
              var t = e.call(this),
                n = this.options.get("containerCssClass") || "";
              s.isFunction(n) && (n = n(this.$element));
              var i,
                o = this.options.get("adaptContainerCssClass");
              (o = o || a),
                -1 !== n.indexOf(":all:") &&
                  ((n = n.replace(":all:", "")),
                  (i = o),
                  (o = function (e) {
                    var t = i(e);
                    return null != t ? t + " " + e : e;
                  }));
              e = this.options.get("containerCss") || {};
              return (
                s.isFunction(e) && (e = e(this.$element)),
                r.syncCssClasses(t, this.$element, o),
                t.css(e),
                t.addClass(n),
                t
              );
            }),
            e
          );
        }
      ),
      u.define(
        "select2/compat/dropdownCss",
        ["jquery", "./utils"],
        function (s, r) {
          function a(e) {
            return null;
          }
          function e() {}
          return (
            (e.prototype.render = function (e) {
              var t = e.call(this),
                n = this.options.get("dropdownCssClass") || "";
              s.isFunction(n) && (n = n(this.$element));
              var i,
                o = this.options.get("adaptDropdownCssClass");
              (o = o || a),
                -1 !== n.indexOf(":all:") &&
                  ((n = n.replace(":all:", "")),
                  (i = o),
                  (o = function (e) {
                    var t = i(e);
                    return null != t ? t + " " + e : e;
                  }));
              e = this.options.get("dropdownCss") || {};
              return (
                s.isFunction(e) && (e = e(this.$element)),
                r.syncCssClasses(t, this.$element, o),
                t.css(e),
                t.addClass(n),
                t
              );
            }),
            e
          );
        }
      ),
      u.define("select2/compat/initSelection", ["jquery"], function (i) {
        function e(e, t, n) {
          n.get("debug") &&
            window.console &&
            console.warn &&
            console.warn(
              "Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"
            ),
            (this.initSelection = n.get("initSelection")),
            (this._isInitialized = !1),
            e.call(this, t, n);
        }
        return (
          (e.prototype.current = function (e, t) {
            var n = this;
            this._isInitialized
              ? e.call(this, t)
              : this.initSelection.call(null, this.$element, function (e) {
                  (n._isInitialized = !0), i.isArray(e) || (e = [e]), t(e);
                });
          }),
          e
        );
      }),
      u.define("select2/compat/inputData", ["jquery"], function (r) {
        function e(e, t, n) {
          (this._currentData = []),
            (this._valueSeparator = n.get("valueSeparator") || ","),
            "hidden" === t.prop("type") &&
              n.get("debug") &&
              console &&
              console.warn &&
              console.warn(
                "Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."
              ),
            e.call(this, t, n);
        }
        return (
          (e.prototype.current = function (e, t) {
            for (var n = [], i = 0; i < this._currentData.length; i++) {
              var o = this._currentData[i];
              n.push.apply(
                n,
                (function s(e, t) {
                  var n = [];
                  return (
                    e.selected || -1 !== r.inArray(e.id, t)
                      ? ((e.selected = !0), n.push(e))
                      : (e.selected = !1),
                    e.children && n.push.apply(n, s(e.children, t)),
                    n
                  );
                })(o, this.$element.val().split(this._valueSeparator))
              );
            }
            t(n);
          }),
          (e.prototype.select = function (e, t) {
            var n;
            this.options.get("multiple")
              ? ((n = this.$element.val()),
                (n += this._valueSeparator + t.id),
                this.$element.val(n))
              : (this.current(function (e) {
                  r.map(e, function (e) {
                    e.selected = !1;
                  });
                }),
                this.$element.val(t.id)),
              this.$element.trigger("change");
          }),
          (e.prototype.unselect = function (e, o) {
            var s = this;
            (o.selected = !1),
              this.current(function (e) {
                for (var t = [], n = 0; n < e.length; n++) {
                  var i = e[n];
                  o.id != i.id && t.push(i.id);
                }
                s.$element.val(t.join(s._valueSeparator)),
                  s.$element.trigger("change");
              });
          }),
          (e.prototype.query = function (e, t, n) {
            for (var i = [], o = 0; o < this._currentData.length; o++) {
              var s = this._currentData[o],
                s = this.matches(t, s);
              null !== s && i.push(s);
            }
            n({ results: i });
          }),
          (e.prototype.addOptions = function (e, t) {
            t = r.map(t, function (e) {
              return r.data(e[0], "data");
            });
            this._currentData.push.apply(this._currentData, t);
          }),
          e
        );
      }),
      u.define("select2/compat/matcher", ["jquery"], function (r) {
        return function (s) {
          return function (e, t) {
            var n = r.extend(!0, {}, t);
            if (null == e.term || "" === r.trim(e.term)) return n;
            if (t.children) {
              for (var i = t.children.length - 1; 0 <= i; i--) {
                var o = t.children[i];
                s(e.term, o.text, o) || n.children.splice(i, 1);
              }
              if (0 < n.children.length) return n;
            }
            return s(e.term, t.text, t) ? n : null;
          };
        };
      }),
      u.define("select2/compat/query", [], function () {
        function e(e, t, n) {
          n.get("debug") &&
            window.console &&
            console.warn &&
            console.warn(
              "Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."
            ),
            e.call(this, t, n);
        }
        return (
          (e.prototype.query = function (e, t, n) {
            (t.callback = n), this.options.get("query").call(null, t);
          }),
          e
        );
      }),
      u.define("select2/dropdown/attachContainer", [], function () {
        function e(e, t, n) {
          e.call(this, t, n);
        }
        return (
          (e.prototype.position = function (e, t, n) {
            n.find(".dropdown-wrapper").append(t),
              t.addClass("select2-dropdown--below"),
              n.addClass("select2-container--below");
          }),
          e
        );
      }),
      u.define("select2/dropdown/stopPropagation", [], function () {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            e.call(this, t, n);
            this.$dropdown.on(
              [
                "blur",
                "change",
                "click",
                "dblclick",
                "focus",
                "focusin",
                "focusout",
                "input",
                "keydown",
                "keyup",
                "keypress",
                "mousedown",
                "mouseenter",
                "mouseleave",
                "mousemove",
                "mouseover",
                "mouseup",
                "search",
                "touchend",
                "touchstart",
              ].join(" "),
              function (e) {
                e.stopPropagation();
              }
            );
          }),
          e
        );
      }),
      u.define("select2/selection/stopPropagation", [], function () {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            e.call(this, t, n);
            this.$selection.on(
              [
                "blur",
                "change",
                "click",
                "dblclick",
                "focus",
                "focusin",
                "focusout",
                "input",
                "keydown",
                "keyup",
                "keypress",
                "mousedown",
                "mouseenter",
                "mouseleave",
                "mousemove",
                "mouseover",
                "mouseup",
                "search",
                "touchend",
                "touchstart",
              ].join(" "),
              function (e) {
                e.stopPropagation();
              }
            );
          }),
          e
        );
      }),
      /*!
       * jQuery Mousewheel 3.1.13
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license
       * https://jquery.org/license
       */
      (a = function (u) {
        var d,
          p,
          e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
          t =
            "onwheel" in document || 9 <= document.documentMode
              ? ["wheel"]
              : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
          h = Array.prototype.slice;
        if (u.event.fixHooks)
          for (var n = e.length; n; )
            u.event.fixHooks[e[--n]] = u.event.mouseHooks;
        var f = (u.event.special.mousewheel = {
          version: "3.1.12",
          setup: function () {
            if (this.addEventListener)
              for (var e = t.length; e; ) this.addEventListener(t[--e], i, !1);
            else this.onmousewheel = i;
            u.data(this, "mousewheel-line-height", f.getLineHeight(this)),
              u.data(this, "mousewheel-page-height", f.getPageHeight(this));
          },
          teardown: function () {
            if (this.removeEventListener)
              for (var e = t.length; e; )
                this.removeEventListener(t[--e], i, !1);
            else this.onmousewheel = null;
            u.removeData(this, "mousewheel-line-height"),
              u.removeData(this, "mousewheel-page-height");
          },
          getLineHeight: function (e) {
            var t = u(e),
              e = t["offsetParent" in u.fn ? "offsetParent" : "parent"]();
            return (
              e.length || (e = u("body")),
              parseInt(e.css("fontSize"), 10) ||
                parseInt(t.css("fontSize"), 10) ||
                16
            );
          },
          getPageHeight: function (e) {
            return u(e).height();
          },
          settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
        });
        function i(e) {
          var t,
            n = e || window.event,
            i = h.call(arguments, 1),
            o = 0,
            s = 0,
            r = 0,
            a = 0,
            l = 0,
            c = 0;
          if (
            (((e = u.event.fix(n)).type = "mousewheel"),
            "detail" in n && (r = -1 * n.detail),
            "wheelDelta" in n && (r = n.wheelDelta),
            "wheelDeltaY" in n && (r = n.wheelDeltaY),
            "wheelDeltaX" in n && (s = -1 * n.wheelDeltaX),
            "axis" in n &&
              n.axis === n.HORIZONTAL_AXIS &&
              ((s = -1 * r), (r = 0)),
            (o = 0 === r ? s : r),
            "deltaY" in n && (o = r = -1 * n.deltaY),
            "deltaX" in n && ((s = n.deltaX), 0 === r && (o = -1 * s)),
            0 !== r || 0 !== s)
          )
            return (
              1 === n.deltaMode
                ? ((o *= t = u.data(this, "mousewheel-line-height")),
                  (r *= t),
                  (s *= t))
                : 2 === n.deltaMode &&
                  ((o *= t = u.data(this, "mousewheel-page-height")),
                  (r *= t),
                  (s *= t)),
              (a = Math.max(Math.abs(r), Math.abs(s))),
              (!p || a < p) && m(n, (p = a)) && (p /= 40),
              m(n, a) && ((o /= 40), (s /= 40), (r /= 40)),
              (o = Math[1 <= o ? "floor" : "ceil"](o / p)),
              (s = Math[1 <= s ? "floor" : "ceil"](s / p)),
              (r = Math[1 <= r ? "floor" : "ceil"](r / p)),
              f.settings.normalizeOffset &&
                this.getBoundingClientRect &&
                ((a = this.getBoundingClientRect()),
                (l = e.clientX - a.left),
                (c = e.clientY - a.top)),
              (e.deltaX = s),
              (e.deltaY = r),
              (e.deltaFactor = p),
              (e.offsetX = l),
              (e.offsetY = c),
              (e.deltaMode = 0),
              i.unshift(e, o, s, r),
              d && clearTimeout(d),
              (d = setTimeout(g, 200)),
              (u.event.dispatch || u.event.handle).apply(this, i)
            );
        }
        function g() {
          p = null;
        }
        function m(e, t) {
          return (
            f.settings.adjustOldDeltas &&
            "mousewheel" === e.type &&
            t % 120 == 0
          );
        }
        u.fn.extend({
          mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
          },
          unmousewheel: function (e) {
            return this.unbind("mousewheel", e);
          },
        });
      }),
      "function" == typeof u.define && u.define.amd
        ? u.define("jquery-mousewheel", ["jquery"], a)
        : "object" == typeof exports
        ? (module.exports = a)
        : a(t),
      u.define(
        "jquery.select2",
        ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"],
        function (o, e, s, t) {
          var r;
          return (
            null == o.fn.selectWoo &&
              ((r = ["open", "close", "destroy"]),
              (o.fn.selectWoo = function (t) {
                if ("object" == typeof (t = t || {}))
                  return (
                    this.each(function () {
                      var e = o.extend(!0, {}, t);
                      new s(o(this), e);
                    }),
                    this
                  );
                if ("string" != typeof t)
                  throw new Error("Invalid arguments for Select2: " + t);
                var n,
                  i = Array.prototype.slice.call(arguments, 1);
                return (
                  this.each(function () {
                    var e = o(this).data("select2");
                    null == e &&
                      window.console &&
                      console.error &&
                      console.error(
                        "The select2('" +
                          t +
                          "') method was called on an element that is not using Select2."
                      ),
                      (n = e[t].apply(e, i));
                  }),
                  -1 < o.inArray(t, r) ? this : n
                );
              })),
            null != o.fn.select2 &&
              null != o.fn.select2.defaults &&
              (o.fn.selectWoo.defaults = o.fn.select2.defaults),
            null == o.fn.selectWoo.defaults && (o.fn.selectWoo.defaults = t),
            (o.fn.select2 = o.fn.select2 || o.fn.selectWoo),
            s
          );
        }
      ),
      { define: u.define, require: u.require });
  function _(e, t) {
    return i.call(e, t);
  }
  function l(e, t) {
    var n,
      i,
      o,
      s,
      r,
      a,
      l,
      c,
      u,
      d,
      p = t && t.split("/"),
      h = y.map,
      f = (h && h["*"]) || {};
    if (e) {
      for (
        t = (e = e.split("/")).length - 1,
          y.nodeIdCompat && w.test(e[t]) && (e[t] = e[t].replace(w, "")),
          "." === e[0].charAt(0) &&
            p &&
            (e = p.slice(0, p.length - 1).concat(e)),
          c = 0;
        c < e.length;
        c++
      )
        "." === (d = e[c])
          ? (e.splice(c, 1), --c)
          : ".." === d &&
            (0 === c ||
              (1 === c && ".." === e[2]) ||
              ".." === e[c - 1] ||
              (0 < c && (e.splice(c - 1, 2), (c -= 2))));
      e = e.join("/");
    }
    if ((p || f) && h) {
      for (c = (n = e.split("/")).length; 0 < c; --c) {
        if (((i = n.slice(0, c).join("/")), p))
          for (u = p.length; 0 < u; --u)
            if ((o = (o = h[p.slice(0, u).join("/")]) && o[i])) {
              (s = o), (r = c);
              break;
            }
        if (s) break;
        !a && f && f[i] && ((a = f[i]), (l = c));
      }
      !s && a && ((s = a), (r = l)),
        s && (n.splice(0, r, s), (e = n.join("/")));
    }
    return e;
  }
  function b(t, n) {
    return function () {
      var e = o.call(arguments, 0);
      return (
        "string" != typeof e[0] && 1 === e.length && e.push(null),
        r.apply(p, e.concat([t, n]))
      );
    };
  }
  function x(e) {
    var t;
    if (
      (_(m, e) && ((t = m[e]), delete m[e], (v[e] = !0), s.apply(p, t)),
      !_(g, e) && !_(v, e))
    )
      throw new Error("No " + e);
    return g[e];
  }
  function c(e) {
    var t,
      n = e ? e.indexOf("!") : -1;
    return (
      -1 < n && ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))),
      [t, e]
    );
  }
  function A(e) {
    return e ? c(e) : [];
  }
  var u = a.require("jquery.select2");
  return (t.fn.select2.amd = a), (t.fn.selectWoo.amd = a), u;
});
