
if(!RR) var RR ={}


RR.Car = class extends RR.Object {
	constructor() {
		super();
		var rect = new RR.Rect(20,10);
		this.setMesh(rect);
		this.heading = new RR.Vector2(1,0);
		
		
		// Engine
		this.rpm = 100;
		
		// tranmission
		this.gear =1.0;
		
		this.speed = 1;
		
	}
	
	accelerate(val) {
		this.speed += 0.1;
		this._position.x += this.heading.x*this.speed;
		this._position.y += this.heading.y*this.speed;
	}
	
	brake(val) {
		this.speed -= 0.5;
	}
	
	turn(val) {
		if(val > 0) {
			this._rotation += 0.1;
		} else {
			this._rotation-=0.1;
		}
		var x = Math.cos(this._rotation);
		var y = Math.sin(this._rotation);
		this.heading.x = x;
		this.heading.y = y;
	}
}
