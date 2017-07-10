$(document).ready(function() {
  // Add scrollspy to <body>
  $('body').scrollspy({
    target: ".navbar",
    offset: 60
  });

//Sticky nav
  $('#nav').affix({
      offset: {
        top: $('#home').height()-$('#nav').height() - 50
      }
  });	

// Add smooth scrolling
  $("#nav a, #home a, #about a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 50
      }, 1000, function() {
        window.location.hash = hash;
      });
    } // End if
  });
});




 