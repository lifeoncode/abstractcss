"use strict";
import splitElementClassName from "./util";

const applyWidthToElement = (element, classArr) => {
  if (classArr[1] === "tab" && window.screen.width <= 1080) {
    if (
      classArr[2] !== "min" ||
      classArr[2] !== "med" ||
      classArr[2] !== "max"
    ) {
      element.style.width = `${classArr[2]}`;
    }
  }

  if (classArr[1] == "mob" && window.screen.width <= 600) {
    if (
      classArr[2] !== "min" ||
      classArr[2] !== "med" ||
      classArr[2] !== "max"
    ) {
      element.style.width = `${classArr[2]}`;
    }
  }

  if (classArr[1] !== "min" || classArr[1] !== "med" || classArr[1] !== "max") {
    element.style.width = `${classArr[1]}`;
  }
};

const applyWidth = (element) => {
  try {
    let allWidthClasses = [];
    element.classList.forEach((i) => {
      if (i.includes("width")) {
        !i.includes("border-width") && allWidthClasses.push(i);
      }
    });
    allWidthClasses.forEach((i) => {
      let classNameArr = splitElementClassName(i, "-");
      if (classNameArr.length < 2 || classNameArr.length > 3) {
        throw Error("Out of bounds");
      } else {
        applyWidthToElement(element, classNameArr);
      }
    });
  } catch (error) {
    console.error(`Error while applying width to: ${element}\n${error}`);
  }
};

export default applyWidth;
