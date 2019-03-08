import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as CounterReducer from './state/counter.reducer';
import * as CounterActions from './state/counter.actions';
import { getCount } from './state';
import { CounterFacade } from './state/counter.facade';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
  count$: Observable<number> = this.store.pipe(select(state => state.count));

  constructor(private store: Store<any>,
    private counterFacade: CounterFacade) {
    this.count$ = store.select(getCount);
  }
  ngOnInit() {
  }

  increment() {
    // this.store.dispatch(new CounterActions.CountIncrement());
    this.counterFacade.incrementCounter();
  }

  decrement() {
    this.store.dispatch(new CounterActions.CountDecrement());
  }

}
