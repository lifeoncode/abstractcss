import "../scss/index.scss";
import Layout from "./layout.js";
import Interactions from "./interactions.js";
import Colors from "./colors.js";
import Responsive from "./responsive.js";
import Typography from "./typography.js";

const scanHTMLElements = () => {
  const [...allElements] = [
    document?.querySelectorAll("body"),
    document?.querySelectorAll("header"),
    document?.querySelectorAll("nav"),
    document?.querySelectorAll("ul"),
    document?.querySelectorAll("ol"),
    document?.querySelectorAll("footer"),
    document?.querySelectorAll("main"),
    document?.querySelectorAll("aside"),
    document?.querySelectorAll("section"),
    document?.querySelectorAll("div"),
    document?.querySelectorAll("h1"),
    document?.querySelectorAll("h2"),
    document?.querySelectorAll("h3"),
    document?.querySelectorAll("h4"),
    document?.querySelectorAll("h5"),
    document?.querySelectorAll("h6"),
    document?.querySelectorAll("p"),
    document?.querySelectorAll("span"),
    document?.querySelectorAll("em"),
    document?.querySelectorAll("code"),
    document?.querySelectorAll("article"),
    document?.querySelectorAll("a"),
    document?.querySelectorAll("form"),
    document?.querySelectorAll("input"),
    document?.querySelectorAll("select"),
    document?.querySelectorAll("textarea"),
    document?.querySelectorAll("button"),
    document?.querySelectorAll("ul"),
    document?.querySelectorAll("ol"),
    document?.querySelectorAll("li"),
    document?.querySelectorAll("img"),
  ];

  let elements = [];
  allElements.map((els) => {
    els.forEach((el) => elements.push(el));
  });

  return elements;
};

const applyElementStyles = () => {
  const elements = scanHTMLElements();

  elements.forEach((element) => {
    let elementClasses = element.className.split(" ");
    elementClasses.forEach((elClass) => {
      if (elClass.startsWith("mob:") || elClass.startsWith("tab:")) {
        new Responsive(element, elClass).handleResponsiveness();
      }
      if (elClass.startsWith("padding")) {
        new Layout(element, elClass).handlePadding();
      }
      if (elClass.startsWith("margin")) {
        new Layout(element, elClass).handleMargin();
      }
      if (elClass.startsWith("grid")) {
        new Layout(element, elClass).handleGrid();
      }
      if (elClass.startsWith("grid-gap")) {
        new Layout(element, elClass).handleGridGap();
      }
      if (elClass.startsWith("column")) {
        new Layout(element, elClass).handleGridColumn();
      }
      if (elClass.startsWith("row")) {
        new Layout(element, elClass).handleGridRow();
      }
      if (elClass.startsWith("color")) {
        // new Colors(element, elClass).handleTextColor();
        let c = new Colors(element, elClass);
        c.handleTextColor();
      }
      if (elClass.startsWith("bg-color")) {
        // new Colors(element, elClass).handleBackgroundColor();
        let c = new Colors(element, elClass);
        c.handleBackgroundColor();
      }
      if (elClass.startsWith("border-color")) {
        // new Colors(element, elClass).handleBorderColor();
        let c = new Colors(element, elClass);
        c.handleBorderColor();
      }
      if (elClass.startsWith("width")) {
        new Layout(element, elClass).handleWidth();
      }
      if (elClass.startsWith("height")) {
        new Layout(element, elClass).handleHeight();
      }
      if (elClass.startsWith("font-size")) {
        new Typography(element, elClass).handleFontSize();
      }
      if (elClass.startsWith("line-height")) {
        new Typography(element, elClass).handleLineHeight();
      }
      if (elClass.startsWith("border-width")) {
        new Layout(element, elClass).handleBorderWidth();
      }
      if (elClass.startsWith("border-radius")) {
        new Layout(element, elClass).handleBorderRadius();
      }
      if (elClass.startsWith("bg-image")) {
        new Layout(element, elClass).handleBackgroundImage();
      }
      if (elClass.startsWith("_")) {
        new Interactions(element, elClass).handleInteraction();
      }
    });
  });
};

applyElementStyles();

export default applyElementStyles;
