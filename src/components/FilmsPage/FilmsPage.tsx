import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { FilmCard } from "../FilmCard/FillmCard";
import { getPopularFilms, getRatedFilms } from "../../api/films";
import { FilmCardData } from "../FilmCard/FilmCard.type";
import { FilmsApiResponse } from "./FilmsPage.type";
import PagesPagination from "../Pagination/Pagination";
import { useRatingSort } from "../../context/filters/FiltersContext";

export function FilmsPage() {
    const [films, setFilms] = useState<FilmCardData[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const ratingSort = useRatingSort() as string;
  
    useEffect(() => {
        async function fetchData() {
            const newPartOfFilms: FilmCardData[] = await getPartOfRatingFilms(currentPage);
            setFilms(newPartOfFilms);
        }

        fetchData();
    }, [currentPage]);

    useEffect(() => {
        async function fetchData() {
            const newPartOfFilms: FilmCardData[] = await getPartOfPopularFilms(currentPage);
            setFilms(newPartOfFilms);
        }
    
        if (ratingSort === "descending") {
            fetchData();
            setCurrentPage(1);
        }
    }, [ratingSort]);

    const handleChangePage = (page: number) => {
        setCurrentPage(page);
    }
  
    return (
        <>
            <Grid container spacing={2} paddingTop={2}>
                {films.map((film: FilmCardData) => (
                    <Grid item key={film.id}>
                        <FilmCard film={film} />
                    </Grid>
                ))}
            </Grid>
            <PagesPagination onPageChange={handleChangePage}/>
        </>
    );
}

let apiPage: number = 1;
let films: FilmCardData[] = await getRatingFilmsFromApi(apiPage);
  
async function getPartOfRatingFilms(page: number) {
    if(page % 3 === 0) {
        apiPage += 1;
        const newPartOfFilms = await getRatingFilmsFromApi(apiPage);
        console.log(newPartOfFilms);
        films = films.concat(newPartOfFilms);
    }

    return (
        page === 1 ?
            films.slice(0, 6) :
            films.slice(6 * (page - 1), 6 * page)
    )
}

async function getRatingFilmsFromApi(apiPage: number): Promise<FilmCardData[]> {
    const filmsApiResponse: FilmsApiResponse = await getRatedFilms(apiPage);

    return filmsApiResponse.results as FilmCardData[];
}

async function getPartOfPopularFilms(page: number) {
    const filmsApiResponse: FilmsApiResponse = await getPopularFilms();
    const films: FilmCardData[] = filmsApiResponse.results as FilmCardData[];
  
    return (
        page === 1 ?
            films.slice(0, 6) :
            films.slice(6 * (page - 1), 6 * page)
    )
}