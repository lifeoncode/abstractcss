"use strict";
import splitElementClassName from "./util";

class Colors {
  constructor(element, className) {
    this.element = element;
    this.className = className;
  }

  // handle text color
  handleTextColor() {
    try {
      let classNameArr = splitElementClassName(this.className, "-");
      if (classNameArr.length !== 2) {
        throw Error("Out of bounds");
      } else {
        // Use `this.element` to access the element property
        this.element.style.color = `${classNameArr[1]}`;
      }
    } catch (error) {
      console.error(
        `Error while applying text color to: ${this.element}\n${error}`
      );
    }
  }

  // handle background color
  handleBackgroundColor() {
    try {
      let classNameArr = splitElementClassName(this.className, "-");
      if (classNameArr.length !== 3) {
        throw Error("Out of bounds");
      } else {
        // Use `this.element` to access the element property
        this.element.style.backgroundColor = `${classNameArr[2]}`;
      }
    } catch (error) {
      console.error(
        `Error while applying background color to: ${this.element}\n${error}`
      );
    }
  }

  // handle border color
  handleBorderColor() {
    try {
      let classNameArr = splitElementClassName(this.className, "-");
      if (classNameArr.length !== 3) {
        throw Error("Out of bounds");
      } else {
        // Use `this.element` to access the element property
        this.element.style.borderColor = `${classNameArr[2]}`;
      }
    } catch (error) {
      console.error(
        `Error while applying border color to: ${this.element}\n${error}`
      );
    }
  }
}

export default Colors;
