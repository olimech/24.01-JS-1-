'use strict'
// alert('asdasd'); /* многострочный комментарий */
// alert('werwer'); // комментарий
/* строгий режим - 'use strict' */

// let a = 3,
//     c = 'werwer';
//     // m = True; // объявление переменной

// // a = 5; // приссваение значения
// console.log(a) // вывод переменной

// const name = 'Vasya';
// var new1 = 'Nem';
// console.log(new1)

// // let b = 123;
// let b = 2234.23;
// console.log(typeof b)

// let a
// console.log(typeof a);

// const b = 123n
// console.log(typeof b)
// console.log(`Bigint ${b}`)


// let a = 123 == '123';
// console.log(a);


// let a = 123 != '123';
// console.log(a);


// let age = null
// console.log(age)


//тип Symbol('id')

// let name = prompt('Enter your name');
// console.log(name)
// confirm(`Are you name? \n ${name}`)


// let a = String(123);
// console.log(typeof a);


// let a = '123'
// console.log(a + '3');
// // 1233

// let b = '123'
// console.log(b - '3');
// // 120

// let n = +'123'
// console.log(typeof n)


// let n = 123;
// console.log(++n); // инкримент и дикримент
// console.log(n);

// if ( 5<9 ){
//     console.log('yes')
// } else {
//     console.log('no')
// }

// if (5<8) console.log('yes')

// if ( 5 > 9 ){
//     console.log('yes')
// } else if (3 > 7) {
//     console.log('no')
// } else {
//     console.log('до свидания')
// }

// конструкция выбора
// let a=2;
// switch (a){
//     case 1:
//         console.log(1)
//         break
//     case 2:
//         console.log(2)
//         break
//     default:
//         console.log('error')
//         break
// }

// a = 15 if a>5 else 0

// let state = false;
// let a = state ? console.log('yes') : 
// (2>4) ? console.log('no') : 
// console.log('fsfgsdfgsdgf')

// (state && console.log('yes'))


// let i = 0;
// while (i<6) console.log(i++)

// do {
//     console.log(i--)
// } while (i>0);


// for (var i = 0; i<10; i++){
//     console.log(i)
// }
// console.log(i)

// let array  = [234, 22, 23, 64, 56]
// for (let item in array){
//     console.log(array[item])
// }

// let array  = {
//     'name': 'fsdfsdf', 
//     'age': 345345
// }
// for (let item in array){
//     if (item=='age'){
//         break;
//     }
//     console.log(item, array[item]);
// }


// first: for (let i = 0; i<10; i++){
//     for (let j = 0; j<10; j++){
//         console.log(i, j);
//         if (i == 3){
//             break first;
//         }
//     }
// }

// function summm(a, b){
//     return a+b
// }

// // let a = summm(1, 3)
// console.log(summm(2, 4))

// function summm(a, b){
//         let one, two;

//         function first(x){
//             one = x
//         }

//         function second(x){
//             two = x
//         }

//         first(a)
//         second(b)
//         return one+two
// }


// // Function Declaration
// function sum(a, b){
//     return a+b
// }

// let a = sum
// console.log(a(3, 4))

// // Function Expression
// let sum2 = function (a, b){
//     return a+b
// }


//Arrow Function
let sum3 = (a, b) => {console.log(a+b)}
// console.log(sum3(3, 4))


setTimeout(sum3, 1000, 2, 3)

















