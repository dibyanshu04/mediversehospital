/**
 * @package 	WordPress
 * @subpackage 	Mediverse Hospital
 * @version		1.1.2
 */

/**!
 * CMSMasters Media Width
 **/
function cmsmasters_media_width() {
  var media_width = parseInt(
    jQuery(".cmsmasters_responsive_width").css("width")
  );

  return media_width;
}

/**!
 * jQuery Easing v1.3
 * https://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 **/
(function () {
  "use strict";
  jQuery.easing.jswing = jQuery.easing.swing;
  jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, f, a, h, g) {
      return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
    },
    easeInQuad: function (e, f, a, h, g) {
      return h * (f /= g) * f + a;
    },
    easeOutQuad: function (e, f, a, h, g) {
      return -h * (f /= g) * (f - 2) + a;
    },
    easeInOutQuad: function (e, f, a, h, g) {
      if ((f /= g / 2) < 1) {
        return (h / 2) * f * f + a;
      }
      return (-h / 2) * (--f * (f - 2) - 1) + a;
    },
    easeInCubic: function (e, f, a, h, g) {
      return h * (f /= g) * f * f + a;
    },
    easeOutCubic: function (e, f, a, h, g) {
      return h * ((f = f / g - 1) * f * f + 1) + a;
    },
    easeInOutCubic: function (e, f, a, h, g) {
      if ((f /= g / 2) < 1) {
        return (h / 2) * f * f * f + a;
      }
      return (h / 2) * ((f -= 2) * f * f + 2) + a;
    },
    easeInQuart: function (e, f, a, h, g) {
      return h * (f /= g) * f * f * f + a;
    },
    easeOutQuart: function (e, f, a, h, g) {
      return -h * ((f = f / g - 1) * f * f * f - 1) + a;
    },
    easeInOutQuart: function (e, f, a, h, g) {
      if ((f /= g / 2) < 1) {
        return (h / 2) * f * f * f * f + a;
      }
      return (-h / 2) * ((f -= 2) * f * f * f - 2) + a;
    },
    easeInQuint: function (e, f, a, h, g) {
      return h * (f /= g) * f * f * f * f + a;
    },
    easeOutQuint: function (e, f, a, h, g) {
      return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
    },
    easeInOutQuint: function (e, f, a, h, g) {
      if ((f /= g / 2) < 1) {
        return (h / 2) * f * f * f * f * f + a;
      }
      return (h / 2) * ((f -= 2) * f * f * f * f + 2) + a;
    },
    easeInSine: function (e, f, a, h, g) {
      return -h * Math.cos((f / g) * (Math.PI / 2)) + h + a;
    },
    easeOutSine: function (e, f, a, h, g) {
      return h * Math.sin((f / g) * (Math.PI / 2)) + a;
    },
    easeInOutSine: function (e, f, a, h, g) {
      return (-h / 2) * (Math.cos((Math.PI * f) / g) - 1) + a;
    },
    easeInExpo: function (e, f, a, h, g) {
      return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
    },
    easeOutExpo: function (e, f, a, h, g) {
      return f == g ? a + h : h * (-Math.pow(2, (-10 * f) / g) + 1) + a;
    },
    easeInOutExpo: function (e, f, a, h, g) {
      if (f == 0) {
        return a;
      }
      if (f == g) {
        return a + h;
      }
      if ((f /= g / 2) < 1) {
        return (h / 2) * Math.pow(2, 10 * (f - 1)) + a;
      }
      return (h / 2) * (-Math.pow(2, -10 * --f) + 2) + a;
    },
    easeInCirc: function (e, f, a, h, g) {
      return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
    },
    easeOutCirc: function (e, f, a, h, g) {
      return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
    },
    easeInOutCirc: function (e, f, a, h, g) {
      if ((f /= g / 2) < 1) {
        return (-h / 2) * (Math.sqrt(1 - f * f) - 1) + a;
      }
      return (h / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
    },
    easeInElastic: function (f, h, e, l, k) {
      var i = 1.70158;
      var j = 0;
      var g = l;
      if (h == 0) {
        return e;
      }
      if ((h /= k) == 1) {
        return e + l;
      }
      if (!j) {
        j = k * 0.3;
      }
      if (g < Math.abs(l)) {
        g = l;
        var i = j / 4;
      } else {
        var i = (j / (2 * Math.PI)) * Math.asin(l / g);
      }
      return (
        -(
          g *
          Math.pow(2, 10 * (h -= 1)) *
          Math.sin(((h * k - i) * (2 * Math.PI)) / j)
        ) + e
      );
    },
    easeOutElastic: function (f, h, e, l, k) {
      var i = 1.70158;
      var j = 0;
      var g = l;
      if (h == 0) {
        return e;
      }
      if ((h /= k) == 1) {
        return e + l;
      }
      if (!j) {
        j = k * 0.3;
      }
      if (g < Math.abs(l)) {
        g = l;
        var i = j / 4;
      } else {
        var i = (j / (2 * Math.PI)) * Math.asin(l / g);
      }
      return (
        g * Math.pow(2, -10 * h) * Math.sin(((h * k - i) * (2 * Math.PI)) / j) +
        l +
        e
      );
    },
    easeInOutElastic: function (f, h, e, l, k) {
      var i = 1.70158;
      var j = 0;
      var g = l;
      if (h == 0) {
        return e;
      }
      if ((h /= k / 2) == 2) {
        return e + l;
      }
      if (!j) {
        j = k * (0.3 * 1.5);
      }
      if (g < Math.abs(l)) {
        g = l;
        var i = j / 4;
      } else {
        var i = (j / (2 * Math.PI)) * Math.asin(l / g);
      }
      if (h < 1) {
        return (
          -0.5 *
            (g *
              Math.pow(2, 10 * (h -= 1)) *
              Math.sin(((h * k - i) * (2 * Math.PI)) / j)) +
          e
        );
      }
      return (
        g *
          Math.pow(2, -10 * (h -= 1)) *
          Math.sin(((h * k - i) * (2 * Math.PI)) / j) *
          0.5 +
        l +
        e
      );
    },
    easeInBack: function (e, f, a, i, h, g) {
      if (g == undefined) {
        g = 1.70158;
      }
      return i * (f /= h) * f * ((g + 1) * f - g) + a;
    },
    easeOutBack: function (e, f, a, i, h, g) {
      if (g == undefined) {
        g = 1.70158;
      }
      return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
    },
    easeInOutBack: function (e, f, a, i, h, g) {
      if (g == undefined) {
        g = 1.70158;
      }
      if ((f /= h / 2) < 1) {
        return (i / 2) * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
      }
      return (i / 2) * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
    },
    easeInBounce: function (e, f, a, h, g) {
      return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
    },
    easeOutBounce: function (e, f, a, h, g) {
      if ((f /= g) < 1 / 2.75) {
        return h * (7.5625 * f * f) + a;
      } else {
        if (f < 2 / 2.75) {
          return h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a;
        } else {
          if (f < 2.5 / 2.75) {
            return h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a;
          } else {
            return h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a;
          }
        }
      }
    },
    easeInOutBounce: function (e, f, a, h, g) {
      if (f < g / 2) {
        return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
      }
      return (
        jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
      );
    },
  });
})(jQuery);

/**!
 * Copyright (c) 2011 Brandon Aaron
 * Mousewheel script v3.0.6
 * Licensed under the MIT License
 **/
(function (e) {
  function r(t) {
    var n = t || window.event,
      r = [].slice.call(arguments, 1),
      i = 0,
      s = true,
      o = 0,
      u = 0;
    t = e.event.fix(n);
    t.type = "mousewheel";
    if (n.wheelDelta) {
      i = n.wheelDelta / 120;
    }
    if (n.detail) {
      i = -n.detail / 3;
    }
    u = i;
    if (n.axis !== undefined && n.axis === n.HORIZONTAL_AXIS) {
      u = 0;
      o = -1 * i;
    }
    if (n.wheelDeltaY !== undefined) {
      u = n.wheelDeltaY / 120;
    }
    if (n.wheelDeltaX !== undefined) {
      o = (-1 * n.wheelDeltaX) / 120;
    }
    r.unshift(t, i, o, u);
    return (e.event.dispatch || e.event.dispatch).apply(this, r);
  }
  var t = ["DOMMouseScroll", "mousewheel"];
  if (e.event.fixHooks) {
    for (var n = t.length; n; ) {
      e.event.fixHooks[t[--n]] = e.event.mouseHooks;
    }
  }
  e.event.special.mousewheel = {
    setup: function () {
      if (this.addEventListener) {
        for (var e = t.length; e; ) {
          this.addEventListener(t[--e], r, false);
        }
      } else {
        this.onmousewheel = r;
      }
    },
    teardown: function () {
      if (this.removeEventListener) {
        for (var e = t.length; e; ) {
          this.removeEventListener(t[--e], r, false);
        }
      } else {
        this.onmousewheel = null;
      }
    },
  };
  e.fn.extend({
    mousewheel: function (e) {
      return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
    },
    unmousewheel: function (e) {
      return this.unbind("mousewheel", e);
    },
  });
})(jQuery);

/**!
 * requestAnimationFrame polyfill by Erik Moller
 * fixes from Paul Irish and Tino Zijdel
 **/
(function (e, t, n) {
  var r = 0,
    i,
    s = function (e) {
      if (i) {
        t.requestAnimationFrame(s, e);
        jQuery.fx.tick();
      }
    },
    o = ["ms", "moz", "webkit", "o"];
  for (var u = 0; u < o.length && !t.requestAnimationFrame; ++u) {
    t.requestAnimationFrame = t[o[u] + "RequestAnimationFrame"];
    t.cancelAnimationFrame =
      t[o[u] + "CancelAnimationFrame"] ||
      t[o[u] + "CancelRequestAnimationFrame"];
  }
  if (!t.requestAnimationFrame)
    t.requestAnimationFrame = function (e, n) {
      var i = new Date().getTime(),
        s = i - r,
        o = Math.max(0, 16 - s);
      var u = t.setTimeout(function () {
        e(i + o);
      }, o);
      r = i + o;
      return u;
    };
  if (!t.cancelAnimationFrame) {
    t.cancelAnimationFrame = function (e) {
      clearTimeout(e);
    };
  }
  jQuery.fx.timer = function (e) {
    if (e() && jQuery.timers.push(e) && !i) {
      i = true;
      s(e.elem);
    }
  };
  jQuery.fx.stop = function () {
    i = false;
  };
})(jQuery, this);

/**!
 * QueryLoader v2
 * Copyright (c) 2011 - Gaya Kessler
 * Licensed under the MIT license
 * Version: 2.9.0
 * Last update: 2014-01-31
 **/
