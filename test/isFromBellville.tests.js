describe('The isFromBellville function', function(){
    // var reg = 'CY 245 256';
    it('should return true if the registration number startsWith CY', function(){
        assert.equal(isFromBellville('CY 245 256'),true)
    });
    it('should return false if the registration number !startsWith CY', function(){
      assert.equal(isFromBellville('CA 254 625'), false)
    });
});
