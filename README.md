# Page Scaler

scale the whole page just like an image

## Dependency
none

## Usage

if you use webpack or browserify:

```javascript
var Scaler = require('page-scaler');

var scale = new Scaler({
	width: 750,
	watch: true
});

```

if you just want to use directily, page-scaler will export an variable name Scale to global namespace.

```javascript
<script src="path/to/page-scaler.js"></script>
var scale = new Scaler({
	width: 750,
	watch: true
});
```

## Options
you need to pass in options param when call new Scale.

* `width`:
	* require: `option`
	* type: `string|number`
	* default: `750px`
	* describe: set the viewport width of your page. PageScale zoom the page base on this setting.
* `watch`:
	* require: `option`
	* type: `bool`
	* default: `false`
	* describe: applyScale when page resize when set it ture.


## API

* `setWidth(number|string)`: set the viewport width
* `applyScale()`: apply scale base on viewport settings.
* `listen(bool)`: applyScale when page resiz, 4000e

**Example:**

```javascript

var scale = new Scaler({
	width: 750,
	watch: true
});

// reset viewport width to 800px then apply scale then remove window resize listener
setTimeout(function() {
	scale.setWidth(800).applyScale().listen(false);
}, 4000);

```
