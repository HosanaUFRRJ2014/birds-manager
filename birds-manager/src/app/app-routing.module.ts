import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
// import { far } from '@fortawesome/free-regular-svg-icons';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  bootstrap:    [ AppComponent ],
  exports: [RouterModule, BsDropdownModule, TooltipModule, ModalModule]
})
export class AppRoutingModule { }
