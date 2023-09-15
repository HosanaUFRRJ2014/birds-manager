import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { BirdsListComponent } from './birds-list/birds-list.component';
import { CreateBirdComponent } from './create-bird/create-bird.component';
import { BirdsListItemComponent } from './birds-list-item/birds-list-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'bird/:id', component: BirdsListItemComponent },
  { path: 'bird/', component: CreateBirdComponent },
  { path: 'birds', component: BirdsListComponent },
  { path: '', redirectTo: '/birds', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

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
