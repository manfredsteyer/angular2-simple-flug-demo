import {Component, Decorator, Template, If} from 'angular2/angular2';
import { Content } from 'angular2/src/core/compiler/shadow_dom_emulation/content_tag';

@Component({
    selector: 'transclusionSample',
    bind: {
        'value': 'value'   
    }
})
@Template({
  url: 'transclusionSample.html',
  directives: [Content]
})
export class TransclusionSample {
    
  
}