//GENERADOR DE ID UNICO
export const idGenerate = () => {
  const radom = Math.random().toString(36).substring(2);
  const fecha = Date.now().toString(36);

  return fecha + radom;
};

//PONER PRIMERA LETRA EN MAYUSCULAS
export const toUpperString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
