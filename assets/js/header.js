$(window).scroll(function() {
  if ($(window).scrollTop() > 10) {
      $('#header').addClass('floatingNav');
  } else {
      $('#header').removeClass('floatingNav');
  }
});