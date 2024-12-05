"use strict";

const splitElementClassName = (className) => {
  return className.split("-");
};

const applyConditionalStyleToElement = (
  element,
  classArr,
  classNameArrLength
) => {
  if (element.classList.includes(` ${classArr[1]} `)) {
    let styleArr = classArr[2].split(":");
    element.style.styleArr[0] = styleArr[1];
  }
};

console.log();
const applyConditionalStyle = (element) => {
  try {
    let allConditionClasses = [];
    element.classList.forEach((i) => {
      if (i.includes("if-")) {
        allConditionClasses.push(i);
      }
    });
    allConditionClasses.forEach((i) => {
      let classNameArr = splitElementClassName(i);
      if (classNameArr.length !== 3) {
        throw Error("Out of bounds");
      } else {
        applyConditionalStyleToElement(
          element,
          classNameArr,
          classNameArr.length
        );
      }
    });
  } catch (error) {
    console.error(
      `Error while applying conditional style to: ${element}\n${error}`
    );
  }
};

export default applyConditionalStyle;
