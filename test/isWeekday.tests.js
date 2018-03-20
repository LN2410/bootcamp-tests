describe('The isWeekday function', function(){
    // var weekDay = 'Monday'
    // var weekend = 'Saturday'
    it('should return false if the parameter passed in is a weekend', function(){
      assert.equal(isWeekday('Saturday'), false);
      });
    it('should return true if the parameter passed in a weekDay', function(){
      assert.equal(isWeekday('Monday'), true);
    });
    });
