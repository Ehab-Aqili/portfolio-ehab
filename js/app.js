const fadeElements = document.querySelectorAll(".fade-in");
console.log("first")
function fadeInElement(element) {
  element.classList.add("fade-in-active");
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      fadeInElement(entry.target);
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersect, {
  root: null,
  threshold: 0.5, 
});

fadeElements.forEach((element) => {
  observer.observe(element);
});
