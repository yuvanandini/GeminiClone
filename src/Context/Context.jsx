import { createContext } from "react";
import run from "../config/Gemini.js";

export const Context = createContext();

const ContextProvider = (props) => {

    const onSent  = async(prompt) => {
        await run(prompt) 
    }

    onSent("What is React js")

    const contextValue = {
        
    }

    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    )

}

export default ContextProvider