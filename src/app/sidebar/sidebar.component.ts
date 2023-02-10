import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'fa fa-dashboard', class: '' },
    { path: '/tabel-cuaca', title: 'Daftar Film', icon: 'fa fa-compact-disc', class: '' },
    { path: '/user', title: 'User Profile',  icon:'fa fa-user', class: '' },
    { path: '/table', title: 'Table List',  icon:'fa fa-table', class: '' },
    { path: '/typography', title: 'Typography',  icon:'fa fa-font', class: '' },
    { path: '/maps', title: 'Maps',  icon:'fa fa-map', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'fa fa-bell', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
    { path: '/pages', title: 'Pages', icon: 'fa fa-pencil', class: ''},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
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
