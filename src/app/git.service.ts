
import { Repositories } from './repositories';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
@Injectable()
export class GitService {
  user: User[] = [];
  repo: Repositories[] = [];
  API_URL = "https://api.github.com/users/";
  token = "?access_token=bb02b09e6b6dd36cb8f6622511ffa742d1993ec9"



  constructor(private http: HttpClient) { }
  searchUser(searchTerm: string) {
    interface data {
      login: string;
      avatar_url: any;
      following: number;
      followers: number;
      public_repos: string;

    }
    return new Promise((resolve, reject) => {
      this.user = [];
      this.http.get<data>(this.API_URL + searchTerm + this.token).toPromise().then(
        (results) => {
          this.user.push(results);
          resolve();
        },
        (error) => {
          reject();
        }
      );
    
    })
  }
}






























  