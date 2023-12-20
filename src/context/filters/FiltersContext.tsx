import React, { createContext, useContext, useReducer } from "react";
import {
  GenresFromApi,
  Genres,
  GenreAction,
  RatingSortAction,
} from "../../components/Filters/Filter.type";
import { getFilmGenresFromApi } from "../../api/genres";

interface ProviderProps {
  children: React.ReactNode;
}

const GenresContext = createContext<Genres | null>(null);
const GenresDispatchContext = createContext<React.Dispatch<GenreAction> | null>(
  null
);

const RatingSortContext = createContext<string | null>(null);
const RatingSortDispatchContext =
  createContext<React.Dispatch<RatingSortAction> | null>(null);

export function FiltersProvider({ children }: ProviderProps) {
  const [genres, dispatchGenres] = useReducer(
    genresReducer,
    initialGenresObject
  );
  const [ratingSort, dispatchRatingSort] = useReducer(
    ratingSortReducer,
    "nothing"
  );

  return (
    <RatingSortContext.Provider value={ratingSort}>
      <RatingSortDispatchContext.Provider value={dispatchRatingSort}>
        <GenresContext.Provider value={genres}>
          <GenresDispatchContext.Provider value={dispatchGenres}>
            {children}
          </GenresDispatchContext.Provider>
        </GenresContext.Provider>
      </RatingSortDispatchContext.Provider>
    </RatingSortContext.Provider>
  );
}

export function useGenres() {
  return useContext(GenresContext);
}

export function useGenresDispatch() {
  return useContext(GenresDispatchContext);
}

export function useRatingSort() {
  return useContext(RatingSortContext);
}

export function useRatingSortDispatch() {
  return useContext(RatingSortDispatchContext);
}

function genresReducer(genres: Genres, action: GenreAction) {
  switch (action.type) {
    case "change_genre": {
      const selectedGenres = action.genre as string[];

      if (selectedGenres) {
        let updatedGenres: Genres = {};
        Object.keys(genres).forEach((genre) => {
          updatedGenres[genre] = {
            id: genres[genre].id,
            checkbox: selectedGenres.includes(genre),
          };
        });
        return updatedGenres;
      } else {
        throw new Error("Field 'genre' is not assigned");
      }
    }
    case "reset_genre": {
      const resetedGenres: Genres = {};
      for (const genre in genres) {
        resetedGenres[genre] = {
          ...genres[genre],
          checkbox: false,
        };
      }

      return resetedGenres;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

function ratingSortReducer(ratingSort: string, action: RatingSortAction) {
  switch (action.type) {
    case "change_rating_sort": {
      return action.ratingSort;
    }
    case "reset_rating_sort": {
      return action.ratingSort;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

async function getFilmGenres(): Promise<string[]> {
  const genres: GenresFromApi[] = await getFilmGenresFromApi();
  const genresNamesArray: string[] = genres.map((genre) => genre.name);

  return genresNamesArray.slice(1, 6);
}

const initialGenres: string[] = await getFilmGenres();

const initialGenresObject: Genres = initialGenres.reduce(
  (acc: Genres, genre) => {
    acc[genre] = {
      id: crypto.randomUUID(),
      checkbox: false,
    };
    return acc;
  },
  {}
);
