"use strict";
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

export default elements;
