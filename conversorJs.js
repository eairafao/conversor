function Converter() {
  var selecao = document.getElementById('selecao')
  var opcaoEscolhida = selecao.options[selecao.selectedIndex].value
  console.log(opcaoEscolhida)

  if (opcaoEscolhida == 'dol') {
    var valorDoElemento = document.getElementById('valor') //pegando o valor colocado
    var valor = valorDoElemento.value //chamando o valor colocado
    var valorNumerico = parseFloat(valor) //passando o valor string para número float

    var valorEmDol = valorNumerico / 5.46

    var elementoValorConvertido = document.getElementById('valorConvertido') //linha 12 html
    var valorConvertido = `R$${valorNumerico} Reais covertido para Dolar é ${valorEmDol.toFixed(
      2
    )}$ Dollares`

    elementoValorConvertido.innerHTML = valorConvertido //colocando o valor convertido no h2 do html
  }

  if (opcaoEscolhida == 'libra') {
    var valorDoElemento = document.getElementById('valor') //pegando o valor colocado
    var valor = valorDoElemento.value //chamando o valor colocado
    var valorNumerico = parseFloat(valor) //passando o valor string para número float

    var valorEmLibra = valorNumerico / 7.5

    var elementoValorConvertido = document.getElementById('valorConvertido') //linha 12 html
    var valorConvertido = `R$${valorNumerico} Reais covertido para Libra Esterlina é £${valorEmLibra.toFixed(
      2
    )} Libras`

    elementoValorConvertido.innerHTML = valorConvertido //colocando o valor convertido no h2 do html
  }

  if (opcaoEscolhida == 'euro') {
    var valorDoElemento = document.getElementById('valor') //pegando o valor colocado
    var valor = valorDoElemento.value //chamando o valor colocado
    var valorNumerico = parseFloat(valor) //passando o valor string para número float

    var valorEmEuro = valorNumerico / 6.33

    var elementoValorConvertido = document.getElementById('valorConvertido') //linha 12 html
    var valorConvertido = `R$${valorNumerico} Reais covertido para Euro é €${valorEmEuro.toFixed(
      2
    )} Euros`

    elementoValorConvertido.innerHTML = valorConvertido //colocando o valor convertido no h2 do html
  }
}
