import { Component, OnInit, Input } from '@angular/core';
import { IceAndFireService } from '../../ice-and-fire.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() detailData;

  constructor(private router: Router) {

   }

  ngOnInit() {

  }

  goToDetails(url) {
    this.router.navigate(['detail'], { queryParams : { 'url': url }});
  }

}
