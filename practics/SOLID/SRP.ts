/* wrong
interface IPrinter {
  print(doc: any): boolean
  staple(): boolean
}

class Printer implements IPrinter{
  print(doc: any): boolean {
    // print doc
    return true
  }
  staple(): boolean {
    // staple doc
    return true
  }
}
*/

/* correct */
interface IPrinter {
  print(doc: any): boolean
}

interface IStapler {
  staple(): boolean
}

class Printer implements IPrinter {
  print(doc: any): boolean {
    // print doc
    return true;
  }
}

class Stapler implements IStapler {
  staple(): boolean {
    // staple doc
    return true;
  }
}
