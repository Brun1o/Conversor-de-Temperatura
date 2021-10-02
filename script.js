function ConverterParaKelvin() {
  var valorElemento = document.getElementById("valor");
  var valorCelcius = valorElemento.value;
  var temperaturaCelcius = parseFloat(valorCelcius);

  console.log(temperaturaCelcius);

  var temperaturaKelvin = temperaturaCelcius + 273.15;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "A temperatura em Kelvin é de " + temperaturaKelvin + "K";
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterParaFahrenheit() {
  var valorElemento = document.getElementById("valor");
  var valorCelcius = valorElemento.value;
  var temperaturaCelcius = parseFloat(valorCelcius);

  console.log(temperaturaCelcius);

  var temperaturaFahrenheit = temperaturaCelcius * 1.8 + 32;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "A temperatura em Kelvin é de " + temperaturaFahrenheit + "°F";
  elementoValorConvertido.innerHTML = valorConvertido;
}