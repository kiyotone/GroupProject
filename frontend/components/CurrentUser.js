import React, { createContext, useContext, useState } from 'react'

const userContext = createContext()

export function ProvideCurrentUser({children}) {
    const state = useProvideCurrentUser();

    return ( 
       <userContext.Provider value={state}>{children}</userContext.Provider>
    )


}



export function useCurrentUser(){
    return useContext(userContext);
}

function useProvideCurrentUser(){
    const [USERNAME,setUser] = useState("")
    
    const CHANGE_USER = (e) =>{
        setUser(e);
    }

    return {
        USERNAME,
        CHANGE_USER,
        
        
    }

}

