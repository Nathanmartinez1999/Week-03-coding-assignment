console.log("question 01 part A:")
let ages = new Array(3, 9, 23, 63, 2, 8, 28, 93);
console.log(ages[ages.length - 1] - ages[0]);

console.log("question 01 part B:")
ages.push(99);
console.log(ages[ages.length - 1] - ages[0]);

console.log("question 01 part C:")
let sum = 0;

for (let i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
    //  console.log(sum);
    console.log("avergae of all ages =", sum / ages.length);
}

console.log("question 02 part A;");
let names = ['sam', 'tommy', 'tim', 'sally', 'buck', 'Bob'];
console.log(names)