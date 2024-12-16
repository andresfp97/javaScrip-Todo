const fetchData = async () => {
    const url = 'https://rickandmortyapi.com/api/character';
    try {
      const response = await fetch(url); 
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
        const data = await response.json(); 
        return  data
    } catch (error) {
      console.error('Error al conectar con la API:', error);
    }
  };

  const manipulateData = async () => {
    const data = await fetchData();    
    console.log(data.results[0].id) ;
  };
  
  manipulateData();
  