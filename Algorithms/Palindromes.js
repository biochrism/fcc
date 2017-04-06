//my way; the true way

function palindrome(str){
    var clean = "";
    var reversearray = "";
    var reverse = "";
    var cleanarray = "";

    clean = str.toLowerCase(); 
    clean = clean.replace(/\W/gi, "");
    clean = clean.replace(/[^\w\s]/gi, "");
    clean = clean.replace(/_/g, "");

    cleanarray = clean.split("");
    reversearray = cleanarray.reverse();
    reverse = reversearray.join();
    reverse = reverse.replace(/,/g,"");

    //console.log("String: "+str);
    //console.log("Reverse: "+reverse);

    if(clean == reverse){return true;}
    if(clean !== reverse){return false;}

}
console.log(palindrome("_eye"));


