"use client";

import React, { useState, useReducer } from "react";
import { reducer } from "./reducer";

export const CreatePostContext = React.createContext();

const CreatePostProvider = ({ children }) => {
  const initialState = {
    postTitle: "",
    intro: "",
    coverImage: "",
    newSection: true,
    sections: [],
    editSection: false,
    editData: {},
  };
  // setTimeout(() => console.log(sections), 2000);

  // const [sections, setSections] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CreatePostContext.Provider
      value={{ dispatch, state }}
    >
      {children}
    </CreatePostContext.Provider>
  );
};

export default CreatePostProvider;
