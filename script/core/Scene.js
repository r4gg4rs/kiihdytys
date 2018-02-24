
if(!RR) var RR = {}

RR.Scene = class {
	constructor() {
		this._objects = [];
	}
	
	add(obj) {
		this._objects.push(obj);
	}
	
		render(renderdata) {
		for(var i=0; i< this._objects.length; i++) {
			this._objects[i].render(renderdata);
		}
	}
	
	update() {
	
	}
	
	accept(visitor) {
		for(var i=0; i< this._objects.length; i++) {
			this._objects[i].accept(visitor);
		}
	}
	
}
