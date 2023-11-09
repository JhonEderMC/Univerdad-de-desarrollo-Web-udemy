class Data {

    constructor(value, description) {
        this._value = value;
        this._description = description;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    get description() {
        return this._description;
    }

    set description(description) {
        this._description = description;
    }

}