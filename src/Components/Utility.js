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
const horaEstándar = (horaMilitar) => {
  // Dividir la hora y los minutos
  let hora = parseInt(horaMilitar.substring(0, 2));
  let minutos = horaMilitar.substring(2);

  // Establecer el período (AM o PM)
  let periodo = hora >= 12 ? 'PM' : 'AM';

  // Convertir de formato militar a formato estándar
  hora = hora % 12;
  hora = hora ? hora : 12; // La hora "0" es "12"
  minutos = minutos < 10 ? '0' + minutos : minutos;

  // Devolver la hora en formato estándar
  return hora + minutos + ' ' + periodo;
}

//FORMATO FECHA/HORA ESTANDAR
export const formatoFecha = (fecha) => {

  const separar = fecha.split("T");
  const hora = horaEstándar(separar[1]);

  return separar[0] + " " + hora;

}

//CONVERTIR HORA ESTANDAR A HORA MILITAR
const horaMilitar = (horaEstandar) => {
  let partesHora = horaEstandar.split(" ");
  let partesTiempo = partesHora[1].split(':');
  let horas = parseInt(partesTiempo[0]);
  let minutos = parseInt(partesTiempo[1]);
  let segundos = 0;

  if (partesHora[2] === 'PM' && horas !== 12) {
    horas += 12;
  }
  else if (partesHora[2] === 'AM' && horas !== 12) {
    horas = 0;
  }

  horas = horas < 10 ? '0' + horas : horas;
  minutos = minutos < 10 ? '0' + minutos : minutos;
  segundos = segundos < 10 ? '0' + segundos : segundos;

  let hora = horas + ':' + minutos + ':' + segundos;

  return hora;

}

// //FORMATO FECHA / HORA MILITAR
export const fechaHora = (horaEstandar) => {

  const hora = horaMilitar(horaEstandar);
  const fecha = horaEstandar.split(" ");

  return fecha[0] + "T" + hora;

}