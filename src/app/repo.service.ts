import { HttpClient } from '@angular/common/http';
import { Repositories } from './repositories';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
repo:Repositories[]=[];
API_URL = "https://api.github.com/users/";
token = "?access_token=bb02b09e6b6dd36cb8f6622511ffa742d1993ec9"

  constructor(public http:HttpClient) { }
getRepo(searchTerm:string):Observable<any>{
  return this.http.get(this.API_URL + searchTerm + "/repos" + this.token)
}

}
