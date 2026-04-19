#!/usr/bin/env node

/**
 * Node.js CLI calculator with four basic operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 */
function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }

  return a / b;
}

const operations = {
  add: addition,
  addition,
  "+": addition,
  subtract: subtraction,
  subtraction,
  "-": subtraction,
  multiply: multiplication,
  multiplication,
  "*": multiplication,
  divide: division,
  division,
  "/": division,
};

const operationSymbols = {
  add: "+",
  addition: "+",
  "+": "+",
  subtract: "-",
  subtraction: "-",
  "-": "-",
  multiply: "*",
  multiplication: "*",
  "*": "*",
  divide: "/",
  division: "/",
  "/": "/",
};

function printUsage() {
  console.error("Usage: node src/calculator.js <operation> <number1> <number2>");
  console.error("Operations: add|addition|+, subtract|subtraction|-, multiply|multiplication|*, divide|division|/");
}

function runCli() {
  const [operation, rawA, rawB] = process.argv.slice(2);

  if (!operation || rawA === undefined || rawB === undefined) {
    printUsage();
    process.exitCode = 1;
    return;
  }

  const calculatorOperation = operations[operation];
  if (!calculatorOperation) {
    console.error(`Unsupported operation: ${operation}`);
    printUsage();
    process.exitCode = 1;
    return;
  }

  const a = Number(rawA);
  const b = Number(rawB);
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    console.error("Both inputs must be valid numbers.");
    process.exitCode = 1;
    return;
  }

  try {
    const result = calculatorOperation(a, b);
    const symbol = operationSymbols[operation];
    console.log(`${a} ${symbol} ${b} = ${result}`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

if (require.main === module) {
  runCli();
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  runCli,
};
