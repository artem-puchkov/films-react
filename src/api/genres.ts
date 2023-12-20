import { token } from "./token";

export async function getFilmGenresFromApi() {
    const fetchGenresUrl = `https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name`;

    try {
        const response = await fetch(fetchGenresUrl, {
            headers: {
                "X-API-KEY": token
            } 
        })
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}