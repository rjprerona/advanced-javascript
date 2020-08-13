const student = [
    {id: 21, name: "Omar Sani"},
    {id: 31, name: "Manna Dey"},
    {id: 32, name: "Devolina"},
    {id: 71, name: "Diplo"}  

];

// const output = [];

// for(const i = 0; i < student.length; i++){
//     const name = student[i];
//     const result = student.map(s => s.name);
//     output.push(result);
// }


const names = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id > 40);
const biggerOne = student.filter(s => s.id > 41);
console.log(biggerOne);
