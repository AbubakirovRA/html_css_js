function count() {
    alert("Hello, world!")
    for (var i = 1; i <= 3; i++) {
        alert("Count = " + i + "step")
    }
}

let a = document.getElementById("button1");

function moveIt() {
    let y = Math.floor(Math.random() * 101);
    let x = Math.floor(Math.random() * 201);
    a.style.top = y + "px";
    a.style.left = x + "px";
}
