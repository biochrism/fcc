//mine with researching array methods
function chunkArrayInGroups(arr,size){
    var result = [];
    var i,y;
    for(i=0,y=arr.length; i<y; i+=size){
        var temp = arr.slice(i,i+size);
        result.push(temp);
    }//for
    return result;
}//function

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

//formal
function chunkArrayInGroups(arr, size) {

  var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1)
      temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0)
    result.push(temp);
  return result;
}

//intermediate solution
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arr2 = [];
  for (var i = 0; i < arr.length; i+=size) {
	arr2.push(arr.slice(i , i+size));
  }
  return arr2;
}

//Advanced solution
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  var i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i+size));
    i += size;
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

//Advanced Solution 2
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0,size));
  }
  return newArr;
}

