/* jshint esversion:6*/

const Elevator = require('./elevator.js');
const Person = require('./person.js');

const elevator = new Elevator();
const person = new Person("santi", 4, 0);
elevator.call(person);

elevator.start();
