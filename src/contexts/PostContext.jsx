import React, { createContext,useState } from "react";


export const PostContext = createContext({
  postDetailState : [],
  addNewPost : () => {},
  editSelectedPost : () => {},
  deleteSelectedPost : () => {} 
});

