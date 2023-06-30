const prompt= require("prompt-sync")();
let num=prompt("enter the number ");
let x=num.length
let sum=0;
let temp=num;
let count=0;
 function armstrong(){
     while(temp!=0){
         let digit=temp%10;
         sum=sum+(Math.pow(digit,x));
         temp=parseInt(temp/10);
     }
       if(sum==num){
          console.log("Number is Armstrong");
       }
      else{
           console.log("Number is not Armstrong");
       }
    }
//  function countfn(){
//      while(temp!=0){
//          let digit=temp%10;
//          ++count;
//          temp=parseInt(temp/10);
//      }
//      return count()
//      }
     armstrong()
     


