import joi from 'joi';
import { User } from '../protocols';

export const insertUserSchema = joi.object<User>({
    name: joi.string().required(),
});