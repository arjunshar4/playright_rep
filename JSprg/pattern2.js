const prompt=require("prompt-sync")()
let num=prompt("enter number : ")
 let series="";
 for(let i=1;i<=num;i++){

    for(let j=1;j<=i;j++){
        series+=i;
    }
    series+="\n"
 }
 console.log(series);