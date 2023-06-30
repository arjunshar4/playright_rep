const prompt=require("prompt-sync")();
let c=prompt("Enter the positive number =");
//console.log("positive number is=",c);
 function Table(){
     for(let i=1;i<=10;i++){
        let res=c*i;
         console.log(c+"X"+i+"="+res);
     }
 }
 Table()