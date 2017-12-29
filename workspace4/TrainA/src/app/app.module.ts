import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations' ;
import {MaterialModule} from './material.module';
import { ShopsComponent } from './shops/shops.component';
import { PreferdshopsComponent } from './preferdshops/preferdshops.component';
import { NearByshopsComponent } from './near-byshops/near-byshops.component' ;
import { MATERIAL_SANITY_CHECKS } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {ClassesService} from './classes.service';
import { ShopsListingComponent } from './shops-listing/shops-listing.component' ;

@NgModule({
  declarations: [
    AppComponent,
    ShopsComponent,
    PreferdshopsComponent,
    NearByshopsComponent,
    ShopsListingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{provide: MATERIAL_SANITY_CHECKS, useValue: false}, ClassesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
