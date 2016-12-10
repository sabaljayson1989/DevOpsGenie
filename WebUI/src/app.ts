//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  // ng bootstrap module
import { HttpModule } from '@angular/http'

import { ResourceGroupComponent } from './resource-group'


// Annotation section
@Component({
  selector: 'app',
  template: `
    <div style="width: 50%; margin: 0 auto;">   
      <h2>App</h2>  
      <resource-group></resource-group>
    </div>
  `,  
})
// Component controller
export class App { 
  constructor() { }
}


@NgModule({                             // root ng-module
  imports: [ 
        BrowserModule, 
        NgbModule.forRoot(),
        HttpModule
  ],
  declarations: [
      App,
      ResourceGroupComponent
  ],
  bootstrap: [ App ]
})
export class AppModule {}