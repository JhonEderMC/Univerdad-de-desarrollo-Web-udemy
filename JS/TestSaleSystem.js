class Product {

    static countProducts = 0;
    
    _name = undefined;
    _price = undefined;
    _idProduct = 0;

    constructor(name, price){
        this._name = name;
        this._price = price;
        this._idProduct = ++Product.countProducts;
    }

    get idProduct() {
        return this._idProduct;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get price() {
        return this._price;
    }
    set price(price) {
        this._price = price;
    }

    toString() {
        return `id: ${this.idProduct} name: ${this.name} price: ${this.price}`;
    }
}


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
         return this._products.reduce((previuosValue, currentValue) => previuosValue.price + currentValue.price) 
    }

    showOrder() {
        return `idOrden: ${this.idOrder}\ncountProductsAdded: ${this._countProductsAdded}\ntotalSale: ${this.calculateTotal()}\nproducts: ${this._products.reduce((prev, curr) =>prev +' - ' + curr.toString() )}`
    }

}


const order = new Order();

const product1 = new Product('wheel', 150);
const product2 = new Product('salchicha', 100);
//console.log(product1.toString());
//console.log(product2.toString());

order.addProduct(product1);
order.addProduct(product2);
console.log(order.showOrder());