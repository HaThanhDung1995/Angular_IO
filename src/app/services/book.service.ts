import { Injectable } from '@angular/core';
import { IBook } from '../bookshelf/bookshelf.interface';
import { books } from './books.mock';
import { HttpClient } from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }

  // getBooks(category: string) {
  //   return this.http.get(`http://localhost:3000/books?categories_like=${category}`)
  //   .pipe(map(function(res: any) {
  //     const resBooks = res.map(item => {
  //         const book: IBook = {
  //           title : item.title,
  //           detail : item.desc,
  //           cover : item.cover,
  //           author : item.author
  //         };
  //         return book;
  //     });
  //     return resBooks;
  //   }));

  // }
  getBooks(category: string) {
    return this.http.get(`http://localhost:3000/books?categories_like=${category}`)
    .pipe(map(function(res: any) {
      const resBooks = res.map(item => {
        const book: IBook = {
          title : item.title,
          detail : item.desc,
          cover : item.cover,
          author : item.author
        };
        return book;
      });
      return resBooks;
    }));
  }
  createBooks(setbook: IBook) {
    const resb = {
      categories: 'hot',
      filters: 'Dung',
      id: Date.now(),
      title: setbook.title,
      cover: setbook.cover,
      author: setbook.author,
      desc: setbook.detail
    };
    this.http.post(`http://localhost:3000/books`, resb);
  }
  // .pipe(map(function(res: any[]) {
  //     const resBooks = res.map(item => {
  //       const book: IBook = {
  //           title: item.title,
  //           detail: item.desc,
  //           cover: item.cover,
  //           author: item.author
  //       };
  //       // lấy từng thuộc tính trong tửng cuốn sách
  //       return book;
  //     });
  //     return resBooks;
  //   }));
  search(keyword: string): IBook[] {
    if (!keyword) {
      return [];
    }
    return books.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()));
  }
  searchBooks(keyword: string)  {
    if (keyword) {
      return this.http.get(`http://localhost:3000/books?categories_like=hot&q=${keyword}`).pipe(map(function(res: any[]) {
      const resBooks = res.map(item => {
        const book: IBook = {
            title: item.title,
            detail: item.desc,
            cover: item.cover,
            author: item.author
        };
        return book;
      });
      return resBooks;
    }));
    }


  }
}
