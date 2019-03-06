import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as CounterReducer from './state/counter.reducer';
import * as CounterActions from './state/counter.actions';
import { getCount } from './state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
  count$: Observable<number> = this.store.select(state => state.count);

  constructor(private store: Store<CounterReducer.State>) {
    this.count$ = store.select(getCount);
  }
  ngOnInit() {
  }

  increment() {
    this.store.dispatch(new CounterActions.CountIncrement());
  }

  decrement() {
    this.store.dispatch(new CounterActions.CountDecrement());
  }

}
