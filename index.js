"use strict";

const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".nav-link");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("activate");
  navLinks.classList.toggle("show-links");
  navLink.forEach((e) => {
    e.classList.toggle("show-link");
  });
});
