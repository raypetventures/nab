setTimeout(
  function(){
    $(".bottom-brand-box").fadeIn();
  }, 2000
);

$(document).ready(
  function(){
    $(".vertical-bar").animate({
      width: '+=100%'
    }, 6000);


      setTimeout(
        function(){
          $(".content").fadeIn('slow');
          typeWriter();
        }, 6500
      );




var i = 0;
var ii = 0;
var q1 = 'Hello there...';
var q2 = 'Do you want to take your Business Online?';
var nextQ = 0;
var speed = 50;
function typeWriter(){
  if(i < q1.length){
    document.getElementById("question-1").innerHTML += q1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (i == q1.length) {
    setTimeout(
      function(){
        $("#question-1").html("");
        typeWriter1();
      }, 2000
    );
  }

}
function typeWriter1(){
  if (ii < q2.length) {
    document.getElementById("question-2").innerHTML += q2.charAt(ii);
    ii++;
    setTimeout(typeWriter1, speed)
  }
  if (ii == q2.length) {
    $("#row-1 .default-btn").slideDown();
  }
}

// WARNING: SMOOTH SCROLL ON ALL ANCHOR
// Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

});

// WARNING: BOOKINGS ANIMATION AND RESPONSE

// WARNING: BOOK NAB
function openBookings(){
  $(".status-box").show();
  setTimeout(
    function(){
      $(".status-box form").show();
    }, 3000
  );
  setTimeout(
    function(){
      $(".status-box form").hide();
      $(".status-box").hide();
    }, 4000
  );
}
function verifySubscription(){
  var nameOfSubscriber = $(".subscriber-name-input").val();
  var emailOfSubscriber = $(".subscriber-email-input").val();
  if (nameOfSubscriber == "" || emailOfSubscriber == "") {
    $(".subscribe .error-txt").html("Name/Email field is empty");
    hideError();
  } else {
    $(".subscribe-btn").hide();
    $(".load-box").show();
    setTimeout(
      function(){
        $(".load-box").hide();
        $(".google-btn").slideDown('slow');
      }, 2500
    );
  }
}
function hideError(){
  setTimeout(
    function(){
      $(".error-txt").html("");
    }, 3000
  );
}
