const array1 = ["Hello", "World", "in", "a", "frame"];

const breakLine = "<br>";
let output = "";

array1.push('element1')
array1.push('element2')


for (element in array1){
    output +='*';
}
output += breakLine;
array1.pop()
array1.pop()

for (string in array1) {
    output += `* ${array1[string]}`  + breakLine;
}

array1.push('element1')
array1.push('element2')


for (element in array1){
    output += "*";
}

document.getElementById("log").innerHTML=output;
