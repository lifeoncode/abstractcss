"use strict";
import splitElementClassName from "./util";

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

  if (classNameArr[1] == "scale") {
    style.textContent += `
          ._hover-scale-${classNameArr[2].replace(".", "\\.")}:hover {
              transform: scale(${classNameArr[2]}) !important;
          }
      `;
  }

  if (classNameArr[1] == "bg" && classNameArr[2] == "color") {
    style.textContent += `
          ._hover-bg-color-\\${classNameArr[3]}:hover {
              background-color: ${classNameArr[3]} !important;
          }
          `;
  }

  if (classNameArr[1] == "color") {
    style.textContent += `
          ._hover-color-\\${classNameArr[2]}:hover {
              color: ${classNameArr[2]} !important;
          }
          `;
  }
};

const applyActiveInteraction = (element, classNameArr) => {
  let style = createStyleTag();

  if (classNameArr[1] == "scale") {
    style.textContent += `
            ._active-scale-${classNameArr[2].replace(".", "\\.")}:active {
                transform: scale(${classNameArr[2]}) !important;
            }
        `;
  }

  if (classNameArr[1] == "bg" && classNameArr[2] == "color") {
    style.textContent += `
            ._active-bg-color-\\${classNameArr[3]}:active {
                background-color: ${classNameArr[3]} !important;
            }
            `;
  }

  if (classNameArr[1] == "color") {
    style.textContent += `
            ._active-color-\\${classNameArr[2]}:active {
                color: ${classNameArr[2]} !important;
            }
            `;
  }
};

const applyFocusInteraction = (element, classNameArr) => {
  let style = createStyleTag();

  if (classNameArr[1] == "scale") {
    style.textContent += `
            ._focus-scale-${classNameArr[2].replace(".", "\\.")}:focus {
                transform: scale(${classNameArr[2]}) !important;
            }
        `;
  }

  if (classNameArr[1] == "bg" && classNameArr[2] == "color") {
    style.textContent += `
            ._focus-bg-color-\\${classNameArr[3]}:focus {
                background-color: ${classNameArr[3]} !important;
            }
            `;
  }

  if (classNameArr[1] == "color") {
    style.textContent += `
            ._focus-color-\\${classNameArr[2]}:focus {
                color: ${classNameArr[2]} !important;
            }
            `;
  }
};

const applyInteraction = (element, className) => {
  try {
    element.style.transition = "all 0.3s ease";

    let classNameArr = splitElementClassName(className);
    if (classNameArr.length < 2 || classNameArr.length > 4) {
      throw Error("Out of bounds");
    } else {
      className.startsWith("_hover") &&
        applyHoverInteraction(element, classNameArr);
      className.startsWith("_active") &&
        applyActiveInteraction(element, classNameArr);
      className.startsWith("_focus") &&
        applyFocusInteraction(element, classNameArr);
    }
  } catch (error) {
    console.error(`Error while applying interaction to: ${element}\n${error}`);
  }
};

export default applyInteraction;
