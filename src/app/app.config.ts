import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TranslateModule, TranslateLoader, TranslateService, } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';

export function HttploaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  
    provideHttpClient(),
    TranslateService,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttploaderFactory,
        deps: [HttpClient]
      }
    }).providers!]
};
