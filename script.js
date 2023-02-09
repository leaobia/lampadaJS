'use strict'

const on = document.getElementById('on')
const divImg = document.getElementById('img-lamp')
const off = document.getElementById('off')

on.addEventListener('click', ligar)
off.addEventListener('click', desligar)


function ligar() {
    divImg.classList.add('ligado')
    divImg.classList.remove('desligado')
    }

function desligar() {
    divImg.classList.add('desligado')
    divImg.classList.remove('ligado')
    }