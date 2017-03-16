---
layout: page
title: aXe Playground
---

<p> Welcome to aXe playground. Here you can see what aXe can do for you. Just put in a URL, press "Analyse" and let aXe do the magic. If you want aXe to check for a specific rule, just select the "Type" or "Name" below and click "Apply Selected Preset" to see the result.</p>

<div class="dqpl-field-wrap analysebutton">
  <label class="dqpl-label" for="first-name"></label>
  <input class="dqpl-text-input sizeinput" type="text" id="first-name" placeholder="Insert your URL here...."/>
</div>

<div class="analysebutton">
<button id="render" class="dqpl-button-primary dqpl-button-wrap try-me">Analyse</button>
</div>

<div class="results">
	<label for="axe-results" >aXe Results</label>
	<textarea id="axe-results" rows="30" readonly="true"></textarea>

	<script src="/playground/assets/js/playground.js"></script>
	<script src="/playground/assets/js/axe.min.js"></script>
	<script src="/playground/assets/js/axe-devtools-react.bundle.js"></script>
	<script src="/playground/assets/js/axe-devtools-init.js"></script>
	<script>analyze()</script>
</div>

<div class="fieldset">
		<legend>Type</legend>
			<div class="radio">
				<input id="rule-type" type="radio" name="type" value="rule" checked="true">
				<label for="rule-type">Rule</label></div>
		<div class="radio">
			<input id="check-type" type="radio" name="type" value="check">
			<label for="check-type">Check</label></div>
</div>

<div class="fieldset">
			<legend id="name-legend">Name</legend>
				<div class="presets rule">
					<div>
						<select class="dqpl-select dqpl-combobox" aria-labelledby="name-legend">
							<option value="accesskeys">Accesskeys</option>
							<option value="area-alt">Area-alt</option>
							<option value="aria-allowed-attr">Aria-allowed-attr</option>
							<option value="aria-required-attr">Aria-required-attr</option>
							<option value="aria-required-children">Aria-required-children</option>
							<option value="aria-required-parent">Aria-required-parent</option>
							<option value="aria-roles">Aria-roles</option>
							<option value="aria-valid-attr-value">Aria-valid-attr-value</option>
							<option value="aria-valid-attr">Aria-valid-attr</option>
							<option value="audio-caption">Audio-caption</option>
							<option value="blink">Blink</option>
							<option value="button-name">Button-name</option>
							<option value="bypass">Bypass</option>
							<option value="checkboxgroup">Checkboxgroup</option>
							<option value="color-contrast">Color-contrast</option>
							<option value="data-table">Data-table</option>
							<option value="definition-list">Definition-list</option>
							<option value="dlitem">Dlitem</option>
							<option value="document-title">Document-title</option>
							<option value="duplicate-id">Duplicate-id</option>
							<option value="empty-heading">Empty-heading</option>
							<option value="frame-title">Frame-title</option>
							<option value="heading-order">Heading-order</option>
							<option value="html-lang">Html-lang</option>
							<option value="image-alt">Image-alt</option>
							<option value="input-image-alt">Input-image-alt</option>
							<option value="label-title-only">Label-title-only</option>
							<option value="label">Label</option>
							<option value="layout-table">Layout-table</option>
							<option value="link-name">Link-name</option>
							<option value="list">List</option>
							<option value="listitem">Listitem</option>
							<option value="marquee">Marquee</option>
							<option value="meta-refresh">Meta-refresh</option>
							<option value="meta-viewport">Meta-viewport</option>
							<option value="object-alt">Object-alt</option>
							<option value="radiogroup">Radiogroup</option>
							<option value="region">Region</option>
							<option value="scope">Scope</option>
							<option value="server-side-image-map">Server-side-image-map</option>
							<option value="skip-link">Skip-link</option>
							<option value="tabindex">Tabindex</option>
							<option value="valid-lang">Valid-lang</option>
							<option value="video-caption">Video-caption</option>
							<option value="video-description">Video-description</option>
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
			</div>

<div class="clear">
	<button id="apply-preset" class="dqpl-button-primary dqpl-button-wrap try-me">Apply Selected Preset</button>
</div>

