import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  entryComponents: [
    MainComponent,
  ],
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(MainComponent, { injector });
    customElements.define('custom-app', custom);
  }
  ngDoBootstrap() {}
}
