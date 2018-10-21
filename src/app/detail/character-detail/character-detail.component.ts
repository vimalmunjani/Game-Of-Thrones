import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  @Input() detailData;

  constructor(private router: Router) {

   }

  ngOnInit() {

  }

  goToDetails(url) {
    this.router.navigate(['detail'], { queryParams : { 'url': url }});
  }

}
