// learn objects sort  by number 

let employees = [
 { name: 'John', dob: 'Dec 15, 2007', score: 80 },
 { name: 'Ana', dob: 'Jan 15, 2009', score: 75 },
 { name: 'Zion', dob: 'Feb 15, 2011', score: 90 },
];
employees.sort((a, b) => b.score - a.score );
employees.forEach((e) => {
  console.log(`${e.name} ${e.score}`);
});
//Reponse
/*
 zion 90
 John 80
 Ana 75
 */
//learn how to sort object by strings 
const objs = [
     { name: "Alice", age: 25 },
  { name: "Charlie", age: 30 },
  { name: "Bob", age: 22 }
];
objs.sort((a, b) => a.name.localeCompare(b.name));
console.log(objs);
//reponse si a l l b
/*
[
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 30 }
]
*/
//reponse si b l l a
/*{ name: 'Charlie', age: 30 },
  { name: 'Bob', age: 22 },
  { name: 'Alice', age: 25 } */



