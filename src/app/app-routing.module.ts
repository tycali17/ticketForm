import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicketSubmissionComponent } from './ticket-submission/ticket-submission.component';

const routes: Routes = [
  { path: '', 
  component: HomeComponent },
  { path: 'ticket-submission', 
component: TicketSubmissionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
