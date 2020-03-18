export default class EventEmitter {
  constructor() {
    this._events = {};
  }
  on(eventName, callback) {
    if (!this._events[eventName] ) {
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
    const events = this._events[eventName];
    this._events[eventName] = events.filter(callback => callback !== callbackRemove);
  }
}