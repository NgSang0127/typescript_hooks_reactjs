import React, {useContext, useEffect, useState} from 'react';
import {AppBar, Box, Button, Chip, FormControl, MenuItem, Select, Toolbar, Typography} from "@mui/material";

import WelcomeMessage from "./WelcomeMessage.tsx";
import {ProgressContext} from "../Context/ProgressContext.tsx";
import {ThemeContext} from "../Context/ThemeContext.tsx";
import Login from "./Login.tsx";
import {AuthContext} from "../Context/AuthContext.tsx";



const Navbar = () => {
    const [position, setPosition] = useState<string>("Fullstack-developer");
    const [loginOpen,setLoginOpen]=useState(false);
    //context
    const {lastTime,status}=useContext(ProgressContext);
    const {theme}=useContext(ThemeContext);
    const {authInfo:{isAuthenticated},toggleAuth}=useContext(AuthContext);

    const [time, setTime] = useState<Date>(() => new Date(Date.now()));
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
        return () => clearInterval(timer);
    }, []);

    const handlePositionChange = (e) => {
        setPosition(e.target.value);
    }

    return (
        <AppBar position="static" color={theme}>
            <Toolbar>
                <Box display="flex" justifyContent="space-between" alignItems="center" width={1} py={2}>
                    <Typography variant="h6">My movies</Typography>
                    <Box textAlign="center">
                        <WelcomeMessage position={position} country="Canada"/>
                        <Chip label={`Last time working on this project :${lastTime} -Status: ${status}`}/>
                        <Box mt={1}>
                            <FormControl>
                                <Select value={position} onChange={handlePositionChange}
                                        sx={{color: 'white', borderBottom: "1px solid white"}}>
                                    <MenuItem value="Fullstack-developer">FullStack-developer</MenuItem>
                                    <MenuItem value="Backend-developer">BackEnd-developer</MenuItem>
                                    <MenuItem value="FrontEnd-developer">FrontEnd-developer</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <Box textAlign="center">
                        <Box my={1}>
                            <Typography variant="h6">{time.toUTCString()}</Typography>
                        </Box>
                        <Button variant="contained" color="inherit" onClick={isAuthenticated ? ()=> toggleAuth("") : ()=>setLoginOpen(true)}>
                            {isAuthenticated ? "Logout" : "Login"}
                        </Button>
                    </Box>
                    <Login isOpen={loginOpen} handleClose={(value)=>setLoginOpen(value)}/>
                </Box>
            </Toolbar>

        </AppBar>
    );
};

export default Navbar;
