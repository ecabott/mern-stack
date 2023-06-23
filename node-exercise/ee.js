const events = require("events");
const eventEmitter = new events.EventEmitter();

const myEventHandler = () => {
console.log("I smell coffee!");
};

//Calling 'myEventHandler' function when 'coffee' event is triggered
eventEmitter.on("coffee", myEventHandler);

//Triggering the 'coffee' event
eventEmitter.emit("coffee");