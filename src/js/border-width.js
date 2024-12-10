"use strict";
import splitElementClassName from "./util";

const applyBorderWidthToElement = (element, classArr) => {
  element.style.borderWidth = `${classArr[2]}`;
};

const applyBorderWidth = (element, className) => {
  try {
    let classNameArr = splitElementClassName(className, "-");
    if (classNameArr.length !== 3) {
      throw Error("Out of bounds");
    } else {
      applyBorderWidthToElement(element, classNameArr);
    }
  } catch (error) {
    console.error(`Error while applying border width to: ${element}\n${error}`);
  }
};

export default applyBorderWidth;
