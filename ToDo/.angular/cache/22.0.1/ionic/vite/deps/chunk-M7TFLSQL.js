// node_modules/@ionic/core/components/p-CthoZqG1.js
var t = class {
  constructor() {
    this.m = /* @__PURE__ */ new Map();
  }
  reset(t4) {
    this.m = new Map(Object.entries(t4));
  }
  get(t4, n4) {
    const e = this.m.get(t4);
    return void 0 !== e ? e : n4;
  }
  getBoolean(t4, n4 = false) {
    const e = this.m.get(t4);
    return void 0 === e ? n4 : "string" == typeof e ? "true" === e : !!e;
  }
  getNumber(t4, n4) {
    const e = parseFloat(this.m.get(t4));
    return isNaN(e) ? void 0 !== n4 ? n4 : NaN : e;
  }
  set(t4, n4) {
    this.m.set(t4, n4);
  }
};
var n = new t();
var c;
!(function(t4) {
  t4.OFF = "OFF", t4.ERROR = "ERROR", t4.WARN = "WARN", t4.DEBUG = "DEBUG";
})(c || (c = {}));
var u = { [c.OFF]: 0, [c.ERROR]: 1, [c.WARN]: 2, [c.DEBUG]: 3 };
var f = (t4) => {
  const e = String(n.get("logLevel", c.WARN)).toUpperCase();
  return u[e] >= u[t4];
};
var a = (t4, ...n4) => {
  if (f(c.WARN)) return console.warn(`[Ionic Warning]: ${t4}`, ...n4);
};
var d = (t4, ...n4) => {
  if (f(c.ERROR)) return console.error(`[Ionic Error]: ${t4}`, ...n4);
};
var p = ((t4) => (t4.Undefined = "undefined", t4.Null = "null", t4.String = "string", t4.Number = "number", t4.SpecialNumber = "number", t4.Boolean = "boolean", t4.BigInt = "bigint", t4))(p || {});
var $ = ((t4) => (t4.Array = "array", t4.Date = "date", t4.Map = "map", t4.Object = "object", t4.RegularExpression = "regexp", t4.Set = "set", t4.Channel = "channel", t4.Symbol = "symbol", t4))($ || {});
var O = (t4) => {
  if (t4.__stencil__getHostRef) return t4.__stencil__getHostRef();
};
var S = (t4, n4) => (0, console.error)(t4, n4);
var R = "undefined" != typeof window ? window : {};
var A = R.HTMLElement || class {
};
var L = { i: 0, u: "", jmp: (t4) => t4(), raf: (t4) => requestAnimationFrame(t4), ael: (t4, n4, e, o2) => t4.addEventListener(n4, e, o2), rel: (t4, n4, e, o2) => t4.removeEventListener(n4, e, o2), ce: (t4, n4) => new CustomEvent(t4, n4) };
var B = (() => {
  var t4;
  let n4 = false;
  try {
    null == (t4 = R.document) || t4.addEventListener("e", null, Object.defineProperty({}, "passive", { get() {
      n4 = true;
    } }));
  } catch (t5) {
  }
  return n4;
})();
var _ = (() => {
  try {
    return !!R.document.adoptedStyleSheets && (new CSSStyleSheet(), "function" == typeof new CSSStyleSheet().replaceSync);
  } catch (t4) {
  }
  return false;
})();
var T = !!_ && (() => !!R.document && Object.getOwnPropertyDescriptor(R.document.adoptedStyleSheets, "length").writable)();
var F = false;
var U = [];
var D = [];
var W = () => {
  var t4;
  return (null == (t4 = R.document) ? void 0 : t4.hidden) ? q(P) : L.raf(P);
};
var V = (t4, n4) => (e) => {
  t4.push(e), F || (F = true, n4 && 4 & L.i ? q(P) : W());
};
var H = (t4) => {
  for (let n4 = 0; n4 < t4.length; n4++) try {
    t4[n4](performance.now());
  } catch (t5) {
    S(t5);
  }
  t4.length = 0;
};
var P = () => {
  H(U), H(D), (F = U.length > 0) && W();
};
var q = (t4) => Promise.resolve(void 0).then(t4);
var z = V(U, false);
var J = V(D, true);
var qt = (t4) => {
  var n4;
  return null == (n4 = O(t4)) ? void 0 : n4.A;
};
var ln = "Capture";
var rn = new RegExp(ln + "$");

