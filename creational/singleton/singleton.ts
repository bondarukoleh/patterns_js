enum VehicleType {
  car = 'car',
  truck = 'truck'
}

interface IVehicle {
  color(): string;
}

class Car implements IVehicle{
  constructor(private vehicleColor) {
  }
  get color(){
    return this.vehicleColor
  }
}

class Truck implements IVehicle {
  constructor(private vehicleColor) {
  }
  get color(){
    return this.vehicleColor
  }
}

class VehicleSingleton {
  private instance: IVehicle = null;

  constructor(private vehicleType: VehicleType, private color) {
  }

  getInstance(): IVehicle {
    if (this.instance === null) {
      switch (this.vehicleType) {
        case VehicleType.car:
          this.instance = new Car(this.color);
          break;
        case VehicleType.truck:
          this.instance = new Truck(this.color);
          break;
      }
    }
    return this.instance
  }
}

function singleIt() {
  const carSingleton = new VehicleSingleton(VehicleType.car, 'Red');
  const car1 = carSingleton.getInstance();
  const car2 = carSingleton.getInstance();
  console.log(`Cars are equal - ${car1 === car2}`);

  const truckSingleton = new VehicleSingleton(VehicleType.truck, 'Black');
  const truck1 = truckSingleton.getInstance();
  const truck2 = truckSingleton.getInstance();
  console.log(`Trucks are equal - ${truck1 === truck2}`);
  console.log(`Truck instance of Truck - ${truck2 instanceof Truck}`);
  console.log(`Truck's color - ${truck2.color}`);
}
// singleIt();