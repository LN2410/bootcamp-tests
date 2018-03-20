describe('the findItemsOver function',function(){
  it('The function should return products that have quantity higher than the threshold.', function(){
    var threshold = 5;
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    assert.equal(findItemsOver(itemList,threshold),3);
    });
    it('The function should not return products that have quantity higher than the threshold.', function(){
      var threshold = 20
      var itemList = [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},
          {name : 'apples', qty : 3},
      ];
      assert.notEqual(findItemsOver20(itemList, threshold),4);
      });
});
