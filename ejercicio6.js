function saludarPersona(nombre, idioma = 'es') {
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

console.log(saludarPersona('Carlos', 'es')); 
console.log(saludarPersona('John', 'en')); 
console.log(saludarPersona('Marie', 'fr')); 
