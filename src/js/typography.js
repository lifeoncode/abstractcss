"use strict";

import splitElementClassName from "./util";

class Typography {
  constructor(element, className) {
    this.element = element;
    this.className = className;
  }

  // handle font sizes
  handleFontSize() {
    try {
      let classNameArr = splitElementClassName(this.className, "-");
      if (classNameArr.length !== 3) {
        throw Error("Out of bounds");
      } else {
        if (
          classNameArr[3] !== "min" &&
          classNameArr[3] !== "med" &&
          classNameArr[3] !== "max"
        ) {
          this.element.style.fontSize = `${classNameArr[2]}`;
        }
      }
    } catch (error) {
      console.error(
        `Error while applying font size to: ${this.element}\n${error}`
      );
    }
  }

  // handle line heights
  handleLineHeight() {
    try {
      let classNameArr = splitElementClassName(this.className, "-");
      if (classNameArr.length !== 3) {
        throw Error("Out of bounds");
      } else {
        this.element.style.lineHeight = `${classNameArr[2]}`;
      }
    } catch (error) {
      console.error(
        `Error while applying line height to: ${this.element}\n${error}`
      );
    }
  }
}

export default Typography;
