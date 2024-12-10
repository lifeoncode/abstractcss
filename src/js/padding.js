"use strict";
import splitElementClassName from "./util";

const applyPaddingToElement = (element, classArr, classArrLength) => {
  if (classArrLength === 2) {
    element.style.padding = `${classArr[1]}`;
  } else if (classArrLength === 3) {
    switch (classArr[1]) {
      case "left":
        element.style.paddingLeft = `${classArr[2]}`;
        break;
      case "right":
        element.style.paddingRight = `${classArr[2]}`;
        break;
      case "top":
        element.style.paddingTop = `${classArr[2]}`;
        break;
      case "bottom":
        element.style.paddingBottom = `${classArr[2]}`;
        break;
      case "x":
        element.style.paddingLeft = `${classArr[2]}`;
        element.style.paddingRight = `${classArr[2]}`;
        break;
      case "y":
        element.style.paddingTop = `${classArr[2]}`;
        element.style.paddingBottom = `${classArr[2]}`;
        break;
      default:
        throw Error("Could not apply padding to element");
    }
  }
};

const applyPadding = (element, className) => {
  try {
    let classNameArr = splitElementClassName(className, "-");
    if (classNameArr.length < 2 || classNameArr.length > 3) {
      throw Error("Out of bounds");
    } else {
      applyPaddingToElement(element, classNameArr, classNameArr.length);
    }
  } catch (error) {
    console.error(`Error while applying padding to: ${element}\n${error}`);
  }
};

export default applyPadding;
