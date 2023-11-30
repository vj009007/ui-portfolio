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
document.addEventListener("DOMContentLoaded", function () {
  // Pause Video on Close Button Click
  const video = document.querySelector("video");
  const closeButton = document.querySelector(".close");

  if (video && closeButton) {
    closeButton.addEventListener("click", function () {
      video.pause();
    });
  }

  // Play Video on Start Button Click
  const startButton = document.querySelector("#myBtn");

  if (video && startButton) {
    startButton.addEventListener("click", function () {
      video.play();
    });
  }
  // Mobile Nav
  const hamburger = document.querySelector(".hamburger");
  const header = document.querySelector("header");

  if (hamburger && header) {
    hamburger.addEventListener("click", function () {
      header.classList.toggle("active-menu");
    });
  }
  // Tooltip
  const tooltips = document.querySelectorAll(".tooltip");

  tooltips.forEach(function (tooltip) {
    tooltip.addEventListener("mouseover", function () {
      const tooltipContent = tooltip.querySelector(".tooltip-content");
      if (tooltipContent) {
        tooltipContent.style.display = "block";
      }
    });

    tooltip.addEventListener("mouseout", function () {
      const tooltipContent = tooltip.querySelector(".tooltip-content");
      if (tooltipContent) {
        tooltipContent.style.display = "none";
      }
    });
  });
});

// Form Label

document.addEventListener("DOMContentLoaded", function () {
  // Form Item Click
  const formItems = document.querySelectorAll(".form-item");
  formItems.forEach(function (formItem) {
    formItem.addEventListener("click", function () {
      formItem.classList.add("active");
    });
  });

  // Form Input Blur
  const formInputs = document.querySelectorAll(".form_input");
  formInputs.forEach(function (formInput) {
    formInput.addEventListener("blur", function () {
      if (formInput.value === "") {
        const parentFormItem = formInput.closest(".form-item");
        if (parentFormItem) {
          parentFormItem.classList.remove("active");
        }
      }
    });
  });
});
