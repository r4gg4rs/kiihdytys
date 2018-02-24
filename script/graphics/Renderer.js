
if(!RR) var RR = {}

RR.Renderer  = class {
	constructor(canvas) {
		var canvas =  document.getElementById("canvas");
		//var canvas =document.getElementById("canvas"); 
		this._width = canvas.width;
		this._height = canvas.height;
		this.ctx = document.getElementById("canvas").getContext('2d');
		//this.ctx = canvas.getContext("2d");
	}
	
	getCtx() {
		return this.ctx;
	}
	
    clear() {
    	this.ctx.fillStyle = "#000000";
		this.ctx.fillRect(0,0, this._width, this._height);
    }

}
