const prompt=require("prompt-sync")()
let number=prompt("enter number : ");
let ds="";
for(let i =1;i <=number;i++){

for(let j=1;j <=i;j++){
     ds+=j;
}
ds+="\n";
}
console.log(ds);
git pull
