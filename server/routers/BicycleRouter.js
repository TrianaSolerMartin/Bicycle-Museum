import express from 'express';
import { createBicycle, deleteBicycle, getAllBicycles, getOneBicycle, updateBicycle } from '../controllers/BicycleController.js';
import { validateCreateBicycle, validateUpdateBicycle } from '../validators/bicycleValidator.js';

const router = express.Router();

router.get('/', getAllBicycles);

router.delete('/:id', deleteBicycle);

router.post('/', validateCreateBicycle, createBicycle);

router.put('/:id', validateUpdateBicycle, updateBicycle);

router.get('/:id', getOneBicycle);

export default router;