---
layout: page
title: Example Selenium
---
[Back to integrations](/examples/)



This example demonstrates how to use aXe with the Selenium browser automation
tool and Node development tools.

Selenium integration enables testing of full pages and sites.

## To configure the example ##

* Node must be installed; please follow the directions at http://www.nodejs.org
  to install it.
* Firefox must be installed; please follow the directions at http://getfirefox.com
  to install it. On Unix, ensure that Firefox is on your path.
* `npm install -g grunt-cli` to install the Grunt task runner (may need to be
  run with `sudo` on Unix or as Administrator on Windows)
* Move to the `doc/examples/selenium` directory
* `npm install` to install dependencies

## To run the example ##

* Move to the `doc/examples/selenium` directory
* `grunt test` to run Selenium

This should launch an automated Firefox window, load and analyze the
configured web pages, and then output aXe test results to JSON
files, one per URL.

## To modify the example ##

To run the example on your own web pages, edit Gruntfile.js. The `urls`
property of the ks-selenium task controls which URLs the example will run on,
so simply edit that property to put in the URLs you wish to test.

The example is simply logging the analysis results to files.  The aXe
documentation should be consulted for more details on customizing and
analyzing calls to `axe.run`.


## package.json
```js:
{
  "name": "axe-webdriverjs-example",
  "description": "aXe WebDriverJS Example",
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
    "axe-webdriverjs": "^0.1.0",
    "grunt": "~0.4.5",
    "selenium-webdriver": "~2.46.1"
  }
}

```

## Gruntfile.js
```js:
module.exports = function (grunt) {
	'use strict';
	grunt.loadTasks('build/tasks');

	grunt.initConfig({
		'axe-selenium': {
			urls: [
				'https://github.com/dequelabs/axe-core'
			]
		}
	});

	grunt.registerTask('test', ['axe-selenium']);
};

```

## build/tasks/axe-selenium.js
```js:
/*jshint node: true */
'use strict';

var WebDriver = require('selenium-webdriver'),
	axeBuilder = require('axe-webdriverjs');

module.exports = function (grunt) {
	grunt.registerMultiTask('axe-selenium', function () {

		var done = this.async(),
			count = this.data.length;

		var driver = new WebDriver.Builder()
			.forBrowser('firefox')
			.build();

		driver.manage().timeouts().setScriptTimeout(10000);

		this.data.forEach(function (testUrl) {
			driver.get(testUrl)
				.then(function () {
					axeBuilder(driver)
						.analyze(function (result) {
							grunt.file.write(result.url.replace(/[^a-z0-9]/gi, '-')
								.replace(/-{2,}/g, '-').replace(/^-|-$/g, '').toLowerCase() + '.json',
								JSON.stringify(result, null, '  '));

							if (!--count) {
								driver.quit();
								done(result.violations.length === 0);
							}
						});
					});
				});
	});
};

```

