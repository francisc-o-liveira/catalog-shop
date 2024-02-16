const showBtn = document.getElementById("button");
const targetButtons = document.getElementById("list");
const img = document.getElementById("cabecalho-img");
const button=document.getElementById("button");

showBtn.addEventListener("click", function() {
    if (targetButtons.style.display === "none") {
        targetButtons.style.display = "block";
        img.style.zIndex = "-5";
        button.src="/assets/img/img/cross.png";
        button.style.width="35px";
        button.style.height="35px";

    } else {
        targetButtons.style.display = "none";
        button.src="/assets/img/img/menu.png";
    }
});

window.addEventListener("resize", function() {
    var sizeWindow = window.innerWidth;
    if (sizeWindow > 1080 && targetButtons.style.display === "block") {
        targetButtons.style.display = "none";
        button.src="/assets/img/img/menu.png";
    }
});