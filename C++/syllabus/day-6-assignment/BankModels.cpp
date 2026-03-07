#include "BankModels.h"
#include "Current.h"
#include "Demat.h"
#include "Saving.h"

// ------------------------------
// Base class: Account
// ------------------------------

Account::Account(string f, string l, string mob, string ema) : balance(0.0) {
    // Build holder structure using constructor inputs.
    holder = {f, l, mob, ema};
}

Account::~Account() {
    // Virtual destructor keeps polymorphic deletion safe.
}

void Account::displayDetails() const {
    // Common display for all account types.
    cout << "\n Holder " << holder.fname << " " << holder.lname
         << " Balance is " << balance;
}

// ------------------------------
// SavingsAccount
// ------------------------------

SavingsAccount::SavingsAccount(string f, string l, string mob, string ema, string cb)
    : Account(f, l, mob, ema), checkbooknumber(cb) {
    // Savings account policies.
    interest_rate = 4.0;
    min_balance = 20000.0;

    // In this assignment, PIN is fixed for demo.
    setpin();
}

void SavingsAccount::setpin() {
    // Fixed PIN setup. Replace with user-driven setup in real app.
    pin = 1234;
}

bool SavingsAccount::checkpin(long int inputPin) {
    // Validate entered PIN before transaction.
    if (pin != inputPin) {
        cout << "Access denied: wrong pin, transaction cancelled";
        return false;
    }
    return true;
}

void SavingsAccount::deposit(double amount) {
    long int enteredPin;

    // Ask for PIN every time before modifying balance.
    cout << "Enter pin set by you earlier: ";
    cin >> enteredPin;

    // Stop immediately on failed auth.
    if (!checkpin(enteredPin)) {
        return;
    }

    balance += amount;
    cout << "Deposited " << amount << " in your account";
}

void SavingsAccount::withdraw(double amount) {
    long int enteredPin;

    // Authenticate user first.
    cout << "Enter pin for withdraw: ";
    cin >> enteredPin;

    if (!checkpin(enteredPin)) {
        return;
    }

    // Savings account must keep minimum balance after withdrawal.
    if (balance - amount < min_balance) {
        cout << "Withdrawal denied, must maintain minimum balance";
    } else {
        balance -= amount;
        cout << "You withdrew " << amount;
    }
}

// ------------------------------
// CurrentAccount
// ------------------------------

CurrentAccount::CurrentAccount(string f, string l, string mob, string ema)
    : Account(f, l, mob, ema) {
    // Current account policies.
    interest_rate = 1.0;
    min_balance = 1000;
    dailyTxns = 10;

    // In this assignment, PIN is fixed for demo.
    setpin();
}

void CurrentAccount::setpin() {
    // Fixed PIN setup. Replace with user-driven setup in real app.
    pin = 1234;
}

bool CurrentAccount::checkpin(long int inputPin) {
    // Validate entered PIN before transaction.
    if (pin != inputPin) {
        cout << "Access denied: wrong pin, transaction cancelled";
        return false;
    }
    return true;
}

void CurrentAccount::updateTxnLimit(double avg) {
    // Rule: +2 transactions for each 50,000 average amount.
    dailyTxns = 10 + (int)(avg / 50000) * 2;
}

void CurrentAccount::deposit(double amount) {
    long int enteredPin;

    cout << "Enter pin set by you earlier: ";
    cin >> enteredPin;

    if (!checkpin(enteredPin)) {
        return;
    }

    balance += amount;
    cout << "Deposited " << amount << " in your account";
}

void CurrentAccount::withdraw(double amount) {
    long int enteredPin;

    cout << "Enter pin set by you earlier: ";
    cin >> enteredPin;

    if (!checkpin(enteredPin)) {
        return;
    }

    // Current account also enforces its own minimum balance.
    if (balance - amount < min_balance) {
        cout << "Withdrawal denied, must maintain minimum balance";
    } else {
        balance -= amount;
        cout << "You withdrew " << amount;
    }
}

// ------------------------------
// DematAccount
// ------------------------------

DematAccount::DematAccount(string f, string l, string mob, string ema)
    : Account(f, l, mob, ema) {
    // Demat account does not use interest/minimum balance in this model.
    interest_rate = 0.0;
    min_balance = 0;
}

void DematAccount::addShare(Share s) {
    // Push one new share record into portfolio vector.
    portfolio.push_back(s);
}

void DematAccount::deposit(double amount) {
    // 'amount' intentionally unused for demat account.
    (void)amount;
    cout << "No deposit required in demat account";
}

void DematAccount::withdraw(double amount) {
    // 'amount' intentionally unused for demat account.
    (void)amount;
    cout << "No withdrawal needed in demat account";
}

void DematAccount::displayDetails() const {
    // Reuse common account holder + balance print.
    Account::displayDetails();

    cout << "--- Portfolio Details ---" << endl;

    if (portfolio.empty()) {
        cout << "No shares held." << endl;
        return;
    }

    // Print each share row in readable format.
    for (const auto& s : portfolio) {
        cout << "Stock: " << s.name << " | Qty: " << s.qty
             << " | Bought at: Rs." << s.price << " on " << s.buydate << endl;
    }
}
