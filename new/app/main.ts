// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';//@ means default angular directory
import { AppModule } from './app.module';//. means created by you

platformBrowserDynamic().bootstrapModule(AppModule);
