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

class keyBoard extends InputDevice {

    static countKeyBoards = 0;

    _idKeyBoard = 0;

    constructor(typeInput, brand) {
        super(typeInput, brand);
        this._idKeyBoard = ++keyBoard.countKeyBoards;
    }

    get idKeyBoard() {
        return this._idKeyBoard;
    }

    toString() {
        return `idKeboard: ${this.idKeyBoard} typeInput: ${super.typeInput} brand: ${super.brand}`;
    }

}


class Monitor {

    static countMonitors = 0;

    _idMonitor = 0;
    _brand = undefined;
    _size = undefined;

    constructor(brand, size) {
        this._brand = brand;
        this._size = size;
        this._idMonitor = ++Monitor.countMonitors;        
    }

    get idMonitor() {
        return this._idMonitor;
    }
    
    get brand() {
        return this._brand;
    }

    set brand(brand) {
        this._brand = brand;
    }

    get size() {
        return this._size;
    }

    set size(size) {
        this._size = size;
    }

    toString() {
        return `idMonitor: ${this.idMonitor} brand: ${this.brand} size: ${this.size}`
    }
}

class Computer {

    static countComputers = 0;

    _idComputer = 0;
    _name = undefined;
    _monitor = undefined;
    _keyBoard = undefined;
    _mouse = undefined;

    constructor() {
        this._idComputer = ++Computer.countComputers;
    }

    get idComputer() {
        return this._idComputer;
    }

    get name() {
        this._name;
    }

    set name(name) {
        this._name = name;
    }

    get monitor() {
        return this._monitor;
    }

    set monitor(monitor) {
        this._monitor = monitor;
    }

    get keyBoard() {
        this._keyBoard;
    }

    set keyBoard(keyBoard) {
        this._keyBoard = keyBoard;
    }

    get mouse() {
        this._mouse;
    }

    set mouse(mouse) {
        this._mouse = mouse;
    }
}

//Test
const monitor = new Monitor('LG', '22');
console.log(monitor.toString());

//Test
const mouse = new Mouse('S03', 'Razer');
console.log(mouse.toString());