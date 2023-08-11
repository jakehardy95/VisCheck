import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OahuDropdownMenuComponent } from './oahu-dropdown-menu/oahu-dropdown-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    OahuDropdownMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
