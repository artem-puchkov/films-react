export interface Genres {
    [key: string]: {
        id: string,
        checkbox: boolean
    }
}

export interface GenreAction {
    type: string;
    genre?: string[];
}

export interface RatingSortAction {
    type: string;
    ratingSort: string
}

export interface GenresFromApi {
    name: string,
    slug: string
}
