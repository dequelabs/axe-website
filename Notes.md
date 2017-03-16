

<div class="food dqpl-radio-group" role="radiogroup" aria-labelledby="pizza">

  <div class="dqpl-radio-wrap dqpl-flexr">
    <div class="dqpl-radio" role="radio" aria-labelledby="yes"></div>
    <div class="dqpl-label" id="yes">Rule</div>
  </div>
  <div class="dqpl-radio-wrap dqpl-flexr">
    <div class="dqpl-radio" role="radio" aria-labelledby="no"></div>
    <div class="dqpl-label" id="no">Check</div>
  </div>
</div>


<main class="grid">
<div>
	<link rel="stylesheet" href="/playground/assets/css/axe-panel.css" />
	<div id="axe-results-container"></div>
</div>
<div>
	<label id="edit-html-legend" for="markup">Edit HTML</label>
	<textarea class="prettyprint" id="markup" rows="10"></textarea>
	<button id="render">Analyse my HTML</button>
	<br/>
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

</main>

