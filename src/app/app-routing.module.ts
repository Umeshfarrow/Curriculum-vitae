import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JourneyComponent } from './journey/journey.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';


const routes: Routes = [
 {path: '', component: PortfolioComponent},
 {path:'portfolio', component: PortfolioComponent},
 {path: 'education/journey', component: JourneyComponent},
 {path: 'education', component: EducationComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
