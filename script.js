// Creamos un slick event relacionado al button
// Creamos una numero aleatorio del 0 - 15, el cual iteraremos 6 veces por el "myArray" para sacar 6 valores aleatorios y guardarlos como una string en la variable "color1".
// hacemos lo mismo con "color2"
// asignasmo un linear gradient al body con cada click en el button.

document.querySelector("#submit").addEventListener("click", () => {
  const hexadecimalCode = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  let randomIndex1; //Generaremos un index number entre 0 y el 15
  let randomIndex2;
  let color1 = ""; //se rellenara con 6 valores que almacenaremos indivudualemtne en randomIndex1.
  let color2 = "";
  let i;

  for (i = 0; i < 6; i++) {
    //queremos sacar solo 6 valores del array para formar un #hexadecimal
    randomIndex1 = Math.floor(Math.random() * hexadecimalCode.length); //genramos un número entre 0 y 15.
    color1 += hexadecimalCode[randomIndex1]; //asignamos a color1 elemento del array index positions entre el 0 y 15. Se repetir 6 veces.

    randomIndex2 = Math.floor(Math.random() * hexadecimalCode.length);
    color2 += hexadecimalCode[randomIndex2];
  }
  document.body.style.background = `linear-gradient(to left, #${color1}, #${color2})`;
});
