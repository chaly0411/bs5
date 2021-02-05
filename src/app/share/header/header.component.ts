import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private sbClass: LayoutService) {}
  // tslint:disable-next-line:typedef
  closeSidebar() {
    if (this.sbClass.sidebarClose === ''){
      this.sbClass.sidebarClose = 'close-sidebar';
    }
    else {
      this.sbClass.sidebarClose = '';
    }
  }
  ngOnInit(): void {
  }

}
