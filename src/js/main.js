import "../scss/index.scss";

import applyPadding from "./padding.js";
import applyMargin from "./margin.js";
import applyGridGap from "./grid-gap.js";
import applyColor from "./colors.js";
import applyWidth from "./width.js";
import applyGrid from "./grid.js";
import applyFontSize from "./font-size.js";
import applyLineHeight from "./line-height.js";
import applyBorderWidth from "./border-width.js";
import applyBorderRadius from "./border-radius.js";
import applyHeight from "./height.js";
import applyBackgroundImage from "./bg-image.js";
import applyInteraction from "./interactions.js";
import applyGridColumn from "./grid-column.js";
import applyGridRow from "./grid-row.js";
import applyResponsive from "./responsive.js";

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
        applyResponsive(element);
      }
      if (elClass.startsWith("padding")) {
        applyPadding(element);
      }
      if (elClass.startsWith("margin")) {
        applyMargin(element);
      }
      if (elClass.startsWith("grid")) {
        applyGrid(element);
      }
      if (elClass.startsWith("grid-gap")) {
        applyGridGap(element);
      }
      if (elClass.startsWith("column")) {
        applyGridColumn(element);
      }
      if (elClass.startsWith("row")) {
        applyGridRow(element);
      }
      if (elClass.startsWith("color") || elClass.startsWith("bg-color")) {
        applyColor(element);
      }
      if (elClass.startsWith("width")) {
        applyWidth(element);
      }
      if (elClass.startsWith("height")) {
        applyHeight(element);
      }
      if (elClass.startsWith("font-size")) {
        applyFontSize(element);
      }
      if (elClass.startsWith("line-height")) {
        applyLineHeight(element);
      }
      if (elClass.startsWith("border-width")) {
        applyBorderWidth(element);
      }
      if (elClass.startsWith("round-corner")) {
        applyBorderRadius(element);
      }
      if (elClass.startsWith("bg-image")) {
        applyBackgroundImage(element);
      }
      if (elClass.startsWith("_")) {
        applyInteraction(element);
      }
    });
  });
};

applyElementStyles();

export default applyElementStyles;
