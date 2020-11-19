import { Component, OnInit, Output, EventEmitter } from '@angular/core';
 

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {

searchTerm:string  
@Output() searchEmmiter= new EventEmitter<any>();

  constructor() {
  }
emitUser(){
  this.searchEmmiter.emit(this.searchTerm);
}
  ngOnInit(): void {
  }

}
// user:User;
//   username: string;
//   gitService:GitService;
//   public showInput = true;
//   public showData = false;

//   submitUsername() {
//     this.gitService.getUserData(this.username);
//     this.showInput = false;
//     this.showData = true;
//   }

//   showUserInput(hideInput){
//   this.showInput = hideInput;
//   this.showData = false;
// }