class Mouse extends InputDevice {

    static countMouses = 0;

    _idMouse = 0;

    constructor(typeInput, brand) {
        super(typeInput, brand);
        this._idMouse = ++Mouse.countMouses;        
    }

    get idMouse() {
        return this._idMouse;
    }

    toString() {
        return `idMouse: ${this.idMouse} typeInput: ${super.typeInput} brand: ${super.brand}`;
    }

}

//Test
const mouse = new Mouse('S03', 'Razer');
console.log(mouse.toString);