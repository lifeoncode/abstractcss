"use strict";

const splitElementClassName = (className) => {
  return className.split("-");
};

const applyGridColumnToElement = (element, classNameArr) => {
  if (classNameArr[1] == "start") {
    element.style.gridColumnStart = `${classNameArr[2]}`;
  }
  if (classNameArr[1] == "end") {
    element.style.gridColumnEnd = `${classNameArr[2]}`;
  }
  if (Number(classNameArr[1]) && Number(classNameArr[2])) {
    element.style.gridColumn = `${classNameArr[1]}/${classNameArr[2]}`;
  }
};

const applyGridColumn = (element) => {
  try {
    let allGridColumClasses = [];
    element.classList.forEach((i) => {
      i.includes("column") && allGridColumClasses.push(i);
    });
    allGridColumClasses.forEach((i) => {
      let classNameArr = splitElementClassName(i);
      if (classNameArr.length !== 3) {
        throw Error("Out of bounds");
      } else {
        applyGridColumnToElement(element, classNameArr);
      }
    });
  } catch (error) {
    console.error(`Error while applying grid column to: ${element}\n${error}`);
  }
};

export default applyGridColumn;
