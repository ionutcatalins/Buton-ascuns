function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let buttonWin = getRandomInt(3);

function winButtonFirst() {    
    if(buttonWin == 0) {
        document.getElementById("text").innerHTML = 'Castigator'
    } else {
        document.getElementById("text").innerHTML = 'Necastigator'
    }
    
}

function winButtonSecond() {    
    if(buttonWin == 1) {
        document.getElementById("text").innerHTML = 'Castigator'
    } else {
        document.getElementById("text").innerHTML = 'Necastigator'
    }
}

function winButtonLast() {    
    if(buttonWin == 2) {
        document.getElementById("text").innerHTML = 'Castigator'
    } else {
        document.getElementById("text").innerHTML = 'Necastigator'
    }
}

