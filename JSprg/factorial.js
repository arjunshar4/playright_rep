const prompt= require("prompt-sync")();
let n=prompt("enter the number whose factorial is to be calculated  ")
let temp=1;
for(let i=1;i<=n;i++){
    
    temp=temp*i;

}
console.log("factorial of a given number entered by user is  "+temp);