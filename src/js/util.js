const splitElementClassName = (className, splitFrom = "-") => {
  let splitString = "";
  if (typeof className === "string") {
    splitString = className.split(splitFrom);
  }

  return splitString;
  // return className.split(splitFrom);
};

export default splitElementClassName;
