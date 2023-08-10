class InputDevice {

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

class KeyBoard extends InputDevice {

    static countKeyBoards = 0;   

    constructor(typeInput, brand) {
        super(typeInput, brand);
        this._idKeyBoard = ++KeyBoard.countKeyBoards;
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

    constructor() {
        this._idComputer = 0;
        this._name = null;
        this._monitor = null;
        this._keyBoard = null;
        this._mouse = null;
        this._idComputer = ++Computer.countComputers;
    }

    get idComputer() {
        return this._idComputer;
    }

    get name() {
         return this._name;
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
       return this._keyBoard;
    }

    set keyBoard(keyBoard) {
        this._keyBoard = keyBoard;
    }

    get mouse() {
       return this._mouse;
    }

    set mouse(mouse) {
        this._mouse = mouse;
    }

    toString() {
       return `idComputer: ${this.idComputer}\nname: ${this.name}\nmonitor: ${this.monitor.toString()}\nkeyBoard: ${this.keyBoard.toString()}\nmouse: ${this.mouse.toString()}`;
    }
}

class Order {

    static countOrders = 0;

    constructor() {
        this._idOrder = ++Order.countOrders;
        this._computers = [];        
    }

    get idOrder() {
        return this._idOrder;
    }

    get computers() {
        return this._computers;
    }

    addComputer(computer) {
        this._computers.push(computer);
    }

    showOrder() {
    return `idOrden: ${this.idOrder}\ncomputers: ${this.computers.reduce((prev, curr)=> prev.toString() + '   ' + curr.toString())}`
    }
    
 }


//Test
const keyBoard1 = new KeyBoard('z100', 'Razer');
//console.log(keyBoard1.toString());
const mouse = new Mouse('S03', 'Razer');
//console.log(mouse.toString());

const monitor = new Monitor('LG', '22');
//console.log(monitor.toString());

const computer = new Computer();
computer.name = 'Asus Pro 22';
computer.monitor = monitor;
computer.keyBoard = keyBoard1;
computer.mouse = mouse;
//console.log(computer.toString());

const order = new Order();
order.addComputer(computer);
console.log(order.showOrder());