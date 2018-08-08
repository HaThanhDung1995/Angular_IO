import { Component, OnInit } from '@angular/core';
import { IBook } from '../bookshelf/bookshelf.interface';
import { BookService } from '../services/book.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  bookResults: IBook[] = [];
  keyword: string;
  constructor(private bvc: BookService) { }

  ngOnInit() {
  }
  search(keyword: string) {
    return this.bvc.searchBooks(keyword).subscribe((books: IBook[]) => {
      this.bookResults = books;
    });
  }
}
