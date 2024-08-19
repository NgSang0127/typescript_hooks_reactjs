import {createContext, ReactNode} from "react";

type ProgressContextProviderProps = {
    children: ReactNode,
    value?: boolean
}

type ProgressDefaultProps = {
    lastTime: string;
    status: string;
}

const progressDefault = {
    lastTime: "18/8/2024",
    status: "In Progress",
};


export const ProgressContext = createContext<ProgressDefaultProps>(progressDefault);

const ProgressContextProvider = ({children}: ProgressContextProviderProps) => {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <ProgressContext.Provider value={progressDefault}>
            {children}
        </ProgressContext.Provider>
    )
}
export default ProgressContextProvider;