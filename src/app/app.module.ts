import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { AppRoutingModule } from './AppRoutingModule/app.routing.module';
import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LockscreenComponent,
    PageNotFoundPageComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
