import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name=''
  welcomemessagefromservice:string
  constructor(private route:ActivatedRoute,private service:WelcomeDataService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['name'])
    this.name=this.route.snapshot.params['name']
  }
  helloworld()
  {
    console.log('hello');
    this.service.executeHelloWorld().subscribe(response => this.handleresponse(response),error => this.handleerrorresponse(error));
  }
  helloworldwithpathvariable()
  {
    this.service.executeHelloWorldwithpathvariable(this.name).subscribe(response => this.handleresponse(response),error => this.handleerrorresponse(error));
  }
  handleresponse(response)
 {
      //console.log(response.message)
      this.welcomemessagefromservice=response.message
 }
 handleerrorresponse(error)
 {
  this.welcomemessagefromservice=error.error.message
 }
}
