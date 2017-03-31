---
layout: page
title: About aXe
---
<!-- Manifesto, About Deque and Deque products -->

The Accessibility Engine for automated testing of HTML-based user interfaces. Drop the aXe on your accessibility defects!

## Philosophy

We believe that automated testing has an important role to play in achieving digital equality and that in order to do that, it must achieve mainstream adoption by professional web developers. That means that the tests must inspire trust, must be fast, must work everywhere and must be available everywhere.

## Manifesto

- Automated accessibility testing rules must have a zero false-positive rate
- Automated accessibility testing rules must be lightweight and fast
- Automated accessibility testing rules must work in all modern browsers
- Automated accessibility testing rules must, themselves, be tested automatically

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

_This means…_ you can be sure that aXe will support your needs and your infrastructure as it is today and as it evolves over time.

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

_This means…_ you can integrate accessibility testing into your existing functional tests and catch accessibility issues before they make it into your code master.

## What aXe doesn’t have:
* Network connection latency – zero!
* Failure modes due to connectivity or cloud server performance issues – none!
* Monthly, or daily usage limits – nada!  

_This means…_ you can run your accessibility tests instantly with gulp watch, grunt watch or test and integrate them into your Travis.ci pull request builds.

## Getting Started

The quickest way to pick up the aXe, is by using the extensions, available for <a class="dqpl-link" href="https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd/">Chrome</a> <a class="dqpl-link" href="https://addons.mozilla.org/en-us/firefox/addon/axe-devtools/">Firefox</a>. For developers, we recommend installing axe-core directly and <a class="dqpl-link" href="/index/#how-easy-is-axe-to-use">using it in your projects</a>.


