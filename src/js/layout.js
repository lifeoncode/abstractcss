"use strict";

import splitElementClassName from "./util";

class Layout {
  constructor(element, className) {
    this.element = element;
    this.className = className;
  }

  //   background image
  handleBackgroundImage() {
    const applyBackgroundImageToElement = (element, classArr) => {
      element.style.backgroundImage = `url("${classArr[1]}")`;
      element.style.backgroundPosition = "center center";
      element.style.backgroundRepeat = "no-repeat";
      element.style.backgroundSize = "cover";
    };

    try {
      let classNameArr = splitElementClassName(this.className, "-image-");
      if (classNameArr.length !== 2) {
        throw Error("Out of bounds");
      } else {
        applyBackgroundImageToElement(this.element, classNameArr);
      }
    } catch (error) {
      console.error(
        `Error while applying background image to: ${this.element}\n${error}`
      );
    }
  }

  //   margin
  handleMargin() {
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

    try {
      let classNameArr = splitElementClassName(this.className, "-");
      if (classNameArr.length < 2 || classNameArr.length > 3) {
        throw Error("Out of bounds");
      } else {
        applyMarginToElement(this.element, classNameArr, classNameArr.length);
      }
    } catch (error) {
      console.error(
        `Error while applying margin to: ${this.element}\n${error}`
      );
    }
  }

  //   padding
  handlePadding() {
    const applyPaddingToElement = (element, classArr, classArrLength) => {
      if (classArrLength === 2) {
        element.style.padding = `${classArr[1]}`;
      } else if (classArrLength === 3) {
        switch (classArr[1]) {
          case "left":
            element.style.paddingLeft = `${classArr[2]}`;
            break;
          case "right":
            element.style.paddingRight = `${classArr[2]}`;
            break;
          case "top":
            element.style.paddingTop = `${classArr[2]}`;
            break;
          case "bottom":
            element.style.paddingBottom = `${classArr[2]}`;
            break;
          case "x":
            element.style.paddingLeft = `${classArr[2]}`;
            element.style.paddingRight = `${classArr[2]}`;
            break;
          case "y":
            element.style.paddingTop = `${classArr[2]}`;
            element.style.paddingBottom = `${classArr[2]}`;
            break;
          default:
            throw Error("Could not apply padding to element");
        }
      }
    };

    try {
      let classNameArr = splitElementClassName(this.className, "-");
      if (classNameArr.length < 2 || classNameArr.length > 3) {
        throw Error("Out of bounds");
      } else {
        applyPaddingToElement(this.element, classNameArr, classNameArr.length);
      }
    } catch (error) {
      console.error(
        `Error while applying padding to: ${this.element}\n${error}`
      );
    }
  }

