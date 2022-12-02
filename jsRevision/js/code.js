// Return middle Element(s)
// let data = [9, 3, 1, "Jamie", 5, 10, "Nabila",29];
// let onlyNumbers = data.splice(3,1);
// let onlyNumbers= data.filter( item => {
    // if( typeof item != 'string')
        // return item;
// })
// console.log("Max: ", Math.max(...data));
// let size = data.length -1;
// console.log("Array size: ", size);
// console.log("Element ", data[size]);
// console.log("at(): ", data.at(-1));
// let middleIndex = Math.trunc(data.length -1)/2;
// console.log("middleIndex: ", middleIndex);
// console.log("middle element: ", data.slice(middleIndex, middleIndex + 2) );

// let middleIndex = Math.trunc((data.length -1) /2);
// if(middleIndex % 2 == 0) {
//     console.log(data.slice(middleIndex, middleIndex +2) );
// }else {
//     console.log(data[middleIndex]);
// }

// =====String Methods==== Split
/* let sentence = "I love programming, I love cycling, I love swimming, I love gaming";
console.log(sentence.split(', '));*/
// Date
// let myDate =new Date();
// console.log("My date: ", 
// myDate.toLocaleTimeString());
// let myDate = new Date();
 // Add days to the current date // 
//  Current date 
//  let currentDate = myDate.getDate(); console.log("setDate(): ", new Date(myDate.setDate(currentDate + 5)));

// ====Math====
// if Statement
// let age = 17;
// if(age > 17) {
//     console.log("You are qualified");
// // }else {
// //     console.log("You are not qualified");
// // }
// }

// Nested if statement
// let age =17;
// let salary = 5000;
// if(age > 17) {
//     if(salary >= 5000) {
//         console.log("Well done");
//     }else {
//         console.log("Present the second payslip")
//     }
// }else {
//     console.log("You are not qualified");
// }

// ====Joel's Example====
// if(age > 17 && salary >= 5000) {
//     console.log("Well done");
// g("Thank you for coming.");}else {
//     console.lo
// }

// Switch statement
// let monthInt = 1;
// switch(monthInt) {
//     case 1:
//         console.log("January");
//     break;
//     case 2:
//         console.log("February");
//     break;
// }

// let grade = -1;
// switch(true) {
//     case grade == 100:
//         console.log("You're awesome");
//     break;
//     case (grade >= 90) && (grade <= 99):
//         console.log("Well done");
//     break;
//     case (grade >= 75) && (grade <= 89):
//         console.log("Distinction");
//     break;
//     case (grade >= 50) && (grade <= 74):
//         console.log("Pass");
//     break;
//     case (grade <=49) && (Math.sign(grade) !=-1 ):
//         console.log("Fail");
//     break;
//     default:
//         console.log("Out of range");
// }

// ====LOOPS====
/*
for in
for Of
for(; ;)
while
do while
*/
// let numbers = [8, 9, 3, 12, 34];
// let people = {
//     name: 'Cassidy',
//     surname: 'Lawrence',
//     email: 'cassidy@gmail.com'
// }

// for in Loop and for of loop
// for(let numb in numbers) {
//     console.log(numb);
// }
// for(let numb in numbers) {
//     console.log(numb);
// }
// console.table(numbers);
// for(let p in people) {
//     console.log(`${p} => ${people[p]}`);
// }
// for(let numb of numbers) {
//     console.log(numb)
// }
// for(let p of people) {
//     console.log(p);
// }

// Infinity Loop
// for(let i =0;;) {
//     console.log("Let found out");
// }

// for(let i =0; i< 5; i++){
//     console.log("Hello World");
// }

// while loop
// let cnt = 0;
// while(cnt < numbers.length) {
//     console.log(`Step: ${numbers[cnt]}`);
//     cnt++;
// }

// do ..while loop
// do{
//     console.log(`Step: ${numbers[cnt]}`);
//     cnt++;
// }while(cnt < numbers.length);

// ====Function====
// function declaration

// function addition(numb1, numb2) {
//     console.log("Sum is: ", numb1 + numb2);
// }
// addition(4, 4, 2);
// addition(5, 7);
// addition(9, 23);

// let addition = function (numb1, numb2) {
//     console.log("Sum of numb1, numb2: ", numb1 + numb2)
// }
// addition(5, 3);

// let subtraction = function (numb1, numb2) {
//     console.log("Difference is: ", numb1 - numb2); 
// }
// subtraction(10, 3)
// subtraction(18, 27);
// ((numb1, numb2)=>{
//     console.log(numb1 + numb2);
// })(8, 2);

// ====Operators====
// ternary operator
// let age = 17;
// console.log( age > 17 ? "You are qualified": "You are not qualified");

// Rest Operator
// function sumOf(...args) {
//     return args.reduce( (a, b)=>{
//         a + b
//     })
// }
// console.log(sumOf(1, 2, 3, 4,));
// =================================================================
// friday, 02 December 2022 = 09:14

// Unary operator

// function add() {
//     let x = document.getElementById('first').value !== undefined ? document.getElementById('first').value : 10;
// }

// let y = document.getElementById('second').value !== undefined ? document.getElementById('second').value : 9;
// console.log(+x + +y);


// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((a, b)=>{
//     return a + b;
// })
// console.log(`Sum: ${sum}`);
// let double = numbers.map((item)=> {
//     return item * 2;
// })
// console.log("Current array: ", numbers);
// console.log("Double", double);
// --------------------------------------------
// let people = [
//     {
//         id: 1,
//         firstName: 'lerato',
//         lastName: 'Henk'
//     },
//     {
//         id: 2,
//         firstName: 'james',
//         lastName: 'Peter'
//     }
// ];
// console.log(people);

// let peopleFirstNames = 
// people.map( (item)=> {
//     return item.fistName;
// })
// console.log(peopleFirstNames);

// function addition(...args) {
//     let sum = args.reduce((a, b)=>{
//         return a + b;
//     })
//     console.log(rgs);
// }
// addition(1, 2, 3, 5);

// Rest Operator
// let numbers = [1, 2, 3, 4, 5];
// function addition(...args) {
//     return args.reduce( (a, b)=>{
//         a + b
//     })
// }
// console.log(addition(1, 2, 3, 4,));


// function addition(...args){
//     let sum = args.filter(Number).reduce((a, b)=>{
//         return a + b;
//     });
//     return console.log(sum);
// };
// addition(1, 4, 5, 10, 15, 18);
// ======================================================
//            ====API====

// fetch('../data/data.json')
// .then((res)=>{
//     return res.json();
// })
// .then( (data)=>{
//     let results = data.results;
//     // console.table(results[0]);
//     console.table(results);
// })

// async function fetchData(){
//     let data = await fetch('')
//     return data;
// }

// async function display() {
//     let results = await fetchData
// }

// =====================================================

fetch('https://api.chucknorris.io/jokes/random')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    let tbody = document.querySelector('tbody');
    Object.keys(data).forEach( (item)=>{
        if(data[item].length){
            console.log(`${item}: ${data[item]}`);
            tbody.innerHTML +=
            `
                <tr>
                    <td>${item}</td>
                    <td>${data[item]}</td>
                </tr>
            `
        }
    } )
})