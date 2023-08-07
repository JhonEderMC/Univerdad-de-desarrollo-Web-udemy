class Order {

    static countOrders = 0;

    _idOrder = undefined;
    _products = [];
    _countProductsAdded = 0;

    static get  MAX_PRODUCTS() {
        return 5;        
    }

    constructor() {
        this._products = [];
        this._idOrder = ++Order.countOrders;
    }

    get idOrder() {
        return this._idOrder;
    }

    addProduct(product) { 
        if(this._products.length < Order.MAX_PRODUCTS) {
            this._products.push(product);
            this._countProductsAdded++;
        }else {
            console.log('You dont can add more products');  
        }         
    }

    calculateTotal() {
         return this._products.reduce((previuosValue, currentValue) => previuosValue + currentValue) 
    }

    showOrder() {

    }


}