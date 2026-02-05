const person = ['arif', 'rakib', 'sakib', 'akib', 'dakib'];
const sortedPerson = person.sort();
console.log(sortedPerson);

// sort -->
// const numbers = [4, 7, 2, 8, 3, 6];
/**
 * 1. Ascending ---> smaller to larger: [2, 3, 4, 6, 7, 8]
 * 2. Descending --> larger to smaller: [8, 7, 6, 4, 3, 2]
*/
// Example-->
const numbers = [4, 7, 12, 8, 38, 6, 1]; 
// const numbers_asc = numbers.sort(); // not working
const numbers_asc = [...numbers].sort(function(a,b) {return a-b}); 
const numbers_dsc = [...numbers].sort(function(a,b) {return b-a}); 
console.log(numbers_asc);
console.log(numbers_dsc);