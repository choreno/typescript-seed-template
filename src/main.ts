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

class PersonPrinter<T extends IPerson>{

    print(arg:T) : void{
        console.log(`Person bon on ${arg.getDateOfBirth()} is a ${arg.getPersonCategory()} and is  ${this.getPermissionString(arg)} allowed to sign`);
    }

    getPermissionString(arg:T) : string{
        if(arg.canSignContracts())
            return ""; 
        return "NOT ";
    }

}


var personFactory = new PersonFactory();

var personPrinter = new PersonPrinter<IPerson>(); 


var personArray: IPerson[] = new Array();
personArray.push(personFactory.getPerson(new Date(2014, 09, 29))); // infant
personArray.push(personFactory.getPerson(new Date(2000, 09, 29))); // child
personArray.push(personFactory.getPerson(new Date(1950, 09, 29))); // adult

for (var i = 0; i < personArray.length; i++) {

    personPrinter.print(personArray[i]);
}
