import { Component } from '@angular/core';
import { ArticlesService } from '../Services/articles.service';
@Component({
  selector: 'app-articles-card',
  templateUrl: './articles-card.component.html',
  styleUrls: ['./articles-card.component.css']
})
export class ArticlesCardComponent { 
constructor(private artserv:ArticlesService){}
articles:any;

reference=""
designation=""
prix=""
marque=""
qtestock=""
imageart=""
scategorieID=""
formHeader="Ajouter un article"
showForm=false
id=null
ngOnInit():void{
  this.listarticles()
    }
    listarticles(){
      this.artserv.fetcharticles().subscribe(
        (data)=>{
          this.articles=data
  
    }
      );
    }

}
