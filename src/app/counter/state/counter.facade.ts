import { CounterActions, CountIncrement } from './counter.actions';
import { Injectable } from "@angular/core";
import { State } from './counter.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class CounterFacade {
    constructor(private store: Store<State>){
        
    }

    incrementCounter() {
        this.store.dispatch(new CountIncrement());
    }
}