import { createReducer } from "@reduxjs/toolkit";



const initialState = {
    meals: [],
};

export const reducer = createReducer(initialState, {
    
    addMeal: (state, action)=>{
      state.meals = [...action.payload]
      
    }


})