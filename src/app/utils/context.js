"use client"

import React, { createContext, useReducer, useState } from "react";
import { reducer } from "./reducer";


export const StateContext = React.createContext();

export const ContextProvider = ({ children }) => {  
  
  const [isAuth, setIsAuth] = useState(true);
    const defaultState = {
        navOpen: false,
        currentPost: {}
    }

    
    
    const [state, dispatch] = useReducer(reducer, defaultState)

  return (
    <>
      <StateContext.Provider value={{isAuth, setIsAuth, state, dispatch}}>{children}</StateContext.Provider>
    </>
  );
};


