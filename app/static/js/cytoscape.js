!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.cytoscape = t())
    : (e.cytoscape = t());
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var i = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (e, n, r) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 20))
    );
  })([
    function (e, t, n) {
      "use strict";
      var r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        i = n(3),
        a = i ? i.navigator : null,
        o = i ? i.document : null,
        s = r(""),
        l = r({}),
        u = r(function () {}),
        c = "undefined" == typeof HTMLElement ? "undefined" : r(HTMLElement),
        d = function (e) {
          return e && e.instanceString && h.fn(e.instanceString)
            ? e.instanceString()
            : null;
        },
        h = {
          defined: function (e) {
            return null != e;
          },
          string: function (e) {
            return null != e && (void 0 === e ? "undefined" : r(e)) == s;
          },
          fn: function (e) {
            return null != e && (void 0 === e ? "undefined" : r(e)) === u;
          },
          array: function (e) {
            return Array.isArray
              ? Array.isArray(e)
              : null != e && e instanceof Array;
          },
          plainObject: function (e) {
            return (
              null != e &&
              (void 0 === e ? "undefined" : r(e)) === l &&
              !h.array(e) &&
              e.constructor === Object
            );
          },
          object: function (e) {
            return null != e && (void 0 === e ? "undefined" : r(e)) === l;
          },
          number: function (e) {
            return (
              null != e &&
              (void 0 === e ? "undefined" : r(e)) === r(1) &&
              !isNaN(e)
            );
          },
          integer: function (e) {
            return h.number(e) && Math.floor(e) === e;
          },
          bool: function (e) {
            return null != e && (void 0 === e ? "undefined" : r(e)) === r(!0);
          },
          htmlElement: function (e) {
            return "undefined" === c
              ? void 0
              : null != e && e instanceof HTMLElement;
          },
          elementOrCollection: function (e) {
            return h.element(e) || h.collection(e);
          },
          element: function (e) {
            return "collection" === d(e) && e._private.single;
          },
          collection: function (e) {
            return "collection" === d(e) && !e._private.single;
          },
          core: function (e) {
            return "core" === d(e);
          },
          style: function (e) {
            return "style" === d(e);
          },
          stylesheet: function (e) {
            return "stylesheet" === d(e);
          },
          event: function (e) {
            return "event" === d(e);
          },
          thread: function (e) {
            return "thread" === d(e);
          },
          fabric: function (e) {
            return "fabric" === d(e);
          },
          emptyString: function (e) {
            return (
              void 0 === e || null === e || !("" !== e && !e.match(/^\s+$/))
            );
          },
          nonemptyString: function (e) {
            return !(!e || !h.string(e) || "" === e || e.match(/^\s+$/));
          },
          domElement: function (e) {
            return (
              "undefined" != typeof HTMLElement && e instanceof HTMLElement
            );
          },
          boundingBox: function (e) {
            return (
              h.plainObject(e) &&
              h.number(e.x1) &&
              h.number(e.x2) &&
              h.number(e.y1) &&
              h.number(e.y2)
            );
          },
          promise: function (e) {
            return h.object(e) && h.fn(e.then);
          },
          touch: function () {
            return (
              i &&
              ("ontouchstart" in i ||
                (i.DocumentTouch && o instanceof DocumentTouch))
            );
          },
          gecko: function () {
            return (
              i &&
              ("undefined" != typeof InstallTrigger ||
                "MozAppearance" in o.documentElement.style)
            );
          },
          webkit: function () {
            return (
              i &&
              ("undefined" != typeof webkitURL ||
                "WebkitAppearance" in o.documentElement.style)
            );
          },
          chromium: function () {
            return i && "undefined" != typeof chrome;
          },
          khtml: function () {
            return a && a.vendor.match(/kde/i);
          },
          khtmlEtc: function () {
            return h.khtml() || h.webkit() || h.chromium();
          },
          ms: function () {
            return a && a.userAgent.match(/msie|trident|edge/i);
          },
          windows: function () {
            return a && a.appVersion.match(/Win/i);
          },
          mac: function () {
            return a && a.appVersion.match(/Mac/i);
          },
          linux: function () {
            return a && a.appVersion.match(/Linux/i);
          },
          unix: function () {
            return a && a.appVersion.match(/X11/i);
          },
        };
      e.exports = h;
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(2),
        a = {
          MAX_INT: Number.MAX_SAFE_INTEGER || 9007199254740991,
          trueify: function () {
            return !0;
          },
          falsify: function () {
            return !1;
          },
          zeroify: function () {
            return 0;
          },
          noop: function () {},
          error: function (e) {
            console.error
              ? (console.error.apply(console, arguments),
                console.trace && console.trace())
              : (console.log.apply(console, arguments),
                console.trace && console.trace());
          },
          clone: function (e) {
            return this.extend({}, e);
          },
          copy: function (e) {
            return null == e
              ? e
              : r.array(e)
              ? e.slice()
              : r.plainObject(e)
              ? this.clone(e)
              : e;
          },
          copyArray: function (e) {
            return e.slice();
          },
          clonePosition: function (e) {
            return { x: e.x, y: e.y };
          },
          uuid: function (e, t) {
            for (
              t = e = "";
              e++ < 36;
              t +=
                (51 * e) & 52
                  ? (15 ^ e
                      ? 8 ^ (Math.random() * (20 ^ e ? 16 : 4))
                      : 4
                    ).toString(16)
                  : "-"
            );
            return t;
          },
        };
      (a.makeBoundingBox = i.makeBoundingBox.bind(i)),
        (a._staticEmptyObject = {}),
        (a.staticEmptyObject = function () {
          return a._staticEmptyObject;
        }),
        (a.extend =
          null != Object.assign
            ? Object.assign.bind(Object)
            : function (e) {
                for (var t = arguments, n = 1; n < t.length; n++) {
                  var r = t[n];
                  if (null != r)
                    for (var i = Object.keys(r), a = 0; a < i.length; a++) {
                      var o = i[a];
                      e[o] = r[o];
                    }
                }
                return e;
              }),
        (a.assign = a.extend),
        (a.default = function (e, t) {
          return void 0 === e ? t : e;
        }),
        (a.removeFromArray = function (e, t, n) {
          for (
            var r = e.length;
            r >= 0 && (e[r] !== t || (e.splice(r, 1), n));
            r--
          );
        }),
        (a.clearArray = function (e) {
          e.splice(0, e.length);
        }),
        (a.push = function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            e.push(r);
          }
        }),
        (a.getPrefixedProperty = function (e, t, n) {
          return n && (t = this.prependCamel(n, t)), e[t];
        }),
        (a.setPrefixedProperty = function (e, t, n, r) {
          n && (t = this.prependCamel(n, t)), (e[t] = r);
        }),
        [n(21), n(22), { memoize: n(13) }, n(23), n(24), n(25), n(27)].forEach(
          function (e) {
            a.extend(a, e);
          }
        ),
        (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      var r = {};
      (r.arePositionsSame = function (e, t) {
        return e.x === t.x && e.y === t.y;
      }),
        (r.copyPosition = function (e) {
          return { x: e.x, y: e.y };
        }),
        (r.modelToRenderedPosition = function (e, t, n) {
          return { x: e.x * t + n.x, y: e.y * t + n.y };
        }),
        (r.renderedToModelPosition = function (e, t, n) {
          return { x: (e.x - n.x) / t, y: (e.y - n.y) / t };
        }),
        (r.array2point = function (e) {
          return { x: e[0], y: e[1] };
        }),
        (r.deg2rad = function (e) {
          return (Math.PI * e) / 180;
        }),
        (r.getAngleFromDisp = function (e, t) {
          return Math.atan2(t, e) - Math.PI / 2;
        }),
        (r.log2 =
          Math.log2 ||
          function (e) {
            return Math.log(e) / Math.log(2);
          }),
        (r.signum = function (e) {
          return e > 0 ? 1 : e < 0 ? -1 : 0;
        }),
        (r.dist = function (e, t) {
          return Math.sqrt(r.sqdist(e, t));
        }),
        (r.sqdist = function (e, t) {
          var n = t.x - e.x,
            r = t.y - e.y;
          return n * n + r * r;
        }),
        (r.qbezierAt = function (e, t, n, r) {
          return (1 - r) * (1 - r) * e + 2 * (1 - r) * r * t + r * r * n;
        }),
        (r.qbezierPtAt = function (e, t, n, i) {
          return {
            x: r.qbezierAt(e.x, t.x, n.x, i),
            y: r.qbezierAt(e.y, t.y, n.y, i),
          };
        }),
        (r.lineAt = function (e, t, n, i) {
          var a = { x: t.x - e.x, y: t.y - e.y },
            o = r.dist(e, t),
            s = { x: a.x / o, y: a.y / o };
          return (
            (n = null == n ? 0 : n),
            (i = null != i ? i : n * o),
            { x: e.x + s.x * i, y: e.y + s.y * i }
          );
        }),
        (r.lineAtDist = function (e, t, n) {
          return r.lineAt(e, t, void 0, n);
        }),
        (r.triangleAngle = function (e, t, n) {
          var i = r.dist(t, n),
            a = r.dist(e, n),
            o = r.dist(e, t);
          return Math.acos((i * i + a * a - o * o) / (2 * i * a));
        }),
        (r.bound = function (e, t, n) {
          return Math.max(e, Math.min(n, t));
        }),
        (r.makeBoundingBox = function (e) {
          if (null == e)
            return { x1: 1 / 0, y1: 1 / 0, x2: -1 / 0, y2: -1 / 0, w: 0, h: 0 };
          if (null != e.x1 && null != e.y1) {
            if (null != e.x2 && null != e.y2 && e.x2 >= e.x1 && e.y2 >= e.y1)
              return {
                x1: e.x1,
                y1: e.y1,
                x2: e.x2,
                y2: e.y2,
                w: e.x2 - e.x1,
                h: e.y2 - e.y1,
              };
            if (null != e.w && null != e.h && e.w >= 0 && e.h >= 0)
              return {
                x1: e.x1,
                y1: e.y1,
                x2: e.x1 + e.w,
                y2: e.y1 + e.h,
                w: e.w,
                h: e.h,
              };
          }
        }),
        (r.updateBoundingBox = function (e, t) {
          (e.x1 = Math.min(e.x1, t.x1)),
            (e.x2 = Math.max(e.x2, t.x2)),
            (e.w = e.x2 - e.x1),
            (e.y1 = Math.min(e.y1, t.y1)),
            (e.y2 = Math.max(e.y2, t.y2)),
            (e.h = e.y2 - e.y1);
        }),
        (r.expandBoundingBoxByPoint = function (e, t, n) {
          (e.x1 = Math.min(e.x1, t)),
            (e.x2 = Math.max(e.x2, t)),
            (e.w = e.x2 - e.x1),
            (e.y1 = Math.min(e.y1, n)),
            (e.y2 = Math.max(e.y2, n)),
            (e.h = e.y2 - e.y1);
        }),
        (r.expandBoundingBox = function (e, t) {
          return (
            (e.x1 -= t),
            (e.x2 += t),
            (e.y1 -= t),
            (e.y2 += t),
            (e.w = e.x2 - e.x1),
            (e.h = e.y2 - e.y1),
            e
          );
        }),
        (r.boundingBoxesIntersect = function (e, t) {
          return (
            !(e.x1 > t.x2) &&
            !(t.x1 > e.x2) &&
            !(e.x2 < t.x1) &&
            !(t.x2 < e.x1) &&
            !(e.y2 < t.y1) &&
            !(t.y2 < e.y1) &&
            !(e.y1 > t.y2) &&
            !(t.y1 > e.y2)
          );
        }),
        (r.inBoundingBox = function (e, t, n) {
          return e.x1 <= t && t <= e.x2 && e.y1 <= n && n <= e.y2;
        }),
        (r.pointInBoundingBox = function (e, t) {
          return this.inBoundingBox(e, t.x, t.y);
        }),
        (r.boundingBoxInBoundingBox = function (e, t) {
          return (
            r.inBoundingBox(e, t.x1, t.y1) && r.inBoundingBox(e, t.x2, t.y2)
          );
        }),
        (r.roundRectangleIntersectLine = function (e, t, n, r, i, a, o) {
          var s = this.getRoundRectangleRadius(i, a),
            l = i / 2,
            u = a / 2,
            c = void 0,
            d = n - l + s - o,
            h = r - u - o,
            p = n + l - s + o,
            f = h;
          if (
            ((c = this.finiteLinesIntersect(e, t, n, r, d, h, p, f, !1)),
            c.length > 0)
          )
            return c;
          var v = n + l + o,
            g = r - u + s - o,
            y = v,
            m = r + u - s + o;
          if (
            ((c = this.finiteLinesIntersect(e, t, n, r, v, g, y, m, !1)),
            c.length > 0)
          )
            return c;
          var b = n - l + s - o,
            x = r + u + o,
            w = n + l - s + o,
            E = x;
          if (
            ((c = this.finiteLinesIntersect(e, t, n, r, b, x, w, E, !1)),
            c.length > 0)
          )
            return c;
          var P = n - l - o,
            C = r - u + s - o,
            S = P,
            T = r + u - s + o;
          if (
            ((c = this.finiteLinesIntersect(e, t, n, r, P, C, S, T, !1)),
            c.length > 0)
          )
            return c;
          var D = void 0,
            k = n - l + s,
            _ = r - u + s;
          if (
            ((D = this.intersectLineCircle(e, t, n, r, k, _, s + o)),
            D.length > 0 && D[0] <= k && D[1] <= _)
          )
            return [D[0], D[1]];
          var M = n + l - s,
            I = r - u + s;
          if (
            ((D = this.intersectLineCircle(e, t, n, r, M, I, s + o)),
            D.length > 0 && D[0] >= M && D[1] <= I)
          )
            return [D[0], D[1]];
          var N = n + l - s,
            B = r + u - s;
          if (
            ((D = this.intersectLineCircle(e, t, n, r, N, B, s + o)),
            D.length > 0 && D[0] >= N && D[1] >= B)
          )
            return [D[0], D[1]];
          var z = n - l + s,
            L = r + u - s;
          return (
            (D = this.intersectLineCircle(e, t, n, r, z, L, s + o)),
            D.length > 0 && D[0] <= z && D[1] >= L ? [D[0], D[1]] : []
          );
        }),
        (r.inLineVicinity = function (e, t, n, r, i, a, o) {
          var s = o,
            l = Math.min(n, i),
            u = Math.max(n, i),
            c = Math.min(r, a),
            d = Math.max(r, a);
          return l - s <= e && e <= u + s && c - s <= t && t <= d + s;
        }),
        (r.inBezierVicinity = function (e, t, n, r, i, a, o, s, l) {
          var u = {
            x1: Math.min(n, o, i) - l,
            x2: Math.max(n, o, i) + l,
            y1: Math.min(r, s, a) - l,
            y2: Math.max(r, s, a) + l,
          };
          return !(e < u.x1 || e > u.x2 || t < u.y1 || t > u.y2);
        }),
        (r.solveQuadratic = function (e, t, n, r) {
          n -= r;
          var i = t * t - 4 * e * n;
          if (i < 0) return [];
          var a = Math.sqrt(i),
            o = 2 * e;
          return [(-t + a) / o, (-t - a) / o];
        }),
        (r.solveCubic = function (e, t, n, r, i) {
          (t /= e), (n /= e), (r /= e);
          var a = void 0,
            o = void 0,
            s = void 0,
            l = void 0,
            u = void 0,
            c = void 0,
            d = void 0,
            h = void 0;
          return (
            (o = (3 * n - t * t) / 9),
            (s = -27 * r + t * (9 * n - t * t * 2)),
            (s /= 54),
            (a = o * o * o + s * s),
            (i[1] = 0),
            (d = t / 3),
            a > 0
              ? ((u = s + Math.sqrt(a)),
                (u = u < 0 ? -Math.pow(-u, 1 / 3) : Math.pow(u, 1 / 3)),
                (c = s - Math.sqrt(a)),
                (c = c < 0 ? -Math.pow(-c, 1 / 3) : Math.pow(c, 1 / 3)),
                (i[0] = -d + u + c),
                (d += (u + c) / 2),
                (i[4] = i[2] = -d),
                (d = (Math.sqrt(3) * (-c + u)) / 2),
                (i[3] = d),
                void (i[5] = -d))
              : ((i[5] = i[3] = 0),
                0 === a
                  ? ((h = s < 0 ? -Math.pow(-s, 1 / 3) : Math.pow(s, 1 / 3)),
                    (i[0] = 2 * h - d),
                    void (i[4] = i[2] = -(h + d)))
                  : ((o = -o),
                    (l = o * o * o),
                    (l = Math.acos(s / Math.sqrt(l))),
                    (h = 2 * Math.sqrt(o)),
                    (i[0] = -d + h * Math.cos(l / 3)),
                    (i[2] = -d + h * Math.cos((l + 2 * Math.PI) / 3)),
                    void (i[4] = -d + h * Math.cos((l + 4 * Math.PI) / 3))))
          );
        }),
        (r.sqdistToQuadraticBezier = function (e, t, n, r, i, a, o, s) {
          var l =
              1 * n * n -
              4 * n * i +
              2 * n * o +
              4 * i * i -
              4 * i * o +
              o * o +
              r * r -
              4 * r * a +
              2 * r * s +
              4 * a * a -
              4 * a * s +
              s * s,
            u =
              9 * n * i -
              3 * n * n -
              3 * n * o -
              6 * i * i +
              3 * i * o +
              9 * r * a -
              3 * r * r -
              3 * r * s -
              6 * a * a +
              3 * a * s,
            c =
              3 * n * n -
              6 * n * i +
              n * o -
              n * e +
              2 * i * i +
              2 * i * e -
              o * e +
              3 * r * r -
              6 * r * a +
              r * s -
              r * t +
              2 * a * a +
              2 * a * t -
              s * t,
            d =
              1 * n * i - n * n + n * e - i * e + r * a - r * r + r * t - a * t,
            h = [];
          this.solveCubic(l, u, c, d, h);
          for (var p = [], f = 0; f < 6; f += 2)
            Math.abs(h[f + 1]) < 1e-7 && h[f] >= 0 && h[f] <= 1 && p.push(h[f]);
          p.push(1), p.push(0);
          for (
            var v = -1, g = void 0, y = void 0, m = void 0, b = 0;
            b < p.length;
            b++
          )
            (g =
              Math.pow(1 - p[b], 2) * n +
              2 * (1 - p[b]) * p[b] * i +
              p[b] * p[b] * o),
              (y =
                Math.pow(1 - p[b], 2) * r +
                2 * (1 - p[b]) * p[b] * a +
                p[b] * p[b] * s),
              (m = Math.pow(g - e, 2) + Math.pow(y - t, 2)),
              v >= 0 ? m < v && (v = m) : (v = m);
          return v;
        }),
        (r.sqdistToFiniteLine = function (e, t, n, r, i, a) {
          var o = [e - n, t - r],
            s = [i - n, a - r],
            l = s[0] * s[0] + s[1] * s[1],
            u = o[0] * o[0] + o[1] * o[1],
            c = o[0] * s[0] + o[1] * s[1],
            d = (c * c) / l;
          return c < 0
            ? u
            : d > l
            ? (e - i) * (e - i) + (t - a) * (t - a)
            : u - d;
        }),
        (r.pointInsidePolygonPoints = function (e, t, n) {
          for (
            var r = void 0, i = void 0, a = void 0, o = void 0, s = 0, l = 0;
            l < n.length / 2;
            l++
          )
            if (
              ((r = n[2 * l]),
              (i = n[2 * l + 1]),
              l + 1 < n.length / 2
                ? ((a = n[2 * (l + 1)]), (o = n[2 * (l + 1) + 1]))
                : ((a = n[2 * (l + 1 - n.length / 2)]),
                  (o = n[2 * (l + 1 - n.length / 2) + 1])),
              r == e && a == e)
            );
            else {
              if (!((r >= e && e >= a) || (r <= e && e <= a))) continue;
              ((e - r) / (a - r)) * (o - i) + i > t && s++;
            }
          return s % 2 != 0;
        }),
        (r.pointInsidePolygon = function (e, t, n, i, a, o, s, l, u) {
          var c = new Array(n.length),
            d = void 0;
          null != l[0]
            ? ((d = Math.atan(l[1] / l[0])),
              l[0] < 0 ? (d += Math.PI / 2) : (d = -d - Math.PI / 2))
            : (d = l);
          for (
            var h = Math.cos(-d), p = Math.sin(-d), f = 0;
            f < c.length / 2;
            f++
          )
            (c[2 * f] = (o / 2) * (n[2 * f] * h - n[2 * f + 1] * p)),
              (c[2 * f + 1] = (s / 2) * (n[2 * f + 1] * h + n[2 * f] * p)),
              (c[2 * f] += i),
              (c[2 * f + 1] += a);
          var v = void 0;
          if (u > 0) {
            var g = this.expandPolygon(c, -u);
            v = this.joinLines(g);
          } else v = c;
          return r.pointInsidePolygonPoints(e, t, v);
        }),
        (r.joinLines = function (e) {
          for (
            var t = new Array(e.length / 2),
              n = void 0,
              r = void 0,
              i = void 0,
              a = void 0,
              o = void 0,
              s = void 0,
              l = void 0,
              u = void 0,
              c = 0;
            c < e.length / 4;
            c++
          ) {
            (n = e[4 * c]),
              (r = e[4 * c + 1]),
              (i = e[4 * c + 2]),
              (a = e[4 * c + 3]),
              c < e.length / 4 - 1
                ? ((o = e[4 * (c + 1)]),
                  (s = e[4 * (c + 1) + 1]),
                  (l = e[4 * (c + 1) + 2]),
                  (u = e[4 * (c + 1) + 3]))
                : ((o = e[0]), (s = e[1]), (l = e[2]), (u = e[3]));
            var d = this.finiteLinesIntersect(n, r, i, a, o, s, l, u, !0);
            (t[2 * c] = d[0]), (t[2 * c + 1] = d[1]);
          }
          return t;
        }),
        (r.expandPolygon = function (e, t) {
          for (
            var n = new Array(2 * e.length),
              r = void 0,
              i = void 0,
              a = void 0,
              o = void 0,
              s = 0;
            s < e.length / 2;
            s++
          ) {
            (r = e[2 * s]),
              (i = e[2 * s + 1]),
              s < e.length / 2 - 1
                ? ((a = e[2 * (s + 1)]), (o = e[2 * (s + 1) + 1]))
                : ((a = e[0]), (o = e[1]));
            var l = o - i,
              u = -(a - r),
              c = Math.sqrt(l * l + u * u),
              d = l / c,
              h = u / c;
            (n[4 * s] = r + d * t),
              (n[4 * s + 1] = i + h * t),
              (n[4 * s + 2] = a + d * t),
              (n[4 * s + 3] = o + h * t);
          }
          return n;
        }),
        (r.intersectLineEllipse = function (e, t, n, r, i, a) {
          var o = n - e,
            s = r - t;
          (o /= i), (s /= a);
          var l = Math.sqrt(o * o + s * s),
            u = l - 1;
          if (u < 0) return [];
          var c = u / l;
          return [(n - e) * c + e, (r - t) * c + t];
        }),
        (r.checkInEllipse = function (e, t, n, r, i, a, o) {
          return (
            (e -= i),
            (t -= a),
            (e /= n / 2 + o),
            (t /= r / 2 + o),
            e * e + t * t <= 1
          );
        }),
        (r.intersectLineCircle = function (e, t, n, r, i, a, o) {
          var s = [n - e, r - t],
            l = [e - i, t - a],
            u = s[0] * s[0] + s[1] * s[1],
            c = 2 * (l[0] * s[0] + l[1] * s[1]),
            d = l[0] * l[0] + l[1] * l[1] - o * o,
            h = c * c - 4 * u * d;
          if (h < 0) return [];
          var p = (-c + Math.sqrt(h)) / (2 * u),
            f = (-c - Math.sqrt(h)) / (2 * u),
            v = Math.min(p, f),
            g = Math.max(p, f),
            y = [];
          if (
            (v >= 0 && v <= 1 && y.push(v),
            g >= 0 && g <= 1 && y.push(g),
            0 === y.length)
          )
            return [];
          var m = y[0] * s[0] + e,
            b = y[0] * s[1] + t;
          if (y.length > 1) {
            if (y[0] == y[1]) return [m, b];
            return [m, b, y[1] * s[0] + e, y[1] * s[1] + t];
          }
          return [m, b];
        }),
        (r.findCircleNearPoint = function (e, t, n, r, i) {
          var a = r - e,
            o = i - t,
            s = Math.sqrt(a * a + o * o);
          return [e + (a / s) * n, t + (o / s) * n];
        }),
        (r.findMaxSqDistanceToOrigin = function (e) {
          for (var t = 1e-6, n = void 0, r = 0; r < e.length / 2; r++)
            (n = e[2 * r] * e[2 * r] + e[2 * r + 1] * e[2 * r + 1]) > t &&
              (t = n);
          return t;
        }),
        (r.midOfThree = function (e, t, n) {
          return (t <= e && e <= n) || (n <= e && e <= t)
            ? e
            : (e <= t && t <= n) || (n <= t && t <= e)
            ? t
            : n;
        }),
        (r.finiteLinesIntersect = function (e, t, n, r, i, a, o, s, l) {
          var u = e - i,
            c = n - e,
            d = o - i,
            h = t - a,
            p = r - t,
            f = s - a,
            v = d * h - f * u,
            g = c * h - p * u,
            y = f * c - d * p;
          if (0 !== y) {
            var m = v / y,
              b = g / y;
            return -0.001 <= m && m <= 1.001 && -0.001 <= b && b <= 1.001
              ? [e + m * c, t + m * p]
              : l
              ? [e + m * c, t + m * p]
              : [];
          }
          return 0 === v || 0 === g
            ? this.midOfThree(e, n, o) === o
              ? [o, s]
              : this.midOfThree(e, n, i) === i
              ? [i, a]
              : this.midOfThree(i, o, n) === n
              ? [n, r]
              : []
            : [];
        }),
        (r.polygonIntersectLine = function (e, t, n, i, a, o, s, l) {
          var u = [],
            c = void 0,
            d = new Array(n.length),
            h = !0;
          5 === arguments.length && (h = !1);
          var p = void 0;
          if (h) {
            for (var f = 0; f < d.length / 2; f++)
              (d[2 * f] = n[2 * f] * o + i),
                (d[2 * f + 1] = n[2 * f + 1] * s + a);
            if (l > 0) {
              var v = r.expandPolygon(d, -l);
              p = r.joinLines(v);
            } else p = d;
          } else p = n;
          for (
            var g = void 0, y = void 0, m = void 0, b = void 0, x = 0;
            x < p.length / 2;
            x++
          )
            (g = p[2 * x]),
              (y = p[2 * x + 1]),
              x < p.length / 2 - 1
                ? ((m = p[2 * (x + 1)]), (b = p[2 * (x + 1) + 1]))
                : ((m = p[0]), (b = p[1])),
              (c = this.finiteLinesIntersect(e, t, i, a, g, y, m, b)),
              0 !== c.length && u.push(c[0], c[1]);
          return u;
        }),
        (r.shortenIntersection = function (e, t, n) {
          var r = [e[0] - t[0], e[1] - t[1]],
            i = Math.sqrt(r[0] * r[0] + r[1] * r[1]),
            a = (i - n) / i;
          return a < 0 && (a = 1e-5), [t[0] + a * r[0], t[1] + a * r[1]];
        }),
        (r.generateUnitNgonPointsFitToSquare = function (e, t) {
          var n = r.generateUnitNgonPoints(e, t);
          return (n = r.fitPolygonToSquare(n));
        }),
        (r.fitPolygonToSquare = function (e) {
          for (
            var t = void 0,
              n = void 0,
              r = e.length / 2,
              i = 1 / 0,
              a = 1 / 0,
              o = -1 / 0,
              s = -1 / 0,
              l = 0;
            l < r;
            l++
          )
            (t = e[2 * l]),
              (n = e[2 * l + 1]),
              (i = Math.min(i, t)),
              (o = Math.max(o, t)),
              (a = Math.min(a, n)),
              (s = Math.max(s, n));
          for (var u = 2 / (o - i), c = 2 / (s - a), d = 0; d < r; d++)
            (t = e[2 * d] = e[2 * d] * u),
              (n = e[2 * d + 1] = e[2 * d + 1] * c),
              (i = Math.min(i, t)),
              (o = Math.max(o, t)),
              (a = Math.min(a, n)),
              (s = Math.max(s, n));
          if (a < -1)
            for (var h = 0; h < r; h++)
              n = e[2 * h + 1] = e[2 * h + 1] + (-1 - a);
          return e;
        }),
        (r.generateUnitNgonPoints = function (e, t) {
          var n = (1 / e) * 2 * Math.PI,
            r = e % 2 == 0 ? Math.PI / 2 + n / 2 : Math.PI / 2;
          r += t;
          for (var i = new Array(2 * e), a = void 0, o = 0; o < e; o++)
            (a = o * n + r),
              (i[2 * o] = Math.cos(a)),
              (i[2 * o + 1] = Math.sin(-a));
          return i;
        }),
        (r.getRoundRectangleRadius = function (e, t) {
          return Math.min(e / 4, t / 4, 8);
        }),
        (r.getCutRectangleCornerLength = function () {
          return 8;
        }),
        (r.bezierPtsToQuadCoeff = function (e, t, n) {
          return [e - 2 * t + n, 2 * (t - e), e];
        }),
        (r.getBarrelCurveConstants = function (e, t) {
          return {
            heightOffset: Math.min(15, 0.05 * t),
            widthOffset: Math.min(100, 0.25 * e),
            ctrlPtOffsetPct: 0.05,
          };
        }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      e.exports = "undefined" == typeof window ? null : window;
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = {};
      [n(44), n(46), n(47)].forEach(function (e) {
        r.assign(i, e);
      }),
        (e.exports = i);
    },
    function (e, t, n) {
      "use strict";
      var r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        i = function e(t) {
          if (!(this instanceof e)) return new e(t);
          (this.id = "Thenable/1.0.7"),
            (this.state = 0),
            (this.fulfillValue = void 0),
            (this.rejectReason = void 0),
            (this.onFulfilled = []),
            (this.onRejected = []),
            (this.proxy = { then: this.then.bind(this) }),
            "function" == typeof t &&
              t.call(this, this.fulfill.bind(this), this.reject.bind(this));
        };
      i.prototype = {
        fulfill: function (e) {
          return a(this, 1, "fulfillValue", e);
        },
        reject: function (e) {
          return a(this, 2, "rejectReason", e);
        },
        then: function (e, t) {
          var n = this,
            r = new i();
          return (
            n.onFulfilled.push(l(e, r, "fulfill")),
            n.onRejected.push(l(t, r, "reject")),
            o(n),
            r.proxy
          );
        },
      };
      var a = function (e, t, n, r) {
          return 0 === e.state && ((e.state = t), (e[n] = r), o(e)), e;
        },
        o = function (e) {
          1 === e.state
            ? s(e, "onFulfilled", e.fulfillValue)
            : 2 === e.state && s(e, "onRejected", e.rejectReason);
        },
        s = function (e, t, n) {
          if (0 !== e[t].length) {
            var r = e[t];
            e[t] = [];
            var i = function () {
              for (var e = 0; e < r.length; e++) r[e](n);
            };
            "function" == typeof setImmediate
              ? setImmediate(i)
              : setTimeout(i, 0);
          }
        },
        l = function (e, t, n) {
          return function (r) {
            if ("function" != typeof e) t[n].call(t, r);
            else {
              var i;
              try {
                i = e(r);
              } catch (e) {
                return void t.reject(e);
              }
              u(t, i);
            }
          };
        },
        u = function e(t, n) {
          if (t === n || t.proxy === n)
            return void t.reject(
              new TypeError("cannot resolve promise with itself")
            );
          var i;
          if (
            ("object" === (void 0 === n ? "undefined" : r(n)) && null !== n) ||
            "function" == typeof n
          )
            try {
              i = n.then;
            } catch (e) {
              return void t.reject(e);
            }
          if ("function" != typeof i) t.fulfill(n);
          else {
            var a = !1;
            try {
              i.call(
                n,
                function (r) {
                  a ||
                    ((a = !0),
                    r === n
                      ? t.reject(new TypeError("circular thenable chain"))
                      : e(t, r));
                },
                function (e) {
                  a || ((a = !0), t.reject(e));
                }
              );
            } catch (e) {
              a || t.reject(e);
            }
          }
        };
      (i.all = function (e) {
        return new i(function (t, n) {
          for (
            var r = new Array(e.length),
              i = 0,
              a = function (n, a) {
                (r[n] = a), ++i === e.length && t(r);
              },
              o = 0;
            o < e.length;
            o++
          )
            !(function (t) {
              var r = e[t];
              null != r && null != r.then
                ? r.then(
                    function (e) {
                      a(t, e);
                    },
                    function (e) {
                      n(e);
                    }
                  )
                : a(t, r);
            })(o);
        });
      }),
        (i.resolve = function (e) {
          return new i(function (t, n) {
            t(e);
          });
        }),
        (i.reject = function (e) {
          return new i(function (t, n) {
            n(e);
          });
        }),
        (e.exports = "undefined" != typeof Promise ? Promise : i);
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(1),
        a = n(10),
        o = function (e) {
          var t = this;
          if (
            ((t._private = { selectorText: e, invalid: !0 }),
            null == e || (r.string(e) && e.match(/^\s*$/)))
          )
            t.length = 0;
          else if ("*" === e || "edge" === e || "node" === e)
            (t[0] = a()),
              (t[0].group = "*" === e ? e : e + "s"),
              (t[0].groupOnly = !0),
              (t[0].length = 1),
              (t._private.invalid = !1),
              (t.length = 1);
          else if (r.elementOrCollection(e)) {
            var n = e.collection();
            (t[0] = a()),
              (t[0].collection = n),
              (t[0].length = 1),
              (t.length = 1);
          } else if (r.fn(e))
            (t[0] = a()), (t[0].filter = e), (t[0].length = 1), (t.length = 1);
          else {
            if (!r.string(e))
              return void i.error(
                "A selector must be created from a string; found ",
                e
              );
            if (!t.parse(e)) return;
          }
          t._private.invalid = !1;
        },
        s = o.prototype;
      (s.valid = function () {
        return !this._private.invalid;
      }),
        (s.invalid = function () {
          return this._private.invalid;
        }),
        (s.text = function () {
          return this._private.selectorText;
        }),
        (s.size = function () {
          return this.length;
        }),
        (s.eq = function (e) {
          return this[e];
        }),
        (s.sameText = function (e) {
          return this.text() === e.text();
        }),
        (s.toString = s.selector =
          function () {
            if (null != this._private.toStringCache)
              return this._private.toStringCache;
            var e = void 0,
              t = "",
              n = function (e) {
                return null == e ? "" : e;
              },
              i = function (e) {
                return r.string(e) ? '"' + e + '"' : n(e);
              },
              a = function (e) {
                return " " + e + " ";
              };
            for (e = 0; e < this.length; e++) {
              var o = this[e];
              (t += (function t(r) {
                var o = "",
                  s = void 0,
                  l = void 0;
                r.subject === r && (o += "$");
                var u = n(r.group);
                for (
                  o += u.substring(0, u.length - 1), s = 0;
                  s < r.data.length;
                  s++
                ) {
                  var c = r.data[s];
                  c.value
                    ? (o += "[" + c.field + a(n(c.operator)) + i(c.value) + "]")
                    : (o += "[" + n(c.operator) + c.field + "]");
                }
                for (s = 0; s < r.meta.length; s++) {
                  var d = r.meta[s];
                  o += "[[" + d.field + a(n(d.operator)) + i(d.value) + "]]";
                }
                for (s = 0; s < r.colonSelectors.length; s++)
                  (l = r.colonSelectors[e]), (o += l);
                for (s = 0; s < r.ids.length; s++)
                  (l = "#" + r.ids[e]), (o += l);
                for (s = 0; s < r.classes.length; s++)
                  (l = "." + r.classes[s]), (o += l);
                if (
                  (null != r.source &&
                    null != r.target &&
                    (o = t(r.source) + " -> " + t(r.target)),
                  null != r.connectedNodes)
                ) {
                  var h = r.connectedNodes;
                  o = t(h[0]) + " <-> " + t(h[1]);
                }
                return (
                  null != r.parent && (o = t(r.parent) + " > " + o),
                  null != r.ancestor && (o = t(r.ancestor) + " " + o),
                  null != r.child && (o += " > " + t(r.child)),
                  null != r.descendant && (o += " " + t(r.descendant)),
                  o
                );
              })(o)),
                this.length > 1 && e < this.length - 1 && (t += ", ");
            }
            return (this._private.toStringCache = t), t;
          }),
        [n(50), n(53)].forEach(function (e) {
          return i.assign(s, e);
        }),
        (e.exports = o);
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = n(0),
        a = n(28),
        o = n(8),
        s = n(14),
        l = {
          generate: function (e, t, n) {
            for (var i = null != n ? n : r.uuid(); e.hasElementWithId(i); )
              i = r.uuid();
            return i;
          },
        },
        u = function (e, t, n) {
          if (void 0 === e || !i.core(e))
            return void r.error(
              "A collection must have a reference to the core"
            );
          var u = new a(),
            c = !1;
          if (t) {
            if (t.length > 0 && i.plainObject(t[0]) && !i.element(t[0])) {
              c = !0;
              for (var d = [], h = new o(), p = 0, f = t.length; p < f; p++) {
                var v = t[p];
                null == v.data && (v.data = {});
                var g = v.data;
                if (null == g.id) g.id = l.generate(e, v);
                else if (e.hasElementWithId(g.id) || h.has(g.id)) continue;
                var y = new s(e, v, !1);
                d.push(y), h.add(g.id);
              }
              t = d;
            }
          } else t = [];
          this.length = 0;
          for (var m = 0, b = t.length; m < b; m++) {
            var x = t[m];
            if (null != x) {
              var w = x._private.data.id;
              (null == n || (n.unique && !u.has(w))) &&
                (u.set(w, { index: this.length, ele: x }),
                (this[this.length] = x),
                this.length++);
            }
          }
          (this._private = { cy: e, map: u }), c && this.restore();
        },
        c = (s.prototype = u.prototype);
      (c.instanceString = function () {
        return "collection";
      }),
        (c.spawn = function (e, t, n) {
          return (
            i.core(e) || ((n = t), (t = e), (e = this.cy())), new u(e, t, n)
          );
        }),
        (c.spawnSelf = function () {
          return this.spawn(this);
        }),
        (c.cy = function () {
          return this._private.cy;
        }),
        (c.renderer = function () {
          return this._private.cy.renderer();
        }),
        (c.element = function () {
          return this[0];
        }),
        (c.collection = function () {
          return i.collection(this) ? this : new u(this._private.cy, [this]);
        }),
        (c.unique = function () {
          return new u(this._private.cy, this, { unique: !0 });
        }),
        (c.hasElementWithId = function (e) {
          return this._private.map.has(e);
        }),
        (c.getElementById = function (e) {
          var t = this._private.cy,
            n = this._private.map.get(e);
          return n ? n.ele : new u(t);
        }),
        (c.$id = c.getElementById),
        (c.poolIndex = function () {
          var e = this._private.cy,
            t = e._private.elements,
            n = this._private.data.id;
          return t._private.map.get(n).index;
        }),
        (c.json = function (e) {
          var t = this.element(),
            n = this.cy();
          if (null == t && e) return this;
          if (null != t) {
            var a = t._private;
            if (i.plainObject(e)) {
              n.startBatch(),
                e.data && t.data(e.data),
                e.position && t.position(e.position);
              var o = function (n, r, i) {
                var o = e[n];
                null != o && o !== a[n] && (o ? t[r]() : t[i]());
              };
              return (
                o("removed", "remove", "restore"),
                o("selected", "select", "unselect"),
                o("selectable", "selectify", "unselectify"),
                o("locked", "lock", "unlock"),
                o("grabbable", "grabify", "ungrabify"),
                null != e.classes && t.classes(e.classes),
                n.endBatch(),
                this
              );
            }
            if (void 0 === e) {
              var s = {
                data: r.copy(a.data),
                position: r.copy(a.position),
                group: a.group,
                removed: a.removed,
                selected: a.selected,
                selectable: a.selectable,
                locked: a.locked,
                grabbable: a.grabbable,
                classes: null,
              };
              s.classes = "";
              var l = 0;
              return (
                a.classes.forEach(function (e) {
                  return (s.classes += 0 == l++ ? e : " " + e);
                }),
                s
              );
            }
          }
        }),
        (c.jsons = function () {
          for (var e = [], t = 0; t < this.length; t++) {
            var n = this[t],
              r = n.json();
            e.push(r);
          }
          return e;
        }),
        (c.clone = function () {
          for (var e = this.cy(), t = [], n = 0; n < this.length; n++) {
            var r = this[n],
              i = r.json(),
              a = new s(e, i, !1);
            t.push(a);
          }
          return new u(e, t);
        }),
        (c.copy = c.clone),
        (c.restore = function (e) {
          var t = this,
            n = t.cy(),
            o = n._private;
          void 0 === e && (e = !0);
          for (
            var s = [], c = [], d = void 0, h = 0, p = t.length;
            h < p;
            h++
          ) {
            var f = t[h];
            f.removed() && (f.isNode() ? s.push(f) : c.push(f));
          }
          d = s.concat(c);
          var v = void 0,
            g = function () {
              d.splice(v, 1), v--;
            };
          for (v = 0; v < d.length; v++) {
            var y = d[v],
              m = y._private,
              b = m.data;
            if ((y.clearTraversalCache(), void 0 === b.id))
              b.id = l.generate(n, y);
            else if (i.number(b.id)) b.id = "" + b.id;
            else {
              if (i.emptyString(b.id) || !i.string(b.id)) {
                r.error(
                  "Can not create element with invalid string ID `" + b.id + "`"
                ),
                  g();
                continue;
              }
              if (n.hasElementWithId(b.id)) {
                r.error("Can not create second element with ID `" + b.id + "`"),
                  g();
                continue;
              }
            }
            var x = b.id;
            if (y.isNode()) {
              var w = m.position;
              null == w.x && (w.x = 0), null == w.y && (w.y = 0);
            }
            if (y.isEdge()) {
              for (
                var E = y,
                  P = ["source", "target"],
                  C = P.length,
                  S = !1,
                  T = 0;
                T < C;
                T++
              ) {
                var D = P[T],
                  k = b[D];
                i.number(k) && (k = b[D] = "" + b[D]),
                  null == k || "" === k
                    ? (r.error(
                        "Can not create edge `" + x + "` with unspecified " + D
                      ),
                      (S = !0))
                    : n.hasElementWithId(k) ||
                      (r.error(
                        "Can not create edge `" +
                          x +
                          "` with nonexistant " +
                          D +
                          " `" +
                          k +
                          "`"
                      ),
                      (S = !0));
              }
              if (S) {
                g();
                continue;
              }
              var _ = n.getElementById(b.source),
                M = n.getElementById(b.target);
              _._private.edges.push(E),
                M._private.edges.push(E),
                (E._private.source = _),
                (E._private.target = M);
            }
            (m.map = new a()),
              m.map.set(x, { ele: y, index: 0 }),
              (m.removed = !1),
              n.addToPool(y);
          }
          for (var I = 0; I < s.length; I++) {
            var N = s[I],
              B = N._private.data;
            i.number(B.parent) && (B.parent = "" + B.parent);
            var z = B.parent;
            if (null != z) {
              var L = n.getElementById(z);
              if (L.empty()) B.parent = void 0;
              else {
                for (var A = !1, O = L; !O.empty(); ) {
                  if (N.same(O)) {
                    (A = !0), (B.parent = void 0);
                    break;
                  }
                  O = O.parent();
                }
                A ||
                  (L[0]._private.children.push(N),
                  (N._private.parent = L[0]),
                  (o.hasCompoundNodes = !0));
              }
            }
          }
          if (d.length > 0) {
            for (var R = new u(n, d), V = 0; V < R.length; V++) {
              var q = R[V];
              q.isNode() ||
                (q.parallelEdges().clearTraversalCache(),
                q.source().clearTraversalCache(),
                q.target().clearTraversalCache());
            }
            var F = void 0;
            (F = o.hasCompoundNodes
              ? n
                  .collection()
                  .merge(R)
                  .merge(R.connectedNodes())
                  .merge(R.parent())
              : R),
              F.dirtyCompoundBoundsCache().updateStyle(e),
              e ? R.emitAndNotify("add") : R.emit("add");
          }
          return t;
        }),
        (c.removed = function () {
          var e = this[0];
          return e && e._private.removed;
        }),
        (c.inside = function () {
          var e = this[0];
          return e && !e._private.removed;
        }),
        (c.remove = function (e) {
          function t(e) {
            for (var t = e._private.edges, n = 0; n < t.length; n++) i(t[n]);
          }
          function n(e) {
            for (var t = e._private.children, n = 0; n < t.length; n++) i(t[n]);
          }
          function i(e) {
            c[e.id()] ||
              ((c[e.id()] = !0),
              e.isNode() ? (l.push(e), t(e), n(e)) : l.unshift(e));
          }
          function a(e, t) {
            var n = e._private.edges;
            r.removeFromArray(n, t), e.clearTraversalCache();
          }
          var o = this,
            s = [],
            l = [],
            c = {},
            d = o._private.cy;
          void 0 === e && (e = !0);
          for (var h = 0, p = o.length; h < p; h++) {
            i(o[h]);
          }
          var f = [];
          (f.ids = {}), o.dirtyCompoundBoundsCache(), d.removeFromPool(l);
          for (var v = 0; v < l.length; v++) {
            var g = l[v];
            if (((g._private.removed = !0), s.push(g), g.isEdge())) {
              var y = g.source()[0],
                m = g.target()[0];
              a(y, g),
                a(m, g),
                (function (e) {
                  e.parallelEdges().clearTraversalCache();
                })(g);
            } else {
              var b = g.parent();
              0 !== b.length &&
                (function (e, t) {
                  (t = t[0]), (e = e[0]);
                  var n = e._private.children,
                    i = e.id();
                  r.removeFromArray(n, t),
                    f.ids[i] || ((f.ids[i] = !0), f.push(e));
                })(b, g);
            }
          }
          var x = d._private.elements;
          d._private.hasCompoundNodes = !1;
          for (var w = 0; w < x.length; w++) {
            if (x[w].isParent()) {
              d._private.hasCompoundNodes = !0;
              break;
            }
          }
          var E = new u(this.cy(), s);
          E.size() > 0 &&
            (e && this.cy().notify({ type: "remove", eles: E }),
            E.emit("remove"));
          for (var P = 0; P < f.length; P++) {
            var C = f[P];
            C.removed() || C.updateStyle();
          }
          return new u(d, s);
        }),
        (c.move = function (e) {
          var t = this._private.cy;
          if (void 0 !== e.source || void 0 !== e.target) {
            var n = e.source,
              r = e.target,
              i = t.hasElementWithId(n),
              a = t.hasElementWithId(r);
            if (i || a) {
              var o = this.jsons();
              this.remove();
              for (var s = 0; s < o.length; s++) {
                var l = o[s],
                  u = this[s];
                "edges" === l.group &&
                  (i && (l.data.source = n),
                  a && (l.data.target = r),
                  (l.scratch = u._private.scratch));
              }
              return t.add(o);
            }
          } else if (void 0 !== e.parent) {
            var c = e.parent,
              d = null === c || t.hasElementWithId(c);
            if (d) {
              var h = this.jsons(),
                p = this.descendants(),
                f = p.union(p.union(this).connectedEdges()).jsons();
              this.remove();
              for (var v = 0; v < h.length; v++) {
                var g = h[v],
                  y = this[v];
                "nodes" === g.group &&
                  ((g.data.parent = null === c ? void 0 : c),
                  (g.scratch = y._private.scratch));
              }
              return t.add(h.concat(f));
            }
          }
          return this;
        }),
        [
          n(29),
          n(43),
          n(48),
          n(49),
          n(54),
          n(55),
          n(56),
          n(57),
          n(62),
          n(63),
          n(64),
          n(7),
          n(65),
          n(66),
          n(67),
          n(68),
          n(69),
        ].forEach(function (e) {
          r.extend(c, e);
        }),
        (e.exports = u);
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      var i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a =
          ("function" == typeof Symbol && Symbol.iterator,
          (function () {
            function e(t) {
              if ((r(this, e), (this._obj = Object.create(null)), null != t)) {
                var n = void 0;
                n =
                  null != t.instanceString &&
                  t.instanceString() === this.instanceString()
                    ? t.toArray()
                    : t;
                for (var i = 0; i < n.length; i++) this.add(n[i]);
              }
            }
            return (
              i(e, [
                {
                  key: "instanceString",
                  value: function () {
                    return "set";
                  },
                },
                {
                  key: "add",
                  value: function (e) {
                    this._obj[e] = 1;
                  },
                },
                {
                  key: "delete",
                  value: function (e) {
                    this._obj[e] = 0;
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    this._obj = Object.create(null);
                  },
                },
                {
                  key: "has",
                  value: function (e) {
                    return 1 === this._obj[e];
                  },
                },
                {
                  key: "toArray",
                  value: function () {
                    var e = this;
                    return Object.keys(this._obj).filter(function (t) {
                      return e.has(t);
                    });
                  },
                },
                {
                  key: "forEach",
                  value: function (e, t) {
                    return this.toArray().forEach(e, t);
                  },
                },
                {
                  key: "size",
                  get: function () {
                    return this.toArray().length;
                  },
                },
              ]),
              e
            );
          })());
      e.exports = a;
    },
    function (e, t, n) {
      "use strict";
      e.exports = n(32);
    },
    function (e, t, n) {
      "use strict";
      var r = function () {
        return {
          classes: [],
          colonSelectors: [],
          data: [],
          group: null,
          ids: [],
          meta: [],
          collection: null,
          filter: null,
          parent: null,
          ancestor: null,
          subject: null,
          child: null,
          descendant: null,
        };
      };
      e.exports = r;
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        i.assign(this, l, e), (this.listeners = []), (this.emitting = 0);
      }
      var i = n(1),
        a = n(0),
        o = n(16),
        s = /^([^.]+)(\.(?:[^.]+))?$/,
        l = {
          qualifierCompare: function (e, t) {
            return e === t;
          },
          eventMatches: function () {
            return !0;
          },
          eventFields: function () {
            return {};
          },
          callbackContext: function (e) {
            return e;
          },
          beforeEmit: function () {},
          afterEmit: function () {},
          bubble: function () {
            return !1;
          },
          parent: function () {
            return null;
          },
          context: void 0,
        },
        u = r.prototype,
        c = function (e, t, n, r, o, l, u) {
          a.fn(r) && ((o = r), (r = null)),
            u && (l = null == l ? u : i.assign({}, l, u));
          for (var c = n.split(/\s+/), d = 0; d < c.length; d++) {
            var h = c[d];
            if (!a.emptyString(h)) {
              var p = h.match(s);
              if (p) {
                if (!1 === t(e, h, p[1], p[2] ? p[2] : null, r, o, l)) break;
              }
            }
          }
        },
        d = function (e, t) {
          return new o(t.type, i.assign(t, e.eventFields(e.context)));
        },
        h = function (e, t, n) {
          if (a.event(n)) return void t(e, n);
          if (a.plainObject(n)) return void t(e, d(e, n));
          for (var r = n.split(/\s+/), i = 0; i < r.length; i++) {
            var o = r[i];
            if (!a.emptyString(o)) {
              var l = o.match(s);
              if (l) {
                var u = l[1],
                  c = l[2] ? l[2] : null;
                t(e, d(e, { type: u, namespace: c, target: e.context }));
              }
            }
          }
        };
      (u.on = u.addListener =
        function (e, t, n, r, i) {
          return (
            c(
              this,
              function (e, t, n, r, i, o, s) {
                a.fn(o) &&
                  e.listeners.push({
                    event: t,
                    callback: o,
                    type: n,
                    namespace: r,
                    qualifier: i,
                    conf: s,
                  });
              },
              e,
              t,
              n,
              r,
              i
            ),
            this
          );
        }),
        (u.one = function (e, t, n, r) {
          return this.on(e, t, n, r, { one: !0 });
        }),
        (u.removeListener = u.off =
          function (e, t, n, r) {
            var a = this;
            0 !== this.emitting &&
              (this.listeners = i.copyArray(this.listeners));
            for (var o = this.listeners, s = o.length - 1; s >= 0; s--)
              !(function (i) {
                var s = o[i];
                c(
                  a,
                  function (e, t, n, r, a, l) {
                    if (
                      s.type === n &&
                      (!r || s.namespace === r) &&
                      (!a || e.qualifierCompare(s.qualifier, a)) &&
                      (!l || s.callback === l)
                    )
                      return o.splice(i, 1), !1;
                  },
                  e,
                  t,
                  n,
                  r
                );
              })(s);
            return this;
          }),
        (u.emit = u.trigger =
          function (e, t, n) {
            var r = this.listeners,
              o = r.length;
            return (
              this.emitting++,
              a.array(t) || (t = [t]),
              h(
                this,
                function (e, a) {
                  null != n &&
                    ((r = [
                      {
                        event: a.event,
                        type: a.type,
                        namespace: a.namespace,
                        callback: n,
                      },
                    ]),
                    (o = r.length));
                  for (var s = 0; s < o; s++)
                    !(function (n) {
                      var o = r[n];
                      if (
                        o.type === a.type &&
                        (!o.namespace ||
                          o.namespace === a.namespace ||
                          ".*" === o.namespace) &&
                        e.eventMatches(e.context, o, a)
                      ) {
                        var s = [a];
                        null != t && i.push(s, t),
                          e.beforeEmit(e.context, o, a),
                          o.conf &&
                            o.conf.one &&
                            (e.listeners = e.listeners.filter(function (e) {
                              return e !== o;
                            }));
                        var l = e.callbackContext(e.context, o, a),
                          u = o.callback.apply(l, s);
                        e.afterEmit(e.context, o, a),
                          !1 === u && (a.stopPropagation(), a.preventDefault());
                      }
                    })(s);
                  e.bubble(e.context) &&
                    !a.isPropagationStopped() &&
                    e.parent(e.context).emit(a, t);
                },
                e
              ),
              this.emitting--,
              this
            );
          }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      var r = n(3),
        i = n(1),
        a = n(7),
        o = n(0),
        s = n(5),
        l = n(4),
        u = function (e) {
          var t = this;
          e = i.extend({}, e);
          var n = e.container;
          n && !o.htmlElement(n) && o.htmlElement(n[0]) && (n = n[0]);
          var l = n ? n._cyreg : null;
          (l = l || {}) && l.cy && (l.cy.destroy(), (l = {}));
          var u = (l.readies = l.readies || []);
          n && (n._cyreg = l), (l.cy = t);
          var c = void 0 !== r && void 0 !== n && !e.headless,
            d = e;
          (d.layout = i.extend({ name: c ? "grid" : "null" }, d.layout)),
            (d.renderer = i.extend(
              { name: c ? "canvas" : "null" },
              d.renderer
            ));
          var h = function (e, t, n) {
              return void 0 !== t ? t : void 0 !== n ? n : e;
            },
            p = (this._private = {
              container: n,
              ready: !1,
              options: d,
              elements: new a(this),
              listeners: [],
              aniEles: new a(this),
              scratch: {},
              layout: null,
              renderer: null,
              destroyed: !1,
              notificationsEnabled: !0,
              minZoom: 1e-50,
              maxZoom: 1e50,
              zoomingEnabled: h(!0, d.zoomingEnabled),
              userZoomingEnabled: h(!0, d.userZoomingEnabled),
              panningEnabled: h(!0, d.panningEnabled),
              userPanningEnabled: h(!0, d.userPanningEnabled),
              boxSelectionEnabled: h(!0, d.boxSelectionEnabled),
              autolock: h(!1, d.autolock, d.autolockNodes),
              autoungrabify: h(!1, d.autoungrabify, d.autoungrabifyNodes),
              autounselectify: h(!1, d.autounselectify),
              styleEnabled: void 0 === d.styleEnabled ? c : d.styleEnabled,
              zoom: o.number(d.zoom) ? d.zoom : 1,
              pan: {
                x: o.plainObject(d.pan) && o.number(d.pan.x) ? d.pan.x : 0,
                y: o.plainObject(d.pan) && o.number(d.pan.y) ? d.pan.y : 0,
              },
              animation: { current: [], queue: [] },
              hasCompoundNodes: !1,
            });
          this.createEmitter();
          var f = d.selectionType;
          (p.selectionType =
            void 0 === f || ("additive" !== f && "single" !== f)
              ? "single"
              : f),
            o.number(d.minZoom) && o.number(d.maxZoom) && d.minZoom < d.maxZoom
              ? ((p.minZoom = d.minZoom), (p.maxZoom = d.maxZoom))
              : o.number(d.minZoom) && void 0 === d.maxZoom
              ? (p.minZoom = d.minZoom)
              : o.number(d.maxZoom) &&
                void 0 === d.minZoom &&
                (p.maxZoom = d.maxZoom);
          p.styleEnabled && t.setStyle([]),
            t.initRenderer(
              i.extend(
                {
                  hideEdgesOnViewport: d.hideEdgesOnViewport,
                  textureOnViewport: d.textureOnViewport,
                  wheelSensitivity:
                    o.number(d.wheelSensitivity) && d.wheelSensitivity > 0
                      ? d.wheelSensitivity
                      : 1,
                  motionBlur: void 0 !== d.motionBlur && d.motionBlur,
                  motionBlurOpacity:
                    void 0 === d.motionBlurOpacity ? 0.05 : d.motionBlurOpacity,
                  pixelRatio:
                    o.number(d.pixelRatio) && d.pixelRatio > 0
                      ? d.pixelRatio
                      : void 0,
                  desktopTapThreshold:
                    void 0 === d.desktopTapThreshold
                      ? 4
                      : d.desktopTapThreshold,
                  touchTapThreshold:
                    void 0 === d.touchTapThreshold ? 8 : d.touchTapThreshold,
                },
                d.renderer
              )
            );
          var v = function (e, n, r) {
            t.notifications(!1);
            var a = t.mutableElements();
            a.length > 0 && a.remove(),
              null != e && (o.plainObject(e) || o.array(e)) && t.add(e),
              t
                .one("layoutready", function (e) {
                  t.notifications(!0),
                    t.emit(e),
                    t.notify({ type: "load", eles: t.mutableElements() }),
                    t.one("load", n),
                    t.emit("load");
                })
                .one("layoutstop", function () {
                  t.one("done", r), t.emit("done");
                });
            var s = i.extend({}, t._private.options.layout);
            (s.eles = t.elements()), t.layout(s).run();
          };
          !(function (e, t) {
            if (e.some(o.promise)) return s.all(e).then(t);
            t(e);
          })([d.style, d.elements], function (e) {
            var n = e[0],
              r = e[1];
            p.styleEnabled && t.style().append(n),
              v(
                r,
                function () {
                  t.startAnimationLoop(),
                    (p.ready = !0),
                    o.fn(d.ready) && t.on("ready", d.ready);
                  for (var e = 0; e < u.length; e++) {
                    var n = u[e];
                    t.on("ready", n);
                  }
                  l && (l.readies = []), t.emit("ready");
                },
                d.done
              );
          });
        },
        c = u.prototype;
      i.extend(c, {
        instanceString: function () {
          return "core";
        },
        isReady: function () {
          return this._private.ready;
        },
        isDestroyed: function () {
          return this._private.destroyed;
        },
        ready: function (e) {
          return (
            this.isReady()
              ? this.emitter().emit("ready", [], e)
              : this.on("ready", e),
            this
          );
        },
        destroy: function () {
          var e = this;
          if (!e.isDestroyed())
            return (
              e.stopAnimationLoop(),
              e.destroyRenderer(),
              this.emit("destroy"),
              (e._private.destroyed = !0),
              e
            );
        },
        hasElementWithId: function (e) {
          return this._private.elements.hasElementWithId(e);
        },
        getElementById: function (e) {
          return this._private.elements.getElementById(e);
        },
        selectionType: function () {
          return this._private.selectionType;
        },
        hasCompoundNodes: function () {
          return this._private.hasCompoundNodes;
        },
        headless: function () {
          return "null" === this._private.options.renderer.name;
        },
        styleEnabled: function () {
          return this._private.styleEnabled;
        },
        addToPool: function (e) {
          return this._private.elements.merge(e), this;
        },
        removeFromPool: function (e) {
          return this._private.elements.unmerge(e), this;
        },
        container: function () {
          return this._private.container;
        },
        options: function () {
          return i.copy(this._private.options);
        },
        json: function (e) {
          var t = this,
            n = t._private,
            r = t.mutableElements();
          if (o.plainObject(e)) {
            if ((t.startBatch(), e.elements)) {
              var a = {},
                s = function (e, n) {
                  for (var r = 0; r < e.length; r++) {
                    var o = e[r],
                      s = o.data.id,
                      l = t.getElementById(s);
                    (a[s] = !0),
                      0 !== l.length
                        ? l.json(o)
                        : n
                        ? t.add(i.extend({ group: n }, o))
                        : t.add(o);
                  }
                };
              if (o.array(e.elements)) s(e.elements);
              else
                for (var l = ["nodes", "edges"], u = 0; u < l.length; u++) {
                  var c = l[u],
                    d = e.elements[c];
                  o.array(d) && s(d, c);
                }
              r.stdFilter(function (e) {
                return !a[e.id()];
              }).remove();
            }
            e.style && t.style(e.style),
              null != e.zoom && e.zoom !== n.zoom && t.zoom(e.zoom),
              e.pan &&
                ((e.pan.x === n.pan.x && e.pan.y === n.pan.y) || t.pan(e.pan));
            for (
              var h = [
                  "minZoom",
                  "maxZoom",
                  "zoomingEnabled",
                  "userZoomingEnabled",
                  "panningEnabled",
                  "userPanningEnabled",
                  "boxSelectionEnabled",
                  "autolock",
                  "autoungrabify",
                  "autounselectify",
                ],
                p = 0;
              p < h.length;
              p++
            ) {
              var f = h[p];
              null != e[f] && t[f](e[f]);
            }
            return t.endBatch(), this;
          }
          if (void 0 === e) {
            var v = {};
            return (
              (v.elements = {}),
              r.forEach(function (e) {
                var t = e.group();
                v.elements[t] || (v.elements[t] = []),
                  v.elements[t].push(e.json());
              }),
              this._private.styleEnabled && (v.style = t.style().json()),
              (v.zoomingEnabled = t._private.zoomingEnabled),
              (v.userZoomingEnabled = t._private.userZoomingEnabled),
              (v.zoom = t._private.zoom),
              (v.minZoom = t._private.minZoom),
              (v.maxZoom = t._private.maxZoom),
              (v.panningEnabled = t._private.panningEnabled),
              (v.userPanningEnabled = t._private.userPanningEnabled),
              (v.pan = i.copy(t._private.pan)),
              (v.boxSelectionEnabled = t._private.boxSelectionEnabled),
              (v.renderer = i.copy(t._private.options.renderer)),
              (v.hideEdgesOnViewport = t._private.options.hideEdgesOnViewport),
              (v.textureOnViewport = t._private.options.textureOnViewport),
              (v.wheelSensitivity = t._private.options.wheelSensitivity),
              (v.motionBlur = t._private.options.motionBlur),
              v
            );
          }
        },
        scratch: l.data({
          field: "scratch",
          bindingEvent: "scratch",
          allowBinding: !0,
          allowSetting: !0,
          settingEvent: "scratch",
          settingTriggersEvent: !0,
          triggerFnName: "trigger",
          allowGetting: !0,
        }),
        removeScratch: l.removeData({
          field: "scratch",
          event: "scratch",
          triggerFnName: "trigger",
          triggerEvent: !0,
        }),
      }),
        (c.$id = c.getElementById),
        [
          n(70),
          n(71),
          n(79),
          n(80),
          n(81),
          n(82),
          n(83),
          n(84),
          n(85),
          n(94),
        ].forEach(function (e) {
          i.extend(c, e);
        }),
        (e.exports = u);
    },
    function (e, t, n) {
      "use strict";
      e.exports = function (e, t) {
        t ||
          (t = function () {
            if (1 === arguments.length) return arguments[0];
            if (0 === arguments.length) return "undefined";
            for (var e = [], t = 0; t < arguments.length; t++)
              e.push(arguments[t]);
            return e.join("$");
          });
        var n = function n() {
          var r = this,
            i = arguments,
            a = void 0,
            o = t.apply(r, i),
            s = n.cache;
          return (a = s[o]) || (a = s[o] = e.apply(r, i)), a;
        };
        return (n.cache = {}), n;
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = n(0),
        a = n(8),
        o = function (e, t, n) {
          if (
            ((n = !(void 0 !== n && !n)),
            void 0 === e || void 0 === t || !i.core(e))
          )
            return void r.error(
              "An element must have a core reference and parameters set"
            );
          var o = t.group;
          if (
            (null == o &&
              (o =
                t.data && null != t.data.source && null != t.data.target
                  ? "edges"
                  : "nodes"),
            "nodes" !== o && "edges" !== o)
          )
            return void r.error(
              "An element must be of type `nodes` or `edges`; you specified `" +
                o +
                "`"
            );
          (this.length = 1), (this[0] = this);
          var s = (this._private = {
            cy: e,
            single: !0,
            data: t.data || {},
            position: t.position || {},
            autoWidth: void 0,
            autoHeight: void 0,
            autoPadding: void 0,
            compoundBoundsClean: !1,
            listeners: [],
            group: o,
            style: {},
            rstyle: {},
            styleCxts: [],
            removed: !0,
            selected: !!t.selected,
            selectable: void 0 === t.selectable || !!t.selectable,
            locked: !!t.locked,
            grabbed: !1,
            grabbable: void 0 === t.grabbable || !!t.grabbable,
            active: !1,
            classes: new a(),
            animation: { current: [], queue: [] },
            rscratch: {},
            scratch: t.scratch || {},
            edges: [],
            children: [],
            parent: null,
            traversalCache: {},
            backgrounding: !1,
          });
          if (t.renderedPosition) {
            var l = t.renderedPosition,
              u = e.pan(),
              c = e.zoom();
            s.position = { x: (l.x - u.x) / c, y: (l.y - u.y) / c };
          }
          if (i.string(t.classes))
            for (
              var d = t.classes.split(/\s+/), h = 0, p = d.length;
              h < p;
              h++
            ) {
              var f = d[h];
              f && "" !== f && s.classes.add(f);
            }
          (t.style || t.css) && e.style().applyBypass(this, t.style || t.css),
            this.createEmitter(),
            (void 0 === n || n) && this.restore();
        };
      e.exports = o;
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = [
          {
            selector: ":selected",
            matches: function (e) {
              return e.selected();
            },
          },
          {
            selector: ":unselected",
            matches: function (e) {
              return !e.selected();
            },
          },
          {
            selector: ":selectable",
            matches: function (e) {
              return e.selectable();
            },
          },
          {
            selector: ":unselectable",
            matches: function (e) {
              return !e.selectable();
            },
          },
          {
            selector: ":locked",
            matches: function (e) {
              return e.locked();
            },
          },
          {
            selector: ":unlocked",
            matches: function (e) {
              return !e.locked();
            },
          },
          {
            selector: ":visible",
            matches: function (e) {
              return e.visible();
            },
          },
          {
            selector: ":hidden",
            matches: function (e) {
              return !e.visible();
            },
          },
          {
            selector: ":transparent",
            matches: function (e) {
              return e.transparent();
            },
          },
          {
            selector: ":grabbed",
            matches: function (e) {
              return e.grabbed();
            },
          },
          {
            selector: ":free",
            matches: function (e) {
              return !e.grabbed();
            },
          },
          {
            selector: ":removed",
            matches: function (e) {
              return e.removed();
            },
          },
          {
            selector: ":inside",
            matches: function (e) {
              return !e.removed();
            },
          },
          {
            selector: ":grabbable",
            matches: function (e) {
              return e.grabbable();
            },
          },
          {
            selector: ":ungrabbable",
            matches: function (e) {
              return !e.grabbable();
            },
          },
          {
            selector: ":animated",
            matches: function (e) {
              return e.animated();
            },
          },
          {
            selector: ":unanimated",
            matches: function (e) {
              return !e.animated();
            },
          },
          {
            selector: ":parent",
            matches: function (e) {
              return e.isParent();
            },
          },
          {
            selector: ":childless",
            matches: function (e) {
              return e.isChildless();
            },
          },
          {
            selector: ":child",
            matches: function (e) {
              return e.isChild();
            },
          },
          {
            selector: ":orphan",
            matches: function (e) {
              return e.isOrphan();
            },
          },
          {
            selector: ":nonorphan",
            matches: function (e) {
              return e.isChild();
            },
          },
          {
            selector: ":loop",
            matches: function (e) {
              return e.isLoop();
            },
          },
          {
            selector: ":simple",
            matches: function (e) {
              return e.isSimple();
            },
          },
          {
            selector: ":active",
            matches: function (e) {
              return e.active();
            },
          },
          {
            selector: ":inactive",
            matches: function (e) {
              return !e.active();
            },
          },
          {
            selector: ":backgrounding",
            matches: function (e) {
              return e.backgrounding();
            },
          },
          {
            selector: ":nonbackgrounding",
            matches: function (e) {
              return !e.backgrounding();
            },
          },
        ].sort(function (e, t) {
          return r.sort.descending(e.selector, t.selector);
        }),
        a = function e(t, n) {
          return (e.lookup =
            e.lookup ||
            (function () {
              for (var e = {}, t = void 0, n = 0; n < i.length; n++)
                (t = i[n]), (e[t.selector] = t.matches);
              return e;
            })())[t](n);
        },
        o =
          "(" +
          i
            .map(function (e) {
              return e.selector;
            })
            .join("|") +
          ")";
      e.exports = {
        stateSelectors: i,
        stateSelectorMatches: a,
        stateSelectorRegex: o,
      };
    },
    function (e, t, n) {
      "use strict";
      function r() {
        return !1;
      }
      function i() {
        return !0;
      } /*!
Event object based on jQuery events, MIT license

https://jquery.org/license/
https://tldrlegal.com/license/mit-license
https://github.com/jquery/jquery/blob/master/src/event.js
*/
      var a = function (e, t) {
        this.recycle(e, t);
      };
      (a.prototype = {
        instanceString: function () {
          return "event";
        },
        recycle: function (e, t) {
          if (
            ((this.isImmediatePropagationStopped =
              this.isPropagationStopped =
              this.isDefaultPrevented =
                r),
            null != e && e.preventDefault
              ? ((this.type = e.type),
                (this.isDefaultPrevented = e.defaultPrevented ? i : r))
              : null != e && e.type
              ? (t = e)
              : (this.type = e),
            null != t &&
              ((this.originalEvent = t.originalEvent),
              (this.type = null != t.type ? t.type : this.type),
              (this.cy = t.cy),
              (this.target = t.target),
              (this.position = t.position),
              (this.renderedPosition = t.renderedPosition),
              (this.namespace = t.namespace),
              (this.layout = t.layout)),
            null != this.cy &&
              null != this.position &&
              null == this.renderedPosition)
          ) {
            var n = this.position,
              a = this.cy.zoom(),
              o = this.cy.pan();
            this.renderedPosition = { x: n.x * a + o.x, y: n.y * a + o.y };
          }
          this.timeStamp = (e && e.timeStamp) || Date.now();
        },
        preventDefault: function () {
          this.isDefaultPrevented = i;
          var e = this.originalEvent;
          e && e.preventDefault && e.preventDefault();
        },
        stopPropagation: function () {
          this.isPropagationStopped = i;
          var e = this.originalEvent;
          e && e.stopPropagation && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          (this.isImmediatePropagationStopped = i), this.stopPropagation();
        },
        isDefaultPrevented: r,
        isPropagationStopped: r,
        isImmediatePropagationStopped: r,
      }),
        (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = function (e, t) {
          function n(e) {
            var t = e.pstyle("z-compound-depth");
            return "auto" === t.value
              ? o
                ? e.zDepth()
                : 0
              : "bottom" === t.value
              ? -1
              : "top" === t.value
              ? r.MAX_INT
              : 0;
          }
          function i(e) {
            return "auto" === e.pstyle("z-index-compare").value && e.isNode()
              ? 1
              : 0;
          }
          var a = e.cy(),
            o = a.hasCompoundNodes(),
            s = n(e) - n(t);
          if (0 !== s) return s;
          var l = i(e) - i(t);
          if (0 !== l) return l;
          var u = e.pstyle("z-index").value - t.pstyle("z-index").value;
          return 0 !== u ? u : e.poolIndex() - t.poolIndex();
        };
      e.exports = i;
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(1),
        a = n(6),
        o = function e(t) {
          return this instanceof e
            ? r.core(t)
              ? ((this._private = { cy: t, coreStyle: {} }),
                (this.length = 0),
                void this.resetToDefault())
              : void i.error("A style must have a core reference")
            : new e(t);
        },
        s = o.prototype;
      (s.instanceString = function () {
        return "style";
      }),
        (s.clear = function () {
          for (var e = 0; e < this.length; e++) this[e] = void 0;
          return (this.length = 0), (this._private.newStyle = !0), this;
        }),
        (s.resetToDefault = function () {
          return this.clear(), this.addDefaultStylesheet(), this;
        }),
        (s.core = function () {
          return this._private.coreStyle;
        }),
        (s.selector = function (e) {
          var t = "core" === e ? null : new a(e),
            n = this.length++;
          return (
            (this[n] = {
              selector: t,
              properties: [],
              mappedProperties: [],
              index: n,
            }),
            this
          );
        }),
        (s.css = function () {
          var e = this,
            t = arguments;
          switch (t.length) {
            case 1:
              for (var n = t[0], r = 0; r < e.properties.length; r++) {
                var a = e.properties[r],
                  o = n[a.name];
                void 0 === o && (o = n[i.dash2camel(a.name)]),
                  void 0 !== o && this.cssRule(a.name, o);
              }
              break;
            case 2:
              this.cssRule(t[0], t[1]);
          }
          return this;
        }),
        (s.style = s.css),
        (s.cssRule = function (e, t) {
          var n = this.parse(e, t);
          if (n) {
            var r = this.length - 1;
            this[r].properties.push(n),
              (this[r].properties[n.name] = n),
              n.name.match(/pie-(\d+)-background-size/) &&
                n.value &&
                (this._private.hasPie = !0),
              n.mapped && this[r].mappedProperties.push(n);
            !this[r].selector && (this._private.coreStyle[n.name] = n);
          }
          return this;
        }),
        (s.append = function (e) {
          return (
            r.stylesheet(e)
              ? e.appendToStyle(this)
              : r.array(e)
              ? this.appendFromJson(e)
              : r.string(e) && this.appendFromString(e),
            this
          );
        }),
        (o.fromJson = function (e, t) {
          var n = new o(e);
          return n.fromJson(t), n;
        }),
        (o.fromString = function (e, t) {
          return new o(e).fromString(t);
        }),
        [n(86), n(87), n(88), n(89), n(90), n(91), n(92), n(93)].forEach(
          function (e) {
            i.extend(s, e);
          }
        ),
        (o.types = s.types),
        (o.properties = s.properties),
        (e.exports = o);
    },
    function (e, t, n) {
      "use strict";
      var r = n(1);
      e.exports = {
        setupDequeueing: function (e) {
          return function () {
            var t = this,
              n = this.renderer;
            if (!t.dequeueingSetup) {
              t.dequeueingSetup = !0;
              var i = r.debounce(function () {
                  n.redrawHint("eles", !0),
                    n.redrawHint("drag", !0),
                    n.redraw();
                }, e.deqRedrawThreshold),
                a = function (a, o) {
                  for (
                    var s = r.performanceNow(),
                      l = n.averageRedrawTime,
                      u = n.lastRedrawTime,
                      c = [],
                      d = n.cy.extent(),
                      h = n.getPixelRatio();
                    ;

                  ) {
                    var p = r.performanceNow(),
                      f = p - s,
                      v = p - o;
                    if (u < 1e3 / 60) {
                      var g = 1e3 / 60 - (a ? l : 0);
                      if (v >= e.deqFastCost * g) break;
                    } else if (a) {
                      if (f >= e.deqCost * u || f >= e.deqAvgCost * l) break;
                    } else if (v >= e.deqNoDrawCost * (1e3 / 60)) break;
                    var y = e.deq(t, h, d);
                    if (!(y.length > 0)) break;
                    for (var m = 0; m < y.length; m++) c.push(y[m]);
                  }
                  c.length > 0 &&
                    (e.onDeqd(t, c), !a && e.shouldRedraw(t, c, h, d) && i());
                },
                o = e.priority || r.noop;
              n.beforeRender(a, o(t));
            }
          };
        },
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(12),
        a = n(95),
        o = n(137),
        s = function (e) {
          return (
            void 0 === e && (e = {}),
            r.plainObject(e)
              ? new i(e)
              : r.string(e)
              ? a.apply(a, arguments)
              : void 0
          );
        };
      (s.use = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return t.unshift(s), e.apply(null, t), this;
      }),
        (s.version = n(138)),
        (s.stylesheet = s.Stylesheet = o),
        (e.exports = s);
    },
    function (e, t, n) {
      "use strict";
      var r = n(0);
      e.exports = {
        hex2tuple: function (e) {
          if ((4 === e.length || 7 === e.length) && "#" === e[0]) {
            var t = 4 === e.length,
              n = void 0,
              r = void 0,
              i = void 0;
            return (
              t
                ? ((n = parseInt(e[1] + e[1], 16)),
                  (r = parseInt(e[2] + e[2], 16)),
                  (i = parseInt(e[3] + e[3], 16)))
                : ((n = parseInt(e[1] + e[2], 16)),
                  (r = parseInt(e[3] + e[4], 16)),
                  (i = parseInt(e[5] + e[6], 16))),
              [n, r, i]
            );
          }
        },
        hsl2tuple: function (e) {
          function t(e, t, n) {
            return (
              n < 0 && (n += 1),
              n > 1 && (n -= 1),
              n < 1 / 6
                ? e + 6 * (t - e) * n
                : n < 0.5
                ? t
                : n < 2 / 3
                ? e + (t - e) * (2 / 3 - n) * 6
                : e
            );
          }
          var n = void 0,
            r = void 0,
            i = void 0,
            a = void 0,
            o = void 0,
            s = void 0,
            l = void 0,
            u = void 0,
            c = new RegExp("^" + this.regex.hsla + "$").exec(e);
          if (c) {
            if (
              ((r = parseInt(c[1])),
              r < 0
                ? (r = (360 - ((-1 * r) % 360)) % 360)
                : r > 360 && (r %= 360),
              (r /= 360),
              (i = parseFloat(c[2])) < 0 || i > 100)
            )
              return;
            if (((i /= 100), (a = parseFloat(c[3])) < 0 || a > 100)) return;
            if (
              ((a /= 100),
              void 0 !== (o = c[4]) && ((o = parseFloat(o)) < 0 || o > 1))
            )
              return;
            if (0 === i) s = l = u = Math.round(255 * a);
            else {
              var d = a < 0.5 ? a * (1 + i) : a + i - a * i,
                h = 2 * a - d;
              (s = Math.round(255 * t(h, d, r + 1 / 3))),
                (l = Math.round(255 * t(h, d, r))),
                (u = Math.round(255 * t(h, d, r - 1 / 3)));
            }
            n = [s, l, u, o];
          }
          return n;
        },
        rgb2tuple: function (e) {
          var t = void 0,
            n = new RegExp("^" + this.regex.rgba + "$").exec(e);
          if (n) {
            t = [];
            for (var r = [], i = 1; i <= 3; i++) {
              var a = n[i];
              if (
                ("%" === a[a.length - 1] && (r[i] = !0),
                (a = parseFloat(a)),
                r[i] && (a = (a / 100) * 255),
                a < 0 || a > 255)
              )
                return;
              t.push(Math.floor(a));
            }
            var o = r[1] || r[2] || r[3],
              s = r[1] && r[2] && r[3];
            if (o && !s) return;
            var l = n[4];
            if (void 0 !== l) {
              if ((l = parseFloat(l)) < 0 || l > 1) return;
              t.push(l);
            }
          }
          return t;
        },
        colorname2tuple: function (e) {
          return this.colors[e.toLowerCase()];
        },
        color2tuple: function (e) {
          return (
            (r.array(e) ? e : null) ||
            this.colorname2tuple(e) ||
            this.hex2tuple(e) ||
            this.rgb2tuple(e) ||
            this.hsl2tuple(e)
          );
        },
        colors: {
          transparent: [0, 0, 0, 0],
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          grey: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50],
        },
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(0);
      e.exports = {
        mapEmpty: function (e) {
          return null == e || 0 === Object.keys(e).length;
        },
        pushMap: function (e) {
          var t = this.getMap(e);
          null == t
            ? this.setMap(this.extend({}, e, { value: [e.value] }))
            : t.push(e.value);
        },
        setMap: function (e) {
          for (var t = e.map, n = e.keys, i = n.length, a = 0; a < i; a++) {
            var o = n[a];
            r.plainObject(o) && this.error("Tried to set map with object key"),
              a < n.length - 1
                ? (null == t[o] && (t[o] = {}), (t = t[o]))
                : (t[o] = e.value);
          }
        },
        getMap: function (e) {
          for (var t = e.map, n = e.keys, i = n.length, a = 0; a < i; a++) {
            var o = n[a];
            if (
              (r.plainObject(o) &&
                this.error("Tried to get map with object key"),
              null == (t = t[o]))
            )
              return t;
          }
          return t;
        },
        deleteMap: function (e) {
          for (
            var t = e.map, n = e.keys, i = n.length, a = e.keepChildren, o = 0;
            o < i;
            o++
          ) {
            var s = n[o];
            r.plainObject(s) &&
              this.error("Tried to delete map with object key");
            if (o === e.keys.length - 1)
              if (a)
                for (var l = Object.keys(t), u = 0; u < l.length; u++) {
                  var c = l[u];
                  a[c] || (t[c] = void 0);
                }
              else t[s] = void 0;
            else t = t[s];
          }
        },
      };
    },
    function (e, t, n) {
      "use strict";
      var r = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))";
      e.exports = {
        regex: {
          number: r,
          rgba: "rgb[a]?\\(((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)(?:\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)",
          rgbaNoBackRefs:
            "rgb[a]?\\((?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)(?:\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)",
          hsla: "hsl[a]?\\(((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?)))\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])(?:\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)",
          hslaNoBackRefs:
            "hsl[a]?\\((?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?)))\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])(?:\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)",
          hex3: "\\#[0-9a-fA-F]{3}",
          hex6: "\\#[0-9a-fA-F]{6}",
        },
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(13),
        i = n(0);
      e.exports = {
        camel2dash: r(function (e) {
          return e.replace(/([A-Z])/g, function (e) {
            return "-" + e.toLowerCase();
          });
        }),
        dash2camel: r(function (e) {
          return e.replace(/(-\w)/g, function (e) {
            return e[1].toUpperCase();
          });
        }),
        prependCamel: r(
          function (e, t) {
            return e + t[0].toUpperCase() + t.substring(1);
          },
          function (e, t) {
            return e + "$" + t;
          }
        ),
        capitalize: function (e) {
          return i.emptyString(e)
            ? e
            : e.charAt(0).toUpperCase() + e.substring(1);
        },
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(3),
        i = r ? r.performance : null,
        a = {},
        o =
          i && i.now
            ? function () {
                return i.now();
              }
            : function () {
                return Date.now();
              },
        s = (function () {
          if (r) {
            if (r.requestAnimationFrame)
              return function (e) {
                r.requestAnimationFrame(e);
              };
            if (r.mozRequestAnimationFrame)
              return function (e) {
                r.mozRequestAnimationFrame(e);
              };
            if (r.webkitRequestAnimationFrame)
              return function (e) {
                r.webkitRequestAnimationFrame(e);
              };
            if (r.msRequestAnimationFrame)
              return function (e) {
                r.msRequestAnimationFrame(e);
              };
          }
          return function (e) {
            e &&
              setTimeout(function () {
                e(o());
              }, 1e3 / 60);
          };
        })();
      (a.requestAnimationFrame = function (e) {
        s(e);
      }),
        (a.performanceNow = o),
        (a.debounce = n(26)),
        (a.now = function () {
          return Date.now();
        }),
        (e.exports = a);
    },
    function (e, t) {
      function n(e, t, n) {
        function i(t) {
          var n = v,
            r = g;
          return (v = g = void 0), (C = t), (m = e.apply(r, n));
        }
        function a(e) {
          return (C = e), (b = setTimeout(c, t)), S ? i(e) : m;
        }
        function l(e) {
          var n = e - P,
            r = e - C,
            i = t - n;
          return T ? w(i, y - r) : i;
        }
        function u(e) {
          var n = e - P,
            r = e - C;
          return void 0 === P || n >= t || n < 0 || (T && r >= y);
        }
        function c() {
          var e = E();
          if (u(e)) return d(e);
          b = setTimeout(c, l(e));
        }
        function d(e) {
          return (b = void 0), D && v ? i(e) : ((v = g = void 0), m);
        }
        function h() {
          void 0 !== b && clearTimeout(b), (C = 0), (v = P = g = b = void 0);
        }
        function p() {
          return void 0 === b ? m : d(E());
        }
        function f() {
          var e = E(),
            n = u(e);
          if (((v = arguments), (g = this), (P = e), n)) {
            if (void 0 === b) return a(P);
            if (T) return (b = setTimeout(c, t)), i(P);
          }
          return void 0 === b && (b = setTimeout(c, t)), m;
        }
        var v,
          g,
          y,
          m,
          b,
          P,
          C = 0,
          S = !1,
          T = !1,
          D = !0;
        if ("function" != typeof e) throw new TypeError(s);
        return (
          (t = o(t) || 0),
          r(n) &&
            ((S = !!n.leading),
            (T = "maxWait" in n),
            (y = T ? x(o(n.maxWait) || 0, t) : y),
            (D = "trailing" in n ? !!n.trailing : D)),
          (f.cancel = h),
          (f.flush = p),
          f
        );
      }
      function r(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function i(e) {
        return !!e && "object" == typeof e;
      }
      function a(e) {
        return "symbol" == typeof e || (i(e) && b.call(e) == u);
      }
      function o(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return l;
        if (r(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = r(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(c, "");
        var n = h.test(e);
        return n || p.test(e) ? f(e.slice(2), n ? 2 : 8) : d.test(e) ? l : +e;
      }
      var s = "Expected a function",
        l = NaN,
        u = "[object Symbol]",
        c = /^\s+|\s+$/g,
        d = /^[-+]0x[0-9a-f]+$/i,
        h = /^0b[01]+$/i,
        p = /^0o[0-7]+$/i,
        f = parseInt,
        v =
          "object" == typeof global &&
          global &&
          global.Object === Object &&
          global,
        g = "object" == typeof self && self && self.Object === Object && self,
        y = v || g || Function("return this")(),
        m = Object.prototype,
        b = m.toString,
        x = Math.max,
        w = Math.min,
        E = function () {
          return y.Date.now();
        };
      e.exports = n;
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      }
      function i(e, t) {
        return -1 * r(e, t);
      }
      e.exports = { sort: { ascending: r, descending: i } };
    },
    function (e, t, n) {
      "use strict";
      function r() {
        this._obj = {};
      }
      var i = r.prototype;
      (i.set = function (e, t) {
        this._obj[e] = t;
      }),
        (i.delete = function (e) {
          this._obj[e] = null;
        }),
        (i.has = function (e) {
          return null != this._obj[e];
        }),
        (i.get = function (e) {
          return this._obj[e];
        }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = {};
      [
        n(30),
        n(31),
        n(34),
        n(35),
        n(36),
        n(37),
        n(38),
        n(39),
        n(40),
        n(41),
        n(42),
      ].forEach(function (e) {
        r.extend(i, e);
      }),
        (e.exports = i);
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = function (e) {
          return (
            (e = { bfs: e.bfs || !e.dfs, dfs: e.dfs || !e.bfs }),
            function (t, n, i) {
              var a;
              r.plainObject(t) &&
                !r.elementOrCollection(t) &&
                ((a = t),
                (t = a.roots || a.root),
                (n = a.visit),
                (i = a.directed)),
                (i = 2 !== arguments.length || r.fn(n) ? i : n),
                (n = r.fn(n) ? n : function () {});
              for (
                var o,
                  s = this._private.cy,
                  l = (t = r.string(t) ? this.filter(t) : t),
                  u = [],
                  c = [],
                  d = {},
                  h = {},
                  p = {},
                  f = 0,
                  v = this.nodes(),
                  g = this.edges(),
                  y = 0;
                y < l.length;
                y++
              )
                l[y].isNode() &&
                  (u.unshift(l[y]),
                  e.bfs && ((p[l[y].id()] = !0), c.push(l[y])),
                  (h[l[y].id()] = 0));
              for (; 0 !== u.length; ) {
                var l = e.bfs ? u.shift() : u.pop();
                if (e.dfs) {
                  if (p[l.id()]) continue;
                  (p[l.id()] = !0), c.push(l);
                }
                var m,
                  b = h[l.id()],
                  x = d[l.id()],
                  w = null == x ? void 0 : x.connectedNodes().not(l)[0];
                if (!0 === (m = n(l, x, w, f++, b))) {
                  o = l;
                  break;
                }
                if (!1 === m) break;
                for (
                  var E = l
                      .connectedEdges(
                        i
                          ? function (e) {
                              return e.data("source") === l.id();
                            }
                          : void 0
                      )
                      .intersect(g),
                    y = 0;
                  y < E.length;
                  y++
                ) {
                  var P = E[y],
                    C = P.connectedNodes(function (e) {
                      return e.id() !== l.id();
                    }).intersect(v);
                  0 === C.length ||
                    p[C.id()] ||
                    ((C = C[0]),
                    u.push(C),
                    e.bfs && ((p[C.id()] = !0), c.push(C)),
                    (d[C.id()] = P),
                    (h[C.id()] = h[l.id()] + 1));
                }
              }
              for (var S = [], y = 0; y < c.length; y++) {
                var T = c[y],
                  D = d[T.id()];
                D && S.push(D), S.push(T);
              }
              return {
                path: s.collection(S, { unique: !0 }),
                found: s.collection(o),
              };
            }
          );
        },
        a = {
          breadthFirstSearch: i({ bfs: !0 }),
          depthFirstSearch: i({ dfs: !0 }),
        };
      (a.bfs = a.breadthFirstSearch),
        (a.dfs = a.depthFirstSearch),
        (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(9),
        a = {
          dijkstra: function (e, t, n) {
            var a;
            r.plainObject(e) &&
              !r.elementOrCollection(e) &&
              ((a = e), (e = a.root), (t = a.weight), (n = a.directed));
            var o = this._private.cy;
            t = r.fn(t)
              ? t
              : function () {
                  return 1;
                };
            for (
              var s = r.string(e) ? this.filter(e)[0] : e[0],
                l = {},
                u = {},
                c = {},
                d = this.edges().filter(function (e) {
                  return !e.isLoop();
                }),
                h = this.nodes(),
                p = function (e) {
                  return l[e.id()];
                },
                f = new i(function (e, t) {
                  return p(e) - p(t);
                }),
                v = 0;
              v < h.length;
              v++
            ) {
              var g = h[v];
              (l[g.id()] = g.same(s) ? 0 : 1 / 0), f.push(g);
            }
            for (; f.size() > 0; ) {
              var y = f.pop(),
                m = p(y),
                b = y.id();
              if (((c[b] = m), m !== 1 / 0))
                for (
                  var x = y.neighborhood().intersect(h), v = 0;
                  v < x.length;
                  v++
                ) {
                  var w = x[v],
                    E = w.id(),
                    P = (function (e, r) {
                      for (
                        var i,
                          a = (n ? e.edgesTo(r) : e.edgesWith(r)).intersect(d),
                          o = 1 / 0,
                          s = 0;
                        s < a.length;
                        s++
                      ) {
                        var l = a[s],
                          u = t(l);
                        (u < o || !i) && ((o = u), (i = l));
                      }
                      return { edge: i, dist: o };
                    })(y, w),
                    C = m + P.dist;
                  C < p(w) &&
                    (!(function (e, t) {
                      (l[e.id()] = t), f.updateItem(e);
                    })(w, C),
                    (u[E] = { node: y, edge: P.edge }));
                }
            }
            return {
              distanceTo: function (e) {
                var t = r.string(e) ? h.filter(e)[0] : e[0];
                return c[t.id()];
              },
              pathTo: function (e) {
                var t = r.string(e) ? h.filter(e)[0] : e[0],
                  n = [],
                  i = t;
                if (t.length > 0)
                  for (n.unshift(t); u[i.id()]; ) {
                    var a = u[i.id()];
                    n.unshift(a.edge), n.unshift(a.node), (i = a.node);
                  }
                return o.collection(n);
              },
            };
          },
        };
      e.exports = a;
    },
    function (e, t, n) {
      e.exports = n(33);
    },
    function (e, t, n) {
      var r, i, a;
      (function () {
        var n, o, s, l, u, c, d, h, p, f, v, g, y, m, b;
        (s = Math.floor),
          (f = Math.min),
          (o = function (e, t) {
            return e < t ? -1 : e > t ? 1 : 0;
          }),
          (p = function (e, t, n, r, i) {
            var a;
            if ((null == n && (n = 0), null == i && (i = o), n < 0))
              throw new Error("lo must be non-negative");
            for (null == r && (r = e.length); n < r; )
              (a = s((n + r) / 2)), i(t, e[a]) < 0 ? (r = a) : (n = a + 1);
            return [].splice.apply(e, [n, n - n].concat(t)), t;
          }),
          (c = function (e, t, n) {
            return null == n && (n = o), e.push(t), m(e, 0, e.length - 1, n);
          }),
          (u = function (e, t) {
            var n, r;
            return (
              null == t && (t = o),
              (n = e.pop()),
              e.length ? ((r = e[0]), (e[0] = n), b(e, 0, t)) : (r = n),
              r
            );
          }),
          (h = function (e, t, n) {
            var r;
            return null == n && (n = o), (r = e[0]), (e[0] = t), b(e, 0, n), r;
          }),
          (d = function (e, t, n) {
            var r;
            return (
              null == n && (n = o),
              e.length &&
                n(e[0], t) < 0 &&
                ((r = [e[0], t]), (t = r[0]), (e[0] = r[1]), b(e, 0, n)),
              t
            );
          }),
          (l = function (e, t) {
            var n, r, i, a, l, u;
            for (
              null == t && (t = o),
                a = function () {
                  u = [];
                  for (
                    var t = 0, n = s(e.length / 2);
                    0 <= n ? t < n : t > n;
                    0 <= n ? t++ : t--
                  )
                    u.push(t);
                  return u;
                }
                  .apply(this)
                  .reverse(),
                l = [],
                r = 0,
                i = a.length;
              r < i;
              r++
            )
              (n = a[r]), l.push(b(e, n, t));
            return l;
          }),
          (y = function (e, t, n) {
            var r;
            if ((null == n && (n = o), -1 !== (r = e.indexOf(t))))
              return m(e, 0, r, n), b(e, r, n);
          }),
          (v = function (e, t, n) {
            var r, i, a, s, u;
            if ((null == n && (n = o), (i = e.slice(0, t)), !i.length))
              return i;
            for (l(i, n), u = e.slice(t), a = 0, s = u.length; a < s; a++)
              (r = u[a]), d(i, r, n);
            return i.sort(n).reverse();
          }),
          (g = function (e, t, n) {
            var r, i, a, s, c, d, h, v, g;
            if ((null == n && (n = o), 10 * t <= e.length)) {
              if (((a = e.slice(0, t).sort(n)), !a.length)) return a;
              for (
                i = a[a.length - 1], h = e.slice(t), s = 0, d = h.length;
                s < d;
                s++
              )
                (r = h[s]),
                  n(r, i) < 0 &&
                    (p(a, r, 0, null, n), a.pop(), (i = a[a.length - 1]));
              return a;
            }
            for (
              l(e, n), g = [], c = 0, v = f(t, e.length);
              0 <= v ? c < v : c > v;
              0 <= v ? ++c : --c
            )
              g.push(u(e, n));
            return g;
          }),
          (m = function (e, t, n, r) {
            var i, a, s;
            for (
              null == r && (r = o), i = e[n];
              n > t && ((s = (n - 1) >> 1), (a = e[s]), r(i, a) < 0);

            )
              (e[n] = a), (n = s);
            return (e[n] = i);
          }),
          (b = function (e, t, n) {
            var r, i, a, s, l;
            for (
              null == n && (n = o),
                i = e.length,
                l = t,
                a = e[t],
                r = 2 * t + 1;
              r < i;

            )
              (s = r + 1),
                s < i && !(n(e[r], e[s]) < 0) && (r = s),
                (e[t] = e[r]),
                (t = r),
                (r = 2 * t + 1);
            return (e[t] = a), m(e, l, t, n);
          }),
          (n = (function () {
            function e(e) {
              (this.cmp = null != e ? e : o), (this.nodes = []);
            }
            return (
              (e.push = c),
              (e.pop = u),
              (e.replace = h),
              (e.pushpop = d),
              (e.heapify = l),
              (e.updateItem = y),
              (e.nlargest = v),
              (e.nsmallest = g),
              (e.prototype.push = function (e) {
                return c(this.nodes, e, this.cmp);
              }),
              (e.prototype.pop = function () {
                return u(this.nodes, this.cmp);
              }),
              (e.prototype.peek = function () {
                return this.nodes[0];
              }),
              (e.prototype.contains = function (e) {
                return -1 !== this.nodes.indexOf(e);
              }),
              (e.prototype.replace = function (e) {
                return h(this.nodes, e, this.cmp);
              }),
              (e.prototype.pushpop = function (e) {
                return d(this.nodes, e, this.cmp);
              }),
              (e.prototype.heapify = function () {
                return l(this.nodes, this.cmp);
              }),
              (e.prototype.updateItem = function (e) {
                return y(this.nodes, e, this.cmp);
              }),
              (e.prototype.clear = function () {
                return (this.nodes = []);
              }),
              (e.prototype.empty = function () {
                return 0 === this.nodes.length;
              }),
              (e.prototype.size = function () {
                return this.nodes.length;
              }),
              (e.prototype.clone = function () {
                var t;
                return (t = new e()), (t.nodes = this.nodes.slice(0)), t;
              }),
              (e.prototype.toArray = function () {
                return this.nodes.slice(0);
              }),
              (e.prototype.insert = e.prototype.push),
              (e.prototype.top = e.prototype.peek),
              (e.prototype.front = e.prototype.peek),
              (e.prototype.has = e.prototype.contains),
              (e.prototype.copy = e.prototype.clone),
              e
            );
          })()),
          (function (n, o) {
            (i = []),
              (r = o),
              void 0 !== (a = "function" == typeof r ? r.apply(t, i) : r) &&
                (e.exports = a);
          })(0, function () {
            return n;
          });
      }.call(this));
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = {
          kruskal: function (e) {
            function t(e) {
              for (var t = 0; t < a.length; t++) {
                var n = a[t];
                if (n.anySame(e)) return { eles: n, index: t };
              }
            }
            var n = this.cy();
            e = r.fn(e)
              ? e
              : function () {
                  return 1;
                };
            for (
              var i = n.collection(n, []), a = [], o = this.nodes(), s = 0;
              s < o.length;
              s++
            )
              a.push(o[s].collection());
            for (
              var l = this.edges(),
                u = l.toArray().sort(function (t, n) {
                  return e(t) - e(n);
                }),
                s = 0;
              s < u.length;
              s++
            ) {
              var c = u[s],
                d = c.source()[0],
                h = c.target()[0],
                p = t(d),
                f = t(h);
              p.index !== f.index &&
                ((i = i.add(c)),
                (a[p.index] = p.eles.add(f.eles)),
                a.splice(f.index, 1));
            }
            return o.add(i);
          },
        };
      e.exports = i;
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = {
          aStar: function (e) {
            var t = this;
            e = e || {};
            var n = this._private.cy;
            if (null != e && null != e.root) {
              var i = r.string(e.root) ? this.filter(e.root)[0] : e.root[0];
              if (null != e.goal) {
                var a = r.string(e.goal) ? this.filter(e.goal)[0] : e.goal[0];
                if (null != e.heuristic && r.fn(e.heuristic))
                  var o = e.heuristic;
                else
                  var o = function () {
                    return 0;
                  };
                if (null != e.weight && r.fn(e.weight)) var s = e.weight;
                else
                  var s = function (e) {
                    return 1;
                  };
                if (null != e.directed) var l = e.directed;
                else var l = !1;
                var u = i.id(),
                  c = a.id(),
                  d = [],
                  h = [u],
                  p = {},
                  f = {},
                  v = {},
                  g = {};
                (v[u] = 0), (g[u] = o(i));
                for (var y = 0; h.length > 0; ) {
                  var m = (function (e, t) {
                      if (0 !== e.length) {
                        for (var n = 0, r = t[e[0]], i = 1; i < e.length; i++) {
                          var a = t[e[i]];
                          a < r && ((r = a), (n = i));
                        }
                        return n;
                      }
                    })(h, g),
                    b = n.getElementById(h[m]),
                    x = b.id();
                  if ((y++, x == c)) {
                    var w = (function e(t, r, i, a) {
                      if (t == r) return a.unshift(n.getElementById(r)), a;
                      if (r in i) {
                        var o = i[r],
                          s = f[r];
                        return (
                          a.unshift(n.getElementById(s)),
                          a.unshift(n.getElementById(r)),
                          e(t, o, i, a)
                        );
                      }
                    })(u, c, p, []);
                    return {
                      found: !0,
                      distance: v[x],
                      path: t.spawn(w),
                      steps: y,
                    };
                  }
                  d.push(x), h.splice(m, 1);
                  for (var E = b._private.edges, P = 0; P < E.length; P++) {
                    var C = E[P];
                    if (
                      this.hasElementWithId(C.id()) &&
                      (!l || C.data("source") === x)
                    ) {
                      var S = C.source(),
                        T = C.target(),
                        D = S.id() !== x ? S : T,
                        k = D.id();
                      if (this.hasElementWithId(k) && -1 == d.indexOf(k)) {
                        var _ = v[x] + s(C);
                        -1 != h.indexOf(k)
                          ? _ < v[k] &&
                            ((v[k] = _), (g[k] = _ + o(D)), (p[k] = x))
                          : ((v[k] = _),
                            (g[k] = _ + o(D)),
                            h.push(k),
                            (p[k] = x),
                            (f[k] = C.id()));
                      }
                    }
                  }
                }
                return { found: !1, distance: void 0, path: void 0, steps: y };
              }
            }
          },
        };
      e.exports = i;
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = {
          floydWarshall: function (e) {
            e = e || {};
            var t = this.cy();
            if (null != e.weight && r.fn(e.weight)) var n = e.weight;
            else
              var n = function (e) {
                return 1;
              };
            if (null != e.directed) var i = e.directed;
            else var i = !1;
            for (
              var a = this.edges().stdFilter(function (e) {
                  return !e.isLoop();
                }),
                o = this.nodes(),
                s = o.length,
                l = {},
                u = 0;
              u < s;
              u++
            )
              l[o[u].id()] = u;
            for (var c = [], u = 0; u < s; u++) {
              for (var d = new Array(s), h = 0; h < s; h++)
                d[h] = u == h ? 0 : 1 / 0;
              c.push(d);
            }
            var p = [],
              f = [],
              v = function (e) {
                for (var t = 0; t < s; t++) {
                  for (var n = new Array(s), r = 0; r < s; r++) n[r] = void 0;
                  e.push(n);
                }
              };
            v(p), v(f);
            for (var u = 0; u < a.length; u++) {
              var g = l[a[u].source().id()],
                y = l[a[u].target().id()],
                m = n(a[u]);
              c[g][y] > m && ((c[g][y] = m), (p[g][y] = y), (f[g][y] = a[u]));
            }
            if (!i)
              for (var u = 0; u < a.length; u++) {
                var g = l[a[u].target().id()],
                  y = l[a[u].source().id()],
                  m = n(a[u]);
                c[g][y] > m && ((c[g][y] = m), (p[g][y] = y), (f[g][y] = a[u]));
              }
            for (var b = 0; b < s; b++)
              for (var u = 0; u < s; u++)
                for (var h = 0; h < s; h++)
                  c[u][b] + c[b][h] < c[u][h] &&
                    ((c[u][h] = c[u][b] + c[b][h]), (p[u][h] = p[u][b]));
            for (var x = [], u = 0; u < s; u++) x.push(o[u].id());
            return {
              distance: function (e, n) {
                if (r.string(e)) var i = t.filter(e)[0].id();
                else var i = e.id();
                if (r.string(n)) var a = t.filter(n)[0].id();
                else var a = n.id();
                return c[l[i]][l[a]];
              },
              path: function (e, n) {
                if (r.string(e)) var i = t.filter(e)[0].id();
                else var i = e.id();
                if (r.string(n)) var a = t.filter(n)[0].id();
                else var a = n.id();
                var o = (function (e, n, r, i, a) {
                  if (e === n) return t.getElementById(i[e]);
                  if (void 0 !== r[e][n]) {
                    for (var o = [t.getElementById(i[e])], s = e; e !== n; ) {
                      (s = e), (e = r[e][n]);
                      var l = a[s][e];
                      o.push(l), o.push(t.getElementById(i[e]));
                    }
                    return o;
                  }
                })(l[i], l[a], p, x, f);
                return t.collection(o);
              },
            };
          },
        };
      e.exports = i;
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(1),
        a = {
          bellmanFord: function (e) {
            var t = this;
            if (((e = e || {}), null != e.weight && r.fn(e.weight)))
              var n = e.weight;
            else
              var n = function (e) {
                return 1;
              };
            if (null != e.directed) var a = e.directed;
            else var a = !1;
            if (null != e.root) {
              if (r.string(e.root)) var o = this.filter(e.root)[0];
              else var o = e.root[0];
              for (
                var s = this._private.cy,
                  l = this.edges().stdFilter(function (e) {
                    return !e.isLoop();
                  }),
                  u = this.nodes(),
                  c = u.length,
                  d = {},
                  h = 0;
                h < c;
                h++
              )
                d[u[h].id()] = h;
              for (var p = [], f = [], v = [], h = 0; h < c; h++)
                u[h].id() === o.id() ? (p[h] = 0) : (p[h] = 1 / 0),
                  (f[h] = void 0);
              for (var g = !1, h = 1; h < c; h++) {
                g = !1;
                for (var y = 0; y < l.length; y++) {
                  var m = d[l[y].source().id()],
                    b = d[l[y].target().id()],
                    x = n(l[y]),
                    w = p[m] + x;
                  if (
                    (w < p[b] &&
                      ((p[b] = w), (f[b] = m), (v[b] = l[y]), (g = !0)),
                    !a)
                  ) {
                    var w = p[b] + x;
                    w < p[m] &&
                      ((p[m] = w), (f[m] = b), (v[m] = l[y]), (g = !0));
                  }
                }
                if (!g) break;
              }
              if (g)
                for (var y = 0; y < l.length; y++) {
                  var m = d[l[y].source().id()],
                    b = d[l[y].target().id()],
                    x = n(l[y]);
                  if (p[m] + x < p[b])
                    return (
                      i.error(
                        "Graph contains a negative weight cycle for Bellman-Ford"
                      ),
                      {
                        pathTo: void 0,
                        distanceTo: void 0,
                        hasNegativeWeightCycle: !0,
                      }
                    );
                }
              for (var E = [], h = 0; h < c; h++) E.push(u[h].id());
              return {
                distanceTo: function (e) {
                  if (r.string(e)) var t = s.filter(e)[0].id();
                  else var t = e.id();
                  return p[d[t]];
                },
                pathTo: function (e) {
                  if (r.string(e)) var n = s.filter(e)[0].id();
                  else var n = e.id();
                  var i = [],
                    a = (function (e, t, n, r, i, a) {
                      for (;;) {
                        if (
                          (i.push(s.getElementById(r[n])),
                          i.push(a[n]),
                          t === n)
                        )
                          return i;
                        var o = e[n];
                        if (void 0 === o) return;
                        n = o;
                      }
                    })(f, d[o.id()], d[n], E, i, v);
                  return null != a && a.reverse(), t.spawn(a);
                },
                hasNegativeWeightCycle: !1,
              };
            }
          },
        };
      e.exports = a;
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = {
          kargerStein: function (e) {
            var t = this;
            e = e || {};
            var n = function (e, t, n) {
                for (
                  var r = n[e],
                    i = r[1],
                    a = r[2],
                    o = t[i],
                    s = t[a],
                    l = n.filter(function (e) {
                      return (
                        (t[e[1]] !== o || t[e[2]] !== s) &&
                        (t[e[1]] !== s || t[e[2]] !== o)
                      );
                    }),
                    u = 0;
                  u < l.length;
                  u++
                ) {
                  var c = l[u];
                  c[1] === s
                    ? ((l[u] = c.slice(0)), (l[u][1] = o))
                    : c[2] === s && ((l[u] = c.slice(0)), (l[u][2] = o));
                }
                for (var u = 0; u < t.length; u++) t[u] === s && (t[u] = o);
                return l;
              },
              i = function e(t, r, i, a) {
                if (i <= a) return r;
                var o = Math.floor(Math.random() * r.length);
                return e(t, n(o, t, r), i - 1, a);
              },
              a = this._private.cy,
              o = this.edges().stdFilter(function (e) {
                return !e.isLoop();
              }),
              s = this.nodes(),
              l = s.length,
              u = o.length,
              c = Math.ceil(Math.pow(Math.log(l) / Math.LN2, 2)),
              d = Math.floor(l / Math.sqrt(2));
            if (l < 2)
              return void r.error(
                "At least 2 nodes are required for Karger-Stein algorithm"
              );
            for (var h = {}, p = 0; p < l; p++) h[s[p].id()] = p;
            for (var f = [], p = 0; p < u; p++) {
              var v = o[p];
              f.push([p, h[v.source().id()], h[v.target().id()]]);
            }
            for (var g, y = 1 / 0, m = [], p = 0; p < l; p++) m.push(p);
            for (var b = 0; b <= c; b++) {
              var x = m.slice(0),
                w = i(x, f, l, d),
                E = x.slice(0),
                P = i(x, w, d, 2),
                C = i(E, w, d, 2);
              P.length <= C.length && P.length < y
                ? ((y = P.length), (g = [P, x]))
                : C.length <= P.length &&
                  C.length < y &&
                  ((y = C.length), (g = [C, E]));
            }
            for (
              var S = g[0].map(function (e) {
                  return o[e[0]];
                }),
                T = [],
                D = [],
                k = g[1][0],
                p = 0;
              p < g[1].length;
              p++
            ) {
              g[1][p] === k ? T.push(s[p]) : D.push(s[p]);
            }
            return {
              cut: t.spawn(a, S),
              partition1: t.spawn(T),
              partition2: t.spawn(D),
            };
          },
        };
      e.exports = i;
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = {
          pageRank: function (e) {
            e = e || {};
            if (null != e && null != e.dampingFactor) var t = e.dampingFactor;
            else var t = 0.8;
            if (null != e && null != e.precision) var n = e.precision;
            else var n = 1e-6;
            if (null != e && null != e.iterations) var i = e.iterations;
            else var i = 200;
            if (null != e && null != e.weight && r.fn(e.weight))
              var a = e.weight;
            else
              var a = function (e) {
                return 1;
              };
            for (
              var o = this._private.cy,
                s = this.edges().stdFilter(function (e) {
                  return !e.isLoop();
                }),
                l = this.nodes(),
                u = l.length,
                c = s.length,
                d = {},
                h = 0;
              h < u;
              h++
            )
              d[l[h].id()] = h;
            for (var p = [], f = [], v = (1 - t) / u, h = 0; h < u; h++) {
              for (var g = [], y = 0; y < u; y++) g.push(0);
              p.push(g), f.push(0);
            }
            for (var h = 0; h < c; h++) {
              var m = s[h],
                b = d[m.source().id()],
                x = d[m.target().id()],
                w = a(m);
              (p[x][b] += w), (f[b] += w);
            }
            for (var E = 1 / u + v, y = 0; y < u; y++)
              if (0 === f[y]) for (var h = 0; h < u; h++) p[h][y] = E;
              else for (var h = 0; h < u; h++) p[h][y] = p[h][y] / f[y] + v;
            for (var P, C = [], S = [], h = 0; h < u; h++) C.push(1), S.push(0);
            for (var T = 0; T < i; T++) {
              for (var D = S.slice(0), h = 0; h < u; h++)
                for (var y = 0; y < u; y++) D[h] += p[h][y] * C[y];
              !(function (e) {
                for (var t = e.length, n = 0, r = 0; r < t; r++) n += e[r];
                for (var r = 0; r < t; r++) e[r] = e[r] / n;
              })(D),
                (P = C),
                (C = D);
              for (var k = 0, h = 0; h < u; h++) k += Math.pow(P[h] - C[h], 2);
              if (k < n) break;
            }
            return {
              rank: function (e) {
                if (r.string(e)) var t = o.filter(e)[0].id();
                else var t = e.id();
                return C[d[t]];
              },
            };
          },
        };
      e.exports = i;
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(1),
        a = {
          degreeCentralityNormalized: function (e) {
            e = e || {};
            var t = this.cy();
            if (null != e.directed) var n = e.directed;
            else var n = !1;
            var a = this.nodes(),
              o = a.length;
            if (n) {
              for (var s = {}, l = {}, u = 0, c = 0, d = 0; d < o; d++) {
                var h = a[d],
                  p = this.degreeCentrality(i.extend({}, e, { root: h }));
                u < p.indegree && (u = p.indegree),
                  c < p.outdegree && (c = p.outdegree),
                  (s[h.id()] = p.indegree),
                  (l[h.id()] = p.outdegree);
              }
              return {
                indegree: function (e) {
                  if (0 == u) return 0;
                  if (r.string(e)) var e = t.filter(e)[0].id();
                  else var e = e.id();
                  return s[e] / u;
                },
                outdegree: function (e) {
                  if (0 == c) return 0;
                  if (r.string(e)) var e = t.filter(e)[0].id();
                  else var e = e.id();
                  return l[e] / c;
                },
              };
            }
            for (var f = {}, v = 0, d = 0; d < o; d++) {
              var h = a[d],
                p = this.degreeCentrality(i.extend({}, e, { root: h }));
              v < p.degree && (v = p.degree), (f[h.id()] = p.degree);
            }
            return {
              degree: function (e) {
                if (0 == v) return 0;
                if (r.string(e)) var e = t.filter(e)[0].id();
                else var e = e.id();
                return f[e] / v;
              },
            };
          },
          degreeCentrality: function (e) {
            e = e || {};
            var t = this;
            if (null != e && null != e.root) {
              var n = r.string(e.root) ? this.filter(e.root)[0] : e.root[0];
              if (null != e.weight && r.fn(e.weight)) var i = e.weight;
              else
                var i = function (e) {
                  return 1;
                };
              if (null != e.directed) var a = e.directed;
              else var a = !1;
              if (null != e.alpha && r.number(e.alpha)) var o = e.alpha;
              else o = 0;
              if (a) {
                for (
                  var s = n
                      .connectedEdges('edge[target = "' + n.id() + '"]')
                      .intersection(t),
                    l = n
                      .connectedEdges('edge[source = "' + n.id() + '"]')
                      .intersection(t),
                    u = s.length,
                    c = l.length,
                    d = 0,
                    h = 0,
                    p = 0;
                  p < s.length;
                  p++
                ) {
                  var f = s[p];
                  d += i(f);
                }
                for (var p = 0; p < l.length; p++) {
                  var f = l[p];
                  h += i(f);
                }
                return {
                  indegree: Math.pow(u, 1 - o) * Math.pow(d, o),
                  outdegree: Math.pow(c, 1 - o) * Math.pow(h, o),
                };
              }
              for (
                var v = n.connectedEdges().intersection(t),
                  g = v.length,
                  y = 0,
                  p = 0;
                p < v.length;
                p++
              ) {
                var f = v[p];
                y += i(f);
              }
              return { degree: Math.pow(g, 1 - o) * Math.pow(y, o) };
            }
          },
        };
      (a.dc = a.degreeCentrality),
        (a.dcn = a.degreeCentralityNormalised = a.degreeCentralityNormalized),
        (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = {
          closenessCentralityNormalized: function (e) {
            e = e || {};
            var t = this.cy(),
              n = e.harmonic;
            void 0 === n && (n = !0);
            for (
              var i = {},
                a = 0,
                o = this.nodes(),
                s = this.floydWarshall({
                  weight: e.weight,
                  directed: e.directed,
                }),
                l = 0;
              l < o.length;
              l++
            ) {
              for (var u = 0, c = 0; c < o.length; c++)
                if (l != c) {
                  var d = s.distance(o[l], o[c]);
                  u += n ? 1 / d : d;
                }
              n || (u = 1 / u), a < u && (a = u), (i[o[l].id()] = u);
            }
            return {
              closeness: function (e) {
                if (0 == a) return 0;
                if (r.string(e)) var e = t.filter(e)[0].id();
                else var e = e.id();
                return i[e] / a;
              },
            };
          },
          closenessCentrality: function (e) {
            if (((e = e || {}), null != e.root)) {
              if (r.string(e.root)) var t = this.filter(e.root)[0];
              else var t = e.root[0];
              if (null != e.weight && r.fn(e.weight)) var n = e.weight;
              else
                var n = function () {
                  return 1;
                };
              if (null != e.directed && r.bool(e.directed)) var i = e.directed;
              else var i = !1;
              var a = e.harmonic;
              void 0 === a && (a = !0);
              for (
                var o = this.dijkstra({ root: t, weight: n, directed: i }),
                  s = 0,
                  l = this.nodes(),
                  u = 0;
                u < l.length;
                u++
              )
                if (l[u].id() != t.id()) {
                  var c = o.distanceTo(l[u]);
                  s += a ? 1 / c : c;
                }
              return a ? s : 1 / s;
            }
          },
        };
      (i.cc = i.closenessCentrality),
        (i.ccn = i.closenessCentralityNormalised =
          i.closenessCentralityNormalized),
        (e.exports = i);
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(9),
        a = {
          betweennessCentrality: function (e) {
            e = e || {};
            var t, n;
            r.fn(e.weight) ? ((n = e.weight), (t = !0)) : (t = !1);
            for (
              var a = null != e.directed && e.directed,
                o = this._private.cy,
                s = this.nodes(),
                l = {},
                u = {},
                c = 0,
                d = {
                  set: function (e, t) {
                    (u[e] = t), t > c && (c = t);
                  },
                  get: function (e) {
                    return u[e];
                  },
                },
                h = 0;
              h < s.length;
              h++
            ) {
              var p = s[h],
                f = p.id();
              (l[f] = a ? p.outgoers().nodes() : p.openNeighborhood().nodes()),
                d.set(f, 0);
            }
            for (var v = 0; v < s.length; v++) {
              for (
                var g = s[v].id(),
                  y = [],
                  m = {},
                  b = {},
                  x = {},
                  w = new i(function (e, t) {
                    return x[e] - x[t];
                  }),
                  h = 0;
                h < s.length;
                h++
              ) {
                var f = s[h].id();
                (m[f] = []), (b[f] = 0), (x[f] = 1 / 0);
              }
              for (b[g] = 1, x[g] = 0, w.push(g); !w.empty(); ) {
                var p = w.pop();
                if ((y.push(p), t))
                  for (var E = 0; E < l[p].length; E++) {
                    var P,
                      C = l[p][E],
                      S = o.getElementById(p);
                    P =
                      S.edgesTo(C).length > 0
                        ? S.edgesTo(C)[0]
                        : C.edgesTo(S)[0];
                    var T = n(P);
                    (C = C.id()),
                      x[C] > x[p] + T &&
                        ((x[C] = x[p] + T),
                        w.nodes.indexOf(C) < 0 ? w.push(C) : w.updateItem(C),
                        (b[C] = 0),
                        (m[C] = [])),
                      x[C] == x[p] + T && ((b[C] = b[C] + b[p]), m[C].push(p));
                  }
                else
                  for (var E = 0; E < l[p].length; E++) {
                    var C = l[p][E].id();
                    x[C] == 1 / 0 && (w.push(C), (x[C] = x[p] + 1)),
                      x[C] == x[p] + 1 && ((b[C] = b[C] + b[p]), m[C].push(p));
                  }
              }
              for (var D = {}, h = 0; h < s.length; h++) D[s[h].id()] = 0;
              for (; y.length > 0; )
                for (var C = y.pop(), E = 0; E < m[C].length; E++) {
                  var p = m[C][E];
                  (D[p] = D[p] + (b[p] / b[C]) * (1 + D[C])),
                    C != s[v].id() && d.set(C, d.get(C) + D[C]);
                }
            }
            var k = {
              betweenness: function (e) {
                if (r.string(e)) var e = o.filter(e).id();
                else var e = e.id();
                return d.get(e);
              },
              betweennessNormalized: function (e) {
                if (0 == c) return 0;
                if (r.string(e)) var e = o.filter(e).id();
                else var e = e.id();
                return d.get(e) / c;
              },
            };
            return (k.betweennessNormalised = k.betweennessNormalized), k;
          },
        };
      (a.bc = a.betweennessCentrality), (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      var r = n(4),
        i = {
          animate: r.animate(),
          animation: r.animation(),
          animated: r.animated(),
          clearQueue: r.clearQueue(),
          delay: r.delay(),
          delayAnimation: r.delayAnimation(),
          stop: r.stop(),
        };
      e.exports = i;
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = n(45),
        a = n(2),
        o = n(0),
        s = {
          animated: function () {
            return function () {
              var e = this,
                t = void 0 !== e.length,
                n = t ? e : [e];
              if (!(this._private.cy || this).styleEnabled()) return !1;
              var r = n[0];
              return r ? r._private.animation.current.length > 0 : void 0;
            };
          },
          clearQueue: function () {
            return function () {
              var e = this,
                t = void 0 !== e.length,
                n = t ? e : [e];
              if (!(this._private.cy || this).styleEnabled()) return this;
              for (var r = 0; r < n.length; r++) {
                n[r]._private.animation.queue = [];
              }
              return this;
            };
          },
          delay: function () {
            return function (e, t) {
              return (this._private.cy || this).styleEnabled()
                ? this.animate({ delay: e, duration: e, complete: t })
                : this;
            };
          },
          delayAnimation: function () {
            return function (e, t) {
              return (this._private.cy || this).styleEnabled()
                ? this.animation({ delay: e, duration: e, complete: t })
                : this;
            };
          },
          animation: function () {
            return function (e, t) {
              var n = this,
                s = void 0 !== n.length,
                l = s ? n : [n],
                u = this._private.cy || this,
                c = !s,
                d = !c;
              if (!u.styleEnabled()) return this;
              var h = u.style();
              if (((e = r.assign({}, e, t)), 0 === Object.keys(e).length))
                return new i(l[0], e);
              switch (
                (void 0 === e.duration && (e.duration = 400), e.duration)
              ) {
                case "slow":
                  e.duration = 600;
                  break;
                case "fast":
                  e.duration = 200;
              }
              if (
                (d &&
                  ((e.style = h.getPropsList(e.style || e.css)),
                  (e.css = void 0)),
                d && null != e.renderedPosition)
              ) {
                var p = e.renderedPosition,
                  f = u.pan(),
                  v = u.zoom();
                e.position = a.renderedToModelPosition(p, v, f);
              }
              if (c && null != e.panBy) {
                var g = e.panBy,
                  y = u.pan();
                e.pan = { x: y.x + g.x, y: y.y + g.y };
              }
              var m = e.center || e.centre;
              if (c && null != m) {
                var b = u.getCenterPan(m.eles, e.zoom);
                null != b && (e.pan = b);
              }
              if (c && null != e.fit) {
                var x = e.fit,
                  w = u.getFitViewport(x.eles || x.boundingBox, x.padding);
                null != w && ((e.pan = w.pan), (e.zoom = w.zoom));
              }
              if (c && o.plainObject(e.zoom)) {
                var E = u.getZoomedViewport(e.zoom);
                null != E &&
                  (E.zoomed && (e.zoom = E.zoom), E.panned && (e.pan = E.pan));
              }
              return new i(l[0], e);
            };
          },
          animate: function () {
            return function (e, t) {
              var n = this,
                i = void 0 !== n.length,
                a = i ? n : [n];
              if (!(this._private.cy || this).styleEnabled()) return this;
              t && (e = r.extend({}, e, t));
              for (var o = 0; o < a.length; o++) {
                var s = a[o],
                  l = s.animated() && (void 0 === e.queue || e.queue);
                s.animation(e, l ? { queue: !0 } : void 0).play();
              }
              return this;
            };
          },
          stop: function () {
            return function (e, t) {
              var n = this,
                r = void 0 !== n.length,
                i = r ? n : [n],
                a = this._private.cy || this;
              if (!a.styleEnabled()) return this;
              for (var o = 0; o < i.length; o++) {
                for (
                  var s = i[o], l = s._private, u = l.animation.current, c = 0;
                  c < u.length;
                  c++
                ) {
                  var d = u[c],
                    h = d._private;
                  t && (h.duration = 0);
                }
                e && (l.animation.queue = []), t || (l.animation.current = []);
              }
              return a.notify({ eles: this, type: "draw" }), this;
            };
          },
        };
      e.exports = s;
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = n(0),
        a = n(5),
        o = function (e, t, n) {
          var a = (this._private = r.extend({ duration: 1e3 }, t, n));
          (a.target = e),
            (a.style = a.style || a.css),
            (a.started = !1),
            (a.playing = !1),
            (a.hooked = !1),
            (a.applying = !1),
            (a.progress = 0),
            (a.completes = []),
            (a.frames = []),
            a.complete && i.fn(a.complete) && a.completes.push(a.complete),
            (this.length = 1),
            (this[0] = this);
        },
        s = o.prototype;
      r.extend(s, {
        instanceString: function () {
          return "animation";
        },
        hook: function () {
          var e = this._private;
          if (!e.hooked) {
            var t = void 0,
              n = e.target._private.animation;
            (t = e.queue ? n.queue : n.current),
              t.push(this),
              i.elementOrCollection(e.target) &&
                e.target.cy().addToAnimationPool(e.target),
              (e.hooked = !0);
          }
          return this;
        },
        play: function () {
          var e = this._private;
          return (
            1 === e.progress && (e.progress = 0),
            (e.playing = !0),
            (e.started = !1),
            (e.stopped = !1),
            this.hook(),
            this
          );
        },
        playing: function () {
          return this._private.playing;
        },
        apply: function () {
          var e = this._private;
          return (
            (e.applying = !0),
            (e.started = !1),
            (e.stopped = !1),
            this.hook(),
            this
          );
        },
        applying: function () {
          return this._private.applying;
        },
        pause: function () {
          var e = this._private;
          return (e.playing = !1), (e.started = !1), this;
        },
        stop: function () {
          var e = this._private;
          return (e.playing = !1), (e.started = !1), (e.stopped = !0), this;
        },
        rewind: function () {
          return this.progress(0);
        },
        fastforward: function () {
          return this.progress(1);
        },
        time: function (e) {
          var t = this._private;
          return void 0 === e
            ? t.progress * t.duration
            : this.progress(e / t.duration);
        },
        progress: function (e) {
          var t = this._private,
            n = t.playing;
          return void 0 === e
            ? t.progress
            : (n && this.pause(),
              (t.progress = e),
              (t.started = !1),
              n && this.play(),
              this);
        },
        completed: function () {
          return 1 === this._private.progress;
        },
        reverse: function () {
          var e = this._private,
            t = e.playing;
          t && this.pause(), (e.progress = 1 - e.progress), (e.started = !1);
          var n = function (t, n) {
            var r = e[t];
            null != r && ((e[t] = e[n]), (e[n] = r));
          };
          if (
            (n("zoom", "startZoom"),
            n("pan", "startPan"),
            n("position", "startPosition"),
            e.style)
          )
            for (var r = 0; r < e.style.length; r++) {
              var i = e.style[r],
                a = i.name,
                o = e.startStyle[a];
              (e.startStyle[a] = i), (e.style[r] = o);
            }
          return t && this.play(), this;
        },
        promise: function (e) {
          var t = this._private,
            n = void 0;
          switch (e) {
            case "frame":
              n = t.frames;
              break;
            default:
            case "complete":
            case "completed":
              n = t.completes;
          }
          return new a(function (e, t) {
            n.push(function () {
              e();
            });
          });
        },
      }),
        (s.complete = s.completed),
        (e.exports = o);
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var i = n(1),
        a = n(0),
        o = {
          data: function (e) {
            var t = {
              field: "data",
              bindingEvent: "data",
              allowBinding: !1,
              allowSetting: !1,
              allowGetting: !1,
              settingEvent: "data",
              settingTriggersEvent: !1,
              triggerFnName: "trigger",
              immutableKeys: {},
              updateStyle: !1,
              beforeGet: function (e) {},
              beforeSet: function (e, t) {},
              onSet: function (e) {},
              canSet: function (e) {
                return !0;
              },
            };
            return (
              (e = i.extend({}, t, e)),
              function (t, n) {
                var i = e,
                  o = this,
                  s = void 0 !== o.length,
                  l = s ? o : [o],
                  u = s ? o[0] : o;
                if (a.string(t)) {
                  if (i.allowGetting && void 0 === n) {
                    var c = void 0;
                    return (
                      u && (i.beforeGet(u), (c = u._private[i.field][t])), c
                    );
                  }
                  if (i.allowSetting && void 0 !== n) {
                    if (!i.immutableKeys[t]) {
                      var d = r({}, t, n);
                      i.beforeSet(o, d);
                      for (var h = 0, p = l.length; h < p; h++) {
                        var f = l[h];
                        i.canSet(f) && (f._private[i.field][t] = n);
                      }
                      i.updateStyle && o.updateStyle(),
                        i.onSet(o),
                        i.settingTriggersEvent &&
                          o[i.triggerFnName](i.settingEvent);
                    }
                  }
                } else if (i.allowSetting && a.plainObject(t)) {
                  var v = t,
                    g = void 0,
                    y = void 0,
                    m = Object.keys(v);
                  i.beforeSet(o, v);
                  for (var b = 0; b < m.length; b++) {
                    (g = m[b]), (y = v[g]);
                    var x = !i.immutableKeys[g];
                    if (x)
                      for (var w = 0; w < l.length; w++) {
                        var E = l[w];
                        i.canSet(E) && (E._private[i.field][g] = y);
                      }
                  }
                  i.updateStyle && o.updateStyle(),
                    i.onSet(o),
                    i.settingTriggersEvent &&
                      o[i.triggerFnName](i.settingEvent);
                } else if (i.allowBinding && a.fn(t)) {
                  var P = t;
                  o.on(i.bindingEvent, P);
                } else if (i.allowGetting && void 0 === t) {
                  var C = void 0;
                  return u && (i.beforeGet(u), (C = u._private[i.field])), C;
                }
                return o;
              }
            );
          },
          removeData: function (e) {
            var t = {
              field: "data",
              event: "data",
              triggerFnName: "trigger",
              triggerEvent: !1,
              immutableKeys: {},
            };
            return (
              (e = i.extend({}, t, e)),
              function (t) {
                var n = e,
                  r = this,
                  i = void 0 !== r.length,
                  o = i ? r : [r];
                if (a.string(t)) {
                  for (
                    var s = t.split(/\s+/), l = s.length, u = 0;
                    u < l;
                    u++
                  ) {
                    var c = s[u];
                    if (!a.emptyString(c)) {
                      if (!n.immutableKeys[c])
                        for (var d = 0, h = o.length; d < h; d++)
                          o[d]._private[n.field][c] = void 0;
                    }
                  }
                  n.triggerEvent && r[n.triggerFnName](n.event);
                } else if (void 0 === t) {
                  for (var p = 0, f = o.length; p < f; p++)
                    for (
                      var v = o[p]._private[n.field], g = Object.keys(v), y = 0;
                      y < g.length;
                      y++
                    ) {
                      var m = g[y],
                        b = !n.immutableKeys[m];
                      b && (v[m] = void 0);
                    }
                  n.triggerEvent && r[n.triggerFnName](n.event);
                }
                return r;
              }
            );
          },
        };
      e.exports = o;
    },
    function (e, t, n) {
      "use strict";
      var r = n(5),
        i = {
          eventAliasesOn: function (e) {
            var t = e;
            (t.addListener = t.listen = t.bind = t.on),
              (t.unlisten = t.unbind = t.off = t.removeListener),
              (t.trigger = t.emit),
              (t.pon = t.promiseOn =
                function (e, t) {
                  var n = this,
                    i = Array.prototype.slice.call(arguments, 0);
                  return new r(function (e, t) {
                    var r = function (t) {
                        n.off.apply(n, o), e(t);
                      },
                      a = i.concat([r]),
                      o = a.concat([]);
                    n.on.apply(n, a);
                  });
                });
          },
        };
      e.exports = i;
    },
    function (e, t, n) {
      "use strict";
      var r = n(8),
        i = {
          classes: function (e) {
            e = (e || "").match(/\S+/g) || [];
            for (var t = this, n = [], i = new r(e), a = 0; a < t.length; a++)
              !(function (e) {
                var a = t[e],
                  o = a._private,
                  s = o.classes,
                  l = !1;
                i.forEach(function (e) {
                  s.has(e) || (l = !0);
                }),
                  l ||
                    s.forEach(function (e) {
                      i.has(e) || (l = !0);
                    }),
                  l && ((o.classes = new r(i)), n.push(a));
              })(a);
            return n.length > 0 && this.spawn(n).updateStyle().emit("class"), t;
          },
          addClass: function (e) {
            return this.toggleClass(e, !0);
          },
          hasClass: function (e) {
            var t = this[0];
            return null != t && t._private.classes.has(e);
          },
          toggleClass: function (e, t) {
            for (
              var n = e.match(/\S+/g) || [],
                r = this,
                i = [],
                a = 0,
                o = r.length;
              a < o;
              a++
            )
              for (var s = r[a], l = !1, u = 0; u < n.length; u++) {
                var c = n[u],
                  d = s._private.classes,
                  h = d.has(c),
                  p = t || (void 0 === t && !h);
                p
                  ? (d.add(c), h || l || (i.push(s), (l = !0)))
                  : (d.delete(c), h && !l && (i.push(s), (l = !0)));
              }
            return i.length > 0 && this.spawn(i).updateStyle().emit("class"), r;
          },
          removeClass: function (e) {
            return this.toggleClass(e, !1);
          },
          flashClass: function (e, t) {
            var n = this;
            if (null == t) t = 250;
            else if (0 === t) return n;
            return (
              n.addClass(e),
              setTimeout(function () {
                n.removeClass(e);
              }, t),
              n
            );
          },
        };
      e.exports = i;
    },
    function (e, t, n) {
      "use strict";
      var r = (n(0), n(6)),
        i = {
          allAre: function (e) {
            var t = new r(e);
            return this.every(function (e) {
              return t.matches(e);
            });
          },
          is: function (e) {
            var t = new r(e);
            return this.some(function (e) {
              return t.matches(e);
            });
          },
          some: function (e, t) {
            for (var n = 0; n < this.length; n++) {
              if (t ? e.apply(t, [this[n], n, this]) : e(this[n], n, this))
                return !0;
            }
            return !1;
          },
          every: function (e, t) {
            for (var n = 0; n < this.length; n++) {
              if (!(t ? e.apply(t, [this[n], n, this]) : e(this[n], n, this)))
                return !1;
            }
            return !0;
          },
          same: function (e) {
            return (
              (e = this.cy().collection(e)),
              this.length === e.length &&
                this.every(function (t) {
                  return e.hasElementWithId(t.id());
                })
            );
          },
          anySame: function (e) {
            return (
              (e = this.cy().collection(e)),
              this.some(function (t) {
                return e.hasElementWithId(t.id());
              })
            );
          },
          allAreNeighbors: function (e) {
            e = this.cy().collection(e);
            var t = this.neighborhood();
            return e.every(function (e) {
              return t.hasElementWithId(e.id());
            });
          },
          contains: function (e) {
            e = this.cy().collection(e);
            var t = this;
            return e.every(function (e) {
              return t.hasElementWithId(e.id());
            });
          },
        };
      (i.allAreNeighbours = i.allAreNeighbors),
        (i.has = i.contains),
        (e.exports = i);
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = n(51),
        a = n(10),
        o = function (e) {
          for (
            var t = void 0, n = void 0, r = void 0, a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a],
              s = o.name,
              l = e.match(o.regexObj);
            if (null != l) {
              (n = l), (t = o), (r = s);
              var u = l[0];
              e = e.substring(u.length);
              break;
            }
          }
          return { expr: t, match: n, name: r, remaining: e };
        },
        s = function (e) {
          var t = e.match(/^\s+/);
          if (t) {
            var n = t[0];
            e = e.substring(n.length);
          }
          return e;
        },
        l = function (e) {
          var t = this,
            n = (t._private.selectorText = e),
            i = (t[0] = a());
          for (t.length = 1, n = s(n); ; ) {
            var l = o(n);
            if (null == l.expr)
              return r.error("The selector `" + e + "`is invalid"), !1;
            var u = l.match.slice(1),
              c = l.expr.populate(t, i, u);
            if (!1 === c) return !1;
            if ((null != c && (i = c), (n = l.remaining), n.match(/^\s*$/)))
              break;
          }
          for (var d = 0; d < t.length; d++) {
            var h = t[d];
            if (null != h.subject) {
              for (; h.subject !== h; )
                if (null != h.parent) {
                  var p = h.parent,
                    f = h;
                  (f.parent = null), (p.child = f), (h = p);
                } else {
                  if (null == h.ancestor)
                    return h.source || h.target || h.connectedNodes
                      ? (r.error(
                          "The selector `" +
                            t.text() +
                            "` can not contain a subject selector that applies to the source or target of an edge selector"
                        ),
                        !1)
                      : (r.error(
                          "When adjusting references for the selector `" +
                            t.text() +
                            "`, neither parent nor ancestor was found"
                        ),
                        !1);
                  var v = h.ancestor,
                    g = h;
                  (g.ancestor = null), (v.descendant = g), (h = v);
                }
              t[d] = h.subject;
            }
          }
          return !0;
        };
      e.exports = { parse: l };
    },
    function (e, t, n) {
      "use strict";
      var r = (function () {
          function e(e, t) {
            var n = [],
              r = !0,
              i = !1,
              a = void 0;
            try {
              for (
                var o, s = e[Symbol.iterator]();
                !(r = (o = s.next()).done) &&
                (n.push(o.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (a = e);
            } finally {
              try {
                !r && s.return && s.return();
              } finally {
                if (i) throw a;
              }
            }
            return n;
          }
          return function (t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          };
        })(),
        i = n(15),
        a = i.stateSelectorRegex,
        o = n(52),
        s = n(1),
        l = n(10),
        u = function (e) {
          return e.replace(
            new RegExp("\\\\(" + o.metaChar + ")", "g"),
            function (e, t) {
              return t;
            }
          );
        },
        c = function (e, t, n) {
          t === e[e.length - 1] && (e[e.length - 1] = n);
        },
        d = [
          {
            name: "group",
            query: !0,
            regex: "(" + o.group + ")",
            populate: function (e, t, n) {
              var i = r(n, 1),
                a = i[0];
              t.group = "*" === a ? a : a + "s";
            },
          },
          {
            name: "state",
            query: !0,
            regex: a,
            populate: function (e, t, n) {
              var i = r(n, 1),
                a = i[0];
              t.colonSelectors.push(a);
            },
          },
          {
            name: "id",
            query: !0,
            regex: "\\#(" + o.id + ")",
            populate: function (e, t, n) {
              var i = r(n, 1),
                a = i[0];
              t.ids.push(u(a));
            },
          },
          {
            name: "className",
            query: !0,
            regex: "\\.(" + o.className + ")",
            populate: function (e, t, n) {
              var i = r(n, 1),
                a = i[0];
              t.classes.push(u(a));
            },
          },
          {
            name: "dataExists",
            query: !0,
            regex: "\\[\\s*(" + o.variable + ")\\s*\\]",
            populate: function (e, t, n) {
              var i = r(n, 1),
                a = i[0];
              t.data.push({ field: u(a) });
            },
          },
          {
            name: "dataCompare",
            query: !0,
            regex:
              "\\[\\s*(" +
              o.variable +
              ")\\s*(" +
              o.comparatorOp +
              ")\\s*(" +
              o.value +
              ")\\s*\\]",
            populate: function (e, t, n) {
              var i = r(n, 3),
                a = i[0],
                s = i[1],
                l = i[2];
              (l =
                null != new RegExp("^" + o.string + "$").exec(l)
                  ? l.substring(1, l.length - 1)
                  : parseFloat(l)),
                t.data.push({ field: u(a), operator: s, value: l });
            },
          },
          {
            name: "dataBool",
            query: !0,
            regex: "\\[\\s*(" + o.boolOp + ")\\s*(" + o.variable + ")\\s*\\]",
            populate: function (e, t, n) {
              var i = r(n, 2),
                a = i[0],
                o = i[1];
              t.data.push({ field: u(o), operator: a });
            },
          },
          {
            name: "metaCompare",
            query: !0,
            regex:
              "\\[\\[\\s*(" +
              o.meta +
              ")\\s*(" +
              o.comparatorOp +
              ")\\s*(" +
              o.number +
              ")\\s*\\]\\]",
            populate: function (e, t, n) {
              var i = r(n, 3),
                a = i[0],
                o = i[1],
                s = i[2];
              t.meta.push({ field: u(a), operator: o, value: parseFloat(s) });
            },
          },
          {
            name: "nextQuery",
            separator: !0,
            regex: o.separator,
            populate: function (e) {
              var t = (e[e.length++] = l());
              return (e.currentSubject = null), t;
            },
          },
          {
            name: "directedEdge",
            separator: !0,
            regex: o.directedEdge,
            populate: function (e, t) {
              var n = l(),
                r = t,
                i = l();
              return (
                (n.group = "edges"),
                (n.target = i),
                (n.source = r),
                (n.subject = e.currentSubject),
                c(e, t, n),
                i
              );
            },
          },
          {
            name: "undirectedEdge",
            separator: !0,
            regex: o.undirectedEdge,
            populate: function (e, t) {
              var n = l(),
                r = t,
                i = l();
              return (
                (n.group = "edges"),
                (n.connectedNodes = [r, i]),
                (n.subject = e.currentSubject),
                c(e, t, n),
                i
              );
            },
          },
          {
            name: "child",
            separator: !0,
            regex: o.child,
            populate: function (e, t) {
              var n = l();
              return (
                (n.parent = t), (n.subject = e.currentSubject), c(e, t, n), n
              );
            },
          },
          {
            name: "descendant",
            separator: !0,
            regex: o.descendant,
            populate: function (e, t) {
              var n = l();
              return (
                (n.ancestor = t), (n.subject = e.currentSubject), c(e, t, n), n
              );
            },
          },
          {
            name: "subject",
            modifier: !0,
            regex: o.subject,
            populate: function (e, t) {
              if (null != e.currentSubject && t.subject != t)
                return (
                  s.error(
                    "Redefinition of subject in selector `" + e.toString() + "`"
                  ),
                  !1
                );
              (e.currentSubject = t),
                (t.subject = t),
                (e[e.length - 1].subject = t);
            },
          },
        ];
      d.forEach(function (e) {
        return (e.regexObj = new RegExp("^" + e.regex));
      }),
        (e.exports = d);
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = {
          metaChar:
            "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
          comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
          boolOp: "\\?|\\!|\\^",
          string: '"(?:\\\\"|[^"])*"|' + "'(?:\\\\'|[^'])*'",
          number: r.regex.number,
          meta: "degree|indegree|outdegree",
          separator: "\\s*,\\s*",
          descendant: "\\s+",
          child: "\\s+>\\s+",
          subject: "\\$",
          group: "node|edge|\\*",
          directedEdge: "\\s+->\\s+",
          undirectedEdge: "\\s+<->\\s+",
        };
      (i.variable = "(?:[\\w-]|(?:\\\\" + i.metaChar + "))+"),
        (i.value = i.string + "|" + i.number),
        (i.className = i.variable),
        (i.id = i.variable),
        (function () {
          var e = void 0,
            t = void 0,
            n = void 0;
          for (e = i.comparatorOp.split("|"), n = 0; n < e.length; n++)
            (t = e[n]), (i.comparatorOp += "|@" + t);
          for (e = i.comparatorOp.split("|"), n = 0; n < e.length; n++)
            (t = e[n]),
              t.indexOf("!") >= 0 ||
                ("=" !== t && (i.comparatorOp += "|\\!" + t));
        })(),
        (e.exports = i);
    },
    function (e, t, n) {
      "use strict";
      var r = n(15),
        i = r.stateSelectorMatches,
        a = n(0),
        o = function (e, t) {
          for (var n = !0, r = 0; r < e[t.name].length; r++) {
            var i = e[t.name][r],
              o = i.operator,
              s = i.value,
              l = i.field,
              u = void 0,
              c = t.fieldValue(l);
            if (null != o && null != s) {
              var d = a.string(c) || a.number(c) ? "" + c : "",
                h = "" + s,
                p = !1;
              o.indexOf("@") >= 0 &&
                ((d = d.toLowerCase()),
                (h = h.toLowerCase()),
                (o = o.replace("@", "")),
                (p = !0));
              var f = !1;
              o.indexOf("!") >= 0 && ((o = o.replace("!", "")), (f = !0)),
                p && ((s = h.toLowerCase()), (c = d.toLowerCase()));
              var v = !1;
              switch (o) {
                case "*=":
                  u = d.indexOf(h) >= 0;
                  break;
                case "$=":
                  u = d.indexOf(h, d.length - h.length) >= 0;
                  break;
                case "^=":
                  u = 0 === d.indexOf(h);
                  break;
                case "=":
                  u = c === s;
                  break;
                case ">":
                  (v = !0), (u = c > s);
                  break;
                case ">=":
                  (v = !0), (u = c >= s);
                  break;
                case "<":
                  (v = !0), (u = c < s);
                  break;
                case "<=":
                  (v = !0), (u = c <= s);
                  break;
                default:
                  u = !1;
              }
              !f || (null == c && v) || (u = !u);
            } else if (null != o)
              switch (o) {
                case "?":
                  u = !!c;
                  break;
                case "!":
                  u = !c;
                  break;
                case "^":
                  u = void 0 === c;
              }
            else u = void 0 !== c;
            if (!u) {
              n = !1;
              break;
            }
          }
          return n;
        },
        s = function (e, t, n) {
          if (null != e) {
            var r = !1;
            if (!t) return !1;
            n = n();
            for (var i = 0; i < n.length; i++)
              if (l(e, n[i])) {
                r = !0;
                break;
              }
            return r;
          }
          return !0;
        },
        l = function (e, t) {
          if (e.groupOnly) return "*" === e.group || e.group === t.group();
          if (null != e.group && "*" != e.group && e.group != t.group())
            return !1;
          var n = t.cy(),
            r = void 0,
            a = !0;
          for (r = 0; r < e.colonSelectors.length; r++) {
            var l = e.colonSelectors[r];
            if (!(a = i(l, t))) break;
          }
          if (!a) return !1;
          var u = !0;
          for (r = 0; r < e.ids.length; r++) {
            var c = e.ids[r],
              d = t.id();
            if (!(u = u && c == d)) break;
          }
          if (!u) return !1;
          var h = !0;
          for (r = 0; r < e.classes.length; r++) {
            var p = e.classes[r];
            if (!(h = h && t.hasClass(p))) break;
          }
          if (!h) return !1;
          if (
            !o(e, {
              name: "data",
              fieldValue: function (e) {
                return t.data(e);
              },
            })
          )
            return !1;
          if (
            !o(e, {
              name: "meta",
              fieldValue: function (e) {
                return t[e]();
              },
            })
          )
            return !1;
          if (null != e.collection) {
            if (!e.collection.hasElementWithId(t.id())) return !1;
          }
          if (null != e.filter && t.collection().some(e.filter)) return !1;
          var f = n.hasCompoundNodes(),
            v = function () {
              return t.source();
            },
            g = function () {
              return t.target();
            };
          if (
            !s(e.parent, f, function () {
              return t.parent();
            })
          )
            return !1;
          if (
            !s(e.ancestor, f, function () {
              return t.parents();
            })
          )
            return !1;
          if (
            !s(e.child, f, function () {
              return t.children();
            })
          )
            return !1;
          if (
            !s(e.descendant, f, function () {
              return t.descendants();
            })
          )
            return !1;
          if (!s(e.source, !0, v)) return !1;
          if (!s(e.target, !0, g)) return !1;
          if (e.connectedNodes) {
            var y = e.connectedNodes[0],
              m = e.connectedNodes[1];
            if (s(y, !0, v) && s(m, !0, g));
            else if (!s(y, !0, g) || !s(m, !0, v)) return !1;
          }
          return !0;
        },
        u = function (e) {
          var t = this,
            n = e.cy();
          if (t.invalid()) return n.collection();
          if (1 === t.length && 1 === t[0].length && 1 === t[0].ids.length)
            return e.getElementById(t[0].ids[0]).collection();
          var r = function (e) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              if (l(r, e)) return !0;
            }
            return !1;
          };
          return (
            null == t.text() &&
              (r = function () {
                return !0;
              }),
            e.filter(r)
          );
        },
        c = function (e) {
          var t = this;
          if (t.invalid()) return !1;
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            if (l(r, e)) return !0;
          }
          return !1;
        };
      e.exports = { matches: c, filter: u };
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n, r) {
        for (
          var i = [], a = new s(), o = e.cy(), l = o.hasCompoundNodes(), u = 0;
          u < e.length;
          u++
        ) {
          var c = e[u];
          n ? i.push(c) : l && r(i, a, c);
        }
        for (; i.length > 0; ) {
          var d = i.shift();
          t(d), a.add(d.id()), l && r(i, a, d);
        }
        return e;
      }
      function i(e, t, n) {
        if (n.isParent())
          for (var r = n._private.children, i = 0; i < r.length; i++) {
            var a = r[i];
            t.has(a.id()) || e.push(a);
          }
      }
      function a(e, t, n) {
        if (n.isChild()) {
          var r = n._private.parent;
          t.has(r.id()) || e.push(r);
        }
      }
      function o(e, t, n) {
        a(e, t, n), i(e, t, n);
      }
      var s = n(8),
        l = {
          parent: function (e) {
            var t = [];
            if (1 === this.length) {
              var n = this[0]._private.parent;
              if (n) return n;
            }
            for (var r = 0; r < this.length; r++) {
              var i = this[r],
                a = i._private.parent;
              a && t.push(a);
            }
            return this.spawn(t, { unique: !0 }).filter(e);
          },
          parents: function (e) {
            for (var t = [], n = this.parent(); n.nonempty(); ) {
              for (var r = 0; r < n.length; r++) {
                var i = n[r];
                t.push(i);
              }
              n = n.parent();
            }
            return this.spawn(t, { unique: !0 }).filter(e);
          },
          commonAncestors: function (e) {
            for (var t = void 0, n = 0; n < this.length; n++) {
              var r = this[n],
                i = r.parents();
              (t = t || i), (t = t.intersect(i));
            }
            return t.filter(e);
          },
          orphans: function (e) {
            return this.stdFilter(function (e) {
              return e.isOrphan();
            }).filter(e);
          },
          nonorphans: function (e) {
            return this.stdFilter(function (e) {
              return e.isChild();
            }).filter(e);
          },
          children: function (e) {
            for (var t = [], n = 0; n < this.length; n++) {
              var r = this[n];
              t = t.concat(r._private.children);
            }
            return this.spawn(t, { unique: !0 }).filter(e);
          },
          siblings: function (e) {
            return this.parent().children().not(this).filter(e);
          },
          isParent: function () {
            var e = this[0];
            if (e) return e.isNode() && 0 !== e._private.children.length;
          },
          isChildless: function () {
            var e = this[0];
            if (e) return e.isNode() && 0 === e._private.children.length;
          },
          isChild: function () {
            var e = this[0];
            if (e) return e.isNode() && null != e._private.parent;
          },
          isOrphan: function () {
            var e = this[0];
            if (e) return e.isNode() && null == e._private.parent;
          },
          descendants: function (e) {
            function t(e) {
              for (var r = 0; r < e.length; r++) {
                var i = e[r];
                n.push(i), i.children().nonempty() && t(i.children());
              }
            }
            var n = [];
            return t(this.children()), this.spawn(n, { unique: !0 }).filter(e);
          },
        };
      (l.forEachDown = function (e) {
        return r(
          this,
          e,
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          i
        );
      }),
        (l.forEachUp = function (e) {
          return r(
            this,
            e,
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            a
          );
        }),
        (l.forEachUpAndDown = function (e) {
          return r(
            this,
            e,
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            o
          );
        }),
        (l.ancestors = l.parents),
        (e.exports = l);
    },
    function (e, t, n) {
      "use strict";
      var r = n(4),
        i = void 0,
        a = void 0;
      (i = a =
        {
          data: r.data({
            field: "data",
            bindingEvent: "data",
            allowBinding: !0,
            allowSetting: !0,
            settingEvent: "data",
            settingTriggersEvent: !0,
            triggerFnName: "trigger",
            allowGetting: !0,
            immutableKeys: { id: !0, source: !0, target: !0, parent: !0 },
            updateStyle: !0,
          }),
          removeData: r.removeData({
            field: "data",
            event: "data",
            triggerFnName: "trigger",
            triggerEvent: !0,
            immutableKeys: { id: !0, source: !0, target: !0, parent: !0 },
            updateStyle: !0,
          }),
          scratch: r.data({
            field: "scratch",
            bindingEvent: "scratch",
            allowBinding: !0,
            allowSetting: !0,
            settingEvent: "scratch",
            settingTriggersEvent: !0,
            triggerFnName: "trigger",
            allowGetting: !0,
            updateStyle: !0,
          }),
          removeScratch: r.removeData({
            field: "scratch",
            event: "scratch",
            triggerFnName: "trigger",
            triggerEvent: !0,
            updateStyle: !0,
          }),
          rscratch: r.data({
            field: "rscratch",
            allowBinding: !1,
            allowSetting: !0,
            settingTriggersEvent: !1,
            allowGetting: !0,
          }),
          removeRscratch: r.removeData({ field: "rscratch", triggerEvent: !1 }),
          id: function () {
            var e = this[0];
            if (e) return e._private.data.id;
          },
        }),
        (i.attr = i.data),
        (i.removeAttr = i.removeData),
        (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return function (t) {
          var n = this;
          if (
            (void 0 === t && (t = !0),
            0 !== n.length && n.isNode() && !n.removed())
          ) {
            for (
              var r = 0, i = n[0], a = i._private.edges, o = 0;
              o < a.length;
              o++
            ) {
              var s = a[o];
              (!t && s.isLoop()) || (r += e(i, s));
            }
            return r;
          }
        };
      }
      function i(e, t) {
        return function (n) {
          for (var r = void 0, i = this.nodes(), a = 0; a < i.length; a++) {
            var o = i[a],
              s = o[e](n);
            void 0 === s || (void 0 !== r && !t(s, r)) || (r = s);
          }
          return r;
        };
      }
      var a = n(1),
        o = {};
      a.extend(o, {
        degree: r(function (e, t) {
          return t.source().same(t.target()) ? 2 : 1;
        }),
        indegree: r(function (e, t) {
          return t.target().same(e) ? 1 : 0;
        }),
        outdegree: r(function (e, t) {
          return t.source().same(e) ? 1 : 0;
        }),
      }),
        a.extend(o, {
          minDegree: i("degree", function (e, t) {
            return e < t;
          }),
          maxDegree: i("degree", function (e, t) {
            return e > t;
          }),
          minIndegree: i("indegree", function (e, t) {
            return e < t;
          }),
          maxIndegree: i("indegree", function (e, t) {
            return e > t;
          }),
          minOutdegree: i("outdegree", function (e, t) {
            return e < t;
          }),
          maxOutdegree: i("outdegree", function (e, t) {
            return e > t;
          }),
        }),
        a.extend(o, {
          totalDegree: function (e) {
            for (var t = 0, n = this.nodes(), r = 0; r < n.length; r++)
              t += n[r].degree(e);
            return t;
          },
        }),
        (e.exports = o);
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = n(58),
        a = n(59),
        o = n(60),
        s = n(61);
      e.exports = r.assign({}, i, a, o, s);
    },
    function (e, t, n) {
      "use strict";
      var r = n(4),
        i = n(0),
        a = n(2),
        o = void 0,
        s = void 0,
        l = function (e, t) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (r.isParent() && !r.locked()) {
              var i = r._private.position,
                a = { x: t.x - i.x, y: t.y - i.y };
              e.children().shift(a);
            }
          }
        };
      (o = s =
        {
          position: r.data({
            field: "position",
            bindingEvent: "position",
            allowBinding: !0,
            allowSetting: !0,
            settingEvent: "position",
            settingTriggersEvent: !0,
            triggerFnName: "emitAndNotify",
            allowGetting: !0,
            validKeys: ["x", "y"],
            beforeGet: function (e) {
              e.updateCompoundBounds();
            },
            beforeSet: l,
            onSet: function (e) {
              e.dirtyCompoundBoundsCache();
            },
            canSet: function (e) {
              return !e.locked();
            },
          }),
          silentPosition: r.data({
            field: "position",
            bindingEvent: "position",
            allowBinding: !1,
            allowSetting: !0,
            settingEvent: "position",
            settingTriggersEvent: !1,
            triggerFnName: "trigger",
            allowGetting: !1,
            validKeys: ["x", "y"],
            beforeSet: l,
            onSet: function (e) {
              e.dirtyCompoundBoundsCache();
            },
            canSet: function (e) {
              return !e.locked();
            },
          }),
          positions: function (e, t) {
            if (i.plainObject(e)) t ? this.silentPosition(e) : this.position(e);
            else if (i.fn(e)) {
              var n = e,
                r = this.cy();
              r.startBatch();
              for (var a = 0; a < this.length; a++) {
                var o = this[a],
                  s = void 0;
                (s = n(o, a)) && (t ? o.silentPosition(s) : o.position(s));
              }
              r.endBatch();
            }
            return this;
          },
          silentPositions: function (e) {
            return this.positions(e, !0);
          },
          shift: function (e, t) {
            var n = void 0;
            if (
              (i.plainObject(e)
                ? (n = e)
                : i.string(e) &&
                  i.number(t) &&
                  ((n = { x: 0, y: 0 }), (n[e] = t)),
              null != n)
            )
              for (var r = 0; r < this.length; r++) {
                var a = this[r],
                  o = a.position();
                a.position({ x: o.x + n.x, y: o.y + n.y });
              }
            return this;
          },
          renderedPosition: function (e, t) {
            var n = this[0],
              r = this.cy(),
              o = r.zoom(),
              s = r.pan(),
              l = i.plainObject(e) ? e : void 0,
              u = void 0 !== l || (void 0 !== t && i.string(e));
            if (n && n.isNode()) {
              if (!u) {
                var c = n.position();
                return (
                  (l = a.modelToRenderedPosition(c, o, s)),
                  void 0 === e ? l : l[e]
                );
              }
              for (var d = 0; d < this.length; d++) {
                var h = this[d];
                void 0 !== t
                  ? h.position(e, (t - s[e]) / o)
                  : void 0 !== l &&
                    h.position(a.renderedToModelPosition(l, o, s));
              }
            } else if (!u) return;
            return this;
          },
          relativePosition: function (e, t) {
            var n = this[0],
              r = this.cy(),
              a = i.plainObject(e) ? e : void 0,
              o = void 0 !== a || (void 0 !== t && i.string(e)),
              s = r.hasCompoundNodes();
            if (n && n.isNode()) {
              if (!o) {
                var l = n.position(),
                  u = s ? n.parent() : null,
                  c = u && u.length > 0,
                  d = c;
                c && (u = u[0]);
                var h = d ? u.position() : { x: 0, y: 0 };
                return (
                  (a = { x: l.x - h.x, y: l.y - h.y }), void 0 === e ? a : a[e]
                );
              }
              for (var p = 0; p < this.length; p++) {
                var f = this[p],
                  v = s ? f.parent() : null,
                  g = v && v.length > 0,
                  y = g;
                g && (v = v[0]);
                var m = y ? v.position() : { x: 0, y: 0 };
                void 0 !== t
                  ? f.position(e, t + m[e])
                  : void 0 !== a && f.position({ x: a.x + m.x, y: a.y + m.y });
              }
            } else if (!o) return;
            return this;
          },
        }),
        (o.modelPosition = o.point = o.position),
        (o.modelPositions = o.points = o.positions),
        (o.renderedPoint = o.renderedPosition),
        (o.relativePoint = o.relativePosition),
        (e.exports = s);
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return {
          includeNodes: a.default(e.includeNodes, b.includeNodes),
          includeEdges: a.default(e.includeEdges, b.includeEdges),
          includeLabels: a.default(e.includeLabels, b.includeLabels),
          includeOverlays: a.default(e.includeOverlays, b.includeOverlays),
          useCache: a.default(e.useCache, b.useCache),
        };
      }
      var i = n(0),
        a = n(1),
        o = n(2),
        s = void 0,
        l = void 0;
      (s = l = {}),
        (l.renderedBoundingBox = function (e) {
          var t = this.boundingBox(e),
            n = this.cy(),
            r = n.zoom(),
            i = n.pan(),
            a = t.x1 * r + i.x,
            o = t.x2 * r + i.x,
            s = t.y1 * r + i.y,
            l = t.y2 * r + i.y;
          return { x1: a, x2: o, y1: s, y2: l, w: o - a, h: l - s };
        }),
        (l.dirtyCompoundBoundsCache = function () {
          var e = this.cy();
          return e.styleEnabled() && e.hasCompoundNodes()
            ? (this.forEachUp(function (e) {
                (e._private.compoundBoundsClean = !1),
                  e.isParent() && e.emit("bounds");
              }),
              this)
            : this;
        }),
        (l.updateCompoundBounds = function () {
          var e = this.cy();
          if (!e.styleEnabled() || !e.hasCompoundNodes()) return this;
          if (e.batching()) return this;
          for (var t = [], n = 0; n < this.length; n++) {
            var r = this[n],
              i = r._private;
            i.compoundBoundsClean ||
              (!(function (e) {
                function n(e, t, n) {
                  var r = 0,
                    i = 0,
                    a = t + n;
                  return (
                    e > 0 && a > 0 && ((r = (t / a) * e), (i = (n / a) * e)),
                    { biasDiff: r, biasComplementDiff: i }
                  );
                }
                if (e.isParent()) {
                  var r = e._private,
                    i = e.children(),
                    a =
                      "include" ===
                      e.pstyle("compound-sizing-wrt-labels").value,
                    o = {
                      width: {
                        val: e.pstyle("min-width").pfValue,
                        left: e.pstyle("min-width-bias-left"),
                        right: e.pstyle("min-width-bias-right"),
                      },
                      height: {
                        val: e.pstyle("min-height").pfValue,
                        top: e.pstyle("min-height-bias-top"),
                        bottom: e.pstyle("min-height-bias-bottom"),
                      },
                    },
                    s = i.boundingBox({
                      includeLabels: a,
                      includeOverlays: !1,
                      useCache: !1,
                    }),
                    l = r.position;
                  (0 !== s.w && 0 !== s.h) ||
                    ((s = {
                      w: e.pstyle("width").pfValue,
                      h: e.pstyle("height").pfValue,
                    }),
                    (s.x1 = l.x - s.w / 2),
                    (s.x2 = l.x + s.w / 2),
                    (s.y1 = l.y - s.h / 2),
                    (s.y2 = l.y + s.h / 2));
                  var u = o.width.left.value;
                  "px" === o.width.left.units &&
                    o.width.val > 0 &&
                    (u = (100 * u) / o.width.val);
                  var c = o.width.right.value;
                  "px" === o.width.right.units &&
                    o.width.val > 0 &&
                    (c = (100 * c) / o.width.val);
                  var d = o.height.top.value;
                  "px" === o.height.top.units &&
                    o.height.val > 0 &&
                    (d = (100 * d) / o.height.val);
                  var h = o.height.bottom.value;
                  "px" === o.height.bottom.units &&
                    o.height.val > 0 &&
                    (h = (100 * h) / o.height.val);
                  var p = n(o.width.val - s.w, u, c),
                    f = p.biasDiff,
                    v = p.biasComplementDiff,
                    g = n(o.height.val - s.h, d, h),
                    y = g.biasDiff,
                    m = g.biasComplementDiff;
                  (r.autoPadding = (function (e, t, n, r) {
                    if ("%" !== n.units)
                      return "px" === n.units ? n.pfValue : 0;
                    switch (r) {
                      case "width":
                        return e > 0 ? n.pfValue * e : 0;
                      case "height":
                        return t > 0 ? n.pfValue * t : 0;
                      case "average":
                        return e > 0 && t > 0 ? (n.pfValue * (e + t)) / 2 : 0;
                      case "min":
                        return e > 0 && t > 0
                          ? e > t
                            ? n.pfValue * t
                            : n.pfValue * e
                          : 0;
                      case "max":
                        return e > 0 && t > 0
                          ? e > t
                            ? n.pfValue * e
                            : n.pfValue * t
                          : 0;
                      default:
                        return 0;
                    }
                  })(
                    s.w,
                    s.h,
                    e.pstyle("padding"),
                    e.pstyle("padding-relative-to").value
                  )),
                    (r.autoWidth = Math.max(s.w, o.width.val)),
                    (l.x = (-f + s.x1 + s.x2 + v) / 2),
                    (r.autoHeight = Math.max(s.h, o.height.val)),
                    (l.y = (-y + s.y1 + s.y2 + m) / 2),
                    t.push(e);
                }
              })(r),
              e._private.batchingStyle || (i.compoundBoundsClean = !0));
          }
          return this;
        });
      var u = function (e) {
          return e === 1 / 0 || e === -1 / 0 ? 0 : e;
        },
        c = function (e, t, n, r, i) {
          r - t != 0 &&
            i - n != 0 &&
            null != t &&
            null != n &&
            null != r &&
            null != i &&
            ((e.x1 = t < e.x1 ? t : e.x1),
            (e.x2 = r > e.x2 ? r : e.x2),
            (e.y1 = n < e.y1 ? n : e.y1),
            (e.y2 = i > e.y2 ? i : e.y2));
        },
        d = function (e, t) {
          return c(e, t.x1, t.y1, t.x2, t.y2);
        },
        h = function (e, t, n) {
          return a.getPrefixedProperty(e, t, n);
        },
        p = function (e, t, n) {
          if (!t.cy().headless()) {
            var r = t._private,
              i = r.rstyle,
              a = i.arrowWidth / 2,
              o = t.pstyle(n + "-arrow-shape").value,
              s = void 0,
              l = void 0;
            "none" !== o &&
              ("source" === n
                ? ((s = i.srcX), (l = i.srcY))
                : "target" === n
                ? ((s = i.tgtX), (l = i.tgtY))
                : ((s = i.midX), (l = i.midY)),
              c(e, s - a, l - a, s + a, l + a));
          }
        },
        f = function (e, t, n) {
          if (!t.cy().headless()) {
            var r = void 0;
            r = n ? n + "-" : "";
            var i = t._private,
              a = i.rstyle;
            if (t.pstyle(r + "label").strValue) {
              var o = t.pstyle("text-halign"),
                s = t.pstyle("text-valign"),
                l = h(a, "labelWidth", n),
                u = h(a, "labelHeight", n),
                d = h(a, "labelX", n),
                p = h(a, "labelY", n),
                f = t.pstyle(r + "text-margin-x").pfValue,
                v = t.pstyle(r + "text-margin-y").pfValue,
                g = t.isEdge(),
                y = t.pstyle(r + "text-rotation"),
                m = t.pstyle("text-outline-width").pfValue,
                b = t.pstyle("text-border-width").pfValue,
                x = b / 2,
                w = t.pstyle("text-background-padding").pfValue,
                E = u + 2 * w,
                P = l + 2 * w,
                C = P / 2,
                S = E / 2,
                T = void 0,
                D = void 0,
                k = void 0,
                _ = void 0;
              if (g) (T = d - C), (D = d + C), (k = p - S), (_ = p + S);
              else {
                switch (o.value) {
                  case "left":
                    (T = d - P), (D = d);
                    break;
                  case "center":
                    (T = d - C), (D = d + C);
                    break;
                  case "right":
                    (T = d), (D = d + P);
                }
                switch (s.value) {
                  case "top":
                    (k = p - E), (_ = p);
                    break;
                  case "center":
                    (k = p - S), (_ = p + S);
                    break;
                  case "bottom":
                    (k = p), (_ = p + E);
                }
              }
              var M = g && "autorotate" === y.strValue,
                I = null != y.pfValue && 0 !== y.pfValue;
              if (M || I) {
                var N = M ? h(i.rstyle, "labelAngle", n) : y.pfValue,
                  B = Math.cos(N),
                  z = Math.sin(N),
                  L = function (e, t) {
                    return (
                      (e -= d),
                      (t -= p),
                      { x: e * B - t * z + d, y: e * z + t * B + p }
                    );
                  },
                  A = L(T, k),
                  O = L(T, _),
                  R = L(D, k),
                  V = L(D, _);
                (T = Math.min(A.x, O.x, R.x, V.x)),
                  (D = Math.max(A.x, O.x, R.x, V.x)),
                  (k = Math.min(A.y, O.y, R.y, V.y)),
                  (_ = Math.max(A.y, O.y, R.y, V.y));
              }
              (T += f - Math.max(m, x)),
                (D += f + Math.max(m, x)),
                (k += v - Math.max(m, x)),
                (_ += v + Math.max(m, x)),
                c(e, T, k, D, _);
            }
            return e;
          }
        },
        v = function (e, t) {
          var n = e._private.cy,
            r = n.styleEnabled(),
            i = n.headless(),
            a = { x1: 1 / 0, y1: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
            s = e._private,
            l = r ? e.pstyle("display").value : "element",
            d = e.isNode(),
            h = e.isEdge(),
            v = void 0,
            g = void 0,
            y = void 0,
            m = void 0,
            b = void 0,
            x = void 0,
            w = "none" !== l;
          if (w) {
            var E = 0;
            r &&
              t.includeOverlays &&
              0 !== e.pstyle("overlay-opacity").value &&
              (E = e.pstyle("overlay-padding").value);
            var P = 0,
              C = 0;
            if (
              (r && ((P = e.pstyle("width").pfValue), (C = P / 2)),
              d && t.includeNodes)
            ) {
              var S = e.position();
              (b = S.x), (x = S.y);
              var T = e.outerWidth(),
                D = T / 2,
                k = e.outerHeight(),
                _ = k / 2;
              (v = b - D - E),
                (g = b + D + E),
                (y = x - _ - E),
                (m = x + _ + E),
                c(a, v, y, g, m);
            } else if (h && t.includeEdges) {
              var M = s.rstyle || {};
              if (
                (r &&
                  !i &&
                  ((v = Math.min(M.srcX, M.midX, M.tgtX)),
                  (g = Math.max(M.srcX, M.midX, M.tgtX)),
                  (y = Math.min(M.srcY, M.midY, M.tgtY)),
                  (m = Math.max(M.srcY, M.midY, M.tgtY)),
                  (v -= C),
                  (g += C),
                  (y -= C),
                  (m += C),
                  c(a, v, y, g, m)),
                r && !i && "haystack" === e.pstyle("curve-style").strValue)
              ) {
                var I = M.haystackPts || [];
                if (
                  ((v = I[0].x),
                  (y = I[0].y),
                  (g = I[1].x),
                  (m = I[1].y),
                  v > g)
                ) {
                  var N = v;
                  (v = g), (g = N);
                }
                if (y > m) {
                  var B = y;
                  (y = m), (m = B);
                }
                c(a, v - C, y - C, g + C, m + C);
              } else {
                for (
                  var z = M.bezierPts || M.linePts || [], L = 0;
                  L < z.length;
                  L++
                ) {
                  var A = z[L];
                  (v = A.x - C),
                    (g = A.x + C),
                    (y = A.y - C),
                    (m = A.y + C),
                    c(a, v, y, g, m);
                }
                if (0 === z.length) {
                  var O = e.source(),
                    R = O.position(),
                    V = e.target(),
                    q = V.position();
                  if (((v = R.x), (g = q.x), (y = R.y), (m = q.y), v > g)) {
                    var F = v;
                    (v = g), (g = F);
                  }
                  if (y > m) {
                    var j = y;
                    (y = m), (m = j);
                  }
                  (v -= C), (g += C), (y -= C), (m += C), c(a, v, y, g, m);
                }
              }
            }
            if (
              (r &&
                t.includeEdges &&
                h &&
                (p(a, e, "mid-source"),
                p(a, e, "mid-target"),
                p(a, e, "source"),
                p(a, e, "target")),
              r)
            ) {
              if ("yes" === e.pstyle("ghost").value) {
                var X = e.pstyle("ghost-offset-x").pfValue,
                  Y = e.pstyle("ghost-offset-y").pfValue;
                c(a, a.x1 + X, a.y1 + Y, a.x2 + X, a.y2 + Y);
              }
            }
            r &&
              ((v = a.x1),
              (g = a.x2),
              (y = a.y1),
              (m = a.y2),
              c(a, v - E, y - E, g + E, m + E)),
              r &&
                t.includeLabels &&
                (f(a, e, null), h && (f(a, e, "source"), f(a, e, "target")));
          }
          return (
            (a.x1 = u(a.x1)),
            (a.y1 = u(a.y1)),
            (a.x2 = u(a.x2)),
            (a.y2 = u(a.y2)),
            (a.w = u(a.x2 - a.x1)),
            (a.h = u(a.y2 - a.y1)),
            a.w > 0 && a.h > 0 && w && o.expandBoundingBox(a, 1),
            a
          );
        },
        g = function (e) {
          return e ? "t" : "f";
        },
        y = function (e) {
          var t = "";
          return (
            (t += g(e.incudeNodes)),
            (t += g(e.includeEdges)),
            (t += g(e.includeLabels)),
            (t += g(e.includeOverlays))
          );
        },
        m = function (e, t) {
          var n = e._private,
            r = void 0,
            i = e.cy().headless(),
            a = t === b ? x : y(t);
          return (
            t.useCache && !i && n.bbCache && n.bbCache[a]
              ? (r = n.bbCache[a])
              : ((r = v(e, t)),
                i || ((n.bbCache = n.bbCache || {}), (n.bbCache[a] = r))),
            r
          );
        },
        b = {
          includeNodes: !0,
          includeEdges: !0,
          includeLabels: !0,
          includeOverlays: !0,
          useCache: !0,
        },
        x = y(b);
      (l.boundingBox = function (e) {
        if (
          1 === this.length &&
          this[0]._private.bbCache &&
          (void 0 === e || void 0 === e.useCache || !0 === e.useCache)
        )
          return (e = void 0 === e ? b : r(e)), m(this[0], e);
        var t = { x1: 1 / 0, y1: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
        e = e || a.staticEmptyObject();
        var n = r(e),
          i = this,
          o = i.cy(),
          s = o.styleEnabled();
        s && this.recalculateRenderedStyle(n.useCache),
          this.updateCompoundBounds();
        for (var l = {}, c = 0; c < i.length; c++) {
          var h = i[c];
          if (
            s &&
            h.isEdge() &&
            "bezier" === h.pstyle("curve-style").strValue &&
            !l[h.id()]
          ) {
            for (var p = h.parallelEdges(), f = 0; f < p.length; f++)
              l[p[f].id()] = !0;
            p.recalculateRenderedStyle(n.useCache);
          }
          d(t, m(h, n));
        }
        return (
          (t.x1 = u(t.x1)),
          (t.y1 = u(t.y1)),
          (t.x2 = u(t.x2)),
          (t.y2 = u(t.y2)),
          (t.w = u(t.x2 - t.x1)),
          (t.h = u(t.y2 - t.y1)),
          t
        );
      }),
        (l.boundingBoxAt = function (e) {
          var t = this.nodes();
          if (i.plainObject(e)) {
            var n = e;
            e = function () {
              return n;
            };
          }
          for (var r = 0; r < t.length; r++) {
            var a = t[r],
              o = a._private,
              s = o.position,
              l = e.call(a, a, r);
            (o.bbAtOldPos = { x: s.x, y: s.y }),
              l && ((s.x = l.x), (s.y = l.y));
          }
          this.emit("dirty"),
            t.dirtyCompoundBoundsCache().updateCompoundBounds();
          for (
            var u = this.boundingBox({ useCache: !1 }), c = 0;
            c < t.length;
            c++
          ) {
            var d = t[c],
              h = d._private,
              p = d._private.position,
              f = h.bbAtOldPos;
            (p.x = f.x), (p.y = f.y);
          }
          return t.dirtyCompoundBoundsCache(), this.emit("dirty"), u;
        }),
        (s.boundingbox = s.boundingBox),
        (s.renderedBoundingbox = s.renderedBoundingBox),
        (e.exports = l);
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = void 0,
        a = void 0;
      i = a = {};
      var o = function (e) {
        (e.uppercaseName = r.capitalize(e.name)),
          (e.autoName = "auto" + e.uppercaseName),
          (e.labelName = "label" + e.uppercaseName),
          (e.outerName = "outer" + e.uppercaseName),
          (e.uppercaseOuterName = r.capitalize(e.outerName)),
          (i[e.name] = function () {
            var t = this[0],
              n = t._private,
              r = n.cy,
              i = r._private.styleEnabled;
            if (t) {
              if (!i) return 1;
              if (t.isParent())
                return t.updateCompoundBounds(), n[e.autoName] || 0;
              var a = t.pstyle(e.name);
              switch (a.strValue) {
                case "label":
                  return (
                    t.recalculateRenderedStyle(), n.rstyle[e.labelName] || 0
                  );
                default:
                  return a.pfValue;
              }
            }
          }),
          (i["outer" + e.uppercaseName] = function () {
            var t = this[0],
              n = t._private,
              r = n.cy,
              i = r._private.styleEnabled;
            if (t) {
              if (i) {
                return (
                  t[e.name]() +
                  t.pstyle("border-width").pfValue +
                  2 * t.padding()
                );
              }
              return 1;
            }
          }),
          (i["rendered" + e.uppercaseName] = function () {
            var t = this[0];
            if (t) {
              return t[e.name]() * this.cy().zoom();
            }
          }),
          (i["rendered" + e.uppercaseOuterName] = function () {
            var t = this[0];
            if (t) {
              return t[e.outerName]() * this.cy().zoom();
            }
          });
      };
      o({ name: "width" }),
        o({ name: "height" }),
        (a.padding = function () {
          var e = this[0],
            t = e._private;
          return e.isParent()
            ? (e.updateCompoundBounds(),
              void 0 !== t.autoPadding
                ? t.autoPadding
                : e.pstyle("padding").pfValue)
            : e.pstyle("padding").pfValue;
        }),
        (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      var r = function (e, t) {
        if (e.isEdge()) return t(e.renderer());
      };
      e.exports = {
        controlPoints: function () {
          var e = this;
          return r(this, function (t) {
            return t.getControlPoints(e);
          });
        },
        segmentPoints: function () {
          var e = this;
          return r(this, function (t) {
            return t.getSegmentPoints(e);
          });
        },
        sourceEndpoint: function () {
          var e = this;
          return r(this, function (t) {
            return t.getSourceEndpoint(e);
          });
        },
        targetEndpoint: function () {
          var e = this;
          return r(this, function (t) {
            return t.getTargetEndpoint(e);
          });
        },
        midpoint: function () {
          var e = this;
          return r(this, function (t) {
            return t.getEdgeMidpoint(e);
          });
        },
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(11),
        i = n(4),
        a = n(0),
        o = n(1),
        s = n(6),
        l = {
          qualifierCompare: function (e, t) {
            return null == e || null == t
              ? null == e && null == t
              : e.sameText(t);
          },
          eventMatches: function (e, t, n) {
            var r = t.qualifier;
            return (
              null == r ||
              (e !== n.target && a.element(n.target) && r.matches(n.target))
            );
          },
          eventFields: function (e) {
            return { cy: e.cy(), target: e };
          },
          callbackContext: function (e, t, n) {
            return null != t.qualifier ? n.target : e;
          },
          beforeEmit: function (e, t) {
            t.conf &&
              t.conf.once &&
              t.conf.onceCollection.removeListener(
                t.event,
                t.qualifier,
                t.callback
              );
          },
          bubble: function () {
            return !0;
          },
          parent: function (e) {
            return e.isChild() ? e.parent() : e.cy();
          },
        },
        u = function (e) {
          return a.string(e) ? new s(e) : e;
        },
        c = {
          createEmitter: function () {
            for (var e = 0; e < this.length; e++) {
              var t = this[e],
                n = t._private;
              n.emitter || (n.emitter = new r(o.assign({ context: t }, l)));
            }
            return this;
          },
          emitter: function () {
            return this._private.emitter;
          },
          on: function (e, t, n) {
            for (var r = 0; r < this.length; r++) {
              this[r].emitter().on(e, u(t), n);
            }
            return this;
          },
          removeListener: function (e, t, n) {
            for (var r = 0; r < this.length; r++) {
              this[r].emitter().removeListener(e, u(t), n);
            }
            return this;
          },
          one: function (e, t, n) {
            for (var r = 0; r < this.length; r++) {
              this[r].emitter().one(e, u(t), n);
            }
            return this;
          },
          once: function (e, t, n) {
            for (var r = 0; r < this.length; r++) {
              this[r]
                .emitter()
                .on(e, u(t), n, { once: !0, onceCollection: this });
            }
          },
          emit: function (e, t) {
            for (var n = 0; n < this.length; n++) {
              this[n].emitter().emit(e, t);
            }
            return this;
          },
          emitAndNotify: function (e, t) {
            if (0 !== this.length)
              return (
                this.cy().notify({ type: e, eles: this }), this.emit(e, t), this
              );
          },
        };
      i.eventAliasesOn(c), (e.exports = c);
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(6),
        a = {
          nodes: function (e) {
            return this.filter(function (e) {
              return e.isNode();
            }).filter(e);
          },
          edges: function (e) {
            return this.filter(function (e) {
              return e.isEdge();
            }).filter(e);
          },
          filter: function (e, t) {
            if (void 0 === e) return this;
            if (r.string(e) || r.elementOrCollection(e))
              return new i(e).filter(this);
            if (r.fn(e)) {
              for (var n = this.spawn(), a = this, o = 0; o < a.length; o++) {
                var s = a[o];
                (t ? e.apply(t, [s, o, a]) : e(s, o, a)) && n.merge(s);
              }
              return n;
            }
            return this.spawn();
          },
          not: function (e) {
            if (e) {
              r.string(e) && (e = this.filter(e));
              for (
                var t = [], n = e._private.map, i = 0;
                i < this.length;
                i++
              ) {
                var a = this[i];
                n.has(a.id()) || t.push(a);
              }
              return this.spawn(t);
            }
            return this;
          },
          absoluteComplement: function () {
            return this.cy().mutableElements().not(this);
          },
          intersect: function (e) {
            if (r.string(e)) {
              var t = e;
              return this.filter(t);
            }
            for (
              var n = [],
                i = this,
                a = e,
                o = this.length < e.length,
                s = o ? a._private.map : i._private.map,
                l = o ? i : a,
                u = 0;
              u < l.length;
              u++
            ) {
              var c = l[u]._private.data.id,
                d = s.get(c);
              d && n.push(d.ele);
            }
            return this.spawn(n);
          },
          xor: function (e) {
            var t = this._private.cy;
            r.string(e) && (e = t.$(e));
            var n = [],
              i = this,
              a = e,
              o = function (e, t) {
                for (var r = 0; r < e.length; r++) {
                  var i = e[r],
                    a = i._private.data.id;
                  t.hasElementWithId(a) || n.push(i);
                }
              };
            return o(i, a), o(a, i), this.spawn(n);
          },
          diff: function (e) {
            var t = this._private.cy;
            r.string(e) && (e = t.$(e));
            var n = [],
              i = [],
              a = [],
              o = this,
              s = e,
              l = function (e, t, n) {
                for (var r = 0; r < e.length; r++) {
                  var i = e[r],
                    o = i._private.data.id;
                  t.hasElementWithId(o) ? a.push(i) : n.push(i);
                }
              };
            return (
              l(o, s, n),
              l(s, o, i),
              {
                left: this.spawn(n, { unique: !0 }),
                right: this.spawn(i, { unique: !0 }),
                both: this.spawn(a, { unique: !0 }),
              }
            );
          },
          add: function (e) {
            var t = this._private.cy;
            if (!e) return this;
            if (r.string(e)) {
              var n = e;
              e = t.mutableElements().filter(n);
            }
            for (var i = [], a = 0; a < this.length; a++) i.push(this[a]);
            for (var o = this._private.map, s = 0; s < e.length; s++) {
              !o.has(e[s].id()) && i.push(e[s]);
            }
            return this.spawn(i);
          },
          merge: function (e) {
            var t = this._private,
              n = t.cy;
            if (!e) return this;
            if (e && r.string(e)) {
              var i = e;
              e = n.mutableElements().filter(i);
            }
            for (var a = t.map, o = 0; o < e.length; o++) {
              var s = e[o],
                l = s._private.data.id;
              if (!a.has(l)) {
                var u = this.length++;
                (this[u] = s), a.set(l, { ele: s, index: u });
              } else {
                var c = a.get(l).index;
                (this[c] = s), a.set(l, { ele: s, index: c });
              }
            }
            return this;
          },
          unmergeOne: function (e) {
            e = e[0];
            var t = this._private,
              n = e._private.data.id,
              r = t.map,
              i = r.get(n);
            if (!i) return this;
            var a = i.index;
            (this[a] = void 0), r.delete(n);
            var o = a === this.length - 1;
            if (this.length > 1 && !o) {
              var s = this.length - 1,
                l = this[s],
                u = l._private.data.id;
              (this[s] = void 0), (this[a] = l), r.set(u, { ele: l, index: a });
            }
            return this.length--, this;
          },
          unmerge: function (e) {
            var t = this._private.cy;
            if (!e) return this;
            if (e && r.string(e)) {
              var n = e;
              e = t.mutableElements().filter(n);
            }
            for (var i = 0; i < e.length; i++) this.unmergeOne(e[i]);
            return this;
          },
          map: function (e, t) {
            for (var n = [], r = this, i = 0; i < r.length; i++) {
              var a = r[i],
                o = t ? e.apply(t, [a, i, r]) : e(a, i, r);
              n.push(o);
            }
            return n;
          },
          reduce: function (e, t) {
            for (var n = t, r = this, i = 0; i < r.length; i++)
              n = e(n, r[i], i, r);
            return n;
          },
          max: function (e, t) {
            for (
              var n = -1 / 0, r = void 0, i = this, a = 0;
              a < i.length;
              a++
            ) {
              var o = i[a],
                s = t ? e.apply(t, [o, a, i]) : e(o, a, i);
              s > n && ((n = s), (r = o));
            }
            return { value: n, ele: r };
          },
          min: function (e, t) {
            for (
              var n = 1 / 0, r = void 0, i = this, a = 0;
              a < i.length;
              a++
            ) {
              var o = i[a],
                s = t ? e.apply(t, [o, a, i]) : e(o, a, i);
              s < n && ((n = s), (r = o));
            }
            return { value: n, ele: r };
          },
        },
        o = a;
      (o.u = o["|"] = o["+"] = o.union = o.or = o.add),
        (o["\\"] =
          o["!"] =
          o["-"] =
          o.difference =
          o.relativeComplement =
          o.subtract =
            o.not),
        (o.n = o["&"] = o["."] = o.and = o.intersection = o.intersect),
        (o["^"] =
          o["(+)"] =
          o["(-)"] =
          o.symmetricDifference =
          o.symdiff =
            o.xor),
        (o.fnFilter = o.filterFn = o.stdFilter = o.filter),
        (o.complement = o.abscomp = o.absoluteComplement),
        (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      var r = {
        isNode: function () {
          return "nodes" === this.group();
        },
        isEdge: function () {
          return "edges" === this.group();
        },
        isLoop: function () {
          return this.isEdge() && this.source().id() === this.target().id();
        },
        isSimple: function () {
          return this.isEdge() && this.source().id() !== this.target().id();
        },
        group: function () {
          var e = this[0];
          if (e) return e._private.group;
        },
      };
      e.exports = r;
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(17),
        a = n(1),
        o = {
          forEach: function (e, t) {
            if (r.fn(e))
              for (var n = 0; n < this.length; n++) {
                var i = this[n],
                  a = t ? e.apply(t, [i, n, this]) : e(i, n, this);
                if (!1 === a) break;
              }
            return this;
          },
          toArray: function () {
            for (var e = [], t = 0; t < this.length; t++) e.push(this[t]);
            return e;
          },
          slice: function (e, t) {
            var n = [],
              r = this.length;
            null == t && (t = r),
              null == e && (e = 0),
              e < 0 && (e = r + e),
              t < 0 && (t = r + t);
            for (var i = e; i >= 0 && i < t && i < r; i++) n.push(this[i]);
            return this.spawn(n);
          },
          size: function () {
            return this.length;
          },
          eq: function (e) {
            return this[e] || this.spawn();
          },
          first: function () {
            return this[0] || this.spawn();
          },
          last: function () {
            return this[this.length - 1] || this.spawn();
          },
          empty: function () {
            return 0 === this.length;
          },
          nonempty: function () {
            return !this.empty();
          },
          sort: function (e) {
            if (!r.fn(e)) return this;
            var t = this.toArray().sort(e);
            return this.spawn(t);
          },
          sortByZIndex: function () {
            return this.sort(i);
          },
          zDepth: function () {
            var e = this[0];
            if (e) {
              var t = e._private;
              if ("nodes" === t.group) {
                var n = t.data.parent ? e.parents().size() : 0;
                return e.isParent() ? n : a.MAX_INT - 1;
              }
              var r = t.source,
                i = t.target,
                o = r.zDepth(),
                s = i.zDepth();
              return Math.max(o, s, 0);
            }
          },
        };
      (o.each = o.forEach), (e.exports = o);
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(1),
        a = n(5),
        o = n(2),
        s = {
          layoutDimensions: function (e) {
            if (
              ((e = i.assign({ nodeDimensionsIncludeLabels: !0 }, e)),
              e.nodeDimensionsIncludeLabels)
            ) {
              var t = this.boundingBox();
              return { w: t.w, h: t.h };
            }
            return { w: this.outerWidth(), h: this.outerHeight() };
          },
          layoutPositions: function (e, t, n) {
            var s = this.nodes(),
              l = this.cy(),
              u = t.eles,
              c = function (e, t) {
                return e.id() + "$" + t;
              },
              d = i.memoize(n, c);
            e.emit({ type: "layoutstart", layout: e }), (e.animations = []);
            var h = function (e, t, n) {
                var r = { x: t.x1 + t.w / 2, y: t.y1 + t.h / 2 },
                  i = { x: (n.x - r.x) * e, y: (n.y - r.y) * e };
                return { x: r.x + i.x, y: r.y + i.y };
              },
              p = t.spacingFactor && 1 !== t.spacingFactor,
              f = (function () {
                if (!p) return null;
                for (var e = o.makeBoundingBox(), t = 0; t < s.length; t++) {
                  var n = s[t],
                    r = d(n, t);
                  o.expandBoundingBoxByPoint(e, r.x, r.y);
                }
                return e;
              })(),
              v = i.memoize(function (e, n) {
                var i = d(e, n),
                  a = e.position();
                if (
                  ((r.number(a.x) && r.number(a.y)) ||
                    e.silentPosition({ x: 0, y: 0 }),
                  p)
                ) {
                  var o = Math.abs(t.spacingFactor);
                  i = h(o, f, i);
                }
                return null != t.transform && (i = t.transform(e, i)), i;
              }, c);
            if (t.animate) {
              for (var g = 0; g < s.length; g++) {
                var y = s[g],
                  m = v(y, g);
                if (null == t.animateFilter || t.animateFilter(y, g)) {
                  var b = y.animation({
                    position: m,
                    duration: t.animationDuration,
                    easing: t.animationEasing,
                  });
                  e.animations.push(b), b.play();
                } else y.position(m);
              }
              if (t.fit) {
                var x = l.animation({
                  fit: { boundingBox: u.boundingBoxAt(v), padding: t.padding },
                  duration: t.animationDuration,
                  easing: t.animationEasing,
                });
                e.animations.push(x), x.play();
              } else if (void 0 !== t.zoom && void 0 !== t.pan) {
                var w = l.animation({
                  zoom: t.zoom,
                  pan: t.pan,
                  duration: t.animationDuration,
                  easing: t.animationEasing,
                });
                e.animations.push(w), w.play();
              }
              e.one("layoutready", t.ready),
                e.emit({ type: "layoutready", layout: e }),
                a
                  .all(
                    e.animations.map(function (e) {
                      return e.promise();
                    })
                  )
                  .then(function () {
                    e.one("layoutstop", t.stop),
                      e.emit({ type: "layoutstop", layout: e });
                  });
            } else
              s.positions(v),
                t.fit && l.fit(t.eles, t.padding),
                null != t.zoom && l.zoom(t.zoom),
                t.pan && l.pan(t.pan),
                e.one("layoutready", t.ready),
                e.emit({ type: "layoutready", layout: e }),
                e.one("layoutstop", t.stop),
                e.emit({ type: "layoutstop", layout: e });
            return this;
          },
          layout: function (e) {
            return this.cy().makeLayout(i.extend({}, e, { eles: this }));
          },
        };
      (s.createLayout = s.makeLayout = s.layout), (e.exports = s);
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        var r,
          i = n._private,
          a = (i.styleCache = i.styleCache || {});
        return null != (r = a[e]) ? r : (r = a[e] = t(n));
      }
      function i(e, t) {
        return function (n) {
          return r(e, t, n);
        };
      }
      function a(e, t) {
        var n = function (e) {
          return t.call(e);
        };
        return function () {
          var t = this[0];
          if (t) return r(e, n, t);
        };
      }
      function o(e, t) {
        var n = e._private,
          r = n.data.parent ? e.parents() : null;
        if (r)
          for (var i = 0; i < r.length; i++) {
            var a = r[i];
            if (!t(a)) return !1;
          }
        return !0;
      }
      function s(e) {
        var t = e.ok,
          n = e.edgeOkViaNode || e.ok,
          r = e.parentOk || e.ok;
        return function () {
          var e = this.cy();
          if (!e.styleEnabled()) return !0;
          var i = this[0],
            a = e.hasCompoundNodes();
          if (i) {
            var s = i._private;
            if (!t(i)) return !1;
            if (i.isNode()) return !a || o(i, r);
            var l = s.source,
              u = s.target;
            return (
              n(l) && (!a || o(l, n)) && (l === u || (n(u) && (!a || o(u, n))))
            );
          }
        };
      }
      var l = n(0),
        u = {
          recalculateRenderedStyle: function (e) {
            var t = this.cy(),
              n = t.renderer(),
              r = t.styleEnabled();
            return n && r && n.recalculateRenderedStyle(this, e), this;
          },
          dirtyStyleCache: function () {
            var e = this.cy(),
              t = function (e) {
                return (e._private.styleCache = {});
              };
            if (e.hasCompoundNodes()) {
              var n = void 0;
              (n = this.spawnSelf()
                .merge(this.descendants())
                .merge(this.parents())),
                n.merge(n.connectedEdges()),
                n.forEach(t);
            } else
              this.forEach(function (e) {
                t(e), e.connectedEdges().forEach(t);
              });
            return this;
          },
          updateStyle: function (e) {
            var t = this._private.cy;
            if (!t.styleEnabled()) return this;
            if (t._private.batchingStyle) {
              return t._private.batchStyleEles.merge(this), this;
            }
            var n = t.hasCompoundNodes(),
              r = t.style(),
              i = this;
            (e = !(!e && void 0 !== e)),
              n &&
                (i = this.spawnSelf()
                  .merge(this.descendants())
                  .merge(this.parents()));
            var a = r.apply(i);
            return (
              a.dirtyStyleCache(),
              a.dirtyCompoundBoundsCache(),
              e ? a.emitAndNotify("style") : a.emit("style"),
              this
            );
          },
          updateMappers: function (e) {
            var t = this._private.cy,
              n = t.style();
            if (((e = !(!e && void 0 !== e)), !t.styleEnabled())) return this;
            var r = n.updateMappers(this);
            return (
              r.dirtyStyleCache(),
              r.dirtyCompoundBoundsCache(),
              e ? r.emitAndNotify("style") : r.emit("style"),
              this
            );
          },
          parsedStyle: function (e) {
            var t = this[0],
              n = t.cy();
            if (n.styleEnabled())
              return t
                ? t._private.style[e] || n.style().getDefaultProperty(e)
                : void 0;
          },
          numericStyle: function (e) {
            var t = this[0];
            if (t.cy().styleEnabled() && t) {
              var n = t.pstyle(e);
              return void 0 !== n.pfValue ? n.pfValue : n.value;
            }
          },
          numericStyleUnits: function (e) {
            var t = this[0];
            if (t.cy().styleEnabled()) return t ? t.pstyle(e).units : void 0;
          },
          renderedStyle: function (e) {
            var t = this.cy();
            if (!t.styleEnabled()) return this;
            var n = this[0];
            return n ? t.style().getRenderedStyle(n, e) : void 0;
          },
          style: function (e, t) {
            var n = this.cy();
            if (!n.styleEnabled()) return this;
            var r = n.style();
            if (l.plainObject(e)) {
              var i = e;
              r.applyBypass(this, i, !1),
                this.dirtyStyleCache(),
                this.dirtyCompoundBoundsCache(),
                this.emitAndNotify("style");
            } else if (l.string(e)) {
              if (void 0 === t) {
                var a = this[0];
                return a ? r.getStylePropertyValue(a, e) : void 0;
              }
              r.applyBypass(this, e, t, !1),
                this.dirtyStyleCache(),
                this.dirtyCompoundBoundsCache(),
                this.emitAndNotify("style");
            } else if (void 0 === e) {
              var o = this[0];
              return o ? r.getRawStyle(o) : void 0;
            }
            return this;
          },
          removeStyle: function (e) {
            var t = this.cy();
            if (!t.styleEnabled()) return this;
            var n = t.style(),
              r = this;
            if (void 0 === e)
              for (var i = 0; i < r.length; i++) {
                var a = r[i];
                n.removeAllBypasses(a, !1);
              }
            else {
              e = e.split(/\s+/);
              for (var o = 0; o < r.length; o++) {
                var s = r[o];
                n.removeBypasses(s, e, !1);
              }
            }
            return (
              this.dirtyStyleCache(),
              this.dirtyCompoundBoundsCache(),
              this.emitAndNotify("style"),
              this
            );
          },
          show: function () {
            return this.css("display", "element"), this;
          },
          hide: function () {
            return this.css("display", "none"), this;
          },
          effectiveOpacity: function () {
            var e = this.cy();
            if (!e.styleEnabled()) return 1;
            var t = e.hasCompoundNodes(),
              n = this[0];
            if (n) {
              var r = n._private,
                i = n.pstyle("opacity").value;
              if (!t) return i;
              var a = r.data.parent ? n.parents() : null;
              if (a)
                for (var o = 0; o < a.length; o++) {
                  var s = a[o],
                    l = s.pstyle("opacity").value;
                  i *= l;
                }
              return i;
            }
          },
          transparent: function () {
            if (!this.cy().styleEnabled()) return !1;
            var e = this[0],
              t = e.cy().hasCompoundNodes();
            return e
              ? t
                ? 0 === e.effectiveOpacity()
                : 0 === e.pstyle("opacity").value
              : void 0;
          },
          backgrounding: function () {
            return (
              !!this.cy().styleEnabled() && !!this[0]._private.backgrounding
            );
          },
        },
        c = i("eleTakesUpSpace", function (e) {
          return (
            "element" === e.pstyle("display").value &&
            0 !== e.width() &&
            (!e.isNode() || 0 !== e.height())
          );
        });
      u.takesUpSpace = a("takesUpSpace", s({ ok: c }));
      var d = i("eleInteractive", function (e) {
          return (
            "yes" === e.pstyle("events").value &&
            "visible" === e.pstyle("visibility").value &&
            c(e)
          );
        }),
        h = i("parentInteractive", function (e) {
          return "visible" === e.pstyle("visibility").value && c(e);
        });
      (u.interactive = a(
        "interactive",
        s({ ok: d, parentOk: h, edgeOkViaNode: c })
      )),
        (u.noninteractive = function () {
          var e = this[0];
          if (e) return !e.interactive();
        });
      var p = i("eleVisible", function (e) {
          return (
            "visible" === e.pstyle("visibility").value &&
            0 !== e.pstyle("opacity").pfValue &&
            c(e)
          );
        }),
        f = c;
      (u.visible = a("visible", s({ ok: p, edgeOkViaNode: f }))),
        (u.hidden = function () {
          var e = this[0];
          if (e) return !e.visible();
        }),
        (u.bypass = u.css = u.style),
        (u.renderedCss = u.renderedStyle),
        (u.removeBypass = u.removeCss = u.removeStyle),
        (u.pstyle = u.parsedStyle),
        (e.exports = u);
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return function () {
          var t = arguments,
            n = [];
          if (2 === t.length) {
            var r = t[0],
              i = t[1];
            this.on(e.event, r, i);
          } else if (1 === t.length) {
            var a = t[0];
            this.on(e.event, a);
          } else if (0 === t.length) {
            for (var o = 0; o < this.length; o++) {
              var s = this[o],
                l = !e.ableField || s._private[e.ableField],
                u = s._private[e.field] != e.value;
              if (e.overrideAble) {
                var c = e.overrideAble(s);
                if (void 0 !== c && ((l = c), !c)) return this;
              }
              l && ((s._private[e.field] = e.value), u && n.push(s));
            }
            var d = this.spawn(n);
            d.updateStyle(), d.emit(e.event);
          }
          return this;
        };
      }
      function i(e) {
        (a[e.field] = function () {
          var t = this[0];
          if (t) {
            if (e.overrideField) {
              var n = e.overrideField(t);
              if (void 0 !== n) return n;
            }
            return t._private[e.field];
          }
        }),
          (a[e.on] = r({
            event: e.on,
            field: e.field,
            ableField: e.ableField,
            overrideAble: e.overrideAble,
            value: !0,
          })),
          (a[e.off] = r({
            event: e.off,
            field: e.field,
            ableField: e.ableField,
            overrideAble: e.overrideAble,
            value: !1,
          }));
      }
      var a = {};
      i({
        field: "locked",
        overrideField: function (e) {
          return !!e.cy().autolock() || void 0;
        },
        on: "lock",
        off: "unlock",
      }),
        i({
          field: "grabbable",
          overrideField: function (e) {
            return !e.cy().autoungrabify() && void 0;
          },
          on: "grabify",
          off: "ungrabify",
        }),
        i({
          field: "selected",
          ableField: "selectable",
          overrideAble: function (e) {
            return !e.cy().autounselectify() && void 0;
          },
          on: "select",
          off: "unselect",
        }),
        i({
          field: "selectable",
          overrideField: function (e) {
            return !e.cy().autounselectify() && void 0;
          },
          on: "selectify",
          off: "unselectify",
        }),
        (a.deselect = a.unselect),
        (a.grabbed = function () {
          var e = this[0];
          if (e) return e._private.grabbed;
        }),
        i({ field: "active", on: "activate", off: "unactivate" }),
        (a.inactive = function () {
          var e = this[0];
          if (e) return !e._private.active;
        }),
        (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return function (t) {
          for (var n = [], r = 0; r < this.length; r++) {
            var i = this[r],
              a = i._private[e.attr];
            a && n.push(a);
          }
          return this.spawn(n, { unique: !0 }).filter(t);
        };
      }
      function i(e) {
        return function (t) {
          var n = [],
            r = this._private.cy,
            i = e || {};
          s.string(t) && (t = r.$(t));
          for (var a = 0; a < t.length; a++)
            for (var o = t[a]._private.edges, l = 0; l < o.length; l++) {
              var u = o[l],
                c = u._private.data,
                d =
                  this.hasElementWithId(c.source) &&
                  t.hasElementWithId(c.target),
                h =
                  t.hasElementWithId(c.source) &&
                  this.hasElementWithId(c.target),
                p = d || h;
              if (p) {
                if (i.thisIsSrc || i.thisIsTgt) {
                  if (i.thisIsSrc && !d) continue;
                  if (i.thisIsTgt && !h) continue;
                }
                n.push(u);
              }
            }
          return this.spawn(n, { unique: !0 });
        };
      }
      function a(e) {
        var t = { codirected: !1 };
        return (
          (e = o.extend({}, t, e)),
          function (t) {
            for (var n = [], r = this.edges(), i = e, a = 0; a < r.length; a++)
              for (
                var o = r[a],
                  s = o._private,
                  l = s.source,
                  u = l._private.data.id,
                  c = s.data.target,
                  d = l._private.edges,
                  h = 0;
                h < d.length;
                h++
              ) {
                var p = d[h],
                  f = p._private.data,
                  v = f.target,
                  g = f.source,
                  y = v === c && g === u,
                  m = u === v && c === g;
                ((i.codirected && y) || (!i.codirected && (y || m))) &&
                  n.push(p);
              }
            return this.spawn(n, { unique: !0 }).filter(t);
          }
        );
      }
      var o = n(1),
        s = n(0),
        l = {},
        u = function (e, t) {
          return function (n, r, i, a) {
            var o = n,
              l = this,
              u = void 0;
            if (
              (null == o
                ? (u = "null")
                : s.elementOrCollection(o) &&
                  1 === o.length &&
                  (u = "#" + o.id()),
              1 === l.length && u)
            ) {
              var c = l[0]._private,
                d = (c.traversalCache = c.traversalCache || {}),
                h = (d[t] = d[t] || {}),
                p = h[u];
              return p || (h[u] = e.call(l, n, r, i, a));
            }
            return e.call(l, n, r, i, a);
          };
        },
        c = function (e) {
          return function (t) {
            for (var n = this, r = [], i = 0; i < n.length; i++) {
              var a = n[i];
              if (a.isNode()) {
                for (
                  var o = !1, s = a.connectedEdges(), l = 0;
                  l < s.length;
                  l++
                ) {
                  var u = s[l],
                    c = u.source(),
                    d = u.target();
                  if (
                    (e.noIncomingEdges && d === a && c !== a) ||
                    (e.noOutgoingEdges && c === a && d !== a)
                  ) {
                    o = !0;
                    break;
                  }
                }
                o || r.push(a);
              }
            }
            return this.spawn(r, { unique: !0 }).filter(t);
          };
        },
        d = function (e) {
          return function (t) {
            for (var n = this, r = [], i = 0; i < n.length; i++) {
              var a = n[i];
              if (a.isNode())
                for (var o = a.connectedEdges(), s = 0; s < o.length; s++) {
                  var l = o[s],
                    u = l.source(),
                    c = l.target();
                  e.outgoing && u === a
                    ? (r.push(l), r.push(c))
                    : e.incoming && c === a && (r.push(l), r.push(u));
                }
            }
            return this.spawn(r, { unique: !0 }).filter(t);
          };
        },
        h = function (e) {
          return function (t) {
            for (var n = this, r = [], i = {}; ; ) {
              var a = e.outgoing ? n.outgoers() : n.incomers();
              if (0 === a.length) break;
              for (var o = !1, s = 0; s < a.length; s++) {
                var l = a[s],
                  u = l.id();
                i[u] || ((i[u] = !0), r.push(l), (o = !0));
              }
              if (!o) break;
              n = a;
            }
            return this.spawn(r, { unique: !0 }).filter(t);
          };
        };
      (l.clearTraversalCache = function () {
        for (var e = 0; e < this.length; e++)
          this[e]._private.traversalCache = null;
      }),
        o.extend(l, {
          roots: c({ noIncomingEdges: !0 }),
          leaves: c({ noOutgoingEdges: !0 }),
          outgoers: u(d({ outgoing: !0 }), "outgoers"),
          successors: h({ outgoing: !0 }),
          incomers: u(d({ incoming: !0 }), "incomers"),
          predecessors: h({ incoming: !0 }),
        }),
        o.extend(l, {
          neighborhood: u(function (e) {
            for (var t = [], n = this.nodes(), r = 0; r < n.length; r++)
              for (
                var i = n[r], a = i.connectedEdges(), o = 0;
                o < a.length;
                o++
              ) {
                var s = a[o],
                  l = s.source(),
                  u = s.target(),
                  c = i === l ? u : l;
                c.length > 0 && t.push(c[0]), t.push(s[0]);
              }
            return this.spawn(t, { unique: !0 }).filter(e);
          }, "neighborhood"),
          closedNeighborhood: function (e) {
            return this.neighborhood().add(this).filter(e);
          },
          openNeighborhood: function (e) {
            return this.neighborhood(e);
          },
        }),
        (l.neighbourhood = l.neighborhood),
        (l.closedNeighbourhood = l.closedNeighborhood),
        (l.openNeighbourhood = l.openNeighborhood),
        o.extend(l, {
          source: u(function (e) {
            var t = this[0],
              n = void 0;
            return (
              t && (n = t._private.source || t.cy().collection()),
              n && e ? n.filter(e) : n
            );
          }, "source"),
          target: u(function (e) {
            var t = this[0],
              n = void 0;
            return (
              t && (n = t._private.target || t.cy().collection()),
              n && e ? n.filter(e) : n
            );
          }, "target"),
          sources: r({ attr: "source" }),
          targets: r({ attr: "target" }),
        }),
        o.extend(l, {
          edgesWith: u(i(), "edgesWith"),
          edgesTo: u(i({ thisIsSrc: !0 }), "edgesTo"),
        }),
        o.extend(l, {
          connectedEdges: u(function (e) {
            for (var t = [], n = this, r = 0; r < n.length; r++) {
              var i = n[r];
              if (i.isNode())
                for (var a = i._private.edges, o = 0; o < a.length; o++) {
                  var s = a[o];
                  t.push(s);
                }
            }
            return this.spawn(t, { unique: !0 }).filter(e);
          }, "connectedEdges"),
          connectedNodes: u(function (e) {
            for (var t = [], n = this, r = 0; r < n.length; r++) {
              var i = n[r];
              i.isEdge() && (t.push(i.source()[0]), t.push(i.target()[0]));
            }
            return this.spawn(t, { unique: !0 }).filter(e);
          }, "connectedNodes"),
          parallelEdges: u(a(), "parallelEdges"),
          codirectedEdges: u(a({ codirected: !0 }), "codirectedEdges"),
        }),
        o.extend(l, {
          components: function () {
            var e = this,
              t = e.cy(),
              n = e.spawn(),
              r = e.nodes().spawnSelf(),
              i = [],
              a = function (e, t) {
                n.merge(e), r.unmerge(e), t.merge(e);
              };
            if (r.empty()) return e.spawn();
            do {
              !(function () {
                var n = t.collection();
                i.push(n);
                var o = r[0];
                a(o, n),
                  e.bfs({
                    directed: !1,
                    roots: o,
                    visit: function (e, t, r, i, o) {
                      a(e, n);
                    },
                  });
              })();
            } while (r.length > 0);
            return i.map(function (e) {
              var t = e.connectedEdges().stdFilter(function (t) {
                return e.anySame(t.source()) && e.anySame(t.target());
              });
              return e.union(t);
            });
          },
        }),
        (e.exports = l);
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(1),
        a = n(7),
        o = n(14),
        s = {
          add: function (e) {
            var t = void 0,
              n = this;
            if (r.elementOrCollection(e)) {
              var s = e;
              if (s._private.cy === n) t = s.restore();
              else {
                for (var l = [], u = 0; u < s.length; u++) {
                  var c = s[u];
                  l.push(c.json());
                }
                t = new a(n, l);
              }
            } else if (r.array(e)) {
              var d = e;
              t = new a(n, d);
            } else if (
              r.plainObject(e) &&
              (r.array(e.nodes) || r.array(e.edges))
            ) {
              for (
                var h = e, p = [], f = ["nodes", "edges"], v = 0, g = f.length;
                v < g;
                v++
              ) {
                var y = f[v],
                  m = h[y];
                if (r.array(m))
                  for (var b = 0, x = m.length; b < x; b++) {
                    var w = i.extend({ group: y }, m[b]);
                    p.push(w);
                  }
              }
              t = new a(n, p);
            } else {
              var E = e;
              t = new o(n, E).collection();
            }
            return t;
          },
          remove: function (e) {
            if (r.elementOrCollection(e));
            else if (r.string(e)) {
              var t = e;
              e = this.$(t);
            }
            return e.remove();
          },
        };
      e.exports = s;
    },
    function (e, t, n) {
      "use strict";
      var r = n(4),
        i = n(1),
        a = n(72),
        o = {
          animate: r.animate(),
          animation: r.animation(),
          animated: r.animated(),
          clearQueue: r.clearQueue(),
          delay: r.delay(),
          delayAnimation: r.delayAnimation(),
          stop: r.stop(),
          addToAnimationPool: function (e) {
            var t = this;
            t.styleEnabled() && t._private.aniEles.merge(e);
          },
          stopAnimationLoop: function () {
            this._private.animationsRunning = !1;
          },
          startAnimationLoop: function () {
            function e() {
              t._private.animationsRunning &&
                i.requestAnimationFrame(function (n) {
                  a(n, t), e();
                });
            }
            var t = this;
            if (((t._private.animationsRunning = !0), t.styleEnabled())) {
              var n = t.renderer();
              n && n.beforeRender
                ? n.beforeRender(function (e, n) {
                    a(n, t);
                  }, n.beforeRenderPriorities.animations)
                : e();
            }
          },
        };
      e.exports = o;
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        function n(t, n) {
          var r = t._private,
            s = r.animation.current,
            l = r.animation.queue,
            u = !1;
          if (!n && "none" === t.pstyle("display").value) {
            s = s.splice(0, s.length).concat(l.splice(0, l.length));
            for (var c = 0; c < s.length; c++) s[c].stop();
          }
          if (0 === s.length) {
            var d = l.shift();
            d && s.push(d);
          }
          for (
            var h = function (e) {
                for (var t = e.length - 1; t >= 0; t--) {
                  (0, e[t])();
                }
                e.splice(0, e.length);
              },
              p = s.length - 1;
            p >= 0;
            p--
          ) {
            var f = s[p],
              v = f._private;
            v.stopped
              ? (s.splice(p, 1),
                (v.hooked = !1),
                (v.playing = !1),
                (v.started = !1),
                h(v.frames))
              : (v.playing || v.applying) &&
                (v.playing && v.applying && (v.applying = !1),
                v.started || a(t, f, e, n),
                i(t, f, e, n),
                v.applying && (v.applying = !1),
                h(v.frames),
                f.completed() &&
                  (s.splice(p, 1),
                  (v.hooked = !1),
                  (v.playing = !1),
                  (v.started = !1),
                  h(v.completes)),
                (u = !0));
          }
          return n || 0 !== s.length || 0 !== l.length || o.push(t), u;
        }
        for (
          var r = t._private.aniEles, o = [], s = !1, l = 0;
          l < r.length;
          l++
        ) {
          var u = r[l],
            c = n(u);
          s = s || c;
        }
        var d = n(t, !0);
        (s || d) &&
          (r.length > 0
            ? (r.dirtyCompoundBoundsCache(),
              t.notify({ type: "draw", eles: r }))
            : t.notify({ type: "draw" })),
          r.unmerge(o),
          t.emit("step");
      }
      var i = n(73),
        a = n(78);
      e.exports = r;
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n, r) {
        var l = !r,
          u = e._private,
          c = t._private,
          d = c.easing,
          h = c.startTime,
          p = r ? e : e.cy(),
          f = p.style();
        if (!c.easingImpl)
          if (null == d) c.easingImpl = a.linear;
          else {
            var v = void 0;
            if (s.string(d)) {
              var g = f.parse("transition-timing-function", d);
              v = g.value;
            } else v = d;
            var y = void 0,
              m = void 0;
            s.string(v)
              ? ((y = v), (m = []))
              : ((y = v[1]),
                (m = v.slice(2).map(function (e) {
                  return +e;
                }))),
              m.length > 0
                ? ("spring" === y && m.push(c.duration),
                  (c.easingImpl = a[y].apply(null, m)))
                : (c.easingImpl = a[y]);
          }
        var b = c.easingImpl,
          x = void 0;
        if (
          ((x = 0 === c.duration ? 1 : (n - h) / c.duration),
          c.applying && (x = c.progress),
          x < 0 ? (x = 0) : x > 1 && (x = 1),
          null == c.delay)
        ) {
          var w = c.startPosition,
            E = c.position;
          if (E && l && !e.locked()) {
            var P = e.position();
            i(w.x, E.x) && (P.x = o(w.x, E.x, x, b)),
              i(w.y, E.y) && (P.y = o(w.y, E.y, x, b)),
              e.emit("position");
          }
          var C = c.startPan,
            S = c.pan,
            T = u.pan,
            D = null != S && r;
          D &&
            (i(C.x, S.x) && (T.x = o(C.x, S.x, x, b)),
            i(C.y, S.y) && (T.y = o(C.y, S.y, x, b)),
            e.emit("pan"));
          var k = c.startZoom,
            _ = c.zoom,
            M = null != _ && r;
          M && (i(k, _) && (u.zoom = o(k, _, x, b)), e.emit("zoom")),
            (D || M) && e.emit("viewport");
          var I = c.style;
          if (I && I.length > 0 && l) {
            for (var N = 0; N < I.length; N++) {
              var B = I[N],
                z = B.name,
                L = B,
                A = c.startStyle[z],
                O = f.properties[A.name],
                R = o(A, L, x, b, O);
              f.overrideBypass(e, z, R);
            }
            e.emit("style");
          }
        }
        return (c.progress = x), x;
      }
      function i(e, t) {
        return (
          null != e &&
          null != t &&
          (!(!s.number(e) || !s.number(t)) || !(!e || !t))
        );
      }
      var a = n(74),
        o = n(77),
        s = n(0);
      e.exports = r;
    },
    function (e, t, n) {
      "use strict";
      var r = n(75),
        i = n(76),
        a = function (e, t, n, i) {
          var a = r(e, t, n, i);
          return function (e, t, n) {
            return e + (t - e) * a(n);
          };
        },
        o = {
          linear: function (e, t, n) {
            return e + (t - e) * n;
          },
          ease: a(0.25, 0.1, 0.25, 1),
          "ease-in": a(0.42, 0, 1, 1),
          "ease-out": a(0, 0, 0.58, 1),
          "ease-in-out": a(0.42, 0, 0.58, 1),
          "ease-in-sine": a(0.47, 0, 0.745, 0.715),
          "ease-out-sine": a(0.39, 0.575, 0.565, 1),
          "ease-in-out-sine": a(0.445, 0.05, 0.55, 0.95),
          "ease-in-quad": a(0.55, 0.085, 0.68, 0.53),
          "ease-out-quad": a(0.25, 0.46, 0.45, 0.94),
          "ease-in-out-quad": a(0.455, 0.03, 0.515, 0.955),
          "ease-in-cubic": a(0.55, 0.055, 0.675, 0.19),
          "ease-out-cubic": a(0.215, 0.61, 0.355, 1),
          "ease-in-out-cubic": a(0.645, 0.045, 0.355, 1),
          "ease-in-quart": a(0.895, 0.03, 0.685, 0.22),
          "ease-out-quart": a(0.165, 0.84, 0.44, 1),
          "ease-in-out-quart": a(0.77, 0, 0.175, 1),
          "ease-in-quint": a(0.755, 0.05, 0.855, 0.06),
          "ease-out-quint": a(0.23, 1, 0.32, 1),
          "ease-in-out-quint": a(0.86, 0, 0.07, 1),
          "ease-in-expo": a(0.95, 0.05, 0.795, 0.035),
          "ease-out-expo": a(0.19, 1, 0.22, 1),
          "ease-in-out-expo": a(1, 0, 0, 1),
          "ease-in-circ": a(0.6, 0.04, 0.98, 0.335),
          "ease-out-circ": a(0.075, 0.82, 0.165, 1),
          "ease-in-out-circ": a(0.785, 0.135, 0.15, 0.86),
          spring: function (e, t, n) {
            if (0 === n) return o.linear;
            var r = i(e, t, n);
            return function (e, t, n) {
              return e + (t - e) * r(n);
            };
          },
          "cubic-bezier": a,
        };
      e.exports = o;
    },
    function (e, t, n) {
      "use strict"; /*! Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
      function r(e, t, n, r) {
        function i(e, t) {
          return 1 - 3 * t + 3 * e;
        }
        function a(e, t) {
          return 3 * t - 6 * e;
        }
        function o(e) {
          return 3 * e;
        }
        function s(e, t, n) {
          return ((i(t, n) * e + a(t, n)) * e + o(t)) * e;
        }
        function l(e, t, n) {
          return 3 * i(t, n) * e * e + 2 * a(t, n) * e + o(t);
        }
        function u(t, r) {
          for (var i = 0; i < f; ++i) {
            var a = l(r, e, n);
            if (0 === a) return r;
            r -= (s(r, e, n) - t) / a;
          }
          return r;
        }
        function c() {
          for (var t = 0; t < m; ++t) E[t] = s(t * b, e, n);
        }
        function d(t, r, i) {
          var a = void 0,
            o = void 0,
            l = 0;
          do {
            (o = r + (i - r) / 2),
              (a = s(o, e, n) - t),
              a > 0 ? (i = o) : (r = o);
          } while (Math.abs(a) > g && ++l < y);
          return o;
        }
        function h(t) {
          for (var r = 0, i = 1, a = m - 1; i !== a && E[i] <= t; ++i) r += b;
          --i;
          var o = (t - E[i]) / (E[i + 1] - E[i]),
            s = r + o * b,
            c = l(s, e, n);
          return c >= v ? u(t, s) : 0 === c ? s : d(t, r, r + b);
        }
        function p() {
          (P = !0), (e === t && n === r) || c();
        }
        var f = 4,
          v = 0.001,
          g = 1e-7,
          y = 10,
          m = 11,
          b = 1 / (m - 1),
          x = "undefined" != typeof Float32Array;
        if (4 !== arguments.length) return !1;
        for (var w = 0; w < 4; ++w)
          if (
            "number" != typeof arguments[w] ||
            isNaN(arguments[w]) ||
            !isFinite(arguments[w])
          )
            return !1;
        (e = Math.min(e, 1)),
          (n = Math.min(n, 1)),
          (e = Math.max(e, 0)),
          (n = Math.max(n, 0));
        var E = x ? new Float32Array(m) : new Array(m),
          P = !1,
          C = function (i) {
            return (
              P || p(),
              e === t && n === r ? i : 0 === i ? 0 : 1 === i ? 1 : s(h(i), t, r)
            );
          };
        C.getControlPoints = function () {
          return [
            { x: e, y: t },
            { x: n, y: r },
          ];
        };
        var S = "generateBezier(" + [e, t, n, r] + ")";
        return (
          (C.toString = function () {
            return S;
          }),
          C
        );
      }
      e.exports = r;
    },
    function (e, t, n) {
      "use strict"; /*! Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
      var r = (function () {
        function e(e) {
          return -e.tension * e.x - e.friction * e.v;
        }
        function t(t, n, r) {
          var i = {
            x: t.x + r.dx * n,
            v: t.v + r.dv * n,
            tension: t.tension,
            friction: t.friction,
          };
          return { dx: i.v, dv: e(i) };
        }
        function n(n, r) {
          var i = { dx: n.v, dv: e(n) },
            a = t(n, 0.5 * r, i),
            o = t(n, 0.5 * r, a),
            s = t(n, r, o),
            l = (1 / 6) * (i.dx + 2 * (a.dx + o.dx) + s.dx),
            u = (1 / 6) * (i.dv + 2 * (a.dv + o.dv) + s.dv);
          return (n.x = n.x + l * r), (n.v = n.v + u * r), n;
        }
        return function e(t, r, i) {
          var a = { x: -1, v: 0, tension: null, friction: null },
            o = [0],
            s = 0,
            l = void 0,
            u = void 0,
            c = void 0;
          for (
            t = parseFloat(t) || 500,
              r = parseFloat(r) || 20,
              i = i || null,
              a.tension = t,
              a.friction = r,
              l = null !== i,
              l ? ((s = e(t, r)), (u = (s / i) * 0.016)) : (u = 0.016);
            (c = n(c || a, u)),
              o.push(1 + c.x),
              (s += 16),
              Math.abs(c.x) > 1e-4 && Math.abs(c.v) > 1e-4;

          );
          return l
            ? function (e) {
                return o[(e * (o.length - 1)) | 0];
              }
            : s;
        };
      })();
      e.exports = r;
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n, r, i) {
        if (1 === r) return n;
        var a = i(t, n, r);
        return null == e
          ? a
          : ((e.roundValue || e.color) && (a = Math.round(a)),
            void 0 !== e.min && (a = Math.max(a, e.min)),
            void 0 !== e.max && (a = Math.min(a, e.max)),
            a);
      }
      function i(e, t, n, i, o) {
        var s = null != o ? o.type : null;
        n < 0 ? (n = 0) : n > 1 && (n = 1);
        var l = void 0,
          u = void 0;
        if (
          ((l =
            null != e.pfValue || null != e.value
              ? null != e.pfValue
                ? e.pfValue
                : e.value
              : e),
          (u =
            null != t.pfValue || null != t.value
              ? null != t.pfValue
                ? t.pfValue
                : t.value
              : t),
          a.number(l) && a.number(u))
        )
          return r(s, l, u, n, i);
        if (a.array(l) && a.array(u)) {
          for (var c = [], d = 0; d < u.length; d++) {
            var h = l[d],
              p = u[d];
            if (null != h && null != p) {
              var f = r(s, h, p, n, i);
              c.push(f);
            } else c.push(p);
          }
          return c;
        }
      }
      var a = n(0);
      e.exports = i;
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n, r) {
        var i = !r,
          a = e,
          o = t._private,
          s = r ? e : e.cy(),
          l = s.style();
        if (i) {
          var u = a.position();
          (o.startPosition = o.startPosition || { x: u.x, y: u.y }),
            (o.startStyle =
              o.startStyle || l.getAnimationStartStyle(a, o.style));
        }
        if (r) {
          var c = s._private.pan;
          (o.startPan = o.startPan || { x: c.x, y: c.y }),
            (o.startZoom = null != o.startZoom ? o.startZoom : s._private.zoom);
        }
        (o.started = !0), (o.startTime = n - o.progress * o.duration);
      }
      e.exports = r;
    },
    function (e, t, n) {
      "use strict";
      var r = n(11),
        i = n(4),
        a = n(0),
        o = n(1),
        s = n(6),
        l = {
          qualifierCompare: function (e, t) {
            return null == e || null == t
              ? null == e && null == t
              : e.sameText(t);
          },
          eventMatches: function (e, t, n) {
            var r = t.qualifier;
            return (
              null == r ||
              (e !== n.target && a.element(n.target) && r.matches(n.target))
            );
          },
          eventFields: function (e) {
            return { cy: e, target: e };
          },
          callbackContext: function (e, t, n) {
            return null != t.qualifier ? n.target : e;
          },
        },
        u = function (e) {
          return a.string(e) ? new s(e) : e;
        },
        c = {
          createEmitter: function () {
            var e = this._private;
            return (
              e.emitter || (e.emitter = new r(o.assign({ context: this }, l))),
              this
            );
          },
          emitter: function () {
            return this._private.emitter;
          },
          on: function (e, t, n) {
            return this.emitter().on(e, u(t), n), this;
          },
          removeListener: function (e, t, n) {
            return this.emitter().removeListener(e, u(t), n), this;
          },
          one: function (e, t, n) {
            return this.emitter().one(e, u(t), n), this;
          },
          once: function (e, t, n) {
            return this.emitter().one(e, u(t), n), this;
          },
          emit: function (e, t) {
            return this.emitter().emit(e, t), this;
          },
        };
      i.eventAliasesOn(c), (e.exports = c);
    },
    function (e, t, n) {
      "use strict";
      var r = {
        png: function (e) {
          var t = this._private.renderer;
          return (e = e || {}), t.png(e);
        },
        jpg: function (e) {
          var t = this._private.renderer;
          return (e = e || {}), (e.bg = e.bg || "#fff"), t.jpg(e);
        },
      };
      (r.jpeg = r.jpg), (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = n(0),
        a = {
          layout: function (e) {
            var t = this;
            if (null == e)
              return void r.error(
                "Layout options must be specified to make a layout"
              );
            if (null == e.name)
              return void r.error(
                "A `name` must be specified to make a layout"
              );
            var n = e.name,
              a = t.extension("layout", n);
            if (null == a)
              return void r.error(
                "Can not apply layout: No such layout `" +
                  n +
                  "` found; did you include its JS file?"
              );
            var o = void 0;
            return (
              (o = i.string(e.eles)
                ? t.$(e.eles)
                : null != e.eles
                ? e.eles
                : t.$()),
              new a(r.extend({}, e, { cy: t, eles: o }))
            );
          },
        };
      (a.createLayout = a.makeLayout = a.layout), (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      var r = {
        notify: function (e) {
          var t = this._private;
          if (t.batchingNotify) {
            var n = t.batchNotifyEles,
              r = t.batchNotifyTypes;
            return (
              e.eles && n.merge(e.eles),
              void (r.ids[e.type] || (r.push(e.type), (r.ids[e.type] = !0)))
            );
          }
          if (t.notificationsEnabled) {
            var i = this.renderer();
            !this.isDestroyed() && i && i.notify(e);
          }
        },
        notifications: function (e) {
          var t = this._private;
          if (void 0 === e) return t.notificationsEnabled;
          t.notificationsEnabled = !!e;
        },
        noNotifications: function (e) {
          this.notifications(!1), e(), this.notifications(!0);
        },
        batching: function () {
          return this._private.batchCount > 0;
        },
        startBatch: function () {
          var e = this._private;
          return (
            null == e.batchCount && (e.batchCount = 0),
            0 === e.batchCount &&
              ((e.batchingStyle = e.batchingNotify = !0),
              (e.batchStyleEles = this.collection()),
              (e.batchNotifyEles = this.collection()),
              (e.batchNotifyTypes = []),
              (e.batchNotifyTypes.ids = {})),
            e.batchCount++,
            this
          );
        },
        endBatch: function () {
          var e = this._private;
          return (
            e.batchCount--,
            0 === e.batchCount &&
              ((e.batchingStyle = !1),
              e.batchStyleEles.updateStyle(),
              (e.batchingNotify = !1),
              this.notify({
                type: e.batchNotifyTypes,
                eles: e.batchNotifyEles,
              })),
            this
          );
        },
        batch: function (e) {
          return this.startBatch(), e(), this.endBatch(), this;
        },
        batchData: function (e) {
          var t = this;
          return this.batch(function () {
            for (var n = Object.keys(e), r = 0; r < n.length; r++) {
              var i = n[r],
                a = e[i];
              t.getElementById(i).data(a);
            }
          });
        },
      };
      e.exports = r;
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = {
          renderTo: function (e, t, n, r) {
            return this._private.renderer.renderTo(e, t, n, r), this;
          },
          renderer: function () {
            return this._private.renderer;
          },
          forceRender: function () {
            return this.notify({ type: "draw" }), this;
          },
          resize: function () {
            return (
              this.invalidateSize(),
              this.notify({ type: "resize" }),
              this.emit("resize"),
              this
            );
          },
          initRenderer: function (e) {
            var t = this,
              n = t.extension("renderer", e.name);
            if (null == n)
              return void r.error(
                "Can not initialise: No such renderer `%s` found; did you include its JS file?",
                e.name
              );
            (t._private.renderer = new n(r.extend({}, e, { cy: t }))),
              this.notify({ type: "init" });
          },
          destroyRenderer: function () {
            var e = this;
            e.notify({ type: "destroy" });
            var t = e.container();
            if (t)
              for (t._cyreg = null; t.childNodes.length > 0; )
                t.removeChild(t.childNodes[0]);
            e._private.renderer = null;
          },
          onRender: function (e) {
            return this.on("render", e);
          },
          offRender: function (e) {
            return this.off("render", e);
          },
        };
      (i.invalidateDimensions = i.resize), (e.exports = i);
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(7),
        a = {
          collection: function (e, t) {
            return r.string(e)
              ? this.$(e)
              : r.elementOrCollection(e)
              ? e.collection()
              : r.array(e)
              ? new i(this, e, t)
              : new i(this);
          },
          nodes: function (e) {
            var t = this.$(function (e) {
              return e.isNode();
            });
            return e ? t.filter(e) : t;
          },
          edges: function (e) {
            var t = this.$(function (e) {
              return e.isEdge();
            });
            return e ? t.filter(e) : t;
          },
          $: function (e) {
            var t = this._private.elements;
            return e ? t.filter(e) : t.spawnSelf();
          },
          mutableElements: function () {
            return this._private.elements;
          },
        };
      (a.elements = a.filter = a.$), (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(18),
        a = {
          style: function (e) {
            if (e) {
              this.setStyle(e).update();
            }
            return this._private.style;
          },
          setStyle: function (e) {
            var t = this._private;
            return (
              r.stylesheet(e)
                ? (t.style = e.generateStyle(this))
                : r.array(e)
                ? (t.style = i.fromJson(this, e))
                : r.string(e)
                ? (t.style = i.fromString(this, e))
                : (t.style = i(this)),
              t.style
            );
          },
        };
      e.exports = a;
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = n(0),
        a = n(5),
        o = {};
      (o.apply = function (e) {
        var t = this,
          n = t._private,
          r = n.cy,
          i = r.collection();
        n.newStyle &&
          ((n.contextStyles = {}), (n.propDiffs = {}), t.cleanElements(e, !0));
        for (var a = 0; a < e.length; a++) {
          var o = e[a],
            s = t.getContextMeta(o);
          if (!s.empty) {
            i.merge(o);
            var l = t.getContextStyle(s),
              u = t.applyContextStyle(s, l, o);
            n.newStyle || t.updateTransitions(o, u.diffProps),
              t.updateStyleHints(o);
          }
        }
        return (n.newStyle = !1), i;
      }),
        (o.getPropertiesDiff = function (e, t) {
          var n = this,
            r = (n._private.propDiffs = n._private.propDiffs || {}),
            i = e + "-" + t,
            a = r[i];
          if (a) return a;
          for (var o = [], s = {}, l = 0; l < n.length; l++) {
            var u = n[l],
              c = "t" === e[l],
              d = "t" === t[l],
              h = c !== d,
              p = u.mappedProperties.length > 0;
            if (h || p) {
              var f = void 0;
              h && p
                ? (f = u.properties)
                : h
                ? (f = u.properties)
                : p && (f = u.mappedProperties);
              for (var v = 0; v < f.length; v++) {
                for (
                  var g = f[v], y = g.name, m = !1, b = l + 1;
                  b < n.length;
                  b++
                ) {
                  var x = n[b];
                  if ("t" === t[b] && (m = null != x.properties[g.name])) break;
                }
                s[y] || m || ((s[y] = !0), o.push(y));
              }
            }
          }
          return (r[i] = o), o;
        }),
        (o.getContextMeta = function (e) {
          var t = this,
            n = "",
            r = void 0,
            i = e._private.styleCxtKey || "";
          t._private.newStyle && (i = "");
          for (var a = 0; a < t.length; a++) {
            var o = t[a];
            n += o.selector && o.selector.matches(e) ? "t" : "f";
          }
          return (
            (r = t.getPropertiesDiff(i, n)),
            (e._private.styleCxtKey = n),
            { key: n, diffPropNames: r, empty: 0 === r.length }
          );
        }),
        (o.getContextStyle = function (e) {
          var t = e.key,
            n = this,
            r = (this._private.contextStyles =
              this._private.contextStyles || {});
          if (r[t]) return r[t];
          for (var i = { _private: { key: t } }, a = 0; a < n.length; a++) {
            var o = n[a];
            if ("t" === t[a])
              for (var s = 0; s < o.properties.length; s++) {
                var l = o.properties[s];
                i[l.name] = l;
              }
          }
          return (r[t] = i), i;
        }),
        (o.applyContextStyle = function (e, t, n) {
          for (
            var r = this, i = e.diffPropNames, a = {}, o = 0;
            o < i.length;
            o++
          ) {
            var s = i[o],
              l = t[s],
              u = n.pstyle(s);
            if (!l) {
              if (!u) continue;
              l = u.bypass
                ? { name: s, deleteBypassed: !0 }
                : { name: s, delete: !0 };
            }
            if (u !== l) {
              var c = (a[s] = { prev: u });
              r.applyParsedProperty(n, l),
                (c.next = n.pstyle(s)),
                c.next && c.next.bypass && (c.next = c.next.bypassed);
            }
          }
          return { diffProps: a };
        }),
        (o.updateStyleHints = function (e) {
          var t = e._private,
            n = this;
          if (!e.removed()) {
            var r = !1;
            if ("nodes" === t.group)
              for (var i = 1; i <= n.pieBackgroundN; i++) {
                var a = e.pstyle("pie-" + i + "-background-size").value;
                if (a > 0) {
                  r = !0;
                  break;
                }
              }
            t.hasPie = r;
            var o = e.pstyle("text-transform").strValue,
              s = e.pstyle("label").strValue,
              l = e.pstyle("source-label").strValue,
              u = e.pstyle("target-label").strValue,
              c = e.pstyle("font-style").strValue,
              d = e.pstyle("font-size").pfValue + "px",
              h = e.pstyle("font-family").strValue,
              p = e.pstyle("font-weight").strValue,
              f = e.pstyle("text-valign").strValue,
              v = e.pstyle("text-valign").strValue,
              g = e.pstyle("text-outline-width").pfValue,
              y = e.pstyle("text-wrap").strValue,
              m = e.pstyle("text-max-width").pfValue,
              b =
                c +
                "$" +
                d +
                "$" +
                h +
                "$" +
                p +
                "$" +
                o +
                "$" +
                f +
                "$" +
                v +
                "$" +
                g +
                "$" +
                y +
                "$" +
                m;
            (t.labelStyleKey = b),
              (t.sourceLabelKey = b + "$" + l),
              (t.targetLabelKey = b + "$" + u),
              (t.labelKey = b + "$" + s),
              (t.fontKey = c + "$" + p + "$" + d + "$" + h),
              (t.styleKey = Date.now());
          }
        }),
        (o.applyParsedProperty = function (e, t) {
          var n = this,
            a = t,
            o = e._private.style,
            s = void 0,
            l = n.types,
            u = n.properties[a.name].type,
            c = a.bypass,
            d = o[a.name],
            h = d && d.bypass,
            p = e._private,
            f = function () {
              n.checkZOrderTrigger(e, a.name, d ? d.value : null, a.value);
            };
          if (
            ("curve-style" === t.name &&
              "haystack" === t.value &&
              e.isEdge() &&
              (e.isLoop() || e.source().isParent() || e.target().isParent()) &&
              (a = t = this.parse(t.name, "bezier", c)),
            a.delete)
          )
            return (o[a.name] = void 0), f(), !0;
          if (a.deleteBypassed)
            return d
              ? !!d.bypass && ((d.bypassed = void 0), f(), !0)
              : (f(), !0);
          if (a.deleteBypass)
            return d
              ? !!d.bypass && ((o[a.name] = d.bypassed), f(), !0)
              : (f(), !0);
          var v = function () {
            r.error(
              "Do not assign mappings to elements without corresponding data (e.g. ele `" +
                e.id() +
                "` for property `" +
                a.name +
                "` with data field `" +
                a.field +
                "`); try a `[" +
                a.field +
                "]` selector to limit scope to elements with `" +
                a.field +
                "` defined"
            );
          };
          switch (a.mapped) {
            case l.mapData:
              for (
                var g = a.field.split("."), y = p.data, m = 0;
                m < g.length && y;
                m++
              ) {
                y = y[g[m]];
              }
              var b = void 0;
              if (
                ((b = i.number(y)
                  ? (y - a.fieldMin) / (a.fieldMax - a.fieldMin)
                  : 0),
                b < 0 ? (b = 0) : b > 1 && (b = 1),
                u.color)
              ) {
                var x = a.valueMin[0],
                  w = a.valueMax[0],
                  E = a.valueMin[1],
                  P = a.valueMax[1],
                  C = a.valueMin[2],
                  S = a.valueMax[2],
                  T = null == a.valueMin[3] ? 1 : a.valueMin[3],
                  D = null == a.valueMax[3] ? 1 : a.valueMax[3],
                  k = [
                    Math.round(x + (w - x) * b),
                    Math.round(E + (P - E) * b),
                    Math.round(C + (S - C) * b),
                    Math.round(T + (D - T) * b),
                  ];
                s = {
                  bypass: a.bypass,
                  name: a.name,
                  value: k,
                  strValue: "rgb(" + k[0] + ", " + k[1] + ", " + k[2] + ")",
                };
              } else {
                if (!u.number) return !1;
                var _ = a.valueMin + (a.valueMax - a.valueMin) * b;
                s = this.parse(a.name, _, a.bypass, "mapping");
              }
              s || (s = this.parse(a.name, d.strValue, a.bypass, "mapping")),
                s || v(),
                (s.mapping = a),
                (a = s);
              break;
            case l.data:
              var M = a.field.split("."),
                I = p.data;
              if (I)
                for (var N = 0; N < M.length; N++) {
                  var B = M[N];
                  I = I[B];
                }
              if (!(s = this.parse(a.name, I, a.bypass, "mapping"))) {
                var z = d ? d.strValue : "";
                s = this.parse(a.name, z, a.bypass, "mapping");
              }
              s || v(), (s.mapping = a), (a = s);
              break;
            case l.fn:
              var L = a.value,
                A = L(e);
              (s = this.parse(a.name, A, a.bypass, "mapping")),
                (s.mapping = a),
                (a = s);
              break;
            case void 0:
              break;
            default:
              return !1;
          }
          return (
            c
              ? ((a.bypassed = h ? d.bypassed : d), (o[a.name] = a))
              : h
              ? (d.bypassed = a)
              : (o[a.name] = a),
            f(),
            !0
          );
        }),
        (o.cleanElements = function (e, t) {
          for (var n = this, r = n.properties, i = 0; i < e.length; i++) {
            var a = e[i];
            if (t)
              for (var o = a._private.style, s = 0; s < r.length; s++) {
                var l = r[s],
                  u = o[l.name];
                u && (u.bypass ? (u.bypassed = null) : (o[l.name] = null));
              }
            else a._private.style = {};
          }
        }),
        (o.update = function () {
          this._private.cy.mutableElements().updateStyle();
        }),
        (o.updateMappers = function (e) {
          for (
            var t = this, n = this._private.cy, r = n.collection(), i = 0;
            i < e.length;
            i++
          ) {
            for (
              var a = e[i], o = a._private.style, s = !1, l = 0;
              l < t.properties.length;
              l++
            ) {
              var u = t.properties[l],
                c = o[u.name];
              if (c && c.mapping) {
                var d = c.mapping;
                this.applyParsedProperty(a, d), (s = !0);
              }
            }
            s && (this.updateStyleHints(a), r.merge(a));
          }
          return r;
        }),
        (o.updateTransitions = function (e, t, n) {
          var r = this,
            o = e._private,
            s = e.pstyle("transition-property").value,
            l = e.pstyle("transition-duration").pfValue,
            u = e.pstyle("transition-delay").pfValue;
          if (s.length > 0 && l > 0) {
            for (var c = {}, d = !1, h = 0; h < s.length; h++) {
              var p = s[h],
                f = e.pstyle(p),
                v = t[p];
              if (v) {
                var g = v.prev,
                  y = g,
                  m = null != v.next ? v.next : f,
                  b = !1,
                  x = void 0;
                y &&
                  (i.number(y.pfValue) && i.number(m.pfValue)
                    ? ((b = m.pfValue - y.pfValue), (x = y.pfValue + 1e-6 * b))
                    : i.number(y.value) && i.number(m.value)
                    ? ((b = m.value - y.value), (x = y.value + 1e-6 * b))
                    : i.array(y.value) &&
                      i.array(m.value) &&
                      ((b =
                        y.value[0] !== m.value[0] ||
                        y.value[1] !== m.value[1] ||
                        y.value[2] !== m.value[2]),
                      (x = y.strValue)),
                  b &&
                    ((c[p] = m.strValue), this.applyBypass(e, p, x), (d = !0)));
              }
            }
            if (!d) return;
            (o.transitioning = !0),
              new a(function (t) {
                u > 0 ? e.delayAnimation(u).play().promise().then(t) : t();
              })
                .then(function () {
                  return e
                    .animation({
                      style: c,
                      duration: l,
                      easing: e.pstyle("transition-timing-function").value,
                      queue: !1,
                    })
                    .play()
                    .promise();
                })
                .then(function () {
                  r.removeBypasses(e, s),
                    e.emitAndNotify("style"),
                    (o.transitioning = !1);
                });
          } else
            o.transitioning &&
              (this.removeBypasses(e, s),
              e.emitAndNotify("style"),
              (o.transitioning = !1));
        }),
        (o.checkZOrderTrigger = function (e, t, n, r) {
          var i = this.properties[t];
          null == i.triggersZOrder ||
            (null != n && !i.triggersZOrder(n, r)) ||
            this._private.cy.notify({ type: "zorder", eles: e });
        }),
        (e.exports = o);
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(1),
        a = {};
      (a.applyBypass = function (e, t, n, a) {
        var o = this,
          s = [];
        if ("*" === t || "**" === t) {
          if (void 0 !== n)
            for (var l = 0; l < o.properties.length; l++) {
              var u = o.properties[l],
                c = u.name,
                d = this.parse(c, n, !0);
              d && s.push(d);
            }
        } else if (r.string(t)) {
          var h = this.parse(t, n, !0);
          h && s.push(h);
        } else {
          if (!r.plainObject(t)) return !1;
          var p = t;
          a = n;
          for (var f = Object.keys(p), v = 0; v < f.length; v++) {
            var g = f[v],
              y = (o.properties[g], p[g]);
            if ((void 0 === y && (y = p[i.dash2camel(g)]), void 0 !== y)) {
              var m = this.parse(g, y, !0);
              m && s.push(m);
            }
          }
        }
        if (0 === s.length) return !1;
        for (var b = !1, x = 0; x < e.length; x++) {
          for (var w = e[x], E = {}, P = void 0, C = 0; C < s.length; C++) {
            var S = s[C];
            if (a) {
              var T = w.pstyle(S.name);
              P = E[S.name] = { prev: T };
            }
            (b = this.applyParsedProperty(w, S) || b),
              a && (P.next = w.pstyle(S.name));
          }
          b && this.updateStyleHints(w), a && this.updateTransitions(w, E, !0);
        }
        return b;
      }),
        (a.overrideBypass = function (e, t, n) {
          t = i.camel2dash(t);
          for (var r = 0; r < e.length; r++) {
            var a = e[r],
              o = a._private.style[t],
              s = this.properties[t].type,
              l = s.color,
              u = s.mutiple;
            if (o && o.bypass) {
              var c = null != o.pfValue ? o.pfValue : o.value;
              (o.value = n),
                null != o.pfValue && (o.pfValue = n),
                (o.strValue = l
                  ? "rgb(" + n.join(",") + ")"
                  : u
                  ? n.join(" ")
                  : "" + n),
                this.checkZOrderTrigger(a, t, c, n);
            } else this.applyBypass(a, t, n);
          }
        }),
        (a.removeAllBypasses = function (e, t) {
          return this.removeBypasses(e, this.propertyNames, t);
        }),
        (a.removeBypasses = function (e, t, n) {
          for (var r = 0; r < e.length; r++) {
            for (var i = e[r], a = {}, o = 0; o < t.length; o++) {
              var s = t[o],
                l = this.properties[s],
                u = i.pstyle(l.name);
              if (u && u.bypass) {
                var c = this.parse(s, "", !0),
                  d = (a[l.name] = { prev: u });
                this.applyParsedProperty(i, c), (d.next = i.pstyle(l.name));
              }
            }
            this.updateStyleHints(i), n && this.updateTransitions(i, a, !0);
          }
        }),
        (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      var r = n(3),
        i = {};
      (i.getEmSizeInPixels = function () {
        var e = this.containerCss("font-size");
        return null != e ? parseFloat(e) : 1;
      }),
        (i.containerCss = function (e) {
          var t = this._private.cy,
            n = t.container();
          if (r && n && r.getComputedStyle)
            return r.getComputedStyle(n).getPropertyValue(e);
        }),
        (e.exports = i);
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = n(0),
        a = {};
      (a.getRenderedStyle = function (e, t) {
        return t
          ? this.getStylePropertyValue(e, t, !0)
          : this.getRawStyle(e, !0);
      }),
        (a.getRawStyle = function (e, t) {
          var n = this;
          if ((e = e[0])) {
            for (var i = {}, a = 0; a < n.properties.length; a++) {
              var o = n.properties[a],
                s = n.getStylePropertyValue(e, o.name, t);
              null != s && ((i[o.name] = s), (i[r.dash2camel(o.name)] = s));
            }
            return i;
          }
        }),
        (a.getIndexedStyle = function (e, t, n, r) {
          var i = e.pstyle(t)[n][r];
          return null != i ? i : e.cy().style().getDefaultProperty(t)[n][0];
        }),
        (a.getStylePropertyValue = function (e, t, n) {
          var r = this;
          if ((e = e[0])) {
            var i = r.properties[t];
            i.alias && (i = i.pointsTo);
            var a = i.type,
              o = e.pstyle(i.name),
              s = e.cy().zoom();
            if (o) {
              var l = o.units ? a.implicitUnits || "px" : null;
              return l
                ? []
                    .concat(o.pfValue)
                    .map(function (e) {
                      return e * (n ? s : 1) + l;
                    })
                    .join(" ")
                : o.strValue;
            }
          }
        }),
        (a.getAnimationStartStyle = function (e, t) {
          for (var n = {}, r = 0; r < t.length; r++) {
            var a = t[r],
              o = a.name,
              s = e.pstyle(o);
            void 0 !== s &&
              (s = i.plainObject(s)
                ? this.parse(o, s.strValue)
                : this.parse(o, s)),
              s && (n[o] = s);
          }
          return n;
        }),
        (a.getPropsList = function (e) {
          var t = this,
            n = [],
            i = e,
            a = t.properties;
          if (i)
            for (var o = Object.keys(i), s = 0; s < o.length; s++) {
              var l = o[s],
                u = i[l],
                c = a[l] || a[r.camel2dash(l)],
                d = this.parse(c.name, u);
              d && n.push(d);
            }
          return n;
        }),
        (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      var r = {};
      (r.appendFromJson = function (e) {
        for (var t = this, n = 0; n < e.length; n++) {
          var r = e[n],
            i = r.selector,
            a = r.style || r.css,
            o = Object.keys(a);
          t.selector(i);
          for (var s = 0; s < o.length; s++) {
            var l = o[s],
              u = a[l];
            t.css(l, u);
          }
        }
        return t;
      }),
        (r.fromJson = function (e) {
          var t = this;
          return t.resetToDefault(), t.appendFromJson(e), t;
        }),
        (r.json = function () {
          for (var e = [], t = this.defaultLength; t < this.length; t++) {
            for (
              var n = this[t], r = n.selector, i = n.properties, a = {}, o = 0;
              o < i.length;
              o++
            ) {
              var s = i[o];
              a[s.name] = s.strValue;
            }
            e.push({ selector: r ? r.toString() : "core", style: a });
          }
          return e;
        }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = n(6),
        a = {};
      (a.appendFromString = function (e) {
        function t() {
          s = s.length > l.length ? s.substr(l.length) : "";
        }
        function n() {
          u = u.length > c.length ? u.substr(c.length) : "";
        }
        var a = this,
          o = this,
          s = "" + e,
          l = void 0,
          u = void 0,
          c = void 0;
        for (s = s.replace(/[\/][*](\s|.)+?[*][\/]/g, ""); ; ) {
          if (s.match(/^\s*$/)) break;
          var d = s.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
          if (!d) {
            r.error(
              "Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " +
                s
            );
            break;
          }
          l = d[0];
          var h = d[1];
          if ("core" !== h) {
            if (new i(h)._private.invalid) {
              r.error(
                "Skipping parsing of block: Invalid selector found in string stylesheet: " +
                  h
              ),
                t();
              continue;
            }
          }
          var p = d[2],
            f = !1;
          u = p;
          for (var v = []; ; ) {
            if (u.match(/^\s*$/)) break;
            var g = u.match(/^\s*(.+?)\s*:\s*(.+?)\s*;/);
            if (!g) {
              r.error(
                "Skipping parsing of block: Invalid formatting of style property and value definitions found in:" +
                  p
              ),
                (f = !0);
              break;
            }
            c = g[0];
            var y = g[1],
              m = g[2];
            if (a.properties[y]) {
              o.parse(y, m)
                ? (v.push({ name: y, val: m }), n())
                : (r.error(
                    "Skipping property: Invalid property definition in: " + c
                  ),
                  n());
            } else
              r.error("Skipping property: Invalid property name in: " + c), n();
          }
          if (f) {
            t();
            break;
          }
          o.selector(h);
          for (var b = 0; b < v.length; b++) {
            var x = v[b];
            o.css(x.name, x.val);
          }
          t();
        }
        return o;
      }),
        (a.fromString = function (e) {
          var t = this;
          return t.resetToDefault(), t.appendFromString(e), t;
        }),
        (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = n(0),
        a = {};
      !(function () {
        var e = r.regex.number,
          t = r.regex.rgbaNoBackRefs,
          n = r.regex.hslaNoBackRefs,
          o = r.regex.hex3,
          s = r.regex.hex6,
          l = function (e) {
            return "^" + e + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
          },
          u = function (r) {
            var i = e + "|\\w+|" + t + "|" + n + "|" + o + "|" + s;
            return (
              "^" +
              r +
              "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" +
              e +
              ")\\s*\\,\\s*(" +
              e +
              ")\\s*,\\s*(" +
              i +
              ")\\s*\\,\\s*(" +
              i +
              ")\\)$"
            );
          },
          c = [
            "^url\\s*\\(\\s*['\"]?(.+?)['\"]?\\s*\\)$",
            "^(none)$",
            "^(.+)$",
          ];
        a.types = {
          time: { number: !0, min: 0, units: "s|ms", implicitUnits: "ms" },
          percent: {
            number: !0,
            min: 0,
            max: 100,
            units: "%",
            implicitUnits: "%",
          },
          zeroOneNumber: { number: !0, min: 0, max: 1, unitless: !0 },
          zeroOneNumbers: {
            number: !0,
            min: 0,
            max: 1,
            unitless: !0,
            multiple: !0,
          },
          nOneOneNumber: { number: !0, min: -1, max: 1, unitless: !0 },
          nonNegativeInt: { number: !0, min: 0, integer: !0, unitless: !0 },
          position: { enums: ["parent", "origin"] },
          nodeSize: { number: !0, min: 0, enums: ["label"] },
          number: { number: !0, unitless: !0 },
          numbers: { number: !0, unitless: !0, multiple: !0 },
          positiveNumber: { number: !0, unitless: !0, min: 0, strictMin: !0 },
          size: { number: !0, min: 0 },
          bidirectionalSize: { number: !0 },
          bidirectionalSizes: { number: !0, multiple: !0 },
          sizeMaybePercent: { number: !0, min: 0, allowPercent: !0 },
          paddingRelativeTo: {
            enums: ["width", "height", "average", "min", "max"],
          },
          bgWH: {
            number: !0,
            min: 0,
            allowPercent: !0,
            enums: ["auto"],
            multiple: !0,
          },
          bgPos: { number: !0, allowPercent: !0, multiple: !0 },
          bgRelativeTo: { enums: ["inner", "include-padding"], multiple: !0 },
          bgRepeat: {
            enums: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
            multiple: !0,
          },
          bgFit: { enums: ["none", "contain", "cover"], multiple: !0 },
          bgCrossOrigin: {
            enums: ["anonymous", "use-credentials"],
            multiple: !0,
          },
          bgClip: { enums: ["none", "node"] },
          color: { color: !0 },
          bool: { enums: ["yes", "no"] },
          lineStyle: { enums: ["solid", "dotted", "dashed"] },
          borderStyle: { enums: ["solid", "dotted", "dashed", "double"] },
          curveStyle: {
            enums: ["bezier", "unbundled-bezier", "haystack", "segments"],
          },
          fontFamily: { regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$' },
          fontletiant: { enums: ["small-caps", "normal"] },
          fontStyle: { enums: ["italic", "normal", "oblique"] },
          fontWeight: {
            enums: [
              "normal",
              "bold",
              "bolder",
              "lighter",
              "100",
              "200",
              "300",
              "400",
              "500",
              "600",
              "800",
              "900",
              100,
              200,
              300,
              400,
              500,
              600,
              700,
              800,
              900,
            ],
          },
          textDecoration: {
            enums: ["none", "underline", "overline", "line-through"],
          },
          textTransform: { enums: ["none", "uppercase", "lowercase"] },
          textWrap: { enums: ["none", "wrap", "ellipsis"] },
          textBackgroundShape: { enums: ["rectangle", "roundrectangle"] },
          nodeShape: {
            enums: [
              "rectangle",
              "roundrectangle",
              "cutrectangle",
              "bottomroundrectangle",
              "barrel",
              "ellipse",
              "triangle",
              "square",
              "pentagon",
              "hexagon",
              "concavehexagon",
              "heptagon",
              "octagon",
              "tag",
              "star",
              "diamond",
              "vee",
              "rhomboid",
              "polygon",
            ],
          },
          compoundIncludeLabels: { enums: ["include", "exclude"] },
          arrowShape: {
            enums: [
              "tee",
              "triangle",
              "triangle-tee",
              "triangle-cross",
              "triangle-backcurve",
              "half-triangle-overshot",
              "vee",
              "square",
              "circle",
              "diamond",
              "none",
            ],
          },
          arrowFill: { enums: ["filled", "hollow"] },
          display: { enums: ["element", "none"] },
          visibility: { enums: ["hidden", "visible"] },
          zCompoundDepth: { enums: ["bottom", "orphan", "auto", "top"] },
          zIndexCompare: { enums: ["auto", "manual"] },
          valign: { enums: ["top", "center", "bottom"] },
          halign: { enums: ["left", "center", "right"] },
          text: { string: !0 },
          data: { mapping: !0, regex: l("data") },
          layoutData: { mapping: !0, regex: l("layoutData") },
          scratch: { mapping: !0, regex: l("scratch") },
          mapData: { mapping: !0, regex: u("mapData") },
          mapLayoutData: { mapping: !0, regex: u("mapLayoutData") },
          mapScratch: { mapping: !0, regex: u("mapScratch") },
          fn: { mapping: !0, fn: !0 },
          url: { regexes: c, singleRegexMatchValue: !0 },
          urls: { regexes: c, singleRegexMatchValue: !0, multiple: !0 },
          propList: { propList: !0 },
          angle: { number: !0, units: "deg|rad", implicitUnits: "rad" },
          textRotation: {
            number: !0,
            units: "deg|rad",
            implicitUnits: "rad",
            enums: ["none", "autorotate"],
          },
          polygonPointList: {
            number: !0,
            multiple: !0,
            evenMultiple: !0,
            min: -1,
            max: 1,
            unitless: !0,
          },
          edgeDistances: { enums: ["intersection", "node-position"] },
          edgeEndpoint: {
            number: !0,
            multiple: !0,
            units: "%|px|em|deg|rad",
            implicitUnits: "px",
            enums: ["inside-to-node", "outside-to-node", "outside-to-line"],
            singleEnum: !0,
            validate: function (e, t) {
              switch (e.length) {
                case 2:
                  return (
                    "deg" !== t[0] &&
                    "rad" !== t[0] &&
                    "deg" !== t[1] &&
                    "rad" !== t[1]
                  );
                case 1:
                  return i.string(e[0]) || "deg" === t[0] || "rad" === t[0];
                default:
                  return !1;
              }
            },
          },
          easing: {
            regexes: [
              "^(spring)\\s*\\(\\s*(" + e + ")\\s*,\\s*(" + e + ")\\s*\\)$",
              "^(cubic-bezier)\\s*\\(\\s*(" +
                e +
                ")\\s*,\\s*(" +
                e +
                ")\\s*,\\s*(" +
                e +
                ")\\s*,\\s*(" +
                e +
                ")\\s*\\)$",
            ],
            enums: [
              "linear",
              "ease",
              "ease-in",
              "ease-out",
              "ease-in-out",
              "ease-in-sine",
              "ease-out-sine",
              "ease-in-out-sine",
              "ease-in-quad",
              "ease-out-quad",
              "ease-in-out-quad",
              "ease-in-cubic",
              "ease-out-cubic",
              "ease-in-out-cubic",
              "ease-in-quart",
              "ease-out-quart",
              "ease-in-out-quart",
              "ease-in-quint",
              "ease-out-quint",
              "ease-in-out-quint",
              "ease-in-expo",
              "ease-out-expo",
              "ease-in-out-expo",
              "ease-in-circ",
              "ease-out-circ",
              "ease-in-out-circ",
            ],
          },
        };
        var d = {
            zeroNonZero: function (e, t) {
              return (0 === e && 0 !== t) || (0 !== e && 0 === t);
            },
            anyDiff: function (e, t) {
              return e !== t;
            },
          },
          h = d,
          p = a.types,
          f = (a.properties = [
            { name: "label", type: p.text },
            { name: "text-rotation", type: p.textRotation },
            { name: "text-margin-x", type: p.bidirectionalSize },
            { name: "text-margin-y", type: p.bidirectionalSize },
            { name: "source-label", type: p.text },
            { name: "source-text-rotation", type: p.textRotation },
            { name: "source-text-margin-x", type: p.bidirectionalSize },
            { name: "source-text-margin-y", type: p.bidirectionalSize },
            { name: "source-text-offset", type: p.size },
            { name: "target-label", type: p.text },
            { name: "target-text-rotation", type: p.textRotation },
            { name: "target-text-margin-x", type: p.bidirectionalSize },
            { name: "target-text-margin-y", type: p.bidirectionalSize },
            { name: "target-text-offset", type: p.size },
            { name: "text-valign", type: p.valign },
            { name: "text-halign", type: p.halign },
            { name: "color", type: p.color },
            { name: "text-outline-color", type: p.color },
            { name: "text-outline-width", type: p.size },
            { name: "text-outline-opacity", type: p.zeroOneNumber },
            { name: "text-opacity", type: p.zeroOneNumber },
            { name: "text-background-color", type: p.color },
            { name: "text-background-opacity", type: p.zeroOneNumber },
            { name: "text-background-padding", type: p.size },
            { name: "text-border-opacity", type: p.zeroOneNumber },
            { name: "text-border-color", type: p.color },
            { name: "text-border-width", type: p.size },
            { name: "text-border-style", type: p.borderStyle },
            { name: "text-background-shape", type: p.textBackgroundShape },
            { name: "text-transform", type: p.textTransform },
            { name: "text-wrap", type: p.textWrap },
            { name: "text-max-width", type: p.size },
            { name: "text-events", type: p.bool },
            { name: "font-family", type: p.fontFamily },
            { name: "font-style", type: p.fontStyle },
            { name: "font-weight", type: p.fontWeight },
            { name: "font-size", type: p.size },
            { name: "min-zoomed-font-size", type: p.size },
            { name: "events", type: p.bool },
            { name: "display", type: p.display, triggersZOrder: h.anyDiff },
            {
              name: "visibility",
              type: p.visibility,
              triggersZOrder: h.anyDiff,
            },
            {
              name: "opacity",
              type: p.zeroOneNumber,
              triggersZOrder: h.zeroNonZero,
            },
            {
              name: "z-compound-depth",
              type: p.zCompoundDepth,
              triggersZOrder: h.anyDiff,
            },
            {
              name: "z-index-compare",
              type: p.zIndexCompare,
              triggersZOrder: h.anyDiff,
            },
            {
              name: "z-index",
              type: p.nonNegativeInt,
              triggersZOrder: h.anyDiff,
            },
            { name: "overlay-padding", type: p.size },
            { name: "overlay-color", type: p.color },
            { name: "overlay-opacity", type: p.zeroOneNumber },
            { name: "transition-property", type: p.propList },
            { name: "transition-duration", type: p.time },
            { name: "transition-delay", type: p.time },
            { name: "transition-timing-function", type: p.easing },
            { name: "height", type: p.nodeSize },
            { name: "width", type: p.nodeSize },
            { name: "shape", type: p.nodeShape },
            { name: "shape-polygon-points", type: p.polygonPointList },
            { name: "background-color", type: p.color },
            { name: "background-opacity", type: p.zeroOneNumber },
            { name: "background-blacken", type: p.nOneOneNumber },
            { name: "padding", type: p.sizeMaybePercent },
            { name: "padding-relative-to", type: p.paddingRelativeTo },
            { name: "border-color", type: p.color },
            { name: "border-opacity", type: p.zeroOneNumber },
            { name: "border-width", type: p.size },
            { name: "border-style", type: p.borderStyle },
            { name: "background-image", type: p.urls },
            { name: "background-image-crossorigin", type: p.bgCrossOrigin },
            { name: "background-image-opacity", type: p.zeroOneNumbers },
            { name: "background-position-x", type: p.bgPos },
            { name: "background-position-y", type: p.bgPos },
            { name: "background-width-relative-to", type: p.bgRelativeTo },
            { name: "background-height-relative-to", type: p.bgRelativeTo },
            { name: "background-repeat", type: p.bgRepeat },
            { name: "background-fit", type: p.bgFit },
            { name: "background-clip", type: p.bgClip },
            { name: "background-width", type: p.bgWH },
            { name: "background-height", type: p.bgWH },
            { name: "position", type: p.position },
            {
              name: "compound-sizing-wrt-labels",
              type: p.compoundIncludeLabels,
            },
            { name: "min-width", type: p.size },
            { name: "min-width-bias-left", type: p.sizeMaybePercent },
            { name: "min-width-bias-right", type: p.sizeMaybePercent },
            { name: "min-height", type: p.size },
            { name: "min-height-bias-top", type: p.sizeMaybePercent },
            { name: "min-height-bias-bottom", type: p.sizeMaybePercent },
            { name: "line-style", type: p.lineStyle },
            { name: "line-color", type: p.color },
            { name: "curve-style", type: p.curveStyle },
            { name: "haystack-radius", type: p.zeroOneNumber },
            { name: "source-endpoint", type: p.edgeEndpoint },
            { name: "target-endpoint", type: p.edgeEndpoint },
            { name: "control-point-step-size", type: p.size },
            { name: "control-point-distances", type: p.bidirectionalSizes },
            { name: "control-point-weights", type: p.numbers },
            { name: "segment-distances", type: p.bidirectionalSizes },
            { name: "segment-weights", type: p.numbers },
            { name: "edge-distances", type: p.edgeDistances },
            { name: "arrow-scale", type: p.positiveNumber },
            { name: "loop-direction", type: p.angle },
            { name: "loop-sweep", type: p.angle },
            { name: "source-distance-from-node", type: p.size },
            { name: "target-distance-from-node", type: p.size },
            { name: "ghost", type: p.bool },
            { name: "ghost-offset-x", type: p.bidirectionalSize },
            { name: "ghost-offset-y", type: p.bidirectionalSize },
            { name: "ghost-opacity", type: p.zeroOneNumber },
            { name: "selection-box-color", type: p.color },
            { name: "selection-box-opacity", type: p.zeroOneNumber },
            { name: "selection-box-border-color", type: p.color },
            { name: "selection-box-border-width", type: p.size },
            { name: "active-bg-color", type: p.color },
            { name: "active-bg-opacity", type: p.zeroOneNumber },
            { name: "active-bg-size", type: p.size },
            { name: "outside-texture-bg-color", type: p.color },
            { name: "outside-texture-bg-opacity", type: p.zeroOneNumber },
          ]),
          v = (a.aliases = [
            { name: "content", pointsTo: "label" },
            {
              name: "control-point-distance",
              pointsTo: "control-point-distances",
            },
            { name: "control-point-weight", pointsTo: "control-point-weights" },
            { name: "edge-text-rotation", pointsTo: "text-rotation" },
            { name: "padding-left", pointsTo: "padding" },
            { name: "padding-right", pointsTo: "padding" },
            { name: "padding-top", pointsTo: "padding" },
            { name: "padding-bottom", pointsTo: "padding" },
          ]);
        (a.pieBackgroundN = 16),
          f.push({ name: "pie-size", type: p.sizeMaybePercent });
        for (var g = 1; g <= a.pieBackgroundN; g++)
          f.push({ name: "pie-" + g + "-background-color", type: p.color }),
            f.push({ name: "pie-" + g + "-background-size", type: p.percent }),
            f.push({
              name: "pie-" + g + "-background-opacity",
              type: p.zeroOneNumber,
            });
        var y = (a.arrowPrefixes = [
          "source",
          "mid-source",
          "target",
          "mid-target",
        ]);
        [
          { name: "arrow-shape", type: p.arrowShape },
          { name: "arrow-color", type: p.color },
          { name: "arrow-fill", type: p.arrowFill },
        ].forEach(function (e) {
          y.forEach(function (t) {
            var n = t + "-" + e.name,
              r = e.type;
            f.push({ name: n, type: r });
          });
        }, {}),
          (a.propertyNames = f.map(function (e) {
            return e.name;
          }));
        for (var m = 0; m < f.length; m++) {
          var b = f[m];
          f[b.name] = b;
        }
        for (var x = 0; x < v.length; x++) {
          var w = v[x],
            E = f[w.pointsTo],
            P = { name: w.name, alias: !0, pointsTo: E };
          f.push(P), (f[w.name] = P);
        }
      })(),
        (a.getDefaultProperty = function (e) {
          return this.getDefaultProperties()[e];
        }),
        (a.getDefaultProperties = r.memoize(function () {
          for (
            var e = r.extend(
                {
                  events: "yes",
                  "text-events": "no",
                  "text-valign": "top",
                  "text-halign": "center",
                  color: "#000",
                  "text-outline-color": "#000",
                  "text-outline-width": 0,
                  "text-outline-opacity": 1,
                  "text-opacity": 1,
                  "text-decoration": "none",
                  "text-transform": "none",
                  "text-wrap": "none",
                  "text-max-width": 9999,
                  "text-background-color": "#000",
                  "text-background-opacity": 0,
                  "text-background-shape": "rectangle",
                  "text-background-padding": 0,
                  "text-border-opacity": 0,
                  "text-border-width": 0,
                  "text-border-style": "solid",
                  "text-border-color": "#000",
                  "font-family": "Helvetica Neue, Helvetica, sans-serif",
                  "font-style": "normal",
                  "font-weight": "normal",
                  "font-size": 16,
                  "min-zoomed-font-size": 0,
                  "text-rotation": "none",
                  "source-text-rotation": "none",
                  "target-text-rotation": "none",
                  visibility: "visible",
                  display: "element",
                  opacity: 1,
                  "z-compound-depth": "auto",
                  "z-index-compare": "auto",
                  "z-index": 0,
                  label: "",
                  "text-margin-x": 0,
                  "text-margin-y": 0,
                  "source-label": "",
                  "source-text-offset": 0,
                  "source-text-margin-x": 0,
                  "source-text-margin-y": 0,
                  "target-label": "",
                  "target-text-offset": 0,
                  "target-text-margin-x": 0,
                  "target-text-margin-y": 0,
                  "overlay-opacity": 0,
                  "overlay-color": "#000",
                  "overlay-padding": 10,
                  "transition-property": "none",
                  "transition-duration": 0,
                  "transition-delay": 0,
                  "transition-timing-function": "linear",
                  "background-blacken": 0,
                  "background-color": "#999",
                  "background-opacity": 1,
                  "background-image": "none",
                  "background-image-crossorigin": "anonymous",
                  "background-image-opacity": 1,
                  "background-position-x": "50%",
                  "background-position-y": "50%",
                  "background-width-relative-to": "include-padding",
                  "background-height-relative-to": "include-padding",
                  "background-repeat": "no-repeat",
                  "background-fit": "none",
                  "background-clip": "node",
                  "background-width": "auto",
                  "background-height": "auto",
                  "border-color": "#000",
                  "border-opacity": 1,
                  "border-width": 0,
                  "border-style": "solid",
                  height: 30,
                  width: 30,
                  shape: "ellipse",
                  "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
                  ghost: "no",
                  "ghost-offset-y": 0,
                  "ghost-offset-x": 0,
                  "ghost-opacity": 0,
                  padding: 0,
                  "padding-relative-to": "width",
                  position: "origin",
                  "compound-sizing-wrt-labels": "include",
                  "min-width": 0,
                  "min-width-bias-left": 0,
                  "min-width-bias-right": 0,
                  "min-height": 0,
                  "min-height-bias-top": 0,
                  "min-height-bias-bottom": 0,
                },
                { "pie-size": "100%" },
                [
                  { name: "pie-{{i}}-background-color", value: "black" },
                  { name: "pie-{{i}}-background-size", value: "0%" },
                  { name: "pie-{{i}}-background-opacity", value: 1 },
                ].reduce(function (e, t) {
                  for (var n = 1; n <= a.pieBackgroundN; n++) {
                    var r = t.name.replace("{{i}}", n),
                      i = t.value;
                    e[r] = i;
                  }
                  return e;
                }, {}),
                {
                  "line-style": "solid",
                  "line-color": "#999",
                  "control-point-step-size": 40,
                  "control-point-weights": 0.5,
                  "segment-weights": 0.5,
                  "segment-distances": 20,
                  "edge-distances": "intersection",
                  "curve-style": "bezier",
                  "haystack-radius": 0,
                  "arrow-scale": 1,
                  "loop-direction": "-45deg",
                  "loop-sweep": "-90deg",
                  "source-distance-from-node": 0,
                  "target-distance-from-node": 0,
                  "source-endpoint": "outside-to-node",
                  "target-endpoint": "outside-to-node",
                },
                [
                  { name: "arrow-shape", value: "none" },
                  { name: "arrow-color", value: "#999" },
                  { name: "arrow-fill", value: "filled" },
                ].reduce(function (e, t) {
                  return (
                    a.arrowPrefixes.forEach(function (n) {
                      var r = n + "-" + t.name,
                        i = t.value;
                      e[r] = i;
                    }),
                    e
                  );
                }, {})
              ),
              t = {},
              n = 0;
            n < this.properties.length;
            n++
          ) {
            var i = this.properties[n];
            if (!i.pointsTo) {
              var o = i.name,
                s = e[o],
                l = this.parse(o, s);
              t[o] = l;
            }
          }
          return t;
        })),
        (a.addDefaultStylesheet = function () {
          this.selector("$node > node")
            .css({
              shape: "rectangle",
              padding: 10,
              "background-color": "#eee",
              "border-color": "#ccc",
              "border-width": 1,
            })
            .selector("edge")
            .css({ width: 3, "curve-style": "haystack" })
            .selector(":parent <-> node")
            .css({
              "curve-style": "bezier",
              "source-endpoint": "outside-to-line",
              "target-endpoint": "outside-to-line",
            })
            .selector(":selected")
            .css({
              "background-color": "#0169D9",
              "line-color": "#0169D9",
              "source-arrow-color": "#0169D9",
              "target-arrow-color": "#0169D9",
              "mid-source-arrow-color": "#0169D9",
              "mid-target-arrow-color": "#0169D9",
            })
            .selector("node:parent:selected")
            .css({ "background-color": "#CCE1F9", "border-color": "#aec8e5" })
            .selector(":active")
            .css({
              "overlay-color": "black",
              "overlay-padding": 10,
              "overlay-opacity": 0.25,
            })
            .selector("core")
            .css({
              "selection-box-color": "#ddd",
              "selection-box-opacity": 0.65,
              "selection-box-border-color": "#aaa",
              "selection-box-border-width": 1,
              "active-bg-color": "black",
              "active-bg-opacity": 0.15,
              "active-bg-size": 30,
              "outside-texture-bg-color": "#000",
              "outside-texture-bg-opacity": 0.125,
            }),
            (this.defaultLength = this.length);
        }),
        (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = n(0),
        a = n(2),
        o = {};
      (o.parse = function (e, t, n, a) {
        var o = this;
        if (i.fn(t)) return o.parseImplWarn(e, t, n, a);
        var s =
            "mapping" === a || !0 === a || !1 === a || null == a
              ? "dontcare"
              : a,
          l = [e, t, n, s].join("$"),
          u = (o.propCache = o.propCache || {}),
          c = void 0;
        return (
          (c = u[l]) || (c = u[l] = o.parseImplWarn(e, t, n, a)),
          (n || "mapping" === a) &&
            (c = r.copy(c)) &&
            (c.value = r.copy(c.value)),
          c
        );
      }),
        (o.parseImplWarn = function (e, t, n, i) {
          var a = this.parseImpl(e, t, n, i);
          return (
            a ||
              null == t ||
              r.error("The style property `%s: %s` is invalid", e, t),
            a
          );
        }),
        (o.parseImpl = function (e, t, n, o) {
          var s = this;
          e = r.camel2dash(e);
          var l = s.properties[e],
            u = t,
            c = s.types;
          if (!l) return null;
          if (void 0 === t || null === t) return null;
          l.alias && ((l = l.pointsTo), (e = l.name));
          var d = i.string(t);
          d && (t = t.trim());
          var h = l.type;
          if (!h) return null;
          if (n && ("" === t || null === t))
            return { name: e, value: t, bypass: !0, deleteBypass: !0 };
          if (i.fn(t))
            return {
              name: e,
              value: t,
              strValue: "fn",
              mapped: c.fn,
              bypass: n,
            };
          var p = void 0,
            f = void 0;
          if (!d || o);
          else {
            if ((p = new RegExp(c.data.regex).exec(t))) {
              if (n) return !1;
              var v = c.data;
              return {
                name: e,
                value: p,
                strValue: "" + t,
                mapped: v,
                field: p[1],
                bypass: n,
              };
            }
            if ((f = new RegExp(c.mapData.regex).exec(t))) {
              if (n) return !1;
              if (h.multiple) return !1;
              var g = c.mapData;
              if (!h.color && !h.number) return !1;
              var y = this.parse(e, f[4]);
              if (!y || y.mapped) return !1;
              var m = this.parse(e, f[5]);
              if (!m || m.mapped) return !1;
              if (y.value === m.value) return !1;
              if (h.color) {
                var b = y.value,
                  x = m.value;
                if (
                  !(
                    b[0] !== x[0] ||
                    b[1] !== x[1] ||
                    b[2] !== x[2] ||
                    (b[3] !== x[3] &&
                      ((null != b[3] && 1 !== b[3]) ||
                        (null != x[3] && 1 !== x[3])))
                  )
                )
                  return !1;
              }
              return {
                name: e,
                value: f,
                strValue: "" + t,
                mapped: g,
                field: f[1],
                fieldMin: parseFloat(f[2]),
                fieldMax: parseFloat(f[3]),
                valueMin: y.value,
                valueMax: m.value,
                bypass: n,
              };
            }
          }
          if (h.multiple && "multiple" !== o) {
            var w = void 0;
            if (
              ((w = d ? t.split(/\s+/) : i.array(t) ? t : [t]),
              h.evenMultiple && w.length % 2 != 0)
            )
              return null;
            for (var E = [], P = [], C = [], S = !1, T = 0; T < w.length; T++) {
              var D = s.parse(e, w[T], n, "multiple");
              (S = S || i.string(D.value)),
                E.push(D.value),
                C.push(null != D.pfValue ? D.pfValue : D.value),
                P.push(D.units);
            }
            return h.validate && !h.validate(E, P)
              ? null
              : h.singleEnum && S
              ? 1 === E.length && i.string(E[0])
                ? { name: e, value: E[0], strValue: E[0], bypass: n }
                : null
              : {
                  name: e,
                  value: E,
                  pfValue: C,
                  strValue: E.join(" "),
                  bypass: n,
                  units: P,
                };
          }
          var k = function () {
            for (var r = 0; r < h.enums.length; r++) {
              if (h.enums[r] === t)
                return { name: e, value: t, strValue: "" + t, bypass: n };
            }
            return null;
          };
          if (h.number) {
            var _ = void 0,
              M = "px";
            if (
              (h.units && (_ = h.units),
              h.implicitUnits && (M = h.implicitUnits),
              !h.unitless)
            )
              if (d) {
                var I = "px|em" + (h.allowPercent ? "|\\%" : "");
                _ && (I = _);
                var N = t.match("^(" + r.regex.number + ")(" + I + ")?$");
                N && ((t = N[1]), (_ = N[2] || M));
              } else (_ && !h.implicitUnits) || (_ = M);
            if (((t = parseFloat(t)), isNaN(t) && void 0 === h.enums))
              return null;
            if (isNaN(t) && void 0 !== h.enums) return (t = u), k();
            if (h.integer && !i.integer(t)) return null;
            if (
              (void 0 !== h.min &&
                (t < h.min || (h.strictMin && t === h.min))) ||
              (void 0 !== h.max && (t > h.max || (h.strictMax && t === h.max)))
            )
              return null;
            var B = {
              name: e,
              value: t,
              strValue: "" + t + (_ || ""),
              units: _,
              bypass: n,
            };
            return (
              h.unitless || ("px" !== _ && "em" !== _)
                ? (B.pfValue = t)
                : (B.pfValue =
                    "px" !== _ && _ ? this.getEmSizeInPixels() * t : t),
              ("ms" !== _ && "s" !== _) ||
                (B.pfValue = "ms" === _ ? t : 1e3 * t),
              ("deg" !== _ && "rad" !== _) ||
                (B.pfValue = "rad" === _ ? t : a.deg2rad(t)),
              "%" === _ && (B.pfValue = t / 100),
              B
            );
          }
          if (h.propList) {
            var z = [],
              L = "" + t;
            if ("none" === L);
            else {
              for (var A = L.split(","), O = 0; O < A.length; O++) {
                var R = A[O].trim();
                s.properties[R] && z.push(R);
              }
              if (0 === z.length) return null;
            }
            return {
              name: e,
              value: z,
              strValue: 0 === z.length ? "none" : z.join(", "),
              bypass: n,
            };
          }
          if (h.color) {
            var V = r.color2tuple(t);
            return V
              ? { name: e, value: V, pfValue: V, strValue: "" + t, bypass: n }
              : null;
          }
          if (h.regex || h.regexes) {
            if (h.enums) {
              var q = k();
              if (q) return q;
            }
            for (
              var F = h.regexes ? h.regexes : [h.regex], j = 0;
              j < F.length;
              j++
            ) {
              var X = new RegExp(F[j]),
                Y = X.exec(t);
              if (Y)
                return {
                  name: e,
                  value: h.singleRegexMatchValue ? Y[1] : Y,
                  strValue: "" + t,
                  bypass: n,
                };
            }
            return null;
          }
          return h.string
            ? { name: e, value: "" + t, strValue: "" + t, bypass: n }
            : h.enums
            ? k()
            : null;
        }),
        (e.exports = o);
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(3),
        a = n(2),
        o = {
          autolock: function (e) {
            return void 0 === e
              ? this._private.autolock
              : ((this._private.autolock = !!e), this);
          },
          autoungrabify: function (e) {
            return void 0 === e
              ? this._private.autoungrabify
              : ((this._private.autoungrabify = !!e), this);
          },
          autounselectify: function (e) {
            return void 0 === e
              ? this._private.autounselectify
              : ((this._private.autounselectify = !!e), this);
          },
          panningEnabled: function (e) {
            return void 0 === e
              ? this._private.panningEnabled
              : ((this._private.panningEnabled = !!e), this);
          },
          userPanningEnabled: function (e) {
            return void 0 === e
              ? this._private.userPanningEnabled
              : ((this._private.userPanningEnabled = !!e), this);
          },
          zoomingEnabled: function (e) {
            return void 0 === e
              ? this._private.zoomingEnabled
              : ((this._private.zoomingEnabled = !!e), this);
          },
          userZoomingEnabled: function (e) {
            return void 0 === e
              ? this._private.userZoomingEnabled
              : ((this._private.userZoomingEnabled = !!e), this);
          },
          boxSelectionEnabled: function (e) {
            return void 0 === e
              ? this._private.boxSelectionEnabled
              : ((this._private.boxSelectionEnabled = !!e), this);
          },
          pan: function () {
            var e = arguments,
              t = this._private.pan,
              n = void 0,
              i = void 0,
              a = void 0,
              o = void 0,
              s = void 0;
            switch (e.length) {
              case 0:
                return t;
              case 1:
                if (r.string(e[0])) return (n = e[0]), t[n];
                if (r.plainObject(e[0])) {
                  if (!this._private.panningEnabled) return this;
                  (a = e[0]),
                    (o = a.x),
                    (s = a.y),
                    r.number(o) && (t.x = o),
                    r.number(s) && (t.y = s),
                    this.emit("pan viewport");
                }
                break;
              case 2:
                if (!this._private.panningEnabled) return this;
                (n = e[0]),
                  (i = e[1]),
                  ("x" !== n && "y" !== n) || !r.number(i) || (t[n] = i),
                  this.emit("pan viewport");
            }
            return this.notify({ type: "viewport" }), this;
          },
          panBy: function (e, t) {
            var n = arguments,
              i = this._private.pan,
              a = void 0,
              o = void 0,
              s = void 0,
              l = void 0,
              u = void 0;
            if (!this._private.panningEnabled) return this;
            switch (n.length) {
              case 1:
                r.plainObject(e) &&
                  ((s = n[0]),
                  (l = s.x),
                  (u = s.y),
                  r.number(l) && (i.x += l),
                  r.number(u) && (i.y += u),
                  this.emit("pan viewport"));
                break;
              case 2:
                (a = e),
                  (o = t),
                  ("x" !== a && "y" !== a) || !r.number(o) || (i[a] += o),
                  this.emit("pan viewport");
            }
            return this.notify({ type: "viewport" }), this;
          },
          fit: function (e, t) {
            var n = this.getFitViewport(e, t);
            if (n) {
              var r = this._private;
              (r.zoom = n.zoom),
                (r.pan = n.pan),
                this.emit("pan zoom viewport"),
                this.notify({ type: "viewport" });
            }
            return this;
          },
          getFitViewport: function (e, t) {
            if (
              (r.number(e) && void 0 === t && ((t = e), (e = void 0)),
              this._private.panningEnabled && this._private.zoomingEnabled)
            ) {
              var n = void 0;
              if (r.string(e)) {
                var i = e;
                e = this.$(i);
              } else if (r.boundingBox(e)) {
                var a = e;
                (n = { x1: a.x1, y1: a.y1, x2: a.x2, y2: a.y2 }),
                  (n.w = n.x2 - n.x1),
                  (n.h = n.y2 - n.y1);
              } else r.elementOrCollection(e) || (e = this.mutableElements());
              if (!r.elementOrCollection(e) || !e.empty()) {
                n = n || e.boundingBox();
                var o = this.width(),
                  s = this.height(),
                  l = void 0;
                if (
                  ((t = r.number(t) ? t : 0),
                  !isNaN(o) &&
                    !isNaN(s) &&
                    o > 0 &&
                    s > 0 &&
                    !isNaN(n.w) &&
                    !isNaN(n.h) &&
                    n.w > 0 &&
                    n.h > 0)
                ) {
                  (l = Math.min((o - 2 * t) / n.w, (s - 2 * t) / n.h)),
                    (l = l > this._private.maxZoom ? this._private.maxZoom : l),
                    (l = l < this._private.minZoom ? this._private.minZoom : l);
                  return {
                    zoom: l,
                    pan: {
                      x: (o - l * (n.x1 + n.x2)) / 2,
                      y: (s - l * (n.y1 + n.y2)) / 2,
                    },
                  };
                }
              }
            }
          },
          minZoom: function (e) {
            return void 0 === e
              ? this._private.minZoom
              : (r.number(e) && (this._private.minZoom = e), this);
          },
          maxZoom: function (e) {
            return void 0 === e
              ? this._private.maxZoom
              : (r.number(e) && (this._private.maxZoom = e), this);
          },
          getZoomedViewport: function (e) {
            var t = this._private,
              n = t.pan,
              i = t.zoom,
              o = void 0,
              s = void 0,
              l = !1;
            if (
              (t.zoomingEnabled || (l = !0),
              r.number(e)
                ? (s = e)
                : r.plainObject(e) &&
                  ((s = e.level),
                  null != e.position
                    ? (o = a.modelToRenderedPosition(e.position, i, n))
                    : null != e.renderedPosition && (o = e.renderedPosition),
                  null == o || t.panningEnabled || (l = !0)),
              (s = s > t.maxZoom ? t.maxZoom : s),
              (s = s < t.minZoom ? t.minZoom : s),
              l ||
                !r.number(s) ||
                s === i ||
                (null != o && (!r.number(o.x) || !r.number(o.y))))
            )
              return null;
            if (null != o) {
              var u = n,
                c = i,
                d = s;
              return {
                zoomed: !0,
                panned: !0,
                zoom: d,
                pan: {
                  x: (-d / c) * (o.x - u.x) + o.x,
                  y: (-d / c) * (o.y - u.y) + o.y,
                },
              };
            }
            return { zoomed: !0, panned: !1, zoom: s, pan: n };
          },
          zoom: function (e) {
            if (void 0 === e) return this._private.zoom;
            var t = this.getZoomedViewport(e),
              n = this._private;
            return null != t && t.zoomed
              ? ((n.zoom = t.zoom),
                t.panned && ((n.pan.x = t.pan.x), (n.pan.y = t.pan.y)),
                this.emit("zoom" + (t.panned ? " pan" : "") + " viewport"),
                this.notify({ type: "viewport" }),
                this)
              : this;
          },
          viewport: function (e) {
            var t = this._private,
              n = !0,
              i = !0,
              a = [],
              o = !1,
              s = !1;
            if (!e) return this;
            if (
              (r.number(e.zoom) || (n = !1),
              r.plainObject(e.pan) || (i = !1),
              !n && !i)
            )
              return this;
            if (n) {
              var l = e.zoom;
              l < t.minZoom || l > t.maxZoom || !t.zoomingEnabled
                ? (o = !0)
                : ((t.zoom = l), a.push("zoom"));
            }
            if (i && (!o || !e.cancelOnFailedZoom) && t.panningEnabled) {
              var u = e.pan;
              r.number(u.x) && ((t.pan.x = u.x), (s = !1)),
                r.number(u.y) && ((t.pan.y = u.y), (s = !1)),
                s || a.push("pan");
            }
            return (
              a.length > 0 &&
                (a.push("viewport"),
                this.emit(a.join(" ")),
                this.notify({ type: "viewport" })),
              this
            );
          },
          center: function (e) {
            var t = this.getCenterPan(e);
            return (
              t &&
                ((this._private.pan = t),
                this.emit("pan viewport"),
                this.notify({ type: "viewport" })),
              this
            );
          },
          getCenterPan: function (e, t) {
            if (this._private.panningEnabled) {
              if (r.string(e)) {
                var n = e;
                e = this.mutableElements().filter(n);
              } else r.elementOrCollection(e) || (e = this.mutableElements());
              if (0 !== e.length) {
                var i = e.boundingBox(),
                  a = this.width(),
                  o = this.height();
                t = void 0 === t ? this._private.zoom : t;
                return {
                  x: (a - t * (i.x1 + i.x2)) / 2,
                  y: (o - t * (i.y1 + i.y2)) / 2,
                };
              }
            }
          },
          reset: function () {
            return this._private.panningEnabled && this._private.zoomingEnabled
              ? (this.viewport({ pan: { x: 0, y: 0 }, zoom: 1 }), this)
              : this;
          },
          invalidateSize: function () {
            this._private.sizeCache = null;
          },
          size: function () {
            var e = this._private,
              t = e.container;
            return (e.sizeCache =
              e.sizeCache ||
              (t
                ? (function () {
                    var e = i.getComputedStyle(t),
                      n = function (t) {
                        return parseFloat(e.getPropertyValue(t));
                      };
                    return {
                      width:
                        t.clientWidth - n("padding-left") - n("padding-right"),
                      height:
                        t.clientHeight - n("padding-top") - n("padding-bottom"),
                    };
                  })()
                : { width: 1, height: 1 }));
          },
          width: function () {
            return this.size().width;
          },
          height: function () {
            return this.size().height;
          },
          extent: function () {
            var e = this._private.pan,
              t = this._private.zoom,
              n = this.renderedExtent(),
              r = {
                x1: (n.x1 - e.x) / t,
                x2: (n.x2 - e.x) / t,
                y1: (n.y1 - e.y) / t,
                y2: (n.y2 - e.y) / t,
              };
            return (r.w = r.x2 - r.x1), (r.h = r.y2 - r.y1), r;
          },
          renderedExtent: function () {
            var e = this.width(),
              t = this.height();
            return { x1: 0, y1: 0, x2: e, y2: t, w: e, h: t };
          },
        };
      (o.centre = o.center),
        (o.autolockNodes = o.autolock),
        (o.autoungrabifyNodes = o.autoungrabify),
        (e.exports = o);
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        var r = n,
          a = function (n) {
            s.error(
              "Can not register `" +
                t +
                "` for `" +
                e +
                "` since `" +
                n +
                "` already exists in the prototype and can not be overridden"
            );
          };
        if ("core" === e) {
          if (c.prototype[t]) return a(t);
          c.prototype[t] = n;
        } else if ("collection" === e) {
          if (u.prototype[t]) return a(t);
          u.prototype[t] = n;
        } else if ("layout" === e) {
          for (
            var o = function (e) {
                (this.options = e),
                  n.call(this, e),
                  h.plainObject(this._private) || (this._private = {}),
                  (this._private.cy = e.cy),
                  (this._private.listeners = []),
                  this.createEmitter();
              },
              d = (o.prototype = Object.create(n.prototype)),
              v = [],
              g = 0;
            g < v.length;
            g++
          ) {
            var y = v[g];
            d[y] =
              d[y] ||
              function () {
                return this;
              };
          }
          d.start && !d.run
            ? (d.run = function () {
                return this.start(), this;
              })
            : !d.start &&
              d.run &&
              (d.start = function () {
                return this.run(), this;
              });
          var m = n.prototype.stop;
          (d.stop = function () {
            var e = this.options;
            if (e && e.animate) {
              var t = this.animations;
              if (t) for (var n = 0; n < t.length; n++) t[n].stop();
            }
            return m ? m.call(this) : this.emit("layoutstop"), this;
          }),
            d.destroy ||
              (d.destroy = function () {
                return this;
              }),
            (d.cy = function () {
              return this._private.cy;
            });
          var b = function (e) {
            return e._private.cy;
          };
          s.assign(d, {
            createEmitter: function () {
              return (
                (this._private.emitter = new p({
                  eventFields: function (e) {
                    return { layout: e, cy: b(e), target: e };
                  },
                  bubble: function () {
                    return !0;
                  },
                  parent: function (e) {
                    return b(e);
                  },
                  context: this,
                })),
                this
              );
            },
            emitter: function () {
              return this._private.emitter;
            },
            on: function (e, t) {
              return this.emitter().on(e, t), this;
            },
            one: function (e, t) {
              return this.emitter().one(e, t), this;
            },
            once: function (e, t) {
              return this.emitter().one(e, t), this;
            },
            removeListener: function (e, t) {
              return this.emitter().removeListener(e, t), this;
            },
            emit: function (e, t) {
              return this.emitter().emit(e, t), this;
            },
          }),
            l.eventAliasesOn(d),
            (r = o);
        } else if ("renderer" === e && "null" !== t && "base" !== t) {
          var x = i("renderer", "base"),
            w = x.prototype,
            E = n,
            P = n.prototype,
            C = function () {
              x.apply(this, arguments), E.apply(this, arguments);
            },
            S = C.prototype;
          for (var T in w) {
            var D = w[T],
              k = null != P[T];
            if (k) return a(T);
            S[T] = D;
          }
          for (var _ in P) S[_] = P[_];
          w.clientFunctions.forEach(function (e) {
            S[e] =
              S[e] ||
              function () {
                s.error(
                  "Renderer does not implement `renderer." +
                    e +
                    "()` on its prototype"
                );
              };
          }),
            (r = C);
        }
        return s.setMap({ map: f, keys: [e, t], value: r });
      }
      function i(e, t) {
        return s.getMap({ map: f, keys: [e, t] });
      }
      function a(e, t, n, r, i) {
        return s.setMap({ map: v, keys: [e, t, n, r], value: i });
      }
      function o(e, t, n, r) {
        return s.getMap({ map: v, keys: [e, t, n, r] });
      }
      var s = n(1),
        l = n(4),
        u = n(7),
        c = n(12),
        d = n(96),
        h = n(0),
        p = n(11),
        f = {},
        v = {},
        g = function () {
          return 2 === arguments.length
            ? i.apply(null, arguments)
            : 3 === arguments.length
            ? r.apply(null, arguments)
            : 4 === arguments.length
            ? o.apply(null, arguments)
            : 5 === arguments.length
            ? a.apply(null, arguments)
            : void s.error("Invalid extension access syntax");
        };
      (c.prototype.extension = g),
        d.forEach(function (e) {
          e.extensions.forEach(function (t) {
            r(e.type, t.name, t.impl);
          });
        }),
        (e.exports = g);
    },
    function (e, t, n) {
      "use strict";
      e.exports = [
        { type: "layout", extensions: n(97) },
        { type: "renderer", extensions: n(106) },
      ];
    },
    function (e, t, n) {
      "use strict";
      e.exports = [
        { name: "breadthfirst", impl: n(98) },
        { name: "circle", impl: n(99) },
        { name: "concentric", impl: n(100) },
        { name: "cose", impl: n(101) },
        { name: "grid", impl: n(102) },
        { name: "null", impl: n(103) },
        { name: "preset", impl: n(104) },
        { name: "random", impl: n(105) },
      ];
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        this.options = i.extend({}, s, e);
      }
      var i = n(1),
        a = n(2),
        o = n(0),
        s = {
          fit: !0,
          directed: !1,
          padding: 30,
          circle: !1,
          spacingFactor: 1.75,
          boundingBox: void 0,
          avoidOverlap: !0,
          nodeDimensionsIncludeLabels: !1,
          roots: void 0,
          maximalAdjustments: 0,
          animate: !1,
          animationDuration: 500,
          animationEasing: void 0,
          animateFilter: function (e, t) {
            return !0;
          },
          ready: void 0,
          stop: void 0,
          transform: function (e, t) {
            return t;
          },
        };
      (r.prototype.run = function () {
        var e = this.options,
          t = e,
          n = e.cy,
          r = t.eles,
          i = r.nodes().not(":parent"),
          s = r,
          l = a.makeBoundingBox(
            t.boundingBox
              ? t.boundingBox
              : { x1: 0, y1: 0, w: n.width(), h: n.height() }
          ),
          u = void 0;
        if (o.elementOrCollection(t.roots)) u = t.roots;
        else if (o.array(t.roots)) {
          for (var c = [], d = 0; d < t.roots.length; d++) {
            var h = t.roots[d],
              p = n.getElementById(h);
            c.push(p);
          }
          u = n.collection(c);
        } else if (o.string(t.roots)) u = n.$(t.roots);
        else if (t.directed) u = i.roots();
        else {
          for (var f = [], v = i; v.length > 0; )
            !(function () {
              var e = n.collection();
              r.bfs({
                roots: v[0],
                visit: function (t, n, r, i, a) {
                  e = e.add(t);
                },
                directed: !1,
              }),
                (v = v.not(e)),
                f.push(e);
            })();
          u = n.collection();
          for (var g = 0; g < f.length; g++)
            !(function (e) {
              var t = f[e],
                n = t.maxDegree(!1),
                r = t.filter(function (e) {
                  return e.degree(!1) === n;
                });
              u = u.add(r);
            })(g);
        }
        var y = [],
          m = {},
          b = {},
          x = {},
          w = {},
          E = {};
        s.bfs({
          roots: u,
          directed: t.directed,
          visit: function (e, t, n, r, i) {
            var a = e[0],
              o = a.id();
            if (
              (y[i] || (y[i] = []),
              y[i].push(a),
              (m[o] = !0),
              (b[o] = i),
              (x[o] = n),
              (w[o] = t),
              n)
            ) {
              var s = n.id();
              (E[s] = E[s] || []).push(e);
            }
          },
        });
        for (var P = [], C = 0; C < i.length; C++) {
          var S = i[C];
          m[S.id()] || P.push(S);
        }
        for (var T = 3 * P.length, D = 0; 0 !== P.length && D < T; ) {
          for (
            var k = P.shift(), _ = k.neighborhood().nodes(), M = !1, I = 0;
            I < _.length;
            I++
          ) {
            var N = b[_[I].id()];
            if (void 0 !== N) {
              y[N].push(k), (M = !0);
              break;
            }
          }
          M || P.push(k), D++;
        }
        for (; 0 !== P.length; ) {
          var B = P.shift();
          0 === y.length && y.push([]), y[0].push(B);
        }
        var z = function () {
          for (var e = 0; e < y.length; e++)
            for (var t = y[e], n = 0; n < t.length; n++) {
              var r = t[n];
              null != r
                ? (r._private.scratch.breadthfirst = { depth: e, index: n })
                : (t.splice(n, 1), n--);
            }
        };
        z();
        for (var L = 0; L < t.maximalAdjustments; L++) {
          for (var A = y.length, O = [], R = 0; R < A; R++)
            for (var V = y[R], q = V.length, F = 0; F < q; F++) {
              var j = V[F],
                X = j._private.scratch.breadthfirst,
                Y = (function (e) {
                  for (
                    var t = e.connectedEdges(function (t) {
                        return t.data("target") === e.id();
                      }),
                      n = e._private.scratch.breadthfirst,
                      r = 0,
                      i = void 0,
                      a = 0;
                    a < t.length;
                    a++
                  ) {
                    var o = t[a],
                      s = o.source()[0],
                      l = s._private.scratch.breadthfirst;
                    n.depth <= l.depth &&
                      r < l.depth &&
                      ((r = l.depth), (i = s));
                  }
                  return i;
                })(j);
              Y && ((X.intEle = Y), O.push(j));
            }
          for (var W = 0; W < O.length; W++) {
            var H = O[W],
              Z = H._private.scratch.breadthfirst,
              $ = Z.intEle,
              U = $._private.scratch.breadthfirst;
            y[Z.depth][Z.index] = null;
            for (var G = U.depth + 1; G > y.length - 1; ) y.push([]);
            y[G].push(H), (Z.depth = G), (Z.index = y[G].length - 1);
          }
          z();
        }
        var Q = 0;
        if (t.avoidOverlap)
          for (var K = 0; K < i.length; K++) {
            var J = i[K],
              ee = J.layoutDimensions(t),
              te = ee.w,
              ne = ee.h;
            Q = Math.max(Q, te, ne);
          }
        for (
          var re = {},
            ie = function (e) {
              if (re[e.id()]) return re[e.id()];
              for (
                var t = e._private.scratch.breadthfirst.depth,
                  n = e.neighborhood().nodes().not(":parent").intersection(i),
                  r = 0,
                  a = 0,
                  o = 0;
                o < n.length;
                o++
              ) {
                var s = n[o],
                  l = s._private.scratch.breadthfirst,
                  u = l.index,
                  c = l.depth,
                  d = y[c].length;
                (t > c || 0 === t) && ((r += u / d), a++);
              }
              return (
                (a = Math.max(1, a)),
                (r /= a),
                0 === a && (r = void 0),
                (re[e.id()] = r),
                r
              );
            },
            ae = function (e, t) {
              return ie(e) - ie(t);
            },
            oe = 0;
          oe < 3;
          oe++
        ) {
          for (var se = 0; se < y.length; se++) y[se] = y[se].sort(ae);
          z();
        }
        for (var le = 0, ue = 0; ue < y.length; ue++)
          le = Math.max(y[ue].length, le);
        for (
          var ce = { x: l.x1 + l.w / 2, y: l.x1 + l.h / 2 },
            de = {},
            he = y.length - 1;
          he >= 0;
          he--
        )
          for (var pe = y[he], fe = 0; fe < pe.length; fe++) {
            var ve = pe[fe];
            de[ve.id()] = (function (e, n) {
              var r = e._private.scratch.breadthfirst,
                i = r.depth,
                a = r.index,
                o = y[i].length,
                s = Math.max(l.w / (o + 1), Q),
                u = Math.max(l.h / (y.length + 1), Q),
                c = Math.min(l.w / 2 / y.length, l.h / 2 / y.length);
              if (((c = Math.max(c, Q)), t.circle)) {
                if (t.circle) {
                  var d =
                      c * i +
                      c -
                      (y.length > 0 && y[0].length <= 3 ? c / 2 : 0),
                    h = ((2 * Math.PI) / y[i].length) * a;
                  return (
                    0 === i && 1 === y[0].length && (d = 1),
                    { x: ce.x + d * Math.cos(h), y: ce.y + d * Math.sin(h) }
                  );
                }
                return { x: ce.x + (a + 1 - (o + 1) / 2) * s, y: (i + 1) * u };
              }
              var p = { x: ce.x + (a + 1 - (o + 1) / 2) * s, y: (i + 1) * u };
              return p;
            })(ve, y.length);
          }
        return (
          i.layoutPositions(this, t, function (e) {
            return de[e.id()];
          }),
          this
        );
      }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        this.options = i.extend({}, s, e);
      }
      var i = n(1),
        a = n(2),
        o = n(0),
        s = {
          fit: !0,
          padding: 30,
          boundingBox: void 0,
          avoidOverlap: !0,
          nodeDimensionsIncludeLabels: !1,
          spacingFactor: void 0,
          radius: void 0,
          startAngle: 1.5 * Math.PI,
          sweep: void 0,
          clockwise: !0,
          sort: void 0,
          animate: !1,
          animationDuration: 500,
          animationEasing: void 0,
          animateFilter: function (e, t) {
            return !0;
          },
          ready: void 0,
          stop: void 0,
          transform: function (e, t) {
            return t;
          },
        };
      (r.prototype.run = function () {
        var e = this.options,
          t = e,
          n = e.cy,
          r = t.eles,
          i = void 0 !== t.counterclockwise ? !t.counterclockwise : t.clockwise,
          s = r.nodes().not(":parent");
        t.sort && (s = s.sort(t.sort));
        for (
          var l = a.makeBoundingBox(
              t.boundingBox
                ? t.boundingBox
                : { x1: 0, y1: 0, w: n.width(), h: n.height() }
            ),
            u = { x: l.x1 + l.w / 2, y: l.y1 + l.h / 2 },
            c =
              void 0 === t.sweep
                ? 2 * Math.PI - (2 * Math.PI) / s.length
                : t.sweep,
            d = c / Math.max(1, s.length - 1),
            h = void 0,
            p = 0,
            f = 0;
          f < s.length;
          f++
        ) {
          var v = s[f],
            g = v.layoutDimensions(t),
            y = g.w,
            m = g.h;
          p = Math.max(p, y, m);
        }
        if (
          ((h = o.number(t.radius)
            ? t.radius
            : s.length <= 1
            ? 0
            : Math.min(l.h, l.w) / 2 - p),
          s.length > 1 && t.avoidOverlap)
        ) {
          p *= 1.75;
          var b = Math.cos(d) - Math.cos(0),
            x = Math.sin(d) - Math.sin(0),
            w = Math.sqrt((p * p) / (b * b + x * x));
          h = Math.max(w, h);
        }
        var E = function (e, n) {
          var r = t.startAngle + n * d * (i ? 1 : -1),
            a = h * Math.cos(r),
            o = h * Math.sin(r);
          return { x: u.x + a, y: u.y + o };
        };
        return s.layoutPositions(this, t, E), this;
      }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        this.options = i.extend({}, o, e);
      }
      var i = n(1),
        a = n(2),
        o = {
          fit: !0,
          padding: 30,
          startAngle: 1.5 * Math.PI,
          sweep: void 0,
          clockwise: !0,
          equidistant: !1,
          minNodeSpacing: 10,
          boundingBox: void 0,
          avoidOverlap: !0,
          nodeDimensionsIncludeLabels: !1,
          height: void 0,
          width: void 0,
          spacingFactor: void 0,
          concentric: function (e) {
            return e.degree();
          },
          levelWidth: function (e) {
            return e.maxDegree() / 4;
          },
          animate: !1,
          animationDuration: 500,
          animationEasing: void 0,
          animateFilter: function (e, t) {
            return !0;
          },
          ready: void 0,
          stop: void 0,
          transform: function (e, t) {
            return t;
          },
        };
      (r.prototype.run = function () {
        for (
          var e = this.options,
            t = e,
            n =
              void 0 !== t.counterclockwise ? !t.counterclockwise : t.clockwise,
            r = e.cy,
            i = t.eles,
            o = i.nodes().not(":parent"),
            s = a.makeBoundingBox(
              t.boundingBox
                ? t.boundingBox
                : { x1: 0, y1: 0, w: r.width(), h: r.height() }
            ),
            l = { x: s.x1 + s.w / 2, y: s.y1 + s.h / 2 },
            u = [],
            c = (t.startAngle, 0),
            d = 0;
          d < o.length;
          d++
        ) {
          var h = o[d],
            p = void 0;
          (p = t.concentric(h)),
            u.push({ value: p, node: h }),
            (h._private.scratch.concentric = p);
        }
        o.updateStyle();
        for (var f = 0; f < o.length; f++) {
          var v = o[f],
            g = v.layoutDimensions(t);
          c = Math.max(c, g.w, g.h);
        }
        u.sort(function (e, t) {
          return t.value - e.value;
        });
        for (
          var y = t.levelWidth(o), m = [[]], b = m[0], x = 0;
          x < u.length;
          x++
        ) {
          var w = u[x];
          if (b.length > 0) {
            Math.abs(b[0].value - w.value) >= y && ((b = []), m.push(b));
          }
          b.push(w);
        }
        var E = c + t.minNodeSpacing;
        if (!t.avoidOverlap) {
          var P = m.length > 0 && m[0].length > 1,
            C = Math.min(s.w, s.h) / 2 - E,
            S = C / (m.length + P ? 1 : 0);
          E = Math.min(E, S);
        }
        for (var T = 0, D = 0; D < m.length; D++) {
          var k = m[D],
            _ =
              void 0 === t.sweep
                ? 2 * Math.PI - (2 * Math.PI) / k.length
                : t.sweep,
            M = (k.dTheta = _ / Math.max(1, k.length - 1));
          if (k.length > 1 && t.avoidOverlap) {
            var I = Math.cos(M) - Math.cos(0),
              N = Math.sin(M) - Math.sin(0),
              B = Math.sqrt((E * E) / (I * I + N * N));
            T = Math.max(B, T);
          }
          (k.r = T), (T += E);
        }
        if (t.equidistant) {
          for (var z = 0, L = 0, A = 0; A < m.length; A++) {
            var O = m[A],
              R = O.r - L;
            z = Math.max(z, R);
          }
          L = 0;
          for (var V = 0; V < m.length; V++) {
            var q = m[V];
            0 === V && (L = q.r), (q.r = L), (L += z);
          }
        }
        for (var F = {}, j = 0; j < m.length; j++)
          for (var X = m[j], Y = X.dTheta, W = X.r, H = 0; H < X.length; H++) {
            var Z = X[H],
              $ = t.startAngle + (n ? 1 : -1) * Y * H,
              U = { x: l.x + W * Math.cos($), y: l.y + W * Math.sin($) };
            F[Z.node.id()] = U;
          }
        return (
          o.layoutPositions(this, t, function (e) {
            var t = e.id();
            return F[t];
          }),
          this
        );
      }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        (this.options = a.extend({}, u, e)), (this.options.layout = this);
      }
      var i,
        a = n(1),
        o = n(2),
        s = n(0),
        l = n(5),
        u = {
          ready: function () {},
          stop: function () {},
          animate: !0,
          animationEasing: void 0,
          animationDuration: void 0,
          animateFilter: function (e, t) {
            return !0;
          },
          animationThreshold: 250,
          refresh: 20,
          fit: !0,
          padding: 30,
          boundingBox: void 0,
          nodeDimensionsIncludeLabels: !1,
          randomize: !1,
          componentSpacing: 40,
          nodeRepulsion: function (e) {
            return 2048;
          },
          nodeOverlap: 4,
          idealEdgeLength: function (e) {
            return 32;
          },
          edgeElasticity: function (e) {
            return 32;
          },
          nestingFactor: 1.2,
          gravity: 1,
          numIter: 1e3,
          initialTemp: 1e3,
          coolingFactor: 0.99,
          minTemp: 1,
          weaver: !1,
        };
      (r.prototype.run = function () {
        function e(e) {
          var t = { type: "message", message: e };
          d.trigger(t);
        }
        var t = this.options,
          n = t.cy,
          r = this,
          o = this.thread,
          u = t.weaver ? t.weaver.Thread : null,
          d = {
            listeners: [],
            on: function (e, t) {
              return this.listeners.push({ event: e, callback: t }), this;
            },
            trigger: function (e) {
              s.string(e) && (e = { type: e });
              var t = function (t) {
                  return t.event === e.type;
                },
                n = function (t) {
                  t.callback(e);
                };
              return this.listeners.filter(t).forEach(n), this;
            },
            pass: function (e) {
              return (this.pass = e), this;
            },
            run: function (e) {
              var t = this.pass;
              return new l(function (n) {
                n(e(t));
              });
            },
            stop: function () {
              return this;
            },
          };
        (o && !o.stopped()) || (o = this.thread = u ? new u() : d),
          (r.stopped = !1),
          (!0 !== t.animate && !1 !== t.animate) ||
            r.emit({ type: "layoutstart", layout: r }),
          (i = !0 === t.debug);
        var h = c(n, r, t);
        i && p(h), t.randomize && f(h, n);
        var g = Date.now(),
          y = !1,
          m = function (e) {
            (e = e || {}),
              (y && !e.next) ||
                (!e.force && Date.now() - g < t.animationThreshold) ||
                ((y = !0),
                a.requestAnimationFrame(function () {
                  v(h, n, t),
                    !0 === t.fit && n.fit(t.padding),
                    (y = !1),
                    e.next && e.next();
                }));
          };
        o.on("message", function (e) {
          var t = e.message;
          (h.layoutNodes = t), m();
        }),
          o
            .pass({
              layoutInfo: h,
              options: {
                animate: t.animate,
                refresh: t.refresh,
                componentSpacing: t.componentSpacing,
                nodeOverlap: t.nodeOverlap,
                nestingFactor: t.nestingFactor,
                gravity: t.gravity,
                numIter: t.numIter,
                initialTemp: t.initialTemp,
                coolingFactor: t.coolingFactor,
                minTemp: t.minTemp,
              },
            })
            .run(function (t) {
              var n,
                r = t.layoutInfo,
                i = t.options,
                a = function (e, t, n) {
                  o(e, t), d(e, t), h(e, t), p(e, t), f(e, t);
                },
                o = function (e, t) {
                  for (var n = 0; n < e.graphSet.length; n++)
                    for (var r = e.graphSet[n], i = r.length, a = 0; a < i; a++)
                      for (
                        var o = e.layoutNodes[e.idToIndex[r[a]]], s = a + 1;
                        s < i;
                        s++
                      ) {
                        var u = e.layoutNodes[e.idToIndex[r[s]]];
                        l(o, u, e, t);
                      }
                },
                s = function (e) {
                  return -e + 2 * e * Math.random();
                },
                l = function (e, t, n, r) {
                  if (e.cmptId === t.cmptId || n.isCompound) {
                    var i = t.positionX - e.positionX,
                      a = t.positionY - e.positionY;
                    0 === i && 0 === a && ((i = s(1)), (a = s(1)));
                    var o = u(e, t, i, a);
                    if (o > 0)
                      var l = r.nodeOverlap * o,
                        d = Math.sqrt(i * i + a * a),
                        h = (l * i) / d,
                        p = (l * a) / d;
                    else
                      var f = c(e, i, a),
                        v = c(t, -1 * i, -1 * a),
                        g = v.x - f.x,
                        y = v.y - f.y,
                        m = g * g + y * y,
                        d = Math.sqrt(m),
                        l = (e.nodeRepulsion + t.nodeRepulsion) / m,
                        h = (l * g) / d,
                        p = (l * y) / d;
                    e.isLocked || ((e.offsetX -= h), (e.offsetY -= p)),
                      t.isLocked || ((t.offsetX += h), (t.offsetY += p));
                  }
                },
                u = function (e, t, n, r) {
                  if (n > 0) var i = e.maxX - t.minX;
                  else var i = t.maxX - e.minX;
                  if (r > 0) var a = e.maxY - t.minY;
                  else var a = t.maxY - e.minY;
                  return i >= 0 && a >= 0 ? Math.sqrt(i * i + a * a) : 0;
                },
                c = function (e, t, n) {
                  var r = e.positionX,
                    i = e.positionY,
                    a = e.height || 1,
                    o = e.width || 1,
                    s = n / t,
                    l = a / o,
                    u = {};
                  return 0 === t && 0 < n
                    ? ((u.x = r), (u.y = i + a / 2), u)
                    : 0 === t && 0 > n
                    ? ((u.x = r), (u.y = i + a / 2), u)
                    : 0 < t && -1 * l <= s && s <= l
                    ? ((u.x = r + o / 2), (u.y = i + (o * n) / 2 / t), u)
                    : 0 > t && -1 * l <= s && s <= l
                    ? ((u.x = r - o / 2), (u.y = i - (o * n) / 2 / t), u)
                    : 0 < n && (s <= -1 * l || s >= l)
                    ? ((u.x = r + (a * t) / 2 / n), (u.y = i + a / 2), u)
                    : 0 > n && (s <= -1 * l || s >= l)
                    ? ((u.x = r - (a * t) / 2 / n), (u.y = i - a / 2), u)
                    : u;
                },
                d = function (e, t) {
                  for (var n = 0; n < e.edgeSize; n++) {
                    var r = e.layoutEdges[n],
                      i = e.idToIndex[r.sourceId],
                      a = e.layoutNodes[i],
                      o = e.idToIndex[r.targetId],
                      s = e.layoutNodes[o],
                      l = s.positionX - a.positionX,
                      u = s.positionY - a.positionY;
                    if (0 !== l || 0 !== u) {
                      var d = c(a, l, u),
                        h = c(s, -1 * l, -1 * u),
                        p = h.x - d.x,
                        f = h.y - d.y,
                        v = Math.sqrt(p * p + f * f),
                        g = Math.pow(r.idealLength - v, 2) / r.elasticity;
                      if (0 !== v)
                        var y = (g * p) / v,
                          m = (g * f) / v;
                      else
                        var y = 0,
                          m = 0;
                      a.isLocked || ((a.offsetX += y), (a.offsetY += m)),
                        s.isLocked || ((s.offsetX -= y), (s.offsetY -= m));
                    }
                  }
                },
                h = function (e, t) {
                  for (var n = 0; n < e.graphSet.length; n++) {
                    var r = e.graphSet[n],
                      i = r.length;
                    if (0 === n)
                      var a = e.clientHeight / 2,
                        o = e.clientWidth / 2;
                    else
                      var s = e.layoutNodes[e.idToIndex[r[0]]],
                        l = e.layoutNodes[e.idToIndex[s.parentId]],
                        a = l.positionX,
                        o = l.positionY;
                    for (var u = 0; u < i; u++) {
                      var c = e.layoutNodes[e.idToIndex[r[u]]];
                      if (!c.isLocked) {
                        var d = a - c.positionX,
                          h = o - c.positionY,
                          p = Math.sqrt(d * d + h * h);
                        if (p > 1) {
                          var f = (t.gravity * d) / p,
                            v = (t.gravity * h) / p;
                          (c.offsetX += f), (c.offsetY += v);
                        }
                      }
                    }
                  }
                },
                p = function (e, t) {
                  var n = [],
                    r = 0,
                    i = -1;
                  for (
                    n.push.apply(n, e.graphSet[0]), i += e.graphSet[0].length;
                    r <= i;

                  ) {
                    var a = n[r++],
                      o = e.idToIndex[a],
                      s = e.layoutNodes[o],
                      l = s.children;
                    if (0 < l.length && !s.isLocked) {
                      for (
                        var u = s.offsetX, c = s.offsetY, d = 0;
                        d < l.length;
                        d++
                      ) {
                        var h = e.layoutNodes[e.idToIndex[l[d]]];
                        (h.offsetX += u), (h.offsetY += c), (n[++i] = l[d]);
                      }
                      (s.offsetX = 0), (s.offsetY = 0);
                    }
                  }
                },
                f = function (e, t) {
                  for (var n = 0; n < e.nodeSize; n++) {
                    var r = e.layoutNodes[n];
                    0 < r.children.length &&
                      ((r.maxX = void 0),
                      (r.minX = void 0),
                      (r.maxY = void 0),
                      (r.minY = void 0));
                  }
                  for (var n = 0; n < e.nodeSize; n++) {
                    var r = e.layoutNodes[n];
                    if (!(0 < r.children.length || r.isLocked)) {
                      var i = v(r.offsetX, r.offsetY, e.temperature);
                      (r.positionX += i.x),
                        (r.positionY += i.y),
                        (r.offsetX = 0),
                        (r.offsetY = 0),
                        (r.minX = r.positionX - r.width),
                        (r.maxX = r.positionX + r.width),
                        (r.minY = r.positionY - r.height),
                        (r.maxY = r.positionY + r.height),
                        g(r, e);
                    }
                  }
                  for (var n = 0; n < e.nodeSize; n++) {
                    var r = e.layoutNodes[n];
                    0 < r.children.length &&
                      !r.isLocked &&
                      ((r.positionX = (r.maxX + r.minX) / 2),
                      (r.positionY = (r.maxY + r.minY) / 2),
                      (r.width = r.maxX - r.minX),
                      (r.height = r.maxY - r.minY));
                  }
                },
                v = function (e, t, n) {
                  var r = Math.sqrt(e * e + t * t);
                  if (r > n) var i = { x: (n * e) / r, y: (n * t) / r };
                  else var i = { x: e, y: t };
                  return i;
                },
                g = function e(t, n) {
                  var r = t.parentId;
                  if (null != r) {
                    var i = n.layoutNodes[n.idToIndex[r]],
                      a = !1;
                    return (
                      (null == i.maxX || t.maxX + i.padRight > i.maxX) &&
                        ((i.maxX = t.maxX + i.padRight), (a = !0)),
                      (null == i.minX || t.minX - i.padLeft < i.minX) &&
                        ((i.minX = t.minX - i.padLeft), (a = !0)),
                      (null == i.maxY || t.maxY + i.padBottom > i.maxY) &&
                        ((i.maxY = t.maxY + i.padBottom), (a = !0)),
                      (null == i.minY || t.minY - i.padTop < i.minY) &&
                        ((i.minY = t.minY - i.padTop), (a = !0)),
                      a ? e(i, n) : void 0
                    );
                  }
                },
                y = 0;
              do {
                for (var m = 0; m < i.refresh && y < i.numIter; ) {
                  var n = (function (e) {
                    return (
                      a(r, i),
                      (r.temperature = r.temperature * i.coolingFactor),
                      !(r.temperature < i.minTemp)
                    );
                  })();
                  if (!n) break;
                  m++, y++;
                }
                !0 === i.animate && e(r.layoutNodes);
              } while (n && y + 1 < i.numIter);
              return (
                (function (e, t) {
                  for (
                    var n = r.layoutNodes, i = [], a = 0;
                    a < n.length;
                    a++
                  ) {
                    var o = n[a],
                      s = o.cmptId;
                    (i[s] = i[s] || []).push(o);
                  }
                  for (var l = 0, a = 0; a < i.length; a++) {
                    var u = i[a];
                    if (u) {
                      (u.x1 = 1 / 0),
                        (u.x2 = -1 / 0),
                        (u.y1 = 1 / 0),
                        (u.y2 = -1 / 0);
                      for (var c = 0; c < u.length; c++) {
                        var d = u[c];
                        (u.x1 = Math.min(u.x1, d.positionX - d.width / 2)),
                          (u.x2 = Math.max(u.x2, d.positionX + d.width / 2)),
                          (u.y1 = Math.min(u.y1, d.positionY - d.height / 2)),
                          (u.y2 = Math.max(u.y2, d.positionY + d.height / 2));
                      }
                      (u.w = u.x2 - u.x1),
                        (u.h = u.y2 - u.y1),
                        (l += u.w * u.h);
                    }
                  }
                  i.sort(function (e, t) {
                    return t.w * t.h - e.w * e.h;
                  });
                  for (
                    var h = 0,
                      p = 0,
                      f = 0,
                      v = 0,
                      g = (Math.sqrt(l) * r.clientWidth) / r.clientHeight,
                      a = 0;
                    a < i.length;
                    a++
                  ) {
                    var u = i[a];
                    if (u) {
                      for (var c = 0; c < u.length; c++) {
                        var d = u[c];
                        d.isLocked || ((d.positionX += h), (d.positionY += p));
                      }
                      (h += u.w + t.componentSpacing),
                        (f += u.w + t.componentSpacing),
                        (v = Math.max(v, u.h)),
                        f > g &&
                          ((p += v + t.componentSpacing),
                          (h = 0),
                          (f = 0),
                          (v = 0));
                    }
                  }
                })(0, i),
                r
              );
            })
            .then(function (e) {
              (h.layoutNodes = e.layoutNodes), o.stop(), b();
            });
        var b = function () {
          !0 === t.animate || !1 === t.animate
            ? m({
                force: !0,
                next: function () {
                  r.one("layoutstop", t.stop),
                    r.emit({ type: "layoutstop", layout: r });
                },
              })
            : t.eles.nodes().layoutPositions(r, t, function (e) {
                var t = h.layoutNodes[h.idToIndex[e.data("id")]];
                return { x: t.positionX, y: t.positionY };
              });
        };
        return this;
      }),
        (r.prototype.stop = function () {
          return (
            (this.stopped = !0),
            this.thread && this.thread.stop(),
            this.emit("layoutstop"),
            this
          );
        }),
        (r.prototype.destroy = function () {
          return this.thread && this.thread.stop(), this;
        });
      var c = function (e, t, n) {
          for (
            var r = n.eles.edges(),
              i = n.eles.nodes(),
              a = {
                isCompound: e.hasCompoundNodes(),
                layoutNodes: [],
                idToIndex: {},
                nodeSize: i.size(),
                graphSet: [],
                indexToGraph: [],
                layoutEdges: [],
                edgeSize: r.size(),
                temperature: n.initialTemp,
                clientWidth: e.width(),
                clientHeight: e.width(),
                boundingBox: o.makeBoundingBox(
                  n.boundingBox
                    ? n.boundingBox
                    : { x1: 0, y1: 0, w: e.width(), h: e.height() }
                ),
              },
              l = n.eles.components(),
              u = {},
              c = 0;
            c < l.length;
            c++
          )
            for (var h = l[c], p = 0; p < h.length; p++) {
              var f = h[p];
              u[f.id()] = c;
            }
          for (var c = 0; c < a.nodeSize; c++) {
            var v = i[c],
              g = v.layoutDimensions(n),
              y = {};
            (y.isLocked = v.locked()),
              (y.id = v.data("id")),
              (y.parentId = v.data("parent")),
              (y.cmptId = u[v.id()]),
              (y.children = []),
              (y.positionX = v.position("x")),
              (y.positionY = v.position("y")),
              (y.offsetX = 0),
              (y.offsetY = 0),
              (y.height = g.w),
              (y.width = g.h),
              (y.maxX = y.positionX + y.width / 2),
              (y.minX = y.positionX - y.width / 2),
              (y.maxY = y.positionY + y.height / 2),
              (y.minY = y.positionY - y.height / 2),
              (y.padLeft = parseFloat(v.style("padding"))),
              (y.padRight = parseFloat(v.style("padding"))),
              (y.padTop = parseFloat(v.style("padding"))),
              (y.padBottom = parseFloat(v.style("padding"))),
              (y.nodeRepulsion = s.fn(n.nodeRepulsion)
                ? n.nodeRepulsion(v)
                : n.nodeRepulsion),
              a.layoutNodes.push(y),
              (a.idToIndex[y.id] = c);
          }
          for (var m = [], b = 0, x = -1, w = [], c = 0; c < a.nodeSize; c++) {
            var v = a.layoutNodes[c],
              E = v.parentId;
            null != E
              ? a.layoutNodes[a.idToIndex[E]].children.push(v.id)
              : ((m[++x] = v.id), w.push(v.id));
          }
          for (a.graphSet.push(w); b <= x; ) {
            var P = m[b++],
              C = a.idToIndex[P],
              f = a.layoutNodes[C],
              S = f.children;
            if (S.length > 0) {
              a.graphSet.push(S);
              for (var c = 0; c < S.length; c++) m[++x] = S[c];
            }
          }
          for (var c = 0; c < a.graphSet.length; c++)
            for (var T = a.graphSet[c], p = 0; p < T.length; p++) {
              var D = a.idToIndex[T[p]];
              a.indexToGraph[D] = c;
            }
          for (var c = 0; c < a.edgeSize; c++) {
            var k = r[c],
              _ = {};
            (_.id = k.data("id")),
              (_.sourceId = k.data("source")),
              (_.targetId = k.data("target"));
            var M = s.fn(n.idealEdgeLength)
                ? n.idealEdgeLength(k)
                : n.idealEdgeLength,
              I = s.fn(n.edgeElasticity)
                ? n.edgeElasticity(k)
                : n.edgeElasticity,
              N = a.idToIndex[_.sourceId],
              B = a.idToIndex[_.targetId];
            if (a.indexToGraph[N] != a.indexToGraph[B]) {
              for (
                var z = d(_.sourceId, _.targetId, a),
                  L = a.graphSet[z],
                  A = 0,
                  y = a.layoutNodes[N];
                -1 === L.indexOf(y.id);

              )
                (y = a.layoutNodes[a.idToIndex[y.parentId]]), A++;
              for (y = a.layoutNodes[B]; -1 === L.indexOf(y.id); )
                (y = a.layoutNodes[a.idToIndex[y.parentId]]), A++;
              M *= A * n.nestingFactor;
            }
            (_.idealLength = M), (_.elasticity = I), a.layoutEdges.push(_);
          }
          return a;
        },
        d = function (e, t, n) {
          var r = h(e, t, 0, n);
          return 2 > r.count ? 0 : r.graph;
        },
        h = function e(t, n, r, i) {
          var a = i.graphSet[r];
          if (-1 < a.indexOf(t) && -1 < a.indexOf(n))
            return { count: 2, graph: r };
          for (var o = 0, s = 0; s < a.length; s++) {
            var l = a[s],
              u = i.idToIndex[l],
              c = i.layoutNodes[u].children;
            if (0 !== c.length) {
              var d = i.indexToGraph[i.idToIndex[c[0]]],
                h = e(t, n, d, i);
              if (0 !== h.count) {
                if (1 !== h.count) return h;
                if (2 === ++o) break;
              }
            }
          }
          return { count: o, graph: r };
        },
        p = function (e) {
          if (i) {
            console.debug("layoutNodes:");
            for (var t = 0; t < e.nodeSize; t++) {
              var n = e.layoutNodes[t],
                r =
                  "\nindex: " +
                  t +
                  "\nId: " +
                  n.id +
                  "\nChildren: " +
                  n.children.toString() +
                  "\nparentId: " +
                  n.parentId +
                  "\npositionX: " +
                  n.positionX +
                  "\npositionY: " +
                  n.positionY +
                  "\nOffsetX: " +
                  n.offsetX +
                  "\nOffsetY: " +
                  n.offsetY +
                  "\npadLeft: " +
                  n.padLeft +
                  "\npadRight: " +
                  n.padRight +
                  "\npadTop: " +
                  n.padTop +
                  "\npadBottom: " +
                  n.padBottom;
              console.debug(r);
            }
            console.debug("idToIndex");
            for (var t in e.idToIndex)
              console.debug("Id: " + t + "\nIndex: " + e.idToIndex[t]);
            console.debug("Graph Set");
            for (var a = e.graphSet, t = 0; t < a.length; t++)
              console.debug("Set : " + t + ": " + a[t].toString());
            for (var r = "IndexToGraph", t = 0; t < e.indexToGraph.length; t++)
              r += "\nIndex : " + t + " Graph: " + e.indexToGraph[t];
            console.debug(r), (r = "Layout Edges");
            for (var t = 0; t < e.layoutEdges.length; t++) {
              var o = e.layoutEdges[t];
              r +=
                "\nEdge Index: " +
                t +
                " ID: " +
                o.id +
                " SouceID: " +
                o.sourceId +
                " TargetId: " +
                o.targetId +
                " Ideal Length: " +
                o.idealLength;
            }
            console.debug(r),
              (r = "nodeSize: " + e.nodeSize),
              (r += "\nedgeSize: " + e.edgeSize),
              (r += "\ntemperature: " + e.temperature),
              console.debug(r);
          }
        },
        f = function (e, t) {
          for (
            var n = e.clientWidth, r = e.clientHeight, i = 0;
            i < e.nodeSize;
            i++
          ) {
            var a = e.layoutNodes[i];
            0 !== a.children.length ||
              a.isLocked ||
              ((a.positionX = Math.random() * n),
              (a.positionY = Math.random() * r));
          }
        },
        v = function (e, t, n) {
          var r = n.layout,
            i = n.eles.nodes(),
            a = e.boundingBox,
            o = { x1: 1 / 0, x2: -1 / 0, y1: 1 / 0, y2: -1 / 0 };
          n.boundingBox &&
            (i.forEach(function (t) {
              var n = e.layoutNodes[e.idToIndex[t.data("id")]];
              (o.x1 = Math.min(o.x1, n.positionX)),
                (o.x2 = Math.max(o.x2, n.positionX)),
                (o.y1 = Math.min(o.y1, n.positionY)),
                (o.y2 = Math.max(o.y2, n.positionY));
            }),
            (o.w = o.x2 - o.x1),
            (o.h = o.y2 - o.y1)),
            i.positions(function (t, r) {
              var i = e.layoutNodes[e.idToIndex[t.data("id")]];
              if (n.boundingBox) {
                var s = (i.positionX - o.x1) / o.w,
                  l = (i.positionY - o.y1) / o.h;
                return { x: a.x1 + s * a.w, y: a.y1 + l * a.h };
              }
              return { x: i.positionX, y: i.positionY };
            }),
            !0 !== e.ready &&
              ((e.ready = !0),
              r.one("layoutready", n.ready),
              r.emit({ type: "layoutready", layout: this }));
        };
      e.exports = r;
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        this.options = i.extend({}, o, e);
      }
      var i = n(1),
        a = n(2),
        o = {
          fit: !0,
          padding: 30,
          boundingBox: void 0,
          avoidOverlap: !0,
          avoidOverlapPadding: 10,
          nodeDimensionsIncludeLabels: !1,
          spacingFactor: void 0,
          condense: !1,
          rows: void 0,
          cols: void 0,
          position: function (e) {},
          sort: void 0,
          animate: !1,
          animationDuration: 500,
          animationEasing: void 0,
          animateFilter: function (e, t) {
            return !0;
          },
          ready: void 0,
          stop: void 0,
          transform: function (e, t) {
            return t;
          },
        };
      (r.prototype.run = function () {
        var e = this.options,
          t = e,
          n = e.cy,
          r = t.eles,
          i = r.nodes().not(":parent");
        t.sort && (i = i.sort(t.sort));
        var o = a.makeBoundingBox(
          t.boundingBox
            ? t.boundingBox
            : { x1: 0, y1: 0, w: n.width(), h: n.height() }
        );
        if (0 === o.h || 0 === o.w)
          i.layoutPositions(this, t, function (e) {
            return { x: o.x1, y: o.y1 };
          });
        else {
          var s = i.size(),
            l = Math.sqrt((s * o.h) / o.w),
            u = Math.round(l),
            c = Math.round((o.w / o.h) * l),
            d = function (e) {
              if (null == e) return Math.min(u, c);
              Math.min(u, c) == u ? (u = e) : (c = e);
            },
            h = function (e) {
              if (null == e) return Math.max(u, c);
              Math.max(u, c) == u ? (u = e) : (c = e);
            },
            p = t.rows,
            f = null != t.cols ? t.cols : t.columns;
          if (null != p && null != f) (u = p), (c = f);
          else if (null != p && null == f) (u = p), (c = Math.ceil(s / u));
          else if (null == p && null != f) (c = f), (u = Math.ceil(s / c));
          else if (c * u > s) {
            var v = d(),
              g = h();
            (v - 1) * g >= s ? d(v - 1) : (g - 1) * v >= s && h(g - 1);
          } else
            for (; c * u < s; ) {
              var y = d(),
                m = h();
              (m + 1) * y >= s ? h(m + 1) : d(y + 1);
            }
          var b = o.w / c,
            x = o.h / u;
          if ((t.condense && ((b = 0), (x = 0)), t.avoidOverlap))
            for (var w = 0; w < i.length; w++) {
              var E = i[w],
                P = E._private.position;
              (null != P.x && null != P.y) || ((P.x = 0), (P.y = 0));
              var C = E.layoutDimensions(t),
                S = t.avoidOverlapPadding,
                T = C.w + S,
                D = C.h + S;
              (b = Math.max(b, T)), (x = Math.max(x, D));
            }
          for (
            var k = {},
              _ = function (e, t) {
                return !!k["c-" + e + "-" + t];
              },
              M = function (e, t) {
                k["c-" + e + "-" + t] = !0;
              },
              I = 0,
              N = 0,
              B = function () {
                ++N >= c && ((N = 0), I++);
              },
              z = {},
              L = 0;
            L < i.length;
            L++
          ) {
            var A = i[L],
              O = t.position(A);
            if (O && (void 0 !== O.row || void 0 !== O.col)) {
              var R = { row: O.row, col: O.col };
              if (void 0 === R.col) for (R.col = 0; _(R.row, R.col); ) R.col++;
              else if (void 0 === R.row)
                for (R.row = 0; _(R.row, R.col); ) R.row++;
              (z[A.id()] = R), M(R.row, R.col);
            }
          }
          var V = function (e, t) {
            var n = void 0,
              r = void 0;
            if (e.locked() || e.isParent()) return !1;
            var i = z[e.id()];
            if (i)
              (n = i.col * b + b / 2 + o.x1), (r = i.row * x + x / 2 + o.y1);
            else {
              for (; _(I, N); ) B();
              (n = N * b + b / 2 + o.x1),
                (r = I * x + x / 2 + o.y1),
                M(I, N),
                B();
            }
            return { x: n, y: r };
          };
          i.layoutPositions(this, t, V);
        }
        return this;
      }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        this.options = i.extend({}, a, e);
      }
      var i = n(1),
        a = { ready: function () {}, stop: function () {} };
      (r.prototype.run = function () {
        var e = this.options,
          t = e.eles,
          n = this;
        e.cy;
        return (
          n.emit("layoutstart"),
          t.nodes().positions(function () {
            return { x: 0, y: 0 };
          }),
          n.one("layoutready", e.ready),
          n.emit("layoutready"),
          n.one("layoutstop", e.stop),
          n.emit("layoutstop"),
          this
        );
      }),
        (r.prototype.stop = function () {
          return this;
        }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        this.options = i.extend({}, o, e);
      }
      var i = n(1),
        a = n(0),
        o = {
          positions: void 0,
          zoom: void 0,
          pan: void 0,
          fit: !0,
          padding: 30,
          animate: !1,
          animationDuration: 500,
          animationEasing: void 0,
          animateFilter: function (e, t) {
            return !0;
          },
          ready: void 0,
          stop: void 0,
          transform: function (e, t) {
            return t;
          },
        };
      (r.prototype.run = function () {
        function e(e) {
          if (null == t.positions) return null;
          if (i) return t.positions(e);
          var n = t.positions[e._private.data.id];
          return null == n ? null : n;
        }
        var t = this.options,
          n = t.eles,
          r = n.nodes(),
          i = a.fn(t.positions);
        return (
          r.layoutPositions(this, t, function (t, n) {
            var r = e(t);
            return !t.locked() && null != r && r;
          }),
          this
        );
      }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        this.options = i.extend({}, o, e);
      }
      var i = n(1),
        a = n(2),
        o = {
          fit: !0,
          padding: 30,
          boundingBox: void 0,
          animate: !1,
          animationDuration: 500,
          animationEasing: void 0,
          animateFilter: function (e, t) {
            return !0;
          },
          ready: void 0,
          stop: void 0,
          transform: function (e, t) {
            return t;
          },
        };
      (r.prototype.run = function () {
        var e = this.options,
          t = e.cy,
          n = e.eles,
          r = n.nodes().not(":parent"),
          i = a.makeBoundingBox(
            e.boundingBox
              ? e.boundingBox
              : { x1: 0, y1: 0, w: t.width(), h: t.height() }
          ),
          o = function (e, t) {
            return {
              x: i.x1 + Math.round(Math.random() * i.w),
              y: i.y1 + Math.round(Math.random() * i.h),
            };
          };
        return r.layoutPositions(this, e, o), this;
      }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      e.exports = [
        { name: "null", impl: n(107) },
        { name: "base", impl: n(108) },
        { name: "canvas", impl: n(124) },
      ];
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        (this.options = e), (this.notifications = 0);
      }
      var i = function () {};
      (r.prototype = {
        recalculateRenderedStyle: i,
        notify: function () {
          this.notifications++;
        },
        init: i,
      }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(1),
        a = n(3),
        o = function (e) {
          this.init(e);
        },
        s = o,
        l = s.prototype;
      (l.clientFunctions = [
        "redrawHint",
        "render",
        "renderTo",
        "matchCanvasSize",
        "nodeShapeImpl",
        "arrowShapeImpl",
      ]),
        (l.init = function (e) {
          var t = this;
          (t.options = e), (t.cy = e.cy);
          var n = (t.container = e.cy.container());
          if (a) {
            var r = a.document,
              o = r.head,
              s = "__________cytoscape_container",
              l = null != r.getElementById("__________cytoscape_stylesheet");
            if (
              (n.className.indexOf(s) < 0 &&
                (n.className = (n.className || "") + " " + s),
              !l)
            ) {
              var u = r.createElement("style");
              (u.id = "__________cytoscape_stylesheet"),
                (u.innerHTML = "." + s + " { position: relative; }"),
                o.insertBefore(u, o.children[0]);
            }
            "static" === a.getComputedStyle(n).getPropertyValue("position") &&
              i.error(
                "A Cytoscape container has style position:static and so can not use UI extensions properly"
              );
          }
          (t.selection = [void 0, void 0, void 0, void 0, 0]),
            (t.bezierProjPcts = [0.05, 0.225, 0.4, 0.5, 0.6, 0.775, 0.95]),
            (t.hoverData = {
              down: null,
              last: null,
              downTime: null,
              triggerMode: null,
              dragging: !1,
              initialPan: [null, null],
              capture: !1,
            }),
            (t.dragData = { possibleDragElements: [] }),
            (t.touchData = {
              start: null,
              capture: !1,
              startPosition: [null, null, null, null, null, null],
              singleTouchStartTime: null,
              singleTouchMoved: !0,
              now: [null, null, null, null, null, null],
              earlier: [null, null, null, null, null, null],
            }),
            (t.redraws = 0),
            (t.showFps = e.showFps),
            (t.debug = e.debug),
            (t.hideEdgesOnViewport = e.hideEdgesOnViewport),
            (t.hideLabelsOnViewport = e.hideLabelsOnViewport),
            (t.textureOnViewport = e.textureOnViewport),
            (t.wheelSensitivity = e.wheelSensitivity),
            (t.motionBlurEnabled = e.motionBlur),
            (t.forcedPixelRatio = e.pixelRatio),
            (t.motionBlur = e.motionBlur),
            (t.motionBlurOpacity = e.motionBlurOpacity),
            (t.motionBlurTransparency = 1 - t.motionBlurOpacity),
            (t.motionBlurPxRatio = 1),
            (t.mbPxRBlurry = 1),
            (t.minMbLowQualFrames = 4),
            (t.fullQualityMb = !1),
            (t.clearedForMotionBlur = []),
            (t.desktopTapThreshold = e.desktopTapThreshold),
            (t.desktopTapThreshold2 =
              e.desktopTapThreshold * e.desktopTapThreshold),
            (t.touchTapThreshold = e.touchTapThreshold),
            (t.touchTapThreshold2 = e.touchTapThreshold * e.touchTapThreshold),
            (t.tapholdDuration = 500),
            (t.bindings = []),
            (t.beforeRenderCallbacks = []),
            (t.beforeRenderPriorities = {
              animations: 400,
              eleCalcs: 300,
              eleTxrDeq: 200,
              lyrTxrDeq: 100,
            }),
            t.registerNodeShapes(),
            t.registerArrowShapes(),
            t.registerCalculationListeners();
        }),
        (l.notify = function (e) {
          var t,
            n = this;
          if (!this.destroyed) {
            t = r.array(e.type) ? e.type : [e.type];
            for (var i = {}, a = 0; a < t.length; a++) {
              i[t[a]] = !0;
            }
            if (i.init) return void n.load();
            if (i.destroy) return void n.destroy();
            (i.add || i.remove || i.load || i.zorder) &&
              n.invalidateCachedZSortedEles(),
              i.viewport && n.redrawHint("select", !0),
              (i.load || i.resize) &&
                (n.invalidateContainerClientCoordsCache(),
                n.matchCanvasSize(n.container)),
              n.redrawHint("eles", !0),
              n.redrawHint("drag", !0),
              this.startRenderLoop(),
              this.redraw();
          }
        }),
        (l.destroy = function () {
          var e = this;
          (e.destroyed = !0), e.cy.stopAnimationLoop();
          for (var t = 0; t < e.bindings.length; t++) {
            var n = e.bindings[t],
              r = n,
              i = r.target;
            (i.off || i.removeEventListener).apply(i, r.args);
          }
          if (
            ((e.bindings = []),
            (e.beforeRenderCallbacks = []),
            (e.onUpdateEleCalcsFns = []),
            e.removeObserver && e.removeObserver.disconnect(),
            e.styleObserver && e.styleObserver.disconnect(),
            e.labelCalcDiv)
          )
            try {
              document.body.removeChild(e.labelCalcDiv);
            } catch (e) {}
        }),
        [n(109), n(110), n(120), n(121), n(122), n(123)].forEach(function (e) {
          i.extend(l, e);
        }),
        (e.exports = s);
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = n(0),
        a = n(1),
        o = {};
      (o.arrowShapeWidth = 0.3),
        (o.registerArrowShapes = function () {
          var e = (this.arrowShapes = {}),
            t = this,
            n = function (e, t, n, r, i, a, o) {
              var s = i.x - n / 2 - o,
                l = i.x + n / 2 + o,
                u = i.y - n / 2 - o,
                c = i.y + n / 2 + o;
              return s <= e && e <= l && u <= t && t <= c;
            },
            o = function (e, t, n, r, i) {
              var a = e * Math.cos(r) - t * Math.sin(r),
                o = e * Math.sin(r) + t * Math.cos(r),
                s = a * n,
                l = o * n;
              return { x: s + i.x, y: l + i.y };
            },
            s = function (e, t, n, r) {
              for (var i = [], a = 0; a < e.length; a += 2) {
                var s = e[a],
                  l = e[a + 1];
                i.push(o(s, l, t, n, r));
              }
              return i;
            },
            l = function (e) {
              for (var t = [], n = 0; n < e.length; n++) {
                var r = e[n];
                t.push(r.x, r.y);
              }
              return t;
            },
            u = function (e) {
              return (
                e.pstyle("width").pfValue * e.pstyle("arrow-scale").pfValue * 2
              );
            },
            c = function (o, c) {
              i.string(c) && (c = e[c]),
                (e[o] = a.extend(
                  {
                    name: o,
                    points: [-0.15, -0.3, 0.15, -0.3, 0.15, 0.3, -0.15, 0.3],
                    collide: function (e, t, n, i, a, o) {
                      var u = l(s(this.points, n + 2 * o, i, a));
                      return r.pointInsidePolygonPoints(e, t, u);
                    },
                    roughCollide: n,
                    draw: function (e, n, r, i) {
                      var a = s(this.points, n, r, i);
                      t.arrowShapeImpl("polygon")(e, a);
                    },
                    spacing: function (e) {
                      return 0;
                    },
                    gap: u,
                  },
                  c
                ));
            };
          c("none", {
            collide: a.falsify,
            roughCollide: a.falsify,
            draw: a.noop,
            spacing: a.zeroify,
            gap: a.zeroify,
          }),
            c("triangle", { points: [-0.15, -0.3, 0, 0, 0.15, -0.3] }),
            c("arrow", "triangle"),
            c("triangle-backcurve", {
              points: e.triangle.points,
              controlPoint: [0, -0.15],
              roughCollide: n,
              draw: function (e, n, r, i, a) {
                var l = s(this.points, n, r, i),
                  u = this.controlPoint,
                  c = o(u[0], u[1], n, r, i);
                t.arrowShapeImpl(this.name)(e, l, c);
              },
              gap: function (e) {
                return 0.8 * u(e);
              },
            }),
            c("triangle-tee", {
              points: [-0.15, -0.3, 0, 0, 0.15, -0.3, -0.15, -0.3],
              pointsTee: [-0.15, -0.4, -0.15, -0.5, 0.15, -0.5, 0.15, -0.4],
              collide: function (e, t, n, i, a, o, u) {
                var c = l(s(this.points, n + 2 * u, i, a)),
                  d = l(s(this.pointsTee, n + 2 * u, i, a));
                return (
                  r.pointInsidePolygonPoints(e, t, c) ||
                  r.pointInsidePolygonPoints(e, t, d)
                );
              },
              draw: function (e, n, r, i, a) {
                var o = s(this.points, n, r, i),
                  l = s(this.pointsTee, n, r, i);
                t.arrowShapeImpl(this.name)(e, o, l);
              },
            }),
            c("triangle-cross", {
              points: [-0.15, -0.3, 0, 0, 0.15, -0.3, -0.15, -0.3],
              baseCrossLinePts: [
                -0.15, -0.4, -0.15, -0.4, 0.15, -0.4, 0.15, -0.4,
              ],
              crossLinePts: function (e, t) {
                var n = this.baseCrossLinePts.slice(),
                  r = t / e;
                return (n[3] = n[3] - r), (n[5] = n[5] - r), n;
              },
              collide: function (e, t, n, i, a, o, u) {
                var c = l(s(this.points, n + 2 * u, i, a)),
                  d = l(s(this.crossLinePts(n, o), n + 2 * u, i, a));
                return (
                  r.pointInsidePolygonPoints(e, t, c) ||
                  r.pointInsidePolygonPoints(e, t, d)
                );
              },
              draw: function (e, n, r, i, a) {
                var o = s(this.points, n, r, i),
                  l = s(this.crossLinePts(n, a), n, r, i);
                t.arrowShapeImpl(this.name)(e, o, l);
              },
            }),
            c("vee", {
              points: [-0.15, -0.3, 0, 0, 0.15, -0.3, 0, -0.15],
              gap: function (e) {
                return 0.525 * u(e);
              },
            }),
            c("circle", {
              radius: 0.15,
              collide: function (e, t, n, r, i, a, o) {
                var s = i;
                return (
                  Math.pow(s.x - e, 2) + Math.pow(s.y - t, 2) <=
                  Math.pow((n + 2 * o) * this.radius, 2)
                );
              },
              draw: function (e, n, r, i, a) {
                t.arrowShapeImpl(this.name)(e, i.x, i.y, this.radius * n);
              },
              spacing: function (e) {
                return (
                  t.getArrowWidth(
                    e.pstyle("width").pfValue,
                    e.pstyle("arrow-scale").value
                  ) * this.radius
                );
              },
            }),
            c("tee", {
              points: [-0.15, 0, -0.15, -0.1, 0.15, -0.1, 0.15, 0],
              spacing: function (e) {
                return 1;
              },
              gap: function (e) {
                return 1;
              },
            }),
            c("square", {
              points: [-0.15, 0, 0.15, 0, 0.15, -0.3, -0.15, -0.3],
            }),
            c("diamond", {
              points: [-0.15, -0.15, 0, -0.3, 0.15, -0.15, 0, 0],
              gap: function (e) {
                return (
                  e.pstyle("width").pfValue * e.pstyle("arrow-scale").value
                );
              },
            });
        }),
        (e.exports = o);
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = {};
      [
        n(111),
        n(112),
        n(113),
        n(114),
        n(115),
        n(116),
        n(117),
        n(118),
        n(119),
      ].forEach(function (e) {
        r.extend(i, e);
      }),
        (e.exports = i);
    },
    function (e, t, n) {
      "use strict";
      var r = n(3),
        i = n(2),
        a = n(1),
        r = n(3),
        o = {};
      (o.projectIntoViewport = function (e, t) {
        var n = this.cy,
          r = this.findContainerClientCoords(),
          i = r[0],
          a = r[1],
          o = r[4],
          s = n.pan(),
          l = n.zoom();
        return [((e - i) / o - s.x) / l, ((t - a) / o - s.y) / l];
      }),
        (o.findContainerClientCoords = function () {
          if (this.containerBB) return this.containerBB;
          var e = this.container,
            t = e.getBoundingClientRect(),
            n = r.getComputedStyle(e),
            i = function (e) {
              return parseFloat(n.getPropertyValue(e));
            },
            a = {
              left: i("padding-left"),
              right: i("padding-right"),
              top: i("padding-top"),
              bottom: i("padding-bottom"),
            },
            o = {
              left: i("border-left-width"),
              right: i("border-right-width"),
              top: i("border-top-width"),
              bottom: i("border-bottom-width"),
            },
            s = e.clientWidth,
            l = e.clientHeight,
            u = a.left + a.right,
            c = a.top + a.bottom,
            d = o.left + o.right,
            h = o.top + o.bottom,
            p = t.width / (s + d),
            f = s - u,
            v = l - c,
            g = (t.width, t.height, t.left + a.left + o.left),
            y = t.top + a.top + o.top;
          return (this.containerBB = [g, y, f, v, p]);
        }),
        (o.invalidateContainerClientCoordsCache = function () {
          this.containerBB = null;
        }),
        (o.findNearestElement = function (e, t, n, r) {
          return this.findNearestElements(e, t, n, r)[0];
        }),
        (o.findNearestElements = function (e, t, n, r) {
          function o(e, t) {
            if (e.isNode()) {
              if (d) return;
              (d = e), v.push(e);
            }
            if (e.isEdge() && (null == t || t < w))
              if (c) {
                if (c.pstyle("z-index").value === e.pstyle("z-index").value)
                  for (var n = 0; n < v.length; n++)
                    if (v[n].isEdge()) {
                      (v[n] = e), (c = e), (w = null != t ? t : w);
                      break;
                    }
              } else v.push(e), (c = e), (w = null != t ? t : w);
          }
          function s(n) {
            var r = n.outerWidth() + 2 * b,
              i = n.outerHeight() + 2 * b,
              a = r / 2,
              s = i / 2,
              l = n.position();
            if (l.x - a <= e && e <= l.x + a && l.y - s <= t && t <= l.y + s) {
              if (
                p.nodeShapes[h.getNodeShape(n)].checkPoint(
                  e,
                  t,
                  0,
                  r,
                  i,
                  l.x,
                  l.y
                )
              )
                return o(n, 0), !0;
            }
          }
          function l(e, t, n) {
            return a.getPrefixedProperty(e, t, n);
          }
          function u(n, r) {
            var a,
              s = n._private,
              u = x;
            a = r ? r + "-" : "";
            var c = n.pstyle(a + "label").value;
            if ("yes" === n.pstyle("text-events").strValue && c) {
              var d = s.rstyle,
                h = n.pstyle("text-border-width").pfValue,
                p = n.pstyle("text-background-padding").pfValue,
                f = l(d, "labelWidth", r) + h + 2 * u + 2 * p,
                v = l(d, "labelHeight", r) + h + 2 * u + 2 * p,
                g = l(d, "labelX", r),
                y = l(d, "labelY", r),
                m = l(s.rscratch, "labelAngle", r),
                b = g - f / 2,
                w = g + f / 2,
                E = y - v / 2,
                P = y + v / 2;
              if (m) {
                var C = Math.cos(m),
                  S = Math.sin(m),
                  T = function (e, t) {
                    return (
                      (e -= g),
                      (t -= y),
                      { x: e * C - t * S + g, y: e * S + t * C + y }
                    );
                  },
                  D = T(b, E),
                  k = T(b, P),
                  _ = T(w, E),
                  M = T(w, P),
                  I = [D.x, D.y, _.x, _.y, M.x, M.y, k.x, k.y];
                if (i.pointInsidePolygonPoints(e, t, I)) return o(n), !0;
              } else {
                var N = { w: f, h: v, x1: b, x2: w, y1: E, y2: P };
                if (i.inBoundingBox(N, e, t)) return o(n), !0;
              }
            }
          }
          var c,
            d,
            h = this,
            p = this,
            f = p.getCachedZSortedEles(),
            v = [],
            g = p.cy.zoom(),
            y = p.cy.hasCompoundNodes(),
            m = (r ? 24 : 8) / g,
            b = (r ? 8 : 2) / g,
            x = (r ? 8 : 2) / g,
            w = 1 / 0;
          n && (f = f.interactive);
          for (var E = f.length - 1; E >= 0; E--) {
            var P = f[E];
            P.isNode()
              ? s(P) || u(P)
              : (function (n) {
                  var r,
                    a = n._private,
                    l = a.rscratch,
                    u = n.pstyle("width").pfValue,
                    c = n.pstyle("arrow-scale").value,
                    d = u / 2 + m,
                    f = d * d,
                    g = 2 * d,
                    b = a.source,
                    x = a.target;
                  if (
                    "segments" === l.edgeType ||
                    "straight" === l.edgeType ||
                    "haystack" === l.edgeType
                  ) {
                    for (var w = l.allpts, E = 0; E + 3 < w.length; E += 2)
                      if (
                        i.inLineVicinity(
                          e,
                          t,
                          w[E],
                          w[E + 1],
                          w[E + 2],
                          w[E + 3],
                          g
                        ) &&
                        f >
                          (r = i.sqdistToFiniteLine(
                            e,
                            t,
                            w[E],
                            w[E + 1],
                            w[E + 2],
                            w[E + 3]
                          ))
                      )
                        return o(n, r), !0;
                  } else if (
                    "bezier" === l.edgeType ||
                    "multibezier" === l.edgeType ||
                    "self" === l.edgeType ||
                    "compound" === l.edgeType
                  )
                    for (
                      var w = l.allpts, E = 0;
                      E + 5 < l.allpts.length;
                      E += 4
                    )
                      if (
                        i.inBezierVicinity(
                          e,
                          t,
                          w[E],
                          w[E + 1],
                          w[E + 2],
                          w[E + 3],
                          w[E + 4],
                          w[E + 5],
                          g
                        ) &&
                        f >
                          (r = i.sqdistToQuadraticBezier(
                            e,
                            t,
                            w[E],
                            w[E + 1],
                            w[E + 2],
                            w[E + 3],
                            w[E + 4],
                            w[E + 5]
                          ))
                      )
                        return o(n, r), !0;
                  for (
                    var b = b || a.source,
                      x = x || a.target,
                      P = h.getArrowWidth(u, c),
                      C = [
                        {
                          name: "source",
                          x: l.arrowStartX,
                          y: l.arrowStartY,
                          angle: l.srcArrowAngle,
                        },
                        {
                          name: "target",
                          x: l.arrowEndX,
                          y: l.arrowEndY,
                          angle: l.tgtArrowAngle,
                        },
                        {
                          name: "mid-source",
                          x: l.midX,
                          y: l.midY,
                          angle: l.midsrcArrowAngle,
                        },
                        {
                          name: "mid-target",
                          x: l.midX,
                          y: l.midY,
                          angle: l.midtgtArrowAngle,
                        },
                      ],
                      E = 0;
                    E < C.length;
                    E++
                  ) {
                    var S = C[E],
                      T =
                        p.arrowShapes[n.pstyle(S.name + "-arrow-shape").value],
                      D = n.pstyle("width").pfValue;
                    if (
                      T.roughCollide(
                        e,
                        t,
                        P,
                        S.angle,
                        { x: S.x, y: S.y },
                        D,
                        m
                      ) &&
                      T.collide(e, t, P, S.angle, { x: S.x, y: S.y }, D, m)
                    )
                      return o(n), !0;
                  }
                  y && v.length > 0 && (s(b), s(x));
                })(P) ||
                u(P) ||
                u(P, "source") ||
                u(P, "target");
          }
          return v;
        }),
        (o.getAllInBox = function (e, t, n, r) {
          var a = this.getCachedZSortedEles().interactive,
            o = [],
            s = Math.min(e, n),
            l = Math.max(e, n),
            u = Math.min(t, r),
            c = Math.max(t, r);
          (e = s), (n = l), (t = u), (r = c);
          for (
            var d = i.makeBoundingBox({ x1: e, y1: t, x2: n, y2: r }), h = 0;
            h < a.length;
            h++
          ) {
            var p = a[h];
            if (p.isNode()) {
              var f = p,
                v = f.boundingBox({
                  includeNodes: !0,
                  includeEdges: !1,
                  includeLabels: !1,
                });
              i.boundingBoxesIntersect(d, v) &&
                !i.boundingBoxInBoundingBox(v, d) &&
                o.push(f);
            } else {
              var g = p,
                y = g._private,
                m = y.rscratch;
              if (
                null != m.startX &&
                null != m.startY &&
                !i.inBoundingBox(d, m.startX, m.startY)
              )
                continue;
              if (
                null != m.endX &&
                null != m.endY &&
                !i.inBoundingBox(d, m.endX, m.endY)
              )
                continue;
              if (
                "bezier" === m.edgeType ||
                "multibezier" === m.edgeType ||
                "self" === m.edgeType ||
                "compound" === m.edgeType ||
                "segments" === m.edgeType ||
                "haystack" === m.edgeType
              ) {
                for (
                  var b =
                      y.rstyle.bezierPts ||
                      y.rstyle.linePts ||
                      y.rstyle.haystackPts,
                    x = !0,
                    w = 0;
                  w < b.length;
                  w++
                )
                  if (!i.pointInBoundingBox(d, b[w])) {
                    x = !1;
                    break;
                  }
                x && o.push(g);
              } else
                ("haystack" !== m.edgeType && "straight" !== m.edgeType) ||
                  o.push(g);
            }
          }
          return o;
        }),
        (e.exports = o);
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = {};
      (i.calculateArrowAngles = function (e) {
        var t,
          n,
          i,
          a,
          o,
          s,
          l,
          u,
          c = e._private.rscratch,
          d = "haystack" === c.edgeType,
          h = "bezier" === c.edgeType,
          p = "multibezier" === c.edgeType,
          f = "segments" === c.edgeType,
          v = "compound" === c.edgeType,
          g = "self" === c.edgeType;
        if (
          (d
            ? ((i = c.haystackPts[0]),
              (a = c.haystackPts[1]),
              (o = c.haystackPts[2]),
              (s = c.haystackPts[3]))
            : ((i = c.arrowStartX),
              (a = c.arrowStartY),
              (o = c.arrowEndX),
              (s = c.arrowEndY)),
          (l = c.midX),
          (u = c.midY),
          f)
        )
          (t = i - c.segpts[0]), (n = a - c.segpts[1]);
        else if (p || v || g || h) {
          var y = c.allpts,
            m = r.qbezierAt(y[0], y[2], y[4], 0.1),
            b = r.qbezierAt(y[1], y[3], y[5], 0.1);
          (t = i - m), (n = a - b);
        } else (t = i - l), (n = a - u);
        c.srcArrowAngle = r.getAngleFromDisp(t, n);
        var l = c.midX,
          u = c.midY;
        if (
          (d && ((l = (i + o) / 2), (u = (a + s) / 2)),
          (t = o - i),
          (n = s - a),
          f)
        ) {
          var y = c.allpts;
          if ((y.length / 2) % 2 == 0) {
            var x = y.length / 2,
              w = x - 2;
            (t = y[x] - y[w]), (n = y[x + 1] - y[w + 1]);
          } else {
            var x = y.length / 2 - 1,
              w = x - 2,
              E = x + 2;
            (t = y[x] - y[w]), (n = y[x + 1] - y[w + 1]);
          }
        } else if (p || v || g) {
          var P,
            C,
            S,
            T,
            y = c.allpts,
            D = c.ctrlpts;
          if ((D.length / 2) % 2 == 0) {
            var k = y.length / 2 - 1,
              _ = k + 2,
              M = _ + 2;
            (P = r.qbezierAt(y[k], y[_], y[M], 0)),
              (C = r.qbezierAt(y[k + 1], y[_ + 1], y[M + 1], 0)),
              (S = r.qbezierAt(y[k], y[_], y[M], 1e-4)),
              (T = r.qbezierAt(y[k + 1], y[_ + 1], y[M + 1], 1e-4));
          } else {
            var _ = y.length / 2 - 1,
              k = _ - 2,
              M = _ + 2;
            (P = r.qbezierAt(y[k], y[_], y[M], 0.4999)),
              (C = r.qbezierAt(y[k + 1], y[_ + 1], y[M + 1], 0.4999)),
              (S = r.qbezierAt(y[k], y[_], y[M], 0.5)),
              (T = r.qbezierAt(y[k + 1], y[_ + 1], y[M + 1], 0.5));
          }
          (t = S - P), (n = T - C);
        }
        if (
          ((c.midtgtArrowAngle = r.getAngleFromDisp(t, n)),
          (c.midDispX = t),
          (c.midDispY = n),
          (t *= -1),
          (n *= -1),
          f)
        ) {
          var y = c.allpts;
          if ((y.length / 2) % 2 == 0);
          else {
            var x = y.length / 2 - 1,
              E = x + 2;
            (t = -(y[E] - y[x])), (n = -(y[E + 1] - y[x + 1]));
          }
        }
        if (((c.midsrcArrowAngle = r.getAngleFromDisp(t, n)), f))
          (t = o - c.segpts[c.segpts.length - 2]),
            (n = s - c.segpts[c.segpts.length - 1]);
        else if (p || v || g || h) {
          var y = c.allpts,
            I = y.length,
            m = r.qbezierAt(y[I - 6], y[I - 4], y[I - 2], 0.9),
            b = r.qbezierAt(y[I - 5], y[I - 3], y[I - 1], 0.9);
          (t = o - m), (n = s - b);
        } else (t = o - l), (n = s - u);
        c.tgtArrowAngle = r.getAngleFromDisp(t, n);
      }),
        (i.getArrowWidth = i.getArrowHeight =
          function (e, t) {
            var n = (this.arrowWidthCache = this.arrowWidthCache || {}),
              r = n[e + ", " + t];
            return (
              r ||
              ((r = Math.max(Math.pow(13.37 * e, 0.9), 29) * t),
              (n[e + ", " + t] = r),
              r)
            );
          }),
        (e.exports = i);
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        var t = [];
        if (null != e) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              i = e[n + 1];
            t.push({ x: r, y: i });
          }
          return t;
        }
      }
      var i = n(2),
        a = n(0),
        o = {};
      (o.findEdgeControlPoints = function (e) {
        if (e && 0 !== e.length) {
          for (
            var t,
              n = this,
              r = n.cy,
              o = r.hasCompoundNodes(),
              s = {},
              l = [],
              u = [],
              c = 0;
            c < e.length;
            c++
          ) {
            var d = e[c],
              h = d._private,
              p = h.data,
              f = d.pstyle("curve-style").value,
              v = "unbundled-bezier" === f || "segments" === f,
              g = "unbundled-bezier" === f || "bezier" === f;
            if ("none" !== d.pstyle("display").value)
              if ("haystack" !== f) {
                var y = p.source,
                  m = p.target;
                (t = y > m ? m + "$-$" + y : y + "$-$" + m),
                  v && (t = "unbundled$-$" + p.id);
                var b = s[t];
                null == b && ((b = s[t] = []), l.push(t)),
                  b.push(d),
                  v && (b.hasUnbundled = !0),
                  g && (b.hasBezier = !0);
              } else u.push(d);
          }
          for (
            var x, w, E, P, C, S, T, D, k, _, M, I, N = 0;
            N < l.length;
            N++
          ) {
            t = l[N];
            var B = s[t];
            if (
              (B.sort(function (e, t) {
                return e.poolIndex() - t.poolIndex();
              }),
              (x = B[0]._private.source),
              (w = B[0]._private.target),
              !B.hasUnbundled && x.id() > w.id())
            ) {
              var z = x;
              (x = w), (w = z);
            }
            (E = x.position()),
              (P = w.position()),
              (C = x.outerWidth()),
              (S = x.outerHeight()),
              (T = w.outerWidth()),
              (D = w.outerHeight()),
              (k = n.nodeShapes[this.getNodeShape(x)]),
              (_ = n.nodeShapes[this.getNodeShape(w)]),
              (I = !1);
            for (
              var d,
                L,
                A,
                O = {
                  north: 0,
                  west: 0,
                  south: 0,
                  east: 0,
                  northwest: 0,
                  southwest: 0,
                  northeast: 0,
                  southeast: 0,
                },
                R = E.x,
                V = E.y,
                q = C,
                F = S,
                j = P.x,
                X = P.y,
                Y = T,
                W = D,
                H = B.length,
                c = 0;
              c < B.length;
              c++
            ) {
              (d = B[c]), (L = d._private), (A = L.rscratch);
              var Z = A.lastEdgeIndex,
                $ = c,
                U = A.lastNumEdges,
                f = d.pstyle("curve-style").value,
                v = "unbundled-bezier" === f || "segments" === f,
                G = x.id() !== d.source().id(),
                Q = d.pstyle("control-point-distances"),
                K = d.pstyle("loop-direction").pfValue,
                J = d.pstyle("loop-sweep").pfValue,
                ee = d.pstyle("control-point-weights"),
                te = Q && ee ? Math.min(Q.value.length, ee.value.length) : 1,
                ne = d.pstyle("control-point-step-size").pfValue,
                re = Q ? Q.pfValue[0] : void 0,
                ie = ee.value[0],
                ae = d.pstyle("edge-distances").value,
                oe = d.pstyle("segment-weights"),
                se = d.pstyle("segment-distances"),
                le = Math.min(oe.pfValue.length, se.pfValue.length),
                ue = d.pstyle("source-endpoint").value,
                ce = d.pstyle("target-endpoint").value,
                de = d.pstyle("source-arrow-shape").value,
                he = d.pstyle("target-arrow-shape").value,
                pe = d.pstyle("arrow-scale").value,
                fe = d.pstyle("width").pfValue,
                ve = A.lastSrcCtlPtX,
                ge = A.lastSrcCtlPtY,
                ye = A.lastSrcCtlPtW,
                me = A.lastSrcCtlPtH,
                be = A.lastTgtCtlPtX,
                xe = A.lastTgtCtlPtY,
                we = A.lastTgtCtlPtW,
                Ee = A.lastTgtCtlPtH,
                Pe = A.lastCurveStyle,
                Ce = f,
                Se = A.lastCtrlptDists,
                Te = Q ? Q.strValue : null,
                De = A.lastCtrlptWs,
                ke = ee.strValue,
                _e = A.lastSegmentWs,
                Me = oe.strValue,
                Ie = A.lastSegmentDs,
                Ne = se.strValue,
                Be = A.lastStepSize,
                ze = ne,
                Le = A.lastLoopDir,
                Ae = K,
                Oe = A.lastLoopSwp,
                Re = J,
                Ve = A.lastEdgeDistances,
                qe = ae,
                Fe = A.lastSrcEndpt,
                je = ue,
                Xe = A.lastTgtEndpt,
                Ye = ce,
                We = A.lastSrcArr,
                He = de,
                Ze = A.lastTgtArr,
                $e = he,
                Ue = A.lastLineW,
                Ge = fe,
                Qe = A.lastArrScl,
                Ke = pe;
              A.badBezier = !!I;
              var Je;
              if (
                (ve === R &&
                ge === V &&
                ye === q &&
                me === F &&
                be === j &&
                xe === X &&
                we === Y &&
                Ee === W &&
                Pe === Ce &&
                Se === Te &&
                De === ke &&
                _e === Me &&
                Ie === Ne &&
                Be === ze &&
                Le === Ae &&
                Oe === Re &&
                Ve === qe &&
                Fe === je &&
                Xe === Ye &&
                We === He &&
                Ze === $e &&
                Ue === Ge &&
                Qe === Ke &&
                ((Z === $ && U === H) || v)
                  ? (Je = !0)
                  : ((Je = !1),
                    (A.lastSrcCtlPtX = R),
                    (A.lastSrcCtlPtY = V),
                    (A.lastSrcCtlPtW = q),
                    (A.lastSrcCtlPtH = F),
                    (A.lastTgtCtlPtX = j),
                    (A.lastTgtCtlPtY = X),
                    (A.lastTgtCtlPtW = Y),
                    (A.lastTgtCtlPtH = W),
                    (A.lastEdgeIndex = $),
                    (A.lastNumEdges = H),
                    (A.lastCurveStyle = Ce),
                    (A.lastCtrlptDists = Te),
                    (A.lastCtrlptWs = ke),
                    (A.lastSegmentDs = Ne),
                    (A.lastSegmentWs = Me),
                    (A.lastStepSize = ze),
                    (A.lastLoopDir = Ae),
                    (A.lastLoopSwp = Re),
                    (A.lastEdgeDistances = qe),
                    (A.lastSrcEndpt = je),
                    (A.lastTgtEndpt = Ye),
                    (A.lastSrcArr = He),
                    (A.lastTgtArr = $e),
                    (A.lastLineW = Ge),
                    (A.lastArrScl = Ke)),
                !Je)
              ) {
                if (
                  !B.calculatedIntersection &&
                  x !== w &&
                  (B.hasBezier || B.hasUnbundled)
                ) {
                  B.calculatedIntersection = !0;
                  var et = k.intersectLine(E.x, E.y, C, S, P.x, P.y, 0);
                  B.srcIntn = et;
                  var tt = _.intersectLine(P.x, P.y, T, D, E.x, E.y, 0);
                  B.tgtIntn = tt;
                  var nt = { x1: et[0], x2: tt[0], y1: et[1], y2: tt[1] },
                    rt = { x1: E.x, x2: P.x, y1: E.y, y2: P.y },
                    it = tt[1] - et[1],
                    at = tt[0] - et[0],
                    ot = Math.sqrt(at * at + it * it),
                    st = { x: at, y: it },
                    lt = { x: st.x / ot, y: st.y / ot };
                  (M = { x: -lt.y, y: lt.x }),
                    _.checkPoint(et[0], et[1], 0, T, D, P.x, P.y) &&
                      k.checkPoint(tt[0], tt[1], 0, C, S, E.x, E.y) &&
                      ((M = {}), (I = !0));
                }
                if (
                  (G
                    ? ((A.srcIntn = B.tgtIntn), (A.tgtIntn = B.srcIntn))
                    : ((A.srcIntn = B.srcIntn), (A.tgtIntn = B.tgtIntn)),
                  x === w)
                ) {
                  A.edgeType = "self";
                  var ut = c,
                    ct = ne;
                  v && ((ut = 0), (ct = re));
                  var dt = K - Math.PI / 2,
                    ht = dt - J / 2,
                    pt = dt + J / 2,
                    ft = String(K + "_" + J);
                  (ut = void 0 === O[ft] ? (O[ft] = 0) : ++O[ft]),
                    (A.ctrlpts = [
                      E.x + 1.4 * Math.cos(ht) * ct * (ut / 3 + 1),
                      E.y + 1.4 * Math.sin(ht) * ct * (ut / 3 + 1),
                      E.x + 1.4 * Math.cos(pt) * ct * (ut / 3 + 1),
                      E.y + 1.4 * Math.sin(pt) * ct * (ut / 3 + 1),
                    ]);
                } else if (
                  o &&
                  (x.isParent() ||
                    x.isChild() ||
                    w.isParent() ||
                    w.isChild()) &&
                  (x.parents().anySame(w) || w.parents().anySame(x))
                ) {
                  (A.edgeType = "compound"), (A.badBezier = !1);
                  var ut = c,
                    ct = ne;
                  v && ((ut = 0), (ct = re));
                  var vt = { x: E.x - C / 2, y: E.y - S / 2 },
                    gt = { x: P.x - T / 2, y: P.y - D / 2 },
                    yt = { x: Math.min(vt.x, gt.x), y: Math.min(vt.y, gt.y) },
                    mt = Math.max(0.5, Math.log(0.01 * C)),
                    bt = Math.max(0.5, Math.log(0.01 * T));
                  A.ctrlpts = [
                    yt.x,
                    yt.y -
                      (1 + Math.pow(50, 1.12) / 100) * ct * (ut / 3 + 1) * mt,
                    yt.x -
                      (1 + Math.pow(50, 1.12) / 100) * ct * (ut / 3 + 1) * bt,
                    yt.y,
                  ];
                } else if ("segments" === f) {
                  (A.edgeType = "segments"), (A.segpts = []);
                  for (var xt = 0; xt < le; xt++) {
                    var wt = oe.pfValue[xt],
                      Et = se.pfValue[xt],
                      Pt = 1 - wt,
                      Ct = wt,
                      St = "node-position" === ae ? rt : nt,
                      Tt = {
                        x: St.x1 * Pt + St.x2 * Ct,
                        y: St.y1 * Pt + St.y2 * Ct,
                      };
                    A.segpts.push(Tt.x + M.x * Et, Tt.y + M.y * Et);
                  }
                } else if (
                  B.length % 2 != 1 ||
                  c !== Math.floor(B.length / 2) ||
                  v
                ) {
                  var Dt = v;
                  (A.edgeType = Dt ? "multibezier" : "bezier"),
                    (A.ctrlpts = []);
                  for (var kt = 0; kt < te; kt++) {
                    var _t,
                      Mt = (0.5 - B.length / 2 + c) * ne,
                      It = i.signum(Mt);
                    Dt && ((re = Q ? Q.pfValue[kt] : ne), (ie = ee.value[kt])),
                      (_t = v ? re : void 0 !== re ? It * re : void 0);
                    var Nt = void 0 !== _t ? _t : Mt,
                      Pt = 1 - ie,
                      Ct = ie;
                    if (G) {
                      var z = Pt;
                      (Pt = Ct), (Ct = z);
                    }
                    var St = "node-position" === ae ? rt : nt,
                      Tt = {
                        x: St.x1 * Pt + St.x2 * Ct,
                        y: St.y1 * Pt + St.y2 * Ct,
                      };
                    A.ctrlpts.push(Tt.x + M.x * Nt, Tt.y + M.y * Nt);
                  }
                } else A.edgeType = "straight";
                this.findEndpoints(d);
                var Bt = !a.number(A.startX) || !a.number(A.startY),
                  zt = !a.number(A.arrowStartX) || !a.number(A.arrowStartY),
                  Lt = !a.number(A.endX) || !a.number(A.endY),
                  At = !a.number(A.arrowEndX) || !a.number(A.arrowEndY),
                  Ot =
                    this.getArrowWidth(
                      d.pstyle("width").pfValue,
                      d.pstyle("arrow-scale").value
                    ) * this.arrowShapeWidth,
                  Rt = 3 * Ot;
                if ("bezier" === A.edgeType) {
                  var Vt = i.dist(
                      { x: A.ctrlpts[0], y: A.ctrlpts[1] },
                      { x: A.startX, y: A.startY }
                    ),
                    qt = Vt < Rt,
                    Ft = i.dist(
                      { x: A.ctrlpts[0], y: A.ctrlpts[1] },
                      { x: A.endX, y: A.endY }
                    ),
                    jt = Ft < Rt,
                    Xt = !1;
                  if (Bt || zt || qt) {
                    Xt = !0;
                    var Yt = { x: A.ctrlpts[0] - E.x, y: A.ctrlpts[1] - E.y },
                      Wt = Math.sqrt(Yt.x * Yt.x + Yt.y * Yt.y),
                      Ht = { x: Yt.x / Wt, y: Yt.y / Wt },
                      Zt = Math.max(C, S),
                      $t = {
                        x: A.ctrlpts[0] + 2 * Ht.x * Zt,
                        y: A.ctrlpts[1] + 2 * Ht.y * Zt,
                      },
                      Ut = k.intersectLine(E.x, E.y, C, S, $t.x, $t.y, 0);
                    qt
                      ? ((A.ctrlpts[0] = A.ctrlpts[0] + Ht.x * (Rt - Vt)),
                        (A.ctrlpts[1] = A.ctrlpts[1] + Ht.y * (Rt - Vt)))
                      : ((A.ctrlpts[0] = Ut[0] + Ht.x * Rt),
                        (A.ctrlpts[1] = Ut[1] + Ht.y * Rt));
                  }
                  if (Lt || At || jt) {
                    Xt = !0;
                    var Yt = { x: A.ctrlpts[0] - P.x, y: A.ctrlpts[1] - P.y },
                      Wt = Math.sqrt(Yt.x * Yt.x + Yt.y * Yt.y),
                      Ht = { x: Yt.x / Wt, y: Yt.y / Wt },
                      Zt = Math.max(C, S),
                      $t = {
                        x: A.ctrlpts[0] + 2 * Ht.x * Zt,
                        y: A.ctrlpts[1] + 2 * Ht.y * Zt,
                      },
                      Gt = _.intersectLine(P.x, P.y, T, D, $t.x, $t.y, 0);
                    jt
                      ? ((A.ctrlpts[0] = A.ctrlpts[0] + Ht.x * (Rt - Ft)),
                        (A.ctrlpts[1] = A.ctrlpts[1] + Ht.y * (Rt - Ft)))
                      : ((A.ctrlpts[0] = Gt[0] + Ht.x * Rt),
                        (A.ctrlpts[1] = Gt[1] + Ht.y * Rt));
                  }
                  Xt && this.findEndpoints(d);
                }
                if (
                  "multibezier" === A.edgeType ||
                  "bezier" === A.edgeType ||
                  "self" === A.edgeType ||
                  "compound" === A.edgeType
                ) {
                  (A.allpts = []), A.allpts.push(A.startX, A.startY);
                  for (var kt = 0; kt + 1 < A.ctrlpts.length; kt += 2)
                    A.allpts.push(A.ctrlpts[kt], A.ctrlpts[kt + 1]),
                      kt + 3 < A.ctrlpts.length &&
                        A.allpts.push(
                          (A.ctrlpts[kt] + A.ctrlpts[kt + 2]) / 2,
                          (A.ctrlpts[kt + 1] + A.ctrlpts[kt + 3]) / 2
                        );
                  A.allpts.push(A.endX, A.endY);
                  var Qt, Kt;
                  (A.ctrlpts.length / 2) % 2 == 0
                    ? ((Qt = A.allpts.length / 2 - 1),
                      (A.midX = A.allpts[Qt]),
                      (A.midY = A.allpts[Qt + 1]))
                    : ((Qt = A.allpts.length / 2 - 3),
                      (Kt = 0.5),
                      (A.midX = i.qbezierAt(
                        A.allpts[Qt],
                        A.allpts[Qt + 2],
                        A.allpts[Qt + 4],
                        Kt
                      )),
                      (A.midY = i.qbezierAt(
                        A.allpts[Qt + 1],
                        A.allpts[Qt + 3],
                        A.allpts[Qt + 5],
                        Kt
                      )));
                } else if ("straight" === A.edgeType)
                  (A.allpts = [A.startX, A.startY, A.endX, A.endY]),
                    (A.midX =
                      (A.startX + A.endX + A.arrowStartX + A.arrowEndX) / 4),
                    (A.midY =
                      (A.startY + A.endY + A.arrowStartY + A.arrowEndY) / 4);
                else if ("segments" === A.edgeType)
                  if (
                    ((A.allpts = []),
                    A.allpts.push(A.startX, A.startY),
                    A.allpts.push.apply(A.allpts, A.segpts),
                    A.allpts.push(A.endX, A.endY),
                    A.segpts.length % 4 == 0)
                  ) {
                    var Jt = A.segpts.length / 2,
                      en = Jt - 2;
                    (A.midX = (A.segpts[en] + A.segpts[Jt]) / 2),
                      (A.midY = (A.segpts[en + 1] + A.segpts[Jt + 1]) / 2);
                  } else {
                    var en = A.segpts.length / 2 - 1;
                    (A.midX = A.segpts[en]), (A.midY = A.segpts[en + 1]);
                  }
                this.storeEdgeProjections(d), this.calculateArrowAngles(d);
              }
              this.recalculateEdgeLabelProjections(d),
                this.calculateLabelAngles(d);
            }
          }
          for (var c = 0; c < u.length; c++) {
            var d = u[c],
              h = d._private,
              tn = h.rscratch,
              A = tn;
            if (!tn.haystack) {
              var nn = 2 * Math.random() * Math.PI;
              tn.source = { x: Math.cos(nn), y: Math.sin(nn) };
              var nn = 2 * Math.random() * Math.PI;
              tn.target = { x: Math.cos(nn), y: Math.sin(nn) };
            }
            var x = h.source,
              w = h.target,
              E = x.position(),
              P = w.position(),
              C = x.width(),
              T = w.width(),
              S = x.height(),
              D = w.height(),
              Zt = d.pstyle("haystack-radius").value,
              rn = Zt / 2;
            (A.haystackPts = A.allpts =
              [
                A.source.x * C * rn + E.x,
                A.source.y * S * rn + E.y,
                A.target.x * T * rn + P.x,
                A.target.y * D * rn + P.y,
              ]),
              (A.midX = (A.allpts[0] + A.allpts[2]) / 2),
              (A.midY = (A.allpts[1] + A.allpts[3]) / 2),
              (tn.edgeType = tn.lastCurveStyle = "haystack"),
              (tn.haystack = !0),
              this.storeEdgeProjections(d),
              this.calculateArrowAngles(d),
              this.recalculateEdgeLabelProjections(d),
              this.calculateLabelAngles(d);
          }
        }
      }),
        (o.getSegmentPoints = function (e) {
          var t = e[0]._private.rscratch;
          if ("segments" === t.edgeType) return r(t.segpts);
        }),
        (o.getControlPoints = function (e) {
          var t = e[0]._private.rscratch,
            n = t.edgeType;
          if ("bezier" === n || "multibezier" === n) return r(t.ctrlpts);
        }),
        (o.getEdgeMidpoint = function (e) {
          var t = e[0]._private.rscratch;
          return { x: t.midX, y: t.midY };
        }),
        (e.exports = o);
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = n(0),
        a = {};
      (a.manualEndptToPx = function (e, t) {
        var n = this,
          r = e.position(),
          i = e.outerWidth(),
          a = e.outerHeight();
        if (2 === t.value.length) {
          var o = [t.pfValue[0], t.pfValue[1]];
          return (
            "%" === t.units[0] && (o[0] = o[0] * i),
            "%" === t.units[1] && (o[1] = o[1] * a),
            (o[0] += r.x),
            (o[1] += r.y),
            o
          );
        }
        var s = t.pfValue[0];
        s = -Math.PI / 2 + s;
        var l = 2 * Math.max(i, a),
          u = [r.x + Math.cos(s) * l, r.y + Math.sin(s) * l];
        return n.nodeShapes[this.getNodeShape(e)].intersectLine(
          r.x,
          r.y,
          i,
          a,
          u[0],
          u[1],
          0
        );
      }),
        (a.findEndpoints = function (e) {
          var t = this,
            n = void 0,
            a = e.source()[0],
            o = e.target()[0],
            s = a.position(),
            l = o.position(),
            u = e.pstyle("target-arrow-shape").value,
            c = e.pstyle("source-arrow-shape").value,
            d = e.pstyle("target-distance-from-node").pfValue,
            h = e.pstyle("source-distance-from-node").pfValue,
            p = e._private.rscratch,
            f = p.edgeType,
            v = "self" === f || "compound" === f,
            g = "bezier" === f || "multibezier" === f || v,
            y = "bezier" !== f,
            m = "straight" === f || "segments" === f,
            b = "segments" === f,
            x = g || y || m,
            w = e.pstyle("source-endpoint"),
            E = v ? "outside-to-node" : w.value,
            P = e.pstyle("target-endpoint"),
            C = v ? "outside-to-node" : P.value;
          (p.srcManEndpt = w), (p.tgtManEndpt = P);
          var S = void 0,
            T = void 0,
            D = void 0,
            k = void 0;
          if (g) {
            var _ = [p.ctrlpts[0], p.ctrlpts[1]];
            (S = y
              ? [
                  p.ctrlpts[p.ctrlpts.length - 2],
                  p.ctrlpts[p.ctrlpts.length - 1],
                ]
              : _),
              (T = _);
          } else if (m) {
            var M = b ? p.segpts.slice(0, 2) : [l.x, l.y],
              I = b ? p.segpts.slice(p.segpts.length - 2) : [s.x, s.y];
            (S = I), (T = M);
          }
          "inside-to-node" === C
            ? (n = [l.x, l.y])
            : P.units
            ? (n = this.manualEndptToPx(o, P))
            : "outside-to-line" === C
            ? (n = p.tgtIntn)
            : ("outside-to-node" === C
                ? (D = S)
                : "outside-to-line" === C && (D = [s.x, s.y]),
              (n = t.nodeShapes[this.getNodeShape(o)].intersectLine(
                l.x,
                l.y,
                o.outerWidth(),
                o.outerHeight(),
                D[0],
                D[1],
                0
              )));
          var N = r.shortenIntersection(n, S, t.arrowShapes[u].spacing(e) + d),
            B = r.shortenIntersection(n, S, t.arrowShapes[u].gap(e) + d);
          (p.endX = B[0]),
            (p.endY = B[1]),
            (p.arrowEndX = N[0]),
            (p.arrowEndY = N[1]),
            "inside-to-node" === E
              ? (n = [s.x, s.y])
              : w.units
              ? (n = this.manualEndptToPx(a, w))
              : "outside-to-line" === E
              ? (n = p.srcIntn)
              : ("outside-to-node" === E
                  ? (k = T)
                  : "outside-to-line" === E && (k = [l.x, l.y]),
                (n = t.nodeShapes[this.getNodeShape(a)].intersectLine(
                  s.x,
                  s.y,
                  a.outerWidth(),
                  a.outerHeight(),
                  k[0],
                  k[1],
                  0
                )));
          var z = r.shortenIntersection(n, T, t.arrowShapes[c].spacing(e) + h),
            L = r.shortenIntersection(n, T, t.arrowShapes[c].gap(e) + h);
          (p.startX = L[0]),
            (p.startY = L[1]),
            (p.arrowStartX = z[0]),
            (p.arrowStartY = z[1]),
            x &&
              (i.number(p.startX) &&
              i.number(p.startY) &&
              i.number(p.endX) &&
              i.number(p.endY)
                ? (p.badLine = !1)
                : (p.badLine = !0));
        }),
        (a.getSourceEndpoint = function (e) {
          var t = e[0]._private.rscratch;
          switch (t.edgeType) {
            case "haystack":
              return { x: t.haystackPts[0], y: t.haystackPts[1] };
            default:
              return { x: t.arrowStartX, y: t.arrowStartY };
          }
        }),
        (a.getTargetEndpoint = function (e) {
          var t = e[0]._private.rscratch;
          switch (t.edgeType) {
            case "haystack":
              return { x: t.haystackPts[2], y: t.haystackPts[3] };
            default:
              return { x: t.arrowEndX, y: t.arrowEndY };
          }
        }),
        (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        for (
          var r = function (e, t, n, r) {
              return i.qbezierAt(e, t, n, r);
            },
            a = t._private,
            o = a.rstyle.bezierPts,
            s = 0;
          s < e.bezierProjPcts.length;
          s++
        ) {
          var l = e.bezierProjPcts[s];
          o.push({ x: r(n[0], n[2], n[4], l), y: r(n[1], n[3], n[5], l) });
        }
      }
      var i = n(2),
        a = {};
      (a.storeEdgeProjections = function (e) {
        var t = e._private,
          n = t.rscratch,
          i = n.edgeType;
        if (
          ((t.rstyle.bezierPts = null),
          (t.rstyle.linePts = null),
          (t.rstyle.haystackPts = null),
          "multibezier" === i ||
            "bezier" === i ||
            "self" === i ||
            "compound" === i)
        )
          for (
            var a = ((t.rstyle.bezierPts = []), 0);
            a + 5 < n.allpts.length;
            a += 4
          )
            r(this, e, n.allpts.slice(a, a + 6));
        else if ("segments" === i)
          for (
            var o = (t.rstyle.linePts = []), a = 0;
            a + 1 < n.allpts.length;
            a += 2
          )
            o.push({ x: n.allpts[a], y: n.allpts[a + 1] });
        else if ("haystack" === i) {
          var s = n.haystackPts;
          t.rstyle.haystackPts = [
            { x: s[0], y: s[1] },
            { x: s[2], y: s[3] },
          ];
        }
        t.rstyle.arrowWidth =
          this.getArrowWidth(
            e.pstyle("width").pfValue,
            e.pstyle("arrow-scale").value
          ) * this.arrowShapeWidth;
      }),
        (a.recalculateEdgeProjections = function (e) {
          this.findEdgeControlPoints(e);
        }),
        (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = n(0),
        a = n(1),
        o = {};
      (o.recalculateNodeLabelProjection = function (e) {
        var t = e.pstyle("label").strValue;
        if (!i.emptyString(t)) {
          var n,
            r,
            a = e._private,
            o = e.width(),
            s = e.height(),
            l = e.padding(),
            u = e.position(),
            c = e.pstyle("text-halign").strValue,
            d = e.pstyle("text-valign").strValue,
            h = a.rscratch,
            p = a.rstyle;
          switch (c) {
            case "left":
              n = u.x - o / 2 - l;
              break;
            case "right":
              n = u.x + o / 2 + l;
              break;
            default:
              n = u.x;
          }
          switch (d) {
            case "top":
              r = u.y - s / 2 - l;
              break;
            case "bottom":
              r = u.y + s / 2 + l;
              break;
            default:
              r = u.y;
          }
          (h.labelX = n),
            (h.labelY = r),
            (p.labelX = n),
            (p.labelY = r),
            this.applyLabelDimensions(e);
        }
      }),
        (o.recalculateEdgeLabelProjections = function (e) {
          var t,
            n = e._private,
            i = n.rscratch,
            o = this,
            s = {
              mid: e.pstyle("label").strValue,
              source: e.pstyle("source-label").strValue,
              target: e.pstyle("target-label").strValue,
            };
          if (s.mid || s.source || s.target) {
            t = { x: i.midX, y: i.midY };
            var l = function (e, t, r) {
              a.setPrefixedProperty(n.rscratch, e, t, r),
                a.setPrefixedProperty(n.rstyle, e, t, r);
            };
            l("labelX", null, t.x), l("labelY", null, t.y);
            var u = function e() {
                function t(e, t, n, i, a) {
                  var o = r.dist(t, n),
                    s = e.segments[e.segments.length - 1],
                    l = {
                      p0: t,
                      p1: n,
                      t0: i,
                      t1: a,
                      startDist: s ? s.startDist + s.length : 0,
                      length: o,
                    };
                  e.segments.push(l), (e.length += o);
                }
                if (e.cache) return e.cache;
                for (var a = [], s = 0; s + 5 < i.allpts.length; s += 4) {
                  var l = { x: i.allpts[s], y: i.allpts[s + 1] },
                    u = { x: i.allpts[s + 2], y: i.allpts[s + 3] },
                    c = { x: i.allpts[s + 4], y: i.allpts[s + 5] };
                  a.push({
                    p0: l,
                    p1: u,
                    p2: c,
                    startDist: 0,
                    length: 0,
                    segments: [],
                  });
                }
                for (
                  var d = n.rstyle.bezierPts,
                    h = o.bezierProjPcts.length,
                    s = 0;
                  s < a.length;
                  s++
                ) {
                  var p = a[s],
                    f = a[s - 1];
                  f && (p.startDist = f.startDist + f.length),
                    t(p, p.p0, d[s * h], 0, o.bezierProjPcts[0]);
                  for (var v = 0; v < h - 1; v++)
                    t(
                      p,
                      d[s * h + v],
                      d[s * h + v + 1],
                      o.bezierProjPcts[v],
                      o.bezierProjPcts[v + 1]
                    );
                  t(p, d[s * h + h - 1], p.p2, o.bezierProjPcts[h - 1], 1);
                }
                return (e.cache = a);
              },
              c = function (n) {
                var a,
                  o = "source" === n;
                if (s[n]) {
                  var c = e.pstyle(n + "-text-offset").pfValue,
                    d = function (e, t) {
                      var n = t.x - e.x,
                        r = t.y - e.y;
                      return Math.atan(r / n);
                    };
                  switch (i.edgeType) {
                    case "self":
                    case "compound":
                    case "bezier":
                    case "multibezier":
                      for (
                        var h, p = u(), f = 0, v = 0, g = 0;
                        g < p.length;
                        g++
                      ) {
                        for (
                          var y = p[o ? g : p.length - 1 - g], m = 0;
                          m < y.segments.length;
                          m++
                        ) {
                          var b = y.segments[o ? m : y.segments.length - 1 - m],
                            x =
                              g === p.length - 1 && m === y.segments.length - 1;
                          if (((f = v), (v += b.length) >= c || x)) {
                            h = { cp: y, segment: b };
                            break;
                          }
                        }
                        if (h) break;
                      }
                      var y = h.cp,
                        b = h.segment,
                        w = (c - f) / b.length,
                        E = b.t1 - b.t0,
                        P = o ? b.t0 + E * w : b.t1 - E * w;
                      (P = r.bound(0, P, 1)),
                        (t = r.qbezierPtAt(y.p0, y.p1, y.p2, P)),
                        (a = (function (e, t, n, i) {
                          var a = r.bound(0, i - 0.001, 1),
                            o = r.bound(0, i + 0.001, 1),
                            s = r.qbezierPtAt(e, t, n, a),
                            l = r.qbezierPtAt(e, t, n, o);
                          return d(s, l);
                        })(y.p0, y.p1, y.p2, P));
                      break;
                    case "straight":
                    case "segments":
                    case "haystack":
                      for (
                        var C, S, T, D, k = 0, _ = i.allpts.length, g = 0;
                        g + 3 < _ &&
                        (o
                          ? ((T = { x: i.allpts[g], y: i.allpts[g + 1] }),
                            (D = { x: i.allpts[g + 2], y: i.allpts[g + 3] }))
                          : ((T = {
                              x: i.allpts[_ - 2 - g],
                              y: i.allpts[_ - 1 - g],
                            }),
                            (D = {
                              x: i.allpts[_ - 4 - g],
                              y: i.allpts[_ - 3 - g],
                            })),
                        (C = r.dist(T, D)),
                        (S = k),
                        !((k += C) >= c));
                        g += 2
                      );
                      var M = c - S,
                        P = M / C;
                      (P = r.bound(0, P, 1)),
                        (t = r.lineAt(T, D, P)),
                        (a = d(T, D));
                  }
                  l("labelX", n, t.x),
                    l("labelY", n, t.y),
                    l("labelAutoAngle", n, a);
                }
              };
            c("source"), c("target"), this.applyLabelDimensions(e);
          }
        }),
        (o.applyLabelDimensions = function (e) {
          this.applyPrefixedLabelDimensions(e),
            e.isEdge() &&
              (this.applyPrefixedLabelDimensions(e, "source"),
              this.applyPrefixedLabelDimensions(e, "target"));
        }),
        (o.applyPrefixedLabelDimensions = function (e, t) {
          var n = e._private,
            r = this.getLabelText(e, t),
            i = this.calculateLabelDimensions(e, r);
          a.setPrefixedProperty(n.rstyle, "labelWidth", t, i.width),
            a.setPrefixedProperty(n.rscratch, "labelWidth", t, i.width),
            a.setPrefixedProperty(n.rstyle, "labelHeight", t, i.height),
            a.setPrefixedProperty(n.rscratch, "labelHeight", t, i.height);
        }),
        (o.getLabelText = function (e, t) {
          var n = e._private,
            r = t ? t + "-" : "",
            i = e.pstyle(r + "label").strValue,
            o = e.pstyle("text-transform").value,
            s = function (e, r) {
              return r
                ? (a.setPrefixedProperty(n.rscratch, e, t, r), r)
                : a.getPrefixedProperty(n.rscratch, e, t);
            };
          "none" == o ||
            ("uppercase" == o
              ? (i = i.toUpperCase())
              : "lowercase" == o && (i = i.toLowerCase()));
          var l = e.pstyle("text-wrap").value;
          if ("wrap" === l) {
            var u = s("labelKey");
            if (u && s("labelWrapKey") === u) return s("labelWrapCachedText");
            for (
              var c = i.split("\n"),
                d = e.pstyle("text-max-width").pfValue,
                h = [],
                p = 0;
              p < c.length;
              p++
            ) {
              var f = c[p];
              if (this.calculateLabelDimensions(e, f, "line=" + f).width > d) {
                for (var v = f.split(/\s+/), g = "", y = 0; y < v.length; y++) {
                  var m = v[y],
                    b = 0 === g.length ? m : g + " " + m;
                  this.calculateLabelDimensions(e, b, "testLine=" + b).width <=
                  d
                    ? (g += m + " ")
                    : (h.push(g), (g = m + " "));
                }
                g.match(/^\s+$/) || h.push(g);
              } else h.push(f);
            }
            s("labelWrapCachedLines", h),
              (i = s("labelWrapCachedText", h.join("\n"))),
              s("labelWrapKey", u);
          } else if ("ellipsis" === l) {
            for (
              var d = e.pstyle("text-max-width").pfValue, x = "", w = !1, E = 0;
              E < i.length;
              E++
            ) {
              var P = this.calculateLabelDimensions(
                e,
                x + i[E] + "Ã¢â‚¬Â¦"
              ).width;
              if (P > d) break;
              (x += i[E]), E === i.length - 1 && (w = !0);
            }
            return w || (x += "Ã¢â‚¬Â¦"), x;
          }
          return i;
        }),
        (o.calculateLabelDimensions = function (e, t, n) {
          var r = this,
            i = e._private.labelStyleKey + "$@$" + t;
          n && (i += "$@$" + n);
          var a = r.labelDimCache || (r.labelDimCache = {});
          if (a[i]) return a[i];
          var o = e.pstyle("font-style").strValue,
            s = 1 * e.pstyle("font-size").pfValue + "px",
            l = e.pstyle("font-family").strValue,
            u = e.pstyle("font-weight").strValue,
            c = this.labelCalcDiv;
          c ||
            ((c = this.labelCalcDiv = document.createElement("div")),
            document.body.appendChild(c));
          var d = c.style;
          return (
            (d.fontFamily = l),
            (d.fontStyle = o),
            (d.fontSize = s),
            (d.fontWeight = u),
            (d.position = "absolute"),
            (d.left = "-9999px"),
            (d.top = "-9999px"),
            (d.zIndex = "-1"),
            (d.visibility = "hidden"),
            (d.pointerEvents = "none"),
            (d.padding = "0"),
            (d.lineHeight = "1"),
            "wrap" === e.pstyle("text-wrap").value
              ? (d.whiteSpace = "pre")
              : (d.whiteSpace = "normal"),
            (c.textContent = t),
            (a[i] = {
              width: Math.ceil(c.clientWidth / 1),
              height: Math.ceil(c.clientHeight / 1),
            }),
            a[i]
          );
        }),
        (o.calculateLabelAngles = function (e) {
          var t = e._private,
            n = t.rscratch,
            r = e.isEdge(),
            i = e.pstyle("text-rotation"),
            a = i.strValue;
          "none" === a
            ? (n.labelAngle = n.sourceLabelAngle = n.targetLabelAngle = 0)
            : r && "autorotate" === a
            ? ((n.labelAngle = Math.atan(n.midDispY / n.midDispX)),
              (n.sourceLabelAngle = n.sourceLabelAutoAngle),
              (n.targetLabelAngle = n.targetLabelAutoAngle))
            : (n.labelAngle =
                n.sourceLabelAngle =
                n.targetLabelAngle =
                  "autorotate" === a ? 0 : i.pfValue);
        }),
        (e.exports = o);
    },
    function (e, t, n) {
      "use strict";
      var r = {};
      (r.getNodeShape = function (e) {
        var t = this,
          n = e.pstyle("shape").value;
        if (e.isParent())
          return "rectangle" === n ||
            "roundrectangle" === n ||
            "cutrectangle" === n ||
            "barrel" === n
            ? n
            : "rectangle";
        if ("polygon" === n) {
          var r = e.pstyle("shape-polygon-points").value;
          return t.nodeShapes.makePolygon(r).name;
        }
        return n;
      }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      var r = {};
      (r.registerCalculationListeners = function () {
        var e = this.cy,
          t = e.collection(),
          n = this,
          r = function (e, n) {
            var r =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
            t.merge(e);
            for (var i = 0; i < e.length; i++) {
              var a = e[i],
                o = a._private,
                s = o.rstyle;
              r && ((s.clean = !1), (o.bbCache = null));
              var l = (s.dirtyEvents = s.dirtyEvents || { length: 0 });
              l[n.type] || ((l[n.type] = !0), l.length++);
            }
          };
        n.binder(e)
          .on("position.* style.* free.* bounds.*", "node", function (e) {
            var t = e.target;
            r(t, e), r(t.connectedEdges(), e);
          })
          .on("add.*", "node", function (e) {
            var t = e.target;
            r(t, e);
          })
          .on("background.*", "node", function (e) {
            var t = e.target;
            r(t, e, !1);
          })
          .on("add.* style.*", "edge", function (e) {
            var t = e.target;
            r(t, e), r(t.parallelEdges(), e);
          })
          .on("remove.*", "edge", function (e) {
            for (
              var t = e.target, n = t.parallelEdges(), i = 0;
              i < n.length;
              i++
            ) {
              var a = n[i];
              a.removed() || r(a, e);
            }
          })
          .on("dirty.*", "node", function (e) {
            var t = e.target;
            r(t, e);
          });
        var i = function (r) {
          if (r) {
            var i = n.onUpdateEleCalcsFns;
            if (i)
              for (var a = 0; a < i.length; a++) {
                var o = i[a];
                o(r, t);
              }
            n.recalculateRenderedStyle(t, !1);
            for (var a = 0; a < t.length; a++)
              t[a]._private.rstyle.dirtyEvents = null;
            t = e.collection();
          }
        };
        n.beforeRender(i, n.beforeRenderPriorities.eleCalcs);
      }),
        (r.onUpdateEleCalcs = function (e) {
          (this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || []).push(e);
        }),
        (r.recalculateRenderedStyle = function (e, t) {
          var n = [],
            r = [];
          if (!this.destroyed) {
            void 0 === t && (t = !0);
            for (var i = 0; i < e.length; i++) {
              var a = e[i],
                o = a._private,
                s = o.rstyle;
              (t && s.clean) ||
                a.removed() ||
                ("none" !== a.pstyle("display").value &&
                  ("nodes" === o.group ? r.push(a) : n.push(a),
                  (s.clean = !0)));
            }
            for (var i = 0; i < r.length; i++) {
              var a = r[i],
                o = a._private,
                s = o.rstyle,
                l = a.position();
              this.recalculateNodeLabelProjection(a),
                (s.nodeX = l.x),
                (s.nodeY = l.y),
                (s.nodeW = a.pstyle("width").pfValue),
                (s.nodeH = a.pstyle("height").pfValue);
            }
            this.recalculateEdgeProjections(n);
            for (var i = 0; i < n.length; i++) {
              var a = n[i],
                o = a._private,
                s = o.rstyle,
                u = o.rscratch;
              this.recalculateEdgeLabelProjections(a),
                (s.srcX = u.arrowStartX),
                (s.srcY = u.arrowStartY),
                (s.tgtX = u.arrowEndX),
                (s.tgtY = u.arrowEndY),
                (s.midX = u.midX),
                (s.midY = u.midY),
                (s.labelAngle = u.labelAngle),
                (s.sourceLabelAngle = u.sourceLabelAngle),
                (s.targetLabelAngle = u.targetLabelAngle);
            }
          }
        }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      var r = n(17),
        i = {};
      (i.updateCachedGrabbedEles = function () {
        var e = this.cachedZSortedEles;
        if (e) {
          (e.drag = []), (e.nondrag = []);
          for (var t = [], n = 0; n < e.length; n++) {
            var r = e[n],
              i = r._private.rscratch;
            r.grabbed() && !r.isParent()
              ? t.push(r)
              : i.inDragLayer
              ? e.drag.push(r)
              : e.nondrag.push(r);
          }
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            e.drag.push(r);
          }
        }
      }),
        (i.invalidateCachedZSortedEles = function () {
          this.cachedZSortedEles = null;
        }),
        (i.getCachedZSortedEles = function (e) {
          if (e || !this.cachedZSortedEles) {
            var t = this.cy.mutableElements().toArray();
            t.sort(r),
              (t.interactive = t.filter(function (e) {
                return e.interactive();
              })),
              (this.cachedZSortedEles = t),
              this.updateCachedGrabbedEles();
          } else t = this.cachedZSortedEles;
          return t;
        }),
        (e.exports = i);
    },
    function (e, t, n) {
      "use strict";
      var r = {};
      (r.getCachedImage = function (e, t, n) {
        var r = this,
          i = (r.imageCache = r.imageCache || {}),
          a = i[e];
        if (a)
          return (
            a.image.complete || a.image.addEventListener("load", n), a.image
          );
        a = i[e] = i[e] || {};
        var o = (a.image = new Image());
        o.addEventListener("load", n),
          o.addEventListener("error", function () {
            o.error = !0;
          });
        return (
          "data:" === e.substring(0, "data:".length).toLowerCase() ||
            (o.crossOrigin = t),
          (o.src = e),
          o
        );
      }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(1),
        a = n(2),
        o = (n(16), {});
      (o.registerBinding = function (e, t, n, r) {
        var i = Array.prototype.slice.apply(arguments, [1]),
          a = this.binder(e);
        return a.on.apply(a, i);
      }),
        (o.binder = function (e) {
          var t = this,
            n =
              e === window ||
              e === document ||
              e === document.body ||
              r.domElement(e);
          if (null == t.supportsPassiveEvents) {
            var i = !1;
            try {
              var a = Object.defineProperty({}, "passive", {
                get: function () {
                  i = !0;
                },
              });
              window.addEventListener("test", null, a);
            } catch (e) {}
            t.supportsPassiveEvents = i;
          }
          var o = function (r, i, a) {
            var o = Array.prototype.slice.call(arguments);
            return (
              n &&
                t.supportsPassiveEvents &&
                (o[2] = { capture: null != a && a, passive: !1, once: !1 }),
              t.bindings.push({ target: e, args: o }),
              (e.addEventListener || e.on).apply(e, o),
              this
            );
          };
          return { on: o, addEventListener: o, addListener: o, bind: o };
        }),
        (o.nodeIsDraggable = function (e) {
          return e && e.isNode() && !e.locked() && e.grabbable();
        }),
        (o.nodeIsGrabbable = function (e) {
          return this.nodeIsDraggable(e) && e.interactive();
        }),
        (o.load = function () {
          var e = this,
            t = function (t, n, r, a) {
              null == t && (t = e.cy);
              for (var o = 0; o < n.length; o++) {
                var s = n[o];
                t.emit(i.extend({ originalEvent: r, type: s }, a));
              }
            },
            n = function (e) {
              return e.shiftKey || e.metaKey || e.ctrlKey;
            },
            o = function (t, n) {
              var r = !0;
              if (e.cy.hasCompoundNodes() && t && t.isEdge())
                for (var i = 0; n && i < n.length; i++) {
                  var t = n[i];
                  if (t.isNode() && t.isParent()) {
                    r = !1;
                    break;
                  }
                }
              else r = !0;
              return r;
            },
            s = function (t) {
              var n;
              if (t.addToList && e.cy.hasCompoundNodes()) {
                if (!t.addToList.hasId) {
                  t.addToList.hasId = {};
                  for (var r = 0; r < t.addToList.length; r++) {
                    var i = t.addToList[r];
                    t.addToList.hasId[i.id()] = !0;
                  }
                }
                n = t.addToList.hasId;
              }
              return n || {};
            },
            l = function (e) {
              e[0]._private.grabbed = !0;
            },
            u = function (e) {
              e[0]._private.grabbed = !1;
            },
            c = function (e) {
              e[0]._private.rscratch.inDragLayer = !0;
            },
            d = function (e) {
              e[0]._private.rscratch.inDragLayer = !1;
            },
            h = function (e) {
              e[0]._private.rscratch.isGrabTarget = !0;
            },
            p = function (e) {
              e[0]._private.rscratch.isGrabTarget = !1;
            },
            f = function (e, t) {
              var n = s(t);
              n[e.id()] || (t.addToList.push(e), (n[e.id()] = !0), l(e));
            },
            v = function (e, t) {
              if (
                e.cy().hasCompoundNodes() &&
                (null != t.inDragLayer || null != t.addToList)
              ) {
                var n = e.descendants();
                t.inDragLayer && (n.forEach(c), n.connectedEdges().forEach(c)),
                  t.addToList &&
                    n.forEach(function (e) {
                      f(e, t);
                    });
              }
            },
            g = function (t, n) {
              n = n || {};
              var r = t.cy().hasCompoundNodes();
              n.inDragLayer &&
                (t.forEach(c),
                t
                  .neighborhood()
                  .stdFilter(function (e) {
                    return !r || e.isEdge();
                  })
                  .forEach(c)),
                n.addToList &&
                  t.forEach(function (e) {
                    f(e, n);
                  }),
                v(t, n),
                b(t, { inDragLayer: n.inDragLayer }),
                e.updateCachedGrabbedEles();
            },
            y = g,
            m = function (t) {
              t &&
                ((t.hasId = {}),
                e.getCachedZSortedEles().forEach(function (e) {
                  u(e), d(e), p(e);
                }),
                e.updateCachedGrabbedEles());
            },
            b = function (e, t) {
              if (
                (null != t.inDragLayer || null != t.addToList) &&
                e.cy().hasCompoundNodes()
              ) {
                var n = e.ancestors().orphans();
                if (!n.same(e)) {
                  var r = n
                      .descendants()
                      .spawnSelf()
                      .merge(n)
                      .unmerge(e)
                      .unmerge(e.descendants()),
                    i = r.connectedEdges();
                  t.inDragLayer && (i.forEach(c), r.forEach(c)),
                    t.addToList &&
                      r.forEach(function (e) {
                        f(e, t);
                      });
                }
              }
            },
            x = "undefined" != typeof MutationObserver;
          x
            ? ((e.removeObserver = new MutationObserver(function (t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n],
                    i = r.removedNodes;
                  if (i)
                    for (var a = 0; a < i.length; a++) {
                      var o = i[a];
                      if (o === e.container) {
                        e.destroy();
                        break;
                      }
                    }
                }
              })),
              e.container.parentNode &&
                e.removeObserver.observe(e.container.parentNode, {
                  childList: !0,
                }))
            : e.registerBinding(e.container, "DOMNodeRemoved", function (t) {
                e.destroy();
              });
          var w = i.debounce(function () {
            e.cy.resize();
          }, 100);
          x &&
            ((e.styleObserver = new MutationObserver(w)),
            e.styleObserver.observe(e.container, { attributes: !0 })),
            e.registerBinding(window, "resize", w);
          var E = function () {
            e.invalidateContainerClientCoordsCache();
          };
          !(function (e, t) {
            for (; null != e; ) t(e), (e = e.parentNode);
          })(e.container, function (t) {
            e.registerBinding(t, "transitionend", E),
              e.registerBinding(t, "animationend", E),
              e.registerBinding(t, "scroll", E);
          }),
            e.registerBinding(e.container, "contextmenu", function (e) {
              e.preventDefault();
            });
          var P = function () {
              return 0 !== e.selection[4];
            },
            C = function (t) {
              for (
                var n = e.findContainerClientCoords(),
                  r = n[0],
                  i = n[1],
                  a = n[2],
                  o = n[3],
                  s = t.touches ? t.touches : [t],
                  l = !1,
                  u = 0;
                u < s.length;
                u++
              ) {
                var c = s[u];
                if (
                  r <= c.clientX &&
                  c.clientX <= r + a &&
                  i <= c.clientY &&
                  c.clientY <= i + o
                ) {
                  l = !0;
                  break;
                }
              }
              if (!l) return !1;
              for (
                var d = e.container, h = t.target, p = h.parentNode, f = !1;
                p;

              ) {
                if (p === d) {
                  f = !0;
                  break;
                }
                p = p.parentNode;
              }
              return !!f;
            };
          e.registerBinding(
            e.container,
            "mousedown",
            function (n) {
              if (C(n)) {
                n.preventDefault(),
                  (e.hoverData.capture = !0),
                  (e.hoverData.which = n.which);
                var r = e.cy,
                  i = [n.clientX, n.clientY],
                  a = e.projectIntoViewport(i[0], i[1]),
                  o = e.selection,
                  s = e.findNearestElements(a[0], a[1], !0, !1),
                  l = s[0],
                  u = e.dragData.possibleDragElements;
                (e.hoverData.mdownPos = a), (e.hoverData.mdownGPos = i);
                if (3 == n.which) {
                  e.hoverData.cxtStarted = !0;
                  var c = {
                    originalEvent: n,
                    type: "cxttapstart",
                    position: { x: a[0], y: a[1] },
                  };
                  l
                    ? (l.activate(), l.emit(c), (e.hoverData.down = l))
                    : r.emit(c),
                    (e.hoverData.downTime = new Date().getTime()),
                    (e.hoverData.cxtDragged = !1);
                } else if (1 == n.which) {
                  if ((l && l.activate(), null != l && e.nodeIsGrabbable(l))) {
                    var d = function (e) {
                        return {
                          originalEvent: n,
                          type: e,
                          position: { x: a[0], y: a[1] },
                        };
                      },
                      p = function (e) {
                        e.emit(d("grab"));
                      };
                    if ((h(l), l.selected())) {
                      u = e.dragData.possibleDragElements = [];
                      var f = r.$(function (t) {
                        return (
                          t.isNode() && t.selected() && e.nodeIsGrabbable(t)
                        );
                      });
                      g(f, { addToList: u }), l.emit(d("grabon")), f.forEach(p);
                    } else
                      (u = e.dragData.possibleDragElements = []),
                        y(l, { addToList: u }),
                        l.emit(d("grabon")).emit(d("grab"));
                    e.redrawHint("eles", !0), e.redrawHint("drag", !0);
                  }
                  (e.hoverData.down = l),
                    (e.hoverData.downs = s),
                    (e.hoverData.downTime = new Date().getTime()),
                    t(l, ["mousedown", "tapstart", "vmousedown"], n, {
                      position: { x: a[0], y: a[1] },
                    }),
                    null == l
                      ? ((o[4] = 1),
                        (e.data.bgActivePosistion = { x: a[0], y: a[1] }),
                        e.redrawHint("select", !0),
                        e.redraw())
                      : l.isEdge() && (o[4] = 1),
                    (function () {
                      (e.hoverData.tapholdCancelled = !1),
                        clearTimeout(e.hoverData.tapholdTimeout),
                        (e.hoverData.tapholdTimeout = setTimeout(function () {
                          if (!e.hoverData.tapholdCancelled) {
                            var t = e.hoverData.down;
                            t
                              ? t.emit({
                                  originalEvent: n,
                                  type: "taphold",
                                  position: { x: a[0], y: a[1] },
                                })
                              : r.emit({
                                  originalEvent: n,
                                  type: "taphold",
                                  position: { x: a[0], y: a[1] },
                                });
                          }
                        }, e.tapholdDuration));
                    })();
                }
                (o[0] = o[2] = a[0]), (o[1] = o[3] = a[1]);
              }
            },
            !1
          ),
            e.registerBinding(
              window,
              "mousemove",
              function (i) {
                if (e.hoverData.capture || C(i)) {
                  var s = !1,
                    l = e.cy,
                    u = l.zoom(),
                    c = [i.clientX, i.clientY],
                    d = e.projectIntoViewport(c[0], c[1]),
                    h = e.hoverData.mdownPos,
                    p = e.hoverData.mdownGPos,
                    f = e.selection,
                    v = null;
                  e.hoverData.draggingEles ||
                    e.hoverData.dragging ||
                    e.hoverData.selecting ||
                    (v = e.findNearestElement(d[0], d[1], !0, !1));
                  var y,
                    b = e.hoverData.last,
                    x = e.hoverData.down,
                    w = [d[0] - f[2], d[1] - f[3]],
                    E = e.dragData.possibleDragElements;
                  if (p) {
                    var P = c[0] - p[0],
                      S = P * P,
                      T = c[1] - p[1],
                      D = T * T,
                      k = S + D;
                    e.hoverData.isOverThresholdDrag = y =
                      k >= e.desktopTapThreshold2;
                  }
                  var _ = n(i);
                  y && (e.hoverData.tapholdCancelled = !0),
                    (s = !0),
                    t(v, ["mousemove", "vmousemove", "tapdrag"], i, {
                      position: { x: d[0], y: d[1] },
                    });
                  var M = function () {
                    (e.data.bgActivePosistion = void 0),
                      e.hoverData.selecting || l.emit("boxstart"),
                      (f[4] = 1),
                      (e.hoverData.selecting = !0),
                      e.redrawHint("select", !0),
                      e.redraw();
                  };
                  if (3 === e.hoverData.which) {
                    if (y) {
                      var I = {
                        originalEvent: i,
                        type: "cxtdrag",
                        position: { x: d[0], y: d[1] },
                      };
                      x ? x.emit(I) : l.emit(I),
                        (e.hoverData.cxtDragged = !0),
                        (e.hoverData.cxtOver && v === e.hoverData.cxtOver) ||
                          (e.hoverData.cxtOver &&
                            e.hoverData.cxtOver.emit({
                              originalEvent: i,
                              type: "cxtdragout",
                              position: { x: d[0], y: d[1] },
                            }),
                          (e.hoverData.cxtOver = v),
                          v &&
                            v.emit({
                              originalEvent: i,
                              type: "cxtdragover",
                              position: { x: d[0], y: d[1] },
                            }));
                    }
                  } else if (e.hoverData.dragging) {
                    if (
                      ((s = !0), l.panningEnabled() && l.userPanningEnabled())
                    ) {
                      var N;
                      if (e.hoverData.justStartedPan) {
                        var B = e.hoverData.mdownPos;
                        (N = { x: (d[0] - B[0]) * u, y: (d[1] - B[1]) * u }),
                          (e.hoverData.justStartedPan = !1);
                      } else N = { x: w[0] * u, y: w[1] * u };
                      l.panBy(N), (e.hoverData.dragged = !0);
                    }
                    d = e.projectIntoViewport(i.clientX, i.clientY);
                  } else if (1 != f[4] || (null != x && !x.isEdge())) {
                    if (
                      (x && x.isEdge() && x.active() && x.unactivate(),
                      (x && x.grabbed()) ||
                        v == b ||
                        (b &&
                          t(b, ["mouseout", "tapdragout"], i, {
                            position: { x: d[0], y: d[1] },
                          }),
                        v &&
                          t(v, ["mouseover", "tapdragover"], i, {
                            position: { x: d[0], y: d[1] },
                          }),
                        (e.hoverData.last = v)),
                      x)
                    )
                      if (y) {
                        if (l.boxSelectionEnabled() && _)
                          x && x.grabbed() && (m(E), x.emit("free")), M();
                        else if (x && x.grabbed() && e.nodeIsDraggable(x)) {
                          var z = !e.dragData.didDrag;
                          z && e.redrawHint("eles", !0),
                            (e.dragData.didDrag = !0);
                          var L = [];
                          e.hoverData.draggingEles ||
                            g(l.collection(E), { inDragLayer: !0 });
                          for (var A = 0; A < E.length; A++) {
                            var O = E[A];
                            if (e.nodeIsDraggable(O) && O.grabbed()) {
                              var R = O.position();
                              if (
                                (L.push(O),
                                r.number(w[0]) &&
                                  r.number(w[1]) &&
                                  ((R.x += w[0]), (R.y += w[1]), z))
                              ) {
                                var V = e.hoverData.dragDelta;
                                V &&
                                  r.number(V[0]) &&
                                  r.number(V[1]) &&
                                  ((R.x += V[0]), (R.y += V[1]));
                              }
                            }
                          }
                          e.hoverData.draggingEles = !0;
                          var q = l.collection(L);
                          q.dirtyCompoundBoundsCache(),
                            q.emit("position drag"),
                            e.redrawHint("drag", !0),
                            e.redraw();
                        }
                      } else
                        !(function () {
                          var t = (e.hoverData.dragDelta =
                            e.hoverData.dragDelta || []);
                          0 === t.length
                            ? (t.push(w[0]), t.push(w[1]))
                            : ((t[0] += w[0]), (t[1] += w[1]));
                        })();
                    s = !0;
                  } else if (y) {
                    if (
                      e.hoverData.dragging ||
                      !l.boxSelectionEnabled() ||
                      (!_ && l.panningEnabled() && l.userPanningEnabled())
                    ) {
                      if (
                        !e.hoverData.selecting &&
                        l.panningEnabled() &&
                        l.userPanningEnabled()
                      ) {
                        var F = o(x, e.hoverData.downs);
                        F &&
                          ((e.hoverData.dragging = !0),
                          (e.hoverData.justStartedPan = !0),
                          (f[4] = 0),
                          (e.data.bgActivePosistion = a.array2point(h)),
                          e.redrawHint("select", !0),
                          e.redraw());
                      }
                    } else M();
                    x && x.isEdge() && x.active() && x.unactivate();
                  }
                  return (
                    (f[2] = d[0]),
                    (f[3] = d[1]),
                    s
                      ? (i.stopPropagation && i.stopPropagation(),
                        i.preventDefault && i.preventDefault(),
                        !1)
                      : void 0
                  );
                }
              },
              !1
            ),
            e.registerBinding(
              window,
              "mouseup",
              function (r) {
                if (e.hoverData.capture) {
                  e.hoverData.capture = !1;
                  var i = e.cy,
                    a = e.projectIntoViewport(r.clientX, r.clientY),
                    o = e.selection,
                    s = e.findNearestElement(a[0], a[1], !0, !1),
                    l = e.dragData.possibleDragElements,
                    u = e.hoverData.down,
                    c = n(r);
                  if (
                    (e.data.bgActivePosistion &&
                      (e.redrawHint("select", !0), e.redraw()),
                    (e.hoverData.tapholdCancelled = !0),
                    (e.data.bgActivePosistion = void 0),
                    u && u.unactivate(),
                    3 === e.hoverData.which)
                  ) {
                    var d = {
                      originalEvent: r,
                      type: "cxttapend",
                      position: { x: a[0], y: a[1] },
                    };
                    if ((u ? u.emit(d) : i.emit(d), !e.hoverData.cxtDragged)) {
                      var h = {
                        originalEvent: r,
                        type: "cxttap",
                        position: { x: a[0], y: a[1] },
                      };
                      u ? u.emit(h) : i.emit(h);
                    }
                    (e.hoverData.cxtDragged = !1), (e.hoverData.which = null);
                  } else if (1 === e.hoverData.which) {
                    if (
                      (null != u ||
                        e.dragData.didDrag ||
                        e.hoverData.selecting ||
                        e.hoverData.dragged ||
                        n(r) ||
                        (i
                          .$(function (e) {
                            return e.selected();
                          })
                          .unselect(),
                        l.length > 0 && e.redrawHint("eles", !0),
                        (e.dragData.possibleDragElements = l = [])),
                      t(s, ["mouseup", "tapend", "vmouseup"], r, {
                        position: { x: a[0], y: a[1] },
                      }),
                      e.dragData.didDrag ||
                        e.hoverData.dragged ||
                        e.hoverData.selecting ||
                        e.hoverData.isOverThresholdDrag ||
                        t(u, ["click", "tap", "vclick"], r, {
                          position: { x: a[0], y: a[1] },
                        }),
                      s != u ||
                        e.dragData.didDrag ||
                        e.hoverData.selecting ||
                        (null != s &&
                          s._private.selectable &&
                          (e.hoverData.dragging ||
                            ("additive" === i.selectionType() || c
                              ? s.selected()
                                ? s.unselect()
                                : s.select()
                              : c ||
                                (i.$(":selected").unmerge(s).unselect(),
                                s.select())),
                          e.redrawHint("eles", !0))),
                      e.hoverData.selecting)
                    ) {
                      var p = i.collection(
                        e.getAllInBox(o[0], o[1], o[2], o[3])
                      );
                      e.redrawHint("select", !0),
                        p.length > 0 && e.redrawHint("eles", !0),
                        i.emit("boxend");
                      var f = function (e) {
                        return e.selectable() && !e.selected();
                      };
                      "additive" === i.selectionType()
                        ? p.emit("box").stdFilter(f).select().emit("boxselect")
                        : (c || i.$(":selected").unmerge(p).unselect(),
                          p
                            .emit("box")
                            .stdFilter(f)
                            .select()
                            .emit("boxselect")),
                        e.redraw();
                    }
                    if (
                      (e.hoverData.dragging &&
                        ((e.hoverData.dragging = !1),
                        e.redrawHint("select", !0),
                        e.redrawHint("eles", !0),
                        e.redraw()),
                      !o[4])
                    ) {
                      e.redrawHint("drag", !0), e.redrawHint("eles", !0);
                      var v = u && u.grabbed();
                      m(l), v && u.emit("free");
                    }
                  }
                  (o[4] = 0),
                    (e.hoverData.down = null),
                    (e.hoverData.cxtStarted = !1),
                    (e.hoverData.draggingEles = !1),
                    (e.hoverData.selecting = !1),
                    (e.hoverData.isOverThresholdDrag = !1),
                    (e.dragData.didDrag = !1),
                    (e.hoverData.dragged = !1),
                    (e.hoverData.dragDelta = []),
                    (e.hoverData.mdownPos = null),
                    (e.hoverData.mdownGPos = null);
                }
              },
              !1
            );
          var S = function (t) {
            if (!e.scrollingPage) {
              var n = e.cy,
                r = e.projectIntoViewport(t.clientX, t.clientY),
                i = [r[0] * n.zoom() + n.pan().x, r[1] * n.zoom() + n.pan().y];
              if (
                e.hoverData.draggingEles ||
                e.hoverData.dragging ||
                e.hoverData.cxtStarted ||
                P()
              )
                return void t.preventDefault();
              if (
                n.panningEnabled() &&
                n.userPanningEnabled() &&
                n.zoomingEnabled() &&
                n.userZoomingEnabled()
              ) {
                t.preventDefault(),
                  (e.data.wheelZooming = !0),
                  clearTimeout(e.data.wheelTimeout),
                  (e.data.wheelTimeout = setTimeout(function () {
                    (e.data.wheelZooming = !1),
                      e.redrawHint("eles", !0),
                      e.redraw();
                  }, 150));
                var a;
                (a =
                  null != t.deltaY
                    ? t.deltaY / -250
                    : null != t.wheelDeltaY
                    ? t.wheelDeltaY / 1e3
                    : t.wheelDelta / 1e3),
                  (a *= e.wheelSensitivity);
                1 === t.deltaMode && (a *= 33),
                  n.zoom({
                    level: n.zoom() * Math.pow(10, a),
                    renderedPosition: { x: i[0], y: i[1] },
                  });
              }
            }
          };
          e.registerBinding(e.container, "wheel", S, !0),
            e.registerBinding(
              window,
              "scroll",
              function (t) {
                (e.scrollingPage = !0),
                  clearTimeout(e.scrollingPageTimeout),
                  (e.scrollingPageTimeout = setTimeout(function () {
                    e.scrollingPage = !1;
                  }, 250));
              },
              !0
            ),
            e.registerBinding(
              e.container,
              "mouseout",
              function (t) {
                var n = e.projectIntoViewport(t.clientX, t.clientY);
                e.cy.emit({
                  originalEvent: t,
                  type: "mouseout",
                  position: { x: n[0], y: n[1] },
                });
              },
              !1
            ),
            e.registerBinding(
              e.container,
              "mouseover",
              function (t) {
                var n = e.projectIntoViewport(t.clientX, t.clientY);
                e.cy.emit({
                  originalEvent: t,
                  type: "mouseover",
                  position: { x: n[0], y: n[1] },
                });
              },
              !1
            );
          var T,
            D,
            k,
            _,
            M,
            I,
            N,
            B,
            z,
            L,
            A,
            O,
            R,
            V,
            q = function (e, t, n, r) {
              return Math.sqrt((n - e) * (n - e) + (r - t) * (r - t));
            },
            F = function (e, t, n, r) {
              return (n - e) * (n - e) + (r - t) * (r - t);
            };
          e.registerBinding(
            e.container,
            "touchstart",
            (V = function (n) {
              if (C(n)) {
                (e.touchData.capture = !0), (e.data.bgActivePosistion = void 0);
                var r = e.cy,
                  i = e.touchData.now,
                  a = e.touchData.earlier;
                if (n.touches[0]) {
                  var o = e.projectIntoViewport(
                    n.touches[0].clientX,
                    n.touches[0].clientY
                  );
                  (i[0] = o[0]), (i[1] = o[1]);
                }
                if (n.touches[1]) {
                  var o = e.projectIntoViewport(
                    n.touches[1].clientX,
                    n.touches[1].clientY
                  );
                  (i[2] = o[0]), (i[3] = o[1]);
                }
                if (n.touches[2]) {
                  var o = e.projectIntoViewport(
                    n.touches[2].clientX,
                    n.touches[2].clientY
                  );
                  (i[4] = o[0]), (i[5] = o[1]);
                }
                if (n.touches[1]) {
                  m(e.dragData.touchDragEles);
                  var s = e.findContainerClientCoords();
                  (z = s[0]),
                    (L = s[1]),
                    (A = s[2]),
                    (O = s[3]),
                    (T = n.touches[0].clientX - z),
                    (D = n.touches[0].clientY - L),
                    (k = n.touches[1].clientX - z),
                    (_ = n.touches[1].clientY - L),
                    (R =
                      0 <= T &&
                      T <= A &&
                      0 <= k &&
                      k <= A &&
                      0 <= D &&
                      D <= O &&
                      0 <= _ &&
                      _ <= O);
                  var l = r.pan(),
                    u = r.zoom();
                  (M = q(T, D, k, _)),
                    (I = F(T, D, k, _)),
                    (N = [(T + k) / 2, (D + _) / 2]),
                    (B = [(N[0] - l.x) / u, (N[1] - l.y) / u]);
                  if (I < 4e4 && !n.touches[2]) {
                    var c = e.findNearestElement(i[0], i[1], !0, !0),
                      d = e.findNearestElement(i[2], i[3], !0, !0);
                    return (
                      c && c.isNode()
                        ? (c.activate().emit({
                            originalEvent: n,
                            type: "cxttapstart",
                            position: { x: i[0], y: i[1] },
                          }),
                          (e.touchData.start = c))
                        : d && d.isNode()
                        ? (d.activate().emit({
                            originalEvent: n,
                            type: "cxttapstart",
                            position: { x: i[0], y: i[1] },
                          }),
                          (e.touchData.start = d))
                        : r.emit({
                            originalEvent: n,
                            type: "cxttapstart",
                            position: { x: i[0], y: i[1] },
                          }),
                      e.touchData.start &&
                        (e.touchData.start._private.grabbed = !1),
                      (e.touchData.cxt = !0),
                      (e.touchData.cxtDragged = !1),
                      (e.data.bgActivePosistion = void 0),
                      void e.redraw()
                    );
                  }
                }
                if (n.touches[2]);
                else if (n.touches[1]);
                else if (n.touches[0]) {
                  var p = e.findNearestElements(i[0], i[1], !0, !0),
                    f = p[0];
                  if (
                    null != f &&
                    (f.activate(),
                    (e.touchData.start = f),
                    (e.touchData.starts = p),
                    e.nodeIsGrabbable(f))
                  ) {
                    var v = (e.dragData.touchDragEles = []),
                      b = null;
                    e.redrawHint("eles", !0),
                      e.redrawHint("drag", !0),
                      f.selected()
                        ? ((b = r.$(function (t) {
                            return t.selected() && e.nodeIsGrabbable(t);
                          })),
                          g(b, { addToList: v }))
                        : y(f, { addToList: v }),
                      h(f);
                    var x = function (e) {
                      return {
                        originalEvent: n,
                        type: e,
                        position: { x: i[0], y: i[1] },
                      };
                    };
                    f.emit(x("grabon")),
                      b
                        ? b.forEach(function (e) {
                            e.emit(x("grab"));
                          })
                        : f.emit(x("grab"));
                  }
                  t(f, ["touchstart", "tapstart", "vmousedown"], n, {
                    position: { x: i[0], y: i[1] },
                  }),
                    null == f &&
                      ((e.data.bgActivePosistion = { x: o[0], y: o[1] }),
                      e.redrawHint("select", !0),
                      e.redraw()),
                    (e.touchData.singleTouchMoved = !1),
                    (e.touchData.singleTouchStartTime = +new Date()),
                    clearTimeout(e.touchData.tapholdTimeout),
                    (e.touchData.tapholdTimeout = setTimeout(function () {
                      !1 !== e.touchData.singleTouchMoved ||
                        e.pinching ||
                        e.touchData.selecting ||
                        (t(e.touchData.start, ["taphold"], n, {
                          position: { x: i[0], y: i[1] },
                        }),
                        e.touchData.start || r.$(":selected").unselect());
                    }, e.tapholdDuration));
                }
                if (n.touches.length >= 1) {
                  for (
                    var w = (e.touchData.startPosition = []), E = 0;
                    E < i.length;
                    E++
                  )
                    w[E] = a[E] = i[E];
                  var P = n.touches[0];
                  e.touchData.startGPosition = [P.clientX, P.clientY];
                }
              }
            }),
            !1
          );
          var j;
          e.registerBinding(
            window,
            "touchmove",
            (j = function (n) {
              var i = e.touchData.capture;
              if (i || C(n)) {
                var s = e.selection,
                  l = e.cy,
                  u = e.touchData.now,
                  c = e.touchData.earlier,
                  d = l.zoom();
                if (n.touches[0]) {
                  var h = e.projectIntoViewport(
                    n.touches[0].clientX,
                    n.touches[0].clientY
                  );
                  (u[0] = h[0]), (u[1] = h[1]);
                }
                if (n.touches[1]) {
                  var h = e.projectIntoViewport(
                    n.touches[1].clientX,
                    n.touches[1].clientY
                  );
                  (u[2] = h[0]), (u[3] = h[1]);
                }
                if (n.touches[2]) {
                  var h = e.projectIntoViewport(
                    n.touches[2].clientX,
                    n.touches[2].clientY
                  );
                  (u[4] = h[0]), (u[5] = h[1]);
                }
                var p,
                  f = e.touchData.startGPosition;
                if (i && n.touches[0] && f) {
                  for (var v = [], y = 0; y < u.length; y++) v[y] = u[y] - c[y];
                  var b = n.touches[0].clientX - f[0],
                    x = b * b,
                    w = n.touches[0].clientY - f[1];
                  p = x + w * w >= e.touchTapThreshold2;
                }
                if (i && e.touchData.cxt) {
                  n.preventDefault();
                  var E = n.touches[0].clientX - z,
                    P = n.touches[0].clientY - L,
                    S = n.touches[1].clientX - z,
                    N = n.touches[1].clientY - L,
                    A = F(E, P, S, N),
                    O = A / I;
                  if (O >= 2.25 || A >= 22500) {
                    (e.touchData.cxt = !1),
                      (e.data.bgActivePosistion = void 0),
                      e.redrawHint("select", !0);
                    var V = {
                      originalEvent: n,
                      type: "cxttapend",
                      position: { x: u[0], y: u[1] },
                    };
                    e.touchData.start
                      ? (e.touchData.start.unactivate().emit(V),
                        (e.touchData.start = null))
                      : l.emit(V);
                  }
                }
                if (i && e.touchData.cxt) {
                  var V = {
                    originalEvent: n,
                    type: "cxtdrag",
                    position: { x: u[0], y: u[1] },
                  };
                  (e.data.bgActivePosistion = void 0),
                    e.redrawHint("select", !0),
                    e.touchData.start ? e.touchData.start.emit(V) : l.emit(V),
                    e.touchData.start &&
                      (e.touchData.start._private.grabbed = !1),
                    (e.touchData.cxtDragged = !0);
                  var j = e.findNearestElement(u[0], u[1], !0, !0);
                  (e.touchData.cxtOver && j === e.touchData.cxtOver) ||
                    (e.touchData.cxtOver &&
                      e.touchData.cxtOver.emit({
                        originalEvent: n,
                        type: "cxtdragout",
                        position: { x: u[0], y: u[1] },
                      }),
                    (e.touchData.cxtOver = j),
                    j &&
                      j.emit({
                        originalEvent: n,
                        type: "cxtdragover",
                        position: { x: u[0], y: u[1] },
                      }));
                } else if (i && n.touches[2] && l.boxSelectionEnabled())
                  n.preventDefault(),
                    (e.data.bgActivePosistion = void 0),
                    (this.lastThreeTouch = +new Date()),
                    e.touchData.selecting || l.emit("boxstart"),
                    (e.touchData.selecting = !0),
                    e.redrawHint("select", !0),
                    s && 0 !== s.length && void 0 !== s[0]
                      ? ((s[2] = (u[0] + u[2] + u[4]) / 3),
                        (s[3] = (u[1] + u[3] + u[5]) / 3))
                      : ((s[0] = (u[0] + u[2] + u[4]) / 3),
                        (s[1] = (u[1] + u[3] + u[5]) / 3),
                        (s[2] = (u[0] + u[2] + u[4]) / 3 + 1),
                        (s[3] = (u[1] + u[3] + u[5]) / 3 + 1)),
                    (s[4] = 1),
                    (e.touchData.selecting = !0),
                    e.redraw();
                else if (
                  i &&
                  n.touches[1] &&
                  l.zoomingEnabled() &&
                  l.panningEnabled() &&
                  l.userZoomingEnabled() &&
                  l.userPanningEnabled()
                ) {
                  n.preventDefault(),
                    (e.data.bgActivePosistion = void 0),
                    e.redrawHint("select", !0);
                  var X = e.dragData.touchDragEles;
                  if (X) {
                    e.redrawHint("drag", !0);
                    for (var Y = 0; Y < X.length; Y++) {
                      var W = X[Y]._private;
                      (W.grabbed = !1), (W.rscratch.inDragLayer = !1);
                    }
                  }
                  var E = n.touches[0].clientX - z,
                    P = n.touches[0].clientY - L,
                    S = n.touches[1].clientX - z,
                    N = n.touches[1].clientY - L,
                    H = q(E, P, S, N),
                    Z = H / M;
                  if (R) {
                    var $ = E - T,
                      U = P - D,
                      G = S - k,
                      Q = N - _,
                      K = ($ + G) / 2,
                      J = (U + Q) / 2,
                      ee = l.zoom(),
                      te = ee * Z,
                      ne = l.pan(),
                      re = B[0] * ee + ne.x,
                      ie = B[1] * ee + ne.y,
                      ae = {
                        x: (-te / ee) * (re - ne.x - K) + re,
                        y: (-te / ee) * (ie - ne.y - J) + ie,
                      };
                    if (e.touchData.start && e.touchData.start.active()) {
                      var X = e.dragData.touchDragEles;
                      m(X),
                        e.redrawHint("drag", !0),
                        e.redrawHint("eles", !0),
                        e.touchData.start.unactivate().emit("free");
                    }
                    l.viewport({ zoom: te, pan: ae, cancelOnFailedZoom: !0 }),
                      (M = H),
                      (T = E),
                      (D = P),
                      (k = S),
                      (_ = N),
                      (e.pinching = !0);
                  }
                  if (n.touches[0]) {
                    var h = e.projectIntoViewport(
                      n.touches[0].clientX,
                      n.touches[0].clientY
                    );
                    (u[0] = h[0]), (u[1] = h[1]);
                  }
                  if (n.touches[1]) {
                    var h = e.projectIntoViewport(
                      n.touches[1].clientX,
                      n.touches[1].clientY
                    );
                    (u[2] = h[0]), (u[3] = h[1]);
                  }
                  if (n.touches[2]) {
                    var h = e.projectIntoViewport(
                      n.touches[2].clientX,
                      n.touches[2].clientY
                    );
                    (u[4] = h[0]), (u[5] = h[1]);
                  }
                } else if (n.touches[0]) {
                  var j,
                    oe = e.touchData.start,
                    se = e.touchData.last;
                  if (
                    (e.hoverData.draggingEles ||
                      e.swipePanning ||
                      (j = e.findNearestElement(u[0], u[1], !0, !0)),
                    i && null != oe && n.preventDefault(),
                    i && null != oe && e.nodeIsDraggable(oe))
                  )
                    if (p) {
                      var X = e.dragData.touchDragEles,
                        le = !e.dragData.didDrag;
                      le && g(l.collection(X), { inDragLayer: !0 });
                      for (var ue = 0; ue < X.length; ue++) {
                        var ce = X[ue];
                        if (e.nodeIsDraggable(ce) && ce.grabbed()) {
                          e.dragData.didDrag = !0;
                          var de = ce.position();
                          if (
                            (r.number(v[0]) &&
                              r.number(v[1]) &&
                              ((de.x += v[0]), (de.y += v[1])),
                            le)
                          ) {
                            e.redrawHint("eles", !0);
                            var he = e.touchData.dragDelta;
                            he &&
                              r.number(he[0]) &&
                              r.number(he[1]) &&
                              ((de.x += he[0]), (de.y += he[1]));
                          }
                        }
                      }
                      var pe = l.collection(X);
                      pe.dirtyCompoundBoundsCache(),
                        pe.emit("position drag"),
                        (e.hoverData.draggingEles = !0),
                        e.redrawHint("drag", !0),
                        e.touchData.startPosition[0] == c[0] &&
                          e.touchData.startPosition[1] == c[1] &&
                          e.redrawHint("eles", !0),
                        e.redraw();
                    } else {
                      var he = (e.touchData.dragDelta =
                        e.touchData.dragDelta || []);
                      0 === he.length
                        ? (he.push(v[0]), he.push(v[1]))
                        : ((he[0] += v[0]), (he[1] += v[1]));
                    }
                  if (
                    (t(oe || j, ["touchmove", "tapdrag", "vmousemove"], n, {
                      position: { x: u[0], y: u[1] },
                    }),
                    (oe && oe.grabbed()) ||
                      j == se ||
                      (se &&
                        se.emit({
                          originalEvent: n,
                          type: "tapdragout",
                          position: { x: u[0], y: u[1] },
                        }),
                      j &&
                        j.emit({
                          originalEvent: n,
                          type: "tapdragover",
                          position: { x: u[0], y: u[1] },
                        })),
                    (e.touchData.last = j),
                    i)
                  )
                    for (var Y = 0; Y < u.length; Y++)
                      u[Y] &&
                        e.touchData.startPosition[Y] &&
                        p &&
                        (e.touchData.singleTouchMoved = !0);
                  if (
                    i &&
                    (null == oe || oe.isEdge()) &&
                    l.panningEnabled() &&
                    l.userPanningEnabled()
                  ) {
                    var fe = o(oe, e.touchData.starts);
                    fe &&
                      (n.preventDefault(),
                      e.swipePanning
                        ? l.panBy({ x: v[0] * d, y: v[1] * d })
                        : p &&
                          ((e.swipePanning = !0),
                          l.panBy({ x: b * d, y: w * d }),
                          oe &&
                            (oe.unactivate(),
                            e.data.bgActivePosistion ||
                              (e.data.bgActivePosistion = a.array2point(
                                e.touchData.startPosition
                              )),
                            e.redrawHint("select", !0),
                            (e.touchData.start = null))));
                    var h = e.projectIntoViewport(
                      n.touches[0].clientX,
                      n.touches[0].clientY
                    );
                    (u[0] = h[0]), (u[1] = h[1]);
                  }
                }
                for (var y = 0; y < u.length; y++) c[y] = u[y];
              }
            }),
            !1
          );
          var X;
          e.registerBinding(
            window,
            "touchcancel",
            (X = function (t) {
              var n = e.touchData.start;
              (e.touchData.capture = !1), n && n.unactivate();
            })
          );
          var Y;
          if (
            (e.registerBinding(
              window,
              "touchend",
              (Y = function (n) {
                var r = e.touchData.start;
                if (e.touchData.capture) {
                  (e.touchData.capture = !1), n.preventDefault();
                  var i = e.selection;
                  (e.swipePanning = !1), (e.hoverData.draggingEles = !1);
                  var a = e.cy,
                    o = a.zoom(),
                    s = e.touchData.now,
                    l = e.touchData.earlier;
                  if (n.touches[0]) {
                    var u = e.projectIntoViewport(
                      n.touches[0].clientX,
                      n.touches[0].clientY
                    );
                    (s[0] = u[0]), (s[1] = u[1]);
                  }
                  if (n.touches[1]) {
                    var u = e.projectIntoViewport(
                      n.touches[1].clientX,
                      n.touches[1].clientY
                    );
                    (s[2] = u[0]), (s[3] = u[1]);
                  }
                  if (n.touches[2]) {
                    var u = e.projectIntoViewport(
                      n.touches[2].clientX,
                      n.touches[2].clientY
                    );
                    (s[4] = u[0]), (s[5] = u[1]);
                  }
                  r && r.unactivate();
                  var c;
                  if (e.touchData.cxt) {
                    if (
                      ((c = {
                        originalEvent: n,
                        type: "cxttapend",
                        position: { x: s[0], y: s[1] },
                      }),
                      r ? r.emit(c) : a.emit(c),
                      !e.touchData.cxtDragged)
                    ) {
                      var d = {
                        originalEvent: n,
                        type: "cxttap",
                        position: { x: s[0], y: s[1] },
                      };
                      r ? r.emit(d) : a.emit(d);
                    }
                    return (
                      e.touchData.start &&
                        (e.touchData.start._private.grabbed = !1),
                      (e.touchData.cxt = !1),
                      (e.touchData.start = null),
                      void e.redraw()
                    );
                  }
                  if (
                    !n.touches[2] &&
                    a.boxSelectionEnabled() &&
                    e.touchData.selecting
                  ) {
                    e.touchData.selecting = !1;
                    var h = a.collection(e.getAllInBox(i[0], i[1], i[2], i[3]));
                    (i[0] = void 0),
                      (i[1] = void 0),
                      (i[2] = void 0),
                      (i[3] = void 0),
                      (i[4] = 0),
                      e.redrawHint("select", !0),
                      a.emit("boxend");
                    var p = function (e) {
                      return e.selectable() && !e.selected();
                    };
                    h.emit("box").stdFilter(p).select().emit("boxselect"),
                      h.nonempty() && e.redrawHint("eles", !0),
                      e.redraw();
                  }
                  if ((null != r && r.unactivate(), n.touches[2]))
                    (e.data.bgActivePosistion = void 0),
                      e.redrawHint("select", !0);
                  else if (n.touches[1]);
                  else if (n.touches[0]);
                  else if (!n.touches[0]) {
                    (e.data.bgActivePosistion = void 0),
                      e.redrawHint("select", !0);
                    var f = e.dragData.touchDragEles;
                    if (null != r) {
                      var v = r._private.grabbed;
                      m(f),
                        e.redrawHint("drag", !0),
                        e.redrawHint("eles", !0),
                        v && r.emit("free"),
                        t(
                          r,
                          ["touchend", "tapend", "vmouseup", "tapdragout"],
                          n,
                          { position: { x: s[0], y: s[1] } }
                        ),
                        r.unactivate(),
                        (e.touchData.start = null);
                    } else {
                      var g = e.findNearestElement(s[0], s[1], !0, !0);
                      t(
                        g,
                        ["touchend", "tapend", "vmouseup", "tapdragout"],
                        n,
                        { position: { x: s[0], y: s[1] } }
                      );
                    }
                    var y = e.touchData.startPosition[0] - s[0],
                      b = y * y,
                      x = e.touchData.startPosition[1] - s[1],
                      w = x * x,
                      E = b + w,
                      P = E * o * o;
                    null != r &&
                      !e.dragData.didDrag &&
                      r._private.selectable &&
                      P < e.touchTapThreshold2 &&
                      !e.pinching &&
                      ("single" === a.selectionType()
                        ? (a.$(":selected").unmerge(r).unselect(), r.select())
                        : r.selected()
                        ? r.unselect()
                        : r.select(),
                      e.redrawHint("eles", !0)),
                      e.touchData.singleTouchMoved ||
                        t(r, ["tap", "vclick"], n, {
                          position: { x: s[0], y: s[1] },
                        }),
                      (e.touchData.singleTouchMoved = !0);
                  }
                  for (var C = 0; C < s.length; C++) l[C] = s[C];
                  (e.dragData.didDrag = !1),
                    0 === n.touches.length &&
                      ((e.touchData.dragDelta = []),
                      (e.touchData.startPosition = null),
                      (e.touchData.startGPosition = null)),
                    n.touches.length < 2 &&
                      ((e.pinching = !1), e.redrawHint("eles", !0), e.redraw());
                }
              }),
              !1
            ),
            "undefined" == typeof TouchEvent)
          ) {
            var W = [],
              H = function (e) {
                return {
                  clientX: e.clientX,
                  clientY: e.clientY,
                  force: 1,
                  identifier: e.pointerId,
                  pageX: e.pageX,
                  pageY: e.pageY,
                  radiusX: e.width / 2,
                  radiusY: e.height / 2,
                  screenX: e.screenX,
                  screenY: e.screenY,
                  target: e.target,
                };
              },
              Z = function (e) {
                return { event: e, touch: H(e) };
              },
              $ = function (e) {
                W.push(Z(e));
              },
              U = function (e) {
                for (var t = 0; t < W.length; t++) {
                  if (W[t].event.pointerId === e.pointerId)
                    return void W.splice(t, 1);
                }
              },
              G = function (e) {
                var t = W.filter(function (t) {
                  return t.event.pointerId === e.pointerId;
                })[0];
                (t.event = e), (t.touch = H(e));
              },
              Q = function (e) {
                e.touches = W.map(function (e) {
                  return e.touch;
                });
              },
              K = function (e) {
                return "mouse" === e.pointerType || 4 === e.pointerType;
              };
            e.registerBinding(e.container, "pointerdown", function (e) {
              K(e) || (e.preventDefault(), $(e), Q(e), V(e));
            }),
              e.registerBinding(e.container, "pointerup", function (e) {
                K(e) || (U(e), Q(e), Y(e));
              }),
              e.registerBinding(e.container, "pointercancel", function (e) {
                K(e) || (U(e), Q(e), X(e));
              }),
              e.registerBinding(e.container, "pointermove", function (e) {
                K(e) || (e.preventDefault(), G(e), Q(e), j(e));
              });
          }
        }),
        (e.exports = o);
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = {};
      (i.generatePolygon = function (e, t) {
        return (this.nodeShapes[e] = {
          renderer: this,
          name: e,
          points: t,
          draw: function (e, t, n, r, i) {
            this.renderer.nodeShapeImpl("polygon", e, t, n, r, i, this.points);
          },
          intersectLine: function (e, t, n, i, a, o, s) {
            return r.polygonIntersectLine(
              a,
              o,
              this.points,
              e,
              t,
              n / 2,
              i / 2,
              s
            );
          },
          checkPoint: function (e, t, n, i, a, o, s) {
            return r.pointInsidePolygon(
              e,
              t,
              this.points,
              o,
              s,
              i,
              a,
              [0, -1],
              n
            );
          },
        });
      }),
        (i.generateEllipse = function () {
          return (this.nodeShapes.ellipse = {
            renderer: this,
            name: "ellipse",
            draw: function (e, t, n, r, i) {
              this.renderer.nodeShapeImpl(this.name, e, t, n, r, i);
            },
            intersectLine: function (e, t, n, i, a, o, s) {
              return r.intersectLineEllipse(a, o, e, t, n / 2 + s, i / 2 + s);
            },
            checkPoint: function (e, t, n, i, a, o, s) {
              return r.checkInEllipse(e, t, i, a, o, s, n);
            },
          });
        }),
        (i.generateRoundRectangle = function () {
          return (this.nodeShapes.roundrectangle = {
            renderer: this,
            name: "roundrectangle",
            points: r.generateUnitNgonPointsFitToSquare(4, 0),
            draw: function (e, t, n, r, i) {
              this.renderer.nodeShapeImpl(this.name, e, t, n, r, i);
            },
            intersectLine: function (e, t, n, i, a, o, s) {
              return r.roundRectangleIntersectLine(a, o, e, t, n, i, s);
            },
            checkPoint: function (e, t, n, i, a, o, s) {
              var l = r.getRoundRectangleRadius(i, a),
                u = 2 * l;
              return (
                !!r.pointInsidePolygon(
                  e,
                  t,
                  this.points,
                  o,
                  s,
                  i,
                  a - u,
                  [0, -1],
                  n
                ) ||
                !!r.pointInsidePolygon(
                  e,
                  t,
                  this.points,
                  o,
                  s,
                  i - u,
                  a,
                  [0, -1],
                  n
                ) ||
                !!r.checkInEllipse(
                  e,
                  t,
                  u,
                  u,
                  o - i / 2 + l,
                  s - a / 2 + l,
                  n
                ) ||
                !!r.checkInEllipse(
                  e,
                  t,
                  u,
                  u,
                  o + i / 2 - l,
                  s - a / 2 + l,
                  n
                ) ||
                !!r.checkInEllipse(
                  e,
                  t,
                  u,
                  u,
                  o + i / 2 - l,
                  s + a / 2 - l,
                  n
                ) ||
                !!r.checkInEllipse(e, t, u, u, o - i / 2 + l, s + a / 2 - l, n)
              );
            },
          });
        }),
        (i.generateCutRectangle = function () {
          return (this.nodeShapes.cutrectangle = {
            renderer: this,
            name: "cutrectangle",
            cornerLength: r.getCutRectangleCornerLength(),
            points: r.generateUnitNgonPointsFitToSquare(4, 0),
            draw: function (e, t, n, r, i) {
              this.renderer.nodeShapeImpl(this.name, e, t, n, r, i);
            },
            generateCutTrianglePts: function (e, t, n, r) {
              var i = this.cornerLength,
                a = t / 2,
                o = e / 2,
                s = n - o,
                l = n + o,
                u = r - a,
                c = r + a;
              return {
                topLeft: [s, u + i, s + i, u, s + i, u + i],
                topRight: [l - i, u, l, u + i, l - i, u + i],
                bottomRight: [l, c - i, l - i, c, l - i, c - i],
                bottomLeft: [s + i, c, s, c - i, s + i, c - i],
              };
            },
            intersectLine: function (e, t, n, i, a, o, s) {
              var l = this.generateCutTrianglePts(n + 2 * s, i + 2 * s, e, t),
                u = [].concat.apply(
                  [],
                  [
                    l.topLeft.splice(0, 4),
                    l.topRight.splice(0, 4),
                    l.bottomRight.splice(0, 4),
                    l.bottomLeft.splice(0, 4),
                  ]
                );
              return r.polygonIntersectLine(a, o, u, e, t);
            },
            checkPoint: function (e, t, n, i, a, o, s) {
              if (
                r.pointInsidePolygon(
                  e,
                  t,
                  this.points,
                  o,
                  s,
                  i,
                  a - 2 * this.cornerLength,
                  [0, -1],
                  n
                )
              )
                return !0;
              if (
                r.pointInsidePolygon(
                  e,
                  t,
                  this.points,
                  o,
                  s,
                  i - 2 * this.cornerLength,
                  a,
                  [0, -1],
                  n
                )
              )
                return !0;
              var l = this.generateCutTrianglePts(i, a, o, s);
              return (
                r.pointInsidePolygonPoints(e, t, l.topLeft) ||
                r.pointInsidePolygonPoints(e, t, l.topRight) ||
                r.pointInsidePolygonPoints(e, t, l.bottomRight) ||
                r.pointInsidePolygonPoints(e, t, l.bottomLeft)
              );
            },
          });
        }),
        (i.generateBarrel = function () {
          return (this.nodeShapes.barrel = {
            renderer: this,
            name: "barrel",
            points: r.generateUnitNgonPointsFitToSquare(4, 0),
            draw: function (e, t, n, r, i) {
              this.renderer.nodeShapeImpl(this.name, e, t, n, r, i);
            },
            intersectLine: function (e, t, n, i, a, o, s) {
              var l = this.generateBarrelBezierPts(n + 2 * s, i + 2 * s, e, t),
                u = [].concat(
                  l.topLeft,
                  l.topRight,
                  l.bottomRight,
                  l.bottomLeft
                );
              return r.polygonIntersectLine(a, o, u, e, t);
            },
            generateBarrelBezierPts: function (e, t, n, i) {
              var a = t / 2,
                o = e / 2,
                s = n - o,
                l = n + o,
                u = i - a,
                c = i + a,
                d = r.getBarrelCurveConstants(e, t),
                h = d.heightOffset,
                p = d.widthOffset,
                f = d.ctrlPtOffsetPct * e,
                v = {
                  topLeft: [s, u + h, s + f, u, s + p, u],
                  topRight: [l - p, u, l - f, u, l, u + h],
                  bottomRight: [l, c - h, l - f, c, l - p, c],
                  bottomLeft: [s + p, c, s + f, c, s, c - h],
                };
              return (
                (v.topLeft.isTop = !0),
                (v.topRight.isTop = !0),
                (v.bottomLeft.isBottom = !0),
                (v.bottomRight.isBottom = !0),
                v
              );
            },
            checkPoint: function (e, t, n, i, a, o, s) {
              var l = r.getBarrelCurveConstants(i, a),
                u = l.heightOffset,
                c = l.widthOffset;
              if (
                r.pointInsidePolygon(
                  e,
                  t,
                  this.points,
                  o,
                  s,
                  i,
                  a - 2 * u,
                  [0, -1],
                  n
                )
              )
                return !0;
              if (
                r.pointInsidePolygon(
                  e,
                  t,
                  this.points,
                  o,
                  s,
                  i - 2 * c,
                  a,
                  [0, -1],
                  n
                )
              )
                return !0;
              for (
                var d = this.generateBarrelBezierPts(i, a, o, s),
                  h = Object.keys(d),
                  p = 0;
                p < h.length;
                p++
              ) {
                var f = h[p],
                  v = d[f],
                  g = (function (e, t, n) {
                    var i = n[4],
                      a = n[2],
                      o = n[0],
                      s = n[5],
                      l = n[1],
                      u = Math.min(i, o),
                      c = Math.max(i, o),
                      d = Math.min(s, l),
                      h = Math.max(s, l);
                    if (u <= e && e <= c && d <= t && t <= h) {
                      var p = r.bezierPtsToQuadCoeff(i, a, o),
                        f = r.solveQuadratic(p[0], p[1], p[2], e),
                        v = f.filter(function (e) {
                          return 0 <= e && e <= 1;
                        });
                      if (v.length > 0) return v[0];
                    }
                    return null;
                  })(e, t, v);
                if (null != g) {
                  var y = v[5],
                    m = v[3],
                    b = v[1],
                    x = r.qbezierAt(y, m, b, g);
                  if (v.isTop && x <= t) return !0;
                  if (v.isBottom && t <= x) return !0;
                }
              }
              return !1;
            },
          });
        }),
        (i.generateBottomRoundrectangle = function () {
          return (this.nodeShapes.bottomroundrectangle = {
            renderer: this,
            name: "bottomroundrectangle",
            points: r.generateUnitNgonPointsFitToSquare(4, 0),
            draw: function (e, t, n, r, i) {
              this.renderer.nodeShapeImpl(this.name, e, t, n, r, i);
            },
            intersectLine: function (e, t, n, i, a, o, s) {
              var l = e - (n / 2 + s),
                u = t - (i / 2 + s),
                c = u,
                d = e + (n / 2 + s),
                h = r.finiteLinesIntersect(a, o, e, t, l, u, d, c, !1);
              return h.length > 0
                ? h
                : r.roundRectangleIntersectLine(a, o, e, t, n, i, s);
            },
            checkPoint: function (e, t, n, i, a, o, s) {
              var l = r.getRoundRectangleRadius(i, a),
                u = 2 * l;
              if (
                r.pointInsidePolygon(
                  e,
                  t,
                  this.points,
                  o,
                  s,
                  i,
                  a - u,
                  [0, -1],
                  n
                )
              )
                return !0;
              if (
                r.pointInsidePolygon(
                  e,
                  t,
                  this.points,
                  o,
                  s,
                  i - u,
                  a,
                  [0, -1],
                  n
                )
              )
                return !0;
              var c = i / 2 + 2 * n,
                d = a / 2 + 2 * n,
                h = [o - c, s - d, o - c, s, o + c, s, o + c, s - d];
              return (
                !!r.pointInsidePolygonPoints(e, t, h) ||
                !!r.checkInEllipse(
                  e,
                  t,
                  u,
                  u,
                  o + i / 2 - l,
                  s + a / 2 - l,
                  n
                ) ||
                !!r.checkInEllipse(e, t, u, u, o - i / 2 + l, s + a / 2 - l, n)
              );
            },
          });
        }),
        (i.registerNodeShapes = function () {
          var e = (this.nodeShapes = {}),
            t = this;
          this.generateEllipse(),
            this.generatePolygon(
              "triangle",
              r.generateUnitNgonPointsFitToSquare(3, 0)
            ),
            this.generatePolygon(
              "rectangle",
              r.generateUnitNgonPointsFitToSquare(4, 0)
            ),
            (e.square = e.rectangle),
            this.generateRoundRectangle(),
            this.generateCutRectangle(),
            this.generateBarrel(),
            this.generateBottomRoundrectangle(),
            this.generatePolygon("diamond", [0, 1, 1, 0, 0, -1, -1, 0]),
            this.generatePolygon(
              "pentagon",
              r.generateUnitNgonPointsFitToSquare(5, 0)
            ),
            this.generatePolygon(
              "hexagon",
              r.generateUnitNgonPointsFitToSquare(6, 0)
            ),
            this.generatePolygon(
              "heptagon",
              r.generateUnitNgonPointsFitToSquare(7, 0)
            ),
            this.generatePolygon(
              "octagon",
              r.generateUnitNgonPointsFitToSquare(8, 0)
            );
          var n = new Array(20),
            i = r.generateUnitNgonPoints(5, 0),
            a = r.generateUnitNgonPoints(5, Math.PI / 5),
            o = 0.5 * (3 - Math.sqrt(5));
          o *= 1.57;
          for (var s = 0; s < a.length / 2; s++)
            (a[2 * s] *= o), (a[2 * s + 1] *= o);
          for (var s = 0; s < 5; s++)
            (n[4 * s] = i[2 * s]),
              (n[4 * s + 1] = i[2 * s + 1]),
              (n[4 * s + 2] = a[2 * s]),
              (n[4 * s + 3] = a[2 * s + 1]);
          (n = r.fitPolygonToSquare(n)),
            this.generatePolygon("star", n),
            this.generatePolygon("vee", [-1, -1, 0, -0.333, 1, -1, 0, 1]),
            this.generatePolygon(
              "rhomboid",
              [-1, -1, 0.333, -1, 1, 1, -0.333, 1]
            ),
            this.generatePolygon(
              "concavehexagon",
              [-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95]
            ),
            this.generatePolygon(
              "tag",
              [-1, -1, 0.25, -1, 1, 0, 0.25, 1, -1, 1]
            ),
            (e.makePolygon = function (e) {
              var n,
                r = e.join("$"),
                i = "polygon-" + r;
              return (n = this[i]) ? n : t.generatePolygon(i, e);
            });
        }),
        (e.exports = i);
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = {};
      (i.timeToRender = function () {
        return this.redrawTotalTime / this.redrawCount;
      }),
        (i.redraw = function (e) {
          e = e || r.staticEmptyObject();
          var t = this;
          void 0 === t.averageRedrawTime && (t.averageRedrawTime = 0),
            void 0 === t.lastRedrawTime && (t.lastRedrawTime = 0),
            void 0 === t.lastDrawTime && (t.lastDrawTime = 0),
            (t.requestedFrame = !0),
            (t.renderOptions = e);
        }),
        (i.beforeRender = function (e, t) {
          if (!this.destroyed) {
            t = t || 0;
            var n = this.beforeRenderCallbacks;
            n.push({ fn: e, priority: t }),
              n.sort(function (e, t) {
                return t.priority - e.priority;
              });
          }
        });
      var a = function (e, t, n) {
        for (var r = e.beforeRenderCallbacks, i = 0; i < r.length; i++)
          r[i].fn(t, n);
      };
      (i.startRenderLoop = function () {
        var e = this;
        if (!e.renderLoopStarted) {
          e.renderLoopStarted = !0;
          var t = function t(n) {
            if (!e.destroyed) {
              if (e.requestedFrame && !e.skipFrame) {
                a(e, !0, n);
                var i = r.performanceNow();
                e.render(e.renderOptions);
                var o = (e.lastDrawTime = r.performanceNow());
                void 0 === e.averageRedrawTime && (e.averageRedrawTime = o - i),
                  void 0 === e.redrawCount && (e.redrawCount = 0),
                  e.redrawCount++,
                  void 0 === e.redrawTotalTime && (e.redrawTotalTime = 0);
                var s = o - i;
                (e.redrawTotalTime += s),
                  (e.lastRedrawTime = s),
                  (e.averageRedrawTime = e.averageRedrawTime / 2 + s / 2),
                  (e.requestedFrame = !1);
              } else a(e, !1, n);
              (e.skipFrame = !1), r.requestAnimationFrame(t);
            }
          };
          r.requestAnimationFrame(t);
        }
      }),
        (e.exports = i);
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        var t = this;
        t.data = {
          canvases: new Array(u.CANVAS_LAYERS),
          contexts: new Array(u.CANVAS_LAYERS),
          canvasNeedsRedraw: new Array(u.CANVAS_LAYERS),
          bufferCanvases: new Array(u.BUFFER_COUNT),
          bufferContexts: new Array(u.CANVAS_LAYERS),
        };
        var n = "-webkit-tap-highlight-color: rgba(0,0,0,0);";
        t.data.canvasContainer = document.createElement("div");
        var r = t.data.canvasContainer.style;
        t.data.canvasContainer.setAttribute("style", n),
          (r.position = "relative"),
          (r.zIndex = "0"),
          (r.overflow = "hidden");
        var i = e.cy.container();
        i.appendChild(t.data.canvasContainer),
          (i.getAttribute("style") || "").indexOf(n) < 0 &&
            i.setAttribute("style", (i.getAttribute("style") || "") + n);
        for (var l = 0; l < u.CANVAS_LAYERS; l++) {
          var c = (t.data.canvases[l] = document.createElement("canvas"));
          (t.data.contexts[l] = c.getContext("2d")),
            c.setAttribute(
              "style",
              "-webkit-user-select: none; -moz-user-select: -moz-none; user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0); outline-style: none;" +
                (a.ms() ? " -ms-touch-action: none; touch-action: none; " : "")
            ),
            (c.style.position = "absolute"),
            c.setAttribute("data-id", "layer" + l),
            (c.style.zIndex = String(u.CANVAS_LAYERS - l)),
            t.data.canvasContainer.appendChild(c),
            (t.data.canvasNeedsRedraw[l] = !1);
        }
        (t.data.topCanvas = t.data.canvases[0]),
          t.data.canvases[u.NODE].setAttribute(
            "data-id",
            "layer" + u.NODE + "-node"
          ),
          t.data.canvases[u.SELECT_BOX].setAttribute(
            "data-id",
            "layer" + u.SELECT_BOX + "-selectbox"
          ),
          t.data.canvases[u.DRAG].setAttribute(
            "data-id",
            "layer" + u.DRAG + "-drag"
          );
        for (var l = 0; l < u.BUFFER_COUNT; l++)
          (t.data.bufferCanvases[l] = document.createElement("canvas")),
            (t.data.bufferContexts[l] =
              t.data.bufferCanvases[l].getContext("2d")),
            (t.data.bufferCanvases[l].style.position = "absolute"),
            t.data.bufferCanvases[l].setAttribute("data-id", "buffer" + l),
            (t.data.bufferCanvases[l].style.zIndex = String(-l - 1)),
            (t.data.bufferCanvases[l].style.visibility = "hidden");
        (t.pathsEnabled = !0),
          (t.data.eleTxrCache = new o(t)),
          (t.data.lyrTxrCache = new s(t, t.data.eleTxrCache)),
          t.onUpdateEleCalcs(function (e, n) {
            for (var r = 0; r < n.length; r++) {
              var i = n[r],
                a = i._private.rstyle,
                o = a.dirtyEvents;
              (i.isNode() && o && 1 === o.length && o.position) ||
                t.data.eleTxrCache.invalidateElement(i);
            }
            n.length > 0 && t.data.lyrTxrCache.invalidateElements(n);
          });
      }
      var i = n(1),
        a = n(0),
        o = n(125),
        s = n(126),
        l = r,
        u = r.prototype;
      (u.CANVAS_LAYERS = 3),
        (u.SELECT_BOX = 0),
        (u.DRAG = 1),
        (u.NODE = 2),
        (u.BUFFER_COUNT = 3),
        (u.TEXTURE_BUFFER = 0),
        (u.MOTIONBLUR_BUFFER_NODE = 1),
        (u.MOTIONBLUR_BUFFER_DRAG = 2),
        (u.redrawHint = function (e, t) {
          var n = this;
          switch (e) {
            case "eles":
              n.data.canvasNeedsRedraw[u.NODE] = t;
              break;
            case "drag":
              n.data.canvasNeedsRedraw[u.DRAG] = t;
              break;
            case "select":
              n.data.canvasNeedsRedraw[u.SELECT_BOX] = t;
          }
        });
      var c = "undefined" != typeof Path2D;
      (u.path2dEnabled = function (e) {
        if (void 0 === e) return this.pathsEnabled;
        this.pathsEnabled = !!e;
      }),
        (u.usePaths = function () {
          return c && this.pathsEnabled;
        }),
        [
          n(127),
          n(128),
          n(129),
          n(130),
          n(131),
          n(132),
          n(133),
          n(134),
          n(135),
          n(136),
        ].forEach(function (e) {
          i.extend(u, e);
        }),
        (e.exports = l);
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = n(1),
        a = n(9),
        o = n(19),
        s = {
          dequeue: "dequeue",
          downscale: "downscale",
          highQuality: "highQuality",
        },
        l = function (e) {
          var t = this;
          (t.renderer = e), (t.onDequeues = []), t.setupDequeueing();
        },
        u = l.prototype;
      (u.reasons = s),
        (u.getTextureQueue = function (e) {
          var t = this;
          return (
            (t.eleImgCaches = t.eleImgCaches || {}),
            (t.eleImgCaches[e] = t.eleImgCaches[e] || [])
          );
        }),
        (u.getRetiredTextureQueue = function (e) {
          var t = this,
            n = (t.eleImgCaches.retired = t.eleImgCaches.retired || {});
          return (n[e] = n[e] || []);
        }),
        (u.getElementQueue = function () {
          var e = this;
          return (e.eleCacheQueue =
            e.eleCacheQueue ||
            new a(function (e, t) {
              return t.reqs - e.reqs;
            }));
        }),
        (u.getElementIdToQueue = function () {
          var e = this;
          return (e.eleIdToCacheQueue = e.eleIdToCacheQueue || {});
        }),
        (u.getElement = function (e, t, n, i, a) {
          var o = this,
            l = this.renderer,
            u = e._private.rscratch,
            c = l.cy.zoom();
          if (0 === t.w || 0 === t.h || !e.visible()) return null;
          if ((null == i && (i = Math.ceil(r.log2(c * n))), i < -4)) i = -4;
          else if (c >= 3.99 || i > 2) return null;
          var d = Math.pow(2, i),
            h = t.h * d,
            p = t.w * d,
            f = (u.imgCaches = u.imgCaches || {}),
            v = f[i];
          if (v) return v;
          var g;
          if (
            ((g = h <= 25 ? 25 : h <= 50 ? 50 : 50 * Math.ceil(h / 50)),
            h > 1024 || p > 1024 || e.isEdge() || e.isParent())
          )
            return null;
          var y = o.getTextureQueue(g),
            m = y[y.length - 2],
            b = function () {
              return o.recycleTexture(g, p) || o.addTexture(g, p);
            };
          m || (m = y[y.length - 1]),
            m || (m = b()),
            m.width - m.usedWidth < p && (m = b());
          for (
            var x,
              w = l.eleTextBiggerThanMin(e, d),
              E = function (e) {
                return e && e.scaledLabelShown === w;
              },
              P = a && a === s.dequeue,
              C = a && a === s.highQuality,
              S = a && a === s.downscale,
              T = i + 1;
            T <= 2;
            T++
          ) {
            var D = f[T];
            if (D) {
              x = D;
              break;
            }
          }
          var k = x && x.level === i + 1 ? x : null,
            _ = function () {
              m.context.drawImage(
                k.texture.canvas,
                k.x,
                0,
                k.width,
                k.height,
                m.usedWidth,
                0,
                p,
                h
              );
            };
          if (
            (m.context.setTransform(1, 0, 0, 1, 0, 0),
            m.context.clearRect(m.usedWidth, 0, p, g),
            E(k))
          )
            _();
          else if (E(x)) {
            if (!C) return o.queueElement(e, x.level - 1), x;
            for (var T = x.level; T > i; T--)
              k = o.getElement(e, t, n, T, s.downscale);
            _();
          } else {
            var M;
            if (!P && !C && !S)
              for (var T = i - 1; T >= -4; T--) {
                var D = f[T];
                if (D) {
                  M = D;
                  break;
                }
              }
            if (E(M)) return o.queueElement(e, i), M;
            m.context.translate(m.usedWidth, 0),
              m.context.scale(d, d),
              l.drawElement(m.context, e, t, w),
              m.context.scale(1 / d, 1 / d),
              m.context.translate(-m.usedWidth, 0);
          }
          return (
            (v = f[i] =
              {
                ele: e,
                x: m.usedWidth,
                texture: m,
                level: i,
                scale: d,
                width: p,
                height: h,
                scaledLabelShown: w,
              }),
            (m.usedWidth += Math.ceil(p + 8)),
            m.eleCaches.push(v),
            o.checkTextureFullness(m),
            v
          );
        }),
        (u.invalidateElement = function (e) {
          var t = this,
            n = e._private.rscratch.imgCaches;
          if (n)
            for (var r = -4; r <= 2; r++) {
              var a = n[r];
              if (a) {
                var o = a.texture;
                (o.invalidatedWidth += a.width),
                  (n[r] = null),
                  i.removeFromArray(o.eleCaches, a),
                  t.removeFromQueue(e),
                  t.checkTextureUtility(o);
              }
            }
        }),
        (u.checkTextureUtility = function (e) {
          e.invalidatedWidth >= 0.5 * e.width && this.retireTexture(e);
        }),
        (u.checkTextureFullness = function (e) {
          var t = this,
            n = t.getTextureQueue(e.height);
          e.usedWidth / e.width > 0.8 && e.fullnessChecks >= 10
            ? i.removeFromArray(n, e)
            : e.fullnessChecks++;
        }),
        (u.retireTexture = function (e) {
          var t = this,
            n = e.height,
            r = t.getTextureQueue(n);
          i.removeFromArray(r, e), (e.retired = !0);
          for (var a = e.eleCaches, o = 0; o < a.length; o++) {
            var s = a[o],
              l = s.ele,
              u = s.level,
              c = l._private.rscratch.imgCaches;
            c && (c[u] = null);
          }
          i.clearArray(a), t.getRetiredTextureQueue(n).push(e);
        }),
        (u.addTexture = function (e, t) {
          var n = this,
            r = n.getTextureQueue(e),
            i = {};
          return (
            r.push(i),
            (i.eleCaches = []),
            (i.height = e),
            (i.width = Math.max(1024, t)),
            (i.usedWidth = 0),
            (i.invalidatedWidth = 0),
            (i.fullnessChecks = 0),
            (i.canvas = document.createElement("canvas")),
            (i.canvas.width = i.width),
            (i.canvas.height = i.height),
            (i.context = i.canvas.getContext("2d")),
            i
          );
        }),
        (u.recycleTexture = function (e, t) {
          for (
            var n = this,
              r = n.getTextureQueue(e),
              a = n.getRetiredTextureQueue(e),
              o = 0;
            o < a.length;
            o++
          ) {
            var s = a[o];
            if (s.width >= t)
              return (
                (s.retired = !1),
                (s.usedWidth = 0),
                (s.invalidatedWidth = 0),
                (s.fullnessChecks = 0),
                i.clearArray(s.eleCaches),
                s.context.setTransform(1, 0, 0, 1, 0, 0),
                s.context.clearRect(0, 0, s.width, s.height),
                i.removeFromArray(a, s),
                r.push(s),
                s
              );
          }
        }),
        (u.queueElement = function (e, t) {
          var n = this,
            r = n.getElementQueue(),
            i = n.getElementIdToQueue(),
            a = e.id(),
            o = i[a];
          if (o) (o.level = Math.max(o.level, t)), o.reqs++, r.updateItem(o);
          else {
            var s = { ele: e, level: t, reqs: 1 };
            r.push(s), (i[a] = s);
          }
        }),
        (u.dequeue = function (e) {
          for (
            var t = this,
              n = t.getElementQueue(),
              r = t.getElementIdToQueue(),
              i = [],
              a = 0;
            a < 1 && n.size() > 0;
            a++
          ) {
            var o = n.pop(),
              l = o.ele;
            if (null == l._private.rscratch.imgCaches[o.level]) {
              (r[l.id()] = null), i.push(o);
              var u = l.boundingBox();
              t.getElement(l, u, e, o.level, s.dequeue);
            }
          }
          return i;
        }),
        (u.removeFromQueue = function (e) {
          var t = this,
            n = t.getElementQueue(),
            r = t.getElementIdToQueue(),
            a = r[e.id()];
          null != a &&
            ((a.reqs = i.MAX_INT),
            n.updateItem(a),
            n.pop(),
            (r[e.id()] = null));
        }),
        (u.onDequeue = function (e) {
          this.onDequeues.push(e);
        }),
        (u.offDequeue = function (e) {
          i.removeFromArray(this.onDequeues, e);
        }),
        (u.setupDequeueing = o.setupDequeueing({
          deqRedrawThreshold: 100,
          deqCost: 0.15,
          deqAvgCost: 0.1,
          deqNoDrawCost: 0.9,
          deqFastCost: 0.9,
          deq: function (e, t, n) {
            return e.dequeue(t, n);
          },
          onDeqd: function (e, t) {
            for (var n = 0; n < e.onDequeues.length; n++) {
              (0, e.onDequeues[n])(t);
            }
          },
          shouldRedraw: function (e, t, n, i) {
            for (var a = 0; a < t.length; a++) {
              var o = t[a].ele.boundingBox();
              if (r.boundingBoxesIntersect(o, i)) return !0;
            }
            return !1;
          },
          priority: function (e) {
            return e.renderer.beforeRenderPriorities.eleTxrDeq;
          },
        })),
        (e.exports = l);
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        null != e.imageSmoothingEnabled
          ? (e.imageSmoothingEnabled = t)
          : ((e.webkitImageSmoothingEnabled = t),
            (e.mozImageSmoothingEnabled = t),
            (e.msImageSmoothingEnabled = t));
      }
      var i = n(1),
        a = n(2),
        o = n(9),
        s = n(0),
        l = n(19),
        u = function (e, t) {
          var n = this,
            r = (n.renderer = e);
          (n.layersByLevel = {}),
            (n.firstGet = !0),
            (n.lastInvalidationTime = i.performanceNow() - 500),
            (n.skipping = !1),
            r.beforeRender(function (e, t) {
              t - n.lastInvalidationTime <= 250
                ? (n.skipping = !0)
                : (n.skipping = !1);
            });
          var a = function (e, t) {
            return t.reqs - e.reqs;
          };
          (n.layersQueue = new o(a)),
            (n.eleTxrCache = t),
            n.setupEleCacheInvalidation(),
            n.setupDequeueing();
        },
        c = u.prototype,
        d = 0,
        h = Math.pow(2, 53) - 1;
      (c.makeLayer = function (e, t) {
        var n = Math.pow(2, t),
          r = Math.ceil(e.w * n),
          i = Math.ceil(e.h * n),
          a = document.createElement("canvas");
        (a.width = r), (a.height = i);
        var o = {
            id: (d = ++d % h),
            bb: e,
            level: t,
            width: r,
            height: i,
            canvas: a,
            context: a.getContext("2d"),
            eles: [],
            elesQueue: [],
            reqs: 0,
          },
          s = o.context,
          l = -o.bb.x1,
          u = -o.bb.y1;
        return s.scale(n, n), s.translate(l, u), o;
      }),
        (c.getLayers = function (e, t, n) {
          var r = this,
            o = r.renderer,
            s = o.cy,
            l = s.zoom(),
            u = r.firstGet;
          if (((r.firstGet = !1), null == n))
            if ((n = Math.ceil(a.log2(l * t))) < -4) n = -4;
            else if (l >= 3.99 || n > 2) return null;
          r.validateLayersElesOrdering(n, e);
          var c,
            d,
            h = r.layersByLevel,
            p = Math.pow(2, n),
            f = (h[n] = h[n] || []),
            v = r.levelIsComplete(n, e);
          if (v) return f;
          !(function () {
            var t = function (t) {
                if (
                  (r.validateLayersElesOrdering(t, e), r.levelIsComplete(t, e))
                )
                  return (d = h[t]), !0;
              },
              a = function (e) {
                if (!d) for (var r = n + e; -4 <= r && r <= 2 && !t(r); r += e);
              };
            a(1), a(-1);
            for (var o = f.length - 1; o >= 0; o--) {
              var s = f[o];
              s.invalid && i.removeFromArray(f, s);
            }
          })();
          var g = function () {
            if (!c) {
              c = a.makeBoundingBox();
              for (var t = 0; t < e.length; t++)
                a.updateBoundingBox(c, e[t].boundingBox());
            }
            return c;
          };
          if (r.skipping && !u) return null;
          for (
            var y = null, m = e.length / 1, b = !u, x = 0;
            x < e.length;
            x++
          ) {
            var w = e[x],
              E = w._private.rscratch,
              P = (E.imgLayerCaches = E.imgLayerCaches || {}),
              C = P[n];
            if (C) y = C;
            else {
              if (
                (!y ||
                  y.eles.length >= m ||
                  !a.boundingBoxInBoundingBox(y.bb, w.boundingBox())) &&
                !(y = (function (e) {
                  e = e || {};
                  var t = e.after;
                  if ((g(), c.w * p * (c.h * p) > 16e6)) return null;
                  var i = r.makeLayer(c, n);
                  if (null != t) {
                    var a = f.indexOf(t) + 1;
                    f.splice(a, 0, i);
                  } else (void 0 === e.insert || e.insert) && f.unshift(i);
                  return i;
                })({ insert: !0, after: y }))
              )
                return null;
              d || b ? r.queueLayer(y, w) : r.drawEleInLayer(y, w, n, t),
                y.eles.push(w),
                (P[n] = y);
            }
          }
          return d || (b ? null : f);
        }),
        (c.getEleLevelForLayerLevel = function (e, t) {
          return e;
        }),
        (c.drawEleInLayer = function (e, t, n, i) {
          var a = this,
            o = this.renderer,
            s = e.context,
            l = t.boundingBox();
          if (0 !== l.w && 0 !== l.h && t.visible()) {
            var u = a.eleTxrCache,
              c = u.reasons.highQuality;
            n = a.getEleLevelForLayerLevel(n, i);
            var d = u.getElement(t, l, null, n, c);
            d
              ? (r(s, !1),
                s.drawImage(
                  d.texture.canvas,
                  d.x,
                  0,
                  d.width,
                  d.height,
                  l.x1,
                  l.y1,
                  l.w,
                  l.h
                ),
                r(s, !0))
              : o.drawElement(s, t);
          }
        }),
        (c.levelIsComplete = function (e, t) {
          var n = this,
            r = n.layersByLevel[e];
          if (!r || 0 === r.length) return !1;
          for (var i = 0, a = 0; a < r.length; a++) {
            var o = r[a];
            if (o.reqs > 0) return !1;
            if (o.invalid) return !1;
            i += o.eles.length;
          }
          return i === t.length;
        }),
        (c.validateLayersElesOrdering = function (e, t) {
          var n = this.layersByLevel[e];
          if (n)
            for (var r = 0; r < n.length; r++) {
              for (var i = n[r], a = -1, o = 0; o < t.length; o++)
                if (i.eles[0] === t[o]) {
                  a = o;
                  break;
                }
              if (a < 0) this.invalidateLayer(i);
              else
                for (var s = a, o = 0; o < i.eles.length; o++)
                  if (i.eles[o] !== t[s + o]) {
                    this.invalidateLayer(i);
                    break;
                  }
            }
        }),
        (c.updateElementsInLayers = function (e, t) {
          for (var n = this, r = s.element(e[0]), i = 0; i < e.length; i++)
            for (
              var a = r ? null : e[i],
                o = r ? e[i] : e[i].ele,
                l = o._private.rscratch,
                u = (l.imgLayerCaches = l.imgLayerCaches || {}),
                c = -4;
              c <= 2;
              c++
            ) {
              var d = u[c];
              d &&
                ((a && n.getEleLevelForLayerLevel(d.level) !== a.level) ||
                  t(d, o, a));
            }
        }),
        (c.haveLayers = function () {
          for (var e = this, t = !1, n = -4; n <= 2; n++) {
            var r = e.layersByLevel[n];
            if (r && r.length > 0) {
              t = !0;
              break;
            }
          }
          return t;
        }),
        (c.invalidateElements = function (e) {
          var t = this;
          (t.lastInvalidationTime = i.performanceNow()),
            0 !== e.length &&
              t.haveLayers() &&
              t.updateElementsInLayers(e, function (e, n, r) {
                t.invalidateLayer(e);
              });
        }),
        (c.invalidateLayer = function (e) {
          if (((this.lastInvalidationTime = i.performanceNow()), !e.invalid)) {
            var t = e.level,
              n = e.eles,
              r = this.layersByLevel[t];
            i.removeFromArray(r, e),
              (e.elesQueue = []),
              (e.invalid = !0),
              e.replacement && (e.replacement.invalid = !0);
            for (var a = 0; a < n.length; a++) {
              var o = n[a]._private.rscratch.imgLayerCaches;
              o && (o[t] = null);
            }
          }
        }),
        (c.refineElementTextures = function (e) {
          var t = this;
          t.updateElementsInLayers(e, function (e, n, r) {
            var i = e.replacement;
            if (
              (i ||
                ((i = e.replacement = t.makeLayer(e.bb, e.level)),
                (i.replaces = e),
                (i.eles = e.eles)),
              !i.reqs)
            )
              for (var a = 0; a < i.eles.length; a++)
                t.queueLayer(i, i.eles[a]);
          });
        }),
        (c.setupEleCacheInvalidation = function () {
          var e = this,
            t = [],
            n = i.debounce(function () {
              e.refineElementTextures(t), (t = []);
            }, 50);
          e.eleTxrCache.onDequeue(function (e) {
            for (var r = 0; r < e.length; r++) t.push(e[r]);
            n();
          });
        }),
        (c.queueLayer = function (e, t) {
          var n = this,
            r = n.layersQueue,
            i = e.elesQueue,
            a = (i.hasId = i.hasId || {});
          if (!e.replacement) {
            if (t) {
              if (a[t.id()]) return;
              i.push(t), (a[t.id()] = !0);
            }
            e.reqs ? (e.reqs++, r.updateItem(e)) : ((e.reqs = 1), r.push(e));
          }
        }),
        (c.dequeue = function (e) {
          for (
            var t = this, n = t.layersQueue, r = [], i = 0;
            i < 1 && 0 !== n.size();

          ) {
            var a = n.peek();
            if (a.replacement) n.pop();
            else if (a.replaces && a !== a.replaces.replacement) n.pop();
            else if (a.invalid) n.pop();
            else {
              var o = a.elesQueue.shift();
              o && (t.drawEleInLayer(a, o, a.level, e), i++),
                0 === r.length && r.push(!0),
                0 === a.elesQueue.length &&
                  (n.pop(),
                  (a.reqs = 0),
                  a.replaces && t.applyLayerReplacement(a),
                  t.requestRedraw());
            }
          }
          return r;
        }),
        (c.applyLayerReplacement = function (e) {
          var t = this,
            n = t.layersByLevel[e.level],
            r = e.replaces,
            i = n.indexOf(r);
          if (!(i < 0 || r.invalid)) {
            n[i] = e;
            for (var a = 0; a < e.eles.length; a++) {
              var o = e.eles[a]._private,
                s = (o.imgLayerCaches = o.imgLayerCaches || {});
              s && (s[e.level] = e);
            }
            t.requestRedraw();
          }
        }),
        (c.requestRedraw = i.debounce(function () {
          var e = this.renderer;
          e.redrawHint("eles", !0), e.redrawHint("drag", !0), e.redraw();
        }, 100)),
        (c.setupDequeueing = l.setupDequeueing({
          deqRedrawThreshold: 50,
          deqCost: 0.15,
          deqAvgCost: 0.1,
          deqNoDrawCost: 0.9,
          deqFastCost: 0.9,
          deq: function (e, t) {
            return e.dequeue(t);
          },
          onDeqd: i.noop,
          shouldRedraw: i.trueify,
          priority: function (e) {
            return e.renderer.beforeRenderPriorities.lyrTxrDeq;
          },
        })),
        (e.exports = u);
    },
    function (e, t, n) {
      "use strict";
      var r,
        i = {};
      (i.arrowShapeImpl = function (e) {
        return (r ||
          (r = {
            polygon: function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                e.lineTo(r.x, r.y);
              }
            },
            "triangle-backcurve": function (e, t, n) {
              for (var r, i = 0; i < t.length; i++) {
                var a = t[i];
                0 === i && (r = a), e.lineTo(a.x, a.y);
              }
              e.quadraticCurveTo(n.x, n.y, r.x, r.y);
            },
            "triangle-tee": function (e, t, n) {
              e.beginPath && e.beginPath();
              for (var r = t, i = 0; i < r.length; i++) {
                var a = r[i];
                e.lineTo(a.x, a.y);
              }
              e.closePath && e.closePath(), e.beginPath && e.beginPath();
              var o = n,
                s = n[0];
              e.moveTo(s.x, s.y);
              for (var i = 0; i < o.length; i++) {
                var a = o[i];
                e.lineTo(a.x, a.y);
              }
              e.closePath && e.closePath();
            },
            "triangle-cross": function (e, t, n) {
              e.beginPath && e.beginPath();
              for (var r = t, i = 0; i < r.length; i++) {
                var a = r[i];
                e.lineTo(a.x, a.y);
              }
              e.closePath && e.closePath(), e.beginPath && e.beginPath();
              var o = n,
                s = n[0];
              e.moveTo(s.x, s.y);
              for (var i = 0; i < o.length; i++) {
                var a = o[i];
                e.lineTo(a.x, a.y);
              }
              e.closePath && e.closePath();
            },
            circle: function (e, t, n, r) {
              e.arc(t, n, r, 0, 2 * Math.PI, !1);
            },
          }))[e];
      }),
        (e.exports = i);
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = {};
      (i.drawElement = function (e, t, n, r) {
        var i = this;
        t.isNode() ? i.drawNode(e, t, n, r) : i.drawEdge(e, t, n, r);
      }),
        (i.drawCachedElement = function (e, t, n, i) {
          var a = this,
            o = t.boundingBox();
          if (
            0 !== o.w &&
            0 !== o.h &&
            (!i || r.boundingBoxesIntersect(o, i))
          ) {
            var s = a.data.eleTxrCache.getElement(t, o, n);
            null != s
              ? e.drawImage(
                  s.texture.canvas,
                  s.x,
                  0,
                  s.width,
                  s.height,
                  o.x1,
                  o.y1,
                  o.w,
                  o.h
                )
              : a.drawElement(e, t);
          }
        }),
        (i.drawElements = function (e, t) {
          for (var n = this, r = 0; r < t.length; r++) {
            var i = t[r];
            n.drawElement(e, i);
          }
        }),
        (i.drawCachedElements = function (e, t, n, r) {
          for (var i = this, a = 0; a < t.length; a++) {
            var o = t[a];
            i.drawCachedElement(e, o, n, r);
          }
        }),
        (i.drawCachedNodes = function (e, t, n, r) {
          for (var i = this, a = 0; a < t.length; a++) {
            var o = t[a];
            o.isNode() && i.drawCachedElement(e, o, n, r);
          }
        }),
        (i.drawLayeredElements = function (e, t, n, r) {
          var i = this,
            a = i.data.lyrTxrCache.getLayers(t, n);
          if (a)
            for (var o = 0; o < a.length; o++) {
              var s = a[o],
                l = s.bb;
              0 !== l.w &&
                0 !== l.h &&
                e.drawImage(s.canvas, l.x1, l.y1, l.w, l.h);
            }
          else i.drawCachedElements(e, t, n, r);
        }),
        (i.drawDebugPoints = function (e, t) {
          for (
            var n = function (t, n, r) {
                (e.fillStyle = r), e.fillRect(t - 1, n - 1, 3, 3);
              },
              r = 0;
            r < t.length;
            r++
          ) {
            var i = t[r],
              a = i._private.rscratch;
            if (i.isNode()) {
              var o = i.position();
              n(o.x, o.y, "magenta");
            } else {
              for (var s = a.allpts, l = 0; l + 1 < s.length; l += 2) {
                n(s[l], s[l + 1], "cyan");
              }
              n(a.midX, a.midY, "yellow");
            }
          }
        }),
        (e.exports = i);
    },
    function (e, t, n) {
      "use strict";
      var r = {};
      (r.drawEdge = function (e, t, n, r) {
        var i = this,
          a = t._private.rscratch,
          o = i.usePaths();
        if (!a.badLine && !isNaN(a.allpts[0]) && t.visible()) {
          var s = void 0;
          n && ((s = n), e.translate(-s.x1, -s.y1));
          var l = t.pstyle("overlay-padding").pfValue,
            u = 2 * l,
            c = t.pstyle("overlay-opacity").value,
            d = t.pstyle("overlay-color").value,
            h = t.pstyle("line-color").value,
            p = t.pstyle("opacity").value,
            f = t.pstyle("line-style").value,
            v = t.pstyle("width").pfValue,
            g = function () {
              var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : p;
              (e.lineWidth = v),
                (e.lineCap = "butt"),
                i.strokeStyle(e, h[0], h[1], h[2], n),
                i.drawEdgePath(t, e, a.allpts, f);
            },
            y = function () {
              var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : p;
              i.drawArrowheads(e, t, n);
            };
          e.lineJoin = "round";
          if ("yes" === t.pstyle("ghost").value) {
            var m = t.pstyle("ghost-offset-x").pfValue,
              b = t.pstyle("ghost-offset-y").pfValue,
              x = t.pstyle("ghost-opacity").value,
              w = p * x;
            e.translate(m, b), g(w), y(w), e.translate(-m, -b);
          }
          g(),
            y(),
            (function () {
              var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : c;
              (e.lineWidth = u),
                "self" !== a.edgeType || o
                  ? (e.lineCap = "round")
                  : (e.lineCap = "butt"),
                i.strokeStyle(e, d[0], d[1], d[2], n),
                i.drawEdgePath(t, e, a.allpts, "solid");
            })(),
            (function () {
              i.drawElementText(e, t, r);
            })(),
            n && e.translate(s.x1, s.y1);
        }
      }),
        (r.drawEdgePath = function (e, t, n, r) {
          var i = e._private.rscratch,
            a = t,
            o = void 0,
            s = !1,
            l = this.usePaths();
          if (l) {
            var u = n.join("$");
            i.pathCacheKey && i.pathCacheKey === u
              ? ((o = t = i.pathCache), (s = !0))
              : ((o = t = new Path2D()),
                (i.pathCacheKey = u),
                (i.pathCache = o));
          }
          if (a.setLineDash)
            switch (r) {
              case "dotted":
                a.setLineDash([1, 1]);
                break;
              case "dashed":
                a.setLineDash([6, 3]);
                break;
              case "solid":
                a.setLineDash([]);
            }
          if (!s && !i.badLine)
            switch (
              (t.beginPath && t.beginPath(), t.moveTo(n[0], n[1]), i.edgeType)
            ) {
              case "bezier":
              case "self":
              case "compound":
              case "multibezier":
                for (var c = 2; c + 3 < n.length; c += 4)
                  t.quadraticCurveTo(n[c], n[c + 1], n[c + 2], n[c + 3]);
                break;
              case "straight":
              case "segments":
              case "haystack":
                for (var d = 2; d + 1 < n.length; d += 2)
                  t.lineTo(n[d], n[d + 1]);
            }
          (t = a),
            l ? t.stroke(o) : t.stroke(),
            t.setLineDash && t.setLineDash([]);
        }),
        (r.drawArrowheads = function (e, t, n) {
          var r = t._private.rscratch,
            i = "haystack" === r.edgeType;
          i ||
            this.drawArrowhead(
              e,
              t,
              "source",
              r.arrowStartX,
              r.arrowStartY,
              r.srcArrowAngle,
              n
            ),
            this.drawArrowhead(
              e,
              t,
              "mid-target",
              r.midX,
              r.midY,
              r.midtgtArrowAngle,
              n
            ),
            this.drawArrowhead(
              e,
              t,
              "mid-source",
              r.midX,
              r.midY,
              r.midsrcArrowAngle,
              n
            ),
            i ||
              this.drawArrowhead(
                e,
                t,
                "target",
                r.arrowEndX,
                r.arrowEndY,
                r.tgtArrowAngle,
                n
              );
        }),
        (r.drawArrowhead = function (e, t, n, r, i, a, o) {
          if (
            !(
              isNaN(r) ||
              null == r ||
              isNaN(i) ||
              null == i ||
              isNaN(a) ||
              null == a
            )
          ) {
            var s = this,
              l = t.pstyle(n + "-arrow-shape").value;
            if ("none" !== l) {
              var u =
                  "hollow" === t.pstyle(n + "-arrow-fill").value
                    ? "both"
                    : "filled",
                c = t.pstyle(n + "-arrow-fill").value,
                d = t.pstyle("width").pfValue,
                h = t.pstyle("opacity").value;
              void 0 === o && (o = h);
              var p = e.globalCompositeOperation;
              (1 === o && "hollow" !== c) ||
                ((e.globalCompositeOperation = "destination-out"),
                s.fillStyle(e, 255, 255, 255, 1),
                s.strokeStyle(e, 255, 255, 255, 1),
                s.drawArrowShape(t, n, e, u, d, l, r, i, a),
                (e.globalCompositeOperation = p));
              var f = t.pstyle(n + "-arrow-color").value;
              s.fillStyle(e, f[0], f[1], f[2], o),
                s.strokeStyle(e, f[0], f[1], f[2], o),
                s.drawArrowShape(t, n, e, c, d, l, r, i, a);
            }
          }
        }),
        (r.drawArrowShape = function (e, t, n, r, i, a, o, s, l) {
          var u = this,
            c = this.usePaths(),
            d = e._private.rscratch,
            h = !1,
            p = void 0,
            f = n,
            v = { x: o, y: s },
            g = e.pstyle("arrow-scale").value,
            y = this.getArrowWidth(i, g),
            m = u.arrowShapes[a];
          if (c) {
            var b = y + "$" + a + "$" + l + "$" + o + "$" + s;
            (d.arrowPathCacheKey = d.arrowPathCacheKey || {}),
              (d.arrowPathCache = d.arrowPathCache || {});
            d.arrowPathCacheKey[t] === b
              ? ((p = n = d.arrowPathCache[t]), (h = !0))
              : ((p = n = new Path2D()),
                (d.arrowPathCacheKey[t] = b),
                (d.arrowPathCache[t] = p));
          }
          n.beginPath && n.beginPath(),
            h || m.draw(n, y, l, v, i),
            !m.leavePathOpen && n.closePath && n.closePath(),
            (n = f),
            ("filled" !== r && "both" !== r) || (c ? n.fill(p) : n.fill()),
            ("hollow" !== r && "both" !== r) ||
              ((n.lineWidth = m.matchEdgeWidth ? i : 1),
              (n.lineJoin = "miter"),
              c ? n.stroke(p) : n.stroke());
        }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      var r = {};
      (r.safeDrawImage = function (e, t, n, r, i, a, o, s, l, u) {
        i <= 0 ||
          a <= 0 ||
          l <= 0 ||
          u <= 0 ||
          e.drawImage(t, n, r, i, a, o, s, l, u);
      }),
        (r.drawInscribedImage = function (e, t, n, r, i) {
          var a = this,
            o = n.position(),
            s = o.x,
            l = o.y,
            u = n.cy().style(),
            c = u.getIndexedStyle.bind(u),
            d = c(n, "background-fit", "value", r),
            h = c(n, "background-repeat", "value", r),
            p = n.width(),
            f = n.height(),
            v = 2 * n.padding(),
            g =
              p +
              ("inner" === c(n, "background-width-relative-to", "value", r)
                ? 0
                : v),
            y =
              f +
              ("inner" === c(n, "background-height-relative-to", "value", r)
                ? 0
                : v),
            m = n._private.rscratch,
            b = n.pstyle("background-clip").value,
            x = "node" === b,
            w = c(n, "background-image-opacity", "value", r) * i,
            E = t.width || t.cachedW,
            P = t.height || t.cachedH;
          (null != E && null != P) ||
            (document.body.appendChild(t),
            (E = t.cachedW = t.width || t.offsetWidth),
            (P = t.cachedH = t.height || t.offsetHeight),
            document.body.removeChild(t));
          var C = E,
            S = P;
          if (
            ("auto" !== c(n, "background-width", "value", r) &&
              (C =
                "%" === c(n, "background-width", "units", r)
                  ? c(n, "background-width", "pfValue", r) * g
                  : c(n, "background-width", "pfValue", r)),
            "auto" !== c(n, "background-height", "value", r) &&
              (S =
                "%" === c(n, "background-height", "units", r)
                  ? c(n, "background-height", "pfValue", r) * y
                  : c(n, "background-height", "pfValue", r)),
            0 !== C && 0 !== S)
          ) {
            if ("contain" === d) {
              var T = Math.min(g / C, y / S);
              (C *= T), (S *= T);
            } else if ("cover" === d) {
              var T = Math.max(g / C, y / S);
              (C *= T), (S *= T);
            }
            var D = s - g / 2;
            "%" === c(n, "background-position-x", "units", r)
              ? (D += (g - C) * c(n, "background-position-x", "pfValue", r))
              : (D += c(n, "background-position-x", "pfValue", r));
            var k = l - y / 2;
            "%" === c(n, "background-position-y", "units", r)
              ? (k += (y - S) * c(n, "background-position-y", "pfValue", r))
              : (k += c(n, "background-position-y", "pfValue", r)),
              m.pathCache && ((D -= s), (k -= l), (s = 0), (l = 0));
            var _ = e.globalAlpha;
            if (((e.globalAlpha = w), "no-repeat" === h))
              x &&
                (e.save(),
                m.pathCache
                  ? e.clip(m.pathCache)
                  : (a.nodeShapes[a.getNodeShape(n)].draw(e, s, l, g, y),
                    e.clip())),
                a.safeDrawImage(e, t, 0, 0, E, P, D, k, C, S),
                x && e.restore();
            else {
              var M = e.createPattern(t, h);
              (e.fillStyle = M),
                a.nodeShapes[a.getNodeShape(n)].draw(e, s, l, g, y),
                e.translate(D, k),
                e.fill(),
                e.translate(-D, -k);
            }
            e.globalAlpha = _;
          }
        }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n, r, i, a) {
        var a = a || 5;
        e.beginPath(),
          e.moveTo(t + a, n),
          e.lineTo(t + r - a, n),
          e.quadraticCurveTo(t + r, n, t + r, n + a),
          e.lineTo(t + r, n + i - a),
          e.quadraticCurveTo(t + r, n + i, t + r - a, n + i),
          e.lineTo(t + a, n + i),
          e.quadraticCurveTo(t, n + i, t, n + i - a),
          e.lineTo(t, n + a),
          e.quadraticCurveTo(t, n, t + a, n),
          e.closePath(),
          e.fill();
      }
      var i = n(1),
        a = n(2),
        o = {};
      (o.eleTextBiggerThanMin = function (e, t) {
        if (!t) {
          var n = e.cy().zoom(),
            r = this.getPixelRatio(),
            i = Math.ceil(a.log2(n * r));
          t = Math.pow(2, i);
        }
        return !(
          e.pstyle("font-size").pfValue * t <
          e.pstyle("min-zoomed-font-size").pfValue
        );
      }),
        (o.drawElementText = function (e, t, n) {
          var r = this;
          if (void 0 === n) {
            if (!r.eleTextBiggerThanMin(t)) return;
          } else if (!n) return;
          if (t.isNode()) {
            var i = t.pstyle("label");
            if (!i || !i.value) return;
            var a = t.pstyle("text-halign").strValue;
            t.pstyle("text-valign").strValue;
            switch (a) {
              case "left":
                e.textAlign = "right";
                break;
              case "right":
                e.textAlign = "left";
                break;
              default:
                e.textAlign = "center";
            }
            e.textBaseline = "bottom";
          } else {
            var i = t.pstyle("label"),
              o = t.pstyle("source-label"),
              s = t.pstyle("target-label");
            if (!((i && i.value) || (o && o.value) || (s && s.value))) return;
            (e.textAlign = "center"), (e.textBaseline = "bottom");
          }
          r.drawText(e, t),
            t.isEdge() &&
              (r.drawText(e, t, "source"), r.drawText(e, t, "target"));
        }),
        (o.drawNodeText = o.drawEdgeText = o.drawElementText),
        (o.getFontCache = function (e) {
          var t;
          this.fontCaches = this.fontCaches || [];
          for (var n = 0; n < this.fontCaches.length; n++)
            if (((t = this.fontCaches[n]), t.context === e)) return t;
          return (t = { context: e }), this.fontCaches.push(t), t;
        }),
        (o.setupTextStyle = function (e, t) {
          var n = t.effectiveOpacity(),
            r = t.pstyle("font-style").strValue,
            i = t.pstyle("font-size").pfValue + "px",
            a = t.pstyle("font-family").strValue,
            o = t.pstyle("font-weight").strValue,
            s = t.pstyle("text-opacity").value * t.pstyle("opacity").value * n,
            l = t.pstyle("text-outline-opacity").value * s,
            u = t.pstyle("color").value,
            c = t.pstyle("text-outline-color").value,
            d = t._private.fontKey,
            h = this.getFontCache(e);
          h.key !== d &&
            ((e.font = r + " " + o + " " + i + " " + a), (h.key = d)),
            (e.lineJoin = "round"),
            this.fillStyle(e, u[0], u[1], u[2], s),
            this.strokeStyle(e, c[0], c[1], c[2], l);
        }),
        (o.drawText = function (e, t, n) {
          var a = t._private,
            o = a.rscratch,
            s = t.effectiveOpacity();
          if (0 !== s && 0 !== t.pstyle("text-opacity").value) {
            var l = i.getPrefixedProperty(o, "labelX", n),
              u = i.getPrefixedProperty(o, "labelY", n),
              c = this.getLabelText(t, n);
            if (null != c && "" !== c && !isNaN(l) && !isNaN(u)) {
              this.setupTextStyle(e, t);
              var d = n ? n + "-" : "",
                h = i.getPrefixedProperty(o, "labelWidth", n),
                p = i.getPrefixedProperty(o, "labelHeight", n),
                f = i.getPrefixedProperty(o, "labelAngle", n),
                v = t.pstyle(d + "text-margin-x").pfValue,
                g = t.pstyle(d + "text-margin-y").pfValue,
                y = t.isEdge(),
                m = (t.isNode(), t.pstyle("text-halign").value),
                b = t.pstyle("text-valign").value;
              y && ((m = "center"), (b = "center")), (l += v), (u += g);
              var x,
                w = t.pstyle("text-rotation");
              if (
                0 !==
                (x =
                  "autorotate" === w.strValue
                    ? y
                      ? f
                      : 0
                    : "none" === w.strValue
                    ? 0
                    : w.pfValue)
              ) {
                var E = l,
                  P = u;
                e.translate(E, P), e.rotate(x), (l = 0), (u = 0);
              }
              switch (b) {
                case "top":
                  break;
                case "center":
                  u += p / 2;
                  break;
                case "bottom":
                  u += p;
              }
              var C = t.pstyle("text-background-opacity").value,
                S = t.pstyle("text-border-opacity").value,
                T = t.pstyle("text-border-width").pfValue,
                D = t.pstyle("text-background-padding").pfValue;
              if (C > 0 || (T > 0 && S > 0)) {
                var k = l - D;
                switch (m) {
                  case "left":
                    k -= h;
                    break;
                  case "center":
                    k -= h / 2;
                }
                var _ = u - p - D,
                  M = h + 2 * D,
                  I = p + 2 * D;
                if (C > 0) {
                  var N = e.fillStyle,
                    B = t.pstyle("text-background-color").value;
                  e.fillStyle =
                    "rgba(" +
                    B[0] +
                    "," +
                    B[1] +
                    "," +
                    B[2] +
                    "," +
                    C * s +
                    ")";
                  "roundrectangle" == t.pstyle("text-background-shape").strValue
                    ? r(e, k, _, M, I, 2)
                    : e.fillRect(k, _, M, I),
                    (e.fillStyle = N);
                }
                if (T > 0 && S > 0) {
                  var z = e.strokeStyle,
                    L = e.lineWidth,
                    A = t.pstyle("text-border-color").value,
                    O = t.pstyle("text-border-style").value;
                  if (
                    ((e.strokeStyle =
                      "rgba(" +
                      A[0] +
                      "," +
                      A[1] +
                      "," +
                      A[2] +
                      "," +
                      S * s +
                      ")"),
                    (e.lineWidth = T),
                    e.setLineDash)
                  )
                    switch (O) {
                      case "dotted":
                        e.setLineDash([1, 1]);
                        break;
                      case "dashed":
                        e.setLineDash([4, 2]);
                        break;
                      case "double":
                        (e.lineWidth = T / 4), e.setLineDash([]);
                        break;
                      case "solid":
                        e.setLineDash([]);
                    }
                  if ((e.strokeRect(k, _, M, I), "double" === O)) {
                    var R = T / 2;
                    e.strokeRect(k + R, _ + R, M - 2 * R, I - 2 * R);
                  }
                  e.setLineDash && e.setLineDash([]),
                    (e.lineWidth = L),
                    (e.strokeStyle = z);
                }
              }
              var V = 2 * t.pstyle("text-outline-width").pfValue;
              if (
                (V > 0 && (e.lineWidth = V),
                "wrap" === t.pstyle("text-wrap").value)
              ) {
                var q = i.getPrefixedProperty(o, "labelWrapCachedLines", n),
                  F = p / q.length;
                switch (b) {
                  case "top":
                    u -= (q.length - 1) * F;
                    break;
                  case "center":
                  case "bottom":
                    u -= (q.length - 1) * F;
                }
                for (var j = 0; j < q.length; j++)
                  V > 0 && e.strokeText(q[j], l, u),
                    e.fillText(q[j], l, u),
                    (u += F);
              } else V > 0 && e.strokeText(c, l, u), e.fillText(c, l, u);
              0 !== x && (e.rotate(-x), e.translate(-E, -P));
            }
          }
        }),
        (e.exports = o);
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = {};
      (i.drawNode = function (e, t, n, i) {
        var a = this,
          o = void 0,
          s = void 0,
          l = t._private,
          u = l.rscratch,
          c = t.position();
        if (r.number(c.x) && r.number(c.y) && t.visible()) {
          var d = t.effectiveOpacity(),
            h = a.usePaths(),
            p = void 0,
            f = !1,
            v = t.padding();
          (o = t.width() + 2 * v), (s = t.height() + 2 * v);
          var g = void 0;
          n && ((g = n), e.translate(-g.x1, -g.y1));
          for (
            var y = t.pstyle("background-image"),
              m = y.value,
              b = new Array(m.length),
              x = new Array(m.length),
              w = 0,
              E = 0;
            E < m.length;
            E++
          ) {
            var P = m[E];
            if ((b[E] = null != P && "none" !== P)) {
              var C = t
                .cy()
                .style()
                .getIndexedStyle(t, "background-image-crossorigin", "value", E);
              w++,
                (x[E] = a.getCachedImage(P, C, function () {
                  t.emitAndNotify("background");
                }));
            }
          }
          var S = t.pstyle("background-blacken").value,
            T = t.pstyle("border-width").pfValue,
            D = t.pstyle("background-color").value,
            k = t.pstyle("background-opacity").value * d,
            _ = t.pstyle("border-color").value,
            M = t.pstyle("border-style").value,
            I = t.pstyle("border-opacity").value * d;
          e.lineJoin = "miter";
          var N = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : k;
              a.fillStyle(e, D[0], D[1], D[2], t);
            },
            B = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : I;
              a.strokeStyle(e, _[0], _[1], _[2], t);
            },
            z = t.pstyle("shape").strValue,
            L = t.pstyle("shape-polygon-points").pfValue;
          if (h) {
            var A =
              z +
              "$" +
              o +
              "$" +
              s +
              ("polygon" === z ? "$" + L.join("$") : "");
            e.translate(c.x, c.y),
              u.pathCacheKey === A
                ? ((p = u.pathCache), (f = !0))
                : ((p = new Path2D()), (u.pathCacheKey = A), (u.pathCache = p));
          }
          var O = function () {
              if (!f) {
                var n = c;
                h && (n = { x: 0, y: 0 }),
                  a.nodeShapes[a.getNodeShape(t)].draw(p || e, n.x, n.y, o, s);
              }
              h ? e.fill(p) : e.fill();
            },
            R = function () {
              for (
                var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : d,
                  r = l.backgrounding,
                  i = 0,
                  o = 0;
                o < x.length;
                o++
              )
                b[o] &&
                  x[o].complete &&
                  !x[o].error &&
                  (i++, a.drawInscribedImage(e, x[o], t, o, n));
              (l.backgrounding = !(i === w)),
                r !== l.backgrounding && t.updateStyle(!1);
            },
            V = function () {
              var n =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : d;
              a.hasPie(t) &&
                (a.drawPie(e, t, r),
                n &&
                  (h ||
                    a.nodeShapes[a.getNodeShape(t)].draw(e, c.x, c.y, o, s)));
            },
            q = function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : d,
                n = (S > 0 ? S : -S) * t,
                r = S > 0 ? 0 : 255;
              0 !== S && (a.fillStyle(e, r, r, r, n), h ? e.fill(p) : e.fill());
            },
            F = function () {
              if (T > 0) {
                if (((e.lineWidth = T), (e.lineCap = "butt"), e.setLineDash))
                  switch (M) {
                    case "dotted":
                      e.setLineDash([1, 1]);
                      break;
                    case "dashed":
                      e.setLineDash([4, 2]);
                      break;
                    case "solid":
                    case "double":
                      e.setLineDash([]);
                  }
                if ((h ? e.stroke(p) : e.stroke(), "double" === M)) {
                  e.lineWidth = T / 3;
                  var t = e.globalCompositeOperation;
                  (e.globalCompositeOperation = "destination-out"),
                    h ? e.stroke(p) : e.stroke(),
                    (e.globalCompositeOperation = t);
                }
                e.setLineDash && e.setLineDash([]);
              }
            };
          if ("yes" === t.pstyle("ghost").value) {
            var j = t.pstyle("ghost-offset-x").pfValue,
              X = t.pstyle("ghost-offset-y").pfValue,
              Y = t.pstyle("ghost-opacity").value,
              W = Y * d;
            e.translate(j, X),
              N(Y * k),
              O(),
              R(W),
              V(0 !== S || 0 !== T),
              q(W),
              B(Y * I),
              F(),
              e.translate(-j, -X);
          }
          N(),
            O(),
            R(),
            V(0 !== S || 0 !== T),
            q(),
            B(),
            F(),
            h && e.translate(-c.x, -c.y),
            (function () {
              a.drawElementText(e, t, i);
            })(),
            (function () {
              var n = t.pstyle("overlay-padding").pfValue,
                r = t.pstyle("overlay-opacity").value,
                i = t.pstyle("overlay-color").value;
              r > 0 &&
                (a.fillStyle(e, i[0], i[1], i[2], r),
                a.nodeShapes.roundrectangle.draw(
                  e,
                  c.x,
                  c.y,
                  o + 2 * n,
                  s + 2 * n
                ),
                e.fill());
            })(),
            n && e.translate(g.x1, g.y1);
        }
      }),
        (i.hasPie = function (e) {
          return (e = e[0]), e._private.hasPie;
        }),
        (i.drawPie = function (e, t, n, r) {
          (t = t[0]), (r = r || t.position());
          var i = t.cy().style(),
            a = t.pstyle("pie-size"),
            o = r.x,
            s = r.y,
            l = t.width(),
            u = t.height(),
            c = Math.min(l, u) / 2,
            d = 0;
          this.usePaths() && ((o = 0), (s = 0)),
            "%" === a.units
              ? (c *= a.pfValue)
              : void 0 !== a.pfValue && (c = a.pfValue / 2);
          for (var h = 1; h <= i.pieBackgroundN; h++) {
            var p = t.pstyle("pie-" + h + "-background-size").value,
              f = t.pstyle("pie-" + h + "-background-color").value,
              v = t.pstyle("pie-" + h + "-background-opacity").value * n,
              g = p / 100;
            g + d > 1 && (g = 1 - d);
            var y = 1.5 * Math.PI + 2 * Math.PI * d,
              m = 2 * Math.PI * g,
              b = y + m;
            0 === p ||
              d >= 1 ||
              d + g > 1 ||
              (e.beginPath(),
              e.moveTo(o, s),
              e.arc(o, s, c, y, b),
              e.closePath(),
              this.fillStyle(e, f[0], f[1], f[2], v),
              e.fill(),
              (d += g));
          }
        }),
        (e.exports = i);
    },
    function (e, t, n) {
      "use strict";
      var r = {},
        i = n(1);
      (r.getPixelRatio = function () {
        var e = this.data.contexts[0];
        if (null != this.forcedPixelRatio) return this.forcedPixelRatio;
        var t =
          e.backingStorePixelRatio ||
          e.webkitBackingStorePixelRatio ||
          e.mozBackingStorePixelRatio ||
          e.msBackingStorePixelRatio ||
          e.oBackingStorePixelRatio ||
          e.backingStorePixelRatio ||
          1;
        return (window.devicePixelRatio || 1) / t;
      }),
        (r.paintCache = function (e) {
          for (
            var t,
              n = (this.paintCaches = this.paintCaches || []),
              r = !0,
              i = 0;
            i < n.length;
            i++
          )
            if (((t = n[i]), t.context === e)) {
              r = !1;
              break;
            }
          return r && ((t = { context: e }), n.push(t)), t;
        }),
        (r.fillStyle = function (e, t, n, r, i) {
          e.fillStyle = "rgba(" + t + "," + n + "," + r + "," + i + ")";
        }),
        (r.strokeStyle = function (e, t, n, r, i) {
          e.strokeStyle = "rgba(" + t + "," + n + "," + r + "," + i + ")";
        }),
        (r.matchCanvasSize = function (e) {
          var t = this,
            n = t.data,
            r = t.findContainerClientCoords(),
            i = r[2],
            a = r[3],
            o = t.getPixelRatio(),
            s = t.motionBlurPxRatio;
          (e !== t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_NODE] &&
            e !== t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_DRAG]) ||
            (o = s);
          var l,
            u = i * o,
            c = a * o;
          if (u !== t.canvasWidth || c !== t.canvasHeight) {
            t.fontCaches = null;
            var d = n.canvasContainer;
            (d.style.width = i + "px"), (d.style.height = a + "px");
            for (var h = 0; h < t.CANVAS_LAYERS; h++)
              (l = n.canvases[h]),
                (l.width = u),
                (l.height = c),
                (l.style.width = i + "px"),
                (l.style.height = a + "px");
            for (var h = 0; h < t.BUFFER_COUNT; h++)
              (l = n.bufferCanvases[h]),
                (l.width = u),
                (l.height = c),
                (l.style.width = i + "px"),
                (l.style.height = a + "px");
            (t.textureMult = 1),
              o <= 1 &&
                ((l = n.bufferCanvases[t.TEXTURE_BUFFER]),
                (t.textureMult = 2),
                (l.width = u * t.textureMult),
                (l.height = c * t.textureMult)),
              (t.canvasWidth = u),
              (t.canvasHeight = c);
          }
        }),
        (r.renderTo = function (e, t, n, r) {
          this.render({
            forcedContext: e,
            forcedZoom: t,
            forcedPan: n,
            drawAllLayers: !0,
            forcedPxRatio: r,
          });
        }),
        (r.render = function (e) {
          function t(e, t, n, r, i) {
            var a = e.globalCompositeOperation;
            (e.globalCompositeOperation = "destination-out"),
              u.fillStyle(e, 255, 255, 255, u.motionBlurTransparency),
              e.fillRect(t, n, r, i),
              (e.globalCompositeOperation = a);
          }
          function n(e, n) {
            var i, o, c, d;
            u.clearingMotionBlur ||
            (e !== h.bufferContexts[u.MOTIONBLUR_BUFFER_NODE] &&
              e !== h.bufferContexts[u.MOTIONBLUR_BUFFER_DRAG])
              ? ((i = S), (o = P), (c = u.canvasWidth), (d = u.canvasHeight))
              : ((i = { x: C.x * g, y: C.y * g }),
                (o = E * g),
                (c = u.canvasWidth * g),
                (d = u.canvasHeight * g)),
              e.setTransform(1, 0, 0, 1, 0, 0),
              "motionBlur" === n
                ? t(e, 0, 0, c, d)
                : r || (void 0 !== n && !n) || e.clearRect(0, 0, c, d),
              a || (e.translate(i.x, i.y), e.scale(o, o)),
              l && e.translate(l.x, l.y),
              s && e.scale(s, s);
          }
          e = e || i.staticEmptyObject();
          var r = e.forcedContext,
            a = e.drawAllLayers,
            o = e.drawOnlyNodeLayer,
            s = e.forcedZoom,
            l = e.forcedPan,
            u = this,
            c =
              void 0 === e.forcedPxRatio
                ? this.getPixelRatio()
                : e.forcedPxRatio,
            d = u.cy,
            h = u.data,
            p = h.canvasNeedsRedraw,
            f =
              u.textureOnViewport &&
              !r &&
              (u.pinching ||
                u.hoverData.dragging ||
                u.swipePanning ||
                u.data.wheelZooming),
            v = void 0 !== e.motionBlur ? e.motionBlur : u.motionBlur,
            g = u.motionBlurPxRatio,
            y = d.hasCompoundNodes(),
            m = u.hoverData.draggingEles,
            b = !(!u.hoverData.selecting && !u.touchData.selecting);
          v = v && !r && u.motionBlurEnabled && !b;
          var x = v;
          r ||
            (u.prevPxRatio !== c &&
              (u.invalidateContainerClientCoordsCache(),
              u.matchCanvasSize(u.container),
              u.redrawHint("eles", !0),
              u.redrawHint("drag", !0)),
            (u.prevPxRatio = c)),
            !r && u.motionBlurTimeout && clearTimeout(u.motionBlurTimeout),
            v &&
              (null == u.mbFrames && (u.mbFrames = 0),
              u.mbFrames++,
              u.mbFrames < 3 && (x = !1),
              u.mbFrames > u.minMbLowQualFrames &&
                (u.motionBlurPxRatio = u.mbPxRBlurry)),
            u.clearingMotionBlur && (u.motionBlurPxRatio = 1),
            u.textureDrawLastFrame &&
              !f &&
              ((p[u.NODE] = !0), (p[u.SELECT_BOX] = !0));
          var w = d.style()._private.coreStyle,
            E = d.zoom(),
            P = void 0 !== s ? s : E,
            C = d.pan(),
            S = { x: C.x, y: C.y },
            T = { zoom: E, pan: { x: C.x, y: C.y } },
            D = u.prevViewport;
          void 0 === D ||
            T.zoom !== D.zoom ||
            T.pan.x !== D.pan.x ||
            T.pan.y !== D.pan.y ||
            (m && !y) ||
            (u.motionBlurPxRatio = 1),
            l && (S = l),
            (P *= c),
            (S.x *= c),
            (S.y *= c);
          var k = u.getCachedZSortedEles();
          if ((f || (u.textureDrawLastFrame = !1), f)) {
            u.textureDrawLastFrame = !0;
            if (!u.textureCache) {
              (u.textureCache = {}),
                (u.textureCache.bb = d.mutableElements().boundingBox()),
                (u.textureCache.texture =
                  u.data.bufferCanvases[u.TEXTURE_BUFFER]);
              var _ = u.data.bufferContexts[u.TEXTURE_BUFFER];
              _.setTransform(1, 0, 0, 1, 0, 0),
                _.clearRect(
                  0,
                  0,
                  u.canvasWidth * u.textureMult,
                  u.canvasHeight * u.textureMult
                ),
                u.render({
                  forcedContext: _,
                  drawOnlyNodeLayer: !0,
                  forcedPxRatio: c * u.textureMult,
                });
              var T = (u.textureCache.viewport = {
                zoom: d.zoom(),
                pan: d.pan(),
                width: u.canvasWidth,
                height: u.canvasHeight,
              });
              T.mpan = { x: (0 - T.pan.x) / T.zoom, y: (0 - T.pan.y) / T.zoom };
            }
            (p[u.DRAG] = !1), (p[u.NODE] = !1);
            var M = h.contexts[u.NODE],
              I = u.textureCache.texture,
              T = u.textureCache.viewport;
            u.textureCache.bb,
              M.setTransform(1, 0, 0, 1, 0, 0),
              v
                ? t(M, 0, 0, T.width, T.height)
                : M.clearRect(0, 0, T.width, T.height);
            var N = w["outside-texture-bg-color"].value,
              B = w["outside-texture-bg-opacity"].value;
            u.fillStyle(M, N[0], N[1], N[2], B),
              M.fillRect(0, 0, T.width, T.height);
            var E = d.zoom();
            n(M, !1),
              M.clearRect(
                T.mpan.x,
                T.mpan.y,
                T.width / T.zoom / c,
                T.height / T.zoom / c
              ),
              M.drawImage(
                I,
                T.mpan.x,
                T.mpan.y,
                T.width / T.zoom / c,
                T.height / T.zoom / c
              );
          } else u.textureOnViewport && !r && (u.textureCache = null);
          var z = d.extent(),
            L =
              u.pinching ||
              u.hoverData.dragging ||
              u.swipePanning ||
              u.data.wheelZooming ||
              u.hoverData.draggingEles,
            A = u.hideEdgesOnViewport && L,
            O = [];
          if (
            ((O[u.NODE] =
              (!p[u.NODE] && v && !u.clearedForMotionBlur[u.NODE]) ||
              u.clearingMotionBlur),
            O[u.NODE] && (u.clearedForMotionBlur[u.NODE] = !0),
            (O[u.DRAG] =
              (!p[u.DRAG] && v && !u.clearedForMotionBlur[u.DRAG]) ||
              u.clearingMotionBlur),
            O[u.DRAG] && (u.clearedForMotionBlur[u.DRAG] = !0),
            p[u.NODE] || a || o || O[u.NODE])
          ) {
            var R = v && !O[u.NODE] && 1 !== g,
              M =
                r ||
                (R
                  ? u.data.bufferContexts[u.MOTIONBLUR_BUFFER_NODE]
                  : h.contexts[u.NODE]);
            n(M, v && !R ? "motionBlur" : void 0),
              A
                ? u.drawCachedNodes(M, k.nondrag, c, z)
                : u.drawLayeredElements(M, k.nondrag, c, z),
              u.debug && u.drawDebugPoints(M, k.nondrag),
              a || v || (p[u.NODE] = !1);
          }
          if (!o && (p[u.DRAG] || a || O[u.DRAG])) {
            var R = v && !O[u.DRAG] && 1 !== g,
              M =
                r ||
                (R
                  ? u.data.bufferContexts[u.MOTIONBLUR_BUFFER_DRAG]
                  : h.contexts[u.DRAG]);
            n(M, v && !R ? "motionBlur" : void 0),
              A
                ? u.drawCachedNodes(M, k.drag, c, z)
                : u.drawCachedElements(M, k.drag, c, z),
              u.debug && u.drawDebugPoints(M, k.drag),
              a || v || (p[u.DRAG] = !1);
          }
          if (u.showFps || (!o && p[u.SELECT_BOX] && !a)) {
            var M = r || h.contexts[u.SELECT_BOX];
            if (
              (n(M),
              1 == u.selection[4] &&
                (u.hoverData.selecting || u.touchData.selecting))
            ) {
              var E = u.cy.zoom(),
                V = w["selection-box-border-width"].value / E;
              (M.lineWidth = V),
                (M.fillStyle =
                  "rgba(" +
                  w["selection-box-color"].value[0] +
                  "," +
                  w["selection-box-color"].value[1] +
                  "," +
                  w["selection-box-color"].value[2] +
                  "," +
                  w["selection-box-opacity"].value +
                  ")"),
                M.fillRect(
                  u.selection[0],
                  u.selection[1],
                  u.selection[2] - u.selection[0],
                  u.selection[3] - u.selection[1]
                ),
                V > 0 &&
                  ((M.strokeStyle =
                    "rgba(" +
                    w["selection-box-border-color"].value[0] +
                    "," +
                    w["selection-box-border-color"].value[1] +
                    "," +
                    w["selection-box-border-color"].value[2] +
                    "," +
                    w["selection-box-opacity"].value +
                    ")"),
                  M.strokeRect(
                    u.selection[0],
                    u.selection[1],
                    u.selection[2] - u.selection[0],
                    u.selection[3] - u.selection[1]
                  ));
            }
            if (h.bgActivePosistion && !u.hoverData.selecting) {
              var E = u.cy.zoom(),
                q = h.bgActivePosistion;
              (M.fillStyle =
                "rgba(" +
                w["active-bg-color"].value[0] +
                "," +
                w["active-bg-color"].value[1] +
                "," +
                w["active-bg-color"].value[2] +
                "," +
                w["active-bg-opacity"].value +
                ")"),
                M.beginPath(),
                M.arc(
                  q.x,
                  q.y,
                  w["active-bg-size"].pfValue / E,
                  0,
                  2 * Math.PI
                ),
                M.fill();
            }
            var F = u.lastRedrawTime;
            if (u.showFps && F) {
              F = Math.round(F);
              var j = Math.round(1e3 / F);
              M.setTransform(1, 0, 0, 1, 0, 0),
                (M.fillStyle = "rgba(255, 0, 0, 0.75)"),
                (M.strokeStyle = "rgba(255, 0, 0, 0.75)"),
                (M.lineWidth = 1),
                M.fillText("1 frame = " + F + " ms = " + j + " fps", 0, 20);
              M.strokeRect(0, 30, 250, 20),
                M.fillRect(0, 30, 250 * Math.min(j / 60, 1), 20);
            }
            a || (p[u.SELECT_BOX] = !1);
          }
          if (v && 1 !== g) {
            var X = h.contexts[u.NODE],
              Y = u.data.bufferCanvases[u.MOTIONBLUR_BUFFER_NODE],
              W = h.contexts[u.DRAG],
              H = u.data.bufferCanvases[u.MOTIONBLUR_BUFFER_DRAG],
              Z = function (e, n, r) {
                e.setTransform(1, 0, 0, 1, 0, 0),
                  r || !x
                    ? e.clearRect(0, 0, u.canvasWidth, u.canvasHeight)
                    : t(e, 0, 0, u.canvasWidth, u.canvasHeight);
                var i = g;
                e.drawImage(
                  n,
                  0,
                  0,
                  u.canvasWidth * i,
                  u.canvasHeight * i,
                  0,
                  0,
                  u.canvasWidth,
                  u.canvasHeight
                );
              };
            (p[u.NODE] || O[u.NODE]) && (Z(X, Y, O[u.NODE]), (p[u.NODE] = !1)),
              (p[u.DRAG] || O[u.DRAG]) &&
                (Z(W, H, O[u.DRAG]), (p[u.DRAG] = !1));
          }
          (u.prevViewport = T),
            u.clearingMotionBlur &&
              ((u.clearingMotionBlur = !1),
              (u.motionBlurCleared = !0),
              (u.motionBlur = !0)),
            v &&
              (u.motionBlurTimeout = setTimeout(function () {
                (u.motionBlurTimeout = null),
                  (u.clearedForMotionBlur[u.NODE] = !1),
                  (u.clearedForMotionBlur[u.DRAG] = !1),
                  (u.motionBlur = !1),
                  (u.clearingMotionBlur = !f),
                  (u.mbFrames = 0),
                  (p[u.NODE] = !0),
                  (p[u.DRAG] = !0),
                  u.redraw();
              }, 100)),
            r || d.emit("render");
        }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      var r = n(2),
        i = {};
      (i.drawPolygonPath = function (e, t, n, r, i, a) {
        var o = r / 2,
          s = i / 2;
        e.beginPath && e.beginPath(), e.moveTo(t + o * a[0], n + s * a[1]);
        for (var l = 1; l < a.length / 2; l++)
          e.lineTo(t + o * a[2 * l], n + s * a[2 * l + 1]);
        e.closePath();
      }),
        (i.drawRoundRectanglePath = function (e, t, n, i, a) {
          var o = i / 2,
            s = a / 2,
            l = r.getRoundRectangleRadius(i, a);
          e.beginPath && e.beginPath(),
            e.moveTo(t, n - s),
            e.arcTo(t + o, n - s, t + o, n, l),
            e.arcTo(t + o, n + s, t, n + s, l),
            e.arcTo(t - o, n + s, t - o, n, l),
            e.arcTo(t - o, n - s, t, n - s, l),
            e.lineTo(t, n - s),
            e.closePath();
        }),
        (i.drawBottomRoundRectanglePath = function (e, t, n, i, a) {
          var o = i / 2,
            s = a / 2,
            l = r.getRoundRectangleRadius(i, a);
          e.beginPath && e.beginPath(),
            e.moveTo(t, n - s),
            e.lineTo(t + o, n - s),
            e.lineTo(t + o, n),
            e.arcTo(t + o, n + s, t, n + s, l),
            e.arcTo(t - o, n + s, t - o, n, l),
            e.lineTo(t - o, n - s),
            e.lineTo(t, n - s),
            e.closePath();
        }),
        (i.drawCutRectanglePath = function (e, t, n, i, a) {
          var o = i / 2,
            s = a / 2,
            l = r.getCutRectangleCornerLength();
          e.beginPath && e.beginPath(),
            e.moveTo(t - o + l, n - s),
            e.lineTo(t + o - l, n - s),
            e.lineTo(t + o, n - s + l),
            e.lineTo(t + o, n + s - l),
            e.lineTo(t + o - l, n + s),
            e.lineTo(t - o + l, n + s),
            e.lineTo(t - o, n + s - l),
            e.lineTo(t - o, n - s + l),
            e.closePath();
        }),
        (i.drawBarrelPath = function (e, t, n, i, a) {
          var o = i / 2,
            s = a / 2,
            l = t - o,
            u = t + o,
            c = n - s,
            d = n + s,
            h = r.getBarrelCurveConstants(i, a),
            p = h.widthOffset,
            f = h.heightOffset,
            v = h.ctrlPtOffsetPct * p;
          e.beginPath && e.beginPath(),
            e.moveTo(l, c + f),
            e.lineTo(l, d - f),
            e.quadraticCurveTo(l + v, d, l + p, d),
            e.lineTo(u - p, d),
            e.quadraticCurveTo(u - v, d, u, d - f),
            e.lineTo(u, c + f),
            e.quadraticCurveTo(u - v, c, u - p, c),
            e.lineTo(l + p, c),
            e.quadraticCurveTo(l + v, c, l, c + f),
            e.closePath();
        });
      for (
        var a = Math.sin(0),
          o = Math.cos(0),
          s = {},
          l = {},
          u = Math.PI / 40,
          c = 0 * Math.PI;
        c < 2 * Math.PI;
        c += u
      )
        (s[c] = Math.sin(c)), (l[c] = Math.cos(c));
      (i.drawEllipsePath = function (e, t, n, r, i) {
        if ((e.beginPath && e.beginPath(), e.ellipse))
          e.ellipse(t, n, r / 2, i / 2, 0, 0, 2 * Math.PI);
        else
          for (
            var c, d, h = r / 2, p = i / 2, f = 0 * Math.PI;
            f < 2 * Math.PI;
            f += u
          )
            (c = t - h * s[f] * a + h * l[f] * o),
              (d = n + p * l[f] * a + p * s[f] * o),
              0 === f ? e.moveTo(c, d) : e.lineTo(c, d);
        e.closePath();
      }),
        (e.exports = i);
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        for (
          var n = atob(e),
            r = new ArrayBuffer(n.length),
            i = new Uint8Array(r),
            a = 0;
          a < n.length;
          a++
        )
          i[a] = n.charCodeAt(a);
        return new Blob([r], { type: t });
      }
      function i(e) {
        var t = e.indexOf(",");
        return e.substr(t + 1);
      }
      function a(e, t, n) {
        var a = t.toDataURL(n, e.quality);
        switch (e.output) {
          case "blob":
            return r(i(a), n);
          case "base64":
            return i(a);
          case "base64uri":
          default:
            return a;
        }
      }
      var o = n(0),
        s = {};
      (s.createBuffer = function (e, t) {
        var n = document.createElement("canvas");
        return (n.width = e), (n.height = t), [n, n.getContext("2d")];
      }),
        (s.bufferCanvasImage = function (e) {
          var t = this.cy,
            n = t.mutableElements(),
            r = n.boundingBox(),
            i = this.findContainerClientCoords(),
            a = e.full ? Math.ceil(r.w) : i[2],
            s = e.full ? Math.ceil(r.h) : i[3],
            l = o.number(e.maxWidth) || o.number(e.maxHeight),
            u = this.getPixelRatio(),
            c = 1;
          if (void 0 !== e.scale) (a *= e.scale), (s *= e.scale), (c = e.scale);
          else if (l) {
            var d = 1 / 0,
              h = 1 / 0;
            o.number(e.maxWidth) && (d = (c * e.maxWidth) / a),
              o.number(e.maxHeight) && (h = (c * e.maxHeight) / s),
              (c = Math.min(d, h)),
              (a *= c),
              (s *= c);
          }
          l || ((a *= u), (s *= u), (c *= u));
          var p = document.createElement("canvas");
          (p.width = a),
            (p.height = s),
            (p.style.width = a + "px"),
            (p.style.height = s + "px");
          var f = p.getContext("2d");
          if (a > 0 && s > 0) {
            f.clearRect(0, 0, a, s),
              (f.globalCompositeOperation = "source-over");
            var v = this.getCachedZSortedEles();
            if (e.full)
              f.translate(-r.x1 * c, -r.y1 * c),
                f.scale(c, c),
                this.drawElements(f, v),
                f.scale(1 / c, 1 / c),
                f.translate(r.x1 * c, r.y1 * c);
            else {
              var g = t.pan(),
                y = { x: g.x * c, y: g.y * c };
              (c *= t.zoom()),
                f.translate(y.x, y.y),
                f.scale(c, c),
                this.drawElements(f, v),
                f.scale(1 / c, 1 / c),
                f.translate(-y.x, -y.y);
            }
            e.bg &&
              ((f.globalCompositeOperation = "destination-over"),
              (f.fillStyle = e.bg),
              f.rect(0, 0, a, s),
              f.fill());
          }
          return p;
        }),
        (s.png = function (e) {
          return a(e, this.bufferCanvasImage(e), "image/png");
        }),
        (s.jpg = function (e) {
          return a(e, this.bufferCanvasImage(e), "image/jpeg");
        }),
        (e.exports = s);
    },
    function (e, t, n) {
      "use strict";
      var r = {};
      (r.nodeShapeImpl = function (e, t, n, r, i, a, o) {
        switch (e) {
          case "ellipse":
            return this.drawEllipsePath(t, n, r, i, a);
          case "polygon":
            return this.drawPolygonPath(t, n, r, i, a, o);
          case "roundrectangle":
            return this.drawRoundRectanglePath(t, n, r, i, a);
          case "cutrectangle":
            return this.drawCutRectanglePath(t, n, r, i, a);
          case "bottomroundrectangle":
            return this.drawBottomRoundRectanglePath(t, n, r, i, a);
          case "barrel":
            return this.drawBarrelPath(t, n, r, i, a);
        }
      }),
        (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(1),
        a = n(18),
        o = function e() {
          if (!(this instanceof e)) return new e();
          this.length = 0;
        },
        s = o.prototype;
      (s.instanceString = function () {
        return "stylesheet";
      }),
        (s.selector = function (e) {
          return (this[this.length++] = { selector: e, properties: [] }), this;
        }),
        (s.css = function (e, t) {
          var n = this.length - 1;
          if (r.string(e)) this[n].properties.push({ name: e, value: t });
          else if (r.plainObject(e))
            for (var o = e, s = 0; s < a.properties.length; s++) {
              var l = a.properties[s],
                u = o[l.name];
              if (
                (void 0 === u && (u = o[i.dash2camel(l.name)]), void 0 !== u)
              ) {
                var c = l.name,
                  d = u;
                this[n].properties.push({ name: c, value: d });
              }
            }
          return this;
        }),
        (s.style = s.css),
        (s.generateStyle = function (e) {
          var t = new a(e);
          return this.appendToStyle(t);
        }),
        (s.appendToStyle = function (e) {
          for (var t = 0; t < this.length; t++) {
            var n = this[t],
              r = n.selector,
              i = n.properties;
            e.selector(r);
            for (var a = 0; a < i.length; a++) {
              var o = i[a];
              e.css(o.name, o.value);
            }
          }
          return e;
        }),
        (e.exports = o);
    },
    function (e, t, n) {
      "use strict";
      e.exports = "3.2.9";
    },
  ]);
});
