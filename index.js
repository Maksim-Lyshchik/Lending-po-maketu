let images = [{
    src: "images/image 0.jpg",
    title: "Rostov-on-Don, Admiral"
  }, {
    src: "images/image 1.jpg",
    title: "Sochi Thieve"
  }, {
    src: "images/image 2.jpg",
    title: "Rostov-on-Don Patriotic"
  }];

function initSlider(options) {
  if (!images || !images.length) return;
  
  options = options || {
    titles: fals,
    dots: true,
  };
  
  let sliderImages = document.querySelector(".slider_photo");
  let sliderArrows = document.querySelector(".slider");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderTitle = document.querySelector(".part_2_navigation");

  initImages();
  initArrows();
  
  if (options.dots) {
    initDots();
  }
  
  if (options.titles) {
    initTitles();
  }
    
  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image: url('images/image ${[index]}.jpg')" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }
  
  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }
  
  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }
  
  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    if (options.dots) {
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
    }
    if (options.titles) {
      sliderTitle.querySelector(".active_titl").classList.remove("active_titl");
      sliderTitle.querySelector(".n" + num).classList.add("active_titl");
    }
  }
  
  function initTitles() {
    images.forEach((image, index) => {
      let titlSlid = `<li class="navigation_p2 n${index} ${index === 0? " active_titl" : ""}" data-index="${index}">${images[index].title}</li>`;
      sliderTitle.innerHTML += titlSlid;
    });
    sliderTitle.querySelectorAll(".navigation_p2").forEach(titlSlid => {
      titlSlid.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }
}

let sliderOptions = {
  dots: true,
  titles: true
};

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});