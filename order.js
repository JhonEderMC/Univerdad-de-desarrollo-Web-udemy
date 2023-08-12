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

    set addComputr(computer) {
        this._computers.push(computer);
    }

    showOrder() {
    return `idOrden: ${this.idOrder}\ncomputers: ${this.computers.forEach((c)=> c.toString())}`
    }
    
 }