describe('the countAllPaarl function', function(){

  it('should return all the registration numbers for paarl', function(){
    assert.equal(countAllPaarl[ 'CJ 678 543', 'CJ 67890' ],);
  });
  it('should not return registration number when not for paarl', function(){
    assert.notEqual(countAllPaarl[ 'GP 678 543', 'CA 67890' ], "CJ");
  });
});
