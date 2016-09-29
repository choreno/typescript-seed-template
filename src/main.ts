import {sayHello} from './greet'; 



function showHello(divName:string, name:string){
    const elt =  document.getElementById(divName); 
    elt.innerText = sayHello(name); 

}
showHello('Greeeeeeeting', 'TypeSSSSSS'); 


console.log('hello2');
console.log(sayHello('TypeScript')); 