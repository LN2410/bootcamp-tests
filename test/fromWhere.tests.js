describe('the fromWhere function', function(){

  it('If the reg number starts with CY return Bellville', function(){
    assert.equal(fromWhere('CY'), ('Bellville'));
  });
  it('If the reg number starts with CJ return Paarl', function(){
    assert.equal(fromWhere('CJ'),('Paarl'));
  });
  it('If the reg number starts with CA return Cape Town',function(){
    assert.equal(fromWhere('CA'),('Cape Town'));
  });
  it('if the reg number is not for any of these places', function(){
    assert.equal(fromWhere('CF'),('Some other place!'));
  });
});
