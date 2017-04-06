
/*

//1.
function max(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}
//console.log(max(5,5));

//2.
function maxOfThree(a,b,c){
    if(a>b && a>c){return a;}
    if(b>a && b>c){return b;}
    if(c>a && c>b){return c;}
}
//console.log(maxOfThree(456,3334,234));


//3.
function vowelOrNot(x){
    var voweles = ["a","e","u","i","o"]; 
    for(var i =0; i<voweles.length; i++){
        if (voweles[i] == x){
            return x + " is a vowel";
        }else{
            return x + " is NOT a vowel";
        }
    }
}
//console.log(vowelOrNot("y"));


//4.
function translate(str){
  var strarray = "";
  var x = "";
  var vowels = []; 
  var newarray = [];
  var newstr = "";

  strarray = str.split("");
  vowels = ["a","e","u","i","o"]; 

    for(var i=0; i<strarray.length; i++){
        x = strarray[i];
        if(x==" "){
            console.log(x + " EMPTY");
            newarray.push(x);
        }else if(x=="a"||x=="e"||x=="u"||x=="i"||x=="o"){
            console.log(x + " vowel");
            newarray.push(x);
         }else{
             console.log(x + " NOT");
             newarray.push(x+"o"+x);
         }
       
    }//for  

 newstr = newarray.join();
  newstr = newstr.replace(/,/g,"");
  return newstr;
}//function
console.log(translate("kaboom elimination"));


//5.
function sum(arr){
    var result = 0;
    for(var i=0; i<arr.length; i++){result += arr[i];}
    return result;
}

function multiply(arr){
    var result = 1;
    for(var i=0; i<arr.length; i++){result *= arr[i];}
    return result;
}

console.log(sum([1,2,3,4]));
console.log(multiply([1,2,3,4]));


//6.
function reverse(str){
    var strarray = str.split("");
    strarray = strarray.reverse();
    var rstr = strarray.join();
    rstr = rstr.replace(/,/g,"");

    return rstr;
}
console.log(reverse("kaboom elimination"));

//7.


//8.
function findLongestWord(arr){
    var longest = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i].length > longest){
            longest = arr[i].length;
        }
    }//for    

    return longest;

}//function

console.log(findLongestWord(["kaboom","elimination","educationhhh"]));


//9.
function filterLongWords(arr,x){
    var result = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i].length > x){
            
            result.push(arr[i]);
        }
    }//for
    return result;
}//function

console.log(filterLongWords(["kaboom","elimination","educationhhh"], 10));

*/


//10.
function charFreq(str){

}
