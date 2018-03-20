function totalPhoneBill (phone){

  var total = 0;
  var calls = 0;
  var smses = 0;
  var phoneSplit = phone.split(', ');

  for(var i=0;i<phoneSplit.length;i=i+1){
    if(phoneSplit[i].startsWith('c')){
      calls = calls + 2.75
  }

  else if(phoneSplit[i].startsWith('s')){
    smses = smses + 0.65
  }
  }

  total = smses + calls
  return "R" + total.toFixed(2)
}
