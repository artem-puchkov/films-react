import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { FilmCardData } from "./FilmCard.type";
import { getPoster } from "../../utils/getPosterPhoto";
import { useNavigate } from "react-router-dom";

interface FilmCardProps {
    film: FilmCardData;
  }

export function FilmCard({ film }: FilmCardProps) {
    const navigate = useNavigate();

    const handleClickOnPoster = () => {
        navigate(`film/${film.id}`);
    }

    return (
        <Card sx={{width: "296px"}} elevation={4}>
            <CardMedia
                component="img"
                height="240px"
                image={getPoster(film.poster_path)}
                onClick={handleClickOnPoster}
                alt="Film image"
                sx={{cursor: "pointer"}}
            />
            <CardContent sx={{display: "flex", justifyContent: "space-between"}}>
                <Box>
                    <Typography variant="h5">
                        {film.title} 
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Рейтинг: {Number(film.vote_average).toFixed(1)}
                    </Typography>
                </Box>
                <IconButton>
                    <StarBorderIcon/>
                </IconButton>
            </CardContent>
        </Card>
    )
}