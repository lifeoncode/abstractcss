"use strict";
import splitElementClassName from "./util";

const applyLineHeightToElement = (element, classArr) => {
  element.style.lineHeight = `${classArr[2]}`;
};

const applyLineHeight = (element, className) => {
  try {
    let classNameArr = splitElementClassName(className, "-");
    if (classNameArr.length !== 3) {
      throw Error("Out of bounds");
    } else {
      applyLineHeightToElement(element, classNameArr);
    }
  } catch (error) {
    console.error(`Error while applying line height to: ${element}\n${error}`);
  }
};

export default applyLineHeight;
