import React, {useContext} from 'react';
import {Fab} from "@mui/material";
import {ThemeContext} from "../Context/ThemeContext.tsx";

const ToggleThemeBtn = () => {
    const {theme,toggleTheme}=useContext(ThemeContext);


    return (
        <Fab color="primary" sx={{position:"fixed",right:"20px",bottom:"20px"} } variant="extended"
        onClick={()=>toggleTheme(theme=== "primary" ? "secondary" :"primary" )}
        >
            Toggle Theme
        </Fab>
    );
};

export default ToggleThemeBtn;
