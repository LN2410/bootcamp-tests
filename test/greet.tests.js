describe('The greet function', function(){

    it('should greet Janine correctly', function(){
        assert.equal('Hello, Janine', greet('Janine'));
    });
    it('should greet Karen correctly', function(){
        assert.equal('Hello, Karen', greet('Karen'));
    });
});
