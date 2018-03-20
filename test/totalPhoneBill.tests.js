describe('the totalPhoneBill function - R2.75 per call & R0.65 per sms.', function(){

  it('should return the total bill for two calls and three smses', function(){
      assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45');
  });
  it('should return the total bill for two smses and one call', function(){
      assert.equal(totalPhoneBill('call, sms, sms'),'R4.05');
  });
  it('should return the total if no data has been provided', function(){
      assert.equal(totalPhoneBill(''),'R0.00');
  });
});
