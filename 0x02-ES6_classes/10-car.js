export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw new TypeError('Brand must be a string')
    }
    this._brand = brand;

    if (typeof motor !== 'string') {
      throw new TypeError('motor must be a string')
    }
    this._motor = motor;

    if (typeof color !== 'string') {
      throw new TypeError('Color must be a string')
    }
    this._color = color;
  }

  cloneCar() {
    
  }
}