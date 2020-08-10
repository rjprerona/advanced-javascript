// falsy
// 0
// "" (empty string)
// undefind
// null
// NaN
// false

// turthy
// "0"
// " " 
// []


// const name = "0"
let name = 10;
console.log(name);
if(name || name == 0) {
    console.log('condition is true');
}
else{
    console.log('condition is false');
}