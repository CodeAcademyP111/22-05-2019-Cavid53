// var slider = document.querySelector("#slider");
// var right = document.querySelector(".right");
// var left = document.querySelector(".left");

// right.addEventListener("click", function () {
//     var active = document.querySelector(".active");
//     if (active.nextElementSibling != null) {
//         var active = document.querySelector(".active");
//         active.nextElementSibling.classList.add("active");
//         active.classList.remove("active");
//     } else {

//         slider.children[0].children[0].classList.add("active");
//         active.classList.remove("active");
//     }
// })

// left.addEventListener("click", function () {
//     var active2 = document.querySelector(".active");
//     if (active2.previousElementSibling != null) {
//         active2.previousElementSibling.classList.add("active");
//         active2.classList.remove("active");
//     } else {
//         var count=slider.children[0].childElementCount;
//         slider.children[0].children[count-1].classList.add("active");
//         active2.classList.remove("active");
//     }
// })



// homework slider with key

var slider = document.querySelector("#slider");
var right = document.querySelector(".right");
var left = document.querySelector(".left");

leftP = 0;

document.body.addEventListener("keydown", function (ev) {

    if (ev.which == 37) {
        left -= 1110;
        var active = document.querySelector(".active");
        if (active.nextElementSibling != null) {
            var active = document.querySelector(".active");
            active.nextElementSibling.classList.add("active");
            active.classList.remove("active");
        } else {

            slider.children[0].children[0].classList.add("active");
            active.classList.remove("active");
        }

    }

    if (ev.which == 39) {
        left += 1110;

        var active2 = document.querySelector(".active");
        if (active2.previousElementSibling != null) {
            active2.previousElementSibling.classList.add("active");
            active2.classList.remove("active");
        } else {
            var count = slider.children[0].childElementCount;
            slider.children[0].children[count - 1].classList.add("active");
            active2.classList.remove("active");
        }
    }

    slider.style.left = leftP + "px";
})