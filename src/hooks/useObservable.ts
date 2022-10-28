import { useEffect, useState } from "react";
import { Observable } from "rxjs";

export function useObservable<T extends unknown>(observable: Observable<T>, initialValue: T) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const subscription = observable.subscribe(setValue);

    return () => subscription.unsubscribe();
  }, [observable]);

  return value;
}