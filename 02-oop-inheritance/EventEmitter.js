export default class EventEmitter {
  constructor() {
    this._events = {};
  }

  on(eventName, callback) {
    if(!this._events[eventName] ) {
    this._events[eventName] = [];
   }
    this._events[eventName].push(callback);
  }

  emit(eventName) {
    this._events[eventName].forEach((callback) => {
    callback(eventName);
    });
  }

  off(eventName, callbackRemove) {
    this._events[eventName] = this._events[eventName].filter(callback => callback !== callbackRemove);
  }


}