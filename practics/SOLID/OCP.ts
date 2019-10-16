interface IPrinter {
  print(doc: any): boolean
}

abstract class Printer implements IPrinter {
  print(doc: any): boolean {
    // printing
    return true
  }
}

class SuperPrinter extends Printer {
  print(doc: any): boolean {
    // make a cup of tea
    return super.print(doc)
  }
}

class SuperMegaPrinter extends SuperPrinter {
  print(doc: any): boolean {
    // walk your dog for you
    return super.print(doc)
  }
}

class ClientPrinter {
  constructor(private printer: Printer) {
  }

  printYourDoc(doc) {
    return this.printer.print(doc)
  }
}

const superPrinter = new ClientPrinter(new SuperPrinter())
const superMegaPrinter = new ClientPrinter(new SuperMegaPrinter())

console.log(superMegaPrinter.printYourDoc('doc2')) // true
console.log(superPrinter.printYourDoc('doc3')) // true
