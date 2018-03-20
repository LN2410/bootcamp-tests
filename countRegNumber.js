function countRegNumber(registrationNumber){
    var myArray = registrationNumber.split(',');
  return myArray.length;
}
console.log(countRegNumber("CA 182736,CY 523519,CJ 812328"));
console.log(countRegNumber("CV 222344, CF 565266, RCD 6562 L,CA 182736,CY 523519,CJ 812328"));
