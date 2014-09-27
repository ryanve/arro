# arro
#### left/right-arrow keyboard shortcuts for flipping through `[rel="prev"]` and `[rel="next"]` links using native JavaScript

## Usage 
Load [arro.js](arro.js) via `script` tag or via `require('arro')` in your bundle. Specify `[rel="prev"]` and `[rel="next"]` URLs via either `link[href]` in `a[href]` tags.

### `link` example
```html
<!DOCTYPE html>
<title>2.html</title>
<link rel="prev" href="1.html">
<link rel="next" href="3.html">
<h1>2</h1>
<script src="arro.js" async></script>
```

### `a` example
```html
<!DOCTYPE html>
<title>2.html</title>
<h1>2</h1>
<nav>
  <a rel="prev" href="1.html">Previous</a>
  <a rel="next" href="3.html">Next</a>
</nav>
<script src="arro.js" async></script>
```

## Demo
1. Download or clone the repo
1. Open [test/index.html](test/index.html) in a web browser

## Compatibility
Works in all modern browsers

## Fund
<b>[Tip the developer](https://gratipay.com/ryanve/)</b> =)

## License
MIT