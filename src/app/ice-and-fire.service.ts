import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IceAndFireService {

  constructor(private http: HttpClient) {}

    getMyData() {
        this.http.get('https://www.anapioficeandfire.com/api/books/1').subscribe(data => {
        console.log('Direct from service class --- data', data);
        });
    }

    getMyData2() {
      return this.http.get('https://www.anapioficeandfire.com/api/books/1');
    }

    getBooks() {
      return this.http.get('https://www.anapioficeandfire.com/api/books');
    }

    getHouses() {
      return this.http.get('https://www.anapioficeandfire.com/api/houses');
    }

    getCharacters() {
      return this.http.get('https://www.anapioficeandfire.com/api/characters');
    }


}
