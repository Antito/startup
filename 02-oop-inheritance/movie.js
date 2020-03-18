class EventEmitter {
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

class Movie extends EventEmitter {
  constructor(name,year,duration) {
    super();
    this._title = name;
    this._year = year;
    this._duration = duration;
   
  }

  get title() {
    return this._title;
  }
  set title(title) {
    this._title = title;
  }
  get year() {
    return this._year;
  }
  set year(year) {
    this._year=year;
  }
  get duration() {
    return this._duration;
  }
  set duration(duration) {
    this._duration=duration;
  }

  play() {
    super.emit("play");
    console.log("Playing..");
  }

  pause() {
    super.emit("pause");
    console.log("Pause..");
  }

  resume() {
    super.emit("resume");
    console.log("Resume..");
    
  }
}

class Actor {
  constructor(name,age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    this._name=name;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    this._age=age;
  }
}



var movie1 = new Movie("Harry Potter and the philosopher's stone",2001,"2h 39m")
var movie2 = new Movie("Parasite",2019,"2h 12m")
var movie3 = new Movie("Frozen",2013,"1h 49m")

console.log(movie1.title);
console.log(movie2);
console.log(movie3);

let eventEmitter = new EventEmitter();

let callback1 = () => {
  console.log("Callback 1");
};
eventEmitter.on("myEvent1", callback1);
eventEmitter.emit("myEvent1");
eventEmitter.off("myEvent1",callback1);

//Inherited methods
movie1.on("play",() => { console.log("Play event emitted") });
movie1.on("pause",() => { console.log("Pause event emitted") });
movie1.on("resume",() => { console.log("Resume event emitted") });

//Movie methods
movie1.play();
movie1.pause();
movie1.resume();


