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

console.log("question number 3:How do you access the last element orf an array");
console.log("to access the last element of an array i did array  [array.lenth - 1]");

console.log("Question number 4:how do you access the first element in a array");
console.log("to access the first element in the array you can use [array[0]] the first element in the array is refered to by 0 since it is the first in the array");

console.log("question number 05:");
let nameLengths = [];

for (let i = 0; i < names.length; i++) {
    console.log(names[i].length);
    nameLengths.push(names[i].length);
}
console.log("nameLengths array rersult:", nameLengths);

console.log("question number 06:");
let sumOfLettersInName = 0
for (let i = 0; i < nameLengths.length; i++) {
    // console.log(nameLengths[i]);
    sumOfLettersInName = sumOfLettersInName + nameLengths[i];
    console.log(sumOfLettersInName);
}

console.log("question number 07:");

function questionSeven(word, n) {
    let solution = word.repeat(n);
    console.log(solution);
}
questionSeven("hello", 3);

console.log("question number 08:");
let fullName = ['FirstName', 'lastName'];
console.log(fullName);

console.log("question number 09:")

function isGreaterThan100(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        sum = sum + array[i];
        console.log("total", sum);
    }
    if (sum > 100) {
        return true;
    }
    else {
        return false;
    }
}
console.log("sum of all 3 numbers added up:");
console.log(isGreaterThan100([100, 200, 300]));

console.log("question number 10:");

let numbers = new Array(2, 5, 10, 20, 15, 11);
console.log(numbers);
let length = numbers.length;

let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
}
console.log("Average of all numbers in the array:", total / length);

console.log("question number 11:");

let array1 = new Array(5, 10, 15, 20, 25);
let lenth = array1.length;
let totalNumbers = 0;
for (let i = 0; i < array1.length; i++) {
    totalNumbers = totalNumbers + array1[i];
}
console.log("average of array 1=", totalNumbers / length);

let array2 = new Array(2, 4, 6, 8, 10);
let lentgh = array2.length;
let totalNumber = 0;
for (let i = 0; i < array2.length; i++) {
    totalNumber = totalNumber + array2[i];
}
console.log("total for array 2=", totalNumber / length);
Boolean[array1 > array2] = true;
console.log(array1 > array2);


console.log("question number 12:");






