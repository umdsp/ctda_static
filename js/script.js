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
      $('#digitalobjects').coinslider({ width: 210, height: 210, delay: 10000 });
  }

});

