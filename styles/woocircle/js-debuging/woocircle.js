///////////////////////////////////////////////////////////////////////////
//
//    Scroll Header
//
///////////////////////////////////////////////////////////////////////////

  $(document).ready(function() {
    $(window).bind('scroll', function(e) {
      var 
        distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 300, //after amount of pixels shrink menu
        header = document.querySelector("navbar");
      if (distanceY > shrinkOn) {
        $( ".navbar" ).addClass( "smaller" );
      } else {
        $( ".navbar" ).removeClass( "smaller" );
      }
    }); 
  });

///////////////////////////////////////////////////////////////////////////
//
//    Smooth scroll for anchor's
//
///////////////////////////////////////////////////////////////////////////

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

///////////////////////////////////////////////////////////////////////////
//
//    AOS configuration
//
///////////////////////////////////////////////////////////////////////////

  AOS.init({
    easing: 'ease-in-out-sine'
  });

///////////////////////////////////////////////////////////////////////////
//
//    Cookie plugin configuration
//
///////////////////////////////////////////////////////////////////////////

  $(document).euCookieLawPopup().init({ 
    cookiePolicyUrl : 'https://www.temenos.com/en/legal-information/cookie-policy/', 
    popupPosition : 'bottom', 
    colorStyle : 'default', 
    compactStyle : false, 
    popupTitle : 'Privacy & Cookies', 
    popupText : 'To give you the best possible experience on the Temenos website we use cookies to collect personal information to better understand your preferences and improve the performance and content of our site. The Cookie consent button will remain visible until accepted; however by continuing to use this site, we will assume consent for cookies to be used in accordance with our Privacy policy (see "Learn More").', 
    buttonContinueTitle : 'Continue', 
    buttonLearnmoreTitle : 'Learn more', 
    buttonLearnmoreOpenInNewWindow : true, 
    agreementExpiresInDays : 30, 
    autoAcceptCookiePolicy : false, 
    htmlMarkup : null 
  });