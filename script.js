$('.carousel').carousel({
    interval: 2000
  })

    const parallax = document.getElementById("first");
    window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.8 + "px";
    })