import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ AppComponent, HelloComponent,WelcomeComponent,LoginComponent,ErrorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
