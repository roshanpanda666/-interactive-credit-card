

document.querySelector("button").addEventListener("click",clicked)

function clicked(){
var inp1=document.getElementById("name").value
var inp2=document.getElementById("number").value
var inp3=document.getElementById("ddmmyy").value
var inp4=document.getElementById("ddmmyy2").value
var inp5=document.getElementById("cvc").value


document.getElementById("namef").innerHTML=inp1
document.getElementById("numberf").innerHTML=inp2
document.getElementById("mon").innerHTML=inp3
document.getElementById("yer").innerHTML=inp4
document.getElementById("cvcf").innerHTML=inp5
document.getElementById("inputs").style.display="none"
document.getElementById("thanks").style.display="block"

}