export default abstract class BankingAccount {
    protected accountNumber: string;
    protected accountName: string;
    protected balance: number;

    constructor(accountNumber: string, accountName: string, initBalance: number) {
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.balance = initBalance;
    }

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
    abstract getBalance(): number;

    getAccountNumber(): string {
        return this.accountNumber;
    }

    getAccountName(): string {
        return this.accountName;
    }
}