describe('triangle', function() {
  it("is not a triangle if two side are equal to or less than the third side", function(){
    expect(triangle(1,1,5)).to.equal("not a triangle")
  });
  it("is a equilateral triange if all side are equal", function(){
    expect(triangle(2,2,2)).to.equal("equilateral")
  });
});
