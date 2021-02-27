let images = [{
    src: "images/image 0.jpg",
    title: "Rostov-on-Don Admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request"
  }, {
    src: "images/image 1.jpg",
    title: "Sochi Thieve",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request"
  }, {
    src: "images/image 2.jpg",
    title: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request"
  }];

function initSlider(options) {
  if (!images || !images.length) return;
  
  options = options || {
    titles: false,
    dots: true,
  };
  
  let sliderImages = document.querySelector(".slider_photo");
  let sliderArrows = document.querySelector(".slider");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderTitle = document.querySelector(".part_2_navigation");
  let textCity = document.querySelector(".s_city");
  let textArea = document.querySelector(".s_area");
  let textTime = document.querySelector(".s_time");
  let textCost = document.querySelector(".s_cost");

  initImages();
  initArrows();
  
  if (options.dots) {
    initDots();
  }
  
  if (options.titles) {
    initTitles();
  }

  if (options.text) {
    initText();
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
    if (options.text) {
      textCity.querySelector(".active_text").classList.remove("active_text");
      textCity.querySelector(".t" + num).classList.add("active_text");
    }
    if (options.text) {
      textArea.querySelector(".active_text").classList.remove("active_text");
      textArea.querySelector(".t" + num).classList.add("active_text");
    }
    if (options.text) {
      textTime.querySelector(".active_text").classList.remove("active_text");
      textTime.querySelector(".t" + num).classList.add("active_text");
    }
    if (options.text) {
      textCost.querySelector(".active_text").classList.remove("active_text");
      textCost.querySelector(".t" + num).classList.add("active_text");
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


  function initText() {
    images.forEach((image, index) => {
      let t_City = `<spav class="subtitle s2 s2_1 t${index} ${index === 0? " active_text" : ""}" data-index="${index}">${images[index].title}</span>`;
      textCity.innerHTML += t_City;

      let t_Area = `<spav class="subtitle s2 t${index} ${index === 0? " active_text" : ""}" data-index="${index}">${images[index].area}</span>`;
      textArea.innerHTML += t_Area;

      let t_Time = `<spav class="subtitle s2 t${index} ${index === 0? " active_text" : ""}" data-index="${index}">${images[index].time}</span>`;
      textTime.innerHTML += t_Time;

      let t_Cost = `<spav class="subtitle s2 t${index} ${index === 0? " active_text" : ""}" data-index="${index}">${images[index].cost}</span>`;
      textCost.innerHTML += t_Cost;
    });
  }
}

let sliderOptions = {
  dots: true,
  titles: true,
  text: true,
};

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});