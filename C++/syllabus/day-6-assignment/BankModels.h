#ifndef BANKMODELS_H
#define BANKMODELS_H

#include <iostream>
#include <string>
#include <vector>

using namespace std;

// Stores personal information for an account owner.
struct AccountHolder {
    string fname;
    string lname;
    string mobile;
    string email;
};

// Represents one stock entry in a Demat portfolio.
struct Share {
    string name;
    int qty;
    double price;
    string buydate;
};

// Abstract base class:
// common data + interface for all account types.
class Account {
  protected:
    AccountHolder holder;   // Basic owner details.
    double balance;         // Current money in account.
    double interest_rate;   // Account interest rate.
    double min_balance;     // Minimum required balance.
    long int pin;           // Simple PIN used for auth.

  public:
    Account(string f, string l, string mob, string em);
    virtual ~Account();

    // Pure virtual functions: derived classes must implement.
    virtual void deposit(double amount) = 0;
    virtual void withdraw(double amount) = 0;

    // Can be reused/extended by child classes.
    virtual void displayDetails() const;
};

#endif
