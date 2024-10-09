// Importar módulos con sintaxis ES6
// app.js
import express from 'express';
import cors from 'cors';
import { router as petRoutes } from './routes/petRoutes.js';  // Ajuste de la importación

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Usar las rutas
app.use('/pets', petRoutes); // Mantén esto como está

// Ruta para la raíz
app.get('/', (req, res) => {
    res.send('Bienvenido al refugio de mascotas. Usa /pets para acceder a las mascotas.');
});

// Definir el puerto
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


