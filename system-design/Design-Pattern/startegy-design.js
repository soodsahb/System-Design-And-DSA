class CreditCardPayment {
    pay(amount) {
        console.log(`Paid ${amount} using Credit Card`);
    }
}

class UPIPayment {
    pay(amount) {
        console.log(`Paid ${amount} using UPI`);
    }
}

class PayPalPayment {
    pay(amount) {
        console.log(`Paid ${amount} using PayPal`);
    }
}

class PaymentContext{
    setStrategy(startegy){
        this.startegy=startegy;
    }

    makePayment(amount){
     this.startegy.pay(amount);
    }
}

let context = new PaymentContext();
context.setStrategy(new UPIPayment());
context.makePayment(500);

context.setStrategy(new CreditCardPayment());
context.makePayment(5000);

context.setStrategy(new PayPalPayment());
context.makePayment(1000);

// Explanation:
// - Each payment class (`CreditCardPayment`, `UPIPayment`, `PayPalPayment`) is a separate strategy.
// - Every strategy has the same method name: `pay(amount)`.
// - `PaymentContext` does not know payment details; it only stores the selected strategy.
// - `setStrategy(...)` lets you switch behavior at runtime.
// - `makePayment(amount)` calls `pay` on the current strategy object.
// - This is Strategy Pattern: same action, different interchangeable algorithms/classes.
