class Income extends Data {

    static countIncome = 0;

    constructor(value, description) {
        super(value, description);
        this._id = Income.countIncome++;
    }

    get id() {
        return this._id;
    }
}