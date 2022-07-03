const array = ["Hello", "World", "in", "a", "frame"];

const breakLine = "<br>";
let output = "";

let maxChar = 0;

for(let i=0; i<array.length; i++){
    if(maxChar<array[i].length){
        maxChar = array[i].length
    }
}

output += "*".repeat(maxChar+2) + breakLine;

for(let i = 0; i<array.length; i++){
    output += "*"+array[i]+" ".repeat(maxChar-array[i].length) + "*"+breakLine;
}
output += "*".repeat(maxChar+2) + breakLine;

document.getElementById("log").innerHTML=output;

