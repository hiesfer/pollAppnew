import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { poll } from './poll';
import { PollListComponent } from './poll-list/poll-list.component';
import { UpdatePollComponent } from './update-poll/update-poll.component';

const routes: Routes = [
  {path:"polls",component:PollListComponent},
  {path:"create-poll",component:CreatePollComponent},
  {path:"update-poll/:id",component:UpdatePollComponent},
  {path:"",redirectTo:'polls',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
