import { Component, OnInit } from '@angular/core';
import { IceAndFireService } from '../ice-and-fire.service';
import { forkJoin } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  many: Array<number>;
  books$;
  houses$;
  characters$;
  characters;
  books;
  houses;
  all;

  constructor(private iceAndFireService: IceAndFireService) { }

  ngOnInit() {

    this.many = [1];

    this.books$ = this.iceAndFireService.getBooks();
    this.houses$ = this.iceAndFireService.getHouses();
    this.characters$ = this.iceAndFireService.getCharacters();


    forkJoin([this.books$, this.houses$, this.characters$]).subscribe(data => {
      this.books = data[0];
      this.houses = data[1];
      this.characters = data[2];

      this.all = [ ...this.books, ...this.houses, ...this.characters ];
      this.all.sort();
    });

  }

}
