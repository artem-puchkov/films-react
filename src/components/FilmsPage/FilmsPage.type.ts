import { FilmCardData } from "../FilmCard/FilmCard.type";

export interface FilmsApiResponse {
    page: number,
    results: FilmCardData[],
    total_pages: number,
    total_results: number
}