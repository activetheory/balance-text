# Balance Text

Simple text balancing utility. It's a wrapper around the `text-wrap: balance` CSS property.
If the browser supports the `text-wrap: balance` property, and the element has the `text-wrap: balance` property set, it will not be balanced.

[Demo](https://activetheory.github.io/balance-text/)

## Installation

```bash
npm install @activetheory/balance-text
```

## Usage

```js
import balanceText from '@activetheory/balance-text';

const el = document.querySelector('.el');

const result = balanceText({
  el,
  ratio: 1,
  useParent: true,
  debug: true,
});
```

## Options

- `el`: The element to balance.
- `ratio`: The ratio of the width of the element to the width of the parent.
- `useParent`: Whether to use the parent element as reference to balance the text.
- `debug`: Whether to log debug information.

## Demo

See the [demo](./demo) folder for examples.
To run the demo, run `npm run dev`.
