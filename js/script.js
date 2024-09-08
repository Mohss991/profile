
const menu =document.getElementById("menu");
const action =document.getElementById("actions");

menu.addEventListener("click", ()=>{
    hundleMenu();
})

function hundleMenu(){
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
}

if(localStorage.getItem("themeMode") === "dark"){
addCssDark();
}else{
localStorage.setItem("themeMode", "light");
}
function changeTheme(){
if(localStorage.getItem("themeMode") === "light"){
addCssDark();
localStorage.setItem("themeMode", "dark");
}else{
document.getElementById("masdark").remove();
document.getElementById("toggles").classList.remove("active");
localStorage.setItem("themeMode", "light");
document.getElementById("toggles").title = "Change to dark mode";
}
}
function addCssDark() {
    document.head.innerHTML = document.head.innerHTML + '<style id="masdark">html, html * {color: #eeeeee !important; background-color: #292929 !important;} a {color: #8db2e5 !important;background-color: #fffdfd !important;} a:visited { color: rgb(211, 138, 138)!important; } span{color:#ffe600 !important;} #toggles.active { background: #fff!important; } </style > ';
    document.getElementById("toggles").classList.add("active");
    document.getElementById("toggles").title = "Change to light mode";
}

    document.getElementById("mohanad").style.color="#ffe600";

    
           