import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private readonly counterSubject = new BehaviorSubject(0);
  public readonly counter$ = this.counterSubject.asObservable();

  public increase(count: number) {
    this.counterSubject.next(this.counterSubject.value + count);
  }

  public decrease(count: number) {
    this.counterSubject.next(Math.max(this.counterSubject.value - count, 0));
  }
}
