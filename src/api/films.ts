export async function getRatedFilms(page: number) {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWQ3MzljMDc2OTc1MGRmNjU5N2M2OTU5NjIzNDkxYiIsInN1YiI6IjY1NjY0MmVkM2Q3NDU0MDBlYTI2ZTY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yR58VtCmogm6MsRUdAJNBDPQkjF7zQcMYcYlBCkKGdo'
        }
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
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWQ3MzljMDc2OTc1MGRmNjU5N2M2OTU5NjIzNDkxYiIsInN1YiI6IjY1NjY0MmVkM2Q3NDU0MDBlYTI2ZTY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yR58VtCmogm6MsRUdAJNBDPQkjF7zQcMYcYlBCkKGdo'
        }
      };
      
    const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    try {
        const response = await fetch(url, options);
        return await response.json();
    } catch (e) {
        console.error(e);
    }
}

export async function getFilmDescription(id?: string) {
  const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWQ3MzljMDc2OTc1MGRmNjU5N2M2OTU5NjIzNDkxYiIsInN1YiI6IjY1NjY0MmVkM2Q3NDU0MDBlYTI2ZTY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yR58VtCmogm6MsRUdAJNBDPQkjF7zQcMYcYlBCkKGdo'
      }
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
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWQ3MzljMDc2OTc1MGRmNjU5N2M2OTU5NjIzNDkxYiIsInN1YiI6IjY1NjY0MmVkM2Q3NDU0MDBlYTI2ZTY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yR58VtCmogm6MsRUdAJNBDPQkjF7zQcMYcYlBCkKGdo'
    }
  };

  const fetchUrl = `https://api.themoviedb.org/3/movie/${id}/credits?language=ru-RU`;
  try {
      const response = await fetch(fetchUrl, options);
      return await response.json();
  } catch (error) {
      console.log(error);
  }
}