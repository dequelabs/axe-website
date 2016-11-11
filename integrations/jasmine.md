---
layout: default
title: Using Axe With Jasmine
---

This example demonstrates how to use aXe with the Jasmine unit testing framework.

The unit test is in `spec/a11y.js`, and has two test cases: One that shows the
expected results from HTML with no errors, and one that shows the expected
result from HTML with a single error.

Test file `spec/a11y.js`
------------------------

```javascript
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
		axe.a11yCheck(n, function (result) {
			expect(result.violations.length).toBe(0);
			done();
		});
	});

	it('should report that bad HTML is bad', function (done) {
		var n = document.getElementById('broken');
		axe.a11yCheck(n, function (result) {
			expect(result.violations.length).toBe(1);
			done();
		});
	});
});
```

Install And Run
-----------------------

To Install:

* Node must be installed; please follow the directions at http://www.nodejs.org
  to install it.
* `npm install -g grunt-cli` to install the Grunt task runner (may need to be
  run with `sudo` on Unix or as Administrator on Windows)
* `npm install axe-core grunt grunt-contrib-jasmine`

To Run:

* `grunt jasmine` to run Jasmine

[Download this example on Github](https://github.com/dequelabs/axe-core/tree/master/doc/examples/jasmine)
