const rl = require('readline-sync');
//root account
const originalAccount = {
    accountNum: '123',
    accountName: 'Luong',
    rountingNum: '8888',
    balance: '1000000',

};
//shallow copy account
let account1 = JSON.parse(JSON.stringify(originalAccount));
account1.accountNum = '456';
account1.accountName = 'Luong1';
account1.balance = '2000000';
console.log(originalAccount);

console.log(account1);
//push two accounts to array
let bankAccounts = [originalAccount, account1];
let isRunning = true;
while (isRunning) {
    askUser();
    let userNum = getUserNum();

    switch (userNum) {
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
            console.log('Invalid input! Please choose 1, 2, or 0.');
            break;
    }
}
function askUser() {
    console.log('=== Banking application===');
    console.log('1.Find an account');
    console.log('2.Update balance');
    console.log('0.Exit the program');

}

function getUserNum() {
    return Number(rl.question('Please input your number: '));

}
function findAccount(accounts) {
    const accNum = rl.question('Which acocunt would you like to find: ');
    const account = accounts.find(acc => acc.accountNum === accNum);

    if (account) {
        console.log('\nAccount Found:');
        console.log(`Account Number: ${account.accountNum}`);
        console.log(`Account Name: ${account.accountName}`);
        console.log(`Balance: $${account.balance}\n`);
    } else {
        console.log('\nAccount not found!\n');
    }


}
//update balance
function updateBalance(bankAccounts) {
    const accountNumber = rl.question('Please enter the account number you want to withdraw: ');

    let found = false;

    for (const bankAccount of bankAccounts) {
        if (bankAccount.accountNum === accountNumber) {
            found = true;
            const money = Number(rl.question('Please enter the money you want to withdraw: '));

            // valid user input
            if (isNaN(money) || money <= 0) {
                console.log('Invalid input! Please enter a positive number.');
                return;
            }

            // proceed
            if (bankAccount.balance < money) {
                console.log(`Fail! Current balance: $${bankAccount.balance}`);
            } else {
                bankAccount.balance -= money;
                console.log(`Withdrawal successful! Remaining balance: $${bankAccount.balance}`);
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
