const prompt=require("prompt-sync")();
let p= prompt("Enter number whose palindrome need to be calculated  ");
let rev=0;
let temp=p;
function Palindrome(){
    while(temp!=0){
       let digit=temp%10;
       rev= rev*10+digit;
       temp =parseInt(temp/10);
    }
    //console.log(rev);
     if(p==rev){
        console.log("Number is Palindrome");
     }
    else{
         console.log("Number is not Palindrome")
     }
}
Palindrome()
