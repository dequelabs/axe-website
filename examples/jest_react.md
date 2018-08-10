
layout: page
title: Example Jest_react

[Back to integrations](/examples/)

# Jest + React README #

This example demonstrates how to use aXe to test React components using the 
Jest unit testing framework.

The unit test is in `link.test.js`, and has one test cases, showing how to run
axe-core in Jest (using JSDOM and Enzyme).

##

* Node must be installed; please follow the directions at http://www.nodejs.org
  to install it.
* Move to the `doc/examples/jest_react` directory
* `npm install` to install dependencies

## To run the example ##

* Move to the `doc/examples/jest_react` directory
* `npm test` to run Jasmine

You should see output indicating that the tests ran successfully, with zero
failures. 

Note: to work better with JSDOM (which has limited support for necessary DOM APIs),
the color-contrast and link-in-text-block rules have been disabled in this example.
You can test for these rules more reliably using full browser DOM integration
testing using [axe-webdriverjs](https://github.com/dequelabs/axe-webdriverjs).

## To modify the example ##

This example can be modified to test components in other test frameworks as well. To use axe-core with JSDOM (Like Jest does), you will need to ensure that JSDOM variables are made available on the global object. An easy way to do this is to use [jsdom-global](https://github.com/rstacruz/jsdom-global).

For example, when running Mocha, you should require `jsdom-global/register`. The command for this is as follows:

```shell
mocha *.test.js --require jsdom-global/register
```

## Timeout Issues ##

Axe-core is very fast for what it does, but when testing larger components, it may take a few seconds to complete. This is because axe will be running thousands of tests in a single call. When testing composite components, you may have to increase the timeout setting.


## package.json
```js:
{
  "name": "axe-jest-react-example",
  "description": "aXe Jest + React Example",
  "version": "0.0.1",
  "private": true,
  "author": {
    "name": "Wilco Fiers",
    "organization": "Deque Systems, Inc.",
    "url": "http://deque.com/"
  },
  "dependencies": {},
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "axe-core": "^3.0.1",
    "babel-jest": "^23.0.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "enzyme": "^3.3.0",
    "enzyme-adapter-react-16": "^1.1.1",
    "jest": "^22.4.0",
    "jest-cli": "^23.0.1",
    "react": "^16.4.0",
    "react-dom": "^16.4.0",
    "react-test-renderer": "^16.2.0"
  }
}

```

## .babelrc
```:
{
  "presets": ["es2015", "react"]
}
```

## link.js
```js:
import React from 'react';

export default class Link extends React.Component {
  render() {
    return (
      <a href={this.props.page || '#'}>
        {this.props.children}
      </a>
    );
  }
};

```

## link.test.js
```js:
import React from 'react';
import axe from 'axe-core';
import { mountToDoc } from './test-helpers';

import Link from './Link';

test('Link has no aXe violations', (done) => {
  const linkComponent = mountToDoc(
    <Link page="http://www.axe-core.org">aXe website</Link>
  );
  const linkNode = linkComponent.getDOMNode();

  const config = {
    "rules": {
      "color-contrast": { enabled: false },
      "link-in-text-block": { enabled: false }
    }
  }
  axe.run(linkNode, config, (err, { violations }) => {
    expect(err).toBe(null);
    expect(violations).toHaveLength(0);
    done();
  });
});

```

## test-helpers.js
```js:
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let wrapper
export function mountToDoc (reactElm) {
  if (!document) {
    // Set up a basic DOM
    global.document = jsdom('<!doctype html><html><body></body></html>')
  }
  if (!wrapper) {
    wrapper = document.createElement('main')
    document.body.appendChild(wrapper)
  }

  const container = mount(reactElm)
  wrapper.innerHTML = ''
  wrapper.appendChild(container.getDOMNode())
  return container
}

```

