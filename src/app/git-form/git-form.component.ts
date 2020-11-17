import { User } from './../user';
import { GitService } from './../git.service';
import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Allows us to use HttpClient in our application
import { NgForm } from '@angular/forms';
 

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {

  user:User;
  username: string;
  gitService:GitService;
  public showInput = true;
  public showData = false;

  submitUsername() {
    this.gitService.getUserData(this.username);
    this.showInput = false;
    this.showData = true;
  }

  showUserInput(hideInput){
  this.showInput = hideInput;
  this.showData = false;
}





  constructor(gitService:GitService) {
    this.gitService = gitService;
   }

  ngOnInit(): void {
  }

}
