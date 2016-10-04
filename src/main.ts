///<reference path="../typings/jquery/jquery.d.ts" />



$(document).ready(()=>{
    $('#content').html('hello jquery2');
})

class TestClass{

    id: number; 
    constructor(idArg:number){
        this.id = idArg; 
    }

}

<<<<<<< HEAD
var tt = new TestClass(2); 
console.log(tt.id);

=======
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
>>>>>>> 37007a108df1b0a54ede4a70bc0b3df1aafba9b5
