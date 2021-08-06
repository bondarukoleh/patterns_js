class Customer {
  constructor() {
    this.wallet = new CustomerWallet();
  }
}

class CustomerWallet {
  constructor() {
    this.amount = 0;
  }

  addMoney(deposit) {
    this.amount += deposit;
  }

  takeMoney(debit) {
    this.amount -= debit;
  }
}


// simplified interaction between Customer and Shopkeeper that breaks the LOD
class Shopkeeper {
  processPurchase(product, customer) {
    const price = product.price();
    // Shopkeeper shouldn't know about customers wallet (card, check, pay with phone maybe?)
    customer.wallet.takeMoney(price);
  }
}

// better make more abstract call, and let the Customer decide how he would pay.
// Customer should only talk to friends
class Shopkeeper {
  processPurchase(product, customer) {
    const price = product.price();
    customer.requestPayment(price);
// ...
  }
}
