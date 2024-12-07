"use strict";
import splitElementClassName from "./util";

const applyGridToElement = (element, classArr, classNameArrLength) => {
  element.style.display = "grid";
  element.style.gridTemplateColumns = `repeat(${classArr[1]}, 1fr)`;
};

const applyGrid = (element) => {
  try {
    let allGridClasses = [];
    element.classList.forEach((i) => {
      if (i.startsWith("grid")) {
        if (!i.includes("grid-gap") && !i.includes("grid-auto")) {
          allGridClasses.push(i);
        }
      }
    });
    allGridClasses.forEach((i) => {
      let classNameArr = splitElementClassName(i, "-");
      if (classNameArr.length < 2 || classNameArr.length > 3) {
        throw Error("Out of bounds");
      } else {
        applyGridToElement(element, classNameArr, classNameArr.length);
      }
    });
  } catch (error) {
    console.error(`Error while applying grid gap to: ${element}\n${error}`);
  }
};

export default applyGrid;
