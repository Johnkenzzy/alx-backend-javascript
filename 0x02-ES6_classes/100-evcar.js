import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override cloneCar method to return an instance of Car, not EVCar
  cloneCar() {
    const Cls = Car; // Ensures cloneCar returns an instance of Car
    return new Cls(this._brand, this._motor, this._color);
  }
}
