"use strict";

const items = [
  {
    id: 1,
    img: "images/item-01.jpeg",
    name: "Uttrakhand",
    desc: "50+ Packages",
  },
  {
    id: 2,
    img: "images/item-02.jpeg",
    name: "Kerala",
    desc: "40+ Packages",
  },
  {
    id: 3,
    img: "images/item-03.jpeg",
    name: "Sikkim",
    desc: "30+ Packages",
  },
  {
    id: 4,
    img: "images/item-04.jpeg",
    name: "Bhutan",
    desc: "20+ Packages",
  },
  {
    id: 5,
    img: "images/item-05.jpeg",
    name: "Thailand",
    desc: "10+ Packages",
  },
  {
    id: 6,
    img: "images/item-06.jpeg",
    name: "Thailand",
    desc: "10+ Packages",
  },
  {
    id: 7,
    img: "images/item-07.jpeg",
    name: "Thailand",
    desc: "30+ Packages",
  },
  {
    id: 8,
    img: "images/item-08.jpeg",
    name: "Jammu & Kashmir",
    desc: "30+ Packages",
  },
  {
    id: 9,
    img: "images/item-09.jpeg",
    name: "Ladakh",
    desc: "25+ Packages",
  },
  {
    id: 10,
    img: "images/item-10.jpeg",
    name: "Maldives",
    desc: "5+ Packages",
  },
  {
    id: 11,
    img: "images/item-11.jpeg",
    name: "Dubai",
    desc: "10+ Packages",
  },
  {
    id: 12,
    img: "images/item-12.jpeg",
    name: "Singapore",
    desc: "10+ Packages",
  },
  {
    id: 13,
    img: "images/item-13.jpeg",
    name: "Indonesia",
    desc: "10+ Packages",
  },
  {
    id: 14,
    img: "images/item-14.jpeg",
    name: "Indonesia",
    desc: "20+ Packages",
  },
];

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

const cards = document.querySelector(".cards");

document.addEventListener("DOMContentLoaded", function () {
  displaySliderItems(items);
});

function displaySliderItems(items) {
  let displaySlide = items.map(
    (item) => `<div class="card">
              <div class="card-img">
                <img src=${item.img} alt=${item.name} class="img" />
              </div>
              <div class="card-desc">
                <h4>${item.name} </h4>
                <p>${item.desc} </p>
              </div>
            </div>`
  );
  displaySlide = displaySlide.join("");
  cards.innerHTML = displaySlide;
}
