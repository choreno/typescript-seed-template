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

var tt = new TestClass(2); 
console.log(tt.id);

