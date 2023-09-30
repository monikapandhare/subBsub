import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OneComponent } from './shared/components/one/one.component';
import { TwoComponent } from './shared/components/two/two.component';
import { ThreeComponent } from './shared/components/three/three.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { StdFormComponent } from './shared/components/std-form/std-form.component';
import { StdDetailsComponent } from './shared/components/std-details/std-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    UserFormComponent,
    StdFormComponent,
    StdDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
