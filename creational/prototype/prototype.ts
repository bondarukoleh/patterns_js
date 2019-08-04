interface Cloneable {
  clone(markClone?);
}

class Car implements Cloneable {
  public color: string;
  public engine: {type, power};
  public isClone?: boolean

  constructor({color, engine}) {
    this.color = color;
    this.engine = engine;
  }

  public clone(markClone = false): Car {
    const clone = Object.create(this);
    clone.engine = Object.create(this.engine);
    if(markClone){
      Object.defineProperty(clone, 'isClone', {
        value: true,
        configurable: false,
        enumerable: true
      })
    }
    return clone;
  }
}

function cloneIt(){
  const car1 = new Car({color: 'Red', engine: {type: 'Ford', power: 'Very powerfull'}})
  const car2 = car1.clone();
  console.log(`Engines objects are different - ${car1.engine !== car2.engine}`);
  const car3 = car1.clone(true);
  console.log(`Clone is marked - ${car3.isClone}`);
}
// cloneIt();