/* wrong
class Printer {
  print(doc: any): boolean {
    return true;
  }
}

class ClientPrinter {
  constructor(private printer: Printer) { // If you'have another printer - you're stuck
  }

  printDocument(doc){
    this.printer.print(doc)
  }
}
 */

interface IPrinter {
  print(doc: any): boolean
}

class Printer implements IPrinter{
  print(doc: any): boolean {
    console.log(`Printer prints ${doc}`);
    return true;
  }
}

class CustomPrinter implements IPrinter{
  print(doc: any): boolean {
    // Print in some different way
    console.log(`CustomPrinter prints ${doc}`);
    return true;
  }
}

class SuperPrinter extends Printer{
  constructor() {
    super();
  }

  print(doc: any): boolean {
    // SUPER PRINT
    console.log(`SuperPrinter prints ${doc}`);
    return true;
  }
}

class ClientPrinter {
  constructor(private printer: IPrinter) { // Depend on abstraction
  }

  printDocument(doc){
    this.printer.print(doc)
  }
}

const printer = new ClientPrinter(new Printer()); // you can pass any printers you like
const customPrinter = new ClientPrinter(new CustomPrinter());
const superPrinter = new ClientPrinter(new SuperPrinter());

printer.printDocument('doc1'); // true
customPrinter.printDocument('doc2'); // true
superPrinter.printDocument('doc3'); // true
