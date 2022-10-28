import { ProviderToken } from "@angular/core";
import { useRef } from "react";
import { Container } from "src/app/app.module";

export function useService<T>(serviceClass: ProviderToken<T>) {
  const service = useRef(Container.get<T>(serviceClass));

  return service.current;
}
