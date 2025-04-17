// Mini Sliders for Each Circular Image
document.querySelectorAll(".circular-slider").forEach((slider) => {
    let index = 0;
    const images = slider.querySelectorAll("img");

    function changeImage() {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }

    setInterval(changeImage, 2000); // Change every 2 seconds
});



// Animate Section When User Scrolls to It
const circularSection = document.getElementById("circularSection");

function checkVisibility() {
    const rect = circularSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        circularSection.classList.add("visible");
    }
}

window.addEventListener("scroll", checkVisibility);
checkVisibility();



let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
   slides[currentIndex].classList.remove("active");
   currentIndex = (currentIndex + 1) % slides.length;
   slides[currentIndex].classList.add("active");
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});


//Courses animation 
const coursesSection = document.getElementById("courses");

function checkCoursesVisibility() {
    const rect = coursesSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        coursesSection.classList.add("visible");
    }
}

window.addEventListener("scroll", checkCoursesVisibility);
checkCoursesVisibility();


//Footer section
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});