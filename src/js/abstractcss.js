class AbstractCSS {
  constructor() {
    this.patterns = {
      spacing: /^([pm])([xytrbl])?-(auto|[\d.]+)(px|rem|em|%)?$/,
      colors: /^(bg|text|b-color)-(#[0-9a-f]{3,6}|[a-z]+)$/i,
      sizing: /^([wh])-([\d.]+)(px|rem|em|%|vh|vw)?$/,
    };

    // Property mappings for conversion
    this.propertyMap = {
      p: "padding",
      m: "margin",
      w: "width",
      h: "height",
      bg: "background-color",
      text: "color",
      "b-color": "border-color",
    };

    // Direction mappings
    this.directionMap = {
      t: "top",
      r: "right",
      b: "bottom",
      l: "left",
      x: ["left", "right"],
      y: ["top", "bottom"],
    };
  }

  init() {
    this.processElements();
    const observer = new MutationObserver(() => this.processElements());
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });
  }

  processElements() {
    document.querySelectorAll("*").forEach((element) => {
      const classes = element.className.split(" ");
      classes.forEach((className) => {
        this.applyUtility(element, className.trim());
      });
    });
  }

  applyUtility(element, className) {
    // Handle spacing utilities (p-, m-)
    const spacingMatch = className.match(this.patterns.spacing);
    if (spacingMatch) {
      const [, property, direction, value, unit = "px"] = spacingMatch;
      // Handle 'auto' specially
      const cssValue = value === "auto" ? "auto" : `${value}${unit}`;

      if (direction) {
        // Handle directional spacing
        if (this.directionMap[direction]) {
          const directions = this.directionMap[direction];
          if (Array.isArray(directions)) {
            // x/y
            directions.forEach((dir) => {
              const varName = `--${property}-${dir}`;
              element.style.setProperty(varName, cssValue);
            });
          } else {
            // single direction [r - l]
            const varName = `--${property}-${direction}`;
            element.style.setProperty(varName, cssValue);
          }
        }
      } else {
        element.style.setProperty(`--${property}`, cssValue);
      }
    }

    // color utilities (bg-, t-, b-)
    const colorMatch = className.match(this.patterns.colors);
    if (colorMatch) {
      const [, property, value] = colorMatch;
      const cssProperty = this.propertyMap[property];
      element.style.setProperty(`--${property}`, value);
    }

    // sizing utilities (w-, h-)
    const sizingMatch = className.match(this.patterns.sizing);
    if (sizingMatch) {
      const [, property, value, unit = "px"] = sizingMatch;
      const cssValue = `${value}${unit}`;
      element.style.setProperty(`--${property}`, cssValue);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.abstractCSS = new AbstractCSS();
  window.abstractCSS.init();
});

export default AbstractCSS;
