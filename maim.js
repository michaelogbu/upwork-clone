// ===========
// NAVIGATION
// ===========

const mainNav = document.querySelector(".NAV_CONTAINER");
const navTimes = document.querySelector("#navTimes");
const navBars = document.querySelector("#navBar");


navBars.addEventListener('click', () => {
    if (!mainNav.classList.contains("show_nav")) {
        mainNav.classList.add("show_nav")
    }else if(mainNav.classList.contains("show_nav")){
        mainNav.classList.add("hide_nav")
    }else{
        mainNav.classList.remove("hide_nav")
    }
})
// navBars.classList.replace('mainNav', 'navTimes')

// sidebar.classList.contains('show-sidebar') ? sidebar.classList.remove('show-sidebar') : sidebar.classList.add('show-sidebar');
// else{
//     mainNav.classList.add('show_nav')
// }
// mainNav.classList.toggle('show_nav')
// else {
//     // console.log(1223);
//     // mainNav.classList.remove("show_nav")
// }



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
