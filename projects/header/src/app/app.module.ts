/// <reference types="@angular/localize" />

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { A11yModule } from '@angular/cdk/a11y';
import { SearchComponent } from './header/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const HEADER = 'vdp-header';
const FOOTER = 'vdp-footer';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    A11yModule,
    ReactiveFormsModule,
  ],
  entryComponents: [HeaderComponent, FooterComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const header = createCustomElement(HeaderComponent, { injector });
    if (!customElements.get(HEADER)) {
      customElements.define(HEADER, header);
    }

    const footer = createCustomElement(FooterComponent, { injector });
    if (!customElements.get(FOOTER)) {
      customElements.define(FOOTER, footer);
    }
  }

  ngDoBootstrap() {}
}
