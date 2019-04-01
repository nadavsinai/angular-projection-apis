import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion.component';
import { AccNodeComponent } from './acc-node.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccNodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
