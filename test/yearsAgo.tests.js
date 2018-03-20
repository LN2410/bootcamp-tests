describe('the yearsAgo function', function(){

  it('should return how many years ago that was', function(){
    assert.equal(yearsAgo(2000), 18);
  });
  it('should return a message if it is not a year', function(){
    assert.notEqual(yearsAgo('year1'), 'This is not a year');
  });
});
