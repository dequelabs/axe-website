---
layout: page
title: Easy Accessibility Testing with aXe
---
<div><a href="https://github.com/dequelabs/axe-core" target="_blank" class="fork" title="Fork me on GitHub"><img src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></a></div>

## How do I get started?
The quickest way to pick up the aXe, is by using the extensions, available for Chrome and Firefox. For developers, we recommend installing axe-core directly and using it in your projects.

<div class="allblocks">
	<div class="browser"><h3>aXe Browser Extensions</h3></div>
	<div class="block integration">
		<a class="dqpl-link" href="https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd"  target="_blank">
			<span>
				<img src="../assets/images/chrome.png" alt="" class="examplelogo">
		    aXe for Chrome
		  </span>
	  </a>
	</div>

	<div class="block integration">
		<a class="dqpl-link" href="https://addons.mozilla.org/en-us/firefox/addon/axe-devtools/"  target="_blank">
			<span>
				<img src="../assets/images/firefox.png" alt="" class="examplelogo">
				aXe for Firefox 54+
			</span>
		</a>	
	</div>
	<p>Using Firefox ~53, or NVDA with Firefox? Install our <a href="./install-xpi.html">legacy addon</a>.</p>
</div>



## How easy is aXe to use?
To download the module, make sure you have Node.js installed and are sitting in the root directory of your project, and execute the following command:

<div class="highlighter-rouge language-bash">
<pre><code>
npm install axe-core --save-dev

</code></pre>
</div>

Then include the JavaScript file in your test fixtures:

<div class="highlighter-rouge language-html">
<pre><code>
&lt;script src="node_modules/axe-core/axe.min.js">&lt;/script>

</code></pre>
</div>

Finally, make calls to the accessibility checker function at the appropriate points in your functional tests:

<div class="highlighter-rouge language-javascript">
<pre><code>
axe.run(document, function (error, results) {
  ok(results.violations.length === 0, 'Should be no accessibility issues');
  // complete the async call
  ...
});

</code></pre>
</div>

## Want more?

If you want a more in-depth view of what aXe can do and how you can start performing automated accessibility tests today, check out our our recorded webinar <a href="https://www.youtube.com/watch?v=C1d278Inrl4" class="dqpl-link" target="_blank">Creating Accessible Web Applications with aXe</a>.

<div class="responsive-iframe">
	<div>
		<iframe width="600" height="400" src="https://www.youtube.com/embed/C1d278Inrl4" frameborder="0" allowfullscreen title="Webinar Creating Accessible Web Applications with aXe"></iframe>
	</div>
</div>

## aXe Repository
You can download the source code from our <a class="dqpl-link" href="https://github.com/dequelabs/axe-core"  alt="" target="_blank">GitHub repository</a> where you can also fork, customize, extend and contribute.
