"use strict";
import splitElementClassName from "./util";

const applyBorderRadiusToElement = (element, classArr, classNameArrLength) => {
  if (classNameArrLength === 3) {
    element.style.borderRadius = `${classArr[2]}`;
  } else if (classNameArrLength === 4) {
    switch (classArr[2]) {
      case "top":
        element.style.borderTopLeftRadius = `${classArr[3]}`;
        element.style.borderTopRightRadius = `${classArr[3]}`;
        break;
      case "bottom":
        element.style.borderBottomLeftRadius = `${classArr[3]}`;
        element.style.borderBottomRightRadius = `${classArr[3]}`;
        break;
      case "left":
        element.style.borderTopLeftRadius = `${classArr[3]}`;
        element.style.borderBottomLeftRadius = `${classArr[3]}`;
        break;
      case "right":
        element.style.borderTopRightRadius = `${classArr[3]}`;
        element.style.borderBottomRightRadius = `${classArr[3]}`;
        break;
      default:
        throw Error("Could not apply border radius");
    }
  } else if (classNameArrLength === 5) {
    let elementPoint = `${classArr[2]}-${classArr[3]}`;
    switch (elementPoint) {
      case "top-left":
        element.style.borderTopLeftRadius = `${classArr[4]}`;
        break;
      case "bottom-left":
        element.style.borderBottomLeftRadius = `${classArr[4]}`;
        break;
      case "top-right":
        element.style.borderTopRightRadius = `${classArr[4]}`;
        break;
      case "bottom-right":
        element.style.borderBottomRightRadius = `${classArr[4]}`;
        break;
      default:
        throw Error("Could not apply border radius");
    }
  }
};

const applyBorderRadius = (element) => {
  try {
    let allBorderRadiusClasses = [];
    element.classList.forEach((i) => {
      i.includes("round-corner") && allBorderRadiusClasses.push(i);
    });
    allBorderRadiusClasses.forEach((i) => {
      let classNameArr = splitElementClassName(i, "-");
      if (classNameArr.length < 3 || classNameArr.length > 5) {
        throw Error("Out of bounds");
      } else {
        applyBorderRadiusToElement(element, classNameArr, classNameArr.length);
      }
    });
  } catch (error) {
    console.error(
      `Error while applying border radius to: ${element}\n${error}`
    );
  }
};

export default applyBorderRadius;
