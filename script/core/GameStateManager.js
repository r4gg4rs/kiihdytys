
if(!RR) var RR = {}

RR.GameStateManager = class {
	constructor() {
		this._currentState;
	}
	
	changeState(newState) {
		this._currentState = newState;
	}
	
	static get() {
		if(!this._instance) this._instance = new GameStateManager();
		return this._instance;
	}
}
