import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JourneyComponent } from './journey/journey.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AppComponent } from './app.component';


const routes: Routes = [
 {path: '', component: PortfolioComponent},
 {path: 'journey', component: JourneyComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
