---
layout: default
title: Using Axe With Jasmine
---

This example demonstrates how to use aXe with the Jasmine unit testing framework.

The unit test is in `spec/a11y.js`, and has two test cases: One that shows the
expected results from HTML with no errors, and one that shows the expected
result from HTML with a single error.

## To configure the example ##

* Node must be installed; please follow the directions at http://www.nodejs.org
  to install it.
* `npm install -g grunt-cli` to install the Grunt task runner (may need to be
  run with `sudo` on Unix or as Administrator on Windows)
* Move to the `doc/examples/jasmine` directory
* `npm install` to install dependencies

## To run the example ##

* Move to the `doc/examples/jasmine` directory
* `grunt jasmine` to run Jasmine

You should see output indicating that the tests ran successfully, with zero
failures.

## To modify the example ##

To run the example on your own HTML, such as widgets or controls, insert the
HTML into the document, retrieve the root element of your widget (with e.g.,
`document.getElementById()`), and pass that as the first argument into a call
to `axe.run`.

The third argument to the `axe.run` call should be the function to test
the results. The example is simply looking at the count of violations, but much
more detailed information is available if desired.  The aXe documentation
should be consulted for more details on customizing and analyzing calls to
`axe.run`.


`package.json`
--------------

```javascript
{
  "name": "axe-jasmine-example",
  "description": "aXe Jasmine Example",
  "version": "0.0.1",
  "private": true,
  "author": {
    "name": "David Sturley",
    "organization": "Deque Systems, Inc.",
    "url": "http://deque.com/"
  },
  "dependencies": {},
  "scripts": {
    "build": "grunt"
  },
  "devDependencies": {
    "axe-core": "~1.0.1",
    "grunt": "~0.4.4",
    "grunt-contrib-jasmine": "~0.9.2"
  }
}
```

Gruntfile.js
------------
```javascript
module.exports = function (grunt) {
	'use strict';

	grunt.loadNpmTasks('grunt-contrib-jasmine');

	grunt.initConfig({
		jasmine: {
			test: {
				src: ['node_modules/axe-core/axe.js'],
				options: {
					specs: 'spec/**/*.js'
				}
			}
		}
	});
};
```


spec/a11y.js
------------
```javascript
/* global describe, it, expect, axe, document */

describe('axe', function () {
	'use strict';

	document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend',
		'<div id="working">' +
			'<label for="has-label">Label for this text field.</label>' +
			'<input type="text" id="has-label">' +
		'</div>' +
		'<div id="broken">' +
			'<p>Not a label</p><input type="text" id="no-label">' +
		'</div>');

	it('should report that good HTML is good', function (done) {
		var n = document.getElementById('working');
		axe.run(n, function (err, result) {
			expect(err).toBe(null);
			expect(result.violations.length).toBe(0);
			done();
		});
	});

	it('should report that bad HTML is bad', function (done) {
		var n = document.getElementById('broken');
		axe.run(n, function (err, result) {
			expect(err).toBe(null);
			expect(result.violations.length).toBe(1);
			done();
		});
	});
});
```