describe('The regCheck function', function(){
  //var reg = 'CA 115-255','DV 23 NB GP';
  it('should return true if a registration number is for GP, L, EC, MP registration plates',function(){
    assert.equal(regCheck('DV 23 NB GP', 'GP'),true)
});
  it('should return false if a registration number is not for GP, L, EC, MP registration plates', function(){
    assert.equal(regCheck('CY189-012', 'GP'), false)
  });
});
