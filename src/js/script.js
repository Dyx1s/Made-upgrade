window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});

/* "use strict"; */
/* begin begin Back to Top button  */
(function() {
  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 15);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();

/* document.addEventListener('DOMContentLoaded', function(){
    let banner = document.getElementById('banner-wrapper');
    let devLayer = banner.querySelector('.dev');
    let delta = 0;
    banner.addEventListener('mousemove', function(e){
        delta = ((e.pageX - banner.getBoundingClientRect().left) - banner.offsetWidth / 2) * 0.5;
        devLayer.style.width = (e.pageX - banner.getBoundingClientRect().left) + 200 + delta + 'px';
    });
}); */

function beforeAfter() {  
  document.getElementById('kobavenusab').style.width = document.getElementById('pedsumid').value + "%";
}