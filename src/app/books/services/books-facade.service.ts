import { Injectable } from '@angular/core';
import { Store, Action, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromBooks from '../reducers';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksFacadeService {
  allBooks$: Observable<Book[]>;

  constructor(private store: Store<fromBooks.State>) {
    this.allBooks$ = store.pipe(select(fromBooks.getAllBooks));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
