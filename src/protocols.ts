
export type EntityMovie = {
    id: number,
    name: string,
    rating: number,
    genre: string,
    streaming: string,
    createdAt: Date,
    ratings: EntityRatings[]
}

export type EntityRatings = {
    id: number,
    comment?:String,
    movieId:number,
    userId:number,
    rating:number,
    createdAt:Date
}

export type EntityUser = {
    id: number,
    name: string,
}

export type Rating = Omit<EntityRatings,"id" | "createdAt">
export type User = Omit<EntityUser,"id">
export type Movie = Omit<EntityMovie,"id" | "ratings" | "createdAt">
export type MovieWithoutRatings = Omit<EntityMovie,"ratings">