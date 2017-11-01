$(function () {
  // waves
  let waveWhite = new TimelineMax();
  waveWhite.to($('#wave-white'), 20, {backgroundPositionX:-300, repeatDelay:0, repeat:-1, yoyo:true, ease: Power1.easeInOut});
  waveWhite.play();

  let waveGrey1 = new TimelineMax();
  waveGrey1.to($('#wave-grey1'), 30, {backgroundPositionX:300, repeatDelay:0, repeat:-1, yoyo:true, ease: Power1.easeInOut});
  waveGrey1.play();

  let waveGrey2 = new TimelineMax();
  waveGrey2.to($('#wave-grey2'), 40, {backgroundPositionX:-250, repeatDelay:0, repeat:-1, yoyo:true, ease: Power1.easeInOut});
  waveGrey2.play();

  // nav
  $(window).on('scroll', function () {
    let nav = $('#navbar');
    if ($(this).scrollTop() > 150) {
      nav.addClass('scrolled');
    } else {
      nav.removeClass('scrolled');
    }
  });
  $(window).scroll();
});