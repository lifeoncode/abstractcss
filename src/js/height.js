"use strict";
import splitElementClassName from "./util";

const applyHeightToElement = (element, classArr) => {
  if (classArr[1] !== "min" || classArr[1] !== "med" || classArr[1] !== "max") {
    element.style.height = `${classArr[1]}`;
  }
};

const applyHeight = (element, className) => {
  try {
    let classNameArr = splitElementClassName(className, "-");
    if (classNameArr.length !== 2) {
      throw Error("Out of bounds");
    } else {
      applyHeightToElement(element, classNameArr);
    }
  } catch (error) {
    console.error(`Error while applying height to: ${element}\n${error}`);
  }
};

export default applyHeight;
