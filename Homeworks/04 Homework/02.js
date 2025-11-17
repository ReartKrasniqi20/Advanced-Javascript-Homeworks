/*
Homework 2: Car control system
Goal: User interacts with simple API while the class hides details.
Requirements:
 Create class Car:
private fields: #fuel, #engineOn
methods:
start()
stop()
drive()
Driving and engine logic must be hidden from user.
*/

class Car {
  #fuel;
  #engineOn;

  constructor(fuel) {
    this.#fuel = fuel;
    this.#engineOn = false;
  }
  getFuel() {
    return this.#fuel;
  }
  getEngineOn() {
    return this.#engineOn;
  }

  start() {
    if (this.#fuel > 0) {
      this.#engineOn = true;
      console.log("The car has started!!!");
    } else {
        console.log("No fuel, cannot start");
    }
}
    stop() {
        if (this.#engineOn) {
        this.#engineOn = false;
        console.log("The car has stopped.");
        } else {
        console.log("The car is already off.");
        }
    }

     drive() {
        if (!this.#engineOn) {
            console.log("Cannot drive. The engine is off!");
            return;
        }
        if (this.#fuel <= 0) {
            console.log("Cannot drive. No fuel left!");
            this.#engineOn = false;
            return;
        }
        this.#fuel -= 10;
        console.log(`Driving... Fuel left: ${this.#fuel}`);
    }

}
const myCar = new Car(50); 

myCar.start();   
myCar.drive();   
myCar.drive();   
myCar.stop();    
myCar.drive();   
myCar.start();   
myCar.drive();   
