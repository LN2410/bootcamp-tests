describe('The greet function', function(){

    it('should greet Janine correctly', function(){
        assert.equal('Hello, Janine', greet('Janine'));
    });
    it('should greet Karen correctly', function(){
        assert.equal('Hello, Karen', greet('Karen'));
    });
    it('should not greet if is not a name', function(){
        // assert.notEqual(56464, greet('This is not a name'));
        assert.notEqual(greet(16556), 'This is not a name')
    });
});
