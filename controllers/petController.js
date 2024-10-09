// Importar funciones del modelo de mascotas
import { getAllPets, getPetById, addPet, updatePet as updatePetModel, deletePet as deletePetModel } from '../models/petModel.js'; // Ajusta la ruta según tu estructura

// Obtener todas las mascotas
export const getPets = (req, res) => {
    res.json(getAllPets());
};

// Obtener una mascota por ID
export const getPet = (req, res) => {
    try {
        const petId = parseInt(req.params.id);  // Obtener el ID desde los parámetros
        const pet = getPetById(petId);  // Buscar mascota por ID
        if (pet) {
            res.status(200).json(pet);  // Si se encuentra, responder con la mascota
        } else {
            res.status(404).json({ message: 'Mascota no encontrada' });  // Si no se encuentra, devolver 404
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la mascota', error: error.message });
    }
};

// Crear una nueva mascota
export const createPet = (req, res) => {
    const newPet = req.body;
    const pet = addPet(newPet);
    res.status(201).json(pet);
};

// Actualizar una mascota existente
export const updatePetController = (req, res) => {
    const updatedPet = req.body;
    const pet = updatePetModel(parseInt(req.params.id), updatedPet); // Llamar a la función del modelo
    if (pet) {
        res.status(200).json(pet);
    } else {
        res.status(404).json({ message: 'Mascota no encontrada' });
    }
};

// Eliminar una mascota existente
export const deletePetController = (req, res) => {
    const petId = parseInt(req.params.id);
    const deletedPet = deletePetModel(petId);
    if (deletedPet) {
        res.status(200).json(deletedPet);
    } else {
        res.status(404).json({ message: 'Mascota no encontrada' });
    }
};
