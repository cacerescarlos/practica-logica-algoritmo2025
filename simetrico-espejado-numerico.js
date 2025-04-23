/*
  Problema: Generar un patrón numérico simétrico de longitud impar "n".
  El patrón debe reflejarse respecto a su centro y los dígitos deben incrementarse de forma cíclica de 0 a 9.
  Por ejemplo, para n = 13, se espera una secuencia como esta:

    [7, 8, 9, 0, 1, 2, 3, 4, 3, 2, 1, 0, 9]

  Esta secuencia refleja un crecimiento desde un valor medio hacia un punto central y luego un retroceso en espejo.
  El dígito central es el más alto en la progresión y el resto del array es simétrico respecto a él.

1 = 1<br>
232 = 3<br>
34543 = 5<br>
567898765 = 9<br>
67890 1 09876 = 11<br>
7890 12 3 21 0987 = 13<br>

--sol: 22-04-2025

*/


var n = 13; // Longitud impar deseada del patrón
var result = new Array(n); // Inicializa un arreglo de tamaño n

// Calcula un valor de partida desde el centro que sea menor a 10
var media = parseInt(n / 2);
while (media >= 10) {
  media = parseInt(media / 2);
}

// Determina el valor inicial, avanzando desde media + 1 o reiniciando a 0 si parte de 9
var val = media === 9 ? 0 : media + 1;

// Rellena el arreglo simétricamente desde los extremos hacia el centro
for (let i = 0, y = n - 1; i < parseInt(n / 2); i++, y--) {
  result[i] = val;
  result[y] = val;
  val = val === 9 ? 0 : val + 1;
}

// Asigna el valor central, que corresponde al pico de la progresión
result[parseInt(n / 2)] = val;

// Muestra el resultado en consola
console.log(result);
