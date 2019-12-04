import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CommandeComponent } from './commande/commande.component';
import { ConsomationComponent } from './consomation/consomation.component';
import { LaverieComponent } from './laverie/laverie.component';
import { ProduitComponent } from './produit/produit.component';
import { TicketComponent } from './ticket/ticket.component';
import { TypeComponent } from './type/type.component';
import { VehicleComponent } from './vehicle/vehicle.component';





@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
