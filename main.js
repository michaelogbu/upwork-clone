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
    const scrollHgt = window.scrollY;
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
const skillLeft_contaniner = document.querySelector('.skill_left');
const skillRight_contaniner = document.querySelector('.skill_right');
const skillbtns = document.querySelectorAll(".skillHead");
const skillContainers = document.querySelectorAll('.skillContainer');
const skillShow = document.querySelector('.skillShow');
const one = document.querySelector('.skillOneContainer');
const two = document.querySelector('.skillTwoContainer');
const three = document.querySelector('.skillThreeContainer');
const four = document.querySelector('.skillFourContainer');

// console.log(two.nextElementSibling);
function showOne () {
    
    
}


skillbtns.forEach((skilllink) => {
    skilllink.addEventListener("click", (e) => {
        e.currentTarget;
        if(skilllink.classList.contains('skillHeadOne')){
           
        }
        if(skilllink.classList.contains('skillHeadTwo')){
           
        }
        if(skilllink.classList.contains('skillHeadThree')){

        }
        if(skilllink.classList.contains('skillHeadFour')){
            
        }
    })
})
