function conversao() {
  
var cotRealDolar = 5.09;
var cotRealEuro = 5.23;
var cotRealIene = 0.036;
var cotRealWonSC = 0.0037;
var cotRealYuan = 0.74;
var cotDolarEuro = 1.01;
var cotDolarIene = 0.0070; 
var cotDolarWonSC = 0.00073; 
var cotDolarYuan = 0.14;   
var cotEuroIene = 0.0069; 
var cotEuroWonSC = 0.00072; 
var cotEuroYuan = 0.14; 
var cotIeneWonSC = 0.10;
var cotIeneYuan = 20.58;
var cotWonSCYuan = 198.60;

var valorOrigem = document.getElementById("moedaOrigem").value;
var valorDestino = document.getElementById("moedaDestino").value;
var valorDigitado = parseFloat(document.getElementById("valorDigitado").value);
var valorFinal;
  
  switch (true) {
      
    case valorOrigem == "brl" && valorDestino == "usd":
      valorFinal = "US$" + (valorDigitado / cotRealDolar).toFixed(2);
      break;

    case valorOrigem == "usd" && valorDestino == "brl":
      valorFinal = "R$" + (valorDigitado * cotRealDolar).toFixed(2);
      break;

    case valorOrigem == "brl" && valorDestino == "eur":
      valorFinal = "€" + (valorDigitado / cotRealEuro).toFixed(2);
      break;

    case valorOrigem == "eur" && valorDestino == "brl":
      valorFinal = "R$" + (valorDigitado * cotRealEuro).toFixed(2);
      break;

    case valorOrigem == "brl" && valorDestino == "jpy":
      valorFinal = "¥" + (valorDigitado / cotRealIene).toFixed(2);
      break;

    case valorOrigem == "jpy" && valorDestino == "brl":
      valorFinal = "R$" + (valorDigitado * cotRealIene).toFixed(2);
      break;

    case valorOrigem == "brl" && valorDestino == "krw":
      valorFinal = "₩" + (valorDigitado / cotRealWonSC).toFixed(2);
      break;

    case valorOrigem == "krw" && valorDestino == "brl":
      valorFinal = "R$" + (valorDigitado * cotRealWonSC).toFixed(2);
      break;

    case valorOrigem == "brl" && valorDestino == "cny":
      valorFinal = "元" + (valorDigitado / cotRealYuan).toFixed(2);
      break;

    case valorOrigem == "cny" && valorDestino == "brl":
      valorFinal = " R$" + (valorDigitado * cotRealYuan).toFixed(2);
      break;

    case valorOrigem == "usd" && valorDestino == "eur":
      valorFinal = "€" + (valorDigitado / cotDolarEuro).toFixed(2);
      break;

    case valorOrigem == "eur" && valorDestino == "usd":
      valorFinal = "US$" + (valorDigitado * cotDolarEuro).toFixed(2);
      break;

    case valorOrigem == "usd" && valorDestino == "jpy":
      valorFinal = "¥" + (valorDigitado / cotDolarIene).toFixed(2);
      break;

    case valorOrigem == "jpy" && valorDestino == "usd":
      valorFinal = "US$" + (valorDigitado * cotDolarIene).toFixed(2);
      break;

    case valorOrigem == "usd" && valorDestino == "krw":
      valorFinal = "₩" + (valorDigitado / cotDolarWonSC).toFixed(2);
      break;

    case valorOrigem == "krw" && valorDestino == "usd":
      valorFinal = "US$" + (valorDigitado * cotDolarWonSC).toFixed(2);
      break;

    case valorOrigem == "usd" && valorDestino == "cny":
      valorFinal = "元" + (valorDigitado / cotDolarYuan).toFixed(2);
      break;

    case valorOrigem == "cny" && valorDestino == "usd":
      valorFinal = "US$" + (valorDigitado * cotDolarYuan).toFixed(2);
      break;

    case valorOrigem == "eur" && valorDestino == "jpy":
      valorFinal = "¥" + (valorDigitado / cotEuroIene).toFixed(2);
      break;

    case valorOrigem == "jpy" && valorDestino == "eur":
      valorFinal = "€" + (valorDigitado * cotEuroIene).toFixed(2);
      break;

    case valorOrigem == "eur" && valorDestino == "krw":
      valorFinal = "₩" + (valorDigitado / cotEuroWonSC).toFixed(2);
      break;

    case valorOrigem == "krw" && valorDestino == "eur":
      valorFinal = "€" + (valorDigitado * cotEuroWonSC).toFixed(2);
      break;

    case valorOrigem == "eur" && valorDestino == "cny":
      valorFinal = "元" + (valorDigitado / cotEuroYuan).toFixed(2);
      break;

    case valorOrigem == "cny" && valorDestino == "eur":
      valorFinal = "€" + (valorDigitado * cotEuroYuan).toFixed(2);
      break;

    case valorOrigem == "jpy" && valorDestino == "krw":
      valorFinal = "₩" + (valorDigitado / cotIeneWonSC).toFixed(2);
      break;

    case valorOrigem == "krw" && valorDestino == "jpy":
      valorFinal = "¥" + (valorDigitado * cotIeneWonSC).toFixed(2);
      break;

    case valorOrigem == "jpy" && valorDestino == "cny":
      valorFinal = "元" + (valorDigitado / cotIeneYuan).toFixed(2);
      break;

    case valorOrigem == "cny" && valorDestino == "jpy":
      valorFinal = "¥" + (valorDigitado * cotIeneYuan).toFixed(2);
      break;

    case valorOrigem == "krw" && valorDestino == "cny":
      valorFinal = "元" + (valorDigitado / cotWonSCYuan).toFixed(2);
      break;

    case valorOrigem == "cny" && valorDestino == "krw":
      valorFinal = "₩" + (valorDigitado * cotWonSCYuan).toFixed(2);
      break;
      
    case valorOrigem == valorDestino:
      alert ("Insira moedas diferentes");
      valorFinal = "Ops!!!"
      break;     
  }
  
 var valorConvertido = document.getElementById("valorConvertido");   
 valorConvertido.innerHTML = valorFinal;
  
}