import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'cards';
  posts=[
    {title:'Neat tree',
     imageUrl:'../assets/img/tree.jpeg' ,
     username: 'nature',
    content:'I saw a neat tree today'
  },
  {title:'Snowy Mountain',
     imageUrl:'../assets/img/mountain.jpeg' ,
     username: 'mountain',
    content:'Beautiful mountain'
  },
  {title:'Super Biking',
     imageUrl:'../assets/img/biking.jpeg' ,
     username: 'biking',
    content:'Biking is hiking on wheels'
  },
  {title:'Super Biking',
  imageUrl:'../assets/img/biking.jpeg' ,
  username: 'biking',
 content:'Biking is hiking on wheels'
}
    
  ]
}
