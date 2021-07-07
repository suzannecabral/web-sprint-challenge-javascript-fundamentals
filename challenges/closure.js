// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/*
Each function can reach inside its own scope (any variables within the function) and to variables in its parent. They can't reach to sibling functions, and it's one way, so they can only reach out toward global, not in toward children.

nestedFunction is a child of myFunction, and it can access it's parent's variable internal.  It can also access the parent's parent's variable, external. 

*/

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number){
  let total = 0;
  for(let i = 0; i < number; i++){
    total += i+1;
  }
  return total;
}

console.log(summation(4));