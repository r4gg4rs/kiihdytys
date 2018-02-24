
if(!RR) var RR = {}

RR.Camera = class {
	constructor() {
		this._position;
	}
	
	setPosition(pos) {
		this._position = pos;
	}
	
	getPosition() {
		return this._position;
	}
}
