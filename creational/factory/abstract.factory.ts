import {TruckFactory, CarFactory, IVehicle} from './factory.pattern'

enum FactoryTypes {
  car = 'car',
  truck = 'truck'
}

class VehicleFactory {
  private factories: {} = {};

  public registerFactory(type: FactoryTypes, factory) {
    this.factories[type] = factory
  }

  public getInstance(type: FactoryTypes, options): IVehicle {
    if (this.factories[type]) {
      return new this.factories[type]().getInstance(options)
    } else {
     throw Error(`There no factory registered for type: ${type}`)
    }
  }
}

const vehicleFactory = new VehicleFactory();
vehicleFactory.registerFactory(FactoryTypes.car, CarFactory);
vehicleFactory.registerFactory(FactoryTypes.truck, TruckFactory);

const car = vehicleFactory.getInstance(FactoryTypes.car, 'Yellow');
// car.move();
