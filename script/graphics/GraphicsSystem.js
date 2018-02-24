
if(!RR) var RR = { }

RR.GraphicsSystem = class {
    constructor() {
		this._ctx;
		this._canvas;
		this._width;
		this._height;
		this._clearColor;
		this._renderer;
    }

    init(canvas) {
		this._canvas = canvas;
		this._ctx = canvas.getContext("2d");
		this._width = this._canvas.width;
		this._height = this._canvas.height;
		this._renderer = new RR.Renderer(this._ctx);
    }
    
    getRenderer() {
    	return this._renderer;
    }
}
