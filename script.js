const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-section]'),
    smooth: true,
    lerp: 0.05
});
// * different screen size
function changeDataScrollSpeed() {
    var p6img = document.querySelector('#page6 #p5heroimg');
    var p7text = document.querySelector('#page7 #p5herotext div:nth-child(1)');
    if (window.matchMedia("(max-width: 400px)").matches) {
      p6img.setAttribute('data-scroll-speed', '5');
    } else {
      p6img.setAttribute('data-scroll-speed', '2');
    }
    // page7
    if (window.matchMedia("(max-width: 400px)").matches) {
      p7text.setAttribute('data-scroll-speed', '5');
    } else {
      p7text.setAttribute('data-scroll-speed', '3');
    }
  }
  
  // Call the function on window resize
  //window.addEventListener('resize', changeDataScrollSpeed);
  
  // Call the function on initial load
  //changeDataScrollSpeed();
  
