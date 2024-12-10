"use strict";
import splitElementClassName from "./util";

const applyGridToElement = (element, classArr) => {
  element.style.display = "grid";
  element.style.gridTemplateColumns = `repeat(${classArr[1]}, 1fr)`;
};

const applyGrid = (element, className) => {
  try {
    if (!className.includes("grid-gap") && !className.includes("grid-auto")) {
      let classNameArr = splitElementClassName(className, "-");
      if (classNameArr.length < 2 || classNameArr.length > 3) {
        throw Error("Out of bounds");
      } else {
        applyGridToElement(element, classNameArr);
      }
    }
  } catch (error) {
    console.error(`Error while applying grid gap to: ${element}\n${error}`);
  }
};

export default applyGrid;
