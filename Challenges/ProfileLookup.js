
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];



//my code:
function lookUpProfile(firstName, prop){
    var result = "No such contact";
    for(var i=0; i<contacts.length; i++){
        if(contacts[i].firstName == firstName && contacts[i].hasOwnProperty(prop)){
            result = contacts[i][prop];
        }else if(contacts[i].hasOwnProperty(prop) ==  false){
            result = "No such property";
        }
    }
    return result;
}//lookUpProfile

/*
Here is the code from the site:

function lookUpProfile(firstName, prop){
    var answer = "No such contact";
    contacts.some(function(arg) {
        if (arg.firstName === firstName && arg.hasOwnProperty(prop) === true) {
            answer = arg[prop];
        } else if (arg.hasOwnProperty(prop) === false) {
            answer = "No such property";
        }
    });
    return answer;
}//lookUpProfile

*/



// Change these values to test your function
console.log(lookUpProfile("Akira", "likes"));  
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Akira", "address"));          