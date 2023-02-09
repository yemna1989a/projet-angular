import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http :HttpClient) { }
  url="http://localhost:3001/api/articles/"
  fetcharticles(){
    return this.http.get(this.url)
  }
  deletarticle(id){
return this.http.delete(this.url+id)
  }
  addarticle(art){
    return this.http.post(this.url ,art)  
  }
  Putarticle(art)
{
return this.http.put(this.url + "/"  + art.id,art)
}
}


