"use strict";

import applyElementStyles from "./main";

const IS_TABLET = window.innerWidth > 600 && window.innerWidth <= 1080;
const IS_MOBILE = window.innerWidth <= 600;

const handleMobile = (element, className) => {
  let styleClass = className.replace("mob:", "");
  let allClasses = element.className.split(" ");

  allClasses.forEach((i) => {
    if (i.includes("mob:")) {
      let index = allClasses.indexOf(i);
      allClasses[index] = styleClass;
    }
  });
  element.className = allClasses.join(" ");
  applyElementStyles();
};

const handleTablet = (element, className) => {
  let styleClass = className.replace("tab:", "");
  let allClasses = element.className.split(" ");

  allClasses.forEach((i) => {
    if (i.startsWith("tab:")) {
      let index = allClasses.indexOf(i);
      allClasses[index] = styleClass;
    }
  });
  element.className = allClasses.join(" ");
  applyElementStyles();
};

const applyResponsive = (element) => {
  try {
    const allMobileClasses = [];
    const allTabletClasses = [];
    element.classList.forEach((i) => {
      i.startsWith("mob:") && allMobileClasses.push(i);
      i.startsWith("tab:") && allTabletClasses.push(i);
    });

    if (IS_TABLET) {
      allTabletClasses.forEach((i) => {
        handleTablet(element, i);
      });
    }
    if (IS_MOBILE) {
      allMobileClasses.forEach((i) => {
        handleMobile(element, i);
      });
    }
  } catch (error) {
    console.error(
      `Error while applying responsive behavior to element: ${element}\n${error}`
    );
  }
};

export default applyResponsive;
