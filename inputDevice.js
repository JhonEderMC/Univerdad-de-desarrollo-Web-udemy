class InputDevice {

    _typeInput = undefined;
    _brand = undefined;

    constructor(typeInput, brand) {
        this._typeInput = typeInput;
        this._brand = brand;
    }

    get typeInput() {
        return this._typeInput;
    }

    set typeInput(typeInput) {
        this._typeInput = typeInput;
    }

    get brand() {
        return this._brand;
    }

    set brand(brand) {
        this._brand = brand;
    }
}

//Test
//const inputDevice1 = new InputDevice('USB', 'Logitech');
//console.log(inputDevice1);