#ifndef DEMAT_H
#define DEMAT_H

#include <iostream>
#include <string>
#include <vector>

#include "BankModels.h"

using namespace std;

// Demat account stores share holdings; cash operations are not meaningful here.
class DematAccount : public Account {
  private:
    vector<Share> portfolio; // List of all owned shares.

  public:
    DematAccount(string f, string l, string mob, string ema);

    // Adds one share entry to portfolio.
    void addShare(Share s);

    // Implementations satisfy abstract base, but do not modify cash balance.
    void deposit(double amount) override;
    void withdraw(double amount) override;

    // Shows account info + all portfolio rows.
    void displayDetails() const override;
};

#endif
