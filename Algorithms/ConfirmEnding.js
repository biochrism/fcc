function confirmEnding(str, target){
    var targetlong = target.length;
    //console.log(targetlong);
    var thesub = str.substring((str.length-targetlong),str.length);
    //console.log(thesub);
    if(target == thesub){
        return true;
    }else{
        return false;
    }//else
}//function

console.log(confirmEnding("Bastian", "iahn"));
