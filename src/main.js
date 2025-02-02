import "./css/base.css";
import AbstractCSS from "./js/abstractcss.js";

// library use
export { AbstractCSS };

// init for browser
document.addEventListener("DOMContentLoaded", () => {
  window.AbstractCSS = new AbstractCSS();
  window.AbstractCSS.init();
});
