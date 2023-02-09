import { Component } from '@angular/core';
import { ScategoriesService } from '../Services/scategories.service';
@Component({
  selector: 'app-scategories',
  templateUrl: './scategories.component.html',
  styleUrls: ['./scategories.component.css']
})
export class ScategoriesComponent {
  constructor(private scatserv:ScategoriesService){}
  scategories:any
  categorieID=""
  imagescat=""
  nomscategorie=""
  formHeader="Ajouter une scategorie"
  showForm=false
id=null
  ngOnInit():void{
    this.listscategories()
      }
      listscategories(){
        this.scatserv.fetchscategories().subscribe(
          (data)=>{
            this.scategories=data
    
      }
        );
      }
      deletescategorie(id){
        this.scatserv.deletscategorie(id).subscribe(
        (res)=>{
        this.listscategories();
        })
        }
        openForm(data){
          this.showForm=true;
          if (data){
            this.categorieID=data['categorieID'];
            this.imagescat=data['imagescat'];
            this.nomscategorie=data['nomscategorie'];
    
           this.id=data['_id'];
           this.formHeader="Editcategorie"
      
          }
          else {
            this.id=null
            this.formHeader="ajouter categorie"
          }
        }
         closeForm(){
          this.showForm=false;
          this.clearForm();
         }
         clearForm(){
          this.categorieID=""
          this.imagescat=""
          this.id=null
          this.nomscategorie=""
 
         } 
         sauvegarder(){
          this.showForm=false
          let scat={
            categorieID:this.categorieID, 
            imagescat:this.imagescat, 
            nomscategorie:this.nomscategorie,
            id:this.id
      
          }
          if(this.id){
            scat['_id']=this.id
            this.scatserv.Putscategorie(scat).subscribe(
              (res)=>{
              this.listscategories();
             
          }
            )}
          else{
            this.scatserv.addscategorie(scat).subscribe(
              (res)=>{
                this.listscategories();
              }
            )
          }
       
            
            this.clearForm();}
            
        
         
          editscategorie(data){
           this.showForm=true;
        
           this.categorieID=data['categorieID'];
            this.imagescat=data['imagescat'];
            this.nomscategorie=data['nomscategorie'];
          
           this.id=data['_id'];
           this.formHeader="Edit SCatégorie"
        
          }
        }
          
        


