import {connection} from '../database/database.js';
import { Movie } from '../protocols.js';

export async function insert(movie:Movie) {
    await connection.query(`INSERT INTO movies VALUES (default, $1, $2, $3, $4, $5)`, [
      movie.name,
      movie.alreadySaw,
      (movie.comment === undefined ? null : movie.comment),
      movie.streaming,
      movie.genre
    ]);
}