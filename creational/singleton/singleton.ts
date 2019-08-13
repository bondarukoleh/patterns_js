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
  private static instance: IVehicle = null;

  private constructor() {}

  static getInstance(vehicleType?: VehicleType, color?): IVehicle {
    if (VehicleSingleton.instance === null) {
      switch (vehicleType) {
        case VehicleType.car:
          VehicleSingleton.instance = new Car(color);
          break;
        case VehicleType.truck:
          VehicleSingleton.instance = new Truck(color);
          break;
      }
    } else if(!!vehicleType) {
      throw Error('You are trying to create another instance of singletone. Stop it.')
    }
    return VehicleSingleton.instance
  }
}

function singleIt() {
  const car1 = VehicleSingleton.getInstance(VehicleType.car, 'Red');
  const car2 = VehicleSingleton.getInstance();
  console.log(`Cars are equal - ${car1 === car2}`);

  try {
    const truckSingleton = VehicleSingleton.getInstance(VehicleType.truck, 'Black');
  } catch (e) {
    console.log(e.message)
  }
}
// singleIt();
