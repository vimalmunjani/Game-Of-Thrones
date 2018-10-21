import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('item') item;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetails(item) {
    this.router.navigate(['detail'], { queryParams : { 'url': item.url }});
  }
}
