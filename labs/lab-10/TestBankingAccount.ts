import SavingsAccount from "./SavingAccount";
import CheckingAccount from "./CheckingAccount";

// Testing the implementation
const savings = new SavingsAccount("SA12345", "John Doe Savings", 200);
savings.deposit(100);
savings.withdraw(50);
console.log("Savings Balance:", savings.getBalance());

const checking = new CheckingAccount("CA67890", "John Doe Checking", 200);
checking.deposit(100);
checking.withdraw(230);
checking.withdraw(200);
console.log("Checking Balance:", checking.getBalance());