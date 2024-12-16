fetch('https://rickandmortyapi.com/api/character')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json(); 
  })
  .then(data => {
    console.log('Datos recibidos:', data);
    mostrarPersonaje(data);
  })
  .catch(error => {
    console.error('Error al conectarse a la API:', error);
  });

let mostrarPersonaje = (data) => {
  let tarjeta = "";
  for (let i = 0; i < 20; i++) {
    tarjeta += `
      <div class="card" style="width: 18rem;">
        <img src="${data.results[i].image}" class="card-img-top" alt="${data.results[i].name}">
        <div class="card-body">
          <h5 class="card-title">${data.results[i].name}</h5>
          <p class="card-text">Status: ${data.results[i].status}</p>
        </div>
      </div>
    `;
  }
  document.getElementById("mostrarlista").innerHTML = tarjeta;
};




