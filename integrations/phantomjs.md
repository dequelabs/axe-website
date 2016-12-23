---
layout: page
title: Example PhantomJS
---


This example demonstrates how to use aXe with PhantomJS.

## To configure the example ##

* PhantomJS must be installed; please follow the directions at http://phantomjs.org/
  to install it.
* Run `npm install axe-core`

## To run the example ##

* Move to the `doc/examples/phantomjs` directory
* `phantomjs axe-phantom.js http://www.deque.com` to run aXe in PhantomJS
  against http://www.deque.com and output results to the terminal
* `phantomjs axe-phantom.js http://www.deque.com results.json` to run aXe in PhantomJS
  against http://www.deque.com and save results to `results.json`


## axe-phantom.js
<pre><code class="highlight language-javascript">
/*global phantom */
var PATH_TO_AXE = 'node_modules/axe-core/axe.min.js';

var args = require('system').args;
var fs = require('fs');
var page = require('webpage').create();

if (args.length < 2) {
	console.log('axe-phantomjs.js accepts 1 argument, the URL to test');
	phantom.exit(1);
}

page.open(args[1], function (status) {
	// Check for page load success
	if (status !== 'success') {
		console.log('Unable to access network');
		return;
	}

	page.injectJs(PATH_TO_AXE);
	page.framesName.forEach(function (name) {
		page.switchToFrame(name);
		page.injectJs(PATH_TO_AXE);
	});
	page.switchToMainFrame();
	page.evaluateAsync(function () {
		/*global window, axe */
		axe.a11yCheck(window.document, null, function (results) {
			window.callPhantom(results);
		});
	});

	page.onCallback = function (msg) {
		if (args[2]) {
			fs.write(args[2], JSON.stringify(msg, null, '  '), 'w');
		} else {
			console.log(JSON.stringify(msg, null, '  '));
		}

		phantom.exit();
	};
});

</code></pre>

