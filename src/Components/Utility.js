//GENERADOR DE ID UNICO
export const idGenerate = () => {
  const radom = Math.random().toString(36).substring(2);
  const fecha = Date.now().toString(36);

  return fecha + radom;
};

//PONER PRIMERA LETRA EN MAYUSCULAS DE CADA PALABRA EN EL NOMBRE
export const toUpperString = (string) => {

  const palabras = string.split(' ');// Dividir la cadena en palabras
  const palabrasMayusculas = palabras.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()); // Convertir la primera letra de cada palabra en mayúscula
  return palabrasMayusculas.join(' '); // Unir las palabras en una cadena
};

//CONVERTIR HORA MILITAR A HORA ESTANDAR
export const horaEstándar = (horaMilitar) => {
  // Dividir la hora y los minutos
  var hora = parseInt(horaMilitar.substring(0, 2));
  var minutos = horaMilitar.substring(2);

  // Establecer el período (AM o PM)
  var periodo = hora >= 12 ? 'PM' : 'AM';

  // Convertir de formato militar a formato estándar
  hora = hora % 12;
  hora = hora ? hora : 12; // La hora "0" es "12"
  minutos = minutos < 10 ? '0' + minutos : minutos;

  // Devolver la hora en formato estándar
  return hora  + minutos + ' ' + periodo;
}


//FORMATO FECHA/HORA
export const formatoFecha = (fecha) => {

  const separar = fecha.split("T");
  const hora = horaEstándar(separar[1]);

  return separar[0] + " " + hora;

}