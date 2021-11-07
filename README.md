# Credit card input

Simple credit card input with multiple fields.

## [DEMO](https://amiryxe.github.io/credit-card-input/)

You can also see the demo on the [Codepen](https://codepen.io/amiryxe/pen/QWgQPEa)

## Features
- Automatically focuses the next field
- Only accepts numbers
- Holds the main input
- Copy to clipboard

## How to use

Include the style file:

```css
<link rel="stylesheet" href="./css/credit-card-input.css">
```

Include the js file after jQuery:

```js
<script src="./js/credit-card-input.js"></script>
```

Use this HTML structure to initial credit inputs:

```html
<div class="credit-card-inputs">
  <div class="credit-card-inputs__fields">
    <input type="text" data-pos="1" placeholder="xxxx" />
    <input type="text" data-pos="2" placeholder="xxxx" />
    <input type="text" data-pos="3" placeholder="xxxx" />
    <input type="text" data-pos="4" placeholder="xxxx" />
  </div>
  <button class="credit-card-inputs__reset">Reset</button>
</div>
```

If you want use copy to clipboard feature, include this file to your project:
```js
<script src="./js/copy-to-clipboard.js"></script>
```

## CDN
```css
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/amiryxe/credit-card-input/css/credit-card-input.min.css">
```

```js
<script src="https://cdn.jsdelivr.net/gh/amiryxe/credit-card-input/js/credit-card-input.min.js"></script>
```
