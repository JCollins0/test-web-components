import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: 'noop' });

// createApplication().then((appRef) => {
//   const header = createCustomElement(HeaderComponent, {
//     injector: appRef.injector,
//   });
//   if (!customElements.get(HEADER)) {
//     customElements.define(HEADER, header);
//   }

//   const footer = createCustomElement(FooterComponent, {
//     injector: appRef.injector,
//   });

//   if (!customElements.get(FOOTER)) {
//     customElements.define(FOOTER, footer);
//   }
// });
