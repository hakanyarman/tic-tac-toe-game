// const newArray = Array(5).fill("a");
const newArray = Array(9).fill(null)
// each element is null

console.log(newArray);

newArray[0] = "merhaba"

console.log(newArray)

const copyOfNewArray = newArray.slice();
// arrayi kopyalama işlemi

//const copyOfNewArray = [...newArray]
// spread operator ile de kopyasını alabilirdik.
console.log(copyOfNewArray)