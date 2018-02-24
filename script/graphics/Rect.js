/**
 * @author			Jani Haippo		jani.haippo@gmail.com
 * @version			22.02.2018
 * 
 * @file Rect.js
 **/


if(!RR) var RR = {}


/**
 * @class RR.Rect
 **/
RR.Rect = class {
	/**
	 * @function constructor
	 **/
	constructor(width,height) {
		this._width = width
		this._height = height;
	}

	/**
	 * @function render
	 **/
	render(renderdata) {
		var ctx = renderdata.renderer.getCtx();
		var pos = renderdata.position;
		ctx.save();
		
		ctx.fillStyle="#FF0000";
		
		console.log(renderdata.rotation);
	//	ctx.rotate(renderdata.rotation * Math.PI /360);
		ctx.translate(pos.x,pos.y);
		ctx.rotate(renderdata.rotation);
	//ctx.moveTo(pos.x,pos.y);
		//ctx.translate(pos.x,pos.y);
		//ctx.fillRect(pos.x -(this._width/2), pos.y -(this._height/2),(this._width/2),(this._height/2) );
		//ctx.fillRect(pos.x,pos.y, this._width,  this._height);
		//ctx.fillRect(-this._width/2, - this._height/2,this._width/2,this._height/2);
		ctx.fillRect(-this._width/2,-this._height/2,this._width,this._height);
		ctx.restore();
	}
}
