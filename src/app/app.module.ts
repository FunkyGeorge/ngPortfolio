import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpService } from './services/http.service';

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
    MdMenuModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
