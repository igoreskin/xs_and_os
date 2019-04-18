// Write a function that will take a string as a parameter 
// and return true if the number of x's and o's are equal.
const passingString = 'xoxoxo';
const failingString = 'xoxxoooo';
const anotherFailingString = 'hasN0thingWeWant';


// Now we want to make a couple unit tests to verify that the function we created behaves as expected. 
// Please make a function we can use to demonstrate that our function behaves as expected. The function 
// should take three parameters: a description of the test, the actual result of executing the function 
// with a certain input, and the expected result of that execution. It should log the description of the 
// function and a boolean. The boolean should be true if the expected result matches the actual result 
// and false if not. Make a test to verify that we get the expected result for each of the strings at the top 
// of this codepen.

const check = (str) => {
  let xs = 0;
  let os = 0;
  const arr = str.split('');
  arr.forEach((el) => {
    if(el === 'x') {
      xs++;
    }
    if(el === 'o') {
      os++;
    }
  })
  return xs === os;
}

const checkFilter = (str) => {
  const xs = str.split('').filter(el => el === 'x');
  const os = str.split('').filter(el => el === 'o');
  return xs.length === os.length;
} 

// Here's a function that just tests the above function with any pair of a passing and a failing string 
// (not what's in the requirements):
const testCheck = (string1, string2, test) => {
  if(test(string1) && !test(string2)) {
    console.log('The function passes the test');
  }
  console.log('The function fails the test');
}

testCheck(passingString, failingString, checkFilter);

// Here's a function that tests the above funtion with the given passing and failing strings:
const passing = checkFilter(passingString);
const failing = checkFilter(failingString);

const test = (desc, res, exp) => {
  console.log(desc, res === exp);
}

test(checkFilter, passing, true);

