import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { poll } from '../poll';
import { PollService } from '../poll.service';

@Component({
  selector: 'app-update-poll',
  templateUrl: './update-poll.component.html',
  styleUrls: ['./update-poll.component.css']
})
export class UpdatePollComponent implements OnInit {
  id!:number;

  pl: poll =new poll();
  constructor(private pollservice:PollService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.pollservice.getPollById(this.id).subscribe(data => {
      this.pl = data;
    }, error => console.log(error));
  }

  savePoll(){
    this.pollservice.createpoll(this.pl).subscribe( data =>{
      console.log(data);
      this.goToPollList();
    },
    error => console.log(error));
  }

  goToPollList(){
    this.router.navigate(['/polls']);
  }
  
  onSubmit(){
    console.log(this.pl);
    this.savePoll();
  }

}