!(function (a) {
  function b(a) {
    (this.parent = a), this.container, this.loadbar, this.percentageContainer;
  }
  function c(a) {
    (this.toPreload = []), (this.parent = a), this.container;
  }
  function d(a) {
    this.element, (this.parent = a);
  }
  function e(d, e) {
    (this.element = d),
      (this.$element = a(d)),
      (this.options = e),
      (this.foundUrls = []),
      (this.destroyed = !1),
      (this.imageCounter = 0),
      (this.imageDone = 0),
      (this.alreadyLoaded = !1),
      (this.preloadContainer = new c(this)),
      (this.overlayLoader = new b(this)),
      (this.defaultOptions = {
        onComplete: function () {},
        onLoadComplete: function () {},
        backgroundColor: "#000",
        barColor: "#fff",
        overlayId: "qLoverlay",
        barHeight: 1,
        percentage: !1,
        deepSearch: !0,
        completeAnimation: "fade",
        minimumTime: 500,
      }),
      this.init();
  }
  !(function (a) {
    "use strict";
    function b(b) {
      var c = a.event;
      return (c.target = c.target || c.srcElement || b), c;
    }
    var c = document.documentElement,
      d = function () {};
    c.addEventListener
      ? (d = function (a, b, c) {
          a.addEventListener(b, c, !1);
        })
      : c.attachEvent &&
        (d = function (a, c, d) {
          (a[c + d] = d.handleEvent
            ? function () {
                var c = b(a);
                d.handleEvent.call(d, c);
              }
            : function () {
                var c = b(a);
                d.call(a, c);
              }),
            a.attachEvent("on" + c, a[c + d]);
        });
    var e = function () {};
    c.removeEventListener
      ? (e = function (a, b, c) {
          a.removeEventListener(b, c, !1);
        })
      : c.detachEvent &&
        (e = function (a, b, c) {
          a.detachEvent("on" + b, a[b + c]);
          try {
            delete a[b + c];
          } catch (d) {
            a[b + c] = void 0;
          }
        });
    var f = { bind: d, unbind: e };
    "function" == typeof define && define.amd
      ? define(f)
      : "object" == typeof exports
      ? (module.exports = f)
      : (a.eventie = f);
  })(this),
    function () {
      "use strict";
      function a() {}
      function b(a, b) {
        for (var c = a.length; c--; ) if (a[c].listener === b) return c;
        return -1;
      }
      function c(a) {
        return function () {
          return this[a].apply(this, arguments);
        };
      }
      var d = a.prototype,
        e = this,
        f = e.EventEmitter;
      (d.getListeners = function (a) {
        var b,
          c,
          d = this._getEvents();
        if (a instanceof RegExp) {
          b = {};
          for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c]);
        } else b = d[a] || (d[a] = []);
        return b;
      }),
        (d.flattenListeners = function (a) {
          var b,
            c = [];
          for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
          return c;
        }),
        (d.getListenersAsObject = function (a) {
          var b,
            c = this.getListeners(a);
          return c instanceof Array && ((b = {}), (b[a] = c)), b || c;
        }),
        (d.addListener = function (a, c) {
          var d,
            e = this.getListenersAsObject(a),
            f = "object" == typeof c;
          for (d in e)
            e.hasOwnProperty(d) &&
              -1 === b(e[d], c) &&
              e[d].push(f ? c : { listener: c, once: !1 });
          return this;
        }),
        (d.on = c("addListener")),
        (d.addOnceListener = function (a, b) {
          return this.addListener(a, { listener: b, once: !0 });
        }),
        (d.once = c("addOnceListener")),
        (d.defineEvent = function (a) {
          return this.getListeners(a), this;
        }),
        (d.defineEvents = function (a) {
          for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
          return this;
        }),
        (d.removeListener = function (a, c) {
          var d,
            e,
            f = this.getListenersAsObject(a);
          for (e in f)
            f.hasOwnProperty(e) &&
              ((d = b(f[e], c)), -1 !== d && f[e].splice(d, 1));
          return this;
        }),
        (d.off = c("removeListener")),
        (d.addListeners = function (a, b) {
          return this.manipulateListeners(!1, a, b);
        }),
        (d.removeListeners = function (a, b) {
          return this.manipulateListeners(!0, a, b);
        }),
        (d.manipulateListeners = function (a, b, c) {
          var d,
            e,
            f = a ? this.removeListener : this.addListener,
            g = a ? this.removeListeners : this.addListeners;
          if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--; ) f.call(this, b, c[d]);
          else
            for (d in b)
              b.hasOwnProperty(d) &&
                (e = b[d]) &&
                ("function" == typeof e
                  ? f.call(this, d, e)
                  : g.call(this, d, e));
          return this;
        }),
        (d.removeEvent = function (a) {
          var b,
            c = typeof a,
            d = this._getEvents();
          if ("string" === c) delete d[a];
          else if (a instanceof RegExp)
            for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
          else delete this._events;
          return this;
        }),
        (d.removeAllListeners = c("removeEvent")),
        (d.emitEvent = function (a, b) {
          var c,
            d,
            e,
            f,
            g = this.getListenersAsObject(a);
          for (e in g)
            if (g.hasOwnProperty(e))
              for (d = g[e].length; d--; )
                (c = g[e][d]),
                  c.once === !0 && this.removeListener(a, c.listener),
                  (f = c.listener.apply(this, b || [])),
                  f === this._getOnceReturnValue() &&
                    this.removeListener(a, c.listener);
          return this;
        }),
        (d.trigger = c("emitEvent")),
        (d.emit = function (a) {
          var b = Array.prototype.slice.call(arguments, 1);
          return this.emitEvent(a, b);
        }),
        (d.setOnceReturnValue = function (a) {
          return (this._onceReturnValue = a), this;
        }),
        (d._getOnceReturnValue = function () {
          return this.hasOwnProperty("_onceReturnValue")
            ? this._onceReturnValue
            : !0;
        }),
        (d._getEvents = function () {
          return this._events || (this._events = {});
        }),
        (a.noConflict = function () {
          return (e.EventEmitter = f), a;
        }),
        "function" == typeof define && define.amd
          ? define(function () {
              return a;
            })
          : "object" == typeof module && module.exports
          ? (module.exports = a)
          : (this.EventEmitter = a);
    }.call(this),
    (function (a, b) {
      "use strict";
      "function" == typeof define && define.amd
        ? define(
            ["eventEmitter/EventEmitter", "eventie/eventie"],
            function (c, d) {
              return b(a, c, d);
            }
          )
        : "object" == typeof exports
        ? (module.exports = b(a, require("eventEmitter"), require("eventie")))
        : (a.imagesLoaded = b(a, a.EventEmitter, a.eventie));
    })(this, function (a, b, c) {
      "use strict";
      function d(a, b) {
        for (var c in b) a[c] = b[c];
        return a;
      }
      function e(a) {
        return "[object Array]" === m.call(a);
      }
      function f(a) {
        var b = [];
        if (e(a)) b = a;
        else if ("number" == typeof a.length)
          for (var c = 0, d = a.length; d > c; c++) b.push(a[c]);
        else b.push(a);
        return b;
      }
      function g(a, b, c) {
        if (!(this instanceof g)) return new g(a, b);
        "string" == typeof a && (a = document.querySelectorAll(a)),
          (this.elements = f(a)),
          (this.options = d({}, this.options)),
          "function" == typeof b ? (c = b) : d(this.options, b),
          c && this.on("always", c),
          this.getImages(),
          j && (this.jqDeferred = new j.Deferred());
        var e = this;
        setTimeout(function () {
          e.check();
        });
      }
      function h(a) {
        this.img = a;
      }
      function i(a) {
        (this.src = a), (n[a] = this);
      }
      var j = a.jQuery,
        k = a.console,
        l = "undefined" != typeof k,
        m = Object.prototype.toString;
      (g.prototype = new b()),
        (g.prototype.options = {}),
        (g.prototype.getImages = function () {
          this.images = [];
          for (var a = 0, b = this.elements.length; b > a; a++) {
            var c = this.elements[a];
            "IMG" === c.nodeName && this.addImage(c);
            for (
              var d = c.querySelectorAll("img"), e = 0, f = d.length;
              f > e;
              e++
            ) {
              var g = d[e];
              this.addImage(g);
            }
          }
        }),
        (g.prototype.addImage = function (a) {
          var b = new h(a);
          this.images.push(b);
        }),
        (g.prototype.check = function () {
          function a(a) {
            return (
              b.options.debug && l,
              b.progress(a),
              c++,
              c === d && b.complete(),
              !0
            );
          }
          var b = this,
            c = 0,
            d = this.images.length;
          if (((this.hasAnyBroken = !1), !d)) return this.complete(), void 0;
          for (var e = 0; d > e; e++) {
            var f = this.images[e];
            f.on("confirm", a), f.check();
          }
        }),
        (g.prototype.progress = function (a) {
          this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded;
          var b = this;
          setTimeout(function () {
            b.emit("progress", b, a),
              b.jqDeferred && b.jqDeferred.notify && b.jqDeferred.notify(b, a);
          });
        }),
        (g.prototype.complete = function () {
          var a = this.hasAnyBroken ? "fail" : "done";
          this.isComplete = !0;
          var b = this;
          setTimeout(function () {
            if ((b.emit(a, b), b.emit("always", b), b.jqDeferred)) {
              var c = b.hasAnyBroken ? "reject" : "resolve";
              b.jqDeferred[c](b);
            }
          });
        }),
        j &&
          (j.fn.imagesLoaded = function (a, b) {
            var c = new g(this, a, b);
            return c.jqDeferred.promise(j(this));
          }),
        (h.prototype = new b()),
        (h.prototype.check = function () {
          var a = n[this.img.src] || new i(this.img.src);
          if (a.isConfirmed)
            return this.confirm(a.isLoaded, "cached was confirmed"), void 0;
          if (this.img.complete && void 0 !== this.img.naturalWidth)
            return (
              this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0
            );
          var b = this;
          a.on("confirm", function (a, c) {
            return b.confirm(a.isLoaded, c), !0;
          }),
            a.check();
        }),
        (h.prototype.confirm = function (a, b) {
          (this.isLoaded = a), this.emit("confirm", this, b);
        });
      var n = {};
      return (
        (i.prototype = new b()),
        (i.prototype.check = function () {
          if (!this.isChecked) {
            var a = new Image();
            c.bind(a, "load", this),
              c.bind(a, "error", this),
              (a.src = this.src),
              (this.isChecked = !0);
          }
        }),
        (i.prototype.handleEvent = function (a) {
          var b = "on" + a.type;
          this[b] && this[b](a);
        }),
        (i.prototype.onload = function (a) {
          this.confirm(!0, "onload"), this.unbindProxyEvents(a);
        }),
        (i.prototype.onerror = function (a) {
          this.confirm(!1, "onerror"), this.unbindProxyEvents(a);
        }),
        (i.prototype.confirm = function (a, b) {
          (this.isConfirmed = !0),
            (this.isLoaded = a),
            this.emit("confirm", this, b);
        }),
        (i.prototype.unbindProxyEvents = function (a) {
          c.unbind(a.target, "load", this), c.unbind(a.target, "error", this);
        }),
        g
      );
    }),
    (b.prototype.createOverlay = function () {
      var b = "absolute";
      if ("body" == this.parent.element.tagName.toLowerCase()) b = "fixed";
      else {
        var c = this.parent.$element.css("position");
        ("fixed" != c || "absolute" != c) &&
          this.parent.$element.css("position", "relative");
      }
      (this.container = a(
        "<div id='" + this.parent.options.overlayId + "'></div>"
      )
        .css({
          width: "100%",
          height: "100%",
          backgroundColor: this.parent.options.backgroundColor,
          backgroundPosition: "fixed",
          position: b,
          zIndex: 666999,
          top: 0,
          left: 0,
        })
        .appendTo(this.parent.$element)),
        (this.loadbar = a("<div id='qLbar'></div>")
          .css({
            height: this.parent.options.barHeight + "px",
            marginTop: "-" + this.parent.options.barHeight / 2 + "px",
            backgroundColor: this.parent.options.barColor,
            width: "0%",
            position: "absolute",
            top: "50%",
          })
          .appendTo(this.container)),
        1 == this.parent.options.percentage &&
          (this.percentageContainer = a("<div id='qLpercentage'></div>")
            .text("0%")
            .css({
              height: "40px",
              width: "100px",
              position: "absolute",
              fontSize: "3em",
              top: "50%",
              left: "50%",
              marginTop: "-" + (59 + this.parent.options.barHeight) + "px",
              textAlign: "center",
              marginLeft: "-50px",
              color: this.parent.options.barColor,
            })
            .appendTo(this.container)),
        (this.parent.preloadContainer.toPreload.length &&
          1 != this.parent.alreadyLoaded) ||
          this.parent.destroyContainers();
    }),
    (b.prototype.updatePercentage = function (a) {
      this.loadbar.stop().animate({ width: a + "%", minWidth: a + "%" }, 200),
        1 == this.parent.options.percentage &&
          this.percentageContainer.text(Math.ceil(a) + "%");
    }),
    (c.prototype.create = function () {
      (this.container = a("<div></div>")
        .appendTo("body")
        .css({ display: "none", width: 0, height: 0, overflow: "hidden" })),
        this.processQueue();
    }),
    (c.prototype.processQueue = function () {
      for (var a = 0; this.toPreload.length > a; a++)
        this.parent.destroyed || this.preloadImage(this.toPreload[a]);
    }),
    (c.prototype.addImage = function (a) {
      this.toPreload.push(a);
    }),
    (c.prototype.preloadImage = function (a) {
      var b = new d();
      b.addToPreloader(this, a), b.bindLoadEvent();
    }),
    (d.prototype.addToPreloader = function (b, c) {
      (this.element = a("<img />").attr("src", c)),
        this.element.appendTo(b.container),
        (this.parent = b.parent);
    }),
    (d.prototype.bindLoadEvent = function () {
      this.parent.imageCounter++,
        (this.element[0].ref = this),
        new imagesLoaded(this.element, function (a) {
          a.elements[0].ref.completeLoading();
        });
    }),
    (d.prototype.completeLoading = function () {
      this.parent.imageDone++;
      var a = 100 * (this.parent.imageDone / this.parent.imageCounter);
      this.parent.overlayLoader.updatePercentage(a),
        (this.parent.imageDone == this.parent.imageCounter || a >= 100) &&
          this.parent.endLoader();
    }),
    (e.prototype.init = function () {
      if (
        ((this.options = a.extend({}, this.defaultOptions, this.options)),
        this.findImageInElement(this.element),
        1 == this.options.deepSearch)
      )
        for (
          var b = this.$element.find("*:not(script)"), c = 0;
          c < b.length;
          c++
        )
          this.findImageInElement(b[c]);
      this.preloadContainer.create(), this.overlayLoader.createOverlay();
    }),
    (e.prototype.findImageInElement = function (b) {
      var c = "",
        e = a(b),
        f = "normal";
      if (
        ("none" != e.css("background-image")
          ? ((c = e.css("background-image")), (f = "background"))
          : "undefined" != typeof e.attr("src") &&
            "img" == b.nodeName.toLowerCase() &&
            (c = e.attr("src")),
        !this.hasGradient(c))
      ) {
        c = this.stripUrl(c);
        for (var g = c.split(", "), h = 0; h < g.length; h++)
          if (this.validUrl(g[h]) && this.urlIsNew(g[h])) {
            var i = "";
            if (this.isIE() || this.isOpera())
              (i = "?rand=" + Math.random()),
                this.preloadContainer.addImage(g[h] + i);
            else if ("background" == f)
              this.preloadContainer.addImage(g[h] + i);
            else {
              var j = new d(this);
              (j.element = e), j.bindLoadEvent();
            }
            this.foundUrls.push(g[h]);
          }
      }
    }),
    (e.prototype.hasGradient = function (a) {
      return -1 == a.indexOf("gradient") ? !1 : !0;
    }),
    (e.prototype.stripUrl = function (a) {
      return (
        (a = a.replace(/url\(\"/g, "")),
        (a = a.replace(/url\(/g, "")),
        (a = a.replace(/\"\)/g, "")),
        (a = a.replace(/\)/g, ""))
      );
    }),
    (e.prototype.isIE = function () {
      return navigator.userAgent.match(/msie/i);
    }),
    (e.prototype.isOpera = function () {
      return navigator.userAgent.match(/Opera/i);
    }),
    (e.prototype.validUrl = function (a) {
      return a.length > 0 && !a.match(/^(data:)/i) ? !0 : !1;
    }),
    (e.prototype.urlIsNew = function (a) {
      return -1 == this.foundUrls.indexOf(a) ? !0 : !1;
    }),
    (e.prototype.destroyContainers = function () {
      (this.destroyed = !0),
        this.preloadContainer.container.remove(),
        this.overlayLoader.container.remove();
    }),
    (e.prototype.endLoader = function () {
      (this.destroyed = !0), this.onLoadComplete();
    }),
    (e.prototype.onLoadComplete = function () {
      if (
        (this.options.onLoadComplete(),
        "grow" == this.options.completeAnimation)
      ) {
        var b = this.options.minimumTime;
        (this.overlayLoader.loadbar[0].parent = this),
          this.overlayLoader.loadbar
            .stop()
            .animate({ width: "100%" }, b, function () {
              a(this).animate(
                { top: "0%", width: "100%", height: "100%" },
                500,
                function () {
                  (this.parent.overlayLoader.container[0].parent = this.parent),
                    this.parent.overlayLoader.container.fadeOut(
                      500,
                      function () {
                        this.parent.destroyContainers(),
                          this.parent.options.onComplete();
                      }
                    );
                }
              );
            });
      } else {
        var b = this.options.minimumTime;
        (this.overlayLoader.container[0].parent = this),
          this.overlayLoader.container.fadeOut(b, function () {
            this.parent.destroyContainers(), this.parent.options.onComplete();
          });
      }
    }),
    Array.prototype.indexOf ||
      (Array.prototype.indexOf = function (a) {
        var b = this.length >>> 0,
          c = Number(arguments[1]) || 0;
        for (
          c = 0 > c ? Math.ceil(c) : Math.floor(c), 0 > c && (c += b);
          b > c;
          c++
        )
          if (c in this && this[c] === a) return c;
        return -1;
      }),
    (a.fn.queryLoader2 = function (a) {
      return this.each(function () {
        new e(this, a);
      });
    });
})(jQuery);

/**!
 * jQuery Waypoints - v2.0.4
 * Copyright (c) 2011-2014 Caleb Troughton
 * Dual licensed under the MIT license and GPL license.
 * https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
 **/
(function () {
  "use strict";
  var t =
      [].indexOf ||
      function (t) {
        for (var e = 0, n = this.length; e < n; e++) {
          if (e in this && this[e] === t) return e;
        }
        return -1;
      },
    e = [].slice;
  (function (t, e) {
    if (typeof define === "function" && define.amd) {
      return define("waypoints", ["jquery"], function (n) {
        return e(n, t);
      });
    } else {
      return e(t.jQuery, t);
    }
  })(this, function (n, r) {
    var i, o, l, s, f, u, c, a, h, d, p, y, v, w, g, m;
    i = n(r);
    a = t.call(r, "ontouchstart") >= 0;
    s = { horizontal: {}, vertical: {} };
    f = 1;
    c = {};
    u = "waypoints-context-id";
    p = "resize.waypoints";
    y = "scroll.waypoints";
    v = 1;
    w = "waypoints-waypoint-ids";
    g = "waypoint";
    m = "waypoints";
    o = (function () {
      function t(t) {
        var e = this;
        this.$element = t;
        this.element = t[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = "context" + f++;
        this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() };
        this.waypoints = { horizontal: {}, vertical: {} };
        this.element[u] = this.id;
        c[this.id] = this;
        t.bind(y, function () {
          var t;
          if (!(e.didScroll || a)) {
            e.didScroll = true;
            t = function () {
              e.doScroll();
              return (e.didScroll = false);
            };
            return r.setTimeout(t, n[m].settings.scrollThrottle);
          }
        });
        t.bind(p, function () {
          var t;
          if (!e.didResize) {
            e.didResize = true;
            t = function () {
              n[m]("refresh");
              return (e.didResize = false);
            };
            return r.setTimeout(t, n[m].settings.resizeThrottle);
          }
        });
      }
      t.prototype.doScroll = function () {
        var t,
          e = this;
        t = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
          },
        };
        if (a && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]("refresh");
        }
        n.each(t, function (t, r) {
          var i, o, l;
          l = [];
          o = r.newScroll > r.oldScroll;
          i = o ? r.forward : r.backward;
          n.each(e.waypoints[t], function (t, e) {
            var n, i;
            if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e);
            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e);
            }
          });
          l.sort(function (t, e) {
            return t.offset - e.offset;
          });
          if (!o) {
            l.reverse();
          }
          return n.each(l, function (t, e) {
            if (e.options.continuous || t === l.length - 1) {
              return e.trigger([i]);
            }
          });
        });
        return (this.oldScroll = {
          x: t.horizontal.newScroll,
          y: t.vertical.newScroll,
        });
      };
      t.prototype.refresh = function () {
        var t,
          e,
          r,
          i = this;
        r = n.isWindow(this.element);
        e = this.$element.offset();
        this.doScroll();
        t = {
          horizontal: {
            contextOffset: r ? 0 : e.left,
            contextScroll: r ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left",
          },
          vertical: {
            contextOffset: r ? 0 : e.top,
            contextScroll: r ? 0 : this.oldScroll.y,
            contextDimension: r
              ? n[m]("viewportHeight")
              : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top",
          },
        };
        return n.each(t, function (t, e) {
          return n.each(i.waypoints[t], function (t, r) {
            var i, o, l, s, f;
            i = r.options.offset;
            l = r.offset;
            o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
            if (n.isFunction(i)) {
              i = i.apply(r.element);
            } else if (typeof i === "string") {
              i = parseFloat(i);
              if (r.options.offset.indexOf("%") > -1) {
                i = Math.ceil((e.contextDimension * i) / 100);
              }
            }
            r.offset = o - e.contextOffset + e.contextScroll - i;
            if ((r.options.onlyOnScroll && l != null) || !r.enabled) {
              return;
            }
            if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward]);
            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward]);
            } else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward]);
            }
          });
        });
      };
      t.prototype.checkEmpty = function () {
        if (
          n.isEmptyObject(this.waypoints.horizontal) &&
          n.isEmptyObject(this.waypoints.vertical)
        ) {
          this.$element.unbind([p, y].join(" "));
          return delete c[this.id];
        }
      };
      return t;
    })();
    l = (function () {
      function t(t, e, r) {
        var i, o;
        r = n.extend({}, n.fn[g].defaults, r);
        if (r.offset === "bottom-in-view") {
          r.offset = function () {
            var t;
            t = n[m]("viewportHeight");
            if (!n.isWindow(e.element)) {
              t = e.$element.height();
            }
            return t - n(this).outerHeight();
          };
        }
        this.$element = t;
        this.element = t[0];
        this.axis = r.horizontal ? "horizontal" : "vertical";
        this.callback = r.handler;
        this.context = e;
        this.enabled = r.enabled;
        this.id = "waypoints" + v++;
        this.offset = null;
        this.options = r;
        e.waypoints[this.axis][this.id] = this;
        s[this.axis][this.id] = this;
        i = (o = this.element[w]) != null ? o : [];
        i.push(this.id);
        this.element[w] = i;
      }
      t.prototype.trigger = function (t) {
        if (!this.enabled) {
          return;
        }
        if (this.callback != null) {
          this.callback.apply(this.element, t);
        }
        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };
      t.prototype.disable = function () {
        return (this.enabled = false);
      };
      t.prototype.enable = function () {
        this.context.refresh();
        return (this.enabled = true);
      };
      t.prototype.destroy = function () {
        delete s[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };
      t.getWaypointsByElement = function (t) {
        var e, r;
        r = t[w];
        if (!r) {
          return [];
        }
        e = n.extend({}, s.horizontal, s.vertical);
        return n.map(r, function (t) {
          return e[t];
        });
      };
      return t;
    })();
    d = {
      init: function (t, e) {
        var r;
        if (e == null) {
          e = {};
        }
        if ((r = e.handler) == null) {
          e.handler = t;
        }
        this.each(function () {
          var t, r, i, s;
          t = n(this);
          i = (s = e.context) != null ? s : n.fn[g].defaults.context;
          if (!n.isWindow(i)) {
            i = t.closest(i);
          }
          i = n(i);
          r = c[i[0][u]];
          if (!r) {
            r = new o(i);
          }
          return new l(t, r, e);
        });
        n[m]("refresh");
        return this;
      },
      disable: function () {
        return d._invoke.call(this, "disable");
      },
      enable: function () {
        return d._invoke.call(this, "enable");
      },
      destroy: function () {
        return d._invoke.call(this, "destroy");
      },
      prev: function (t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e > 0) {
            return t.push(n[e - 1]);
          }
        });
      },
      next: function (t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e < n.length - 1) {
            return t.push(n[e + 1]);
          }
        });
      },
      _traverse: function (t, e, i) {
        var o, l;
        if (t == null) {
          t = "vertical";
        }
        if (e == null) {
          e = r;
        }
        l = h.aggregate(e);
        o = [];
        this.each(function () {
          var e;
          e = n.inArray(this, l[t]);
          return i(o, e, l[t]);
        });
        return this.pushStack(o);
      },
      _invoke: function (t) {
        this.each(function () {
          var e;
          e = l.getWaypointsByElement(this);
          return n.each(e, function (e, n) {
            n[t]();
            return true;
          });
        });
        return this;
      },
    };
    n.fn[g] = function () {
      var t, r;
      (r = arguments[0]),
        (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
      if (d[r]) {
        return d[r].apply(this, t);
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments);
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r]);
      } else if (!r) {
        return n.error(
          "jQuery Waypoints needs a callback function or handler option."
        );
      } else {
        return n.error(
          "The " + r + " method does not exist in jQuery Waypoints."
        );
      }
    };
    n.fn[g].defaults = {
      context: r,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false,
    };
    h = {
      refresh: function () {
        return n.each(c, function (t, e) {
          return e.refresh();
        });
      },
      viewportHeight: function () {
        var t;
        return (t = r.innerHeight) != null ? t : i.height();
      },
      aggregate: function (t) {
        var e, r, i;
        e = s;
        if (t) {
          e = (i = c[n(t)[0][u]]) != null ? i.waypoints : void 0;
        }
        if (!e) {
          return [];
        }
        r = { horizontal: [], vertical: [] };
        n.each(r, function (t, i) {
          n.each(e[t], function (t, e) {
            return i.push(e);
          });
          i.sort(function (t, e) {
            return t.offset - e.offset;
          });
          r[t] = n.map(i, function (t) {
            return t.element;
          });
          return (r[t] = n.unique(r[t]));
        });
        return r;
      },
      above: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "vertical", function (t, e) {
          return e.offset <= t.oldScroll.y;
        });
      },
      below: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "vertical", function (t, e) {
          return e.offset > t.oldScroll.y;
        });
      },
      left: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "horizontal", function (t, e) {
          return e.offset <= t.oldScroll.x;
        });
      },
      right: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "horizontal", function (t, e) {
          return e.offset > t.oldScroll.x;
        });
      },
      enable: function () {
        return h._invoke("enable");
      },
      disable: function () {
        return h._invoke("disable");
      },
      destroy: function () {
        return h._invoke("destroy");
      },
      extendFn: function (t, e) {
        return (d[t] = e);
      },
      _invoke: function (t) {
        var e;
        e = n.extend({}, s.vertical, s.horizontal);
        return n.each(e, function (e, n) {
          n[t]();
          return true;
        });
      },
      _filter: function (t, e, r) {
        var i, o;
        i = c[n(t)[0][u]];
        if (!i) {
          return [];
        }
        o = [];
        n.each(i.waypoints[e], function (t, e) {
          if (r(i, e)) {
            return o.push(e);
          }
        });
        o.sort(function (t, e) {
          return t.offset - e.offset;
        });
        return n.map(o, function (t) {
          return t.element;
        });
      },
    };
    n[m] = function () {
      var t, n;
      (n = arguments[0]),
        (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
      if (h[n]) {
        return h[n].apply(null, t);
      } else {
        return h.aggregate.call(null, n);
      }
    };
    n[m].settings = { resizeThrottle: 100, scrollThrottle: 30 };
    return i.on("load", function () {
      return n[m]("refresh");
    });
  });
}.call(this));

