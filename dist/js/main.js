import elements from "./elements.js";
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
import applyConditionalStyle from "./conditional-classes.js";
import smoothScroll from "./util.js";

window.addEventListener("load", smoothScroll);

elements.forEach((element) => {
  if (element.className.includes("padding")) {
    applyPadding(element);
  }
  if (element.className.includes("margin")) {
    applyMargin(element);
  }
  if (element.className.includes("grid")) {
    applyGrid(element);
  }
  if (element.className.includes("grid-gap")) {
    applyGridGap(element);
  }
  if (element.className.includes("color")) {
    applyColor(element);
  }
  if (element.className.includes("width")) {
    applyWidth(element);
  }
  if (element.className.includes("height")) {
    applyHeight(element);
  }
  if (element.className.includes("font-size")) {
    applyFontSize(element);
  }
  if (element.className.includes("line-height")) {
    applyLineHeight(element);
  }
  if (element.className.includes("border-width")) {
    applyBorderWidth(element);
  }
  if (element.className.includes("round-corner")) {
    applyBorderRadius(element);
  }
  if (element.className.includes("bg-image")) {
    applyBackgroundImage(element);
  }
  if (element.className.includes("if-")) {
    applyConditionalStyle(element);
  }
});
