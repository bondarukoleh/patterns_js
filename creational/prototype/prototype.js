var Car = /** @class */ (function () {
    function Car(_a) {
        var color = _a.color, engine = _a.engine;
        this.color = color;
        this.engine = engine;
    }
    Car.prototype.clone = function (_a) {
        var _b = (_a === void 0 ? {} : _a).markClone, markClone = _b === void 0 ? false : _b;
        var clone = Object.create(this);
        clone.engine = Object.create(this.engine);
        if (markClone) {
            Object.defineProperty(clone, 'isClone', {
                value: true,
                configurable: false,
                enumerable: true
            });
        }
        return clone;
    };
    return Car;
}());
function cloneIt() {
    var car1 = new Car({ color: 'Red', engine: { type: 'Ford', power: 'Very powerful' } });
    var car2 = car1.clone();
    console.log("Engines objects are different - " + (car1.engine !== car2.engine));
    var car3 = car1.clone({ markClone: true });
    console.log("Clone is marked - " + car3.isClone);
}
cloneIt();
