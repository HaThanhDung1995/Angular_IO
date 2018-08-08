import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '../bookshelf/bookshelf.interface';

@Component({
  selector: 'app-book-search-results',
  templateUrl: './book-search-results.component.html',
  styleUrls: ['./book-search-results.component.scss']
})
export class BookSearchResultsComponent implements OnInit {
  @Input() books: IBook[];
  constructor() { }

  ngOnInit() {
  }

}
