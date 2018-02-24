/**
 * @author			Jani Haippo		jani.haippo@gmail.com
 * @version			22.02.2018
 **/
if(!RR) var RR =  {}


/**
 * @class RR.Vector2
 **/
RR.Vector2 = class {
	/**
	 * @function constructor
	 **/
	constructor(x,y) {
		this.x = x || 0;
		this.y = y || 0;
	}
	
	/**
	 * @function add
	 **/
	add(vec) {
		this.x +=vec.x;
		this.y +=vec.y;
	}

	/**
	 * @function sub
	 **/
	sub(vec) {
		this.x -=vec.x;
		this.y -=vec.y;
	}
	
	
	/**
	 * @function multiplyScalar
	 **/
	multiplyScalar(scalar) {
		this.x *= scalar;
		this.y *= scalar;
	}

	/**
	 * @function length
	 **/
	length() {
		return Math.sqrt( (this.x * this.x) + (this.y * this.y)   );
	}
}
