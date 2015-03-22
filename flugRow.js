import {Component, Template, If} from 'angular2/angular2';

@Component({
    selector: 'flugRow',
    bind: {
        'flug': 'flug'   
    }
})
@Template({
  url: 'flugRow.html',
  directives: [If]
})
export class FlugRow {

    flug;
    constructor() {
        console.log("FlugRow created ...");    
    }
    route() {
        return this.flug.abflugOrt + " - " + this.flug.zielOrt;    
    }
    
}
