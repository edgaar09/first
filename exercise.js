const array = ["Hello", "World", "in", "a", "frame"];

const breakLine = "<br>";
let output = "";

let maxChar = 0;

for(let i=0; i<array.length; i++){
    if(maxChar<array[i].length){
        maxChar = array[i].length
    }
}


 for(let i = 0; i<array.length; i++){
     output += '*' + array[i] 
      for(let j = 0; j<maxChar-array[j].length; j++){
         output += '' + breakLine;
      }
 }


document.getElementById("log").innerHTML=output;

