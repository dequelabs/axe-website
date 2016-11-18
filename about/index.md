---
layout: default
---
<!-- Manifesto, About Deque and Deque products -->

## What is aXe?
Deque System’s aXe (The Accessibility Engine) open source library is a lightweight (~100 KB), fast, portable JavaScript library that executes automated accessibility testing inside your testing framework or browser of choice.

Re-written from scratch over the last year, leveraging 15 years of accessibility experience, these rules represent the state of the art in automated accessibility testing.

  * Have you automated a large amount of your functional testing, but accessibility is being done in an ad-hoc fashion?
  * Have you automated accessibility testing but the service you are using has high latency, requires external access to your development server or requires you to send the HTML to a server for evaluation, compromising security and privacy?
  * Did you disable accessibility assertions because of a high number of false positives and duplicates?
  * Do you have to wade through reams of accessibility issues that have nothing to do with the feature you are developing before you get to the relevant items?
  * aXe helps you catch accessibility issues early, driving down the cost and frustration of creating accessible Web applications. You can start enjoying the new way of building in accessibility testing into your code with aXe  – your Accessibility Engine.

aXe runs on your local development server in the same browser as your functional or unit tests – making your test execution lightning fast, confidential and secure – unlike web service based testing services.

## aXe supports:
* All modern browsers
* Dynamically created DOM fixtures inside unit tests
* Integration and acceptance testing
* Cross-domain iframes of infinite depth (constrained only by memory)  

  **This means…** you can be sure that aXe will support your needs and your infrastructure as it is today and as it evolves over time.

## aXe integrates with:
* Chrome developer tools extension
* Karma
* QUnit
* Jasmine
* Mocha
* R-Spec
* Cucumber
* Selenium Java
* Selenium JavaScript
* PhantomJS
* and any testing framework that supports JavaScript execution  

  **This means…** you can integrate accessibility testing into your existing functional tests and catch accessibility issues before they make it into your code master.

## What aXe doesn’t have:
* Network connection latency – zero!
* Failure modes due to connectivity or cloud server performance issues – none!
* Monthly, or daily usage limits – nada!  

  **This means…** you can run your accessibility tests instantly with gulp watch, grunt watch or testem and integrate them into your Travis.ci pull request builds.

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

## How do I get started?
If you want a more in-depth view of what aXe can do and how you can start performing automated accessibility tests today, check out our our recorded webinar ‘Creating Accessible Web Applications with aXe’.

<iframe width="600" height="400" src="https://www.youtube.com/embed/C1d278Inrl4" frameborder="0" allowfullscreen></iframe>

## aXe Repository
You can download the source code from our [GitHub repository](https://github.com/dequelabs/axe-core) where you can also fork, customize, extend and contribute.

## aXe Integrations
* [aXe for Selenium – Java Integration](https://github.com/dequelabs/axe-selenium-java)
* [aXe for Selenium – JavaScript Integration](https://github.com/dequelabs/axe-webdriverjs)
* [aXe Cucumber Integration Source](https://github.com/dequelabs/axe-matchers)
* [aXe Cucumber Integration Built Gem](https://rubygems.org/gems/axe-matchers/)

## aXe Browser Extensions
* [aXe for Chrome](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd)
* [aXe for Firefox](https://addons.mozilla.org/en-us/firefox/addon/axe-devtools/)