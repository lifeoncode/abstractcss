import "../scss/index.scss";
import Layout from "./layout.js";
import Interactions from "./interactions.js";
import Colors from "./colors.js";
import Responsive from "./responsive.js";
import Typography from "./typography.js";

const scanHTMLElements = () => {
  const allElements = document.querySelectorAll("*");
  return Array.from(allElements);
};

const applyElementStyles = () => {
  const elements = scanHTMLElements();

  const handlers = {
    "mob:": (el, cls) => new Responsive(el, cls).handleResponsiveness(),
    "tab:": (el, cls) => new Responsive(el, cls).handleResponsiveness(),
    padding: (el, cls) => new Layout(el, cls).handlePadding(),
    margin: (el, cls) => new Layout(el, cls).handleMargin(),
    grid: (el, cls) => new Layout(el, cls).handleGrid(),
    "grid-gap": (el, cls) => new Layout(el, cls).handleGridGap(),
    column: (el, cls) => new Layout(el, cls).handleGridColumn(),
    row: (el, cls) => new Layout(el, cls).handleGridRow(),
    color: (el, cls) => new Colors(el, cls).handleTextColor(),
    "bg-color": (el, cls) => new Colors(el, cls).handleBackgroundColor(),
    "border-color": (el, cls) => new Colors(el, cls).handleBorderColor(),
    width: (el, cls) => new Layout(el, cls).handleWidth(),
    height: (el, cls) => new Layout(el, cls).handleHeight(),
    "font-size": (el, cls) => new Typography(el, cls).handleFontSize(),
    "line-height": (el, cls) => new Typography(el, cls).handleLineHeight(),
    "border-width": (el, cls) => new Layout(el, cls).handleBorderWidth(),
    "border-radius": (el, cls) => new Layout(el, cls).handleBorderRadius(),
    "bg-image": (el, cls) => new Layout(el, cls).handleBackgroundImage(),
    _: (el, cls) => new Interactions(el, cls).handleInteraction(),
  };

  for (const element of elements) {
    const classNames = element.className?.split(" ") || [];
    for (const cls of classNames) {
      for (const prefix in handlers) {
        if (cls.startsWith(prefix)) {
          handlers[prefix](element, cls);
          break;
        }
      }
    }
  }
};

applyElementStyles();

export default applyElementStyles;
