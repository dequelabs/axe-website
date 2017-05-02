---
layout: page
title: Example Mocha
---
[Back to integrations](/examples/)



This example demonstrates how to use aXe with the Mocha unit testing framework.

The unit test is in `test/a11y.js`, and has two test cases: One that shows the
expected results from HTML with no errors, and one that shows the expected
result from HTML with a single error.

## To configure the example ##

* Node must be installed; please follow the directions at http://www.nodejs.org
  to install it.
* `npm install -g grunt-cli` to install the Grunt task runner (may need to be
  run with `sudo` on Unix or as Administrator on Windows)
* Move to the `doc/examples/mocha` directory
* `npm install` to install dependencies

## To run the example ##

* Move to the `doc/examples/mocha` directory
* `grunt mocha` to run Mocha

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
should be consulted for more details on customizing and
analyzing calls to `axe.run`.


## package.json
```js:
{
  "name": "axe-mocha-example",
  "description": "aXe Mocha Example",
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
    "grunt-mocha": "~0.4.10",
    "chai": "~1.9.1"
  }
}

```

## Gruntfile.js
```js:
module.exports = function (grunt) {
	'use strict';

	grunt.loadNpmTasks('grunt-mocha');

	grunt.initConfig({
		mocha: {
			test: {
				src: ['test/**/*.html'],
				options: {
					run: true
				}
			}
		}
	});
};
```

## test/a11y.js
```js:
/* global describe, it, expect, axe, document */

describe('axe', function () {
	'use strict';

	it('should report that good HTML is good', function (done) {
		var n = document.getElementById('working');
		axe.run(n, function (err, result) {
			expect(err).to.be.null();
			expect(result.violations.length).to.equal(0);
			done();
		});
	});

	it('should report that bad HTML is bad', function (done) {
		var n = document.getElementById('broken');
		axe.run(n, function (err, result) {
			expect(err).to.be.null();
			expect(result.violations.length).to.equal(1);
			done();
		});
	});
});

```

## test/test.html
```html:
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Example Mocha Test</title>
	<link rel="stylesheet" href="../node_modules/grunt-mocha/node_modules/mocha/mocha.css" type="text/css" charset="utf-8" />
</head>
<body>
	<!-- Required for browser reporter -->
	<div id="mocha"></div>

	<script src="../node_modules/grunt-mocha/node_modules/mocha/mocha.js" type="text/javascript" charset="utf-8"></script>
	<script src="../node_modules/chai/chai.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript" charset="utf-8">
		mocha.setup('bdd');
		var expect = chai.expect;
	</script>

	<!-- Include aXe -->
	<script src="../node_modules/axe-core/axe.min.js" type="text/javascript" charset="utf-8"></script>

	<!-- Spec files -->
	<script src="a11y.js" type="text/javascript" charset="utf-8"></script>
	<div id="working">
		<label for="labelfld">Label for this text field.</label>
		<input type="text" id="labelfld">
	</div>
	<div id="broken">
		<p>Label for this text field.</p>
		<input type="text" id="nolabelfld">
	</div>
</body>
</html>

```

