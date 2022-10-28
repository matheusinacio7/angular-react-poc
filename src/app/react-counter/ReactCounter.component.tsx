import * as React from 'react';
import { useObservable } from 'src/hooks/useObservable';
import { useService } from 'src/hooks/useService';
import { CounterService } from '../counter-service/counter.service';

export function ReactCounter() {
  const counterService = useService(CounterService);
  const counter = useObservable(counterService.counter$, 0);

  return (
    <section>
      <h1>React Counter</h1>
      <button onClick={() => counterService.decrease(1)}>Decrease</button>
      <p>{ counter }</p>
      <button onClick={() => counterService.increase(1)}>Increase</button>
    </section>
  )
}
