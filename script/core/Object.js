/**
 *	@author		Jani Haippo		jani.haippo@gmail.com
 *	@version	22.02.2018
 **/



if(!RR) var RR = {}


/**
 * @class RR.Object
 **/
RR.Object =  class {
	constructor() {
		this._position = new RR.Vector2();
		this._rotation = 0;
		this._mesh;
		this._components = [];
	}
	setMesh(mesh) {
		this._mesh = mesh;
	}

	setPosition(pos) {
		this._position = pos;
	}

	getPosition() {
		return this._position;
	}

	setRotation(rot) {
		this._rotation = rot;
	}

	getRotation() {
		return this._rotation;
	}
	
	addComponent(name, component) {
		this._components[name] = component;
	}
	
	accept(visitor) {
		visitor.visit(this);
	}
	
	render(renderdata) {
	//console.log("RENDER");
	//console.log("x " + this._position.x + " Y " + this._position.y);
		renderdata.position.add(this.getPosition());
		renderdata.rotation = this._rotation;
		if(this._mesh != null) this._mesh.render(renderdata);
	}
}
