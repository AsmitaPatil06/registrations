import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/component/registration.component';
import { LoginComponent } from "./login/component/LoginComponent";
import { FeedComponent } from './feed/component/feed.component';

@NgModule({
  declarations: [
    AppComponent, RegistrationComponent,LoginComponent,FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
