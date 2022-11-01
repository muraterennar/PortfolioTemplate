ScrollReveal().reveal(".headline-header", { delay: 200, distance: "-40px" });
ScrollReveal().reveal(".headline-main-button", {
  delay: 400,
  distance: "60px",
});
ScrollReveal().reveal(".btn-color", { delay: 500, distance: "-30px" });
ScrollReveal().reveal(".card", {
  delay: 500,
  distance: "30px",
  origin: "left",
});
ScrollReveal({ reset: true });
// ScrollReveal().reveal('.headline');

/* ======== FILTERS JS ======== */

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) => {
      tc.classList.remove("filters_active");
    });

    target.classList.add("filters_active");

    tabs.forEach((t) => {
      t.classList.remove("filters-tab-active");
    });
    tab.classList.add("filters-tab-active");
  });
});
