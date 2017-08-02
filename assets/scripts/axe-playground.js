document.addEventListener('DOMContentLoaded', function () {
  var $ = jQuery

  var resultsTextbox = document.querySelector('#axe-results')
  var fixture = document.querySelector('#fixture')
  var $configArea = $('#playground-config')
  var $presetsListbox = $('#rule-presets')

  var markup = new CodeFlask()
  markup.run('#markup', {
    language: 'html',
    lineNumbers: false,
    areaId: 'markup-area'
  })

  markup.onUpdate(function (code) {
    fixture.innerHTML = code
  })

  // Select the "image-alt" preset fixture by default
  var defaultVal = 'image-alt'
  var selectedId = $presetsListbox
    .find('[role=option][value=' + defaultVal + ']')
    .addClass('dqpl-option-active')
    .attr('aria-selected', 'true')
    .attr('id')

  $presetsListbox.closest('.dqpl-select')
    .find('.dqpl-combobox')
    .attr('aria-activedescendant', selectedId)
    .find('.dqpl-pseudo-value')
    .text(defaultVal)

  applySelectedPreset()

  $('#apply-preset').click(applySelectedPreset)

  $('#analyze').click(analyze)

  $('#clear-field').click(function () {
    markup.update('')
  })

  /**
   * Default aXe options
   */
  var defaultOpts = '{\n\
  "runOnly": {\n\
    "type": "tag",\n\
    "values": ["wcag2a", "wcag2aa"]\n\
  },\n\
  "checks": {\n\
    "skip-link": { "enabled": true }\n\
  }\n\}'

  $configArea.val(defaultOpts)
  var options = JSON.parse(defaultOpts)

  $('#change-options').click(function () {
    try {
      var optsVal = $configArea.val()
      options = optsVal.length ? JSON.parse(optsVal) : {}
      fixture.innerHTML = markup.textarea.value
    } catch (e) {
      console.error(e)
      resultsTextbox.innerHTML = 'Unable to parse options. Ensure that options is valid JSON.'
      return
    }
    // wait for the lightbox to close
    setTimeout(function () {
      fixture.innerHTML = markup.textarea.value
      analyze()
    }, 10)
  })

  /**
   * Fetches the preset markup for the currently selected rule from
   * the markupStore and inserts it into the fixture area.
   *
   * @api private
   */
  function applySelectedPreset() {
    var selected = $('#rule-presets .dqpl-option-active').attr('value')
    var $markup = $('#fixture-store [data-title=' + selected + ']')
    if ($markup.length) {
      markup.update($markup.text().trim())
    }
  }

  /**
   * Runs aXe on the test fixture area and outputs the violations
   * to the results area.
   *
   * @api private
   */
  function analyze() {
    axe.a11yCheck('#fixture', options, function (res) {
      var str = JSON.stringify(res.violations, null, 2)
      resultsTextbox.innerHTML = safeTags(str)
      resultsTextbox.scrollIntoView()
      if (Prism) {
        Prism.highlightAll()
      }
    })
  }

  /**
   * Converts HTML chars for printing in HTML.
   *
   * @param {String} str
   * @return {String}
   * @api private
   */
  function safeTags(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }
})
