import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public sidebarClose = '';
  public country = [];
  public product = [];
  constructor() {
    this.country = [
      {
        name: 'Vietnam',
        img: 'vietnam',
        profit: '$519.75'
      }, {
        name: 'Brazil',
        img: 'brazil',
        profit: '$248.07'
      }, {
        name: 'China',
        img: 'china',
        profit: '$190.57'
      }, {
        name: 'Japan',
        img: 'japan',
        profit: '$173.25'
      }, {
        name: 'Portugal',
        img: 'portugal',
        profit: '$63.00'
      }, {
        name: 'South Korea',
        img: 'south-korea',
        profit: '$13.00'
      }, {
        name: 'Spain',
        img: 'spain',
        profit: '$43.19'
      }, {
        name: 'Thailand',
        img: 'thailand',
        profit: '$56.19'
      }, {
        name: 'England',
        img: 'united-kingdom',
        profit: '$56.19'
      }, {
        name: 'America',
        img: 'united-states',
        profit: '$56.19'
      },
    ];
    this.product = [
      {
        title: 'Latest Books',
        img: '1',
        times: '2,30,400'
      }, {
        title: 'New Branded Shoes',
        img: '2',
        times: '3,45,675'
      }, {
        title: 'Beauty Makeup kit',
        img: '3',
        times: '5,23,324'
      }, {
        title: 'Health Watch',
        img: '4',
        times: '1,42,400'
      }, {
        title: 'New Modal Shoes',
        img: '5',
        times: '3,30,400'
      }
    ];
  }
}
