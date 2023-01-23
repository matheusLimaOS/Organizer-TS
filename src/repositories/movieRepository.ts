import {connection} from '../database/database.js';
import { EntityMovie, Movie } from '../protocols.js';

export async function insert(movie:Movie) {
    await connection.query(`INSERT INTO movies VALUES (default, $1, $2, $3, $4, $5)`, [
      movie.name,
      movie.alreadySaw,
      (movie.comment === undefined ? null : movie.comment),
      movie.streaming,
      movie.genre
    ]);
}

export async function get():Promise<EntityMovie[]> {
    return (await connection.query(`SELECT * FROM movies`)).rows;
}

export async function getByID(id:string):Promise<EntityMovie[]> {
    return (await connection.query(`
        SELECT * FROM movies m
        WHERE m.id = $1
    `,[id])).rows;
}

export async function getAlreadySaw():Promise<EntityMovie[]> {
    return (await connection.query(`
        SELECT * FROM movies m
        WHERE m.alreadySaw = true
    `)).rows;
}

export async function update(id:string,comment:string) {
    return (await connection.query(`
        UPDATE movies
        SET "alreadysaw" = true, comment = $1
        WHERE id = $2
    `,[
        (comment === undefined ? null : comment),
        id
    ])).rows;
}

export async function del(id:string) {
    return (await connection.query(`
        DELETE FROM movies
        WHERE id = $1
    `,[
        id
    ])).rows;
}