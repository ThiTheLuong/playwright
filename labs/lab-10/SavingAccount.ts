import BankingAccount from "./BankingAccount";

export default class SavingsAccount extends BankingAccount {
    constructor(accountNumber: string, accountName: string, initialBalance: number) {
        super(accountNumber, accountName, initialBalance);
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} to Savings Account. New Balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be greater than zero.");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount} from Savings Account. Remaining Balance: ${this.balance}`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}