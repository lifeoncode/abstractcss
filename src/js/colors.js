"use strict";
import splitElementClassName from "./util";

const applyColorToElement = (element, classArr, classArrLength) => {
  if (classArrLength === 2) {
    element.style.color = `${classArr[1]}`;
  } else if (classArrLength === 3) {
    if (classArr[0] === "bg" || classArr[0] === "fill") {
      console.log("bg found", element);
      element.style.backgroundColor = `${classArr[2]}`;
    } else if (classArr[0] === "border") {
      element.style.borderColor = `${classArr[2]}`;
    }
  }
};

const applyColor = (element) => {
  console.log("working...", element);
  try {
    let allColorClasses = [];
    element.classList.forEach((i) => {
      i.includes("color") && allColorClasses.push(i);
    });
    allColorClasses.forEach((i) => {
      let classNameArr = splitElementClassName(i, "-");
      if (classNameArr.length < 2 || classNameArr.length > 3) {
        throw Error("Out of bounds");
      } else {
        applyColorToElement(element, classNameArr, classNameArr.length);
      }
    });
  } catch (error) {
    console.error(`Error while applying color to: ${element}\n${error}`);
  }
};

export default applyColor;
