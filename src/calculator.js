#!/usr/bin/env node

/**
 * Node.js CLI calculator with basic arithmetic and advanced operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * - modulo
 * - exponentiation (power)
 * - square root
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

function modulo(a, b) {
  return a % b;
}

function power(base, exponent) {
  return base ** exponent;
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error("Cannot calculate square root of a negative number.");
  }

  return Math.sqrt(n);
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
  modulo,
  "%": modulo,
  power,
  "^": power,
  sqrt: squareRoot,
  squareroot: squareRoot,
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
  modulo: "%",
  "%": "%",
  power: "^",
  "^": "^",
  sqrt: "sqrt",
  squareroot: "sqrt",
};

function printUsage() {
  console.error("Usage: node src/calculator.js <operation> <number1> [number2]");
  console.error(
    "Operations: add|addition|+, subtract|subtraction|-, multiply|multiplication|*, divide|division|/, modulo|%, power|^, sqrt|squareroot"
  );
}

function runCli() {
  const [operation, rawA, rawB] = process.argv.slice(2);
  const unaryOperations = new Set(["sqrt", "squareroot"]);

  if (!operation || rawA === undefined || (!unaryOperations.has(operation) && rawB === undefined)) {
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
  if (!Number.isFinite(a)) {
    console.error("Input must be a valid number.");
    process.exitCode = 1;
    return;
  }

  try {
    const isUnary = unaryOperations.has(operation);
    if (isUnary) {
      const result = calculatorOperation(a);
      const symbol = operationSymbols[operation];
      console.log(`${symbol}(${a}) = ${result}`);
      return;
    }

    const b = Number(rawB);
    if (!Number.isFinite(b)) {
      console.error("Both inputs must be valid numbers.");
      process.exitCode = 1;
      return;
    }

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
  modulo,
  power,
  squareRoot,
  runCli,
};
