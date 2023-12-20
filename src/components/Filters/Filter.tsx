import React, { ChangeEvent, useState } from "react";
import classes from './Filter.module.css';
import imgSrc from '../../images/ArrowDropDownFilled.svg';
import { useGenres, useGenresDispatch, useRatingSort, useRatingSortDispatch } from "../../context/filters/FiltersContext";
import { Genres, GenreAction, RatingSortAction } from "../../components/Filters/Filter.type";
import { Autocomplete, Box, Checkbox, IconButton, Paper, Slider, TextField, Typography } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ClearIcon from '@mui/icons-material/Clear';


export function Filter() {
    const [yearValue, setYearValue] = useState<number[]>([1900, 2023])

    const ratingSort = useRatingSort() as string;
    const RatingSortDispatch = useRatingSortDispatch() as React.Dispatch<RatingSortAction>;

    const genres = useGenres() as Genres;
    const genresDispatch = useGenresDispatch() as React.Dispatch<GenreAction>;

    const handleGenreChange = (_: ChangeEvent<{}>, selectedGenres: string[]) => {
        genresDispatch({
            type: 'change_genre',
            genre: selectedGenres
        })
    }

    const handleRateSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
        RatingSortDispatch({
            type: 'change_rating_sort',
            ratingSort: event.target.value
        })
    }

    const handleYearValueChange = (_: Event, newValue: number | number[]) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        
        setYearValue(newValue);
    }

    const resetAllFilters = () => {
        genresDispatch({
            type: 'reset_genre'
        })
        RatingSortDispatch({
            type: 'reset_rating_sort',
            ratingSort: 'nothing'
        })
        
        setYearValue([1900, 2023]);
    }

    return (
        <div className={classes.block}>
            <Typography 
                variant="h6" 
                sx={{fontWeight: 500, display: "inline-block", margin: "20px 160px 0 15px"}}
            >
                Фильтры
            </Typography>
            <IconButton onClick={resetAllFilters} sx={{padding: 0}}>
                <ClearIcon/>
            </IconButton>
            <p className={classes.sortTitle}>Сортировать:</p>
            <div className={classes.selctWrapper}>
                <select className={classes.sortSelect} value={ratingSort} onChange={handleRateSort}>
                    <option value="nothing">-</option>
                    <option value="descending">Популярные по убыванию</option>
                    <option value="increasing">Популярные по возрастанию</option>
                </select>
                <img className={classes.image} src={imgSrc} alt="->"/>
            </div>
            <Typography 
                variant="body1"
                sx={{marginLeft: "15px", marginTop: "30px", marginBottom: "50px"}}
            >
                Год релиза:
            </Typography>
            <Box width="268px" marginLeft="15px">
                <Slider
                    size="small"
                    value={yearValue}
                    defaultValue={[1950, 2000]}
                    onChange={handleYearValueChange}
                    valueLabelDisplay="on"
                    disableSwap
                    min={1900}
                    max={2023}
                />
            </Box>
            <Autocomplete
                multiple
                options={Object.keys(genres)}
                value={Object.keys(genres).filter((genre) => genres[genre].checkbox)}
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={(<CheckBoxOutlineBlankIcon fontSize="small" />)}
                        checkedIcon={(<CheckBoxIcon fontSize="small" />)}
                        style={{ marginRight: 6 }}
                        checked={selected}
                      />
                      {option}
                    </li>
                )}
                onChange={handleGenreChange}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Жанры"  
                    />
                )}
                sx={{width: "268px", marginLeft: "15px", marginTop: "30px"}}
                disableCloseOnSelect
                PaperComponent={({ children }) => (
                    <Paper elevation={5}>
                      {children}
                    </Paper>
                )}
            />
        </div>
    );
}
