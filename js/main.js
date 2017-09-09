$(document).ready(function(){

  // scolling animations
  $('a[href*="#"]').click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({scrollTop: target.offset().top}, 1000, function() {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex','-1');
                    $target.focus();
                };
            });
        }
      }
  });

  // landing slide show
  var count = 0;
  var imgs = ["img/showbuilding.jpg", "img/patio.jpg", "img/backyard.jpg", "img/taproom.jpg", "img/ashtree1080.jpg",];
  var img = $("#landing");

  setInterval(function(){
      img.fadeOut(800, function(){
          img.css("background-image", "radial-gradient(circle at center , rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 95%), url("+imgs[count++]+")");
          img.fadeIn(800);
      });
      if (count == imgs.length){
          count = 0;
      }
  }, 5000);
});

// Home nav animation

window.addEventListener("scroll", function(){
  
  var target = document.getElementById('intro').offsetTop;
  if (window.pageYOffset >= target) {
    document.querySelector('header').classList.remove('navhome');
    document.querySelector('#homelogo').classList.remove('ghost');
  } else {
    document.querySelector('header').classList.add('navhome');
    document.querySelector('#homelogo').classList.add('ghost');
  };
});