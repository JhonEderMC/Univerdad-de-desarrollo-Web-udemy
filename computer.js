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