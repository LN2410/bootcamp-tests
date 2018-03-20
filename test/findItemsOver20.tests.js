describe('the findItemsOver20 function',function(){
  it('Should return all the products that have a quantity higher than 20', function(){
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    assert.equal(findItemsOver20(itemList),2);
  });
    it('Should return a message if the calculation of items over 20 is incorrect  ', function(){
      var itemList = [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},
          {name : 'apples', qty : 3},
      ];
      assert.notEqual(findItemsOver20((itemList),4),'This is not correct');
      });
});
