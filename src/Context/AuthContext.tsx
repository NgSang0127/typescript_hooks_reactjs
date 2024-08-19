import {createContext, ReactNode, useReducer} from "react";
import {authReducer, AuthState} from "../reducer/AuthReducer.ts";
import {AuthActionType} from "../reducer/types.ts";

type AuthContextProps={
    children:ReactNode;
}

type AuthContextDefault={
    authInfo: AuthState;
    toggleAuth: (username:string)=>void
}
const authDefault={
    isAuthenticated:false,
    username:"",
}
export const AuthContext=createContext<AuthContextDefault>({
    authInfo:authDefault,
    toggleAuth :()=>{}
})

const AuthContextProvider=({children}:AuthContextProps)=>{
    const [authInfo,dispatch]=useReducer(authReducer,authDefault);

    const toggleAuth=(username:string)=>{
        dispatch({type:AuthActionType.TOGGLE_AUTH,payload:username});

    }
    const authContextData={
        authInfo,
        toggleAuth,
    }
    return  (

        // eslint-disable-next-line react/react-in-jsx-scope
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;