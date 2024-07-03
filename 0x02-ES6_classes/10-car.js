const brandSymbol = Symbol('brand');
const motorSymbol = Symbol('motor');
const colorSymbol = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[brandSymbol] = brand;
    this[motorSymbol] = motor;
    this[colorSymbol] = color;
  }

  get brand() {
    return this[brandSymbol];
  }

  get motor() {
    return this[motorSymbol];
  }

  get color() {
    return this[colorSymbol];
  }

  cloneCar() {
    // Create a new instance of the current class
    const constructor = Object.getPrototypeOf(this).constructor;
    return new constructor(this[brandSymbol], this[motorSymbol], this[colorSymbol]);
  }
}

