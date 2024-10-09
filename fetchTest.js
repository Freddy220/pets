
import fetch from 'node-fetch';
fetch('http://localhost:3000/pets')
 .then(response => response.json())
 .then(data => {
   console.log('Mascotas obtenidas:', data);
 })
 .catch(error => {
   console.error('Error al obtener mascotas:', error);
 });


    

