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

//Test 
const keyBoard = new keyBoard('z100', 'Razer');