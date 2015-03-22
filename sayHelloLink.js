import {Decorator, NgElement} from 'angular2/angular2';

@Decorator({
    selector: '[sayHelloLink]'
})
export class SayHelloLink {
 
    name;
    
    constructor(elm: NgElement) {
        this.elm = elm;
        this.name = elm.domElement.innerText;
        elm.domElement.innerText = "Klick mich!";
        elm.domElement.addEventListener('click', this.show.bind(this));
    }
    
    show(event) {
        alert("Hallo " + this.name + "!");
    }
    
}
