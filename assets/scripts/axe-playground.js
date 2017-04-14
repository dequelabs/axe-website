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
    }, 30)
  });

var $myModal = jQuery('#my-modal');

$myModal
  .on('dqpl:modal-open', function () {
    console.log('The modal has been opened!!');
  })
  .on('dqpl:modal-close', function () {
    console.log('The modal has been closed :(');
  });
});


