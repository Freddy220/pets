import express from 'express';
import cors from 'cors';
import petRoutes from './routes/pets.routes.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
const port = 3000;

/* Global middlewares */
app.use(cors());
app.use(express.json());

/* Swagger setup */
const swaggerOptions = {
    definition: {
        openapi: '3.0.0', // especifica la versión de OpenAPI
        info: {
            title: 'API de Refugio de Mascotas', // título de tu API
            version: '1.0.0', // versión de tu API
            description: 'Documentación de la API para el refugio de mascotas', // descripción de tu API
        },
        servers: [
            {
                url: `http://localhost:${port}`, // URL del servidor
            },
        ],
    },
    apis: ['./routes/*.js'], // rutas de los archivos que contienen las anotaciones de Swagger
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Configura Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* Routes */
app.use('/pets', petRoutes);

/* Server setup */
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`));
}

export default app;












