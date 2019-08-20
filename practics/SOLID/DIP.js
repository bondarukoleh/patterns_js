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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Printer = /** @class */ (function () {
    function Printer() {
    }
    Printer.prototype.print = function (doc) {
        return true;
    };
    return Printer;
}());
var CustomPrinter = /** @class */ (function () {
    function CustomPrinter() {
    }
    CustomPrinter.prototype.print = function (doc) {
        // Print in some different way
        return true;
    };
    return CustomPrinter;
}());
var SuperPrinter = /** @class */ (function (_super) {
    __extends(SuperPrinter, _super);
    function SuperPrinter() {
        return _super.call(this) || this;
    }
    SuperPrinter.prototype.print = function (doc) {
        // SUPER PRINT
        return true;
    };
    return SuperPrinter;
}(Printer));
var ClientPrinter = /** @class */ (function () {
    function ClientPrinter(printer) {
        this.printer = printer;
    }
    ClientPrinter.prototype.printDocument = function (doc) {
        this.printer.print(doc);
    };
    return ClientPrinter;
}());
var printer = new ClientPrinter(new Printer());
var customPrinter = new ClientPrinter(new CustomPrinter());
var superPrinter = new ClientPrinter(new SuperPrinter());
console.log(printer.printDocument('doc')); // true
console.log(customPrinter.printDocument('doc')); // true
console.log(superPrinter.printDocument('doc')); // true
console.log('AAAA');
