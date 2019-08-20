/* wrong
interface IMegaPrinter {
  print(doc: any): boolean
  staple(): boolean
  makeTea(): {tea: string}
}

class MegaPrinter implements IMegaPrinter{
  staple(): boolean {
    return true
  }

  print(doc: any): boolean {
    return true
  }

  makeTea(): {tea: string} {
    return {tea: 'earl grey'}
  }
}
*/

interface IPrinter {
  print(doc: any): boolean
}

interface IStapler {
  staple(): boolean
}

interface ITeaMaker {
  makeTea(): {tea: string}
}

class Printer implements IPrinter {
  print(doc: any): boolean {
    return true;
  }
}

class Stapler implements IStapler {
  staple(): boolean {
    return true;
  }
}

class TeaMaker implements ITeaMaker {
  makeTea(): {tea: string} {
    return {tea: 'earl grey'}
  }
}
