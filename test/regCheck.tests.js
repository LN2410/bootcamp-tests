describe('The regCheck function', function(){
  var reg = 'CA 115-255';
  var reg2 = 'CF 115-226';
  it('should return true if the registration number startsWith CA',function(){
    assert.equal(isFromCapeTown(reg),true)
});
  it('should return false if the registration number does !startsWith CA',function(){
    assert.equal(isFromCapeTown(reg2),false)
  });
});
