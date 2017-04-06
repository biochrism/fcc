//my best way 
function truncateString(str,num){
    var result = "";
    if((str.length > num) && (num > 3) ){
        console.log("Option1");
        result = str.substring(0, num-3);
        result += "...";
        return result;
    }else if((str.length == num) || (str.length < num) ){
        console.log("Option2");
        return str;
    }else if(num <= 3){
        console.log("Option3");
        result = str.substring(0, num);
        result += "...";
        return result;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("A-", 1));


//Basic Code Solution
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }

}


//Advanced Code Solution
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}

