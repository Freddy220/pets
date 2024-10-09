Pets API
Descripción
Pets es una API básica para la gestión de mascotas en un refugio. La aplicación está desarrollada en Node.js utilizando Express como framework para el manejo de rutas y controladores. Esta API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre un conjunto de mascotas almacenadas en un objeto que simula una base de datos.

Funcionalidades
Crear una nueva mascota: Permite registrar nuevas mascotas con detalles como nombre, tipo y edad.
Obtener información de todas las mascotas: Permite consultar el listado de todas las mascotas registradas.
Obtener una mascota por ID: Devuelve los detalles de una mascota específica según su ID.
Actualizar los datos de una mascota: Permite modificar la información de una mascota existente.
Eliminar una mascota: Elimina una mascota del listado según su ID.

        Estructura del Proyecto

        pets/
│
├── controllers/
│   └── petController.js    # Controlador que maneja la lógica de la API
│
├── models/
│   └── petModel.js         # Modelo que simula una base de datos de mascotas
│
├── routes/
│   └── petRoutes.js        # Define las rutas para acceder a los endpoints de la API
│
├── app.js                  # Archivo principal de la aplicación
├── package.json            # Archivo de configuración del proyecto y dependencias
└── README.md               # Documentación del proyecto

Tecnologías Utilizadas
Node.js: Entorno de ejecución de JavaScript en el lado del servidor.
Express.js: Framework de Node.js para crear aplicaciones web y APIs.
Nodemon: Herramienta de desarrollo que reinicia automáticamente el servidor cuando hay cambios.
CORS: Manejador de peticiones entre distintos dominios.


Instalación y Ejecución
1-Clona el repositorio:git clone https://github.com/Freddy220/pets.git
2-Entra en la carpeta del proyecto:cd pets
3-Instala las dependencias:npm install
4-Ejecuta la aplicación:npm run dev
El servidor se ejecutará en http://localhost:3000.


Rutas de la API
Método	Ruta	Descripción
GET	/pets	Obtener todas las mascotas
GET	/pets/:id	Obtener una mascota por ID
POST	/pets	Crear una nueva mascota
PUT	/pets/:id	Actualizar los datos de una mascota
DELETE	/pets/:id	Eliminar una mascota
Autor


fetchTest.js
El archivo fetchTest.js contiene funciones para probar y manejar solicitudes HTTP utilizando la API fetch en JavaScript. La función fetch permite realizar solicitudes a un servidor web y manejar respuestas en formato JSON o texto, tanto en operaciones síncronas como asíncronas.

Funcionalidades principales:
Realización de solicitudes GET: Se conecta a un endpoint y obtiene datos desde un servidor.
Manejo de respuestas en JSON: Convierte las respuestas del servidor en formato JSON para su posterior procesamiento.
Manejo de errores: Contiene lógica para gestionar errores de red o respuestas HTTP fallidas.
Pruebas de solicitudes POST: Envío de datos al servidor usando el método POST y manejo de las respuestas adecuadas.
Este archivo es útil para probar la integración de APIs, manejar datos obtenidos desde servidores externos y ejecutar operaciones CRUD dentro de una aplicación que interactúa con servidores remotos.


Desarrollado por Freddy.


































