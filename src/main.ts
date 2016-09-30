interface IPerson {

    getPersonCategory(): string;
    canSignContracts(): boolean;
    getDateOfBirth(): string;
}


class Person {

    _dateOfBirth: Date;
    constructor(dateOfBirth: Date) {
        this._dateOfBirth = dateOfBirth;
    }

    getDateOfBirth(): string {
        return this._dateOfBirth.toDateString();
    }

}


class Infant extends Person implements IPerson {
    getPersonCategory(): string {
        return "Infant";

    }
    canSignContracts(): boolean {
        return false;
    }
}

class Child extends Person implements IPerson {
    getPersonCategory(): string {
        return "Child";
    }
    canSignContracts() { return false; }
}
class Adult extends Person implements IPerson {
    getPersonCategory(): string {
        return "Adult";
    }
    canSignContracts() { return true; }
}


class PersonFactory {

    getPerson(dateOfBirth: Date): IPerson {

        var dateNow = new Date();
        var dateTwoYearsAgo = new Date(dateNow.getFullYear() - 2,
            dateNow.getMonth(), dateNow.getDay());

        var dateEighteenYearsAgo = new Date(dateNow.getFullYear() - 18,
            dateNow.getMonth(), dateNow.getDay());

        //Factory
        if (dateOfBirth >= dateTwoYearsAgo) {
            return new Infant(dateOfBirth);
        }

        if (dateOfBirth >= dateEighteenYearsAgo) {
            return new Child(dateOfBirth);
        }

        return new Adult(dateOfBirth);

    }
}



var personFactory = new PersonFactory();

var personArray: IPerson[] = new Array();
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

// interface IBase {

//     id: number;
// }

// interface IDrivedFromBase extends IBase {

//     name: string;
// }

// class BaseClass implements IBase {
//     id: number;
// }


// class DerivedClass extends BaseClass implements IDrivedFromBase {


//     name: string;
// }

// class BaseClassWithConstructor {

//     private _id : number;
//     constructor(id:number){
//         this._id = id; 
//     }
//     getProperties(): string {
//         return 'id:' + this._id; 
//     } 

// }


// class DerivedClassWithConstructor extends BaseClassWithConstructor{
//     private _name: string; 
//     constructor(id: number, name:string){
//         super(id);
//         this._name  = name ;

//     }

//     getProperties():string{
//         return "_name:" + this._name + '.' + super.getProperties(); 
//     }

// }



// var myDerivedClass = new DerivedClassWithConstructor(1, "name");

// console.log (myDerivedClass.getProperties());