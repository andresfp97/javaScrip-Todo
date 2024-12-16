 const ahora = new Date();
 console.log(ahora)

  const horaJeni = new Date (2001, 12, 28, 6, 0, 0);
  console.log(horaJeni);

  const horaAnder = new Date (1997, 11, 18);
  console.log(horaAnder);

  const fecha = new Date();
  fecha.setFullYear(2024)
  fecha.setMonth(11)
  fecha.setDate(8)
  console.log(fecha);

  console.log("hora anderson: "+ horaAnder.getDay());
  console.log("cadena: " + horaAnder.toDateString());
  console.log("Cadena hora actual" + horaAnder.toLocaleTimeString());
  console.log("Cadena hora actual corta " + horaAnder.toLocaleString);
  console.log("Milisegundos de anderson " + horaAnder.getTime());


  const milliDia = 1000 * 60 * 60 * 24
  console.log(Math.floor((horaJeni.getTime()-horaAnder.getTime())/milliDia));


