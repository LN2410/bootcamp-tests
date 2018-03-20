describe('the totalPhoneBill function', function(){

  it('should return the total bill for the data provided', function(){
      assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45');
  });
  it('should return the total bill for the data provided', function(){
      assert.equal(totalPhoneBill('call, sms, sms'),'R4.05');
  });
  it('should return the total bill for the data provided', function(){
      assert.equal(totalPhoneBill(''),'R0.00');
  });
});
