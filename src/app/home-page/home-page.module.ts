import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule
    ],
    providers: [],

})
export class AppModule { }
