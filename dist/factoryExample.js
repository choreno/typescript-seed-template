var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(dateOfBirth) {
        this._dateOfBirth = dateOfBirth;
    }
    Person.prototype.getDateOfBirth = function () {
        return this._dateOfBirth.toDateString();
    };
    return Person;
}());
var Infant = (function (_super) {
    __extends(Infant, _super);
    function Infant() {
        _super.apply(this, arguments);
    }
    Infant.prototype.getPersonCategory = function () {
        return "Infant";
    };
    Infant.prototype.canSignContracts = function () {
        return false;
    };
    return Infant;
}(Person));
var Child = (function (_super) {
    __extends(Child, _super);
    function Child() {
        _super.apply(this, arguments);
    }
    Child.prototype.getPersonCategory = function () {
        return "Child";
    };
    Child.prototype.canSignContracts = function () { return false; };
    return Child;
}(Person));
var Adult = (function (_super) {
    __extends(Adult, _super);
    function Adult() {
        _super.apply(this, arguments);
    }
    Adult.prototype.getPersonCategory = function () {
        return "Adult";
    };
    Adult.prototype.canSignContracts = function () { return true; };
    return Adult;
}(Person));
var PersonFactory = (function () {
    function PersonFactory() {
    }
    PersonFactory.prototype.getPerson = function (dateOfBirth) {
        var dateNow = new Date();
        var dateTwoYearsAgo = new Date(dateNow.getFullYear() - 2, dateNow.getMonth(), dateNow.getDay());
        var dateEighteenYearsAgo = new Date(dateNow.getFullYear() - 18, dateNow.getMonth(), dateNow.getDay());
        //Factory
        if (dateOfBirth >= dateTwoYearsAgo) {
            return new Infant(dateOfBirth);
        }
        if (dateOfBirth >= dateEighteenYearsAgo) {
            return new Child(dateOfBirth);
        }
        return new Adult(dateOfBirth);
    };
    return PersonFactory;
}());
var personFactory = new PersonFactory();
var personArray = new Array();
personArray.push(personFactory.getPerson(new Date(2014, 09, 29))); // infant
personArray.push(personFactory.getPerson(new Date(2000, 09, 29))); // child
personArray.push(personFactory.getPerson(new Date(1950, 09, 29))); // adult
for (var i = 0; i < personArray.length; i++) {
    console.log(" A person with a birth date of :"
        + personArray[i].getDateOfBirth()
        + " is categorised as : "
        + personArray[i].getPersonCategory()
        + " and can sign : "
        + personArray[i].canSignContracts());
}
// interface IPerson {
//     getPersonCategory(): string;
//     canSignContracts(): boolean;
//     getDateOfBirth(): string;
// }
// class Person {
//     _dateOfBirth: Date;
//     constructor(dateOfBirth: Date) {
//         this._dateOfBirth = dateOfBirth;
//     }
//     getDateOfBirth(): string {
//         return this._dateOfBirth.toDateString();
//     }
// }
// class Infant extends Person implements IPerson {
//     getPersonCategory(): string {
//         return "Infant";
//     }
//     canSignContracts(): boolean {
//         return false;
//     }
// }
// class Child extends Person implements IPerson {
//     getPersonCategory(): string {
//         return "Child";
//     }
//     canSignContracts() { return false; }
// }
// class Adult extends Person implements IPerson {
//     getPersonCategory(): string {
//         return "Adult";
//     }
//     canSignContracts() { return true; }
// }
// class PersonFactory {
//     getPerson(dateOfBirth: Date): IPerson {
//         var dateNow = new Date();
//         var dateTwoYearsAgo = new Date(dateNow.getFullYear() - 2,
//             dateNow.getMonth(), dateNow.getDay());
//         var dateEighteenYearsAgo = new Date(dateNow.getFullYear() - 18,
//             dateNow.getMonth(), dateNow.getDay());
//         //Factory
//         if (dateOfBirth >= dateTwoYearsAgo) {
//             return new Infant(dateOfBirth);
//         }
//         if (dateOfBirth >= dateEighteenYearsAgo) {
//             return new Child(dateOfBirth);
//         }
//         return new Adult(dateOfBirth);
//     }
// }
// var personFactory = new PersonFactory();
// var personArray: IPerson[] = new Array();
// personArray.push(personFactory.getPerson(new Date(2014, 09, 29))); // infant
// personArray.push(personFactory.getPerson(new Date(2000, 09, 29))); // child
// personArray.push(personFactory.getPerson(new Date(1950, 09, 29))); // adult
// for (var i = 0; i < personArray.length; i++) {
//     console.log(" A person with a birth date of :"
//         + personArray[i].getDateOfBirth()
//         + " is categorised as : "
//         + personArray[i].getPersonCategory()
//         + " and can sign : "
//         + personArray[i].canSignContracts());
// }
