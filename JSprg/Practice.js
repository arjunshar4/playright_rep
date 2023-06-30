// let a= "saloni,saloni, tyagi"
// let b= a.replace("SALONI","Tiwary")//returns a new string with the updated
// //replace  method replaces the first match in the string
// //replace is case sensitive
// console.log(b);
// console.log(a);

// let a= "saloni,saloni, tyagi"
// let b=a.replaceAll("saloni","Tiwary");
// console.log(b);

// let a= "saloni";
// let b= "tiwary";
// //concatenation means to join together the two strings together


// let c=a.concat(" ",b);//a b
// console.log(c);
// let a="       saloni         "
// let b=a.trim();
// console.log(b);

// let A="       saloni         "
// let B= A.trimStart();
// console.log(B);
// let C= B.length
// console.log(C);

// let A="       saloni         "
// let B= A.trimEnd();
// console.log(B);
// let C= B.length
// console.log(C);


// let a=["First","Second","third","fourth","fifth","sixth"]
// a[0]="new value"// add a new element to index 0
// a[6]="Seventh"//add a new element to index 6
// a.push("eighth")
// a[a.length]="new"//a[8]="new"
// a.pop();
// a.shift();
// a.unshift("new value");
// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }
// let arr=["saloni","tiwary","Chauhan","arjun","rashmi","new1","new2"];
// arr.splice(1,2)
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// let a= "saloni@gmail@com"
// let b= a.split("@")
// console.log(b)
// let a= "saloni,harshita, tyagi"
// let b= a.slice(3,7);// 3 to 6
// console.log(b)
// let arr=["saloni","tiwary","Chauhan","arjun","rashmi","new1","new2"];
// arr.splice(2,1,"sahu");
// for(let i=0;i<arr.length;i++){
//         console.log(arr[i]);
//     }
// const arj=[4,9,16,25,36];
// const new_arj=arj.map(Math.sqrt);
// for(let i=0;i<new_arj.length;i++){
//     console.log(new_arj[i]);
// }
// const num=[4,9,16,25,36]


// map() creates a new array
// /
// const newnum=num.map(multiply)
// console.log(newnum)


// function multiply(num)
// {
//    return 10*num
// }


// function Multiply(a)
// {
//    console.log(typeof a);
// }
// Multiply(null)


// a.push("eighth")
// a[a.length]="new"//a[8]="new"
// let arr=[];
// arr.length=3;
// arr[4]="saloni";
// for(let i=0;i<arr.length;i++){
//    console.log(arr[i]);
// }

let a="mom";
let ch="";
ch=a.reverse;
console.log(ch);
// for(let i=(a.length-1);i>=0;i--){
//    ch+=a[i];
//    console.log(ch);
// }
if(ch==a){
   console.log("string is palindrome");
}
else
{
 console.log("string is not palindrome");
}