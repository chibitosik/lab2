var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function findMinPositive(arr) {
    var positiveNumbers = arr.filter(function (num) { return num > 0; });
    if (positiveNumbers.length === 0) {
        return null;
    }
    return Math.min.apply(Math, positiveNumbers);
}
function generateBoolMatrix(strMatrix) {
    return strMatrix.map(function (row) {
        return row.map(function (cell) { return cell.length % 2 !== 0; });
    });
}
function sumOfDigits(num) {
    return num
        .toString()
        .split('')
        .map(function (digit) { return parseInt(digit); })
        .reduce(function (acc, digit) { return acc + digit; }, 0);
}
function areSumsEqual(tuple) {
    var num1 = tuple[0], num2 = tuple[1];
    return sumOfDigits(num1) === sumOfDigits(num2);
}
//4
var NitrogenBases;
(function (NitrogenBases) {
    NitrogenBases["G"] = "\u0413\u0443\u0430\u043D\u0438\u043D";
    NitrogenBases["A"] = "\u0410\u0434\u0435\u043D\u0438\u043D";
    NitrogenBases["C"] = "\u0426\u0438\u0442\u043E\u0437\u0438\u043D";
    NitrogenBases["U"] = "\u0423\u0440\u0430\u0446\u0438\u043B";
})(NitrogenBases || (NitrogenBases = {}));
function printNitrogenBase(base) {
    console.log("\u0410\u0437\u043E\u0442\u0438\u0441\u0442\u043E\u0435 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0420\u041D\u041A: ".concat(base));
}
function printAminoAcid(aminoAcid) {
    console.log("\u0422\u0438\u043F \u0430\u043C\u0438\u043D\u043E\u043A\u0438\u0441\u043B\u043E\u0442\u044B: ".concat(aminoAcid));
}
//5
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return 'dfghasdg';
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = 'asdgidgsa';
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return 'Yaw-Gaw!';
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return 'Miyau!';
    };
    return Cat;
}(Pet));
function printPetInfo(pet) {
    console.log("Name: ".concat(pet.name));
    console.log("Age: ".concat(pet.age));
    console.log("Sound: ".concat(pet.speak()));
}
var rnaSample = {
    sequence: [
        NitrogenBases.A,
        NitrogenBases.U,
        NitrogenBases.G,
        NitrogenBases.C,
    ],
    length: 4,
    isDoubleStranded: false,
    name: 'mRNA',
};
var stringMatrix = [
    ['elephant', 'fish', 'cat'],
    ['dog', 'apple', 'banana'],
];
var numbers = [-15, 38, 93, -11, 0, 72];
var tuple = [123, 132];
var tuple2 = [123, 456];
var dog = new Dog();
var cat = new Cat();
console.log(findMinPositive(numbers));
console.log(generateBoolMatrix(stringMatrix));
console.log(areSumsEqual(tuple));
console.log(areSumsEqual(tuple2));
printNitrogenBase(NitrogenBases.A);
printAminoAcid('Глицин');
printPetInfo(dog);
printPetInfo(cat);
console.log(JSON.stringify(rnaSample, null, 2));
