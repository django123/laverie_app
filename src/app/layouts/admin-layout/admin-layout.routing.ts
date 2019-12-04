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

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'ajout',          component: AjoutComponent },
    { path: 'apparition',     component: ApparitionComponent},
    { path: 'caisse',     component: CaisseComponent},
    { path: 'categorie',      component: CategorieComponent},
    { path: 'client',         component: ClientComponent},
    { path: 'commande',       component: CommandeComponent},
    { path: 'consomation',    component: ConsomationComponent},
    { path: 'produit',        component: ProduitComponent},
    { path: 'ticket',         component: TicketComponent},
    { path: 'type',           component: TypeComponent},
    { path: 'vehicle',        component: VehicleComponent},

];
