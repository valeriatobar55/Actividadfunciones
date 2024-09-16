function saludar(nombre, idioma = 'es') {
    if (idioma === 'es') {
      return `Hola, ${nombre}!`;
    } else if (idioma === 'en') {
      return `Hello, ${nombre}!`;
    } else if (idioma === 'fr') {
      return `Bonjour, ${nombre}!`;
    } else {
      return `Hola, ${nombre}!`; 
    }
  }
  
  console.log(saludar('Carlos')); 
  console.log(saludar('John', 'en')); 
  console.log(saludar('Marie', 'fr')); 
  

  const saludarFlecha = (nombre, idioma = 'es') => {
    if (idioma === 'es') {
      return `Hola, ${nombre}!`;
    } else if (idioma === 'en') {
      return `Hello, ${nombre}!`;
    } else if (idioma === 'fr') {
      return `Bonjour, ${nombre}!`;
    } else {
      return `Hola, ${nombre}!`; 
    }
  };
  
  console.log(saludarFlecha('Carlos','en')); 
  console.log(saludarFlecha('John', 'en')); 
  console.log(saludarFlecha('Marie', 'fr')); 
  
