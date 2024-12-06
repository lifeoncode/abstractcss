"use strict";

const splitElementClassName = (className) => {
  return className.split("-");
};

const createStyleTag = () => {
  let styleTag = document.querySelector("style");
  if (!styleTag) {
    styleTag = document.createElement("style");
    document.head.appendChild(styleTag);
  }

  return styleTag;
};

const applyHoverInteraction = (element, classNameArr) => {
  let style = createStyleTag();

  classNameArr.forEach((singleClass) => {
    let singleClassArr = splitElementClassName(singleClass);

    if (singleClassArr[1] == "scale") {
      style.textContent += `
            ._hover-scale-${singleClassArr[2].replace(".", "\\.")}:hover {
                transform: scale(${singleClassArr[2]}) !important;
            }
        `;
    }

    if (singleClassArr[1] == "bg" && singleClassArr[2] == "color") {
      style.textContent += `
            ._hover-bg-color-\\${singleClassArr[3]}:hover {
                background-color: ${singleClassArr[3]} !important;
            }
            `;
    }

    if (singleClassArr[1] == "color") {
      style.textContent += `
            ._hover-color-\\${singleClassArr[2]}:hover {
                color: ${singleClassArr[2]} !important;
            }
            `;
    }
  });
};

const applyActiveInteraction = (element, classNameArr) => {
  let style = createStyleTag();

  classNameArr.forEach((singleClass) => {
    let singleClassArr = splitElementClassName(singleClass);

    if (singleClassArr[1] == "scale") {
      style.textContent += `
              ._active-scale-${singleClassArr[2].replace(".", "\\.")}:active {
                  transform: scale(${singleClassArr[2]}) !important;
              }
          `;
    }

    if (singleClassArr[1] == "bg" && singleClassArr[2] == "color") {
      style.textContent += `
              ._active-bg-color-\\${singleClassArr[3]}:active {
                  background-color: ${singleClassArr[3]} !important;
              }
              `;
    }

    if (singleClassArr[1] == "color") {
      style.textContent += `
              ._active-color-\\${singleClassArr[2]}:active {
                  color: ${singleClassArr[2]} !important;
              }
              `;
    }
  });
};

const applyFocusInteraction = (element, classNameArr) => {};

const applyInteraction = (element) => {
  try {
    element.style.transition = "all 0.3s ease";

    let allHoverClasses = [];
    let allActiveClasses = [];
    let allFocusClasses = [];
    element.classList.forEach((i) => {
      i.includes("_hover") && allHoverClasses.push(i);
      i.includes("_active") && allActiveClasses.push(i);
      i.includes("_focus") && allFocusClasses.push(i);
    });

    allHoverClasses.forEach((i) => {
      let classNameArr = splitElementClassName(i);
      if (classNameArr.length < 2 || classNameArr.length > 4) {
        throw Error("Out of bounds");
      } else {
        applyHoverInteraction(element, allHoverClasses);
      }
    });

    allActiveClasses.forEach((i) => {
      let classNameArr = splitElementClassName(i);
      if (classNameArr.length < 2 || classNameArr.length > 4) {
        throw Error("Out of bounds");
      } else {
        applyActiveInteraction(element, allActiveClasses);
      }
    });

    allFocusClasses.forEach((i) => {
      let classNameArr = splitElementClassName(i);
      if (classNameArr.length < 2 || classNameArr.length > 4) {
        throw Error("Out of bounds");
      } else {
        applyFocusInteraction(element, allFocusClasses);
      }
    });
  } catch (error) {
    console.error(`Error while applying interaction to: ${element}\n${error}`);
  }
};

export default applyInteraction;
