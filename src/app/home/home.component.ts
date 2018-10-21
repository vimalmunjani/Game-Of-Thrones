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

  books$;
  houses$;
  characters$;
  characters;
  books;
  houses;
  all;
  selectedFilter = 'All';
  filters = ['All', 'Books', 'Houses', 'Characters'];
  result;
  isLoading = false;

  previousPage: number;
  currentPage: number;
  nextPage: number ;
  isFirstPage = true;
  isLastPage = false;


  constructor(private iceAndFireService: IceAndFireService) { }

  ngOnInit() {

    this.currentPage = 1;
    this.previousPage = this.currentPage - 1;
    this.nextPage = this.currentPage + 1;

    this.fetchData(this.currentPage);

  }

  onOptionsSelected(option) {

    this.selectedFilter = option;
    option = option.toLowerCase();
    if (option === 'all') {

      console.log('from the option if ', option);

      this.all = this.result;
      this.all.sort( () => {
        return (Math.random() - (0.5));
        });
      return;
    }
    this.all = this[option];
    console.log('length', this.all.length);

    if (this.all.length === 0) {
      console.log('no more items');
      this.isLastPage = true;
    } else {
      this.isLastPage = false;
    }

  }

  previous() {

    if (this.isFirstPage) {
      this.isLastPage = false;
      return;
    }

    console.log('isLastPage', this.isLastPage);
    this.currentPage = this.currentPage - 1;
    this.previousPage = this.currentPage - 1;
    this.nextPage = this.currentPage + 1;

    if (this.currentPage === 1) {
      this.isFirstPage = true;
    }

    this.fetchData(this.currentPage);
}

  next() {

    if (this.isLastPage) {
      return;
    }

    this.currentPage = this.currentPage + 1;
    this.previousPage = this.currentPage - 1;
    this.nextPage = this.currentPage + 1;

    if (this.currentPage !== 1) {
      this.isFirstPage = false;
    }

    this.fetchData(this.currentPage);
  }


  fetchData(pageNumber) {

    this.isLoading = true;

    this.books$ = this.iceAndFireService.getBooks(pageNumber);
    this.houses$ = this.iceAndFireService.getHouses(pageNumber);
    this.characters$ = this.iceAndFireService.getCharacters(pageNumber);

    forkJoin([this.books$, this.houses$, this.characters$]).subscribe(data => {
      this.books = data[0];
      this.houses = data[1];
      this.characters = data[2];

      this.result = [ ...this.books, ...this.houses, ...this.characters ];
      this.all = this.result;
      this.all.sort( () => {
        return (Math.random() - (0.5));
        });

        this.isLoading = false;
        this.onOptionsSelected(this.selectedFilter);

    });
  }
}
