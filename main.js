// ===========
// NAVIGATION
// ===========

const mainNav = document.querySelector(".NAV_CONTAINER");
const navTimes = document.querySelector("#navTimes");
const navBars = document.querySelector("#navBar");


navBars.addEventListener('click', () => {
    if (!mainNav.classList.contains("show_nav")) {
        mainNav.classList.add("show_nav")
    }else{
        mainNav.classList.remove("show_nav")
    }
})


// ===========
// BACK TOTOP
// ===========
const totop = document.querySelector(".TotopContainer");
// console.log(totop);
window.addEventListener("scroll", () => {
    const scrollHgt = window.pageYOffset;
    // console.log(scrollHgt);
    if(scrollHgt > 500){
        totop.classList.add("showtoTop");
    }else{
        totop.classList.remove("showtoTop");
    }
})


// =============== 
// SKILL SECTION
// ===============
const skillbtns = document.querySelectorAll(".skillHead");
const skillOne = document.querySelector("#skillHeadOne");

skillbtns.forEach((skilllinks) => {
    skilllinks.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(123);
    })
})
