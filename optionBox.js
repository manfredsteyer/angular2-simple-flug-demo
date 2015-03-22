import {Component, Decorator, Template, If} from 'angular2/angular2';
import {Option} from 'option';

@Decorator({
    selector: 'optionbox',
    bind: {
        'selected': 'selected',
        'changed': 'changed'
    }
})
export class OptionBox {

    options: Array<Option> = [];
    selected;
    changed;

    constructor() {
    }
    
    registerOption(option: Option) {
        this.options.push(option);
    }

    select(option: Option) {
        
        this.selected = option.value;
        
        this.changed(this.selected);
        
        for (let o of this.options) {
            o.selected = (option == o);   
        }
    }
    
}

