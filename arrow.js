// function dubleIt(num){
//     return num * 2;
// }
// const result = dubleIt(5);
// console.log(result);

// //function declaration
// const dubleIt= function(num){
//     return num * 2;
// }
// const result = dubleIt(5);
// console.log(result);

// //parameter function
// const doubleIt = num => num * 2;
// const add = (x ,y)=> x + y;
// const give5 = () => 5;

// const result = add(50, 70);
// const result2 = give5();
// console.log(result2);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result3 = doMath(7,5);
console.log(result3);