// node_modules/@ionic/core/components/p-ZjP4CjeZ.js
var d2 = "undefined" != typeof window ? window : void 0;
var o = "undefined" != typeof document ? document : void 0;

// node_modules/@ionic/core/components/p-CPGp3WWG.js
var t2;
var i = (e, o2, i2) => {
  const n4 = o2.startsWith("animation") ? (r4 = e, void 0 === t2 && (t2 = void 0 === r4.style.animationName && void 0 !== r4.style.webkitAnimationName ? "-webkit-" : ""), t2) : "";
  var r4;
  e.style.setProperty(n4 + o2, i2);
};
var n2 = (e = [], o2) => {
  if (void 0 !== o2) {
    const t4 = Array.isArray(o2) ? o2 : [o2];
    return [...e, ...t4];
  }
  return e;
};
var r = (t4) => {
  let r4, a2, s2, d3, f3, l2, c3, v2, m, u2, p2, y = [], g = [], A2 = [], b = false, C = {}, E = [], h = [], S2 = {}, j = 0, k = false, R2 = false, w = true, T2 = false, D2 = true, F2 = false;
  const W2 = t4, Z = [], I = [], K = [], M = [], P2 = [], q2 = [], x = [], G = [], z2 = [], B3 = [], H2 = [], J2 = "function" == typeof AnimationEffect || void 0 !== d2 && "function" == typeof d2.AnimationEffect, L2 = "function" == typeof Element && "function" == typeof Element.prototype.animate && J2, N = () => H2, O2 = (e, o2) => {
    const t5 = o2.findIndex(((o3) => o3.c === e));
    t5 > -1 && o2.splice(t5, 1);
  }, Q = (e, o2) => ((o2?.oneTimeCallback ? I : Z).push({ c: e, o: o2 }), p2), U2 = () => {
    L2 && (H2.forEach(((e) => {
      e.cancel();
    })), H2.length = 0);
  }, V2 = () => {
    q2.forEach(((e) => {
      e?.parentNode && e.parentNode.removeChild(e);
    })), q2.length = 0;
  }, X = () => void 0 !== f3 ? f3 : c3 ? c3.getFill() : "both", Y = () => void 0 !== v2 ? v2 : void 0 !== l2 ? l2 : c3 ? c3.getDirection() : "normal", $2 = () => k ? "linear" : void 0 !== s2 ? s2 : c3 ? c3.getEasing() : "linear", _2 = () => R2 ? 0 : void 0 !== m ? m : void 0 !== a2 ? a2 : c3 ? c3.getDuration() : 0, ee = () => void 0 !== d3 ? d3 : c3 ? c3.getIterations() : 1, oe = () => void 0 !== u2 ? u2 : void 0 !== r4 ? r4 : c3 ? c3.getDelay() : 0, te = () => {
    0 !== j && (j--, 0 === j && ((() => {
      z2.forEach(((e2) => e2())), B3.forEach(((e2) => e2()));
      const e = w ? 1 : 0, o2 = E, t5 = h, n4 = S2;
      M.forEach(((e2) => {
        const r5 = e2.classList;
        o2.forEach(((e3) => r5.add(e3))), t5.forEach(((e3) => r5.remove(e3)));
        for (const o3 in n4) n4.hasOwnProperty(o3) && i(e2, o3, n4[o3]);
      })), m = void 0, v2 = void 0, u2 = void 0, Z.forEach(((o3) => o3.c(e, p2))), I.forEach(((o3) => o3.c(e, p2))), I.length = 0, D2 = true, w && (T2 = true), w = true;
    })(), c3 && c3.animationFinish()));
  }, ie = () => {
    (() => {
      x.forEach(((e2) => e2())), G.forEach(((e2) => e2()));
      const e = g, o2 = A2, t5 = C;
      M.forEach(((n4) => {
        const r5 = n4.classList;
        e.forEach(((e2) => r5.add(e2))), o2.forEach(((e2) => r5.remove(e2)));
        for (const e2 in t5) t5.hasOwnProperty(e2) && i(n4, e2, t5[e2]);
      }));
    })(), y.length > 0 && L2 && (M.forEach(((e) => {
      const o2 = e.animate(y, { id: W2, delay: oe(), duration: _2(), easing: $2(), iterations: ee(), fill: X(), direction: Y() });
      o2.pause(), H2.push(o2);
    })), H2.length > 0 && (H2[0].onfinish = () => {
      te();
    })), b = true;
  }, ne = (e) => {
    e = Math.min(Math.max(e, 0), 0.9999), L2 && H2.forEach(((o2) => {
      o2.currentTime = o2.effect.getComputedTiming().delay + _2() * e, o2.pause();
    }));
  }, re = (e) => {
    H2.forEach(((e2) => {
      e2.effect.updateTiming({ delay: oe(), duration: _2(), easing: $2(), iterations: ee(), fill: X(), direction: Y() });
    })), void 0 !== e && ne(e);
  }, ae = (e = false, o2 = true, t5) => (e && P2.forEach(((i2) => {
    i2.update(e, o2, t5);
  })), L2 && re(t5), p2), se = () => {
    b && (L2 ? H2.forEach(((e) => {
      e.pause();
    })) : M.forEach(((e) => {
      i(e, "animation-play-state", "paused");
    })), F2 = true);
  }, de = (e) => new Promise(((o2) => {
    e?.sync && (R2 = true, Q((() => R2 = false), { oneTimeCallback: true })), b || ie(), T2 && (L2 && (ne(0), re()), T2 = false), D2 && (j = P2.length + 1, D2 = false);
    const t5 = () => {
      O2(i2, I), o2();
    }, i2 = () => {
      O2(t5, K), o2();
    };
    Q(i2, { oneTimeCallback: true }), K.push({ c: t5, o: { oneTimeCallback: true } }), P2.forEach(((e2) => {
      e2.play();
    })), L2 ? (H2.forEach(((e2) => {
      e2.play();
    })), 0 !== y.length && 0 !== M.length || te()) : te(), F2 = false;
  })), fe = (e, o2) => {
    const t5 = y[0];
    return void 0 === t5 || void 0 !== t5.offset && 0 !== t5.offset ? y = [{ offset: 0, [e]: o2 }, ...y] : t5[e] = o2, p2;
  };
  return p2 = { parentAnimation: c3, elements: M, childAnimations: P2, id: W2, animationFinish: te, from: fe, to: (e, o2) => {
    const t5 = y[y.length - 1];
    return void 0 === t5 || void 0 !== t5.offset && 1 !== t5.offset ? y = [...y, { offset: 1, [e]: o2 }] : t5[e] = o2, p2;
  }, fromTo: (e, o2, t5) => fe(e, o2).to(e, t5), parent: (e) => (c3 = e, p2), play: de, pause: () => (P2.forEach(((e) => {
    e.pause();
  })), se(), p2), stop: () => {
    P2.forEach(((e) => {
      e.stop();
    })), b && (U2(), b = false), k = false, R2 = false, D2 = true, v2 = void 0, m = void 0, u2 = void 0, j = 0, T2 = false, w = true, F2 = false, K.forEach(((e) => e.c(0, p2))), K.length = 0;
  }, destroy: (e) => (P2.forEach(((o2) => {
    o2.destroy(e);
  })), ((e2) => {
    U2(), e2 && V2();
  })(e), M.length = 0, P2.length = 0, y.length = 0, Z.length = 0, I.length = 0, b = false, D2 = true, p2), keyframes: (e) => {
    const o2 = y !== e;
    return y = e, o2 && ((e2) => {
      L2 && N().forEach(((o3) => {
        const t5 = o3.effect;
        if (t5.setKeyframes) t5.setKeyframes(e2);
        else {
          const i2 = new KeyframeEffect(t5.target, e2, t5.getTiming());
          o3.effect = i2;
        }
      }));
    })(y), p2;
  }, addAnimation: (e) => {
    if (null != e) if (Array.isArray(e)) for (const o2 of e) o2.parent(p2), P2.push(o2);
    else e.parent(p2), P2.push(e);
    return p2;
  }, addElement: (o2) => {
    if (null != o2) if (1 === o2.nodeType) M.push(o2);
    else if (o2.length >= 0) for (let e = 0; e < o2.length; e++) M.push(o2[e]);
    else d("createAnimation - Invalid addElement value.");
    return p2;
  }, update: ae, fill: (e) => (f3 = e, ae(true), p2), direction: (e) => (l2 = e, ae(true), p2), iterations: (e) => (d3 = e, ae(true), p2), duration: (e) => (L2 || 0 !== e || (e = 1), a2 = e, ae(true), p2), easing: (e) => (s2 = e, ae(true), p2), delay: (e) => (r4 = e, ae(true), p2), getWebAnimations: N, getKeyframes: () => y, getFill: X, getDirection: Y, getDelay: oe, getIterations: ee, getEasing: $2, getDuration: _2, afterAddRead: (e) => (z2.push(e), p2), afterAddWrite: (e) => (B3.push(e), p2), afterClearStyles: (e = []) => {
    for (const o2 of e) S2[o2] = "";
    return p2;
  }, afterStyles: (e = {}) => (S2 = e, p2), afterRemoveClass: (e) => (h = n2(h, e), p2), afterAddClass: (e) => (E = n2(E, e), p2), beforeAddRead: (e) => (x.push(e), p2), beforeAddWrite: (e) => (G.push(e), p2), beforeClearStyles: (e = []) => {
    for (const o2 of e) C[o2] = "";
    return p2;
  }, beforeStyles: (e = {}) => (C = e, p2), beforeRemoveClass: (e) => (A2 = n2(A2, e), p2), beforeAddClass: (e) => (g = n2(g, e), p2), onFinish: Q, isRunning: () => 0 !== j && !F2, progressStart: (e = false, o2) => (P2.forEach(((t5) => {
    t5.progressStart(e, o2);
  })), se(), k = e, b || ie(), ae(false, true, o2), p2), progressStep: (e) => (P2.forEach(((o2) => {
    o2.progressStep(e);
  })), ne(e), p2), progressEnd: (e, o2, t5) => (k = false, P2.forEach(((i2) => {
    i2.progressEnd(e, o2, t5);
  })), void 0 !== t5 && (m = t5), T2 = false, w = true, 0 === e ? (v2 = "reverse" === Y() ? "normal" : "reverse", "reverse" === v2 && (w = false), L2 ? (ae(), ne(1 - o2)) : (u2 = (1 - o2) * _2() * -1, ae(false, false))) : 1 === e && (L2 ? (ae(), ne(o2)) : (u2 = o2 * _2() * -1, ae(false, false))), void 0 === e || c3 || de(), p2) };
};

// node_modules/@ionic/core/components/p-DEvF_E6y.js
var n3 = (a2, i2) => {
  a2.componentOnReady ? a2.componentOnReady().then(((a3) => i2(a3))) : f2((() => i2(a2)));
};
var f2 = (a2) => "function" == typeof __zone_symbol__requestAnimationFrame ? __zone_symbol__requestAnimationFrame(a2) : "function" == typeof requestAnimationFrame ? requestAnimationFrame(a2) : setTimeout(a2);

// node_modules/@ionic/core/components/p-CEs5NmKW.js
var r3 = "ionViewWillEnter";
var t3 = "ionViewDidEnter";
var s = "ionViewWillLeave";
var c2 = "ionViewDidLeave";
var l = "ionViewWillUnload";
var B2 = (n4) => {
  if (n4.classList.contains("ion-page")) return n4;
  return n4.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs") || n4;
};

export {
  n,
  a,
  qt,
  o,
  r,
  n3 as n2,
  r3 as r2,
  t3 as t,
  s,
  c2 as c,
  l,
  B2 as B
};
//# sourceMappingURL=chunk-M7TFLSQL.js.map
