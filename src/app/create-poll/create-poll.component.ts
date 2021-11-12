import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { poll } from '../poll';
import { PollService } from '../poll.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  pl: poll =new poll();
  constructor(private pollservice:PollService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePoll(){
    this.pollservice.createpoll(this.pl).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/polls']);
  }
  
  onSubmit(){
    console.log(this.pl);
    this.savePoll();
  }

}
