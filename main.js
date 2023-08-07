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
const skillLeft_contaniner = document.querySelector('.skill_left');
const skillRight_contaniner = document.querySelector('.skill_right');
const skillbtns = document.querySelectorAll(".skillHead");
const skillContainers = document.querySelectorAll('.skillContainer');
const skillShow = document.querySelector('.skillShow');


function showOne () {
    // const first_child = skillShow.nextElementSibling
    const current =  skillRight_contaniner.firstElementChild
    const mike = current.nextElementSibling
    skillShow.classList.remove('skillShow')
    if (current.classList.contains('skillShow')) {
        current.classList.remove('skillShow')
    } else {
        mike.classList.add('skillShow')
    }
}


skillbtns.forEach((skilllink) => {
    skilllink.addEventListener("click", (e) => {
        e.currentTarget;
        if(skilllink.classList.contains('skillHeadOne')){
            showOne();
        }
        if(skilllink.classList.contains('skillHeadTwo')){
            showOne()
        }
        if(skilllink.classList.contains('skillHeadThree')){
            showOne()
        }
        // if(skilllink.classList.contains('skillHeadFour')){
        // }
    })
})
