import {Component, Template} from 'angular2/angular2';
import {FormDirectives, ControlGroup, Control} from 'angular2/angular2';
import {bootstrap, Foreach, If} from 'angular2/angular2';
import {FlugService} from 'flugService';   


@Component({
    selector: 'flugsuchen',
    componentServices: [FlugService]
})
@Template({
  url: 'flugsuchen.html',
  directives: [Foreach, If, FormDirectives]
})
export class FlugSuchen {

    fluege;
    selectedFlug;
    filter;
    message;
    
    constructor(flugService: FlugService) {
        
        this.fluege = [];
        
        this.filter = new ControlGroup({
            'von': new Control('Graz'),
            'nach': new Control('Wien')
        });
        
        this.flugService = flugService;
    }
    
    selectFlug(flug) {
        this.selectedFlug = flug;
    }
    
    flugSuchen() {

            var von = this.filter.von;
            var nach = this.filter.nach;
        
            this
                .flugService.find(von, nach)
                .then((fluege) => { 
                    this.fluege = fluege;
                    this.message = fluege.length + " Flüge geladen!";
                });
    }
    
}


