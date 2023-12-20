import { useLoaderData } from "react-router-dom";
import { TypeFilmData } from "./FilmData.types";
import classes from "./FilmData.module.css";
import { getPoster } from "../../utils/getPosterPhoto";
import photo from "../../images/35644-1000x830.jpg"
import { Box, IconButton, List, ListItem, Tab, Table, Typography } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Actor } from "./FilmData.types";

export function FilmData() {
    const { descr, cred } = useLoaderData() as TypeFilmData;

    console.log(descr);
    console.log(cred);

    return (
        <div className={classes.mainPage}>
            <img
                // src={getPoster(descr.poster_path)}
                src={photo}
                alt="Постер фильма"
                style={{height: "400px", width: "300px", marginTop: "24px", marginLeft: "24px"}}
            />
            <Box>
                <Typography 
                    variant="h3"
                    sx={{marginTop: "24px", marginLeft: "24px", display: "inline-block"}}
                >
                    {descr.title}
                </Typography>
                <IconButton sx={{marginBottom: "12px", marginLeft: "20px"}}>
                    <StarBorderIcon fontSize="large"/>
                </IconButton>
                <IconButton sx={{display: "block", marginLeft: "12px"}}>
                    <ArrowBackIcon fontSize="large"/>
                </IconButton>
                <List sx={{marginLeft: "24px"}}>
                    {cred.cast.slice(0, 4).map((actor: Actor) => {
                        return (
                            <ListItem key={actor.cast_id} sx={{padding: 0}}>
                                <Typography variant="h6">
                                    {actor.name}
                                </Typography>
                            </ListItem>
                        )
                    })}
                </List>
                <Typography
                    variant="h4"
                    sx={{marginLeft: "24px", marginTop: "85px"}}
                >
                    Детали
                </Typography>
                <Table>
                    
                </Table>
            </Box>
        </div>
    )
}