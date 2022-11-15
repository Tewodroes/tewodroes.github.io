class SavingsAccount extends Account{
    constructor(number, interest){
        super(number);
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(interest) {
        this._interest = interest;
    }

    addInterest() {        
        super.deposit(this._balance * (this._interest/100));
    }

    toString() {
        return "Account " + this._number + ": balance " + this._balance + ": interest "+this._interest;
    }
}