  //   border radius
  handleBorderRadius() {
    const applyBorderRadiusToElement = (
      element,
      classArr,
      classNameArrLength
    ) => {
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

    try {
      let classNameArr = splitElementClassName(this.className, "-");
      if (classNameArr.length < 3 || classNameArr.length > 5) {
        throw Error("Out of bounds");
      } else {
        applyBorderRadiusToElement(
          this.element,
          classNameArr,
          classNameArr.length
        );
      }
    } catch (error) {
      console.error(
        `Error while applying border radius to: ${this.element}\n${error}`
      );
    }
  }

  //   border width
  handleBorderWidth() {
    const applyBorderWidthToElement = (element, classArr) => {
      element.style.borderWidth = `${classArr[2]}`;
    };

    try {
      let classNameArr = splitElementClassName(this.className, "-");
      if (classNameArr.length !== 3) {
        throw Error("Out of bounds");
      } else {
        applyBorderWidthToElement(this.element, classNameArr);
      }
    } catch (error) {
      console.error(
        `Error while applying border width to: ${this.element}\n${error}`
      );
    }
  }

  //   width
  handleWidth() {
    const applyWidthToElement = (element, classArr) => {
      if (
        classArr[1] !== "min" ||
        classArr[1] !== "med" ||
        classArr[1] !== "max"
      ) {
        element.style.width = `${classArr[1]}`;
      }
    };

    try {
      let classNameArr = splitElementClassName(this.className, "-");
      if (classNameArr.length < 2 || classNameArr.length > 3) {
        throw Error("Out of bounds");
      } else {
        applyWidthToElement(this.element, classNameArr);
      }
    } catch (error) {
      console.error(`Error while applying width to: ${this.element}\n${error}`);
    }
  }

  //   height
  handleHeight() {
    const applyHeightToElement = (element, classArr) => {
      if (
        classArr[1] !== "min" ||
        classArr[1] !== "med" ||
        classArr[1] !== "max"
      ) {
        element.style.height = `${classArr[1]}`;
      }
    };

    try {
      let classNameArr = splitElementClassName(this.className, "-");
      if (classNameArr.length !== 2) {
        throw Error("Out of bounds");
      } else {
        applyHeightToElement(this.element, classNameArr);
      }
    } catch (error) {
      console.error(
        `Error while applying height to: ${this.element}\n${error}`
      );
    }
  }

  //   grid
  handleGrid() {
    const applyGridToElement = (element, classArr) => {
      element.style.display = "grid";
      element.style.gridTemplateColumns = `repeat(${classArr[1]}, 1fr)`;
    };

    try {
      if (
        !this.className.includes("grid-gap") &&
        !this.className.includes("grid-auto")
      ) {
        let classNameArr = splitElementClassName(this.className, "-");
        if (classNameArr.length < 2 || classNameArr.length > 3) {
          throw Error("Out of bounds");
        } else {
          applyGridToElement(this.element, classNameArr);
        }
      }
    } catch (error) {
      console.error(
        `Error while applying grid gap to: ${this.element}\n${error}`
      );
    }
  }

  //   grid gap
  handleGridGap() {
    const applyGridGapToElement = (element, classArr, classArrLength) => {
      if (classArrLength === 3) {
        element.style.gridGap = `${classArr[2]}`;
      } else if (classArrLength === 4) {
        switch (classArr[2]) {
          case "row":
            element.style.gridRowGap = `${classArr[3]}`;
            break;
          case "col":
            element.style.gridColumnGap = `${classArr[3]}`;
            break;
          case "tab":
            window.screen.width <= 1080 &&
              (element.style.gridGap = `${classArr[3]}`);
            break;
          case "mob":
            window.screen.width <= 600 &&
              (element.style.gridGap = `${classArr[3]}`);
            break;
          default:
            throw Error("Could not apply padding to element");
        }
      }
    };

    try {
      let classNameArr = splitElementClassName(this.className, "-");
      if (classNameArr.length < 3 || classNameArr.length > 4) {
        throw Error("Out of bounds");
      } else {
        applyGridGapToElement(this.element, classNameArr, classNameArr.length);
      }
    } catch (error) {
      console.error(
        `Error while applying grid gap to: ${this.element}\n${error}`
      );
    }
  }

  //   grid column
  handleGridColumn() {
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

    try {
      let classNameArr = splitElementClassName(this.className, "-");
      if (classNameArr.length !== 3) {
        throw Error("Out of bounds");
      } else {
        applyGridColumnToElement(this.element, classNameArr);
      }
    } catch (error) {
      console.error(
        `Error while applying grid column to: ${this.element}\n${error}`
      );
    }
  }

  //   grid row
  handleGridRow() {
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

    try {
      let classNameArr = splitElementClassName(this.className, "-");
      if (classNameArr.length !== 3) {
        throw Error("Out of bounds");
      } else {
        applyGridRowToElement(this.element, classNameArr);
      }
    } catch (error) {
      console.error(
        `Error while applying grid row to: ${this.element}\n${error}`
      );
    }
  }
}

export default Layout;
