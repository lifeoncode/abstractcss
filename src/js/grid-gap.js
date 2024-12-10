"use strict";
import splitElementClassName from "./util";

const applyGridGapToElement = (element, classArr, classArrLength) => {
  if (classArrLength === 3) {
    element.style.gridGap = `${classArr[2]}`;
  } else if (classArrLength === 4) {
    switch (classArr[2]) {
      case "row":
        element.style.gridRowGap = `${classArr[3]}`;
        break;
      case "col":
        element.style.gridColumnGap = `${classArr[3]}`;
        break;
      case "tab":
        window.screen.width <= 1080 &&
          (element.style.gridGap = `${classArr[3]}`);
        break;
      case "mob":
        window.screen.width <= 600 &&
          (element.style.gridGap = `${classArr[3]}`);
        break;
      default:
        throw Error("Could not apply padding to element");
    }
  }
};

const applyGridGap = (element, className) => {
  try {
    let classNameArr = splitElementClassName(className, "-");
    if (classNameArr.length < 3 || classNameArr.length > 4) {
      throw Error("Out of bounds");
    } else {
      applyGridGapToElement(element, classNameArr, classNameArr.length);
    }
  } catch (error) {
    console.error(`Error while applying grid gap to: ${element}\n${error}`);
  }
};

export default applyGridGap;
