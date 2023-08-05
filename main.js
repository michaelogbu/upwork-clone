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
const skillOne = document.querySelector(".skillHeadOne");
const skillTwo = document.querySelector(".skillHeadTwo");
const skillThree = document.querySelector(".skillHeadThree");
const skillFour = document.querySelector(".skillHeadFour");
// console.log(skillContainer.children);

function showNext () {
    const skillShow = document.querySelector('.skillShow');
    // const skillContainer = document.querySelector('.skill_right');
    const current = skillShow.nextElementSibling;
    console.log(current);
    skillShow.classList.remove('skillShow')
    if(current){
        current.classList.add('skillShow')
    }else{
        skillShow.lastElementChild
    }
}

skillbtns.forEach((skilllinks) => {
    skilllinks.addEventListener("click", (e) => {
        e.currentTarget;
        if(skilllinks.classList.contains('skillHeadOne')){
            showNext();
        }else if(skilllinks.classList.contains('skillHeadTwo')){
            showNext();
        }else if(skilllinks.classList.contains('skillHeadThree')){
            showNext();
        }else if(skilllinks.classList.contains('skillHeadFour')){
            showNext();
        }
    })
})
