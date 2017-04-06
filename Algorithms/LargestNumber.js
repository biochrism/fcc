function largestOfFour(arr){
    var myarray = [];
    for(var i=0; i<arr.length; i++){
        //console.log(arr[i]);
        var largest = 0;
        for(var y=0; y<arr[i].length; y++){
            //console.log(arr[i][y]);
            if(arr[i][y] > largest){
                largest = arr[i][y];
            }//if
        }//for
        myarray.push(largest);
    }//for     
    return myarray   
}//function

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
