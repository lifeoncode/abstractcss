"use strict";
import splitElementClassName from "./util";

const applyGridToElement = (element, classArr, classNameArrLength) => {
  element.style.display = "grid";
  if (classNameArrLength === 2) {
    element.style.gridTemplateColumns = `repeat(${classArr[1]}, 1fr)`;
  } else if (classNameArrLength === 3) {
    if (classArr[1] === "tab" && window.screen.width <= 1080) {
      element.style.gridTemplateColumns = `repeat(${classArr[2]}, 1fr)`;
    }
    if (classArr[1] == "mob" && window.screen.width <= 600) {
      element.style.gridTemplateColumns = `repeat(${classArr[2]}, 1fr)`;
    }
  }
};

console.log();
const applyGrid = (element) => {
  try {
    let allGridClasses = [];
    element.classList.forEach((i) => {
      if (i.includes("grid")) {
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
