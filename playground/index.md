---
layout: page
title: aXe Playground
---
<div>
	<p> Welcome to aXe Playground. Here comes a fancy pancy text about how to use the playground. And we need a link to DequeU for people who want to see how things can get solved: <a href="https://dequeuniversity.com/rules/axe/2.1/aria-required-children?application=axeChrome" target="_blank">(more info)</a></p>
	<label id="edit-html-legend" for="markup">Paste your HTML in here</label>
	<textarea placeholder="Paste your HTML in here" class="prettyprint" id="markup" rows="10" >
	</textarea>
	<button class="area-trigger dqpl-button-secondary" data-area="preset-area" data-text="Preset Fixtures" aria-expanded="false" aria-controls="preset-area" type="button">
		</button>	
		<div class="hidden" id="preset-area">
		<h2>Choose a Preset Fixture</h2>
		<p>Choose the 'Type' and 'Name' of a specific rule or check you would like to test.</p>
	<div>
		<fieldset>
			<legend>Type</legend>
			<div class="radio">
				<input id="rule-type" type="radio" name="type" value="rule" checked="true">
				<label for="rule-type">Rule</label>
			</div>
			<div class="radio">
				<input id="check-type" type="radio" name="type" value="check">
				<label for="check-type">Check</label>
			</div>
		</fieldset>
	</div>
	<div>
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
						<option value="cell-no-header">cell-no-header</option>
						<option value="headers-visible-text">headers-visible-text</option>
						<option value="th-single-row-column">th-single-row-column</option>
					</select>
				</div>
			</div>
		</fieldset>
	</div>
	<p class="clear"></p>
	<button id="apply-preset" class="dqpl-button-primary" type="button">Apply Selected Preset</button>
	</div>

	<div>
		<h2>aXe Results</h2>
		<p>Here are the aXe results. Below you can find blablablabla...</p>
		<textarea id="axe-results" rows="30" readonly="true" placeholder="Your aXe result">
		</textarea>
		<button class="area-trigger dqpl-button-secondary" data-area="options-area" data-text="aXe Options" aria-expanded="false" aria-controls="options-area" type="button"> 
		</button>
		<div class="hidden" id="options-area">
			<h2>aXe Options</h2>
			<p> Modify the options object below and click 'Analyze' to update the results. For more info, see <a href="https://github.com/dequelabs/axe-core/blob/master/doc/API.md#b-options-parameter" target="_blank">the aXe documentation for the Options parameter</a>.</p>
			<label for="config-textarea">Edit Options</label>
			<textarea id="config-textarea" rows="8"></textarea>
			<button id="analyze" class="dqpl-button-primary" type="button">Update Results</button>
		</div>
	</div>	
	<script src="/assets/scripts/index.js"></script>
	<script>analyze()</script>
	</div>

