function goToStep2() {
    document.getElementById("step1").classList.remove("active");
    document.getElementById("step2").classList.add("active");
}

function goToStep3() {
    document.getElementById("step2").classList.remove("active");
    document.getElementById("step3").classList.add("active");
}

function finalStep() {
    document.getElementById("step3").classList.remove("active");
    document.getElementById("finalMessage").classList.add("active");
}

function moveButton(button) {

    const maxX = window.innerWidth - button.offsetWidth - 20;
    const maxY = window.innerHeight - button.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    button.style.position = "fixed";
    button.style.left = x + "px";
    button.style.top = y + "px";
}
