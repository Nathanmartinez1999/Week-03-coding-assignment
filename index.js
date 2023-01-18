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

console.log("question 02;");
let names = ['sam', 'tommy', 'tim', 'sally', 'buck', 'Bob'];
console.log(names);
console.log("question number 02 part A:");

let sumOfLetters = 0;
for (let i = 0; i < names.length; i++) {
    console.log(names[i].length);
    sumOfLetters = sumOfLetters + names[i].length;
}
console.log("sum of all name letters added togther", sumOfLetters);
console.log("average number of letters in each name", sumOfLetters / names.length)
