class CheckingAccount extends Account {
  constructor(number, overdraft) {
    super(number);
    this._overdraft = overdraft;
  }

  setOverdraft(overdraft) {
    this._overdraft = overdraft;
  }

  getOverdraft() {
    return this._overdraft;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new RangeError("Have to be greater than zero");
    }
    if (amount > this._balance && amount - this._balance > overdraft) {
      throw Error("Balance Low");
    }
    this._balance -= amount;
  }
  toString() {
    return "Checking Account " + this._number + ": balance " + this._balance + ": overdraft "+this._overdraft;
  }
}
