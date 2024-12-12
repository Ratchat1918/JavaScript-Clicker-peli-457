const Btn = document.getElementById("increaseBtn");
const Btn2 = document.getElementById("buyBtnX2");
const Btn3 = document.getElementById("buyBtnX5");
const Btn4 = document.getElementById("buyBtnX10");
let score = 0;
let isX2active = false;
let isX5active = false;
let isX10active = false;

function changeImg(){
    document.getElementById("myImg").src = "tanki_tuhottu.png";
    setInterval(changeImgBack, 1000);
    function changeImgBack(){
        document.getElementById("myImg").src = "tanki_kunossa.png";
    }
}

function increaseScore() {
    document.getElementById("score").textContent = score;

    if (isX2active) {
        score += 2;
    }
    if (isX5active) {
        score += 5;
    }
    if (isX10active) {
        score += 10;
    }

    if (isX2active && isX5active && isX10active) {
        score += 10 * 2 * 5;
    }
    if (isX5active && isX10active) {
        score += 10 * 5;
    }
    if (isX2active && isX5active) {
        score += 2 * 5;
    }
    if (isX2active && isX10active) {
        score += 10 * 2;
    }
    
    if (!isX2active && !isX5active && !isX10active) {
        score += 1;
    }
    
    document.getElementById("score").textContent = score;
}

function buyX2() {
    if (score >= 10) {
        score -= 10;
        isX2active = true;
        document.getElementById("score").textContent = score;
        document.getElementById("buyBtnX2").disabled = true;
        document.getElementById("warning").textContent = "";
    } else {
        document.getElementById("warning").textContent = "Not enough points";
    }
}

function buyX5() {
    if (score >= 100) {
        score -= 100;
        isX5active = true;
        document.getElementById("score").textContent = score;
        document.getElementById("buyBtnX5").disabled = true;
    } else {
        document.getElementById("warning2").textContent = "Not enough points";
    }
}

function buyX10() {
    if (score >= 1000) {
        score -= 1000;
        isX10active = true;
        document.getElementById("score").textContent = score;
        document.getElementById("buyBtnX10").disabled = true;
    } else {
        document.getElementById("warning3").textContent = "Not enough points";
    }
}

Btn.addEventListener('click', increaseScore);
Btn.addEventListener('click', changeImg);
Btn2.addEventListener('click', buyX2);
Btn3.addEventListener('click', buyX5);
Btn4.addEventListener('click', buyX10);