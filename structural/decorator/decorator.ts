interface IFileKeeper {
  write(data: string): boolean
  read(): string
}

class FileKeeper implements IFileKeeper {
  constructor(public fileName: string) {
  }

  read(): string {
    console.log('Reading file...')
    return this.fileName
  }

  write(data: string): boolean {
    console.log('Writing file...')
    this.fileName = `${this.fileName} + ${data}`
    return true
  }
}

// just to initiate decorator, and delegate work to wrapped, and have ability to extend it
// This approach simplifies extension of decorator classes.
class BaseDecorator implements IFileKeeper {
  constructor(protected fileKeeper: IFileKeeper) {
  }

  write(data: string): boolean {
    return this.fileKeeper.write(data)
  }

  read(): string {
    return this.fileKeeper.read()
  }
}

class EncryptKeeper extends BaseDecorator {
  write(data: string): boolean {
    console.log('Adding encryption')
    return this.fileKeeper.write(data)
  }

  read(): string {
    console.log('Adding decryption')
    return this.fileKeeper.read()
  }
}

class CompressKeeper extends BaseDecorator {
  write(data: string): boolean {
    console.log('Adding compression')
    return this.fileKeeper.write(data)
  }

  read(): string {
    console.log('Adding decompression')
    return this.fileKeeper.read()
  }
}

function simpleUsage() {
  const fileKeeper = new FileKeeper('some_file')
  const encryptDecorator = new EncryptKeeper(fileKeeper)
  encryptDecorator.read()
}
// simpleUsage()

/* Some client code manager wants to work with keeper, it need to know nothing about it except interface */
class SomeFileManager {
  constructor(private keeper: IFileKeeper) {
  }

  pushData(data: string) {
    this.keeper.write(data)
  }

  getData(): string {
    return this.keeper.read()
  }
}

/* depend on our needs we can decide how much decorators we want. Little decorator factory (sort of) */
function clientCodeExecution({fileName = 'default', encryption = true, compression = true} = {}) {
  let keeper: FileKeeper | BaseDecorator = new FileKeeper(fileName)

  if (encryption) {
    keeper = new EncryptKeeper(keeper)
  }

  if (compression) {
    keeper = new CompressKeeper(keeper)
  }

  const manager = new SomeFileManager(keeper)
  manager.pushData('Some Data 1;')
  manager.pushData('Some Data 2;')
  console.log(manager.getData())
}
// clientCodeExecution()
