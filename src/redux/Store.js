import { configureStore } from "@reduxjs/toolkit";
import recipebookReducer from "./RecipeBookSlice"

export default  configureStore({
    reducer :{
        recipebook:recipebookReducer
    },
})
 