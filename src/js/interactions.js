"use strict";

const splitElementClassName = (className) => {
  return className.split("-");
};

const applyHoverInteraction = (element, classNameArr) => {
  let style = document.querySelector("style");
  if (!style) {
    style = document.createElement("style");
    document.head.appendChild(style);
  }

  classNameArr.forEach((singleClass) => {
    let singleClassArr = splitElementClassName(singleClass);
    singleClassArr.forEach((i) => {
      if (i.includes("#")) {
        singleClassArr[singleClassArr.length - 1] = i.replace("#", "hex");
        element.classList.remove(singleClass);
        element.classList.add(singleClass.replace("#", "hex"));
      }
    });

    if (singleClassArr[1] == "bg" && singleClassArr[2] == "color") {
      style.textContent += `
            ._hover-bg-color-${singleClassArr[3]}:hover {
                background-color: ${singleClassArr[3].replace(
                  "hex",
                  "#"
                )} !important;
            }
            `;
    }

    if (singleClassArr[1] == "color") {
      style.textContent += `
            ._hover-color-${singleClassArr[2]}:hover {
                color: ${singleClassArr[2].replace("hex", "#")} !important;
            }
            `;
    }
  });
};

const applyInteraction = (element) => {
  try {
    let allHoverClasses = [];
    element.classList.forEach((i) => {
      i.includes("_hover") && allHoverClasses.push(i);
    });

    allHoverClasses.forEach((i) => {
      let classNameArr = splitElementClassName(i);
      if (classNameArr.length < 2 || classNameArr.length > 4) {
        throw Error("Out of bounds");
      } else {
        applyHoverInteraction(element, allHoverClasses);
      }
    });
  } catch (error) {
    console.error(`Error while applying interaction to: ${element}\n${error}`);
  }
};

export default applyInteraction;
