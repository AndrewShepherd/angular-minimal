import {AppModule} from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Should look at removing this
// See https://stackoverflow.com/a/78428511/25216
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));