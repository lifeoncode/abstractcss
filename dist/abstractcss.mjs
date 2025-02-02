class h {
  constructor() {
    this.patterns = {
      spacing: /^([pm])([xytrbl])?-(auto|[\d.]+)(px|rem|em|%)?$/,
      colors: /^(bg|text|b-color)-(#[0-9a-f]{3,6}|[a-z]+)$/i,
      sizing: /^([wh])-([\d.]+)(px|rem|em|%|vh|vw)?$/
    }, this.propertyMap = {
      p: "padding",
      m: "margin",
      w: "width",
      h: "height",
      bg: "background-color",
      text: "color",
      "b-color": "border-color"
    }, this.directionMap = {
      t: "top",
      r: "right",
      b: "bottom",
      l: "left",
      x: ["left", "right"],
      y: ["top", "bottom"]
    };
  }
  init() {
    this.processElements(), new MutationObserver(() => this.processElements()).observe(document.body, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["class"]
    });
  }
  processElements() {
    document.querySelectorAll("*").forEach((t) => {
      t.className.split(" ").forEach((o) => {
        this.applyUtility(t, o.trim());
      });
    });
  }
  applyUtility(t, e) {
    const o = e.match(this.patterns.spacing);
    if (o) {
      const [, s, r, i, c = "px"] = o, a = i === "auto" ? "auto" : `${i}${c}`;
      if (r) {
        if (this.directionMap[r]) {
          const d = this.directionMap[r];
          if (Array.isArray(d))
            d.forEach((n) => {
              const y = `--${s}-${n}`;
              t.style.setProperty(y, a);
            });
          else {
            const n = `--${s}-${r}`;
            t.style.setProperty(n, a);
          }
        }
      } else
        t.style.setProperty(`--${s}`, a);
    }
    const p = e.match(this.patterns.colors);
    if (p) {
      const [, s, r] = p;
      this.propertyMap[s], t.style.setProperty(`--${s}`, r);
    }
    const l = e.match(this.patterns.sizing);
    if (l) {
      const [, s, r, i = "px"] = l, c = `${r}${i}`;
      t.style.setProperty(`--${s}`, c);
    }
  }
}
document.addEventListener("DOMContentLoaded", () => {
  window.abstractCSS = new h(), window.abstractCSS.init();
});
document.addEventListener("DOMContentLoaded", () => {
  window.AbstractCSS = new h(), window.AbstractCSS.init();
});
export {
  h as AbstractCSS
};
