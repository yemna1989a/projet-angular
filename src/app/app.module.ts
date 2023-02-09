import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieComponent } from './categorie/categorie.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScategoriesComponent } from './scategories/scategories.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesCardComponent } from './articles-card/articles-card.component';
import { ArticlesdatatableComponent } from './articlesdatatable/articlesdatatable.component';
import{DataTablesModule} from 'angular-datatables';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    ScategoriesComponent,
    ArticlesComponent,
    ArticlesCardComponent,
    ArticlesdatatableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
