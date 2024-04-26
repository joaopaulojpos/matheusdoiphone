function calculo(val1, val2) {
  valor_compra = parseInt(val1);
  valor_entrada = val2;

  var taxas = [3.156999999999994, 4.656999999999994, 5.76400000000001, 6.5980000000000025, 7.433999999999992, 8.283999999999992, 8.553999999999997, 9.432999999999993, 10.31400000000001, 11.222000000000003, 12.132999999999992, 13.071000000000005, 14.376999999999999, 15.259999999999991, 16.225, 17.054999999999996, 17.938000000000013, 20.481999999999996];

  let taxa_debito = 1.36;
  var valor_parcelas = [];
  var valor_total = [];

  var valor = valor_compra - valor_entrada;

  //parte da taxa de débito
  let percentual_debito = (taxa_debito * valor) / 100;
  let debito_total = valor + percentual_debito;
  
  var i = 0;
  while (taxas[i]) {
    
    let percentual = (taxas[i] * valor) / 100
    valor_total.push(valor + percentual); //Populando os valores totais
    valor_parcelas.push((valor + percentual) / (i+1)); //Populando os valores das parcelas
    i++;
  }

  var table = "";
  for(var i in valor_parcelas){
    let parcelas = (parseInt(i) + 1);
    table += "<tr>" + "<td>" + parcelas + " x" + "</td>" + "<td>" + valor_parcelas[i].toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + "</td>" + "<td>" + 
    valor_total[i].toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + "</td></tr>";
  }

  debito_linha = "<tr>" + "<td>" + "Débito " + "</td>" + "<td>" + debito_total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + "</td>" + "<td>" + 
  debito_total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + "</td></tr>";

  document.getElementById("exibir").innerHTML = debito_linha + table;

}

var text = document.getElementById("val_compra");
var entrada = document.getElementById("val_entrada");

text.addEventListener("keyup", function () {
  var val_compra = this.value;
  var val_entrada = document.getElementById("val_entrada").innerHTML
  calculo(val_compra, val_entrada);
})

entrada.addEventListener("keyup", function () {
  var val_compra = text.value
  val_entrada = this.value;
  calculo(val_compra, val_entrada);
})

function keyPressed(evt){
  evt = evt || window.event;
  var key = evt.keyCode || evt.which;
  return String.fromCharCode(key); 
}

document.onkeypress = function(evt) {
  var str = keyPressed(evt);
  
  if(str == ',' | str == '.')
      alert("Por favor apague e digite apenas números");
};