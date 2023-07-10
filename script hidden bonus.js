function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function button() {
    document.getElementById('result').innerHTML = " "
    let numberButton = 0;
    let value = document.getElementById("btncount").value
    let buttonWin = getRandomInt(value)
    console.log(buttonWin)
    for (let i = 0; i < value; ++i) {
    let choose = 'loser()'
        if (numberButton == buttonWin - 1) {
            choose = 'win()'
        }  
		++numberButton
        let newBtn = document.createElement(type='button');
        newBtn.id = numberButton;
         
        newBtn.setAttribute("onclick", choose)
        newBtn.innerText= "Buton" + (numberButton)
        document.querySelector('#result').appendChild(newBtn)
    }    
}

function win() {
    document.getElementById("text").innerHTML = 'Castigator'
}
function loser() {
    document.getElementById("text").innerHTML = 'Necastigator'
}