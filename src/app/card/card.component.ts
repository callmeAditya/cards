import { Component, OnInit, Input } from '@angular/core';
// import { title } from 'process';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() title=''
@Input() imageUrl=''
@Input() username=''
@Input() content=''

  constructor() { }

  ngOnInit(): void {
  }

}
