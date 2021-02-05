import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../share/layout.service';

@Component({
  selector: 'app-s-layout',
  templateUrl: './s-layout.component.html'
})
export class SLayoutComponent implements OnInit {

  constructor(public sbClass: LayoutService) { }

  ngOnInit(): void {
  }

}