/**
 * jQuery scrollTo
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | https://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.4.11
 **/
(function (a) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define(["jquery"], a);
  } else {
    a(jQuery);
  }
})(function ($) {
  "use strict";
  var j = ($.scrollTo = function (a, b, c) {
    return $(window).scrollTo(a, b, c);
  });
  j.defaults = {
    axis: "xy",
    duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
    limit: true,
  };
  j.window = function (a) {
    return $(window)._scrollable();
  };
  $.fn._scrollable = function () {
    return this.map(function () {
      var a = this,
        isWin =
          !a.nodeName ||
          $.inArray(a.nodeName.toLowerCase(), [
            "iframe",
            "#document",
            "html",
            "body",
          ]) != -1;
      if (!isWin) return a;
      var b = (a.contentWindow || a).document || a.ownerDocument || a;
      return /webkit/i.test(navigator.userAgent) || b.compatMode == "BackCompat"
        ? b.body
        : b.documentElement;
    });
  };
  $.fn.scrollTo = function (f, g, h) {
    if (typeof g == "object") {
      h = g;
      g = 0;
    }
    if (typeof h == "function") h = { onAfter: h };
    if (f == "max") f = 9e9;
    h = $.extend({}, j.defaults, h);
    g = g || h.duration;
    h.queue = h.queue && h.axis.length > 1;
    if (h.queue) g /= 2;
    h.offset = both(h.offset);
    h.over = both(h.over);
    return this._scrollable()
      .each(function () {
        if (f == null) return;
        var d = this,
          $elem = $(d),
          targ = f,
          toff,
          attr = {},
          win = $elem.is("html,body");
        switch (typeof targ) {
          case "number":
          case "string":
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
              targ = both(targ);
              break;
            }
            targ = $(targ, this);
            if (!targ.length) return;
          case "object":
            if (targ.is || targ.style) toff = (targ = $(targ)).offset();
        }
        var e = ($.isFunction(h.offset) && h.offset(d, targ)) || h.offset;
        $.each(h.axis.split(""), function (i, a) {
          var b = a == "x" ? "Left" : "Top",
            pos = b.toLowerCase(),
            key = "scroll" + b,
            old = d[key],
            max = j.max(d, a);
          if (toff) {
            attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);
            if (h.margin) {
              attr[key] -= parseInt(targ.css("margin" + b)) || 0;
              attr[key] -= parseInt(targ.css("border" + b + "Width")) || 0;
            }
            attr[key] += e[pos] || 0;
            if (h.over[pos])
              attr[key] += targ[a == "x" ? "width" : "height"]() * h.over[pos];
          } else {
            var c = targ[pos];
            attr[key] =
              c.slice && c.slice(-1) == "%" ? (parseFloat(c) / 100) * max : c;
          }
          if (h.limit && /^\d+$/.test(attr[key]))
            attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
          if (!i && h.queue) {
            if (old != attr[key]) animate(h.onAfterFirst);
            delete attr[key];
          }
        });
        animate(h.onAfter);
        function animate(a) {
          $elem.animate(
            attr,
            g,
            h.easing,
            a &&
              function () {
                a.call(this, targ, h);
              }
          );
        }
      })
      .end();
  };
  j.max = function (a, b) {
    var c = b == "x" ? "Width" : "Height",
      scroll = "scroll" + c;
    if (!$(a).is("html,body")) return a[scroll] - $(a)[c.toLowerCase()]();
    var d = "client" + c,
      html = a.ownerDocument.documentElement,
      body = a.ownerDocument.body;
    return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d]);
  };
  function both(a) {
    return $.isFunction(a) || typeof a == "object" ? a : { top: a, left: a };
  }
  return j;
});

/**!
 * Stellar.js v0.6.2
 * Copyright 2013, Mark Dalgleish
 * https://markdalgleish.com/projects/stellar.js
 * https://markdalgleish.mit-license.org
 **/
