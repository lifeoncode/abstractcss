"use strict";

const splitElementClassName = (className) => {
  return className.split("-image-");
};

const applyBackgroundImageToElement = (element, classArr) => {
  element.style.backgroundImage = `url("${classArr[1]}")`;
  element.style.backgroundPosition = "center center";
  element.style.backgroundRepeat = "no-repeat";
  element.style.backgroundSize = "cover";
};

const applyBackgroundImage = (element) => {
  try {
    let allBackgroundImageClasses = [];
    element.classList.forEach((i) => {
      if (i.includes("bg-image")) {
        allBackgroundImageClasses.push(i);
      }
    });
    allBackgroundImageClasses.forEach((i) => {
      let classNameArr = splitElementClassName(i);
      if (classNameArr.length !== 2) {
        throw Error("Out of bounds");
      } else {
        applyBackgroundImageToElement(element, classNameArr);
      }
    });
  } catch (error) {
    console.error(
      `Error while applying background image to: ${element}\n${error}`
    );
  }
};

export default applyBackgroundImage;
