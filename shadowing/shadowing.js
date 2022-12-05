let arrUnSort = [1,4,26,9,2];
let arrSort = [];

function arraySorted(arrUnSort, arrSort) {
  // same as: var arrSort =
  arrSort = arrUnSort.sort((a,b) => a - b);
  console.log('inside', arrSort);
}

arraySorted(arrUnSort, arrSort);
console.log('outside', arrSort);
console.log('unsort', arrUnSort);
