$(".js-select2-dela").select2({
  placeholder: "Select Tags",
  width: 'resolve',
  theme: "classic"


});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});

function checkScroll() {
  var startY = $('.navbar').height() * 0.5; //The point where the navbar changes in px

  if ($(window).scrollTop() > startY) {
    $('.navbar').addClass("scrolled");
  } else {
    $('.navbar').removeClass("scrolled");
  }
}

if ($('.navbar').length > 0) {
  $(window).on("scroll load resize", function () {
    checkScroll();
  });
}



// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar_top").style.padding = "30px 10px";
  } else {
    document.getElementById("navbar_top").style.padding = "20px 10px";
  }


  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar_top").style.boxShadow = "rgba(0, 0, 0, 0) 0px 10px 20px, rgba(0, 0, 0, 0.196) 0px 6px 6px";

  } else {
    document.getElementById("navbar_top").style.boxShadow = "rgba(0, 0, 0, 0) 0px 10px 20px, rgba(0, 0, 0, 0.156) 0px 6px 6px";
  }
}



/** Owl Carousel */
$(document).ready(function () {
  var silder = $("#clients");
  silder.owlCarousel({
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      items: 1,
      stagePadding: 20,
      center: true,
      nav: false,
      margin: 30,
      loop: true,
      responsive: {
          0: { items: 1 },
          480: { items: 1 },
          575: { items: 1 },
          768: { items: 1 },
          991: { items: 1 },
          1200: { items: 5 }
      }
  });
});



$(document).ready(function () {
  var silder = $("#category");
  silder.owlCarousel({
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      items: 1,
      stagePadding: 20,
      center: true,
      nav: false,
      margin: 30,
      loop: true,
      responsive: {
          0: { items: 1 },
          480: { items: 1 },
          575: { items: 1 },
          768: { items: 1 },
          991: { items: 1 },
          1200: { items: 3 }
      }
  });
});




// make it as accordion for smaller screens
if (window.innerWidth > 992) {
  document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {
    everyitem.addEventListener('mouseover', function (e) {
      let el_link = this.querySelector('a[data-bs-toggle]');
      if (el_link != null) {
        let nextEl = el_link.nextElementSibling;
        el_link.classList.add('show');
        nextEl.classList.add('show');
      }
    });
    everyitem.addEventListener('mouseleave', function (e) {
      let el_link = this.querySelector('a[data-bs-toggle]');
      if (el_link != null) {
        let nextEl = el_link.nextElementSibling;
        el_link.classList.remove('show');
        nextEl.classList.remove('show');
      }
    })
  });
}
// end if innerWidth
// DOMContentLoaded  end
