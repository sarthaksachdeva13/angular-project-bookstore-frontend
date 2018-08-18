import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/app-const';

@Injectable()
export class BookService {

  constructor(private http: Http) {
  }

  getBookList() {
    let url = AppConst.serverPath + '/book/bookList';

    let tokenHeader = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers: tokenHeader});
  }

  getBook(id: number) {
    let url = AppConst.serverPath + '/book/' + id;

    let tokenHeader = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers: tokenHeader});
  }

  searchBook(keyword: string) {
    const url = AppConst.serverPath + '/book/searchBook';
    const tokenHeader = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });
    return this.http.post(url, keyword, {headers: tokenHeader});
  }

  searchBookAPI(query) {
    const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    return fetch(API_URL + query + '&maxResults=40').then(response => response.json());
  }

}
