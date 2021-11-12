import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollListComponent } from './poll-list/poll-list.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { FormsModule } from '@angular/forms';
import { UpdatePollComponent } from './update-poll/update-poll.component';
import { RespondComponent } from './respond/respond.component';

@NgModule({
  declarations: [
    AppComponent,
    PollListComponent,
    CreatePollComponent,
    UpdatePollComponent,
    RespondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
