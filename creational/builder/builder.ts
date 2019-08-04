enum EngineType {
  sport = 'Sport Engine',
  regular = 'Regular Engine',
  powerFull = 'PowerFull Engine'
}

enum CarcassType {
  pretty = 'Nice looking carcass',
  regular = 'Simple carcass',
  big = 'Trucker carcass'
}

interface IVehicleBuilder {
  setEngine(type: EngineType): VehicleBuilder;
  setCarcass(type: CarcassType): VehicleBuilder;
  setColor(color: string): VehicleBuilder;
  setWheelSize(size: string): VehicleBuilder;
  getInstance(): IVehicle;
}

interface IVehicle {
  engine?: string;
  carcass?: string;
  color?: string;
  wheelSize?: string;

  getInfo(): {};
}

class Vehicle implements IVehicle {
  public engine: string;
  public carcass: string;
  public color: string;
  public wheelSize: string;

  getInfo() {
    const info = {};
    for(const name of Object.getOwnPropertyNames(this)){
      info[name] = this[name]
    }
    return info;
  }
}

class VehicleBuilder implements IVehicleBuilder {
  private vehicle = new Vehicle();

  setEngine(type: EngineType): VehicleBuilder {
    this.vehicle.engine = type;
    return this;
  }

  setCarcass(type: CarcassType): VehicleBuilder {
    this.vehicle.carcass = type;
    return this;
  }

  setColor(color): VehicleBuilder {
    this.vehicle.color = color;
    return this;
  }

  setWheelSize(size): VehicleBuilder {
    this.vehicle.wheelSize = size;
    return this;
  }

  getInstance(): IVehicle {
    const readyVehicle = this.vehicle;
    this.resetVehicle();
    return readyVehicle;
  }

  private resetVehicle(){
    this.vehicle = new Vehicle()
  }
}

class Director {
  constructor(private builder: IVehicleBuilder) {
  }

  getSportCar(): IVehicle {
    return this.builder.setWheelSize('Small')
        .setEngine(EngineType.sport)
        .setCarcass(CarcassType.pretty)
        .setColor('Red').getInstance()
  }

  getRegularCar(): IVehicle {
    return this.builder.setWheelSize('Small')
        .setEngine(EngineType.regular)
        .setCarcass(CarcassType.regular)
        .setColor('Blue').getInstance()
  }
}

function buildIt() {
  const builder = new VehicleBuilder();
  const truck = builder.setCarcass(CarcassType.big)
      .setEngine(EngineType.powerFull)
      .setWheelSize('BIG wheels')
      .getInstance();
  console.log(truck.getInfo());

  const sportCar = builder.setWheelSize('Small')
      .setEngine(EngineType.sport)
      .setCarcass(CarcassType.pretty)
      .setColor('Red').getInstance();
  console.log(sportCar.getInfo());

  const director = new Director(new VehicleBuilder());
  const regularCar = director.getRegularCar();
  console.log(regularCar.getInfo());
}
// buildIt();
