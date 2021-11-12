import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { poll } from '../poll';
import { PollService } from '../poll.service';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit {

  polls!: poll[];
  constructor(private pollservice:PollService,
   private router:Router) { }

  ngOnInit(): void {
      this.getPolls();
    
  }
private getPolls(){
  this.pollservice.getPollList().subscribe(data=>{
    this.polls=data;
  })
}

  // pollDetails(id:number){
  //   this.router.navigate(['employee-details', id]);
  // }

   updatepoll(id: number){
    this.router.navigate(['update-poll', id]);
  }

  // private deletepoll(id: number){
  //   this.pollservice.deletepoll(id).subscribe( data => {
  //     console.log(data);
  //     this.getPolls();
  //   })
  // }
}

