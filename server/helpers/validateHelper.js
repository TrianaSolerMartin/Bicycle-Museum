import { validationResult } from 'express-validator';

export const validateResult = (req, res, next) => {
    const errors = validationResult(req); //validationResult la crea express-validator
    if (errors.isEmpty()) {
        next();
    } else {
        return res.status(422).json({ errors: errors.array() });
    }
};