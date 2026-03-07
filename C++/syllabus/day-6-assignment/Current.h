#ifndef CURRENT_H
#define CURRENT_H

#include <iostream>
#include <string>
#include <vector>

#include "BankModels.h"

using namespace std;

// Current account with lower minimum balance and transaction limit control.
class CurrentAccount : public Account {
  private:
    int dailyTxns; // Number of daily transactions allowed.

  public:
    CurrentAccount(string f, string l, string mob, string ema);

    // Updates transaction limit based on average maintained amount.
    void updateTxnLimit(double avg);

    // Transaction operations required by base class.
    void deposit(double amount) override;
    void withdraw(double amount) override;

    // PIN helper methods for simple authentication.
    void setpin();
    bool checkpin(long int pin);
};

#endif
