import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBirdComponent } from './create-bird/create-bird.component';
import { BirdFormComponent } from './bird-form/bird-form.component';
import { HeaderComponent } from './header/header.component';
import { BirdsListComponent } from './birds-list/birds-list.component';
import { BirdsListItemComponent } from './birds-list-item/birds-list-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { AngularWebStorageModule } from 'angular-web-storage';
import { DatePipe } from '@angular/common';
import { BirdsService } from './birds.service';
import { NgPipesModule } from 'ngx-pipes';
import { AgePipe } from './age.pipe';
import { DeleteBirdActionComponent } from './delete-bird-action/delete-bird-action.component';
import { ManageBirdWeightComponent } from './manage-bird-weight/manage-bird-weight.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBirdComponent,
    BirdFormComponent,
    HeaderComponent,
    BirdsListComponent,
    BirdsListItemComponent,
    PageNotFoundComponent,
    AgePipe,
    DeleteBirdActionComponent,
    ManageBirdWeightComponent
  ],
  imports: [
    AngularWebStorageModule,
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    NgPipesModule
  ],
  providers: [
    BirdsService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
 }
