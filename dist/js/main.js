$(document).ready(function() {
  $(".teemonav").teemoNav({
    theme: "dark",
    breakpoint: 768,
    menuLabel: "",
    sticky: !1,
    position: "right",
    openingSpeed: 100,
    closingDelay: 250,
    showArrows: !0,
    phoneBtn: "0356678519",
    phoneLabel: "",
    locationBtn: "0356678519",
    locationLabel: "",
    closeBtn: !1,
    closeLabel: "",
    mobileMode: !1,
    scrollbarFix: !1
  });
  $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    // nav: false,
    dots: false,
    touchDrag: false
    // mouseDrag: false
  });
});
