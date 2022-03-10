!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.cytoscapeSvg = e())
    : (t.cytoscapeSvg = e());
})(window, function () {
  return (function (t) {
    var e = {};
    function r(i) {
      if (e[i]) return e[i].exports;
      var n = (e[i] = { i: i, l: !1, exports: {} });
      return t[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function (t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
      }),
      (r.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (r.t = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (
          (r.r(i),
          Object.defineProperty(i, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var n in t)
            r.d(
              i,
              n,
              function (e) {
                return t[e];
              }.bind(null, n)
            );
        return i;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, "a", e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = ""),
      r((r.s = 0))
    );
  })([
    function (t, e, r) {
      "use strict";
      var i = r(1),
        n = function (t) {
          t && t("core", "svg", i.svg);
        };
      "undefined" != typeof cytoscape && n(cytoscape), (t.exports = n);
    },
    function (t, e, r) {
      "use strict";
      var i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              },
        n = r(2),
        o = {},
        s = {};
      (s.number = function (t) {
        return (
          null != t && (void 0 === t ? "undefined" : i(t)) === i(1) && !isNaN(t)
        );
      }),
        (o.bufferCanvasImage = function (t, e) {
          var r = e.renderer().usePaths;
          (e.renderer().usePaths = function () {
            return !1;
          }),
            e.elements().forEach(function (t) {
              (t._private.rscratch.pathCacheKey = null),
                (t._private.rscratch.pathCache = null);
            });
          var i = e.renderer(),
            o = e.mutableElements().boundingBox(),
            a = i.findContainerClientCoords(),
            l = t.full ? Math.ceil(o.w) : a[2],
            h = t.full ? Math.ceil(o.h) : a[3],
            c = s.number(t.maxWidth) || s.number(t.maxHeight),
            u = i.getPixelRatio(),
            p = 1;
          if (void 0 !== t.scale) (l *= t.scale), (h *= t.scale), (p = t.scale);
          else if (c) {
            var _ = 1 / 0,
              d = 1 / 0;
            s.number(t.maxWidth) && (_ = (p * t.maxWidth) / l),
              s.number(t.maxHeight) && (d = (p * t.maxHeight) / h),
              (l *= p = Math.min(_, d)),
              (h *= p);
          }
          c || ((l *= u), (h *= u), (p *= u));
          var f = null,
            g = (f = new n(l, h));
          if (l > 0 && h > 0) {
            f.clearRect(0, 0, l, h),
              t.bg &&
                ((f.globalCompositeOperation = "destination-over"),
                (f.fillStyle = t.bg),
                f.fillRect(0, 0, l, h)),
              (f.globalCompositeOperation = "source-over");
            var m = i.getCachedZSortedEles();
            if (t.full)
              f.translate(-o.x1 * p, -o.y1 * p),
                f.scale(p, p),
                i.drawElements(f, m),
                f.scale(1 / p, 1 / p),
                f.translate(o.x1 * p, o.y1 * p);
            else {
              var y = e.pan(),
                v = { x: y.x * p, y: y.y * p };
              (p *= e.zoom()),
                f.translate(v.x, v.y),
                f.scale(p, p),
                i.drawElements(f, m),
                f.scale(1 / p, 1 / p),
                f.translate(-v.x, -v.y);
            }
          }
          return (e.renderer().usePaths = r), g;
        }),
        (o.svg = function (t) {
          return o.bufferCanvasImage(t || {}, this).getSerializedSvg();
        }),
        (t.exports = o);
    },
    function (t, e, r) {
      !(function () {
        "use strict";
        var e, r, i, n, o;
        function s(t, e) {
          var r,
            i = Object.keys(e);
          for (r = 0; r < i.length; r++)
            t = t.replace(new RegExp("\\{" + i[r] + "\\}", "gi"), e[i[r]]);
          return t;
        }
        function a(t) {
          var e, r, i;
          if (!t)
            throw new Error(
              "cannot create a random attribute name for an undefined object"
            );
          (e = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"), (r = "");
          do {
            for (r = "", i = 0; i < 12; i++)
              r += e[Math.floor(Math.random() * e.length)];
          } while (t[r]);
          return r;
        }
        function l(t) {
          var e = {
            alphabetic: "alphabetic",
            hanging: "hanging",
            top: "text-before-edge",
            bottom: "text-after-edge",
            middle: "central",
          };
          return e[t] || e.alphabetic;
        }
        (o = (function (t, e) {
          var r,
            i,
            n,
            o = {};
          for (t = t.split(","), e = e || 10, r = 0; r < t.length; r += 2)
            (i = "&" + t[r + 1] + ";"),
              (n = parseInt(t[r], e)),
              (o[i] = "&#" + n + ";");
          return (o["\\xa0"] = "&#160;"), o;
        })(
          "50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",
          32
        )),
          (e = {
            strokeStyle: {
              svgAttr: "stroke",
              canvas: "#000000",
              svg: "none",
              apply: "stroke",
            },
            fillStyle: {
              svgAttr: "fill",
              canvas: "#000000",
              svg: null,
              apply: "fill",
            },
            lineCap: {
              svgAttr: "stroke-linecap",
              canvas: "butt",
              svg: "butt",
              apply: "stroke",
            },
            lineJoin: {
              svgAttr: "stroke-linejoin",
              canvas: "miter",
              svg: "miter",
              apply: "stroke",
            },
            miterLimit: {
              svgAttr: "stroke-miterlimit",
              canvas: 10,
              svg: 4,
              apply: "stroke",
            },
            lineWidth: {
              svgAttr: "stroke-width",
              canvas: 1,
              svg: 1,
              apply: "stroke",
            },
            globalAlpha: {
              svgAttr: "opacity",
              canvas: 1,
              svg: 1,
              apply: "fill stroke",
            },
            font: { canvas: "10px sans-serif" },
            shadowColor: { canvas: "#000000" },
            shadowOffsetX: { canvas: 0 },
            shadowOffsetY: { canvas: 0 },
            shadowBlur: { canvas: 0 },
            textAlign: { canvas: "start" },
            textBaseline: { canvas: "alphabetic" },
            lineDash: {
              svgAttr: "stroke-dasharray",
              canvas: [],
              svg: null,
              apply: "stroke",
            },
          }),
          ((i = function (t, e) {
            (this.__root = t), (this.__ctx = e);
          }).prototype.addColorStop = function (t, e) {
            var r,
              i = this.__ctx.__createElement("stop");
            i.setAttribute("offset", t),
              -1 !== e.indexOf("rgba")
                ? ((r =
                    /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi.exec(
                      e
                    )),
                  i.setAttribute(
                    "stop-color",
                    s("rgb({r},{g},{b})", { r: r[1], g: r[2], b: r[3] })
                  ),
                  i.setAttribute("stop-opacity", r[4]))
                : i.setAttribute("stop-color", e),
              this.__root.appendChild(i);
          }),
          (n = function (t, e) {
            (this.__root = t), (this.__ctx = e);
          }),
          ((r = function (t) {
            var e,
              i = { width: 500, height: 500, enableMirroring: !1 };
            if (
              (arguments.length > 1
                ? (((e = i).width = arguments[0]), (e.height = arguments[1]))
                : (e = t || i),
              !(this instanceof r))
            )
              return new r(e);
            (this.width = e.width || i.width),
              (this.height = e.height || i.height),
              (this.enableMirroring =
                void 0 !== e.enableMirroring
                  ? e.enableMirroring
                  : i.enableMirroring),
              (this.canvas = this),
              (this.__document = e.document || document),
              e.ctx
                ? (this.__ctx = e.ctx)
                : ((this.__canvas = this.__document.createElement("canvas")),
                  (this.__ctx = this.__canvas.getContext("2d"))),
              this.__setDefaultStyles(),
              (this.__stack = [this.__getStyleState()]),
              (this.__groupStack = []),
              (this.__root = this.__document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
              )),
              this.__root.setAttribute("version", 1.1),
              this.__root.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
              this.__root.setAttributeNS(
                "http://www.w3.org/2000/xmlns/",
                "xmlns:xlink",
                "http://www.w3.org/1999/xlink"
              ),
              this.__root.setAttribute("width", this.width),
              this.__root.setAttribute("height", this.height),
              (this.__ids = {}),
              (this.__defs = this.__document.createElementNS(
                "http://www.w3.org/2000/svg",
                "defs"
              )),
              this.__root.appendChild(this.__defs),
              (this.__currentElement = this.__document.createElementNS(
                "http://www.w3.org/2000/svg",
                "g"
              )),
              this.__root.appendChild(this.__currentElement);
          }).prototype.__createElement = function (t, e, r) {
            void 0 === e && (e = {});
            var i,
              n,
              o = this.__document.createElementNS(
                "http://www.w3.org/2000/svg",
                t
              ),
              s = Object.keys(e);
            for (
              r &&
                (o.setAttribute("fill", "none"),
                o.setAttribute("stroke", "none")),
                i = 0;
              i < s.length;
              i++
            )
              (n = s[i]), o.setAttribute(n, e[n]);
            return o;
          }),
          (r.prototype.__setDefaultStyles = function () {
            var t,
              r,
              i = Object.keys(e);
            for (t = 0; t < i.length; t++) this[(r = i[t])] = e[r].canvas;
          }),
          (r.prototype.__applyStyleState = function (t) {
            if (t) {
              var e,
                r,
                i = Object.keys(t);
              for (e = 0; e < i.length; e++) this[(r = i[e])] = t[r];
            }
          }),
          (r.prototype.__getStyleState = function () {
            var t,
              r,
              i = {},
              n = Object.keys(e);
            for (t = 0; t < n.length; t++) i[(r = n[t])] = this[r];
            return i;
          }),
          (r.prototype.__applyStyleToCurrentElement = function (t) {
            var r = this.__currentElement,
              o = this.__currentElementsToStyle;
            o &&
              (r.setAttribute(t, ""),
              (r = o.element),
              o.children.forEach(function (e) {
                e.setAttribute(t, "");
              }));
            var a,
              l,
              h,
              c,
              u,
              p = Object.keys(e);
            for (a = 0; a < p.length; a++)
              if (((l = e[p[a]]), (h = this[p[a]]), l.apply))
                if (h instanceof n) {
                  if (h.__ctx)
                    for (; h.__ctx.__defs.childNodes.length; )
                      (c = h.__ctx.__defs.childNodes[0].getAttribute("id")),
                        (this.__ids[c] = c),
                        this.__defs.appendChild(h.__ctx.__defs.childNodes[0]);
                  r.setAttribute(
                    l.apply,
                    s("url(#{id})", { id: h.__root.getAttribute("id") })
                  );
                } else if (h instanceof i)
                  r.setAttribute(
                    l.apply,
                    s("url(#{id})", { id: h.__root.getAttribute("id") })
                  );
                else if (-1 !== l.apply.indexOf(t) && l.svg !== h)
                  if (
                    ("stroke" !== l.svgAttr && "fill" !== l.svgAttr) ||
                    -1 === h.indexOf("rgba")
                  ) {
                    var _ = l.svgAttr;
                    if (
                      "globalAlpha" === p[a] &&
                      ((_ = t + "-" + l.svgAttr), r.getAttribute(_))
                    )
                      continue;
                    r.setAttribute(_, h);
                  } else {
                    (u =
                      /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi.exec(
                        h
                      )),
                      r.setAttribute(
                        l.svgAttr,
                        s("rgb({r},{g},{b})", { r: u[1], g: u[2], b: u[3] })
                      );
                    var d = u[4],
                      f = this.globalAlpha;
                    null != f && (d *= f),
                      r.setAttribute(l.svgAttr + "-opacity", d);
                  }
          }),
          (r.prototype.__closestGroupOrSvg = function (t) {
            return "g" === (t = t || this.__currentElement).nodeName ||
              "svg" === t.nodeName
              ? t
              : this.__closestGroupOrSvg(t.parentNode);
          }),
          (r.prototype.getSerializedSvg = function (t) {
            var e,
              r,
              i,
              n,
              s,
              a = new XMLSerializer().serializeToString(this.__root);
            if (
              (/xmlns="http:\/\/www\.w3\.org\/2000\/svg".+xmlns="http:\/\/www\.w3\.org\/2000\/svg/gi.test(
                a
              ) &&
                (a = a.replace(
                  'xmlns="http://www.w3.org/2000/svg',
                  'xmlns:xlink="http://www.w3.org/1999/xlink'
                )),
              t)
            )
              for (e = Object.keys(o), r = 0; r < e.length; r++)
                (i = e[r]),
                  (n = o[i]),
                  (s = new RegExp(i, "gi")).test(a) && (a = a.replace(s, n));
            return a;
          }),
          (r.prototype.getSvg = function () {
            return this.__root;
          }),
          (r.prototype.save = function () {
            var t = this.__createElement("g"),
              e = this.__closestGroupOrSvg();
            this.__groupStack.push(e),
              e.appendChild(t),
              (this.__currentElement = t),
              this.__stack.push(this.__getStyleState());
          }),
          (r.prototype.restore = function () {
            (this.__currentElement = this.__groupStack.pop()),
              (this.__currentElementsToStyle = null),
              this.__currentElement ||
                (this.__currentElement = this.__root.childNodes[1]);
            var t = this.__stack.pop();
            this.__applyStyleState(t);
          }),
          (r.prototype.__addTransform = function (t) {
            var e = this.__closestGroupOrSvg();
            if (e.childNodes.length > 0) {
              "path" === this.__currentElement.nodeName &&
                (this.__currentElementsToStyle ||
                  (this.__currentElementsToStyle = {
                    element: e,
                    children: [],
                  }),
                this.__currentElementsToStyle.children.push(
                  this.__currentElement
                ),
                this.__applyCurrentDefaultPath());
              var r = this.__createElement("g");
              e.appendChild(r), (this.__currentElement = r);
            }
            var i = this.__currentElement.getAttribute("transform");
            i ? (i += " ") : (i = ""),
              (i += t),
              this.__currentElement.setAttribute("transform", i);
          }),
          (r.prototype.scale = function (t, e) {
            void 0 === e && (e = t),
              this.__addTransform(s("scale({x},{y})", { x: t, y: e }));
          }),
          (r.prototype.rotate = function (t) {
            var e = (180 * t) / Math.PI;
            this.__addTransform(
              s("rotate({angle},{cx},{cy})", { angle: e, cx: 0, cy: 0 })
            );
          }),
          (r.prototype.translate = function (t, e) {
            this.__addTransform(s("translate({x},{y})", { x: t, y: e }));
          }),
          (r.prototype.transform = function (t, e, r, i, n, o) {
            this.__addTransform(
              s("matrix({a},{b},{c},{d},{e},{f})", {
                a: t,
                b: e,
                c: r,
                d: i,
                e: n,
                f: o,
              })
            );
          }),
          (r.prototype.beginPath = function () {
            var t;
            (this.__currentDefaultPath = ""),
              (this.__currentPosition = {}),
              (t = this.__createElement("path", {}, !0)),
              this.__closestGroupOrSvg().appendChild(t),
              (this.__currentElement = t);
          }),
          (r.prototype.__applyCurrentDefaultPath = function () {
            var t = this.__currentElement;
            "path" === t.nodeName
              ? t.setAttribute("d", this.__currentDefaultPath)
              : console.error(
                  "Attempted to apply path command to node",
                  t.nodeName
                );
          }),
          (r.prototype.__addPathCommand = function (t) {
            (this.__currentDefaultPath += " "),
              (this.__currentDefaultPath += t);
          }),
          (r.prototype.moveTo = function (t, e) {
            "path" !== this.__currentElement.nodeName && this.beginPath(),
              (this.__currentPosition = { x: t, y: e }),
              this.__addPathCommand(s("M {x} {y}", { x: t, y: e }));
          }),
          (r.prototype.closePath = function () {
            this.__currentDefaultPath && this.__addPathCommand("Z");
          }),
          (r.prototype.lineTo = function (t, e) {
            (this.__currentPosition = { x: t, y: e }),
              this.__currentDefaultPath.indexOf("M") > -1
                ? this.__addPathCommand(s("L {x} {y}", { x: t, y: e }))
                : this.__addPathCommand(s("M {x} {y}", { x: t, y: e }));
          }),
          (r.prototype.bezierCurveTo = function (t, e, r, i, n, o) {
            (this.__currentPosition = { x: n, y: o }),
              this.__addPathCommand(
                s("C {cp1x} {cp1y} {cp2x} {cp2y} {x} {y}", {
                  cp1x: t,
                  cp1y: e,
                  cp2x: r,
                  cp2y: i,
                  x: n,
                  y: o,
                })
              );
          }),
          (r.prototype.quadraticCurveTo = function (t, e, r, i) {
            (this.__currentPosition = { x: r, y: i }),
              this.__addPathCommand(
                s("Q {cpx} {cpy} {x} {y}", { cpx: t, cpy: e, x: r, y: i })
              );
          });
        var h = function (t) {
          var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]);
          return [t[0] / e, t[1] / e];
        };
        (r.prototype.arcTo = function (t, e, r, i, n) {
          var o = this.__currentPosition && this.__currentPosition.x,
            s = this.__currentPosition && this.__currentPosition.y;
          if (void 0 !== o && void 0 !== s) {
            if (n < 0)
              throw new Error(
                "IndexSizeError: The radius provided (" + n + ") is negative."
              );
            if ((o === t && s === e) || (t === r && e === i) || 0 === n)
              this.lineTo(t, e);
            else {
              var a = h([o - t, s - e]),
                l = h([r - t, i - e]);
              if (a[0] * l[1] != a[1] * l[0]) {
                var c = a[0] * l[0] + a[1] * l[1],
                  u = Math.acos(Math.abs(c)),
                  p = h([a[0] + l[0], a[1] + l[1]]),
                  _ = n / Math.sin(u / 2),
                  d = t + _ * p[0],
                  f = e + _ * p[1],
                  g = [-a[1], a[0]],
                  m = [l[1], -l[0]],
                  y = function (t) {
                    var e = t[0];
                    return t[1] >= 0 ? Math.acos(e) : -Math.acos(e);
                  },
                  v = y(g),
                  b = y(m);
                this.lineTo(d + g[0] * n, f + g[1] * n),
                  this.arc(d, f, n, v, b);
              } else this.lineTo(t, e);
            }
          }
        }),
          (r.prototype.stroke = function () {
            "path" === this.__currentElement.nodeName &&
              this.__currentElement.setAttribute(
                "paint-order",
                "fill stroke markers"
              ),
              this.__applyCurrentDefaultPath(),
              this.__applyStyleToCurrentElement("stroke");
          }),
          (r.prototype.fill = function () {
            "path" === this.__currentElement.nodeName &&
              this.__currentElement.setAttribute(
                "paint-order",
                "stroke fill markers"
              ),
              this.__applyCurrentDefaultPath(),
              this.__applyStyleToCurrentElement("fill");
          }),
          (r.prototype.rect = function (t, e, r, i) {
            "path" !== this.__currentElement.nodeName && this.beginPath(),
              this.moveTo(t, e),
              this.lineTo(t + r, e),
              this.lineTo(t + r, e + i),
              this.lineTo(t, e + i),
              this.lineTo(t, e),
              this.closePath();
          }),
          (r.prototype.fillRect = function (t, e, r, i) {
            var n;
            (n = this.__createElement(
              "rect",
              { x: t, y: e, width: r, height: i },
              !0
            )),
              this.__closestGroupOrSvg().appendChild(n),
              (this.__currentElement = n),
              this.__applyStyleToCurrentElement("fill");
          }),
          (r.prototype.strokeRect = function (t, e, r, i) {
            var n;
            (n = this.__createElement(
              "rect",
              { x: t, y: e, width: r, height: i },
              !0
            )),
              this.__closestGroupOrSvg().appendChild(n),
              (this.__currentElement = n),
              this.__applyStyleToCurrentElement("stroke");
          }),
          (r.prototype.__clearCanvas = function () {
            for (
              var t = this.__closestGroupOrSvg().getAttribute("transform"),
                e = this.__root.childNodes[1],
                r = e.childNodes,
                i = r.length - 1;
              i >= 0;
              i--
            )
              r[i] && e.removeChild(r[i]);
            (this.__currentElement = e),
              (this.__groupStack = []),
              t && this.__addTransform(t);
          }),
          (r.prototype.clearRect = function (t, e, r, i) {
            if (0 !== t || 0 !== e || r !== this.width || i !== this.height) {
              var n,
                o = this.__closestGroupOrSvg();
              (n = this.__createElement(
                "rect",
                { x: t, y: e, width: r, height: i, fill: "#FFFFFF" },
                !0
              )),
                o.appendChild(n);
            } else this.__clearCanvas();
          }),
          (r.prototype.createLinearGradient = function (t, e, r, n) {
            var o = this.__createElement(
              "linearGradient",
              {
                id: a(this.__ids),
                x1: t + "px",
                x2: r + "px",
                y1: e + "px",
                y2: n + "px",
                gradientUnits: "userSpaceOnUse",
              },
              !1
            );
            return this.__defs.appendChild(o), new i(o, this);
          }),
          (r.prototype.createRadialGradient = function (t, e, r, n, o, s) {
            var l = this.__createElement(
              "radialGradient",
              {
                id: a(this.__ids),
                cx: n + "px",
                cy: o + "px",
                r: s + "px",
                fx: t + "px",
                fy: e + "px",
                gradientUnits: "userSpaceOnUse",
              },
              !1
            );
            return this.__defs.appendChild(l), new i(l, this);
          }),
          (r.prototype.__parseFont = function () {
            var t =
                /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-,\'\"\sa-z0-9]+?)\s*$/i.exec(
                  this.font
                ),
              e = {
                style: t[1] || "normal",
                size: t[4] || "10px",
                family: t[6] || "sans-serif",
                weight: t[3] || "normal",
                decoration: t[2] || "normal",
                href: null,
              };
            return (
              "underline" === this.__fontUnderline &&
                (e.decoration = "underline"),
              this.__fontHref && (e.href = this.__fontHref),
              e
            );
          }),
          (r.prototype.__wrapTextLink = function (t, e) {
            if (t.href) {
              var r = this.__createElement("a");
              return (
                r.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  t.href
                ),
                r.appendChild(e),
                r
              );
            }
            return e;
          }),
          (r.prototype.__applyText = function (t, e, r, i) {
            var n,
              o,
              s = this.__parseFont(),
              a = this.__closestGroupOrSvg(),
              h = this.__createElement(
                "text",
                {
                  "font-family": s.family,
                  "font-size": s.size,
                  "font-style": s.style,
                  "font-weight": s.weight,
                  "text-decoration": s.decoration,
                  x: e,
                  y: r,
                  "text-anchor":
                    ((n = this.textAlign),
                    (o = {
                      left: "start",
                      right: "end",
                      center: "middle",
                      start: "start",
                      end: "end",
                    }),
                    o[n] || o.start),
                  "dominant-baseline": l(this.textBaseline),
                },
                !0
              );
            h.appendChild(this.__document.createTextNode(t)),
              (this.__currentElement = h),
              this.__applyStyleToCurrentElement(i),
              a.appendChild(this.__wrapTextLink(s, h));
          }),
          (r.prototype.fillText = function (t, e, r) {
            this.__applyText(t, e, r, "fill");
          }),
          (r.prototype.strokeText = function (t, e, r) {
            this.__applyText(t, e, r, "stroke");
          }),
          (r.prototype.measureText = function (t) {
            return (this.__ctx.font = this.font), this.__ctx.measureText(t);
          }),
          (r.prototype.arc = function (t, e, r, i, n, o) {
            if (i !== n) {
              (i %= 2 * Math.PI) === (n %= 2 * Math.PI) &&
                (n = (n + 2 * Math.PI - 0.001 * (o ? -1 : 1)) % (2 * Math.PI));
              var a = t + r * Math.cos(n),
                l = e + r * Math.sin(n),
                h = t + r * Math.cos(i),
                c = e + r * Math.sin(i),
                u = o ? 0 : 1,
                p = 0,
                _ = n - i;
              _ < 0 && (_ += 2 * Math.PI),
                (p = o ? (_ > Math.PI ? 0 : 1) : _ > Math.PI ? 1 : 0),
                this.lineTo(h, c),
                this.__addPathCommand(
                  s(
                    "A {rx} {ry} {xAxisRotation} {largeArcFlag} {sweepFlag} {endX} {endY}",
                    {
                      rx: r,
                      ry: r,
                      xAxisRotation: 0,
                      largeArcFlag: p,
                      sweepFlag: u,
                      endX: a,
                      endY: l,
                    }
                  )
                ),
                (this.__currentPosition = { x: a, y: l });
            }
          }),
          (r.prototype.clip = function () {
            var t = this.__closestGroupOrSvg(),
              e = this.__createElement("clipPath"),
              r = a(this.__ids),
              i = this.__createElement("g");
            this.__applyCurrentDefaultPath(),
              t.removeChild(this.__currentElement),
              e.setAttribute("id", r),
              e.appendChild(this.__currentElement),
              this.__defs.appendChild(e),
              t.setAttribute("clip-path", s("url(#{id})", { id: r })),
              t.appendChild(i),
              (this.__currentElement = i);
          }),
          (r.prototype.drawImage = function () {
            var t,
              e,
              i,
              n,
              o,
              s,
              a,
              l,
              h,
              c,
              u,
              p,
              _,
              d = Array.prototype.slice.call(arguments),
              f = d[0],
              g = 0,
              m = 0;
            if (3 === d.length)
              (t = d[1]), (e = d[2]), (i = o = f.width), (n = s = f.height);
            else if (5 === d.length)
              (t = d[1]),
                (e = d[2]),
                (i = d[3]),
                (n = d[4]),
                (o = f.width),
                (s = f.height);
            else {
              if (9 !== d.length)
                throw new Error(
                  "Inavlid number of arguments passed to drawImage: " +
                    arguments.length
                );
              (g = d[1]),
                (m = d[2]),
                (o = d[3]),
                (s = d[4]),
                (t = d[5]),
                (e = d[6]),
                (i = d[7]),
                (n = d[8]);
            }
            (a = this.__closestGroupOrSvg()), this.__currentElement;
            var y = "translate(" + t + ", " + e + ")";
            if (f instanceof r) {
              if (
                (l = f.getSvg().cloneNode(!0)).childNodes &&
                l.childNodes.length > 1
              ) {
                for (h = l.childNodes[0]; h.childNodes.length; )
                  (_ = h.childNodes[0].getAttribute("id")),
                    (this.__ids[_] = _),
                    this.__defs.appendChild(h.childNodes[0]);
                if ((c = l.childNodes[1])) {
                  var v,
                    b = c.getAttribute("transform");
                  (v = b ? b + " " + y : y),
                    c.setAttribute("transform", v),
                    a.appendChild(c);
                }
              }
            } else
              ("CANVAS" !== f.nodeName && "IMG" !== f.nodeName) ||
                ((u = this.__createElement("image")).setAttribute("width", i),
                u.setAttribute("height", n),
                u.setAttribute("opacity", this.globalAlpha),
                u.setAttribute("preserveAspectRatio", "none"),
                ((p = this.__document.createElement("canvas")).width = i),
                (p.height = n),
                p.getContext("2d").drawImage(f, g, m, o, s, 0, 0, i, n),
                (f = p),
                u.setAttribute("transform", y),
                u.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  "CANVAS" === f.nodeName
                    ? f.toDataURL()
                    : f.getAttribute("src")
                ),
                a.appendChild(u));
          }),
          (r.prototype.createPattern = function (t, e) {
            var i,
              o = this.__document.createElementNS(
                "http://www.w3.org/2000/svg",
                "pattern"
              ),
              s = a(this.__ids);
            return (
              o.setAttribute("id", s),
              o.setAttribute("width", t.width),
              o.setAttribute("height", t.height),
              "CANVAS" === t.nodeName || "IMG" === t.nodeName
                ? ((i = this.__document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "image"
                  )).setAttribute("width", t.width),
                  i.setAttribute("height", t.height),
                  i.setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    "xlink:href",
                    "CANVAS" === t.nodeName
                      ? t.toDataURL()
                      : t.getAttribute("src")
                  ),
                  o.appendChild(i),
                  this.__defs.appendChild(o))
                : t instanceof r &&
                  (o.appendChild(t.__root.childNodes[1]),
                  this.__defs.appendChild(o)),
              new n(o, this)
            );
          }),
          (r.prototype.setLineDash = function (t) {
            t && t.length > 0
              ? (this.lineDash = t.join(","))
              : (this.lineDash = null);
          }),
          (r.prototype.drawFocusRing = function () {}),
          (r.prototype.createImageData = function () {}),
          (r.prototype.getImageData = function () {}),
          (r.prototype.putImageData = function () {}),
          (r.prototype.globalCompositeOperation = function () {}),
          (r.prototype.setTransform = function () {}),
          "object" == typeof window && (window.C2S = r),
          "object" == typeof t.exports && (t.exports = r);
      })();
    },
  ]);
});
