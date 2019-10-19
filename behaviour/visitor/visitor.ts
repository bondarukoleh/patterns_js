/* Very poor typed example */
interface IVisitor {
  changeTruckState: (vehicle: Truck) => void
  changeCarState: (vehicle: Car) => void
}

interface IVehicle {
  visit(visitor: IVisitor)
}

class Car implements IVehicle {
  carState = 1;

  visit(visitor: IVisitor) {
    visitor.changeCarState(this)
    console.log(`Car state is "${this.carState}" now`);
  }
}

class Truck implements IVehicle {
  truckState = 2;

  visit(visitor: IVisitor) {
    visitor.changeTruckState(this)
    console.log(`Truck state is "${this.truckState}" now`);
  }
}

class Visitor implements IVisitor {
  changeTruckState(vehicle: Truck) {
    console.log(`Changing "${vehicle.truckState}" truckState.`);
    vehicle.truckState = 3;
  }

  changeCarState(vehicle: Car) {
    console.log(`Changing "${vehicle.carState}" carState.`);
    vehicle.carState = 2;
  }
}

function clientCode() {
  const vehicles = [new Car(), new Truck()]
  const visitor = new Visitor()
  vehicles.forEach((vehicle) => vehicle.visit(visitor))
}

clientCode()
