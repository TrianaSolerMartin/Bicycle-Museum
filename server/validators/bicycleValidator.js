import { check } from 'express-validator';
import { validateResult } from '../helpers/validateHelper.js';

export const validateCreateBicycle = [
    check('model')
        .exists()
        .notEmpty(),
    
    check('speeds')
        .exists()
        .notEmpty()
        .isInt({ min: 1, max: 30 }).withMessage("The speeds must be between 1 and 30"),
    
    check('frame')
        .exists()
        .notEmpty(),
    
    check('electric')
        .exists()
        .notEmpty(),
    
    check('image')
        .exists()
        .notEmpty(), 
        
    (req, res, next) => {
        validateResult(req, res, next)
    } 
];

export const validateUpdateBicycle = [
    check('model')
        .exists()
        .notEmpty(),
    
    check('speeds')
        .exists()
        .notEmpty()
        .isInt({ min: 1, max: 30 }).withMessage("The speeds must be between 1 and 30"),
    
    check('frame')
        .exists()
        .notEmpty(),
    
    check('electric')
        .exists()
        .notEmpty(),
    
    check('image')
        .exists()
        .notEmpty(), 
        
    (req, res, next) => {
        validateResult(req, res, next)
    } 
];