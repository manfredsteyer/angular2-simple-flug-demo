import {Component, Decorator, Template, If, Parent} from 'angular2/angular2';
import {OptionBox} from 'optionBox'

@Component({
    selector: 'option',
    bind: {
        'value': 'value'   
    }
})
@Template({
  url: 'option.html',
  directives: [If]
})
export class Option {

    selected = false;
    optionBox: OptionBox;

    constructor(@Parent() optionBox: OptionBox) {
        console.log("Option created ...");    
        this.optionBox = optionBox;
        optionBox.registerOption(this);
    }
    
    select() {
        this.optionBox.select(this);
    }
    
}