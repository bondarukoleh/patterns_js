interface ICoordinates {
  x: number
  y: number
}

interface IOriginator {
  setCoordinates(coords: ICoordinates): void
  makeSnapshot(): IMemento
  restoreStateFrom(memento: IMemento): void
  showState(): void
}

class DotField implements IOriginator {
  private coords: ICoordinates
  private somePrivateState: any = 'Private State'

  setCoordinates(coords: ICoordinates): void {
    this.coords = coords
    this.somePrivateState = this.somePrivateState + coords.x + coords.y
  }

  makeSnapshot(): IMemento {
    return new Snapshot(this.coords, this.somePrivateState)
  }

  restoreStateFrom(memento: IMemento): void {
    const {coords, innerState} = memento.getData()
    this.setCoordinates(coords)
    this.somePrivateState = innerState
  }

  showState(): void {
    console.log(`Actual field state is:
    x: "${this.coords.x}"
    y: "${this.coords.y}"
    innerState: "${this.somePrivateState}"
    `)
  }
}

interface IMemento {
  getData(): { coords: ICoordinates, innerState: any }
}

class Snapshot implements IMemento {
  constructor(private coords: ICoordinates, private innerState: any) {
  }

  getData() {
    return {
      coords: this.coords,
      innerState: this.innerState
    }
  }
}

interface ICareTaker {
  createBackup(): void
  restoreBackup(): void
  showBackups(): void
}

class CoordsStorage implements ICareTaker {
  private mementos: Array<IMemento> = []

  constructor(private dotField: DotField) {
  }

  createBackup(): void {
    this.mementos.push(this.dotField.makeSnapshot())
    console.log('Backup created...');
  }

  restoreBackup(): void {
    if(this.mementos.length) {
      this.dotField.restoreStateFrom(this.mementos.pop() as unknown as IMemento)
      console.log('Backup restored...');
    } else {
      console.log('No backup to restore');
    }
  }

  showBackups(): void {
    console.log(`History of Backups:\n`)
    this.mementos.forEach((memento, i) => {
      const {coords: {x, y}, innerState} = memento.getData()
      console.log(`Index: ${i}
      x: "${x}";
      y: "${y}"
      innerState: "${innerState}"\n`)
    })
  }
}

function clientCode() {
  const dotFields = new DotField()
  const coordsStorage = new CoordsStorage(dotFields)

  dotFields.setCoordinates({x: 11, y: 11})
  coordsStorage.createBackup()

  dotFields.setCoordinates({x: 22, y: 22})
  coordsStorage.createBackup()

  coordsStorage.showBackups()
  dotFields.showState()
  console.log(`=========== SET COORDINATES ==============`);
  dotFields.setCoordinates({x: 33, y: 33})
  dotFields.showState()
  console.log(`============== RESTORING =================`);
  coordsStorage.restoreBackup()
  dotFields.showState()
}

clientCode()