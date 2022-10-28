import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-angular-counter',
  templateUrl: './angular-counter.component.html',
  styleUrls: ['./angular-counter.component.scss']
})
export class AngularCounterComponent {
  public readonly counter$: Observable<number>;

  constructor(private readonly counterService: CounterService) {
    this.counter$ = counterService.counter$;
  }

  public increase() {
    this.counterService.increase(1);
  }

  public decrease() {
    this.counterService.decrease(1);
  }
}
