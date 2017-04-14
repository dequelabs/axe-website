document.addEventListener('DOMContentLoaded', function () {
  var $ = jQuery

  var markup = new CodeFlask();
  markup.run('#markup', { language: 'html', lineNumbers: false });
  var options = new CodeFlask();
  options.run('#playground-config', { language: 'javascript', lineNumbers: false });

  $.getScript('/assets/scripts/playground.js', function () {
    markup.update()
    options.update()
  });

  $('#toggle-input, #apply-preset, #show-options').on('click', function () {
    $('#markup-input').toggle();
    $('#markup-select').toggle();
  });

  $('#toggle-output, #toggle-options').on('click', function () {
    $('#options-area').toggle();
    $('#results-area').toggle();
  });

  $('#analyze').on('click', function () {
    $('#options-area').hide();
    $('#results-area').show()[0].scrollIntoView();
  });
});