(function (e, t, n, r) {
  "use strict";
  function d(t, n) {
    (this.element = t),
      (this.options = e.extend({}, s, n)),
      (this._defaults = s),
      (this._name = i),
      this.init();
  }
  var i = "stellar",
    s = {
      scrollProperty: "scroll",
      positionProperty: "position",
      horizontalScrolling: !0,
      verticalScrolling: !0,
      horizontalOffset: 0,
      verticalOffset: 0,
      responsive: !1,
      parallaxBackgrounds: !0,
      parallaxElements: !0,
      hideDistantElements: !0,
      hideElement: function (e) {
        e.hide();
      },
      showElement: function (e) {
        e.show();
      },
    },
    o = {
      scroll: {
        getLeft: function (e) {
          return e.scrollLeft();
        },
        setLeft: function (e, t) {
          e.scrollLeft(t);
        },
        getTop: function (e) {
          return e.scrollTop();
        },
        setTop: function (e, t) {
          e.scrollTop(t);
        },
      },
      position: {
        getLeft: function (e) {
          return parseInt(e.css("left"), 10) * -1;
        },
        getTop: function (e) {
          return parseInt(e.css("top"), 10) * -1;
        },
      },
      margin: {
        getLeft: function (e) {
          return parseInt(e.css("margin-left"), 10) * -1;
        },
        getTop: function (e) {
          return parseInt(e.css("margin-top"), 10) * -1;
        },
      },
      transform: {
        getLeft: function (e) {
          var t = getComputedStyle(e[0])[f];
          return t !== "none"
            ? parseInt(t.match(/(-?[0-9]+)/g)[4], 10) * -1
            : 0;
        },
        getTop: function (e) {
          var t = getComputedStyle(e[0])[f];
          return t !== "none"
            ? parseInt(t.match(/(-?[0-9]+)/g)[5], 10) * -1
            : 0;
        },
      },
    },
    u = {
      position: {
        setLeft: function (e, t) {
          e.css("left", t);
        },
        setTop: function (e, t) {
          e.css("top", t);
        },
      },
      transform: {
        setPosition: function (e, t, n, r, i) {
          e[0].style[f] =
            "translate3d(" + (t - n) + "px, " + (r - i) + "px, 0)";
        },
      },
    },
    a = (function () {
      var t = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
        n = e("script")[0].style,
        r = "",
        i;
      for (i in n)
        if (t.test(i)) {
          r = i.match(t)[0];
          break;
        }
      return (
        "WebkitOpacity" in n && (r = "Webkit"),
        "KhtmlOpacity" in n && (r = "Khtml"),
        function (e) {
          return (
            r + (r.length > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e)
          );
        }
      );
    })(),
    f = a("transform"),
    l =
      e("<div />", { style: "background:#fff" }).css(
        "background-position-x"
      ) !== r,
    c = l
      ? function (e, t, n) {
          e.css({ "background-position-x": t, "background-position-y": n });
        }
      : function (e, t, n) {
          e.css("background-position", t + " " + n);
        },
    h = l
      ? function (e) {
          return [
            e.css("background-position-x"),
            e.css("background-position-y"),
          ];
        }
      : function (e) {
          return e.css("background-position").split(" ");
        },
    p =
      t.requestAnimationFrame ||
      t.webkitRequestAnimationFrame ||
      t.mozRequestAnimationFrame ||
      t.oRequestAnimationFrame ||
      t.msRequestAnimationFrame ||
      function (e) {
        setTimeout(e, 1e3 / 60);
      };
  (d.prototype = {
    init: function () {
      (this.options.name = i + "_" + Math.floor(Math.random() * 1e9)),
        this._defineElements(),
        this._defineGetters(),
        this._defineSetters(),
        this._handleWindowLoadAndResize(),
        this._detectViewport(),
        this.refresh({ firstLoad: !0 }),
        this.options.scrollProperty === "scroll"
          ? this._handleScrollEvent()
          : this._startAnimationLoop();
    },
    _defineElements: function () {
      this.element === n.body && (this.element = t),
        (this.$scrollElement = e(this.element)),
        (this.$element = this.element === t ? e("body") : this.$scrollElement),
        (this.$viewportElement =
          this.options.viewportElement !== r
            ? e(this.options.viewportElement)
            : this.$scrollElement[0] === t ||
              this.options.scrollProperty === "scroll"
            ? this.$scrollElement
            : this.$scrollElement.parent());
    },
    _defineGetters: function () {
      var e = this,
        t = o[e.options.scrollProperty];
      (this._getScrollLeft = function () {
        return t.getLeft(e.$scrollElement);
      }),
        (this._getScrollTop = function () {
          return t.getTop(e.$scrollElement);
        });
    },
    _defineSetters: function () {
      var t = this,
        n = o[t.options.scrollProperty],
        r = u[t.options.positionProperty],
        i = n.setLeft,
        s = n.setTop;
      (this._setScrollLeft =
        typeof i == "function"
          ? function (e) {
              i(t.$scrollElement, e);
            }
          : e.noop),
        (this._setScrollTop =
          typeof s == "function"
            ? function (e) {
                s(t.$scrollElement, e);
              }
            : e.noop),
        (this._setPosition =
          r.setPosition ||
          function (e, n, i, s, o) {
            t.options.horizontalScrolling && r.setLeft(e, n, i),
              t.options.verticalScrolling && r.setTop(e, s, o);
          });
    },
    _handleWindowLoadAndResize: function () {
      var n = this,
        r = e(t);
      n.options.responsive &&
        r.bind("load." + this.name, function () {
          n.refresh();
        }),
        r.bind("resize." + this.name, function () {
          n._detectViewport(), n.options.responsive && n.refresh();
        });
    },
    refresh: function (n) {
      var r = this,
        i = r._getScrollLeft(),
        s = r._getScrollTop();
      (!n || !n.firstLoad) && this._reset(),
        this._setScrollLeft(0),
        this._setScrollTop(0),
        this._setOffsets(),
        this._findParticles(),
        this._findBackgrounds(),
        n &&
          n.firstLoad &&
          /WebKit/.test(navigator.userAgent) &&
          e(t).on("load", function () {
            var e = r._getScrollLeft(),
              t = r._getScrollTop();
            r._setScrollLeft(e + 1),
              r._setScrollTop(t + 1),
              r._setScrollLeft(e),
              r._setScrollTop(t);
          }),
        this._setScrollLeft(i),
        this._setScrollTop(s);
    },
    _detectViewport: function () {
      var e = this.$viewportElement.offset(),
        t = e !== null && e !== r;
      (this.viewportWidth = this.$viewportElement.width()),
        (this.viewportHeight = this.$viewportElement.height()),
        (this.viewportOffsetTop = t ? e.top : 0),
        (this.viewportOffsetLeft = t ? e.left : 0);
    },
    _findParticles: function () {
      var t = this,
        n = this._getScrollLeft(),
        i = this._getScrollTop();
      if (this.particles !== r)
        for (var s = this.particles.length - 1; s >= 0; s--)
          this.particles[s].$element.data("stellar-elementIsActive", r);
      this.particles = [];
      if (!this.options.parallaxElements) return;
      this.$element.find("[data-stellar-ratio]").each(function (n) {
        var i = e(this),
          s,
          o,
          u,
          a,
          f,
          l,
          c,
          h,
          p,
          d = 0,
          v = 0,
          m = 0,
          g = 0;
        if (!i.data("stellar-elementIsActive"))
          i.data("stellar-elementIsActive", this);
        else if (i.data("stellar-elementIsActive") !== this) return;
        t.options.showElement(i),
          i.data("stellar-startingLeft")
            ? (i.css("left", i.data("stellar-startingLeft")),
              i.css("top", i.data("stellar-startingTop")))
            : (i.data("stellar-startingLeft", i.css("left")),
              i.data("stellar-startingTop", i.css("top"))),
          (u = i.position().left),
          (a = i.position().top),
          (f =
            i.css("margin-left") === "auto"
              ? 0
              : parseInt(i.css("margin-left"), 10)),
          (l =
            i.css("margin-top") === "auto"
              ? 0
              : parseInt(i.css("margin-top"), 10)),
          (h = i.offset().left - f),
          (p = i.offset().top - l),
          i.parents().each(function () {
            var t = e(this);
            if (t.data("stellar-offset-parent") === !0)
              return (d = m), (v = g), (c = t), !1;
            (m += t.position().left), (g += t.position().top);
          }),
          (s =
            i.data("stellar-horizontal-offset") !== r
              ? i.data("stellar-horizontal-offset")
              : c !== r && c.data("stellar-horizontal-offset") !== r
              ? c.data("stellar-horizontal-offset")
              : t.horizontalOffset),
          (o =
            i.data("stellar-vertical-offset") !== r
              ? i.data("stellar-vertical-offset")
              : c !== r && c.data("stellar-vertical-offset") !== r
              ? c.data("stellar-vertical-offset")
              : t.verticalOffset),
          t.particles.push({
            $element: i,
            $offsetParent: c,
            isFixed: i.css("position") === "fixed",
            horizontalOffset: s,
            verticalOffset: o,
            startingPositionLeft: u,
            startingPositionTop: a,
            startingOffsetLeft: h,
            startingOffsetTop: p,
            parentOffsetLeft: d,
            parentOffsetTop: v,
            stellarRatio:
              i.data("stellar-ratio") !== r ? i.data("stellar-ratio") : 1,
            width: i.outerWidth(!0),
            height: i.outerHeight(!0),
            isHidden: !1,
          });
      });
    },
    _findBackgrounds: function () {
      var t = this,
        n = this._getScrollLeft(),
        i = this._getScrollTop(),
        s;
      this.backgrounds = [];
      if (!this.options.parallaxBackgrounds) return;
      (s = this.$element.find("[data-stellar-background-ratio]")),
        this.$element.data("stellar-background-ratio") &&
          (s = s.add(this.$element)),
        s.each(function () {
          var s = e(this),
            o = h(s),
            u,
            a,
            f,
            l,
            p,
            d,
            v,
            m,
            g,
            y = 0,
            b = 0,
            w = 0,
            E = 0;
          if (!s.data("stellar-backgroundIsActive"))
            s.data("stellar-backgroundIsActive", this);
          else if (s.data("stellar-backgroundIsActive") !== this) return;
          s.data("stellar-backgroundStartingLeft")
            ? c(
                s,
                s.data("stellar-backgroundStartingLeft"),
                s.data("stellar-backgroundStartingTop")
              )
            : (s.data("stellar-backgroundStartingLeft", o[0]),
              s.data("stellar-backgroundStartingTop", o[1])),
            (p =
              s.css("margin-left") === "auto"
                ? 0
                : parseInt(s.css("margin-left"), 10)),
            (d =
              s.css("margin-top") === "auto"
                ? 0
                : parseInt(s.css("margin-top"), 10)),
            (v = s.offset().left - p - n),
            (m = s.offset().top - d - i),
            s.parents().each(function () {
              var t = e(this);
              if (t.data("stellar-offset-parent") === !0)
                return (y = w), (b = E), (g = t), !1;
              (w += t.position().left), (E += t.position().top);
            }),
            (u =
              s.data("stellar-horizontal-offset") !== r
                ? s.data("stellar-horizontal-offset")
                : g !== r && g.data("stellar-horizontal-offset") !== r
                ? g.data("stellar-horizontal-offset")
                : t.horizontalOffset),
            (a =
              s.data("stellar-vertical-offset") !== r
                ? s.data("stellar-vertical-offset")
                : g !== r && g.data("stellar-vertical-offset") !== r
                ? g.data("stellar-vertical-offset")
                : t.verticalOffset),
            t.backgrounds.push({
              $element: s,
              $offsetParent: g,
              isFixed: s.css("background-attachment") === "fixed",
              horizontalOffset: u,
              verticalOffset: a,
              startingValueLeft: o[0],
              startingValueTop: o[1],
              startingBackgroundPositionLeft: isNaN(parseInt(o[0], 10))
                ? 0
                : parseInt(o[0], 10),
              startingBackgroundPositionTop: isNaN(parseInt(o[1], 10))
                ? 0
                : parseInt(o[1], 10),
              startingPositionLeft: s.position().left,
              startingPositionTop: s.position().top,
              startingOffsetLeft: v,
              startingOffsetTop: m,
              parentOffsetLeft: y,
              parentOffsetTop: b,
              stellarRatio:
                s.data("stellar-background-ratio") === r
                  ? 1
                  : s.data("stellar-background-ratio"),
            });
        });
    },
    _reset: function () {
      var e, t, n, r, i;
      for (i = this.particles.length - 1; i >= 0; i--)
        (e = this.particles[i]),
          (t = e.$element.data("stellar-startingLeft")),
          (n = e.$element.data("stellar-startingTop")),
          this._setPosition(e.$element, t, t, n, n),
          this.options.showElement(e.$element),
          e.$element
            .data("stellar-startingLeft", null)
            .data("stellar-elementIsActive", null)
            .data("stellar-backgroundIsActive", null);
      for (i = this.backgrounds.length - 1; i >= 0; i--)
        (r = this.backgrounds[i]),
          r.$element
            .data("stellar-backgroundStartingLeft", null)
            .data("stellar-backgroundStartingTop", null),
          c(r.$element, r.startingValueLeft, r.startingValueTop);
    },
    destroy: function () {
      this._reset(),
        this.$scrollElement
          .unbind("resize." + this.name)
          .unbind("scroll." + this.name),
        (this._animationLoop = e.noop),
        e(t)
          .unbind("load." + this.name)
          .unbind("resize." + this.name);
    },
    _setOffsets: function () {
      var n = this,
        r = e(t);
      r
        .unbind("resize.horizontal-" + this.name)
        .unbind("resize.vertical-" + this.name),
        typeof this.options.horizontalOffset == "function"
          ? ((this.horizontalOffset = this.options.horizontalOffset()),
            r.bind("resize.horizontal-" + this.name, function () {
              n.horizontalOffset = n.options.horizontalOffset();
            }))
          : (this.horizontalOffset = this.options.horizontalOffset),
        typeof this.options.verticalOffset == "function"
          ? ((this.verticalOffset = this.options.verticalOffset()),
            r.bind("resize.vertical-" + this.name, function () {
              n.verticalOffset = n.options.verticalOffset();
            }))
          : (this.verticalOffset = this.options.verticalOffset);
    },
    _repositionElements: function () {
      var e = this._getScrollLeft(),
        t = this._getScrollTop(),
        n,
        r,
        i,
        s,
        o,
        u,
        a,
        f = !0,
        l = !0,
        h,
        p,
        d,
        v,
        m;
      if (
        this.currentScrollLeft === e &&
        this.currentScrollTop === t &&
        this.currentWidth === this.viewportWidth &&
        this.currentHeight === this.viewportHeight
      )
        return;
      (this.currentScrollLeft = e),
        (this.currentScrollTop = t),
        (this.currentWidth = this.viewportWidth),
        (this.currentHeight = this.viewportHeight);
      for (m = this.particles.length - 1; m >= 0; m--)
        (i = this.particles[m]),
          (s = i.isFixed ? 1 : 0),
          this.options.horizontalScrolling
            ? ((h =
                (e +
                  i.horizontalOffset +
                  this.viewportOffsetLeft +
                  i.startingPositionLeft -
                  i.startingOffsetLeft +
                  i.parentOffsetLeft) *
                  -(i.stellarRatio + s - 1) +
                i.startingPositionLeft),
              (d = h - i.startingPositionLeft + i.startingOffsetLeft))
            : ((h = i.startingPositionLeft), (d = i.startingOffsetLeft)),
          this.options.verticalScrolling
            ? ((p =
                (t +
                  i.verticalOffset +
                  this.viewportOffsetTop +
                  i.startingPositionTop -
                  i.startingOffsetTop +
                  i.parentOffsetTop) *
                  -(i.stellarRatio + s - 1) +
                i.startingPositionTop),
              (v = p - i.startingPositionTop + i.startingOffsetTop))
            : ((p = i.startingPositionTop), (v = i.startingOffsetTop)),
          this.options.hideDistantElements &&
            ((l =
              !this.options.horizontalScrolling ||
              (d + i.width > (i.isFixed ? 0 : e) &&
                d <
                  (i.isFixed ? 0 : e) +
                    this.viewportWidth +
                    this.viewportOffsetLeft)),
            (f =
              !this.options.verticalScrolling ||
              (v + i.height > (i.isFixed ? 0 : t) &&
                v <
                  (i.isFixed ? 0 : t) +
                    this.viewportHeight +
                    this.viewportOffsetTop))),
          l && f
            ? (i.isHidden &&
                (this.options.showElement(i.$element), (i.isHidden = !1)),
              this._setPosition(
                i.$element,
                h,
                i.startingPositionLeft,
                p,
                i.startingPositionTop
              ))
            : i.isHidden ||
              (this.options.hideElement(i.$element), (i.isHidden = !0));
      for (m = this.backgrounds.length - 1; m >= 0; m--)
        (o = this.backgrounds[m]),
          (s = o.isFixed ? 0 : 1),
          (u = this.options.horizontalScrolling
            ? (e +
                o.horizontalOffset -
                this.viewportOffsetLeft -
                o.startingOffsetLeft +
                o.parentOffsetLeft -
                o.startingBackgroundPositionLeft) *
                (s - o.stellarRatio) +
              "px"
            : o.startingValueLeft),
          (a = this.options.verticalScrolling
            ? (t +
                o.verticalOffset -
                this.viewportOffsetTop -
                o.startingOffsetTop +
                o.parentOffsetTop -
                o.startingBackgroundPositionTop) *
                (s - o.stellarRatio) +
              "px"
            : o.startingValueTop),
          c(o.$element, u, a);
    },
    _handleScrollEvent: function () {
      var e = this,
        t = !1,
        n = function () {
          e._repositionElements(), (t = !1);
        },
        r = function () {
          t || (p(n), (t = !0));
        };
      this.$scrollElement.bind("scroll." + this.name, r), r();
    },
    _startAnimationLoop: function () {
      var e = this;
      (this._animationLoop = function () {
        p(e._animationLoop), e._repositionElements();
      }),
        this._animationLoop();
    },
  }),
    (e.fn[i] = function (t) {
      var n = arguments;
      if (t === r || typeof t == "object")
        return this.each(function () {
          e.data(this, "plugin_" + i) ||
            e.data(this, "plugin_" + i, new d(this, t));
        });
      if (typeof t == "string" && t[0] !== "_" && t !== "init")
        return this.each(function () {
          var r = e.data(this, "plugin_" + i);
          r instanceof d &&
            typeof r[t] == "function" &&
            r[t].apply(r, Array.prototype.slice.call(n, 1)),
            t === "destroy" && e.data(this, "plugin_" + i, null);
        });
    }),
    (e[i] = function (n) {
      var r = e(t);
      return r.stellar.apply(r, Array.prototype.slice.call(arguments, 0));
    }),
    (e[i].scrollProperty = o),
    (e[i].positionProperty = u),
    (t.Stellar = d);
})(jQuery, this, document);

/*!
 * Fixed Header Function
 */
