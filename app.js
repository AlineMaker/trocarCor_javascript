'use strict'

const buttonTrocarCor = document.getElementById('trocar-cor')
function trocarCor(){
    const cor = document.getElementById('cor').value
document.documentElement.style.setProperty('--bg-color',cor)  
}

buttonTrocarCor.addEventListener('click', trocarCor)