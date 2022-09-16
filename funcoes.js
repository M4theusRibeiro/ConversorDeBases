function calcularBinario(){

      var binario = Number (inputBinario.value);
      var decimal = parseInt(binario, 2);
      var octal = decimal.toString(8);
      var hexadecimal = decimal.toString(16);

   divResultadoBinario.innerHTML = `
   <p>O Binário escolhido é: ${binario}<br>
   Em octal é: ${octal}<br>
   Em decimal é: ${decimal}<br>
   Em hexadecimal é: ${hexadecimal}</p>
   `;
}
function calcularOctal(){
   
      var octal = Number(inputOctal.value);
      var decimal = parseInt(octal, 8);
      var binario = decimal.toString(2);
      var hexadecimal = decimal.toString(16);

   divResultadoOctal.innerHTML = `
   <p>O Octal escolhido é: ${octal}<br>
   Em binário é: ${binario}<br>
   Em decimal é: ${decimal}<br>
   Em hexadecimal é: ${hexadecimal}</p>
   `;
}
function calcularDecimal(){

      var decimal = Number (inputDecimal.value);
      var binario = decimal.toString(2);
      var octal = decimal.toString(8);
      var hexadecimal = decimal.toString(16);

   divResultadoDecimal.innerHTML = `
   <p>O Decimal escolhido é: ${decimal}<br>
   Em binário é: ${binario}<br>
   Em octal é: ${octal}<br>
   Em hexadecimal é: ${hexadecimal}</p>
   `;
}
function calcularHexadecimal(){

      var hexadecimal = parseInt(inputHexadecimal.value, 16);
      var decimal = parseInt(hexadecimal, 16);
      var binario = decimal.toString(2);
      var octal = decimal.toString(8);
 

   divResultadoHexadecimal.innerHTML =`
   <p>O Hexadecimal escolhido é: ${hexadecimal}<br>
   Em binário é: ${binario}<br>
   Em octal é: ${octal}<br>
   Em decimal é: ${decimal}</p>
   `;
}

