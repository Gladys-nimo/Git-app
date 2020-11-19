import { RepoService } from './../repo.service';
import { Repositories } from './../repositories';
import { User } from './../user';
import { GitService } from './../git.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  user:User[];
  repo:Repositories[];
  constructor( public gitService:GitService, public gitServiceRepo:RepoService) { 
   }

getSearchUser(searchTerm){
  this.gitService.searchUser(searchTerm).then(
    (success)=>{this.user=this.gitService.user;},
    (error)=>{console.log(error);
    }
  );
  this.gitServiceRepo.getRepo(searchTerm).subscribe(
    (success)=>{
      this.repo=success
      return(this.repo)
    }
  )
}



ngOnInit() {
this.getSearchUser("Gladys-nimo")
}
}




















   
// user:User;
// repoDetails = [];
// gitService:GitService;
// hideInput:boolean;


//   

//   @Output() toggleBack = new EventEmitter();

//   goBack(){
//     this.hideInput = true;
//     this.toggleBack.emit(this.hideInput);
//   }

//   

// }
