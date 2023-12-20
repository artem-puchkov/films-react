import { API } from "./api";

export async function getRatedFilms(page: number) {
  const options = {
    method: API.OPTIONS.METHOD.GET,
    headers: {
      accept: API.OPTIONS.HEADERS.ACCEPT,
      Authorization: API.TOKEN,
    },
  };

  const url = `https://api.themoviedb.org/3/movie/top_rated?language=ru-RU&page=${page}`;
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (e) {
    console.error(e);
  }
}

export async function getPopularFilms() {
  const options = {
    method: API.OPTIONS.METHOD.GET,
    headers: {
      accept: API.OPTIONS.HEADERS.ACCEPT,
      Authorization: API.TOKEN,
    },
  };

  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (e) {
    console.error(e);
  }
}

export async function getFilmDescription(id?: string) {
  const options = {
    method: API.OPTIONS.METHOD.GET,
    headers: {
      accept: API.OPTIONS.HEADERS.ACCEPT,
      Authorization: API.TOKEN,
    },
  };

  const fetchUrl = `https://api.themoviedb.org/3/movie/${id}?language=ru-RU`;
  try {
    const response = await fetch(fetchUrl, options);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getFilmCredentionals(id?: string) {
  const options = {
    method: API.OPTIONS.METHOD.GET,
    headers: {
      accept: API.OPTIONS.HEADERS.ACCEPT,
      Authorization: API.TOKEN,
    },
  };

  const fetchUrl = `https://api.themoviedb.org/3/movie/${id}/credits?language=ru-RU`;
  try {
    const response = await fetch(fetchUrl, options);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
