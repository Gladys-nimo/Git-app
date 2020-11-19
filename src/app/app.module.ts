import { FormsModule } from '@angular/forms';
import { GitService } from './git.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitFormComponent } from './git-form/git-form.component';
// import { ProfileComponent } from './profile/profile.component';
import { CountDatePipe } from './count-date.pipe';
import { AboutComponent } from './about/about.component';
import { HighlightDirective } from './highlight.directive';
import { NavbarComponent } from './navbar/navbar.component';
// import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    GitFormComponent,
    // ProfileComponent,
    CountDatePipe,
    AboutComponent,
    HighlightDirective,
    NavbarComponent,
    // SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
