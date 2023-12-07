const options = document.getElementById("options");
const close = document.getElementById("close");
const smallwindow = document.getElementById("window");
const info = document.getElementById("info");
const underline = document.getElementById("underline");
const creations = document.getElementById("creations");
const titles = document.getElementById("title");

options.addEventListener("click", (e) => {
   if (smallwindow.style.display != "block"){
        smallwindow.style.display = "block";
    }
});

close.addEventListener("click", (e) => {
    if (smallwindow.style.display = "block"){
        smallwindow.style.display = "none";
    }
});

creations.addEventListener("mouseover", (e) => {
    if (titles.classList != ("title selected")){
        titles.classList.remove("selected")
        titles.classList.add("selected");
    } else {
        titles.classList.remove("selected");
    }
});