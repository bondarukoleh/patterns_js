interface IPrinter {
  print(doc: any): boolean
}

class SimplePrinter implements IPrinter{
  print(doc: any): boolean {
    // print
    return true
  }
}

class SuperPrinter extends SimplePrinter {
  print(doc: any): boolean {
    // with some extra moves
    return super.print(doc);
  }
}

class SilentPrinter extends SimplePrinter {
  print(doc: any): boolean {
    // with some extra moves
    const result = this.silentlyPrint();
    return result.done
  }

  private silentlyPrint(): {done: boolean} {
    // make some print in different way
    return {done: true}
  }
}
