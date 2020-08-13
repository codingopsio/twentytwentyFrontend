const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const toggleCoursesBtn = document.querySelector(".toggle-courses");
const filterCoursesList = document.querySelector(".filter-courses-list");
const menu = document.querySelector("nav");
const sortBtn = document.querySelector(".sort-btn");
const sortMenu = document.querySelector(".sort-menu");

//functions

//function to open navbar
function openMenu() {
  menu.classList.add("open");
}

//function to close navbar
function closeMenu() {
  menu.classList.remove("open");
}

//function to toggle courses filter menu
function toggleCourses() {
  filterCoursesList.classList.toggle("open");
  toggleCoursesBtn.classList.toggle("rotate");
}

//function to handle sort Menu
function handleSortMenu() {
  sortMenu.classList.toggle("open");
}
// event listeners
openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
toggleCoursesBtn.addEventListener("click", toggleCourses);
sortBtn.addEventListener("click", handleSortMenu);
