import Joi from 'joi';

export const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
})