import { IBookShelfSection, IBook } from './bookshelf.interface';
import { Component, OnInit } from '@angular/core';
import { data } from './bookshelf.mock';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit {
  data: Boolean = false;
  sections: IBookShelfSection[];
  constructor(private bookService: BookService) { }
  showpopup() {
    this.data = true;
  }

  ngOnInit() {

    this.sections = [{
      name: 'feature',
      books: [],
      filters: ['basic', 'advance']
    }, {
      name: 'hot',
      books: [],
      filters: ['basic', 'advance']
    }];
    this.bookService.getBooks(this.sections[0].name).subscribe((books: IBook[]) => {
      this.sections[0].books = books;
    });
    this.bookService.getBooks(this.sections[1].name).subscribe((books: IBook[]) => {
      this.sections[1].books = books;
    });
  }

}

