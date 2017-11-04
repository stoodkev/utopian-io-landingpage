$(function () {
  // init scroll animations
  let scrollController = new ScrollMagic.Controller();

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

  // github
  let octocatTween = new TweenMax.from('#octocat', 1, {
    scale: 0,
    opacity: 0,
    ease: Back.easeInOut
  });

  let octocatScene = new ScrollMagic.Scene({
    triggerElement: '#github-trigger',
    offset: -300
  })
    .setTween(octocatTween)
    .addTo(scrollController);

  let textTween = new TweenMax.from('#github-text', 1, {
    delay: .3,
    scale: 0,
    opacity: 0,
    ease: Back.easeInOut
  });

  let githubTextScene = new ScrollMagic.Scene({
    triggerElement: '#github-trigger',
    offset: -300
  })
    .setTween(textTween)
    .addTo(scrollController);

  // topics
  let topicTween = new TweenMax.staggerFrom('#topics .card', 1, {
    opacity: 0,
    top: -50,
    ease: Back.easeInOut,
    delay: 1
  }, .05);

  let topicsScene = new ScrollMagic.Scene({
    triggerElement: '#github-trigger',
    offset: -50
  })
    .setTween(topicTween)
    .addTo(scrollController);

  let topicArrowsTween = new TweenMax.from('#topics .carousel-control-prev, #topics .carousel-control-next', 1, {
    opacity: 0,
    ease: Back.easeInOut,
    delay: 1
  });

  let topicArrowsScene = new ScrollMagic.Scene({
    triggerElement: '#github-trigger',
    offset: -50
  })
    .setTween(topicArrowsTween)
    .addTo(scrollController);

  // steem
  let steemTween = new TweenMax.from('#steem-logo-container', 1.5, {
    opacity: 0,
    bottom: -50,
    ease: Power2.easeInOut,
  }, .05);

  let steemScene = new ScrollMagic.Scene({
    triggerElement: '#rewards-trigger'
  })
    .setTween(steemTween)
    .addTo(scrollController);

  // upvotes & dollars
  for (let i = 0; i < 6; i++){
    let bubble = document.createElement('i');
    TweenLite.set(bubble, {attr: {class: 'fa fa-angle-up upvote'}, left: R(0, 100) + '%', bottom: R(0, 100) + '%', scale: R(.5, 2)});
    $('#steem-logo-container').append(bubble);
  }

  let upvotesTimeline = new TimelineMax({repeat: -1, delay: 0});
  upvotesTimeline
    .staggerFrom('.upvote', .5, {scale: 0, opacity: 0, ease: Back.easeOut.config(4)}, 1)
    .staggerTo('.upvote', 2, {bottom: "+=25", opacity: 0, ease: Power1.easeInOut}, 1, '-=5');


  // blog
  steemitWidgets.blog({
    element: 'utopian-steemit-blog',
    user: 'utopian-io',
    limit: 10,
    template: 'blog-template',
    dateCallback: function (date) {return moment.utc(date).from(moment.utc().format('YYYY-MM-DD HH:mm:ss'));}
  });
});

function R(min,max) {
  return min+Math.random()*(max-min)
}