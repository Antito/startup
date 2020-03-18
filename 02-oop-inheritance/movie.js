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
    this.cast = [];
   
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
  get cast() {
    return this._cast;
  }
  set cast(cast) {
    this._cast=cast;
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

  addCast(cast) {
    if (Array.isArray(cast)) {
      for (var i = 0; i<cast.length; i++) {
        if (cast[i] instanceof Actor) { 
          this._cast.push(cast[i]);
        }
      }
    }
    else {
      if (cast instanceof Actor) {
        this._cast.push(cast);
      }
    }
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

class Logger {
  constructor() {

  }
  log(info) {
    console.log(info);
  }
}


/*--Ejercicio 1--*/
var movie1 = new Movie("Harry Potter and the philosopher's stone",2001,"2h 39m")
var movie2 = new Movie("Parasite",2019,"2h 12m")
var movie3 = new Movie("Frozen",2013,"1h 49m")

console.log(movie1.title);
console.log(movie2);
console.log(movie3);

/*--Ejercicio 2--*/
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

/*--Ejercicio 3--*/
const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(actors);
console.log(terminator.cast);

//Make an instance of Logger and make it listen to Movie's play event
let logger = new Logger();

terminator.on("play",() => { logger.log("Play event emitted") });
terminator.play(); //Output: Play event emitted and then Playing...



