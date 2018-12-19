import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import * as BooksPageActions from '../actions/books-page.actions';
import { Book } from '../models/book';
import { BooksFacadeService } from '../services/books-facade.service';

@Component({
  selector: 'abl-books-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card>
      <mat-card-title>My Collection</mat-card-title>
    </mat-card>

    <abl-book-preview-list [books]="books$ | async"></abl-book-preview-list>
  `,
  styles: [
    `
      mat-card-title {
        display: flex;
        justify-content: center;
      }

      mat-card-actions {
        display: flex;
        justify-content: center;
      }
    `
  ]
})
export class BooksPageComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private booksFacade: BooksFacadeService) {
    this.books$ = booksFacade.allBooks$;
  }

  ngOnInit() {
    this.booksFacade.dispatch(new BooksPageActions.Load());
  }
}
