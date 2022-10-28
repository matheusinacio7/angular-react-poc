import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ReactCounter } from './ReactCounter.component';

export class ReactCounterElement extends HTMLElement {
  constructor() {
    super();

    const root = ReactDOM.createRoot(this.getRootNode() as Element);
    root.render(<ReactCounter></ReactCounter>);
  }
}

customElements.define('app-react-counter', ReactCounterElement);
