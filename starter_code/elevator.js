/* jshint esversion:6*/

class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.waitingList = [];
    this.destiny = [];
    this.empty = false;
  }

  start() {
    this.acction = setInterval(() => { this.updateEnter();}, 1000);
  }
  stop(){
    clearInterval(this.acction);
  }
  updateEnter() {
    if (this.floor < this.requests[0]) {this.floorUp();}
    if (this.floor > this.requests[0]) {this.floorDown();}
    if (this.floor == this.requests[0]) {this._passengersEnter();}

    if (this.floor < this.destiny[0] && this.empty == true) {
      this.floorUp();
    }
    if (this.floor > this.destiny[0] && this.empty == true) {
      this.floorDown();
    }
    if (this.floor == this.destiny[0] && this.empty == true) {
      this._passengersLeave();
    }
  }
  _passengersEnter() {
    this.empty = true;
    this.requests.shift();
    console.log(this.waitingList[0].name + " entra en el ascensor en planta " + this.floor );
  }
  _passengersLeave() {
    this.destiny.shift();
    this.stop();
    console.log(this.waitingList[0].name + " sale del ascensor en planta " + this.floor);
  }
  floorUp() {
    return (this.floor < this.MAXFLOOR) ? this.floor += 1 : false;
  }
  floorDown() {
    return (this.floor > 0) ? this.floor -= 1 : false;
  }
  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
    this.destiny.push(person.destinationFloor);
  }
  log() {
  }
}

module.exports = Elevator;
