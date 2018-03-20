//declared a function
function countAllPaarl(RegNumbers){
  //print
  console.log(RegNumbers)
  //an empty array to store all the reg numbers for paarl
  var paarl = [];
  //i am splitting the string into an array
  var Rnumbers = RegNumbers.split(', ');
  //console.log(Rnumbers);
  //used the for loop in order to work through my list and fnd all reg for paarl, hence the if statement
  for(var i=0; i<Rnumbers.length; i++){
    if(Rnumbers[i].startsWith('CJ')){
      //i used push in order to push the paarl reg numbers into my empty array at the top
        paarl.push(Rnumbers[i]);
  }

  }
  //I am returning the reg numbers for paarl because paarl is the outcome of what I've done
      return paarl;
}
