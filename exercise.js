const array1 = ["Hello", "World", "in", "a", "frame"];

console.log(array1)

array1.push('element1')
array1.push('element2')


for (element in array1){
    console.log('*')
}

array1.pop()
array1.pop()

for (string in array1) {
    console.log(`*${array1[string]}*`)
}

array1.push('element1')
array1.push('element2')


for (element in array1){
    console.log('*')
}
