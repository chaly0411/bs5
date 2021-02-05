import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
    declarations: [HeaderComponent, FooterComponent, SideBarComponent],
  exports: [
    SideBarComponent,
    HeaderComponent
  ],
    imports: [
        CommonModule
    ]
})
export class ShareModule { }
