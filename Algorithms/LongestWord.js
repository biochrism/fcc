function findLongestWord(str){
    var splitit = str.split(" ");
    var howlong = 0;
    var long = "";
    for(var i=0; i<splitit.length; i++){
        console.log(splitit[i]);
        if(splitit[i].length > howlong){
            howlong = splitit[i].length;
        }//if
    }//for
    return howlong;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));