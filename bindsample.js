import {Component, Decorator, Template, If} from 'angular2/angular2';

import {EventEmitter } from 'angular2/src/core/annotations/events';

@Component({
    selector: 'bindsample',
    bind: {
        'value': 'value',
        'type': 'type'
       // 'changed': 'changed'
    }
})
@Template({
  url: 'bindsample.html',
  directives: []
})
export class BindSample {
    
    changed;
    value;
    
    constructor(@EventEmitter('changed') changed: Function) {
        this.changed = changed;   
    }

    
    doStuff() {
        this.value = "Hello World!";
        this.changed();
    }
    
}