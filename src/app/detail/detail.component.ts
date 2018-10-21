import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IceAndFireService } from '../ice-and-fire.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  url: String;
  detailData: Object;
  detailType: String;
  isLoading = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private iceAndFireService: IceAndFireService) {

  }

  ngOnInit() {

    this.route.queryParamMap.subscribe(queryParam => {

      this.isLoading = true;

      this.url = queryParam.get('url');
      console.log(this.url);

      if ((this.url).includes('books')) {
        this.detailType = 'book';
      } else if ((this.url).includes('houses')) {
        this.detailType = 'house';
      } else if ((this.url).includes('characters')) {
        this.detailType = 'character';
      }

      this.iceAndFireService.getDataByUrl(this.url).subscribe(detail => {
        this.isLoading = false;
        this.detailData = detail;
      });


    });

  }

  goToHome() {
    this.router.navigate(['']);
  }

}
