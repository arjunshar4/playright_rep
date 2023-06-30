const prompt=require("prompt-sync")()
let number=prompt("Enter the number ")
let sum=0;
let sump=0;
let sumn=0;
for(let i=1 ; i<=number;i++){
    if(i%2!=0){
    sump=sump+(1/i);
      }
    else{
    sumn=sumn-(1/i);
    }
    sum=sump +sumn;
}
    console.log("final result "+sum);
    