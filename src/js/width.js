"use strict";
import splitElementClassName from "./util";

const applyWidthToElement = (element, classArr) => {
  if (classArr[1] !== "min" || classArr[1] !== "med" || classArr[1] !== "max") {
    element.style.width = `${classArr[1]}`;
  }
};

const applyWidth = (element, className) => {
  try {
    let classNameArr = splitElementClassName(className, "-");
    if (classNameArr.length < 2 || classNameArr.length > 3) {
      throw Error("Out of bounds");
    } else {
      applyWidthToElement(element, classNameArr);
    }
  } catch (error) {
    console.error(`Error while applying width to: ${element}\n${error}`);
  }
};

export default applyWidth;
