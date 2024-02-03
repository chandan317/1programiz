//js datatypes

// different data types we can use in js

// ex : const x = 5; -- integer dta
//  const y = "hello" -- string data

// 8 basic datatypes

// =====primitive data types
// String;  "hello"
// number;   3 ,  3.5
// BigInt;  1n
// Boolean;  true false
// undefined; let a ;
// null; a = null;
// Symbol;

//======Non primitive data types
// object;  let student = {};

// string js

// string used to store text
// surrounded by  quotes " " , ' ' ,` `

// string example

// const namee = "rashmika";
// const name1 = "mandanna";
// const result = `the names is ${namee} ${name1}`;
// console.log(result);

// ${variable or expression}

// js number

// integer and floating numbers

// const number1 = 31;
// const number2 = 3.255;
// const number3 = 3e5 ;  // 3*10^5

// +infinity -infinity nan
// const num1 = 3 / 0;
// console.log(num1); //infinity

// const num2 = -3 / 0;
// console.log(num2); //-infinity

// const num3 = "abc" / 3;
// console.log(num3); //NAN

// js bigInt

//larger than 2^53 +1 number

//append n  to end of integer

//bigint value

// const value1 = 985665457777776655556n;
// // add 2 big integers
// const result1 = value1 + 1n;
// console.log(result1);

// const value2 = 99999999999999999999999n;

// //bigint + number XXX
// const result2 = value2 + 1;
// console.log(result2);

// new version js included

// js boolean
// boolean represnts one of two values
//true or false
// const dataChecked = true;
// const valueCounted = false;

// js undefined

// variable is declared but value is not assigned
// let name1;
// console.log(name1);

// js null

// is special value that represnts empty or unknown value

// const numb = null;
// console.log(numb);
// code suggest that number variable is empty
// null used --- XXX not same Null or NULL

// js symbol

// symbol value === immutable primitive that is unique

// two symbol with same description

// const val1 = Symbol("hello");
// const val2 = Symbol("hello");

//js object

// allows us to steore collections of data
// const student = {
//   fistName: "chandan",
//   secondName: "T M",
//   class: 1,
// };
// console.log(student);

//collections of data

// const heroine = {
//   firstName: "Rashmika",
//   secondName: "Mandanna",
//   movie: "animal",
//   review: 9.1,
// };
// console.log(heroine);

// js type
//dynamically typed
// automatically determines variables data type for us

let data;

data = 5;
// console.log(typeof data);

//data is of string type
data = "js program";

// js typeof
const name = "ram";
console.log(typeof name); // returns "string"

const number = 5;
console.log(typeof number);

const valueChecked = true;
console.log(typeof valueChecked);

const a = null;
console.log(typeof a);
