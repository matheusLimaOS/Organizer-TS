import { EntityMovie, Movie } from '../protocols.js';
import { prisma } from "../config/database.js";

export async function insert(movie:Movie) {
    await prisma.movies.create({
        data:movie
    })
}

export async function get():Promise<EntityMovie[]> {
    return await prisma.movies.findMany();
}

export async function getByID(id:string):Promise<EntityMovie[]> {
    const movieId = Number(id);

    return await prisma.movies.findMany({
        where:{
            id:movieId
        }
    })
}

export async function getAlreadySaw():Promise<EntityMovie[]> {
    return await prisma.movies.findMany({
        where:{
            alreadyseen:true
        }
    })
}

export async function update(id:string,comment:string) {
    const movieId = Number(id);

    return await prisma.movies.update({
        data:{
            comment
        },
        where:{
            id:movieId
        }
    })
}

export async function del(id:string) {
    const movieId = Number(id);

    return prisma.movies.delete({
        where:{
            id:movieId
        }
    })
}