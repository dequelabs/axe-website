document.addEventListener('DOMContentLoaded', function () {
  var $ = jQuery;

  var markup = new CodeFlask();
  markup.run('#markup', { language: 'html', lineNumbers: false });
  // var options = new CodeFlask();
  // options.run('#playground-config', { language: 'javascript', lineNumbers: false });

  $.getScript('/assets/scripts/playground.js', function () {
    markup.update();
  });

  $('#apply-preset').on('click', function () {
    setTimeout(function () {
      markup.update();
    }, 10);
  })

  $('#toggle-input, #show-options').on('click', function () {
    $('#markup-input').toggle();
    $('#markup-select').toggle();
  });

  $('#clear-field').on('click', function () {
    markup.update('')
  })

  $('#toggle-output, #toggle-options').on('click', function () {
    $('#options-area').toggle();
    $('#results-area').toggle();
  });

  $('#analyze').on('click', function () {
    setTimeout(function () {
      $('#options-area').hide();
      $('#results-area').show()[0].scrollIntoView();
      Prism.highlightAll();
    }, 30);
  });
});
