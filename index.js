
var inp1=document.getElementById("name").value
var inp2=document.getElementById("number").value
var inp3=document.getElementById("ddmmyy").value
var inp4=document.getElementById("ddmmyy2").value
var inp5=document.getElementById("cvc").value

document.querySelector("button").addEventListener("click",clicked)

function clicked(){


if(inp2==String()){
    document.getElementById("number").style.borderColor="red"
    document.getElementById("cardholdernumber").innerHTML='enter the correct number'
    document.getElementById("cardholdernumber").style.color="red"
}

if(inp3==String()){
    document.getElementById("ddmmyy").style.borderColor="red"
    document.getElementById("lableddmmyy").innerHTML='enter the month in number'
    
}

if(inp4==String()){
    document.getElementById("ddmmyy2").style.borderColor="red"
    document.getElementById("lableddmmyy").innerHTML='enter the year in number'
    
}

if(inp5==String()){
    document.getElementById("cvc").style.borderColor="red"
    document.getElementById("lableddmmyy").innerHTML='enter the correct cvc number'
    
}
else{
document.getElementById("namef").innerHTML=inp1
document.getElementById("numberf").innerHTML=inp2
document.getElementById("mon").innerHTML=inp3
document.getElementById("yer").innerHTML=inp4
document.getElementById("cvcf").innerHTML=inp5
document.getElementById("inputs").style.display="none"
document.getElementById("thanks").style.display="block"

}
}