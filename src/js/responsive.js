"use strict";

import applyElementStyles from "./main";

const handleMobile = (element, className) => {
  let styleClass = className.replace("mob:", "");
  let allClasses = element.className.split(" ");

  if (window.screen.width <= 600) {
    allClasses.forEach((i) => {
      if (i.includes("mob:")) {
        let index = allClasses.indexOf(i);
        allClasses[index] = styleClass;
      }
    });
    element.className = allClasses.join(" ");
    applyElementStyles();
  }
};

const handleTablet = (element, className) => {
  let styleClass = className.replace("tab:", "");
  let allClasses = element.className.split(" ");

  if (window.screen.width > 600 && window.screen.width <= 1080) {
    allClasses.forEach((i) => {
      if (i.includes("tab:")) {
        let index = allClasses.indexOf(i);
        allClasses[index] = styleClass;
      }
    });
    element.className = allClasses.join(" ");
    applyElementStyles();
  }
};

const applyResponsive = (element) => {
  try {
    const allMobileClasses = [];
    const allTabletClasses = [];
    element.classList.forEach((i) => {
      i.includes("mob:") && allMobileClasses.push(i);
      i.includes("tab:") && allTabletClasses.push(i);
    });

    allMobileClasses.forEach((i) => {
      handleMobile(element, i);
    });
    allTabletClasses.forEach((i) => {
      handleTablet(element, i);
    });
  } catch (error) {
    console.error(
      `Error while applying responsive behavior to element: ${element}\n${error}`
    );
  }
};

export default applyResponsive;
