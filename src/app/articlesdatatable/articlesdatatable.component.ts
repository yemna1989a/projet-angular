import { Component } from '@angular/core';
import { ArticlesService } from '../Services/articles.service';
@Component({
  selector: 'app-articlesdatatable',
  templateUrl: './articlesdatatable.component.html',
  styleUrls: ['./articlesdatatable.component.css']
})
export class ArticlesdatatableComponent {
  constructor(private artserv:ArticlesService){}
  articles:any;
  reference=""
  designation=""
  prix=""
  marque=""
  qtestock=""
  imageart=""
  scategorieID=""
  formHeader="Edit article"
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
      deletearticle(id){
        this.artserv.deletarticle(id).subscribe(
        (res)=>{
        this.listarticles();
        })
        }
        openForm(data){
          this.showForm=true;
          if (data){
            this.prix=data['prix'];
            this.imageart=data['imageart'];
            this.designation=data['designation'];
          
            this.marque=data['marque'];
           this.reference=data['reference'];
           this. qtestock=data['qtestock'];
           this. scategorieID=data['scategorieID'];
           this.id=data['_id'];
           this.formHeader="Editarticle"
      
          }
          
        }
         closeForm(){
          this.showForm=false;
          this.clearForm();
         }
         clearForm(){
          this.designation=""
          this.imageart=""
          this.id=null
          this.reference=""
          this.marque=""
          this.qtestock=""
          this.prix=""
          this.scategorieID=""
 
         } 
         sauvegarder(){
          this.showForm=false
          let art={
            prix:this.prix, 
            imageart:this.imageart, 
            designation:this.designation,
            marque:this.marque,
            reference:this.reference,
            qtestock:this. qtestock,
            scategorieID:this. scategorieID,
            id:this.id
      
          }
          if(this.id){
            art['_id']=this.id
            this.artserv.Putarticle(art).subscribe(
              (res)=>{
              this.listarticles();
             
          }
            )}
          else{
            this.artserv.addarticle(art).subscribe(
              (res)=>{
                this.listarticles();
              }
            )
          }
       
            
            this.clearForm();}
            
        
         
          editArticle(data){
           this.showForm=true;
        
           this.prix=data['prix'];
            this.imageart=data['imageart'];
            this.designation=data['designation'];
          
            this.marque=data['marque'];
           this.reference=data['reference'];
           this. qtestock=data['qtestock'];
           this. scategorieID=data['scategorieID'];
           this.id=data['_id'];
           this.formHeader="Edit Article"
        
          }




}
