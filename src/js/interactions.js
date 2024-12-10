"use strict";
import splitElementClassName from "./util";

class Interactions {
  constructor(element, className) {
    this.element = element;
    this.className = className;
  }

  static createStyleTag() {
    let styleTag = document.querySelector("style");

    if (!styleTag) {
      styleTag = document.createElement("style");
      document.head.appendChild(styleTag);
    }

    return styleTag;
  }

  // hover
  static applyHover(element, classNameArr) {
    let style = this.createStyleTag();

    if (classNameArr[1] == "scale") {
      style.textContent += `
            ._hover-scale-${classNameArr[2].replace(".", "\\.")}:hover {
                transform: scale(${classNameArr[2]}) !important;
            }
        `;
    }

    if (classNameArr[1] == "bg" && classNameArr[2] == "color") {
      style.textContent += `
            ._hover-bg-color-\\${classNameArr[3]}:hover {
                background-color: ${classNameArr[3]} !important;
            }
            `;
    }

    if (classNameArr[1] == "color") {
      style.textContent += `
            ._hover-color-\\${classNameArr[2]}:hover {
                color: ${classNameArr[2]} !important;
            }
            `;
    }
  }

  // active
  static applyActive(element, classNameArr) {
    let style = this.createStyleTag();

    if (classNameArr[1] == "scale") {
      style.textContent += `
              ._active-scale-${classNameArr[2].replace(".", "\\.")}:active {
                  transform: scale(${classNameArr[2]}) !important;
              }
          `;
    }

    if (classNameArr[1] == "bg" && classNameArr[2] == "color") {
      style.textContent += `
              ._active-bg-color-\\${classNameArr[3]}:active {
                  background-color: ${classNameArr[3]} !important;
              }
              `;
    }

    if (classNameArr[1] == "color") {
      style.textContent += `
              ._active-color-\\${classNameArr[2]}:active {
                  color: ${classNameArr[2]} !important;
              }
              `;
    }
  }

  // focus
  static applyFocus(element, classNameArr) {
    let style = this.createStyleTag();

    if (classNameArr[1] == "scale") {
      style.textContent += `
            ._focus-scale-${classNameArr[2].replace(".", "\\.")}:focus {
                transform: scale(${classNameArr[2]}) !important;
            }
        `;
    }

    if (classNameArr[1] == "bg" && classNameArr[2] == "color") {
      style.textContent += `
            ._focus-bg-color-\\${classNameArr[3]}:focus {
                background-color: ${classNameArr[3]} !important;
            }
            `;
    }

    if (classNameArr[1] == "color") {
      style.textContent += `
            ._focus-color-\\${classNameArr[2]}:focus {
                color: ${classNameArr[2]} !important;
            }
            `;
    }
  }

  // interaction handler
  handleInteraction() {
    try {
      this.element.style.transition = "all 0.3s ease";
      let classNameArr = splitElementClassName(this.className);
      if (classNameArr.length < 2 || classNameArr.length > 4) {
        throw Error("Out of bounds");
      } else {
        this.className.startsWith("_hover") &&
          Interactions.applyHover(this.element, classNameArr);
        this.className.startsWith("_active") &&
          Interactions.applyActive(this.element, classNameArr);
        this.className.startsWith("_focus") &&
          Interactions.applyFocus(this.element, classNameArr);
      }
    } catch (error) {
      console.error(
        `Error while applying interaction to: ${this.element}\n${error}`
      );
    }
  }
}

export default Interactions;
