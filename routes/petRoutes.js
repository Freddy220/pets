// petRoutes.js
import { Router } from 'express';
import { getPets, getPet, createPet, updatePetController as updatePet, deletePetController as deletePet } from '../controllers/petController.js';

const router = Router();

router.get('/', getPets);
router.get('/:id', getPet);
router.post('/', createPet);
router.put('/:id', updatePet);
router.delete('/:id', deletePet);

export { router };  // Sin default

