import { User } from './../user';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { GitService } from './../git.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   
user:User;
repoDetails = [];
gitService:GitService;
hideInput:boolean;


  constructor(gitService:GitService) { 
    this.gitService = gitService;
  }

  @Output() toggleBack = new EventEmitter();

  goBack(){
    this.hideInput = true;
    this.toggleBack.emit(this.hideInput);
  }

  ngOnInit() {
    this.user = this.gitService.user;
    // this.repoDetails = this.gitService
  }

}