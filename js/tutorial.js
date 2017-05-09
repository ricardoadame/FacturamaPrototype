$(function(){
  /*$('.dismiss, .btn-finish').on('click', function(){
    $('.tutorial').css('display', 'none');
  });

  var h = $('header').height();
  var sb = $('aside').width();

  $('.btn-next-1').on('click', function(){
    $('.initial').removeClass('active');
    $('.one').addClass('active');

    $('.tutorial').css('top', h);
  });

  $('.btn-next-2').on('click', function(){
    $('.one').removeClass('active');
    $('.two').addClass('active');

    $('.tutorial').css('top', h);
  });

  $('.btn-next-3').on('click', function(){
    $('.two').removeClass('active');
    $('.three').addClass('active');

    $('.tutorial').css('top', h);
  });

  $('.btn-next-4').on('click', function(){
    $('.three').removeClass('active');
    $('.four').addClass('active');

    $('.tutorial').css('top', h);
  });

  $('.btn-next-5').on('click', function(){
    $('.four').removeClass('active');
    $('.five').addClass('active');

    $('.tutorial').css('top', h);
  });

  $('.btn-next-6').on('click', function(){
    $('.five').removeClass('active');
    $('.six').addClass('active');

    $('.tutorial').css('top', h);
  });

  $('.btn-next-7').on('click', function(){
    $('.six').removeClass('active');
    $('.seven').addClass('active');

    $('.tutorial').css('top', h);
  });

  $('.btn-next-8').on('click', function(){
    $('.seven').removeClass('active');
    $('.eight').addClass('active');

    $('.tutorial').css('top', h);
  });

  $('.btn-next-9').on('click', function(){
    $('.eight').removeClass('active');
    $('.nine').addClass('active');

    $('.tutorial').css('left', sb);
  });

  $('.btn-next-10').on('click', function(){
    $('.nine').removeClass('active');
    $('.finish').addClass('active');

    $('.tutorial').css({'left': '0', 'top': '0'});
  });*/

  $(window).load(function() {
	  $("#tutorial").joyride({
      'tipLocation': 'bottom',         // 'top' or 'bottom' in relation to parent
      'nubPosition': 'auto',           // override on a per tooltip bases
      'scrollSpeed': 300,              // Page scrolling speed in ms
      'timer': 2000,                   // 0 = off, all other numbers = time(ms)
      'startTimerOnClick': true,       // true/false to start timer on first click
      'nextButton': true,              // true/false for next button visibility
      'tipAnimation': 'pop',           // 'pop' or 'fade' in each tip
      'pauseAfter': [],                // array of indexes where to pause the tour after
      'tipAnimationFadeSpeed': 300,    // if 'fade'- speed in ms of transition
      'cookieMonster': true,           // true/false for whether cookies are used
      'cookieName': 'JoyRide',         // choose your own cookie name
      'cookieDomain': false,           // set to false or yoursite.com
      'tipContainer': body,            // Where the tip be attached if not inline
      'postRideCallback': $noop,       // a method to call once the tour closes
      'postStepCallback': $noop        // A method to call after each step
	  });
	});

});
