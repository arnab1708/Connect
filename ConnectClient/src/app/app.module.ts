import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SmartServiceComponent } from './smart-service/smart-service.component';
import { ContactComponent } from './contact/contact.component';
import { LeadComponent } from './lead/lead.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TaskComponent } from './task/task.component';
import { NoteComponent } from './note/note.component';
import { HouseholdComponent } from './household/household.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartServiceComponent,
    ContactComponent,
    LeadComponent,
    OpportunityComponent,
    CalendarComponent,
    TaskComponent,
    NoteComponent,
    HouseholdComponent,
    DashboardComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
