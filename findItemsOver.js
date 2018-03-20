function findItemsOver(list,threshold){
var store =[];
  for(var i =0;i<list.length;i++){
    var num = list[i].qty;
    if(num>threshold){
       store.push(list[i]);
    }
  }
    return store.length;

  }
