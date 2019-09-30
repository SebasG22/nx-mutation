import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsSampleModule } from '@mutation-demo/components-sample';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentsSampleModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
