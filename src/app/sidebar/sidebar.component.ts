import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'pe-7s-home', class: '' },
  // { path: '/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
  // { path: '/table', title: 'Table List',  icon:'pe-7s-note2', class: '' },
  // { path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
  // { path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
  // { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
  // { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
  // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

  onLogout() {
    this.router.navigate(['/login']);
    if (sessionStorage.getItem('token')) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem("user.data");
    } else if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      localStorage.removeItem("user.data");
    }
  }
}
