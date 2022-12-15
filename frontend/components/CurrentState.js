import React, { createContext, useContext, useState } from 'react'

const stateContext = createContext()

export function ProvideCurrentState({children}) {
    const state = useProvideCurrentState();
    return (
    <stateContext.Provider value={state}> {children} </stateContext.Provider>
  )
}

export function useCurrentState(){
    return useContext(stateContext);
}

function useProvideCurrentState()
{
    const [currentState,setCurrentState] = useState("notLoggedIn");

    const changeCurrentState=(e)=>{
        setCurrentState(e);
    };
    return {
        currentState,
        changeCurrentState
    }
}
