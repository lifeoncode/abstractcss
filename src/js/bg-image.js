"use strict";
import splitElementClassName from "./util";

const applyBackgroundImageToElement = (element, classArr) => {
  element.style.backgroundImage = `url("${classArr[1]}")`;
  element.style.backgroundPosition = "center center";
  element.style.backgroundRepeat = "no-repeat";
  element.style.backgroundSize = "cover";
};

const applyBackgroundImage = (element, elClass) => {
  try {
    let classNameArr = splitElementClassName(elClass, "-image-");
    if (classNameArr.length !== 2) {
      throw Error("Out of bounds");
    } else {
      applyBackgroundImageToElement(element, classNameArr);
    }
  } catch (error) {
    console.error(
      `Error while applying background image to: ${element}\n${error}`
    );
  }
};

export default applyBackgroundImage;
