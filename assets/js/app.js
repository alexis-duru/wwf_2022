// SPLASHSCREEN

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-first-page');
let logoSpan = document.querySelectorAll('.logo');

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
})

// NAVIGATION 

// Active the toggle on click

function menuToggle() {
    var nav = document.getElementById("nav")
    var toggle = document.getElementById("toggle")
    nav.classList.toggle("active")
    toggle.classList.toggle("active")
}

// Expand fx on the button

const expandMenuIcon = document.querySelector('.menuicon');

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

// Cursor //


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

// Background color //

// let changeBackground = document.querySelector ('.c-2');

// window.addEventListener('scroll', () => {
//     if(window.scrollY > 590){
//         changeBackground.classList.add('bgcolor');
//     }else{
//         changeBackground.classList.remove('bgcolor');
//     }
//     console.log(scroll)  
// });

// Progress Bar

let progressSection = document.querySelector('.progress-section');
let progressBar = document.querySelector('.progress-bar');
let progressNum = document.querySelector('.progress-num')

let x, y;

window.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY
})

function updateProgressBar() {
    progressBar.style.height = `${getScrollPercentage()}%`;
    progressNum.innerText = `${Math.ceil(getScrollPercentage())}%` + ` degrees`
    requestAnimationFrame(updateProgressBar)
}

function getScrollPercentage() {
    return ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)
}

updateProgressBar()

// SMOOTH SCROLL

// TXT HORIZONTAL


// AOS





