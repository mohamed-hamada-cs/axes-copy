import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
const routes: Routes = [
  { path: '', redirectTo: '/LandingPage', pathMatch: 'full' },
  { path: 'LandingPage', component: LandingPageComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Projects/:Cat', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
