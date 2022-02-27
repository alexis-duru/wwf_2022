// SPLASHSCREEN

const { Color } = require("three");

let intro = document.querySelector('.intro');
let logo = document.querySelector('.intro__logo');
let logoSpan = document.querySelectorAll('.intro__logo__letter');
const expandMenuIcon = document.querySelector('.menuicon');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) =>{
            setTimeout(() => {
                span.classList.add('active');
            }, (idx +1) * 400)
        });
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 100)
            })
        },2000)
        setTimeout(() =>{
            intro.style.top = '-100vh';
        },3000)
    })
    setTimeout(()=>{
        expandMenuIcon.classList.toggle('activeCircle');
    }, 4000)
})

// NAVIGATION 

// Active the toggle on click

function menuToggle() {
    let nav = document.getElementById("nav")
    let toggle = document.getElementById("toggle")
    nav.classList.toggle("active")
    toggle.classList.toggle("active")
}

// Change the color of toggle on click


// Expand fx on the button

document.addEventListener('click', () => {
    expandMenuIcon.classList.add('expand');

    setTimeout(() => {
        expandMenuIcon.classList.remove('expand');
    }, 300);
}) 

// Navigation txt

function ChangeTxtMenu() {
    var changeText = document.getElementById("changeMenu");
    if (changeText.innerHTML === "Close") {
        changeText.innerHTML = "Menu";
    } else {
        changeText.innerHTML = "Close";
    }
}

// HOMEPAGE

// CIRCLE CURSOR //


var cursor = $(".cursor"),
follower = $(".cursor-follower");

var posX = 0,
posY = 0,
mouseX = 0,
mouseY = 0;

TweenMax.to({}, 0.016, {
repeat: -1,
onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
        css: {
            left: posX - 3.5,
            top: posY - 3.5
        }
    });

    TweenMax.set(cursor, {
        css: {
            left: mouseX,
            top: mouseY
        }
    });
}
});

// CURSOR INCREASE / DECREASE

$(document).on("mousemove", function(e) {
mouseX = e.pageX;
mouseY = e.pageY;
});

$(".li-hidden").on("mouseenter", function() {
follower.addClass("increase");
cursor.addClass("decrease-follower");
});
    
$(".li-hidden").on("mouseleave", function() {
follower.removeClass("increase");
cursor.removeClass("decrease-follower");
});

$("#c3-link").on("mouseenter", function() {
    follower.addClass("increase");
    cursor.addClass("decrease-follower");
});

$("#c3-link").on("mouseleave", function() {
    follower.removeClass("increase");
    cursor.removeClass("decrease-follower");
});

$("#c1-title").on("mouseenter", function() {
    follower.addClass("increase");
    cursor.addClass("decrease-follower");
});

$("#c1-title").on("mouseleave", function() {
    follower.removeClass("increase");
    cursor.removeClass("decrease-follower");
});

// PROGRESSBAR

let progressBar = document.querySelector('.progressbar');
let progressNum = document.querySelector('.progressnum')

let x, y;

window.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY
})

function updateProgressBar() {
    progressBar.style.height = `${getScrollPercentage()}%`;
    progressNum.innerText = `${Math.ceil(getScrollPercentage() * 10)}` + ` degrees`
    requestAnimationFrame(updateProgressBar)
}

function getScrollPercentage() {
    return ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)
}

updateProgressBar()

// Background color //






