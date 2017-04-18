(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var classes = require('component-classes');
var query = require('component-query');
var data = require('dataset');

var HIDDEN_CLASS = 'hidden';
var SHOW = 'Show ';
var HIDE = 'Hide ';

module.exports = initAreas;

/**
 * Finds all area-trigger anchors and their corresponding areas.
 * Then binds events handlers to toggle area visibility and
 * insert text content into the trigger.
 *
 * Requires that anchors have the following 3 attributes:
 * 	 1. class="area-trigger"
 * 	 2. data-area="[id_of_expandable_area]"
 * 	 3. data-text="[trigger's_visible_text]"
 * 	    (ex: a value of "Names" will toggle "Show Names" and "Hide Names")
 */

function initAreas() {
  var triggers = query.all('.area-trigger');

  [].slice.call(triggers).forEach(function (trigger) {
    var text = data(trigger, 'text');
    var textSpan = document.createElement('span');
    textSpan.innerHTML = text;

    var stateSpan = document.createElement('span');
    classes(stateSpan).add('state');
    stateSpan.innerHTML = SHOW;

    trigger.appendChild(stateSpan);
    trigger.appendChild(textSpan);

    var areaId = data(trigger, 'area');
    var area = document.getElementById(areaId);
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', areaId);
    bindEvents(trigger, area);
  });
}

function bindEvents(trigger, area) {
  trigger.addEventListener('click', function () {
    var state = classes(area).toggle(HIDDEN_CLASS).has(HIDDEN_CLASS);
    var stateEl = query('span.state', trigger);
    stateEl.innerHTML = state ? SHOW : HIDE;
    trigger.setAttribute('aria-expanded', !state);
  });
}

},{"component-classes":51,"component-query":53,"dataset":54}],2:[function(require,module,exports){
'use strict';

var classes = require('component-classes');
var query = require('component-query');

var HIDDEN_CLASS = 'hidden';
var RULE = 'rule';
var CHECK = 'check';

var fixture = query('#fixture');
var presetAreas = query.all('.presets');
var ruleSelect = query('#rule-presets');
var checkSelect = query('#check-presets');
var applyPresetBtn = query('#apply-preset');
var markupArea = query('#markup textarea');
var renderBtn = query('#render');
var configArea = query('#playground-config');
var analyzeBtn = query('#analyze');
var resultsTextbox = query('#axe-results');
var changeOptsBtn = query('#change-options');

var selectedType = RULE;

/**
 * Initialize expandable areas.
 */

require('./areas')();

/**
 * Map example snippets to fixture presets.
 */

var examples = {
  rule: {
    'accesskeys': require('../examples/rules/accesskeys.js'),
    'area-alt': require('../examples/rules/area-alt.js'),
    'aria-allowed-attr': require('../examples/rules/aria-allowed-attr.js'),
    'aria-required-attr': require('../examples/rules/aria-required-attr.js'),
    'aria-required-children': require('../examples/rules/aria-required-children.js'),
    'aria-required-parent': require('../examples/rules/aria-required-parent.js'),
    'aria-roles': require('../examples/rules/aria-roles.js'),
    'aria-valid-attr-value': require('../examples/rules/aria-valid-attr-value.js'),
    'aria-valid-attr': require('../examples/rules/aria-valid-attr.js'),
    'audio-caption': require('../examples/rules/audio-caption.js'),
    'blink': require('../examples/rules/blink.js'),
    'button-name': require('../examples/rules/button-name.js'),
    'bypass': require('../examples/rules/bypass.js'),
    'checkboxgroup': require('../examples/rules/checkboxgroup.js'),
    'color-contrast': require('../examples/rules/color-contrast.js'),
    'data-table': require('../examples/rules/data-table.js'),
    'definition-list': require('../examples/rules/definition-list.js'),
    'dlitem': require('../examples/rules/dlitem.js'),
    'document-title': require('../examples/rules/document-title.js'),
    'duplicate-id': require('../examples/rules/duplicate-id.js'),
    'empty-heading': require('../examples/rules/empty-heading.js'),
    'frame-title': require('../examples/rules/frame-title.js'),
    'heading-order': require('../examples/rules/heading-order.js'),
    'html-lang': require('../examples/rules/html-lang.js'),
    'image-alt': require('../examples/rules/image-alt.js'),
    'input-image-alt': require('../examples/rules/input-image-alt.js'),
    'label-title-only': require('../examples/rules/label-title-only.js'),
    'label': require('../examples/rules/label.js'),
    'layout-table': require('../examples/rules/layout-table.js'),
    'link-name': require('../examples/rules/link-name.js'),
    'list': require('../examples/rules/list.js'),
    'listitem': require('../examples/rules/listitem.js'),
    'marquee': require('../examples/rules/marquee.js'),
    'meta-refresh': require('../examples/rules/meta-refresh.js'),
    'meta-viewport': require('../examples/rules/meta-viewport.js'),
    'object-alt': require('../examples/rules/object-alt.js'),
    'radiogroup': require('../examples/rules/radiogroup.js'),
    'region': require('../examples/rules/region.js'),
    'scope': require('../examples/rules/scope.js'),
    'server-side-image-map': require('../examples/rules/server-side-image-map.js'),
    'skip-link': require('../examples/rules/skip-link.js'),
    'tabindex': require('../examples/rules/tabindex.js'),
    'valid-lang': require('../examples/rules/valid-lang.js'),
    'video-caption': require('../examples/rules/video-caption.js'),
    'video-description': require('../examples/rules/video-description.js')
  },
  check: {
    'cell-no-header': require('../examples/checks/cell-no-header.js'),
    'headers-visible-text': require('../examples/checks/headers-visible-text.js'),
    'th-single-row-column': require('../examples/checks/th-single-row-column.js')
  }
};

/**
 * Removes preset options that don't have snippets.
 */

var ruleOptions = query.all('option', ruleSelect);
var checkOptions = query.all('option', checkSelect);

[].slice.call(ruleOptions).forEach(function (optionEl) {
  if (!examples.rule[optionEl.value]) {
    ruleSelect.removeChild(optionEl);
  }
});

[].slice.call(checkOptions).forEach(function (optionEl) {
  if (!examples.check[optionEl.value]) {
    checkSelect.removeChild(optionEl);
  }
});

/**
 * Clicks on the 'Apply Selected Preset' button:
 *  - Update the Edit HTML textarea
 * 	- Re-render the fixture
 *  - Analyze the fixture and update the results
 */

applyPresetBtn.addEventListener('click', function () {
  var selectEl = selectedType == CHECK ? checkSelect : ruleSelect;
  var val = ruleSelect.querySelector('.dqpl-option-active').getAttribute('value');
  fixture.innerHTML = examples[selectedType][val];
  markupArea.value = fixture.innerHTML;
});

/**
 * Clicks on the 'Render Markup' button:
 *  - Re-render the fixture using the current markup
 *  - Analyze the fixture and update the results
 */
if (renderBtn) {
  renderBtn.addEventListener('click', function () {
    fixture.innerHTML = markupArea.value;
    analyze();
  });
}

/**
 * Clicks on the 'Analyze' button run aXe on the existing fixture.
 */
if (analyzeBtn) {
  analyzeBtn.addEventListener('click', function () {
    analyze();
  });
}

/**
 * Set and apply default aXe options.
 */

var defaultOpts = '{\n\
 "runOnly": {\n\
  "type": "tag",\n\
  "values": ["wcag2a", "wcag2aa"]\n\
 },\n\
 "checks": {\n\
  "skip-link": {"enabled": true}\n\
 }\n\
}';
configArea.value = defaultOpts;
var options = JSON.parse(defaultOpts)

/**
 * Apply default values to HTML and Render Fixture areas.
 */

var selectedRuleEl = document.querySelector('#rule-presets option[default-selected]');
if (selectedRuleEl) {
  fixture.innerHTML = examples.rule[selectedRuleEl.value];
} else {
  fixture.innerHTML = examples.rule['image-alt'];
}
markupArea.value = fixture.innerHTML;

if (changeOptsBtn) {
  changeOptsBtn.addEventListener('click', function () {
    try {
      var optsVal = configArea.value
      options = optsVal.length ? JSON.parse(optsVal) : {};
      fixture.innerHTML = markupArea.value;
    } catch (e) {
      console.error(e);
      resultsTextbox.innerHTML = "Unable to parse options. Ensure that options is valid JSON.";
      return;
    }
    // wait for the lightbox to close
    setTimeout(function () {
      fixture.innerHTML = markupArea.value;
      analyze();
    }, 10)
  });

}


/**
 * Run aXe on the text fixture.
 */
window.analyze = function () {
  axe.a11yCheck('#fixture', options, function (res) {
    var str = JSON.stringify(res.violations, null, 2);
    resultsTextbox.innerHTML = safeTags(str);
    resultsTextbox.scrollIntoView();
    if (Prism) {
      Prism.highlightAll();
    }
  });
};

/**
 * Converts HTML chars for printing in HTML.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function safeTags(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

},{"../examples/checks/cell-no-header.js":3,"../examples/checks/headers-visible-text.js":4,"../examples/checks/th-single-row-column.js":5,"../examples/rules/accesskeys.js":6,"../examples/rules/area-alt.js":7,"../examples/rules/aria-allowed-attr.js":8,"../examples/rules/aria-required-attr.js":9,"../examples/rules/aria-required-children.js":10,"../examples/rules/aria-required-parent.js":11,"../examples/rules/aria-roles.js":12,"../examples/rules/aria-valid-attr-value.js":13,"../examples/rules/aria-valid-attr.js":14,"../examples/rules/audio-caption.js":15,"../examples/rules/blink.js":16,"../examples/rules/button-name.js":17,"../examples/rules/bypass.js":18,"../examples/rules/checkboxgroup.js":19,"../examples/rules/color-contrast.js":20,"../examples/rules/data-table.js":21,"../examples/rules/definition-list.js":22,"../examples/rules/dlitem.js":23,"../examples/rules/document-title.js":24,"../examples/rules/duplicate-id.js":25,"../examples/rules/empty-heading.js":26,"../examples/rules/frame-title.js":27,"../examples/rules/heading-order.js":28,"../examples/rules/html-lang.js":29,"../examples/rules/image-alt.js":30,"../examples/rules/input-image-alt.js":31,"../examples/rules/label-title-only.js":32,"../examples/rules/label.js":33,"../examples/rules/layout-table.js":34,"../examples/rules/link-name.js":35,"../examples/rules/list.js":36,"../examples/rules/listitem.js":37,"../examples/rules/marquee.js":38,"../examples/rules/meta-refresh.js":39,"../examples/rules/meta-viewport.js":40,"../examples/rules/object-alt.js":41,"../examples/rules/radiogroup.js":42,"../examples/rules/region.js":43,"../examples/rules/scope.js":44,"../examples/rules/server-side-image-map.js":45,"../examples/rules/skip-link.js":46,"../examples/rules/tabindex.js":47,"../examples/rules/valid-lang.js":48,"../examples/rules/video-caption.js":49,"../examples/rules/video-description.js":50,"./areas":1,"component-classes":51,"component-query":53}],3:[function(require,module,exports){
"use strict";

module.exports = "<table>\n  <thead>\n    <tr>\n      <td>First</td>\n      <td>Last</td>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Jerry</td>\n      <td>Seinfeld</td>\n    </tr>\n  </tbody>\n</table>";

},{}],4:[function(require,module,exports){
"use strict";

module.exports = "<table>\n  <thead>\n    <tr>\n      <th scope=\"col\">First</th>\n      <th scope=\"col\" style=\"display: none;\">Last</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Jerry</td>\n      <td>Seinfeld</td>\n    </tr>\n  </tbody>\n</table>";

},{}],5:[function(require,module,exports){
"use strict";

module.exports = "<table>\n  <thead>\n    <tr>\n      <th scope=\"col\" rowspan=\"2\">ID</th>\n      <th scope=\"col\" rowspan=\"2\">DOB</th>\n      <th scope=\"col\">First</th>\n      <th scope=\"col\">Last</th>\n    </tr>\n    <tr>\n      <th scope=\"col\" colspan=\"2\">Name</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>1</th>\n      <td>04/13/1949</th>\n      <td>Christopher</th>\n      <td>Hitchens</th>\n    </tr>\n    <tr>\n      <td>2</th>\n      <td>04/09/1967</th>\n      <td>Sam</th>\n      <td>Harris</th>\n    </tr>\n  </tbody>\n</table>";

},{}],6:[function(require,module,exports){
"use strict";

module.exports = "<div>\n  <label>\n    <span>N<u>a</u>me</span>\n    <input type=\"text\" name=\"name\" accesskey=\"a\" />\n  </label>\n</div>\n<div>\n  <label>\n    <span><u>E</u>mail</span>\n    <input type=\"email\" name=\"email\" accesskey=\"e\" />\n  </label>\n</div>\n<div>\n  <button accesskey=\"a\">C<u>a</u>ncel</button>\n</div>";

},{}],7:[function(require,module,exports){
"use strict";

module.exports = "<img src=\"/build/axe/images/solar-system.jpg\" alt=\"Solar System\" width=\"472\" height=\"800\"\nusemap=\"#map\">\n<map id=\"map\" name=\"map\">\n  <area shape=\"rect\" coords=\"115,158,276,192\"\n  href=\"http://en.wikipedia.org/wiki/Mercury_%28planet%29\" alt=\"Mercury\">\n  <area shape=\"rect\" coords=\"115,193,276,234\"\n  href=\"http://en.wikipedia.org/wiki/Venus\" alt=\"Venus\">\n  <area shape=\"rect\" coords=\"118,235,273,280\"\n  href=\"http://en.wikipedia.org/wiki/Earth\">\n  <area shape=\"rect\" coords=\"119,280,272,323\"\n  href=\"http://en.wikipedia.org/wiki/Mars\" alt=\"Mars\">\n  <area shape=\"rect\" coords=\"119,324,322,455\"\n  href=\"http://en.wikipedia.org/wiki/Jupiter\" alt=\"Jupiter\">\n  <area shape=\"rect\" coords=\"118,457,352,605\"\n  href=\"http://en.wikipedia.org/wiki/Saturn\" alt=\"Saturn\">\n  <area shape=\"rect\" coords=\"119,606,308,666\"\n  href=\"http://en.wikipedia.org/wiki/Uranus\" alt=\"Uranus\">\n  <area shape=\"rect\" coords=\"117,664,305,732\"\n  href=\"http://en.wikipedia.org/wiki/Neptune\" alt=\"Neptune\">\n</map>";

},{}],8:[function(require,module,exports){
"use strict";

module.exports = "<label>\n  <span>Name</span>\n  <input type=\"text\" aria-expanded=\"false\">\n</label>";

},{}],9:[function(require,module,exports){
"use strict";

module.exports = "<label>\n  <span>Name</span>\n  <input type=\"text\" role=\"combobox\">\n</label>";

},{}],10:[function(require,module,exports){
"use strict";

module.exports = "<div role=\"list\">\n  <div>One</div>\n  <div>Two</div>\n</div>";

},{}],11:[function(require,module,exports){
"use strict";

module.exports = "<div>\n  <div role=\"listitem\">One</div>\n  <div role=\"listitem\">Two</div>\n</div>";

},{}],12:[function(require,module,exports){
"use strict";

module.exports = "<div role=\"peanut\">My role is invalid!</div>\n<div role=\"window\">My role is abstract!</div>";

},{}],13:[function(require,module,exports){
"use strict";

module.exports = "<label>\n  <span>Name</span>\n  <input type=\"text\" aria-describedby=\"false\">\n</label>";

},{}],14:[function(require,module,exports){
"use strict";

module.exports = "<button aria-cancel=\"true\">Cancel</button>";

},{}],15:[function(require,module,exports){
"use strict";

module.exports = "<audio controls=\"true\">\n  <!-- 'src' attribute value empty for example purposes -->\n  <source src=\"\" type=\"audio/mp4\">\n</audio>";

},{}],16:[function(require,module,exports){
"use strict";

module.exports = "<p><blink>Buy Now!</blink></p>";

},{}],17:[function(require,module,exports){
"use strict";

module.exports = "<button type=\"button\"></button>";

},{}],18:[function(require,module,exports){
"use strict";

module.exports = "<!--\nSorry, the 'bypass' rule\nrequires a full-page test target.\n-->";

},{}],19:[function(require,module,exports){
"use strict";

module.exports = "<div>Numbers</div>\n<div>\n  <input id=\"inputOne\" type=\"checkbox\" name=\"numbers\" checked=\"true\">\n  <label for=\"inputOne\">One</label>\n</div>\n<div>\n  <input id=\"inputTwo\" type=\"checkbox\" name=\"numbers\">\n  <label for=\"inputTwo\">Two</label>\n</div>\n<div>\n  <input id=\"inputThree\" type=\"checkbox\" name=\"numbers\">\n  <label for=\"inputThree\">Three</label>\n</div>";

},{}],20:[function(require,module,exports){
"use strict";

module.exports = "<style>\n  div.contrast {\n    background-color: #eee;\n    color: #ccc;\n    padding: 0.5em;\n    text-align: center;\n  }\n</style>\n<div class=\"contrast\">\n  <p>Misty</p>\n</div>";

},{}],21:[function(require,module,exports){
"use strict";

module.exports = "<table>\n  <thead>\n    <tr>\n      <td rowspan=\"2\">Species</td>\n      <td colspan=\"2\">Info</td>\n    </tr>\n    <tr>\n      <th>Name</th>\n      <th>Age</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Gorilla</td>\n      <td>Koko</td>\n      <td>44</td>\n    </tr>\n    <tr>\n      <td>Human</td>\n      <td>Matt</td>\n      <td>33</td>\n    </tr>\n  </tbody>\n</table>";

},{}],22:[function(require,module,exports){
"use strict";

module.exports = "<dl>\n  <h4>Fun Words</h4>\n  <dt>Gumption</dt>\n  <dd>Shrewd or spirited initiative and resourcefulness.</dd>\n  <dt>Gravitas</dt>\n  <dd>Dignity, seriousness, or solemnity of manner.</dd>\n</dl>";

},{}],23:[function(require,module,exports){
"use strict";

module.exports = "<h4>Fun Words</h4>\n<div>\n  <dt>Gumption</dt>\n  <dd>Shrewd or spirited initiative and resourcefulness.</dd>\n  <dt>Gravitas</dt>\n  <dd>Dignity, seriousness, or solemnity of manner.</dd>\n</div>";

},{}],24:[function(require,module,exports){
"use strict";

module.exports = "<!--\nSorry, the 'document-title' rule\nrequires a full-page test target.\n-->";

},{}],25:[function(require,module,exports){
"use strict";

module.exports = "<p id=\"para\">First paragraph.</p>\n<p id=\"para\">Second paragraph.</p>";

},{}],26:[function(require,module,exports){
"use strict";

module.exports = "<h3>\n  <span style=\"display: none;\">Heading Text</span>\n</h3>";

},{}],27:[function(require,module,exports){
"use strict";

module.exports = "<iframe src=\"generic-frame-content.html\"></iframe>";

},{}],28:[function(require,module,exports){
"use strict";

module.exports = "<h3>Level 3</h3>\n<h5>Level 5</h5>";

},{}],29:[function(require,module,exports){
"use strict";

module.exports = "<!--\nSorry, the 'html-lang' rule\nrequires a full-page test target.\n-->";

},{}],30:[function(require,module,exports){
"use strict";

module.exports = "<img src=\"/build/axe/images/solar-system.jpg\" />";

},{}],31:[function(require,module,exports){
"use strict";

module.exports = "<input type=\"image\" src=\"/build/axe/images/cancel-button.png\" style=\"height: 60px;\"/>";

},{}],32:[function(require,module,exports){
"use strict";

module.exports = "<div>\n  <label>Name</label>\n  <input type=\"text\" title=\"Name\"/>\n</div>\n<div>\n  <label id=\"emailLabel\">Email</label>\n  <input type=\"email\" aria-describedby=\"emailLabel\"/>\n</div>";

},{}],33:[function(require,module,exports){
"use strict";

module.exports = "<span>Name</span>\n<input type=\"text\"/>";

},{}],34:[function(require,module,exports){
"use strict";

module.exports = "<table role=\"presentation\" summary=\"A layout table\">\n  <caption>A layout table</caption>\n  <tr>\n    <th>This</th>\n    <th>table</th>\n  </tr>\n  <tr>\n    <td>is only</td>\n    <td>for</td>\n  </tr>\n  <tr>\n    <td>layout</td>\n    <td>purposes</td>\n  </tr>\n</table>";

},{}],35:[function(require,module,exports){
"use strict";

module.exports = "<div>\n  <a href=\"http://www.google.com\"></a>\n</div>\n<div style=\"background-color: #00274d; padding: 10px; text-align: center;\">\n  <a href=\"http://www.deque.com\">\n    <img src=\"/build/axe/images/deque.png\" alt=\"Deque\"/>\n    <span class=\"sr\">Deque<span>\n  </a>\n</div>";

},{}],36:[function(require,module,exports){
"use strict";

module.exports = "<ul>\n  <h3>Numbers</h3>\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n</ul>";

},{}],37:[function(require,module,exports){
"use strict";

module.exports = "<h3>Numbers</h3>\n<div class=\"list\">\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n</div>";

},{}],38:[function(require,module,exports){
"use strict";

module.exports = "<marquee>Performing Tonight!</marquee>";

},{}],39:[function(require,module,exports){
"use strict";

module.exports = "<!--\nSorry, the 'meta-refresh' rule\nrequires a full-page test target.\n-->";

},{}],40:[function(require,module,exports){
"use strict";

module.exports = "<!--\nSorry, the 'meta-viewport' rule\nrequires a full-page test target.\n-->";

},{}],41:[function(require,module,exports){
"use strict";

module.exports = "<object type=\"image/png\" data=\"/build/axe/images/deque.png\" style=\"background-color: #00274d; padding: 10px; text-align: center;\"></object>";

},{}],42:[function(require,module,exports){
"use strict";

module.exports = "<div>Numbers</div>\n<div>\n  <input id=\"inputOne\" type=\"radio\" name=\"numbers\" checked=\"true\">\n  <label for=\"inputOne\">One</label>\n</div>\n<div>\n  <input id=\"inputTwo\" type=\"radio\" name=\"numbers\">\n  <label for=\"inputTwo\">Two</label>\n</div>\n<div>\n  <input id=\"inputThree\" type=\"radio\" name=\"numbers\">\n  <label for=\"inputThree\">Three</label>\n</div>";

},{}],43:[function(require,module,exports){
"use strict";

module.exports = "<!--\nSorry, the 'region' rule\nrequires a full-page test target.\n-->";

},{}],44:[function(require,module,exports){
"use strict";

module.exports = "<table>\n  <thead>\n    <tr>\n      <th scope=\"column\">Gear</th>\n      <td scope=\"col\">Quantity</td>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Crampons</td>\n      <td>3</td>\n    </tr>\n    <tr>\n      <td>Ice Axes</td>\n      <td>12</td>\n    </tr>\n  </tbody>\n</table>";

},{}],45:[function(require,module,exports){
"use strict";

module.exports = "<a href=\"#\">\n  <img src=\"/build/axe/images/solar-system.jpg\" alt=\"Solar system\" ismap/>\n</a>";

},{}],46:[function(require,module,exports){
"use strict";

module.exports = "<!--\nSorry, the 'skip-link' rule\nrequires a full-page test target.\n-->";

},{}],47:[function(require,module,exports){
"use strict";

module.exports = "<div>\n  <a href=\"#\">Link 1 (ok)</a>\n</div>\n<div>\n  <a tabindex=\"0\">Link 2 (ok)</a>\n</div>\n<div>\n  <a href=\"#\" tabindex=\"1\">Link 3 (not ok)</a>\n</div>";

},{}],48:[function(require,module,exports){
"use strict";

module.exports = "<p lang=\"xx\">Ceci n'est pas une langue</p>";

},{}],49:[function(require,module,exports){
"use strict";

module.exports = "<video width=\"300\" height=\"200\">\n  <source src=\"/build/axe/images/sample-clip.ogg\" type=\"video/ogg\">\n  <!-- 'src' attribute value empty for example purposes -->\n  <track src=\"\" kind=\"descriptions\" srclang=\"en\" label=\"english_description\">\n</video>";

},{}],50:[function(require,module,exports){
"use strict";

module.exports = "<video width=\"300\" height=\"200\">\n  <source src=\"/build/axe/images/sample-clip.ogg\" type=\"video/ogg\">\n  <!-- 'src' attribute value empty for example purposes -->\n  <track src=\"\" kind=\"captions\" srclang=\"en\" label=\"english_captions\">\n</video>";

},{}],51:[function(require,module,exports){
/**
 * Module dependencies.
 */

try {
  var index = require('indexof');
} catch (err) {
  var index = require('component-indexof');
}

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

module.exports = function(el){
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name){
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name){
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re){
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force){
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function(){
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name){
  return this.list
    ? this.list.contains(name)
    : !! ~index(this.array(), name);
};

},{"component-indexof":52,"indexof":52}],52:[function(require,module,exports){
module.exports = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],53:[function(require,module,exports){
function one(selector, el) {
  return el.querySelector(selector);
}

exports = module.exports = function(selector, el){
  el = el || document;
  return one(selector, el);
};

exports.all = function(selector, el){
  el = el || document;
  return el.querySelectorAll(selector);
};

exports.engine = function(obj){
  if (!obj.one) throw new Error('.one callback required');
  if (!obj.all) throw new Error('.all callback required');
  one = obj.one;
  exports.all = obj.all;
  return exports;
};

},{}],54:[function(require,module,exports){
module.exports=dataset;

/*global document*/


// replace namesLikeThis with names-like-this
function toDashed(name) {
  return name.replace(/([A-Z])/g, function(u) {
    return "-" + u.toLowerCase();
  });
}

var fn;

if (typeof document !== "undefined" && document.head && document.head.dataset) {
  fn = {
    set: function(node, attr, value) {
      node.dataset[attr] = value;
    },
    get: function(node, attr) {
      return node.dataset[attr];
    },
    del: function (node, attr) {
      delete node.dataset[attr];
    }
  };
} else {
  fn = {
    set: function(node, attr, value) {
      node.setAttribute('data-' + toDashed(attr), value);
    },
    get: function(node, attr) {
      return node.getAttribute('data-' + toDashed(attr));
    },
    del: function (node, attr) {
      node.removeAttribute('data-' + toDashed(attr));
    }
  };
}

function dataset(node, attr, value) {
  var self = {
    set: set,
    get: get,
    del: del
  };

  function set(attr, value) {
    fn.set(node, attr, value);
    return self;
  }

  function del(attr) {
    fn.del(node, attr);
    return self;
  }

  function get(attr) {
    return fn.get(node, attr);
  }

  if (arguments.length === 3) {
    return set(attr, value);
  }
  if (arguments.length == 2) {
    return get(attr);
  }

  return self;
}

},{}]},{},[2]);
