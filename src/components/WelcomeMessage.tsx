import React, {useContext} from 'react';
import {Box} from "@mui/material";
import {AuthContext} from "../Context/AuthContext.tsx";

type WelcomeMessageProps={
    position:string;
    country?:string;
}
const WelcomeMessage = ({position,country="vietnam"}: WelcomeMessageProps) => {
    const {authInfo:{username}}=useContext(AuthContext);
    return (
        <Box mb={1}>
            Welcome {username}-{position} from {country}
        </Box>
    );
};

export default WelcomeMessage;
