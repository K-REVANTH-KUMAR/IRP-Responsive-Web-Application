"use strict";

// PART 1: Types & Coercion

function parseAmount(input) {
    // An amount must be provided before any conversion is attempted.
    if (input === null || input === undefined) {
        throw new Error("Amount is required.");
    }

    // Only strings and numbers are accepted as user-entered amounts.
    if (typeof input !== "string" && typeof input !== "number") {
        throw new Error("Invalid amount type. Enter a string or number.");
    }

    let value = input;

    if (typeof value === "string") {
        value = value.trim();

        // Number("") becomes 0, so an empty string must be rejected first.
        if (value === "") {
            throw new Error("Amount cannot be empty.");
        }
    }

    const amount = Number(value);

    if (Number.isNaN(amount)) {
        throw new Error("Amount must be a valid number.");
    }

    if (amount <= 0) {
        throw new Error("Amount must be greater than zero.");
    }

    return amount;
}

// Test parseAmount with every input required by the assignment.
const testInputs = ["500", " 250 ", "", "abc", null, undefined, "12.5.3"];

for (let i = 0; i < testInputs.length; i++) {
    try {
        const result = parseAmount(testInputs[i]);
        console.log("Input:", testInputs[i], "| Valid amount:", result);
    } catch (error) {
        console.log("Input:", testInputs[i], "| Error:", error.message);
    }
}

// The + operator joins a string and a number, so "5" + 2 becomes "52".
// The - operator performs numeric conversion, so "5" - 2 becomes 3.

// typeof null returns "object" because of a historical JavaScript behaviour.

// PART 2: Scoping & Hoisting

// BANK_NAME never changes, so it is declared with const.
// transactionCounter changes as transactions happen, so it is declared with let.
const BANK_NAME = "JS National Bank";
let transactionCounter = 0;

console.log("Bank:", BANK_NAME);
transactionCounter++;
console.log("Transaction counter:", transactionCounter);

// HOISTING DEMO

// var declarations are hoisted and initialized with undefined.
console.log("var before declaration:", hoistedVariable);
var hoistedVariable = "Declared after the console.log";

// let declarations are in the Temporal Dead Zone until their declaration is evaluated.
try {
    console.log(hoistedLet);
    let hoistedLet = "Declared after the console.log";
} catch (error) {
    console.log("let before declaration:", error.name);
}

// Function declarations are hoisted with their function body.
announce();

function announce() {
    console.log("Function declaration: Announcement from", BANK_NAME);
}

// A var function expression is undefined before its assignment, so calling it throws TypeError.
try {
    notify();
} catch (error) {
    console.log("Function expression before declaration:", error.name);
}

var notify = function () {
    console.log("Function expression: Notification from", BANK_NAME);
};

// During execution-context creation, declarations are registered before code runs.
// During the execution phase, statements run in order and assignments receive their values.

// ASYNCHRONOUS LOOP BUG

// var has one shared function/global-scoped binding, so callbacks see the final value 3.
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log("var loop:", i);
    }, 100);
}

// let creates a fresh lexical binding for each loop iteration.
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log("let loop:", i);
    }, 100);
}
