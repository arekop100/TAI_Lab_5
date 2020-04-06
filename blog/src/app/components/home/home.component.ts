import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() filterText: string;
  constructor() { }

  ngOnInit(): void {
  }

  getName($event) {
    this.filterText = $event
  }

}
