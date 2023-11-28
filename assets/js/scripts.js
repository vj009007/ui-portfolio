// Slider
function Slider() {
  const carouselSlides = document.querySelectorAll(".slide");
  const btnPrev = document.querySelector(".prev");
  const btnNext = document.querySelector(".next");
  const dotsSlide = document.querySelector(".dots-container");
  let currentSlide = 0;

  const activeDot = function (slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("active"));
    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("active");
  };
  activeDot(currentSlide);

  const changeSlide = function (slides) {
    carouselSlides.forEach(
      (slide, index) =>
        (slide.style.transform = `translateX(${100 * (index - slides)}%)`)
    );
  };
  changeSlide(currentSlide);

  btnNext.addEventListener("click", function () {
    currentSlide++;
    if (carouselSlides.length - 1 < currentSlide) {
      currentSlide = 0;
    }
    changeSlide(currentSlide);
    activeDot(currentSlide);
  });
  btnPrev.addEventListener("click", function () {
    currentSlide--;
    if (0 >= currentSlide) {
      currentSlide = 0;
    }
    changeSlide(currentSlide);
    activeDot(currentSlide);
  });

  dotsSlide.addEventListener("click", function (e) {
    if (e.target.classList.contains("dot")) {
      const slide = e.target.dataset.slide;
      changeSlide(slide);
      activeDot(slide);
    }
  });
}
Slider();

// Form Validation (demo)
function validateForm() {
  let x = document.forms["contact-form"]["first_name"].value;
  if (x == "") {
    var element = document.getElementById("required");
    element.classList.add("error");
    return false;
  }
}


// Popup
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

/*
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};*/

  
  //video Stop
  var video = $('video')[0];
  var closeButton = $('.close');
  closeButton.click(function () {
    video.pause();
  });
  //video Start
  var video = $('video')[0];
  var closeButton = $('#myBtn');
  closeButton.click(function () {
    video.play();
  });


// Form Label
$(document).ready(function () {
  $(".form-item").on("click", function () {
    $(this).addClass("active");
  });
  $(".form_input").on("blur", function () {
    if ($(this).val() === "") {
      $(this).parent(".form-item").removeClass("active");
    }
  });


  // Tooltip
  $(".tooltip").hover(
    function () {
      $(this).find(".tooltip-content").fadeIn();
    },
    function () {
      $(this).find(".tooltip-content").hide();
    }
  );

  // Mobile Nav
  $(".hamburger").click(function () {
    $("header").toggleClass("active-menu");
  });


  $('select').change(function () {
      var selectedValue = $(this).val();
      var emptyOption = $('.empty-option');
      if (selectedValue === '') {
        emptyOption.hide();
      }
  });


});

