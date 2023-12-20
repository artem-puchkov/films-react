import React, { useState } from "react";
import classes from './Main.module.css'
import { Box } from "@mui/material";
import { FiltersProvider } from "../../context/filters/FiltersContext";
import { Filter } from "../../components/Filters/Filter";
import { FilmsPage } from "../../components/FilmsPage/FilmsPage";
import { ModalWindow } from "../../components/Modal/ModalWindow";
import { SignupForm } from "../../components/Signup/SignupForm";

export function MainPage() {
    const [signed, setSigned] = useState(false);

    return (
        <div className={classes.mainPage}>
            <Box sx={{display: "flex", gap: "35px"}}>
                <FiltersProvider>
                    <Filter/>
                </FiltersProvider>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <FiltersProvider>
                        <FilmsPage/>
                    </FiltersProvider>
                </Box>
            </Box>
            {signed && <ModalWindow>
            <SignupForm onSigned={() => setSigned(false)} />
            </ModalWindow>}
        </div>
    );
}