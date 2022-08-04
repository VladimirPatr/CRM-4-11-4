'use strict';


const cart = {
	items: [],
	count: 0,
	discount: 0,

	get totalPrice(){
		return this.calculateItemPrice();	
		},
	set setDiscount(promo){
			if (promo == 'METHED') {
				this.discount += 15;
			}
			if (promo == 'NEWYEAR') {
				this.discount += 21;
			}
		},

	add(nameProduct, priceProuct, countProduct = 1){
		const addProucts = {nameProduct, priceProuct, countProduct};
		this.items.push(addProucts);
		this.increaseCount();
	},
	increaseCount(plus = 0){
		this.count = (this.items.reduce((total, {countProduct})=> total + countProduct, 0) + plus);
	},
	calculateItemPrice() {
		const sale = (this.discount)/100;
		const price = this.items.map(node => node.priceProuct * node.countProduct);
		const sum = price.reduce((sum, index) => sum + index, 0);
		return sum - sum * sale;
	   },
	
	clear(){
		this.items.length = 0;
		this.totalPrice = 0;
		this.count = 0;
	},
	print(){
		const itemsStr = JSON.stringify(this.items);
		console.log(
			`${itemsStr}   
             Общая стоимость товаров: ${this.totalPrice} рублей`)
	},

}
	cart.add('трусы', 500, 2)
	cart.add('шорты', 400, 5)
	cart.add('шлепки', 1500, 2)
	cart.add('шапка', 1000, 4)
	cart.setDiscount = 'METHED';
	cart.print();
	
	





