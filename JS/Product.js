class Product {

    static countProducts = 0;
    _name = undefined;
    _price = undefined;
    _idProduct = 0;

    constructor(name, price){
        this._name = name;
        this._price = price;
        this._idProduct = Product.countProducts++;
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

const product1 = new Product();
const product2 = new Product('salchicha', 100);
console.log(product1.toString());
console.log(product2.toString());