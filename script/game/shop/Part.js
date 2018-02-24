
if(!RR) var RR = {}

RR.Part = class {
	constructor() {
		this._price;
		this._condition;
	}
	
	getPrice() {
		return this._price;
	}
	
	getCondition() {
		return this._condition;
	}
}
