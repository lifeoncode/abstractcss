"use strict";
import splitElementClassName from "./util";

const applyLineHeightToElement = (element, classArr) => {
  element.style.lineHeight = `${classArr[2]}`;
};

const applyLineHeight = (element) => {
  try {
    let allLineHeightClasses = [];
    element.classList.forEach((i) => {
      i.startsWith("line-height") && allLineHeightClasses.push(i);
    });
    allLineHeightClasses.forEach((i) => {
      let classNameArr = splitElementClassName(i, "-");
      if (classNameArr.length !== 3) {
        throw Error("Out of bounds");
      } else {
        applyLineHeightToElement(element, classNameArr);
      }
    });
  } catch (error) {
    console.error(`Error while applying line height to: ${element}\n${error}`);
  }
};

export default applyLineHeight;
