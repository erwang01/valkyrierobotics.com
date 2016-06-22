$('document').ready(function() {
  var subMenuIsOpen = false;
  $('.caret').click(function(event) {
    if(subMenuIsOpen) {
      subMenuIsOpen = false;

    } else {
      subMenuIsOpen = true;
    }

  });
});
