---
layout: page
title: Getting Started with Axe-core
---

<!-- including screencasts, links to Deque U. examples with aXe analysis -->


## How do I get started?

<div class="allblocks">
	<div class="block">
		<a href="https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd"><img src="../assets/images/chrome.png" alt="" class="examplelogo">
	  	<br/>
	    <br/>
	    aXe for Chrome
	  </a>
	</div>

	<div class="block">
		<a href="https://addons.mozilla.org/en-us/firefox/addon/axe-devtools/"><img src="../assets/images/firefox.png" alt="" class="examplelogo"> 
			<br/>
			<br/>
			aXe for Firefox
		</a>	
	</div>
</div>

<div class="browser">aXe Browser Extensions</div>


## How easy is aXe to use?
To download the module, make sure you have Node.js installed and are sitting in the root directory of your project, and execute the following command:

```javascript
npm install axe-core --save-dev
```

Then include the JavaScript file in your test fixtures:

```javascript
<script src="node_modules/axe-core/axe.min.js"></script>
```

Finally, make calls to the accessibility checker function at the appropriate points in your functional tests:

```javascript
axe.a11yCheck(document, function (results) {
  ok(results.violations.length === 0, 'Should be no accessibility issues');
  // complete the async call
  ...
});
```

## What more?

If you want a more in-depth view of what aXe can do and how you can start performing automated accessibility tests today, check out our our recorded webinar ‘Creating Accessible Web Applications with aXe’.

<iframe width="600" height="400" src="https://www.youtube.com/embed/C1d278Inrl4" frameborder="0" allowfullscreen></iframe>

## aXe Repository
You can download the source code from our [GitHub repository](https://github.com/dequelabs/axe-core) where you can also fork, customize, extend and contribute.
