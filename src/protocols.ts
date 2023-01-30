export type EntityMovie = {
    id: number,
    name: string,
    streaming: string,
    genre: string,
    alreadyseen: boolean,
    comment?: string
}

export type EntityUser = {
    id: number,
    name: string,
}

export type User = Omit<EntityUser,"id">
export type Movie = Omit<EntityMovie,"id">