!(function (e) {
  "use strict";
  e.fn.cmsmastersFixedHeaderScroll = function (o) {
    var i = {
        headerTop: ".header_top",
        headerMid: ".header_mid",
        headerBot: ".header_bot",
        navBlock: "nav",
        navList: "#navigation",
        navTopList: "#top_line_nav",
        respNavButton: ".responsive_nav",
        respTopNavButton: ".responsive_top_nav",
        fixedClass: ".fixed_header",
        fixedClassBlock: "#page",
        respHideBlocks: "",
        maxWidthMid: 1024,
        maxWidthBot: 1024,
        changeTopHeight: !0,
        changeMidHeight: !0,
        mobileDisabled: !0,
      },
      t = this,
      a = {};
    (a = {
      init: function () {
        (a.options = a.o = e.extend({}, i, o)),
          (a.el = t),
          (a.vars = a.v = {}),
          (a.v.newTopHeight = 0),
          (a.v.newMidHeight = 0),
          a.setHeaderVars(),
          a.startHeader();
      },
      setHeaderVars: function () {
        (a.v.headerMidString = a.o.headerMid),
          (a.v.headerTop = a.el.find("> " + a.o.headerTop)),
          (a.v.headerMid = a.el.find("> " + a.v.headerMidString)),
          (a.v.headerBot = a.el.find("> " + a.o.headerBot)),
          (a.v.respNavButton = a.el.find(a.o.respNavButton)),
          (a.v.respTopNavButton = a.el.find(a.o.respTopNavButton)),
          (a.v.respHideBlocks = e(a.o.respHideBlocks)),
          (a.v.fixedClassBlock = e(a.o.fixedClassBlock)),
          (a.v.navListString = a.o.navList),
          (a.v.navTopListString = a.o.navTopList),
          (a.v.navBlockString = a.o.navBlock),
          (a.v.navBlock = a.el
            .find(a.v.navListString)
            .parents(a.v.navBlockString)),
          (a.v.navTopBlock = a.el
            .find(a.v.navTopListString)
            .parents(a.v.navBlockString)),
          (a.v.midChangeHeightBlocks = e(a.v.headerMidString)),
          (a.v.midChangeHeightBlocksResp = e(a.v.headerMidString)),
          (a.v.topHeight = 0),
          (a.v.midHeight = a.v.headerMid.attr("data-height")),
          (a.v.win = e(window)),
          (a.v.winScrollTop = a.v.win.scrollTop()),
          (a.v.winMidScrollTop = a.v.winScrollTop - a.v.topHeight),
          (a.v.isMobile = "ontouchstart" in document.documentElement);
      },
      startHeader: function () {
        a.v.headerTop.length > 0 &&
          (a.v.topHeight = a.v.headerTop.attr("data-height")),
          a.attachEvents(),
          a.v.win.trigger("scroll");
      },
      attachEvents: function () {
        a.v.respNavButton.bind("click", function () {
          return (
            a.v.respNavButton.is(":not(.active)")
              ? (a.v.navBlock.css({ display: "block" }),
                a.v.respHideBlocks.css({ display: "none" }),
                a.v.respNavButton.addClass("active"))
              : (a.v.navBlock.css({ display: "none" }),
                a.v.respHideBlocks.css({ display: "block" }),
                a.v.respNavButton.removeClass("active")),
            !1
          );
        }),
          a.v.respTopNavButton.bind("click", function () {
            return (
              a.v.respTopNavButton.is(":not(.active)")
                ? (a.v.navTopBlock.css({ display: "block" }),
                  a.v.respHideBlocks.css({ display: "none" }),
                  a.v.respTopNavButton.addClass("active"))
                : (a.v.navTopBlock.css({ display: "none" }),
                  a.v.respHideBlocks.css({ display: "block" }),
                  a.v.respTopNavButton.removeClass("active")),
              !1
            );
          }),
          a.v.win.bind("scroll", function () {
            cmsmasters_media_width() > a.o.maxWidthMid &&
              (a.getScrollTop(), a.headerTransform());
          }),
          a.v.win.bind("resize", function () {
            a.v.headerBot.length > 0
              ? a.headerResize(a.o.maxWidthBot)
              : a.headerResize(a.o.maxWidthMid);
          });
      },
      getScrollTop: function () {
        (a.v.winScrollTop = a.v.win.scrollTop()),
          (a.v.winMidScrollTop = a.v.winScrollTop - a.v.topHeight);
      },
      headerTransform: function () {
        if (a.v.fixedClassBlock.hasClass("fixed_header")) {
          a.v.winScrollTop < a.v.topHeight
            ? (a.v.headerMid.removeClass("header_mid_scroll"),
              a.v.headerBot.removeClass("header_bot_scroll"),
              (a.v.newTopHeight = a.v.topHeight - a.v.winScrollTop),
              a.v.headerTop.css({
                overflow: "hidden",
                height: a.v.newTopHeight + "px",
              }),
              a.v.winScrollTop <= 3 &&
                a.v.headerTop.css({ overflow: "inherit" }),
              a.v.midChangeHeightBlocks.css({ height: a.v.midHeight + "px" }))
            : (a.v.headerTop.css({ overflow: "hidden", height: 0 }),
              a.v.winMidScrollTop < a.v.midHeight / 3
                ? (a.v.headerMid.removeClass("header_mid_scroll"),
                  a.v.headerBot.removeClass("header_bot_scroll"),
                  (a.v.newMidHeight = a.v.midHeight - a.v.winMidScrollTop))
                : (a.v.headerMid.addClass("header_mid_scroll"),
                  a.v.headerBot.addClass("header_bot_scroll"),
                  (a.v.newMidHeight = a.v.midHeight / 1.5)),
              a.v.midChangeHeightBlocks.css({
                height: a.v.newMidHeight + "px",
              }));
        }
      },
      headerResize: function (e) {
        cmsmasters_media_width() > e
          ? (a.v.navBlock.removeAttr("style"),
            a.v.respHideBlocks.removeAttr("style"),
            a.v.respNavButton.removeClass("active"),
            a.getScrollTop(),
            a.headerTransform())
          : (a.v.headerTop.removeAttr("style"),
            a.v.fixedClassBlock.hasClass("fixed_header")
              ? a.v.midChangeHeightBlocksResp.css("height", "auto")
              : "");
      },
    }),
      a.init();
  };
})(jQuery);

/*!
 * Responsive Navigation Function
 */
!(function (s) {
  "use strict";
  s.fn.cmsmastersResponsiveNav = function (n) {
    var t = {
        submenu: "ul.sub-menu",
        respButton: ".responsive_nav",
        startWidth: 1024,
      },
      e = this,
      i = {};
    (i = {
      init: function () {
        (i.o = s.extend({}, t, n)),
          (i.el = e),
          (i.v = {}),
          (i.v.pLinkText = ""),
          (i.v.subLinkToggle = void 0),
          i.setVars(),
          i.restartNav();
      },
      setVars: function () {
        (i.v.submenu = i.el.find(i.o.submenu)),
          (i.v.subLink = i.v.submenu.closest("li").find("> a")),
          (i.v.respButton = s(i.o.respButton)),
          (i.v.startWidth = i.o.startWidth),
          (i.v.win = s(window)),
          (i.v.trigger = !1),
          (i.v.counter = 0),
          i.startEvent();
      },
      buildNav: function () {
        (i.v.trigger = !0),
          (i.v.counter = 1),
          i.v.subLink.each(function () {
            "" === s(this).text() &&
              ((i.v.pLinkText = s(this)
                .closest("ul")
                .closest("li")
                .find("> a")
                .text()),
              s(this)
                .addClass("cmsmasters_resp_nav_custom_text")
                .html(
                  '<span class="nav_item_wrap"><span class="nav_title">' +
                    i.v.counter +
                    ". " +
                    i.v.pLinkText +
                    "</span></span>"
                ),
              (i.v.counter += 1)),
              s(this).append(
                '<span class="cmsmasters_resp_nav_toggle cmsmasters_theme_icon_resp_nav_slide_down"></span>'
              );
          }),
          (i.v.subLinkToggle = i.v.subLink.find(
            "> span.cmsmasters_resp_nav_toggle"
          )),
          i.v.submenu.hide(),
          i.attachEvents();
      },
      restartNav: function () {
        !i.v.trigger && cmsmasters_media_width() <= i.v.startWidth
          ? i.buildNav()
          : i.v.trigger &&
            cmsmasters_media_width() > i.v.startWidth &&
            i.destroyNav();
      },
      resetNav: function () {
        i.v.subLinkToggle
          .removeClass("cmsmasters_theme_icon_resp_nav_slide_up")
          .addClass("cmsmasters_theme_icon_resp_nav_slide_down"),
          i.v.submenu.hide();
      },
      destroyNav: function () {
        i.v.subLink.each(function () {
          s(this).hasClass("cmsmasters_resp_nav_custom_text") &&
            s(this).removeClass("cmsmasters_resp_nav_custom_text").text(""),
            s(this).find("span.cmsmasters_resp_nav_toggle").remove();
        }),
          i.v.submenu.css("display", ""),
          (i.v.trigger = !1),
          i.detachEvents();
      },
      startEvent: function () {
        i.v.win.on("resize", function () {
          i.restartNav();
        });
      },
      attachEvents: function () {
        i.v.subLinkToggle.on("click", function () {
          return (
            s(this).hasClass("cmsmasters_theme_icon_resp_nav_slide_up")
              ? (s(this)
                  .removeClass("cmsmasters_theme_icon_resp_nav_slide_up")
                  .addClass("cmsmasters_theme_icon_resp_nav_slide_down")
                  .closest("li")
                  .find("ul.sub-menu")
                  .hide(),
                s(this)
                  .closest("li")
                  .find("span.cmsmasters_resp_nav_toggle")
                  .removeClass("cmsmasters_theme_icon_resp_nav_slide_up")
                  .addClass("cmsmasters_theme_icon_resp_nav_slide_down"))
              : s(this)
                  .removeClass("cmsmasters_theme_icon_resp_nav_slide_down")
                  .addClass("cmsmasters_theme_icon_resp_nav_slide_up")
                  .closest("li")
                  .find("ul.sub-menu")
                  .eq(0)
                  .show(),
            !1
          );
        }),
          i.v.respButton.on("click", function () {
            i.v.trigger && s(this).hasClass("active") && i.resetNav();
          });
      },
      detachEvents: function () {
        i.v.subLinkToggle.off("click");
      },
    }),
      i.init();
  };
})(jQuery);

/**!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 **/
(function (e, t) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, r) {
      return t(e, n, r);
    });
  } else if (typeof exports === "object") {
    module.exports = t(e, require("wolfy87-eventemitter"), require("eventie"));
  } else {
    e.imagesLoaded = t(e, e.EventEmitter, e.eventie);
  }
})(window, function (t, n, r) {
  "use strict";
  function u(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }
    return e;
  }
  function f(e) {
    return a.call(e) === "[object Array]";
  }
  function l(e) {
    var t = [];
    if (f(e)) {
      t = e;
    } else if (typeof e.length === "number") {
      for (var n = 0, r = e.length; n < r; n++) {
        t.push(e[n]);
      }
    } else {
      t.push(e);
    }
    return t;
  }
  function c(e, t, n) {
    if (!(this instanceof c)) {
      return new c(e, t);
    }
    if (typeof e === "string") {
      e = document.querySelectorAll(e);
    }
    this.elements = l(e);
    this.options = u({}, this.options);
    if (typeof t === "function") {
      n = t;
    } else {
      u(this.options, t);
    }
    if (n) {
      this.on("always", n);
    }
    this.getImages();
    if (i) {
      this.jqDeferred = new i.Deferred();
    }
    var r = this;
    setTimeout(function () {
      r.check();
    });
  }
  function h(e) {
    this.img = e;
  }
  function d(e) {
    this.src = e;
    p[e] = this;
  }
  var i = t.jQuery;
  var s = t.console;
  var o = typeof s !== "undefined";
  var a = Object.prototype.toString;
  c.prototype = new n();
  c.prototype.options = {};
  c.prototype.getImages = function () {
    this.images = [];
    for (var e = 0, t = this.elements.length; e < t; e++) {
      var n = this.elements[e];
      if (n.nodeName === "IMG") {
        this.addImage(n);
      }
      var r = n.nodeType;
      if (!r || !(r === 1 || r === 9 || r === 11)) {
        continue;
      }
      var i = n.querySelectorAll("img");
      for (var s = 0, o = i.length; s < o; s++) {
        var u = i[s];
        this.addImage(u);
      }
    }
  };
  c.prototype.addImage = function (e) {
    var t = new h(e);
    this.images.push(t);
  };
  c.prototype.check = function () {
    function r(r, i) {
      if (e.options.debug && o) {
        s.log("confirm", r, i);
      }
      e.progress(r);
      t++;
      if (t === n) {
        e.complete();
      }
      return true;
    }
    var e = this;
    var t = 0;
    var n = this.images.length;
    this.hasAnyBroken = false;
    if (!n) {
      this.complete();
      return;
    }
    for (var i = 0; i < n; i++) {
      var u = this.images[i];
      u.on("confirm", r);
      u.check();
    }
  };
  c.prototype.progress = function (e) {
    this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
    var t = this;
    setTimeout(function () {
      t.emit("progress", t, e);
      if (t.jqDeferred && t.jqDeferred.notify) {
        t.jqDeferred.notify(t, e);
      }
    });
  };
  c.prototype.complete = function () {
    var e = this.hasAnyBroken ? "fail" : "done";
    this.isComplete = true;
    var t = this;
    setTimeout(function () {
      t.emit(e, t);
      t.emit("always", t);
      if (t.jqDeferred) {
        var n = t.hasAnyBroken ? "reject" : "resolve";
        t.jqDeferred[n](t);
      }
    });
  };
  if (i) {
    i.fn.imagesLoaded = function (e, t) {
      var n = new c(this, e, t);
      return n.jqDeferred.promise(i(this));
    };
  }
  h.prototype = new n();
  h.prototype.check = function () {
    var e = p[this.img.src] || new d(this.img.src);
    if (e.isConfirmed) {
      this.confirm(e.isLoaded, "cached was confirmed");
      return;
    }
    if (this.img.complete && this.img.naturalWidth !== undefined) {
      this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
      return;
    }
    var t = this;
    e.on("confirm", function (e, n) {
      t.confirm(e.isLoaded, n);
      return true;
    });
    e.check();
  };
  h.prototype.confirm = function (e, t) {
    this.isLoaded = e;
    this.emit("confirm", this, t);
  };
  var p = {};
  d.prototype = new n();
  d.prototype.check = function () {
    if (this.isChecked) {
      return;
    }
    var e = new Image();
    r.bind(e, "load", this);
    r.bind(e, "error", this);
    e.src = this.src;
    this.isChecked = true;
  };
  d.prototype.handleEvent = function (e) {
    var t = "on" + e.type;
    if (this[t]) {
      this[t](e);
    }
  };
  d.prototype.onload = function (e) {
    this.confirm(true, "onload");
    this.unbindProxyEvents(e);
  };
  d.prototype.onerror = function (e) {
    this.confirm(false, "onerror");
    this.unbindProxyEvents(e);
  };
  d.prototype.confirm = function (e, t) {
    this.isConfirmed = true;
    this.isLoaded = e;
    this.emit("confirm", this, t);
  };
  d.prototype.unbindProxyEvents = function (e) {
    r.unbind(e.target, "load", this);
    r.unbind(e.target, "error", this);
  };
  return c;
});

/**!
 * jQuery OwlCarousel v1.3.2
 * Copyright (c) 2013 Bartosz Wojciechowski
 * https://www.owlgraphic.com/owlcarousel/
 * Licensed under MIT
 **/
