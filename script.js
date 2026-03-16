function converter(){

let valor = document.getElementById("valor").value
let moeda1 = document.getElementById("moeda1").value
let moeda2 = document.getElementById("moeda2").value
let resultado = document.getElementById("resultado")

if(valor == "" || valor <= 0){
resultado.innerHTML = "Digite um valor válido"
return
}

let taxa = 1

if(moeda1 == "real" && moeda2 == "dolar"){
taxa = 0.20
}

else if(moeda1 == "dolar" && moeda2 == "real"){
taxa = 5
}

else if(moeda1 == "real" && moeda2 == "euro"){
taxa = 0.18
}

else if(moeda1 == "euro" && moeda2 == "real"){
taxa = 5.5
}

else if(moeda1 == "dolar" && moeda2 == "euro"){
taxa = 0.92
}

else if(moeda1 == "euro" && moeda2 == "dolar"){
taxa = 1.08
}

/* LIBRA */

else if(moeda1 == "real" && moeda2 == "libra"){
taxa = 0.16
}

else if(moeda1 == "libra" && moeda2 == "real"){
taxa = 6.2
}

/* IENE */

else if(moeda1 == "real" && moeda2 == "iene"){
taxa = 29
}

else if(moeda1 == "iene" && moeda2 == "real"){
taxa = 0.034
}

/* PESO ARGENTINO */

else if(moeda1 == "real" && moeda2 == "peso"){
taxa = 170
}

else if(moeda1 == "peso" && moeda2 == "real"){
taxa = 0.006
}

else if(moeda1 == moeda2){
taxa = 1
}

let valorConvertido = valor * taxa

let simbolo = ""

if(moeda2 == "real"){
simbolo = "R$ "
}

else if(moeda2 == "dolar"){
simbolo = "$ "
}

else if(moeda2 == "euro"){
simbolo = "€ "
}

else if(moeda2 == "libra"){
simbolo = "£ "
}

else if(moeda2 == "iene"){
simbolo = "¥ "
}

else if(moeda2 == "peso"){
simbolo = "$ "
}

resultado.innerHTML = "Resultado: " + simbolo + valorConvertido.toFixed(2)

}

function inverter(){

let moeda1 = document.getElementById("moeda1")
let moeda2 = document.getElementById("moeda2")

let temp = moeda1.value
moeda1.value = moeda2.value
moeda2.value = temp

}