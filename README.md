<div align="center">
  <img src='https://github.com/kciter/dead-toast/blob/master/art/logo.png?raw=true' alt='logo' width='300px'>
</div>
<br>

<h1 align="center">dead-toast</h1>

<div align="center">
  :bread: Dead simple Javascript Toast like Android.<br>
  <strong>No dependences and tiny</strong>
</div>
<div align="center">
  <sub>Created by <a href="https://github.com/kciter">Lee Sun-Hyoup</a>.</sub>
</div>

## Demo
[Here](https://kciter.github.io/dead-toast/)

## Installation
### CDN
```html
<script src="https://unpkg.com/dead-toast@1"></script>
```

### Bower
```
bower install dead-toast
```

### Node.js
```
npm install dead-toast
```

Or just download [dead-toast.min.js](https://raw.githubusercontent.com/kciter/dead-toast/master/dead-toast.min.js?token=ADdLD-bCrpqLGE8z00Xh-zQ5vL3r56Xzks5X3raKwA%3D%3D) and [dead-toast.min.css](https://raw.githubusercontent.com/kciter/dead-toast/master/dead-toast.min.css?token=ADdLD4vkJW4agDKKeWL0ibxnoj1Aj9rvks5X3rZ8wA%3D%3D), use it locally: 
```html
<link rel="stylesheet" type="text/css" href="dead-toast.min.css">
<script src="dead-toast.min.js"></script>
```

## Usage
Very simple usage:
```js
DeadToast.makeText('Hello, World!').show();
```
If you want to avoid `DeadToast` accumulation, see the below.
```js
var duration = 2000;
var toast = DeadToast.makeText('message', duration);

$('button').click(function() { // jQuery
  toast.show();
});
```
You can cancel the `DeadToast` showing.
```js
var duration = 2000;
var toast = DeadToast.makeText('message', duration);

$('button').click(function() { // jQuery
  toast.cancel();
  // If you want to hide Toast immediately, you should to first parameter set true.
  // ex) toast.cancel(true);
});
```

## License
MIT License

Copyright (c) 2016 Lee Sun-Hyoup

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
