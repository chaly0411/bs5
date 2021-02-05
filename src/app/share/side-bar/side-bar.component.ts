import { Component, OnInit } from '@angular/core';
import { MainMenuService } from './main-menu.service';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit {
  public list: any = [];
  public mainMenu = [];
  constructor(private menuService: MainMenuService, public sbClass: LayoutService) {
    this.mainMenu = this.menuService.menu;
  }

  ngOnInit(): void {
  }

}
