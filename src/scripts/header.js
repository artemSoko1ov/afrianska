function handleScroll() {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.classList.add("header--fixed");
  } else {
    header.classList.remove("header--fixed");
  }
}

export default function headerModule() {
  window.addEventListener("scroll", handleScroll);
}