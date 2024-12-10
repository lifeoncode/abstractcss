"use strict";

import applyElementStyles from "./main";

class Responsive {
  $IS_TABLET = window.innerWidth > 600 && window.innerWidth <= 1080;
  $IS_MOBILE = window.innerWidth <= 600;

  constructor(element, className) {
    this.element = element;
    this.className = className;
  }

  static applyMobile(element, className) {
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
  }

  static applyTablet(element, className) {
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
  }

  handleResponsiveness() {
    try {
      if (this.className.startsWith("mob:") && this.$IS_MOBILE) {
        Responsive.applyMobile(this.element, this.className);
      }
      if (this.className.startsWith("tab:") && this.$IS_TABLET) {
        Responsive.applyTablet(this.element, this.className);
      }
    } catch (error) {
      console.error(
        `Error while applying responsive behavior to element: ${this.element}\n${error}`
      );
    }
  }
}

export default Responsive;