if (typeof Object.create !== "function") {
  Object.create = function (e) {
    function t() {}
    t.prototype = e;
    return new t();
  };
}
(function (e, t, n) {
  "use strict";
  var r = {
    init: function (t, n) {
      var r = this;
      r.$elem = e(n);
      r.options = e.extend({}, e.fn.owlCarousel.options, r.$elem.data(), t);
      r.userOptions = t;
      r.loadContent();
    },
    loadContent: function () {
      function t(e) {
        var t,
          r = "";
        if (typeof n.options.jsonSuccess === "function") {
          n.options.jsonSuccess.apply(this, [e]);
        } else {
          for (t in e.owl) {
            if (e.owl.hasOwnProperty(t)) {
              r += e.owl[t].item;
            }
          }
          n.$elem.html(r);
        }
        n.logIn();
      }
      var n = this,
        r;
      if (typeof n.options.beforeInit === "function") {
        n.options.beforeInit.apply(this, [n.$elem]);
      }
      if (typeof n.options.jsonPath === "string") {
        r = n.options.jsonPath;
        e.getJSON(r, t);
      } else {
        n.logIn();
      }
    },
    logIn: function () {
      var e = this;
      e.$elem
        .data("owl-originalStyles", e.$elem.attr("style"))
        .data("owl-originalClasses", e.$elem.attr("class"));
      e.$elem.css({ opacity: 0 });
      e.orignalItems = e.options.items;
      e.checkBrowser();
      e.wrapperWidth = 0;
      e.checkVisible = null;
      e.setVars();
    },
    setVars: function () {
      var e = this;
      if (e.$elem.children().length === 0) {
        return false;
      }
      e.baseClass();
      e.eventTypes();
      e.$userItems = e.$elem.children();
      e.itemsAmount = e.$userItems.length;
      e.wrapItems();
      e.$owlItems = e.$elem.find(".owl-item");
      e.$owlWrapper = e.$elem.find(".owl-wrapper");
      e.playDirection = "next";
      e.prevItem = 0;
      e.prevArr = [0];
      e.currentItem = 0;
      e.customEvents();
      e.onStartup();
    },
    onStartup: function () {
      var e = this;
      e.updateItems();
      e.calculateAll();
      e.buildControls();
      e.updateControls();
      e.response();
      e.moveEvents();
      e.stopOnHover();
      e.owlStatus();
      if (e.options.transitionStyle !== false) {
        e.transitionTypes(e.options.transitionStyle);
      }
      if (e.options.autoPlay === true) {
        e.options.autoPlay = 5e3;
      }
      e.play();
      e.$elem.find(".owl-wrapper").css("display", "block");
      if (!e.$elem.is(":visible")) {
        e.watchVisibility();
      } else {
        e.$elem.css("opacity", 1);
      }
      e.onstartup = false;
      e.eachMoveUpdate();
      if (typeof e.options.afterInit === "function") {
        e.options.afterInit.apply(this, [e.$elem]);
      }
    },
    eachMoveUpdate: function () {
      var e = this;
      if (e.options.lazyLoad === true) {
        e.lazyLoad();
      }
      if (e.options.autoHeight === true) {
        e.autoHeight();
      }
      e.onVisibleItems();
      if (typeof e.options.afterAction === "function") {
        e.options.afterAction.apply(this, [e.$elem]);
      }
    },
    updateVars: function () {
      var e = this;
      if (typeof e.options.beforeUpdate === "function") {
        e.options.beforeUpdate.apply(this, [e.$elem]);
      }
      e.watchVisibility();
      e.updateItems();
      e.calculateAll();
      e.updatePosition();
      e.updateControls();
      e.eachMoveUpdate();
      if (typeof e.options.afterUpdate === "function") {
        e.options.afterUpdate.apply(this, [e.$elem]);
      }
    },
    reload: function () {
      var e = this;
      t.setTimeout(function () {
        e.updateVars();
      }, 0);
    },
    watchVisibility: function () {
      var e = this;
      if (e.$elem.is(":visible") === false) {
        e.$elem.css({ opacity: 0 });
        t.clearInterval(e.autoPlayInterval);
        t.clearInterval(e.checkVisible);
      } else {
        return false;
      }
      e.checkVisible = t.setInterval(function () {
        if (e.$elem.is(":visible")) {
          e.reload();
          e.$elem.animate({ opacity: 1 }, 200);
          t.clearInterval(e.checkVisible);
        }
      }, 500);
    },
    wrapItems: function () {
      var e = this;
      e.$userItems
        .wrapAll('<div class="owl-wrapper">')
        .wrap('<div class="owl-item"></div>');
      e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
      e.wrapperOuter = e.$elem.find(".owl-wrapper-outer");
      e.$elem.css("display", "block");
    },
    baseClass: function () {
      var e = this,
        t = e.$elem.hasClass(e.options.baseClass),
        n = e.$elem.hasClass(e.options.theme);
      if (!t) {
        e.$elem.addClass(e.options.baseClass);
      }
      if (!n) {
        e.$elem.addClass(e.options.theme);
      }
    },
    updateItems: function () {
      var t = this,
        n,
        r;
      if (t.options.responsive === false) {
        return false;
      }
      if (t.options.singleItem === true) {
        t.options.items = t.orignalItems = 1;
        t.options.itemsCustom = false;
        t.options.itemsDesktop = false;
        t.options.itemsDesktopSmall = false;
        t.options.itemsTablet = false;
        t.options.itemsTabletSmall = false;
        t.options.itemsMobile = false;
        return false;
      }
      n = e(t.options.responsiveBaseWidth).width();
      if (n > (t.options.itemsDesktop[0] || t.orignalItems)) {
        t.options.items = t.orignalItems;
      }
      if (t.options.itemsCustom !== false) {
        t.options.itemsCustom.sort(function (e, t) {
          return e[0] - t[0];
        });
        for (r = 0; r < t.options.itemsCustom.length; r += 1) {
          if (t.options.itemsCustom[r][0] <= n) {
            t.options.items = t.options.itemsCustom[r][1];
          }
        }
      } else {
        if (
          n <= t.options.itemsDesktop[0] &&
          t.options.itemsDesktop !== false
        ) {
          t.options.items = t.options.itemsDesktop[1];
        }
        if (
          n <= t.options.itemsDesktopSmall[0] &&
          t.options.itemsDesktopSmall !== false
        ) {
          t.options.items = t.options.itemsDesktopSmall[1];
        }
        if (n <= t.options.itemsTablet[0] && t.options.itemsTablet !== false) {
          t.options.items = t.options.itemsTablet[1];
        }
        if (
          n <= t.options.itemsTabletSmall[0] &&
          t.options.itemsTabletSmall !== false
        ) {
          t.options.items = t.options.itemsTabletSmall[1];
        }
        if (n <= t.options.itemsMobile[0] && t.options.itemsMobile !== false) {
          t.options.items = t.options.itemsMobile[1];
        }
      }
      if (t.options.items > t.itemsAmount && t.options.itemsScaleUp === true) {
        t.options.items = t.itemsAmount;
      }
    },
    response: function () {
      var n = this;
      if (n.options.responsive !== true) {
        return false;
      }
      n.resizer = function () {
        if (n.options.autoPlay !== false) {
          t.clearInterval(n.autoPlayInterval);
        }
        n.updateVars();
      };
      e(t).on("debouncedresize", n.resizer);
    },
    updatePosition: function () {
      var e = this;
      e.jumpTo(e.currentItem);
      if (e.options.autoPlay !== false) {
        e.checkAp();
      }
    },
    appendItemsSizes: function () {
      var t = this,
        n = 0,
        r = t.itemsAmount - t.options.items;
      t.$owlItems.each(function (i) {
        var s = e(this);
        s.css({ width: t.itemWidth }).data("owl-item", Number(i));
        if (i % t.options.items === 0 || i === r) {
          if (!(i > r)) {
            n += 1;
          }
        }
        s.data("owl-roundPages", n);
      });
    },
    appendWrapperSizes: function () {
      var e = this,
        t = e.$owlItems.length * e.itemWidth;
      e.$owlWrapper.css({ width: t * 2, left: 0 });
      e.appendItemsSizes();
    },
    calculateAll: function () {
      var e = this;
      e.calculateWidth();
      e.appendWrapperSizes();
      e.loops();
      e.max();
    },
    calculateWidth: function () {
      var e = this;
      e.itemWidth = Math.round(e.$elem.width() / e.options.items);
    },
    max: function () {
      var e = this,
        t = (e.itemsAmount * e.itemWidth - e.options.items * e.itemWidth) * -1;
      if (e.options.items > e.itemsAmount) {
        e.maximumItem = 0;
        t = 0;
        e.maximumPixels = 0;
      } else {
        e.maximumItem = e.itemsAmount - e.options.items;
        e.maximumPixels = t;
      }
      return t;
    },
    min: function () {
      return 0;
    },
    loops: function () {
      var t = this,
        n = 0,
        r = 0,
        i,
        s,
        o;
      t.positionsInArray = [0];
      t.pagesInArray = [];
      for (i = 0; i < t.itemsAmount; i += 1) {
        r += t.itemWidth;
        t.positionsInArray.push(-r);
        if (t.options.scrollPerPage === true) {
          s = e(t.$owlItems[i]);
          o = s.data("owl-roundPages");
          if (o !== n) {
            t.pagesInArray[n] = t.positionsInArray[i];
            n = o;
          }
        }
      }
    },
    buildControls: function () {
      var t = this;
      if (t.options.navigation === true || t.options.pagination === true) {
        t.owlControls = e('<div class="owl-controls"/>')
          .toggleClass("clickable", !t.browser.isTouch)
          .appendTo(t.$elem);
      }
      if (t.options.pagination === true) {
        t.buildPagination();
      }
      if (t.options.navigation === true) {
        t.buildButtons();
      }
    },
    buildButtons: function () {
      var t = this,
        n = e('<div class="owl-buttons"/>');
      t.owlControls.append(n);
      t.buttonPrev = e("<div/>", {
        class: "owl-prev",
        html: t.options.navigationText[0] || "",
      });
      t.buttonNext = e("<div/>", {
        class: "owl-next",
        html: t.options.navigationText[1] || "",
      });
      n.append(t.buttonPrev).append(t.buttonNext);
      n.on(
        "touchstart.owlControls mousedown.owlControls",
        'div[class^="owl"]',
        function (e) {
          e.preventDefault();
        }
      );
      n.on(
        "touchend.owlControls mouseup.owlControls",
        'div[class^="owl"]',
        function (n) {
          n.preventDefault();
          if (e(this).hasClass("owl-next")) {
            t.next();
          } else {
            t.prev();
          }
        }
      );
    },
    buildPagination: function () {
      var t = this;
      t.paginationWrapper = e('<div class="owl-pagination"/>');
      t.owlControls.append(t.paginationWrapper);
      t.paginationWrapper.on(
        "touchend.owlControls mouseup.owlControls",
        ".owl-page",
        function (n) {
          n.preventDefault();
          if (Number(e(this).data("owl-page")) !== t.currentItem) {
            t.goTo(Number(e(this).data("owl-page")), true);
          }
        }
      );
    },
    updatePagination: function () {
      var t = this,
        n,
        r,
        i,
        s,
        o,
        u;
      if (t.options.pagination === false) {
        return false;
      }
      t.paginationWrapper.html("");
      n = 0;
      r = t.itemsAmount - (t.itemsAmount % t.options.items);
      for (s = 0; s < t.itemsAmount; s += 1) {
        if (s % t.options.items === 0) {
          n += 1;
          if (r === s) {
            i = t.itemsAmount - t.options.items;
          }
          o = e("<div/>", { class: "owl-page" });
          u = e("<span></span>", {
            text: t.options.paginationNumbers === true ? n : "",
            class: t.options.paginationNumbers === true ? "owl-numbers" : "",
          });
          o.append(u);
          o.data("owl-page", r === s ? i : s);
          o.data("owl-roundPages", n);
          t.paginationWrapper.append(o);
        }
      }
      t.checkPagination();
    },
    checkPagination: function () {
      var t = this;
      if (t.options.pagination === false) {
        return false;
      }
      t.paginationWrapper.find(".owl-page").each(function () {
        if (
          e(this).data("owl-roundPages") ===
          e(t.$owlItems[t.currentItem]).data("owl-roundPages")
        ) {
          t.paginationWrapper.find(".owl-page").removeClass("active");
          e(this).addClass("active");
        }
      });
    },
    checkNavigation: function () {
      var e = this;
      if (e.options.navigation === false) {
        return false;
      }
      if (e.options.rewindNav === false) {
        if (e.currentItem === 0 && e.maximumItem === 0) {
          e.buttonPrev.addClass("disabled");
          e.buttonNext.addClass("disabled");
        } else if (e.currentItem === 0 && e.maximumItem !== 0) {
          e.buttonPrev.addClass("disabled");
          e.buttonNext.removeClass("disabled");
        } else if (e.currentItem === e.maximumItem) {
          e.buttonPrev.removeClass("disabled");
          e.buttonNext.addClass("disabled");
        } else if (e.currentItem !== 0 && e.currentItem !== e.maximumItem) {
          e.buttonPrev.removeClass("disabled");
          e.buttonNext.removeClass("disabled");
        }
      }
    },
    updateControls: function () {
      var e = this;
      e.updatePagination();
      e.checkNavigation();
      if (e.owlControls) {
        if (e.options.items >= e.itemsAmount) {
          e.owlControls.hide();
        } else {
          e.owlControls.show();
        }
      }
    },
    destroyControls: function () {
      var e = this;
      if (e.owlControls) {
        e.owlControls.remove();
      }
    },
    next: function (e) {
      var t = this;
      if (t.isTransition) {
        return false;
      }
      t.currentItem += t.options.scrollPerPage === true ? t.options.items : 1;
      if (
        t.currentItem >
        t.maximumItem +
          (t.options.scrollPerPage === true ? t.options.items - 1 : 0)
      ) {
        if (t.options.rewindNav === true) {
          t.currentItem = 0;
          e = "rewind";
        } else {
          t.currentItem = t.maximumItem;
          return false;
        }
      }
      t.goTo(t.currentItem, e);
    },
    prev: function (e) {
      var t = this;
      if (t.isTransition) {
        return false;
      }
      if (
        t.options.scrollPerPage === true &&
        t.currentItem > 0 &&
        t.currentItem < t.options.items
      ) {
        t.currentItem = 0;
      } else {
        t.currentItem -= t.options.scrollPerPage === true ? t.options.items : 1;
      }
      if (t.currentItem < 0) {
        if (t.options.rewindNav === true) {
          t.currentItem = t.maximumItem;
          e = "rewind";
        } else {
          t.currentItem = 0;
          return false;
        }
      }
      t.goTo(t.currentItem, e);
    },
    goTo: function (e, n, r) {
      var i = this,
        s;
      if (i.isTransition) {
        return false;
      }
      if (typeof i.options.beforeMove === "function") {
        i.options.beforeMove.apply(this, [i.$elem]);
      }
      if (e >= i.maximumItem) {
        e = i.maximumItem;
      } else if (e <= 0) {
        e = 0;
      }
      i.currentItem = i.owl.currentItem = e;
      if (
        i.options.transitionStyle !== false &&
        r !== "drag" &&
        i.options.items === 1 &&
        i.browser.support3d === true
      ) {
        i.swapSpeed(0);
        if (i.browser.support3d === true) {
          i.transition3d(i.positionsInArray[e]);
        } else {
          i.css2slide(i.positionsInArray[e], 1);
        }
        i.afterGo();
        i.singleItemTransition();
        return false;
      }
      s = i.positionsInArray[e];
      if (i.browser.support3d === true) {
        i.isCss3Finish = false;
        if (n === true) {
          i.swapSpeed("paginationSpeed");
          t.setTimeout(function () {
            i.isCss3Finish = true;
          }, i.options.paginationSpeed);
        } else if (n === "rewind") {
          i.swapSpeed(i.options.rewindSpeed);
          t.setTimeout(function () {
            i.isCss3Finish = true;
          }, i.options.rewindSpeed);
        } else {
          i.swapSpeed("slideSpeed");
          t.setTimeout(function () {
            i.isCss3Finish = true;
          }, i.options.slideSpeed);
        }
        i.transition3d(s);
      } else {
        if (n === true) {
          i.css2slide(s, i.options.paginationSpeed);
        } else if (n === "rewind") {
          i.css2slide(s, i.options.rewindSpeed);
        } else {
          i.css2slide(s, i.options.slideSpeed);
        }
      }
      i.afterGo();
    },
    jumpTo: function (e) {
      var t = this;
      if (typeof t.options.beforeMove === "function") {
        t.options.beforeMove.apply(this, [t.$elem]);
      }
      if (e >= t.maximumItem || e === -1) {
        e = t.maximumItem;
      } else if (e <= 0) {
        e = 0;
      }
      t.swapSpeed(0);
      if (t.browser.support3d === true) {
        t.transition3d(t.positionsInArray[e]);
      } else {
        t.css2slide(t.positionsInArray[e], 1);
      }
      t.currentItem = t.owl.currentItem = e;
      t.afterGo();
    },
    afterGo: function () {
      var e = this;
      e.prevArr.push(e.currentItem);
      e.prevItem = e.owl.prevItem = e.prevArr[e.prevArr.length - 2];
      e.prevArr.shift(0);
      if (e.prevItem !== e.currentItem) {
        e.checkPagination();
        e.checkNavigation();
        e.eachMoveUpdate();
        if (e.options.autoPlay !== false) {
          e.checkAp();
        }
      }
      if (
        typeof e.options.afterMove === "function" &&
        e.prevItem !== e.currentItem
      ) {
        e.options.afterMove.apply(this, [e.$elem]);
      }
    },
    stop: function () {
      var e = this;
      e.apStatus = "stop";
      t.clearInterval(e.autoPlayInterval);
    },
    checkAp: function () {
      var e = this;
      if (e.apStatus !== "stop") {
        e.play();
      }
    },
    play: function () {
      var e = this;
      e.apStatus = "play";
      if (e.options.autoPlay === false) {
        return false;
      }
      t.clearInterval(e.autoPlayInterval);
      e.autoPlayInterval = t.setInterval(function () {
        e.next(true);
      }, e.options.autoPlay);
    },
    swapSpeed: function (e) {
      var t = this;
      if (e === "slideSpeed") {
        t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed));
      } else if (e === "paginationSpeed") {
        t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed));
      } else if (typeof e !== "string") {
        t.$owlWrapper.css(t.addCssSpeed(e));
      }
    },
    addCssSpeed: function (e) {
      return {
        "-webkit-transition": "all " + e + "ms ease",
        "-moz-transition": "all " + e + "ms ease",
        "-o-transition": "all " + e + "ms ease",
        transition: "all " + e + "ms ease",
      };
    },
    removeTransition: function () {
      return {
        "-webkit-transition": "",
        "-moz-transition": "",
        "-o-transition": "",
        transition: "",
      };
    },
    doTranslate: function (e) {
      return {
        "-webkit-transform": "translate3d(" + e + "px, 0px, 0px)",
        "-moz-transform": "translate3d(" + e + "px, 0px, 0px)",
        "-o-transform": "translate3d(" + e + "px, 0px, 0px)",
        "-ms-transform": "translate3d(" + e + "px, 0px, 0px)",
        transform: "translate3d(" + e + "px, 0px,0px)",
      };
    },
    transition3d: function (e) {
      var t = this;
      t.$owlWrapper.css(t.doTranslate(e));
    },
    css2move: function (e) {
      var t = this;
      t.$owlWrapper.css({ left: e });
    },
    css2slide: function (e, t) {
      var n = this;
      n.isCssFinish = false;
      n.$owlWrapper.stop(true, true).animate(
        { left: e },
        {
          duration: t || n.options.slideSpeed,
          complete: function () {
            n.isCssFinish = true;
          },
        }
      );
    },
    checkBrowser: function () {
      var e = this,
        i = "translate3d(0px, 0px, 0px)",
        s = n.createElement("div"),
        o,
        u,
        a,
        f;
      s.style.cssText =
        "  -moz-transform:" +
        i +
        "; -ms-transform:" +
        i +
        "; -o-transform:" +
        i +
        "; -webkit-transform:" +
        i +
        "; transform:" +
        i;
      o = /translate3d\(0px, 0px, 0px\)/g;
      u = s.style.cssText.match(o);
      a = u !== null && u.length === 1;
      f = "ontouchstart" in t || t.navigator.msMaxTouchPoints;
      e.browser = {
        support3d: r.isPerspective() !== false ? true : false,
        isTouch: f,
      };
    },
    isStyleSupported: function (e) {
      var t,
        n,
        r = document.createElement("div"),
        i = e;
      for (t in i) {
        n = i[t];
        if (typeof r.style[n] !== "undefined") {
          r = null;
          return [n, t];
        }
      }
      return [false];
    },
    isPerspective: function () {
      return r.isStyleSupported([
        "perspective",
        "webkitPerspective",
        "MozPerspective",
        "OPerspective",
        "MsPerspective",
      ])[0];
    },
    moveEvents: function () {
      var e = this;
      if (e.options.mouseDrag !== false || e.options.touchDrag !== false) {
        e.gestures();
        e.disabledEvents();
      }
    },
    eventTypes: function () {
      var e = this,
        t = ["s", "e", "x"];
      e.ev_types = {};
      if (e.options.mouseDrag === true && e.options.touchDrag === true) {
        t = [
          "touchstart.owl mousedown.owl",
          "touchmove.owl mousemove.owl",
          "touchend.owl touchcancel.owl mouseup.owl",
        ];
      } else if (
        e.options.mouseDrag === false &&
        e.options.touchDrag === true
      ) {
        t = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"];
      } else if (
        e.options.mouseDrag === true &&
        e.options.touchDrag === false
      ) {
        t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"];
      }
      e.ev_types.start = t[0];
      e.ev_types.move = t[1];
      e.ev_types.end = t[2];
    },
    disabledEvents: function () {
      var t = this;
      t.$elem.on("dragstart.owl", function (e) {
        e.preventDefault();
      });
      t.$elem.on("mousedown.disableTextSelect", function (t) {
        return e(t.target).is("input, textarea, select, option");
      });
    },
    gestures: function () {
      function r(e) {
        if (e.touches !== undefined) {
          return { x: e.touches[0].pageX, y: e.touches[0].pageY };
        }
        if (e.touches === undefined) {
          if (e.pageX !== undefined) {
            return { x: e.pageX, y: e.pageY };
          }
          if (e.pageX === undefined) {
            return { x: e.clientX, y: e.clientY };
          }
        }
      }
      function i(t) {
        if (t === "on") {
          e(n).on(a.ev_types.move, o);
          e(n).on(a.ev_types.end, u);
        } else if (t === "off") {
          e(n).off(a.ev_types.move);
          e(n).off(a.ev_types.end);
        }
      }
      function s(n) {
        var s = n.originalEvent || n || t.event,
          o;
        if (s.which === 3) {
          return false;
        }
        if (a.itemsAmount <= a.options.items) {
          return;
        }
        if (a.isCssFinish === false && !a.options.dragBeforeAnimFinish) {
          return false;
        }
        if (a.isCss3Finish === false && !a.options.dragBeforeAnimFinish) {
          return false;
        }
        if (a.options.autoPlay !== false) {
          t.clearInterval(a.autoPlayInterval);
        }
        if (a.browser.isTouch !== true && !a.$owlWrapper.hasClass("grabbing")) {
          a.$owlWrapper.addClass("grabbing");
        }
        a.newPosX = 0;
        a.newRelativeX = 0;
        e(this).css(a.removeTransition());
        o = e(this).position();
        f.relativePos = o.left;
        f.offsetX = r(s).x - o.left;
        f.offsetY = r(s).y - o.top;
        i("on");
        f.sliding = false;
        f.targetElement = s.target || s.srcElement;
      }
      function o(i) {
        var s = i.originalEvent || i || t.event,
          o,
          u;
        a.newPosX = r(s).x - f.offsetX;
        a.newPosY = r(s).y - f.offsetY;
        a.newRelativeX = a.newPosX - f.relativePos;
        if (
          typeof a.options.startDragging === "function" &&
          f.dragging !== true &&
          a.newRelativeX !== 0
        ) {
          f.dragging = true;
          a.options.startDragging.apply(a, [a.$elem]);
        }
        if (
          (a.newRelativeX > 8 || a.newRelativeX < -8) &&
          a.browser.isTouch === true
        ) {
          if (s.preventDefault !== undefined) {
            s.preventDefault();
          } else {
            s.returnValue = false;
          }
          f.sliding = true;
        }
        if ((a.newPosY > 10 || a.newPosY < -10) && f.sliding === false) {
          e(n).off("touchmove.owl");
        }
        o = function () {
          return a.newRelativeX / 5;
        };
        u = function () {
          return a.maximumPixels + a.newRelativeX / 5;
        };
        a.newPosX = Math.max(Math.min(a.newPosX, o()), u());
        if (a.browser.support3d === true) {
          a.transition3d(a.newPosX);
        } else {
          a.css2move(a.newPosX);
        }
      }
      function u(n) {
        var r = n.originalEvent || n || t.event,
          s,
          o,
          u;
        if (!r.target) {
          r.target = r.srcElement;
        }
        f.dragging = false;
        if (a.browser.isTouch !== true) {
          a.$owlWrapper.removeClass("grabbing");
        }
        if (a.newRelativeX < 0) {
          a.dragDirection = a.owl.dragDirection = "left";
        } else {
          a.dragDirection = a.owl.dragDirection = "right";
        }
        if (a.newRelativeX !== 0) {
          s = a.getNewPosition();
          a.goTo(s, false, "drag");
          if (f.targetElement === r.target && a.browser.isTouch !== true) {
            e(r.target).on("click.disable", function (t) {
              t.stopImmediatePropagation();
              t.stopPropagation();
              t.preventDefault();
              e(t.target).off("click.disable");
            });
            o = e._data(r.target, "events").click;
            u = o.pop();
            o.splice(0, 0, u);
          }
        }
        i("off");
      }
      var a = this,
        f = {
          offsetX: 0,
          offsetY: 0,
          baseElWidth: 0,
          relativePos: 0,
          position: null,
          minSwipe: null,
          maxSwipe: null,
          sliding: null,
          dargging: null,
          targetElement: null,
        };
      a.isCssFinish = true;
      a.$elem.on(a.ev_types.start, ".owl-wrapper", s);
    },
    getNewPosition: function () {
      var e = this,
        t = e.closestItem();
      if (t > e.maximumItem) {
        e.currentItem = e.maximumItem;
        t = e.maximumItem;
      } else if (e.newPosX >= 0) {
        t = 0;
        e.currentItem = 0;
      }
      return t;
    },
    closestItem: function () {
      var t = this,
        n =
          t.options.scrollPerPage === true
            ? t.pagesInArray
            : t.positionsInArray,
        r = t.newPosX,
        i = null;
      e.each(n, function (s, o) {
        if (
          r - t.itemWidth / 20 > n[s + 1] &&
          r - t.itemWidth / 20 < o &&
          t.moveDirection() === "left"
        ) {
          i = o;
          if (t.options.scrollPerPage === true) {
            t.currentItem = e.inArray(i, t.positionsInArray);
          } else {
            t.currentItem = s;
          }
        } else if (
          r + t.itemWidth / 20 < o &&
          r + t.itemWidth / 20 > (n[s + 1] || n[s] - t.itemWidth) &&
          t.moveDirection() === "right"
        ) {
          if (t.options.scrollPerPage === true) {
            i = n[s + 1] || n[n.length - 1];
            t.currentItem = e.inArray(i, t.positionsInArray);
          } else {
            i = n[s + 1];
            t.currentItem = s + 1;
          }
        }
      });
      return t.currentItem;
    },
    moveDirection: function () {
      var e = this,
        t;
      if (e.newRelativeX < 0) {
        t = "right";
        e.playDirection = "next";
      } else {
        t = "left";
        e.playDirection = "prev";
      }
      return t;
    },
    customEvents: function () {
      var e = this;
      e.$elem.on("owl.next", function () {
        e.next();
      });
      e.$elem.on("owl.prev", function () {
        e.prev();
      });
      e.$elem.on("owl.play", function (t, n) {
        e.options.autoPlay = n;
        e.play();
        e.hoverStatus = "play";
      });
      e.$elem.on("owl.stop", function () {
        e.stop();
        e.hoverStatus = "stop";
      });
      e.$elem.on("owl.goTo", function (t, n) {
        e.goTo(n);
      });
      e.$elem.on("owl.jumpTo", function (t, n) {
        e.jumpTo(n);
      });
    },
    stopOnHover: function () {
      var e = this;
      if (
        e.options.stopOnHover === true &&
        e.browser.isTouch !== true &&
        e.options.autoPlay !== false
      ) {
        e.$elem.on("mouseover", function () {
          e.stop();
        });
        e.$elem.on("mouseout", function () {
          if (e.hoverStatus !== "stop") {
            e.play();
          }
        });
      }
    },
    lazyLoad: function () {
      var t = this,
        n,
        r,
        i,
        s,
        o;
      if (t.options.lazyLoad === false) {
        return false;
      }
      for (n = 0; n < t.itemsAmount; n += 1) {
        r = e(t.$owlItems[n]);
        if (r.data("owl-loaded") === "loaded") {
          continue;
        }
        i = r.data("owl-item");
        s = r.find(".lazyOwl");
        if (typeof s.data("src") !== "string") {
          r.data("owl-loaded", "loaded");
          continue;
        }
        if (r.data("owl-loaded") === undefined) {
          s.hide();
          r.addClass("loading").data("owl-loaded", "checked");
        }
        if (t.options.lazyFollow === true) {
          o = i >= t.currentItem;
        } else {
          o = true;
        }
        if (o && i < t.currentItem + t.options.items && s.length) {
          t.lazyPreload(r, s);
        }
      }
    },
    lazyPreload: function (e, n) {
      function r() {
        e.data("owl-loaded", "loaded").removeClass("loading");
        n.removeAttr("data-src");
        if (s.options.lazyEffect === "fade") {
          n.fadeIn(400);
        } else {
          n.show();
        }
        if (typeof s.options.afterLazyLoad === "function") {
          s.options.afterLazyLoad.apply(this, [s.$elem]);
        }
      }
      function i() {
        o += 1;
        if (s.completeImg(n.get(0)) || u === true) {
          r();
        } else if (o <= 100) {
          t.setTimeout(i, 100);
        } else {
          r();
        }
      }
      var s = this,
        o = 0,
        u;
      if (n.prop("tagName") === "DIV") {
        n.css("background-image", "url(" + n.data("src") + ")");
        u = true;
      } else {
        n[0].src = n.data("src");
      }
      i();
    },
    autoHeight: function () {
      function n() {
        var n = e(i.$owlItems[i.currentItem]).height(),
          r = i.currentItem,
          s = i.itemsAmount - i.maximumItem;
        for (var o = r; o < r + s; o += 1) {
          var u = e(i.$owlItems[o]).height();
          n = n < u ? u : n;
        }
        i.wrapperOuter.css("height", n + "px");
        if (!i.wrapperOuter.hasClass("autoHeight")) {
          t.setTimeout(function () {
            i.wrapperOuter.addClass("autoHeight");
          }, 0);
        }
      }
      function r() {
        o += 1;
        if (i.completeImg(s.get(0))) {
          n();
        } else if (o <= 100) {
          t.setTimeout(r, 100);
        } else {
          i.wrapperOuter.css("height", "");
        }
      }
      var i = this,
        s = e(i.$owlItems[i.currentItem]).find("img"),
        o;
      if (s.get(0) !== undefined) {
        o = 0;
        r();
      } else {
        n();
      }
    },
    completeImg: function (e) {
      var t;
      if (!e.complete) {
        return false;
      }
      t = typeof e.naturalWidth;
      if (t !== "undefined" && e.naturalWidth === 0) {
        return false;
      }
      return true;
    },
    onVisibleItems: function () {
      var t = this,
        n;
      if (t.options.addClassActive === true) {
        t.$owlItems.removeClass("active");
      }
      t.visibleItems = [];
      for (n = t.currentItem; n < t.currentItem + t.options.items; n += 1) {
        t.visibleItems.push(n);
        if (t.options.addClassActive === true) {
          e(t.$owlItems[n]).addClass("active");
        }
      }
      t.owl.visibleItems = t.visibleItems;
    },
    transitionTypes: function (e) {
      var t = this;
      t.outClass = "owl-" + e + "-out";
      t.inClass = "owl-" + e + "-in";
    },
    singleItemTransition: function () {
      function e(e) {
        return { position: "relative", left: e + "px" };
      }
      var t = this,
        n = t.outClass,
        r = t.inClass,
        i = t.$owlItems.eq(t.currentItem),
        s = t.$owlItems.eq(t.prevItem),
        o =
          Math.abs(t.positionsInArray[t.currentItem]) +
          t.positionsInArray[t.prevItem],
        u = Math.abs(t.positionsInArray[t.currentItem]) + t.itemWidth / 2,
        a = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
      t.isTransition = true;
      t.$owlWrapper.addClass("owl-origin").css({
        "-webkit-transform-origin": u + "px",
        "-moz-perspective-origin": u + "px",
        "perspective-origin": u + "px",
      });
      s.css(e(o, 10))
        .addClass(n)
        .on(a, function () {
          t.endPrev = true;
          s.off(a);
          t.clearTransStyle(s, n);
        });
      i.addClass(r).on(a, function () {
        t.endCurrent = true;
        i.off(a);
        t.clearTransStyle(i, r);
      });
    },
    clearTransStyle: function (e, t) {
      var n = this;
      e.css({ position: "", left: "" }).removeClass(t);
      if (n.endPrev && n.endCurrent) {
        n.$owlWrapper.removeClass("owl-origin");
        n.endPrev = false;
        n.endCurrent = false;
        n.isTransition = false;
      }
    },
    owlStatus: function () {
      var e = this;
      e.owl = {
        userOptions: e.userOptions,
        baseElement: e.$elem,
        userItems: e.$userItems,
        owlItems: e.$owlItems,
        currentItem: e.currentItem,
        prevItem: e.prevItem,
        visibleItems: e.visibleItems,
        isTouch: e.browser.isTouch,
        browser: e.browser,
        dragDirection: e.dragDirection,
      };
    },
    clearEvents: function () {
      var r = this;
      r.$elem.off(".owl owl mousedown.disableTextSelect");
      e(n).off(".owl owl");
      e(t).off("resize", r.resizer);
    },
    unWrap: function () {
      var e = this;
      if (e.$elem.children().length !== 0) {
        e.$owlWrapper.unwrap();
        e.$userItems.unwrap().unwrap();
        if (e.owlControls) {
          e.owlControls.remove();
        }
      }
      e.clearEvents();
      e.$elem
        .attr("style", e.$elem.data("owl-originalStyles") || "")
        .attr("class", e.$elem.data("owl-originalClasses"));
    },
    destroy: function () {
      var e = this;
      e.stop();
      t.clearInterval(e.checkVisible);
      e.unWrap();
      e.$elem.removeData();
    },
    reinit: function (t) {
      var n = this,
        r = e.extend({}, n.userOptions, t);
      n.unWrap();
      n.init(r, n.$elem);
    },
    addItem: function (e, t) {
      var n = this,
        r;
      if (!e) {
        return false;
      }
      if (n.$elem.children().length === 0) {
        n.$elem.append(e);
        n.setVars();
        return false;
      }
      n.unWrap();
      if (t === undefined || t === -1) {
        r = -1;
      } else {
        r = t;
      }
      if (r >= n.$userItems.length || r === -1) {
        n.$userItems.eq(-1).after(e);
      } else {
        n.$userItems.eq(r).before(e);
      }
      n.setVars();
    },
    removeItem: function (e) {
      var t = this,
        n;
      if (t.$elem.children().length === 0) {
        return false;
      }
      if (e === undefined || e === -1) {
        n = -1;
      } else {
        n = e;
      }
      t.unWrap();
      t.$userItems.eq(n).remove();
      t.setVars();
    },
  };
  e.fn.owlCarousel = function (t) {
    return this.each(function () {
      if (e(this).data("owl-init") === true) {
        return false;
      }
      e(this).data("owl-init", true);
      var n = Object.create(r);
      n.init(t, this);
      e.data(this, "owlCarousel", n);
    });
  };
  e.fn.owlCarousel.options = {
    items: 5,
    itemsCustom: false,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
    singleItem: false,
    itemsScaleUp: false,
    slideSpeed: 200,
    paginationSpeed: 800,
    rewindSpeed: 1e3,
    autoPlay: false,
    stopOnHover: false,
    navigation: false,
    navigationText: ["prev", "next"],
    rewindNav: true,
    scrollPerPage: false,
    pagination: true,
    paginationNumbers: false,
    responsive: true,
    responsiveRefreshRate: 200,
    responsiveBaseWidth: t,
    baseClass: "owl-carousel",
    theme: "owl-theme",
    lazyLoad: false,
    lazyFollow: true,
    lazyEffect: "fade",
    autoHeight: false,
    jsonPath: false,
    jsonSuccess: false,
    dragBeforeAnimFinish: true,
    mouseDrag: true,
    touchDrag: true,
    addClassActive: false,
    transitionStyle: false,
    beforeUpdate: false,
    afterUpdate: false,
    beforeInit: false,
    afterInit: false,
    beforeMove: false,
    afterMove: false,
    afterAction: false,
    startDragging: false,
    afterLazyLoad: false,
  };
})(jQuery, window, document);

