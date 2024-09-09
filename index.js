const express = require('express');
const app = express();
const port = 3000;

// Definir una ruta para la API que responde con "Hola Mundo"
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

// Iniciar el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
