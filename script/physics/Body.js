
if(!RR) var RR = {}

RR.Body = class {
	constructor() {
		this._inverseMass;
		this._velocity;
	}
	
	setMass(mass) {
		this._inverseMass = 1/mass;
	}
	
	getMass() {
		return 1/this._inverseMass;
	}
	
	setVelocity(vel) {
		this._velocity = vel;
	}
	
	addVelocity(vel) {
		this._velocity += vel;
	}
	
	getVelocity() {
		return this._velocity;
	}
	
	
}