/*!
 * Hover Slider Script
 */
(function (e) {
  "use strict";
  e.fn.cmsmastersHoverSlider = function (t) {
    var n = {
        sliderBlock: ".cmsmasters_hover_slider",
        sliderItems: ".cmsmasters_hover_slider_items",
        thumbWidth: "60",
        thumbHeight: "40",
        activeSlide: 1,
        pauseTime: 5e3,
        pauseOnHover: true,
      },
      r = this,
      s,
      o = {};
    o = {
      init: function () {
        o.options = e.extend({}, n, t);
        o.el = r;
        o.vars = {};
        if (o.options.pauseTime !== 0) {
          o.vars.countdown = Math.round(o.options.pauseTime / 50);
        } else {
          o.vars.countdown = -1;
        }
        o.setVars();
        o.startSlider();
      },
      setVars: function () {
        o.vars.sliderBlock = e(o.options.sliderBlock);
        o.vars.items_thumbWidth = o.options.thumbWidth;
        o.vars.items_thumbHeight = o.options.thumbHeight;
        o.vars.activeSlide = o.options.activeSlide - 1;
        o.vars.pauseTime = o.options.pauseTime;
        o.vars.thumbsHTML = "";
        o.vars.inPause = false;
        o.vars.list = o.el.find(o.options.sliderItems);
        o.vars.items = o.vars.list.find("> li");
        o.vars.items_img = o.vars.items.find("img");
        o.vars.items_img_count = o.vars.items.length;
        if (o.options.activeSlide > o.vars.items_img_count) {
          o.vars.activeSlide = 0;
        }
      },
      startSlider: function () {
        o.vars.sliderBlock.append(
          '<ul class="cmsmasters_hover_slider_thumbs"></ul>'
        );
        for (var i = 0; i < o.vars.items_img_count; i += 1) {
          o.vars.thumbsHTML +=
            "<li>" +
            '<a href="#" class="cmsmasters_hover_slider_thumb">' +
            '<img src="' +
            o.vars.items_img.eq(i).attr("src") +
            '" alt="" width="' +
            o.vars.items_thumbWidth +
            '" height="' +
            o.vars.items_thumbHeight +
            '" />' +
            "</a>" +
            "</li>";
        }
        o.vars.sliderBlock
          .find(".cmsmasters_hover_slider_thumbs")
          .append(o.vars.thumbsHTML);
        o.vars.items
          .eq(o.vars.activeSlide)
          .css({ visibility: "visible", opacity: 1 })
          .addClass("hovered_slide");
        o.vars.sliderBlock
          .find(".cmsmasters_hover_slider_thumbs > li")
          .eq(o.vars.activeSlide)
          .addClass("hovered_item");
        o.vars.activeSlide += 1;
        o.attachEvents();
      },
      nextSlide: function (e) {
        o.setTimer();
        o.vars.items
          .filter(".hovered_slide")
          .css({ visibility: "hidden", opacity: 0 })
          .removeClass("hovered_slide");
        o.vars.sliderBlock
          .find(".cmsmasters_hover_slider_thumbs > li")
          .filter(".hovered_item")
          .removeClass("hovered_item");
        o.vars.items
          .eq(e)
          .css({ visibility: "visible", opacity: 1 })
          .addClass("hovered_slide");
        o.vars.sliderBlock
          .find(".cmsmasters_hover_slider_thumbs > li")
          .eq(e)
          .addClass("hovered_item");
        o.vars.activeSlide = e + 1;
        if (o.vars.activeSlide === o.vars.items_img_count) {
          o.vars.activeSlide = 0;
        }
      },
      attachEvents: function () {
        s = setInterval(function () {
          o.timerController();
        }, 50);
        e(".cmsmasters_hover_slider_thumb").bind("mouseover", function () {
          var t = o.vars.items.filter(".hovered_slide").index(),
            n = e(this).parents("li").index();
          if (t !== n) {
            o.nextSlide(n);
          }
        });
        e(".cmsmasters_hover_slider_thumb").bind("click", function () {
          return false;
        });
        if (o.options.pauseOnHover) {
          o.vars.sliderBlock
            .bind("mouseover", function () {
              o.vars.inPause = true;
            })
            .bind("mouseout", function () {
              o.vars.inPause = false;
            });
        }
      },
      setTimer: function () {
        o.vars.inPause = false;
        if (o.options.pauseTime !== 0) {
          o.vars.countdown = Math.round(o.options.pauseTime / 50);
        } else {
          o.vars.countdown = -1;
        }
      },
      timerController: function () {
        if (o.vars.inPause || o.vars.countdown < 0) {
          return;
        }
        if (o.vars.countdown === 0) {
          o.nextSlide(o.vars.activeSlide);
        }
        o.vars.countdown -= 1;
      },
    };
    o.init();
  };
})(jQuery);

