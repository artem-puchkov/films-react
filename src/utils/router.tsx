import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { MainPage } from "../pages/Main/Main";
import { FilmData } from "../pages/FilmData/FilmData";
import { getFilmCredentionals, getFilmDescription } from "../api/films";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <MainPage/>
            },
            {
                path: "film/:filmId",
                element: <FilmData />,
                loader: async ({ params }) => {
                    const descr = await getFilmDescription(params.filmId);
                    const cred = await getFilmCredentionals(params.filmId);
        
                    return { descr, cred };
                }, 
            },
        ]
    }
]);