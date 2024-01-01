import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ParticipatoryEventComponent } from './participatory-event/participatory-event.component';
import { ProgramScheduleComponent } from './program-schedule/program-schedule.component';
import { QuestionsComponent } from './questions/questions.component';
import { TeamComponent } from './team/team.component';
import { StayConnectedComponent } from './stay-connected/stay-connected.component';
import { AddressingComponent } from './addressing/addressing.component';

import { CorePartnersComponent } from './core-partners/core-partners.component';
import { AnimationtestsComponent } from './animationtests/animationtests.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ParticipatoryEventComponent,
    ProgramScheduleComponent,
    QuestionsComponent,
    TeamComponent,
    StayConnectedComponent,
    AddressingComponent,
    
    CorePartnersComponent,
         AnimationtestsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
