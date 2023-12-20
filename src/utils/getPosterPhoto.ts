export function getPoster(posterPath: string | undefined) {
    const baseUrl = "https://image.tmdb.org/t/p/w300/";
    return baseUrl + posterPath;
}