import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { GrandchildComponent } from './grandchild/grandchild.component';
import { Grandchild2Component } from './grandchild2/grandchild2.component';
import { FemaleComponent } from './female/female.component';
import { MaleComponent } from './male/male.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandchildComponent,
    Grandchild2Component,
    FemaleComponent,
    MaleComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
