import joi from 'joi';
import { Movie } from '../protocols';

export const insertMovieSchema = joi.object<Movie>({
    name: joi.string().required(),
    streaming: joi.string().required(),
    genre: joi.string().required(),
    alreadySeen: joi.bool().required(),
    comment: joi.string().max(250)
});