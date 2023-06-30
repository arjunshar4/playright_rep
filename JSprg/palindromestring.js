const prompt=require("prompt-sync")();
let str=prompt("Enter String : ");
let str1=str.toLowerCase();
let rev="";
function palindrome(){
 for(let i=str1.length-1; i>=0; i--){
        rev+=str1[i];
 }
 if(rev===str1){
     console.log("String is palindrome")
 }
 else{
     console.log("String is not palindrome")
 }
}
palindrome()