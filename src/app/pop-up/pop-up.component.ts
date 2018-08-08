import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '../bookshelf/bookshelf.interface';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor(private bookService: BookService) { }
  book: IBook;
  ngOnInit() {
  }
  submitform() {

    this.bookService.createBooks(this.book);

  }
}
