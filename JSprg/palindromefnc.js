const prompt = require("prompt-sync")()
let str=prompt("enter string: ");
let str1=Array.from(str)
let rev=str1.reverse();
let rev1=rev.join("");
let rev2=rev1.toUpperCase();
let str2=str.toUpperCase();
 if(str2==rev2){
     console.log("string is palindrome");
 }
 else{
     console.log("string is not palindrome");
 }