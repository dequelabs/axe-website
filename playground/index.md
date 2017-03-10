---
layout: page
title: aXe Playground
---

<main class="grid">
<div>
	<label id="edit-html-legend" for="markup">Edit HTML</label>
	<textarea class="prettyprint" id="markup" rows="10"></textarea>
	<button id="render">Analyse my HTML</button>
	<br/>
</div>



<div>
	<link rel="stylesheet" href="/playground/assets/css/axe-panel.css" />
	<div id="axe-results-container"></div>
</div>
<div class="col-1-2">
	<button class="area-trigger" data-area="preset-area" data-text="Preset Fixtures"></button>
	<div class="hidden" id="preset-area">
		<h2>Choose a Preset Fixture</h2>
		<p>Choose the 'Type' and 'Name' of a specific rule or check you would like to test.</p>
			<div class="col-1-2">
				<fieldset>
					<legend>Type</legend>
						<div class="radio">
							<input id="rule-type" type="radio" name="type" value="rule" checked="true">
							<label for="rule-type">Rule</label></div>
					<div class="radio">
						<input id="check-type" type="radio" name="type" value="check">
						<label for="check-type">Check</label></div>
				</fieldset>
			</div>
	<div class="col-1-2">
		<fieldset>
			<legend id="name-legend">Name</legend>
				<div class="presets rule">
					<div>
						<select id="rule-presets" aria-labelledby="name-legend">
							<option value="accesskeys">accesskeys</option>
							<option value="area-alt">area-alt</option>
							<option value="aria-allowed-attr">aria-allowed-attr</option>
							<option value="aria-required-attr">aria-required-attr</option>
							<option value="aria-required-children">aria-required-children</option>
							<option value="aria-required-parent">aria-required-parent</option>
							<option value="aria-roles">aria-roles</option>
							<option value="aria-valid-attr-value">aria-valid-attr-value</option>
							<option value="aria-valid-attr">aria-valid-attr</option>
							<option value="audio-caption">audio-caption</option>
							<option value="blink">blink</option>
							<option value="button-name">button-name</option>
							<option value="bypass">bypass</option>
							<option value="checkboxgroup">checkboxgroup</option>
							<option value="color-contrast">color-contrast</option>
							<option value="data-table">data-table</option>
							<option value="definition-list">definition-list</option>
							<option value="dlitem">dlitem</option>
							<option value="document-title">document-title</option>
							<option value="duplicate-id">duplicate-id</option>
							<option value="empty-heading">empty-heading</option>
							<option value="frame-title">frame-title</option>
							<option value="heading-order">heading-order</option>
							<option value="html-lang">html-lang</option>
							<option value="image-alt">image-alt</option>
							<option value="input-image-alt">input-image-alt</option>
							<option value="label-title-only">label-title-only</option>
							<option value="label">label</option>
							<option value="layout-table">layout-table</option>
							<option value="link-name">link-name</option>
							<option value="list">list</option>
							<option value="listitem">listitem</option>
							<option value="marquee">marquee</option>
							<option value="meta-refresh">meta-refresh</option>
							<option value="meta-viewport">meta-viewport</option>
							<option value="object-alt">object-alt</option>
							<option value="radiogroup">radiogroup</option>
							<option value="region">region</option>
							<option value="scope">scope</option>
							<option value="server-side-image-map">server-side-image-map</option>
							<option value="skip-link">skip-link</option>
							<option value="tabindex">tabindex</option>
							<option value="valid-lang">valid-lang</option>
							<option value="video-caption">video-caption</option>
							<option value="video-description">video-description</option>
						</select>
					</div>
				</div>
				<div class="presets check hidden">
					<div>
						<select id="check-presets" aria-labelledby="name-legend">
							<option value="abstract-role">abstract-role</option>
							<option value="allowed-attr">allowed-attr</option>
							<option value="invalid-role">invalid-role</option>
							<option value="required-attr">required-attr</option>
							<option value="required-children">required-children</option>
							<option value="required-parent">required-parent</option>
							<option value="valid-attr-value">valid-attr-value</option>
							<option value="valid-attr">valid-attr</option>
							<option value="color-contrast">color-contrast</option>
							<option value="fieldset">fieldset</option>
							<option value="labelledby">labelledby</option>
							<option value="accesskeys">accesskeys</option>
							<option value="focusable-no-name">focusable-no-name</option>
							<option value="tabindex">tabindex</option>
							<option value="duplicate-img-label">duplicate-img-label</option>
							<option value="explicit">explicit</option>
							<option value="help-same-as-label">help-same-as-label</option>
							<option value="implicit">implicit</option>
							<option value="multiple-label">multiple-label</option>
							<option value="title-only">title-only</option>
							<option value="has-lang">has-lang</option>
							<option value="valid-lang">valid-lang</option>
							<option value="dlitem">dlitem</option>
							<option value="has-listitem">has-listitem</option>
							<option value="listitem">listitem</option>
							<option value="only-dlitems">only-dlitems</option>
							<option value="only-listitems">only-listitems</option>
							<option value="structured-dlitems">structured-dlitems</option>
							<option value="caption">caption</option>
							<option value="description">description</option>
							<option value="meta-viewport">meta-viewport</option>
							<option value="header-present">header-present</option>
							<option value="heading-order">heading-order</option>
							<option value="internal-link-present">internal-link-present</option>
							<option value="landmark">landmark</option>
							<option value="meta-refresh">meta-refresh</option>
							<option value="region">region</option>
							<option value="skip-link">skip-link</option>
							<option value="unique-frame-title">unique-frame-title</option>
							<option value="aria-label">aria-label</option>
							<option value="aria-labelledby">aria-labelledby</option>
							<option value="doc-has-title">doc-has-title</option>
							<option value="duplicate-id">duplicate-id</option>
							<option value="exists">exists</option>
							<option value="has-alt">has-alt</option>
							<option value="has-visible-text">has-visible-text</option>
							<option value="non-empty-alt">non-empty-alt</option>
							<option value="non-empty-if-present">non-empty-if-present</option>
							<option value="non-empty-title">non-empty-title</option>
							<option value="non-empty-value">non-empty-value</option>
							<option value="role-none">role-none</option>
							<option value="role-presentation">role-presentation</option>
							<option value="cell-no-header">cell-no-header</option>
							<option value="consistent-columns">consistent-columns</option>
							<option value="has-caption">has-caption</option>
							<option value="has-summary">has-summary</option>
							<option value="has-th">has-th</option>
							<option value="headers-attr-reference">headers-attr-reference</option>
							<option value="headers-visible-text">headers-visible-text</option>
							<option value="html4-scope">html4-scope</option>
							<option value="html5-scope">html5-scope</option>
							<option value="no-caption">no-caption</option>
							<option value="rowspan">rowspan</option>
							<option value="same-caption-summary">same-caption-summary</option>
							<option value="scope-value">scope-value</option>
							<option value="th-headers-attr">th-headers-attr</option>
							<option value="th-scope">th-scope</option>
							<option value="th-single-row-column">th-single-row-column</option>
						</select>
					</div>
				</div>
		</fieldset>
	</div>
	<p class="clear"></p>
	<button id="apply-preset">Apply Selected Preset</button>
	</div>
	<h2>Edit the Fixture</h2>
	<p> Modify the markup of the fixture below. This can be useful to test
