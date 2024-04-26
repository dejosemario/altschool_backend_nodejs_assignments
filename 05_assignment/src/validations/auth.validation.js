import Joi from 'joi';

export const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
})

export const postUpdateSchema = Joi.object({
    title: Joi.string().min(4).required(),
    body: Joi.string().min(10).required()
})

export const createPostSchema = Joi.object({
    title: Joi.string().required(),
    body: Joi.string().required(),
})