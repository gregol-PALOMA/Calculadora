
var res = null;
var n1;
var n2;

function iniciar(){
  n1 = prompt('Coloque o primeiro numero a ser calculado: ');
  n2 = prompt('Coloque o segundo numero a ser calculado: ');
  n1= parseInt(n1);
  n2= parseInt(n2);
  return n1, n2;
}

function display(value) {
  document.getElementById("result").value = value;
}

function clean(){
  document.getElementById("result").value = '_';
}

function menos(){
  res = n1 - n2;
  return res
}

function soma(){ 
  res = n1 + n2;
  return res;
}

function mutiplicacao(){
  res = n1 * n2;
  return res;
}

function divisao(){
  res = n1/n2;
  return res
}