/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license
 * @author Robert Fleischmann <rendro87@gmail.com> (https://robert-fleischmann.de)
 * @version 2.1.5
 **/
!(function (a, b) {
  "use strict";
  "object" == typeof exports
    ? (module.exports = b(require("jquery")))
    : "function" == typeof define && define.amd
    ? define(["jquery"], b)
    : b(a.jQuery);
})(this, function (a) {
  "use strict";
  var b = function (a, b) {
      var c,
        d = document.createElement("canvas");
      a.appendChild(d),
        "undefined" != typeof G_vmlCanvasManager &&
          G_vmlCanvasManager.initElement(d);
      var e = d.getContext("2d");
      d.width = d.height = b.size;
      var f = 1;
      window.devicePixelRatio > 1 &&
        ((f = window.devicePixelRatio),
        (d.style.width = d.style.height = [b.size, "px"].join("")),
        (d.width = d.height = b.size * f),
        e.scale(f, f)),
        e.translate(b.size / 2, b.size / 2),
        e.rotate((-0.5 + b.rotate / 180) * Math.PI);
      var g = (b.size - b.lineWidth) / 2;
      b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2),
        (Date.now =
          Date.now ||
          function () {
            return +new Date();
          });
      var h = function (a, b, c) {
          c = Math.min(Math.max(-1, c || 0), 1);
          var d = 0 >= c ? !0 : !1;
          e.beginPath(),
            e.arc(0, 0, g, 0, 2 * Math.PI * c, d),
            (e.strokeStyle = a),
            (e.lineWidth = b),
            e.stroke();
        },
        i = function () {
          var a, c;
          (e.lineWidth = 1), (e.fillStyle = b.scaleColor), e.save();
          for (var d = 24; d > 0; --d)
            d % 6 === 0
              ? ((c = b.scaleLength), (a = 0))
              : ((c = 0.6 * b.scaleLength), (a = b.scaleLength - c)),
              e.fillRect(-b.size / 2 + a, 0, c, 1),
              e.rotate(Math.PI / 12);
          e.restore();
        },
        j = (function () {
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (a) {
              window.setTimeout(a, 1e3 / 60);
            }
          );
        })(),
        k = function () {
          b.scaleColor && i(), b.trackColor && h(b.trackColor, b.lineWidth, 1);
        };
      (this.getCanvas = function () {
        return d;
      }),
        (this.getCtx = function () {
          return e;
        }),
        (this.clear = function () {
          e.clearRect(b.size / -2, b.size / -2, b.size, b.size);
        }),
        (this.draw = function (a) {
          b.scaleColor || b.trackColor
            ? e.getImageData && e.putImageData
              ? c
                ? e.putImageData(c, 0, 0)
                : (k(), (c = e.getImageData(0, 0, b.size * f, b.size * f)))
              : (this.clear(), k())
            : this.clear(),
            (e.lineCap = b.lineCap);
          var d;
          (d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor),
            h(d, b.lineWidth, a / 100);
        }.bind(this)),
        (this.animate = function (a, c) {
          var d = Date.now();
          b.onStart(a, c);
          var e = function () {
            var f = Math.min(Date.now() - d, b.animate.duration),
              g = b.easing(this, f, a, c - a, b.animate.duration);
            this.draw(g),
              b.onStep(a, c, g),
              f >= b.animate.duration ? b.onStop(a, c) : j(e);
          }.bind(this);
          j(e);
        }.bind(this));
    },
    c = function (a, c) {
      var d = {
        barColor: "#ef1e25",
        trackColor: "#f9f9f9",
        scaleColor: "#dfe0e0",
        scaleLength: 5,
        lineCap: "round",
        lineWidth: 3,
        size: 110,
        rotate: 0,
        animate: { duration: 1e3, enabled: !0 },
        easing: function (a, b, c, d, e) {
          return (
            (b /= e / 2),
            1 > b ? (d / 2) * b * b + c : (-d / 2) * (--b * (b - 2) - 1) + c
          );
        },
        onStart: function () {},
        onStep: function () {},
        onStop: function () {},
      };
      if ("undefined" != typeof b) d.renderer = b;
      else {
        if ("undefined" == typeof SVGRenderer)
          throw new Error("Please load either the SVG- or the CanvasRenderer");
        d.renderer = SVGRenderer;
      }
      var e = {},
        f = 0,
        g = function () {
          (this.el = a), (this.options = e);
          for (var b in d)
            d.hasOwnProperty(b) &&
              ((e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b]),
              "function" == typeof e[b] && (e[b] = e[b].bind(this)));
          (e.easing =
            "string" == typeof e.easing &&
            "undefined" != typeof jQuery &&
            jQuery.isFunction(jQuery.easing[e.easing])
              ? jQuery.easing[e.easing]
              : d.easing),
            "number" == typeof e.animate &&
              (e.animate = { duration: e.animate, enabled: !0 }),
            "boolean" != typeof e.animate ||
              e.animate ||
              (e.animate = { duration: 1e3, enabled: e.animate }),
            (this.renderer = new e.renderer(a, e)),
            this.renderer.draw(f),
            a.dataset && a.dataset.percent
              ? this.update(parseFloat(a.dataset.percent))
              : a.getAttribute &&
                a.getAttribute("data-percent") &&
                this.update(parseFloat(a.getAttribute("data-percent")));
        }.bind(this);
      (this.update = function (a) {
        return (
          (a = parseFloat(a)),
          e.animate.enabled
            ? this.renderer.animate(f, a)
            : this.renderer.draw(a),
          (f = a),
          this
        );
      }.bind(this)),
        (this.disableAnimation = function () {
          return (e.animate.enabled = !1), this;
        }),
        (this.enableAnimation = function () {
          return (e.animate.enabled = !0), this;
        }),
        g();
    };
  a.fn.easyPieChart = function (b) {
    return this.each(function () {
      var d;
      a.data(this, "easyPieChart") ||
        ((d = a.extend({}, b, a(this).data())),
        a.data(this, "easyPieChart", new c(this, d)));
    });
  };
});
