import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {

  constructor(private router:Router) {{
    
  }}

  greet:string=""
  ngOnInit(): void {
    var myDate = new Date();
    var hrs = myDate.getHours();

    if (hrs < 12)
        this.greet = ' Morning '
    else if (hrs <16)
        this.greet = ' Afternoon '
    else if (hrs <23)
        this.greet = ' Evening ' 
  }
  
  myfun(){
    this.router.navigate(['ProductList'])
  }
}
