$(document).ready(function() {
  $(".bars").click(function(e) {
    e.preventDefault();
    $(".mobile-menu").slideToggle();
  });
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
    $("#whoim, #pos").t({
      speed: 100
    });
  }, 7000);
  setInterval(function() {
    $(" #pos").t({
      speed: 100
    });
  }, 4000);
});
