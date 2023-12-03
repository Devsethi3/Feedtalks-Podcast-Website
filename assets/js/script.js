// ==================================================== SCROLL HEADER ================================================== //
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// ====================================================== NAV MENU ====================================================== //

const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
window.addEventListener("scroll", () => {
  navMenu.classList.remove("show-menu");
});

// ====================================================== SEARCH TOGGLE ====================================================== //

const searchToggle = document.getElementById("search-toggle");
const searchPage = document.querySelector(".search-page");
const searchClose = document.getElementById("search-close");

if (searchToggle) {
  searchToggle.addEventListener("click", () => {
    searchPage.classList.add("show-search");
  });
}

if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchPage.classList.remove("show-search");
  });
}
function hideSearch() {
  searchPage.classList.remove("show-search");
}
window.addEventListener("scroll", hideSearch);

// ====================================================== REGISTER PAGE ====================================================== //

const registerToggle = document.getElementById("register-toggle");
const registerPage = document.querySelector(".register-page");
const registerClose = document.getElementById("register-close");

if (registerToggle) {
  registerToggle.addEventListener("click", () => {
    registerPage.classList.add("show-register");
  });
}

if (registerClose) {
  registerClose.addEventListener("click", () => {
    registerPage.classList.remove("show-register");
  });
}

// ====================================================== SCROLL UP ====================================================== //

function scrollUp() {
  const scrollBtn = document.getElementById("scroll-up");
  if (this.scrollY >= 300) {
    scrollBtn.classList.add("show-scrollup");
  } else {
    scrollBtn.classList.remove("show-scrollup");
  }
}
window.addEventListener("scroll", scrollUp);

// ====================================================== GSAP ANIMATIONS ====================================================== //

let tl1 = gsap.timeline();
tl1.from(
  ".home-title",
  {
    y: -100,
    opacity: 0,
    duration: 0.7,
  },
  "a"
);
tl1.from(
  ".home-img",
  {
    x: 100,
    opacity: 0,
    duration: 0.7,
  },
  "a"
);
tl1.from(
  ".home-description",
  {
    y: 100,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
  },
  "a"
);
tl1.from(
  ".home-action",
  {
    y: 50,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
  },
  "a"
);
tl1.from(
  ".home-bottom, .home-description-bottom",
  {
    y: 50,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
  },
  "a"
);

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    scroll: ".main",
    start: "top 50%",
    end: "bottom 10%",
  },
});
tl2.from(
  ".about-content",
  {
    x: 60,
    opacity: 0,
    duration: 0.6,
  },
  "b"
);
tl2.from(
  ".about-img",
  {
    x: -60,
    opacity: 0,
    duration: 0.6,
  },
  "b"
);

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".categories",
    scroll: ".main",
    start: "top 50%",
    end: "bottom 10%",
  },
});
tl3.from(".tag-item", {
  x: -60,
  opacity: 0,
  duration: 0.7,
  stagger: 0.03,
});

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#feature",
    scroll: "body",
    start: "top 50%",
    end: "bottom 10%",
    scrub: 5,
  },
});

tl4.from(".about-feature-img", {
  y: 50,
  duration: 1.5,
});

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".podcast",
    scroll: "body",
    start: "top 50%",
    end: "bottom 10%",
  },
});

tl5.from(
  ".podcast-container>h2",
  {
    y: -80,
    opacity: 0,
    duration: 0.7,
    delay: 0.05,
  },
  "c"
);
tl5.from(
  ".podcast-item",
  {
    y: 100,
    opacity: 0,
    duration: 0.7,
    stagger: 0.05,
  },
  "c"
);

let tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".newsletter",
    scroll: ".main",
    start: "top 50%",
    end: "bottom 10%",
  },
});
tl6.from(
  ".newsletter-content",
  {
    x: 60,
    opacity: 0,
    duration: 0.6,
  },
  "d"
);
tl6.from(
  ".newsletter-img",
  {
    x: -60,
    opacity: 0,
    duration: 0.6,
  },
  "d"
);
