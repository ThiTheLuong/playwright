"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SavingAccount_1 = require("./SavingAccount");
var CheckingAccount_1 = require("./CheckingAccount");
// Testing the implementation
var savings = new SavingAccount_1.default("SA12345", "John Doe Savings", 200);
savings.deposit(100);
savings.withdraw(50);
console.log("Savings Balance:", savings.getBalance());
var checking = new CheckingAccount_1.default("CA67890", "John Doe Checking", 200);
checking.deposit(100);
checking.withdraw(230);
checking.withdraw(200);
console.log("Checking Balance:", checking.getBalance());
