"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BankingAccount_1 = require("./BankingAccount");
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountNumber, accountName, initialBalance) {
        return _super.call(this, accountNumber, accountName, initialBalance) || this;
    }
    SavingsAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Deposited ".concat(amount, " to Savings Account. New Balance: ").concat(this.balance));
        }
        else {
            console.log("Deposit amount must be greater than zero.");
        }
    };
    SavingsAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrew ".concat(amount, " from Savings Account. Remaining Balance: ").concat(this.balance));
        }
        else {
            console.log("Invalid withdrawal amount.");
        }
    };
    SavingsAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return SavingsAccount;
}(BankingAccount_1.default));
exports.default = SavingsAccount;
