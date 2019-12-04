import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/ajout', title: 'Ajout',  icon: 'add', class: '' },
    { path: '/apparition', title: 'Apparition',  icon: '', class: '' },
    { path: '/caisse', title: 'Caisse',  icon: '', class: '' },
    { path: '/categorie', title: 'Categorie',  icon: '', class: '' },
    { path: '/client', title: 'Client',  icon: '', class: '' },
    { path: '/commande', title: 'Commandes',  icon: '', class: '' },
    { path: '/consomation', title: 'Consommations',  icon: '', class: '' },
    { path: '/produit', title: 'Produits',  icon: '', class: '' },
    { path: '/ticket', title: 'Ticket',  icon: '', class: '' },
    { path: '/type', title: 'Type ',  icon: '', class: '' },
    { path: '/vehicle', title: 'Vehicules',  icon: '', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
