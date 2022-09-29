import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MiddleContentComponent } from './components/middle-content/middle-content.component';
import { ResumeFooterComponent } from './components/resume-footer/resume-footer.component';
import { PortfolioLandingPageComponent } from './components/portfolio-landing-page/portfolio-landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    PageNotFoundComponent,
    MiddleContentComponent,
    ResumeFooterComponent,
    PortfolioLandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'portfolio', component: PortfolioLandingPageComponent},
      {path: '**', component: PageNotFoundComponent}

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
