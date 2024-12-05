"use strict";

const splitElementClassName = (className) => {
  return className.split("-");
};

const applyMarginToElement = (element, classArr, classArrLength) => {
  if (classArrLength === 2) {
    element.style.margin = `${classArr[1]}`;
  } else if (classArrLength === 3) {
    switch (classArr[1]) {
      case "left":
        element.style.marginLeft = `${classArr[2]}`;
        break;
      case "right":
        element.style.marginRight = `${classArr[2]}`;
        break;
      case "top":
        element.style.marginTop = `${classArr[2]}`;
        break;
      case "bottom":
        element.style.marginBottom = `${classArr[2]}`;
        break;
      case "x":
        element.style.marginLeft = `${classArr[2]}`;
        element.style.marginRight = `${classArr[2]}`;
        break;
      case "y":
        element.style.marginTop = `${classArr[2]}`;
        element.style.marginBottom = `${classArr[2]}`;
        break;
      default:
        throw Error("Could not apply margin to element");
    }
  }
};

const applyMargin = (element) => {
  try {
    let allMarginClasses = [];
    element.classList.forEach((i) => {
      i.includes("margin") && allMarginClasses.push(i);
    });
    allMarginClasses.forEach((i) => {
      let classNameArr = splitElementClassName(i);
      if (classNameArr.length < 2 || classNameArr.length > 3) {
        throw Error("Out of bounds");
      } else {
        applyMarginToElement(element, classNameArr, classNameArr.length);
      }
    });
  } catch (error) {
    console.error(`Error while applying margin to: ${element}\n${error}`);
  }
};

export default applyMargin;
