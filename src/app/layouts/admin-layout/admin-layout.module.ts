import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import {AjoutComponent} from "../../ajout/ajout.component";
import {ApparitionComponent} from "../../apparition/apparition.component";
import {CaisseComponent} from "../../caisse/caisse.component";
import {CategorieComponent} from "../../categorie/categorie.component";
import {ClientComponent} from "../../client/client.component";
import {CommandeComponent} from "../../commande/commande.component";
import {ConsomationComponent} from "../../consomation/consomation.component";
import {ProduitComponent} from "../../produit/produit.component";
import {VehicleComponent} from "../../vehicle/vehicle.component";
import {TypeComponent} from "../../type/type.component";
import {TicketComponent} from "../../ticket/ticket.component";
import {CreateAjoutComponent} from "../../create-ajout/create-ajout.component";
import {DetailAjoutComponent} from "../../detail-ajout/detail-ajout.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    AjoutComponent,
    ApparitionComponent,
    CaisseComponent,
    CategorieComponent,
    ClientComponent,
    CategorieComponent,
    ClientComponent,
    CommandeComponent,
    ConsomationComponent,
    ProduitComponent,
    TicketComponent,
    TypeComponent,
    VehicleComponent,
    CreateAjoutComponent,
    DetailAjoutComponent,


  ]
})

export class AdminLayoutModule {}
