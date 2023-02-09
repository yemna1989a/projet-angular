import { Component } from '@angular/core';
import { CategoriesService } from '../Services/categories.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
  constructor(private catserv:CategoriesService){}
  categories:any

formHeader=""
id=null
nomcategorie=""
imagecategorie=""
showForm=false




  ngOnInit():void{
this.listcategories()
  }

  listcategories(){
    this.catserv.fetchcategories().subscribe(
      (data)=>{
        this.categories=data

  }
    );
  }
DeleteCat(id){
this.catserv.deletcategorie(id).subscribe(
(res)=>{
this.listcategories();
})
}
openForm(data){
  this.showForm=true;
  if(data){
    this.nomcategorie=data['nomcategorie'];
    this.imagecategorie=data['imagecategorie']
    this.id=data['_id']
    this.formHeader="Edit Catégorie"
    }
    else
    {
    this.id=null
    this.formHeader="Add Catégorie"
    }
    }
  
 closeForm(){
  this.showForm=false;
 }
 clearForm(){
  this.categories=""
  this.imagecategorie=""
 } 
 sauvegarder(){
  this.showForm=false;
  let cat={
    nomcategorie:this.nomcategorie,
    imagecategorie:this.imagecategorie, 
    
  }
  if(this.id){
    cat['id']=this.id
    this.catserv.Putcategorie(cat).subscribe(
    (res)=>{
    this.listcategories();
    }
    )
    }
    else{
    this.catserv.addcategorie(cat).subscribe(
    (res)=>{
    this.listcategories();
    }
    )
    }
    this.clearForm();
    
}
 
  editCategorie(data){
   this.showForm=true;

   this.nomcategorie=data['nomcategorie'];
   this.imagecategorie=data['imagecategorie'];
   this.id=data['_id'];
   this.formHeader="Edit Catégorie"
  }
 
  
}