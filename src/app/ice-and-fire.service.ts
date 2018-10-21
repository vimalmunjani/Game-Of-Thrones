import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IceAndFireService {

  constructor(private http: HttpClient) {}

    getBooks(page = 1, pageSize = 10) {
      const url = `https://www.anapioficeandfire.com/api/books?page=${page}&pageSize=${pageSize}`;
      return this.http.get(url);
    }

    getHouses(page = 1, pageSize = 10) {
      const url = `https://www.anapioficeandfire.com/api/houses?page=${page}&pageSize=${pageSize}`;
      return this.http.get(url);
    }

    getCharacters(page = 1, pageSize = 10) {
      const url = `https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=${pageSize}`;
      return this.http.get(url);
    }

    getDataByUrl(url) {
      return this.http.get(url);
    }


}
