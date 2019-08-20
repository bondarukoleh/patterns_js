interface IPrinter {
  print(doc: any): boolean
}

class Printer implements IPrinter {
  print(doc: any): boolean {
    // printing
    return true;
  }
}

class SupesPrinter extends Printer {
  print(doc: any): boolean {
    // make a cup of tea
    return super.print(doc);
  }
}
