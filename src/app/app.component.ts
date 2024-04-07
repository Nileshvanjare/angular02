import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project3';
  skills : Array<string> = ["html","css","ts","js"]

  stdArr =[
    {
      fname : "may",
      lname : "doe",
      email : "jd@gmailcom",
      contact : "234524",

      
    },
    {
      fname : "jun",
      lname : "doe",
      email : "jd@gmailcom",
      contact : "234524",

      
    },
    {
      fname : "jun",
      lname : "doe",
      email : "jd@gmailcom",
      contact : "234524",

      
    },
    {
      fname : "jun",
      lname : "doe",
      email : "jd@gmailcom",
      contact : "234524",

      
    },
  ]

  stdArr2=[
    {
      fname : "niles",
      lname : "vanjar",
      class : "bsc cs"
    },
    {
      fname : "niles",
      lname : "vanjar",
      class : "bsc cs"
    },
    {
      fname : "niles",
      lname : "vanjar",
      class : "bsc cs"
    },
  ]

  username : string = "jhon"

}
