import { EntityMovie, Movie, MovieWithoutRatings } from '../protocols.js';
import { prisma } from "../config/database.js";

export async function insert(movie:Movie) {
    await prisma.movies.create({
        data:movie
    })
}

export async function get():Promise<EntityMovie[]> {
    return await prisma.movies.findMany({
        include:{
            ratings:true
        }
    });
}

export async function getByID(id:string):Promise<MovieWithoutRatings> {
    const movieId = Number(id);

    return await prisma.movies.findFirst({
        include:{
            ratings:true
        },
        where:{
            id:movieId
        }
    })
}

export async function updateMovieRating(rating:number,movieId:number) {
    await prisma.movies.update({
        where:{
            id:movieId
        },
        data:{
            rating:rating
        }
    })
}

export async function del(id:string) {
    const movieId = Number(id);

    await prisma.movies.delete({
        where:{
            id:movieId
        }
    })
}