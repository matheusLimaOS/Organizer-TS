import { prisma } from "../config/database.js";
import { Rating } from "../protocols.js";

export async function insertRatingDB(rating:Rating) {
    await prisma.ratings.create({
        data:{
            movies:{connect:{id:rating.movieId}},
            users:{connect:{id:rating.userId}},
            comment:rating.comment as string,
            rating:rating.rating,
        }
    })
}

export async function getRatingOfMovie(movieId:number) {
    return await prisma.ratings.aggregate({
        where:{
            movieId:movieId
        },
        _sum:{
            rating:true
        },
        _count:{
            id:true
        }
    })
}

export async function getRatingByIds(movieId:number, userId:number) {
    return await prisma.ratings.findFirst({
        where:{
            movieId,
            userId
        }
    })
}

export async function updateRating(id:number,body:Rating) {
    return await prisma.ratings.update({
        where:{
            id
        },
        data:{
            rating:body.rating
        }
    })
}


export async function deleteRatingByMovieId(id:number) {
    return await prisma.ratings.delete({
        where:{
            id
        }
    })
}