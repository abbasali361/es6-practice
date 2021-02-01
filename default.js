// function add(num1, num2){
//     return num1 + num2;
// }
// const total = add (15,16);
// console.log(total);

// //2nd
// function add(num1, num2 = 12){
//     return num1 + num2;
// }
// const total = add(15);
// console.log(total);

// //3rd
// function add(num1, num2){
//     num2=11;
//     return num1 + num2;
// }
// const total = add(15);
// console.log(total);

//4rt
function add(num1, num2=20){
    return num1 + num2;
}
const total = add(15, 1);
console.log(total);