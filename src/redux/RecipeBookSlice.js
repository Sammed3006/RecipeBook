import {createSlice} from '@reduxjs/toolkit'

export const RecipeBookSlice = createSlice({
    name : "recipebook",
    initialState :[],
    reducers:{
        saveRecipe : (state =[],action)=>{ 
           state.push()
        },
        
    },
})

export const {saveRecipe,} = RecipeBookSlice.actions
export default RecipeBookSlice.reducer;   