whether minor adjustments to the given markup will satisfy the aXe
tool's rules.</p>

	<h2>View the Rendered Fixture</h2>
	<p>Everything in the area below will be targeted by aXe when you analyze the page.</p>
	<div id="fixture">
		<div>
		  <label>
		    <span>N<u>a</u>me</span>
		    <input type="text" name="name" accesskey="a">
		  </label>
		</div>
		<div>
		  <label>
		    <span><u>E</u>mail</span>
		    <input type="email" name="email" accesskey="e">
		  </label>
		</div>
		<div>
		  <button accesskey="a">C<u>a</u>ncel</button>
		</div>
	</div>
	</div>
	<div class="col-1-2">
		<button class="area-trigger" data-area="options-area" data-text="aXe Options"></button>
			<div class="hidden" id="options-area">
				<h2>aXe Options</h2>
				<p> Modify the options object below and click 'Analyze' to update the results. For more info, see
				<a href="https://github.com/dequelabs/axe-core/blob/master/doc/API.md#b-options-parameter">the aXe documentation for the Options parameter</a>.</p>
				<label for="config-textarea">Edit Options</label>
				<textarea id="config-textarea" rows="8"></textarea>
				<button id="analyze">Update Results</button>
			</div>
		<h2>aXe Results</h2>
		<label for="axe-results">Violations Array</label>
		<textarea id="axe-results" rows="30" readonly="true"></textarea>
	</div>

	<script src="/playground/assets/js/playground.js"></script>
	<script src="/playground/assets/js/axe.min.js"></script>
	<script src="/playground/assets/js/axe-devtools-react.bundle.js"></script>
	<script src="/playground/assets/js/axe-devtools-init.js"></script>
	<script>analyze()</script>
</main>

