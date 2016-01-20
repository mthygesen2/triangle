var triangle = function(side1, side2, side3) {
  if(side1 === side2 && side1 === side3) {
    return "equilateral";
  } else {
    return "not a triangle";
  }
};
