---
layout: page
title: Easy Accessibility Testing with aXe
---

<!-- including screencasts, links to Deque U. examples with aXe analysis -->

<a href="https://github.com/dequelabs/axe-core" target="_blank" title="Fork me on GitHub"><img style="position: absolute; top: 80px; right: 0; border: 0;" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></a>

## How do I get started?

<div class="allblocks">
	<div class="block integration">
		<a href="https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd"><img src="../assets/images/chrome.png" alt="" class="examplelogo">
	  	<br/>
	    <br/>
	    aXe for Chrome
	  </a>
	</div>

	<div class="block integration">
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

<iframe width="600" height="400" src="https://www.youtube.com/embed/C1d278Inrl4" frameborder="0" allowfullscreen title="Webinar Creating AccessibleWeb Applications with aXe"></iframe>

## aXe Repository
You can download the source code from our [GitHub repository](https://github.com/dequelabs/axe-core) where you can also fork, customize, extend and contribute.
