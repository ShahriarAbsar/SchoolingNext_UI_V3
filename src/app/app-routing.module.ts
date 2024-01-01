import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ParticipatoryEventComponent } from './participatory-event/participatory-event.component';
import { ProgramScheduleComponent } from './program-schedule/program-schedule.component';
import { QuestionsComponent } from './questions/questions.component';
import { TeamComponent } from './team/team.component';
import { StayConnectedComponent } from './stay-connected/stay-connected.component';
import { CorePartnersComponent } from './core-partners/core-partners.component';
import { AnimationtestsComponent } from './animationtests/animationtests.component';



const routes: Routes = [

  { path:'landingPage', component: LandingPageComponent},
  { path:'test', component: ParticipatoryEventComponent },
  { path:'best', component: ProgramScheduleComponent},
  { path:'ques', component: QuestionsComponent},
  { path:'team', component: TeamComponent},
  { path:'conn', component: StayConnectedComponent},
  { path:'t', component: CorePartnersComponent},
  { path:'ani', component: AnimationtestsComponent},
  
  { path: '', redirectTo: '/landingPage', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
