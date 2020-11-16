import { Repositories } from './repositories';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GitService {
user: User;
repositories:Repositories;


  constructor(private http: HttpClient) {
      this

   }
}
