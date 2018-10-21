import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  @Input() detailData;

  constructor(private router: Router) {

   }

  ngOnInit() {

  }

  goToDetails(url) {
    this.router.navigate(['detail'], { queryParams : { 'url': url }});
  }

}
