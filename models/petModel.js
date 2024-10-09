// Simulación de base de datos
const db = {
    pets: [
        {
            id: 1,
            name: 'Rex',
            type: 'dog',
            age: 3,
            breed: 'labrador',
        },
        {
            id: 2,
            name: 'Fido',
            type: 'dog',
            age: 1,
            breed: 'poodle',
        },
        {
            id: 3,
            name: 'Mittens',
            type: 'cat',
            age: 2,
            breed: 'tabby',
        },
    ]
};

// Funciones CRUD para interactuar con la base de datos simulada

// Obtener todas las mascotas
const getAllPets = () => {
    return db.pets;
};

// Obtener una mascota por su ID
const getPetById = (id) => {
    return db.pets.find(pet => pet.id === id);
};

// Agregar una nueva mascota
const addPet = (newPet) => {
    if (!newPet.name || !newPet.type || !newPet.age) {
        throw new Error('Faltan datos para crear una nueva mascota');
    }
    
    const id = db.pets.length > 0 ? db.pets[db.pets.length - 1].id + 1 : 1;
    const pet = { id, breed: newPet.breed || 'Desconocido', ...newPet }; // breed opcional
    db.pets.push(pet);
    return pet;
};

// Actualizar una mascota por su ID
const updatePet = (id, updatedPet) => {
    const index = db.pets.findIndex(pet => pet.id === id);
    if (index !== -1) {
        db.pets[index] = { ...db.pets[index], ...updatedPet };
        return db.pets[index];
    }
    return null;
};

// Eliminar una mascota por su ID
const deletePet = (id) => {
    const index = db.pets.findIndex(pet => pet.id === id);
    if (index !== -1) {
        const deletedPet = db.pets.splice(index, 1)[0];
        return deletedPet;
    }
    return null;
};

// Exportar funciones
export { getAllPets, getPetById, addPet, updatePet, deletePet };

