class Expenditure {

    static countExpenditure = 0;

    constructor(description, value) {
        super(description, value);
        this._id = Expenditure.countExpenditure++;
    }

    get id() {
        return this._id;
    }
}