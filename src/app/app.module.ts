import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { SpecialtiesComponent } from './specialties/specialties.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdMenuModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ShowcaseComponent,
    SpecialtiesComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
