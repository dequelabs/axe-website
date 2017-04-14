jQuery(function ($) {
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

var $myModal = jQuery('#my-modal');

$myModal
  .on('dqpl:modal-open', function () {
    console.log('The modal has been opened!!');
  })
  .on('dqpl:modal-close', function () {
    console.log('The modal has been closed :(');
  });
});


