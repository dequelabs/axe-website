---
layout: default
title: Using Axe with Mocha
---

This example demonstrates how to use aXe with the Mocha unit testing framework.

The code to be tested is in the `test/test.html` file. The HTML file includes it's unit test `test/a11y.js`. It has two test cases: One that shows the
expected results from HTML with no errors, and one that shows the expected
result from HTML with a single error.

Test file `test/test.html`
--------------------------

```html
<!DOCTYPE html>
<html lang="en">
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

Test file `test/a11y.js`
------------------------

```javascript
describe('axe', function () {
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

Install And Run
-----------------------

To Install:

*

To Run:

*

[Download this example on Github]()
