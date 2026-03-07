#include "BankModels.h"
#include "Saving.h"
#include "Current.h"
#include"Demat.h"
int main() {
    // Account acc("Test", "User", "000", "e@e.com"); 
    // ^ UNCOMMENTING ABOVE WILL CAUSE COMPILE ERROR (Correct behavior for Abstract Class)

    // 1. Create Savings Account
    SavingsAccount mySavings("Amit", "Patil", "9822012345", "amit@p.com", "CHQ123");
    mySavings.deposit(50000);
    mySavings.withdraw(35000); // Should fail (leaves 15k, min is 20k)
    mySavings.displayDetails();

    // 2. Create Current Account
    CurrentAccount myBiz("TechCorp", "LLC", "020-223344", "biz@tech.com");
    myBiz.deposit(10000);
    myBiz.updateTxnLimit(100000); // Upgraded limit based on balance
    myBiz.displayDetails();

    // 3. Polymorphism Test (Pointer to Base)
    cout << "\n--- Polymorphism Test ---" << endl;
    Account* polyAccount = new SavingsAccount("Sara", "Khan", "9900", "s@k.com", "CHQ555");
    polyAccount->deposit(30000); // Calls SavingAccount::deposit
    polyAccount->displayDetails();

    cout<<endl;

   DematAccount dm("TechCorp", "LLC", "020-223344", "biz@tech.com");
   dm.addShare({"kingfisher",10,33.5,"10/12/2012"});
   dm.displayDetails();
    

    delete polyAccount;
    return 0;
}