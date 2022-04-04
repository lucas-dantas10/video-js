//select preloader
const preloader = document.querySelector(".preloader");

//select btn
const switchBtn = document.querySelector(".switch-btn");

window.addEventListener("DOMContentLoaded", function() {
    hidePreloader();
    console.log(switchBtn.classList);
})

switchBtn.addEventListener("click", function() {
    switchBtn.classList.toggle("slide")
})

function hidePreloader() {
    preloader.classList.add("hide-preloader");
}