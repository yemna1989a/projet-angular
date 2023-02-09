import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ScategoriesService {

  constructor(private http :HttpClient) { }
  url="http://localhost:3001/api/scategories/"
  fetchscategories(){
    return this.http.get(this.url)
  }
  deletscategorie(id){
return this.http.delete(this.url+id)
  }
  addscategorie(categ){
    return this.http.post(this.url ,categ)  
  }
  Putscategorie(cat)
{
return this.http.put(this.url + "/"  + cat.id,cat)
}
}


