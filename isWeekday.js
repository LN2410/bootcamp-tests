function isWeekday(weekDay){
  //var day = 'Monday'
  //var day = 'Saturday'
  return !weekDay.startsWith('S');
}
console.log(isWeekday('Monday'));
console.log(isWeekday('Saturday'));
