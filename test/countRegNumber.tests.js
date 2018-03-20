describe('The countRegNumber function', function(){
  it('should return the number of registration numbers in the string', function(){
    assert.equal(countRegNumber("CA 182736,CY 523519,CJ 812328"),3)
  });
  it('should return an error message if it is not a reg number', function(){
    assert.notEqual(('Lihle'), 'This is not a reg number')
  });
});
