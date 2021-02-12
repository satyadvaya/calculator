// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { add, subtract, multiply, divide } from '../calculations.js';

const test = QUnit.test;

test('time to test an add function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // const expected = true;
    const x = 1;
    const y = 2;
    const sum = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    // const actual = false;
    const result = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    // expect.equal(actual, expected);
    expect.equal(result, sum);
});

test('time to test a subtract function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // const expected = true;
    const x = 3;
    const y = 4;
    const difference = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    // const actual = false;
    const result = subtract(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    // expect.equal(actual, expected);
    expect.equal(result, difference);
});

test('time to test a multiply function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // const expected = true;
    const x = 5;
    const y = 6;
    const product = 30;
    
    //Act 
    // Call the function you're testing and set the result to a const
    // const actual = false;
    const result = multiply(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    // expect.equal(actual, expected);
    expect.equal(result, product);
});

test('time to test a divide function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // const expected = true;
    const x = 7;
    const y = 8;
    const quotient = 0.875;
    
    //Act 
    // Call the function you're testing and set the result to a const
    // const actual = false;
    const result = divide(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    // expect.equal(actual, expected);
    expect.equal(result, quotient);
});