function slasher(arr,howMany){
    // remove the head
  arr.splice(0, howMany);
  // return the remaining or the tail
  return arr;
}

console.log(slasher([1, 2, 3], 2));