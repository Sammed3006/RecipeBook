import React from 'react'
import { useSelector } from 'react-redux'
import RecipeItem from './RecipeItem'
import "./saved.css"
 

const Saved=()=> {
    const  savedRecipe=useSelector(state => state.recipebook)
    console.log(savedRecipe)
  return (
    <>
    <div className="savedTitle">
        <h1>Saved Recipe</h1>
        </div>
    <div className="row row-cols-1 row-cols-md-3 g-4">
        
    {savedRecipe.map(item => (
      <RecipeItem name={item.recipe.label} image={item.recipe.image} ingredientLines={item.recipe.ingredientLines}/>
    ))}
   
   </div></>
  )
}

export default Saved
