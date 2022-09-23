const input = document.querySelector("input");
const button = document.querySelector("button");
const textHidden = "Show Password";
const textShown = "Hide Password";



function pwToggle () {
    if (input.type==="text"){
        input.setAttribute("type", "password");
        button.textContent = textHidden;
    } else {
        input.setAttribute("type", "text");
        button.textContent = textShown;
    }
}

button.addEventListener("click", pwToggle);