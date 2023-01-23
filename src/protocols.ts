export type EntityMovie = {
    id: number,
    name: string,
    streaming: string,
    genre: string,
    alreadySaw: boolean,
    comment?: string
}

export type Movie = Omit<EntityMovie,"id">