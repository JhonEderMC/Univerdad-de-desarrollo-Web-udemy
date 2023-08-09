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

//Test
const monitor = new Monitor('LG', '22');
console.log(monitor.toString());