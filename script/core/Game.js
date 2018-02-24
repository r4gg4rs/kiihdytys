
if(!RR) var RR = {}

RR.Game = class {
	constructor() {
		this._scene;
		this._renderer;
		this._rd;
	}
	
	init() {
		this._scene = new RR.Scene();
		var canvas = $("#canvas");
		console.log(canvas);
		
		
		this._renderer = new RR.Renderer(canvas);
		this._rd = new RR.RenderData(this._renderer);
		this._rd.rotation = 0;
		
		var car = new RR.Car();
		car.setPosition(new RR.Vector2(20,20));
		this._scene.add(car);
		$(document).keydown(function(e) {
			//console.log("keydown");
			//console.log(e.which);
			if(e.which == 38) {
				car.accelerate();
			}
			if(e.which == 37) { // left
				car.turn(-0.5);
			}
			
			if(e.which == 39) { //  right
				car.turn(0.5);
			}
			
			if(e.which == 40 ) { // down
			
			}
		})
	}
	
	start() {
		//console.log('upd');
		var that = this;
		this.update();
		this.render();
		
		//window.requestAnimationFrame(that.start);
		
		setTimeout(function() { that.start();})
	}
	
	update() {
		
	}
	
	render() {
	this._renderer.clear();
		this._rd.position.x = 0;
		this._rd.position.y = 0;
		this._scene.render(this._rd);
	}
	
}
