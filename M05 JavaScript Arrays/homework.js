/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return (array[0]);
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];

}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   return array.map(num => num + 1);
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var fraseCompleta = palabras.join(" ");
   return fraseCompleta;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var contieneElemento = array.includes(elemento);
   return contieneElemento;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var total = 0;
   for (let i = 0; i < arrayOfNums.length; i++) {
      total = total + arrayOfNums[i];
   }
   return total;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var total = 0;
   var promedio = 0;
   for (let i = 0; i < resultadosTest.length; i++) {
      total = total + resultadosTest[i];
   }
   promedio = total / resultadosTest.length;
   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var masGrande = 0;
   for (let i = 0; i < arrayOfNums.length; i++) {
      if (masGrande < arrayOfNums[i]) {
         masGrande = arrayOfNums[i];
      }
   }
   return masGrande;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) {
      return 0;
   }
   var producto = 1;
   for (let i = 0; i < arguments.length; i++) {
      producto *= arguments[i];
   }
   return producto;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador = 0;
   for (let i = 0; i < array.length; i++) {
      if (array[i] > 18) {
         contador++;
      }
   }
   return contador;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia == 1 || numeroDeDia == 7) {
      return "Es fin de semana"
   } else {
      return "Es dia laboral"
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numString = num.toString();
   return numString.charAt(0) === '9';
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var elementoAComparar = array[0];
   for (let i = 0; i < array.length; i++) {
      if (array[i] != elementoAComparar) {
         return false;
      }
   }
   return true;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var mesesABuscar = ["Enero", "Marzo", "Noviembre"];
   var mesesEncontrados = [];

   for (let i = 0; i < array.length; i++) {
      if (mesesABuscar.includes(array[i])) {
         mesesEncontrados.push(array[i]);
      }
   }
   if (mesesEncontrados.length === mesesABuscar.length) {
      return mesesEncontrados;
   } else {
      return "No se encontraron los meses pedidos";
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var producto = 0;
   var tablaDelSeis = [];
   for (let i = 0; i < 11; i++) {
      producto = 6 * i;
      tablaDelSeis.push(producto);
   }
   return tablaDelSeis;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var mayoresACien = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] > 100){
         mayoresACien.push(array[i]);
      }
   }
   return mayoresACien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var resultado = [];
   for (let i = 0; i < 10; i++) {
      num += 2; // Aumentar el número en 2 en cada iteración.
      resultado.push(num); 

      // Verificar si el nuevo valor es igual al número de iteración.
      if (num === i) {
         resultado = "Se interrumpió la ejecución";
         break; // Interrumpir la ejecución del bucle.
      }
   }
   return resultado;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // Debe retornar un arreglo con los valores resultantes de 
   // incrementarlos en 2 siempre que el número y la iteración seas diferentes a 5.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var resultado = [];

   for (let i = 0; i < 10; i++) {
      if (i === 5 || num === 5) {
         continue; // Omitir la iteración cuando i es igual a 5.
      }
      num += 2; // Aumentar el número en 2 en cada iteración.
      resultado.push(num); 
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
