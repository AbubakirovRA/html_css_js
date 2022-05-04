let p = document.getElementById("name");
let input = document.getElementById("form");
let button = document.getElementById("btn");
button.addEventListener("click", msg);


function msg() {
    if (input.value == "Rustem")
        p.innerText = 'Welcome, ' + input.value + '!';
    else
    p.innerText = 'Who are you?';
}

function welcome() {
    alert("Enter your name in the form and press 'ok'-button. Name must be Rustem")
}


