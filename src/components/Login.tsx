import React, {ChangeEvent, Dispatch, SetStateAction, useContext, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, TextField} from "@mui/material";
import {AuthContext} from "../Context/AuthContext.tsx";

type LoginProps={
    isOpen: boolean;
    handleClose: Dispatch<SetStateAction<boolean>>
}
const Login = ({isOpen,handleClose} :LoginProps) => {
    const [username, setUsername] = useState("");

    //CONTEXT
    const {toggleAuth} = useContext(AuthContext);
    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
    const handleClick = () => {
        toggleAuth(username);
        setUsername("");
        handleClose(false);
    }
    return (
        <Dialog open={isOpen} onClose={()=>handleClose(false)}>
            <DialogContent>
                <TextField label="Username" onChange={handleUsernameChange} value={username} required></TextField>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="contained" onClick={handleClick}
                        disabled={username === ""}>Login</Button>
            </DialogActions>
        </Dialog>
    );
};

export default Login;
