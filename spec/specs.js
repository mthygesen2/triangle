describe('triangle', function() {
  it("is not a triangle if two side are equal to or less than the third side", function(){
    expect(triangle(1,2,5)).to.equal("not a triangle");
  });
  it("is a equilateral triange if all side are equal", function(){
    expect(triangle(1,1,1)).to.equal("equilateral");
  });
  it("is an isosceles if two side are equal", function(){
    expect(triangle(5,5,7)).to.equal("isosceles");
  });
  it("is a scalene if no sides are equal", function(){
    expect(triangle(4,5,6)).to.equal("scalene");
  });
});
