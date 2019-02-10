import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import { HomeComponent } from './Homepage/Home.component';
import {FormsModule} from '@angular/forms'
@NgModule({
    //Declare all the components
    declarations:[
        AppComponent,
        HomeComponent
    ],
    //Module Declarations
    imports:[
        BrowserModule,
        FormsModule
    ],
    //Services Declarations
    providers:[],
    //Most Important component declarations
    bootstrap:[
        AppComponent
    ]
})
export class AppModule{

}