import { BookComponent } from './book/book.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookService } from './services/book.service';
import { BookSearchResultsComponent } from './book-search-results/book-search-results.component';
import { HttpClientModule } from '@angular/common/http';
import { PopUpComponent } from './pop-up/pop-up.component';
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    LayoutComponent,
    HeaderComponent,
    BannerComponent,
    BookshelfComponent,
    NavbarComponent,
    BookSearchResultsComponent,
    PopUpComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
