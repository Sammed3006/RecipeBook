import {createSlice} from '@reduxjs/toolkit'

export const RecipeBookSlice = createSlice({
    name : "recipebook",
    initialState :[],
    reducers:{
        saveRecipe : (state =[],action)=>{ 
            console.log(action,"action")
           state.push(action.payload)
        },
        
    },
})

export const {saveRecipe,} = RecipeBookSlice.actions
export default RecipeBookSlice.reducer;   