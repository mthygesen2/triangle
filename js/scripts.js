var triangle = function(side1, side2, side3) {
  if((side1 + side2 <= side3) ||
     (side2 + side3 <= side1) ||
     (side3 + side1 <= side2)) {
    return "not a triangle";
  } else if((side1 === side2) && (side1 === side3)) {
    return "equilateral";
  } else if(((side1 === side2) && (side1 !== side3)) ||
           ((side2 === side3) && (side2 !== side1)) ||
           ((side3 === side1) && (side3 !== side2)) ) {
    return "isosceles";
  } else if((side1 !== side2) && (side2 !== side3) && (side3 !== side1)) {
    return "scalene";
  }
};
