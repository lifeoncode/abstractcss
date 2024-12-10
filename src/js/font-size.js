"use strict";
import splitElementClassName from "./util";

// [font, size, tab, 20px]
// [font, size, tab, min]
// [font, size, 10px]
// [font, size, min]

const applyFontSizeToElement = (element, classArr) => {
  // tablet
  if (classArr[2] === "tab" && window.screen.width <= 1080) {
    if (
      classArr[3] !== "min" &&
      classArr[3] !== "med" &&
      classArr[3] !== "max"
    ) {
      element.style.fontSize = `${classArr[3]}`;
    }
  }
  // mobile
  if (classArr[2] === "mob" && window.screen.width <= 600) {
    if (
      classArr[3] !== "min" &&
      classArr[3] !== "med" &&
      classArr[3] !== "max"
    ) {
      element.style.fontSize = `${classArr[3]}`;
    }
  }
  // desktop
  if (classArr[2] !== "min" && classArr[2] !== "med" && classArr[2] !== "max") {
    element.style.fontSize = `${classArr[2]}`;
  }
};

const applyFontSize = (element, className) => {
  try {
    let classNameArr = splitElementClassName(className, "-");
    if (classNameArr.length < 3 || classNameArr > 4) {
      throw Error("Out of bounds");
    } else {
      applyFontSizeToElement(element, classNameArr);
    }
  } catch (error) {
    console.error(`Error while applying font size to: ${element}\n${error}`);
  }
};

export default applyFontSize;
