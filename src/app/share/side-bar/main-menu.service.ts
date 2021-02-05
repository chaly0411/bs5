import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {
  public menu = [];
  constructor() {
    this.menu = [
      {
        name: 'dashboard',
        icon: 'fa-home',
        sub: [
          {
            name: '01',
          }, {
            name: '02',
          }, {
            name: '03',
          }, {
            name: '04',
          }, {
            name: '05',
          }
        ]
      }, {
        name: 'layouts',
        icon: 'fa-browser',
        sub: [
          {
            name: '01',
          }, {
            name: '02',
          }
        ]
      }, {
        name: 'apps',
        icon: 'fa-boxes-alt',
        sub: [
          {
            name: '01',
          }, {
            name: '02',
          }
        ]
      }, {
        name: 'widgets',
        icon: 'fa-window-restore',
        sub: [
          {
            name: '01',
          }, {
            name: '02',
          }
        ]
      }, {
        name: 'forms',
        icon: 'fa-file-alt',
        sub: [
          {
            name: '01',
          }, {
            name: '02',
          }
        ]
      }
    ];
  }
}
