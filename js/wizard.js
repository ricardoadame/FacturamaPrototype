$(function(){

  nextStep('go', '.one', '.two', 1, '-100%');
  nextStep('2', '.two', '.three', 2, '-75%');
  nextStep('3', '.three', '.four', 3, '-50%');
  nextStep('4', '.four', '.five', 4, '-25%');
  nextStep('5', '.five', '.six', 5, '0%');

});

function nextStep(t, rc, ac, i, m){
  $('#btn-' + t).on('click', function(){
    $('.step' + rc).removeClass('active');
    $('.step' + ac).addClass('active');

    $('ul.progress-bar li:nth-child('+ i +')').addClass('active');
    $('.fill').css('left', m);
  });
};
