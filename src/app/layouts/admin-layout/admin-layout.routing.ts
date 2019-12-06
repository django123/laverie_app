import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import {AjoutComponent} from "../../ajout/ajout.component";
import {ApparitionComponent} from "../../apparition/apparition.component";
import {CaisseComponent} from "../../caisse/caisse.component";
import {ClientComponent} from "../../client/client.component";
import {CategorieComponent} from "../../categorie/categorie.component";
import {CommandeComponent} from "../../commande/commande.component";
import {ConsomationComponent} from "../../consomation/consomation.component";
import {ProduitComponent} from "../../produit/produit.component";
import {TicketComponent} from "../../ticket/ticket.component";
import {TypeComponent} from "../../type/type.component";
import {VehicleComponent} from "../../vehicle/vehicle.component";
import {CreateAjoutComponent} from "../../create-ajout/create-ajout.component";
import {DetailAjoutComponent} from "../../detail-ajout/detail-ajout.component";

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'ajout',          component: AjoutComponent },
    { path: 'apparition',     component: ApparitionComponent},
    { path: 'caisse',         component: CaisseComponent},
    { path: 'categorie',      component: CategorieComponent},
    { path: 'client',         component: ClientComponent},
    { path: 'commande',       component: CommandeComponent},
    { path: 'consomation',    component: ConsomationComponent},
    { path: 'produit',        component: ProduitComponent},
    { path: 'ticket',         component: TicketComponent},
    { path: 'type',           component: TypeComponent},
    { path: 'vehicle',        component: VehicleComponent},
    { path: 'create-ajout',   component: CreateAjoutComponent},
    { path: 'detail-ajout',   component: DetailAjoutComponent},

];
