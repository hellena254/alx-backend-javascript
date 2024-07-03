import Car from "./10-car.js";

const brandSymbol = Symbol('brand');
const motorSymbol = Symbol('motor');
const colorSymbol = Symbol('color');
const rangeSymbol = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[rangeSymbol] = range;
  }

  get range() {
    return this[rangeSymbol];
  }

  cloneCar() {
    // Create a new Car instance, not EVCar
    return new Car(this[brandSymbol], this[motorSymbol], this[colorSymbol]);
  }
}

