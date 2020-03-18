import Actor from './Actor.js';
import EventEmitter from './EventEmitter.js';
import Logger from './Logger.js';
import Movie from './Movie.js';

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

/*--Ejercicio 4--*/
let social = {
  share(friendName) {
    console.log(`${friendName} share ${this.title}`);
  },
  like(friendName) {
    console.log(`${friendName} like ${this.title}`);
  }
};

const ironman = new Movie('Iron man',2008,'2h 6m');

Object.assign(ironman,social);

ironman.share('Mike Blossom'); //Output: Mike Blossom share Iron man
ironman.like('Antonella Buono'); //Output: Antonella Buono like Iron man

