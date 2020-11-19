import { NotFoundComponent } from './not-found/not-found.component';
import { GitFormComponent } from './git-form/git-form.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'form', component:GitFormComponent},
  { path: 'about', component:AboutComponent},
  { path:'**', component:NotFoundComponent},
  { path: '', redirectTo:"/git", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
