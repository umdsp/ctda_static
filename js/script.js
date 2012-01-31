$(document).ready(function() {
  $('#setlang-en').click(function(e) {
      e.preventDefault();
      $('#langselect select').val('en');
      $('#langselect form').submit();
      return false;
  });

  $('#setlang-es').click(function(e) {
      e.preventDefault();
      $('#langselect select').val('es');
      $('#langselect form').submit();
      return false;
  });

  $('#wrapper').css('min-height', window.innerHeight - 50);

  if ($('#digitalobjects').length) {
      $('#digitalobjects').cycle({ timeout: 8000, height: 210, width: 210, next: '#next', prev: '#prev' });
  }

});

