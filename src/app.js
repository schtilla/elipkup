/*
File: app.js
Author: Schermann Tilla Réka
Copyright: 2023, Schermann Tilla Réka
Group: Szoft I-2-E
Date: 2023.02.07
Github: 
Licenc: GNU GPL
*/

let radius1=document.querySelector("#sugar1")
let radius2=document.querySelector("#sugar2");
let height=document.querySelector("#magassag");

const calcButton = document.querySelector("#KalkGomb");

const volume = document.querySelector("#terfogat");

KalkGomb.addEventListener('click', ()=>{
    kalkRadius1 = Number(radius1.value);
    kalkRadius2 = Number(radius2.value);
    KalkHeight = Number(height.value);

    volume.value=parseFloat(calcVol(kalkRadius1, kalkRadius2, KalkHeight)).toFixed(3);

})

function calcVol(r1, r2, m) {
    let terfogat = (1/3)*Math.PI*r1*r2*m;
    return terfogat;
}