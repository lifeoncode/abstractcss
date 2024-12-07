"use strict";

const splitElementClassName = (className) => {
  return className.split("-");
};

const applyGridRowToElement = (element, classNameArr) => {
  if (classNameArr[1] == "start") {
    element.style.gridRowStart = `${classNameArr[2]}`;
  }
  if (classNameArr[1] == "end") {
    element.style.gridRowEnd = `${classNameArr[2]}`;
  }
  if (Number(classNameArr[1]) && Number(classNameArr[2])) {
    element.style.gridRow = `${classNameArr[1]}/${classNameArr[2]}`;
  }
};

const applyGridRow = (element) => {
  try {
    let allGridRowClasses = [];
    element.classList.forEach((i) => {
      i.includes("row") && allGridRowClasses.push(i);
    });
    allGridRowClasses.forEach((i) => {
      let classNameArr = splitElementClassName(i);
      if (classNameArr.length !== 3) {
        throw Error("Out of bounds");
      } else {
        applyGridRowToElement(element, classNameArr);
      }
    });
  } catch (error) {
    console.error(`Error while applying grid row to: ${element}\n${error}`);
  }
};

export default applyGridRow;
