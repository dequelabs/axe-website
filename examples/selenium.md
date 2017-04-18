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
analyzing calls to `axe.a11yCheck`.


## package.json
<pre><code class="highlight language-javascript">
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

</code></pre>

## Gruntfile.js
<pre><code class="highlight language-javascript">
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

</code></pre>

