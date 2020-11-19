import { FormsModule } from '@angular/forms';
import { GitService } from './git.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitFormComponent } from './git-form/git-form.component';
import { CountDatePipe } from './count-date.pipe';
import { AboutComponent } from './about/about.component';
import { HighlightDirective } from './highlight.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GitFormComponent,
    CountDatePipe,
    AboutComponent,
    HighlightDirective,
    NavbarComponent,
    NotFoundComponent,
    SearchComponent,
    DateAgoPipe
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
