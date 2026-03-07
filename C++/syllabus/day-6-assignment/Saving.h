#ifndef SAVING_H
#define SAVING_H

#include <iostream>
#include <string>
#include <vector>

#include "BankModels.h"

using namespace std;

// Savings account with higher minimum balance and moderate interest.
class SavingsAccount : public Account {
  private:
    string checkbooknumber; // Extra field specific to savings account.

  public:
    SavingsAccount(string f, string l, string mob, string ema, string cb);

    // Transaction operations required by base class.
    void deposit(double amount) override;
    void withdraw(double amount) override;

    // PIN helper methods for simple authentication.
    void setpin();
    bool checkpin(long int pin);
};

#endif
