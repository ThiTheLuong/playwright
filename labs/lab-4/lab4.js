const rl = require('readline-sync');

// Define accounts
const rootAccount = {
    Name: 'Luong',
    accountNumber: '123',
    Address: 'Nha Trang',
    accountBalance: '100'
};
const account2 = JSON.parse(JSON.stringify(rootAccount));
account2.Name = 'Han';
account2.accountNumber = '456';

// Push accounts to array
let bankAccounts = [rootAccount, account2];

let isRunning = true;

// Main Program Loop
while (isRunning) {
    userInterface();
    let userChoice = askUser();

    switch (userChoice) {
        case 1:
            findAccount(bankAccounts);
            break;
        case 2:
            updateBalance(bankAccounts);
            break;
        case 0:
            Exit();
            isRunning = false;
            break;
        default:
            console.log('Please select a valid number: 1, 2, or 0.');
            break;
    }
}

// Function to display the user interface
function userInterface() {
    console.log('=================================');
    console.log('1. Find an account');
    console.log('2. Update balance');
    console.log('0. Exit the program');
    console.log('=================================');
}

// Function to ask user for input
function askUser() {
    return Number(rl.question('Please enter your choice: '));
}

// Function to find an account by account number
function findAccount(accounts) {
    let userAccountNumber = rl.question('Please enter the account number you want to find: ');
    let accountFound = false; // Flag to track if the account is found

    for (let index = 0; index < accounts.length; index++) {
        if (accounts[index].accountNumber === userAccountNumber) {
            console.log(`Name: ${accounts[index].Name}`);
            console.log(`Address: ${accounts[index].Address}`);
            console.log(`Balance: ${accounts[index].accountBalance}`);
            accountFound = true;
            break; // Exit the loop when the account is found
        }
    }

    // Display error message only once if the account is not found
    if (!accountFound) {
        console.log('Wrong account number. Please enter a correct one.');
    }
}

// Placeholder function for updating balance
function updateBalance(bankAccounts) {
    const userAccountNumber = rl.question('Please enter the account number you want to withdraw: ');

    let found = false;

    for (const bankAccount of bankAccounts) {
        if (bankAccount.accountNumber === userAccountNumber) {
            found = true;
            const money = Number(rl.question('Please enter the money you want to withdraw: '));

            // valid user input
            if (isNaN(money) || money <= 0) {
                console.log('Invalid input! Please enter a positive number.');
                return;
            }

            // proceed
            if (bankAccount.accountBalance < money) {
                console.log(`Fail! Current balance: $${bankAccount.accountBalance}`);
            } else {
                bankAccount.accountBalance -= money;
                console.log(`Withdrawal successful! Remaining balance: $${bankAccount.accountBalance}`);
            }

            return;
        }
    }


    if (!found) {
        console.log(`The bank account with account number '${accountNumber}' is not found, so cannot withdraw the money.`);
    }
}
function Exit() {
    console.log('Exting the program. Have a nice day!');
}
