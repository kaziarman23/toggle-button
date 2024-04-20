const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

update()

function update() {
    if (inputEl.checked === true) {
        bodyEl.style.backgroundColor = "black";
    } else {
        bodyEl.style.backgroundColor = "white";
    }
}

inputEl.addEventListener("input",function(){
    update();
    SaveTolocalStorage()
})


function SaveTolocalStorage(){
    localStorage.setItem("mode",JSON.stringify(inputEl.checked))  
}

// The line of code localStorage.setItem("mode", JSON.stringify(inputEl.checked)) is used to save the state of the checkbox (inputEl.checked) to the browser's local storage. 