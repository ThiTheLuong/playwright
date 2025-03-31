import BankingAccount from "./BankingAccount";

export default class CheckingAccount extends BankingAccount {
    protected minimumBalance: number;

    constructor(accountNumber: string, accountName: string, initialBalance: number, minimumBalance: number = 50) {
        super(accountNumber, accountName, initialBalance);
        this.minimumBalance = minimumBalance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} to Checking Account. New Balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be greater than zero.");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && this.balance - amount >= this.minimumBalance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount} from Checking Account. Remaining Balance: ${this.balance}`);
        } else {
            console.log("Invalid withdrawal amount. Minimum balance requirement not met.");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}