"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankingAccount = /** @class */ (function () {
    function BankingAccount(accountNumber, accountName, initBalance) {
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.balance = initBalance;
    }
    BankingAccount.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    BankingAccount.prototype.getAccountName = function () {
        return this.accountName;
    };
    return BankingAccount;
}());
exports.default = BankingAccount;
