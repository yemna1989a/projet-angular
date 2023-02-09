import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesCardComponent } from './articles-card/articles-card.component';
import { ArticlesComponent } from './articles/articles.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ScategoriesComponent } from './scategories/scategories.component';
import { ArticlesdatatableComponent } from './articlesdatatable/articlesdatatable.component';
const routes: Routes = [
  {path:'lcategorie',component:CategorieComponent},
  {path:'larticles',component:ArticlesComponent},
  {path:'lscategories',component:ScategoriesComponent},
  {path:'larticles_card',component:ArticlesCardComponent},
  {path:'articlesdatatables',component:ArticlesdatatableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
