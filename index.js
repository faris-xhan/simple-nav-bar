const nav = document.querySelector(".nav-bar");

const options = {
  threshold: "0.25",
  // rootMargin: "-250px",
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entery) => {
    if (entery.isIntersecting) {
      nav.classList.add("inverse");
    } else {
      nav.classList.remove("inverse");
    }
  });
}, options);

observer.observe(document.querySelector("main"));
