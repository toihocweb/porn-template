$(document).ready(function() {
  // $(".owl-carousel").owlCarousel({
  //   items: 1,
  //   autoplay: true,
  //   loop: true,
  //   // nav: false,
  //   dots: false,
  //   touchDrag: false,
  //   // animateOut: "fadeOut",
  //   // animateIn: "fadeIn",
  //   mouseDrag: false
  //   // autoplayTimeout: 4000
  // });
  $(".info .slide.active")
    .fadeOut(4000)
    .removeClass("active");
  $(".info .slide")
    .eq(0)
    .fadeIn(3000)
    .addClass("active");
  setInterval(function() {
    var currentIndex = $(".info .slide.active").index();
    if (currentIndex === $(".info .slide").length - 1) {
      $(".info .slide.active")
        .fadeOut(4000)
        .removeClass("active");
      $(".info .slide")
        .eq(0)
        .fadeIn(3000)
        .addClass("active");
    } else {
      currentIndex += 1;
      $(".info .slide.active")
        .fadeOut(4000)
        .removeClass("active");
      $(".info .slide")
        .eq(currentIndex)
        .fadeIn(3000)
        .addClass("active");
    }
  }, 7000);
  $("#whoim").t({
    speed: 100
  });
  setInterval(function() {
    $("#whoim").t({
      speed: 100
    });
  }, 7000);
});
