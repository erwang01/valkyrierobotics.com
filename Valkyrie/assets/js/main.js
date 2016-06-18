$('document').ready(function() {
  $('.menu-item').css('font-style', 'italic');
  $('.menu-item').hover(function() {
    $(this).css('font-size', '24px');
    $(this).css('font-style', 'normal');
  }, function() {
    $(this).css('font-size', '16px');
  });
});
