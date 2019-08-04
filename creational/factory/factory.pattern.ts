interface IVehicle {
  color: string;
  move();
}

abstract class VehicleFactory {
  public abstract getInstance(color): IVehicle
}

class CarFactory extends VehicleFactory {
  public getInstance(color): IVehicle {
    return new Car(color);
  }
}

class TruckFactory extends VehicleFactory {
  public getInstance(color): IVehicle {
    return new Truck(color);
  }
}

class Car implements IVehicle {
  public color: string;

  constructor(color) {
    this.color = color;
  }

  move() {
    console.log(`Moving like ${this.color} car...`);
  }
}

class Truck implements IVehicle {
  public color: string = null;

  constructor(color) {
    this.color = color;
  }

  move() {
    console.log(`Moving like ${this.color} truck...`);
  }
}

function moveLike(vehicle: IVehicle) {
  vehicle.move()
}

// moveLike(new CarFactory().getInstance('Red'));
// moveLike(new TruckFactory().getInstance('Blue'));

export {
  CarFactory,
  TruckFactory,
  Truck,
  Car,
  IVehicle
}


